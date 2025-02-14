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
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-16 p-3 flex items-center justify-between z-10
    transition-colors duration-700 ease-in-out
    ${isScrolled ? "bg-zinc-900" : "bg-transparent"}
    `}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Logo du portfolio" width={45} height={45} />
      </Link>
      <MenuBurger />
      <Navlinks />
    </div>
  );
}
