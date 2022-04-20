import React, { useState } from 'react'

 const AuthContext =React.createContext({
  token:'',
  email:'',
  isLoggedIn: false,
  login:(token,email)=>{}, 
  logout:()=>{}
});

export const AuthContextProvider=(props)=>{
 const previousToken = localStorage.getItem('token')
 const [token,setToken] = useState(previousToken)
 const [email, setEmail] = useState("");
 const userIsLoggedIn= !!token;

 const loginHandler =(token,email) =>{
     setToken(token);
     setEmail(email);
     localStorage.setItem('token', token);
     localStorage.setItem('Email', email);
 }
 const logoutHandler =()=>{
     setToken(null);
     setEmail(null);
     localStorage.removeItem('token');
     localStorage.removeItem('Email')
 }

const contextValue={
    token:token,
    email:email,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout: logoutHandler
}

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
}
export default AuthContext;