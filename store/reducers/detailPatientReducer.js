const initialState = {
  detailPatient: [],
};

const detailPatientReducer = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_PATIENT") {
    return {
      ...state,
      detailPatient: action.payload,
    };
  }
  return state;
};

export default detailPatientReducer;
