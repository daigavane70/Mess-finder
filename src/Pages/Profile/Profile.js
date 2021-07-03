//import logo from '../../assets/Images/Product details/test1.jpg';
import { useState } from "react";
import React, { Component } from "react";
import {
  Card,
  Button,
  Accordion,
  Container,
  Row,
  Col,
  Carousel,
  Jumbotron,
} from "react-bootstrap";
import "./ProductDetails.css";
//import { MDBMedia } from 'mdbreact';
import img1 from "../../assets/images/Product details/img1.jpg";
import img2 from "../../assets/images/Product details/img2.jpg";
import img3 from "../../assets/images/Product details/img3.jpg";
import ReviewForm from "./ReviewForm";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    name: "Mess 1",
    address: "Pune 1",
    aboutUs:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum repudiandae cumque Eius nesciunt nobis unde delectus aspernatur  necessitatibus in quia perspiciatis doloremque dolores minus dicta quos repudiandae tenetur ab nulla",

    details: {
      direction: "See directions",
      foodType: ["veg", "non veg"],
      timings: [
        "Monday 10-6",
        "Tuesday 10-6",
        "Wednesday 10-6",
        "Thursday 10-6",
        "Friday 10-6",
        "Saturday 10-6",
        "Sunday 10-6",
      ],
      foodCuisine: ["North Indian", "Chinese", "South Indian"],
    },
    review: [
      { customerName: "Shivendra", rating: "Very Good", stars: 4 },
      { customerName: "Vedant", rating: "Awesome", stars: 5 },
      { customerName: "Amruta", rating: "Very Good", stars: 3 },
    ],
    contact: 1111111,
    id: 1,
  });
  const getStars = (stars) => {
    var lis = [];

    for (var i = 0; i < stars; i++) {
      lis.push(<i class="fa fa-star" aria-hidden="true"></i>);
    }
    return lis;
  };
  const addReview = (event) => {
    let reviewList = product.review;
    reviewList.push(event);
    setProduct({ ...product, review: reviewList }); //
  };
  return (
    <div>
      <div className="top-section">
        <Jumbotron fluid style={{ backgroundColor: "gold" }}>
          <Container>
            <h1>{product.name}</h1>
            <i>
              <p>Address:{product.address}</p>
            </i>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <Container>
          <div>
            <h2>About Us</h2>
            <p>{product.aboutUs}</p>
          </div>
          <div className="middle">
            <h1>Gallery</h1>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
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
                  <Card.Body>
                    <a href="#" class="link-primary">
                      {product.details.direction}
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Food Type
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {product.details.foodType.map((type, i) => {
                      return (
                        <li>
                          <span
                            class={
                              i === 0
                                ? "badge bg-success text-light"
                                : "badge bg-danger text-light"
                            }
                          >
                            {type}
                          </span>
                        </li>
                      );
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Timings
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <a href="#" class="link-primary"></a>
                    {product.details.timings.map((time) => {
                      return <li>{time}</li>;
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Food Cuisine
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {product.details.foodCuisine.map((food) => {
                      return <li>{food}</li>;
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <br />
          <div>
            <h2>Reviews</h2>
            <div>
              {product.review.map((review) => {
                return (
                  <Card>
                    <Card.Header>{getStars(review.stars)}</Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>{review.rating}</p>
                        <footer className="blockquote-footer">
                          <cite title="Source Title">
                            {review.customerName}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
            <br />
            <h3>Submit review</h3>
            <div className="review">
              <ReviewForm addReview={addReview} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetails;

// post ( id, {customerName: , review: , rating: } )
