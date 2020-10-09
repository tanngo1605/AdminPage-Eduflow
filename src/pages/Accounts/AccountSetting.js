import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Formik,Form,Field} from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import accountSchema from "../../userData/ValidationSchema/AccountSchema"
import initialvalue from "../../userData/InitialData/Account"
import {marginLeft240vw,marginTop45vh,marginLeft380vw,marginBottom100vh} from "../../styles/marginStyles"

const AccountSetting = (props) => {
  const [imageAccount,setImageAccount] = useState(null)
  const displayImage = () =>{
    
    if (imageAccount)
      return (
                <div className="imagearea">
                    <img src={URL.createObjectURL(imageAccount)} alt="uploadImage" style={{width:"15vw",height:"15vh",marginRight:"1vw"}} />
                    <AiOutlineClose size="1.2vw" color={'white'} onClick={()=>{setImageAccount(null)}}/>
                </div>
     
      )
    return <div className="imagearea"></div>
      
  }
  

  const handleSubmit = (event) => {
    
    
  }


  
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer/>
          <div className="flexcolumn">
            <Header/>
            <div className="form">
              
                <h1 className="titleform">Account Settings</h1>
                <Formik
                  initialValues={initialvalue}
                  validationSchema={accountSchema}
                  onSubmit={(values, actions) => {
                    console.log(values)
                    handleSubmit(values);
                    actions.resetForm()
                  }}
                >
                  {(props)=>(
                    <Form>
                      <div className="flexrow" style={marginBottom100vh}>
                        <div className="flexcolumn">
                          <label htmlFor="schoolname" className="section" style={sectionStyle}>School name</label>
                          <Field type="text" name="schoolname" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                        
                        <div className="flexcolumn" style={marginLeft380vw}>
                          <label htmlFor="schooladdress" className="section" style={sectionStyle}>School Address</label>
                          <Field type="text" name="schooladdress" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                      </div>
                      <div className="flexrow" style={marginBottom100vh}>
                        <div className="flexcolumn">
                          <label htmlFor="schoolcode" className="section" style={sectionStyle}>School code</label>
                          <Field type="text" name="schoolcode" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                        
                        <div className="flexcolumn" style={marginLeft380vw}>
                          <label htmlFor="city" className="section" style={sectionStyle}>City</label>
                          <Field type="text" name="city" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                      </div>
                      <div className="flexrow" style={marginBottom100vh}>
                        <div className="flexcolumn">
                          <label htmlFor="schoolbranch" className="section" style={sectionStyle}>School branch</label>
                          <Field type="text" name="schoolbranch" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                        
                        <div className="flexcolumn" style={marginLeft380vw}>
                          <label htmlFor="director" className="section" style={sectionStyle}>Director</label>
                          <Field type="text" name="director" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                      </div>
                      <div className="flexrow">
                        <div className="flexcolumn">
                            {displayImage(props.values.image)}
                            <div className="flexrow" style={{marginTop:"1.5vh"}}>
                              <Dropzone name="image" onDrop={(files)=> {props.setFieldValue("image",files[0]);setImageAccount(files[0])}} accept="image/*">
                                {({getRootProps, getInputProps}) => (
                                  <section className="flexrow" style={{marginLeft:"4vw"}}>
                                    <div {...getRootProps({className: "attachment"})}>
                                      <input {...getInputProps()} />
                                        <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                                        <p>Upload a photo</p>  
                                    </div>
                                  </section>
                                )}
                              </Dropzone>
                
                            <div className="attachment" style={{marginLeft:"1vw"}}>
                              <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                              <p>Take a photo</p>  
                            </div>
                        
                          </div>
                    
                        </div>
                        <div className="flexcolumn" style={{marginLeft:"10vw"}} >
                          <div style={marginBottom100vh} >
                            <label htmlFor="principle" className="section" style={sectionStyle}>Principle</label>
                            <Field type="text" name="principle" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                          </div>
                        
                          <div style={marginBottom100vh}>
                            <label htmlFor="viceprinciple" className="section" style={sectionStyle}>Vice Principle</label>
                            <Field type="text" name="viceprinciple" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                          </div>
                          <div>
                            <label htmlFor="admin" className="section" style={sectionStyle}>Admin</label>
                            <Field type="text" name="admin" className="longbox"  style={marginTop45vh} placeholder="Type here"/>
                          </div>
                        </div>
                      </div>
                      <div className="flexrow" style={{marginTop:"3vh",marginBottom:"7.5%"}}>
                        <div className="flexcolumn">
                          <label htmlFor="totalteacher" className="section" style={sectionStyle}>Total Teachers</label>
                          <Field type="number" name="totalteacher" className="shortbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                        
                        <div className="flexcolumn" style={marginLeft240vw}>
                          <label htmlFor="totalstudent" className="section" style={sectionStyle}>Total Staff</label>
                          <Field type="number" name="totalstudent" className="shortbox"  style={marginTop45vh} placeholder="Type here"/>
                        </div>
                        <div className="flexcolumn" style={marginLeft240vw}>
                          <label htmlFor="totalstaff" className="section" style={sectionStyle}>Total Students</label>
                          <Field type="number" name="totalstaff" className="shortbox" style={marginTop45vh} placeholder="Type here"/>
                        </div>
                      </div>
                      <div className="flexrow" >
                        <button type="submit" className="button" style={{marginLeft:"18%"}}>Save</button>
                        <button type="reset" value="Reset" className="button">Reset</button>  
                      </div>
                    </Form>  
                  )}
                </Formik>
            
              
            </div>
          </div>
        
      </div>  
      </div>
    );
  }


export default AccountSetting;


const sectionStyle = {
    paddingLeft:"1.5vw",
};

