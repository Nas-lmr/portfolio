"use client";

import { useState } from "react";
import * as z from "zod";

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
});

export default function ContactForm() {
  const emailContact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setResponseMessage("");

    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMessage("Votre message a été envoyé avec succès");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setResponseMessage("Une erreur s'est produite");
    }
    setLoading(false);
  };

  return (
    <div className="bg-zinc-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <h2 className="text-3xl font-bold text-center text-emerald-400">
        Contactez-moi
      </h2>
      <p className="text-gray-200 text-center mt-2">
        Envoyez-moi un message, je vous répondrai rapidement !
      </p>
      {responseMessage && (
        <p className="text-center text-white p-2 mt-2">{responseMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-200">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 text-zinc-800 border rounded-lg focus:ring focus:ring-emerald-300"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-200">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 text-zinc-800 border rounded-lg focus:ring focus:ring-emerald-300"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-200">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 text-zinc-800 border rounded-lg h-32 focus:ring focus:ring-emerald-300"
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out disabled:bg-zinc-600 disabled:cursor-not-allowed disabled:text-zinc-300"
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-200">Ou contactez-moi directement :</p>
        <a
          href={`mailto:${emailContact}`}
          className="text-emerald-500 font-semibold"
        >
          {emailContact}
        </a>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/nasreddine-lamamra/"
          className="text-blue-600 font-semibold hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Nas-lmr"
          className="text-gray-300 hover:underline font-semibold"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
