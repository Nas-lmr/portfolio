"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/icon.png";
import MenuBurger from "./MenuBurger";
import Navlinks from "./Navlinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-16 p-3 flex items-center justify-between z-10
    transition-colors duration-700 ease-in-out
    ${isScrolled ? "bg-zinc-900" : "bg-transparent"}
    `}
    >
      <Link href={"/"} className="cursor-pointer ml-3">
        <Image src={Logo} alt="Logo du portfolio" width={45} height={45} />
      </Link>
      <MenuBurger />
      <Navlinks />
    </div>
  );
}
