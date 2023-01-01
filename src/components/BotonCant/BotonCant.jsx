import React, { useState } from "react";
import { CarritoWidget } from "../CarritoWidget/CarritoWidget";

const BotonCant = ({ product }) => {
    const [cantidad, setCantidad] = useState(1)

    function sumar(event) {
        if (cantidad >= product.stock) {
            event.preventDefault()
        }
        else{
        setCantidad(cantidad+1)
        console.log(cantidad)}
    }

    function restar(event) {
        if (cantidad <= 0) {
            event.preventDefault()
        }
        else{
        setCantidad(cantidad-1)
        console.log(cantidad)}
    }
    // function agregaCantidad {
    //     <CarritoWidget ={'{cantidad}'}/>
    // }

    // <CarritoWidget cantidad={cantidad}/>

    
    console.log('Estai viendo esta wea', product)
    return (
        <div>
            <div className=" btn btn-warning">
                <button id="delButton" className=" btn btn-danger" onClick={restar}>-</button>

                <div>
                    Cantidad: {cantidad}
                </div>
                <button id="addButton" className=" btn btn-danger" onClick={sumar}>+</button>
            </div>
            <button> Añadir al carrito</button>



        </div>
    )

    }
export default BotonCant