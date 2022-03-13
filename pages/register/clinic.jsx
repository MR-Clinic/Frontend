import React from "react";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import logoImg from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactLoading from "react-loading";

const urlRegisterClinic = "https://faliqadlan.cloud.okteto.net/doctor";

function SignUpClinic() {
  const route = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateRegister = () => {
    console.log("cek validate");
    if (username.trim() < 0) {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh  Ada Spasi", "error");
    } else if (email === "") {
      swal("Input Salah", "Email Tidak Boleh Kosong", "error");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      swal("Input Salah", "Format Email Salah", "error");
    } else if (password === "") {
      swal("Input Salah", "Password Tidak Boleh Kosong", "error");
    } else if (password.length < 8) {
      swal("Input Salah", "Password Kurang Dari 8 Karakter", "error");
    } else {
      doSignUp();
    }
  };

  const doSignUp = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData, "cek form data");

    axios
      .post(urlRegisterClinic, formData)
      .then(() => {
        swal(
          "Selamat register berhasil !",
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
          "sorry!",
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
            <div className="col-span-2 bg-white rounded-lg z-10 flex justify-center items-center relative">
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
                  {loading ? (
                    <div className="flex justify-center ">
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
                    </div>
                  ) : (
                    <div className="flex justify-center ">
                      <button
                        className=" mb-[40px] bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                        onClick={() => validateRegister()}
                      >
                        Register
                        <FaSignInAlt className="ml-2" />
                      </button>
                    </div>
                  )}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpClinic;
