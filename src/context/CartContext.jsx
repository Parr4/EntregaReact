import { useContext, createContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // Estado del cartlist
    const [cartList, setCartList] = useState([])
    // modificacion del cartlist 

    const addToCart = (product) => {
        console.log("addtocart: ",product)
        // comprobar si esta el producto

        const idx = cartList.findIndex(prod => `${prod.id}.${prod.franqId}` == `${product.franqId}.${product.id}`)
        console.log("idx", idx)
        // si no esta = -1

        if (idx !== -1) {
            // console.log(prod.id)

            // cartList[idx].cant = cartList[idx].cant + product.cant
            cartList[idx].cant += product.cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product]) // push
        }
        // console.log(cartList)

    }

    // precio total ----- en caso de falla cambiar el nombre de product para que no repita en el codigoo
    const totalPrice = () => cartList.reduce((count, product) => count += (product.price * product.quant), 0 )

    // ccantidad total 
    const totalQuant = () => cartList.reduce((count, product) => count += product.quant , 0)

    // vaciar carrito 
    const clearCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        setCartList (  setCartList.filter(prod = prod.id !== id) )
    }
    // inInCart
    // eliminar por item
    // cantidad total de product
    // precio total

    return ( 
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            clearCart,
            totalPrice,
            totalQuant,
            deleteItem
        }}>
            {children}
            </CartContext.Provider>
    )
    
}