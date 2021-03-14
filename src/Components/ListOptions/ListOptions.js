import React from 'react';
import Card from './Cards/Cards';

let defaultList = [
    {
        name: 'Name1',
        address: 'Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043',
        rating: 4,
        monthlyPrices: 5000, 
    },
    {
        name: 'Name2',
        address: 'Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth CampusSurvey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043',
        rating: 4,
        monthlyPrices: 3000, 
    },
    {
        name: 'Name3',
        address: 'Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043 Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043',
        rating: 4,
        monthlyPrices: 4500, 
    }
]

const ListOptions = () => {
    return (

        defaultList.map( eve => { return( <Card details={eve}></Card> ) })      
    )
}

export default ListOptions;