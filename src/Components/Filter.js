import React from "react";
import "../assets/styles/Card.css";
// import reactLogo from "../assets/Images/logo.svg";

export default function Filter({ details }) {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-4">
          <label className="input-group-text " for="inputGroupSelect01">
            Type
          </label>
        </div>
        <select className="form-select col-8" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Veg</option>
          <option value="2">Non-Veg</option>
        </select>
      </div>
      <div className="input-group mb-3"></div>
      <label for="customRange1" className="form-label col-6">
        Example range
      </label>
      <input type="range" className="form-range col-6" id="customRange1" />
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
