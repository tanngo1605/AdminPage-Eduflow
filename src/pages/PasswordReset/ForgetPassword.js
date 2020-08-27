import React, { Component } from "react";
import ii from "../../assets/ii1.png";
import "./password.css";
class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = () => {};
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/sendotp");
  };
  render() {
    return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          <div>
            <form className="formPass" onSubmit={this.handleSubmit}>
              <label className="titlePass">Forgot your password?</label>
              <div className="smallTitlePass">Enter user ID to get OTP</div>
              <div className="schoolCodeField">
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your school code</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="345677890"
                ></input>
              </div>
              <div className="userIDField">
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your user ID</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="akhil112@gmail.com"
                ></input>
              </div>

              <div className="emailField">
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your email ID</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="akhil112@gmail.com"
                ></input>
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
}

export default ForgetPassword;
