import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductCard } from '../ProductCard/ProductCard'
import monster from '../../assets/monsterEnergy.jpg'



export const ItemListContainer = () => {
    return (
    <div>
        <Container>
            <hr/>
            <h2>Bienvenido al ECOMMERCE</h2>
            <hr/>
            <ProductCard img={monster} name="Monster Energy ULTRA"/>

        </Container>
        
    </div>
    )
}
