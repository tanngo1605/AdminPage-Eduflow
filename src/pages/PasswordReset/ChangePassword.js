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
  handleSubmit = (event) => {
    this.props.history.push();
  };
  render() {
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header />
            <div className="passScreen">
              <div className="containerChangePassword">
                <img
                  alt="#"
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
                  <form className="formPass" onSubmit={this.handleSubmit}>
                    <label className="titlePass">Change your password?</label>

                    <div className="passwordField">
                      <div style={{ display: "inline-flex" }}>
                        <div className="textPass">Old password</div>
                        <div className="textTypePass">Type</div>
                      </div>
                      <input
                        className="inputPassword resetPassword"
                        placeholder="****************"
                        type={this.state.hidden ? "password" : "text"}
                      />
                      <label className="eyeIcon" htmlFor="button1">
                        <i
                          className="hideshowBtn"
                          id="button1"
                          onClick={() => this.toggleShow("button1")}
                        ></i>
                      </label>
                    </div>
                    <div className="passwordField">
                      <div className='flexrow'>
                        <div className="textPass">New password</div>
                        <div className="textTypePass">Type</div>
                      </div>
                      <input
                        className="inputPassword resetPassword"
                        placeholder="****************"
                        type={this.state.hidden ? "password" : "text"}
                      />
                      <label className="eyeIcon" htmlFor="button1">
                        <i
                          className="hideshowBtn"
                          id="button1"
                          onClick={() => this.toggleShow("button1")}
                        ></i>
                      </label>
                    </div>
                    <div className="passwordField">
                      <div style={{ display: "inline-flex" }}>
                        <div className="textPass">Confirm new password</div>
                        <div className="textTypePass">Type</div>
                      </div>
                      <input
                        className="inputPassword resetPassword"
                        placeholder="****************"
                        type={this.state.hidden ? "password" : "text"}
                      />
                      <label className="eyeIcon" htmlFor="button2">
                        <i
                          className="hideshowBtn"
                          id="button2"
                          onClick={() => this.toggleShow("button2")}
                        ></i>
                      </label>
                    </div>

                    <button type="submit" value="submit" className="buttonPass">
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
