import axios from "axios";

const baseUrl = "https://faliqadlan.cloud.okteto.net/visit";
const getToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const getVisitList = () => {
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
          status: "pending",
        },
      })
      .then((response) => {
        dispatch(setVisitList(response.data.data.visits));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setVisitList = (payload) => {
  return {
    type: "SET_VISIT_LIST",
    payload,
  };
};
