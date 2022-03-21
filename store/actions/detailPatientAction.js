import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net";
const detailUrl = baseUrl + "/patient/profile?";
const detailDiagnose = baseUrl + "/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const detailPatient = (patient_uid) => {
  return (dispatch) => {
    return new Promise((resolve, reject)=>{
      axios
        .get(detailUrl + "patient_uid=" + patient_uid, {
          headers: {
            Authorization: "Bearer " + getToken,
          },
        })
  
        .then((response) => {
          dispatch(setDetailPatient(response.data.data));
          resolve(response.data.data)
        })
        .catch((error) => {
          console.log(error);
          reject(error)
        });
    })
  };
};

export const patientDiagnose = (patient_uid) => {
  return (dispatch) => {
    console.log("ac patient_uid", patient_uid);
    axios
      .get(detailDiagnose, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
        params: {
          kind: "patient",
          uid: patient_uid,
        },
      })

      .then((response) => {
        dispatch(setPatientDiagnose(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setDetailPatient = (payload) => {
  return {
    type: "SET_DETAIL_PATIENT",
    payload,
  };
};

export const setPatientDiagnose = (payload) => {
  return {
    type: "SET_PATIENT_DIAGNOSE",
    payload,
  };
};
