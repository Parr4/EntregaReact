import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListConteiner/ItemListContainer'
import Footer from './assets/Footer/Footer'
import Relleno from './assets/Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListDetails from './components/ItemListDetails/ItemListDetails'
import ComClass from './assets/ComponentesClase/ComClass'
import CatalogImport from './components/FetchCatalog/FetchCatalog'
import CartContainer from './components/CartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'

// import { AddButton } from './components/CarritoWidget/CarritoWidget'






function App() {

  // const [count, setCount] = useState(0)
  // let titleApp = 'Titulo de app'
  <getCatalogProducts/>

  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        {/* <CatalogImport/> */}
        <Routes>
          <Route path='/' element={<Title titulo='Shaman Manga Store' subtitulo='Tu tienda de Mangas'  />}/>
          <Route path='/catalog' element= { <ItemListContainer  />}/>
          <Route path='/catalog/:franqId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          {/* <Route path='/catalog/:franqId/:/*' element={<ItemListDetails/>}/> */}
          <Route path='/catalog/:franqId/:productId' element={<ItemListDetails/>}/>
          <Route path='*' element=<Navigate to="/"/>/>
        </Routes>

        {/* <img classname="w-100" src="src/assets/img/shaman-kinghd.jpeg" alt="" /> */}
        <Footer/>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App


