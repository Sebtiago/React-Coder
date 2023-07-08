import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import { useAsync } from '../../hooks/useAsync'

import { getProducts } from '../services/firestore/products'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.css"
import Banner from '../Banner/Banner'


const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    if(loading) {
        return <Loader/>
    }

    if(error) {
        return 
                <h1>Hubo un error al obtener los productos, cargue nuevamente</h1>

    }
    
    return(
        <div>
            <Banner/>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer