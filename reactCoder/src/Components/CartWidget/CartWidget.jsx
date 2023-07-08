import { useCart } from '../../Context/CartContext'
import cart from '../../assets/cart.svg'
import './CartWidget.css'


const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div>
            <img src={cart} alt='cart-widget'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget