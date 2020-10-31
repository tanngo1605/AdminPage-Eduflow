import React, { useEffect,useState } from "react";
import {connect} from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars";
import { Formik,Form,Field} from "formik";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import {getSchoolInfo,updateSchoolInfo} from "../../redux/Action/SchoolAction";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import schoolSchema from "../../userData/ValidationSchema/SchoolSchema"
import schoolInitialValue from '../../userData/InitialData/School'
import {
  marginBottom180vh,
  marginBottom65vh,
  marginLeft200vw,
  marginLeft130vw,  
  marginLeft270vw,
} from "../../styles/marginStyles";
import {image200vw} from "../../styles/imageStyles"
import {
  image80vwLeft320vw,
  image80vwLeft160vw,
  image80vwLeft30vw} from "../../styles/imageMarginStyles"
const SchoolProfile =  (props) => {
  const [schoolData,setSchoolData] = useState([])

  const getSchoolData = async ()=>{
    props.dispatch(getCurrentUser())
  
    try {
      const userData=props.account.userData.userdata.data.data;
      const schooldata = await getSchoolInfo(userData.school.uuid,userData.token)
      console.log(schooldata)
      setSchoolData( schooldata )
    }
      catch(err){
    }
  }

  useEffect(getSchoolData,[]) 

  
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
            <Header />
            <div className="form">
              <h1 className="titleform">School Profile</h1>
              <div className="flexrow">
                
                <div >
                  
                   
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
                          <div className="formforinfo" style={{paddingTop:'3.5vh'}}>
                           <Scrollbars>
                            <div className="flexrow" style={marginBottom65vh}>
                             
                              <label htmlFor='name' className="section" >Name</label>
                              <Field type="text" name="name" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.name}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='schoolname' className="section" >School Name</label>
                              <Field type="text" name="schoolname" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.schoolname}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='schoolcode' className="section" >School Code</label>
                              <Field type="text" name="schoolcode" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.schoolCode}/>
                            </div>
                            <div className="flexrow" style={marginBottom180vh}>
                              <label htmlFor="permaaddress" className="section" style={image200vw}>Permanent Address</label>
                              <Field component='textarea' name="permaaddress" className="shortbox" style={{marginLeft:'20vw',height:'15vh'}}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor="permacity" className="section">City</label>
                              <Field type="text" name="permacity" className="shortbox"  style={image80vwLeft30vw}  placeholder={schoolData.address}/>
                              <label htmlFor='permastate' className="section" style={marginLeft130vw} >State</label>
                              <Field type="text" name="permastate" className="shortbox" style={image80vwLeft160vw}  placeholder="Type here"/>
                              <label htmlFor="permapcode" className="section" style={marginLeft270vw} >Postcode</label>
                              <Field type="text" name="permapcode" className="shortbox" style={image80vwLeft320vw}  placeholder="Type here"/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='schoolweb' className="section" style={image200vw}>School Website(if any)</label>
                              <Field type="text" name="schoolweb" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.schoolweb}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='schoolemail' className="section" style={image200vw}>School Email ID</label>
                              <Field type="text" name="schoolemail" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.schoolemail}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='contactnum' className="section" style={image200vw} >Contact Number</label>
                              <Field type="text" name="contactnum" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.contactnum}/>
                            </div>
                            <div className="flexrow" style={marginBottom65vh}>
                              <label htmlFor='alternatephoneno' className="section" style={image200vw}>Alternate Phone No</label>
                              <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft200vw}  placeholder={schoolData.alternatephoneno}/>
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
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  account: state.account,
})
export default connect(mapStateToProps)(SchoolProfile);