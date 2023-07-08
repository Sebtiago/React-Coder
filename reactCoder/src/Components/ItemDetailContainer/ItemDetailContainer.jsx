import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import logoCTH from '../../assets/logoCTH.svg'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        document.title = product ? product.name : 'CODER TECH/HUB' 

        return () => document.title = 'CODER-TH'
    }, [product])

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <div className="Loading">
            <img src={logoCTH} alt={logoCTH} className="logoLoader"/>
            <h1>Estamos cargando tus productos</h1>
        </div>
        
    }

    return (
        <div className="ItemDetailContainer">
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}


export default ItemDetailContainer