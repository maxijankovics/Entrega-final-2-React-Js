
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <Link className="ver-detalles" to={`/item/${producto.id}`}>Ver detalles</Link>
        </div>
    </div>
  )
}

export default Item