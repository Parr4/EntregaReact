import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InitFirestoreApp } from './firestore/config'
import './index.css'

<InitFirestoreApp/>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
