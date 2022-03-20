import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/patient/profile?all=all";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getAllPatient = () => {
  return (dispatch) => {
    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
      .then((response) => {
        dispatch(allPatient(response.data.data.patients));
        return response.data.data.patients;
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const allPatient = (payload) => {
  return {
    type: "SET_ALL_PATIENT_LIST",
    payload,
  };
};
