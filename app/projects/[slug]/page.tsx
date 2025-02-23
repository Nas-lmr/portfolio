"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  if (!project) return notFound();

  return (
    <main className="min-h-screen w-full pt-16 px-6 md:px-12">
      <h1 className="text-4xl font-semibold text-emerald-400 mb-6 text-center">
        {project.title}
      </h1>

      <div className="grid md:grid-cols-2 md:h-full gap-12 ">
        <div className="space-y-4 flex flex-col items-center justify-around ">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={`${project.title} - maquette principale`}
              width={400}
              height={400}
              className="rounded-lg shadow-lg border border-zinc-500  w-1/4 md:w-48 max-h-[400px]"
            />
          )}

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

          <div className="flex flex-col items-center justify-center mt-6 mb-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4 bg-emerald-500 text-zinc-800 font-semibold py-3 px-6 rounded-lg hover:text-white hover:bg-emerald-700 transition duration-300 ease-in-out text-center"
            >
              Voir le projet
            </Link>

            <Link
              href={project.link2!}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-3/4 bg-white text-zinc-800 font-semibold py-3 px-6 rounded-lg hover:bg-transparent hover:text-emerald-500 hover:outline hover:outline-emerald-500 transition duration-300 ease-in-out text-center"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
