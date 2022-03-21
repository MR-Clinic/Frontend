import { getAllDoctors } from "./getAllDoctorAction";
import { getPatientDetails } from "./patientDetailAction";
import { getHistoryVisit } from "./historyVisitAction";
import { getDoctorProfile } from "./getDoctorProfile";
import {
  totalPasien,
  kunjunganTotalToday,
  kunjunganTotal,
  getTodayJK,
  getAllJK,
  getPatientModal,
} from "./dashboardDoctor";
import { getPatientList } from "./getPatientList";
import { getVisitList } from "./getVisitList";
import { todayVisitList } from "./todayVsitAction";
import { detailPatient, patientDiagnose } from "./detailPatientAction";
import { getAllPatient } from "./getAllPatientAction";
import { addConfirmVisit } from "./adminConfirmedVisit";

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
  getTodayJK,
  getAllJK,
  getPatientModal,
  todayVisitList,
  detailPatient,
  patientDiagnose,
  getAllPatient,
  addConfirmVisit,
};

export default allStore;
