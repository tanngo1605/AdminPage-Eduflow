import ServerDomain from "../../serverdomain";
import axios from 'axios';
import { request } from '../api'
import { format } from 'date-fns';

const loginAccount = async (userInput) => {
      const { role, username, password } = userInput;
      const inputData = {
            username,
            password,
            role,
      }
      let userData = request().post(`${ServerDomain}/auth/login`, inputData)
            .then(resData => {
                  console.log(`Login ${username} success`)
                  console.log(resData.data);

                  return resData;
            })


      return userData

}
const createUsers = (jwtToken, userInput, role) => {
      let inputData = {};

      //fix date of birth tomorrow
      if (role === 'student')
            inputData = {
                  name: userInput.name,
                  email: userInput.email,
                  address: `${userInput.permaaddress}, ${userInput.permacity}, ${userInput.permastate}, ${userInput.permapcode}`,
                  mobile: userInput.fathermobileno,
                  fatherName: userInput.fathername,
                  motherName: userInput.mothername,
                  gender: userInput.gender,
                  fatherOccupation: userInput.fatheroccupation,
                  fatherMobile: userInput.fathermobileno,
                  alternateMobile: userInput.alternatephoneno,
                  admissionNo: Number(userInput.admissnumber),
                  dob: format(userInput.dob, `yyyy-MM-dd`),
                  isHosteler: false,
                  role: role,
                  class: userInput.classvalue,
                  section: userInput.section
            }
      request(jwtToken).post(`${ServerDomain}/users`, inputData)
            .then(resData => {
                  console.log('New Users has been created')
            })


}

export { loginAccount, createUsers }