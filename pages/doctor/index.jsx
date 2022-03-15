import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import ListJanjiKunjungan from "../../components/dokter/ListJanjiKunjungan";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [pasienSum, pasienSumSet] = useState("")
  const [kunjunganSumToday, kunjunganSumTodaySet] = useState("")
  const [kunjunganSum, kunjunganSumSet] = useState("")

  const dispatch = useDispatch();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const profile = useSelector((data)=> data.doctorProfile)
  
  useEffect(()=>{
    dispatch(allStore.getDoctorProfile(token))
    let uid = profile.doctor_uid
    dispatch(allStore.totalPasien(uid)).then((e)=>{pasienSumSet(e.data.visits.length);})
    dispatch(allStore.kunjunganSumToday(uid)).then((e)=>{kunjunganSumTodaySet(e.data.visits.length);})
    dispatch(allStore.kunjunganSum(uid)).then((e)=>{kunjunganSumSet(e.data.visits.length);})
  },[])

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
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
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
                  className=" text-[#356E79] flex justify-start text-2xl font-bold leading-6  border-b-2 py-3 border-gray-500"
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

                <p className=" form-textarea text-[#356E79] flex justify-start text-2xl font-bold leading-6 border-b-2 border-gray-500 py-3">
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
                    Lihat Detail Pasien
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Periksa Sekarang
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* dashboard */}
      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
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
