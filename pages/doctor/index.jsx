import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import ListJanjiKunjungan from "../../components/dokter/ListJanjiKunjungan";

function Dashboard() {
  const [pasienSum, pasienSumSet] = useState("0");
  const [kunjunganTotalToday, kunjunganTotalTodaySet] = useState("0");
  const [kunjunganTotal, kunjunganTotalSet] = useState("0");

  const dispatch = useDispatch();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const uid = typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;

  const dataDoctor = useSelector(
    (data) => data.getAllDoctorsReducer.listAllDoctors
  );

  useEffect(() => {
    dispatch(allStore.totalPasien(uid)).then((e) => {
      pasienSumSet(e.data.visits.length);
    });
    dispatch(allStore.kunjunganTotalToday(uid)).then((e) => {
      kunjunganTotalTodaySet(e.data.visits.length);
    });
    dispatch(allStore.kunjunganTotal(uid)).then((e) => {
      kunjunganTotalSet(e.data.visits.length);
    });
    dispatch(allStore.getDoctorProfile(token));
    console.log("run Dispatch");
  }, [dispatch]);

  useEffect(() => {
    dispatch(allStore.getAllDoctors());
  }, [dispatch]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Nav dataDoctor={dataDoctor ? dataDoctor : false} />
      <Sidebar />
      {/* dashboard */}
      <div className="bg-[#E4F5E9] min-h-screen text-[#324B50]">
        <div className="ml-[7%]">
          <div className="text-3xl font-bold pl-5 pt-5"> Dashboard </div>
          <div className="flex flex-wrap justify-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {pasienSum} </p>
              <p className="text-xl text-center "> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganTotalToday} </p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganTotal} </p>
              <p className="text-xl text-center"> Total Janji Kunjungan </p>
            </div>
          </div>
          {/* list janji kunjungan */}
          <div className="text-3xl font-bold pl-5 pt-16">
            Janji Kunjungan Hari Ini
          </div>
          <ListJanjiKunjungan />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
