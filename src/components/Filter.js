import React from 'react';
import '../assets/Styles/Card.css';
import reactLogo from '../assets/Images/logo.svg';

export default function Filter({details}) {
    return (
        <div className='form-group'>
            <hr/>Filters<hr/>
            
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Type</label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Veg</option>
                <option value="2">Non-Veg</option>
              </select>
            </div>

            <label for="customRange1" class="form-label">Example range</label>
            <input type="range" class="form-range" id="customRange1"></input>

            <div class="form-check form-switch my-2 text-center">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
              <label class="form-check-label" for="flexSwitchCheckChecked">Tiffin Services</label>
            </div>
            
            <div className='btn btn-primary col-sm-6'> Apply </div>
        </div>
    )
}