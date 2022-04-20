import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from '../AuthContext';


const MainHeader=() =>{
  const authCtx= useContext(AuthContext)
  const isLoggedIn =authCtx.isLoggedIn;

  const logoutHandler=()=>{
      authCtx.logout();
  }


  return (
      <Fragment>
        <div className="up">
          <h3 className="h3">
            {!isLoggedIn &&
            (<NavLink className="a" to="/AuthPage">
              LOGIN
            </NavLink> )}
           <NavLink className="a" to="/Home">
              HOME
           </NavLink>
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
              Profile
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