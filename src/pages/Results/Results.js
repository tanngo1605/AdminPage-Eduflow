import React, { useEffect} from "react";
import {connect} from 'react-redux';
import { Formik,Form,Field} from "formik";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import schoolSchema from "../../userData/ValidationSchema/SchoolSchema"
import schoolInitialValue from '../../userData/InitialData/School'
import {
    marginBottom65vh,
    marginTop55vh,
    marginLeft450vw,
    marginLeft380vw,
    marginLeft130vw,
    marginLeft100vw,
    marginLeft55vw} from "../../styles/marginStyles";
import classes from '../../userData/GlobalData/classData'
import sections from '../../userData/GlobalData/sectionData'


const ClassResults =  (props) => {
  
  const getUserInfo = () =>{
    
    props.dispatch(getCurrentUser())
  }

  useEffect(getUserInfo,[]) 


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
                <h1 className="titleform">Class Results</h1>
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
                                    
                                    <Field type='checkbox' name='schooltext' className='abc' style={marginLeft100vw} placeholder='Type here' />
                                    <label style={marginLeft130vw} className='section' name='schooltext'>School Test</label>
                                    <Field type='checkbox' name='classtext' className='abc' style={{marginLeft:'31vw'}} placeholder='Type here' />
                                    <label style={marginLeft450vw} className='section' name='classtext'>Class Test</label>
                                </div>
                                <div className='flexrow' style={marginBottom65vh}>
                                    <label className='section' style={marginLeft55vw}>Exam Name</label>
                                    <Field type='text' name='examname' className='shortbox' style={marginLeft130vw} placeholder='Type here' />
                                </div>
                                <div className='flexrow' style={marginBottom65vh}>
                                    <label htmlFor="classvalue" className="section" style={marginLeft55vw}>Class</label>
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
                                <div className='flexrow' style={marginBottom65vh}>
                                    <label className='section' style={marginLeft55vw}>Student's Name</label>
                                    <Field type='text' name='studentname' className='shortbox' style={marginLeft130vw} placeholder='Type here' />
                                </div>
                                
                            </section>
                        
                            <div className="flexrow" style={{marginLeft:"20vw",marginTop:"2vh"}}>
                                <button type="submit" className="button">Save</button>
                                
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

export default connect(mapStateToProps)(ClassResults);
