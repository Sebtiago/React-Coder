import Navbar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import "./App.css"
import { NotificationProvider } from './Notification/notification'

import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"

function App() {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <Navbar />
              <Routes>
                  <Route path='/' element={<ItemListContainer home={true}/>}></Route>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                  <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
                  <Route path='/cart'  element={<Cart />}></Route>
                  <Route path='/checkout'  element={<Checkout />}></Route>
                  <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
              </Routes>
            </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
