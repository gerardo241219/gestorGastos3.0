import ListRecords from "./ListRecords"

const Main = ({records, recordAnimation}) => {
  return (
    <div className={`main ${recordAnimation && `main-active`}`}>
        <h3 className="main__title">Registros</h3>
        <hr className="main__separator"/>

        <ListRecords 
            records={records}
        />
    </div>
  )
}

export default Main