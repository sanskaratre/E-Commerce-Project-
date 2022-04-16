
import React,{Fragment,useContext} from 'react';
import CartContext from '../CartContext';
import {NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => {

  const cartCntxt = useContext(CartContext);

  let total  = 0;
  cartCntxt.items.forEach(item => {
  
    total = total + Number(item.quantity);
  });

  

    return (
      <Fragment>
        <div className="up">
          <h3 className="h3">
            <NavLink className="a" to="/Home">
              HOME
            </NavLink>
            <NavLink className="a" to="/Products">
              STORE
            </NavLink>
            <NavLink className="a" to="/About">
              ABOUT
            </NavLink>
            <button className="butt" onClick={props.cart}>Cart ({total})</button>
          </h3>
        </div>
        <div className="down">
          <h1 className="h1"  >The Generics</h1>
        </div>
      </Fragment>
    );
  };
  
  export default Header; 
