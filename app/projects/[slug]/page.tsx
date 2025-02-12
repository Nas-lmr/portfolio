import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen w-full pt-16 px-6 md:px-12">
      <h1 className="text-4xl font-semibold text-emerald-400 mb-6 text-center">
        {project.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {project.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} - maquette ${index + 1}`}
              width={100}
              height={150}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-emerald-500 ">
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
