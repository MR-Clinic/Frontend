import { combineReducers } from "redux";
import patientDetailReducer from "./patientDetailReducer";
import getAllDoctorsReducer from "./getAllDoctorReducer";
import historyVisitReducer from "./historyVisitReducer";
import doctorProfile from "./doktorProfile";

const rootReducers = combineReducers({
  patientDetailReducer,
  getAllDoctorsReducer,
  historyVisitReducer,
  doctorProfile
});

export default rootReducers;
