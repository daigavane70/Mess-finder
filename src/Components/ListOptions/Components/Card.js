import React from 'react';
import '../Assets/Styles/Card.css';
import reactLogo from '../Assets/Images/logo.svg';


export default function Card({details}) {
    return (
        <div className='col-lg-4 col-sm-6 mess-card p-1'>
            <div className='text-center'>
                <div className='logo'><img src={reactLogo}></img></div>
                <div className='title'>{details.name}</div>
                <div className='address'>{details.address}</div>
                <div className='ratings'> Rating:  {details.rating}</div>
                <div className='prizes'>₹ {details.monthlyPrices}</div>
                <div className='btn btn-success col-sm-6'> Learn More </div>
            </div>
        </div>
    )
}