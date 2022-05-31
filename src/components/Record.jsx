import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import cashFormat from "../helpers/cashFomart"

const Record = ({ records, record, setRecords, setRecord }) => {

    const {id, type, amount, categorie, description} = record;

    const deleteRecord = (id) => {
        const del = records.filter(record => record.id !== id);
        setRecords(del);
      }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setRecord(record)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => deleteRecord(id)}
            >
              Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    const cash = cashFormat(amount);

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className={`record ${type === "ingresos" ? 'record-income' : 'record-expensive'}`}>
                    <div className="record__header">
                        <h3 className={`record__type ${type === "gastos" && 'record-expensive-color'}`}>{type}</h3>
                        <h5 className="record__category">{categorie}</h5>
                    </div>
                    <div className="record__body">
                        <p className="record__description">{description}</p>
                        <h3 className={`record__price ${type === "gastos" && 'record-expensive-color'}`}>{`${cash}`}</h3>
                    </div>
                    <div className="record__footer">
                        <p>{"--> Editar"}</p>
                        <p>{"<-- Eliminar"}</p>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Record