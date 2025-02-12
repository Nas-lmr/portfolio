import { IProjectCard } from "@/interfaces/IProjectCard";
import Link from "next/link";

export default function ProjectCard({
  title,
  shortDescription,
  slug,
}: IProjectCard) {
  return (
    <div className="bg-white shadow-lg shadow-emerald-700 rounded-lg p-6 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-emerald-500">{title}</h2>
      <p className="text-gray-700 mt-2">{shortDescription}</p>
      <Link
        href={`/projects/${slug}`}
        className="mt-4 inline-block text-emerald-600 hover:underline"
      >
        Voir le projet
      </Link>
    </div>
  );
}
