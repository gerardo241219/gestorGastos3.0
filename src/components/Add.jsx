import { useEffect, useState } from "react";
import generateKey from "../helpers/generateKey";

const Add = ({ records, setRecords }) => {

    const [type, setType] = useState("");
    const [categorie, setCategorie] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [obj, setObj] = useState([]);

    // Verificos el tipo de registro para modificar el contenido de la categoria
    useEffect(() => {

        if(type === "ingresos") {
            setObj([
                {id: 1,value:"sueldo", text:"Sueldo"},
                {id: 2,value:"ventas", text:"Ventas"},
                {id: 3,value:"inversiones", text:"Inversiones"},
                {id: 4,value:"loteria", text:"Loteria"},
                {id: 5,value:"reembolsos", text:"Reembolsos"}, 
            ])
        }

        if(type === "gastos") {
            setObj([
                {id: 1,value:"comida", text:"Comida"},
                {id: 2,value:"transporte", text:"transporte"},
                {id: 3,value:"coche", text:"Coche"},
                {id: 4,value:"entretenimiento", text:"Entretenimiento"},
                {id: 5,value:"compras", text:"Compras"},
                {id: 6,value:"ropa", text:"Ropa"}, 
                {id: 7,value:"social", text:"Social"}, 
                {id: 8,value:"bebe", text:"Bebe"},  
            ])
        }
    }, [type]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([type, categorie, amount].includes('')) {
            alert('Debes llenar todos los campos para poder continuar');
            return;
        }

        if(amount === 0) {
            alert('Debes de agregar una cantidad');
            return;
        }

        const id = generateKey();

        const objRecord = {
            id,
            type,
            categorie,
            description,
            amount
        }

        
        setRecords([...records, objRecord]);

        setType("");
        setCategorie("");
        setDescription("");
        setAmount(0);
    }

  return (
    <div className="add">
        <form 
            className="add__form"
            onSubmit={handleSubmit}
        >
            <div className="add__form-inputs">
                <label 
                    htmlFor="type"
                    className="add__form-label"
                >Tipo de registro</label>
                <select  
                    id="type"
                    value={type}
                    onChange={e => setType(e.target.value)}
                >
                    <option value="">-- Selecciona un tipo de registro --</option>
                    <option value="ingresos">Ingresos</option>        
                    <option value="gastos">Gastos</option>
                </select>  
            </div>

            <div className="add__form-inputs">
                <label 
                    htmlFor="categorie"
                    className="add__form-label"
                >Categoria</label>
                <select  
                    id="categorie"
                    value={categorie}
                    onChange={e => setCategorie(e.target.value)}
                >
                    <option value="">-- Selecciona una categoria --</option>
                    {
                        obj.map(o => (
                            <option key={o.id} value={o.value}>{o.text}</option>
                        ))
                    }
                </select>  
            </div>

            <div className="add__form-inputs">
                <label 
                    htmlFor="description"
                    className="add__form-label"
                >Descripcion</label>
                <input 
                    type="text" 
                    id="description"
                    placeholder="Descripcion"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div className="add__form-inputs">
                <label 
                    htmlFor="amount"
                    className="add__form-label"
                >Cantidad</label>
                <input 
                    type="number" 
                    id="amount"
                    placeholder="Cantidad"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
            </div> 

            <div className="add__form-inputs">
                <input 
                    type="submit" 
                    value="Registrar"
                />
            </div>     
        </form>
    </div>
  )
}

export default Add