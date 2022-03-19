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
import { checkDoctorEmail, checkPatientEmail, checkDoctorUsername, doDoctorCompleteForm, checkPatientUsername ,doPatientCompleteForm } from "./loginRegister";


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
  checkDoctorUsername,
  checkDoctorEmail,
  doDoctorCompleteForm,
  checkPatientUsername,
  checkPatientEmail,
  doPatientCompleteForm

};

export default allStore;
