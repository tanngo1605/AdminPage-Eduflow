import ServerDomain from "../../serverdomain";
import axios from 'axios';
import { Alert } from "react-bootstrap";

const addSchoolEvent =  (schoolId,jwtToken,eventInput) => {
    const {title,datefrom,dateto,startTime,endTime,attachment,description,classvalue} = eventInput;
    
    console.log(eventInput)
    const inputData = JSON.stringify({
      
      title: title,
      startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
      endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
      //class:classvalue,
      description:description,
      //attachment:[]
      
      
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
                    
          });
    
    
    
}
const getSchoolEvent = (schoolId,jwtToken) => {
    
    axios
        .get(`${ServerDomain}/schools/${schoolId}/events`,{
                    headers: { "Authorization":`Bearer ${jwtToken}`},
          })
        .then( resData=> {
                    return resData
        })
        .catch(err=> {
                    const error= "Something went wrong. Check your input again"
                    throw new Error (error)
        })
 
}
export {addSchoolEvent,getSchoolEvent}