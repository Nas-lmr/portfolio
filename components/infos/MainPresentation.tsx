import Button from "../global/Button";

export default function MainPresentation() {
  return (
    <div className="flex flex-col gap-1 sm:justify-center sm:p-4 h-5/6 w-full md:h-full md:w-5/6 md:gap-2 landscape:gap-4 landscape:h-auto landscape:w-full">
      <p className="text-emerald-400 font-medium text-md xl:text-lg landscape:text-sm">
        Bonjour, je suis
      </p>
      <h1 className="text-3xl font-bold sm:text-4xl sm:text-white md:text-5xl xl:text-6xl landscape:text-2xl">
        Lamamra Nasreddine
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-300 sm:text-3xl md:text-4xl xl:text-5xl landscape:text-xl">
        Développeur Fullstack
      </h2>
      <p className="text-justify text-md text-zinc-400 sm:text-white w-11/12 md:w-4/6 xl:text-lg landscape:text-sm landscape:w-5/6">
        Passionné par le développement d’applications web modernes et
        performantes. Découvrez mes projets, réalisés avec soin et attention aux
        détails. Toujours curieux d’apprendre, je suis prêt à relever de
        nouveaux défis. Je suis actuellement en formation à la{" "}
        <span className="text-emerald-400 font-semibold">Wild Code School</span>
        .
      </p>
      <Button
        link="/about"
        label="Plus d'infos"
        height="h-12"
        width="w-40"
        bgColor="bg-emerald-400 hover:bg-emerald-600"
        textColor="text-zinc-900 font-semibold hover:text-white"
        borderRadius="rounded"
        margin="mt-4 md:mt-6 landscape:mt-2"
      />
    </div>
  );
}
