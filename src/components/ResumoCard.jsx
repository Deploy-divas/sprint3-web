function ResumoCard({ titulo, descricao, categoria, data, tempoLeitura }) {

    return (
        <div className="card">

            <div className="card-top">

                <h2>{titulo}</h2>
                <h3>
                    {tempoLeitura}{" "} {tempoLeitura === 1 ? "minuto" : "minutos"}
                </h3>

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