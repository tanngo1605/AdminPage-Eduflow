import ServerDomain from "../../serverdomain";
import axios from 'axios';

const getSchoolInfo =  async (schoolId,jwtToken) => {
    

    
    const schoolData = await axios.get(`${ServerDomain}/schools/${schoolId}`,{
                                headers: { 
                                    "Content-Type":"application/json",
                                    "Authorization":`Bearer ${jwtToken}`
                                },
                            })

                            .catch(err=>{
                                const error= "Something went wrong. Check your input again"
                                throw new Error(error)
                            });
    return schoolData.data.data
    
    
    
}
const updateSchoolInfo =  (schoolId,jwtToken,updateInput) => {
    const {title,date,attachment} = updateInput;
    
    
    const inputData = JSON.stringify({

      name: title,
      email:'',
      address:'',
      mobile:'',
      affiliationCode:'',
      board:'',
      landLine:'',
      ssss:'',
        

    })

    console.log(inputData)
    axios.put(`${ServerDomain}/schools/${schoolId}`,inputData,{
                    headers: { 
                      "Content-Type":"application/json",
                      "Authorization":`Bearer ${jwtToken}`
                    },
          })
          .then(resData=>{
                    console.log("School  has been updated")
          })
          .catch(err=>{
                    const error= "Something went wrong. Check your input again"
                    throw new Error(error)
                    
                    
          });
    
    
    
}

export {getSchoolInfo,updateSchoolInfo}