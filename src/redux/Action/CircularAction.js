import {request} from '../api'

const addSchoolCircular =  (schoolId,jwtToken,circularInput) => {
    const {title,attachment} = circularInput;
    const inputData = JSON.stringify({
      title,
      url:URL.createObjectURL(attachment[0])
    })

    request(jwtToken).post(`/schools/${schoolId}/circulars`,inputData)
                     .then(resData=>{
                                alert("New circular has been created")
                     })
    
}
const getSchoolCircular = async (schoolId,jwtToken) => {
    
    const circularData= await request(jwtToken).get(`/schools/${schoolId}/circulars`)
                                                .then(resData=> {
                                                        return resData.data.data
                                                })
    
    return circularData;
 
}
export {addSchoolCircular,getSchoolCircular}