import React, { Fragment, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CgLogIn,CgLogOut } from "react-icons/cg";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import logoImg from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert";
import { useState } from "react";
import { useRouter } from "next/router";
import form from "../../styles/Form.module.css"
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import allStore from "../../store/actions";

function SignUpClinic() {
  const route = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, nameSet] = useState("");
  const [address, addressSet] = useState("");
  const [dari, dariSet] = useState("senin");
  const [sampai, sampaiSet] = useState("jumat");
  const [total, totalSet] = useState("0");
  const [token, tokenSet] = useState("0");

  //class transformer
  const [state, setState] = useState("");
  const [state2, setState2] = useState("hidden");
  const [optSelect, setOptSel]= useState("Senin")
  const [optSelect2, setOptSel2]= useState("Jumat")
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

  const validatePart1 = () => {
    console.log("cek validate");
    if (username.trim() === "" ) {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.trim().match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh  Ada Spasi", "error");
    } else if (username.length < 5) {
      swal("Input Salah", "Username Minimal 5 Karakter", "error");
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
    if(name === ""){
      swal("Input Kosong", "Nama Tidak Boleh Kosong", "error")
    }else if(address === ""){
      swal("Input Kosong", "Alamat Tidak Boleh Kosong", "error")
    }else if(dari === "" || sampai === ""){
      swal("Input Kosong", "Jadwal Buka Ada yang Kosong", "error")
    }else if(total === ""){
      swal("Input Kosong", " Maksimal Kunjungan Tidak Boleh Kosong", "error")
    }else{
        signUpPart2();
    }
  }
  
  const backBtn= () =>{
    setState("")
    setState2("hidden")
  }

  const signUpPart1 = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("status", "available");
    formData.append("openDay", dari);
    formData.append("closeDay", sampai);
    formData.append("capacity", total);
    console.log(formData, "cek form data");

    dispatch(allStore.doDoctorSignUp(formData))
    .then((e)=>{
      console.log("dispatch Success DoDoctorSignUp",e);
      swal("Akun Berhasil Terdaftar","Silahkan Lengkapi Data Anda","success");
      tokenSet(e);
      setState("hidden");
      setState2("");
      setTimeout(() => {
        swal.close();
      }, 3000);
    })
    .catch((e)=>{
      console.log("dispatch Error DoDoctorSignUp",e);
      swal("Pendaftaran Gagal",e,"error");
    })
    .finally(()=>{
      setLoading(false);
    })
  }

  const signUpPart2 = () => {
    setLoading(true);
    console.log("Form 2 ");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("status", "available");
    formData.append("openDay", dari);
    formData.append("closeDay", sampai);
    formData.append("capacity", total);
    console.log(formData, "cek form data");

    dispatch(allStore.doDoctorCompleteForm(formData,token))
    .then((e)=>{
      console.log("dispatch Success DoDoctorSignUp",e);
      swal("Akun Berhasil Terdaftar","Silahkan Lengkapi Data Anda","success");
      setState("hidden");
      setState2("");
    })
    .catch((e)=>{
      console.log("dispatch Error DoDoctorSignUp",e);
      swal("Pendaftaran Gagal",e,"error");
    })
    .finally(()=>{
      setLoading(false);
    })
  }
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
            <div className={"col-span-2 bg-white rounded-lg z-10 flex justify-center items-center relative " + state}>
              <div className="grid justify-center capitalize ">
                <p className="font-semibold text-[40px] leading-[50px] text-center">
                  ayo mulai buka klinik milik kamu!
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
                          className=" bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
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
                        className="bg-[#324B50] font-medium inline-flex items-center px-5 py-3 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
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
                <div className="flex justify-center text-xs mt-10 font-medium absolute bottom-3 left-[41%] bottom-8 ">
                  <p> daftar sebagai pasien?</p>
                  <a
                    onClick={() => route.push("/register")}
                    className="underline cursor-pointer ml-1"
                  >
                    {" "}
                    daftar disini!
                  </a>
                </div>
                <div className="flex justify-center text-xs mt-10 font-medium absolute bottom-3 left-[42%] ">
                  <p> sudah punya akun?</p>
                  <a
                    onClick={() => route.push("/login")}
                    className="underline cursor-pointer ml-1"
                  >
                    {" "}
                    masuk disini
                  </a>
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
                  <div className={"col-span-2 " + form.inputDiv }>
                      
                      <div>
                        <span>Nama Lengkap</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="Name" placeholder="Nama Lengkap" onChange={(e) => nameSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Alamat Klinik</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="Address" placeholder="Alamat Klinik" onChange={(e) => addressSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Jadwal Buka Klinik</span>
                        <div className={form.input+' '+form.ttl}>
                          <div className="flex justify-between gap-2 capitalize w-full">
                            <div className={form.ttlIn+" w-3/6 px-2"}>
                              <Menu as="div" className="relative inline-block w-full h-full text-left z-20">
                              <div className="h-full">
                                <Menu.Button className="inline-flex items-center px-3 justify-between  h-full text-slate-500">
                                  {optSelect}
                                  <BsChevronDown className="ml-3"/>
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
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("senin"); setOptSel("Senin")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                        Senin
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("selasa"); setOptSel("Selasa")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Selasa
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("rabu"); setOptSel("Rabu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Rabu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("kamis"); setOptSel("Kamis")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Kamis
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("jumat"); setOptSel("Jumat")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Jumat
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("sabtu"); setOptSel("Sabtu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Sabtu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("minggu"); setOptSel("Minggu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Minggu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                              </Menu>
                            </div>
                            <span className="px-2 py-2">S/D</span>

                            <div className={form.ttlIn+" w-3/6 px-2"}>
                              <Menu as="div" className="relative inline-block w-full h-full text-left z-20">
                              <div className="h-full">
                                <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
                                  {optSelect2}
                                  <BsChevronDown className="ml-3"/>
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
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("senin"); setOptSel2("Senin")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                        Senin
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("selasa"); setOptSel2("Selasa")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Selasa
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("rabu"); setOptSel2("Rabu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Rabu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("kamis"); setOptSel2("Kamis")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Kamis
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("jumat"); setOptSel2("Jumat")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Jumat
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("sabtu"); setOptSel2("Sabtu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Sabtu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("minggu"); setOptSel2("Minggu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Minggu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                              </Menu>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span>Jumlah Maksimal Kunjungan</span>
                        <div className={form.input}>
                          <input type="number" id="MaxJK" name="maxs" placeholder="10" min="1" max="99" maxLength="2"  onInput={(e)=>{e.target.value < 1 || e.target.value > 99 ? swal("Input Kunjungan Tidak Valid","Jumlah Kunjungan harus diatas 1 dan dibawah 99", "error"): totalSet(e.target.value) }}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-span-2">
                    <div className={"flex justify-between " + form.btn}>

                      <button
                        className="bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                        onClick={() => backBtn()}
                      >
                        <CgLogOut className="m-2" />
                        Back
                      </button>

                     {loading ? (
                        <button
                          className=" bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
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
                {/* direct to register */}
                <div className={"flex justify-center text-xs mt-10 font-medium absolute bottom-3 left-[42%] "+ state}>
                  <p> Belum punya akun?</p>
                  <a onClick={()=>route.push("/register")} className="underline cursor-pointer ml-1">
                    {" "}
                    ayo mulai daftar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpClinic;
