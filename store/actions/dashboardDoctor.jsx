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

export const kunjunganSumToday = (uid) =>{
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
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const kunjunganSum = (uid) =>{
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
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}

export const getAllListJK = (uid) =>{
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



export const setListJK = (payload) =>{
    return{
        type: "set_list_jk",
        payload,
    }
}