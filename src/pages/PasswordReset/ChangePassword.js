import React, { Component } from "react";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import ppo1 from "../../assets/ppo1.png";
import "./password.css";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  toggleShow(id) {
    if (id) {
      this.setState({ hidden: !this.state.hidden, select: !this.state.select });
    }
    console.log(this.props);
  }
  handleChange = (event, key) => {};

  render() {
    return (
      <div className="dashboard">
        <div className='flexrow'>
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div
              className="passScreen"
              style={{
                width: "auto",
                height: "110vh",
                left: "0px",
                top: "0px",
                marginLeft: "2%",
                marginTop: "2%",
                marginRight: "2%",
                marginBottom: "2%",
                background:
                  "linear-gradient(180deg, rgba(244, 249, 255, 0.0001) 0%, #F4F9FF 26.23%)",
              }}
            >
              <div className="containerChangePassword">
                <img
                  src={ppo1}
                  className="imgField"
                  style={{
                    width: "308px",
                    height: "239px",
                    position: "relative",
                    marginTop: "160px",
                    right: "250px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    bottom: "20px",
                    right: "100px",
                  }}
                >
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
                      Change your password?
                    </label>

                    <div className="passwordField">
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
                            marginRight: "22vh",
                            color: "#1F2041",
                          }}
                        >
                          Old password
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
                    <div className="passwordField">
                      <div style={{ display: "inline-flex" }}>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "12px",
                            lineHeight: "14px",
                            height: "15px",
                            right: "4vh",
                            position: "relative",
                            textTransform: "uppercase",
                            marginRight: "14vh",
                            color: "#1F2041",
                          }}
                        >
                          New password
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "12px",
                            lineHeight: "14px",
                            textAlign: "right",
                            position: "absolute",
                            marginLeft: "31vh",
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
                    <div className="passwordFieldd">
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
                            marginRight: "10vh",
                            color: "#1F2041",
                          }}
                        >
                          Confirm new password
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
                            left: "4vh",
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
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
