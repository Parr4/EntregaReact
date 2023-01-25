import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useCatalog } from "../FetchCatalog/FetchUse"



const CartContainer = () => {
  const [dataForm, setFormData] = useState({
    name: '',
    email: '',
    phone: '569'
  })
  const { cartList, clearCart, totalPrice, deleteItem, totalQuant } = useCartContext()
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
    order.items = cartList.map(({ franqId, id, precio, franquicia, tomo, editorial, count }) => ({ franqId, id, franquicia, tomo, precio, editorial, count }))

    // const {products, error, loading} = useCatalog()


    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    // muchas ordenes 

    // productos.forEach(async prod => {
    //   await addDoc()
    // });

    addDoc(queryCollection, order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => clearCart())


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
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  console.log(dataForm)
  console.log("Carlist: ", cartList)
  return (
    <div>
      {cartList.length !== 0 ?
        <>
          {cartList.map(prod => <div key={`${prod.franqId}.${prod.id}`}>
            <div className="w-50">
              <img src={prod.foto} alt="" className='w-25' />


            </div>
            Nombre: {prod.franqId} {prod.franquicia} {prod.tomo} - {prod.editorial}- precio: ${prod.precio} - Cantidad: {prod.count}
            <button onClick={() => deleteItem(prod.franqId, prod.id)} className="btn btn-danger"> X </button>
          </div>
          )
          }
          <h4>Llevas {totalQuant()} articulos por un total de ${totalPrice()}   </h4>

          <div className="formularioCompra">
            <form onSubmit={addOrder} >
              <div className="input name">
                Nombre
                <input
                  type="text"
                  onChange={handleOnChange}
                  name='name'
                  value={dataForm.name}
                  placeholder="Nombre Completo"
                  pattern={`[a-zA-Z ]{4,40}$`}
                /></div>
              <div className="input phone">
                Numero de contacto
                <input
                  type="text"
                  onChange={handleOnChange}
                  name='phone'
                  value={dataForm.phone}
                  placeholder="56912345678 "
                  size={11}
                  maxLength={11}
                  pattern={`[0-9]{11,11}$`}
                /></div>
              <div className="input mail">
                E-mail
                <input
                  type="text"
                  onChange={handleOnChange}
                  name='email'
                  value={dataForm.email}
                  placeholder="ingrese el email"
                  pattern={`[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,40}$`}
                /></div>

              <button className="btn btn-outline-success" >Terminar Compra</button>
            </form>
          </div>

          <button className="btn btn-danger" onClick={clearCart} >Vaciar carrito</button>



        </>

        :
        <>

          <Link to='/catalog' > <h2>Veo que aun no compras nada, que tal si vamos a echar un vistazo?</h2> </Link>
        </>
      }
    </div>
  )
}

export default CartContainer
