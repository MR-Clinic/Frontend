import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getPatientList = () => {
  return (dispatch) => {
    console.log("masuk fungsi get detail", getToken);
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
          kind: `${getType}`,
          uid: `${getdoctorUid}`,
          grouped: "patient",
        },
      })
      .then((response) => {
        dispatch(setPatientList(response.data.data.visits));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setPatientList = (payload) => {
  return {
    type: "SET_PATIENT_LIST",
    payload,
  };
};
