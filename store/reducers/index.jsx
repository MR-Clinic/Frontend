import { combineReducers } from "redux";
import patientDetailReducer from "./patientDetailReducer";
import getAllDoctorsReducer from "./getAllDoctorReducer";
import historyVisitReducer from "./historyVisitReducer";
import doctorProfile from "./doktorProfile";
import adminConfirmedReducer from "./adminConfirmedReducer";
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
  visitListReducer,
  getListJK,
  detailPatientReducer,
  todayVisitReducer,
  getAllPatientReducer,
  adminConfirmedReducer,
});

export default rootReducers;
