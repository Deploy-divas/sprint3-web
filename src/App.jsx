import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Camera from "./pages/Camera";
import TextoReconhecido from "./pages/TextoReconhecido";
import ResumoGerado from "./pages/ResumoGerado";
import Resumos from "./pages/Resumos";

import RotaPrivada from "./components/rotaPrivada";

function App() {
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />

                <Route element={<RotaPrivada />}>
                    <Route path="/camera" element={<Camera />} />
                    <Route path="/texto-reconhecido"element={<TextoReconhecido />} />
                    <Route path="/resumo-gerado" element={<ResumoGerado />} />
                    <Route path="/resumos" element={<Resumos />} />
                </Route>
            
            </Routes>

        </BrowserRouter>
    );
}

export default App;
