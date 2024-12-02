"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon.png";
import MenuBurger from "./MenuBurger";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <div className=" fixed bg-transparent w-full h-16 p-3 flex items-center justify-between z-10">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo du portfolio" width={45} height={45} />
      </Link>
      <MenuBurger />
      <Navlinks />
    </div>
  );
}
