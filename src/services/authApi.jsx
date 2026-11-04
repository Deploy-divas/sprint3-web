
const API_URL = "https://6aea5d1a3d3dd3d37be66834.mockapi.io/api/resumos-jovi/Users";

export async function autenticarUsuario(email, senha) {
    const resposta = await fetch(API_URL);

    if (!resposta.ok) {
        throw new Error("Não foi possível conectar ao servidor.");
    }

    const usuarios = await resposta.json();

    const usuarioEncontrado = usuarios.find((usuario) => 
        usuario.email?.trim().toLowerCase() === email.trim().toLowerCase() &&
        usuario.senha === senha
    );

    return usuarioEncontrado || null;
}
