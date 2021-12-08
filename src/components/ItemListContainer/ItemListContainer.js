import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)
        
        //1. armar la referencia
        const productosRef = collection(db, 'productos')

        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef
        //2. GET a esa referencia
        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id, //traemos el ID del firebase
                    ...doc.data() //traemos todos los demas campos
                }))
                console.log(items)
                setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })




    }, [catId])

    
    return (
    <>
        <div>
            <hr/>
            <h2>Bienvenido al ECOMMERCE</h2>
            <hr/>
        </div>     

        {
            loading 
                 ? <Loader/> 
                 : <ItemList productos = {productos}/>
        }


     
        
    </>
    )
}
