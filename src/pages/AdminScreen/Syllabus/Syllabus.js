import React, { Component } from "react";
import { BsPlus, BsFillFolderFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import Dropzone from "react-dropzone";

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
    };
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
            <Header {...this.props}/>
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
                          style={{ marginLeft: "25vw" }}
                          className="section"
                        >
                          Subject
                        </label>
                      </div>

                      <div className="flexrow" style={{ marginTop: "5.5vh" }}>
                        <input
                          type="text"
                          id="class"
                          className="shortbox"
                          style={{ marginLeft: "1.5vw" }}
                          placeholder="- Select"
                          onChange={(event) => this.handleChange(event, key)}
                        />

                        <input
                          type="text"
                          id="subject"
                          className="shortbox"
                          style={{ marginLeft: "25vw" }}
                          placeholder="- Select"
                          onChange={(event) => this.handleChange(event, key)}
                        />

                        <Dropzone onDrop={(files) => this.onDrop(files, key)}>
                          {({ getRootProps, getInputProps }) => (
                            <section
                              className="flexrow"
                              style={{ marginLeft: "47vw" }}
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
export default Syllabus;
