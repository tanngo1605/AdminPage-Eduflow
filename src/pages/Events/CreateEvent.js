import React, { Component } from "react";
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
import EventSchema from "../../userData/ValidationSchema/EventSchema"
import classes from '../../userData/GlobalData/classData'
import sections from '../../userData/GlobalData/sectionData'
import eventInitialValues from '../../userData/InitialData/Event'
import {marginLeft450vw,marginLeft380vw,marginLeft130vw,marginBottom65vh,marginTop120vh} from "../../styles/marginStyles"



class createEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      attachment:"",
      userData:"",
      jwtToken:"",
      openmodal:false
    }  
  }

  componentDidMount() {
    Modal.setAppElement("body");
    this.props.dispatch(getCurrentUser())
    setTimeout(()=>{
        const userData = this.props.account.userData;
        this.setState({userData:userData})
    },100)
  }

  onDrop = (files) => {
    console.log(files);
    let update = Object.assign({},this.state,{attachment: files})
    this.setState({eventInput:update})
  }

  handleSubmit =  (values) => {
   
    try {
      let userData = this.state.userData.userdata.data
      addSchoolEvent(userData.school.uuid,userData.token,values)
    }
    catch(error) {
      console.log(error)
    }
    this.setState({openmodal:true})
   
  }
  

  render() {
    
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header/>
            <div className="form">
              <h1 className="titleform" style={{marginBottom:'3vh'}}>Create an event for your class</h1>
              <Formik
                initialValues={eventInitialValues}
                validationSchema={EventSchema}
                onSubmit={(values, actions) => {
                  this.handleSubmit(values);
                  actions.resetForm()
                }}
              >
                {(props)=>(
                  <Form>
                    <div style={marginBottom65vh}>
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
                      <DayPickerInput  className="shortbox" name="datefrom" onDayChange={(day)=> props.setFieldValue('datefrom',day)} style={marginLeft130vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      <label htmlFor="dateto" className="section" style={marginLeft380vw}>Date to:</label>
                      <DayPickerInput  className="shortbox" name="dateto" onDayChange={(day)=>props.setFieldValue('dateto',day)} style={{marginLeft:"32vw"}} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      
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
                    <div className="flexrow" style={Object.assign({},marginBottom65vh,marginTop120vh)}>
                      <p className="section">Attachment </p>
                
                      <Dropzone onDrop={this.onDrop}>
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
                      <button type="reset" value="Reset" className="button">Reset</button>
                      <button className="button" onClick={()=>this.props.history.push("/")} style={{color:"#FFFFFF"}}>Cancel</button>
                    </div>
                  </Form>
                )}
              </Formik>
                
                
              
            </div>
            <Modal isOpen={this.state.openmodal} onRequestClose={()=>this.setState({openmodal:false})} className="Modal"> 
                <div className="headermodal" style={{textAlign:"center",color:"#262F56",fontWeight:"bold"}}>Events</div>
                <p style={{marginTop:"15%",textAlign:"center"}}>Event saved successfully</p>
                <button className="button" onClick={()=>this.props.history.push("/event")} style={{marginTop:"5%",marginLeft:"29%"}}> Ok</button>
     
            </Modal>
          </div>
        
      </div>  
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(createEvent);

