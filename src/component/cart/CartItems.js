import React from 'react';
import './CartItem.css';

const CartItems = (props) => {
    const imgsrc = props.img;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>{props.item}</span>
          <br></br>
          <img src={imgsrc} alt="products" className="i"/>
        </div>
        <div className="col">
          <span>{props.price}</span>
        </div>
        <div className="col">
          <span>{props.amount}</span>
        </div>
      </div>
      <button className='btn btn-danger remove'>Remove</button>
    </div>
  );
};

export default CartItems; 