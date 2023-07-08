import { createContext, useContext, useState } from "react";

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([])

    const addItem =(productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev,productToAdd])
        }else{
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

    const isInCart = (id) => {return cart.some(prod => prod.id === id)}

    const getTotalQuantity = () =>{
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => setCart([])


    return(
        <CartContext.Provider value={{ cart , addItem , totalQuantity , total , clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}