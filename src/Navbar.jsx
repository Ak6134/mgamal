import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <NavLink to="index.html" className="logo">
                        <img src="assets/images/logo.png" alt="" style={{width: "158px"}}/>
                    </NavLink>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/shop">Our Shop</NavLink></li>
                      <li><NavLink to="/product-details">Product Details</NavLink></li>
                      <li><NavLink to="/contact" className="active">Contact Us</NavLink></li>
                      <li><NavLink to="/store">Store</NavLink></li>
                  </ul>   
                    <NavLink className='menu-trigger'>
                        <span>Menu</span>
                    </NavLink>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar