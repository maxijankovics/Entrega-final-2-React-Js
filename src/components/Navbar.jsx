
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img className="logo-bistro" src="/logo.png" alt="Logo" />
        <ul className="menu">
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/menus-completos">Menus</Link></li>
            <li><Link className="menu-link" to="/productos/platos-carta">Platos</Link></li>
            <li><Link className="menu-link" to="/productos/vinos">Vinos</Link></li>
            <li><Link className="menu-link" to="/productos/refrescos">Refrescos</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar