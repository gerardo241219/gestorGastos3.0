import React from 'react'
import Add from './Add'
import Info from './Info'

const Card = ({ add, records, setRecords }) => {
    return (
        <div className='card'>
            <h3 className='card__title'>Gestor de <span className='card__title-span'>gastos</span></h3>
            <hr className='card__separator' />
            {!add ? (
                <Info />
            ) : (
                <Add
                    records={records}
                    setRecords={setRecords}
                />
            )}
        </div>
    )
}

export default Card