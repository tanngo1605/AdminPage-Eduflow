
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Formik, Form, Field } from "formik";
import { addSectionAndClass } from "../../../redux/Action/SchoolAction";
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";
import { loadTeacherData } from "../../../redux/Stores/TeacherReducer";
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import { initCreateClassSection } from '../../../userData/InitialData/School'
import { createClassSectionScema } from "../../../userData/ValidationSchema/SchoolSchema"
import { marginBottom20vh } from '../../../styles/marginStyles'

const CreateClass = (props) => {

  let teachers = props.teacher.filteredTeachers;

  useEffect(() => {
    const getUserInfo = () => {
      props.dispatch(getCurrentUser())
      props.dispatch(loadTeacherData());

    }
    getUserInfo();
  }, [])

  const handleSubmit = (values) => {

    try {
      const userData = props.account.userData.userdata.data.data;
      addSectionAndClass(userData.school.uuid, userData.token, values)
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
          <div className="form">
            <h1 className='titleform' style={marginBottom20vh}>Create a new class</h1>
            <Formik
              initialValues={initCreateClassSection}
              validationSchema={createClassSectionScema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm()
              }}
            >
              {(propsForm) => (
                <Form>
                  <div className='flexrow' style={marginBottom20vh}>
                    <label className="section">Enter Class </label>
                    <Field type="text" id='class' name="classvalue" className="shortbox" placeholder="Type here" />
                  </div>
                  <div className='flexrow' style={marginBottom20vh}>
                    <label className='section'>Enter Section </label>
                    <Field type="text" id='class' name="section" className="shortbox" placeholder="Type here" />

                  </div>
                  <div className='flexrow' style={marginBottom20vh}>
                    <label className='section'>Room No</label>
                    <Field type="text" id='class' name="roomno" className="shortbox" placeholder="Type here" />
                  </div>
                  <div className='flexrow' style={marginBottom20vh}>
                    <label className='section'>Class Teacher Name </label>
                    <Field as="select" name="teacher" className="shortbox" placeholder="Your section" >
                      <option value="" defaultValue>{" "}-select-</option>
                      {teachers && teachers.map((teacher, index) => <option key={index} value={teacher.value}>{teacher.name}</option>)}
                    </Field>
                  </div>

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
  teacher: state.teacher
})
export default connect(mapStateToProps)(CreateClass);