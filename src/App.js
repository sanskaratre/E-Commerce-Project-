import React,{useState,useContext} from 'react';
import './App.css';
import AvailableProducts from './component/Products';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';
import CartProvider from './component/CartProvider';
import { Route, Switch } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Contactus from './component/Contactus';
import ProductDetails from './component/ProductDetails';
import AuthContext from './component/AuthContext';
import MainHeader from './component/header/MainHeader';
import AuthPage from './component/AuthPage';
import UserProfile from './component/profile/UserProfile';

function App() {

const authCtx = useContext(AuthContext)

const [cart, setCart] = useState(false);

const ShowCartHandler = () => {
  setCart(true);
}

const hideCartHandler = () => {
  setCart(false);
}
  
  return (
      <CartProvider>
        <MainHeader /> 
        <Switch> 
        <Route path='/AuthPage'>
          <AuthPage />
        </Route>
        <Route path ="/About">
          <About /> 
        </Route>
        <Route path ="/Home">
          <Home />
        </Route>
        <Route path="/Products" exact>
        <Header Cart={ShowCartHandler} />
         {cart && <Cart onClick={hideCartHandler} />}
          <AvailableProducts />
        </Route>
        <Route path="/Products/:productId">
          <ProductDetails />
        </Route>
        <Route path="/Contactus">
          <Contactus />
        </Route>
         {authCtx.isLoggedIn &&( <Route path="/ProfilePage">
           <UserProfile />
         </Route>)}
        </Switch>
      </CartProvider>
  );
}

export default App;
