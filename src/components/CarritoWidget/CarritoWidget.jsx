
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
// import {cantidad} from '../BotonCant/BotonCant'

const CarritoWidget = () => {
    // const [count, changeCountValue] = useState(0)
    // const handleCountChanger = () => {
    //     changeCountValue(count + cantidad)
    //     console.log(count)
    //     // console.log(valor)
    //   }
    const {totalQuant} = useCartContext()

    return (
        <div className="CarritoWidget">
            <Link to= '/cart' ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="" /></Link>
            <div className="cantidad" >
                <p className="cantidad">{totalQuant()}</p>


            </div>

            {/* <button id='addCount' onClick={ handleCountChanger }> Añadir producto +</button> */}
        </div>
        
    )
}

// function AddButton() {

//     return(

//     )


// }





export {CarritoWidget}
