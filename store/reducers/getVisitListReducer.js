const initialState = { adminVisitList: [], isLoading: true };

const visitListReducer = (state = initialState, action) => {
  if (action.type === "SET_VISIT_LIST") {
    return {
      ...state,
      adminVisitList: action.payload,
    };
  }
  return state;
};

export default visitListReducer;
