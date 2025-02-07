import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projet 1",
    description: "Description du projet 1",
    techno: "React, Next.js, TailwindCSS",
    image: "/icon-react.svg",
  },
  {
    title: "Projet 545",
    description: "Description du projet 1",
    techno: "React, Next.js, TailwindCSS",
    image: "/icon-react.svg",
  },
  {
    title: "Projet 545",
    description: "Description du projet 1",
    techno: "React, Next.js, TailwindCSS",
    image: "/icon-react.svg",
  },
];

export default function LastProjects() {
  return (
    <section className="mt-10 bg-zinc-900 min-h-screen w-full  md:p-6">
      <h3 className="text-xl font-semibold">Mes derniers projets</h3>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          techno={project.techno}
          image={project.image}
        />
      ))}
    </section>
  );
}
