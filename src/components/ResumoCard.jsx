function ResumoCard({ titulo, descricao, categoria, data }) {

    return (
        <div className="card">

            <div className="card-top">

                <h2>{titulo}</h2>

                <p>{descricao}</p>

                <span className="categoria">
                    {categoria}
                </span>

            </div>

            <div className="card-bottom">

                <p>
                    🗓 Criado em {data}
                </p>

            </div>

        </div>
    );
}

export default ResumoCard;