import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import InputField from "../InputField/InputField";
import "./LoginForm.styles.css";
import { Spinner } from 'react-activity';
import { setCurrentUser } from "../../redux/Stores/AccountReducer";
import { loginAccount } from "../../redux/Action/UserAction";
import 'react-activity/dist/react-activity.css';
import { RiBarcodeBoxLine } from "react-icons/ri";
import { InputGroup, FormControl } from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role: "",
      username: "",
      password: "",
      isLoading: false,
    }
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState({ [name]: value });
  };
  /* 1 */

  submitForm = async (event) => {
    // event.preventDefault();
    try {
      this.setState({ isLoading: true })
      let userdata = await loginAccount(this.state);
      console.log(userdata)
      let roleOfUser = userdata.config.data.split(",")[2].replace(/"|}|:|role/g, "")
      this.props.dispatch(setCurrentUser(userdata))

      if (userdata.status === 200 && (roleOfUser === "Admin" || roleOfUser === "SuperAdmin")) {
        document.cookie = `auth=${roleOfUser}`
        // window.location.reload()
        window.location.assign("http://localhost:3000/homescreen")
        // this.props.history.push("/homescreen")

      }
      else if (userdata.status === 200 && roleOfUser === "Teacher") {
        document.cookie = `auth=${roleOfUser}`
        // window.location.reload()
        // this.props.dispatch(setCurrentUser(userdata))
        window.location.assign("http://localhost:3000/result")
        // window.location.reload()
        // this.props.history.push("/result")
        // window.location.reload()
        // this.props.history.push({ path: "/result", state: { userdata: userdata } })
        // window.location.reload()
        // this.props.history.push({ path: "/result", state: { userdata: userdata } })
        // // window.location.reload()
        // this.props.history.push({ path: "/result", state: { userdata: userdata } })

      }



    }
    catch (err) {

      this.setState({ isLoading: false })
    }

  };
  render() {
    return (
      <div className="loginForm">
        <h3 className="title">LOGIN</h3>
        <InputGroup size="lg" style={{ width: "75%" }} className="mb-3">
          <i style={{ position: "absolute", padding: "10px", zIndex: 1 }}>
            <RiBarcodeBoxLine color="grey" />
          </i>
          <FormControl
            as="select"
            placeholder="Enter your role"
            onChange={this.handleChange}
            name="role"
            required
            style={{
              paddingLeft: "40px",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "10px",
            }}
            custom
          >
            <option value="" style={{ visibility: "hidden", display: "none" }}>Enter your role</option>
            <option value="SuperAdmin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </FormControl>
        </InputGroup>

        <InputField
          handleChange={this.handleChange}
          name="username"
          placeholder="Enter your mobile or email"
        />
        <InputField
          handleChange={this.handleChange}
          name="password"
          placeholder="Enter your password"

        />
        <label style={{ marginLeft: "50%" }}>
          <a style={{ color: "#f3c428" }} href="/forgotpassword">
            Forgot Password?
          </a>
        </label>
        {this.state.isLoading ?
          (
            <div className='button' style={{ display: 'flex', alignItems: 'center', paddingLeft: '21%', marginTop: "1em" }}>
              <Spinner color="white" size={16} speed={1} animating={true} />
            </div>

          ) :
          <button className='button' style={{ marginTop: "1em" }} onClick={this.submitForm}>LOGIN</button>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,

})

export default connect(mapStateToProps)(withRouter(LoginForm));
