import React,{useEffect} from "react";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import { loadData } from "../../../redux/Stores/StudentReducer";
import { connect } from "react-redux";
import { image300percent } from "../../../styles/imageStyles";
import {marginLeft50vw,marginLeft20vw} from '../../../styles/marginStyles'
import { NavLink } from "react-router-dom"


const ApproveResult = (props) => {
    useEffect(()=>{
        //props.dispatch(loadData())
    },[])
        
    //let students = props.students;

    return (
        <div className="dashboard">
            <div className="flexcolumn">
                <HeaderTeacher />
                <div style={{ margin: "2%" }}>
                    <h3>Approve Result</h3>
                    <div className="flexrow" style={marginLeft50vw}>
                        <div className='section' >Exam name</div>
                        <input className="shortbox"/>
                        <div className='section' style={marginLeft20vw}>Student name</div>
                        <input className="shortbox"/>
                    </div>
                    <button className="button" style={{ marginLeft: "35vw", marginTop: "10vh", marginBottom: "3vh" }}>Search</button>
                    <div className="tablelistArea" style={{width:'85vw'}}>
                        <div className="headertableList">
                            <p style={image300percent}>S no</p>
                            <p style={image300percent}>Student</p>
                            <p style={image300percent}>Results</p>
                        </div>
                        <div className="bodytableList" >

                            {props.student.students && props.student.students.map((student, index) =>

                                <div className="flexrow" key={index} >

                                    <p style={image300percent}>{index + 1}</p>
                                    <p style={image300percent}>{student.name}</p>
                                    <div style={image300percent}>
                                        <NavLink exact to={{ pathname: "/studentresult", studentdata: student }}>
                                            <button className="button" style={{ background: "#66c4e1", color: "black", width: "10vw", marginBottom: "2vh", marginRight: "3vw", height: "5vh" }}>View</button>
                                        </NavLink>
                                    </div>

                                </div>
                                )}


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

export default connect(mapStateToProps)(ApproveResult);
