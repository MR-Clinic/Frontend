import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import logoImg from "../assets/Logo.png";
import Image from "next/image";
import { useState } from "react";

const urlLogin = "";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateLogin = () => {
    if (email === "") {
      swal("email can't be empty");
    } else if (password === "") {
      swal("password can't be empty");
    } else {
      doLogin();
    }
  };

  return (
    <>
      <div className="bg-[#324B50] p-20 text-[#324B50] font-redhat">
        <div className="bg-white p-2 rounded-lg shadow-white shadow-md">
          <div className="grid grid-cols-3  rounded-lg">
            {/* left-section */}
            <div className="grid bg-[#E4F5E9] drop-shadow-lg ">
              <div className="grid justify-center ">
                <div className="w-[230px] h-[80px] pt-[200px]">
                  <Image src={logoImg} />
                </div>
                <div className="w-[250px] mt-[120px]">
                  <p className=" font-semibold text-[30px] leading-[35px] ">
                    {" "}
                    Website Medical Record Clinic{" "}
                  </p>
                  <p className=" pt-2 text-[16px] leading-[20px] pb-[150px]">
                    {" "}
                    Sistemasi Data Kesehatan Terpercaya !{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* right-section */}
            <div className="col-span-2 bg-white drop-shadow-lg rounded-lg z-10 ">
              <div className="grid justify-center capitalize ">
                <p className="font-semibold text-[40px] leading-[50px] w-[400px] text-center pt-[100px]">
                  pantau selalu kesehatanmu!
                </p>
                <div className="flex justify-center">
                  <p> selamat datang, silahkan masuk ke akun mu !</p>
                </div>
                {/* input button */}
                <div className=" py-5 space-y-3">
                  <div className="relative block">
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
                  <div className="relative block">
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
                      onClick={() => validateLogin()}
                    >
                      Login
                      <FaSignInAlt className="ml-2" />
                    </button>
                  </div>
                </div>
                {/* direct to register */}
                <div className="flex justify-center text-xs mt-10 pt-10 font-medium ">
                  <p> Belum punya akun?</p>
                  <p className="underline cursor-pointer ml-1">
                    {" "}
                    ayo mulai daftar
                  </p>
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
