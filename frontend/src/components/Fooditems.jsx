import React, { useState } from 'react';
import './Fooditems.css';
import { assets } from '../assets/assets';

const Fooditems = ({ id, name, description, price, image }) => {
    const [itemcount, Setitemcount] = useState(0);
    return (
        <div className='food-items'>
            <div className="food-item-image">
                <img className='food-item-img' src={image} alt={name} />
                {!itemcount ?
                    <img src={assets.add_icon_white} onClick={()=>Setitemcount(prev=>prev+1)} alt='add' className='add' />
                    : <div className='food-item-counter'><img src={assets.add_icon_green} alt='add' onClick={()=>Setitemcount(prev=>prev+1)} />
                        <p>{itemcount}</p>
                        <img src={assets.remove_icon_red} alt='remove' onClick={()=>Setitemcount(prev=>prev-1)}/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='rating' />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default Fooditems