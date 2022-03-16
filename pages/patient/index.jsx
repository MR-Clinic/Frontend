import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "../../assets/avatar1.png";
import Navbar from "../../components/navbar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import allStore from "../../store/actions";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const dataDoctor = useSelector(
    (data) => data.getAllDoctorsReducer.listAllDoctors
  );
  const dataPatient = useSelector(
    (data) => data.patientDetailReducer.listPatientDetail
  );

  const dataHistory = useSelector(
    (data) => data.historyVisitReducer.listAllVisit
  );

  const dataAppointment = useSelector(
    (data) => data.historyVisitReducer.listAllAppointment
  );
  // console.log(dataHistory, "ini data history");

  useEffect(() => {
    dispatch(allStore.getAllDoctors());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allStore.getPatientDetails());
  }, [dispatch]);

  useEffect(() => {
    // console.log("masuk use effect", allStore);
    dispatch(allStore.getHistoryVisit(true, "pending"));
    dispatch(allStore.getHistoryVisit(false, "ready"));
  }, [dispatch]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
                  className=" text-[#356E79] flex justify-center text-lg font-bold leading-6  border-b-2 py-3"
                >
                  Konfirmasi Janji Kunjungan
                </Dialog.Title>

                <div className=" text-medium">
                  <div className="mt-5 flex justify-center">
                    <div className="w-[100px] rounded-full ">
                      <Image src={avatar} alt="logo dokter" />
                    </div>
                    <div className="pl-10 items-center text-lg">
                      <p className="font-semibold">dr. Rizki Awenk</p>
                      <p className="font-light text-sm">
                        {" "}
                        jl depan rumah aspal bolong-bolong banyakk batunya
                        waaawwww
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="grid font-bold mt-5  ">
                    <div className="flex ">
                      <p className="text-sm text-left"> pilih tanggal : </p>
                      <input
                        className=" mx-2 w-[50px] border-[#324B50]"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="flex font-bold">
                      <p className="text-sm"> kuota kunjungan : </p>
                      <p className="font-bold px-2"> 50</p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        if (date === "") {
                          swal("maaf", "isi tanggal terlebih dahulu", "error");
                        } else {
                          swal(
                            "selamat!",
                            "anda berhasil menambahkan hari!",
                            "success"
                          );
                        }
                        closeModal();
                      }}
                    >
                      buat janji
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Navbar dataPatient={dataPatient ? dataPatient : false} />

      {/* profile section */}
      <div className="bg-[#E4F5E9] h-full text-[#356E79]">
        <div className="grid grid-cols-2">
          <div className="pl-8 pt-8">
            <p className="font-bold text-xl mb-5"> Profile Data</p>
            <div className="bg-white border-2  mb-5 rounded-lg px-5 w-[80%] drop-shadow-lg">
              <div className="flex justify-start py-5 ">
                <div className="grid grid-cols-2 ">
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
                  {dataPatient ? (
                    <div className="grid items-end space-y-2 pl-5 text-sm">
                      <p> : {dataPatient.nik}</p>
                      <p> : {dataPatient.name}</p>
                      <p> : {dataPatient.gender}</p>
                      <p> : {dataPatient.address} </p>
                      <p>
                        {" "}
                        : {dataPatient.placeBirth}, {dataPatient.dob}
                      </p>
                      <p> : {dataPatient.religion}</p>
                      <p> : {dataPatient.status}</p>
                      <p> : {dataPatient.job}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* appointment section */}
            <p className="font-bold text-xl mb-5">Janji Kunjungan</p>
            <div className="bg-white border-2  mb-5 rounded-lg px-5 w-[584px] drop-shadow-lg ">
              <div className="flex justify-start py-5 ">
                {dataAppointment
                  ? dataAppointment.map((el, i) => (
                      <div className="grid grid-cols-2 " key={i}>
                        <div className="grid space-y-2 pl-4">
                          {" "}
                          <p className="font-bold"> Dokter </p>
                          <p className="font-bold"> Hari Kunjungan </p>
                          <p className="font-bold"> Alamat </p>
                        </div>
                        <div className="grid items-end space-y-2 pl-5">
                          <p> : dr awenk {el.doctorName}</p>
                          <p> : 22/03/2022 {el.date}</p>
                          <p> : Jl. ABCD efghjkkk{el.doctorAddress} </p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>

          {/* doctor list */}
          <div className=" ml-[-100px] pt-8  ">
            <p className="font-bold text-xl"> List Dokter</p>
            <div className=" flex flex-wrap max-h-[75vh] max-w-[60vw] overflow-y-scroll z-0">
              {dataDoctor
                ? dataDoctor.map((el, i) => (
                    <div
                      className="bg-[#324B50] w-[250px] h-[170px] pt-8 mt-5 rounded-lg mr-4  drop-shadow-lg"
                      key={i}
                    >
                      <div className="bg-white h-full text-[10px]">
                        <div className="flex justify-center ">
                          <div className="w-[60px] rounded-full pt-4 pl-1">
                            <Image src={avatar} alt="doctor-img" />{" "}
                          </div>
                          <div className="ml-6 pt-2">
                            {" "}
                            <p className="font-semibold text-sm ">{el.name}</p>
                            <p className="w-[140px]"> {el.address}</p>
                            <p>
                              {" "}
                              <span className="font-bold">
                                {" "}
                                Left Capacity :{" "}
                              </span>
                              {el.leftCapacity}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-start px-3">
                          <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                            <button className=" w-[50px]" onClick={openModal}>
                              {" "}
                              buat janji{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

        {/* history visit */}
        <div className="grid justify-start pl-8 pt-5 text-sm ">
          <p className="font-bold text-xl mb-5">Riwayat Kunjungan</p>
          <table className="table-auto bg-white py-3 rounded-lg drop-shadow-lg w-[93vw]  mb-10">
            <thead>
              <tr>
                <th className="border-b-2 py-2 ">Tanggal</th>
                <th className="border-b-2 ">Dokter</th>
                <th className="border-b-2 ">Alamat Praktek </th>
                <th className="border-b-2 ">Diagnosa Utama</th>
                <th className="border-b-2 ">Diagnosa Tambahan</th>
                <th className="border-b-2 ">Daftar obat</th>
              </tr>
            </thead>
            <tbody>
              {dataHistory
                ? dataHistory.map((el, i) => (
                    <tr className="text-center" key={i}>
                      <td className="py-2">05/03/22 {el.date}</td>
                      <td>dr. lindawati {el.doctorName}</td>
                      <td>jl. sana sini bisa kemana aja {el.doctorAddress}</td>
                      <td>flu{el.mainDiagnose}</td>
                      <td>demam dll{el.addiditionDiagnose}</td>
                      <td>lihat resep{el.recipe}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Index;
