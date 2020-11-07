import ServerDomain from "../../serverdomain";
import axios from 'axios';
const addTimetable = (schoolId, jwtToken, eventInput) => {
  const { period, day, startTime, endTime, classvalue, section } = eventInput;
  
  const inputData = JSON.stringify({
    period: period,
    day: day,
    startTime: startTime,
    endTime: endTime,
    class: classvalue,
    section: section
  }, null, 4)

  console.log(inputData);
  axios.post(`${ServerDomain}/schools/${schoolId}/timetables`, inputData,
    {

      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken} ` },
    })
    .then(
      res => {
        console.log(res);
        // console.log(res.data);
      }
    )
    .catch(
      err => {
        const error = "Something went wrong. Check your input again"
        // throw new Error(error)
      }
    )

  // return resData;

}


export default addTimetable 