import React, { useState } from "react";
import { CarritoWidget } from "../CarritoWidget/CarritoWidget";
import { Cart } from "../Cart/Cart";

const BotonCant = ({ products }) => {
    const [cantidad, setCantidad] = useState(1)


    function sumar(event) {
        if (cantidad >= products.stock) {
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
        console.log({products})
    }
    function AddToCart(){
        //  <Cart addProduct={products}/>
        Cart(products)
        // <Cart addProduct={products}/>
        console.log("añadido")
    }
    // function agregaCantidad {
    //     <CarritoWidget ={'{cantidad}'}/>
    // }

    // <CarritoWidget cantidad={cantidad}/>

    
    console.log('Estai viendo esta wea',products, products.stock)
    return (
        <div>
            <div className=" btn btn-warning">
                <button id="delButton" className=" btn btn-danger" onClick={restar}>-</button>

                <div>
                    Cantidad: {cantidad}
                </div>
                <button id="addButton" className=" btn btn-danger" onClick={sumar}>+</button>
            </div>
            <button onClick={AddToCart}> Añadir al carrito</button>



        </div>
    )

    }
export default BotonCant