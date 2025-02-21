import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasdevpro - Développeur Full Stack",
  description:
    "Découvrez mes projets et compétences en développement web : React, Next.js, TypeScript, Tailwind CSS, et plus.",
  keywords:
    "Développement web, Développeur Full Stack, Next.js, React, TypeScript, Portfolio, Frontend, Backend",
  authors: [{ name: "Lamamra Nasreddine", url: "https://ton-site.com" }],
  creator: "Lamamra Nasreddine",
  publisher: "Lamamra Nasreddine",
  robots: "index, follow",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body
        className={`${montserrat.className} bg-zinc-900 antialiased min-h-screen text-zinc-50`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
