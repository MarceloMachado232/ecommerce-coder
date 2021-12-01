import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext (CartContext)

    return (
        <div className="container my-5">

{
    carrito.lenght > 0
    ?   <>
        <h2>Cart View</h2>
        <hr/>
        <section>
            {
                carrito.map( (prod) => ( <CartItem {...prod}/> ) )
            }
        </section>
        <hr/>
        <div>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button className="btn btn-success">Terminar la compra</button>
        </div>

        </>
    :   <>
        <h2>El carrito esta vacio</h2>
        <hr/>
        <Link to="/" className="btn btn-primary">Volver</Link>
        </>
}
        </div>
    )
}