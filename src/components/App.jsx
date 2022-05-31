import { useEffect, useState } from "react"
import FloatButton from "./FloatButton";
import Header from "./Header"
import Main from "./Main"

const App = () => {

  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState({});

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [estimate, setEstimate] = useState(0);
  const [procent, setProcent] = useState(0);

  const [add, setAdd] = useState(true); // Reconoce cuando se quiere hacer un nuevo registro
  const [recordAnimation, setRecordAmination] = useState(false);

  // Comprobamos si ya existe un registro
  useEffect(() => {
    if(records.length > 0 ) {
      setAdd(false);

      const filterIncome = records.filter(record => record.type === "ingresos");
      const totalIncome = filterIncome.reduce((total, income) => total + income.amount, 0);
      setIncome(totalIncome);
      
      const filterExpense = records.filter(record => record.type === "gastos");
      const totalExpense = filterExpense.reduce((total, expense) => total + expense.amount, 0);
      setExpense(totalExpense);

      setEstimate(totalIncome - totalExpense);
      
      if(totalIncome !== 0) {
        setProcent((( totalExpense * 100 ) / totalIncome));
      } else {
        setProcent(0);
      }

      setRecordAmination(true);
    } else {
      setAdd(true);
      setRecordAmination(false);
      setIncome(0);
      setExpense(0);
      setEstimate(0);
    }
  }, [records]);

  useEffect(() => {
    if(Object.keys(record).length > 0) {
      setAdd(true);
      setRecordAmination(false);
    } 
  }, [record])

  return (
    <div className="app">
      <Header 
        add={add}
        records={records}
        setRecords={setRecords}
        income={income}
        expense={expense}
        estimate={estimate}
        procent={procent}
        record={record}
        setRecord={setRecord}
      />
      <Main
        records={records}
        setRecords={setRecords}
        setRecord={setRecord}
        recordAnimation={recordAnimation}
      />
      <FloatButton 
        records={records}
        add={add}
        setAdd={setAdd}
        setRecordAmination={setRecordAmination}
      />
    </div>
  )
}

export default App
