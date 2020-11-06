import React, { useEffect,useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/HeaderAdmin";
import {createUsers} from "../../redux/Action/UserAction";
import {studentProfileSchema} from "../../userData/ValidationSchema/StudentSchema"
import {studentProfileInitialValue} from '../../userData/InitialData/Student'
import {marginBottom20vh,marginLeft60vw,marginLeft20vw} from "../../styles/marginStyles";
import {image130vw,image50vw} from "../../styles/imageStyles"
import {image40vwLeft10vw,image95vwLeft30vw} from "../../styles/imageMarginStyles"
const StudentProfile = (props) => {
  
  const [studentData,setStudentData] = useState(props.location.studentdata?props.location.studentdata:[])
  const [edit,setEdit] = useState(props.location.studentdata?false:true)

  const getUserInfo= () => {
    props.dispatch(getCurrentUser());
  }
  
  useEffect(getUserInfo,[]) 
  
  const displayImage = (propsForm) => {
    
    if (!edit) return (
      <div className="profileimage">
        <img src={{}} alt="" className="profileimagepreview"/>
      </div>
      );
    
    const image = propsForm.values.image[0];
    if (image)
      return (
        <div className="profileimage">
          <label htmlFor="image">
            <img src={URL.createObjectURL(image)} alt="" className="profileimagepreview"/>
          </label>
          <input type="file" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
        </div>
);
      
    return (
      <div>
       <label htmlFor="image" className="profileimage"></label>
       <input type="file" id='image' className="profileimage" name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
      </div>
   );
};

  const handleSubmit = (values) => {
    
    console.log(values);
    try {
      const userData =props.account.userData.userdata.data.data;
      
      if (edit) {

        
        createUsers(userData.token,values,'student')
        
        
      }
      else{

        createUsers(userData.token,values,'student')
        
      }
      props.history.push("/studentsearch");
    }
    catch(error) {
      console.log(error)
    }
      //props.dispatch(modifystudentData({ value: values }));
      //props.dispatch(addstudentData({ value: values }));

    
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
                          <div className="formforinfo">
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='name' className="section" style={image130vw} >Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label className="section" style={image130vw}>Date of birth</label>
                              <DayPickerInput format={'yyyy/MM/dd'} className="shortbox" name="dob" onDayChange={(day)=> propsForm.setFieldValue('dob',day)} style={marginLeft60vw} inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{after: new Date()}}} placeholder={studentData.dateofbirth}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='admissnumber' className="section" style={image130vw}>Admission number</label>
                              <Field type="text" name="admissnumber" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div  className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="gender" className="section" style={image130vw}>Gender</label>
                              <Field as="select" name="gender" className="shortbox"  style={marginLeft60vw}>
                                <option value="" defaultValue>{" "}{studentData.gender}</option>
                                <option value="male" >{" "}Male</option>
                                <option value="female">{" "}Female</option>
                              </Field>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='fathername' className="section" style={image130vw}>Father's name</label>
                              <Field type="text" name="fathername" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='mothername' className="section" style={image130vw}>Mother's name</label>
                              <Field type="text" name="mothername" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='fatheroccupation' className="section" style={image130vw}>Fater's occupation</label>
                              <Field type="text" name="fatheroccupation" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='motheroccupation' className="section" style={image130vw}>Mother's occupation</label>
                              <Field type="text" name="motheroccupation" className="shortbox" style={marginLeft60vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='corresaddress' className="section" style={image130vw}>Correspondence Address</label>
                              <Field component="textarea" name="corresaddress" className="shortbox" style={{marginLeft:'6vw',height:'15vh'}}  placeholder={studentData.name}/>
                            </div>

                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="correscity" className="section" >City</label>
                              <Field type="text" name="correscity" className="shortbox" style={image40vwLeft10vw}  placeholder={studentData.name}/>
                              <label htmlFor='corresstate' className="section" style={marginLeft20vw} >State</label>
                              <Field type="text" name="corresstate" className="shortbox" style={image40vwLeft10vw}  placeholder={studentData.name}/>
                              <label htmlFor="correspcode" className="section" style={marginLeft20vw}>Postcode</label>
                              <Field type="text" name="correspcode" className="shortbox"  style={image40vwLeft10vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='corresaddress' className="section" style={image130vw}>Same Permanent Address</label>
                              <Field name="checkbox" className='abc' component="input" type="checkbox" style={marginLeft60vw} checked={propsForm.values.checkbox} />
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permaaddress" className="section" style={image130vw} >Permanent Address</label>
                              <Field component='textarea' name="permaaddress" className="shortbox" style={{marginLeft:'6vw',height:'15vh'}}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permacity" className="section">City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image40vwLeft10vw}  placeholder={studentData.name}/>
                              <label htmlFor='permastate' className="section" style={marginLeft20vw} >State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image40vwLeft10vw} placeholder={studentData.name}/>
                              <label htmlFor="permapcode" className="section" style={marginLeft20vw} >Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image40vwLeft10vw}  placeholder={studentData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="classvalue" className="section" style={image50vw}>Class</label>
                              <Field type="text" name="classvalue" className="shortbox"  style={image95vwLeft30vw}  placeholder={studentData.name}/>
                              <label htmlFor='section' className="section" style={marginLeft20vw} >Section</label>
                              <Field type="text" name="section" className="shortbox" style={image95vwLeft30vw}  placeholder={studentData.name}/>
                              
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='teachername' className="section" style={image130vw}>Class Teacher Name</label>
                              <Field type="text" name="teachername" className="shortbox" style={marginLeft60vw}  placeholder={studentData.subject}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='fathermobileno' className="section" style={image130vw}>Father's Mobile No.</label>
                              <Field type="text" name="fathermobileno" className="shortbox" style={marginLeft60vw}  placeholder={studentData.role}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='alternatephoneno' className="section" style={image130vw}>Alternate's Mobile No.</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft60vw}  placeholder={studentData.phone}/>
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
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Name</div>
                          <div className="shortbox" style={marginLeft60vw}>{studentData.name}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Date of birth</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Admission Number</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section  className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Gender</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Father's name</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Mother's name</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Father's occupation</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Mother's occupation</div>
                          <div  className="shortbox" style={marginLeft60vw}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div htmlFor='corresaddress' className="section" style={image130vw}>Correspondence Address</div>
                          <div className="shortbox" style={{marginLeft:'6vw',height:'15vh'}}>{studentData.dateofbirth}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" >City</div>
                          <div className="shortbox" style={image40vwLeft10vw}>{studentData.gender}</div>
                          <div htmlFor='state' className="section" style={marginLeft20vw} >State</div>
                          <div className="shortbox" style={image40vwLeft10vw}>{studentData.gender}</div>
                          <div htmlFor="Postcode" className="section" style={marginLeft20vw} >Postcode</div>
                          <div className="shortbox"  style={image40vwLeft10vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div htmlFor="permaaddress" className="section" style={image130vw}>Permanent Address</div>
                          <div  className="shortbox" style={{marginLeft:'6vw',height:'15vh'}} placeholder={studentData.name}>{studentData.address}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section">City</div>
                          <div className="shortbox" style={image40vwLeft10vw}>{studentData.gender}</div>
                          <div className="section"  style={marginLeft20vw} >State</div>
                          <div className="shortbox" style={image40vwLeft10vw}>{studentData.gender}</div>
                          <div className="section" style={marginLeft20vw}>Postcode</div>
                          <div className="shortbox" style={image40vwLeft10vw}>{studentData.gender}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image50vw}>Class</div>
                          <div className="shortbox" style={image95vwLeft30vw}>{studentData.gender}</div>
                          <div className="section" >Section</div>
                          <div className="shortbox" style={image95vwLeft30vw}>{studentData.gender}</div>

                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Class Teacher Name</div>
                          <div className="shortbox" style={marginLeft60vw}>{studentData.subject}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Father's Mobile No.</div>
                          <div className="shortbox" style={marginLeft60vw}>{studentData.role}</div>
                        </section>
                        <section className="flexrow" style={marginBottom20vh}>
                          <div className="section" style={image130vw}>Alternate's Mobile No.</div>
                          <div className="shortbox" style={marginLeft60vw}>{studentData.phone}</div>
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
  account: state.account,
});

export default React.memo(connect(mapStateToProps)(StudentProfile));
