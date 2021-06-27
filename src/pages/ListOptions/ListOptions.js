import React from 'react';
import Card from '../../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/Styles/ListOptions.css';
import {defaultList} from '../../components/data';
import Filter from '../../components/Filter';

const ListOptions = () => {

    let cards = defaultList.map( eve => {
         return(    
             <Card details={eve}></Card>
         ) });

    return (
        <div className='container-fluid text-center options'>

            <h1>Search Results</h1>

            <div className='row'>

                {/* for Filters */}
                <div className='col-lg-4 col-md-4'>
                    <hr/><h3>Filters</h3><hr/>
                    <Filter className='filters'/>
                </div>

                {/* for Cards */}
                <div className='col-lg-8 text-center'>
                    <hr/><h3> Cards </h3><hr/>
                    <div className='container-fluid row cards'>
                        {cards}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListOptions;