import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "../../assets/avatar1.png";
import Navbar from "../../components/navbar";
import { BsCalendar2Event } from "react-icons/bs"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import allStore from "../../store/actions";
import { useRouter } from "next/router";
import moment from "moment";
import ReactLoading from "react-loading"

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [loadJK, loadJKSet] = useState(false);
  const [loadCK, loadCKSet] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  
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

  const [doctor_name, doctor_nameSet] = useState("");
  const [doctor_address, doctor_addressSet] = useState("");
  const [doctor_uid, doctor_uidSet] = useState("");
  const [doctor_cap, doctor_capSet] = useState("");
  const [cap,capSet] = useState("~");
  
  //Placeholder Date
  const today = moment(new Date()).format("YYYY-MM-DD");
  const [date, setDate] = useState("");
  const [datePh,datePhset] = useState("Tanggal");



  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

    
  useEffect(() => {

    if (getType !== "patient") {
      router.push("/404");
    } else {
      dispatch(allStore.getAllDoctors());
      dispatch(allStore.getPatientDetails());
      dispatch(allStore.getHistoryVisit(true, "pending"));
      dispatch(allStore.getAllHistoryVisit());
    }
    
    const interval = setInterval(() => {
        dispatch(allStore.getHistoryVisit(true, "pending"));
        dispatch(allStore.getAllHistoryVisit());
    }, 10000);
    
    return () => clearInterval(interval);
  },[]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleDate(e){
    capSet("~");
    datePhset(moment(e).format("DD-MM-YYYY"));
    setDate(moment(e).format("DD-MM-YYYY"));
    dispatch(allStore.getJKByDate(doctor_uid, date))
    .then((el)=>{
      let totalCap = doctor_cap - el.visits.length;
      console.log("total CAp:", totalCap);
      capSet(totalCap);
    })
    .catch((el)=>{
      console.log("getjkDate Failed: ",el);
    })
  }

  function handleModal(e){
    console.log(e);
    doctor_nameSet(e.name);
    doctor_addressSet(e.address);
    doctor_uidSet(e.doctor_uid);
    doctor_capSet(e.capacity);
    setDate("")
    datePhset("Tanggal")
    capSet("~")
    openModal();
  }

  function cancelJK(e) {
    swal({
      title: "Anda yakin ingin batalkan janji kunjungan ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(allStore.deleteVisit(e))
        .then(()=>{
          swal("Janji Berhasil Dibatalkan!", "", "success");
          window.location.reload();
        })
        .catch((error)=>{
          swal("Janji Gagal Dibatalkan!", error, "error");
        })
      }
    });
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
          <div className="min-h-screen bg-[#00000066] text-center">
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
              <div className=" text-[#356E79] inline-block w-full max-w-md px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-center text-lg font-bold leading-6  border-b-2 py-3"
                >
                  Konfirmasi Janji Kunjungan
                </Dialog.Title>

                <div className="flex  text-medium w-full">
                  <div className="mt-5 flex justify-center w-full">
                    <div className="min-w-[100px] w-[100px] rounded-full ">
                      <Image src={avatar} className="rounded-full" alt="logo dokter" />
                    </div>
                    <div className="pl-10 items-center text-lg w-72 max-w-[calc(90% - 100px)]">
                      <p className="text-2xl font-semibold truncate">{doctor_name}</p>
                      <p className="font-light text-md truncate">
                        {doctor_address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 my-4 capitalize">
                  <div className="grid grid-cols-2 font-bold gap-2 items-center">
                      <p className="text-sm text-left"> pilih tanggal  </p>
                      <div className="relative  before:content-[':'] before:mr-3 py-2 before:font-bold">
                        <span className="normal-case border-2 border-green-900 rounded py-2 px-3 w-8/12"> {datePh} <BsCalendar2Event className="inline-block ml-3"/></span>
                        <input className=" opacity-0 left-3 absolute" min={today}  type="date" onChange={(e) => handleDate(e.target.value)}/>
                      </div>
                      <p className="text-sm"> kuota kunjungan  </p>
                      <p className="font-bold before:content-[':'] before:mr-3"> {cap}</p>
                  </div>

                  <div className="mt-4 flex justify-start">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 capitalize py-2 text-sm font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        if (date === "" ) {
                          swal("Isi Tanggal Janji Kunjungan ","", "error");
                          setTimeout(() => {
                            swal.close();
                          }, 2000);
                        } else if (cap < 1){
                          swal("Janji Kunjungan Sudah Penuh","Coba ditanggal Lain", "error");
                          setTimeout(() => {
                            swal.close();
                          }, 2000);
                        } else {
                          dispatch(allStore.createVisit(doctor_uid, date))
                          .then((e)=>{
                            swal(
                              "Janji Kunjungan Berhasil Ditambah ","",
                              "success"
                            );
                            closeModal();
                          })
                          .catch((e)=>{
                            if (e.status === 500){
                              swal("Anda Sudah Ada Janji Kunjungan","Batalkan Janji Kunjungan Untuk Menambahkan Janji Baru" , "error");
                              setTimeout(() => {
                                swal.close();
                              }, 5000);
                            } else{
                              swal("Janji Kunjungan Sudah Penuh",e.data.message , "error");
                              setTimeout(() => {
                                swal.close();
                              }, 2000);
                            }
                          })
                        }
                      }}
                    >
                      tambah janji
                      {loadJK ?
                              <ReactLoading className="ml-2 mb-2 inline-block" type={"spin"} color={"#ffffff"} height={"10px"} width={"20px"}/>
                      : null
                      }
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
      <div className="bg-[#E4F5E9] min-h-screen text-[#356E79]">
        <div className="grid grid-cols-5 py-5 mx-[4%] gap-5">
          <div className="col-span-2">
            <p className="font-bold text-xl mb-5"> Profile Data</p>
            <div className="bg-white border-2  mb-5 rounded-lg px-5  drop-shadow-lg">
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
                      <p className="break-all"> : {dataPatient.address} </p>
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
            <div className="bg-white border-2  mb-5 rounded-lg px-5 drop-shadow-lg ">
              <div className="flex justify-end flex-col py-5 ">
                {dataAppointment.length !== 0 ? (
                  <>
                  <div className="grid grid-cols-3 justify-between w-full">
                      <p className="font-bold"> Dokter </p>
                      <p className="col-span-2 before:content-[':'] before:mr-2">{dataAppointment[0].doctorName}</p>
                      <p className="font-bold"> Hari Kunjungan </p>
                      <p className="col-span-2 before:content-[':'] before:mr-2">{dataAppointment[0].date}</p>
                      <p className="font-bold"> Alamat </p>
                      <p className="col-span-2 before:content-[':'] before:mr-2">{dataAppointment[0].doctorAddress}</p>
                  </div>
                  
                  <button className="w-3/12 border-red-500 border-2 col-span-1 mt-5 px-2 py-3 rounded-[5px] text-red-700 capitalize text-sm font-bold flex justify-center items-center" onClick={()=>cancelJK(dataAppointment[0].visit_uid)}>
                    Batalkan Janji 
                    {loadCK ?
                      <ReactLoading className="ml-2 mb-2 inline-block" type={"spin"} color={"#b91c1c"} height={"10px"} width={"20px"}/>
                    : null
                    }
                  </button>
                  </>
                ) : (
                    <p className="text-xl text-center w-full">Anda Belum Ada Janji Kunjungan</p>
                )}
              </div>
            </div>
          </div>

          {/* doctor list */}
          <div className="col-span-3">
            <p className="font-bold text-xl"> List Dokter</p>
            <div className="pb-5  grid grid-cols-3 max-h-[74vh] max-w-[60vw] overflow-y-scroll z-0">
              {dataDoctor
                ? dataDoctor.map((el, i) => (
                    el.name !== "" ?
                    <div className="bg-[#324B50] min-h-[150px] pt-3 mt-5 rounded-lg mr-4  drop-shadow-md" key={i}>
                      <div className="flex flex-col justify-between items-center bg-white h-full text-[10px] rounded-b-lg py-3 px-2">
                        <div className="flex justify-start w-full">
                          <div className="min-w-[60px] rounded-full mr-3">
                            <Image src={avatar} className="rounded-full w-full h-full" alt="doctor-img" layout="responsive" />{" "}
                          </div>
                          <div className="pr-1 truncate">
                            <p className="font-semibold text-lg truncate">{el.name}</p>
                            <p className="truncate"> {el.address}</p>
                          </div>
                        </div>
                        <div className="flex px-3">
                          <button className="bg-[#324B50] px-3 py-2 rounded-[5px] text-green-100 capitalize text-md font-bold" onClick={(e)=>{handleModal(el)}}>
                            {" "}
                            tambah janji{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    : null
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
              {
              dataHistory.length !== 0 || dataHistory !== undefined ? (
                dataHistory.map((el, i) => (
              
                  el.status === "completed" ?
                <tr className="text-center border-b-2 ">
                  <td className="w-1/12 p-2">{el.date}</td>
                  <td className="w-2/12">{el.doctorName}</td>
                  <td className="w-3/12">
                    {el.doctorAddress}
                  </td>
                  <td className="w-2/12">{el.mainDiagnose}</td>
                  <td className="w-2/12">{el.additionDiagnose}</td>
                  <td className="w-2/12">{el.recipe}</td>
                </tr>
                : 
                  null
                ))
              ) : null
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Index;
