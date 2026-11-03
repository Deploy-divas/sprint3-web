import React from 'react'
import { Link } from "react-router-dom";

import Menu from "../components/HeaderSite.jsx";
import Footer from "../components/FooterSite.jsx";

import imgProblema from "../assets/img-problema.png";
import imgSolucao from "../assets/img-solucao.png";

import pub1 from "../assets/pub1.png";
import pub2 from "../assets/pub2.png";
import pub3 from "../assets/pub3.png";
import pub4 from "../assets/pub4.png";
import pub5 from "../assets/pub5.png";

import prototipo1 from "../assets/prototipo1.png";
import prototipo2 from "../assets/prototipo2.png";
import prototipo3 from "../assets/prototipo3.png";
import prototipo4 from "../assets/prototipo4.png";

import amanda from "../assets/amanda.png";
import beatriz from "../assets/beatriz.png";
import laura from "../assets/laura.png";

const LandingPage = () => {

  const imagensPublico = [
    pub1, pub2, pub3, pub4, pub5
  ];

  const imagensGaleria = [
    prototipo1, prototipo2, prototipo3, prototipo4
  ];

  const equipe = [
    {
      nome: "Amanda Silva",
      cargo: "Engenheira de software",
      foto: amanda,
      linkedin: "https://www.linkedin.com/in/amanda-silva-da-mata-127194274/",
      instagram: "https://www.instagram.com/amandadalia_real/",
      github: "https://github.com/amandasilvamata",
    },
    {
      nome: "Beatriz Mantovani",
      cargo: "Engenheira de software",
      foto: beatriz,
      linkedin: "https://www.linkedin.com/in/beatriz-mantovani-da-cruz-7812583a2/",
      instagram: "https://www.instagram.com/_tricxxm/",
      github: "https://github.com/beatrizmmantovanii22/",
    },
    {
      nome: "Laura Sampaio",
      cargo: "Engenheira de software",
      foto: laura,
      linkedin: "https://www.linkedin.com/in/laura-sampaio-neves/",
      instagram: "https://www.instagram.com/laurasampaio03/",
      github: "https://github.com/LauraHTML",
    },
  ];

  const redes = [
    {
      nome: "LinkedIn",
      link: "linkedin",
      icone: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
    {
      nome: "Instagram",
      link: "instagram",
      icone: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
      ),
    },
    {
      nome: "GitHub",
      link: "github",
      icone: (
        <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21v3.285c0 .315.21.69.825.57A12.01 12.01 0 0 0 12 .297" />
      ),
    },
  ];

  return (
    <>
      
      <Menu />

      <main className="w-full flex flex-col">

        {/* HERO */}
        <section
          id="hero"
          className="flex min-h-screen w-full items-center justify-center bg-[#06103b] px-6 py-24 text-white"
        >
          <div className="mx-auto flex w-[85%] max-w-7xl flex-col items-center justify-center text-center">
            <h1 className="titulo-principal font-unbounded font-black ">
              CHALLENGE JOVI
            </h1>

            <h2 className="mt-2 text-xl font-medium md:text-3xl">
              Organize suas fotos. Potencialize seus estudos.
            </h2>

          <Link to="/camera" className="mt-10 rounded-full bg-[#96c624] px-8 py-4 font-bold text-[#06103b] transition-all duration-300 hover:scale-105 hover:bg-white"> Experimentar agora </Link>
          <a href="#solucao" className="mt-5 rounded-full bg-transparent px-8 py-4 font-bold text-white border-2 border-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#06103b]"> Conheça nossa solução </a>



          </div>
        </section>

        {/* SOLUÇÃO */}
        <section
          id="solucao"
          className="w-full bg-[#f5f5f5] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-schibsted text-4xl font-bold text-[#06103b] md:text-5xl">
                A solução
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#71717a]">
                Quantas vezes você tirou uma foto do quadro ou de uma anotação
                para estudar depois e, quando precisou dela, não conseguiu
                encontrar? A nossa solução foi pensada para resolver esse problema.
              </p>
            </div>

            {/* Problema */}
            <div className="mb-20 grid items-center gap-10 md:grid-cols-2">

              <div className="flex flex-col gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-7 w-7"
                  >
                    <path d="M12 9v4" />
                    <path d="M10.363 3.591 2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.871L13.637 3.591a1.914 1.914 0 0 0-3.274 0z" />
                    <path d="M12 16h.01" />
                  </svg>
                </span>

                <h3 className="text-3xl font-bold text-[#06103b]">
                  O problema
                </h3>

                <p className="leading-relaxed text-[#353535]">
                  Estudantes tiram muitas fotos do conteúdo das aulas, mas essas
                  imagens acabam se acumulando na galeria do celular sem contexto
                  ou organização. Com o tempo, encontrar uma anotação específica
                  se torna difícil e parte do conteúdo pode acabar sendo perdida.
                </p>

                <p className="leading-relaxed text-[#353535]">
                  Esse comportamento é comum: 60% dos alunos entrevistados
                  utilizam a câmera do smartphone diariamente para estudar e
                  80% utilizam a galeria padrão do celular. Além disso, 65%
                  relatam grande dificuldade para localizar fotos de anotações
                  no momento do estudo.
                </p>
              </div>

              <div>
                <img
                  src={imgProblema}
                  alt="Estudante frustrado"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Nossa solução */}
            <div className="grid items-center gap-10 md:grid-cols-2">

              <div>
                <img
                  src={imgSolucao}
                  alt="Estudando e tirando foto do conteúdo"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              <div className="flex flex-col gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-[#96c624]">
                  <svg
                    viewBox="-3 -3 30 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-7 w-7"
                  >
                    <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4-2.5 5-.7.7-1 1.5-1 2.5v.5h-5v-.5c0-1-.3-1.8-1-2.5-1-1-2.5-2.5-2.5-5a6 6 0 0 1 6-6z" />
                    <line x1="9.5" y1="19" x2="14.5" y2="19" />
                    <line x1="10" y1="21" x2="14" y2="21" />
                    <line x1="12" y1="-1.5" x2="12" y2=".5" />
                    <line x1="23.5" y1="9" x2="21" y2="9" />
                    <line x1="3" y1="9" x2=".5" y2="9" />
                  </svg>
                </span>

                <h3 className="text-3xl font-bold text-[#06103b]">
                  Nossa solução
                </h3>

                <p className="leading-relaxed text-[#353535]">
                  Nossa funcionalidade utiliza Inteligência Artificial para
                  extrair o conteúdo das fotos e aproveitar esse texto para
                  criar um resumo. Ainda inclui uma integração com aplicativos
                  de anotação, para salvar os resumos e organizar tudo em pastas
                  separadas por matéria e assunto.
                </p>

                <p className="leading-relaxed text-[#353535]">
                  Assim, o estudante pode aproveitar melhor o conteúdo registrado
                  durante as aulas e facilitar o processo de revisão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PÚBLICO-ALVO */}
        <section
          id="publico"
          className="w-full bg-white px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <h2 className="font-schibsted text-4xl font-bold text-[#06103b] md:text-5xl">
                Público-Alvo
              </h2>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xl leading-relaxed text-[#353535]">
                Nossa funcionalidade é voltada para estudantes que utilizam o
                celular para registrar conteúdos de aula, especialmente aqueles
                que enfrentam dificuldades para encontrar e organizar essas fotos
                posteriormente.
              </p>

              <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-[#f5f5f5] p-8 text-left shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#06103b]">
                  Persona
                </h3>

                <p className="font-bold text-[#1e46e7]">
                  Maria Silva, 20 anos
                </p>

                <p className="mt-3 leading-relaxed text-[#353535]">
                  Maria é uma estudante de medicina, que utiliza a câmera do
                  celular para fotografar o quadro e as anotações das aulas.
                  No dia a dia, sente-se frustrada por não encontrar com
                  facilidade as fotos que tirou para estudar depois.
                  Principais dores: Dificuldade em encontrar fotos tiradas e
                  perda de conteúdo.
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
              {imagensPublico.map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Imagem do público-alvo ${index + 1}`}
                  className="h-44 w-40 rounded-xl object-cover shadow-md transition-transform duration-300 hover:-translate-y-2"
                />
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section
          id="galeria"
          className="w-full bg-[#f5f5f5] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="font-schibsted text-4xl font-bold text-[#06103b] md:text-5xl">
                Galeria
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#71717a]">
                Conheça nosso protótipo, onde a solução foi pensada para
                transformar fotos de conteúdos de aula em uma experiência
                de estudo mais organizada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {imagensGaleria.map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Tela ${index + 1} do protótipo`}
                  className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/camera"
                className="inline-block rounded-full bg-[#1e46e7] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#06103b]"
              >
                Acesse aqui para a experiência completa
              </Link>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section
          id="equipe"
          className="w-full bg-white px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">
              <h2 className="font-schibsted text-4xl font-bold text-[#06103b] md:text-5xl">
                Equipe
              </h2>

              <p className="mt-5 text-lg text-[#71717a]">
                Conheça quem está por trás do projeto!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
              {equipe.map((pessoa) => (
                <div
                  key={pessoa.nome}
                  className="flex w-full max-w-[300px] flex-col items-center rounded-2xl bg-[#f5f5f5] p-7 text-center shadow-md transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="mb-5 h-40 w-40 overflow-hidden rounded-full">
                    <img
                      src={pessoa.foto}
                      alt={`Foto de ${pessoa.nome}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-xl font-bold text-[#06103b]">
                    {pessoa.nome}
                  </p>

                  <p className="mt-2 text-sm text-[#71717a]">
                    {pessoa.cargo}
                  </p>

                  <div className="mt-5 flex items-center gap-5 text-[#1e46e7]">
                    {redes.map((rede) => (
                      <a
                        key={rede.nome}
                        href={pessoa[rede.link]}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${rede.nome} de ${pessoa.nome}`}
                        className="transition-colors hover:text-[#96c624]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          {rede.icone}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="mx-auto my-[50px] grid w-[92%] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2"
        >
          {/* Formulário */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#06103b]">
              Fale conosco
            </h2>

            <p className="mt-3 text-[#71717a]">
              Envie-nos uma mensagem, responderemos assim que possível!
            </p>

            <form id="form" className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="font-medium text-[#353535]">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1e46e7]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-[#353535]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1e46e7]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="telefone" className="font-medium text-[#353535]">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1e46e7]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="font-medium text-[#353535]">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows="4"
                  className="resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1e46e7]"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#1e46e7] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#06103b]"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações */}
          <div className="flex flex-col justify-between bg-[#06103b] p-8 text-white md:p-12">
            <div>
              <h3 className="mb-8 text-2xl font-bold">
                Informações
              </h3>

              <div className="flex flex-col gap-6 text-[#e4e4e7]">
                <p>deploydasdivas@contato.com</p>
                <p>+55 11 98765-4321</p>
                <p>Av. Paulista, 1106</p>
                <p>07:00 - 21:00</p>
              </div>
            </div>

            <div className="mt-12 flex gap-6 text-white">
              <a
                href="https://www.facebook.com/fiap/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#96c624]"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/fiapoficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#96c624]"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/school/fiap/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#96c624]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </>
  )
}

export default LandingPage
