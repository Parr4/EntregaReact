import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { InitFirestoreApp } from "../../firestore/config"




export const useCatalog = () => {
    const [products, setProducts] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const { franqId } = useParams()

    const db = getFirestore(InitFirestoreApp)
    const queryCollection = collection(db, 'productos')

    useEffect(() => {


        if (franqId == null) {
            getDocs(queryCollection)
        // .then((data =>{console.log("DATA: ",data)}))
        .then((data) => {
            setProducts(data.docs.map((products)=> ({id: products.id, ...products.data()})
            ))
        })
        .catch ((err) => setError(err))
        .finally(() => {setLoading(false)})}


        else {

            const filtredList = query(queryCollection, where('franqId', '==', franqId))
            getDocs(filtredList)
            .then((data) => {setProducts(data.docs.map((products) => ({ id: products.id, ...products.data() })))})
            .catch ((err) => setError(err))
            .finally(() => {setLoading(false)})
        }
        // .finally(() => {console.log("Productos:", products)})
    }, [])



    return{products, error, loading}
}