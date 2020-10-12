import React, { useEffect,useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import {studentProfileSchema} from "../../userData/ValidationSchema/StudentSchema"
import {studentProfileInitialValue} from '../../userData/InitialData/Student'
import {
  marginBottom180vh,
  marginBottom65vh,
  marginLeft270vw,
  marginLeft200vw,
  marginLeft130vw,
} from "../../styles/marginStyles";
import {image200vw} from "../../styles/imageStyles"
import {
  image110vwLeft270vw,
  image110vwLeft50vw,
  image80vwLeft320vw,
  image80vwLeft160vw,
  image80vwLeft30vw} from "../../styles/imageMarginStyles"
const StudentProfile = (props) => {
  const [studentData,setStudentData] = useState([])
  const [edit,setEdit] = useState(true)
  const [error,setError] = useState()
  useEffect(()=>{
    //props.dispatch(loadstudentData());
    //view or add new students
    const checkstatus = () =>{
      if (props.location.studentdata){
        setStudentData(props.location.studentdata)
        setEdit(false) 
      } 
    }
    checkstatus()
  },[error]) 
  
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
          <input type="file" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
        </div>
);
      console.log('k')
    return (
      <div>
       <label htmlFor="image" className="profileimage"></label>
       <input type="file" id='image' className="profileimage" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
      </div>
   );
};

  const handleSubmit = (values) => {
    if (props.location.studentdata) {
      //props.dispatch(modifystudentData({ value: values }));
      
    } else {
      //props.dispatch(addstudentData({ value: values }));
      
    }
    props.history.push("/studentsearch");
  };

  
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Student Profile </h1>
              <div className="flexrow">
                
                <div >
                  
                   {edit?(
                    <Formik
                      initialValues={studentProfileInitialValue}
                      validationSchema={studentProfileSchema}
                      onSubmit={(values, actions) => {
                        handleSubmit(values);
                        actions.resetForm()
                      }}
                    >  
                  
                      {(propsForm)=>(
                  
                        <Form className='flexrow'>
                         {displayImage(propsForm)}
                         <div className='flexcolumn'>
                          <div className="formforinfo" style={{paddingTop:'3.5vh'}}>
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='name' className="section" >Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label className="section" >Date of birth</label>
                              <DayPickerInput  className="shortbox" name="dob" onDayChange={(day)=> propsForm.setFieldValue('dob',day)} style={marginLeft200vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{after: new Date()}}} placeholder={studentData.dateofbirth}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='admissnumber' className="section" style={image200vw} >Admission number</label>
                              <Field type="text" name="admissnumber" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div  className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="gender" className="section" >Gender</label>
                              <Field as="select" name="gender" className="shortbox"  style={marginLeft200vw}>
                                <option value="" defaultValue>{" "}{studentData.gender}</option>
                                <option value="male" >{" "}Male</option>
                                <option value="female">{" "}Female</option>
                              </Field>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='fathername' className="section" style={image200vw}>Father's name</label>
                              <Field type="text" name="fathername" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='mothername' className="section" style={image200vw}>Mother's name</label>
                              <Field type="text" name="mothername" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='fatheroccupation' className="section" style={image200vw} >Fater's occupation</label>
                              <Field type="text" name="fatheroccupation" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='motheroccupation' className="section" style={image200vw} >Mother's occupation</label>
                              <Field type="text" name="motheroccupation" className="shortbox" style={marginLeft200vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom180vh}>
                              <label htmlFor='corresaddress' className="section" style={image200vw}>Correspondence Address</label>
                              <Field component="textarea" name="corresaddress" className="shortbox" style={{marginLeft:'20vw',height:'15vh'}}  placeholder={studentData.name}/>
                            </div>

                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="correscity" className="section" >City</label>
                              <Field type="text" name="correscity" className="shortbox" style={image80vwLeft30vw}  placeholder={studentData.name}/>
                              <label htmlFor='corresstate' className="section" style={marginLeft130vw} >State</label>
                              <Field type="text" name="corresstate" className="shortbox" style={image80vwLeft160vw}  placeholder={studentData.name}/>
                              <label htmlFor="correspcode" className="section" style={marginLeft270vw}>Postcode</label>
                              <Field type="text" name="correspcode" className="shortbox"  style={image80vwLeft320vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='corresaddress' className="section" style={image200vw}>Same Permanent Address</label>
                              <Field name="checkbox" className='abc' component="input" type="checkbox" style={marginLeft200vw} checked={propsForm.values.checkbox} />
                            </div>
                            <div className="flexrow" style={marginBottom180vh}>
                              <label htmlFor="permaaddress" className="section" style={image200vw} >Permanent Address</label>
                              <Field component='textarea' name="permaaddress" className="shortbox" style={{marginLeft:'20vw',height:'15vh'}}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="permacity" className="section">City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image80vwLeft30vw}  placeholder={studentData.name}/>
                              <label htmlFor='permastate' className="section" style={marginLeft130vw} >State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image80vwLeft160vw} placeholder={studentData.name}/>
                              <label htmlFor="permapcode" className="section" style={marginLeft270vw} >Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image80vwLeft320vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="classvalue" className="section">Class</label>
                              <Field type="text" name="classvalue" className="shortbox"  style={image110vwLeft50vw}  placeholder={studentData.name}/>
                              <label htmlFor='section' className="section" style={marginLeft200vw} >Section</label>
                              <Field type="text" name="section" className="shortbox" style={image110vwLeft270vw}  placeholder={studentData.name}/>
                              
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='teachername' className="section" style={image200vw} >Class Teacher Name</label>
                              <Field type="text" name="teachername" className="shortbox" style={marginLeft200vw}  placeholder={studentData.subject}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='fathermobileno' className="section" style={image200vw} >Father's Mobile No.</label>
                              <Field type="text" name="fathermobileno" className="shortbox" style={marginLeft200vw}  placeholder={studentData.role}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='alternatephoneno' className="section" style={image200vw} >Alternate's Mobile No.</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft200vw}  placeholder={studentData.phone}/>
                            </div>
                           </Scrollbars>
                          
                          </div>
                          <div className="flexrow" style={{marginLeft:"7vw",marginTop:"2vh"}}>
                            <button type="button" className="button" onClick={()=>console.log('dont have anything to edit')}>Edit</button>
                            <button type="submit" className="button">Save</button>
                          </div>
                         </div>
                          
                        </Form>
                  
                      )}
                     
                    
                    </Formik>
                   ):(
                    <div className='flexrow'> 
                     {displayImage(props)}
                     <div className='flexcolumn'>
                      
                      <div className = 'formforinfo' style={{paddingTop:'3.5vh'}}>
                       <Scrollbars>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">Name</div>
                          <div className="shortbox" style={marginLeft200vw}>{studentData.name}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Date of birth</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Admission Number</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section  className="flexrow" style={marginBottom65vh}>
                          <div className="section" >Gender</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw}  >Father's name</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw}  >Mother's name</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw}  >Father's occupation</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw}  >Mother's occupation</div>
                          <div  className="shortbox" style={marginLeft200vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom180vh}>
                          <div htmlFor='corresaddress' className="section" style={image200vw}>Correspondence Address</div>
                          <div className="shortbox" style={{marginLeft:'20vw',height:'15vh'}}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" >City</div>
                          <div className="shortbox" style={image80vwLeft30vw}>{studentData.gender}</div>
                          <div htmlFor='state' className="section" style={marginLeft130vw} >State</div>
                          <div className="shortbox" style={image80vwLeft160vw}>{studentData.gender}</div>
                          <div htmlFor="Postcode" className="section" style={marginLeft270vw} >Postcode</div>
                          <div className="shortbox"  style={image80vwLeft320vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom180vh}>
                          <div htmlFor="permaaddress" className="section" style={image200vw}>Permanent Address</div>
                          <div  className="shortbox" style={{marginLeft:'20vw',height:'15vh'}}  placeholder={studentData.name}>{studentData.address}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">City</div>
                          <div className="shortbox" style={image80vwLeft30vw}>{studentData.gender}</div>
                          <div className="section"  style={marginLeft130vw} >State</div>
                          <div className="shortbox" style={image80vwLeft160vw}>{studentData.gender}</div>
                          <div className="section" style={marginLeft270vw}>Postcode</div>
                          <div className="shortbox" style={image80vwLeft320vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section">Class</div>
                          <div className="shortbox" style={image110vwLeft50vw}>{studentData.gender}</div>
                          <div className="section"  style={marginLeft130vw} >Section</div>
                          <div className="shortbox" style={image110vwLeft270vw}>{studentData.gender}</div>

                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw} >Class Teacher Name</div>
                          <div className="shortbox" style={marginLeft200vw}>{studentData.subject}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw}  >Father's Mobile No.</div>
                          <div className="shortbox" style={marginLeft200vw}>{studentData.role}</div>
                        </section>
                        <section className="flexrow" style={marginBottom65vh}>
                          <div className="section" style={image200vw} >Alternate's Mobile No.</div>
                          <div className="shortbox" style={marginLeft200vw}>{studentData.phone}</div>
                        </section>
                        
                       </Scrollbars>
                      </div>
                      <div className="flexrow" style={{marginLeft:"7vw",marginTop:"2vh"}}>
                        <button type="button" className="button" onClick={()=>setEdit(true)}>Edit</button>
                        <button type="button" className="button" onClick={()=>console.log('dont have anything to save')}>Save</button>
                      </div>
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
  student: state.student,
});

export default React.memo(connect(mapStateToProps)(StudentProfile));
