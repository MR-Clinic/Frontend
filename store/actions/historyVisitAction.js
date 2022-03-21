import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const nik = typeof window !== "undefined" ? localStorage.getItem("uid") : null;

export const getHistoryVisit = (isJanjiKunjungan, statusParam) => {
  return (dispatch) => {
    const getType =
      typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    const getUid =
      typeof window !== "undefined" ? localStorage.getItem("uid") : null;

    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },

        params: {
          kind: `${getType}`,
          uid: `${getUid}`,
          status: "pending",
        },
      })
      .then((response) => {
        if (isJanjiKunjungan) {
          dispatch(setListAppointmentVisit(response.data.data.visits));
        } else {
          dispatch(setListHistoryVisit(response.data.data.visits));
        }
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const getAllHistoryVisit = () => {
  return (dispatch) => {
    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
        params: {
          kind: "patient",
          uid: nik,
          status: "completed",
        },
      })
      .then((response) => {
        console.log("all", response.data.data.visits, nik);
        dispatch(setListHistoryVisit(response.data.data.visits));
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListHistoryVisit = (payload) => {
  return {
    type: "SET_LIST_HISTORY_VISIT",
    payload,
  };
};

export const setListAppointmentVisit = (payload) => {
  return {
    type: "SET_LIST_APPOINTMENT_VISIT",
    payload,
  };
};
