import React, { useState,useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';
import AuthContext from './AuthContext';

const AuthForm = () => {
  const history=useHistory();
  const emailInputRef=useRef();
  const passwordInputRef=useRef(); 

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] =useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

const submitHandler=(event)=>{
  event.preventDefault();
  const enteredEmail=emailInputRef.current.value;
  const eneterdPssword=passwordInputRef.current.value;
  
  let url;
  setIsLoading(true);
  if(isLogin){
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYzfjV1MeiFRCKljVvYYPQK8-hvFf8iJU'
    }

  else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYzfjV1MeiFRCKljVvYYPQK8-hvFf8iJU'
    }
  fetch(url,
  {
    method:'POST',
    body: JSON.stringify({
      email:enteredEmail,
      password:eneterdPssword,
      returnSecureToken:true
     }),
     headers: {
       'Content-Type' :'application/json'
     }

  }
  ).then((res)=>{
    setIsLoading(false);
    if(res.ok){
       return res.json();
    }
    else{
       return res.json().then((data)=>{
        let errorMessage='Authentication failed';
      //  if(data && data.error && data.error.message){
      //  errorMessage=data.error.message;
      //  }

       throw new Error(errorMessage);
    });
  }
  }).then(data => {
  authCtx.login(data.idToken);
  history.replace('/');
  })
  .catch((err) =>{
    alert(err.message);
  });


};



  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
         { !isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
         {isLoading && <p>Loading..</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;