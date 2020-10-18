import React, { useState } from "react";
import {forgetPassword} from "../../redux/Action/PasswordAction";
import ii from "../../assets/ii1.png";
import "./password.css";

const ForgetPassword =(props)=> {
  const [emailID,setEmail] =useState("")
  const [confirmemailID,setconfirmEmail] =useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailID!==confirmemailID){
      alert("Different Email")
      return 
    }
    try {
      
      //const OTP = await forgetPassword(emailID);
      //send user OTP 
      props.history.push({pathname:"/sendotp",emailID:emailID});
      
    }
    catch(error) {
      console.log(error)
    }
    
    
  };
  
  return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          <div>
            <form className="formPass" onSubmit={(event)=>handleSubmit(event)}>
              <label className="titlePass">Forgot your password?</label>
              <div className="smallTitlePass">Enter user ID to get OTP</div>
              <div className="schoolCodeField">
                <div className="flexrow">
                  <div className="textPass">Enter your school code</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input className="inputPassword" placeholder="345677890"></input>
              </div>
              <div className="userIDField">
                <div className="flexrow">
                  <div className="textPass">Enter your email ID</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input type="text" value={emailID} onChange={(e)=>setEmail(e.target.value)} required className="inputPassword" placeholder="akhil112@gmail.com"/>
              </div>

              <div className="emailField">
                <div className="flexrow">
                  <div className="textPass">Confirm your email ID</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input type="text"  value={confirmemailID} onChange={(e)=>setconfirmEmail(e.target.value)} required className="inputPassword" placeholder="akhil112@gmail.com"/>
              </div>

              <button className="buttonPass" type="submit" value="submit">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}


export default ForgetPassword;
