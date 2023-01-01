import {useState} from 'react'
import {useEffect} from 'react'
import { GetCatalogProducts } from '../FetchService/FetchService'



export const useCatalog = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetCatalogProducts()
        .then((data) => {
            setProducts( data.docs.map((doc)=> ({id: products.id, ...products.data()})
            ))
        })
        .catch ((err) => setError(err))
        // .finally(() => {setLoading(false)})
        .finally(() => {console.log("Productos:", products)})
    }, [])

    return{products, error, loading}
}