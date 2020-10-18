import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Formik,Form,Field} from "formik";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {getSchoolCircular} from "../../redux/Action/CircularAction";

import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import {initListCircular} from "../../userData/InitialData/Circular"
import {listCircularSchema} from "../../userData/ValidationSchema/CircularSchema"
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {
  marginLeft450vw,
  marginLeft380vw,
  marginLeft130vw,
  marginLeft55vw,
  
  addaProfileAttachment,
  marginBottom130vhandTop30vh,
  } from '../../styles/marginStyles'

const CircularList = (props) => {
  let [circularData,setCircularData] = useState([])

  const getCircularData = async ()=>{
    props.dispatch(getCurrentUser())
  
    try {
      const userData=props.account.userData.userdata.data.data;
      const circular = await getSchoolCircular(userData.school.uuid,userData.token)
      setCircularData( circular )
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(getCircularData,[])


  
  const searchResult=(event)=>{
    
    
    
  }
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
                
                <h1 className='titleform'>Circular List</h1>
                <NavLink exact to={{pathname:'/circular'}} className='attachment' style={addaProfileAttachment}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p style={{color:'#FFFFFF'}}> Add a circular </p>
                </NavLink>
                <Formik
                  initialValues={initListCircular}
                  validationSchema={listCircularSchema}
                >  
                  {(props)=>(
                    <Form className='flexrow' onChange={()=>console.log(props.values)} style={marginBottom130vhandTop30vh}>
                      <label htmlFor='Subject' className='section' style={marginLeft55vw}>Title</label>
                      <Field type="text" name="title" className="shortbox"  style={marginLeft130vw} placeholder="Type here"/>
                      <label className="section" style={marginLeft380vw}>Date from: </label>
                      <DayPickerInput  className="shortbox" name="date" onDayChange={(day)=> props.setFieldValue("date",day)} style={marginLeft450vw}  inputProps={{readOnly: true}} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                    </Form>

                  )}
                </Formik>
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center'}}>
                  <div className='headereventList'>
                    <p style={{width:'15%'}}>Serial No</p>
                    <p style={{width:'20%'}}>Date</p>
                    <p style={{width:'20%'}}>Title</p>
                    <p style={{width:'20%'}}>Attachment</p>
                    <p style={{width:'10%'}}>Delete</p>
                    <p style={{width:'10%'}}>Edit</p>
                  </div>
                  
                  <div className="bodyeventList">
                      {circularData&&circularData.map((circular,index)=>

                        <div  className="flexrow"  key={index} >
                          
                          <p style={{width:'15%'}}>{index+1}</p>
                          <p style={{width:'20%'}}></p>
                          <p style={{width:'20%'}}>{circular.title}</p>
                          <p style={{width:'20%'}}>{circular.url}</p>
                          <div className='itemcenter' style={{width:"10%"}}>
                            <MdDeleteForever size='1.5vw' onClick={()=>console.log('khanh ')}/>
                          </div>
                          <div className='itemcenter' style={{width:"10%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/circular',circulardata:circular}}>
                              <BsPencilSquare size='1.3vw' color='black' />
                            </NavLink>
                          </div>
                        </div>
                      )}
                    
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

export default connect(mapStateToProps)(CircularList);

