//import logo from '../../assets/Images/Product details/test1.jpg';
import { useState } from 'react';
import React, { Component } from 'react';
import { Card, Button, Accordion, Container, Row, Col, Carousel, Jumbotron } from 'react-bootstrap';
import './ProductDetails.css';
import { MDBMedia } from 'mdbreact';
import img1 from '../../assets/Images/Product details/img1.jpg';
import img2 from '../../assets/Images/Product details/img2.jpg';
import img3 from '../../assets/Images/Product details/img3.jpg';

const ProductDetails = () => {
  const [product, setname] = useState([
    { name: 'Mess 1', body: 'Pune 1', contact: 1111111, id: 1 },
    { name: 'Mess 2', body: 'lorem ispum...', contact: 2222222, id: 2 },
    { name: 'Mess 3', body: 'lorem ispum...', contact: 3333333, id: 3 }
  ]);

  return (

    <div>
      <div className="top-section">
        <Jumbotron fluid style={{ backgroundColor: "gold" }}>
          <Container >
            <h1>
              MESS NAME
                        </h1>
            <i>
              <p>
                Address: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, unde? Aliquam voluptates in labore placeat fugit nisi accusantium blanditiis ratione expedita facere, dolore tempora deserunt dolor. Quisquam omnis doloribus impedit.
                            </p>
            </i>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <Container >
          <div>
            <h2>
              About Us
                    </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repudiandae cumque? Eius nesciunt nobis unde delectus aspernatur necessitatibus in, quia perspiciatis doloremque, dolores minus dicta quos repudiandae tenetur ab nulla!</p>
          </div>
          <div className="middle">
            <h1>
              Gallery
                        </h1>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>
          <br></br>
          <h2>Details</h2>
          <div>
            <Accordion defaultActiveKey="0" className="details">
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
          <br />
          <div>
            <h2>Reviews</h2>
            <div>
              <Card>
                <Card.Header><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Customer 1</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
            <br />
            <h3>Submit review</h3>

          </div>
        </Container>
      </div>

    </div>


  );
}

export default ProductDetails;