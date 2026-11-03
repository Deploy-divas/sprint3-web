import "../styles/celular.css";
import { Link } from "react-router-dom";

function Celular({ children, className = "" }) {
    return (
        <div className="celular-container flex flex-col items-center justify-center gap-4">
            <div className="phone">
                <div className={`screen ${className}`}>
                    {children}
                </div>
            </div>

            <Link to="/" className="mx-auto rounded-full bg-[#96c624] px-8 py-4 font-bold text-[#06103b] transition-all duration-300 hover:scale-105 "> Voltar a home </Link>
        </div>

    );
}

export default Celular;