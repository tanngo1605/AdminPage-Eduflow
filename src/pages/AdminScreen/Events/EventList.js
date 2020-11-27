import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import { Formik,Form,Field} from "formik";
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import {getSectionAndClass} from "../../../redux/Action/SchoolAction";
import {getSchoolEvent,searchSchoolEvent,deleteSchoolEvent} from "../../../redux/Action/EventAction";
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {searchEventSchema} from "../../../userData/ValidationSchema/EventSchema"
import {initialSearchEvent} from '../../../userData/InitialData/Event'
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {marginLeft130vw,marginLeft60vw,marginLeft15vw,marginBottom20vh} from '../../../styles/marginStyles'
import {image580vw,image250percent,image200percent,image100percent} from '../../../styles/imageStyles'

const EventList = (props) => {
  let [schoolEvent,setSchoolEvent]= useState([])
  let [filterschoolEvent,setFilterSchoolEvent] = useState([])
  let [classsection,setClassSection] = useState([]); 
  useEffect(()=>{
    async function getSchoolEventData(){
      props.dispatch(getCurrentUser())
  
      try {
        const userData=props.account.userData.userdata.data.data;
        const schooleventdata = await getSchoolEvent(userData.school.uuid,userData.token)
        const sectionclassData = await getSectionAndClass(userData.school.uuid,userData.token)
        setSchoolEvent(schooleventdata)
        setClassSection( sectionclassData )
        setFilterSchoolEvent( schooleventdata )
        
      }
      catch(err){
        console.log(err)
      }
  }
  getSchoolEventData();
  },[])


  const deleteEvent = async (eventId)=>{
    try {
      const userData = props.account.userData.userdata.data.data;
      const schooleventdata = await deleteSchoolEvent(userData.school.uuid,userData.token,eventId)

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
            <Header {...props}/>
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
                        <div className='flexrow' style={marginBottom20vh}>
                          <label htmlFor="classvalue" className="section" >Enter Class</label>
                          <Field as="select" name="classvalue" className="shortbox" placeholder="Select Class">
                            <option value="" defaultValue>{" "}-select-</option>
                            {classsection&&classsection.map((e,index)=><option key={index} value={e.class}>{e.class}</option>)}
                          </Field>
                          {/* Section*/}
                          <label htmlFor="section" className="section" style={marginLeft60vw}>Enter Section</label>
                          <Field as="select" name="section" className="shortbox" placeholder="Select Section">
                            <option value="" defaultValue>{" "}-select-</option>
                            {classsection.map((e,index)=><option key={index} value={e.section}>{e.section}</option>)}
                          </Field>
                        </div>
                        <div className='flexrow' style={marginBottom20vh}> 
                          <label className='section' >Events</label>
                          <Field type='radio' value='upcoming' name='time' style={marginLeft60vw}/>
                          <label htmlFor='time' className='radiostyle'>Upcoming</label>
                          <Field type='radio' value='past' name='time' style={marginLeft15vw}/>
                          <label htmlFor='time' className='radiostyle'>Past due</label>
                          <Field type='radio' value='all' name='time' style={marginLeft15vw}/>
                          <label htmlFor='event' className='radiostyle'>All</label>
                          <Field type='radio' value='custom' name='time' style={marginLeft130vw}/>
                          <label htmlFor='time' className='radiostyle'>Custom date</label>
                              
                        </div>
                        <div className='flexrow' style={marginBottom20vh}>
                          <label htmlFor='text' className='section'>Search text</label>
                          <Field type='text' name='text' className='longbox' placeholder='Type here' />
                          <button type='submit' className='gallerybutton'>Search</button>
                          <button type='reset' className='gallerybutton'>Reset</button>
                        </div>
                    </Form>
                    )}
                  </Formik>
                <div className='tablelistArea' style={{marginTop:'5%',marginLeft:'10vw',width:'60vw'}}>
                  <div className='headertableList' style={image580vw}>
                    <p style={image100percent}>#</p>
                    <p style={image200percent}>From Date</p>
                    <p style={image200percent}>To Date</p>
                    <p style={image200percent}>Attachment</p>
                    <p style={image250percent}>Action</p> 
                  </div>
                  
                  <div className="bodytableList">
                    <Scrollbars>   
                      {filterschoolEvent.length>0 && filterschoolEvent.map((event,index) => (        
                        <div key={index} className='flexrow'>
                          <p style={image100percent}>{index+1}</p>
                          <p style={image200percent}>{event.startTime}</p>
                          <p style={image200percent} className='textoverflowellipsis'>{event.endTime}</p>
                          <p style={image200percent} className='textoverflowellipsis'>{event.attachment}</p>
                          <BsPencilSquare size={'1.1vw'} className='itemcenter' style={image100percent}/>
                          <MdDeleteForever size={'1.3vw'} className='itemcenter' style={image100percent} onClick={()=>deleteEvent(event.id)}/>

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

