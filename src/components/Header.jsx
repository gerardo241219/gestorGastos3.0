import Card from "./Card"

const Header = ({ add, records, setRecords }) => {
    return (
        <div className={`header ${!add && 'header-small'}`}>
            <Card
                add={add}
                records={records}
                setRecords={setRecords}
            />
        </div>
    )
}

export default Header