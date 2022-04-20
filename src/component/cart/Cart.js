

import React,{useContext} from 'react';
import './Cart.css';
import CartItems from './CartItems';
import CartContext from '../CartContext';



  const Cart = (props) => {
    let cartTotal = 0;
    const cartCntxt = useContext(CartContext);
  
     const cartList = cartCntxt.items.map((list) => 

     (<CartItems
         key={list.id}
         id = {list.id}
         item={list.title} 
         img={list.imageUrl} 
         price={list.price} 
         quantity={list.quantity}/>
         
     )    
     );
     
     cartCntxt.items.forEach((item) => {
       let subTotal = 0;
       subTotal = item.quantity * item.price;
       cartTotal = cartTotal + subTotal;
     })


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
                  Item
                </div>
                <div className="col">
                  Price
                </div>
                <div className="col">
                  Quantity
                </div>
              </div>
            </div>
            {cartList}
            <hr></hr>
            <div className='total'>Total = {cartTotal}</div>
          </div>

      );
  };
  export default Cart; 