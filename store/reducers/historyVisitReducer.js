const initialState = {
  listAllVisit: [],
  listAllAppointment: [],
  isLoading: true,
};

const historyVisitReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_HISTORY_VISIT") {
    return {
      ...state,
      listAllVisit: action.payload,
    };
  } else if (action.type === "SET_LIST_APPOINTMENT_VISIT") {
    return {
      ...state,
      listAllVisit: action.payload,
    };
  }
  return state;
};

export default historyVisitReducer;
