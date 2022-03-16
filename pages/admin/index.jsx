import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";

function Index() {
  const [isOpenVisit, setIsOpenVisit] = useState(false);
  const [isOpenAddVisit, setIsOpenAddVisit] = useState(false);
  const [isOpenAddPatient, setIsOpenAddPatient] = useState(false);
  const [pasienSum, pasienSumSet] = useState("");
  const [kunjunganSumToday, kunjunganSumTodaySet] = useState("");
  const [kunjunganSum, kunjunganSumSet] = useState("");

  const dispatch = useDispatch();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const profile = useSelector((data) => data.doctorProfile);

  const dataTodayVisit = useSelector(
    (data) => data.todayVisitReducer.listTodayVisit
  );
  const dataPatient = useSelector(
    (data) => data.patientListReducer.adminPatientList
  );

  useEffect(() => {
    dispatch(allStore.todayVisitList());
    dispatch(allStore.getPatientList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allStore.getDoctorProfile(token));
    let uid = profile.doctor_uid;
    dispatch(allStore.totalPasien(uid)).then((e) => {
      pasienSumSet(e.data.visits.length);
    });
    dispatch(allStore.kunjunganSumToday(uid)).then((e) => {
      kunjunganSumTodaySet(e.data.visits.length);
    });
    dispatch(allStore.kunjunganSum(uid)).then((e) => {
      kunjunganSumSet(e.data.visits.length);
    });
  }, []);

  function closeModalVisit() {
    setIsOpenVisit(false);
  }

  function openModalVisit() {
    setIsOpenVisit(true);
  }
  function closeModalAddVisit() {
    setIsOpenAddVisit(false);
  }

  function openModalAddVisit() {
    setIsOpenAddVisit(true);
  }
  function closeModalAddPatient() {
    setIsOpenAddPatient(false);
  }

  function openModalAddPatient() {
    setIsOpenAddPatient(true);
  }

  return (
    <div>
      {/* modal konfirmasi kunjungan */}
      <Transition appear show={isOpenVisit} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModalVisit}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" text-[#356E79] inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-start text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  Data Umum
                </Dialog.Title>

                <div className=" grid grid-cols-2 text-medium w-full mt-5 ">
                  <div className="space-y-2 pl-2 text-sm">
                    {" "}
                    <p className="font-bold"> NIK </p>
                    <p className="font-bold"> Nama Lengkap </p>
                    <p className="font-bold"> Jenis Kelamin </p>
                    <p className="font-bold"> Alamat </p>
                    <p className="font-bold"> Tempat/Tanggal Lahir </p>
                    <p className="font-bold"> Agama </p>
                    <p className="font-bold"> Status </p>
                    <p className="font-bold"> Pekerjaan </p>
                  </div>
                  <div className="grid items-end space-y-2 pl-5 text-sm">
                    <p> : 121212121212</p>
                    <p> : Muhammad Rizki Adiwiganda</p>
                    <p> : Pria</p>
                    <p> : Jl. ABCD efghjkkk </p>
                    <p> : Medan, 22 November 1997</p>
                    <p> : Islam</p>
                    <p> : Lajang</p>
                    <p> : Web Developer</p>
                  </div>
                </div>

                <p className=" form-textarea text-[#356E79] flex justify-start text-xl font-bold leading-6 border-b-2 border-gray-500 py-3">
                  {" "}
                  Keluhan
                </p>
                <textarea
                  className="border w-11/12 h-[100px] border-[#356E79] rounded-md active:border-[#356E79] mt-5"
                  type="text"
                />

                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Konfirmasi Kunjungan
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* modal tambah kunjungan */}
      <Transition appear show={isOpenAddVisit} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModalAddVisit}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" text-[#356E79] inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-start text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  Cari Pasien
                </Dialog.Title>
                <div className="mt-5">
                  <label> Search By NIK : </label>
                  <input
                    className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                    type="text"
                  />
                  <div className="pb-10">
                    <table className="table-auto  bg-white py-4 text-xs rounded-lg drop-shadow-lg w-full mt-5">
                      <thead>
                        <tr>
                          <th className="border-b-2 py-4 text-center">NIK</th>
                          <th className="border-b-2 text-center ">Nama</th>
                          <th className="border-b-2 text-center ">Gender </th>
                          <th className="border-b-2 text-center">
                            Tanggal Masuk
                          </th>
                          <th className="border-b-2 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td className="py-2">12121212121</td>
                          <td>lidianto</td>
                          <td>Laki-Laki</td>
                          <td>22/10/11</td>
                          <td className="flex justify-center space-x-2 py-2">
                            <button className="bg-[#E4F5E9] text-[8px] px-2 selection:py-1 rounded-md hover:opacity-70">
                              {" "}
                              Details
                            </button>
                            <button className="bg-[#E4F5E9] text-[8px] px-2 py-1 rounded-md hover:opacity-70">
                              {" "}
                              Tambah Kunjungan
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className=" form-textarea text-[#356E79] flex justify-start text-xl font-bold leading-6 border-b-2 border-gray-500 py-3">
                  {" "}
                  Data Pasien
                </p>
                <div className=" grid grid-cols-2 text-medium w-full mt-5 ">
                  <div className="space-y-2 pl-2 text-sm">
                    {" "}
                    <p className="font-bold"> NIK </p>
                    <p className="font-bold"> Nama Lengkap </p>
                    <p className="font-bold"> Jenis Kelamin </p>
                    <p className="font-bold"> Alamat </p>
                    <p className="font-bold"> Tempat/Tanggal Lahir </p>
                    <p className="font-bold"> Agama </p>
                    <p className="font-bold"> Status </p>
                    <p className="font-bold"> Pekerjaan </p>
                  </div>
                  <div className="grid items-end space-y-2 pl-5 text-sm">
                    <p> : 121212121212</p>
                    <p> : Muhammad Rizki Adiwiganda</p>
                    <p> : Pria</p>
                    <p> : Jl. ABCD efghjkkk </p>
                    <p> : Medan, 22 November 1997</p>
                    <p> : Islam</p>
                    <p> : Lajang</p>
                    <p> : Web Developer</p>
                  </div>
                </div>

                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Tambah Kunjungan
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* modal tambah pasien*/}

      <Transition appear show={isOpenAddPatient} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModalAddPatient}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" text-[#356E79] inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-center capitalize text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  data pasien
                </Dialog.Title>

                <div className=" flex justify-center text-medium w-full mt-5 ">
                  <div className="grid grid-cols-2 pl-2">
                    <div className="space-y-7 mt-2 pl-6">
                      <p className=""> NIK : </p>
                      <p className="">Nama Lengkap :</p>
                      <p className="">Alamat :</p>
                      <p className=""> Gender :</p>
                    </div>
                    <div className="space-y-5 ">
                      <input
                        className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                        type="text"
                      />
                      <input
                        className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                        type="text"
                      />
                      <input
                        className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                        type="text"
                      />
                      <input
                        className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-bold mt-5 pl-6 mb-5"> Data Kelahiran</p>
                <div className="space-y-3 pl-6">
                  <div className="flex space-x-3">
                    <p className=""> Tempat : </p>
                    <input
                      className="border-2 w-[100px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className=""> Tanggal : </p>
                    <input
                      className="border-2 w-[50px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <input
                      className="border-2 w-[50px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <input
                      className="border-2 w-[50px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <p className=""> Pekerjaan : </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <p className=""> status : </p>
                    <input
                      className="border-2 w-[100px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className=""> Agama :</p>
                    <input
                      className="border-2 w-[100px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Tambah Pasien
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
        <div className="ml-[7%]">
          <div className="text-3xl font-bold pl-5 pt-5"> Dashboard </div>
          <div className="flex flex-wrap justify-start mt-10 mb-10">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {pasienSum} </p>
              <p className="text-xl text-center "> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganSumToday}</p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganSum} </p>
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
              onClick={openModalAddVisit}
            >
              Tambah Kunjungan
            </button>
          </div>
          <div className="flex flex-wrap items-start mt-10 mb-5 ">
            {dataTodayVisit
              ? dataTodayVisit.map((el, i) => (
                  <div
                    className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5"
                    key={i}
                  >
                    <p className="text-xl font-bold"> {el.patientName} </p>
                    <p className="">{el.gender} </p>
                    <p className=""> {el.nik} </p>
                    <div className="flex text-xs mt-3">
                      <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1 cursor-pointer">
                        pending
                      </p>
                      <p
                        className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer"
                        onClick={openModalVisit}
                      >
                        {" "}
                        Konfirmasi
                      </p>
                    </div>
                  </div>
                ))
              : null}
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
              onClick={openModalAddPatient}
            >
              Tambah Pasien
            </button>
          </div>
          <div className="pl-4 pb-36">
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
                {dataPatient
                  ? dataPatient.map((el, i) => (
                      <tr className="text-center" key={i}>
                        <td className="py-2"> {el.nik}</td>
                        <td>{el.patientName}</td>
                        <td>{el.gender}</td>
                        <td>{el.date}</td>
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
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
