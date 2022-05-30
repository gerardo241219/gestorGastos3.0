import Details from "./Details"
import Graph from "./Graph"

const Info = ({ income, expense, estimate, procent }) => {
  return (
    <div className="info">
      <Graph
        procent={procent}
      />
      <Details
        income={income}
        expense={expense}
        estimate={estimate}
      />
    </div>
  )
}

export default Info