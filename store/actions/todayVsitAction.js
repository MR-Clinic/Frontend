import axios from "axios";
import moment from "moment";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
let date = new Date();
date = moment(date).format("DD-MM-YYYY");

export const todayVisitList = () => {
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
          // status: "pending",
          date: date,
        },
      })
      .then((response) => {
        dispatch(setTodayVisit(response.data.data.visits));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setTodayVisit = (payload) => {
  return {
    type: "SET_TODAY_VISIT",
    payload,
  };
};
