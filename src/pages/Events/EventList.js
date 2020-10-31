import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import { Formik,Form,Field} from "formik";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/HeaderAdmin'
import {getSchoolEvent,searchSchoolEvent,deleteSchoolEvent} from "../../redux/Action/EventAction";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import {searchEventSchema} from "../../userData/ValidationSchema/EventSchema"
import {initialSearchEvent} from '../../userData/InitialData/Event'
import classes from '../../userData/GlobalData/classData'
import sections from '../../userData/GlobalData/sectionData'
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {
  marginLeft600vw,
  marginLeft470vw,
  marginLeft450vw,
  marginLeft380vw,
  marginLeft150vw,
  marginLeft130vw,
  marginLeft15vw,
  marginBottom100vh,
  marginBottom65vh} from '../../styles/marginStyles'

import {
    image580vw,
    image200percent,
    image100percent
    
    
    
    } from '../../styles/imageStyles'

const EventList = (props) => {
  let [schoolEvent,setSchoolEvent]= useState([])
  let [filterschoolEvent,setFilterSchoolEvent] = useState([])
  const getSchoolEventData = async ()=>{
    props.dispatch(getCurrentUser())
  
    try {
      const userData=props.account.userData.userdata.data.data;
      const schooleventdata = await getSchoolEvent(userData.school.uuid,userData.token)
      
      setFilterSchoolEvent( schooleventdata )
      setSchoolEvent(schooleventdata)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(getSchoolEventData,[])


  const deleteEvent = async (eventId)=>{
    try {
      const userData = props.account.userData.userdata.data.data;
      await deleteSchoolEvent(userData.school.uuid,userData.token,eventId)
      
      const schooleventdata = await getSchoolEvent(userData.school.uuid,userData.token)
      setSchoolEvent(schooleventdata)
      setFilterSchoolEvent( schooleventdata )
      
      
    }
    catch(error) {
      console.log(error)
    }
  }
  const handleSearch= async (values)=>{
    if (!(values.text&&values.time)) {
      setFilterSchoolEvent( schoolEvent )
      return ;
    }

    try {
      const userData = props.account.userData.userdata.data.data;
      const schoolevent= await searchSchoolEvent(userData.school.uuid,userData.token,values)
      setFilterSchoolEvent(schoolevent)
      
    }
    catch(error) {
      console.log(error)
    }
    
    
  }
    return (
      
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
                
                <h1 className='titleform'>Event List</h1>
                
                <Formik
                      initialValues={initialSearchEvent}
                      validationSchema={searchEventSchema}
                      onSubmit={(values, actions) => {
                        console.log(values);
                        handleSearch(values);
                        actions.resetForm();
                      }}
                    >
                     {(propsForm)=>(
                      <Form>
                    
                        <div className='flexrow' style={marginBottom100vh}>
                          <label htmlFor="classvalue" className="section" >Class</label>
                          <Field as="select" name="classvalue" className="shortbox"  style={marginLeft130vw} placeholder="Your class">
                            <option value="" defaultValue>{" "}-select-</option>
                            {classes.map((eachclass,index)=><option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                          </Field>
                          {/* Section*/}
                          <label htmlFor="section" className="section" style={marginLeft380vw}>Section</label>
                            <Field as="select" name="section" className="shortbox"  style={marginLeft450vw} placeholder="Your section">
                              <option value="" defaultValue>{" "}-select-</option>
                              {sections.map((section,index)=><option key={index} value={section.value}>{section.name}</option>)}
                            </Field>
                        </div>
                        <div style={marginBottom65vh}> 
                          <label className='section'>Events</label>
                          <Field type='radio' value='upcoming' name='time' style={marginLeft150vw}/>
                          <label htmlFor='time' className='radiostyle'>Upcoming</label>
                          <Field type='radio' value='past' name='time' style={marginLeft15vw}/>
                          <label htmlFor='time' className='radiostyle'>Past due</label>
                          <Field type='radio' value='all' name='time' style={marginLeft15vw}/>
                          <label htmlFor='event' className='radiostyle'>All</label>
                          <Field type='radio' value='custom' name='time' style={marginLeft130vw}/>
                          <label htmlFor='time' className='radiostyle'>Custom date</label>
                              
                        </div>
                        <div className='flexrow' style={marginBottom65vh}>
                          <label htmlFor='text' className='section'>Search text</label>
                          <Field type='text' name='text' className='longbox' style={marginLeft130vw} placeholder='Type here' />
                          <button type='submit' className='gallerybutton' style={marginLeft470vw}>Search</button>
                          <button type='reset' className='gallerybutton' style={marginLeft600vw}>Reset</button>
                        </div>
                    </Form>
                    )}
                  </Formik>
                <div className='eventlistArea' style={{marginTop:'5%',marginLeft:'17%',width:'58vw'}}>
                  <div className='headereventList' style={image580vw}>
                    <p style={image100percent}>#</p>
                    <p style={image200percent}>From Date</p>
                    <p style={image200percent}>To Date</p>
                    <p style={image200percent}>Attachment</p>
                    <p style={image100percent}>View</p>
                    <p style={image100percent}>Edit</p>  
                  </div>
                  
                  <div className="bodyeventList">
                    <Scrollbars>   
                      {filterschoolEvent.length>0 && filterschoolEvent.map((event,index) => (        
                        <div key={index} className='flexrow'>
                    
                          <p style={image100percent}>{index+1}</p>
                          <p style={image200percent}>{event.startTime}</p>
                          <p style={image200percent} className='textoverflowellipsis'>{event.endTime}</p>
                          <p style={image200percent} className='textoverflowellipsis'>{event.attachment}</p>
                          <BsPencilSquare size={'1.1vw'} style={image100percent}/>
                          <MdDeleteForever size={'1.3vw'} style={image100percent} onClick={()=>deleteEvent(event.id)}/>
                        
                          
                      
                        </div>
                    ))}
                    </Scrollbars>
                    
                  </div>
                </div>
      
              
            </div>
          </div>
        
        </div>  
      </div>
    );
  }


const mapStateToProps = (state) => ({
    account:state.account,
    
})
  
export default connect(mapStateToProps)(EventList);

