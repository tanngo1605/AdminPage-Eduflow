import React, { Component, useState } from "react";

import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import "./SyllabusScreen.css";
import { Document, Page } from "react-pdf";
import PDFViewer from "pdf-viewer-reactjs";
import samplePDF from "../../../assets/BioComputation.pdf";
import Popup from "reactjs-popup";
import Dropzone from "react-dropzone";
import { BsPlus } from "react-icons/bs";
const listSyl = {
  1: { subject: "Math", syllabus: "NA", edit: "", filepath: "" },
  2: { subject: "Science", syllabus: "NA", edit: "", filepath: "" },
  3: { subject: "English", syllabus: "NA", edit: "", filepath: "" },
  4: { subject: "Hindi", syllabus: "NA", edit: "", filepath: "" },
  5: { subject: "asdsadasd", syllabus: "NA", edit: "", filepath: "" },
};

const ExamplePDFViewer = () => {
  return (
    <PDFViewer
      document={{
        url: "https://arxiv.org/pdf/quant-ph/t.pdf",
      }}
    />
  );
};

class SyllabusAnother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSyllabus: { subject: "", syllabus: "", edit: "" },
      // showPdf: "",
      // numPages: null,
      numPages: null,
      pageNumber: null,
      scale: 1.0,
      files:'',
    };
  }
  onDocumentLoad({ numPages }) {
    console.log(numPages);
    this.setState({ pageNumber: numPages });
  }
  onPageNumber() {
    let a = [];
    for (let i = 1; i <= this.state.pageNumber; i++) {
      a.push(i);
    }
    console.log(a);
    return a;
  }
  onChange(e, index) {
    let files = e.target.files;
    let n = e.target.files[0];
    let m = URL.createObjectURL(n);
    let key = e.target.value;
    let b = Object.entries(listSyl);
    var inputID = document.getElementById(index).id;
    // var c = URL.createObjectURL(files);
    // console.log(c);
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[i].length; j++) {
        if (b[i][0] === inputID && b[i][1].edit === "Add") {
          b[i][1].syllabus = files[0].name;
          b[i][1].filepath = m;
        }
      }

      // console.warn("data file", files[0].name, syllabus);
    }

    console.log(key, m);
    this.setState({ listSyl: b });
  }

  onReset(e, index) {
    let files = e.target.files;
    let key = e.target.value;
    let b = Object.entries(listSyl);
    var inputID = document.getElementById(index).id;

    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[i].length; j++) {
        if (b[i][0] === inputID && b[i][1].edit === "Remove") {
          b[i][1].syllabus = "NA";
        }
      }
      e.preventDefault();
      this.setState({ listSyl: b });
    }
  }
  openPdfFile(e, index) {
    // return (
    //   <Document onLoadSuccess={this.onDocumentLoadSuccess()}>
    //     {Array.from(new Array(numPages), (el, index) => (
    //       <Page key={`page_${index + 1}`} pageNumber={index + 1} />
    //     ))}
    //   </Document>
    // );
  }
  render() {
    let a = Object.entries(listSyl);
    // console.log(a);
    // let b = this.onPageNumber.bind(this);
    // console.log(b);
    console.log(
      Array.from(new Array(this.state.pageNumber)).map((item, index) => index)
    );
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
              <div className="classAndSubjectField">
                <div className="topContainer">
                  <div>Class</div>
                  <input
                    type="text"
                    id="class"
                    className="shortbox"
                    style={{ marginLeft: "1.5vw" }}
                    placeholder="- Select"
                  />
                </div>
                <div className="topContainer">
                  <div>Subject</div>
                  <input
                    type="text"
                    id="class"
                    className="shortbox"
                    style={{ marginLeft: "1.5vw" }}
                    placeholder="- Select"
                  />
                </div>
              </div>
              <div
                className="tablelistArea"
                style={{
                  width: "70vw",
                  position: "absolute",
                  top: "44vh",
                  left: "22vw",
                }}
              >
                <div className="containTitle">
                  <div className="titleSyllabusSc">Subject</div>
                  <div className="titleSyllabusSc">Syllabus</div>
                  <div className="titleSyllabusSc">Edit</div>
                  <Dropzone name="attachment" onDrop={(files) => {console.log(files[0]);this.setState({files:URL.createObjectURL(files[0])})}}>
                      {({ getRootProps, getInputProps }) => (
                        <section className="flexrow">
                          <div {...getRootProps({ className: "attachment" })}>
                            <input {...getInputProps()} />
                            <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon" />
                            <p>Choose File</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  {/* <PDFViewer đéo nên xài
                    document={{
                      url: ,
                    }}
                  /> */}
                  {/* <iframe
                    src={samplePDF}
                    type="application/pdf"
                    style={{ scale: "2.0" }}
                  ></iframe>
                  <embed src={samplePDF} type="application/pdf"></embed> */}
                  <Popup
                    className="abc"
                    modal
                    trigger={
                      <button
                        type="button"
                        value="submit"
                        className="buttonPass"
                        onClick={this.handleChange}
                      >
                        Reset
                      </button>
                    }
                  >
                    <Scrollbars>
                      <Document
                        file={this.state.files}
                        onLoadSuccess={this.onDocumentLoad.bind(this)}
                      >
                        {Array.from(new Array(this.state.pageNumber)).map(
                          (item, index) => (
                            <Page
                              key={`page_${index + 1}`}
                              pageNumber={index + 1}
                              scale={this.state.scale + 0.5}
                            />
                          )
                        )}
                      </Document>
                      
                    </Scrollbars>
                  </Popup>
                </div>

                <Scrollbars>
                  {a.map((item, index) => (
                    <div key={index + 1} className="containInfo">
                      <div className="subjectField">{item[1].subject}</div>
                      <div
                        className="syllabusField"
                        onClick={(e) => this.openPdfFile(e, index + 1)}
                        style={{
                          color:
                            item[1].syllabus === "NA" ? "#262F56" : "#7D94E6",
                          cursor:
                            item[1].syllabus === "NA" ? "default" : "pointer",
                        }}
                      >
                        {item[1].syllabus}
                      </div>

                      <label
                        htmlFor={index + 1}
                        className="buttonSyllabusField"
                      >
                        {item[1].syllabus === "NA" ? (
                          <React.Fragment>
                            <input
                              className="123"
                              id={index + 1}
                              type="file"
                              // value={(e) => this.onChange(e)}
                              // key={index + 1}
                              onChange={(e) => this.onChange(e, index + 1)}
                            // onSubmit={(e) => this.changeSyllabus(e)}
                            />
                            {(item[1].edit = "Add")}
                          </React.Fragment>
                        ) : (
                            <React.Fragment>
                              <button
                                id={index + 1}
                                type="reset"
                                onClick={(e) => this.onReset(e, index + 1)}
                                style={{ display: "none" }}
                              />
                              {(item[1].edit = "Remove")}
                            </React.Fragment>
                          )}
                      </label>
                    </div>
                  ))}
                </Scrollbars>
              </div>
              <div
                className="flexrow"
                style={{
                  marginTop: "3vh",
                  position: "absolute",
                  top: "93vh",
                  right: "5vw",
                }}
              >
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
export default SyllabusAnother;
