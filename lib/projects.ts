export const projects = [
  {
    slug: "Sayara",
    title: "Sayara",
    logo: "/Sayara-logo.png",
    shortDescription: "Application de covoiturage",
    description:
      "Le but de ce projet était de concevoir et de développer une application de covoiturage similaire à BlaBlaCar. Cette application permet aux utilisateurs de proposer ou de rechercher des trajets en covoiturage, de réserver des places, et de gérer les paiements de manière sécurisée. Elle est accessible via un navigateur web.",
    techno: ["React, NestJS, Typescript, MUI, Stripe"],
    images: [
      "/images/home-mobile.png",
      "/images/trip-mobile.png",
      "/images/trips-mobile.png",
    ],
    details: "Voici quelques détails supplémentaires sur le projet Sayara.",
    link: "https://sayara.cloud",
    link2: "https://github.com/Nas-lmr/SayaraP4",
  },
  {
    slug: "Mon-portfolio",
    title: "Mon Portfolio",
    logo: "/icon.png",
    shortDescription: "Portfolio personnel",
    description:
      "Le but de ce projet était de concevoir et de développer un portfolio personnel pour présenter mes compétences et mes projets.",
    techno: ["NextJS, TailwindCSS, TypeScript, Zod, Google Recaptcha"],
    images: [
      "/images/portfolio-home.png",
      "/images/portfolio-menu.png",
      "/images/portfolio-projet.png",
    ],
    details: "Voici quelques détails supplémentaires sur mon portfolio.",
    link: process.env.NEXT_PUBLIC_WEBSITE_URL!,
    link2: "https://github.com/Nas-lmr/portfolio",
  },
];
