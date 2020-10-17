import ServerDomain from "../../serverdomain";
import axios from 'axios';
const forgetPassword = async (emailID) => {
    
    const inputData = JSON.stringify({
      username:emailID,
    })
    
    const OTP = await axios.post(`${ServerDomain}/auth/forgot-password`,inputData,{
              headers: { 
                "Content-Type":"application/json",
              },
          })
          .then(resData=>{
              console.log(`${resData.data.message}`)
              console.log(resData.data.data.otp)
              return resData.data.data.otp
          })
          .catch(err=>{
              const error= "Something went wrong. Check your input again"
              throw new Error(error)
          });
  
    return OTP
}
const resetPassword = async (userInput) => {
  const {emailID,OTP,password,confirmPassword} = userInput;
    
  const inputData = JSON.stringify({
    username:emailID,
    otp:OTP,
    password:password,
    confirmPassword:confirmPassword,
  })
  
  await axios.post(`${ServerDomain}/auth/reset-password`,inputData,{
            headers: { 
              "Content-Type":"application/json",
            },
        })
        .then(resData=>{
            console.log(`${resData.data.message}`)
        })
        .catch(err=>{
            const error= "Something went wrong. Check your input again"
            throw new Error(error)
        });

  
}
export {forgetPassword,resetPassword}