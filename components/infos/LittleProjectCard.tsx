import { IProjectCard } from "@/interfaces/IProjectCard";
import Link from "next/link";

export default function LittleProjectCard({
  title,
  shortDescription,
  link,
  slug,
}: IProjectCard) {
  return (
    <div
      key={slug}
      className={`bg-white shadow-lg ${
        !link ? "shadow-gray-600" : "shadow-emerald-700"
      } rounded-lg p-6 ${
        !link ? "" : "transition-transform transform hover:scale-105"
      } ${!link ? "opacity-65 cursor-default" : "shadow-emerald-700"}`}
    >
      <h2 className="text-xl font-bold text-emerald-500">{title}</h2>
      <p className="text-gray-700 mt-2">{shortDescription}</p>
      {!link ? (
        <p className="mt-4 inline-block text-gray-500 ">En savoir plus</p>
      ) : (
        <Link href={`/projects/${slug}`}>
          <p className="mt-4 inline-block text-emerald-600 hover:underline">
            En savoir plus
          </p>
        </Link>
      )}
    </div>
  );
}
