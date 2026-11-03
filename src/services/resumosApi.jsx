const API_URL = "https://6aea5d1a3d3dd3d37be66834.mockapi.io/api/resumos-jovi/Resumos";

// busca
export async function buscarResumos() {
    const resposta = await fetch(API_URL);
    return await resposta.json();
}

// salva
export async function salvarResumo(resumo) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resumo)
    });

    return await resposta.json();
}