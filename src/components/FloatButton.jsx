const FloatButton = ({records, add, setAdd, setRecordAmination}) => {

    const handleFloatButton = (e) => {
        e.preventDefault();

        if(records.length === 0) {
            alert('Aun no tienes registros, favor de agregar un nuevo registro');
            return;
        }

        if(add) {
            setAdd(false);
            setRecordAmination(true);
            return;
        }
        
        setAdd(true);
        setRecordAmination(false);
    }

  return (
    <div 
        className={`floatButton ${add && `floatButton-add`}`}
        onClick={handleFloatButton}
    >
        {
            add ? "-" : "+"
        }
    </div>
  )
}

export default FloatButton