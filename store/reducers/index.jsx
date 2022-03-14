import { combineReducers } from "redux";
import patientDetailReducer from "./patientDetailReducer";
import getAllDoctorsReducer from "./getAllDoctorReducer";

const rootReducers = combineReducers({
  patientDetailReducer,
  getAllDoctorsReducer,
});

export default rootReducers;
