import Button from "@/components/global/Button";
import LittleProjectCard from "@/components/infos/LittleProjectCard";
import { projects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes Projets",
  description: "Découvrez mes projets et compétences en développement web.",
};

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
        {projects.map((project) => (
          <LittleProjectCard key={project.slug} {...project} />
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
        <Button
          link="/contact"
          label="Contactez-moi"
          apparence="mt-4 inline-block bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-emerald-600"
        />
      </section>
    </main>
  );
}
