import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
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
      <div className='cartbottom'>
        <div className="cart-total">
          <div>
            <div className="cart-detials-total">
              <p>Subtotal</p>
              <b>{getTotalAmount()}</b>
            </div>
            <hr/>
            <div className="cart-detials-total">
              <p>DeliveryFee</p>
              <p>{getTotalAmount() === 0?0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-detials-total">
              <p>Total</p>
              <b>{getTotalAmount() === 0?0 : getTotalAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code</p>
            <div className="cart-promo-input">
              <input type='text' placeholder='Enter your promo code' required></input>
              <button>APPLY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart