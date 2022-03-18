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
export const doPatientSignUp = (formData) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .post(urlPatientSignUp,formData)
            .then(({data})=>{
                console.log("Pasien Sign Up success",data.data.token);
                resolve(data.data.token);
            })
            .catch(({response})=>{
                console.log("Pasien Sign Up error",response.data.message);
                reject(response.data.message);
            })
        })
    }
}

export const doPatientCompleteForm = (formData, token) =>{
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            axios
            .put(urlPatientSignUp,
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