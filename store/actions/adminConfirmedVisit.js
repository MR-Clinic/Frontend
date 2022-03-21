import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const addConfirmVisit = (nik) => {
  return (dispatch) => {
    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },

        params: {
          kind: "patient",
          uid: nik,
        },
      })
      .then((response) => {
        dispatch(setAdminVisit(response.data.data.visits));
        console.log("confirme visit",response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const setAdminVisit = (payload) => {
  return {
    type: "SET_ADMIN_VISIT",
    payload,
  };
};
