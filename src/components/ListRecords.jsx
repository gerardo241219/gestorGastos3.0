import Record from "./Record"

const ListRecords = ({records}) => {
  return (
    <div className="list">
        {
            records.map(record => (
                <Record 
                    key={record.id}
                    type={record.type}
                    categorie={record.categorie}
                    description={record.description}
                    amount={record.amount}
                />
            ))
        }
    </div>
  )
}

export default ListRecords