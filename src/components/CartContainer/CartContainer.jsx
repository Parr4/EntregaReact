import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useCatalog } from "../FetchCatalog/FetchUse"



const CartContainer = () => {
  const [ dataForm, setFormData ] =  useState({
    name: '',
    email: '',
    phone: ''
  })
  const { cartList, clearCart, totalPrice, deleteItem } = useCartContext()
  console.log(cartList)


  // Descripción de la actividad
  // Usa tu tus ítems del cart para modelar tu orden al siguiente formato:
  // { buyer: { name, phone, email }, items: [ {id, title, price} ] , total  }, si todavía no creaste el formulario de compra puedes usar un objeto hardcodeado de tipo { name, phone, email }. 
  

  const addOrder = (e) => {
    e.preventDefault()
    // armar la orden de un formulario
    const order = {}
    order.buyer = dataForm
    order.price = totalPrice()
    order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )

    const {products, error, loading} = useCatalog()
    

    // muchas ordenes 

    // productos.forEach(async prod => {
    //   await addDoc()
    // });


// comentar o descomentar esto
    // const db = getFirestore()
    // const queryCollection = collection(db, 'orders')

    
    // addDoc(queryCollection, order)
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err))
    // .finally(() => clearCart())
// hasta aca


    // update 
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   stock: 100
    // })

    // borrado lógico
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   isActive: false
    // })


    console.log('se actualizo')
  }

  const handleOnChange = (e) => {
    // console.log('npmbre del input: ',e.target.name)
    // console.log('valor del input',e.target.value)
    setFormData( {
      ...dataForm,
      [e.target.name]: e.target.value
    } )
  }
  console.log(dataForm)
  console.log("Carlist: ", cartList)
  return (
    <div>
      { cartList.length !== 0 ? 
      <>
        {cartList.map(prod => <div key={prod[0].id}>
                                <div className="w-50">
                                <img src={prod.foto} alt="" className='w-25' /> 
                                

                                </div>
                              Nombre: { prod[0].franquicia} {prod[0].tomo} - {prod[0].editorial}- precio: {prod.price} - cantidad: {prod.cant}
                                  <button onClick={() => deleteItem(prod.id)} className="btn btn-danger"> X </button>
                                </div>
                                ) 
          }
                              <h4>El precio total es: { totalPrice() } </h4>

                              <form onSubmit={addOrder} >
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='name' 
                                  value={dataForm.name}
                                  placeholder="ingrese el nombre" 
                                />
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='phone' 
                                  value={dataForm.phone}
                                  placeholder="ingrese el phne" 
                                />
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email' 
                                  value={dataForm.email}
                                  placeholder="ingrese el email" 
                                />

                                <button className="btn btn-outline-success" >Terminar Compra</button>
                              </form>

                              <button className="btn btn-danger" onClick={clearCart} >Vaciar carrito</button>
                              
                              
                          
      </>
      
      : 
        <>
          <h2>Anda pa ya Bobo</h2>
          <Link to= '/' > Ir home </Link>
        </>
}
    </div>
  )
}

export default CartContainer
