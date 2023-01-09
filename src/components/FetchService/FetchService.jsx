import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { InitFirestoreApp } from "../../firestore/config"
import { useCatalog } from '../FetchCatalog/FetchUse'




const { franqId } = useParams()

const db = getFirestore(InitFirestoreApp)

// const { franqId } = useParams()


const queryCollection = collection(db, 'productos')
// if (franqId != null) {
//     // const filtredList = query(queryCollection, where('franqId', '==', franqId))

// }


console.log("Query: ", queryCollection)

const GetCatalogProducts = getDocs(queryCollection)
const filtredList = query(queryCollection, where('franqId', '==', franqId))
const GetCatalogProductsFiltred = getDocs(filtredList)


