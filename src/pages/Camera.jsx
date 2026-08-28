import Celular from "../components/Celular";
import React from 'react'



import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/camera.css";

const Camera = () => {

    const navigate = useNavigate();

    const [imagem, setImagem] = useState(
        "/imgs/images/foto-quadro.png"
    );

    function capturarFoto() {
        alert("Foto capturada!");
        navigate("/texto-reconhecido");
    }

    function virarCamera() {
        alert("Câmera alterada");
    }

    return (

        <Celular>

            <header className="camera-topbar">

                <img
                    src="/assets/icons/google-lens.svg"
                    alt="Google Lens"
                    className="icon-small"
                    />

                <img
                    src="/assets/icons/flash.svg"
                    alt="Flash"
                    className="icon-small"
                    />

                <img
                    src="/assets/icons/live-photo.svg"
                    alt="Live"
                    className="icon-small"
                />

                <img
                    src="/assets/icons/zeiss-icon.png"
                    alt="ZEISS"
                    className="icon-zeiss"
                    />

                <img
                    src="/assets/icons/macro.svg"
                    alt="Macro"
                    className="icon-small"
                />

                <img
                    src="/assets/icons/setting.svg"
                    alt="Configurações"
                    className="icon-small"
                    />

            </header>

            <main className="camera-view">

                <img
                    src={imagem}
                    alt="Imagem"
                    className="imagem-camera"
                />

            </main>

            <footer className="camera-bottombar">

                <div className="zoom">
                    <div className="zoom-section">
                        <span>0.6</span>
                        <span>• • •</span>
                        <span className="active-zoom">
                            1x
                        </span>
                        <span>• • •</span>
                        <span>2</span>
                    </div>
                </div>

                <div className="modos-camera">
                    <p>Noite</p>
                    <p>Retrato</p>
                    <p className="modo-ativo">Foto</p>
                    <p>Vídeo</p>
                    <p>Mais</p>
                </div>

                <div className="camera-controls">

                    <img
                        src="/assets/images/foto-gato.png"
                        alt="Galeria"
                        className="galeria"
                        />

                    <button
                        className="camera-btn"
                        onClick={capturarFoto}
                        />

                    <button
                        className="virar-camera"
                        onClick={virarCamera}
                    >
                        <img
                            src="/assets/icons/rotate.svg"
                            alt="Virar câmera"
                        />
                    </button>

                </div>

            </footer>
            
        </Celular>

    );
}

export default Camera