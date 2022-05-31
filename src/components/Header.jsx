import Card from "./Card"

const Header = ({ add, records, setRecords, income, expense, estimate, procent, record }) => {
    return (
        <div className={`header ${!add && 'header-small'}`}>
            <Card
                add={add}
                records={records}
                setRecords={setRecords}
                income={income}
                expense={expense}
                estimate={estimate}
                procent={procent}
                record={record}
            />
        </div>
    )
}

export default Header