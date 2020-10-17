import React, { Component } from "react";
import ii from "../../assets/ii1.png";
import "./password.css";
import Popup from "reactjs-popup";
import passwordImg from "../../assets/password2.png";
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
    // temp = 1;
  };
  toggleShow(id) {
    console.log(temp, this.state.id);
    if (this.state.id === id && temp % 2 === 0) temp++;
    else if (this.state.id === id && temp % 2 === 1) temp = 0;
    else {
      temp = 0;
      this.setState({ id: id });
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
    return (
      <div className="passScreen ">
        <div className="containerPassScreen">
          <img alt="#" src={ii} className="imgField" />
          <div>
            <form className="formPass" onSubmit={this.handleSubmit}>
              <label className="titlePass">Reset your password</label>
              <div className="passwordFieldd" style={{ marginTop: "15px" }}>
                <div className="flexrow">
                  <div className="textPass">Enter your new password</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input
                  className="inputPassword resetPassword"
                  placeholder="****************"
                  // onFocus={(e) => (e.target.type = "password")}
                  id="1"
                  type={
                    this.state.id === "1" && temp % 2 === 0
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
              <div className="passwordFieldd" style={{ marginTop: "30px" }}>
                <div style={{ display: "inline-flex" }}>
                  <div className="textPass">Enter your new password</div>
                  <div className="textTypePass">Type</div>
                </div>
                <input
                  className="inputPassword resetPassword"
                  placeholder="****************"
                  id="2"
                  type={
                    this.state.id === "2" && temp % 2 === 0
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
                  className="resetPass"
                  // checked={this.state.checked}
                  onClick={() => this.toggleCheck()}
                />
                <span>Remember me</span>
              </div>

              <Popup
                modal
                trigger={
                  <button
                    type="button"
                    value="submit"
                    className="buttonPass"
                    onClick={this.handleChange}
                  >
                    Reset
                  </button>
                }
              >
                <img src={passwordImg} alt="" />
                Your password was succesfully changed
                <button className="buttonPass" onSubmit={this.handleSubmit}>
                  Login
                </button>
              </Popup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
// {/* <Document
// file={samplePDF}
// onLoadSuccess={this.onDocumentLoad.bind(this)}
// >
// {/* {Array.from(new Array(this.state.numPages), (el, index) => (
//   <Page key={`page_${index + 1}`} pageNumber={index + 1} />
// ))} */}
// {
//   (console.log(samplePDF.numPages),
//   Array.from(samplePDF).map((el, index) => (
//     <Page key={index + 1} pageNumber={index + 1} />
//   )))
// }
// </Document> */}
