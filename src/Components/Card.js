import React from "react";
import "../assets/styles/Card.css";
// import reactLogo from '../assets/Images/logo.svg';

const getStars = (number) => {
  let stars = [];
  for (var i = 0; i < number; i++) {
    stars.push(<i class="fas fa-star"></i>);
  }
  return stars;
};

export default function Card({ details }) {
  return (
    <div className="col-md-4 col-12 p-1">
      <div className="mess-card">
        <div className="logo">
          <img src={details.image}></img>
        </div>
        <div className="title">{details.name}</div>
        <div className="row">
          <div className="col-6 rating">{getStars(details.rating)}</div>
          <div className="col-6 price">₹{details.price}/Month</div>
        </div>
        <div className="learn-more"> Learn More {">>>"} </div>
      </div>
    </div>
  );
}
