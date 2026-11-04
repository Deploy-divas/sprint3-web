
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { estaAutenticado } from "../services/auth";

function RotaPrivada() {
    const autenticado = estaAutenticado();
    const location = useLocation();

    if (!autenticado) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
}

export default RotaPrivada;
