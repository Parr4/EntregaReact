import { useState } from "react"
import '../../App.css'



const ItemCount = ({ stock=5, initial=1, onAdd}) => {
    const [ count, setCount] = useState(initial)
    

    const restar = () => {
        if (count > initial) {
            setCount(count-1)            
        }
    }
    const sumar = () => {
        if ( count< stock) {
            setCount(count+1)            
        }
    }

    const handleOnAdd = () => {
        onAdd(count)

        
    }

    
    return (
       <div > 

            <div >
                <button onClick={sumar}  className="btn btn-outline-primary"> + </button>
                <label htmlFor="">{count}</label>
                <button  onClick={restar} className="btn btn-outline-primary"> - </button>
            </div>
            <div >
                <button className="btn btn-outline-success btn-block" onClick={ handleOnAdd }>Agregar al carrito</button>
            </div>
       </div> 
    )
}

export default ItemCount
