import React, { Component } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { Container, Row } from 'reactstrap'


class Store extends Component {

    state = {
        person: []
    }
    componentDidMount() {
        axios.get('public/products.json')
            .then((element) => {
                this.setState({
                    person: element.data.products
                })
            })
    }
    render() {
        return (
            <div>

                <Navbar />
                <div className="bg-light">
                <Container className='py-5'>
                    <Row className=' properties-box'>
                            {this.state.person.map((item) => (
                                 <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
                                 <div class="item">
                                   <a href="property-details.html"><img src={item.images[0]} alt=""/></a>
                                   <span class="category">mm</span>
                                   <h6>$1.00</h6>
                                   <h4><a href="property-details.html">hello</a></h4>
                                   <div class="main-button">
                                     <a href="property-details.html">Schedule a visit</a>
                                   </div>
                                 </div>
                               </div>
                            ))}
                    </Row>
                </Container>
                </div>

            </div>
        )
    }
}

export default Store;