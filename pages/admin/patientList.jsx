import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

function patientList() {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-screen text-[#324B50]">
        <div className="ml-[7%]">
          <p className="text-2xl font-bold pt-5 mb-3"> Daftar Pasien</p>
          <div className="flex flex-wrap items-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="font-bold py-1">18 visits</p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer">
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
                <p className="font-bold py-1">18 visits</p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer">
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
                <p className="font-bold py-1">18 visits</p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer">
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
                <p className="font-bold py-1">18 visits</p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default patientList;
