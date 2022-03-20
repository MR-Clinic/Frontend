import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"
const urlDoctorSignUp = baseUrl+"doctor"
const urlPatientSignUp = baseUrl+"patient"

export const checkDoctorUsername = (username) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .get(urlDoctorSignUp+"/check",{
                params:{
                    "userName" : username 
                }})
            .then(({data})=>{
                console.log("checkDoctorUsername success",data);
                reject(data);
            })
            .catch(({response})=>{
                console.log("checkDoctorUsername error",response.data.message);
                resolve(response.data.message);
            })
        })
    }
}

export const checkDoctorEmail = (email) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .get(urlDoctorSignUp+"/check",{
                params:{
                    "email" : email 
                }})
            .then(({data})=>{
                console.log("checkDoctorUsername success",data);
                reject(data);
            })
            .catch(({response})=>{
                console.log("checkDoctorUsername error",response.data.message);
                resolve(response.data.message);
            })
        })
    }
}

export const doDoctorCompleteForm = (formData) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .post(urlDoctorSignUp,
                formData,)
            .then(({data})=>{
                resolve(data.data.token);
            })
            .catch(({response})=>{
                reject(response.data.message);
            })
        })
    }
}

export const checkPatientUsername = (username) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .get(urlPatientSignUp+"/check",
                {params:{
                    "userName":username
                }})
            .then(({data})=>{
                console.log("Pasien Sign Up success",data);
                reject(data);
            })
            .catch(({response})=>{
                console.log("Pasien Sign Up error",response);
                resolve(response);
            })
        })
    }
}

export const checkPatientEmail = (email) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .get(urlPatientSignUp+"/check",
                {params:{
                    "email":email
                }})
            .then(({data})=>{
                console.log("Pasien Sign Up success",data);
                reject(data);
            })
            .catch(({response})=>{
                console.log("Pasien Sign Up error",response);
                resolve(response);
            })
        })
    }
}

export const doPatientCompleteForm = (formData) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .post(urlPatientSignUp,
                formData)
            .then(({data})=>{
                console.log("checkDoctorUsername success",data.data.token);
                resolve(data.data.token);
            })
            .catch(({response})=>{
                console.log("checkDoctorUsername error",response.data.message);
                reject(response.data.message);
            })
        })
    }
}