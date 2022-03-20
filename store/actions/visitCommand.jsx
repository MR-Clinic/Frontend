import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/"
const visitUrl = baseUrl+"visit"
const Token = typeof window !== "undefined" ? localStorage.getItem("token") : null;


export const createVisit = (uid , date)=>{
    let body = {
        "doctor_uid": uid,
        "date": date,
        "complaint": " "
    }
    return (dispatch) => {
        return new Promise((resolve,reject)=>{
            console.log("createVisit :" , Token);
            axios
            .post(visitUrl,body,
                {headers:{
                    Authorization: 'Bearer '+Token
                    }}
                )
            .then(({data})=>{
                resolve(data.data);
            })
            .catch(({response})=>{
                reject(response);
            })
        })
    }
}

export const deleteVisit = (uid) =>{

    let data = new FormData();
    data.append("status","cancelled");

    return(dispatch) =>{
        return new Promise((resolve, reject)=>{
            axios
            .delete(visitUrl+"/"+uid,{
                headers:{
                    Authorization:"Bearer "+Token
                }
            },
            data
            )
            .then(({data})=>{
                console.log("delete",data);    
            })
            .catch(({response})=>{
                console.log("delete",response);
            })
        })
    }
}