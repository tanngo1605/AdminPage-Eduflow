import React, { useEffect} from "react";
import {connect} from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import schoolSchema from "../../userData/ValidationSchema/SchoolSchema"
import schoolInitialValue from '../../userData/InitialData/School'
import {marginTop55vh,marginLeft120vw,marginLeft55vw} from "../../styles/marginStyles";
import subjects from '../../userData/GlobalData/subjectData'
import {image300percent,image100percent} from '../../styles/imageStyles'

const studentArray = [
    {name:'Khanh',writtengrade:30,practicalgrade:50}
]

const SchoolResults =  (props) => {
  

  const getSchoolData = async ()=>{
    props.dispatch(getCurrentUser())

  }

  useEffect(getSchoolData,[]) 


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
                <h1 className="titleform">School Results</h1>
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
                            <section className='flexrow' style={marginTop55vh}>
                                <label htmlFor="classvalue" className="section" style={marginLeft55vw} >Subject</label>
                                <Field as="select" name="subject" className="shortbox"  style={marginLeft120vw} placeholder="Your section">
                                <option value="" defaultValue>{" "}-select-</option>
                                {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
                                </Field> 
                            </section>
                            
                        
                            <div className='eventlistArea' style={{marginTop:'7%',width:'70vw'}}>
                                <div className='headereventList'>
                                    <p style={image100percent}>S No</p>
                                    <p style={image300percent}>Student's Name</p>
                                    <p style={image300percent}>Written Out of 100</p>
                                    <p style={image300percent}>Practical Out of 50</p> 
                                </div>
                        
                                <div className="bodyeventList">
                                  <Scrollbars>   
                                    {studentArray&& studentArray.map((student,index) => (        
                                        <div key={index} className='flexrow'>
                                            <p style={image100percent}>{index+1}</p>
                                            <p style={image300percent}>{student.name}</p>
                                            <p style={image300percent}>{student.writtengrade}</p>
                                            <p style={image300percent}>{student.practicalgrade}</p>
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
export default connect(mapStateToProps)(SchoolResults);
