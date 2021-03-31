import React from 'react';
import Card from './Components/Card';
import {Paper,makeStyles} from '@material-ui/core/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/ListOptions.css';
import Filter from './Components/Filter';
import {defaultList} from './Components/data';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    rows: {
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

const ListOptions = () => {

    const classes = useStyles();

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