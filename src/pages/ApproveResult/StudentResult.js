import React, { useEffect, Component } from "react";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import imgDemo from "./../../assets/Ellipse.png"
import { loadData, filterByValue, deleteData } from "../../redux/Stores/StudentReducer";
import { connect } from "react-redux";
import { image300percent, image200percent, image100percent, image450percent, image130vw } from "../../styles/imageStyles";
import { NavLink } from "react-router-dom"

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
class StudentResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashboard">
                <div className="flexcolumn">
                    <HeaderTeacher />
                    <div style={{ margin: "2%" }}>
                        <div className="flexrow">
                            <h2 style={{ fontSize: "1.5vw" }}>Prev</h2>
                            <h2 style={{ marginLeft: "85vw", fontSize: "1.5vw" }}>Next</h2>
                        </div>

                        <div className="flexrow">
                            <div className="flexrow" style={{ marginBottom: "4vh", marginTop: "3vh" }}>
                                <div style={{ marginLeft: "7vw", fontSize: "1.2vw" }}>Student</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{studentData[0].name}</div>
                            </div>

                        </div>
                        <div className="tablelistArea">
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
                            <div className="flexrow" style={{ marginTop: "3vh" }}>
                                <div className="section" style={{ fontSize: "1.5vw", marginLeft: "5vw" }}>Total Marks obtained</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{totalWritten}</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{totalViva}</div>
                            </div>
                            <div className="flexrow" style={{ marginTop: "3vh" }}>
                                <div className="section" style={{ fontSize: "1.5vw", marginLeft: "5vw" }}>Total</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{total}</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{total}</div>
                            </div>
                            <div className="flexrow" style={{ marginTop: "3vh" }}>
                                <div className="section" style={{ fontSize: "1.5vw", marginLeft: "5vw" }}>Percentage</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{parseFloat(total / totalWritten).toFixed(2)}%</div>
                                <div className="shortbox" style={{ width: "12vw", marginLeft: "5vw" }}>{parseFloat(total / totalViva).toFixed(2)}%</div>
                            </div>
                            <button className="button" style={{ marginLeft: "35%", marginTop: "2vh" }}>Approve</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     student: state.student,
// });

export default StudentResult;
