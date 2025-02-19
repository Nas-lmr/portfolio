import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function LastProjects() {
  return (
    <section className="flex flex-col items-center mt-10 py-6 px-4 bg-zinc-800 min-h-fit w-full  ">
      <h3 className="text-start text-xl md:text-2xl font-semibold w-full">
        Mes derniers projets
      </h3>
      <div className="flex flex-wrap justify-center gap-4 mt-4 md:gap-16 md:p-4 md:min-w-full">
        {projects
          .filter((project) => project.link)
          .map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              shortDescription={project.shortDescription}
              techno={project.techno}
              logo={project.logo}
              slug={project.slug}
            />
          ))}
      </div>
    </section>
  );
}
