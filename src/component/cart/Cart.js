

import React,{useContext} from 'react';
import './Cart.css';
import CartItems from './CartItems';
import CartContext from '../CartContext';



  const Cart = (props) => {
    const cartCntxt = useContext(CartContext);
  
     const cartList = cartCntxt.items.map((list) => 

     (<CartItems
         key={list.id}
         item={list.title} 
         img={list.imageUrl} 
         price={list.price} 
         quantity={list.quantity}/>
         
     )
         
     );
     
      return (

          <div className="cart">
            <h3 className="cartName">
              Cart  
              <button className="btn btn-danger X" onClick={props.onClick}>
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