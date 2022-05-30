import cashFormat from "../helpers/cashFomart"

const Details = ({income, expense, estimate}) => {

    const incomeFormated = cashFormat(income)
    const expenseFormated = cashFormat(expense);
    const estimateFormated = cashFormat(estimate);

    return (
        <div className="details">
            <div>
                <h3 className="details__info">Ingresos: </h3> <span className="details__amount">{incomeFormated}</span>
            </div>
            <div>
                <h3 className="details__info">Gastos: </h3> <span className="details__amount">{expenseFormated}</span>
            </div>
            <div>
                <h3 className="details__info">Presupuesto: </h3> <span className="details__amount">{estimateFormated}</span>
            </div>
        </div>
    )
}

export default Details