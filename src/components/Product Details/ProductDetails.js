import logo from '../../assets/Images/Product details/test1.jpg';
import { useState } from 'react';
import React, { Component } from 'react';
import { Card, Button, Accordion, Container, Row, Col, Carousel } from 'react-bootstrap';
import './ProductDetails.css';
import { MDBMedia } from 'mdbreact';
const ProductDetails = () => {
    const [product, setname] = useState([
        { name: 'Mess 1', body: 'Pune 1', contact: 1111111, id: 1 },
        { name: 'Mess 2', body: 'lorem ispum...', contact: 2222222, id: 2 },
        { name: 'Mess 3', body: 'lorem ispum...', contact: 3333333, id: 3 }
    ]);

    return (
        <div>
            <section id="top">
                <Container fluid>

                    <div className="container-sm" id="banner">
                        <Row>
                            <Col >
                                <div >
                                    <img src={logo} alt="image of mess" />
                                </div>
                                {/* <div className="col-xs-5" id="name">
                <h1>{product[0].name}</h1>
                <h3>Address: <span>{product[0].body}
                </span></h3>
                <h5>Contact at :<span>{product[0].contact}
                </span> </h5>
            </div>*/ }
                            </Col>
                            <Col >
                                {/*<div class="card" id="mess-head">
                    <div class="card-header" style={{ textAlign: 'center' }}>
                        {product[0].name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Address: <span>{product[0].body}
                        </span></li>
                        <li class="list-group-item">Call : {product[0].contact}</li>
                        <li class="list-group-item">Timing</li>
                    </ul>
                </div>*/}
                                <div className="container-sm" id="mess-head">
                                    <h1 >Mess Name</h1>
                                    <h3>Address 1: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio dolores deserunt, saepe numquam possimus quas quasi magnam! Molestiae maiores iure rem? Ut saepe quam corporis minima error recusandae facere.</span></h3>
                                    <h3>Rating:<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>
            <section id="middle">
                <Container className="details">

                    <Row>
                        <Col>
                            <div className="side-section">
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Directions
    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body><a href="#" class="link-primary">See directions</a></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Food Type
    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body><li>
                                                <span class="badge bg-success text-light">Veg</span>
                                            </li>
                                                <li>
                                                    <span class="badge bg-danger text-light">Non veg</span>
                                                </li></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            Timings
    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body><a href="#" class="link-primary"></a><li>
                                                Monday: 7am-11pm
      </li><li>
                                                    Tuesday: 7am-11pm
      </li><li>
                                                    Wednesday: 7am-11pm
      </li><li>
                                                    Thursday: 7am-11pm
      </li><li>
                                                    Friday: 7am-11pm
      </li><li>
                                                    Saturday: 7am-11pm
      </li><li>
                                                    Sunday: 7am-6pm
      </li></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            Food Cuisine
    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body><li>
                                                Maharashtrian
      </li>
                                                <li>
                                                    South Indian
      </li>
                                                <li>
                                                    North Indian
      </li></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>

                            </div>
                        </Col>
                        <Col>
                            <div className="about-mess">
                                <h1>About mess</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos voluptatum, illo neque quisquam sequi recusandae! Quisquam sint enim tempora voluptatibus incidunt assumenda facere ratione, nemo adipisci nobis magni sequi!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos voluptatum, illo neque quisquam sequi recusandae! Quisquam sint enim tempora voluptatibus incidunt assumenda facere ratione, nemo adipisci nobis magni sequi!</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section id="gallery">

            </section>
        </div>





    );
}

export default ProductDetails;