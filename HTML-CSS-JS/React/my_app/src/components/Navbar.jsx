import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
            {/* <div className="navbar-brand">
                <Link to="/">eCommerce</Link>
            </div> */}
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
