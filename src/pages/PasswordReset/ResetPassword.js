import React, { Component } from "react";
import ii from "../../assets/ii1.png";
import "./password.css";
import Popup from "reactjs-popup";
import {resetPassword} from "../../redux/Action/PasswordAction";
import passwordImg from "../../assets/password2.png";
var temp = 0;
let id = ["1", "2"];
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      hidden: false,
      hidden1: false,
      checked: false,
      id: "",
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ password: e.target.value })
    console.log(this.state.password);

    // temp = 1;
  };
  toggleShow(id) {
    // console.log(temp, this.state.id);
    this.setState({ id: id });
    if (id === "1") {
      this.setState({ hidden: !this.state.hidden });
    } else {
      this.setState({ hidden1: !this.state.hidden1 });
    }
  }
  toggleCheck() {
    this.setState({ checked: !this.state.checked });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(this.props.history);
    //const prop = this.props.location
    //if (password!=confirmPassword){
     // alert("Different Password")
     // return 
    //}
    
    //try {
      
    //  const OTP = await resetPassword(emailID);
    //  //send user OTP 
    //  this.props.history.push({pathname:"/",OTP:prop.OTP:,email:prop.email,password,confirmpassword});
      
    //}
    //catch(error) {
     // console.log(error)
    //}
    
  };
  render() {
    return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          <div>
            <form className="formPass" onSubmit={this.handleSubmit}>
              <label className="titlePass">Reset your password</label>
              <div className="passwordFieldd" style={{ marginTop: "15px" }}>
                <div className="flexrow">
                  <div className="textPass">Enter your new password</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input className="inputPassword resetPassword" placeholder="****************" id="1" onChange={this.handleChange}type={this.state.hidden? "text": "password"}/>
                <label className="eyeIcon" htmlFor="button1">
                  <i  className="hideshowBtn" onClick={() => this.toggleShow("1")}></i>
                </label>
              </div>
              <div className="passwordFieldd" style={{ marginTop: "30px" }}>
                <div className='flexrow'>
                  <div className="textPass">Confirm your new password</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input className="inputPassword resetPassword" placeholder="****************" id="2" onChange={this.handleChange} type={this.state.hidden1? "text": "password"}/>

                <label className="eyeIcon" htmlFor="button2">
                  <i className="hideshowBtn"onClick={() => this.toggleShow("2")}></i>
                </label>
              </div>
              <div className="checkField">
                <input type="checkbox" className="resetPass"onClick={() => this.toggleCheck()}/>
                <span>Remember me</span>
              </div>

              <Popup
                modal
                trigger={
                  <button type="button" value="submit" className="buttonPass" onClick={this.handleChange}>Reset</button>
                }
              >
                <img src={passwordImg} alt="" />
                Your password was succesfully changed
                <button className="buttonPass" onSubmit={this.handleSubmit}>
                  Login
                </button>
              </Popup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
// {/* <Document
// file={samplePDF}
// onLoadSuccess={this.onDocumentLoad.bind(this)}
// >
// {/* {Array.from(new Array(this.state.numPages), (el, index) => (
//   <Page key={`page_${index + 1}`} pageNumber={index + 1} />
// ))} */}
// {
//   (console.log(samplePDF.numPages),
//   Array.from(samplePDF).map((el, index) => (
//     <Page key={index + 1} pageNumber={index + 1} />
//   )))
// }
// </Document> */}
