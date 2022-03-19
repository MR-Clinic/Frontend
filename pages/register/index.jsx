import React, { Fragment, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CgLogIn,CgLogOut } from "react-icons/cg";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import logoImg from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import form from "../../styles/Form.module.css"
import { Menu, Transition } from "@headlessui/react";
import moment from "moment";
import axios from "axios";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import allStore from "../../store/actions";

const urlRegisterPatient = "https://faliqadlan.cloud.okteto.net/patient";

function SignUpPatient() {
  const route = useRouter();
  // Form Part 1
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Form Part 2
  const [nik, nikSet] = useState("");
  const [full_name, full_nameSet] = useState("");
  const [address, addressSet] = useState("");
  const [gender, genderSet] = useState("");
  const [job, jobSet] = useState("");
  const [status, statusSet] = useState("");
  const [religion, religionSet] = useState("");
  const [place, placeSet] = useState("");
  const dateDef = moment(new Date()).format("YYYY-MM-DD");
  const [date, dateSet] = useState(dateDef);
  const [token, tokenSet] = useState(dateDef);

  //class transformer
  const [state, setState] = useState("");
  const [state2, setState2] = useState("hidden");
  const [optSelect, setOptSel]= useState("Jenis Kelamin")
  const [optSelect2, setOptSel2]= useState("Status")
  const [optSelect3, setOptSel3]= useState("Agama")
  const [datePlaceholder, datePlaceholderSet] =useState("Tanggal Lahir")
  const [dateVal, dateValSet] =useState("")
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      const profile = localStorage.getItem('profile')
      if (profile === "doctor") {
        route.push("/doctor");
      } else if (profile === "patient") {
        route.push("/patient");
      }
    }
  })
  
  useEffect(()=>{
    console.log(status, "status Report")
  },[ status])
  
  const handleDate = (e) =>{
    let a = moment(e).format("DD-MM-YYYY");
    dateSet(a)
    datePlaceholderSet(a);
    dateValSet(moment(e).format("YYYY-MM-DD"));
  }

  const validatePart1 = () => {
    if(username === '' && email === '' && password === ''){
      swal("Input Kosong", "Silahkan Masukkan Data Yang Sesuai", "error");
    } else if (username === "") {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.length < 5) {
      swal("Input Salah", "Username Minimal 5 Karakter", "error");
    } else if (username.match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh Ada Spasi", "error");
    } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(username)) {
      swal("Input Salah", "Username Harus Menggunakan Angka dan Huruf", "error");
    } else if (email === "") {
      swal("Input Salah", "Email Tidak Boleh Kosong", "error");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      swal("Input Salah", "Format Email Salah", "error");
    } else if (password === "") {
      swal("Input Salah", "Password Tidak Boleh Kosong", "error");
    } else if (password.length < 8) {
      swal("Input Salah", "Password Kurang Dari 8 Karakter", "error");
    } else {
      signUpPart1();
    }
  };

  const validatePart2 = () => {
    if (nik.length !== 16){
      swal("Input NIK Salah", "Jumlah karakter harus 16", "error");
    } else if (nik.match(/[A-Z]/) || nik.match(/[a-z]/)){
      swal("Input NIK Salah", "NIK Tidak Boleh Ada Huruf", "error");
    } else if (full_name.match(/^[A-Za-z]+$/) ){
      swal("Input Nama Lengkap Salah", "Nama Tidak Boleh Ada Angka Dan Simbol", "error");
    } else if (address.length < 15 ){
      swal("Input Alamat Salah", "Alamat Kurang Panjang", "error");
    } else if (nik === "" || full_name === "" || address === "" || job === "" || status === "" || religion ===""){
      swal("Form Masih Kosong", "Silahkan Masukkan Data Sesuai KTP Anda", "error");
    } else {
      signUpPart2();
    }
  }

  const backBtn= () =>{
    setState("")
    setState2("hidden")
  }

  const signUpPart1 = () => {
    setLoading(true);
    dispatch(allStore.checkPatientUsername(username))
    .then((e)=>{
      console.log("dispatch Sicces Sign Up", e);
      dispatch(allStore.checkPatientEmail(email))
      .then((e)=>{
        console.log("dispatch Sicces Sign Up", e);
        setState("hidden");
        setState2("");
      })
      .catch((e)=>{
        console.log("dispatch Error checkPatientEmail",e);
        swal("Pendaftaran Gagal","Email Sudah Digunakan.","error");
      })
    })
    .catch((e)=>{
      console.log("dispatch Error checkDoctorUsername",e);
      swal("Pendaftaran Gagal","Username Sudah Digunakan.","error");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const signUpPart2 = () => {
    setLoading(true);
    const formData = new FormData();
    
    formData.append("nik",nik)
    formData.append("name",full_name)
    formData.append("address",address)
    formData.append("gender",gender)
    formData.append("job",job)
    formData.append("status",status)
    formData.append("religion",religion)
    formData.append("placeBirth",place)
    formData.append("dob",date)

    dispatch(allStore.doPatientCompleteForm(formData,token))
    .then((e)=>{
      console.log("dispatch Success Sign Up", e);
      swal("Akun Berhasil Terdaftar","Anda Akan Diarahkan Ke Halaman Login","success");
      setTimeout(() => {
        swal.close();
        route.push("/login")
      }, 3000);
    })
    .catch((e)=>{
      console.log("dispatch Error checkDoctorUsername",e);
      swal("Pendaftaran Gagal",e,"error");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <div className="bg-[#324B50] p-20 text-[#324B50] font-redhat min-h-screen flex">
        <div className="bg-white px-5 py-3 rounded-lg  shadow-md h-[80vh]">
          <div className="grid grid-cols-3  rounded-lg h-full">
            {/* left-section */}
            <div className="grid bg-[#E4F5E9] rounded-lg ">
              <div className="grid items-center justify-center px-24">
                <div>
                  <div className="w-5/6">
                    <Image src={logoImg} alt="logo" />
                  </div>
                  <p className=" font-semibold text-[30px] leading-[35px] ">
                    {" "}
                    Website Medical Record Clinic{" "}
                  </p>
                  <p className=" pt-2 text-[16px] leading-[20px]">
                    {" "}
                    Sistemasi Data Kesehatan Terpercaya !{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* right-section */}
            <div className={"col-span-2 bg-white rounded-lg z-10 flex justify-center items-center relative "+ state}>
              <div className="grid justify-center capitalize ">
                <p className="font-semibold text-[40px] leading-[50px] text-center">
                  Mulai Jaga Kesehatanmu!
                </p>
                <div className="flex justify-center">
                  <p> selamat datang, silahkan daftarkan akun mu !</p>
                </div>
                {/* input button */}
                <div className=" py-5 space-y-3 ">
                  <div className="relative block w-4/6 m-auto">
                    <input
                      type="text"
                      className="placeholder-[#324B50] form-control block w-full px-4 py-2 pr-[50px] text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="Username"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center  text-[#324B50]">
                      <FaRegUser size={22} />
                    </div>
                  </div>
                  
                  <div className="relative block w-4/6 m-auto">
                    <input
                      type="text"
                      className="placeholder-[#324B50] form-control block w-full px-4 py-2 pr-[50px] text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="Email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center text-[#324B50]">
                      <FiMail size={22} />
                    </div>
                  </div>
                  <div className="relative block w-4/6 m-auto">
                    <input
                      type="password"
                      className=" placeholder-[#324B50] form-control block w-full px-4 py-2 pr-[50px] text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="Password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center text-[#324B50]">
                      <HiOutlineKey size={22} />
                    </div>
                  </div>
                  <div className="flex justify-center ">
                  {loading ? (
                        <button
                          className=" bg-[#324B50] font-medium inline-flex items-center px-4 py-2 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                          type="submit"
                        >
                          Loading
                          <ReactLoading
                            className="ml-2 mb-2"
                            type={"spin"}
                            color={"#ffffff"}
                            height={"20px"}
                            width={"30px"}
                          />
                        </button>
                    ) :(
                    <button
                      className=" bg-[#324B50] font-medium inline-flex items-center px-5 py-3 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                      type="submit"
                      onClick={() => validatePart1()}
                    >
                      Register
                      <FaSignInAlt className="ml-2" />
                    </button>
                  )}
                  </div>
                    
                </div>
                {/* direct to register */}
                <div className="flex justify-between text-xs space-x-10 font-medium absolute bottom-3 left-[41%] bottom-7 ">
                  <div className="flex">
                    <p> daftar sebagai dokter?</p>
                    <a
                      onClick={() => route.push("/register/clinic")}
                      className="underline cursor-pointer ml-1"
                    >
                      {" "}
                      daftar disini !
                    </a>
                  </div>
                </div>
                <div className="flex justify-between text-xs space-x-10 font-medium absolute bottom-3 left-[42%] ">
                  <div className="flex">
                    <p> sudah punya akun?</p>
                    <a
                      onClick={() => route.push("/login")}
                      className="underline cursor-pointer ml-1"
                    >
                      {" "}
                      masuk disini !
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* right-section Part 2*/}

            <div className={"col-span-2 bg-white rounded-lg z-10 flex justify-center items-center relative "+ state2}>
              <div className="grid justify-center capitalize ">
                <p className="font-semibold text-[40px] leading-[50px] text-center">
                  Lengkapi Data Anda
                </p>
                <div className="flex justify-around">
                  <p> Silahkan isi data sesuai KTP anda.</p>
                </div>
                {/* input button */}
                <div className="grid grid-cols-2 gap-5">

                  {/* Form Kiri */}

                  <div className={form.inputDiv}>
                      <div>
                        <span>NIK</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="nik" placeholder="NIK" onChange={(e) => nikSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Nama Lengkap</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="full_name" placeholder="Nama Lengkap" onChange={(e) => full_nameSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Alamat</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="address" placeholder="Alamat" onChange={(e) => addressSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Jenis Kelamin</span>
                        <div className={form.input +' '+ form.selectForm} >
                          <Menu as="div" className="relative inline-block w-full h-full text-left">
                            <div className="h-full">
                              <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                                {optSelect}
                                <BsChevronDown/>
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
                                    <div className="py-2 px-3 hover:bg-slate-200 rounded-md" onClick={()=>{genderSet("pria"); setOptSel("Pria")}}>
                                      <span className="w-full ">
                                        Pria
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 px-3 hover:bg-slate-200 rounded-md" onClick={()=>{genderSet("wanita"); setOptSel("Wanita")}}>
                                      <span className="w-full ">
                                        Wanita
                                      </span>
                                    </div>
                                  </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                  </div>

                  {/* Form Kanan */}

                  <div className={form.inputDiv }>
                      <div>
                        <span>Tempat Tanggal Lahir</span>
                        <div className={form.input+' '+form.ttl}>
                          <div className="flex justify-between gap-2 capitalize">
                            <div className={form.ttlIn+" "}>
                              <input type="text" className="{form.inputStyle} " id="place" placeholder="Tempat" onChange={(e) => placeSet(e.target.value)}/>
                            </div>
                            <div className={form.ttlIn}>
                              <span className={"normal-case "+form.datePlaceholder}> {datePlaceholder} </span>
                              <input type="date" className="{form.inputStyle} " id="date" max={dateDef}  value={dateVal} onChange={(e) => handleDate(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span>Pekerjaan</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="job" placeholder="Pekerjaan" onChange={(e) => jobSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Status</span>
                        <div className={form.input+' '+form.selectForm}>
                        <Menu as="div" className="relative inline-block w-full h-full text-left z-20">
                            <div className="h-full">
                              <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                                {optSelect2}
                                <BsChevronDown/>
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
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{statusSet("belumKawin"); setOptSel2("Belum Kawin")}}>
                                      <span className="w-full ">
                                       Belum Kawin
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{statusSet("kawin"); setOptSel2("Kawin")}}>
                                      <span className="w-full ">
                                        Kawin
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{statusSet("ceraiHidup"); setOptSel2("Cerai Hidup")}}>
                                      <span className="w-full ">
                                        Cerai Hidup
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{statusSet("ceraiMati"); setOptSel2("Cerai Mati")}}>
                                      <span className="w-full ">
                                        Cerai Mati
                                      </span>
                                    </div>
                                  </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div>
                        <span>Agama</span>
                        <div className={form.input+' '+form.selectForm}>
                        <Menu as="div" className="relative inline-block w-full h-full text-left ">
                            <div className="h-full">
                              <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                                {optSelect3}
                                <BsChevronDown/>
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
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("budha"); setOptSel3("Budha")}}>
                                      <span className="w-full ">
                                        Budha
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("hindu"); setOptSel3("Hindu")}}>
                                      <span className="w-full ">
                                        Hindu
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("islam"); setOptSel3("Islam")}}>
                                      <span className="w-full ">
                                        Islam
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("katholik"); setOptSel3("Katholik")}}>
                                      <span className="w-full ">
                                        Katholik
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("konghucu"); setOptSel3("Konghucu")}}>
                                      <span className="w-full ">
                                        Konghucu
                                      </span>
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{religionSet("protestan"); setOptSel3("Protestan")}}>
                                      <span className="w-full ">
                                        Protestan
                                      </span>
                                    </div>
                                  </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                  </div>
                  <div className="col-span-2">
                    <div className={"flex justify-between " + form.btn}>

                      <button
                        className="bg-[#324B50] font-medium inline-flex items-center px-3 py-2 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                        onClick={() => backBtn()}
                      >
                        <CgLogOut className="m-2" />
                        Back
                      </button>
                       {loading ? (
                          <button
                            className=" bg-[#324B50] font-medium inline-flex items-center px-3 py-2 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                            type="submit"
                          >
                            Loading
                            <ReactLoading
                              className="ml-2 mb-2"
                              type={"spin"}
                              color={"#ffffff"}
                              height={"20px"}
                              width={"30px"}
                            />
                          </button>
                      ) : (
                      <button
                        className="bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                        onClick={() => validatePart2()}
                      >
                        Submit
                        <CgLogIn className="m-2" />
                      </button>
                     )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPatient;
