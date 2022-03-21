import axios from "axios";
import moment from "moment";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"
const visitUrl = baseUrl+"visit"
const patientUrl = baseUrl+"patient/profile"
const Token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
let date = new Date()
date = moment(date).format("DD-MM-YYYY")


export const totalPasien = (uid) =>{
    return (dispatch) => {
        return new Promise((resolve, reject)=>{
            axios
            .get(visitUrl,
                {
                    headers:{
                        Authorization: 'Bearer '+Token
                    },
                    params:{
                        kind: "doctor",
                        uid: uid,
                        grouped: "patient"
                    }
                })
            .then((data)=>{
                resolve(data.data)
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const kunjunganTotalToday = (uid) =>{
    return (dispatch) => {
        let date = new Date()
        date = moment(date).format("DD-MM-YYYY")
        console.log(date);
        return new Promise((resolve, reject)=>{
            axios
            .get(visitUrl,
                {
                    headers:{
                        Authorization: 'Bearer '+Token
                    },
                    params:{
                        kind: "doctor",
                        uid: uid,
                        date: date,
                        grouped: "patient"
                    }
                })
            .then((data)=>{
                resolve(data.data)
                console.log(data.data);
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const kunjunganTotal = (uid) =>{
    return (dispatch) => {
        return new Promise((resolve, reject)=>{
            axios
            .get(visitUrl,
                {
                    headers:{
                        Authorization: 'Bearer '+Token
                    },
                    params:{
                        kind: "doctor",
                        uid: uid,
                    }
                })
            .then((data)=>{
                resolve(data.data)
                console.log(data.data);
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const getTodayJK = (uid) =>{
    return (dispatch) => {
        axios
        .get(visitUrl,{
            headers:{
                Authorization : "Bearer "+Token
            },
            params:{
                kind: "doctor",
                uid : uid,
                date: date,
                grouped: "patient"
            }
        })
        .then(({data})=>{
            dispatch(setListJK(data.data))
        })
        .catch((response)=>{
            console.log("error getList Kj", response);
        })
    }
}

export const getAllJK = (uid) =>{
    return (dispatch) => {
        axios
        .get(visitUrl,{
            headers:{
                Authorization : "Bearer "+Token
            },
            params:{
                kind: "doctor",
                uid : uid,
                status: ""
            }
        })
        .then(({data})=>{
            dispatch(setListJK(data.data))
        })
        .catch((response)=>{
            console.log("error getList Kj", response);
        })
    }
}

export const getPatientModal = (id) =>{
    return (dispatch) => {
        return new Promise((resolve, reject)=>{
            axios
            .get(patientUrl,
                {
                    headers:{
                        Authorization: 'Bearer '+Token
                    },
                    params:{
                        patient_uid : id
                    }
                })
            .then(({data})=>{
                console.log("patient",data.data);
                resolve(data.data)
            })
            .catch(({response})=>{
                console.log(response.data);
                reject(response)
            })
        })
    }
}

export const getJKByDate = (uid, date) =>{
    return (dispatch) => {
        return new Promise((resolve,reject)=>{
            axios
            .get(visitUrl,
                {
                    headers:{
                        Authorization: "Bearer "+Token
                    },
                    params:{
                        kind: "doctor",
                        uid: uid,
                        date: date
                    }
                })
            .then(({data})=>{
                resolve(data.data);
            })
            .catch(({response})=>{
                reject(response)
            })
                
        })
    }
}



export const setListJK = (payload) =>{
    return{
        type: "set_list_jk",
        payload,
    }
}