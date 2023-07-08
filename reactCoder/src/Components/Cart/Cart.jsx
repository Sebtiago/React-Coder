import { useCart } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "../Cart/Cart.css"

const Cart =()=>{
    const { cart, total, clearCart }= useCart()
    return(
        <>
        <h1 className="CartList">Carrito de Compra</h1>
        {total == 0 && (
                <h3>Carrito de compra vacio</h3>
            )}
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ alignItems: 'center', backgroundColor: '#FFFCF2', display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', padding: '1rem', position: 'relative', width: '80%', margin: '1rem auto', borderRadius: '5px', border: '2px solid #252422' }}>
                            <h3 className="list">{prod.name}</h3>
                            <h3 className="list">${prod.price}</h3>
                            <h3 className="list">cantidad: {prod.quantity}</h3>
                            <h3 className="list">subtotal: {prod.quantity * prod.price}</h3>
                            <button onClick={() => clearCart()} className="Option">Remover</button>
                        </div>
                    )
                })
            }
           {total !== 0 && (
                <div  style={{ display: 'flex', flexDirection: 'row', gap: '100px', margin: '2rem auto', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFCF2', borderRadius: '5px', border: '2px solid #252422', width: '1000px' }}>
                    <h1 className="Total">Total de la compra: ${total}</h1>
                    <Link to="/checkout">
                        <button className="Option">Checkout</button>
                    </Link>
                </div>
            )}
       

           
        </>
    )
}

export default Cart