import ServerDomain from "../../serverdomain";
import axios from 'axios';
const addGalleryImages =  (schoolId,jwtToken,imagesInput) => {
    const {imageUrls} = imagesInput;
    
    
    const inputData = JSON.stringify({
      imageUrls:imageUrls
    })


    axios.post(`${ServerDomain}/uploads/gallery`,inputData,{
                        headers: { "Authorization":`Bearer ${jwtToken}`},})
                        .then( 
                            function(resData) {
                                return resData.json()
                        })
                        .catch(
                            function(err) {
                                throw new Error (err)
                        });
   
    
    
}
const getGalleryImages = (schoolId,jwtToken) => {
    
    const imageGallery = axios.get(`${ServerDomain}/uploads/gallery`,{
                                  headers: { "Authorization":`Bearer ${jwtToken}`},
                        })
                        .catch(err => {
                          throw new Error (err)
                        })
    return imageGallery.data.data;
    
}
export {addGalleryImages,getGalleryImages}