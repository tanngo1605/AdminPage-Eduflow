import ServerDomain from "../../serverdomain";

const addSchoolEvent =  (schoolId,eventInput) => {
    const {title,datefrom,dateto,startTime,endTime,attachment,description,classvalue} = eventInput;
    console.log(schoolId)
    const addEvent =  fetch(`${ServerDomain}/schools/${schoolId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        startTime: startTime,
        endTime:endTime,
        attachment:attachment,
        description:description,
        class:classvalue,
        section:title,
      }),
    });
  
    if(!addEvent.ok){
  
      const error= "Something went wrong. Check your input again"
      throw new Error (error)
    }
  
    const resData =  addEvent.json();
    
    return resData
    
}
const getSchoolEvent = async (schoolId) => {
    console.log(schoolId)
    const schoolEvents = await fetch(`${ServerDomain}/schools/${schoolId}/events`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    
    if(!schoolEvents.ok){
  
      const error= "Something went wrong. School Id not working"
      throw new Error (error)
    }
  
    const resData = await schoolEvents.json();
    
    return resData
    
}
export {addSchoolEvent,getSchoolEvent}