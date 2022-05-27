import { useEffect, useState } from "react"
import Header from "./Header"

const App = () => {

  const [records, setRecords] = useState([]);
  const [add, setAdd] = useState(true); // Reconoce cuando se quiere hacer un nuevo registro

  // Comprobamos si ya existe un registro
  useEffect(() => {
    if(records.length > 0 ) {
      setAdd(false);
    }
  }, [records]);

  return (
    <div>
      <Header 
        add={add}
        records={records}
        setRecords={setRecords}
      />
    </div>
  )
}

export default App
