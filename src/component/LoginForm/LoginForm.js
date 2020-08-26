import React, { Component } from "react";
import InputField from "../InputField/InputField";
import { Button } from "react-bootstrap";
import "./LoginForm.styles.css";
import { withRouter } from "react-router-dom";
class LoginForm extends Component {
  state = {
    schoolCode: "",
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name, value);

    this.setState({ [name]: value });
  };
  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/homescreen");
  };
  forgotPass = (event) => {
    this.props.history.push("/forgotpassword");
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
          <a style={{ color: "#f3c428" }} href="#" onClick={this.forgotPass}>
            Forgot Password?
          </a>
        </label>

        <Button
          style={{
            backgroundColor: "#00044b",
            width: "45%",
            borderRadius: "10px",
            marginTop: "1em",
          }}
          onClick={this.submitForm}
        >
          LOGIN
        </Button>
      </div>
    );
  }
}

export default withRouter(LoginForm);
