import React from 'react'
import { NavLink } from 'react-router-dom'

function Trending() {
  return (
    <div>
         <div class="section trending">
    <div class="container">
      <ul class="trending-filter">
        <li>
          <NavLink class="is_active" to="/#!" data-filter="*">Show All</NavLink>
        </li>
        <li>
          <NavLink to="#!" data-filter="/.adv">Adventure</NavLink>
        </li>
        <li>
          <NavLink to="#!" data-filter="/.str">Strategy</NavLink>
        </li>
        <li>
          <NavLink to="#!" data-filter="/.rac">Racing</NavLink>
        </li>
      </ul>
      <div class="row trending-box">
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-01.jpg" alt=""/></NavLink>
              <span class="price"><em>$36</em>$24</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-02.jpg" alt=""/></NavLink>
              <span class="price"><em>$32</em>$22</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-03.jpg" alt=""/></NavLink>
              <span class="price"><em>$45</em>$30</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-04.jpg" alt=""/></NavLink>
              <span class="price"><em>$32</em>$22</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-03.jpg" alt=""/></NavLink>
              <span class="price"><em>$38</em>$26</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-01.jpg" alt=""/></NavLink>
              <span class="price"><em>$30</em>$20</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-04.jpg" alt=""/></NavLink>
              <span class="price"><em>$32</em>$22</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-02.jpg" alt=""/></NavLink>
              <span class="price"><em>$32</em>$22</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-03.jpg" alt=""/></NavLink>
              <span class="price"><em>$28</em>$20</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-04.jpg" alt=""/></NavLink>
              <span class="price"><em>$26</em>$18</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-01.jpg" alt=""/></NavLink>
              <span class="price"><em>$32</em>$24</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
          <div class="item">
            <div class="thumb">
              <NavLink to="/product-details"><img src="assets/images/trending-02.jpg" alt=""/></NavLink>
              <span class="price"><em>$45</em>$30</span>
            </div>
            <div class="down-content">
              <span class="category">Action</span>
              <h4>Assasin Creed</h4>
              <NavLink to="/product-details"><i class="fa fa-shopping-bag"></i></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="pagination">
          <li><NavLink to="/#"> &lt; </NavLink></li>
            <li><NavLink to="/#">1</NavLink></li>
            <li><NavLink class="is_active" to="/#">2</NavLink></li>
            <li><NavLink to="/#">3</NavLink></li>
            <li><NavLink to="/#"> &gt; </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Trending