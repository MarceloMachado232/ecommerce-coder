import React, { useContext } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'


export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
           <BsFillCartCheckFill className="cartWidget"/> 
           <span>{totalCantidad()}</span>
        </div>
    )
}
