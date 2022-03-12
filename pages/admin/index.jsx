import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

function Index() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
        <div className="ml-[7%]">
          <div className="text-3xl font-bold pl-5 pt-5"> Dashboard </div>
          <div className="flex flex-wrap justify-start mt-10 mb-10">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center "> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> 50 </p>
              <p className="text-xl text-center"> Total Janji Kunjungan </p>
            </div>
          </div>
          {/* list janji kunjungan */}
          <div className="flex justify-between w-10/12">
            <div className="text-3xl font-bold pl-5">
              {" "}
              List Kunjungan Hari Ini{" "}
            </div>
            <button
              type="button"
              className=" text-sm font-bold py-2 px-4 text-white bg-[#356E79] border border-transparent rounded-lg hover:opacity-80"
            >
              Tambah Kunjungan
            </button>
          </div>
          <div className="flex flex-wrap items-start mt-10 mb-5 ">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1 cursor-pointer">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex drop-shadow-lg flex-col items-start ml-5 w-[220px] mb-5">
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
            <div className="bg-white rounded-lg drop-shadow-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5 ">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-rose-400 font-semibold drop-shadow-lg  rounded-md px-2 py-1">
                  canceled
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg drop-shadow-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold pl-5"> Search List Pasien</p>{" "}
          <div className="flex justify-between w-10/12">
            <div>
              <div className="flex justify-between space-x-2 pt-4 pl-5">
                <p className="font-bold"> Search By NIK : </p>
                <input
                  className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                  type="text"
                />
                <button className="bg-[#356E79] text-sm  font-bold text-white px-3 py-1 rounded-md hover:opacity-70">
                  {" "}
                  Search
                </button>
              </div>
            </div>
            <button
              type="button"
              className=" text-sm font-bold  px-4 text-white bg-[#356E79] border border-transparent rounded-lg hover:opacity-80"
            >
              Tambah Pasien
            </button>
          </div>
          <div className="pl-4 pb-10">
            <table className="table-auto bg-white py-4  rounded-lg drop-shadow-lg w-10/12 mt-5">
              <thead>
                <tr>
                  <th className="border-b-2 py-4">NIK</th>
                  <th className="border-b-2 ">Nama</th>
                  <th className="border-b-2 ">Gender </th>
                  <th className="border-b-2 ">Tanggal Masuk</th>
                  <th className="border-b-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2">12121212121</td>
                  <td>lidianto</td>
                  <td>Laki-Laki</td>
                  <td>22/10/11</td>
                  <td className="flex justify-center space-x-2 py-2">
                    <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Details
                    </button>
                    <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Tambah Kunjungan
                    </button>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">12121212121</td>
                  <td>lidianto</td>
                  <td>Laki-Laki</td>
                  <td>22/10/11</td>
                  <td className="flex justify-center space-x-2 ">
                    <button className="bg-[rgb(228,245,233)] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Details
                    </button>
                    <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Tambah Kunjungan
                    </button>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">12121212121</td>
                  <td>lidianto</td>
                  <td>Laki-Laki</td>
                  <td>22/10/11</td>
                  <td className="flex justify-center space-x-2 ">
                    <button className="bg-[rgb(228,245,233)] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Details
                    </button>
                    <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70">
                      {" "}
                      Tambah Kunjungan
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
