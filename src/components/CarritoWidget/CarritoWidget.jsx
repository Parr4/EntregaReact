
import {useState} from 'react'
// import {cantidad} from '../BotonCant/BotonCant'

const CarritoWidget = ({cantidad}) => {
    const [count, changeCountValue] = useState(0)
    const handleCountChanger = () => {
        changeCountValue(count + cantidad)
        console.log(count)
        // console.log(valor)
      }

    return (
        <div className="CarritoWidget">
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="" />
            <div className="cantidad" >
                <p className="cantidad">{count}</p>


            </div>

            <button id='addCount' onClick={ handleCountChanger }> Añadir producto +</button>
        </div>
        
    )
}

// function AddButton() {

//     return(

//     )


// }





export {CarritoWidget}
