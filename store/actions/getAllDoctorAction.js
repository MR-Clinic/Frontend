import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/doctor/all";

export const GetAllDoctors = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch(setListAllDoctors(response.data.Doctors));
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
