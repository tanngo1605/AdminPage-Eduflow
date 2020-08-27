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
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          <div>
            <form className="formPass" onSubmit={this.handleSubmit}>
              <label className="titlePass">Reset your password</label>
              <div className="passwordFieldd" style={{ marginTop: "5vh" }}>
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your new password</div>
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
              <div className="passwordFieldd" style={{ marginTop: "5vh" }}>
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your new password</div>
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
              <div className="checkField">
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={this.toggleCheck}
                />
                <span>Remember me</span>
              </div>

              <button
                className="buttonPass"
                type="button"
                value="Save"
                onClick={this.handleSubmit}
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
