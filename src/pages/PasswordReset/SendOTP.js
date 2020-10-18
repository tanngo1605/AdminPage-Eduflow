import React, { useState } from "react";
import ppll1 from "../../assets/ppll1.png";
import "./password.css";
import OtpInput from "react-otp-input";
import {marginLeft100vw} from "../../styles/marginStyles";
const SendOTP =(props)=>  {
  const [OTP,setOTP] =useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push({pathname:"/resetpassword",OTP:OTP,emailID:props.location.emailID});
  };
  
    
  return (
      <div className="passScreen ">
        
        <div className="containerPassScreen">
          <img alt="#" src={ppll1} className="imgField" />
          
          <form className="formPass" onSubmit={(e)=>{handleSubmit(e)}}>
              <label className="titlePass" style={{marginLeft: "28%"}}>Enter your OTP</label>
              <label style={marginLeft100vw}>Didn"t get OTP? Resend again?</label>
              <OtpInput
                className="otp"
                title="Number only input"
                OTPLength={4}
                value={OTP}
                onChange={(e)=>{setOTP(e)}}
                otpType="number"
                isInputNum="true"
                disabled={false}
                inputStyle={inputStyle}
                containerStyle={containerStyle}
              />
              <button className="buttonPass" type="submit" value="submit">Okay</button>
          </form>
          
        </div>
      </div>
    );
  }

export default SendOTP;

const containerStyle ={
  marginLeft: "12%",
  marginTop: "15%",
  marginBottom: "15%",
  marginRight: "12%",
  position: "relative",
  right: "8px",

}
const inputStyle={
  marginLeft: "38px",
  width: "57px",
  height: "57px",
  border: "1px solid rgba(31, 32, 65, 0.5)",
  boxSizing: "border-box",
  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
}
