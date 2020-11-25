import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import InputField from "../InputField/InputField";
// import jwt from "../../../node_modules/@types/"
import "./LoginForm.styles.css";
import { Spinner } from 'react-activity';
import { setCurrentUser } from "../../redux/Stores/AccountReducer";
import { loginAccount } from "../../redux/Action/UserAction";
import 'react-activity/dist/react-activity.css';
// import fakeAuth from "../../PriveRoute/fakeAuth"
// const jwt = require('jsonwebtoken');
// localStorage.setItem("auth", 0)
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role: "",
      username: "",
      password: "",
      isLoading: false,
    }
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  submitForm = async (event) => {
    document.cookie = "auth=1"
    event.preventDefault();
    try {

      this.setState({ isLoading: true })
      let userdata = await loginAccount(this.state);
      if (document.cookie && (userdata !== '')) {
        window.location.reload()
        this.props.history.push("/homescreen")
        window.location.reload()
        this.props.history.push("/homescreen")

      }
      console.log(userdata)
      this.props.dispatch(setCurrentUser({ userdata }))
      // window.location.reload()
      // if (count === 1) {
      //   window.location.reload()
      //   count++
      // }
      this.props.history.push("/homescreen")


    }
    catch (err) {

      this.setState({ isLoading: false })
    }

  };

  render() {
    return (
      <div className="loginForm">
        <h3 className="title">LOGIN</h3>
        <InputField
          handleChange={this.handleChange}
          name="role"
          placeholder="Enter your role"
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
        {this.state.isLoading ?
          (
            <div className='button' style={{ display: 'flex', alignItems: 'center', paddingLeft: '21%', marginTop: "1em" }}>
              <Spinner color="white" size={16} speed={1} animating={true} />
            </div>

          ) :
          <button className='button' style={{ marginTop: "1em" }} onClick={this.submitForm}>LOGIN</button>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,

})

export default connect(mapStateToProps)(withRouter(LoginForm));
