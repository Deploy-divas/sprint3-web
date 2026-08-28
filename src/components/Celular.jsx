function Celular({ children }) {
    return (
        <div className="phone">
            <div className="screen">
                {children}
            </div>
        </div>
    );
}

export default Celular;