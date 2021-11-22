import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({prod}) => {
    return (
        
    <article key={prod.id} className="card m-3" style ={{width: "18rem"}}>
        <img src={prod.img} alt={prod.name}/>
        <div className="card-body">
            <h3 className="card-title">{prod.name}</h3>
            <p className="card-text">Precio: ${prod.price}</p>
            <p className="card-text">{prod.desc}</p>
            <p className="card-text">{prod.category}</p>
            <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver Mas</Link>
        </div>
    </article>
        
    )
}
