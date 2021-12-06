import React from 'react'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    

    return (
        <div className="my-3">
            <button 
            className={cantidad === 0 ? "btn btn-outline-danger" : "btn btn-outline-primary"} 
            disabled={cantidad === 0}
            onClick={handleRestar}>
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button 
            className={cantidad === max ? "btn btn-outline-danger" : "btn btn-outline-primary"} 
            disabled={cantidad === max}
            onClick={handleSumar}>
                +
            </button>

            <br/>

            <button className="btn btn-success my-2" onClick={onAdd} disabled={cantidad === 0}>
                Agregar al carrito
            </button>
        </div>
    )
}
