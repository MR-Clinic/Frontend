import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getHistoryVisit = (isJanjiKunjungan, statusParam) => {
  return (dispatch) => {
    console.log("masuk fungsi get detail", getToken);
    const getType =
      typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    const getUid =
      typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;

    axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + getToken,
        },

        params: {
          kind: `${getType}`,
          uid: `${getUid}`,
          status: statusParam,
        },
      })
      .then((response) => {
        if (isJanjiKunjungan) {
          dispatch(setListAppointmentVisit(response.data.data.visits));
        } else {
          dispatch(setListHistoryVisit(response.data.data.visits));
        }
        console.log(response);
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
