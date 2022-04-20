import React, { Fragment, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import AuthContext from '../AuthContext';
import CartContext from '../CartContext';
//import bgImage from '../header/bg.jpg'


const MainHeader=() =>{
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const email = localStorage.getItem('Email');

  const isLoggedIn =authCtx.isLoggedIn;

  const logoutHandler = async() => {
      authCtx.logout();
  
  const cart = JSON.stringify(cartCtx.items);

  await axios.post(`https://crudcrud.com/api/feadd4b4323c4b38a0dd008d335a16be/cart${email}`,
   cart)
}

  return (
      <Fragment>
        <div className="up">
          <h3 className="h3">
            {!isLoggedIn &&
            (<NavLink className="a" to="/AuthPage">
              LOGIN
            </NavLink> )}
            {isLoggedIn && (
            <NavLink className="a" to="/Home">
              HOME
           </NavLink>)}
           {isLoggedIn &&(
           <NavLink className="a" to="/Products">
              STORE
           </NavLink> )}
           <NavLink className="a" to="/About">
              ABOUT
           </NavLink>
           <NavLink className="a" to="/Contactus">
              CONTACT US
           </NavLink>
           {isLoggedIn &&(
           <NavLink className="a" to="/ProfilePage">
              PROFILE
           </NavLink> )}
           {isLoggedIn &&(
           <button style={{height:'50px'}} onClick={logoutHandler}>LOGOUT</button>)}
        </h3>
      </div>
    <div className="down">
      <h1 style={{fontFamily:'serif', color:'black', fontStyle:'italic', fontSize:'50px'}} className="h1">The Generics</h1>
    </div>
    
</Fragment>
  )
}

export default MainHeader;


/* <div>
  <img style={{width:'100%', height:'50rem', objectFit:"fill", transform:"translate(0%,-2%)" }} src={bgImage} alt='background'></img>
  <div style={{ position:" absolute",top: "50%",left: "50%", transform: "translate(-50%, -50%)", fontSize: "108px", color:'brown' , fontFamily:"cursive"}}> !! Welcome !! </div>
</div> */