import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getPatientList = () => {
  return (dispatch) => {
    const getType =
      typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    const getdoctorUid =
      typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;

    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },

        params: {
          // kind: `${getType}`,
          // uid: `${getdoctorUid}`,
          grouped: "patient",
        },
      })
      .then((response) => {
        dispatch(setPatientList(response.data.data.visits));
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const setPatientList = (payload) => {
  return {
    type: "SET_PATIENT_LIST",
    payload,
  };
};
