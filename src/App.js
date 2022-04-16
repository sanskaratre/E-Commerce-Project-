import React,{useState} from 'react';
import './App.css';
import AvailableProducts from './component/Products';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';
import CartProvider from './component/CartProvider';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';



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
        <Route path ="/About">
          <About />
        </Route>
        <Route path ="/Home">
          <Home />
        </Route>
        <Route path="/Products">
        <AvailableProducts />
        </Route>
        {cart && <Cart onClick = {hideCartHandler} />}
      </CartProvider>
  );
}

export default App;
