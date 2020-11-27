import {request} from '../api'
const forgetPassword = async (emailID) => {
    
    const inputData = {
      username:emailID,
    }
    
    const OTP = await request().post(`/auth/forgot-password`,inputData)
                          .then(resData=>{
                              return resData.data.data.otp
                          })
  
    return OTP
}

const resetPassword = async (userInput) => {
  const {emailID,OTP,password,confirmPassword} = userInput;
    
  const inputData = {
    username:emailID,
    otp:OTP,
    password:password,
    confirmPassword:confirmPassword,
  }
  
  await request().post(`/auth/reset-password`,inputData)
        .then(resData=>{
            console.log(`${resData.data.message}`)
        })
}
export {forgetPassword,resetPassword}