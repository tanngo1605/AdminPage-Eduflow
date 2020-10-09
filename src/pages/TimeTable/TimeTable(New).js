import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, useField, useFormik, useFormikContext, ErrorMessage } from 'formik';
import { Scrollbars } from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
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
    fontsize12vw
} from '../../styles/marginStyles'
import { image100vw } from '../../styles/imageStyles'
// import styled from '@emotion/styled';
import * as Yup from 'yup';
// import TimeTable from './TimeTable';

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
const SignupSchema = Yup.object().shape({
    class: Yup.string()
        .required('Required'),
    section: Yup.string()
        .required('Required'),
    day: Yup.date()
        .required('Required'),
    period: Yup.string().required('Required'),
});
const FormiForm = () => {
    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{
                    class: '', section: '', day: '',
                    period: arrayOfPeriods
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 4));
                        // alert(JSON.stringify(values.period[0].startTime, null, 4))
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {props => (
                    // console.log(Array.of(props.values.period).map(el => console.log(el))),\

                    <form onSubmit={props.handleSubmit}>
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
                                                    <Field as="select" required name="class" className='shortbox' style={marginLeft130vw}>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='lime'>Lime</option>
                                                        <option value='coconut'>Coconut</option>
                                                        <option value='mango'>Mango</option>
                                                    </Field>
                                                    {props.errors && props.touched && (
                                                        <div className="error">{props.error}</div>)}
                                                    {/* <select className='shortbox' required onChange={props.handleChange} value={props.values.class} style={marginLeft130vw} id='class'>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='lime'>Lime</option>
                                                        <option value='coconut'>Coconut</option>
                                                        <option value='mango'>Mango</option>
                                                    </select> */}
                                                </div>
                                                <div className='flexrow' style={marginLeft380vw}>
                                                    <p className='section'>Enter Section</p>
                                                    <select className='shortbox' required onChange={props.handleChange} style={marginLeft130vw} id='section'>
                                                        <option value="" defaultValue>{" "}-select-</option>
                                                        <option value='maths'>maths</option>
                                                        <option value='english'>English</option>
                                                        <option value='science'>Science</option>
                                                        <option value='history'>History</option>
                                                        <option value='pe'>PE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flexrow' style={marginTop45vh}>
                                                <p className='section'>Choose Day</p>
                                                {/* <DatePickerField name='day' /> */}
                                                <DayPickerInput required className='shortbox' format="D/M/YYYY" style={marginLeft130vw} onDayChange={(e) => props.setFieldValue('day', Intl.DateTimeFormat('en-GB').format(e))} value={props.values.day} placeholder='- select -' />
                                                {props.errors.day && props.touched.day ? (
                                                    <div className="error" style={{ color: "red", fontSize: "12px", position: "relative", top: "40px", left: "15px" }}>{props.errors.day}</div>
                                                ) : null}
                                                <ErrorMessage name="name" />
                                            </div>
                                        </div>

                                        <div className='eventlistArea' style={{ marginTop: '8vh', paddingTop: '2%', width: '75vw' }}>
                                            <Scrollbars>
                                                <form>
                                                    {props.values.period.map((el, index) =>
                                                        <div className='flexrow' key={index} style={Object.assign({}, marginBottom125vh, marginLeft55vw)}>
                                                            <div className='flexcolumn'>
                                                                <p className='section' style={fontsize12vw}>Period</p>
                                                                <p className='section' style={{ marginLeft: '1.2vw', marginTop: '5.5vh' }}>{index + 1}</p>
                                                            </div>
                                                            <div className='flexcolumn' style={marginLeft130vw} >
                                                                <label htmlFor='starttime' className='section'>Start time: </label>
                                                                {/* <input type='time' id='starttime' className='shortbox'
                                                                    style={Object.assign({}, marginTop55vh, image100vw)}
                                                                    onChange={(event) => {
                                                                        props.handleChange(event.target.value);
                                                                        console.log(props.values.period[index].starttime, '|', props.handleChange(event.target.value))
                                                                    }}
                                                                // value={props.values.period[index].starttime} 
                                                                /> */}
                                                                <Field type='time' name={`period[${index}].starttime`} className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} />
                                                                {props.errors.period[`${index}`].starttime && props.touched.period[`${index}`].starttime ? (<div>{props.errors.starttime}</div>) : null}
                                                                <ErrorMessage name={`period[${index}].starttime`} />
                                                            </div>
                                                            <div className='flexcolumn' style={marginLeft150vw}  >

                                                                <label htmlFor='endtime' className='section'>End time: </label>
                                                                {/* <input type='time' id='endtime' className='shortbox'
                                                                    style={Object.assign({}, marginTop55vh, image100vw)}
                                                                    onChange={(event) => props.handleChange(event)}
                                                                    value={props.values.period[index].endtime} /> */}
                                                                <Field type='time' name={`period[${index}].endtime`} className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} />
                                                                {props.errors.endtime && <div>{props.errors.endtime}</div>}
                                                            </div>
                                                            <div className='flexcolumn' style={marginLeft200vw}>
                                                                <p className='section' style={fontsize12vw}>Subject</p>
                                                                <Field as="select" name={`period[${index}].subject`} className="shortbox" style={marginTop55vh}>
                                                                    <option value="" defaultValue>{" "}-select-</option>
                                                                    {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)}
                                                                </Field>
                                                                {/* <select className="shortbox" required id='subject' style={marginTop55vh} onChange={(event) => props.handleChange(event.target.value)} value={props.values.period[index].subject} > */}
                                                                {/* <option value="" defaultValue>{" "}-select-</option>
                                                                    {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)} */}
                                                                {/* </select> */}
                                                            </div>
                                                        </div>)}
                                                </form>

                                                <button className='buttonshownothing'
                                                    onClick={() => { numOfPeriods = numOfPeriods + 1; this.setState({ trigger: !this.state.trigger }) }}
                                                    style={{ fontSize: '1vw', marginLeft: '45%', marginBottom: '1vh', background: 'white' }}> + Add More </button>
                                            </Scrollbars>
                                        </div>


                                        <div className='flexrow' style={marginTop45vh}>

                                            <input type='submit' value='Save' className='button' style={{ marginLeft: '27%' }} />
                                            <input type='reset' value='Reset' className='button' />
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div >
    )

}
// function FormikForm() {
//     const formik = useFormik({
//         initialValues: {
//             // key: '',
//             class: '',
//             section: '',
//             day: '',
//             period: [
//                 {
//                     1: {
//                         starttime: '',
//                         endtime: '',
//                         subject: ''
//                     },
//                     2: {
//                         starttime: '',
//                         endtime: '',
//                         subject: ''
//                     },
//                     3: {
//                         starttime: '',
//                         endtime: '',
//                         subject: ''
//                     },
//                     4: {
//                         starttime: '',
//                         endtime: '',
//                         subject: ''
//                     }
//                 }
// //             ]
//         }
//     })
//     // end of formik
//     // console.log(formik.values.period[0]);
//     let a = Array.of(formik.values.period[0])
//     console.log(a.length);
//     formik.values.period.map(el => console.log(el['1']))
//     // console.log(a);
//     return (
//         <div className='dashboard'>
//             <div className='flexrow'>
//                 <Drawer />
//                 <div className='flexcolumn'>
//                     <Header />
//                     <div className='form' >

//                         <h1 className='titleform'>Time table</h1>

//                         <div className='flexcolumn' style={{ marginLeft: '1.5vw', marginTop: '3%' }}>
//                             <div className='flexrow'>
//                                 <div className='flexrow' style={marginBottom65vh}>
//                                     <p className='section'>Enter Class</p>
//                                     <select className='shortbox' required onChange={formik.handleChange} value={formik.values.class} style={marginLeft130vw} id='class'>
//                                         <option value="" defaultValue>{" "}-select-</option>
//                                         <option value='lime'>Lime</option>
//                                         <option value='coconut'>Coconut</option>
//                                         <option value='mango'>Mango</option>
//                                     </select>
//                                 </div>
//                                 <div className='flexrow' style={marginLeft380vw}>
//                                     <p className='section'>Enter Section</p>
//                                     <select className='shortbox' required onChange={formik.handleChange} value={formik.values.section} style={marginLeft130vw} id='section'>
//                                         <option value="" defaultValue>{" "}-select-</option>
//                                         <option value='maths'>maths</option>
//                                         <option value='english'>English</option>
//                                         <option value='science'>Science</option>
//                                         <option value='history'>History</option>
//                                         <option value='pe'>PE</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className='flexrow' style={marginTop45vh}>
//                                 <p className='section'>Choose Day</p>
//                                 {/* <DatePickerField name='day' /> */}
//                                 <DayPickerInput className='shortbox' style={marginLeft130vw} onDayChange={(e) => formik.setFieldValue('day', e.toLocaleDateString())} value={formik.values.day} placeholder='- select -' />
//                             </div>
//                         </div>

//                         {/* {this.displayPeriod()} */}

//                         <div className='flexrow' style={marginTop45vh}>

//                             <input type='submit' value='Save' className='button' style={{ marginLeft: '27%' }} />
//                             <input type='reset' value='Reset' className='button' />
//                         </div>


//                     </div>
//                 </div>

//             </div>
//         </div>
//     )

export default FormiForm
