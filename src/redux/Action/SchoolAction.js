import {request} from '../api'

const getSchoolInfo =  async (schoolId,jwtToken) => {
    
    const schoolData = await request(jwtToken).get(`/schools/${schoolId}`)
                                              .then(resData=>{
                                                  return resData.data.data.otp
                                              })
                            
    return schoolData 
}
const updateSchoolInfo =  async (schoolId,jwtToken,updateInput) => {
    const {
    //  name,
      schoolname,
    //  schoolcode,
      permaaddress,
      permacity,
      permastate,
      permapcode,
      schoolweb,
      schoolemail,
      contactnum,
      alternatephoneno,
   //   image
    } = updateInput;
    
    
    const inputData = {

      name: schoolname,
      email:schoolemail,
      address:`${permaaddress} ,${permacity},${permastate},${permapcode}`,
      mobile:contactnum,
      affiliationCode:schoolweb,
      board:'nhieulammoi',
      landLine:alternatephoneno
    }

    console.log(inputData)
    await request(jwtToken).put(`/schools/${schoolId}`,inputData)
                          .then(resData=>{
                                    alert("Update school successfully")
                          })   
}
const createSubject =  (schoolId,jwtToken,subjectInput) => {
  const {name,text} = subjectInput;
  
  
  const inputData = JSON.stringify({
    name: name,
    "":text,
  })

  
  request(jwtToken).post(`/subjects`,inputData)
                   .then(resData=>{
                        alert("New subject has been created")
                    })
}

const getSubject =  async (jwtToken) => {
 
  const subjectData = await request(jwtToken).get('/subjects',)
                                            .then(resData=>{
                                                return resData.data.data
                                            })
  return subjectData
  
  
  
}

const getSectionAndClass =  async (schoolId,jwtToken) => {

    const sectionAndClass =  await request(jwtToken).get(`/schools/${schoolId}/classes`)
                                                    .then((resData)=>{
                                                      return resData.data.data
                                                    })
   return sectionAndClass;
    
    
}
const addSectionAndClass =  (schoolId,jwtToken,sectionclassInput) => {

    const {classvalue,section} = sectionclassInput;

    const inputData = {
      class:classvalue.toUpperCase(),
      section:section.toUpperCase()
    }
    
    request(jwtToken).post(`/schools/${schoolId}/classes`,inputData)
                      .then(resData=>{
                                alert("New Class has been created")
                      })
           
}

export {getSchoolInfo,updateSchoolInfo,createSubject,getSubject,getSectionAndClass,addSectionAndClass}