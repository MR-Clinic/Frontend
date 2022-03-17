import { getAllDoctors } from "./getAllDoctorAction";
import { getPatientDetails } from "./patientDetailAction";
import { getHistoryVisit } from "./historyVisitAction";
import { getDoctorProfile } from "./getDoctorProfile";
import {
  totalPasien,
  kunjunganTotalToday,
  kunjunganTotal,
  getAllListJK,
  getPatientModal,
} from "./dashboardDoctor";
import { getPatientList } from "./getPatientList";
import { getVisitList } from "./getVisitList";
import { todayVisitList } from "./todayVsitAction";
import { detailPatient, patientDiagnose } from "./detailPatientAction";

const allStore = {
  getAllDoctors,
  getPatientDetails,
  getHistoryVisit,
  getDoctorProfile,
  totalPasien,
  kunjunganTotalToday,
  kunjunganTotal,
  getPatientList,
  getVisitList,
  getAllListJK,
  getPatientModal,
  todayVisitList,
  detailPatient,
  patientDiagnose,
};

export default allStore;
