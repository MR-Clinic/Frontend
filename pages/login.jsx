import React, { useEffect } from "react";
import { CgLogIn } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { MdOutlineVpnKey } from "react-icons/md";
import logoImg from "../assets/Logo.png";
import Image from "next/image";
import { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import form from "../styles/Form.module.css";
import axios from "axios";
import ReactLoading from "react-loading";

const urlLogin = "https://faliqadlan.cloud.okteto.net/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const profile = localStorage.getItem("profile");
      if (profile === "doctor") {
        route.push("/doctor");
      } else if (profile === "patient") {
        route.push("/patient");
      }
    }
  });

  const validateLogin = () => {
    if (username === "" && password === "") {
      swal("Input Kosong", "Silahkan Masukkan Data Yang Sesuai", "error");
    } else if (username === "") {
      swal("Input Salah", "Username Tidak Boleh Kosong", "error");
    } else if (username.match(/^$|\s+/)) {
      swal("Input Salah", "Username Tidak Boleh  Ada Spasi", "error");
    } else if (password === "") {
      swal("Input Salah", "Password Tidak Boleh Kosong", "error");
    } else if (password.length < 8) {
      swal("Input Salah", "Password is less than 8", "error");
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
        console.log(response);
        const typeProfile = response.data.data.type;
        swal(
          "Selamat Datang Kembali",
          "Anda akan diarahkan ke halaman dashboard",
          "success"
        );
        setTimeout(() => {
          swal.close();
        }, 3000);
        localStorage.setItem("token", response.data.data.token);
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
        <div className="bg-white px-5 py-3 rounded-lg shadow-white shadow-md min-h-[80vh]">
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

            {/* right-section Part 1*/}

            <div
              className={
                "col-span-2 bg-white rounded-lg z-10 flex justify-center items-center relative "
              }
            >
              <div className="grid justify-center capitalize ">
                <p className="font-semibold text-[40px] leading-[50px] text-center">
                  {" "}
                  pantau selalu kesehatanmu!
                </p>
                <div className="flex justify-center">
                  <p> selamat datang, silahkan masuk ke akun mu !</p>
                </div>
                {/* input button */}
                <div>
                  <div className={form.inputDiv}>
                    <div>
                      <div className={form.input}>
                        <input
                          type="text"
                          className="{form.inputStyle} "
                          id="nik"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <FiUser />
                      </div>
                    </div>
                    <div>
                      <div className={form.input}>
                        <input
                          type="password"
                          className="{form.inputStyle} "
                          id="full_name"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <MdOutlineVpnKey />
                      </div>
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
                        onClick={() => validateLogin()}
                      >
                        Login
                        <CgLogIn className="ml-2" />
                      </button>
                    </div>
                  )}
                </div>
                {/* direct to register */}
                <div className="flex justify-center text-xs mt-10 font-medium absolute bottom-3 left-[29%] ">
                  <p> Belum punya akun?</p>
                  <a
                    onClick={() => route.push("/register")}
                    className="underline cursor-pointer ml-1"
                  >
                    {" "}
                    daftar sebagai Pasien
                  </a>
                  <span> / </span>
                  <a
                    onClick={() => route.push("/register/clinic")}
                    className="underline cursor-pointer ml-1"
                  >
                    {" "}
                    daftar sebagai dokter
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
