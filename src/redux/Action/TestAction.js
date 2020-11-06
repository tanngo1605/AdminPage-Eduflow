import ServerDomain from "../../serverdomain";
import axios from 'axios';

const addTest =  (jwtToken,testInput) => {
    const {date,classvalue,section,name,type} = testInput;
    
    
    const inputData = JSON.stringify({
      date: date,
      section:section,
      class:classvalue,
      name:name,
      type:type
    })

    axios.post(`${ServerDomain}/tests`,inputData,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
          })
          .then(resData=>{
                    console.log("New Circulars has been created")
          })
          .catch(err=>{
                    const error= "Something went wrong. Check your input again"
                    throw new Error(error)
                    
                    
          });    
}
const getTest = async (schoolId,jwtToken) => {
    
    const testData= await axios.get(`${ServerDomain}/tests?class= & section=`,{
                                headers: { 
                                        "Content-Type":"application/json",
                                        "Authorization":`Bearer ${jwtToken}`
                                },
                        })
                        .catch(err=> {
                                const error= "Something went wrong. Check your input again"
                                throw new Error (error)
                        })
    
    return testData.data.data;
 
}
const addTestMarks =  (jwtToken,testMarkInput) => {

    const {date,classvalue,section,name,type} = testMarkInput;
    
    
    const inputData = JSON.stringify({
      date: date,
      section:section,
      class:classvalue,
      name:name,
      type:type
    })
    axios.post(`${ServerDomain}/tests`,inputData,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
          })
          .then(resData=>{
                    console.log("New Circulars has been created")
          })
          .catch(err=>{
                    const error= "Something went wrong. Check your input again"
                    throw new Error(error)
                    
                    
          });    
}
const getTestMarks = async (schoolId,testID,jwtToken) => {
    
    const testMarksData= await axios.get(`${ServerDomain}/${testID}`,{
                                headers: { 
                                        "Content-Type":"application/json",
                                        "Authorization":`Bearer ${jwtToken}`
                                },
                        })
                        .catch(err=> {
                                const error= "Something went wrong. Check your input again"
                                throw new Error (error)
                        })
    
    return testMarksData.data.data;
 
}
export {addTest,getTest,addTestMarks,getTestMarks}