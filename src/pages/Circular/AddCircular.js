import React, {useEffect} from "react";
import { connect } from "react-redux"
import { Formik,Form,Field} from "formik";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import {addSchoolCircular} from "../../redux/Action/CircularAction";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Dropzone from "react-dropzone";
import { BsPlus } from "react-icons/bs";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import {createCircularSchema} from "../../userData/ValidationSchema/CircularSchema"
import {initCreateCircular} from "../../userData/InitialData/Circular"
import {marginLeft130vw,marginBottom65vh} from "../../styles/marginStyles"



const AddCircular = (props)=> {
 
  useEffect(()=>{
    const getUserInfo = () =>{
      props.dispatch(getCurrentUser())
    }
    getUserInfo()

  },[])

  const handleSubmit = (values) => {
    
    try {
      const userData = props.account.userData.userdata.data.data;
      addSchoolCircular(userData.school.uuid,userData.token,values);
      props.history.push("/circular/circularlist");
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
                
                <h1 className="titleform" style={{marginBottom:"3vh"}}>Create a new class</h1>
                <Formik
                  initialValues={initCreateCircular}
                  validationSchema={createCircularSchema}
                  onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.resetForm()
                }}
                >
                  {(props)=>(
                    <Form>
                      <div className="flexrow" style={marginBottom65vh}>
                        <label htmlFor="title" className="section">Subject</label>
                        <Field type="text" name="title" className="shortbox"  style={marginLeft130vw} placeholder="Type here"/>
                      </div>
                      <div className="flexrow" style={marginBottom65vh}>
                        <p className="section">Date</p>
                        <DayPickerInput  className="shortbox" name="date" onDayChange={(day)=> props.setFieldValue("date",day)} style={marginLeft130vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                      </div>
                      <div className="flexrow">
                        <p className="section">Attachment </p>
                        <Dropzone name="attachment" onDrop={(files)=> props.setFieldValue("attachment",files)}>
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
                      <div className="flexrow" style={{marginLeft:"15vw",marginTop:"45vh"}}>
                        <button type="submit" className="button">Save</button>
                        <button type="reset" value="Reset" className="button">Reset</button>
                  
                      </div>
                  </Form>
                  )}
                </Formik>    
            </div>
            
          </div>
        
      </div>  
    </div>
)}

const mapStateToProps = (state) => ({
  account: state.account,
  
})
export default React.memo(connect(mapStateToProps)(AddCircular));

