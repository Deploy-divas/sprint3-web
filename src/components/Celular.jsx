import "../styles/celular.css";

function Celular({ children, className = "" }) {
    return (
        <div className="phone">
            <div className={`screen ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default Celular;