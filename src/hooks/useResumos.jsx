
import { useState, useEffect } from "react";
import { buscarResumos } from "../services/resumosApi";

function useResumos() {

    const [resumos, setResumos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {

        async function carregarResumos() {

            try {
                setCarregando(true);

                const dados = await buscarResumos();

                setResumos(dados);

            } catch (error) {
                setErro("Não foi possível carregar os resumos.");
                console.error(error);

            } finally {
                setCarregando(false);
            }
        }

        carregarResumos();

    }, []);

    return {
        resumos,
        carregando,
        erro
    };
}

export default useResumos;
