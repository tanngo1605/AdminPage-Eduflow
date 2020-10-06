import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { connect } from "react-redux";
import {
  addTeacherData,
  loadTeacherData,
  modifyTeacherData,
} from "../../redux/Stores/TeacherReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import teacherprofiledata from "../../userData/TeacherProfileData";
import {
  marginBottom55vh,
  marginLeft150vw,
} from "../../styles/marginStyles";
import "./../../styles.css";

import DayPickerInput from "react-day-picker/DayPickerInput";
class ATeacherProfile extends Component {
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
          date: new Date(),
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
    this.props.dispatch(loadTeacherData());
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
  };
  handleSubmit = (event) => {
    if (this.props.location.studentdata) {
      this.props.dispatch(modifyTeacherData({ value: this.state.student }));
      this.props.history.push("/student");
    } else {
      this.props.dispatch(addTeacherData({ value: this.state.student }));
      this.props.history.push("/student");
    }
  };
  handleDayChange(day) {
    let update = Object.assign({}, this.state.ticket, { date: day });
    console.log(this.state.ticket);
    this.setState({ student: update });
    console.log(this.props);
  }

  render() {
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
                  <Scrollbars style={{ width: "730px", height: "700px" }}>
                    <div
                      className="flexcolumn"
                      style={{
                        // overflowY: "scroll",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        width: "730px",
                        height: "auto",
                        background: "#FAFBFC",
                        boxShadow:
                          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                        paddingLeft: "25px",
                      }}
                    >
                      {teacherprofiledata &&
                        teacherprofiledata.map((item) => (
                          <div
                            key={item.id}
                            className="flexrow"
                            style={
                              (marginBottom55vh,
                              {
                                marginTop:
                                  item.content === "Name" ? "20px" : "40px",
                              })
                            }
                          >
                            {this.state.edit ? (
                              <div
                                style={{
                                  marginBottom: "20px",
                                  display:
                                    item.content === "Dob" ? "flex" : "default",
                                }}
                              >
                                <label
                                  htmlFor={item.id}
                                  className="section"
                                  style={{
                                    width: "20%",
                                    fontSize: "1vw",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {item.content}{" "}
                                </label>
                                {item.content === "Dob" ? (
                                  <DayPickerInput
                                    className="shortbox"
                                    style={marginLeft150vw}
                                    onDayChange={(day) =>
                                      this.handleDayChange(day)
                                    }
                                    placeholder="Enter date of birth"
                                  />
                                ) : item.content === "Gender" ? (
                                  <select
                                    className="shortbox"
                                    style={
                                      (marginLeft150vw,
                                      {
                                        marginLeft: "20vw",
                                        background:
                                          "url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right ",
                                        backgroundPositionX: "288px",
                                        backgroundSize: "12px",
                                      })
                                    }
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
                              <div>
                                <div
                                  className="section"
                                  style={{ marginRight: "10vw" }}
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
                                  {this.state.student[item.id]}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                        <label
                          htmlFor=""
                          className="section"
                          style={{
                            width: "25%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          {/* {content}{" "} */}Correspondense address
                        </label>
                        <textarea
                          placeholder="Enter correspondense address"
                          className="shortbox"
                          style={
                            (marginLeft150vw,
                            { height: "100px", marginLeft: "20vw" })
                          }
                        />
                        {/* <input
                        type="text"
                        required
                        id="corAddress"
                        placeholder="Enter correspondense address"
                        className="shortbox"
                        onChange={this.handleChange}
                        style={
                          (marginLeft150vw,
                          { height: "100px", marginLeft: "20vw" })
                        }
                      /> */}
                      </div>
                      <div style={{ display: "flex", marginBottom: "20px" }}>
                        {" "}
                        {/*city,state,postcode*/}
                        <div className="flexrow" style={{ marginTop: "15vh" }}>
                          <label
                            htmlFor=""
                            className="section"
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            City
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",
                              width: "129px",
                              height: "39px",
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
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            State
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",
                              width: "129px",
                              height: "39px",
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
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            Postcode
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "84px",
                              width: "129px",
                              height: "39px",
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
                          style={{
                            width: "25%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
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
                          style={{
                            width: "25%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          {/* {content}{" "} */}Permanent address
                        </label>
                        <input
                          type={Text}
                          required
                          id="corAddress"
                          placeholder="Enter permanent address"
                          className="shortbox"
                          onChange={this.handleChange}
                          style={
                            (marginLeft150vw,
                            { height: "100px", marginLeft: "20vw" })
                          }
                        />
                      </div>

                      <div style={{ display: "flex", marginBottom: "20px" }}>
                        {" "}
                        {/*city,state,postcode*/}
                        <div className="flexrow" style={{ marginTop: "15vh" }}>
                          <label
                            htmlFor=""
                            className="section"
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            City
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",
                              width: "129px",
                              height: "39px",
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
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            State
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "49px",
                              width: "129px",
                              height: "39px",
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
                            style={{
                              width: "25%",
                              fontSize: "1vw",
                              marginLeft: "10px",
                            }}
                          >
                            Postcode
                          </label>
                          <input
                            type={Text}
                            required
                            // id="corAddress"
                            placeholder=""
                            className="shortbox"
                            // onChange={this.handleChange}
                            style={{
                              marginLeft: "84px",
                              width: "129px",
                              height: "39px",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={
                          (marginBottom55vh,
                          { marginTop: "8vh", marginBottom: "10px" })
                        }
                      >
                        <label
                          // htmlFor={item.id}
                          className="section"
                          style={{
                            width: "20%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          Subject
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
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={
                          (marginBottom55vh,
                          { marginTop: "8vh", marginBottom: "10px" })
                        }
                      >
                        <label
                          // htmlFor={item.id}
                          className="section"
                          style={{
                            width: "20%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          Role
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
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={
                          (marginBottom55vh,
                          { marginTop: "8vh", marginBottom: "10px" })
                        }
                      >
                        <label
                          // htmlFor={item.id}
                          className="section"
                          style={{
                            width: "20%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          Phone No.
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
                      <div
                        // key={item.id}
                        className="flexrow"
                        style={
                          (marginBottom55vh,
                          { marginTop: "8vh", marginBottom: "5vw" })
                        }
                      >
                        <label
                          // htmlFor={item.id}
                          className="section"
                          style={{
                            width: "20%",
                            fontSize: "1vw",
                            marginLeft: "10px",
                          }}
                        >
                          Alternate phone No.
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
                      onClick={(event) =>
                        this.state.edit ? this.handleSubmit(event) : null
                      }
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

export default connect(mapStateToProps)(ATeacherProfile);
