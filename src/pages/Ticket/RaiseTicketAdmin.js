import React, {useEffect} from "react";
import { connect } from "react-redux"
import { Formik,Form,Field} from "formik";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";

import Dropzone from "react-dropzone";
import { BsPlus } from "react-icons/bs";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/HeaderAdmin"
import {createTickedAdmin} from "../../userData/ValidationSchema/TicketSchema"
import {intialTickedAdmin} from "../../userData/InitialData/Ticket"
import {marginLeft130vw,marginBottom180vh,marginBottom65vh} from "../../styles/marginStyles"



const RaiseTicketAdmin = (props)=> {
  const getUserInfo = () =>{
    props.dispatch(getCurrentUser())
  }
  
  useEffect(getUserInfo,[])

  
  const handleSubmit = (values) => {

  }


  return ( 
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header/>
            <div className="form">
                
                <h1 className="titleform" style={{marginBottom:"3vh"}}>Raise a ticket(Admin)</h1>
                <Formik
                  initialValues={intialTickedAdmin}
                  validationSchema={createTickedAdmin}
                  onSubmit={(values, actions) => {
                    
                    handleSubmit(values);
                    actions.resetForm()
                }}
                >
                  {(props)=>(
                    <Form>
                      <div className="flexrow" style={marginBottom65vh}>
                        <label htmlFor="topic" className="section">Topic</label>
                        <Field type="text" name="topic" className="shortbox"  style={marginLeft130vw} placeholder="Type here"/>
                      </div>
                      <div className="flexrow" style={marginBottom180vh}>
                        <label htmlFor="desc" className="section">Description</label>
                        <Field component='textarea' name="desc" className="shortbox" style={{marginLeft:'13vw',height:'15vh'}}  placeholder="Type here"/>
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
export default React.memo(connect(mapStateToProps)(RaiseTicketAdmin));

