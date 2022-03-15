const initialState = { listPatientDetail: [], isLoading: true };

const patientDetailReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_PATIENT_DETAIL") {
    return {
      ...state,
      listPatientDetail: action.payload,
    };
  }
  return state;
};

export default patientDetailReducer;
