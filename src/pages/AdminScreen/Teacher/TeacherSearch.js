import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import Dropzone from "react-dropzone"
import { NavLink } from "react-router-dom"
import Drawer from "../../../component/Drawer/Drawer"
import Header from "../../../component/Header/HeaderAdmin"
import { loadTeacherData, deleteTeacherData } from "../../../redux/Stores/TeacherReducer";
import { BsPencilSquare, BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { teacherSearchScema } from "../../../userData/ValidationSchema/TeacherSchema"
import { teacherSearchInitialValue } from "../../../userData/InitialData/Teacher"
import { addaProfileAttachment, marginLeft100vw, marginTop20vh } from "../../../styles/marginStyles"
import { image300percent, image200percent, image100percent, image130vw } from "../../../styles/imageStyles";
import classes from '../../../userData/GlobalData/classData'
import subjects from '../../../userData/GlobalData/subjectData'
import sections from '../../../userData/GlobalData/sectionData'
const TeacherSearch = (props) => {


  useEffect(() => {
    function getUserInfo() {
      props.dispatch(loadTeacherData())
    }
    getUserInfo();
  }, [])

  const handleSearch = (values) => {
    console.log(values)
    try {

    }
    catch (err) {

    }
  }
  let teachers = props.teacher.filteredTeachers;

  return (
    <div className="dashboard">
      <div className="flexrow">
        <Drawer />
        <div className="flexcolumn">
          <Header {...props} />
          <div className="form">

            <h1 className="titleform">Teacher Info</h1>
            <NavLink exact to={{ pathname: "/teacher/profile" }} className="attachment" style={addaProfileAttachment}>
              <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon" />
              <p style={{ color: "#FFFFFF" }}> Add a teacher </p>
            </NavLink>
            <Formik
              initialValues={teacherSearchInitialValue}
              validationSchema={teacherSearchScema}
            >
              {(propsForm) => (
                <Form className="flexcolumn" onChange={() => handleSearch(propsForm.values)} style={{ marginBottom: "5vh" }}>
                  <div className="flexrow">
                    <div className="flexcolumn" style={marginLeft100vw} >
                      <label htmlFor="name" className="section" style={image130vw}>Enter Teacher's Name </label>
                      <Field type="text" name="name" className="shortbox" placeholder="Type here" />
                    </div>
                    <div className="flexcolumn" style={marginLeft100vw}>
                      <label htmlFor="classvalur" className="section" style={image130vw}>Enter Class</label>
                      <Field as="select" name="classvalue" className="shortbox" placeholder="Your class">
                        <option value="" defaultValue style={{ visibility: "hidden", display: "none" }}>{" "}-select-</option>
                        {classes.map((eachclass, index) => <option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                      </Field>
                    </div>
                  </div>
                  <div className="flexrow" style={marginTop20vh}>
                    <div className="flexcolumn" style={marginLeft100vw}>
                      <label htmlFor="section" className="section" style={image130vw}>Enter Section</label>
                      <Field as="select" name="section" className="shortbox" placeholder="Your section">
                        <option value="" defaultValue style={{ visibility: "hidden", display: "none" }}>{" "}-select-</option>
                        {sections.map((section, index) => <option key={index} value={section.value}>{section.name}</option>)}
                      </Field>
                    </div>
                    <div className="flexcolumn" style={marginLeft100vw}>
                      <label htmlFor="subject" className="section" style={image130vw}>Enter Subject</label>
                      <Field as="select" name={`subject`} className="shortbox" >
                        <option value="" defaultValue style={{ visibility: "hidden", display: "none" }}>{" "}-select-</option>
                        {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)}
                      </Field>
                    </div>
                  </div>
                  <div className="flexrow" style={{ marginTop: "3vh", marginLeft: "21vw" }}>
                    <Dropzone name="attachment" onDrop={(files) => propsForm.setFieldValue("attachment", files)}>
                      {({ getRootProps, getInputProps }) => (
                        <section className="flexrow">
                          <div {...getRootProps({ className: "attachment" })}>
                            <input {...getInputProps()} />
                            <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon" />
                            <p>Import file</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                    <div className="attachment" style={{ marginLeft: "5vw" }}>
                      <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon" />
                      <p>Export file</p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>


            <div className="tablelistArea" style={{ width: "70vw" }}>
              <div className="headertableList">
                <p style={image100percent}>User ID</p>
                <p style={image300percent}>Name of Teacher</p>
                <p style={image100percent}>Class</p>
                <p style={image100percent}>Section</p>
                <p style={image200percent}>Delete</p>
                <p style={image200percent}>Edit</p>
              </div>

              <div className="bodytableList" >
                {teachers && teachers.map((teacher, index) =>

                  <div className="flexrow" key={index} >

                    <p style={image100percent}>User ID</p>
                    <p style={image300percent}>{teacher.name}</p>
                    <p style={image100percent}>{teacher.classteacher}</p>
                    <p style={image100percent}>{teacher.section}</p>
                    <div className="itemcenter" style={image200percent}>
                      <MdDeleteForever size="1.5vw" onClick={() => props.dispatch(deleteTeacherData(teacher))} />
                    </div>
                    <div className="itemcenter" style={image200percent}>
                      <NavLink exact to={{ pathname: "/teacher/profile", teacherdata: teacher }}>
                        <BsPencilSquare size="1.3vw" color="black" />
                      </NavLink>
                    </div>
                  </div>
                )}

              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  teacher: state.teacher
})

export default connect(mapStateToProps)(TeacherSearch);

