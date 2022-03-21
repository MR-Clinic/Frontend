const initialState = { listAllPatients: [], isLoading: true };

const getAllPatientReducer = (state = initialState, action) => {
  if (action.type === "SET_ALL_PATIENT_LIST") {
    return {
      ...state,
      listAllPatients: action.payload,
    };
  }
  return state;
};

export default getAllPatientReducer;
