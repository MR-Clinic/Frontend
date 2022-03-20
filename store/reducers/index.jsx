import { combineReducers } from "redux";
import patientDetailReducer from "./patientDetailReducer";
import getAllDoctorsReducer from "./getAllDoctorReducer";
import historyVisitReducer from "./historyVisitReducer";
import doctorProfile from "./doktorProfile";
import patientListReducer from "./getPatientListReducer";
import visitListReducer from "./getVisitListReducer";
import getListJK from "./getListJK";
import detailPatientReducer from "./detailPatientReducer";
import todayVisitReducer from "./todayVisitReducers";
import getAllPatientReducer from "./getAllPatientReducer";

const rootReducers = combineReducers({
  patientDetailReducer,
  getAllDoctorsReducer,
  historyVisitReducer,
  doctorProfile,
  patientListReducer,
  visitListReducer,
  getListJK,
  detailPatientReducer,
  todayVisitReducer,
  getAllPatientReducer,
});

export default rootReducers;
