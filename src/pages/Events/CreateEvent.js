import React, { useState,useEffect } from "react";
import Modal from "react-modal";
import { Formik,Form,Field} from "formik";
import { connect } from "react-redux"
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import {addSchoolEvent} from "../../redux/Action/EventAction";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import Dropzone from "react-dropzone";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import classes from '../../userData/GlobalData/classData'
import sections from '../../userData/GlobalData/sectionData'
import EventSchema from "../../userData/ValidationSchema/EventSchema"
import eventInitialValues from '../../userData/InitialData/Event'
import {
  marginBottom65vhandTop120vh,
  marginLeft450vw,
  marginLeft380vw,
  marginLeft320vw,
  marginLeft130vw,
  marginBottom65vh,
  marginBottom30vh,
  } from "../../styles/marginStyles"



const CreateEvent = (props) => {
  
  let [modalState,setModalState] = useState(false)

  useEffect((props)=>{
    Modal.setAppElement("body");
    props.dispatch(getCurrentUser())
    
  }) 


  const handleSubmit =  (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      addSchoolEvent(userData.school.uuid,userData.token,values)
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
            <div className="form">
              <h1 className="titleform" style={marginBottom30vh}>Create an event for your class</h1>
              <Formik
                initialValues={eventInitialValues}
                validationSchema={EventSchema}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm()
                }}
              >
                {(propsForm)=>(
                  <Form>
                    <div className='flexrow' style={marginBottom65vh}>
                      {/* Class*/}
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
                      <DayPickerInput  className="shortbox" name="datefrom" onDayChange={(day)=> propsForm.setFieldValue('datefrom',day)} style={marginLeft130vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      <label htmlFor="dateto" className="section" style={marginLeft380vw}>Date to:</label>
                      <DayPickerInput  className="shortbox" name="dateto" onDayChange={(day)=>propsForm.setFieldValue('dateto',day)} style={marginLeft320vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      
                    </div>
                    <div className="flexrow" style={marginBottom65vh}>
                      <label htmlFor="startTime" className="section">Time from: </label>
                      <Field type="time" name="startTime" className="shortbox"  style={marginLeft130vw}/>
                      <label htmlFor="endTime" className="section" style={marginLeft380vw}>Time To: </label>
                      <Field type="time" name="endTime" className="shortbox"  style={marginLeft450vw}/>
         
                    </div>
                    <div className="flexrow" style={marginBottom65vh}>
                      <label htmlFor="title" className="section">Event title </label>
                      <Field type="text" name="title" className="shortbox"  style={marginLeft130vw} placeholder="Type here"/>
                    </div>
                    <div className="flexrow">
                      <label htmlFor="description" className="section">Description </label>
                      <Field component='textarea' name='description' className="shortbox"  style={Object.assign({},{height:"10vh",width:"58vw"},marginLeft130vw)} placeholder="Type here" />
                    </div>
                    <div className="flexrow" style={marginBottom65vhandTop120vh}>
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

                    <div className="flexrow" style={{marginLeft:"15vw",marginTop:"2vh"}}>
                      <button type="submit" className="button">Create</button>
                      <button type="reset" className="button">Reset</button>
                      <button type='button' className="button" onClick={()=>props.history.push("/")} style={{color:"#FFFFFF"}}>Cancel</button>
                    </div>
                  </Form>
                )}
              </Formik>
                
                
              
            </div>
            <Modal isOpen={modalState} onRequestClose={()=>setModalState(false)} className="Modal"> 
                <div className="headermodal" style={{textAlign:"center",color:"#262F56",fontWeight:"bold"}}>Events</div>
                <p style={{marginTop:"15%",textAlign:"center"}}>Event saved successfully</p>
                <button className="button" onClick={()=>props.history.push("/event")} style={{marginTop:"5%",marginLeft:"29%"}}> Ok</button>
     
            </Modal>
          </div>
        
      </div>  
    </div>
    );
  }
const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(CreateEvent);

