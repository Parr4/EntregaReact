import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { CarritoWidget } from "../CarritoWidget/CarritoWidget";


const BotonCant = ({ products }) => {
    const [cantidad, setCantidad] = useState(1)


    const { AddToCart, cartList, clearCart, totalPrice, deleteItem } = useCartContext()

    // function sumar(event) {
    //     if (cantidad >= products.stock) {
    //         event.preventDefault()
    //     }
    //     else {
    //         setCantidad(cantidad + 1)
    //         console.log(cantidad)
    //     }
    // }

    // function restar(event) {
    //     if (cantidad <= 0) {
    //         event.preventDefault()
    //     }
    //     else {
    //         setCantidad(cantidad - 1)
    //         console.log(cantidad)
    //     }
    //     console.log({ products })
    // }
    // function AddToCart(){
    //     //  <Cart addProduct={products}/>
    //     Cart(products)
    //     // <Cart addProduct={products}/>
    //     console.log("añadido")
    // }
    // function agregaCantidad {
    //     <CarritoWidget ={'{cantidad}'}/>
    // }

    // <CarritoWidget cantidad={cantidad}/>


    console.log('Estai viendo esta wea', products, products.stock)
    return (
        <div>
            {/* <div className=" btn btn-warning">
                <button id="delButton" className=" btn btn-danger" onClick={restar}>-</button>

                <div>
                    Cantidad: {cantidad}
                </div>
                <button id="addButton" className=" btn btn-danger" onClick={sumar}>+</button>
            </div> */}
            {/* <div>
                {isCant ?

                    <>
                        <Link to="/cart">
                            <button className='btn btn-outline-primary'>Ir al carrtio</button>

                        </Link>
                        <Link to="/">
                            <button className='btn btn-outline-success'>Seguir comprando </button>
                        </Link>
                    </>

                    :
                    <ItemCount
                        stock={products.stock}
                        initial={1}
                        onAdd={onAdd}
                    />}

            </div> */}



        </div>
    )

}
export default BotonCant