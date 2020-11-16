import React from "react";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";

import { image300percent, image200percent} from "../../../styles/imageStyles";
import { NavLink } from "react-router-dom"
import {
    marginLeft60vw,marginLeft50vw,marginTop20vh, marginTop45vh,

} from '../../../styles/marginStyles'
const studentData =
    [

        { name: "Akhil", subject: "Math", written: "50", viva: "50" },
        { name: "Akhil", subject: "English", written: "40", viva: "30" }

    ]
let totalWritten = 0
let totalViva = 0
let total = 0
studentData && studentData.map((student, index) =>
    (
        total = 50 * studentData.length,
        totalWritten += Number(student.written),
        totalViva += Number(student.viva))
)
const StudentResult = () => {
        return (
            <div className="dashboard">
                <div className="flexcolumn">
                    <HeaderTeacher/>
                    <div style={marginLeft60vw}>
                        <div className="flexrow" style={marginTop20vh}>
                            <h5>Prev</h5>
                            <h5 style={{ marginLeft: '75vw'}}>Next</h5>
                        </div>

                        <div className="flexrow" style={marginTop20vh}>
                            <div className='inputsection' style={marginLeft50vw}>Student</div>
                            <div className="shortbox">{studentData[0].name}</div>
                        </div>
                        <div className="tablelistArea" style={{width:'85vw',marginTop:'2vh'}}>
                            <div className="headertableList">
                                <p style={image200percent}>Subject</p>
                                <p style={image300percent}>Written</p>
                                <p style={image300percent}>Viva</p>
                            </div>
                            <div className="bodytableList" >
                                {studentData && studentData.map((student, index) =>
                                    <div className="flexrow" key={index} >
                                        <p style={image200percent}>{student.subject}</p>
                                        <p style={image300percent}>{student.written}</p>
                                        <p style={image300percent}>{student.viva}</p>
                                    </div>
                                )}
                            </div>
                            <section style={marginLeft50vw}>
                                <div className="flexrow" style={marginTop20vh}>
                                    <div className="inputsection" >Total Marks obtained</div>
                                    <div className="inputshortbox">{totalWritten}</div>
                                    <div className="inputshortbox">{totalViva}</div>
                                </div>
                                <div className="flexrow" style={marginTop20vh}>
                                    <div className="inputsection">Total</div>
                                    <div className="inputshortbox">{total}</div>
                                    <div className="inputshortbox">{total}</div>
                                </div>
                                <div className="flexrow" style={marginTop20vh}>
                                    <div className="inputsection">Percentage</div>
                                    <div className="inputshortbox" >{parseFloat(total / totalWritten).toFixed(2)}%</div>
                                    <div className="inputshortbox" >{parseFloat(total / totalViva).toFixed(2)}%</div>
                                </div>
                            </section>
                            <button className="button" style={{ marginLeft: "35%", marginTop: "2vh" }}>Approve</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

// const mapStateToProps = (state) => ({
//     student: state.student,
// });

export default StudentResult;
