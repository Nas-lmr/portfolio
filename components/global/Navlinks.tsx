import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <nav className=" hidden md:flex justify-end w-3/4  gap-6 p-3  text-lg">
      <Link
        href="/"
        className={`text-white ${
          pathname === "/" ? "border-b-4 border-emerald-400 " : ""
        }hover:text-emerald-400 hover:border-b-4 border-emerald-400 transition-all duration-100 ease-in-out`}
      >
        <span className="text-emerald-400 mr-1 font-semibold">01.</span>Accueil
      </Link>
      <Link
        href="/about"
        className={`text-white ${
          pathname === "/about" ? " border-b-4 border-emerald-400" : ""
        }hover:text-emerald-400 hover:border-b-4 border-emerald-400 transition-all duration-100 ease-in-out`}
      >
        <span className="text-emerald-400 mr-1 font-semibold">02.</span>À propos
      </Link>
      <Link
        href="/projects"
        className={`text-white ${
          pathname.startsWith("/projects")
            ? " border-b-4 border-emerald-400"
            : ""
        }hover:text-emerald-400 hover:border-b-4 border-emerald-400 transition-all duration-100 ease-in-out`}
      >
        <span className="text-emerald-400 mr-1 font-semibold">03.</span>Mes
        projets
      </Link>
      <Link
        href="/contact"
        className={`text-white ${
          pathname === "/contact" ? " border-b-4 border-emerald-400" : ""
        }hover:text-emerald-400 hover:border-b-4 border-emerald-400 transition-all duration-100 ease-in-out`}
      >
        <span className="text-emerald-400 mr-1 font-semibold">04.</span>Contact
      </Link>
    </nav>
  );
}
