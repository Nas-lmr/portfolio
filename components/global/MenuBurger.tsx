"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CloseLogo from "../../public/cross.svg";
import GithubLogo from "../../public/icons/github-icon.svg";
import LinkedinLogo from "../../public/icons/linkedin-icon.svg";
import MenuLogo from "../../public/menu.svg";

export default function MenuBurger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="md:hidden">
      <Image
        src={MenuLogo}
        alt="Image du menu"
        width={30}
        height={30}
        onClick={toggleMenu}
        className="cursor-pointer "
      />
      <div
        className={`fixed flex flex-col top-0 right-0 h-full w-3/4 max-w-xs bg-zinc-900 shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="h-16 w-full flex justify-end items-center p-3">
          <Image
            src={CloseLogo}
            alt="Fermer le menu"
            width={20}
            height={20}
            onClick={toggleMenu}
            className="mr-3 cursor-pointer"
          />
        </div>
        <nav className="flex flex-col h-2/4 justify-around p-3 text-xl">
          <Link
            onClick={handleCloseMenu}
            href="/"
            className={`text-white w-fit ${
              pathname === "/" ? "border-b-4 border-emerald-400" : ""
            }`}
          >
            <span className="text-emerald-400 mr-2">01.</span>Accueil
          </Link>
          <Link
            onClick={handleCloseMenu}
            href="/about"
            className={`text-white w-fit ${
              pathname === "/about" ? "border-b-4 border-emerald-400" : ""
            }`}
          >
            <span className="text-emerald-400 mr-2">02.</span>À propos
          </Link>
          <Link
            onClick={handleCloseMenu}
            href="/projects"
            className={`text-white w-fit${
              pathname === "/projets" ? "border-b-4 border-emerald-400" : ""
            }`}
          >
            <span className="text-emerald-400 mr-2">03.</span>Mes Projets
          </Link>
          <Link
            onClick={handleCloseMenu}
            href="/contact"
            className={`text-white w-fit ${
              pathname === "//contact" ? "border-b-4 border-emerald-400" : ""
            }`}
          >
            <span className="text-emerald-400 mr-2">04.</span>Contact
          </Link>
        </nav>
        <div className="w-full h-1/4 flex items-end justify-center gap-8">
          <Link
            href="https://www.linkedin.com/in/nasreddine-lamamra/"
            className=""
          >
            <Image src={LinkedinLogo} alt="Lien vers mon linkedin" width={35} />
          </Link>
          <Link href="https://github.com/Nas-lmr">
            <Image src={GithubLogo} alt="Lien vers mon github" width={35} />
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
