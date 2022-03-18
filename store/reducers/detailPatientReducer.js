const initialState = {
  detailPatient: [],
  patientDiagnose: [],
};

const detailPatientReducer = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_PATIENT") {
    return {
      ...state,
      detailPatient: action.payload,
    };
  } else if (action.type === "SET_PATIENT_DIAGNOSE") {
    return {
      ...state,
      patientDiagnose: action.payload,
    };
  }
  return state;
};

export default detailPatientReducer;
