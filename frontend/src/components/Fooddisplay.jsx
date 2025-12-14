import React, { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../context/StoreContext';
import Fooditems from './Fooditems';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-items'>
                {food_list.map((item) => {
                    if(category==="All" || item.category===category)
                    {
                        return(
                    <Fooditems
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />)
                    }
})}
            </div>
        </div>
    );
};

export default Fooddisplay;
