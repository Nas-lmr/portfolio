import { projects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full pt-16 px-6 md:px-12">
      <h1 className="text-3xl font-semibold text-center text-emerald-400 mb-8 mt-8">
        Mes Projets
      </h1>
      <p className="text-lg text-gray-200 text-center mb-12">
        Voici quelques projets sur lesquels j&apos;ai travaillé. Chacun de ces
        projets reflète mes compétences en développement web et mon approche des
        solutions créatives. Cliquez sur un projet pour en savoir plus et
        explorer les fonctionnalités.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg shadow-emerald-700 rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-emerald-500">
              {project.title}
            </h2>
            <p className="text-gray-700 mt-2">{project.shortDescription}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-emerald-600 hover:underline"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
      <section className="text-center py-12 mt-12">
        <h2 className="text-2xl font-semibold text-emerald-500">
          Envie de collaborer ?
        </h2>
        <p className="mt-4 text-lg ">
          Si vous êtes intéressé par un projet ou si vous souhaitez discuter
          d&apos;une opportunité de collaboration, contactez-moi !
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition duration-300 ease-in-out"
        >
          Contactez-moi
        </Link>
      </section>
    </main>
  );
}
