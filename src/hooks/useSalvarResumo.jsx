
import { useState } from "react";
import { salvarResumo } from "../services/resumosApi";

function useSalvarResumo() {

    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState(null);

    const salvar = async (novoResumo) => {

        try {
            setSalvando(true);
            setErro(null);

            await salvarResumo(novoResumo);

            return true;

        } catch (error) {
            console.error("Erro ao salvar resumo:", error);
            setErro("Não foi possível salvar o resumo.");

            return false;

        } finally {
            setSalvando(false);
        }
    };

    return {
        salvar,
        salvando,
        erro
    };
}

export default useSalvarResumo;
