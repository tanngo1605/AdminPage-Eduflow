import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {getSubject} from "../../../redux/Action/SchoolAction";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import {schoolSchema} from "../../../userData/ValidationSchema/SchoolSchema"
import {schoolInitialValue} from '../../../userData/InitialData/School'
import {marginBottom65vh,marginTop55vh,marginLeft480vw,marginLeft380vw,marginLeft120vw,marginLeft55vw} from "../../../styles/marginStyles";

import {image450percent,image100percent} from '../../../styles/imageStyles'

const studentArray = [
    {name:'Khanh',writtengrade:30,practicalgrade:50}
]

const EnterMarks =  (props) => {
  let [subjects,setSubject] = useState([])
  

  useEffect(()=>{
    async function getSubjectData(){
      props.dispatch(getCurrentUser())
      try {
        const userData=props.account.userData.userdata.data.data;
        const subjectData = await getSubject(userData.school.uuid)
        setSubject(subjectData)
        
      }
      catch(err){
        console.log(err)
      }
    }
    getSubjectData()
  },[]) 


  const handleSubmit = (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      console.log(userData)
    }
    catch(error) {
      console.log(error)
      
    }
  };
    return (
      <div className="dashboard">
        <div className="flexcolumn">
            <HeaderTeacher />
            <div className="formTeacher">
                <h1 className="titleform">Enter Marks</h1>
                <div className='flexcolumn'>
                    <Formik
                      initialValues={schoolInitialValue}
                      validationSchema={schoolSchema}
                      onSubmit={(values, actions) => {
                        handleSubmit(values);
                        actions.resetForm()
                      }}
                    >  
                      {(propsForm)=>(
                  
                        <Form onChange={(e)=>handleSubmit(e)}>
                            <section className='flexcolumn' style={marginTop55vh}>
                                <div className='flexrow' style={marginBottom65vh}>
                                    <label htmlFor="classvalue" className="section" style={marginLeft55vw} >Subject</label>
                                    <Field as="select" name="subject" className="shortbox"  style={marginLeft120vw} placeholder="Your section">
                                    <option value="" defaultValue>{" "}-select-</option>
                                    {subjects.map((subject,index)=><option key={index} value={subject.name}>{subject.name}</option>)}
                                    </Field> 
                                    <label className='section' style={marginLeft380vw}> Unit/Chapter/Topic </label>
                                    <Field type='text' name='topic' className='shortbox' style={marginLeft480vw} placeholder='Type here' />
                                </div>
                                <div>
                                    <label className='section' style={marginLeft55vw}> Enter Marks</label>
                                    <Field type='text' name='marks' className='shortbox' style={marginLeft120vw} placeholder='Type here' />
                                </div>
                            </section>
                            
                        
                            <div className='tablelistArea' style={{marginTop:'7%',width:'70vw'}}>
                                <div className='headertableList'>
                                    <p style={image100percent}>S No</p>
                                    <p style={image450percent}>Student's Name</p>
                                    <p style={image450percent}>Score Out of 20</p>
                                    
                                </div>
                        
                                <div className="bodytableList">
                                  <Scrollbars>   
                                    {studentArray&& studentArray.map((student,index) => (        
                                        <div key={index} className='flexrow'>
                                            <p style={image100percent}>{index+1}</p>
                                            <p style={image450percent}>{student.name}</p>
                                            <p style={image450percent}>{student.writtengrade}</p>
                                            
                                        </div>
                                    ))}
                                  </Scrollbars>
                          
                                </div>
                            </div>
                            <div className="flexrow" style={{marginLeft:"15vw",marginTop:"2vh"}}>
                                <button type="submit" className="button">Edit</button>
                                <button type="button" className="button">Close</button>
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

const mapStateToProps = (state) => ({
  account: state.account,
})

export default connect(mapStateToProps)(EnterMarks);
