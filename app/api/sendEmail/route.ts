import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "60 s"),
  analytics: true,
});

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .max(50, "Le nom est trop long"),
  email: z.string().email("Adresse email invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message est trop long"),
  captcha: z.string(),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const { success } = await rateLimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Trop de requêtes, veuillez réessayer plus tard." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation échouée",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, captcha } = validation.data;

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: captcha,
        }),
      }
    );

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "Échec de la vérification reCAPTCHA veuillez réessayer" },
        { status: 400 }
      );
    }

    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_PORT ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      console.error("❌ Erreur: Variables d'environnement non définies.");
      return NextResponse.json(
        { error: "Erreur de configuration du serveur" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: "📩 Nouveau message de contact",
      text: message,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(
      "❌ Erreur d'envoi d'email:",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
