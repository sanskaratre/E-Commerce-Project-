
import React,{Fragment,useContext} from 'react';
import CartContext from '../CartContext';
import './Header.css';


const Header = (props) => {

  const cartCntxt = useContext(CartContext);

  let total  = 0;
  cartCntxt.items.forEach(item => {
  
    total = total + Number(item.quantity);
  });

    return (
      <Fragment>
            <button className="butt" onClick={props.Cart}>Cart ({total})</button> 
      </Fragment>
    );
  };
  
  export default Header; 
