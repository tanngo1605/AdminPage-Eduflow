import React, { Component } from "react";
import { connect } from "react-redux";
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
          <img src={ii} className="imgField" />
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
                Forgot your password?
              </label>
              <div
                style={{
                  height: "30px",
                  marginBottom: "14px",
                  fontFamily: "Poly",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "17px",

                  color: "#04044E",
                }}
              >
                Enter user ID to get OTP
              </div>
              <div className="schoolCodeField">
                <div style={{ display: "inline-flex" }}>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "14px",
                      height: "15px",
                      textTransform: "uppercase",
                      marginRight: "14vh",
                      color: "#1F2041",
                    }}
                  >
                    Enter your school code
                  </div>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "12px",
                      lineHeight: "14px",
                      textAlign: "right",
                      textTransform: "uppercase",
                      color: " rgba(31, 32, 65, 0.5)",
                    }}
                  >
                    Type
                  </div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="345677890"
                ></input>
              </div>
              <div className="userIDField">
                <div style={{ display: "inline-flex" }}>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "14px",
                      height: "15px",
                      textTransform: "uppercase",
                      marginRight: "20vh",
                      color: "#1F2041",
                    }}
                  >
                    Enter your user ID
                  </div>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "12px",
                      lineHeight: "14px",
                      textAlign: "right",
                      textTransform: "uppercase",
                      color: " rgba(31, 32, 65, 0.5)",
                    }}
                  >
                    Type
                  </div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="akhil112@gmail.com"
                ></input>
              </div>

              <div className="emailField">
                <div style={{ display: "inline-flex" }}>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "14px",
                      height: "15px",
                      textTransform: "uppercase",
                      marginRight: "19vh",
                      color: "#1F2041",
                    }}
                  >
                    Enter your email ID
                  </div>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "12px",
                      lineHeight: "14px",
                      textAlign: "right",
                      textTransform: "uppercase",
                      color: " rgba(31, 32, 65, 0.5)",
                    }}
                  >
                    Type
                  </div>
                </div>
                <input
                  className="inputPassword"
                  placeholder="akhil112@gmail.com"
                ></input>
              </div>

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
