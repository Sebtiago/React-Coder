 import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import { useNotification } from "../../Notification/notification"

const ItemDetail =({id,name,img, category,description,price,stock}) =>{

    const [quantity, setQuantity] = useState(0)

    const { setNotification } = useNotification()

    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
         setQuantity(quantity)

        const objProduct = {
            id, name, price, quantity,img
        }

        addItem(objProduct)
        setNotification('sucess',`Se agregó correctamente ${name} al carrito de compras`)
    }
    
    return(
        <article className="CardItemDetail">
            <header className="CardHeaderDetail">
                <picture>
                    <img src={img} alt={name} className="ItemImgDetail"/>
                </picture>
            </header>
            <section className="CardInfoDetail">
                <h2 className="CardTitleDetail">
                    {name}
                </h2>
                <p> Categoría:{category}</p>
                <p>Descripción: {description}</p>
                <p>Cantidad disponibles: ${stock}</p>
                <div className="CardPriceDetail">${price}</div>
                <div className="CardFooterDetail">
                     {
                        quantity > 0 ? (
                            <Link to='/cart' className="CardCart" >Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>

                        )
                     }   

                </div>

           </section>
            
     </article>

    )
}

export default ItemDetail