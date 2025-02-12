"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const params = useParams(); // ✅ Utilisation correcte de params dans l'App Router
  const slug = params.slug as string; // On s'assure que c'est une string
  const project = projects.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.images[0]); // ✅ Évite de modifier l'état pendant le rendu
    }
  }, [project]);

  if (!project) return notFound(); // ✅ Après les Hooks, sans interrompre le rendu

  return (
    <main className="min-h-screen w-full pt-16 px-6 md:px-12">
      <h1 className="text-4xl font-semibold text-emerald-400 mb-6 text-center">
        {project.title}
      </h1>

      <div className="grid md:grid-cols-2 md:h-full gap-12">
        {/* Images */}
        <div className="space-y-4 flex flex-col items-center justify-around">
          {/* Image principale */}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={`${project.title} - maquette principale`}
              width={400}
              height={400}
              className="rounded-lg shadow-lg  w-1/4 md:w-48 max-h-[400px]"
            />
          )}

          {/* Miniatures des autres images */}
          <div className="flex gap-10 mt-4">
            {project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${project.title} - miniature ${index + 1}`}
                width={50}
                height={30}
                className={`rounded-md cursor-pointer border-2 transition ${
                  selectedImage === img
                    ? "border-emerald-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Description & Technologies */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-emerald-500">
            Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techno.map((tech, index) => (
              <span
                key={index}
                className="bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-emerald-500 mt-8 mb-2">
            Description du Projet
          </h3>
          <h4 className="text-xl text-gray-300 leading-relaxed font-medium">
            {project.shortDescription}
          </h4>
          <p className="mt-1 text-gray-300">{project.description}</p>

          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition duration-300 ease-in-out text-center"
          >
            Voir le projet
          </Link>
        </div>
      </div>
    </main>
  );
}
