import { useState } from "react";
import "../ItemCount/ItemCount.css"
import cart from '../../assets/cart.svg'
import cartBlack from '../../assets/cartBlack.svg'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setQuantity] =useState(initial)

    const increment = () =>{
        if(count < stock){
            setQuantity(count+1)
        }
    }
    const decrement = () =>{
        if(count>1){
            setQuantity(count-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="ButtonL" onClick={decrement}>-</button>
                <h4 className="Number">{count}</h4>
                <button className="ButtonR" onClick={increment}>+</button>
            </div>
            <button  onClick={() => onAdd(count)} diseable={!stock} className="ButtonCart">
                <img className="SvgCartBlack" src={cartBlack} alt="CartSVG" />
                <img className="SvgCart" src={cart} alt="CartSVG" />
                 Agregar al carrito
    
            </button>

        </div>


    )


}
export default ItemCount