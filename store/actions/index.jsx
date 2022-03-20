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
  getVisitPatient
} from "./dashboardDoctor";
import { getPatientList } from "./getPatientList";
import { getVisitList } from "./getVisitList";
import { todayVisitList } from "./todayVsitAction";
import { detailPatient, patientDiagnose } from "./detailPatientAction";
import { checkDoctorEmail, checkPatientEmail, checkDoctorUsername, doDoctorCompleteForm, checkPatientUsername ,doPatientCompleteForm } from "./loginRegister";
import { createVisit, deleteVisit } from "./visitCommand";

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
  checkDoctorUsername,
  checkDoctorEmail,
  doDoctorCompleteForm,
  checkPatientUsername,
  checkPatientEmail,
  doPatientCompleteForm,
  getJKByDate,
  createVisit,
  deleteVisit,
  getVisitPatient
  
};

export default allStore;
