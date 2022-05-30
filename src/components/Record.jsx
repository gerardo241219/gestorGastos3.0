import cashFormat from "../helpers/cashFomart"

const Record = ({id, type, categorie, description, amount}) => {

    const cash = cashFormat(amount);

    return (
        <div className="record">
            <div className="record__header">
                <h3 className="record__type">{type}</h3>
                <h5 className="record__category">{categorie}</h5>
            </div>
            <div className="record__body">
                <p className="record__description">{description}</p>
                <h3 className="record__price">{`${cash}`}</h3>
            </div>
            <div className="record__footer">
                <p>{"--> Editar"}</p>
                <p>{"<-- Eliminar"}</p>
            </div>
        </div>
    )
}

export default Record