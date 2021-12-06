import React, { useContext } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const {totalCantidad, carrito} = useContext(CartContext)

    return (
<div className={carrito.length === 0 ? 'hidden widget' : 'widget'}>
            <Link to="/cart">
                <BsFillCartCheckFill className="cartWidget"/>
                <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}
