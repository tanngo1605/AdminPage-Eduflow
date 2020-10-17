import ServerDomain from "../../serverdomain";
import axios from 'axios';


const addSchoolEvent =  (schoolId,jwtToken,eventInput) => {
    const {title,datefrom,dateto,startTime,endTime,attachment,description,classvalue,section} = eventInput;
    
    console.log(eventInput)
    const inputData = JSON.stringify({
      
      title: title,
      startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
      endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
      //section: section,
      //class:classvalue,
      description:description,
      //attachment:attachment,
      
      
    })

    console.log(inputData)
    axios.post(`${ServerDomain}/schools/${schoolId}/events`,inputData,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
          })
          .then(resData=>{
                    console.log("New Events has been created")
          })
          .catch(err=>{
                    const error= "Something went wrong. Check your input again"
                    throw new Error(error)
                    
          });
    
    
    
}
const getSchoolEvent = async (schoolId,jwtToken) => {
  
  const schoolEvent= await axios.get(`${ServerDomain}/schools/${schoolId}/events/`,{
                        headers: { 
                              "Content-Type":"application/json",
                              "Authorization":`Bearer ${jwtToken}`
                        },
                      })
                      .catch(err=> {
                        const error= "Something went wrong. Check your input again"
                        throw new Error (error)
                      })
  console.log(schoolEvent)
  return schoolEvent.data.data;
 
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
const deleteSchoolEvent = async (schoolId,jwtToken,eventId) => {
  
  await axios.delete(`${ServerDomain}/schools/${schoolId}/events/${eventId}`,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
        })
        .then(resData=>{
                    console.log(`Event ${eventId} has been deleted`)
        })
        .catch(err=> {
                    const error= "Something went wrong. Check your input again"
                    throw new Error (error)
        })
  
  
 
}
export {addSchoolEvent,getSchoolEvent,searchSchoolEvent,deleteSchoolEvent}