import React, { useEffect } from "react";
import {connect} from "react-redux";
import { Formik,Form,Field} from "formik";
import Dropzone from "react-dropzone"
import { NavLink} from "react-router-dom"
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import {loadTeacherData,deleteTeacherData} from "../../redux/Stores/TeacherReducer";

import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {teacherSearchScema} from "../../userData/ValidationSchema/TeacherSchema"
import {teacherSearchInitialValue} from "../../userData/InitialData/Teacher"
import {
  marginLeft250vw,
  marginLeft130vw,
  marginTop55vh,
  addaProfileAttachment,
  marginTop110vh} from "../../styles/marginStyles"
import {image300percent,image200percent,image100percent} from "../../styles/imageStyles";
const TeacherSearch = (props)=>{

  const loaddata= () => {
    props.dispatch(loadTeacherData());
    }
  useEffect(loaddata,[]) 

  const handleSearch =(values)=>{
    console.log(values)
    try {

    }
    catch (err){
      
    }
  }
  let teachers = props.teacher.filteredTeachers;
    
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header/>
            <div className="form">
              
                <h1 className="titleform">Teacher Info</h1>
                <NavLink exact to={{pathname:"/teacher/profile"}} className="attachment" style={addaProfileAttachment}>
                    <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                    <p style={{color:"#FFFFFF"}}> Add a teacher </p>
                </NavLink>
                <Formik
                      initialValues={teacherSearchInitialValue}
                      validationSchema={teacherSearchScema}
                > 
                  {(propsForm)=>(
                    <Form className="flexcolumn" onChange={()=>handleSearch(propsForm.values)} style={{marginBottom:"5vh"}}>
                      <div className="flexrow">
                        <div className="flexcolumn" style={marginLeft130vw} >
                          <label htmlFor="name" className="section">Enter Teacher"s Name </label>
                          <Field type="text" name="name" className="shortbox" style={marginTop55vh} placeholder="Type here" />
                      </div>
                        <div className="flexcolumn" style={marginLeft250vw}>
                          <label htmlFor="classvalur" className="section" >Enter Class</label>
                          <Field type="text" name="classvalue" className="shortbox" style={marginTop55vh} placeholder="Type here" />
                        </div>
                      </div>
                      <div className="flexrow" style={marginTop110vh}>
                        <div className="flexcolumn" style={marginLeft130vw}>
                          <label htmlFor="section" className="section" >Enter Section</label>
                          <Field type="text" name="section" className="shortbox" style={marginTop55vh} placeholder="Type here" />
                        </div>
                        <div className="flexcolumn" style={marginLeft250vw}>
                          <label htmlFor="subject" className="section" >Enter Subject</label>
                          <Field type="text" name="subject" className="shortbox" style={marginTop55vh} placeholder="Type here" />
                        </div>
                      </div>
                      <div className="flexrow" style={{marginTop:"12vh",marginLeft:"21vw"}}>
                        <Dropzone name="attachment" onDrop={(files)=> propsForm.setFieldValue("attachment",files)}>
                          {({getRootProps, getInputProps}) => (
                            <section className="flexrow">
                              <div {...getRootProps({className: "attachment"})}>
                                <input {...getInputProps()} />
                                  <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                                  <p>Import file</p>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                        <div className="attachment" style={{marginLeft:"5vw"}}>
                          <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                          <p>Export file</p>
                        </div>
                      </div>
                    </Form>
                  )}
              </Formik>
                  
                
                <div className="eventlistArea" style={{width:"70vw",textAlign:"center"}}>
                  <div className="headereventList">
                    <p style={image100percent}>User ID</p>
                    <p style={image300percent}>Name of Teacher</p>
                    <p style={image100percent}>Class</p>
                    <p style={image100percent}>Section</p>
                    <p style={image200percent}>Delete</p>
                    <p style={image200percent}>Edit</p>
                  </div>

                  <div className="bodyeventList" >
                      {teachers&&teachers.map((teacher,index)=>

                        <div className="flexrow"  key={index} >
                          
                          <p style={image100percent}>User ID</p>
                          <p style={image300percent}>{teacher.name}</p>
                          <p style={image100percent}>{teacher.classteacher}</p>
                          <p style={image100percent}>{teacher.section}</p>
                          <div className="itemcenter" style={image200percent}>
                            <MdDeleteForever size="1.5vw" onClick={()=>props.dispatch(deleteTeacherData(teacher))}/>
                          </div>
                          <div className="itemcenter" style={{width:"20%",marginTop:"0.1vh"}}>
                            <NavLink exact to={{pathname:"/teacher/profile",teacherdata:teacher}}>
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

