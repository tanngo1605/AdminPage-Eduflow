import ServerDomain from "../../serverdomain";
import axios from 'axios';
import {request} from '../api'

const addSchoolEvent =  (schoolId,jwtToken,eventInput) => {
    const {title,
      datefrom,
      dateto,
      startTime,
      endTime,
      //attachment,
      description,
      //classvalue,section
    } = eventInput;
 
    const inputData = {
      title,
      startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
      endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
      //section: section,
      //class:classvalue,
      description,
      //attachment:attachment,
    }

    console.log(inputData)
    request(jwtToken).post(`/schools/${schoolId}/events`,inputData)
                      .then(resData=>{
                                alert("New events has been created")
                      })
}
const getSchoolEvent = async (schoolId,jwtToken) => {
  
  const schoolEvent= await request(jwtToken).get(`/schools/${schoolId}/events/`)
                                            .then((resData)=>{
                                                return resData.data.data
                                            })
  
  return schoolEvent;
 
}
const searchSchoolEvent = async (schoolId,jwtToken,eventInput) => {
  const {text=' ',time='',classvalue='',section=''} = eventInput;
  let searchResult = [];
  
  if (classvalue && section){
    searchResult = await axios
                .get(`${ServerDomain}/schools/${schoolId}/events?keyword=${text}&time=${time}&class=${classvalue}&section=${section}`,{
                          headers: { "Authorization":`Bearer ${jwtToken}`},
                })
                
  }
  else{
    searchResult = await axios
                .get(`${ServerDomain}/schools/${schoolId}/events?keyword=${text}&timing=${time}`,{
                          headers: { "Authorization":`Bearer ${jwtToken}`},
                })
                
  }

  if(!searchResult.ok){
    
    
  }

  return searchResult.data.data
}
const updateSchoolEvent = async (schoolId,jwtToken,eventId,eventInput) => {
  const {title,
    datefrom,
    dateto,
    startTime,
    endTime,
    //attachment,
    description,
    //classvalue,section
  } = eventInput;

  const inputData = {
    title,
    startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
    endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
    //section: section,
    //class:classvalue,
    description,
    //attachment:attachment,
  }
  await request(jwtToken).patch(`/schools/${schoolId}/events/${eventId}`,inputData)
                    .then(resData=>{
                            alert.log('Update event successfully')
                    })
  
  
 
}
const deleteSchoolEvent = async (schoolId,jwtToken,eventId) => {
  
  await request(jwtToken).delete(`/schools/${schoolId}/events/${eventId}`)
                    .then(resData=>{
                            console.log(`Event ${eventId} has been deleted`)
                    })
  const schoolEventData = await getSchoolEvent(schoolId,jwtToken)
  return schoolEventData;
  
 
}
export {addSchoolEvent,getSchoolEvent,searchSchoolEvent,deleteSchoolEvent,updateSchoolEvent}