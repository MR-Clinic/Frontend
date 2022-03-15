import axios from "axios";
import moment from "moment";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"
const visitUrl = baseUrl+"visit"
const Token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

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
                console.log(data);
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
                console.log(data, "sum hari ini");
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
                        date: date
                    }
                })
            .then((data)=>{
                console.log(data, "sum kunjungan");
                resolve(data.data)
            })
            .catch((response)=>{
                console.log(response);
                reject(response)
            })
        })
    }
}



export const setDashboardStatus = (payload) =>{
    return{
        type: "set_dashboard_list",
        payload,
    }
}