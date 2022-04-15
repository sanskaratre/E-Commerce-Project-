

import React from 'react';
import './Cart.css';
import CartItems from './CartItems';

const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];



  const Cart = (props) => {
      const cartList = cartElements.map((list) => 
      <CartItems
          item={list.title} img={list.imageUrl} 
      price={list.price} amount={list.quantity}/>
      );
      return (

          <div className="cart">
            <h3 className="cartName">
              Cart
              <button className="btn btn-primary X" onClick={props.onClick}>
                X
              </button>
            </h3>
            <div className="container">
              <div className="row Header">
                <div className="col">
                  <span>Item</span>
                </div>
                <div className="col">
                  <span>Price</span>
                </div>
                <div className="col">
                  <span>Quantity</span>
                </div>
              </div>
            </div>
            {cartList}
          </div>

      );
  };
  export default Cart; 