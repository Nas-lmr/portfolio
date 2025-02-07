import { IProjectCard } from "@/interfaces/IProjectCard";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  techno,
  image,
}: IProjectCard) {
  return (
    <div className="flex flex-col w-full h-96 bg-zinc-300 mt-4 p-3 rounded-md">
      <div className=" relative w-full h-3/5 bg-zinc-800">
        <Image src={image} alt={title} layout="fill" />
      </div>
      <h2 className="text-zinc-900">{title}</h2>
      <p className="text-zinc-400">{techno}</p>
      <p className="text-zinc-900">{description}</p>
    </div>
  );
}
