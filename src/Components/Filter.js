import React, { useState, useEffect } from "react";
import "../assets/styles/Card.css";
// import reactLogo from "../assets/Images/logo.svg";

export default function Filter(props) {
  const [filters, setFilters] = useState({ price: "", rating: "", type: "" });

  useEffect(() => {
    props.changeFilters({ ...filters, name: props.filters.name });
  }, [filters]);

  return (
    <div className="form-group">
      <div className="row mb-3">
        <div className="col-4">
          <label className="input-group-text " for="inputGroupSelect01">
            Type
          </label>
        </div>
        <select
          className="form-select col-8"
          id="inputGroupSelect01"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option selected value="">
            Choose...
          </option>
          <option value="veg">Vegiterian</option>
          <option value="non-veg">Non-Vegiterian</option>
        </select>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <label className="input-group-text " for="rating">
            Rating
          </label>
        </div>
        <select
          className="form-select col-8"
          id="rating"
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        >
          <option selected value="0">
            Choose...
          </option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="input-group mb-3"></div>
      <label for="customRange1" className="form-label col-6">
        Range: upto {filters.price}
      </label>
      <input
        type="range"
        className="form-range col-6"
        id="customRange1"
        min="2000"
        max="5000"
        value={filters.price}
        onChange={(e) => {
          setFilters({ ...filters, price: e.target.value });
        }}
      />
      <div className="form-check form-switch my-2 text-center">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Tiffin Services
        </label>
      </div>
      <div className="btn btn-primary col-sm-6"> Apply </div>
    </div>
  );
}
