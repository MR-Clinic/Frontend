import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import logoImg from "../assets/Logo.png";
import Image from "next/image";
import { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";

const urlLogin = "https://faliqadlan.cloud.okteto.net/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  const validateLogin = () => {
    if (username === "" && password === "") {
      swal("Input Kosong", "Silahkan Masukkan Data Yang Sesuai", "error");
    } else if (username === "") {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh  Ada Spasi", "error");
    } else if (password === "") {
      swal("Input Salah", "Password Tidak Boleh Kosong", "error");
      // } else if (password.length < 8) {
      //   swal("Input Salah", "Password is less than 8", "error");
    } else {
      doLogin();
    }
  };

  const doLogin = () => {
    setLoading(true);
    const body = {
      userName: username,
      password: password,
    };

    axios
      .post(urlLogin, body)
      .then((response) => {
        const typeProfile = response.data.data.type;
        swal(
          "Selamat Datang Kembali",
          "Anda akan diarahkan ke halaman dashboard",
          "success"
        );
        setTimeout(() => {
          swal.close();
        }, 3000);
        localStorage.setItem("token", response.data.data);
        localStorage.setItem("profile", response.data.data.type);
        if (typeProfile === "doctor") {
          route.push("/doctor");
        } else if (typeProfile === "patient") {
          route.push("/patient");
        }
      })
      .catch((error) => {
        swal("sorry!", "Email atau Password Salah!", "error");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="bg-[#324B50] p-20 text-[#324B50] font-redhat min-h-screen flex">
        <div className="bg-white px-5 py-3 rounded-lg shadow-white shadow-md h-[80vh]">
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
                  pantau selalu kesehatanmu!
                </p>
                <div className="flex justify-center">
                  <p> selamat datang, silahkan masuk ke akun mu !</p>
                </div>
                {/* input button */}
                <div className=" py-5 space-y-3 ">
                  <div className="relative block w-4/6 m-auto">
                    <input
                      type="text"
                      className="placeholder-[#324B50] form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding
                     border-2 border-solid border-[#324B50] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
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
                      id="password"
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
                        className=" mb-[40px] bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                      >
                        Loading ....
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center ">
                      <button
                        className=" mb-[40px] bg-[#324B50] font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                        type="submit"
                        onClick={() => validateLogin()}
                      >
                        Login
                        <FaSignInAlt className="ml-2" />
                      </button>
                    </div>
                  )}
                </div>
                {/* direct to register */}
                <div className="flex justify-center text-xs mt-10 font-medium absolute bottom-3 left-[42%] ">
                  <p> Belum punya akun?</p>
                  <a
                    onClick={() => route.push("/register")}
                    className="underline cursor-pointer ml-1"
                  >
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

export default Login;
