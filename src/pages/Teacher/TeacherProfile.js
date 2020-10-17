import React, { useEffect,useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import {teacherProfileSchema} from "../../userData/ValidationSchema/TeacherSchema"
import {teacherProfileInitialValue} from "../../userData/InitialData/Teacher"
import {
  marginBottom180vh,
  marginBottom65vh,

  marginLeft270vw,
  marginLeft200vw,
  marginLeft130vw,

} from "../../styles/marginStyles";
import {image200vw} from "../../styles/imageStyles"
import {
  image80vwLeft320vw,
  image80vwLeft160vw,
  image80vwLeft30vw} from "../../styles/imageMarginStyles"

const TeacherProfile = (props) => {
  const [teacherData,setTeacherData] = useState([])
  const [edit,setEdit] = useState(true)
  const [error,setError] = useState()
  useEffect(()=>{
    //props.dispatch(loadTeacherData());
    //view or add new students

    checkstatus()
  },[]) 

  const checkstatus = () =>{
    if (props.location.teacherdata){
      setTeacherData(props.location.teacherdata)
      setEdit(false) 
      
    }   
  }

  const displayImage = (propsForm) => {
    
    if (edit === false) return (
      <div className="profileimage">
        <img src={{}} alt="" className="profileimagepreview"/>
      </div>
      );
    
    const image = propsForm.values.image;
    if (image)
      return (
        <div className="profileimage">
          <label htmlFor="image">
            <img src={URL.createObjectURL(image)} alt="" className="profileimagepreview"/>
          </label>
          <input type="file" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue("image",event.target.files[0])} />
        </div>
);
    return (
      <div>
       <label htmlFor="image" className="profileimage"></label>
       <input type="file" id="image" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue("image",event.target.files[0])} />
      </div>
   );
};

  const handleSubmit = (values) => {
    if (props.location.studentdata) {
      //props.dispatch(modifyTeacherData({ value: values }));
    } else {
      //props.dispatch(addTeacherData({ value: values }));
    }
    props.history.push("/teachersearch");
  };

  
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Teacher Profile </h1>
              <div className="flexrow">
                
                <div >
                  
                   {edit?(
                    <Formik
                      initialValues={teacherProfileInitialValue}
                      validationSchema={teacherProfileSchema}
                      onSubmit={(values, actions) => {
                        handleSubmit(values);
                        actions.resetForm()
                      }}
                    >  
                  
                      {(propsForm)=>(
                  
                        <Form className="flexrow">
                         {displayImage(propsForm)}
                         <div className="flexcolumn">
                          <div className="formforinfo" style={{paddingTop:"3.5vh"}}>
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom65vh}>
                             
                              <label htmlFor="name" className="section" >Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft200vw}  placeholder={teacherData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label className="section" >Date of birth</label>
                              <DayPickerInput  className="shortbox" name="dob" onDayChange={(day)=> propsForm.setFieldValue("dob",day)} style={marginLeft200vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{after: new Date()}}} placeholder={teacherData.dateofbirth}/>
                            </div>
                            <div  className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="gender" className="section" >Gender</label>
                              <Field as="select" name="gender" className="shortbox"  style={marginLeft200vw}>
                                <option value="" defaultValue>{" "}{teacherData.gender}</option>
                                <option value="male" >{" "}Male</option>
                                <option value="female">{" "}Female</option>
                              </Field>
                            </div>
                            <div className="flexrow" style={marginBottom180vh}>
                              <label htmlFor="corresaddress" className="section" style={image200vw}>Correspondence Address</label>
                              <Field component="textarea" name="corresaddress" className="shortbox" style={{marginLeft:"20vw",height:"15vh"}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="correscity" className="section">City</label>
                              <Field type="text" name="correscity" className="shortbox" style={image80vwLeft30vw}  placeholder="Type here"/>
                              <label htmlFor="corresstate" className="section" style={marginLeft130vw} >State</label>
                              <Field type="text" name="corresstate" className="shortbox" style={image80vwLeft160vw}  placeholder="Type here"/>
                              <label htmlFor="correspcode" className="section" style={marginLeft270vw}>Postcode</label>
                              <Field type="text" name="correspcode" className="shortbox"  style={image80vwLeft320vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom180vh}>
                              <label htmlFor="permaaddress" className="section">Permanent Address</label>
                              <Field component="textarea" name="permaaddress" className="shortbox" style={{marginLeft:"20vw",height:"15vh"}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="permacity" className="section">City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image80vwLeft30vw}  placeholder="Type here"/>
                              <label htmlFor="permastate" className="section" style={marginLeft130vw} >State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image80vwLeft160vw}  placeholder="Type here"/>
                              <label htmlFor="permapcode" className="section" style={marginLeft270vw} >Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image80vwLeft320vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="subject" className="section">Subject</label>
                              <Field type="text" name="subject" className="shortbox" style={marginLeft200vw}  placeholder={teacherData.subject}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="roleno" className="section">Role</label>
                              <Field type="text" name="roleno" className="shortbox" style={marginLeft200vw}  placeholder={teacherData.role}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="phoneno" className="section" >Phone No</label>
                              <Field type="text" name="phoneno" className="shortbox" style={marginLeft200vw}  placeholder={teacherData.phone}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="alternatephoneno" className="section" style={image200vw}  >Alternate Phone No</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft200vw}  placeholder="Type here"/>
                            </div>    
                           </Scrollbars>
                          
                          </div>
                          <div className="flexrow" style={{marginLeft:"7vw",marginTop:"2vh"}}>
                            <button type="button" className="button" onClick={()=>console.log("dont have anything to edit")}>Edit</button>
                            <button type="submit" className="button">Save</button>
                          </div>
                         </div>
                          
                        </Form>
                  
                      )}
                     
                    
                    </Formik>
                   ):(
                    <div className="flexrow"> 
                     {displayImage(props)}
                     <div className="flexcolumn">
                      
                      <div className = "formforinfo" style={{paddingTop:"3.5vh"}}>
                       <Scrollbars>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">Name</div>
                          <div className="shortbox" style={marginLeft200vw}>{teacherData.name}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Date of birth</div>
                          <div  className="shortbox" style={marginLeft200vw}>{teacherData.dateofbirth}</div>
                        </section>
                        <section  className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Gender</div>
                          <div  className="shortbox" style={marginLeft200vw}>{teacherData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom180vh}>
                          <div htmlFor="corresaddress" className="section" style={image200vw} >Correspondence Address</div>
                          <div className="shortbox" style={{marginLeft:"20vw",height:"15vh"}}></div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >City</div>
                          <div className="shortbox" style={image80vwLeft30vw}></div>
                          <div htmlFor="state" className="section" style={marginLeft130vw} >State</div>
                          <div className="shortbox" style={image80vwLeft160vw}></div>
                          <div htmlFor="Postcode" className="section" style={marginLeft270vw} >Postcode</div>
                          <div className="shortbox"  style={image80vwLeft320vw}></div>
                        </section>
                        <section className="flexrow" style={marginBottom180vh}>
                          <div htmlFor="permaaddress" className="section" style={image200vw}>Permanent Address</div>
                          <div  className="shortbox" style={{marginLeft:"20vw",height:"15vh"}}  placeholder="Type here">{teacherData.address}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">City</div>
                          <div className="shortbox" style={image80vwLeft30vw}></div>
                          <div className="section"  style={marginLeft130vw} >State</div>
                          <div className="shortbox" style={image80vwLeft160vw}></div>
                          <div className="section" style={marginLeft270vw}>Postcode</div>
                          <div className="shortbox" style={image80vwLeft320vw}></div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">Subject</div>
                          <div className="shortbox" style={marginLeft200vw}>{teacherData.subject}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Role</div>
                          <div className="shortbox" style={marginLeft200vw}>{teacherData.role}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">Phone No</div>
                          <div className="shortbox" style={marginLeft200vw}>{teacherData.phone}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw} >Alternate Phone No</div>
                          <div className="shortbox" style={marginLeft200vw}></div>
                        </section>
                       </Scrollbars>
                      </div>
                      <div className="flexrow" style={{marginLeft:"7vw",marginTop:"2vh"}}>
                        <button type="button" className="button" onClick={()=>setEdit(true)}>Edit</button>
                        <button type="button" className="button" onClick={()=>console.log("dont have anything to save")}>Save</button>
                      </div>
                     </div>
                    </div>
                   )}
                  
                  {/*end of form*/}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  teacher: state.teacher,
});

export default React.memo(connect(mapStateToProps)(TeacherProfile));
