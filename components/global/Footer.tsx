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
                <a href="#" className="text-white hover:text-gray-400">
                  Accueil
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  À propos
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="list-none">
              <li className="inline-block mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
