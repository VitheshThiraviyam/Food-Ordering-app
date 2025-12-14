import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-item-names'>
                <img src={item.image} alt='Image'></img>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p className="remove-cross" onClick={() => removeFromCart(item._id)}>
                  <img src={assets.cross_icon} alt="remove" />
                </p>

              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart