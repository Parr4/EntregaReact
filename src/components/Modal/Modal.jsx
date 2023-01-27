import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useCartContext } from "../../context/CartContext";
import '../../App.css'




const Modal = ({ showModal, setShowModal, orderId }) => {
    const { clearCart } = useCartContext()


    return (
        <>
            {
                { showModal, orderId } &&
                <div className="modal-container">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-title">
                                <h3>¡LA COMPRA FUE REALIZADA CON ÉXITO!</h3>
                                
                            </div>
                            <div className="modal-body">
                                <p>Puede hacer seguimiento del pedido con su codigo de orden: </p>
                                <p> {orderId} </p>
                            </div>
                            <div className="modal-footer">
                                <Link to='/'>
                                    <button type="button" className="btn btn-primary"  onClick={clearCart}>Aceptar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Modal;