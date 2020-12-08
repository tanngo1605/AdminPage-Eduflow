import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import InputField from "../InputField/InputField";
import "./LoginForm.styles.css";
import { Spinner } from 'react-activity';
import { setCurrentUser, getCurrentUser } from "../../redux/Stores/AccountReducer";
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
      trigger: false
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
      // document.cookie = `auth=${roleOfUser}`
      this.props.dispatch(setCurrentUser(userdata))
      this.props.dispatch(getCurrentUser())
      console.log(this.props);

      // this.props.history.push("/homescreen")

      // if (this.props.account.userData.config.data.split(",")[2].replace(/"|}|:|role/g, "") === "Admin") {
      //   sessionStorage.setItem('token', `${this.props.account.userData.data.data.token}`)
      //   // this.setState({ trigger: !this.state.trigger })
      //   // sessionStorage.setItem('account', `${this.props.account}`)
      //   // window.location.reload()
      //   // this.props.history.push("/homescreen")
      //   // window.location.reload()
      //   // this.props.history.push("/homescreen")
      //   // window.location.reload()
      //   // window.location.assign("http://localhost:3000/homescreen")
      //   this.props.history.push("/homescreen")

      // }
      // else if (this.props.account.userData.config.data.split(",")[2].replace(/"|}|:|role/g, "") === "Teacher") {
      //   this.props.history.push("/homescreen")

      // }
      if (userdata.status === 200 && (roleOfUser === "admin" || roleOfUser === "superAdmin")) {
        document.cookie = `auth=${roleOfUser}`
        //   // window.location.reload()
        window.location.assign("http://localhost:3000/homescreen")
        //   // this.props.history.push("/homescreen")

      }
      else if (userdata.status === 200 && roleOfUser === "teacher") {
        document.cookie = `auth=${roleOfUser}`
        //   // window.location.reload()
        //   // this.props.dispatch(setCurrentUser(userdata))
        window.location.assign("http://localhost:3000/result")
        //   // window.location.reload()
        //   // this.props.history.push("/result")
        //   // window.location.reload()
        //   // this.props.history.push({ path: "/result", state: { userdata: userdata } })
        //   // window.location.reload()
        //   // this.props.history.push({ path: "/result", state: { userdata: userdata } })
        //   // // window.location.reload()
        //   // this.props.history.push({ path: "/result", state: { userdata: userdata } })

      }



    }
    catch (err) {

      this.setState({ isLoading: false })
    }

  };

  render() {
    console.log(this.props);
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
            <option value="superAdmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
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
