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
          status: "pending",
        },
      })
      .then((response) => {
        dispatch(setAdminVisit(response.data.data.visits));
        console.log(response);
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
