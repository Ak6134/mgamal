import React from 'react'
import { NavLink } from 'react-router-dom'

function Pageheading() {
  return (
    <div>
         <div classNames="page-heading header-text">
    <div classNames="container">
      <div classNames="row">
        <div classNames="col-lg-12">
          <h3>Our Shop</h3>
          <span classNames="breadcrumb"><NavLink to="/#">Home</NavLink>  Our Shop</span>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Pageheading