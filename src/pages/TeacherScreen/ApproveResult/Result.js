import React, { useEffect } from "react";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import { marginLeft20vw } from '../../../styles/marginStyles'
import { connect } from "react-redux";
import { getCurrentUser } from "../../../redux/Stores/AccountReducer";


const ResultsList = (props) => {
    console.log("-----------------")
    useEffect(() => {
        function getUserInfo() {
            props.dispatch(getCurrentUser())
        }
        getUserInfo();
    }, [])

    const userAccess = (e, users) => {
        // let access = false
        // console.log(users.target.id);
        /* Assume that super admin is teacher and Admin is School */
        if (users.includes("Teacher")) {
            switch (e.target.id) {
                case "eRes":
                    props.history.push("/eresources");
                    break;
                case "studentRes":
                    props.history.push("/eresources");
                    break;
                case "approveRes":
                    props.history.push("/approveresult");
                    break;
            }

            // if(e.target.id ==="eRes")
            // {
            //     props.history.push("/eresources")

            // }
            // else if (e.target.id==="studentRes")
            // {
            //     props.history.push("/studentResult")
            // }
            // else 
        }
        else {
            switch (e.target.id) {
                case "eRes":
                    // props.history.push("/eresources");
                    break;
                case "studentRes":
                    // props.history.push("/eresources");
                    break;
                case "approveRes":
                    props.history.push("/approveresult");
                    break;
            }
        }
    }
    console.clear()
    // console.log((props.account.userData.userdata.config.data).role);
    // console.log(props.account.userData.userdata.config.data);
    let user = props.account.userData.userdata.config.data
    // let role = user.includes("Admin")
    // console.log(user, typeof user, role);
    return (

        <div className="dashboard">

            <div className="flexcolumn">
                {/* {(props.account.userData.userdata.config.data) && (props.account.userData.userdata.config.data).map((item, index) => console.log(item))} */}
                <div className='teacheravacontainer'>
                    <img className='teacherava' src={require("../../../assets/Ellipse.png")} alt="" />
                    <div style={{ margin: "auto", fontWeight: "bold" }}>Mr. Ak.</div>
                </div>


                <HeaderTeacher />
                <div className="flexrow" style={marginLeft20vw}>
                    <div className="flexcolumn">
                        <img className='imageselection' id="eRes" src={require("../../../assets/Rectangle 87.png")} alt="" onClick={(e) => userAccess(e, user)} />
                        <h6 className='textselection'>E - resources</h6>
                    </div>
                    <div className="flexcolumn">
                        <img className='imageselection' id="studentRes" src={require("../../../assets/Rectangle 88.png")} alt="" onClick={(e) => userAccess(e, user)} />
                        <h6 className='textselection'>Student results</h6>
                    </div>
                    <div className="flexcolumn">
                        <img className='imageselection' id="approveRes" src={require("../../../assets/Rectangle 89.png")} alt="" onClick={(e) => userAccess(e, user)} />
                        <h6 className='textselection'>Approve results</h6>
                    </div>



                </div>
            </div>

        </div>

    );
}

const mapStateToProps = (state) => ({
    account: state.account,

})


export default connect(mapStateToProps)(ResultsList);
