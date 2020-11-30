import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Drawer from '../../../component/Drawer/Drawer';
import Header from '../../../component/Header/HeaderAdmin';
import createSubjectSchema from "../../../userData/ValidationSchema/SubjectSchema"
import initialSubjectValue from '../../../userData/InitialData/Subject'
import { marginBottom65vh, marginTop45vh, marginLeft50vw } from '../../../styles/marginStyles'
import { image450percent, image200percent } from '../../../styles/imageStyles'
import classes from '../../../userData/GlobalData/classData';
import sections from '../../../userData/GlobalData/sectionData';
import subjects from '../../../userData/GlobalData/subjectData';
import teachers from '../../../userData/GlobalData/teacherData';
import { FcHighPriority } from "react-icons/fc";

const CreateSubject = (props) => {

  var [numperiod, setNumPeriod] = useState(6)

  useEffect(() => {
    function getUserInfo() {
      props.dispatch(getCurrentUser())
    }
    getUserInfo();
  }, [])

  const assignSubject = (teachers, propsForm) => {
    let period = [];

    for (let i = 1; i <= numperiod; i++)
      period.push(

        <div className='flexrow' key={i} style={marginBottom65vh}>
          <p style={image200percent}>{i}</p>
          <div className="flexcolumn" style={image450percent}>
            <Field as="select" name="subject" className="shortbox" placeholder="Your class">
              <option value="" defaultValue>{" "}-select-</option>
              {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)}
            </Field>
            <div style={{ position: "absolute", left: "50px", }}>
              <div className="errMessOuter " style={propsForm.errors.subject && propsForm.touched.subject ? null : { display: "none" }}>
                <FcHighPriority className="iconErrMess" size="1.5vw" />
                <ErrorMessage name="subject" />
              </div>
            </div>
          </div>
          <div className="flexcolumn" style={image450percent}>
            <Field as="select" name="teacher" className="shortbox" placeholder="Your class">
              <option value="" defaultValue>{" "}-select-</option>
              {teachers.map((teacher, index) => <option key={index} value={teacher.value}>{teacher.name}</option>)}
            </Field>
            <div style={{ position: "absolute", left: "520px" }}>
              <div className="errMessOuter " style={propsForm.errors.teacher && propsForm.touched.teacher ? null : { display: "none" }}>
                <FcHighPriority className="iconErrMess" size="1.5vw" />
                <ErrorMessage name="teacher" />
              </div>
            </div>
          </div>
        </div>
      )


    return (
      <section className='tablelistArea' style={{ marginTop: '8vh', width: '75vw' }}>
        <div className='headertableList'>
          <p style={image200percent}>Serial No</p>
          <p style={image450percent}>Enter Subject </p>
          <p style={image450percent}>Assign a teacher</p>
        </div>
        <div className='bodytableList'>
          <Scrollbars>
            {period}
            <p onClick={() => { setNumPeriod(numperiod += 1) }}
              style={{ color: '#0F1E36', fontSize: '1vw' }}> + Add More </p>
          </Scrollbars>
        </div>
      </section>
    )
  }
  const handleSubmit = (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;

    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='dashboard'>
      <div className='flexrow'>
        <Drawer />
        <div className='flexcolumn'>
          <Header {...props} />
          <div className='form' >

            <h1 className='titleform'>Create Subject</h1>
            <Formik
              initialValues={initialSubjectValue}
              validationSchema={createSubjectSchema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm()
              }}
            >
              {(propsForm) => (
                <Form>
                  <div className='flexrow'>
                    <p className='section' style={marginLeft50vw}>Enter Class</p>
                    <div className="flexcolumn">
                      <Field as="select" name="classvalue" className="shortbox" placeholder="Your class">
                        <option value="" defaultValue>{" "}-select-</option>
                        {classes.map((eachclass, index) => <option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                      </Field>
                      <div style={{ position: "absolute", left: "350px" }}>
                        <div className="errMessOuter " style={propsForm.errors.classvalue && propsForm.touched.classvalue ? null : { display: "none" }}>
                          <FcHighPriority className="iconErrMess" size="1.5vw" />
                          <ErrorMessage name="classvalue" />
                        </div>
                      </div>
                    </div>


                    <p className='section' style={marginLeft50vw}>Enter Section</p>
                    <div className="flexcolumn">
                      <Field as="select" name="section" className="shortbox" placeholder="Your class">
                        <option value="" defaultValue>{" "}-select-</option>
                        {sections.map((section, index) => <option key={index} value={section.value}>{section.name}</option>)}
                      </Field>
                      <div style={{ position: "absolute", left: "920px" }}>
                        <div className="errMessOuter " style={propsForm.errors.section && propsForm.touched.section ? null : { display: "none" }}>
                          <FcHighPriority className="iconErrMess" size="1.5vw" />
                          <ErrorMessage name="section" />
                        </div>
                      </div>
                    </div>

                  </div>

                  {assignSubject(teachers, propsForm)}

                  <div className='flexrow' style={{ marginLeft: "20vw", marginTop: "4.5vh" }}>
                    {/* <button>Save</button> <button>Reset</button> */}
                    <button type="submit" className="button">Create</button>
                    <button type="reset" className="button">Reset</button>
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

export default React.memo(connect(mapStateToProps)(CreateSubject));