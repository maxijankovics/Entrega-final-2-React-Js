
import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa";

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="link-menu" to="/carrito">
            <FaShoppingCart size="30px"/>
            <span className="numero">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget