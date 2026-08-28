import Celular from "../components/Celular";
import ResumoCard from "../components/ResumoCard";
import MateriaCard from "../components/MateriaCard";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/resumos.css";

const Resumos = () => {

  // Guarda o resumo que veio do LocalStorage
  const [resumo, setResumo] = useState("");

  // Executa quando a página Resumos abrir
  useEffect(() => {

    const resumoSalvo = localStorage.getItem("resumo");

    if (resumoSalvo) {
      setResumo(resumoSalvo);
    }

  }, []);

  function calcularTempoLeitura(html) {

    const temp = document.createElement("div");

    temp.innerHTML = html;

    const texto = temp.textContent || temp.innerText || "";

    const quantidadePalavras = texto.trim().split(/\s+/).filter(Boolean).length;

    const tempoLeitura = Math.ceil(quantidadePalavras / 200);

    return tempoLeitura;
  }

  function pegarPrimeirasPalavras(html, quantidade = 20) {

    const temp = document.createElement("div");

    temp.innerHTML = html;

    const primeiroP = temp.querySelector("p");

    if (!primeiroP) {
      return "";
    }

    const palavras = primeiroP.textContent
      .trim()
      .split(/\s+/);

    if (palavras.length <= quantidade) {
      return primeiroP.textContent;
    }

    return palavras.slice(0, quantidade).join(" ") + "...";
  }

  return (
    <Celular className="celular-resumos">

      <div className="resumos">

        <h1>Resumos gerados</h1>

        <div className="cards">

          {resumo && (
            <ResumoCard
              titulo="Ecologia"
              categoria="Biologia"
              data={new Date().toLocaleDateString("pt-BR")}
              tempoLeitura={calcularTempoLeitura(resumo)}
              descricao={pegarPrimeirasPalavras(resumo, 20)}

            />
          )}

          {/* resumo ilustrativo */}
          <ResumoCard
            titulo="Cadeia alimentar"
            descricao="Produtores, consumidores e decompositores no ecossistema."
            categoria="Ciências"
            data="14/05/2026"
            tempoLeitura="2"
          />

        </div>

      </div>


      <section className="materias">

        <h1>Matérias</h1>

        <div className="materias-cards">

          <MateriaCard materia="Biologia" />

          <MateriaCard materia="Quimica" />

          <MateriaCard materia="Ciências" />

        </div>

      </section>


      <nav className="bottom-bar">

        <Link
          to="/"
          className="nav-item"
        >
          <span>📷</span>
          <p>Capturar</p>
        </Link>


        <Link
          to="/resumos"
          className="nav-item"
        >
          <span>📁</span>
          <p>Resumos gerados</p>
        </Link>

      </nav>

    </Celular>
  );
};

export default Resumos;