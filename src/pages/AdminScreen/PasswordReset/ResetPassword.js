import React,{useState,useEffect} from "react";
import Modal from "react-modal";
import { Formik,Form,Field} from "formik";
import backgroundImage from "../../../assets/ii1.png";
import { resetPassword } from "../../../redux/Action/PasswordAction";
import {initresetPasswordSchema} from "../../../userData/ValidationSchema/PasswordSchema"
import {initresetPasswordValue} from "../../../userData/InitialData/Password"
import passwordImg from "../../../assets/password2.png";
import {marginLeft120vw, marginTop20vh, marginTop45vh } from "../../../styles/marginStyles";
import {image150 } from "../../../styles/imageStyles";
const ResetPassword = (props)=> {

    let [modalState,setModalState] = useState(false)

    useEffect(()=>{
      Modal.setAppElement("body");
    },[])

    const handleSubmit = async (values) => {
        console.log(values)
        const {newpassword,confirmnewpass} = values;

        if (newpassword!=confirmnewpass){
            alert("Different Password");
            return ;
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
        <div className="passScreen ">
          <div className="containerPassScreen">
            <img alt="#" src={backgroundImage} className="imgField" />
            
            <Formik
              initialValues={initresetPasswordValue}
              validationSchema={initresetPasswordSchema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm()
              }}
            >
            {(props)=>(
              <Form className="formPass">
                <label className="titlePass">Reset your password</label>
                <div className="passwordFieldd" style={marginTop45vh}> 
                  <label className="textPass">Enter your new password</label>
                  <Field name='newpassword' required className="inputPassword resetPassword" type="password" id='password' placeholder="****************"/>
                  
                </div>
                <div className="passwordFieldd" style={{ marginTop: "30px" }}> 
                  <label className="textPass">Confirm your new password</label>
                  <Field name='confirmnewpass' className="inputPassword resetPassword" type="password" id='confirmpassword' placeholder="****************"/>
  
                </div>
                <div className="checkField" style={marginTop20vh}>
                  <Field component="input" type="checkbox" name='checkbox' className="resetPass" />
                  <span>Remember me</span>
                </div>
                <button type="submit" className="buttonPass" style={marginLeft120vw}>Submit</button>
                
               
              </Form>
              )}
            </Formik>
            
            <Modal 
                  isOpen={modalState} 
                  className="changepasswordmodal" 
                  onRequestClose={()=>{
                    setModalState(false);
                    props.history.push({pathname:"/"})
                  }} > 
                    <img style={image150} src={passwordImg} alt="" />
                    <h4 style={marginTop45vh}>Your password was succesfully changed</h4>
                    <button type="button" className="buttonPass" onSubmit={()=>props.history.push({pathname:"/"})} style={marginTop45vh}>Login</button>   
            </Modal>
          </div>
        </div>
      );
}
  
  
  export default ResetPassword;