import MainPresentation from "@/components/infos/MainPresentation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Développeur Full Stack spécialisé en React, Next.js et TypeScript. Découvrez mes projets et compétences en développement web moderne.",
};

export default function Home() {
  return (
    <main className=" min-h-screen w-full  flex  flex-col justify-center-center  ">
      <MainPresentation />
    </main>
  );
}
