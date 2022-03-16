import { combineReducers } from "redux";
import patientDetailReducer from "./patientDetailReducer";
import getAllDoctorsReducer from "./getAllDoctorReducer";
import historyVisitReducer from "./historyVisitReducer";
import doctorProfile from "./doktorProfile";
import patientListReducer from "./getPatientListReducer";
import visitListReducer from "./getVisitListReducer";
import getListJK from "./getListJK";


const rootReducers = combineReducers({
  patientDetailReducer,
  getAllDoctorsReducer,
  historyVisitReducer,
  doctorProfile,
  patientListReducer,
  visitListReducer,
  getListJK
});

export default rootReducers;
