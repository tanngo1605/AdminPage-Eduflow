import ServerDomain from "../../serverdomain";
import axios from 'axios';

const addSchoolCircular =  (schoolId,jwtToken,circularInput) => {
    const {title,date,attachment} = circularInput;
    
    
    const inputData = JSON.stringify({

      title: title,
      //date:date
      url:URL.createObjectURL(attachment[0])

    })

    console.log(inputData)
    axios.post(`${ServerDomain}/schools/circular`,inputData,{
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
const getSchoolCircular = async (schoolId,jwtToken) => {
    
    const circularData= await axios.get(`${ServerDomain}/schools/${schoolId}/circulars`,{
                                headers: { 
                                        "Content-Type":"application/json",
                                        "Authorization":`Bearer ${jwtToken}`
                                },
                        })
                        .catch(err=> {
                                const error= "Something went wrong. Check your input again"
                                throw new Error (error)
                        })
    
    return circularData.data.data;
 
}
export {addSchoolCircular,getSchoolCircular}