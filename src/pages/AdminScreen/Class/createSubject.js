import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";
import { createSubject } from "../../../redux/Action/SchoolAction";
import { Formik, Form, Field } from "formik";
import Drawer from '../../../component/Drawer/Drawer';
import Header from '../../../component/Header/HeaderAdmin';
import { createSubjectSchema } from "../../../userData/ValidationSchema/SchoolSchema"
import { initialSubjectValue } from '../../../userData/InitialData/School'
import { marginBottom20vh } from '../../../styles/marginStyles'


const CreateSubject = (props) => {
  useEffect(() => {
    function getUserInfo() {
      props.dispatch(getCurrentUser())
    }
    getUserInfo();
  }, [])


  const handleSubmit = (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      createSubject(userData.school.uuid, userData.token, values)
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
                  <>
                    <div className='flexrow' style={marginBottom20vh}>
                      <label className='section'>Enter Subject Name</label>
                      <Field type="text" name="name" className="shortbox" placeholder="Type here" />
                    </div>
                    <div className='flexrow'>
                      <label className='section'>Enter Section</label>
                      <Field component='textarea' name='description' className="shortbox" style={{ height: "10vh" }} placeholder="Type here" />
                    </div>
                  </>



                  <div className="flexrow" style={{ marginLeft: "15vw", marginTop: "10vh" }}>
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