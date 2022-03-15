import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"

export const getDoctorProfile = (token) => {
    return(dispatch) => {
        return new Promise((resolve, reject)=>{
            axios
            .get(baseUrl+"doctor/profile",{headers : { Authorization : "Bearer " + token}})
            .then(({data})=>{
                dispatch(setDoctorProfile(data.data))
                resolve(data.data);
            })
            .catch(({response})=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const setDoctorProfile = (payload) => {
    return{
        type: 'set_doctor_profile',
        payload
    }
}