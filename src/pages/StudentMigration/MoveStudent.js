import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import Popup from "reactjs-popup";
// import StudentMigration from "./StudentMigration"
import {
  loadData,
  filterByValue,
  loadMoveStudentData
} from "../../redux/Stores/StudentReducer";
import {
  marginBottom65vh,
  marginLeft380vw,
  marginLeft130vw,
  marginTop45vh,
} from "../../styles/marginStyles";
import { forEach } from "lodash";
// let arr = []
class MoveStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      classvalue: "",
      section: "",
      studentArr: [],
      flag: false
      //   date: '',
      // trigger: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(loadData());
    // console.log("componetDidMount() lifecycle");
  }
  handleChange = (event) => {
    let updatesearch = Object.assign({}, this.state, { [event.target.id]: event.target.value })
    console.log(updatesearch)
    this.setState(updatesearch)
    // let a = document.getElementById("classvalue").value
    // console.log(a);

  };

  filterStudent = (e) => {
    e.preventDefault();
    setTimeout(() => {
      this.props.dispatch(filterByValue({ value: this.state }))
    }, 100);
    console.log(this.state)
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
  chooseStud = (e) => {
    // console.log(this.state.from, this.state.from.class);
    // this.setState({ flag: true })
    let students = this.props.student.filteredStudents
    // if (this.state.flag) {
    students.forEach(el => {
      if (el.key === e.target.value) {
        el.ticked = !el.ticked
        // arr.push([{ nameof: el.name, classOf: el.classvalue, sectionOf: el.section }])
        // this.setState(prevState => {
        //   studentArr: {
        //     Object.assign({}, ...prevState.studentArr, [{ nameof: el.name, classOf: el.classvalue, sectionOf: el.section }])
        //   }
        // })
        if (el.ticked === true) {
          console.log(Object.assign([], this.state.studentArr));
          this.setState({
            studentArr: this.state.studentArr.concat([{ nameof: el.name, classOf: el.classvalue, sectionOf: el.section }])
          })

        }
        else {
          // this.se
          // console.log(this.state.studentArr.find(ele => ele !== [{ nameof: el.name, classOf: el.classvalue, sectionOf: el.section }]))
          // console.log(item !== { nameof: el.name, classOf: el.classvalue, sectionOf: el.section });
          // return item !== { nameof: el.name, classOf: el.classvalue, sectionOf: el.section }
          // }));

          // this.setState({
          //   studentArr: this.state.studentArr.filter(el => {
          //     return el !== { nameof: el.name, classOf: el.classvalue, sectionOf: el.section }
          //   })
          // })
        }




      }
    })
    // }
    // console.log(this.state);
    // else {
    //   students.forEach(el => {
    //     if (el.key === e.target.value) {
    //       if (el.ticked === true) {

    //       }
    //       else {

    //       }
    //     }
    //   });
    // }
    // console.log(students);

  }
  handleDataOfStudent = () => {
    // this.setState({ flag: true })
    let students = this.props.student.filteredStudents
    let arr = []
    arr.push([this.state.classvalue, this.state.section])
    students.forEach(el => {
      // console.log(el);


      if (el.ticked === true) {
        console.log(el);

        // this.setState({ studentArr: a })
        arr.push({ nameof: el.name, classOf: el.classvalue, sectionOf: el.section })
        // console.log(arr);
      }

      // console.log(students);
      // Object.assign({}, ...this.state.studentArr, [{ nameOf: el.name, classOf: el.classvalue, sectionOf: el.section }])
      // const arr = []
      // students.forEach(el => {
      //   if (el.ticked) {
      //     arr.push([el.name, el.classvalue, el.section])
      //   }
      // })
      // console.log(arr);
      // e.preventDefault();


    }
    )

    console.log(arr, this.state.studentArr);
    setTimeout(() => {
      this.props.dispatch(loadMoveStudentData(arr))
    }, 100);

  }
  handleSubmit = () => {

    // this.setState({ flag: true })
    this.props.history.push("/studentmigration");
  }
  handleFlag = () => {
    console.log("object");
    // this.setState({ flag: false })
  }
  render() {
    let students = this.props.student.filteredStudents;
    // console.log(students);

    // students.map(el => {
    //   if (!el.ticked && !this.state.flag) {

    //   }
    // })
    return (
      <div className="dashboard" >
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
                      onChange={(e) => this.setState({ classvalue: e.target.value })}
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
                      onChange={(e) => this.setState({ section: e.target.value })}
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
                          console.log(el.ticked),
                          (
                            <div
                              style={{ display: "flex", marginBottom: "12px" }}
                            >
                              <input
                                onClick={() => { el.ticked = !el.ticked; this.setState({ flag: !this.flag }) }}
                                className="bac"
                                key={el.key.toString()}
                                // checked={el.ticked === false ? "false" : "checked"}
                                value={el.key}
                                id="ticked"
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
                                  id="toclassvalue"
                                  name="classvalue"
                                >
                                  <option value="" defaultValue>
                                    {" "}
                                    -select-
                                  </option>
                                  <option value="TH">TH</option>
                                  <option value="TL">TL</option>

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
                                  id="tosection"
                                  name="section"
                                >
                                  <option value="" defaultValue>
                                    {" "}
                                    -select-
                                  </option>
                                  <option value="TL">TL</option>
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
                {/* <input
                  type="submit"
                  value="Save"
                  className="button"
                  onClick={this.handleSubmit}
                  style={{ marginLeft: "27%" }}
                /> */}
                <Popup
                  modal
                  className="moveStudentPopup"

                  trigger={
                    <div onClick={() => this.setState({ flag: true })} style={{
                      marginLeft: "250px",
                      marginRight: "100px"
                    }}>
                      <button
                        type="button"
                        value="Save"
                        className="button"
                        // closeOnDocumentClick
                        style={{ marginLeft: "27%" }}
                      // open={false}
                      >

                        Save
                  </button>
                    </div>

                  }
                >
                  {close => (<div style={{ width: "inherit" }}>
                    <div className="headerOfPopupMoveSt">Submit</div>
                    <div className="textPopupmoveSt">Press OK if you want to migrate or cancle to go back</div>
                    <div style={{ display: "flex", width: "inherit", margin: "0 -15%" }}>
                      {/* <button className="button" onClick={() => this.handleDataOfStudent()} style={{ marginLeft: "27%" }}>OK</button> */}
                      {/* <div style={{ display: "flex", marginLeft: "80px" }} onClick={this.handleDataOfStudent}> */}
                      <Popup
                        modal
                        // onClick={() => this.handleDataOfStudent()}
                        className="moveStudentPopup"
                        trigger={
                          <div style={{ position: "absolute", display: "flex" }} onClick={this.handleDataOfStudent}>
                            <button
                              // type="button"
                              value="Submit"
                              className="button"
                              onClick={() => this.handleDataOfStudent()}
                              // onOpen={() => this.handleDataOfStudent()}
                              style={{ position: "absolute", width: "12vw", left: "5vw" }}
                            // onClick={(e) => this.handleDataOfStudent(e)}
                            >
                              OK
                          </button>
                          </div>



                        }
                      >
                        <div style={{ width: "inherit" }}>
                          <div className="headerOfPopupMoveSt">Submit</div>
                          <div className="textPopupmoveSt">Student migrated successfully</div>
                          <div style={{ display: "flex", width: "inherit", marginLeft: "1vw", marginTop: "16vh" }}>
                            <button className="button buttonCompletePopup" onClick={this.handleSubmit} >OK</button>
                            <button className="button buttonCompletePopup" onClick={() => console.log(this.state)}>Cancle</button>
                          </div>
                        </div>
                      </Popup>
                    </div>

                    <div onClick={this.handleFlag} style={{ position: "relative" }}>
                      <button className="button" style={{ width: "12vw", position: "absolute", left: "15vw" }} onClick={close} >Cancle</button>
                    </div>

                  </div>
                    // </div>
                  )}


                </Popup>


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
