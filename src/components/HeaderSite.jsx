import { useEffect, useState } from "react";
import logo from "../assets/logo.png";


function HeaderSite() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const verificarScroll = () => {
      setRolou(window.scrollY > 50);
    };

    verificarScroll();

    window.addEventListener("scroll", verificarScroll);

    return () => {
      window.removeEventListener("scroll", verificarScroll);
    };
  }, []);

  const links = [
    ["Início", "#hero"],
    ["Solução", "#solucao"],
    ["Público-Alvo", "#publico"],
    ["Galeria", "#galeria"],
    ["Nossa equipe", "#equipe"],
    ["Contato", "#contato"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-[1000] w-full px-[5%] py-3 text-white transition-all duration-500 bg-azul-escuro shadow-lg`}
    >
      <div className="mx-auto flex w-[85%] items-center justify-between max-md:w-full">

        {/* Botão do menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="hidden flex-col gap-1.5 max-md:flex"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
        >
          <span className="h-1 w-7 rounded bg-white"></span>
          <span className="h-1 w-7 rounded bg-white"></span>
          <span className="h-1 w-7 rounded bg-white"></span>
        </button>

        {/* Navegação */}
        <nav
          className={`
            flex w-full items-center justify-between
            max-md:absolute max-md:left-0 max-md:top-full
            max-md:w-full max-md:flex-col
            max-md:bg-[#06103b] max-md:py-5
            ${menuAberto ? "max-md:flex" : "max-md:hidden"}
          `}
        >
          <ul className="flex items-center gap-12 max-md:flex-col max-md:gap-3">
            {links.map(([texto, destino]) => (
              <li key={destino}>
                <a
                  href={destino}
                  onClick={() => setMenuAberto(false)}
                  className="relative py-2 font-medium transition-colors duration-300
                    after:absolute after:bottom-0 after:left-0
                    after:h-0.5 after:w-full after:origin-center
                    after:scale-x-0 after:bg-[#96c624]
                    after:transition-transform
                    hover:text-[#96c624] hover:after:scale-x-100"
                >
                  {texto}
                </a>
              </li>
            ))}
          </ul>

          <img
            src={logo}
            alt="Logo JOVI"
            className="my-2 w-[100px]"
          />
        </nav>
      </div>
    </header>
  );
}

export default HeaderSite;