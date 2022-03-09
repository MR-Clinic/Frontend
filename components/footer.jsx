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
      <div className="bg-[#324B50] drop-shadow-lg shadow-white">
        <div className=" grid grid-cols-3">
          <div className="grid opacity-50 px-20">
            <Image src={logoimg} />
          </div>
          <div className="grid text-white pb-5 px-10 pt-7">
            <p className="font-bold text-lg text-white pb-2"> Contact Us</p>
            <div className="flex justify-start py-2">
              <FaSearchLocation />
              <p className="font-bold text-white pl-3 pr-3 w-[90px]">
                Alamat :
              </p>{" "}
              <p className="font-light w-[300px] capitalize">
                {" "}
                PT MR Clinic, inc gedung Town house lt 5 jl. sungai musi, no
                255, jakarta pusat dki jakarta 10230
              </p>
            </div>

            <div className="flex justify-start py-2 ">
              <FaPhoneAlt />
              <p className="font-bold text-white pl-3 pr-3"> Telepon : </p>{" "}
              <p className="font-light"> 021-08888-0999</p>
            </div>

            <div className="flex justify-start py-2 ">
              <AiOutlineMail />
              <p className="font-bold text-white pl-3 pr-7"> Email : </p>{" "}
              <p className="font-light"> info@mrclinic.id</p>
            </div>
          </div>

          <div className="grid justify-start pl-20 pb-5 text-white pt-7">
            <p className="text-lg font-bold"> Social Media</p>
            <div className="flex justify-start ">
              <FaFacebookSquare size={20} />
              <p className="font-light pl-3 "> MR clinic</p>
            </div>
            <div className="flex justify-start">
              <FaInstagramSquare size={20} />
              <p className="font-light pl-3"> @mrclinic</p>
            </div>
            <div className="flex justify-start">
              <FaTwitter size={20} />
              <p className="font-light pl-3"> mr clinic</p>
            </div>
            <p className="font-light text-sm pt-1">
              {" "}
              © Copyright 2022 Mr Clinic Inc. All Right Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
