"use client";

import { getCaptchaToken } from "@/utils/captcha";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function FormContact() {
  const emailContact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const loadingToast = toast.loading("Envoi du message...");

    const token = await getCaptchaToken();

    if (!token) {
      toast.dismiss(loadingToast);
      toast.error("Erreur lors de la vérification du CAPTCHA");
      setLoading(false);
      return;
    }

    formData.append("captcha", token);
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: formData,
    });

    toast.dismiss(loadingToast);

    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      form.reset();
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  }

  return (
    <div className="bg-zinc-800 shadow-lg rounded-2xl p-6 w-full mt-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-center text-emerald-400">
        Contactez-moi
      </h2>
      <p className="text-gray-200 text-center mt-2">
        Envoyez-moi un message, je vous répondrai rapidement !
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-200">Nom</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 text-zinc-800 border rounded-lg focus:ring focus:ring-emerald-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-200">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 text-zinc-800 border rounded-lg focus:ring focus:ring-emerald-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200">Message</label>
          <textarea
            name="message"
            className="w-full p-2 text-zinc-800 border rounded-lg h-32 focus:ring focus:ring-emerald-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out disabled:bg-zinc-600 disabled:cursor-not-allowed disabled:text-zinc-300"
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-200">Ou contactez-moi directement :</p>
        <a
          onClick={() => {
            window.open(
              `https://mail.google.com/mail/?view=cm&to=${emailContact}`,
              "_blank",
              "width=600,height=700"
            );
          }}
          target="_blank"
          className="text-emerald-500 font-semibold cursor-pointer hover:underline hover:text-emerald-400"
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

      <ToastContainer
        position="bottom-right"
        theme="dark"
        hideProgressBar
        autoClose={5000}
        transition={Bounce}
        style={{ whiteSpace: "pre-line" }}
      />
    </div>
  );
}
