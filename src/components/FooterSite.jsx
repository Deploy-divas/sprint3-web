
import logo from "../assets/logo.png";

function FooterSite() {
  const links = [
    ["Início", "#hero"],
    ["Solução", "#solucao"],
    ["Público-Alvo", "#publico"],
    ["Galeria", "#galeria"],
    ["Nossa equipe", "#equipe"],
    ["Contato", "#contato"],
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-[#06103b] px-6 pt-[60px] pb-6 text-[#e4e4e7]"
    >
      <div className="mx-auto flex w-[80%] items-start justify-between gap-10 border-b border-[#2e2e33] pb-10 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:text-center">

        {/* Logo e descrição */}
        <div className="w-full max-w-[340px] flex-1">
          <img
            src={logo}
            alt="Logo JOVI"
            className="mb-4 h-[42px] w-auto"
          />

          <p className="text-sm leading-[1.6] text-[#a1a1aa]">
            Use Inteligência Artificial para organizar o conteúdo
            das fotos de aulas e anotações, facilitando encontrar,
            aproveitar e revisar o material de estudo.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-1 justify-end text-right max-sm:justify-center max-sm:text-center">
          <ul className="flex list-none flex-col gap-3">
            {links.map(([texto, destino]) => (
              <li key={destino}>
                <a
                  href={destino}
                  className="relative w-fit text-[15px] font-medium text-[#e4e4e7] transition-colors duration-300
                    after:absolute after:bottom-[-3px] after:left-0
                    after:h-0.5 after:w-0
                    after:bg-gradient-to-r after:from-pink-500 after:to-purple-500
                    after:transition-all after:duration-300
                    hover:text-pink-500 hover:after:w-full"
                >
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Direitos autorais */}
      <p className="mt-6 text-center text-[13px] text-[#71717a]">
        © 2026 Deploy das divas. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default FooterSite;