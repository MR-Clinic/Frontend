import React from "react";
import logo from "../assets/Logo.png";
import Image from "next/image";
import avatar from "../assets/avatar1.png";
import { FaSignInAlt } from "react-icons/fa";
import swal from "sweetalert";
import Router, { useRouter } from "next/router";

function NavDashboard(props) {
  let name =
    typeof window !== "undefined" ? localStorage.getItem("name") : null;
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  function Logout() {
    {
      Router.push("/");
      localStorage.clear();
    }
  }

  return (
    <>
      {/* left section */}
      <div className=" relative">
        <div className="bg-white drop-shadow-lg">
          <div className="flex justify-between py-3 items-center pl-28">
            <div className="flex justify-start">
              <div className="w-[10%] mx-5">
                <Image src={logo} alt="logo" />{" "}
              </div>
              <p className="text-4xl"> | </p>
              <p className="pl-5 font-light text-2xl capitalize">
                {" "}
                welcome back. have a nice day !{" "}
              </p>
            </div>
            {/* right section */}
            <div className="flex justify-between">
              <div className="flex ">
                <div className="flex flex-col mr-5 ">
                  {getType === "admin" ? (
                    <p className="font-bold text-right text-lg w-[200px]">
                      admin
                    </p>
                  ) : (
                    <p className="font-bold text-right text-lg w-[200px]">
                      dr.
                      {name
                        ? name
                        : props.dataDoctor
                        ? props.dataDoctor.name
                        : ""}
                    </p>
                  )}
                  <p className="font-light text-sm text-right"> Dokter Umum</p>
                </div>
                <div className="w-[50px] rounded-full mr-5">
                  <Image src={avatar} alt="doctor-img" />{" "}
                </div>
              </div>
              <p className=" text-4xl  "> | </p>
              <div className="flex mx-5 justify-center items-center mb-3 bg-[#356E79] py-1 px-3 rounded-lg cursor-pointer hover:opacity-80">
                <div
                  className="font-bold text-white "
                  onClick={() => {
                    swal({
                      title: "Anda yakin ingin keluar?",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        Logout();
                        swal("Anda berhasil Logout!", {
                          icon: "success",
                        });
                      }
                    });
                  }}
                >
                  {" "}
                  Logout
                </div>{" "}
                <FaSignInAlt className="text-white ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDashboard;
