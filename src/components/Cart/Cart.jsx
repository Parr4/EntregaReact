import { Card } from "react-bootstrap"

const cartListProducts = []
export const Cart = (event) =>{
    console.log(event.franquicia, event.tomo)


  
    console.log(cartListProducts)
    cartListProducts.push( event )
    console.log("Carrito:", cartListProducts)


    return(
        cartListProducts.map(products => <div
            style={{ justifyContent: 'center' }}
            className='card col-lg-2 col-md-4 col-sm-6 col-6'
            key={`${products.id} + . + ${products.franqId}`}
          >
              <Card.Title>{products.franquicia} / {products.tomo}</Card.Title>
    </div>))



}