import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import Dropzone from "react-dropzone"
import { NavLink } from "react-router-dom"
import Drawer from "../../../component/Drawer/Drawer"
import Header from "../../../component/Header/HeaderAdmin"
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";
import { getSectionAndClass, getSubject } from "../../../redux/Action/SchoolAction";
import { loadTeacherData, deleteTeacherData } from "../../../redux/Stores/TeacherReducer";
import { BsPencilSquare, BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { teacherSearchScema } from "../../../userData/ValidationSchema/TeacherSchema"
import { teacherSearchInitialValue } from "../../../userData/InitialData/Teacher"
import { addaProfileAttachment, marginLeft100vw, marginTop20vh } from "../../../styles/marginStyles"
import { image300percent, image200percent, image100percent, image130vw } from "../../../styles/imageStyles";
import { IoIosArrowDown } from "react-icons/io";


const TeacherSearch = (props) => {
  let [classsection, setClassSection] = useState([]);
  let [subjects, setSubject] = useState([])
  useEffect(() => {
    async function getUserInfo() {
      props.dispatch(loadTeacherData())
      props.dispatch(getCurrentUser())
      try {
        const userData = props.account.userData.userdata.data.data;
        const subjectData = await getSubject(userData.school.uuid);
        const sectionclassData = await getSectionAndClass(userData.school.uuid, userData.token);
        setSubject(subjectData)
        setClassSection(sectionclassData)
      }
      catch (err) {
        console.log(err)
      }
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
            <NavLink exact to={{ pathname: "/teacher" }} className="attachment" style={addaProfileAttachment}>
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
                      <IoIosArrowDown size={'1.5vw'} color="black" style={{ position: "absolute", top: "34.5vh", left: "74vw" }} />

                      <label htmlFor="classvalue" className="section" style={image130vw}>Enter Class</label>

                      <Field as="select" name="classvalue" className="shortbox" placeholder="Select class">
                        <option value="" defaultValue>{" "}-select-</option>
                        {classsection && classsection.map((e, index) => <option key={index} value={e.class}>{e.class}</option>)}
                      </Field>
                    </div>
                  </div>
                  <div className="flexrow" style={marginTop20vh}>
                    <div className="flexcolumn" style={marginLeft100vw}>
                      <label htmlFor="section" className="section" style={image130vw}>Enter Section</label>
                      <IoIosArrowDown size={'1.5vw'} color="black" style={{ position: "absolute", top: "46.5vh", left: "44vw" }} />

                      <Field as="select" name="section" className="shortbox" placeholder="Select Section">
                        <option value="" defaultValue>{" "}-select-</option>
                        {classsection.map((e, index) => <option key={index} value={e.section}>{e.section}</option>)}
                      </Field>
                    </div>
                    <div className="flexcolumn" style={marginLeft100vw}>
                      <label htmlFor="subject" className="section" style={image130vw}>Enter Subject</label>
                      <Field type="text" name="subject" className="shortbox" placeholder="Type here" />

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
                      <NavLink exact to={{ pathname: "/teacher", teacherdata: teacher }}>
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

