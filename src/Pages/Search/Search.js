import React from "react";
import Card from "../../Components/Card";
import "./Search.css";
import { defaultList } from "../../Components/data";
import Filter from "../../Components/Filter";
import {useState} from 'react'

const ListOptions = () => {

  const [filters, setFilters] = useState([
    {type: 'veg'},
  ]);

  let cards = defaultList.map((eve) => {
    return <Card details={eve}></Card>;
  });

  return (
    <div className="container-fluid text-center options">
      <div className="container">
        <div className="search-bar-container row">
          <i class="fas fa-search col-1" onClick={() => document.getElementById('search-bar').focus()} />
          <input className="col-11" placeholder="Search" id='search-bar'/>
        </div>
      </div>

      <div className="row">
        {/* for Filters */}
        <div className="col-lg-3 col-md-4">
          <hr />
          <h3>Filters</h3>
          <hr />
          <Filter className="filters" />
        </div>
        {/* for Cards */}
        <div className="col-lg-9 text-center">
          <hr />
          <h3> Cards </h3>
          <hr />
          <div className="container-fluid row cards">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default ListOptions;
