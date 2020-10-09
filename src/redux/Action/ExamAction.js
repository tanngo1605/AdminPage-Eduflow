import ServerDomain from "../../serverdomain";
import axios from 'axios';


const addSchoolExam =  (schoolId,jwtToken,eventInput) => {
    const {title,classvalue,section,datefrom,dateto,startTime,endTime,attachment,description} = eventInput;
    
    console.log(eventInput)
    const inputData = JSON.stringify({
      
      title: title,
      class:classvalue,
      section:section,
      startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
      endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
      
      description:'con me gi do',
      attachment:attachment,
      
      
    })

    console.log(inputData)
    axios.post(`${ServerDomain}/schools/${schoolId}/events`,inputData,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
          })
          .then(resData=>{
                    console.log("New Exams has been created")
          })
          .catch(err=>{
                    const error= "Something went wrong. Check your input again"
                    throw new Error(error)
                    
          });
    
    
    
}
const getSchoolExam = async (schoolId,jwtToken) => {
    
     const examData= await axios.get(`${ServerDomain}/schools/${schoolId}/events`,{
                                headers: { 
                                        "Content-Type":"application/json",
                                        "Authorization":`Bearer ${jwtToken}`
                                },
                        })
                        .catch(err=> {
                                const error= "Something went wrong. Check your input again"
                                throw new Error (error)
                        })
    
    return examData.data.data;
        
 
}
export {addSchoolExam,getSchoolExam}