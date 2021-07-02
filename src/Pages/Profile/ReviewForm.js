import React, { Component } from "react";
import ProductDetails from "./Profile";
import Profile from "./Profile"

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      customerName: "",
      rating: "",
      stars: "",
    };
  }
  handleCustomernameChange = (event) => {
    this.setState({
      customerName: event.target.value,
    });
  };
  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };
  handleStarChange = (event) => {
    this.setState({
      stars: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Review has been Submitted");
    this.props.addReview(this.state);

  };
  render() {
    const { customerName, rating, stars } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="">Customer Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            value={customerName}
            onChange={this.handleCustomernameChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            How many stars would you like to rate?
          </label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            value={stars}
            onChange={this.handleStarChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Write your review</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={rating}
            onChange={this.handleRatingChange}
          ></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default ReviewForm;
