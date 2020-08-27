import React, { Component } from "react";
import ii from "../../assets/ii1.png";
import "./password.css";
var temp = 0;
let id = ["1", "2"];
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      hidden1: false,
      checked: false,
      id: "",
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  handleChange = () => {
    temp = 1;
  };
  toggleShow(id) {
    this.setState({ id: id });
    // if (this.state.id === id) {
    //   this.setState({ hidden: !this.state.hidden });
    // } else {
    //   this.setState({ temp: this.state.hidden });
    // }
    if (id === "1") {
      this.setState({ hidden: !this.state.hidden });
    } else {
      this.setState({ hidden1: !this.state.hidden1 });
    }
    console.log(this.state.id, this.state.hidden);
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
                  // onFocus={(e) => (e.target.type = "password")}
                  id="1"
                  type={
                    this.state.hidden
                      ? // id[0] === "1" && this.state.hidden && this.state.id === "1"
                        // ? this.state.hidden
                        // : this.state.temp
                        "text"
                      : "password"
                  }
                />
                <label className="eyeIcon" htmlFor="button1">
                  <i
                    className="hideshowBtn"
                    onClick={() => this.toggleShow("1")}
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
                  id="2"
                  type={
                    this.state.hidden1
                      ? //  this.state.hidden && this.state.id === "2"
                        // ? this.state.hidden
                        // : this.state.temp
                        "text"
                      : "password"
                  }
                  // onClick={(e) => (e.target.type = "password")}
                />

                <label className="eyeIcon" htmlFor="button2">
                  <i
                    className="hideshowBtn"
                    // id="2"
                    onClick={() => this.toggleShow("2")}
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
