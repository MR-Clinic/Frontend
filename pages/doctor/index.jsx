import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  return (
    <div>
      <Nav />
      <Sidebar />
      {/* dashboard */}
      <div className="bg-[#E4F5E9] text-[#324B50]">
        <div className="ml-[7%]">
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
          {/* list janji kunjungan */}
          <div className="text-3xl font-bold pl-5 pt-16">
            {" "}
            List Janji Kunjungan{" "}
          </div>
          <div className="flex flex-wrap items-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-yellow-300 font-semibold  rounded-md px-2 py-1">
                  Pending
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5 ">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-rose-400 font-semibold  rounded-md px-2 py-1">
                  canceled
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold  rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
