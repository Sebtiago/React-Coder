import { useEffect, useState } from "react"
//import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.css"
import logoCTH from '../../assets/logoCTH.svg'

import { useParams } from "react-router"

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'


const ItemListContainer = () =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    


    useEffect(() => {
        const productsRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(productsRef)
            .then(querySnapshot =>{
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                }) 
                
                setProducts(productsAdapted)
            })
            .finally(() => {
            })
            

       }, [categoryId])
    
    
    return(
        <div>
            <div className="Banner">
                    <img className="LogoBanner" src={logoCTH} alt="Logo CTH" />
                    <p>El futuro está en tus manos. Únete a Coder Tech-Hub hoy mismo</p>
                </div>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer