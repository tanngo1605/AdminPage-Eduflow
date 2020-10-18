import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, FieldArray, useFormik, useFormikContext, ErrorMessage } from 'formik';
import { Scrollbars } from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
// import getTimeTableData from "../../redux/Action/TimeTableAction"
import {
    marginBottom125vh,
    marginBottom65vh,
    marginLeft380vw,
    marginLeft200vw,
    marginLeft150vw,
    marginLeft130vw,
    marginLeft55vw,
    marginTop55vh,
    marginTop45vh,
    marginLeft320vw,
    fontsize12vw
} from '../../styles/marginStyles'
import './animation.css'
import { image100vw } from '../../styles/imageStyles'
// import styled from '@emotion/styled';
import TimeTableSchema from '../../userData/ValidationSchema/TimeTableSchema'
import * as Yup from 'yup';
import TimetableSchema from '../../userData/ValidationSchema/TimeTableSchema';
// import TimeTable from './TimeTable';
import { FcHighPriority } from "react-icons/fc";
import ServerDomain from "../../serverdomain";
import axios from 'axios';
import addTimeTable from "../../redux/Action/TimeTableAction"
const numOfPeriods = 4
const arrayOfPeriods = []
for (let i = 0; i < numOfPeriods; i++) {
    arrayOfPeriods.push({
        starttime: '',
        endtime: '',
        subject: ''
    })
}
const subjects = [
    { subject: 'Math', value: 'math' },
    { subject: 'History', value: 'history' },
    { subject: 'Math', value: 'math' },

]



const FormiForm = () => {
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

    return (

        <div>


            <Formik
                initialValues={{
                    class: '', section: '', day: '',
                    period: arrayOfPeriods
                }}
                validationSchema={TimetableSchema}
                onSubmit={(values, actions) => {
                    console.log(values);

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 4));
                        // alert(JSON.stringify(values.period[0].startTime, null, 4))
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {props => (
                    // console.log(Array.of(props.values.period).map(el => console.log(el))),\

                    // console.log(addTimetable("5eb14baa-4784-40d1-98b1-425e3f3cd8cb", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjozLCJzY2hvb2xJZCI6MSwiaWF0IjoxNjAzMDM2NDYxLCJleHAiOjE2MDMxMjI4NjF9._66N-jaHsrZ1jBYA2h_TI1F4Rn9thuhGA9GcixesDXI", {
                    //     "period": "2",
                    //     "day": "tuesday",
                    //     "startTime": "22:22",
                    //     "endTime": "22:22",
                    //     "class": "ONE",
                    //     "section": "A"

                    // console.log(dataof()),
                    // }).then(res => { console.log(res); })),
                    <Form>
                        {/* <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        /> */}
                        {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
                        <div className='dashboard'>
                            <div className='flexrow'>
                                <Drawer />
                                <div className='flexcolumn'>
                                    <Header />

                                    <div className='form' >


                                        <h1 className='titleform'>Time table</h1>

                                        <div className='flexcolumn' style={{ marginLeft: '1.5vw', marginTop: '3%' }}>
                                            <div className='flexrow'>
                                                <div className='flexrow' style={marginBottom65vh}>
                                                    {/* {console.log(props.errors.class)} */}
                                                    <p className='section'>Enter Class</p>
                                                    <div style={{ position: "relative" }}>
                                                        <Field as="select" name="class" className='shortbox' style={marginLeft130vw}>
                                                            <option value="" defaultValue>{" "}-select-</option>
                                                            <option value='lime'>Lime</option>
                                                            <option value='coconut'>Coconut</option>
                                                            <option value='mango'>Mango</option>
                                                        </Field>
                                                        {/* {props.errors.class && props.touched.class ? (
                                                            <div className="error" style={{ color: "red", fontSize: "12px", position: "relative", top: "40px", left: "200px", position: "absolute" }}>{props.errors.day}</div>
                                                        ) : null} */}
                                                        <div className="errMessOuter" style={props.errors.class ? null : { display: "none" }}>
                                                            <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                            <ErrorMessage name="class" />
                                                        </div>
                                                    </div>

                                                    {/* <ErrorMessage name="class" /> */}
                                                    {/* <select className='shortbox' required onChange={props.handleChange} value={props.values.class} style={marginLeft130vw} id='class'>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='lime'>Lime</option>
                                                        <option value='coconut'>Coconut</option>
                                                        <option value='mango'>Mango</option>
                                                    </select> */}
                                                </div>
                                                <div className='flexrow' style={marginLeft380vw}>
                                                    <p className='section'>Enter Section</p>
                                                    <div style={{ position: "relative" }}>
                                                        <Field as="select" name="section" className='shortbox' style={marginLeft130vw}>
                                                            <option value="" defaultValue>{" "}-select-</option>
                                                            <option value='maths'>maths</option>
                                                            <option value='english'>English</option>
                                                            <option value='science'>Science</option>
                                                            <option value='history'>History</option>
                                                            <option value='pe'>PE</option>
                                                        </Field>
                                                        {/* {props.errors.section && props.touched.section ? (
                                                            <div className="error" style={{ color: "red", fontSize: "12px", position: "relative", top: "40px", left: "200px", position: "absolute" }}>{props.errors.day}</div>
                                                        ) : null} */}
                                                        <div className="errMessOuter" style={props.errors.section ? null : { display: "none" }}>
                                                            <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                            <ErrorMessage name="section" />
                                                        </div>

                                                    </div>

                                                    {/* <ErrorMessage name="section" /> */}
                                                    {/* <select className='shortbox' onChange={props.handleChange} style={marginLeft130vw} id='section'>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='maths'>maths</option>
                                                        <option value='english'>English</option>
                                                        <option value='science'>Science</option>
                                                        <option value='history'>History</option>
                                                        <option value='pe'>PE</option>
                                                    </select> */}

                                                </div>
                                            </div>
                                            <div className='flexrow' style={marginTop45vh}>
                                                <p className='section'>Choose Day</p>
                                                {/* <DatePickerField name='day' /> */}
                                                <div style={{ position: "relative" }}>
                                                    <DayPickerInput required className='shortbox' format="D/M/YYYY" style={{ position: "absolute", marginLeft: "13vw" }} onDayChange={(e) => props.setFieldValue('day', Intl.DateTimeFormat('en-GB').format(e))} value={props.values.day} placeholder='- select -' />
                                                    {/* {props.errors.day && props.touched.day ? (
                                                        <div className="error" style={{ color: "red", fontSize: "12px", position: "relative", top: "40px", left: "200px", position: "absolute" }}>{props.errors.day}</div>
                                                    ) : null} */}
                                                    <div className="errMessOuter" style={props.errors.day ? null : { display: "none" }}>
                                                        <FcHighPriority className="iconErrMess" size="1.5vw" />
                                                        <ErrorMessage name="day" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='eventlistArea' style={{ marginTop: '12vh', paddingTop: '2%', width: '75vw' }}>
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
                                                                            <p className='section' style={{ marginLeft: '1.2vw', marginTop: '5.5vh' }}>{index + 1}</p>
                                                                        </div>
                                                                        <div className='flexcolumn' style={marginLeft130vw} >
                                                                            <label htmlFor='starttime' className='section'>Start time: </label>


                                                                            <Field type='time' name={`period[${index}].starttime`} className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} />
                                                                            {/* <ErrorMessage className="errMess" name={`period[${index}].starttime`} /> */}
                                                                            {/* <div className="errMess" >
                                                                                <ErrorMessage name={`period[${index}].starttime`} />
                                                                            </div> */}
                                                                            {/* {props.errors.period && props.touched.period ? <div>{props.errors.period[index].starttime}</div> : null} */}

                                                                        </div>
                                                                        <div className='flexcolumn' style={marginLeft150vw}  >

                                                                            <label htmlFor='endtime' className='section'>End time: </label>

                                                                            <Field type='time' name={`period[${index}].endtime`} className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} />
                                                                            {/* {props.errors.endtime && <div>{props.errors.endtime}</div>} */}
                                                                            {/* <div className="errMess" >
                                                                                <ErrorMessage name={`period[${index}].endtime`} />
                                                                            </div> */}
                                                                        </div>
                                                                        <div className='flexcolumn' style={marginLeft200vw}>
                                                                            <p className='section' style={fontsize12vw}>Subject</p>
                                                                            <Field as="select" name={`period[${index}].subject`} className="shortbox" style={marginTop55vh}>
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
                                                    onClick={() => { numOfPeriods = numOfPeriods + 1; this.setState({ trigger: !this.state.trigger }) }}
                                                    style={{ fontSize: '1vw', marginLeft: '45%', marginBottom: '1vh', background: 'white' }}> + Add More </button>
                                            </Scrollbars>
                                            <div className="errMessOuter" style={{ top: "48vw", left: "20vw", display: props.errors.period ? null : "none" }}>{props.errors.period ? (<><FcHighPriority className="iconErrMess" size="1.5vw" /><div style={{ display: "contents" }}>Need at least {numOfPeriods} period</div></>) : null}</div>
                                        </div>


                                        <div className='flexrow' style={marginTop45vh}>

                                            <input type='submit' value='Save' className='button' style={{ marginLeft: '27%' }} />
                                            <input type='reset' value='Reset' className='button' />
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div >
    )

}


export default FormiForm
