import Celular from "../components/Celular";
import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/textoReconhecido.css";



const TextoReconhecido = () => {
  const navigate = useNavigate();

  const [texto, setTexto] = useState(
      "ECOLOGIA • Relação dos seres vivos com o meio ambiente • Organismo • População • Comunidade • Ecossistema • Biosfera • Bióticos = seres vivos • Abióticos = água, luz e clima • Cadeia alimentar • Sustentabilidade e impactos ambientais."
  );

  const [editando, setEditando] = useState(false);

  function gerarResumo() {

      alert("Resumo gerado com sucesso!");

      navigate("/resumo-gerado");
  }

  return (
    <Celular className="celular-texto-reconhecido">
      
      <div className="texto-card">

          <h1>Texto reconhecido pela IA</h1>

          <p className="subtitulo">
              Verifique se o texto capturado está correto
          </p>

          <div className="texto-box">

              {editando ? (
                  <textarea
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                  />
              ) : (
                  <p>{texto}</p>
              )}

          </div>

          <div className="acoes">

              <button
                  className="btn-secundario"
                  onClick={() => setEditando(!editando)}
              >
                  {editando ? "Salvar texto" : "Editar texto"}
              </button>

              <button
                  className="btn-primario"
                  onClick={gerarResumo}
              >
                  Gerar resumo
              </button>

          </div>

      </div>
      
    </Celular>


  );
}

export default TextoReconhecido
