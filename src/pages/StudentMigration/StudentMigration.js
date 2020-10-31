import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/HeaderAdmin";
import {
  marginTop45vh,
} from "../../styles/marginStyles";

import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { el } from "date-fns/locale";
import { loadMoveStudentData } from '../../redux/Stores/StudentReducer';
class StudentMigration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // student: [
      //   { no: "1", class: "1A", date: "13/11/1999" },
      //   { no: "2", class: "1A", date: "13/11/1999" },
      //   { no: "3" },
      // ],
    };
    this.deleteStudents = this.deleteStudents.bind(this);
  }

  componentDidMount = () => {
    this.props.dispatch(loadMoveStudentData([]));
  }
  editStudents = (e) => {
    e.preventDefault();
    console.log(this.props.history);
    this.props.history.push("/movestudent");
  };
  deleteStudents = (e) => {
    let update = this.props.student.moveStudentData;
    // update.splice([e], 1);
    // console.log([e]);
    // console.log(update);
    update.splice(update.indexOf(e), 1);
    // console.log(update);
    this.setState({ student: update });
  };
  handleChange = (event, key) => {
    if (typeof [event.target.id].includes(key)) {
      let update = Object.assign({}, this.state[key], {
        [event.target.id]: event.target.value,
      });
      if (key) this.setState({ [key]: update });
      else this.setState({ [event.target.id]: event.target.value });

      console.log(this.state);
    }
  };

  handleDayChange(day) {
    this.setState({ date: day.toLocaleDateString() });
  }
  render() {
    // console.log(this.props.student.moveStudentData.value);
    // console.log(this.props.student);
    // let dataOfMoveSt = []
    let dataOfMoveSt = this.props.student.moveStudentData
    console.log(dataOfMoveSt);
    // console.log(dataOfMoveStudent);
    // let moveStudent = this.props.student.moveStudentData
    // console.log(moveStudent[0]);

    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Student's migration</h1>

              <div
                className="flexcolumn"
                style={{ marginLeft: "1.5vw", marginTop: "3%" }}
              >
                <div className="flexrow">
                  <div>
                    <p className="section">Enter Class</p>
                    <select
                      className="shortbox"
                      required
                      onChange={this.handleChange}
                      style={{ position: "static", marginTop: "50px" }}
                      id="class"
                    >
                      <option value="" defaultValue>
                        {" "}
                        -select-
                      </option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <div>
                    <p className="section" style={{ marginLeft: "150px" }}>
                      Enter Section
                    </p>
                    <select
                      className="shortbox"
                      required
                      onChange={this.handleChange}
                      style={{
                        position: "static",
                        marginTop: "50px",
                        marginLeft: "150px",
                      }}
                      id="class"
                    >
                      <option value="" defaultValue>
                        {" "}
                        -select-
                      </option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                </div>
                <div className="flexrow" style={marginTop45vh}></div>
              </div>

              <div
                className="eventlistArea"
                style={{ marginTop: "2vh", paddingTop: "2%" }}
              >
                <Scrollbars>
                  <div className="textMigrationScreenField">
                    <div>No</div>
                    <div>From class</div>
                    <div>From section</div>
                    <div>Date</div>
                    <div>Delete</div>
                    <div>Edit</div>
                  </div>
                  <div>
                    {dataOfMoveSt && dataOfMoveSt.map(
                      (el, index) => {
                        if (Array.isArray(el) && index === 0) {
                          return <div
                            className="textMigrationScreenField"
                            key={index}
                          >
                            <div
                              className="customWidth"
                            // onClick={() => this.deleteStudents(el)}
                            >
                              {index + 1}
                            </div>
                            <div className="customWidth" style={{ textAlign: "center", textTransform: "uppercase" }}>{el[0]}</div>
                            <div className="customWidth" style={{ textAlign: "center", textTransform: "uppercase" }}>{el[1]}</div>
                            <div className="customWidth" style={{ textAlign: "center", textTransform: "uppercase" }}>{el[1]}</div>
                            <div key={index}>
                              {" "}
                              <MdDeleteForever
                                size="1.5vw"
                                key={index}
                                onClick={() => this.deleteStudents(el)}
                              />
                            </div>
                            <div>
                              <BsPencilSquare
                                size="1.3vw"
                                color="black"
                                onClick={this.editStudents}
                              />
                            </div>
                            <div></div>
                          </div>


                        }
                      }
                    )}
                    {/* {students &&
                      students.map((el) => (
                        <div style={{ display: "flex", marginBottom: "12px" }}>
                          <input
                            className="bac"
                            type="checkbox"
                            style={{
                              marginTop: "15px",
                              marginLeft: "10px",
                              border: "1px solid #555555",
                            }}
                          />
                          <div
                            className="shortbox"
                            style={{
                              marginTop: "15px",
                              marginLeft: "300px",
                              width: "250px",
                              paddingLeft: "30px",
                              borderRadius: "3px",
                              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            {el.studentName}
                          </div>
                          <div>
                            {" "}
                            <select
                              className="shortbox"
                              required
                              onChange={this.handleChange}
                              style={{
                                marginLeft: "650px",
                                width: "150px",
                                marginTop: "15px",
                                borderRadius: "3px",
                                boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
                              }}
                              id="section"
                            >
                              <option value="" defaultValue>
                                {" "}
                                -select-
                              </option>
                              <option value="maths">maths</option>
                              <option value="english">English</option>
                              <option value="science">Science</option>
                              <option value="history">History</option>
                              <option value="pe">PE</option>
                            </select>
                          </div>
                          <div>
                            {" "}
                            <select
                              className="shortbox"
                              required
                              onChange={this.handleChange}
                              style={{
                                marginLeft: "860px",
                                width: "150px",
                                marginTop: "15px",
                                borderRadius: "3px",
                                boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
                              }}
                              id="section"
                            >
                              <option value="" defaultValue>
                                {" "}
                                -select-
                              </option>
                              <option value="maths">maths</option>
                              <option value="english">English</option>
                              <option value="science">Science</option>
                              <option value="history">History</option>
                              <option value="pe">PE</option>
                            </select>
                          </div>
                        </div>
                      ))} */}
                  </div>
                </Scrollbars>
              </div>

              <div className="flexrow" style={marginTop45vh}>
                {/* <button>Save</button> <button>Reset</button> */}

                <input
                  type="submit"
                  value="Save"
                  className="button"
                  style={{ marginLeft: "27%" }}
                />
                <input type="reset" value="Reset" className="button" />
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

export default connect(mapStateToProps)(StudentMigration);
