import ServerDomain from "../../serverdomain";
import axios from 'axios';
const loginAccount = async (userInput) => {
    const {schoolCode,username,password} = userInput;
    const inputData =JSON.stringify({
      username: username,
      password: password,
    })
    let userData= axios.post(`${ServerDomain}/auth/login`,inputData,{
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
              },
        })
        .then( resData =>{
              console.log(`Login ${username} success`)
              return resData;
        })
        .catch( err =>{
              const error= "Something went wrong. Check your input again"
              throw new Error(error)
        })
  
    return userData

}
const createUsers =  (schoolId,jwtToken,userInput,role) => {
  const {
    name,
    email,
    address,
    mobile,
    fatherName,
    motherName,
    gender,
    fatherOccupation,
    fatherMobile,
    alternativeMobile,
    admissionNo,
    dob
    } = userInput;
  
  
  const inputData = JSON.stringify({
    
    name: name,
    email:email,
    address:address,
    mobile:mobile,
    fatherName:fatherName,
    motherName:motherName,
    gender:gender,
    fatherOccupation:fatherOccupation,
    fatherMobile:fatherMobile,
    alternativeMobile:alternativeMobile,
    admissionNo:admissionNo,
    dob: dob.toLocaleDateString(),
    isHosteler:"false",
    role:role
    
    
    
  })

  
  axios.post(`${ServerDomain}/users`,inputData,{
              headers: { 
                  "Content-Type":"application/json",
                    "Authorization":`Bearer ${jwtToken}`
              },
            })
        .then(resData=>{
              console.log('New Users has been created')
        })
        .catch(err=>{
              const error= "Something went wrong. Check your input again"
              throw new Error(error)    
        });
  
  
  
}

export {loginAccount,createUsers}