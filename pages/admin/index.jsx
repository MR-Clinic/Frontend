import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import { BsChevronDown } from "react-icons/bs";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import moment from "moment";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";
import form from "../../styles/Form.module.css";
import ReactLoading from "react-loading";

function Index() {
  const [NIK, NIKSet] = useState("~");
  const [Nama, NamaSet] = useState("~");
  const [Jenis, JenisSet] = useState("~");
  const [Alamat, AlamatSet] = useState("~");
  const [Tempat, TempatSet] = useState("~");
  const [Agama, AgamaSet] = useState("~");
  const [Status, StatusSet] = useState("~");
  const [Pekerjaan, PekerjaanSet] = useState("~");
  const [loading, setLoading] = useState(false);
  const [isOpenVisit, setIsOpenVisit] = useState(false);
  const [isOpenAddVisit, setIsOpenAddVisit] = useState(false);
  const [isOpenAddPatient, setIsOpenAddPatient] = useState(false);
  const [pasienSum, pasienSumSet] = useState("");
  const [kunjunganTotalToday, kunjunganTotalTodaySet] = useState("");
  const [kunjunganTotal, kunjunganTotalSet] = useState("");

  const [optSelect, setOptSel] = useState("Jenis Kelamin");
  const [optSelect2, setOptSel2] = useState("Status");
  const [optSelect3, setOptSel3] = useState("Agama");
  const [datePlaceholder, datePlaceholderSet] = useState("Tanggal Lahir");
  const [dateVal, dateValSet] = useState("");

  const dateDef = moment(new Date()).format("YYYY-MM-DD");

  const [dataDetailPatient, setDataDetailPatient] = useState("");

  const dispatch = useDispatch();

  const dataTodayVisit = useSelector(
    (data) => data.todayVisitReducer.listTodayVisit
  );
  const dataPatient = useSelector(
    (data) => data.patientListReducer.adminPatientList
  );
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const uid =
    typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  useEffect(() => {
    if (getType !== "doctor") {
      router.push("/404");
    } else {
      dispatch(allStore.todayVisitList());
      dispatch(allStore.getPatientList());
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

  function handleModal(patient_uid) {
    setLoading(true);

    let id = patient_uid;
    dispatch(allStore.getPatientModal(id))
      .then((response) => {
        setDataDetailPatient(response);
      })
      .catch((e) => {
        swal(
          "Maaf Data Bermasalah",
          "Data tidak tersedia pada server",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function closeModalVisit() {
    setIsOpenVisit(false);
  }

  function openModalVisit() {
    setIsOpenVisit(true);
  }
  function closeModalAddVisit() {
    setIsOpenAddVisit(false);
    setDataDetailPatient("");
  }
  function closeDetail() {
    setDataDetailPatient("");
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
                        {dataPatient
                          ? dataPatient.map((el, i) => (
                              <tr className="text-center" key={i}>
                                <td className="py-2">{el.nik} </td>
                                <td>{el.patientName}</td>
                                <td>{el.gender}</td>
                                <td>{el.date}</td>
                                <td className="flex justify-center space-x-2 py-2">
                                  <button
                                    className="bg-[#E4F5E9] text-[8px] px-2 selection:py-1 rounded-md hover:opacity-70"
                                    onClick={() => handleModal(el.patient_uid)}
                                  >
                                    {" "}
                                    details
                                  </button>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
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
                  <div className=" text-[#356E79] inline-block w-full max-w-lg p-6 mb-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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
                    <div className="flex justify-end mt-5 space-x-2 ">
                      <button
                        type="button"
                        className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeDetail}
                      >
                        close detail
                      </button>
                    </div>
                  </div>
                ) : null}
                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModalAddVisit}
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
                                    statusSet("Kawin");
                                    setOptSel2("Kawin");
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
                                    religionSet("Islam");
                                    setOptSel3("Islam");
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
              <button
                type="button"
                className=" text-sm font-bold py-2 px-4 text-white bg-[#356E79] border border-transparent rounded-lg hover:opacity-80"
                onClick={openModalAddVisit}
              >
                Tambah Kunjungan
              </button>
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
