//import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
