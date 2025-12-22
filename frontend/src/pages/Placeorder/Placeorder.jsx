import React, { useContext } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/StoreContext';

const Placeorder = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <form className="place-order">

      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multiple-feilds">
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
        </div>

        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />

        <div className="multiple-feilds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multiple-feilds">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="number" placeholder="Phone Number" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">

          <div className="cart-detials-total">
            <p>Subtotal</p>
            <b>₹{getTotalAmount()}</b>
          </div>

          <hr />

          <div className="cart-detials-total">
            <p>Delivery Fee</p>
            <p>{getTotalAmount() === 0?0 : 2}</p>
          </div>

          <hr />

          <div className="cart-detials-total">
            <p>Total</p>
            <b>₹{getTotalAmount() === 0?0 : 2}</b>
          </div>

          <button>PROCEED TO PAY</button>
        </div>
      </div>

    </form>
  );
};

export default Placeorder;
