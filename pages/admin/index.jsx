import React, { useEffect } from "react";
import Nav from "../../components/nav";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import { BsChevronDown } from "react-icons/bs";
import moment from "moment";
import Link from "next/link";
import form from "../../styles/Form.module.css";
import ReactLoading from "react-loading";
import axios from "axios";
import { useRouter } from "next/router";

const baseUrl = "https://faliqadlan.cloud.okteto.net/patient";
const urlSubmit = "https://faliqadlan.cloud.okteto.net/visit?";

function Index() {
  //counter
  const [loading, setLoading] = useState(false);
  const [isOpenVisit, setIsOpenVisit] = useState(false);
  const [isOpenAddVisit, setIsOpenAddVisit] = useState(false);
  const [isOpenAddPatient, setIsOpenAddPatient] = useState(false);
  const [isOpenConfirmed, setIsOpenConfirmed] = useState(false);
  const [pasienSum, pasienSumSet] = useState("");
  const [kunjunganTotalToday, kunjunganTotalTodaySet] = useState("");
  const [kunjunganTotal, kunjunganTotalSet] = useState("");
  const [dataDetailPatient, setDataDetailPatient] = useState("");
  const [dataDetailVisit, setDataDetailVisit] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [dataForSearch, setDataForSearch] = useState("");
  const [showListPatient, setShowListPatient] = useState([]);

  //form add patient
  const [nik, nikSet] = useState("");
  const [full_name, full_nameSet] = useState("");
  const [address, addressSet] = useState("");
  const [gender, genderSet] = useState("");
  const [job, jobSet] = useState("");
  const [status, statusSet] = useState("");
  const [religion, religionSet] = useState("");
  const [place, placeSet] = useState("");
  const dateDef = moment(new Date()).format("YYYY-MM-DD");
  const dateSubmit = moment(new Date()).format("DD-MM-YYYY");
  const [date, dateSet] = useState(dateDef);
  const [complaint, setComplaint] = useState("");

  //form add patient transformer
  const [optSelect, setOptSel] = useState("Jenis Kelamin");
  const [optSelect2, setOptSel2] = useState("Status");
  const [optSelect3, setOptSel3] = useState("Agama");
  const [datePlaceholder, datePlaceholderSet] = useState("Tanggal Lahir");
  const [dateVal, dateValSet] = useState("");
  const handleDate = (e) => {
    let a = moment(e).format("DD-MM-YYYY");
    dateSet(a);
    datePlaceholderSet(a);
    dateValSet(moment(e).format("YYYY-MM-DD"));
  };

  const dataTodayVisit = useSelector(
    (data) => data.todayVisitReducer.listTodayVisit
  );
  const getAllPatient = useSelector(
    (data) => data.getAllPatientReducer.listAllPatients
  );
  const adminVisit = useSelector(
    (data) => data.adminConfirmedReducer.adminVisitList
  );

  console.log("ini data admin visit", adminVisit);

  //get item local storage
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const uid =
    typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;
  const router = useRouter();

  //regist new patient
  const validateRegist = () => {
    if (nik.length !== 16) {
      swal("Input NIK Salah", "Jumlah karakter harus 16", "error");
    } else if (nik.match(/[A-Z]/) || nik.match(/[a-z]/)) {
      swal("Input NIK Salah", "NIK Tidak Boleh Ada Huruf", "error");
    } else if (full_name.match(/^[A-Za-z]+$/)) {
      swal(
        "Input Nama Lengkap Salah",
        "Nama Tidak Boleh Ada Angka Dan Simbol",
        "error"
      );
    } else if (address.length < 15) {
      swal("Input Alamat Salah", "Alamat Kurang Panjang", "error");
    } else if (
      nik === "" ||
      full_name === "" ||
      address === "" ||
      job === "" ||
      status === "" ||
      religion === ""
    ) {
      swal(
        "Form Masih Kosong",
        "Silahkan Masukkan Data Sesuai KTP Anda",
        "error"
      );
    } else {
      addPatient();
    }
  };

  const addPatient = () => {
    const formData = new FormData();
    formData.append("nik", nik);
    formData.append("name", full_name);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("job", job);
    formData.append("status", status);
    formData.append("religion", religion);
    formData.append("placeBirth", place);
    formData.append("dob", date);

    axios
      .post(baseUrl, formData)
      .then(() => {
        swal(
          "Selamat register berhasil !",
          "Pasien Berhasil Ditambahkan",
          "success"
        );
        dispatch(allStore.getAllPatient());
        setTimeout(() => {
          swal.close();
        }, 3000);
        closeModalAddPatient();
      })
      .catch((error) => {
        console.log(error);
        swal(
          "sorry!",
          "register gagal, email sudah digunakan atau user sudah terdaftar",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //get detail patient all
  const openModalAddVisit = (patient_uid) => {
    console.log("ini detail pasien");
    setIsOpenAddVisit(true);
    setLoading(true);
    let id = patient_uid;
    dispatch(allStore.getPatientModal(id))
      .then((response) => {
        setDataDetailPatient(response);
      })
      .catch(() => {
        swal(
          "Maaf Data Bermasalah",
          "Data tidak tersedia pada server",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //konfirmasi kunjungan
  const openModalConfirmedVisit = (nik) => {
    console.log("confirmed");
    setIsOpenConfirmed(true);
    setLoading(true);
    dispatch(allStore.addConfirmVisit(nik));
    setLoading(false);
    // .then((response) => {
    //   setDataDetailVisit(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  };

  //visit regist
  const submitVisit = (patient_uid) => {
    setLoading(true);
    alert("masuk");
    const body = {
      complaint: complaint,
      date: dateSubmit,
      doctor_uid: uid,
    };

    axios
      .post(urlSubmit, body, {
        headers: {
          Authorization: "Bearer " + token,
        },
        params: {
          patient_uid: patient_uid,
        },
      })
      .then((response) => {
        alert("masuk then");
        console.log(response, "respon submit");
        swal("Selamat!", "Complain Berhasil Ditambahkan", "success");
        dispatch(allStore.todayVisitList());
        setTimeout(() => {
          swal.close();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //edit complain
  const putComplain = () => {
    setLoading(true);
    const body = {
      complaint: complaint,
      date: dateSubmit,
      doctor_uid: uid,
    };
    axios
      .post(baseUrl, formData)
      .then(() => {
        swal(
          "Selamat register berhasil !",
          "Pasien Berhasil Ditambahkan",
          "success"
        );
        dispatch(allStore.getAllPatient());
        setTimeout(() => {
          swal.close();
        }, 3000);
        closeModalAddPatient();
      })
      .catch((error) => {
        console.log(error);
        swal(
          "sorry!",
          "register gagal, email sudah digunakan atau user sudah terdaftar",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (getType !== "doctor") {
      router.push("/404");
    } else {
      dispatch(allStore.todayVisitList());
      dispatch(allStore.getAllPatient());
      dispatch(allStore.getPatientDetails());
      dispatch(allStore.getDoctorProfile(token));
      dispatch(allStore.totalPasien(uid)).then((e) => {
        pasienSumSet(e.data.visits.length);
      });
      dispatch(allStore.kunjunganTotalToday(uid)).then((e) => {
        kunjunganTotalTodaySet(e.data.visits.length);
      });
      dispatch(allStore.kunjunganTotal(uid)).then((e) => {
        kunjunganTotalSet(e.data.visits.length);
      });
    }
  }, [dispatch]);

  useEffect(() => {
    setDataListPatient();
  }, [getAllPatient]);

  useEffect(() => {
    setDataDetailVisit();
  }, [getAllPatient]);

  //modal open close function
  function closeModalVisit() {
    setIsOpenVisit(false);
  }
  function closeModaladdConfirmed() {
    setIsOpenConfirmed(false);
  }

  function closeModalConfirmed() {
    setIsOpenConfirmed(false);
    setComplaint("");
  }
  function closeModalAddVisit() {
    setIsOpenAddVisit(false);
    setDataDetailPatient("");
  }

  function closeModalAddPatient() {
    setIsOpenAddPatient(false);
    setDataDetailPatient("");
  }

  function openModalAddPatient() {
    setIsOpenAddPatient(true);
  }

  //handle status
  function handleStatus(el) {
    if (el === "pending") {
      return (
        <p className="bg-yellow-200 text-yellow-800 font-semibold drop-shadow-lg rounded-md px-2 py-1">
          Pending
        </p>
      );
    } else if (el === "ready") {
      return (
        <p className="bg-green-200 text-green-800 font-semibold drop-shadow-lg rounded-md px-2 py-1 ">
          Ready
        </p>
      );
    } else {
      return (
        <p className="bg-red-200 text-red-800 font-semibold drop-shadow-lg rounded-md px-2 py-1 ">
          Canceled
        </p>
      );
    }
  }

  // function for search
  const setDataListPatient = () => {
    setDataForSearch(getAllPatient);
    setShowListPatient(getAllPatient);
  };

  const seacrhByNik = () => {
    if (dataForSearch) {
      console.warn("Cek data search", dataForSearch);
      const resultSearch = dataForSearch.filter(
        (data) =>
          data.nik.toLowerCase().match(inputSearch.toLowerCase()) ||
          data.name.toLowerCase().match(inputSearch.toLowerCase())
      );
      if (resultSearch.length > 0) {
        setShowListPatient(resultSearch);
      } else {
        swal("Pencarian tidak ditemukan", "coba keyword yang lain ya", "error");
      }
    }
  };

  const clearSearch = () => {
    setDataListPatient();
    setInputSearch("");
  };

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

      {/* modal konfirmasi kunjungan */}
      <Transition appear show={isOpenConfirmed} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModaladdConfirmed}
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
                {loading ? (
                  <div className="flex justify-center ">
                    <p className="font-bold"> Loading</p>
                    <ReactLoading
                      className="ml-4 "
                      type={"spin"}
                      color={"#356E79"}
                      height={"20px"}
                      width={"30px"}
                    ></ReactLoading>
                  </div>
                ) : adminVisit.length > 0 ? (
                  <div className=" text-[#356E79] inline-block w-full max-w-lg p-6 mb-5 overflow-hidden text-left align-middle transition-all transform ">
                    <Dialog.Title
                      as="h3"
                      className=" text-[#356E79] flex justify-start text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                    >
                      Data Pasien
                    </Dialog.Title>
                    <div className=" grid grid-cols-2 text-medium w-full mt-5 text-[#356E79] ">
                      <p className="font-bold">NIK</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {adminVisit[0] ? adminVisit[0].nik : "~"}
                      </p>
                      <p className="font-bold">Nama Lengkap</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {adminVisit[0] ? adminVisit[0].patientName : "~"}
                      </p>
                      <p className="font-bold">Jenis Kelamin</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {adminVisit[0] ? adminVisit[0].gender : "~"}
                      </p>
                      <p className="font-bold">Waktu Kunjungan</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {adminVisit[0] ? adminVisit[0].date : "~"}
                      </p>
                      <p className="font-bold">Complain</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {adminVisit[0] ? adminVisit[0].complaint : "~"}
                      </p>
                    </div>
                    <p className="font-bold">Complain </p>
                    <textarea
                      className="px-2  py-1 border-2 w-full min-h-[100px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e) => setComplaint(e.target.value)}
                    />
                    <div className="flex justify-end mt-5 space-x-2 ">
                      <button
                        type="button"
                        className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModalAddVisit}
                      >
                        close detail
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() =>
                          submitVisit(dataDetailPatient.patient_uid)
                        }
                      >
                        Tambah Kunjungan
                      </button>
                    </div>
                  </div>
                ) : null}
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
                {loading ? (
                  <div className="flex justify-center ">
                    <p className="font-bold"> Loading</p>
                    <ReactLoading
                      className="ml-4 "
                      type={"spin"}
                      color={"#356E79"}
                      height={"20px"}
                      width={"30px"}
                    ></ReactLoading>
                  </div>
                ) : dataDetailPatient ? (
                  <div className=" text-[#356E79] inline-block w-full max-w-lg p-6 mb-5 overflow-hidden text-left align-middle transition-all transform ">
                    <Dialog.Title
                      as="h3"
                      className=" text-[#356E79] flex justify-start text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                    >
                      Data Pasien
                    </Dialog.Title>
                    <div className=" grid grid-cols-2 text-medium w-full mt-5 text-[#356E79] ">
                      <p className="font-bold">NIK</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.nik : "~"}
                      </p>
                      <p className="font-bold">Nama Lengkap</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.name : "~"}
                      </p>
                      <p className="font-bold">Jenis Kelamin</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.gender : "~"}
                      </p>
                      <p className="font-bold">Alamat</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.address : "~"}
                      </p>
                      <p className="font-bold">Tempat/Tanggal Lahir</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {dataDetailPatient ? dataDetailPatient.placeBirth : "~"}
                        , {dataDetailPatient ? dataDetailPatient.dob : "~"}
                      </p>
                      <p className="font-bold">Agama</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.religion : "~"}
                      </p>
                      <p className="font-bold">Status</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.status : "~"}
                      </p>
                      <p className="font-bold">Pekerjaan</p>
                      <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'>
                        {" "}
                        {dataDetailPatient ? dataDetailPatient.job : "~"}
                      </p>
                    </div>
                    <p className="font-bold">Complain </p>
                    <textarea
                      className="px-2  py-1 border-2 w-full min-h-[100px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e) => setComplaint(e.target.value)}
                    />
                    <div className="flex justify-end mt-5 space-x-2 ">
                      <button
                        type="button"
                        className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModalAddVisit}
                      >
                        close detail
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() =>
                          submitVisit(dataDetailPatient.patient_uid)
                        }
                      >
                        Tambah Kunjungan
                      </button>
                    </div>
                  </div>
                ) : null}
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
          onClose={openModalAddPatient}
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
              <div className=" text-[#356E79] inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-center capitalize text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  data pasien
                </Dialog.Title>

                <div className="grid grid-cols-2 gap-5">
                  {/* Form Kiri */}

                  <div className={form.inputDiv}>
                    <div>
                      <span>NIK</span>
                      <div className={form.input}>
                        <input
                          autocomplete="off"
                          type="text"
                          className="{form.inputStyle} "
                          id="nik"
                          placeholder="NIK"
                          onChange={(e) => nikSet(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span>Nama Lengkap</span>
                      <div className={form.input}>
                        <input
                          type="text"
                          className="{form.inputStyle} "
                          id="full_name"
                          placeholder="Nama Lengkap"
                          onChange={(e) => full_nameSet(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span>Alamat</span>
                      <div className={form.input}>
                        <input
                          type="text"
                          className="{form.inputStyle} "
                          id="address"
                          placeholder="Alamat"
                          onChange={(e) => addressSet(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span>Jenis Kelamin</span>
                      <div className={form.input + " " + form.selectForm}>
                        <Menu
                          as="div"
                          className="relative inline-block w-full h-full text-left"
                        >
                          <div className="h-full">
                            <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                              {optSelect}
                              <BsChevronDown />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-[200px] overflow-y-scroll focus:outline-none">
                              <Menu.Item>
                                <div
                                  className="py-2 px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    genderSet("pria");
                                    setOptSel("Pria");
                                  }}
                                >
                                  <span className="w-full ">Pria</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    genderSet("wanita");
                                    setOptSel("Wanita");
                                  }}
                                >
                                  <span className="w-full ">Wanita</span>
                                </div>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  {/* Form Kanan */}

                  <div className={form.inputDiv}>
                    <div>
                      <span>Tempat Tanggal Lahir</span>
                      <div className={form.input + " " + form.ttl}>
                        <div className="flex justify-between gap-2 capitalize">
                          <div className={form.ttlIn + " "}>
                            <input
                              type="text"
                              className="{form.inputStyle} "
                              id="place"
                              placeholder="Tempat"
                              onChange={(e) => placeSet(e.target.value)}
                            />
                          </div>
                          <div className={form.ttlIn}>
                            <span
                              className={"normal-case " + form.datePlaceholder}
                            >
                              {" "}
                              {datePlaceholder}{" "}
                            </span>
                            <input
                              type="date"
                              className="{form.inputStyle} "
                              id="date"
                              max={dateDef}
                              value={dateVal}
                              onChange={(e) => handleDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span>Pekerjaan</span>
                      <div className={form.input}>
                        <input
                          type="text"
                          className="{form.inputStyle} "
                          id="job"
                          placeholder="Pekerjaan"
                          onChange={(e) => jobSet(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <span>Status</span>
                      <div className={form.input + " " + form.selectForm}>
                        <Menu
                          as="div"
                          className="relative inline-block w-full h-full text-left z-20"
                        >
                          <div className="h-full">
                            <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                              {optSelect2}
                              <BsChevronDown />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right z-20 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-[120px] snap-y overflow-y-scroll focus:outline-none ">
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    statusSet("Belum Kawin");
                                    setOptSel2("Belum Kawin");
                                  }}
                                >
                                  <span className="w-full ">Belum Kawin</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    statusSet("kawin");
                                    setOptSel2("kawin");
                                  }}
                                >
                                  <span className="w-full ">Kawin</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    statusSet("Cerai Hidup");
                                    setOptSel2("Cerai Hidup");
                                  }}
                                >
                                  <span className="w-full ">Cerai Hidup</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    statusSet("Cerai Mati");
                                    setOptSel2("Cerai Mati");
                                  }}
                                >
                                  <span className="w-full ">Cerai Mati</span>
                                </div>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div>
                      <span>Agama</span>
                      <div className={form.input + " " + form.selectForm}>
                        <Menu
                          as="div"
                          className="relative inline-block w-full h-full text-left "
                        >
                          <div className="h-full">
                            <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                              {optSelect3}
                              <BsChevronDown />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-[120px] snap-y overflow-y-scroll focus:outline-none ">
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("Budha");
                                    setOptSel3("Budha");
                                  }}
                                >
                                  <span className="w-full ">Budha</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("Hindu");
                                    setOptSel3("Hindu");
                                  }}
                                >
                                  <span className="w-full ">Hindu</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("islam");
                                    setOptSel3("islam");
                                  }}
                                >
                                  <span className="w-full ">Islam</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("Katholik");
                                    setOptSel3("Katholik");
                                  }}
                                >
                                  <span className="w-full ">Katholik</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("Konghucu");
                                    setOptSel3("Konghucu");
                                  }}
                                >
                                  <span className="w-full ">Konghucu</span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div
                                  className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md"
                                  onClick={() => {
                                    religionSet("Protestan");
                                    setOptSel3("Protestan");
                                  }}
                                >
                                  <span className="w-full ">Protestan</span>
                                </div>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModalAddPatient}
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => validateRegist()}
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

      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
        <div className="ml-[7%]">
          <div className="text-3xl font-bold pl-5 pt-5"> Dashboard </div>
          <div className="flex flex-wrap justify-start mt-10 mb-10">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {pasienSum} </p>
              <p className="text-xl text-center "> Total Pasien </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganTotalToday}</p>
              <p className="text-xl text-center "> Total Kunjungan Hari Ini </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-center justify-center ml-5 w-[220px] h-[150px]">
              <p className="text-5xl font-bold"> {kunjunganTotal} </p>
              <p className="text-xl text-center"> Total Janji Kunjungan </p>
            </div>
          </div>
          {/* list janji kunjungan */}
          <div className="flex justify-between w-10/12">
            <div className="text-3xl font-bold pl-5">
              {" "}
              List Kunjungan Hari Ini{" "}
            </div>
            <div className="flex gap-5">
              <Link href="/admin/visitList" passHref>
                <button
                  type="button"
                  className=" text-sm font-bold py-2 px-4 text-white bg-[#356E79] border border-transparent rounded-lg hover:opacity-80"
                >
                  Lihat Riwayat Kunjungan
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start mt-10 mb-5 max-h-[60vh] max-w-[80vw] overflow-y-scroll ">
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
                      {handleStatus(el.status)}
                      {el.status === "ready" || el.status === "pending" ? (
                        <p
                          className="border-2 rounded-md font-semibold ml-10 px-2 py-1 cursor-pointer hover:bg-[#324B50] hover:text-white"
                          onClick={() => openModalConfirmedVisit(el.nik)}
                        >
                          {" "}
                          Konfirmasi
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))
              : null}
          </div>
          <p className="text-3xl font-bold pl-5"> Search List Pasien</p>{" "}
          <div className="flex justify-between w-10/12 ">
            <div>
              <div className="flex justify-between space-x-2 pt-4 pl-5">
                <p className="font-bold"> Search By NIK : </p>
                <input
                  className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                  type="text"
                  value={inputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                />
                <button
                  className="bg-[#356E79] text-sm  font-bold text-white px-3 py-1 rounded-md hover:opacity-70"
                  onClick={() => seacrhByNik()}
                >
                  {" "}
                  Search
                </button>
                <button
                  className="bg-[#356E79] text-sm  font-bold text-white px-3 py-1 rounded-md hover:opacity-70"
                  onClick={() => clearSearch()}
                >
                  {" "}
                  Clear search
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
          <div className="mt-10 pl-4 pb-20 max-h-[60vh] max-w-[80vw] overflow-y-scroll">
            <table className="table-auto bg-white py-4  rounded-lg drop-shadow-lg w-11/12 mt-5  ">
              <thead>
                <tr>
                  <th className="border-b-2 py-4">NIK</th>
                  <th className="border-b-2 ">Nama</th>
                  <th className="border-b-2 ">Gender </th>

                  <th className="border-b-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {showListPatient
                  ? showListPatient.map((el, i) => (
                      <tr className="text-center" key={i}>
                        <td className="py-2"> {el.nik}</td>
                        <td>{el.name}</td>
                        <td>{el.gender}</td>

                        <td className="flex justify-center space-x-2 py-2">
                          <button
                            className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70"
                            onClick={() => openModalAddVisit(el.patient_uid)}
                          >
                            {" "}
                            Details
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
