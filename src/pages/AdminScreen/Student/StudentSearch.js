import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik,Form,Field} from "formik";
import Dropzone from "react-dropzone";
import { NavLink } from "react-router-dom";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import {loadData,filterByValue,deleteData} from "../../../redux/Stores/StudentReducer";
import { BsPencilSquare, BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {studentSearchSchema} from "../../../userData/ValidationSchema/StudentSchema"
import {studentSearchInitialValue} from '../../../userData/InitialData/Student'
import * as xlsx from "xlsx";
import {addaProfileAttachment,marginLeft100vw,marginTop20vh} from "../../../styles/marginStyles"
import {image300percent,image200percent,image100percent,image130vw} from "../../../styles/imageStyles";
const StudentSearch = (props) => {
  
  const loaddata= () => {
    props.dispatch(loadData());
    }
    
  useEffect(loaddata,[]) 

  
  const onDrop = (files) => {
    if (files.length === 0 || files.length > 1) return;
    var f = files[0];
    console.log(files);
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = xlsx.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = xlsx.utils.sheet_to_json(ws, { header: 1 });
      console.log(dataParse);
    };
    reader.readAsBinaryString(f);
    
  };

  
  const handleSearch = (event) => {

    
    props.dispatch(filterByValue({ value: event }))
    
  }



    let students = props.student.filteredStudents;

    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer />
          <div className='flexcolumn'>
            <Header />
            <div className='form'>

              <h1 className='titleform'>Student Info</h1>
              <NavLink exact to={{ pathname: '/student/profile' }} className='attachment' style={addaProfileAttachment}>
                <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon' />
                <p style={{ color: '#FFFFFF' }}> Add a student </p>
              </NavLink>
              <Formik
                      initialValues={studentSearchInitialValue}
                      validationSchema={studentSearchSchema}
                > 
                  {(propsForm)=>(
                    <Form className="flexcolumn" onChange={()=>handleSearch(propsForm.values)} style={{marginBottom:"5vh"}}>
                      <div className="flexrow">
                        <div className="flexcolumn" style={marginLeft100vw} >
                          <label htmlFor="name" className="section" style={image130vw}>Enter Student"s Name </label>
                          <Field type="text" name="name" className="shortbox" placeholder="Type here" />
                      </div>
                        <div className="flexcolumn" style={marginLeft100vw}>
                          <label htmlFor="classvalur" className="section" style={image130vw}>Enter Class</label>
                          <Field type="text" name="classvalue" className="shortbox" placeholder="Type here" />
                        </div>
                      </div>
                      <div className="flexrow" style={marginTop20vh}>
                        <div className="flexcolumn" style={marginLeft100vw}>
                          <label htmlFor="section" className="section" style={image130vw}>Enter Section</label>
                          <Field type="text" name="section" className="shortbox" placeholder="Type here" />
                        </div>
                        <div className="flexcolumn" style={marginLeft100vw}>
                          <label htmlFor="subject" className="section" style={image130vw}>Enter Subject</label>
                          <Field type="text" name="subject" className="shortbox" placeholder="Type here" />
                        </div>
                      </div>
                      <div className="flexrow" style={{marginTop:"3vh",marginLeft:"21vw"}}>
                        <Dropzone name="attachment" onDrop={(files)=> propsForm.setFieldValue("attachment",files)}>
                          {({getRootProps, getInputProps}) => (
                            <section className="flexrow">
                              <div {...getRootProps({className: "attachment"})}>
                                <input {...getInputProps()} />
                                  <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                                  <p>Import file</p>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                        <div className="attachment" style={{marginLeft:"5vw"}}>
                          <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                          <p>Export file</p>
                        </div>
                      </div>
                    </Form>
                  )}
              </Formik>
              <div className='tablelistArea' style={{ width: '75vw'}}>
                <div className='headertableList'>
                  <p style={image100percent}>User ID</p>
                  <p style={image300percent}>Name of Student</p>
                  <p style={image100percent}>Class</p>
                  <p style={image100percent}>Section</p>
                  <p style={image200percent}>Delete</p>
                  <p style={image200percent}>Edit</p>
                </div>

                <div className="bodytableList">
                  {students && students.map((student,index) =>
                    <div className="flexrow" key={index} >

                      <p style={image100percent}>{index+1}</p>
                      <p style={image300percent}>{student.name}</p>
                      <p style={image100percent}>{student.classvalue}</p>
                      <p style={image100percent}>{student.section}</p>
                      <div className='itemcenter' style={image200percent}>
                        <MdDeleteForever size='1.5vw' onClick={() => props.dispatch(deleteData(student))} />
                      </div>
                      <div className='itemcenter' style={image200percent}>
                        <NavLink exact to={{ pathname: '/student/profile', studentdata: student }}>
                          <BsPencilSquare size='1.3vw' color='black' />
                        </NavLink>
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

export default React.memo(connect(mapStateToProps)(StudentSearch));
