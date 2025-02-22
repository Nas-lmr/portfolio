import nodemailer from "nodemailer";

export async function sendEmail(name: string, email: string, message: string) {
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_PORT ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    console.error("❌ Erreur: Variables d'environnement non définies.");
    return false;
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

  try {
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
    return true;
  } catch (error) {
    console.error("❌ Erreur d'envoi d'email:", error);
    return false;
  }
}
