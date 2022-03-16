import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import ListJanjiKunjungan from "../../components/dokter/ListJanjiKunjungan";

function Dashboard() {
  const [pasienSum, pasienSumSet] = useState("0")
  const [kunjunganSumToday, kunjunganSumTodaySet] = useState("0")
  const [kunjunganSum, kunjunganSumSet] = useState("0")

  const dispatch = useDispatch();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;
  
  useEffect(()=>{
      dispatch(allStore.totalPasien(uid)).then((e)=>{pasienSumSet(e.data.visits.length);})
      dispatch(allStore.kunjunganSumToday(uid)).then((e)=>{kunjunganSumTodaySet(e.data.visits.length);})
      dispatch(allStore.kunjunganSum(uid)).then((e)=>{kunjunganSumSet(e.data.visits.length);})
      dispatch(allStore.getDoctorProfile(token))
  },[dispatch])


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Nav />
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
              <p className="text-5xl font-bold"> {kunjunganSumToday} </p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganSum} </p>
              <p className="text-xl text-center"> Total Janji Kunjungan </p>
            </div>
          </div>
          {/* list janji kunjungan */}
          <div className="text-3xl font-bold pl-5 pt-16">
            {" "}
            List Janji Kunjungan{" "}
          </div>
          <ListJanjiKunjungan/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
