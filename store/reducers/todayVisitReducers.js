const initialState = { listTodayVisit: [], isLoading: true };

const todayVisitReducer = (state = initialState, action) => {
  if (action.type === "SET_TODAY_VISIT") {
    return {
      ...state,
      listTodayVisit: action.payload,
    };
  }
  return state;
};

export default todayVisitReducer;
