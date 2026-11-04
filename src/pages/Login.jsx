
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { autenticarUsuario } from "../services/authApi";
import { entrar } from "../services/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    async function fazerLogin(e) {
        e.preventDefault();

        setErro("");
        setCarregando(true);

        try {
            const usuario = await autenticarUsuario(email, senha);

            if (!usuario) {
                setErro("E-mail ou senha incorretos.");
                return;
            }

            entrar(usuario);

            const destino = location.state?.from?.pathname || "/camera";

            navigate(destino, { replace: true });

        } catch (error) {
            setErro("Não foi possível realizar o login. Tente novamente.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <form
                onSubmit={fazerLogin}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
            >
                <h1 className="mb-0 text-3xl font-bold text-[#26351c] text-center">
                    Bem-vinda(o) a câmera inteligente da JOVI!
                </h1>

                <p className="mb-6 text-gray-600 text-sm text-center">
                    Entre com seus dados para continuar.
                </p>

                <label className="mb-2 block font-medium">
                    E-mail
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail (email@teste)"
                    required
                    className="mb-4 w-full rounded-full border p-3 px-5 outline-none focus:border-[#96c624]"
                />

                <label className="mb-2 block font-medium">
                    Senha
                </label>

                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha (123)"
                    required
                    className="mb-4 w-full rounded-full border p-3 px-5 outline-none focus:border-[#96c624]"
                />

                {erro && (
                    <p className="mb-4 text-sm text-red-600">
                        {erro}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={carregando}
                    className="w-full rounded-full bg-[#96c624] p-3 px-5 font-bold text-white hover:opacity-90 disabled:opacity-50"
                >
                    {carregando ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </main>
    );
}

export default Login;
