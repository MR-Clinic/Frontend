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
import { doDoctorSignUp, doDoctorCompleteForm, doPatientSignUp ,doPatientCompleteForm } from "./loginRegister";


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
  doDoctorSignUp,
  doDoctorCompleteForm,
  doPatientSignUp,
  doPatientCompleteForm

};

export default allStore;
