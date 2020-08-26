import React, { Component } from "react";
import ii from "../../assets/ii1.png";
import "./password.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      checked: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  handleChange = () => {};
  toggleShow(id) {
    if (id) {
      this.setState({ hidden: !this.state.hidden, select: !this.state.select });
    }
  }
  toggleCheck() {
    this.setState({ checked: !this.state.checked });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.history);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
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
                  marginTop: "87px",
                  color: "#04044E",
                }}
              >
                Reset your password
              </label>

              <div className="passwordFieldd" style={{ marginTop: "5vh" }}>
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
                      marginRight: "13vh",
                      color: "#1F2041",
                    }}
                  >
                    Enter your new password
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
                  className="inputPassword resetPassword"
                  placeholder="****************"
                  type={this.state.hidden ? "password" : "text"}
                />
                <label
                  htmlFor="button1"
                  style={{
                    width: "29px",
                    height: "12px",
                    float: "right",
                    right: "120px",
                    bottom: "28px",
                  }}
                >
                  <i
                    className="hideshowBtn"
                    id="button1"
                    onClick={() => this.toggleShow("button1")}
                  ></i>
                </label>
              </div>
              <div className="passwordFieldd" style={{ marginTop: "5vh" }}>
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
                      marginRight: "12vh",
                      color: "#1F2041",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    Enter your new password
                  </div>
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "12px",
                      lineHeight: "14px",
                      textAlign: "right",
                      position: "relative",
                      left: "18px",
                      textTransform: "uppercase",
                      color: " rgba(31, 32, 65, 0.5)",
                    }}
                  >
                    Type
                  </div>
                </div>
                <input
                  className="inputPassword resetPassword"
                  placeholder="****************"
                  type={this.state.hidden ? "password" : "text"}
                />

                <label
                  htmlFor="button2"
                  style={{
                    width: "29px",
                    height: "12px",
                    float: "right",
                    right: "120px",
                    bottom: "28px",
                  }}
                >
                  <i
                    className="hideshowBtn"
                    id="button2"
                    onClick={() => this.toggleShow("button2")}
                  ></i>
                </label>
              </div>
              <input
                type="checkbox"
                checked={this.state.checked}
                style={{ position: "relative", right: "120px" }}
                onClick={this.toggleCheck}
              />
              <span style={{ position: "absolute", left: "55.8%" }}>
                Remember me
              </span>
              <button
                type="button"
                value="Save"
                onClick={this.handleSubmit}
                style={{
                  width: "228px",
                  height: "54px",
                  display: "flow-root",
                  background: "#262F56",
                  borderRadius: "6px",
                  marginTop: "2vh",
                  position: "relative",
                  left: "155px",
                  fontFamily: "Poly",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "21px",

                  color: "#FFFFFF",
                }}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
