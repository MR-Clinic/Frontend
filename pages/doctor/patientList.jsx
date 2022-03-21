import { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import allStore from "../../store/actions";

function PatientList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const getPatientList = useSelector(
    (data) => data.getPatientListReducer.listPatient
  );
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  useEffect(() => {
    if (getType !== "doctor") {
      router.push("/404");
    } else {
      dispatch(allStore.getPatientList());
    }
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Sidebar />

      <div className="bg-[#E4F5E9] h-screen text-[#324B50]">
        <div className="ml-[7%]">
          <p className="text-2xl font-bold pt-5 mb-3"> Daftar Pasien</p>

          <div className="flex flex-wrap items-start mt-10">
            {getPatientList
              ? getPatientList.map((el, i) => (
                  <div
                    className="bg-white rounded-lg p-5 flex flex-col items-start drop-shadow-lg ml-5 w-[220px] mb-5"
                    key={i}
                  >
                    <p className="text-xl font-bold">
                      {" "}
                      {el.patientName ? el.patientName : "tidak ada nama"}
                    </p>
                    <p className="">{el.gender}</p>
                    <p className=""> {el.nik} </p>
                    <div className="flex text-xs mt-3">
                      <p
                        className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer"
                        onClick={() => {
                          router.push(`/detailpatient/${el.patient_uid}`);
                        }}
                      >
                        {" "}
                        Detail Data
                      </p>
                    </div>
                  </div>
                ))
              : "tidak ada data yang ditampilkan"}
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientList;
