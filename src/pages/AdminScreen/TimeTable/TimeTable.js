import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, FieldArray, useFormik, useFormikContext, ErrorMessage } from 'formik';
import { Scrollbars } from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../../component/Drawer/Drawer';
import Header from '../../../component/Header/HeaderAdmin';
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";
import { connect } from "react-redux";

// import getTimeTableData from "../../../redux/Action/TimeTableAction"
import {
    marginBottom125vh,
    marginBottom20vh,
    marginLeft200vw,
    marginLeft150vw,
    marginLeft130vw,
    marginLeft55vw,
    marginLeft60vw,
    marginLeft120vw,
    marginTop55vh,
    marginTop45vh,
    fontsize12vw,
    marginBottom55vh
} from '../../../styles/marginStyles'
import './animation.css'
import { image100vw } from '../../../styles/imageStyles'
// import styled from '@emotion/styled';

import * as Yup from 'yup';
import TimetableSchema from '../../../userData/ValidationSchema/TimeTableSchema';
// import TimeTable from './TimeTable';
import { FcHighPriority } from "react-icons/fc";
import classes from '../../../userData/GlobalData/classData'
import subjects from '../../../userData/GlobalData/subjectData'
import sections from '../../../userData/GlobalData/sectionData'
import ServerDomain from "../../../serverdomain";
import axios from 'axios';
import addTimeTable from "../../../redux/Action/TimeTableAction"
let numOfPeriods = 4
let arrayOfPeriods = []
for (let i = 0; i < numOfPeriods; i++) {
    arrayOfPeriods.push({
        starttime: '',
        endtime: '',
        subject: ''
    })
}


const TimeTable = (props) => {
    useEffect(() => {
        function getUserInfo() {
            props.dispatch(getCurrentUser())
        }
        getUserInfo();
    }, [])

    try {
        addTimeTable("5eb14baa-4784-40d1-98b1-425e3f3cd8cb",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjozLCJzY2hvb2xJZCI6MSwiaWF0IjoxNjAzMDM2NDYxLCJleHAiOjE2MDMxMjI4NjF9._66N-jaHsrZ1jBYA2h_TI1F4Rn9thuhGA9GcixesDXI",
            {
                period: "3",
                day: "tuesday",
                startTime: "22:22",
                endTime: "22:22",
                classvalue: "ONE",
                section: "A"
            });
    } catch (error) {
        console.log(error);
    }
    const handleSubmit = (values) => {

        console.log(values);
        try {
            //   const userData =props.account.userData.userdata.data.data;
            console.log(props);
        }
        catch (error) {
            console.log(error)
        }
        //props.dispatch(modifystudentData({ value: values }));
        //props.dispatch(addstudentData({ value: values }));


    };

    return (

        <div>
            <div className='dashboard'>
                <div className='flexrow'>
                    <Drawer />
                    <div className='flexcolumn'>
                        <Header {...props} />
                        <Formik
                            enableReinitialize
                            initialValues={{
                                classvalue: '', section: '', day: '',
                                period: arrayOfPeriods
                            }}
                            validationSchema={TimetableSchema}
                            onSubmit={(values, actions) => {
                                handleSubmit(values)
                                // console.log(values);
                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 4));

                                //     // alert(JSON.stringify(values.period[0].startTime, null, 4))
                                //     actions.setSubmitting(false);
                                // }, 1000);
                            }}
                        >
                            {props => (

                                <Form>
                                    <div className='form' >
                                        <h1 className='titleform'>Time table</h1>
                                        <div className='flexcolumn' style={{ marginLeft: '1.5vw', marginTop: '3%' }}>
                                            <div className='flexrow'>
                                                <div className='flexrow' style={marginBottom55vh}>
                                                    {/* {console.log(props.errors.class)} */}

                                                    {/* <div className='flexrow'> */}
                                                    <div className="flexcolumn">
                                                        <div className="flexrow">
                                                            <label className='section' style={{ width: "25%", marginRight: "5vw" }}>Enter Class</label>
                                                            <Field as="select" name="classvalue" className="shortbox" placeholder="Your class">
                                                                <option value="" defaultValue>{" "}-select-</option>
                                                                {classes.map((eachclass, index) => <option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                                                            </Field>
                                                        </div>
                                                        <div style={{ position: "absolute" }}>{props.errors.classvalue && props.touched.classvalue ?
                                                            (
                                                                <div className="errMessOuter" >
                                                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                                    <ErrorMessage name="classvalue" />
                                                                </div>

                                                            ) : null}</div>

                                                    </div>

                                                    <div className="flexcolumn">
                                                        <div className="flexrow">
                                                            <label className="section" style={{ width: "25%", marginLeft: "5vw", marginRight: "5vw" }}>Enter Section</label>
                                                            <Field as="select" name="section" className="shortbox" placeholder="Your section">
                                                                <option value="" defaultValue>{" "}-select-</option>
                                                                {sections.map((section, index) => <option key={index} value={section.value}>{section.name}</option>)}
                                                            </Field>
                                                        </div>
                                                        <div style={{ position: "absolute" }}>
                                                            {props.errors.section && props.touched.section ?
                                                                (

                                                                    <div className="errMessOuter" style={{ marginLeft: "6vw" }}>
                                                                        <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                                        <ErrorMessage name="section" />
                                                                    </div>

                                                                ) : null}
                                                        </div>

                                                    </div>





                                                    {/* </div> */}

                                                    {/* <ErrorMessage name="class" /> */}
                                                    {/* <select className='shortbox' required onChange={props.handleChange} value={props.values.class} style={marginLeft130vw} id='class'>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='lime'>Lime</option>
                                                        <option value='coconut'>Coconut</option>
                                                        <option value='mango'>Mango</option>
                                                    </select> */}
                                                </div>

                                            </div>
                                            <div className='flexcolumn' >
                                                <div className="flexrow">
                                                    <label className='section'>Choose Day</label>
                                                    <DayPickerInput required name="day" id="day" className='shortbox' format="D/M/Y" onDayChange={(e) => props.setFieldValue('day', Intl.DateTimeFormat('en-GB').format(e))} value={props.values.day} placeholder='- select -' style={{ zIndex: "1" }} />

                                                </div>
                                                <div style={{ position: "absolute" }}>
                                                    {props.errors.day && props.touched.day ?
                                                        (
                                                            <div className="errMessOuter">
                                                                <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                                <ErrorMessage name="day" />
                                                            </div>

                                                        ) : null}
                                                </div>


                                            </div>


                                        </div>
                                        <div className="flexcolumn">
                                            <div className='tablelistArea' style={{ marginTop: '8vh', paddingTop: '2%', width: '75vw' }}>

                                                <Scrollbars>
                                                    <FieldArray
                                                        name="period"
                                                        render={arrayHelper => (
                                                            <div>
                                                                {props.values.period.map(
                                                                    (el, index) =>


                                                                        <div className='flexrow' key={index} style={Object.assign({}, marginBottom125vh, marginLeft55vw)}>
                                                                            <div className='flexcolumn'>
                                                                                <p className='section' style={fontsize12vw}>Period</p>
                                                                                <p className='section' style={{ marginLeft: '1.2vw' }}>{index + 1}</p>
                                                                            </div>
                                                                            <div className='flexcolumn' style={marginLeft130vw} >
                                                                                <label htmlFor='starttime' className='section' style={{ width: "100%" }}>Start time: </label>


                                                                                <Field type='time' name={`period[${index}].starttime`} className='shortbox' style={Object.assign({}, image100vw)} />
                                                                                {/* <ErrorMessage className="errMess" name={`period[${index}].starttime`} /> */}
                                                                                {/* <div className="errMess" >
                                                                                <ErrorMessage name={`period[${index}].starttime`} />
                                                                            </div> */}
                                                                                {/* {props.errors.period && props.touched.period ? <div>{props.errors.period[index].starttime}</div> : null} */}

                                                                            </div>
                                                                            <div className='flexcolumn' style={marginLeft150vw}  >

                                                                                <label htmlFor='endtime' className='section' style={{ width: "100%" }}>End time: </label>

                                                                                <Field type='time' name={`period[${index}].endtime`} className='shortbox' style={Object.assign({}, image100vw)} />
                                                                                {/* {props.errors.endtime && <div>{props.errors.endtime}</div>} */}
                                                                                {/* <div className="errMess" >
                                                                                <ErrorMessage name={`period[${index}].endtime`} />
                                                                            </div> */}
                                                                            </div>
                                                                            <div className='flexcolumn' style={marginLeft200vw}>
                                                                                <p className='section' style={fontsize12vw, { width: "100%" }}>Subject</p>
                                                                                <Field as="select" name={`period[${index}].subject`} className="shortbox" >
                                                                                    <option value="" defaultValue>{" "}-select-</option>
                                                                                    {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)}
                                                                                </Field>
                                                                                {/* <div className="errMess" >
                                                                                <ErrorMessage name={`period[${index}].subject`} />
                                                                            </div> */}
                                                                                {/* <select className="shortbox" required id='subject' style={marginTop55vh} onChange={(event) => props.handleChange(event.target.value)} value={props.values.period[index].subject} > */}
                                                                                {/* <option value="" defaultValue>{" "}-select-</option>
                                                                    {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)} */}
                                                                                {/* </select>  */}
                                                                            </div>
                                                                        </div>)}


                                                            </div>
                                                        )} />
                                                    <button className='buttonshownothing'
                                                        onClick={() => { numOfPeriods = numOfPeriods + 1 }}
                                                        style={{ fontSize: '1vw', marginLeft: '45%', marginBottom: '1vh', background: 'white' }}> + Add More </button>
                                                </Scrollbars>


                                                {/* <div className="errMessOuter" style={{ top: "48vw", left: "20vw", display: props.errors.period ? null : "none" }}>{props.errors.period ? (<><FcHighPriority className="iconErrMess" size="1.5vw" />
                                            </>) : null}</div> */}
                                            </div>
                                            <div style={{ position: "absolute", top: "700px", left: "100px" }}>
                                                {(props.errors.period && props.touched.period) ?
                                                    (
                                                        <div className="errMessOuter">
                                                            <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                            {/* <ErrorMessage name="day" /> */}
                                                            <div style={{ display: "contents", fontSize: "12px" }}>Need at least {numOfPeriods} period</div>
                                                        </div>

                                                    ) : null}
                                            </div>
                                        </div>

                                        <div className='flexrow' style={marginTop45vh}>

                                            <input type='submit' value='Save' className='button' style={{ marginLeft: '27%' }} />
                                            <input type='reset' value='Reset' className='button' />
                                        </div>


                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>


        </div>
    )

}
const mapStateToProps = (state) => ({
    account: state.account,
});

export default React.memo(connect(mapStateToProps)(TimeTable));
// export default TimeTable
