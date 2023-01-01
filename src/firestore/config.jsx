// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDThGsTUcO3-zgUdomjfP-_8HcNs7KkHUs",
  authDomain: "shamanmangareact.firebaseapp.com",
  projectId: "shamanmangareact",
  storageBucket: "shamanmangareact.appspot.com",
  messagingSenderId: "67927242120",
  appId: "1:67927242120:web:17199a959018d3e9b8763d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const InitFirestoreApp = () => {
    return app
}
