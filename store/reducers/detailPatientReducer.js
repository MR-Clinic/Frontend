const initialState = {
  detailPatient: [],
  patientDiagnose: [],
};

const detailPatientReducer = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_PATIENT") {
    console.log("detail", action.payload);
    return {
      ...state,
      detailPatient: action.payload,
    };
  } else if (action.type === "SET_PATIENT_DIAGNOSE") {
    console.log("diagnose", action.payload);
    return {
      ...state,
      patientDiagnose: action.payload,
    };
  }
  return state;
};

export default detailPatientReducer;
