import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addData,
  loadData,
  modifyData,
} from "../../redux/Stores/StudentReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import studentprofiledata from "../../userData/StudentProfileData";
import {
  marginBottom55vh,
  marginLeft150vw,
  marginLeft55vw,
  marginTop8vh,
  labelStyle,

} from "../../styles/marginStyles";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Scrollbars } from "react-custom-scrollbars";
class AStudentProfile extends Component {
  constructor(props) {
    super(props);
    if (props.location.studentdata)
      this.state = {
        student: props.location.studentdata,
        edit: false,
      };
    else
      this.state = {
        student: {
          name: "",
          date: "",
          section: "",
          rollno: "",
          address: "",
          classteacher: "",
          fathername: "",
          mothername: "",
          gender: "",
          fatheroccupation: "",
          fathermobileno: "",
          othermobileno: "",
          admission: "",
          image: null,
          key: Math.random().toString(),
        },
        edit: true,
      };
  }
  componentDidMount() {
    this.props.dispatch(loadData());
  }

  displayImage = () => {
    if (this.state.edit === false)
      return (
        <div className="profileimage">
          <img
            src={this.state.student.image}
            alt=""
            className="profileimagepreview"
          />
        </div>
      );

    if (this.state.student.image)
      return (
        <div className="profileimage">
          <label htmlFor="image">
            <img
              src={this.state.student.image}
              alt=""
              className="profileimagepreview"
            />
          </label>
          <input
            type="file"
            id="image"
            onChange={this.handleChange}
            accept="image/*"
          />
        </div>
      );
    return (
      <div>
        <label htmlFor="image" className="profileimage"></label>
        <input
          type="file"
          id="image"
          onChange={this.handleChange}
          accept="image/*"
        />
      </div>
    );
  };
  handleChange = (event) => {
    let update;
    if (event.target.id === "image")
      update = Object.assign({}, this.state.student, {
        image: URL.createObjectURL(event.target.files[0]),
      });
    else
      update = Object.assign({}, this.state.student, {
        [event.target.id]: event.target.value,
      });
    this.setState({ student: update });
    console.log(event.target.value, event.target.id);
    console.log(this.state.student);
  };
  handleSubmit = (event) => {
    if (this.props.location.studentdata) {
      this.props.dispatch(modifyData({ value: this.state.student }));
      this.props.history.push("/student");
    } else {
      this.props.dispatch(addData({ value: this.state.student }));
      this.props.history.push("/student");
    }
    console.log(this.state.student);
  };
  handleDayChange(day) {
    var a = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(day);
    let update = Object.assign({}, this.state.student, {
      date: a,
    });
    this.setState({ student: update });
    console.log(this.state.student);

    console.log(a);
  }

  render() {
    console.log(this.state.student);
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Student Profile </h1>
              <div className="flexrow">
                {this.displayImage()}
                <div className="flexcolumn">
                  <Scrollbars style={{ width: "730px", height: "600px" }}>
                    <div
                      className="flexcolumn"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        width: "730px",
                        height: "auto",
                        background: "#FAFBFC",
                        boxShadow:
                          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                        paddingLeft: "25px",
                      }}
                    >
                      {studentprofiledata &&
                        studentprofiledata.map((item) => (
                          <div
                            key={item.id}
                            className="flexrow"
                            style={
                              (
                                {
                                  marginTop: "20px"
                                })
                            }
                          >
                            {this.state.edit ? (
                              <div
                                style={{
                                  marginBottom:
                                    item.comtent === "Name" || item.content === "Date of birth" ? "20px" : "40px",
                                  height:
                                    item.content === "Date of birth" ? "20px" : null
                                }}
                              >
                                <label
                                  htmlFor={item.id}
                                  className="section viceSection"
                                  style={labelStyle}
                                >
                                  {item.content}{" "}
                                </label>
                                {item.content === "Date of birth" ? (
                                  <DayPickerInput
                                    required
                                    id={item.id}
                                    className="shortbox "
                                    style={{ marginLeft: "20vw", marginBottom: "15px" }}
                                    onDayChange={(day) =>
                                      this.handleDayChange(day)
                                    }
                                    placeholder="Enter date of birth"
                                  />
                                ) : item.content === "Gender" ? (
                                  <select
                                    required
                                    id={item.id}
                                    onChange={this.handleChange}
                                    className="shortbox"
                                    style={{
                                      marginLeft: "20vw",
                                      background:
                                        "url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right ",
                                      backgroundPositionX: "288px",
                                      backgroundSize: "12px",
                                    }}
                                  >
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                ) : (
                                      <input
                                        type={item.type}
                                        required
                                        id={item.id}
                                        placeholder={this.state.student[item.id]}
                                        className="shortbox"
                                        onChange={this.handleChange}
                                        style={marginLeft150vw}
                                      />
                                    )}
                              </div>
                            ) : (
                                <div style={{ marginBottom: "3vh" }}>
                                  <div
                                    className="section"
                                    style={labelStyle}
                                  >
                                    {item.content}{" "}
                                  </div>
                                  <div
                                    className="shortbox"
                                    style={{
                                      backgroundColor: "#F2F4F7",
                                      marginLeft: "15vw",
                                    }}
                                  >
                                    {item.id === "dob"
                                      ? new Intl.DateTimeFormat("en-GB", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                      }).format(this.state.student[item.id])
                                      : this.state.student[item.id]}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      <div style={{ marginTop: "40px" }}>
                        <label
                          htmlFor=""
                          className="section"
                          style={labelStyle}
                        >
                          Correspondense address
                        </label>
                        <textarea
                          placeholder="Enter correspondense address"
                          className="shortbox"
                          style={{
                            height: "100px",
                            marginLeft: "20vw",
                            marginBottom: "20px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "20vh",
                        }}
                      >
                        {" "}
                        {/*city,state,postcode*/}
                        <div className="flexrow">
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            City
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",

                            }}
                          />
                        </div>
                        <div className="flexrow" style={{ marginLeft: "15vw" }}>
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            State
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",

                            }}
                          />
                        </div>
                        <div className="flexrow" style={{ marginLeft: "15vw" }}>
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            Postcode
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "84px",

                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{ marginTop: "8.5vh  ", marginBottom: "20px" }}
                      >
                        <label
                          htmlFor=""
                          className="section"
                          style={labelStyle}
                        >
                          Same permanent address
                        </label>
                        <input
                          className="abc"
                          type="checkbox"
                          style={{ marginTop: "14px", marginLeft: "200px" }}
                        />
                      </div>

                      <div style={{ marginBottom: "20px" }}>
                        <label
                          htmlFor=""
                          className="section"
                          style={labelStyle}
                        >
                          {/* {content}{" "} */}Permanent address
                        </label>
                        <textarea
                          placeholder="Enter correspondense address"
                          className="shortbox"
                          style={{ height: "100px", marginLeft: "20vw" }}
                        />
                      </div>

                      <div style={{ display: "flex" }}>
                        {" "}
                        {/*city,state,postcode*/}
                        <div className="flexrow" style={{ marginTop: "15vh" }}>
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            City
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",

                            }}
                          />
                        </div>
                        <div
                          className="flexrow"
                          style={{ marginTop: "15vh", marginLeft: "15vw" }}
                        >
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            State
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",

                            }}
                          />
                        </div>
                        <div
                          className="flexrow"
                          style={{ marginTop: "15vh", marginLeft: "15vw" }}
                        >
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            Postcode
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox cspInput"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "84px",

                            }}
                          />
                        </div>
                      </div>

                      <div style={{ marginTop: "10vh" }}>
                        <div>
                          {" "}
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            Class
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox csInput"
                          // onChange={this.handleChange}

                          />
                        </div>
                        <div style={{ marginLeft: "20vw" }}>
                          {" "}
                          <label
                            htmlFor=""
                            className="section"
                            style={labelStyle}
                          >
                            Section
                          </label>
                          <input
                            type={Text}
                            required
                            placeholder=""
                            className="shortbox csInput"
                          // onChange={this.handleChange}

                          />
                        </div>
                      </div>
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={{ marginBottom: "5.5vh", marginTop: "8vh" }}
                      >
                        <label
                          htmlFor="classteacher"
                          className="section"
                          style={labelStyle}
                        >
                          Class teacher name
                        </label>
                        <input
                          type="text"
                          required
                          id="classteacher"
                          placeholder=""
                          className="shortbox"
                          onChange={this.handleChange}
                          style={marginLeft150vw}
                        />
                      </div>
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={{ marginBottom: "5.5vh", marginTop: "4vh" }}
                      >
                        <label
                          htmlFor="fathermobileno"
                          className="section"
                          style={labelStyle}
                        >
                          Father's Mobile No.
                        </label>
                        {this.state.edit ? (
                          <input
                            type="text"
                            required
                            id="fathermobileno"
                            placeholder=""
                            className="shortbox"
                            onChange={this.handleChange}
                            style={marginLeft150vw}
                          />
                        ) : (
                            <div
                              className="shortbox"

                              style={{
                                backgroundColor: "#F2F4F7",
                                marginLeft: "20vw",
                              }}
                            >
                              {this.state.student["fathermobileno"]}
                            </div>
                          )}
                      </div>
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={{ marginBottom: "10vh", marginTop: "4vh" }}
                      >
                        <label
                          // htmlFor={item.id}
                          className="section"
                          style={labelStyle}
                        >
                          Alternante Mobile No.
                        </label>
                        <input
                          type="text"
                          required
                          // id={item.id}
                          placeholder=""
                          className="shortbox"
                          onChange={this.handleChange}
                          style={marginLeft150vw}
                        />
                      </div>
                    </div>
                  </Scrollbars>

                  {/*end of form*/}
                  <div className="flexrow" style={{ marginTop: "2%" }}>
                    <input
                      type="button"
                      value="Edit"
                      className="button"
                      style={{ marginLeft: "5%" }}
                      onClick={() => {
                        !this.state.edit
                          ? this.setState({ edit: true })
                          : console.log(
                            "You have gone to edit page or havent change anything"
                          );
                      }}
                    />

                    <input
                      type="button"
                      value="Save"
                      className="button"
                      style={{ marginLeft: "15%" }}
                      onClick={this.handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(AStudentProfile);
