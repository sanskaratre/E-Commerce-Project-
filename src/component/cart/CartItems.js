import React, { useContext } from 'react';
import CartContext from '../CartContext';
import './CartItem.css';

const CartItems = (props) => {
     const imgsrc = props.img;

   const cartCntxt = useContext(CartContext)
  const removeItemFromCart = (event) => {
    event.preventDefault();
    cartCntxt.removeItem(props.id)
  }


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
          <span>{props.quantity}</span>
        </div>
        <div className='col'>
        <button className='btn btn-danger remove' onClick={removeItemFromCart} >Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems; 