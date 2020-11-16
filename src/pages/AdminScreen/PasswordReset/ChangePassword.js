import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {connect} from 'react-redux';
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import { Formik,Form,Field} from "formik";
import ppo1 from "../../../assets/ppo1.png";
import { resetPassword } from "../../../redux/Action/PasswordAction";
import {initchangePasswordSchema} from "../../../userData/ValidationSchema/PasswordSchema"
import {initchangePasswordValue} from "../../../userData/InitialData/Password"
import passwordImg from "../../../assets/password2.png";
import {marginLeft120vw,marginTop45vh } from "../../../styles/marginStyles";
import {image150 } from "../../../styles/imageStyles";
import "./password.css";

const ChangePassword = (props) => {
  let [modalState,setModalState] = useState(false)
  const getUserInfo = () =>{
    props.dispatch(getCurrentUser())
  }

  useEffect(getUserInfo,[]) 


  const handleSubmit = async (values) => {
    const {oldpassword,newpassword,confirmnewpass} = values
    if (newpassword!=confirmnewpass){
        alert("New password is not the same")
        props.history.push({pathname:"/changepassword"});
        
    }
    if (oldpassword==newpassword){
      alert("New password is the same with old password")
      props.history.push({pathname:"/changepassword"});
      
  }

    try {
        const prop = props.location;
        const userInput = {emailID:prop.emailID,OTP:prop.OTP,password:newpassword,confirmPassword:confirmnewpass}
        await resetPassword(userInput);
        //send user OTP 
        setModalState(true)
        

    }
    catch(error) {
     console.log(error)
    }

  };
  
  return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header {...props}/>
            <div className="passScreen">
              <div className="containerChangePassword">
                <img alt="" src={ppo1} className="imgField backgroundImg"/>
                <div style={{position: "relative",bottom: "20px",right: "100px"}}>
                  <Formik
                    initialValues={initchangePasswordValue}
                    validationSchema={initchangePasswordSchema}
                    onSubmit={(values, actions) => {
                      handleSubmit(values);
                      actions.resetForm()
                    }}
                  >
                  {(props)=>(
                    <Form className="formPass" >
                      <label className="titlePass">Change your password?</label>
                      
                      <div className="passwordField">
                        <label className="textPass">Old password</label>
                        <Field name="oldpassword" className="inputPassword resetPassword" placeholder="****************" type="password"/>
                      </div>
                      <div className="passwordField">
                        <label className="textPass">New password</label>
                        <Field name="newpassword" className="inputPassword resetPassword" placeholder="****************" type="password" />
                      </div>
                      <div className="passwordField">
                        <label className="textPass">Confirm new password</label>
                        <Field name="confirmnewpass" className="inputPassword resetPassword" placeholder="****************" type="password" />
                      </div>
                      <button type="submit" className="buttonPass" style={marginLeft120vw}>Reset</button>
                    </Form>
                  )}
                  </Formik>
                </div>
                <Modal 
                  isOpen={modalState} 
                  className="changepasswordmodal" 
                  onRequestClose={()=>{
                    setModalState(false);
                    props.history.push({pathname:"/"})
                  }} > 
                    <img style={image150}src={passwordImg} alt="" />
                    <h4 style={marginTop45vh}>Your password was succesfully changed</h4>
                    <button type="button" className="buttonPass" onSubmit={()=>props.history.push({pathname:"/"})} style={marginTop45vh}>Login</button>   
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
const mapStateToProps = (state) => ({
  account: state.account,
})

export default React.memo(connect(mapStateToProps)(ChangePassword));
