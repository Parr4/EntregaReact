import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContextProvider, useCartContext } from '../../context/CartContext'
import BotonCant from "../BotonCant/BotonCant"
import { Cart } from '../Cart/Cart'
import CatalogImport from '../FetchCatalog/FetchCatalog'
import { useCatalog } from '../FetchCatalog/FetchUse'
import ItemCount from '../ItemCount/ItemCount'
import { ItemListSelected } from '../ItemListSelected/ItemListSelected'

const ItemListDetails = () => {
    // const [product, setProduct] = useState({})
    // const [loading, setLoading] = useState(true)

    // const {products} = ItemListSelected()
    const { products, error, loading} = useCatalog()
    const { franqId ,productId } = useParams()
    console.log('Id producto: ', franqId, productId)


    const [isCant, setIsCant ] = useState(false)

    const {  addToCart } = useCartContext()


    const onAdd = (count) => {
        console.log('la cantidad seleccionada es: ',count)
        addToCart( {...products[0], count } )
        setIsCant(true)
    }

 
    // console.log("catalogogog", CatalogImport)



    // usar el useEffect en vez del useState, tira bucle xq esta 2 veces llamado
    // useState(() => {
    //     fetch('/objetos.json')
    //     .then(response => {
    //         return response.json()
    //     })
    //         // .then(respProduct => setProduct(respProduct[0]))
    //         .then(respProd => setProduct(respProd.find(prod => `${prod.franqId}.${prod.id}` == productId)))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))
    // })


    // useEffect(() =>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'productos')
    
    //     const itemSeleccionado = query(queryCollection, where('franqId', '==', franqId), where('id', '==', productId))

    //     getDocs(itemSeleccionado)
    //     .then(data => setProduct(data.docs.map(products => ({id: products.id, ...products.data()}))))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))
    //   }, [franqId, productId])

    // console.log('product', product[0])

    return (
        // <Link to={`catalog/detail/${products.franqId}/${products.id}`}>
        <section>
            {loading ?
          <h2>Cargando Productos!</h2>
          :
          products.map(products => <section
            style={{ justifyContent: 'center' }}
            className='col-lg-6 col-md-4 col-sm-6 col-6'
            key={`${products.id} + . + ${products.franqId}`}
          >
            <div className="card w-100 mt-5" />
                <div className="card-header">
                    {`${products.franquicia} ${products.tomo} / ${products.editorial}`}
                </div>
                <div className="card-body">
                    <img src={`/src/assets/img/${products.franquicia}/${products.tomo}.jpg`} alt='' className='w-50' />
                    {products.precio}
                    <p>Stock disponible: {products.stock}</p>
                </div>
                <div className="card-footer">
                    {/* <BotonCant products={products}/> */}
                </div>
                <div className="col">
                    {isCant ?
                    
                        <>
                            <Link to="/cart">
                                <button className='btn btn-outline-primary'>Ir al carrito</button>

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

                        />
                    
                    }

                </div>


                </section>)
            }
        </section>
        // </Link>
    )
}

export default ItemListDetails
