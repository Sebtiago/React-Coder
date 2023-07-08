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

    return(
        <CartContext.Provider value={{ cart , addItem , totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}