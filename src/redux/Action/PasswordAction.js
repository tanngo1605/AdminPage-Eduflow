import ServerDomain from "../../serverdomain";

const forgetPassword =  (userInput) => {
    const {schoolCode,userID,emailID} = userInput;
    console.log(schoolId)
    axios.post(`${ServerDomain}/tickets`,inputData,{
              headers: { 
                "Content-Type":"application/json",
                "Authorization":`Bearer ${jwtToken}`
              },
          })
          .then(resData=>{
              console.log("New Events has been created")
          })
          .catch(err=>{
              const error= "Something went wrong. Check your input again"
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
    

    
}
export {addTicket,getTicket}