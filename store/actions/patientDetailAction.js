import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/patient/profile";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getPatientDetails = () => {
  return (dispatch) => {
    
    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
      .then((response) => {
        dispatch(setListPatientDetail(response.data.data));
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("uid", response.data.data.nik);
        localStorage.setItem("patient_uid", response.data.data.patient_uid);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListPatientDetail = (payload) => {
  return {
    type: "SET_LIST_PATIENT_DETAIL",
    payload,
  };
};
