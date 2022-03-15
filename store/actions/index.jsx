import { getAllDoctors } from "./getAllDoctorAction";
import { getPatientDetails } from "./patientDetailAction";
import { getHistoryVisit } from "./historyVisitAction";
import { getDoctorProfile } from "./getDoctorProfile"
import { totalPasien, kunjunganSumToday, kunjunganSum, getAllListJK, getPatientModal } from "./dashboardDoctor";

const allStore = {
  getAllDoctors,
  getPatientDetails,
  getHistoryVisit,
  getDoctorProfile,
  totalPasien,
  kunjunganSumToday,
  kunjunganSum,
  getAllListJK,
  getPatientModal

};

export default allStore;
