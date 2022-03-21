import { getAllDoctors } from "./getAllDoctorAction";
import { getPatientDetails } from "./patientDetailAction";
import { getHistoryVisit, getAllHistoryVisit } from "./historyVisitAction";
import { getDoctorProfile } from "./getDoctorProfile";
import {
  totalPasien,
  kunjunganTotalToday,
  kunjunganTotal,
  getTodayJK,
  getAllJK,
  getPatientModal,
  getJKByDate,
} from "./dashboardDoctor";
import { getPatientList } from "./getPatientList";
import { getVisitList } from "./getVisitList";
import { todayVisitList } from "./todayVsitAction";
import { detailPatient, patientDiagnose } from "./detailPatientAction";
import { getAllPatient } from "./getAllPatientAction";
import {
  checkDoctorEmail,
  checkPatientEmail,
  checkDoctorUsername,
  doDoctorCompleteForm,
  checkPatientUsername,
  doPatientCompleteForm,
} from "./loginRegister";
import { createVisit, deleteVisit, putVisit } from "./visitCommand";
import { addConfirmVisit } from "./adminConfirmedVisit";

const allStore = {
  getAllDoctors,
  getPatientDetails,
  getHistoryVisit,
  getAllHistoryVisit,
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
  checkDoctorUsername,
  checkDoctorEmail,
  doDoctorCompleteForm,
  checkPatientUsername,
  checkPatientEmail,
  doPatientCompleteForm,
  getJKByDate,
  createVisit,
  deleteVisit,
  putVisit,
};

export default allStore;
