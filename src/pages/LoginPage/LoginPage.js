import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../component/LoginForm/LoginForm";
import { AiOutlineHome } from "react-icons/ai";
import "./LoginPage.styles.css";
const LoginPage = (props) => (
  <div className="login-page">
    <div
      style={{
        marginLeft: "85vw",
        marginTop: "50px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AiOutlineHome size="26px" color="#00044b" />
      <div
        style={{
          marginLeft: "1em",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <a style={{ color: "#00044b" }} href="#">
          Go to homepage
        </a>
      </div>
    </div>
    <LoginForm />
  </div>
);

export default LoginPage;
