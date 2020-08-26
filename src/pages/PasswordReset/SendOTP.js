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
      <div
        className="passScreen "
        style={{
          width: "100vw",
          height: "110vh",
          left: "0px",
          top: "0px",
          background:
            "linear-gradient(180deg, rgba(244, 249, 255, 0.0001) 0%, #F4F9FF 26.23%)",
        }}
      >
        <div className="containerPassScreen">
          <img src={ppll1} className="imgField" />
          <div>
            <form
              onSubmit={this.handleSubmit}
              style={{
                background: "#ffffff",
                width: "531px",
                height: "499px",
                textAlign: "center",
                boxShadow: "10px 10px 40px #698F9B",
                borderRadius: "8px",
                marginTop: "59px",
                marginLeft: "35px",
              }}
            >
              <label
                style={{
                  width: "415px",
                  height: "43px",
                  left: "781px",
                  top: "339px",
                  fontFamily: "Poly",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "36px",
                  lineHeight: "43px",
                  marginTop: "65px",
                  color: "#04044E",
                }}
              >
                Enter your OTP
              </label>
              <label>
                <div>Didn't get OTP? Resend again?</div>
              </label>
              <OtpInput
                className="otp"
                title="Number only input"
                OTPLength={4}
                value={this.state.otp}
                onChange={this.handleChange}
                otpType="number"
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

              <button
                type="submit"
                value="submit"
                style={{
                  width: "228px",
                  height: "54px",
                  background: "#262F56",
                  borderRadius: "6px",
                  marginTop: "2vh",
                  fontFamily: "Poly",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#FFFFFF",
                }}
              >
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
