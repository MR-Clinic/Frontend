import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] text-[#324B50]">
        <div className="ml-[10%]">
          <div className="text-3xl font-bold pl-5 pt-5"> Dashboard </div>
          <div className="flex flex-wrap justify-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center "> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center"> Total Janji Kunjungan </p>
            </div>
          </div>
          <div className="text-3xl font-bold pl-5 pt-5">
            {" "}
            List Janji Kunjungan{" "}
          </div>
          <div className="flex flex-wrap justify-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col items-center ml-5">
              <p className="text-4xl font-bold"> 50 </p>
              <p className=""> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-center ml-5">
              <p className="text-4xl font-bold"> 50 </p>
              <p className=""> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-center ml-5">
              <p className="text-4xl font-bold"> 50 </p>
              <p className=""> Total Pasien </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
