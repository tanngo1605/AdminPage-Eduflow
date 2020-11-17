import React, { useEffect,useState } from "react";
import {connect} from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field,ErrorMessage} from "formik";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import {getSchoolInfo,updateSchoolInfo} from "../../../redux/Action/SchoolAction";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import schoolSchema from "../../../userData/ValidationSchema/SchoolSchema"
import schoolInitialValue from '../../../userData/InitialData/School'
import { FcHighPriority } from "react-icons/fc";
import {marginBottom20vh,marginLeft60vw,marginLeft20vw,} from "../../../styles/marginStyles";
import {image130vw} from "../../../styles/imageStyles"
import {image40vwLeft10vw} from "../../../styles/imageMarginStyles"
const SchoolProfile =  (props) => {
  const [schoolData,setSchoolData] = useState([])
  useEffect(()=>{
    function getSchoolData(){
      props.dispatch(getCurrentUser())
  
      try {
        const userData=props.account.userData.userdata.data.data;
        const schooldata =  getSchoolInfo(userData.school.uuid,userData.token)
        console.log(schooldata)
        setSchoolData( schooldata )
      }
        catch(err){
          console.log(err)
      }
    }
    getSchoolData();
  },[])

  
  const displayImage = (propsForm) => {

    const image = propsForm.values.image;
    if (image)
      return (
        <div className="profileimage">
          <label htmlFor="image">
            <img src={URL.createObjectURL(image)} alt="" className="profileimagepreview"/>
          </label>
          <input type="file" id='image' name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
        </div>
);
    
    return (
      <div>
       <label htmlFor="image" className="profileimage"></label>
       <input type="file" id='image' name="image" accept="image/*" onChange={(event)=>propsForm.setFieldValue('image',event.target.files[0])} />
      </div>
   );
};

  const handleSubmit = (values) => {
    try {
      const userData = props.account.userData.userdata.data.data;
      updateSchoolInfo(userData.school.uuid,userData.token,values);
      
    }
    catch(error) {
      console.log(error)
      
    }
  };

  
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header {...props}/>
            <div className="form">
              <h1 className="titleform">School Profile</h1>
              
              <Formik
                initialValues={schoolInitialValue}
                validationSchema={schoolSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.resetForm()
                }}
              >  
                      {(propsForm)=>(
                        
                        <Form className='flexrow'>
                         {displayImage(propsForm)}
                         <div className='flexcolumn'>
                          <div className="formforinfo">
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom20vh}>
                             
                              <label htmlFor='name' className="section" style={image130vw}>Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.name}/>
                              <div className="errMessOuter flexrow" style={propsForm.errors.name ? null : { display: "none" }}>
                                <FcHighPriority className="iconErrMess" size="1.5vw" />
                                <p style={{marginLeft:'6px'}}>This input is required</p>
                              </div>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='schoolname' className="section" style={image130vw}>School Name</label>
                              <Field type="text" name="schoolname" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.schoolname}/>
                              <div className="errMessOuter flexrow" style={propsForm.errors.schoolname ? null : { display: "none" }}>
                                <FcHighPriority className="iconErrMess" size="1.5vw" />
                                <p style={{marginLeft:'6px'}}>This input is required</p>
                              </div>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='schoolcode' className="section" style={image130vw}>School Code</label>
                              <Field type="text" name="schoolcode" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.schoolCode}/>
                              <div className="errMessOuter flexrow" style={propsForm.errors.schoolcode ? null : { display: "none" }}>
                                <FcHighPriority className="iconErrMess" size="1.5vw" />
                                <p style={{marginLeft:'6px'}}>This input is required</p>
                              </div>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permaaddress" className="section" style={image130vw}>Permanent Address</label>
                              <Field component='textarea' name="permaaddress" className="shortbox" style={{marginLeft:'6vw',height:'15vh'}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor="permacity" className="section">City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image40vwLeft10vw}  placeholder={schoolData.address}/>
                              <label htmlFor='permastate' className="section" style={marginLeft20vw} >State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                              <label htmlFor="permapcode" className="section" style={marginLeft20vw} >Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image40vwLeft10vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='schoolweb' className="section" style={image130vw}>School Website(if any)</label>
                              <Field type="text" name="schoolweb" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.schoolweb}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='schoolemail' className="section" style={image130vw}>School Email ID</label>
                              <Field type="text" name="schoolemail" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.schoolemail}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='contactnum' className="section" style={image130vw} >Contact Number</label>
                              <Field type="text" name="contactnum" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.contactnum}/>
                            </div>
                            <div className="flexrow" style={marginBottom20vh}>
                              <label htmlFor='alternatephoneno' className="section" style={image130vw}>Alternate Phone No</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft60vw}  placeholder={schoolData.alternatephoneno}/>
                            </div>    
                           </Scrollbars>
                          
                          </div>
                          <div className="flexrow" style={{marginLeft:"15vw",marginTop:"2vh"}}>
                            <button type="submit" className="button">Save</button>
                          </div>
                         </div>
                          
                        </Form>

                      )}
    
              </Formik>
              
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  account: state.account,
})
export default connect(mapStateToProps)(SchoolProfile);
