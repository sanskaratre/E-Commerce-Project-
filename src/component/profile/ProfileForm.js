import React,{useRef,useContext} from 'react';
import classes from './ProfileForm.module.css';

import AuthContext from '../AuthContext';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const history=useHistory();
const newPasswordInputRef= useRef();
const authCtx= useContext(AuthContext)

const submitHandler = (event)=>{
  event.preventDefault();
  const eneterdNewPassword = newPasswordInputRef.current.value;
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYzfjV1MeiFRCKljVvYYPQK8-hvFf8iJU',{
     method:'POST',
     body: JSON.stringify({
       idToken:authCtx.token,
       password: eneterdNewPassword,
       returnSecureToken: false 
     }),
     headers:{
       'Content-Type' : 'application/json'

     }
   }).then(res =>{
    history.replace('./')

   })
}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;