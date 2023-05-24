//import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </>
  )
}

export default App
