import {request} from '../api'

const addSchoolExam =  (schoolId,jwtToken,eventInput) => {
    const {title,classvalue,section,datefrom,dateto,startTime,endTime,attachment,} = eventInput;
    //description
    
    const inputData = {
      title,
      class:classvalue,
      section,
      startTime: new Date(`${datefrom.toLocaleDateString()} ${startTime}`),
      endTime: new Date(`${dateto.toLocaleDateString()} ${endTime}`),
      description:'con me gi do',
      attachment,
    }

    console.log(inputData)
    request(jwtToken).post(`/schools/${schoolId}/events`,inputData)
                     .then(resData=>{
                        alert("New exam has been created")
                      })
          
    
    
    
}
const getSchoolExam = async (schoolId,jwtToken) => {
    
     const examData = await request(jwtToken).get(`/schools/${schoolId}/events`)
                                             .then((resData)=>{
                                                return resData.data.data
                                              })
    
    return examData;
        
 
}
export {addSchoolExam,getSchoolExam}