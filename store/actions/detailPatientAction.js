import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/patient/profile";

export const detailPatient = (patient_uid) => {
  return (dispatch) => {
    axios
      .get(baseUrl + patient_uid)
      .then((response) => {
        dispatch(setDetailPatient(response.data.data));
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
