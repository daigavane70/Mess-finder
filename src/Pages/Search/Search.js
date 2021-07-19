import React from "react";
import Card from "../../Components/Card";
import "./Search.css";
import { defaultList } from "../../Components/data";
import Filter from "../../Components/Filter";
import { useState, useEffect } from "react";

const ListOptions = () => {
  const [filters, setFilters] = useState({
    name: "",
    rating: "0",
    price: Infinity,
  });
  const [cards, setCards] = useState([]);
  const applyFilters = (cardList) => {
    let newCards = cardList;
    // let newCards = [];
    let filterKeyPoints = [];
    // filtering Based on search

    if (filters.name !== "") {
      // filterKeyPoints = filters.name.split(" ");
      // console.log(filterKeyPoints, newCards);
      // filterKeyPoints.map((key) => {
      //   newCards = [
      //     ...newCards,
      //     ...cardList.filter(
      //       (item) => item.name.toUpperCase().includes(key.toUpperCase())
      //       // item.name.toUpperCase().includes(filters.name.toUpperCase())
      //     ),
      //   ];
      // });

      newCards = cardList.filter((item) =>
        item.name.toUpperCase().includes(filters.name.toUpperCase())
      );
    }
    // filtering based on rating
    if (filters.rating !== "") {
      newCards = newCards.filter((item) => item.rating >= filters.rating);
    }
    // filtering based on price
    if (filters.price !== "") {
      newCards = newCards.filter((item) => item.price <= filters.price);
    }

    return newCards;
  };
  useEffect(() => {
    let filteredCards = applyFilters(defaultList);
    let newCards = filteredCards.map((eve) => {
      return <Card details={eve}></Card>;
    });
    setCards(newCards);
  }, [filters]);
  return (
    <div className="container-fluid text-center options py-2">
      <div className="container">
        <div className="search-bar-container row">
          <i
            class="fas fa-search col-1"
            onClick={() => document.getElementById("search-bar").focus()}
          />
          <input
            className="col-11"
            placeholder="Search"
            id="search-bar"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        {/* for Filters */}
        <div className="col-lg-3 col-md-4">
          <hr />
          <h3>Filters</h3>
          <hr />
          <Filter
            changeFilters={setFilters}
            filters={filters}
            className="filters"
          />
        </div>
        {/* for Cards */}
        <div className="col-lg-9 text-center">
          <hr />
          <h3 className="search-results-title"> Results </h3>
          <hr />
          <div className="container-fluid py-0 cards">
            <div className="row"> {cards} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOptions;
