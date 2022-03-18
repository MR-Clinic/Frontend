import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"
const urlDoctorSignUp = baseUrl+"doctor"
const urlPatientSignUp = baseUrl+"patient"

export const doDoctorSignUp = (formData) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .post(urlDoctorSignUp,formData)
            .then(({data})=>{
                console.log("doDoctorSignUp success",data.data.token);
                resolve(data.data.token);
            })
            .catch(({response})=>{
                console.log("doDoctorSignUp error",response.data.message);
                reject(response.data.message);
            })
        })
    }
}

export const doDoctorCompleteForm = (formData, token) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .put(urlDoctorSignUp,
                formData,
                {headers : {
                    Authorization : "Bearer "+token,
                }}
                )
            .then(({data})=>{
                console.log("doDoctorSignUp success",data.data.token);
                resolve(data.data.token);
            })
            .catch(({response})=>{
                console.log("doDoctorSignUp error",response.data.message);
                reject(response.data.message);
            })
        })
    }
}