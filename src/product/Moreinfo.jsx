import React from 'react'
import { NavLink } from 'react-router-dom'

function Moreinfo() {
  return (
    <div>
        <div class="single-product section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-image">
            <img src="assets/images/single-game.jpg" alt=""/>
          </div>
        </div>
        <div class="col-lg-6 align-self-center">
          <h4>Call of Duty®: Modern Warfare® II</h4>
          <span class="price"><em>$28</em> $22</span>
          <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
          <form id="qty" action="#">
            <input type="qty" class="form-control" id="1" aria-describedby="quantity" placeholder="1"/>
            <button type="submit"><i class="fa fa-shopping-bag"></i> ADD TO CART</button>
          </form>
          <ul>
            <li><span>Game ID:</span> COD MMII</li>
            <li><span>Genre:</span> <NavLink to="/#">Action</NavLink>, <NavLink to="/#">Team</NavLink>, <NavLink to="/#">Single</NavLink></li>
            <li><span>Multi-tags:</span> <NavLink to="/#">War</NavLink>, <NavLink to="/#">Battle</NavLink>, <NavLink to="/#">Royal</NavLink></li>
          </ul>
        </div>
        <div class="col-lg-12">
          <div class="sep"></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Moreinfo