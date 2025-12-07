import React, { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../context/StoreContext';
import Fooditems from './Fooditems';
const Fooddisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dished near you</h2>
        <div className='food-display-items'>
            {food_list.map((item,index)=>{
                return(
                    <Fooditems key={index} id={item.id} name={item.name} description={item.description
                    } price={item.price} image={item.image}/>
                )
            })}
        </div>
    </div>
  )
}

export default Fooddisplay