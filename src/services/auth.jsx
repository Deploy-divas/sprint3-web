
const CHAVE_USUARIO = "jovi-user";

export function entrar(usuario) {
    localStorage.setItem(
        CHAVE_USUARIO,
        JSON.stringify({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        })
    );
}

export function estaAutenticado() {
    return localStorage.getItem(CHAVE_USUARIO) !== null;
}

export function sair() {
    localStorage.removeItem(CHAVE_USUARIO);
}
