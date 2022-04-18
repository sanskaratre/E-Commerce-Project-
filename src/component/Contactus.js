import React, {Fragment, useRef } from "react";
import classes from './Form.module.css';

const Contectus = () => {

    const nameRef = useRef('');
    const mailRef = useRef('');
    const phoneRef = useRef('');

    
    const submitHandler = async(event) => {
        event.preventDefault();
        const contacts = {
            name : nameRef.current.value,
            email: mailRef.current.value,
            phoneNo: phoneRef.current.value,
        };
    

        const response = await fetch('https://react-e---commerce-default-rtdb.firebaseio.com/contacts.json', {
            method: "POST",
            body: JSON.stringify(contacts),
            headers: {
                "Content-Type" : "application/json"
            }
        } )

        const data = await response.json();
        console.log(data);
    };


    return (
        <Fragment>
            <div className="d-flex justify-content-center about"><h2>Contact us</h2></div>
             <form  onSubmit={submitHandler}>
                 <div className={classes.control}>
                    <label htmlFor="name">NAME</label>
                    <input style={{display: "block", width: "50%"}} type="text" placeholder="Enter Your Name" ref={nameRef} />
                 </div>
                 <div className={classes.control}>
                    <label htmlFor="e-mail">E-MAIL</label>
                    <input  style={{display: "block", width: "50%"}} type="mail" placeholder="Enter Your E-Mail" ref={mailRef} />
                 </div>
                 <div className={classes.control}>
                    <label htmlFor="phoneNo">Mobile Number</label>
                    <input style={{display: "block", width: "50%"}} type="number" placeholder="Enter Your Mobile/Phone Number" ref={phoneRef} />
                 </div>
                <button style={{borderRadius: '2rem', align:'center'}} type="submit">Submit</button>
             </form>
        </Fragment>
    )
};

export default Contectus;