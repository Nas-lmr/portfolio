"use client";
import Button from "../global/Button";

export default function MainPresentation() {
  return (
    <>
      <div className=" fixed bg-mobileBg sm:bg-mainBg bg-cover bg-center bg-[lenght:50%] h-screen w-screen -z-10 before:absolute before:inset-0 before:bg-black before:opacity-40" />
      <div className=" pt-16 px-4 md:px-6  flex flex-col gap-1 justify-center h-screen w-full md:gap-2 mobile-landscape:gap-4 mobile-landscape:h-auto mobile-landscape:w-full">
        <p className="text-emerald-400 font-medium text-md xl:text-lg mobile-landscape:text-sm">
          Bonjour, je suis
        </p>
        <h1 className="text-2xl font-bold sm:text-4xl sm:text-white md:text-5xl xl:text-6xl mobile-landscape:text-2xl">
          Lamamra Nasreddine
        </h1>
        <h2 className="text-xl font-semibold text-zinc-300 sm:text-3xl md:text-4xl xl:text-5xl mobile-landscape:text-xl">
          Développeur Fullstack
        </h2>
        <p className="text-md text-zinc-400 sm:text-white w-11/12 md:w-4/6 xl:text-lg mobile-landscape:text-sm mobile-landscape:w-5/6">
          Passionné par le développement d’applications web modernes et
          performantes. Découvrez mes projets, réalisés avec soin et attention
          aux détails. Toujours curieux d’apprendre, je suis prêt à relever de
          nouveaux défis.
        </p>
        <Button
          link="/about"
          label="Plus d'infos"
          apparence="h-12 w-40 bg-emerald-500 hover:bg-emerald-600 hover:text-white text-zinc-800 font-semibold rounded mt-4 md:mt-6 mobile-landscape:mt-2"
        />
      </div>
    </>
  );
}
