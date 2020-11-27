import axios from 'axios'
import baseURL from '../serverdomain'

export const request = (jwtToken='') => {
    
    
    let debugData = (data) => {
        //console.log(data)
        return Promise.resolve(data)
    }
    let debugCatchData = (err) => {
        //console.log(err.message)
        return Promise.reject(err)
    }
    let axiosSource = axios.create({
        headers: { 
            Accept: "application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${jwtToken}`
        },
    })
    return {
        get: function(url) {
            return axiosSource.get(baseURL + url).then(debugData).catch(debugCatchData)
        },
        post: function(url, data) {
            return axiosSource.post(baseURL + url, data).then(debugData).catch(debugCatchData)
        },
        delete: function(url){
            return axiosSource.delete(baseURL + url).then(debugData).catch(debugCatchData)
        }
    }
}