import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useCatalog } from "../FetchCatalog/FetchUse"
import OrderForm from "./OrderForm"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CartContainer = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { cartList, clearCart, totalPrice, deleteItem, totalQuant } = useCartContext()

  // console.log(cartList)


  // Descripción de la actividad
  // Usa tu tus ítems del cart para modelar tu orden al siguiente formato:
  // { buyer: { name, phone, email }, items: [ {id, title, price} ] , total  }, si todavía no creaste el formulario de compra puedes usar un objeto hardcodeado de tipo { name, phone, email }. 


  const addOrder = (e) => {
    e.preventDefault()
    // armar la orden de un formulario

    const order = {};
    order.buyer = { name, email, phone };
    order.total = totalPrice();
    order.items = cartList.map(CartItem => {

      const id = `${CartItem.franqId}.${CartItem.id}`;
      const nombre = `${CartItem.franquicia} ${CartItem.editorial} ${CartItem.tomo}`;
      const precio = CartItem.precio;
      const cantidad = CartItem.count;
      return { id, nombre, precio, cantidad };
    })



    // const {products, error, loading} = useCatalog()


    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    // muchas ordenes 
    addDoc(queryCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        setShowModal(true)
        // setShowModal(true)
      })

      .catch(err => console.log('ERROR AL GENERAL LA ORDEN', err))
    // .finally(() => clearCart())



    // console.log('se actualizo')
  }
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




  const handleOnChange = (e) => {
    // console.log('npmbre del input: ',e.target.name)
    // console.log('valor del input',e.target.value)
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  // console.log(dataForm)
  // console.log("Carlist: ", cartList)



  const notValid = !(name.length && email.length && phone.length > 0);


  return (
    <div>
      {cartList.length !== 0 ?
        <>
          {cartList.map(prod => <div key={`${prod.franqId}.${prod.id}`}>
            <div >
              <div className="row prodCart">
                <img src={`/src/assets/img/${prod.franquicia}/${prod.tomo}.jpg`} alt="" className="col-1" />
                <div className="col-5 prodCart">
                  <p> Producto: {prod.franquicia} {prod.tomo}</p>
                  <p>Editorial: {prod.editorial} </p>
                  <p>Precio Unitario: ${prod.precio}</p>
                  <p>Cantidad: {prod.count} (${`${prod.count * prod.precio}`} / total)</p>

                </div>

                <button className="col-1 btn btn-danger" onClick={() => deleteItem(prod.franqId, prod.id)}> X </button>
              </div>

            </div>


          </div>
          )
          }
          <div className="container">
            <h4>Llevas {totalQuant()} articulos por un total de ${totalPrice()}   </h4>
          </div>


          <div className="checkout-container">
            <h2 className="checkout-title">Rellena tus datos</h2>
            <p className="checkout-p">Esto nos permitirá confirmar la compra</p>

            <OrderForm
              createOrder={addOrder}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              notValid={notValid}
              phone={phone}
              setPhone={setPhone}
              setShowModal={setShowModal} />

            {showModal && <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              orderId={orderId} />}
          </div>




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
