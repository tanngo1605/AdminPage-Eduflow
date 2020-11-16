import React, { } from "react";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import {marginLeft20vw} from '../../../styles/marginStyles'


const ResultsList = (props) => {
    return (
            <div className="dashboard">

                <div className="flexcolumn">

                    <div className='teacheravacontainer'>
                        <img className='teacherava' src={require("../../../assets/Ellipse.png")} alt=""/>
                        <div style={{ margin: "auto", fontWeight: "bold" }}>Mr. Ak.</div>
                    </div>


                    <HeaderTeacher />
                    <div className="flexrow" style={marginLeft20vw}>
                        <div className="flexcolumn">
                            <img className='imageselection' src={require("../../../assets/Rectangle 87.png")} alt="" />
                            <h6 className='textselection'>E - resources</h6>
                        </div>
                        <div className="flexcolumn">
                            <img className='imageselection' src={require("../../../assets/Rectangle 88.png")} alt="" />
                            <h6 className='textselection'>Student results</h6>
                        </div>
                        <div className="flexcolumn">
                            <img className='imageselection' src={require("../../../assets/Rectangle 89.png")} alt="" onClick={()=>props.history.push("/approveresult")} />
                            <h6 className='textselection'>Approve results</h6>
                        </div>



                    </div>
                </div>

            </div>

        );
}




export default ResultsList;
