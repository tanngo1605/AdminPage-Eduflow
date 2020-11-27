import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Formik,Form,Field} from "formik";
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import {getSchoolCircular} from "../../../redux/Action/CircularAction";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {initListCircular} from "../../../userData/InitialData/Circular"
import {listCircularSchema} from "../../../userData/ValidationSchema/CircularSchema"
import {BsPencilSquare,BsPlus} from "react-icons/bs";
import {MdDeleteForever} from "react-icons/md";
import {addaProfileAttachment,marginLeft60vw,marginLeft20vw,marginTop20vh} from '../../../styles/marginStyles'
import {image200percent,image150percent,image100percent} from '../../../styles/imageStyles'
const CircularList = (props) => {
  let [circularData,setCircularData] = useState([])
  
  useEffect(()=>{
    async function getCircularData(){
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
    getCircularData();
  },[])


  
  const searchResult=(event)=>{
    
    
    
  }
  
  return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header {...props}/>
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
                    <Form className='flexrow' onChange={()=>searchResult()} style={marginTop20vh} >
                      <label htmlFor='Subject' className='section' style={marginLeft20vw}>Title</label>
                      <Field type="text" name="title" className="shortbox" placeholder="Type here"/>
                      <label className="section" style={marginLeft60vw}>Date from: </label>
                      <DayPickerInput  className="shortbox" name="date" onDayChange={(day)=> props.setFieldValue("date",day)} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                    </Form>

                  )}
                </Formik>
                <div className='tablelistArea' style={{width:'70vw',marginTop:'5vh'}}>
                  <div className='headertableList'>
                    <p style={image150percent}>Serial No</p>
                    <p style={image200percent}>Date</p>
                    <p style={image200percent}>Title</p>
                    <p style={image200percent}>Attachment</p>
                    <p style={image100percent}>Delete</p>
                    <p style={image100percent}>Edit</p>
                  </div>
                  
                  <div className="bodytableList">
                      {circularData&&circularData.map((circular,index)=>

                        <div  className="flexrow"  key={index} >
                          
                          <p style={image150percent}>{index+1}</p>
                          <p style={image200percent}></p>
                          <p style={image200percent}>{circular.title}</p>
                          <p style={image200percent}>{circular.url}</p>
                          <div className='itemcenter' style={image100percent}>
                            <MdDeleteForever size='1.5vw' onClick={()=>console.log('khanh ')}/>
                          </div>
                          <div className='itemcenter' style={image100percent}>
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

