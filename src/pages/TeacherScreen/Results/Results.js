import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {getSectionAndClass} from "../../../redux/Action/SchoolAction";
import { Formik,Form,Field} from "formik";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import {schoolSchema} from "../../../userData/ValidationSchema/SchoolSchema"
import {schoolInitialValue} from '../../../userData/InitialData/School'
import {
    marginBottom65vh,
    marginTop55vh,
    marginLeft450vw,
    marginLeft380vw,
    marginLeft130vw,
    marginLeft100vw,
    marginLeft55vw} from "../../../styles/marginStyles";


const ClassResults =  (props) => {
  let [classsection,setClassSection] = useState([]);
  

  useEffect(()=>{
    async function getClassSection(){
        props.dispatch(getCurrentUser())
        try {
          const userData=props.account.userData.userdata.data.data;
          const sectionclassData = await getSectionAndClass(userData.school.uuid,userData.token)
          
          setClassSection( sectionclassData )
        }
        catch(err){
          console.log(err)
        }
    }
    getClassSection()
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
                                    <Field as="select" name="classvalue" className="shortbox" placeholder="Select Class">
                                      <option value="" defaultValue>{" "}-select-</option>
                                      {classsection&&classsection.map((e,index)=><option key={index} value={e.class}>{e.class}</option>)}
                                    </Field>
                                    {/* Section*/}
                                    <label htmlFor="section" className="section" style={marginLeft380vw}>Section</label>
                                    <Field as="select" name="section" className="shortbox" placeholder="Select Section">
                                      <option value="" defaultValue>{" "}-select-</option>
                                      {classsection.map((e,index)=><option key={index} value={e.section}>{e.section}</option>)}
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
