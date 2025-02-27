import LastProjects from "@/components/infos/LastProjects";
import AngularIcon from "@/public/icons/icon-angularjs.svg";
import NestIcon from "@/public/icons/icon-nestjs.svg";
import NextIcon from "@/public/icons/icon-nextjs.svg";
import NodeIcon from "@/public/icons/icon-nodejs.svg";
import ReactIcon from "@/public/icons/icon-react.svg";
import TailwindIcon from "@/public/icons/icon-tailwindcss.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de moi",
  description: "Découvrez qui je suis et ce que je fais",
};

export default function About() {
  return (
    <main className="min-h-screen w-full pt-16 ">
      <section className="pt-4 flex flex-col items-center md:px-11 gap-4 mobile-landscape:gap-2 md:items-start">
        <h1 className="text-3xl font-bold sm:text-4xl text-emerald-400 md:mt-5 md:text-5xl md:text-left mobile-landscape:text-2xl">
          À propos de moi
        </h1>
        <p className="text-justify  w-11/12 mt-4  md:pl-11   xl:text-lg mobile-landscape:text-sm mobile-landscape:mt-2 mobile-landscape:w-5/6">
          Je m&apos;appelle{" "}
          <span className="text-emerald-300 font-semibold">Nasreddine</span> et
          je suis un Concepteur Développeur d&apos;Application / Développeur
          Fullstack passionné. Je conçois et développe des sites web et
          applications performants, intuitifs et optimisés. Toujours en quête de
          nouvelles technologies et bonnes pratiques, je mets mes compétences au
          service d&apos;expériences utilisateurs fluides et efficaces.
        </p>
        <div className="flex flex-wrap justify-center md:w-full gap-6 mt-4 md:mt-6 md:pl-11 mobile-landscape:gap-2 mobile-landscape:mt-2">
          <Image src={ReactIcon} alt="icon-react" width={50} />
          <Image src={AngularIcon} alt="icon-angularjs" width={50} />
          <Image src={NextIcon} alt="icon-nextjs" width={50} />
          <Image src={NodeIcon} alt="icon-nodejs" width={50} />
          <Image src={NestIcon} alt="icon-nestjs" width={50} />
          <Image src={TailwindIcon} alt="icon-tailwindcss" width={50} />
        </div>
        <p className="text-justify w-11/12 md:mt-6 md:text-center  md:pl-11 xl:text-lg mobile-landscape:text-sm mobile-landscape:w-5/6">
          Aujourd’hui, je suis à la recherche d’une opportunité pour mettre mes
          compétences au service de projets innovants.
        </p>
        <p className="w-11/12 text-center  md:pl-11 xl:text-lg mobile-landscape:text-sm mobile-landscape:w-5/6">
          Vous avez un projet en tête ? <br />
          <Link
            href="/contact"
            className="text-emerald-300 font-semibold mobile-landscape:text-xs"
          >
            Contactez-moi
          </Link>
          , je serais ravi d’en discuter !
        </p>
      </section>
      <LastProjects />
    </main>
  );
}
