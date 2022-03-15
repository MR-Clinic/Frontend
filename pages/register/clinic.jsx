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

const urlRegisterClinic = "https://faliqadlan.cloud.okteto.net/doctor";

function SignUpClinic() {
  const route = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, nameSet] = useState("");
  const [address, addressSet] = useState("");
  const [dari, dariSet] = useState("");
  const [sampai, sampaiSet] = useState("");
  const [total, totalSet] = useState("");

  //class transformer
  const [state, setState] = useState("");
  const [state2, setState2] = useState("hidden");
  const [optSelect, setOptSel]= useState("Senin")
  const [optSelect2, setOptSel2]= useState("Jumat")
  const [loading, setLoading] = useState(false);

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
    if (username.trim() < 0) {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh  Ada Spasi", "error");
    } else if (username.length < 6) {
      swal("Input Salah", "Username Minimal 5 Karakter", "error");
    } else if (email === "") {
      swal("Input Salah", "Email Tidak Boleh Kosong", "error");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      swal("Input Salah", "Format Email Salah", "error");
    } else if (password === "") {
      swal("Input Salah", "Password Tidak Boleh Kosong", "error");
    } else if (password.length < 8) {
      swal("Input Salah", "Password Kurang Dari 8 Karakter", "error");
    } else {
      setState("hidden")
      setState2("")
    }
  };

  
  const validatePart2 = () => {
    console.log(body);
    if(name === ""){
      swal("Input Kosong", "Nama Tidak Boleh Kosong", "error")
    }else if(address === ""){
      swal("Input Kosong", "Alamat Tidak Boleh Kosong", "error")
    }else if(dari === "" || sampai === ""){
      swal("Input Kosong", "Jadwal Buka Ada yang Kosong", "error")
    }else if(total === ""){
      swal("Input Kosong", " Maksimal Kunjungan Tidak Boleh Kosong", "error")
    }else{
        doSignUp();
    }
  }
  
  const backBtn= () =>{
    setState("")
    setState2("hidden")
  }

  const doSignUp = () => {
    setLoading(true);
    username, email, password, name, address, dari, sampai, total

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

    axios
      .post(urlRegisterClinic, formData)
      .then(() => {
        swal(
          "Register berhasil !",
          "Anda akan diarahkan ke halaman login",
          "success"
        );
        setTimeout(() => {
          swal.close();
        }, 3000);
        route.push("/login");
      })
      .catch(() => {
        swal(
          "Sorry..!",
          "register gagal, email sudah digunakan atau user sudah terdaftar",
          "error"
        );
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
                      className="placeholder-[#324B50] form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="exampleFormControlInput2"
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
                      className="placeholder-[#324B50] form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="exampleFormControlInput2"
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
                      className=" placeholder-[#324B50] form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center text-[#324B50]">
                      <HiOutlineKey size={22} />
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <button
                      className=" mb-[40px] bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                      type="submit"
                      onClick={() => validatePart1()}
                    >
                      Register
                      <FaSignInAlt className="ml-2" />
                    </button>
                  </div>
                </div>
                {/* direct to register */}
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
                          <input type="text" className="{form.inputStyle} " id="job" placeholder="dr. Nama Lengkap" onChange={(e) => nameSet("dr. "+e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Alamat Klinik</span>
                        <div className={form.input}>
                          <input type="text" className="{form.inputStyle} " id="job" placeholder="Alamat Klinik" onChange={(e) => addressSet(e.target.value)}/>
                        </div>
                      </div>
                      <div>
                        <span>Jadwal Buka Klinik</span>
                        <div className={form.input+' '+form.ttl}>
                          <div className="flex justify-between gap-2 capitalize w-full">
                            <div className={form.ttlIn+" "}>
                              <Menu as="div" className="relative inline-block w-full h-full text-left z-20">
                              <div className="h-full">
                                <Menu.Button className="inline-flex items-center px-3 justify-between w-full h-full text-slate-500">
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
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Senin"); setOptSel("Senin")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                        Senin
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Selasa"); setOptSel("Selasa")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Selasa
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Rabu"); setOptSel("Rabu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Rabu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Kamis"); setOptSel("Kamis")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Kamis
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Jumat"); setOptSel("Jumat")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Jumat
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Sabtu"); setOptSel("Sabtu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Sabtu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dariSet("Minggu"); setOptSel("Minggu")}}>
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

                            <div className={form.ttlIn+" "}>
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
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Senin"); setOptSel2("Senin")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                        Senin
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Selasa"); setOptSel2("Selasa")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Selasa
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Rabu"); setOptSel2("Rabu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Rabu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Kamis"); setOptSel2("Kamis")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Kamis
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Jumat"); setOptSel2("Jumat")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Jumat
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Sabtu"); setOptSel2("Sabtu")}}>
                                    <Menu.Item>
                                        <span className="w-full ">
                                          Sabtu
                                        </span>
                                    </Menu.Item>
                                  </div>
                                  <div className="py-2 snap-start px-3 hover:bg-slate-200 rounded-md" onClick={()=>{sampaiSet("Minggu"); setOptSel2("Minggu")}}>
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
                          <input type="number" id="maxs" name="maxs" placeholder="Jumlah" max="99" maxLength="2" onChange={(e)=>{totalSet(e.target.value)}}/>
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
                          className=" mb-[40px] bg-[#324B50] font-medium inline-flex items-center px-3 py-2 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
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
