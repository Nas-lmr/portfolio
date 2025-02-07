import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sayara",
    description: "Application de covoiturage",
    techno: "React, NestJS, MUI, Stripe",
    image: "/Sayara-logo.png",
  },
  {
    title: "School Sign",
    description: "Application de gestion de signatures pour les écoles",
    techno: "React, Next.js, Prisma, TailwindCSS",
    image: "/icon-react.svg",
  },
];

export default function LastProjects() {
  return (
    <section className="flex flex-col items-center mt-10 py-6 px-4 bg-zinc-800 min-h-fit w-full  ">
      <h3 className="text-start text-xl md:text-2xl font-semibold w-full">
        Mes derniers projets
      </h3>
      <div className="flex flex-wrap justify-center gap-4 mt-4 md:gap-16 md:p-4 md:min-w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techno={project.techno}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
