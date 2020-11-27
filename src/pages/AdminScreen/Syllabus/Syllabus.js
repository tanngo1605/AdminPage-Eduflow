import React, { Component } from "react";
import { connect } from "react-redux"
import { BsPlus, BsFillFolderFill } from "react-icons/bs";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {getSectionAndClass,getSubject} from "../../../redux/Action/SchoolAction";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import Dropzone from "react-dropzone";
import subjects from '../../../userData/GlobalData/subjectData'
// import sections from '../../../userData/GlobalData/sectionData'
import classes from '../../../userData/GlobalData/classData'

const syllabus = {
  1: { class: "", subject: "", files: null },
  2: { class: "", subject: "", files: null },
  3: { class: "", subject: "", files: null },
  4: { class: "", subject: "", files: null },
  5: { class: "", subject: "", files: null },
};

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: { class: "", subject: "", files: null },
      2: { class: "", subject: "", files: null },
      3: { class: "", subject: "", files: null },
      4: { class: "", subject: "", files: null },
      5: { class: "", subject: "", files: null },
      subject:[],
      classsection:[]
    };
  }
  async componentDidMount(){
    this.props.dispatch(getCurrentUser())
    try {
      const userData=this.props.account.userData.userdata.data.data;
      const sectionclassData = await getSectionAndClass(userData.school.uuid,userData.token)
      const subjectData = await getSubject(userData.school.uuid)
      this.setState({subject:subjectData,classsection:sectionclassData})
    }
    catch(err){
      console.log(err)
    }
  }
  onDrop = (files, key) => {
    let update = Object.assign({}, this.state[key], { files: files });
    this.setState({ [key]: update });
  };

  handleChange = (event, key) => {
    let update = Object.assign({}, this.state[key], {
      [event.target.id]: event.target.value,
    });
    this.setState({ [key]: update });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("create-course-form").reset();
  };

  render() {
    console.log(Object.keys(syllabus));
    return (
      <div className="dashboard">
        <div style={{ display: "flex" }}>
          <Drawer />
          <div className="flexcolumn">
            <Header {...this.props} />
            <form
              className="form"
              onSubmit={this.handleSubmit}
              id="create-course-form"
            >
              <h1 className="titleform">Syllabus</h1>
              <div
                className="tablelistArea"
                style={{ width: "70vw", height: "68vh" }}
              >
                <Scrollbars>
                  {Object.keys(syllabus).map((key, value) => (
                    <div
                      className="flexcolumn"
                      style={{ marginBottom: "2.5vh" }}
                      key={key}
                    >
                      <div className="flexrow">
                        <label
                          htmlFor="class"
                          style={{ marginLeft: "1.5vw" }}
                          className="section"
                        >
                          Class
                        </label>
                        <label
                          htmlFor="subject"
                          style={{ marginLeft: "15vw" }}
                          className="section"
                        >
                          Subject
                        </label>
                      </div>

                      <div className="flexrow" style={{ marginTop: "2vh", marginBottom: "2vh" }}>
                        
                        <select className="shortbox" required id='class' style={{marginLeft: "1.5vw" }} onChange={(event) => this.handleChange(event,key)}>
                          <option disabled value="" defaultValue>{" "}- select -</option>
                          {this.state.classsection && this.state.classsection.map((classsection,index)=><option key={index} value={classsection.class}>{classsection.class}</option>)}
                          
                        </select>

                        
                        <select className="shortbox" required id='class' style={{marginLeft: "12vw" }} onChange={(event) => this.handleChange(event,key)}>
                          <option disabled value="" defaultValue>{" "}- select -</option>
                          {this.state.subject && this.state.subject.map((subject,index)=><option key={index} value={subject.name}>{subject.name}</option>)}
                          
                        </select>

                        <Dropzone onDrop={(files) => this.onDrop(files, key)}>
                          {({ getRootProps, getInputProps }) => (
                            <section
                              className="flexrow"
                              style={{ marginLeft: "12vw" }}
                            >
                              <div
                                {...getRootProps({ className: "attachment" })}
                              >
                                <input {...getInputProps()} />
                                <BsPlus
                                  color="white"
                                  size={"1.5vw"}
                                  className="attachmentplusicon"
                                />
                                <p>Upload document</p>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                        <BsFillFolderFill
                          style={{ marginTop: "1.5vh", marginLeft: "8vw" }}
                        />
                      </div>
                    </div>
                  ))}
                </Scrollbars>
              </div>
              <div className="flexrow" style={{ marginTop: "3vh" }}>
                <input
                  type="submit"
                  value="Save"
                  className="button"
                  style={{ marginLeft: "18%" }}
                />
                <input type="reset" value="Reset" className="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(Syllabus);
