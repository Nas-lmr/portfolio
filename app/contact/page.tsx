"use client";

import { useState } from "react";

export default function ContactPage() {
  const emailContact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-4 md:mt-8">
      <div className="bg-zinc-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-emerald-400">
          Contactez-moi
        </h2>
        <p className="text-gray-200 text-center mt-2">
          Envoyez-moi un message, je vous répondrai rapidement !
        </p>

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
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out"
          >
            Envoyer
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
    </div>
  );
}
