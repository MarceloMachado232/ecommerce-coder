import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {

    return (
        <Container className="my-5">
            <h2>Productos</h2>
            <hr/>
            <Row>
                {productos.map( (prod) => <Item key={prod.id} prod={prod}/> )}
            </Row>    
        </Container>
    )
}
