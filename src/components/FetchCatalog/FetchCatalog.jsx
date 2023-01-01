// import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, } from 'firebase/firestore'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

const CatalogImport = () =>{"hola"}

//   const [products, setProduct] = useState([])
//   const [loading, setLoading] = useState(true)


//   const { franqId } = useParams()


//   useEffect(() => {
//     const db = getFirestore()
//     const queryCollection = collection(db, 'productos')



//     if (franqId == null) {
//       getDocs(queryCollection)
//         .then(data => setProduct(data.docs.map(products => ({ id: products.id, ...products.data() }))))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))
//     } else {
//       const listaFiltrada = query(queryCollection, where('franqId', '==', franqId))
//       getDocs(listaFiltrada)
//         .then(data => setProduct(data.docs.map(products => ({ id: products.id, ...products.data() }))))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))
//     }
//   }, [franqId])

  
//   console.log({products})
// }

export default CatalogImport

