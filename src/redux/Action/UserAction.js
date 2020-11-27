import ServerDomain from "../../serverdomain";
import axios from 'axios';
import {request} from '../api'
import { format } from 'date-fns';

const loginAccount = async (userInput) => {
    const {schoolCode,username,password} = userInput;
    const inputData = {
      username,
      password,
      role:"admin",
    }
    let userData=   request().post(`/auth/login`,inputData)
                              .then( resData =>{
                                    console.log(`Login ${username} success`)
                                    return resData;
                              })
                              
    return userData

}
const createUsers = (jwtToken,userInput,role) => {
  let inputData = {};
  
  //fix date of birth tomorrow
  if (role ==='student')
      inputData = JSON.stringify({
            name:userInput.name,
            email:"mmr337776699999@gmail.com",
            address:`${userInput.permaaddress}, ${userInput.permacity}, ${userInput.permastate}, ${userInput.permapcode}`,
            mobile:userInput.fathermobileno,
            fatherName:userInput.fathername,
            motherName:userInput.mothername,
            gender:userInput.gender,
            fatherOccupation:userInput.fatheroccupation,
            fatherMobile:userInput.fathermobileno,
            alternateMobile:userInput.alternatephoneno,
            admissionNo:userInput.admissnumber,
            dob:format(userInput.dob,`yyyy-MM-dd`),
            isHosteler:"false",
            role:role,
            class:userInput.classvalue,
            section:userInput.section

    })
  else{
        
  }
  console.log(inputData)
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
              alert(error)
        });

}

export {loginAccount,createUsers}