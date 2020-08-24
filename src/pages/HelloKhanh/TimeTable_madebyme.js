import React, { Component } from "react";
import { connect } from "react-redux";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "./TimeTable.styles.css";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // "1": { class: "", section: "", date: "", subject: "", teacher: "" },
      // "2": { class: "", section: "", date: "", subject: "", teacher: "" },
      // "3": { class: "", section: "", date: "", subject: "", teacher: "" },
      class: "",
      section: "",
      date: "",
      period1: { subject: "", teacher: "" },
      period2: { subject: "", teacher: "" },
      period3: { subject: "", teacher: "" },
    };
  }
  // handleChange = (event) => {

  //   this.setState({ [event.target.id]: event.target.value });
  //   console.log(this.state);
  // };

  // handleChange = (event, key) => {
  //   let update = Object.assign({}, this.state[key], {
  //     [event.target.id]: event.target.value,
  //   });
  //   this.setState({
  //     [key]: update,
  //   });
  //   console.log(this.state);
  // };

  displayPeriod() {
    var period = [];
    var numberOfPeriod = 4;
    for (let i = 1; i < numberOfPeriod; i++) {
      // var peri = "period" + { i };
      // console.log(peri);

      period.push(
        <React.Fragment>
          <div className="line-Area">
            <div className="col-2">Period</div>
            <div className="col-5">Subject</div>
            <div className="col-5">Teacher assign</div>
          </div>

          <div className="line-Area">
            <div className="col-2">{i}</div>
            <div className="col-5">
              <select
                className="selectBar"
                required
                id="subject"
                onChange={(event) => this.handleChange(event, `period${i}`)}
              >
                <option value="" disabled selected>
                  -select-
                </option>
                <option value="maths">maths</option>
                <option value="english">English</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="pe">PE</option>
              </select>
            </div>
            <div className="col-5">
              <select
                className="selectBar"
                required
                id="teacher"
                onChange={(event) => this.handleChange(event, `period${i}`)}
              >
                <option value="" disabled selected placeholder="-select-">
                  {" "}
                  -select-
                </option>
                <option value="Mr. Ryan">Mr. Ryan</option>
                <option value="Mrs. Jane">Mrs. Jane</option>
                <option value="Mr. Jane">Mr. Jane</option>
                <option value="Mr. Jane">Mr. Jane</option>
                <option value="Mr. Jane">Mr. Jane</option>
              </select>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return <div>{period}</div>;
  }

  handleChange = (event, key) => {
    if (typeof [event.target.id]) {
      console.log(typeof [event.target.id]);
      console.log(typeof [event.target.id].includes(key));
      let update = Object.assign({}, this.state[key], {
        [event.target.id]: event.target.value,
      });

      if (key) {
        this.setState({
          [key]: update,
        });
      } else {
        this.setState({
          [event.target.id]: event.target.value,
        });
      }
      // this.setState({
      //   [key]: update,
      //   [event.target.id]: event.target.value,
      // });
      // } else {
      //   let update = Object.assign({}, this.state, {
      //     [event.target.id]: event.target.value,
      //   });
      //   console.log([event.target.id], event.target.value);
      //   this.setState({ [event.target.id]: update });
      // }
      console.log(this.state);
    }
  };

  handleDayChange(day) {
    this.setState({ date: day.toLocaleDateString() });
  }
  render() {
    return (
      <div className="dashboard">
        <div style={{ display: "flex" }}>
          <Drawer />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <div className="bodyContainer">
              <div
                className="container"
                style={{ background: "#f4f9ff", marginTop: "2%" }}
              >
                <div
                  style={{
                    padding: "0px 70px",
                    marginBottom: "40px",
                    fontSize: "20px",
                  }}
                >
                  Timetable
                </div>
                <div className="inputField1 ">
                  <div className="col-6">
                    <div>Enter Class</div>

                    <select
                      className="selectBar"
                      style={{ width: "250px" }}
                      required
                      onChange={this.handleChange}
                      id="class"
                    >
                      <option value="" disabled selected placeholder="-select-">
                        {" "}
                        Maths
                      </option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <div>Enter Section</div>
                    <select
                      className="selectBar"
                      style={{ width: "250px" }}
                      required
                      onChange={this.handleChange}
                      id="section"
                    >
                      <option value="" disabled selected placeholder="-select-">
                        {" "}
                        123
                      </option>
                      <option value="maths">maths</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                      <option value="pe">PE</option>
                    </select>
                  </div>
                </div>
                <div className="inputField2 ">
                  <div className="col-6">
                    <div>Choose Day</div>

                    <DayPickerInput
                      className="selectBar"
                      style={{ width: "250px", marginLeft: "52px" }}
                      onDayChange={(day) => this.handleDayChange(day)}
                      id="day"
                      placeholder="-select-"
                    />
                  </div>
                </div>
              </div>
              <div className="formInput">
                {this.displayPeriod()}
                {/* <div className="line-Area">
                  <div className="col-2">Period</div>
                  <div className="col-5">Subject</div>
                  <div className="col-5">Teacher assign</div>
                </div>

                <div className="line-Area">
                  <div className="col-2">1</div>
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      id="subject"
                      onChange={(event) => this.handleChange(event, "period1")}
                    >
                      <option value="" disabled selected>
                        -select-
                      </option>
                      <option value="maths">maths</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                      <option value="pe">PE</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      id="teacher"
                      onChange={(event) => this.handleChange(event, "period1")}
                    >
                      <option value="" disabled selected placeholder="-select-">
                        {" "}
                        -select-
                      </option>
                      <option value="Mr. Ryan">Mr. Ryan</option>
                      <option value="Mrs. Jane">Mrs. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                    </select>
                  </div>
                </div>

                <div className="line-Area">
                  <div className="col-2"></div>
                  <div className="col-5">Subject</div>
                  <div className="col-5">Teacher assign</div>
                </div>

                <div className="line-Area">
                  <div className="col-2">2</div>
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      id="subject"
                      onChange={(event) => this.handleChange(event, "period2")}
                    >
                      <option value="" disabled selected placeholder="-select-">
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
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      onChange={(event) => this.handleChange(event, "period2")}
                      id="teacher"
                    >
                      <option value="" disabled selected placeholder="-select-">
                        {" "}
                        -select-
                      </option>
                      <option value="Mr. Ryan">Mr. Ryan</option>
                      <option value="Mrs. Jane">Mrs. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                    </select>
                  </div>
                </div>

                <div className="line-Area">
                  <div className="col-2"></div>
                  <div className="col-5">Subject</div>
                  <div className="col-5">Teacher assign</div>
                </div>

                <div className="line-Area">
                  <div className="col-2">3</div>
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      onChange={(event) => this.handleChange(event, "period3")}
                      id="subject"
                    >
                      <option value="" disabled selected placeholder="-select-">
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
                  <div className="col-5">
                    <select
                      className="selectBar"
                      required
                      onChange={(event) => this.handleChange(event, "period3")}
                      id="teacher"
                    >
                      <option value="" disabled selected placeholder="-select-">
                        {" "}
                        -select-
                      </option>
                      <option value="Mr. Ryan">Mr. Ryan</option>
                      <option value="Mrs. Jane">Mrs. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                      <option value="Mr. Jane">Mr. Jane</option>
                    </select> */}
                {/* </div>
                </div> */}
              </div>
              <div className="buttonField">
                {/* <button>Save</button>
                <button>Reset</button> */}
                <input type="submit" value="Save" className="button" />
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
  teacher: state.teacher,
});
export default connect(mapStateToProps)(TimeTable);
