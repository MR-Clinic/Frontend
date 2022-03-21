const initialState = { listAllDoctors: [], isLoading: true };

const getAllDoctorsReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_ALL_DOCTORS") {
    return {
      ...state,
      listAllDoctors: action.payload,
    };
  }
  return state;
};

export default getAllDoctorsReducer;
