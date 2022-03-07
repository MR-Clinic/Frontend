import React from "react";
import Image from "next/image";
import logo from "../assets/logo mrc.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#356E79] mt-[-30px]">
        <div className="flex justify-between py-2 pl-10">
          <div className="w-[100px]">
            <Image src={logo} />
          </div>
          <div className="flex items-center pr-5 font-semibold text-white">
            <p> © Copyright 2022 Mr Clinic Inc. All Right Reserved </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
