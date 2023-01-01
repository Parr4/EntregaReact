import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {InitFirestoreApp} from "../../firestore/config"




const db = getFirestore(InitFirestoreApp)

const queryCollection = collection(db, 'productos')
console.log("Query: ", queryCollection)
export const GetCatalogProducts = getDocs(queryCollection)

