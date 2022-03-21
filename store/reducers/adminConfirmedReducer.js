const initialState = { adminVisitList: [], isLoading: true };

const adminConfirmedReducer = (state = initialState, action) => {
  if (action.type === "SET_ADMIN_VISIT") {
    return {
      ...state,
      adminVisitList: action.payload,
    };
  }
  return state;
};

export default adminConfirmedReducer;
