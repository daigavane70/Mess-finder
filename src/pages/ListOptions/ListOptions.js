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
        <div className='container-fluid text-center'>

            <h2>Search Results</h2>

            <div className='row'>

                {/* for Filters */}
                <div className='col-lg-4 col-md-4 filters'>
                    <Filter/>
                </div>

                {/* for Cards */}
                <div className='col-lg-8 text-center cards'>
                    <hr/> Cards <hr/>
                    <div className='container-fluid row'>
                        {cards}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListOptions;