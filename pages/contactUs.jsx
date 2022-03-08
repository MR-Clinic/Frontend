import React from "react";
import {
  FaSearchLocation,
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import logoimg from "../assets/logo mrc.svg";

function ContactUs() {
  return (
    <>
      <div className="flex justify-start relative z-20 pl-4 ">
        <button
          className=" drop-shadow-lg cursor-default inactive mb-[-20px] bg-[#95B0B6] font-medium inline-flex items-center px-7 py-2 rounded-2xl shadow-md text-white "
          type="submit"
        >
          contact us
        </button>
      </div>
      <div className="bg-[#356E79] drop-shadow-lg shadow-white">
        <div className=" grid grid-cols-3">
          <div className="col-span-2 text-white px-10 pt-9">
            <div className="flex justify-start py-2">
              <FaSearchLocation />
              <p className="font-bold text-white pl-3"> Alamat</p>{" "}
            </div>
            <p className="font-light w-[300px] capitalize">
              {" "}
              PT MR Clinic, inc gedung Town house lt 5 jl. sungai musi, no 255,
              jakarta pusat dki jakarta 10230
            </p>
            <div className="flex justify-start py-2">
              <FaPhoneAlt />
              <p className="font-bold text-white pl-3"> Telepon</p>{" "}
            </div>
            <p className="font-light"> 021-08888-0999</p>
            <div className="flex justify-start py-2">
              <AiOutlineMail />
              <p className="font-bold text-white pl-3"> Email</p>{" "}
            </div>
            <p className="font-light"> info@mrclinic.id</p>
          </div>
          <div className="grid opacity-75 px-10">
            <Image src={logoimg} />
          </div>
        </div>
        <div className="grid justify-center text-white pb-4">
          <p> Social Media</p>

          <div className="flex justify-center pt-1">
            <div className="">
              <FaFacebookSquare size={20} />
            </div>
            <div className="px-2">
              <FaInstagramSquare size={20} />
            </div>
            <div className="">
              <FaTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
