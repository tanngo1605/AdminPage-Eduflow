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
    const {
      name,
      schoolname,
      schoolcode,
      permaaddress,
      permacity,
      permastate,
      permapcode,
      schoolweb,
      schoolemail,
      contactnum,
      alternatephoneno,
      image} = updateInput;
    
    
    const inputData = JSON.stringify({

      name: schoolname,
      email:schoolemail,
      address:`${permaaddress} ,${permacity},${permastate},${permapcode}`,
      mobile:contactnum,
      affiliationCode:schoolweb,
      board:'nhieulammoi',
      landLine:alternatephoneno
        

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
const createSubject =  (schoolId,jwtToken,subjectInput) => {
  const {name,text} = subjectInput;
  
  
  const inputData = JSON.stringify({
    name: name,
    "":text,
  })

  
  axios.put(`${ServerDomain}/subjects`,inputData,{
                  headers: { 
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${jwtToken}`
                  },
        })
        .then(resData=>{
                  console.log("Success creating a subject")
        })
        .catch(err=>{
                  const error= "Something went wrong. Check your input again"               
        });
}

const getSubject =  async (schoolId,jwtToken) => {
    

    
  const subjectData = await axios.get(`${ServerDomain}/subjects`,{
                              headers: { 
                                  "Content-Type":"application/json",
                                  "Authorization":`Bearer ${jwtToken}`
                              },
                          })

                          .catch(err=>{
                              const error= "Something went wrong. Check your input again"
                              throw new Error(error)
                          });
  return subjectData.data.data
  
  
  
}
export {getSchoolInfo,updateSchoolInfo,createSubject,getSubject}