"use server";

import { verifyCaptchaToken } from "@/utils/captcha";
import { sendEmail } from "@/utils/mailer";
import { rateLimit } from "@/utils/rateLimite";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  captcha: z.string(),
});

export async function contactAction(token: string | null, formData: FormData) {
  if (!token) {
    return {
      success: false,
      message: "Token not found",
    };
  }

  const captchaData = await verifyCaptchaToken(token);
  if (!captchaData) {
    return {
      success: false,
      message: "Captcha failed",
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Captcha failed",
      errors: !captchaData.success ? captchaData["error-codes"] : null,
    };
  }

  const body = Object.fromEntries(formData);
  const validation = contactSchema.safeParse({ ...body, captcha: token });
  if (!validation.success) {
    return {
      success: false,
      message: "Validation échouée",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validation.data;
  const ip = "anonymous";
  const { success } = await rateLimit(ip);
  if (!success)
    return {
      success: false,
      message: "Trop de requêtes, veuillez réessayer plus tard.",
    };

  const emailSuccess = await sendEmail(name, email, message);
  if (!emailSuccess)
    return { success: false, message: "Erreur d'envoi de l'email" };

  return { success: true, message: "Le message a été envoyé !" };
}
