import ServerDomain from "../../serverdomain";
import {request} from '../api'
const addTest =  (jwtToken,testInput) => {
    const {date,classvalue,section,name,type} = testInput;
    const inputData = {
      date,
      section,
      class:classvalue,
      name,
      type
    };

    request(jwtToken).post(`${ServerDomain}/tests`,inputData)
                     .then(resData=>{
                        alert("New tests has been created")
                      })
   
}
const getTest = async (jwtToken,userInput) => {
        const {classvalue,section}=userInput;
    
        const testData= await request(jwtToken).get(`/tests?class=${classvalue}&section=${section}`)
                                                .then(resData=>{
                                                        return resData.data.data
                                                })
    
    return testData;
 
}

const addTestMarks =  (jwtToken,testMarkInput) => {

    const {date,classvalue,section,name,type} = testMarkInput;
    
    
    const inputData = JSON.stringify({
      date,
      section,
      class:classvalue,
      name,
      type
    })
    request(jwtToken).post('/tests',inputData)
          .then(resData=>{
                    alert("New test mark has been created")
          })  
}
const getTestMarks = async (testID,jwtToken) => {
    
    const testMarksData= request(jwtToken).post(`/${testID}`)
                                          .then(resData=>{
                                                return resData.data.data
                                        })
    
    return testMarksData;
 
}
export {addTest,getTest,addTestMarks,getTestMarks}