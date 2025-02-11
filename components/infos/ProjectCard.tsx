import { IProjectCard } from "@/interfaces/IProjectCard";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  techno,
  image,
}: IProjectCard) {
  return (
    <Link href="/projects">
      <div className="flex flex-col w-80 h-96 bg-zinc-300 mt-4 p-3 rounded-md  transition-transform duration-300 hover:shadow-lg hover:shadow-emerald-400  hover:scale-105">
        <div className="flex justify-center items-center relative w-full h-3/5 bg-zinc-50">
          <Image src={image} alt={title} width={150} height={150} />
        </div>
        <div className="flex flex-col gap-4 items-center w-full h-2/5 mt-2">
          <h2 className=" text-xl font-semibold text-zinc-900">{title}</h2>
          <p className="text-sm text-zinc-700">{techno}</p>
          <p className="text-gray-700 text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}
