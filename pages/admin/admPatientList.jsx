import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import allStore from "../../store/actions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function AdmPatientList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataPatientList = useSelector(
    (data) => data.patientListReducer.adminPatientList
  );
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  useEffect(() => {
    if (getType !== "admin") {
      router.push("/404");
    } else {
      dispatch(allStore.getPatientList());
    }
  }, [dispatch]);

  return (
    <>
      <Nav />

      <div className="bg-[#E4F5E9] h-screen text-[#324B50]">
        <div className="ml-[7%]">
          <p className="text-2xl font-bold pt-5 mb-3"> Daftar Pasien</p>
          <div className="flex flex-wrap items-start mt-10">
            {dataPatientList
              ? dataPatientList.map((el, i) => (
                  <div
                    className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5"
                    key={i}
                  >
                    <div className="text-[#324B50]">
                      <p className="text-xl font-bold"> {el.patientName} </p>
                      <p className=""> {el.gender} </p>
                      <p className=""> {el.nik}</p>

                      <div className="flex text-xs mt-3">
                        <p className="font-bold py-1"></p>
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
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmPatientList;
