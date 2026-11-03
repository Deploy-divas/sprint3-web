import Celular from "../components/Celular";

import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/resumoGerado.css";

import { salvarResumo } from "../services/resumosApi";
import { useNavigate } from "react-router-dom";

const ResumoGerado = () => {

  // Referência para pegar todo o conteúdo da div .texto
  const textoRef = useRef(null);

  const navigate = useNavigate();

  // Função para salvar o resumo na api
  const salvar = async () => {
    if (!textoRef.current) return;

    const novoResumo = {
      titulo: "Ecologia",
      categoria: "Biologia",
      conteudo: textoRef.current.innerHTML,
      data: new Date().toLocaleDateString("pt-BR")
    };

    await salvarResumo(novoResumo);

    navigate("/resumos");
  };

  return (
    <Celular className="celular-resumo-gerado">

      <div className="card-resumo">

        <h1>Resumo gerado</h1>

        <div className="tags">
          <span className="tag tag-green">
            Biologia
          </span>

          <span className="tag tag-blue">
            Química
            <span className="close">×</span>
          </span>
        </div>

        <div className="texto" ref={textoRef}>

          <p>
            Ecologia é a área da biologia que estuda a relação
            dos seres vivos com o meio ambiente.
          </p>

          <p>
            Os níveis de organização ecológica são organismo,
            população, comunidade, ecossistema e biosfera.
          </p>

          <ul>
            <li>
              Fatores bióticos correspondem aos seres vivos.
            </li>

            <li>
              Fatores abióticos incluem água, luz, solo e clima.
            </li>

            <li>
              A sustentabilidade busca o uso consciente dos
              recursos naturais e a redução dos impactos ambientais.
            </li>
          </ul>

        </div>

        <div className="botoes">

          <Link
            to="/"
            className="btn-secundario"
          >
            Gerar novamente
          </Link>

          <button
            className="btn-primario"
            onClick={salvar}
          >
            Criar Resumo
          </button>

        </div>

      </div>

    </Celular>
  );
};

export default ResumoGerado;