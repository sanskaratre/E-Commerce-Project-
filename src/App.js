import React,{useState} from 'react';
import './App.css';
import AvailableProducts from './component/Products';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';
import CartProvider from './component/CartProvider';


function App() {
const [cart, setCart] = useState(false);

const ShowCartHandler = () => {
  setCart(true);
}

const hideCartHandler = () => {
  setCart(false);
}
  
  return (
      <CartProvider>
        <Header cart = {ShowCartHandler} />
        <AvailableProducts />
        {cart && <Cart onClick = {hideCartHandler} />}
      </CartProvider>
  );
}

export default App;
