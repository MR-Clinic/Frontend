import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net";
const detailUrl = baseUrl + "/patient/profile?";
const detailDiagnose = baseUrl + "/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const detailPatient = (patient_uid) => {
  return (dispatch) => {
    axios
      .get(detailUrl + "patient_uid=" + patient_uid, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })

      .then((response) => {
        dispatch(setDetailPatient(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const patientDiagnose = (patient_uid) => {
  return (dispatch) => {
    axios
      .get(detailDiagnose, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
        params: {
          kind: "patient",
          uid: patient_uid,
          status: "ready",
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
