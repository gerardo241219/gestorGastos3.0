import Record from "./Record"

const ListRecords = ({records, setRecords, setRecord}) => {
  return (
    <div className="list">
        {
            records.map(record => (
                <Record 
                    key={record.id}
                    record={record}
                    records={records}
                    setRecords={setRecords}
                    setRecord={setRecord}
                />
            ))
        }
    </div>
  )
}

export default ListRecords