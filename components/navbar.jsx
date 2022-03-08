import React from "react";
import Image from "next/image";
import logo from "../assets/logo mrc.svg";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="bg-[#356E79] drop-shadow-lg">
        <div className="flex justify-between py-2 pl-7">
          <div className="w-[100px]">
            <Image src={logo} />
          </div>
          <div className="flex items-center px-2 font-semibold text-white cursor-pointer ">
            <p className="px-7 hover:text-[#324B50]"> Feature </p>
            <p className="px-7 hover:text-[#324B50]"> About </p>
            <p className="px-7 hover:text-[#324B50]"> Contact </p>
            <p className="px-7 hover:text-[#324B50]"> FAQ </p>
          </div>
          <div className="flex  items-center pr-5">
            <Link href="/register">
              <button
                className=" bg-[#356E79] border-2 border-white font-medium inline-flex items-center px-5 py-1 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                type="submit"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
