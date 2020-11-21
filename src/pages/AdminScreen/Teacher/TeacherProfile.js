import React, { useEffect,useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import {createUsers} from "../../../redux/Action/UserAction";
import {teacherProfileSchema} from "../../../userData/ValidationSchema/TeacherSchema"
import {teacherProfileInitialValue} from "../../../userData/InitialData/Teacher"
import {marginBottom20vh,marginLeft20vw,marginLeft60vw,} from "../../../styles/marginStyles";
import {image130vw} from "../../../styles/imageStyles"
import {image40vwLeft10vw} from "../../../styles/imageMarginStyles"

const TeacherProfile = (props) => {
  const [teacherData,setTeacherData] = useState(props.location.teacherdata?props.location.teacherdata:[])
  const [edit,setEdit] = useState(props.location.teacherdata?false:true)
  
  useEffect(()=>{
    function getUserInfo(){
      props.dispatch(getCurrentUser())
  }
    getUserInfo();
  },[])

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
    try {
      const userData =props.account.userData.userdata.data.data;
      
      if (edit) {

        
        createUsers(userData.token,values,'teacher')
        
        
      }
      else{

        createUsers(userData.token,values,'teacher')
        
      }
      props.history.push("/teachersearch");
    }
    catch(error) {
      console.log(error)
    }
  };

  
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header {...props}/>
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
                          <div className="formforinfo">
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom20vh}>
                             
                              <label htmlFor="name" className="section" style={image130vw}>Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft60vw}  placeholder={teacherData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label className="section" style={image130vw}>Date of birth</label>
                              <DayPickerInput  className="shortbox" name="dob" onDayChange={(day)=> propsForm.setFieldValue("dob",day)} style={marginLeft60vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{after: new Date()}}} placeholder={teacherData.dateofbirth}/>
                            </div>
                            <div  className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="gender" className="section" style={image130vw}>Gender</label>
                              <Field as="select" name="gender" className="shortbox"  style={marginLeft60vw}>
                                <option value="" defaultValue>{" "}{teacherData.gender}</option>
                                <option value="male" >{" "}Male</option>
                                <option value="female">{" "}Female</option>
                              </Field>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="corresaddress" className="section" style={image130vw}>Correspondence Address</label>
                              <Field component="textarea" name="corresaddress" className="shortbox" style={{marginLeft:"6vw",height:"15vh"}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="correscity" className="section">City</label>
                              <Field type="text" name="correscity" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                              <label htmlFor="corresstate" className="section" style={marginLeft20vw}>State</label>
                              <Field type="text" name="corresstate" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                              <label htmlFor="correspcode" className="section" style={marginLeft20vw}>Postcode</label>
                              <Field type="text" name="correspcode" className="shortbox"  style={image40vwLeft10vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permaaddress" className="section" style={image130vw}>Permanent Address</label>
                              <Field component="textarea" name="permaaddress" className="shortbox" style={{marginLeft:"6vw",height:"15vh"}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permacity" className="section" >City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image40vwLeft10vw}  placeholder="Type here"/>
                              <label htmlFor="permastate" className="section" style={marginLeft20vw}>State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                              <label htmlFor="permapcode" className="section" style={marginLeft20vw}>Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="subject" className="section" style={image130vw}>Subject</label>
                              <Field type="text" name="subject" className="shortbox" style={marginLeft60vw}  placeholder={teacherData.subject}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="roleno" className="section" style={image130vw}>Role</label>
                              <Field type="text" name="roleno" className="shortbox" style={marginLeft60vw}  placeholder={teacherData.role}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="phoneno" className="section" style={image130vw}>Phone No</label>
                              <Field type="text" name="phoneno" className="shortbox" style={marginLeft60vw}  placeholder={teacherData.phone}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="alternatephoneno" className="section" style={image130vw}>Alternate Phone No</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft60vw}  placeholder="Type here"/>
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
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Name</div>
                          <div className="shortbox" style={marginLeft60vw}>{teacherData.name}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Date of birth</div>
                          <div  className="shortbox" style={marginLeft60vw}>{teacherData.dateofbirth}</div>
                        </section>
                        <section  className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Gender</div>
                          <div  className="shortbox" style={marginLeft60vw}>{teacherData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div htmlFor="corresaddress" className="section" style={image130vw}>Correspondence Address</div>
                          <div className="shortbox" style={{marginLeft:"6vw",height:"15vh"}}></div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section">City</div>
                          <div className="shortbox" style={image40vwLeft10vw}></div>
                          <div htmlFor="state" className="section" style={marginLeft20vw}>State</div>
                          <div className="shortbox" style={image40vwLeft10vw}></div>
                          <div htmlFor="Postcode" className="section" style={marginLeft20vw}>Postcode</div>
                          <div className="shortbox"  style={image40vwLeft10vw}></div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div htmlFor="permaaddress" className="section" style={image130vw}>Permanent Address</div>
                          <div  className="shortbox" style={{marginLeft:"6vw",height:"15vh"}}  placeholder="Type here">{teacherData.address}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section">City</div>
                          <div className="shortbox" style={image40vwLeft10vw}></div>
                          <div className="section" style={marginLeft20vw}>State</div>
                          <div className="shortbox" style={image40vwLeft10vw}></div>
                          <div className="section" style={marginLeft20vw}>Postcode</div>
                          <div className="shortbox" style={image40vwLeft10vw}></div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section">Subject</div>
                          <div className="shortbox" style={marginLeft60vw}>{teacherData.subject}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" >Role</div>
                          <div className="shortbox" style={marginLeft60vw}>{teacherData.role}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section">Phone No</div>
                          <div className="shortbox" style={marginLeft60vw}>{teacherData.phone}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw} >Alternate Phone No</div>
                          <div className="shortbox" style={marginLeft60vw}></div>
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
