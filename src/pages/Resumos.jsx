import Celular from "../components/Celular";
import ResumoCard from "../components/ResumoCard";
import MateriaCard from "../components/MateriaCard";

import React from 'react'
import { Link } from "react-router-dom";


import "../styles/resumos.css";

const Resumos = () => {
  return (
    <Celular className="celular-resumos">

      <div className="resumos">

        <h1>Resumos gerados</h1>

          <div className="cards">

            <ResumoCard
                titulo="Ecologia"
                descricao="Relação dos seres vivos com o meio ambiente e sustentabilidade."
                categoria="Biologia"
                data="15/05/2026"
            />

            <ResumoCard
                titulo="Cadeia alimentar"
                descricao="Produtores, consumidores e decompositores no ecossistema."
                categoria="Ciências"
                data="14/05/2026"
            />

          </div>

      </div>

      <section class="materias">
        <h1>Matérias</h1>
        <div class="materias-cards">


          <MateriaCard materia="Biologia"/>
          <MateriaCard materia="Quimica"/>
          <MateriaCard materia="Ciências"/>
            

        </div>
      </section>


      <nav class="bottom-bar">
        <Link to="/" className="nav-item">
          <span>📷</span>
          <p>Capturar</p>
        </Link>

        <Link to="/resumos" className="nav-item">
          <span>📁</span>
          <p>Resumos gerados</p>
        </Link>
      </nav>

    </Celular>
    );
}

export default Resumos
