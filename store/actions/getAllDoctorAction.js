import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/doctor/all";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getAllDoctors = () => {
  return (dispatch) => {
    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
      .then((response) => {
        dispatch(setListAllDoctors(response.data.data.Doctors));
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListAllDoctors = (payload) => {
  return {
    type: "SET_LIST_ALL_DOCTORS",
    payload,
  };
};
