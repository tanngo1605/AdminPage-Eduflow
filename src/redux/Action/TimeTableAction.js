import ServerDomain from "../../serverdomain";
import axios from 'axios';
const addGalleryImages =  (schoolId,jwtToken,imagesInput) => {
    const {title,datefrom,dateto,startTime,endTime,attachment,description,classvalue} = eventInput;
    
    
    const inputData = JSON.stringify({
      imageUrls:imagesInput
    })


    const resData =  axios.post(`${ServerDomain}/schools/${schoolId}/gallery`,inputData,{
                        headers: { "Authorization":`Bearer ${jwtToken}`},})
                        .then( 
                            function(resData) {
                                return resData.json()
                        })
                        .catch(
                            function(err) {
                                throw new Error (err)
                        });
   
    return;
    
}
const getGalleryImages = (schoolId,jwtToken) => {
    
    const resData = axios.get(`${ServerDomain}/schools/${schoolId}/gallery`,{
                                  headers: { "Authorization":`Bearer ${jwtToken}`},
                    }).then( 
                        function(resData) {
                          return resData.json
                        })
                      .catch(
                        function(err) {
                          throw new Error (err)
                      })
    return resData;
    
}
export {addGalleryImages,getGalleryImages}