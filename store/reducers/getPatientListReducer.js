const initialState = { listPatient: [], isLoading: true };

const patientListReducer = (state = initialState, action) => {
  if (action.type === "SET_PATIENT_LIST") {
    return {
      ...state,
      listPatient: action.payload,
    };
  }
  return state;
};

export default patientListReducer;
