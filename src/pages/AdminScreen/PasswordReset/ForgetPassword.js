import React, { useEffect } from "react";
import { Formik,Form,Field} from "formik";
import {forgetPassword} from "../../../redux/Action/PasswordAction";
import {initforgotPasswordSchema} from "../../../userData/ValidationSchema/PasswordSchema"
import {initforgotPasswordValue} from "../../../userData/InitialData/Password"
import ii from "../../../assets/ii1.png";
import {marginLeft120vw} from "../../../styles/marginStyles";
import "./password.css";

const ForgetPassword =(props)=> {
  useEffect(()=>{},[])
  const handleSubmit = async (values) => {
    const {emailid,confirmemailid} = values;

    if (emailid!==confirmemailid){
      alert("Different Email")
      return 
    }
    try {
      const OTP = await forgetPassword(emailid);
      //send user OTP 
      console.log(OTP)
      props.history.push({pathname:"/sendotp",OTP:OTP,emailID:emailid});
      
    }
    catch(error) {
      console.log(error)
    }
    
    
  };
  
  return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          
          <Formik
            initialValues={initforgotPasswordValue}
            validationSchema={initforgotPasswordSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              handleSubmit(values);
              actions.resetForm()
            }}
          >
          {(props)=>(
            <Form className="formPass">
              <label className="titlePass">Forgot your password?</label>
              <div className="smallTitlePass">Enter user ID to get OTP</div>
              <div className="schoolCodeField">
                <div className="textPass">Enter your school code</div>
                <Field name='schoolcode' className="inputPassword" placeholder="345677890"/>
              </div>
              <div className="userIDField">
                <div className="textPass">Enter your email ID</div>
                <Field name='emailid' type="text" className="inputPassword" placeholder="akhil112@gmail.com"/>
              </div>

              <div className="emailField">
                <div className="textPass">Confirm your email ID</div>
                <Field name='confirmemailid' type="text" className="inputPassword" placeholder="Your email"/>
              </div>
              
              <button type="submit" className="buttonPass" style={marginLeft120vw}>Send OTP</button>
            </Form>
          )}
          </Formik>
          
        </div>
      </div>
    );
}


export default ForgetPassword;
