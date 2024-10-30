import React from 'react'
import { NavLink } from 'react-router-dom'

function Headershop() {
  return (
    <div>
         <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Our Shop</h3>
          <span class="breadcrumb"><NavLink href="/#">Home</NavLink> Our Shop</span>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Headershop