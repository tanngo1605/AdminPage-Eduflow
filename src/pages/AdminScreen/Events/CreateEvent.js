import React, { useState,useEffect } from "react";
import { Formik,Form,Field} from "formik";
import { connect } from "react-redux"
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {getSectionAndClass} from "../../../redux/Action/SchoolAction";
import {addSchoolEvent} from "../../../redux/Action/EventAction";
import Drawer from "../../../component/Drawer/Drawer"
import Header from "../../../component/Header/HeaderAdmin"
import Dropzone from "react-dropzone";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import {createEventSchema} from "../../../userData/ValidationSchema/EventSchema"
import {initialCreateEvent} from '../../../userData/InitialData/Event'
import {marginLeft260vw,marginLeft60vw,marginBottom30vh,marginBottom20vh} from "../../../styles/marginStyles"

const CreateEvent = (props) => {
  
  //let [modalState,setModalState] = useState(false)
  let [classsection,setClassSection] = useState([]);
  useEffect(()=>{
    async function getClassSection(){
      //Modal.setAppElement("body");
      props.dispatch(getCurrentUser())
      try {
        const userData=props.account.userData.userdata.data.data;
        const sectionclassData = await getSectionAndClass(userData.school.uuid,userData.token)
        
        setClassSection( sectionclassData )
      }
      catch(err){
        console.log(err)
      }
  }
  getClassSection();
  },[])



  const handleSubmit =  (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      addSchoolEvent(userData.school.uuid,userData.token,values)
      //setModalState(true);
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
            <Header {...props}/>
            <div className="form">
              <h1 className="titleform" style={marginBottom30vh}>Create an event for your class</h1>
              <Formik
                initialValues={initialCreateEvent}
                validationSchema={createEventSchema}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm()
                }}
              >
                {(propsForm)=>(
                  <Form>
                    <div className='flexrow' style={marginBottom20vh}>
                      {/* Class*/}
                      <label htmlFor="classvalue" className="section">Class</label>
                      
                      <Field as="select" name="classvalue" className="shortbox" placeholder="Select Class">
                        <option value="" defaultValue>{" "}-select-</option>
                        {classsection&&classsection.map((e,index)=><option key={index} value={e.class}>{e.class}</option>)}
                      </Field>
                      {/* Section*/}
                      <label htmlFor="section" className="section" style={marginLeft60vw}>Section</label>
                      <Field as="select" name="section" className="shortbox" placeholder="Select Section">
                        <option value="" defaultValue>{" "}-select-</option>
                        {classsection.map((e,index)=><option key={index} value={e.section}>{e.section}</option>)}
                      </Field>
                    </div>
                    <div className="flexrow" style={marginBottom20vh}>
                      <label className="section">Date from: </label>
                      <DayPickerInput  className="shortbox" name="datefrom" onDayChange={(day)=> propsForm.setFieldValue('datefrom',day)} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      <label className="section" style={marginLeft260vw}>Date to</label>
                      <DayPickerInput  className="shortbox" name="dateto" onDayChange={(day)=>propsForm.setFieldValue('dateto',day)} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      
                    </div>
                    <div className="flexrow" style={marginBottom20vh}>
                      <label className="section">Time from</label>
                      <Field type="time" name="startTime" className="shortbox" />
                      <label className="section" style={marginLeft60vw}>Time To</label>
                      <Field type="time" name="endTime" className="shortbox"/>
         
                    </div>
                    <div className="flexrow" style={marginBottom20vh}>
                      <label className="section">Event title </label>
                      <Field type="text" name="title" className="shortbox" placeholder="Type here"/>
                    </div>
                    <div className="flexrow" style={marginBottom20vh}>
                      <label className="section">Description </label>
                      <Field component='textarea' name='description' className="shortbox"  style={{height:"10vh",width:"58vw"}} placeholder="Type here" />
                    </div>
                    <div className="flexrow" style={marginBottom20vh}>
                      <p className="section">Attachment </p>
                
                      <Dropzone name="attachment" onDrop={(files)=> propsForm.setFieldValue("attachment",files)}>
                        {({getRootProps, getInputProps}) => (
                          <section className="flexrow">
                            <div {...getRootProps({ className:"attachment"})}>
                              <input {...getInputProps()} />
                                <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                                <p>Choose File</p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                
                    </div>

                    <div className="flexrow" style={{marginLeft:"15vw",marginTop:"10vh"}}>
                      <button type="submit" className="button">Create</button>
                      <button type="reset" className="button">Reset</button>
                      <button type='button' className="button" onClick={()=>props.history.push("/")} style={{color:"#FFFFFF"}}>Cancel</button>
                    </div>
                  </Form>
                )}
              </Formik>
                
                
              
            </div>
            {/*<Modal isOpen={modalState} onRequestClose={()=>setModalState(false)} className="eventmodal"> 
                <div className="headermodal" style={{textAlign:"center",color:"#262F56",fontWeight:"bold"}}>Events</div>
                <p style={{marginTop:"5%",textAlign:"center"}}>Event saved successfully</p>
                <button className="button" onClick={()=>props.history.push("/event")} style={{marginTop:"2%",marginLeft:"29%"}}> Ok</button>
     
                        </Modal>*/}
          </div>
        
      </div>  
    </div>
    );
  }
const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(CreateEvent);

