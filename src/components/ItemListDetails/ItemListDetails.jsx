import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import AddCartButton from '../AddCartButton/AddCartButton'
import BotonCant from "../BotonCant/BotonCant"
import CatalogImport from '../FetchCatalog/FetchCatalog'
import { useCatalog } from '../FetchCatalog/FetchUse'

const ItemListDetails = () => {
    const [product, setProduct] = useState({})
    // const [loading, setLoading] = useState(true)

    
    const {products, error, loading} = useCatalog()
    const { franqId ,productId } = useParams()
    console.log('Id producto: ', franqId, productId)

    console.log("catalogogog", CatalogImport)



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
        // <Link to={`catalog/detail/${product.franqId}.${product.id}`}>
        <section>
            {loading ?
          <h2>Cargando Productos!</h2>
          :
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${products[0].franquicia} ${products[0].tomo} / ${products[0].editorial}`}
                </div>
                <div className="card-body">
                    <img src={`/src/assets/img/${products[0].franquicia}/${products[0].tomo}.jpg`} alt='' className='w-50' />
                    {products[0].precio}
                    <p>Stock disponible: {products[0].stock}</p>
                </div>
                <div className="card-footer">
                    <AddCartButton/>
                    <BotonCant product={products}/>
                </div>
            </div>}
        </section>
        // </Link>
    )
}

export default ItemListDetails
