import Image from "next/image";
import Link from "next/link";
import GithubLogo from "../../public/github-icon.svg";
import LinkedinLogo from "../../public/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Mon Portfolio</h2>
            <p className="text-sm">© 2025 Tous droits réservés.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="list-none">
              <li className="inline-block mx-2">
                <Link href="#" className="text-white hover:text-emerald-400">
                  Accueil
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link
                  href="/about"
                  className="text-white hover:text-emerald-400"
                >
                  À propos
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link
                  href="/about"
                  className="text-white hover:text-emerald-400"
                >
                  Mes projets
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link
                  href="/contact"
                  className="text-white hover:text-emerald-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="list-none">
              <li className="inline-block mx-2">
                <Link href="https://github.com/Nas-lmr">
                  <Image
                    src={GithubLogo}
                    alt="Lien vers mon github"
                    width={35}
                  />
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link
                  href="https://www.linkedin.com/in/nasreddine-lamamra/"
                  className=""
                >
                  <Image
                    src={LinkedinLogo}
                    alt="Lien vers mon linkedin"
                    width={35}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
