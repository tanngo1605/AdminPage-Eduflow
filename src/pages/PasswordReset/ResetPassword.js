import React,{useState} from "react";
import backgroundImage from "../../assets/ii1.png";
import "./password.css";
import Modal from "react-modal";
import Popup from "reactjs-popup";
import { resetPassword } from "../../redux/Action/PasswordAction";
import passwordImg from "../../assets/password2.png";

const ResetPassword = (props)=> {
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password!=confirmPassword){
            alert("Different Password")
            return 
        }
    
        try {
            const prop = props.location;
            const userInput = {emailID:prop.emailID,OTP:prop.OTP,password:password,confirmPassword:confirmPassword}
            await resetPassword(userInput);
            //send user OTP 
            props.history.push({pathname:"/"});
    
        }
        catch(error) {
         console.log(error)
        }
    
      };
    return (
        <div className="passScreen ">
          <div className="containerPassScreen">
            <img alt="#" src={backgroundImage} className="imgField" />
            <div>
              <form className="formPass" onSubmit={(e)=>handleSubmit(e)}>
                <label className="titlePass">Reset your password</label>
                <div className="passwordFieldd" style={{ marginTop: "15px" }}>
                  <div className="flexrow">
                    <div className="textPass">Enter your new password</div>
                    <div className="textTypePass">Type</div>
                  </div>
                  <input required className="inputPassword resetPassword" type="password" id='password' placeholder="****************" onChange={(e)=>setPassword(e.target.value)}   />
                  
                </div>
                <div className="passwordFieldd" style={{ marginTop: "30px" }}>
                  <div className='flexrow'>
                    <div className="textPass">Confirm your new password</div>
                    <div className="textTypePass">Type</div>
                  </div>
                  <input required className="inputPassword resetPassword" type="password" id='confirmpassword' placeholder="****************" onChange={(e)=>setConfirmPassword(e.target.value)}  />
  
                </div>
                <div className="checkField">
                  <input type="checkbox" id='checkbox' className="resetPass" />
                  <span>Remember me</span>
                </div>
                
                <Popup modal
                  trigger={
                    <input type="button" value ='reset' className="buttonPass"/>}
                >
                  <img src={passwordImg} alt="" />  
                    Your password was succesfully changed
                  <button className="buttonPass" onSubmit={(e)=>handleSubmit(e)}>Login</button>
                    
                </Popup>
               
              </form>
            </div>
          </div>
        </div>
      );
}
  
  
  export default ResetPassword;