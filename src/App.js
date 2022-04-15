import React,{useState} from 'react';
import './App.css';
import AvailableProducts from './component/Products';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';


function App() {
const [cart, setCart] = useState(false);

const ShowCartHandler = () => {
  setCart(true);
}

const hideCartHandler = () => {
  setCart(false);
}
  
  return (
      <div>
        <Header cart = {ShowCartHandler} />
        <AvailableProducts />
        {cart && <Cart onClick = {hideCartHandler} />}
      </div>
  );
}

export default App;
