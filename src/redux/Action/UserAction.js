import ServerDomain from "../../serverdomain";
import axios from 'axios';
import { format } from 'date-fns';

const loginAccount = async (userInput) => {
      const { schoolCode, username, password, role } = userInput;
      const inputData = JSON.stringify({
            username: username,
            password: password,
            role: role,
      })
      let userData = axios.post(`${ServerDomain}/auth/login`, inputData, {
            headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
            },
      })
            .then(resData => {
                  console.log(`Login ${username} success`)
                  console.log(resData.data);
                  return resData;
            })
            .catch(err => {
                  const error = "Something went wrong. Check your input again"
                  throw new Error(error)
            })

      return userData

}
const createUsers = (jwtToken, userInput, role) => {
      let inputData = {};

      console.log(format(userInput.dob, `yyyy-MM-dd`))
      //fix date of birth tomorrow
      if (role === 'student')
            inputData = JSON.stringify({
                  name: userInput.name,
                  email: "mmr337779999231@gmail.com",
                  address: `${userInput.permaaddress}, ${userInput.permacity}, ${userInput.permastate}, ${userInput.permapcode}`,
                  mobile: userInput.fathermobileno,
                  fatherName: userInput.fathername,
                  motherName: userInput.mothername,
                  gender: userInput.gender,
                  fatherOccupation: userInput.fatheroccupation,
                  fatherMobile: userInput.fathermobileno,
                  alternateMobile: userInput.alternatephoneno,
                  admissionNo: userInput.admissnumber,
                  //dob:,
                  isHosteler: "false",
                  role: role,
                  class: userInput.classvalue,
                  section: userInput.section

            })
      else {

      }
      console.log(inputData)
      axios.post(`${ServerDomain}/users`, inputData, {
            headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${jwtToken}`
            },
      })
            .then(resData => {
                  console.log('New Users has been created')
            })
            .catch(err => {
                  const error = "Something went wrong. Check your input again"
                  // throw new Error(error)
            });

}

export { loginAccount, createUsers }