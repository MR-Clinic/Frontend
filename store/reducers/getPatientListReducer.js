const initialState = { adminPatientList: [], isLoading: true };

const patientListReducer = (state = initialState, action) => {
  if (action.type === "SET_PATIENT_LIST") {
    return {
      ...state,
      adminPatientList: action.payload,
    };
  }
  return state;
};

export default patientListReducer;
