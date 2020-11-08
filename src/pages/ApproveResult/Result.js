import React, { useEffect, Component } from "react";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import imgDemo from "./../../assets/Ellipse.png"



class ResultsList extends Component {
    constructor(props) {
        super(props);

    }
    gotoNext = () => {
        this.props.history.push("/approveresult");
    }
    render() {
        return (
            <div className="dashboard">

                <div className="flexcolumn">
                    {/* <div className="outeravatarcircle"> */}
                    {/* <div className="inneravatarcircle"> */}
                    <div style={{
                        position: "absolute", width: "250px",
                        display: "inline-flex",
                        flexDirection: "row"
                    }}>
                        <img src={require("../../assets/Ellipse.png")} alt="" style={{ width: "90px", height: "90px", marginLeft: "3vw", marginTop: "1.8vh" }} />
                        <div style={{ margin: "auto", fontWeight: "bold" }}>Mr. Ak.</div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}

                    <HeaderTeacher />
                    <div className="flexrow" style={{ marginLeft: "50px" }}>
                        <div className="flexcolumn">
                            <img src={require("../../assets/Rectangle 87.png")} alt="" style={{ cursor: "pointer", width: "200px", height: "200px", marginLeft: "13vw", marginTop: "15vh" }} />
                            <div style={{ marginLeft: "16.5vw", marginTop: "5vh" }}>E - resources</div>
                        </div>
                        <div className="flexcolumn">
                            <img src={require("../../assets/Rectangle 88.png")} alt="" style={{ cursor: "pointer", width: "200px", height: "200px", marginLeft: "13vw", marginTop: "15vh" }} />
                            <div style={{ marginLeft: "16.5vw", marginTop: "5vh" }}>Student results</div>
                        </div>
                        <div className="flexcolumn">
                            <img src={require("../../assets/Rectangle 89.png")} alt="" onClick={this.gotoNext} style={{ cursor: "pointer", width: "200px", height: "200px", marginLeft: "13vw", marginTop: "15vh" }} />
                            <div style={{ marginLeft: "16.5vw", marginTop: "5vh" }}>Approve results</div>
                        </div>



                    </div>
                </div>

            </div>

        );
    }
}



export default ResultsList;
