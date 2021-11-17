import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])

    
    return (
    <>
        <div>
            <hr/>
            <h2>Bienvenido al ECOMMERCE</h2>
            <hr/>
        </div>     

        {
            loading 
                 ? <h2>Cargando....</h2> 
                 : <ItemList productos = {productos}/>
        }


     
        
    </>
    )
}
