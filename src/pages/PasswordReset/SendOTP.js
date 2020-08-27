import React, { Component } from "react";
import ppll1 from "../../assets/ppll1.png";
import "./password.css";
import OtpInput from "react-otp-input";
class SendOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }
  handleChange = (otp) => this.setState({ otp });
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/resetpassword");
  };
  render() {
    console.log(this.state.otp);
    return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ppll1} className="imgField" />
          <div>
            <form className="formPass" onSubmit={this.handleSubmit}>
              <label
                className="titlePass"
                style={{
                  marginLeft: "28%",
                }}
              >
                Enter your OTP
              </label>
              <label style={{ marginLeft: "10vw" }}>
                Didn't get OTP? Resend again?
              </label>
              <OtpInput
                className="otp"
                title="Number only input"
                OTPLength={4}
                value={this.state.otp}
                onChange={this.handleChange}
                otpType="number"
                isInputNum="true"
                disabled={false}
                inputStyle={{
                  marginLeft: "38px",
                  width: "57px",
                  height: "57px",
                  border: "1px solid rgba(31, 32, 65, 0.5)",
                  boxSizing: "border-box",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "4px",
                }}
                containerStyle={{
                  marginLeft: "12%",
                  marginTop: "15%",
                  marginBottom: "15%",
                  marginRight: "12%",
                  position: "relative",
                  right: "8px",
                }}
              />

              <button className="buttonPass" type="submit" value="submit">
                Okay
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SendOTP;
