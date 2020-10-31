import React, { useState,useEffect } from "react";
import { Formik,Form,Field} from "formik";
import Dropzone from "react-dropzone";
import Modal from "react-modal";
import { connect } from "react-redux"
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import {addSchoolExam} from "../../redux/Action/ExamAction";
import { NavLink} from "react-router-dom"
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/HeaderAdmin"
import classes from "../../userData/GlobalData/classData"
import sections from "../../userData/GlobalData/sectionData"
import ExamSchema from "../../userData/ValidationSchema/ExamSchema"
import examInitialValues from "../../userData/InitialData/Exam"
import {marginBottom65vh,marginLeft450vw,marginLeft380vw,marginLeft130vw} from "../../styles/marginStyles"

const exams=[
  {exam:"Math",class:"VI",section:"TR",datefrom:"20/20/20"}
]
const Exam = (props) => {
  let [modalState,setModalState] = useState(false)
  useEffect(()=>{
    Modal.setAppElement("body");
    props.dispatch(getCurrentUser())

  })
  const handleSubmit = (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      addSchoolExam(userData.school.uuid,userData.token,values)
      setModalState(true);
    }
    catch(error) {
      console.log(error)
    }
  }


    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header/>
            <div className="form" >
              
                <h1 className="titleform">Schedule an exam</h1>
                <Formik
                initialValues={examInitialValues}
                validationSchema={ExamSchema}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm()
                }}
                >
                  {(propsForm)=>(
                    <Form>
                      <div style={marginBottom65vh}>
                        <label htmlFor="title" className="section">Exam name</label>
                        <Field type="text" name="title" className="shortbox"  style={marginLeft130vw} placeholder="Type here"/>
                      </div>
                      <div className="flexrow" style={marginBottom65vh}>
                        <label htmlFor="classvalue" className="section">Class</label>
                      
                        <Field as="select" name="classvalue" className="shortbox"  style={marginLeft130vw} placeholder="Your class">
                          <option value="" defaultValue>{" "}-select-</option>
                          {classes.map((eachclass,index)=><option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                        </Field>
                        {/* Section*/}
                        <label htmlFor="section" className="section" style={marginLeft380vw}>Section</label>
                        <Field as="select" name="section" className="shortbox"  style={marginLeft450vw} placeholder="Your class">
                          <option value="" defaultValue>{" "}-select-</option>
                          {sections.map((section,index)=><option key={index} value={section.value}>{section.name}</option>)}
                        </Field>
                      </div>
                      <div className="flexrow" style={marginBottom65vh}>
                        <label className="section">Date from: </label>
                        <DayPickerInput  className="shortbox" name="datefrom" onDayChange={(day)=> propsForm.setFieldValue("datefrom",day)} style={marginLeft130vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                        <label htmlFor="dateto" className="section" style={marginLeft380vw}>Date to:</label>
                        <DayPickerInput  className="shortbox" name="dateto" onDayChange={(day)=>propsForm.setFieldValue("dateto",day)} style={{marginLeft:"32vw"}} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      </div>
                      <div className="flexrow" style={marginBottom65vh}>
                        <label htmlFor="startTime" className="section">Time from: </label>
                        <Field type="time" name="startTime" className="shortbox"  style={marginLeft130vw}/>
                        <label htmlFor="endTime" className="section" style={marginLeft380vw}>Time To: </label>
                        <Field type="time" name="endTime" className="shortbox"  style={marginLeft450vw}/>
         
                      </div>
                  
                  
                      <div className="flexrow" style={marginBottom65vh}>
                        <p className="section">Attachment </p>
                    
                        <Dropzone name="attachment" onDrop={(files)=> propsForm.setFieldValue("attachment",files)}>
                          {({getRootProps, getInputProps}) => (
                            <section className="flexrow" style={marginLeft130vw}>
                              <div {...getRootProps({ className:"attachment"})}>
                                <input {...getInputProps()} />
                                  <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                                  <p>Choose File</p>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                    
                      </div>
                      <div className="eventlistArea" style={{width:"70vw",height:"33vh",textAlign:"center"}}>
                        <div className="headereventList">
                          <p style={{width:"15%"}}>Exam</p>
                          <p  style={{width:"20%"}}>Class</p>
                          <p style={{width:"20%"}}>Section</p>
                          <p style={{width:"20%"}}>Date</p>
                          <p style={{width:"10%"}}>Delete</p>
                          <p style={{width:"10%"}}>Edit</p>
                        </div>
  
                        <div className="bodyeventList">
                          {exams&&exams.map((exam,index)=>
  
                            <div  className="flexrow"  key={index} >
                            
                              <p style={{width:"15%"}}>{exam.exam}</p>
                              <p style={{width:"20%"}}>{exam.class}</p>
                              <p style={{width:"20%"}}>{exam.section}</p>
                              <p style={{width:"20%"}}>{exam.datefrom}</p>
                              <div className="itemcenter" style={{width:"10%"}}>
                                <MdDeleteForever size="1.5vw" onClick={()=>console.log("delete")}/>
                              </div>
                              <div className="itemcenter" style={{width:"10%",marginTop:"0.1vh"}}>
                                <NavLink exact to={{pathname:"/teacher/profile",examinfo:exam}}>
                                  <BsPencilSquare size="1.3vw" color="black" />
                                </NavLink>
                              </div>
                            </div>
                          )}
                      
                        </div>
                      </div>
                      <div className="flexrow" style={{marginLeft:"13.5vw",marginTop:"3vh"}}>
                        <button type="submit" className="button">Save</button>
                        <button type="reset" className="button">Reset</button>
                      </div>
                    </Form>
                  )}
                </Formik>
            </div>  
            
            <Modal isOpen={modalState} className="exammodal" onRequestClose={()=>setModalState(false)} > 
              <div className="headermodal">Send a message to teachers for exam duty</div>
              <div className="flexrow" style={{marginTop:"3vh"}}>
                <button className="gallerybutton" onClick={()=>console.log("send")} style={{marginLeft:"8vw",background: "#262F56"}}>Send</button>
                <button className="gallerybutton" onClick={()=>setModalState(false)} style={{marginLeft:"20vw",background: "#262F56"}}>Not now</button>
              </div>    
            </Modal>
          </div>
      </div>  
    </div>
    );
  }

  const mapStateToProps = (state) => ({
    account:state.account,
  })
  
  export default connect(mapStateToProps)(Exam);

