import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full pt-16 px-4">
      <section className="pt-4 flex flex-col gap-4 mobile-landscape:gap-2">
        <h1 className="text-3xl font-bold sm:text-4xl text-emerald-400 md:text-5xl mobile-landscape:text-2xl">
          À propos de moi
        </h1>
        <p className="text-justify w-11/12 mt-4 md:w-4/6 xl:text-lg mobile-landscape:text-sm mobile-landscape:mt-2 mobile-landscape:w-5/6">
          Je m&apos;appelle{" "}
          <span className="text-emerald-300 font-semibold">Nasreddine</span> et
          je suis un développeur web passionné, actuellement en fin de formation
          de Concepteur Développeur d&apos;Application. Avec une expertise en
          développement front-end{" "}
          <span className="text-emerald-300 font-semibold">
            React, Tailwind CSS
          </span>{" "}
          et back-end{" "}
          <span className="text-emerald-300 font-semibold">
            Node.js, Express
          </span>
          , je conçois des sites et applications performants et intuitifs.
        </p>
        <p className="text-justify w-11/12 md:w-4/6 xl:text-lg mobile-landscape:text-sm mobile-landscape:w-5/6">
          Aujourd’hui, je suis à la recherche d’une opportunité pour mettre mes
          compétences au service de projets innovants et contribuer à des
          solutions qui ont un impact.
        </p>
        <p className="text-justify w-11/12 md:w-4/6 xl:text-lg mobile-landscape:text-sm mobile-landscape:w-5/6">
          Vous avez un projet en tête ?{" "}
          <Link
            href="/contact"
            className="text-emerald-300 font-semibold mobile-landscape:text-xs"
          >
            Contactez-moi
          </Link>
          , je serais ravi d’en discuter !
        </p>
      </section>
    </main>
  );
}
