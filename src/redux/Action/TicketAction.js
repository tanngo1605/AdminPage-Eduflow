import ServerDomain from "../../serverdomain";
import axios from 'axios';

const addTicket = (ticketInput) => {
  const { title, datefrom, dateto, startTime, endTime, attachment, description, classvalue } = ticketInput;
  // console.log(schoolId)
  axios.post(`${ServerDomain}/tickets`, inputData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwtToken}`
    },
  })
    .then(resData => {
      console.log("New Events has been created")
    })
    .catch(err => {
      const error = "Something went wrong. Check your input again"
    });


}
const getTicket = async (schoolId) => {
  console.log(schoolId)
  const schoolEvents = await fetch(`${ServerDomain}/tickets`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!schoolEvents.ok) {

    const error = "Something went wrong. School Id not working"
    throw new Error(error)
  }

  const resData = await schoolEvents.json();

  return resData

}
export { addTicket, getTicket }