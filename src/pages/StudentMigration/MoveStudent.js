import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import {
  loadData,
  filterByValue,
  deleteData,
} from "../../redux/Stores/StudentReducer";
import {
  marginBottom125vh,
  marginBottom65vh,
  marginLeft380vw,
  marginLeft200vw,
  marginLeft150vw,
  marginLeft130vw,
  marginLeft55vw,
  marginTop55vh,
  marginTop45vh,
  fontsize12vw,
} from "../../styles/marginStyles";

class MoveStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      classvalue: "",
      section: "",

      // '1': { class: '', section: '', date: '', subject: '', teacher: '' },
      // '2': { class: '', section: '', date: '', subject: '', teacher: '' },
      // '3': { class: '', section: '', date: '', subject: '', teacher: '' },

      //   date: '',
      // trigger: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(loadData());
  }
  handleChange = (event, key) => {
    // console.log(event.target.id, event.target.value);
    // this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
    let updatesearch = Object.assign({}, this.state, { [event.target.id]: event.target.value })
    console.log(updatesearch)
    this.setState(updatesearch)
    console.log(this.state)
    // this.props.dispatch(loadData());
  };

  filterStudent = (e) => {
    // console.log(this.state);
    e.preventDefault();
    // console.log(this.state);
    setTimeout(() => {
      this.props.dispatch(filterByValue({ value: this.state }))
    }, 100);
    console.log(filterByValue({ value: this.state }))
    // console.log(this.state);
    // console.log(
    //   filterByValue({
    //     value: this.state
    //   })
    // );
    // console.log(
    //   filterByValue({
    //     class: this.state.class,
    //     section: this.state.section,
    //   })
    // );
  };
  handleDayChange(day) {
    this.setState({ date: day.toLocaleDateString() });
  }
  chooseStud(e) {
    console.log(e.target)
  }
  render() {
    let students = this.props.student.filteredStudents;
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Move students to another class</h1>

              <div
                className="flexcolumn"
                style={{ marginLeft: "1.5vw", marginTop: "3%" }}
              >
                <form className="flexrow" onChange={this.filterStudent}>
                  <div className="flexrow" style={marginBottom65vh}>
                    <p className="section">Enter Class</p>
                    <select
                      className="shortbox"
                      required
                      onChange={this.handleChange}
                      style={marginLeft130vw}
                      id="classvalue"
                    >
                      <option value="" defaultValue>
                        {" "}
                        -select-
                      </option>
                      <option value="v">V</option>
                      <option value="h">H</option>

                    </select>
                  </div>
                  <div className="flexrow" style={marginLeft380vw}>
                    <p className="section">Enter Section</p>
                    <select
                      className="shortbox"
                      required
                      onChange={this.handleChange}
                      style={marginLeft130vw}
                      id="section"
                    >
                      <option value="" defaultValue>
                        {" "}
                        -select-
                      </option>
                      <option value="tl">TL</option>
                      <option value="th">TH</option>
                      <option value="h">H</option>

                    </select>
                  </div>
                </form>
                <div className="flexrow" style={marginTop45vh}></div>
              </div>

              {/* {this.displayPeriod()} */}
              <div
                className="eventlistArea"
                style={{ marginTop: "8vh", paddingTop: "2%" }}
              >
                <Scrollbars>
                  <div className="textMoveScreenField">
                    <div style={{ marginRight: "250px" }}>Student's name</div>
                    <div>Move to class</div>
                    <div>Move to section</div>
                  </div>
                  <div>
                    {students &&
                      students.map(
                        (el) => (
                          // console.log(students),
                          (
                            <div
                              style={{ display: "flex", marginBottom: "12px" }}
                            >
                              <input
                                onClick={this.chooseStud}
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
                                {el.name}
                              </div>
                              <div>
                                {" "}
                                <select
                                  key={el.key}
                                  className="shortbox"
                                  required
                                  onChange={this.handleChange}
                                  style={{
                                    marginLeft: "650px",
                                    width: "150px",
                                    marginTop: "15px",
                                    borderRadius: "3px",
                                    boxShadow:
                                      "0px 1px 10px rgba(0, 0, 0, 0.1)",
                                  }}
                                  id="section"
                                >
                                  <option value="" defaultValue>
                                    {" "}
                                    -select-
                                  </option>
                                  <option value="TH">TH</option>
                                  <option value="TL">TL</option>
                                  <option value="science">Science</option>
                                  <option value="history">History</option>
                                  <option value="pe">PE</option>
                                </select>
                              </div>
                              <div>
                                {" "}
                                <select
                                  key={el.key}
                                  className="shortbox"
                                  required
                                  onChange={this.handleChange}
                                  style={{
                                    marginLeft: "860px",
                                    width: "150px",
                                    marginTop: "15px",
                                    borderRadius: "3px",
                                    boxShadow:
                                      "0px 1px 10px rgba(0, 0, 0, 0.1)",
                                  }}
                                  id="section"
                                >
                                  <option value="" defaultValue>
                                    {" "}
                                    -select-
                                  </option>
                                  <option value="TL">TL</option>
                                  <option value="english">English</option>
                                  <option value="science">Science</option>
                                  <option value="history">History</option>
                                  <option value="pe">PE</option>
                                </select>
                              </div>
                            </div>
                          )
                        )
                      )}
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

export default connect(mapStateToProps)(MoveStudent);
