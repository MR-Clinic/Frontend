import { getAllDoctors } from "./getAllDoctorAction";
import { getPatientDetails } from "./patientDetailAction";
import { getHistoryVisit } from "./historyVisitAction";

const allStore = {
  getAllDoctors,
  getPatientDetails,
  getHistoryVisit,
};

export default allStore;
