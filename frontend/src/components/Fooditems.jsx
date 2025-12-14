import React, { useContext } from 'react';
import './Fooditems.css';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const Fooditems = ({ id, name, description, price, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-items'>
            <div className="food-item-image">
                <img className='food-item-img' src={image} alt={name} />

                {!cartItems[id] ? (
                    <img
                        src={assets.add_icon_white}
                        className='add'
                        alt='add'
                        onClick={() => addToCart(id)}
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            src={assets.add_icon_green}
                            alt='add'
                            onClick={() => addToCart(id)}
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            src={assets.remove_icon_red}
                            alt='remove'
                            onClick={() => removeFromCart(id)}
                        />
                    </div>
                )}
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
    );
};

export default Fooditems;
