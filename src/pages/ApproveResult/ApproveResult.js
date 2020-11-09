import React, { useEffect, Component } from "react";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import imgDemo from "./../../assets/Ellipse.png"
import { loadData, filterByValue, deleteData } from "../../redux/Stores/StudentReducer";
import { connect } from "react-redux";
import { image300percent, image200percent, image100percent, image450percent, image130vw } from "../../styles/imageStyles";
import { NavLink } from "react-router-dom"

let count = 0
class ApproveResult extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

        this.props.dispatch(loadData())
    }
    render() {
        count++

        if (count === 3) {

            console.log(this.props.student);

        }
        let students = this.props.students

        return (
            <div className="dashboard">
                <div className="flexcolumn">
                    <HeaderTeacher />
                    <div style={{ margin: "2%" }}>
                        <h2>Approve Result</h2>
                        <div className="flexrow">
                            <div className="flexrow">
                                <div style={{ marginLeft: "7vw", marginTop: "5vh", fontSize: "1.2vw" }}>Exam name</div>
                                <input className="shortbox" style={{ marginLeft: "7vw", marginTop: "5vh" }} />
                            </div>
                            <div className="flexrow">
                                <div style={{ marginLeft: "7vw", marginTop: "5vh", fontSize: "1.2vw" }}>Student name</div>
                                <input className="shortbox" style={{ marginLeft: "7vw", marginTop: "5vh" }} />
                            </div>
                        </div>
                        <button className="button" style={{ marginLeft: "38vw", marginTop: "10vh", marginBottom: "3vh" }}>Search</button>
                        <div className="tablelistArea">
                            <div className="headertableList">
                                <p style={image200percent}>S no</p>
                                <p style={image300percent}>Student</p>
                                <p style={image300percent}>Results</p>
                            </div>
                            <div className="bodytableList" >

                                {this.props.student.students && this.props.student.students.map((student, index) =>

                                    <div className="flexrow" key={index} >

                                        <p style={image200percent}>{index + 1}</p>
                                        <p style={image300percent}>{student.name}</p>
                                        <div style={image300percent}>
                                            <NavLink exact to={{ pathname: "/studentresult", studentdata: student }}>
                                                <button className="button" style={{ background: "#66c4e1", color: "black", width: "10vw", marginBottom: "2vh", marginRight: "3vw", height: "5vh" }}>View</button>
                                            </NavLink>
                                        </div>

                                    </div>
                                )}


                            </div>
                            {/* {this.props.student && this.props.student.map((el, index) => { })} */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
});

export default connect(mapStateToProps)(ApproveResult);
