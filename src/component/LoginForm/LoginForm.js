import React, { Component } from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import InputField from "../InputField/InputField";

import "./LoginForm.styles.css";
import {Spinner} from 'react-activity';
import {setCurrentUser} from "../../redux/Stores/AccountReducer";
import {loginAccount} from "../../redux/Action/UserAction";
import 'react-activity/dist/react-activity.css';
class LoginForm extends Component {
  constructor (props) {
    super(props)
      this.state = {
        schoolCode: "",
        username: "",
        password: "",
        isLoading:false,
    }
  }
  
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  submitForm = async (event) => {
    event.preventDefault();
    try {
      this.setState({isLoading:true})
      
      await loginAccount(this.state);
      
      this.props.history.push("/homescreen")
      
      
    }
    catch (err){
      
      this.setState({isLoading:false})
    }
    
  };

  render() {
    return (
      <div className="loginForm">
        <h3 className="title">LOGIN</h3>
        <InputField
          handleChange={this.handleChange}
          name="schoolCode"
          placeholder="Enter your school code"
        />
        <InputField
          handleChange={this.handleChange}
          name="username"
          placeholder="Enter your mobile or email"
        />
        <InputField
          handleChange={this.handleChange}
          name="password"
          placeholder="Enter your password"
          
        />
        <label style={{ marginLeft: "50%" }}>
          <a style={{ color: "#f3c428" }} href="/forgotpassword">
            Forgot Password?
          </a>
        </label>
        {this.state.isLoading?
          (
            <div className='button' style={{display:'flex',alignItems:'center',paddingLeft:'21%',marginTop: "1em"}}>
              <Spinner color="white" size={16} speed={1} animating={true} />
            </div>
            
          ):
            <button className='button' style={{marginTop: "1em"}} onClick={this.submitForm}>LOGIN</button>
          }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
 
})

export default connect(mapStateToProps)(withRouter(LoginForm));
