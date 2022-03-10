import React from "react";
import Image from "next/image";
import { FaForward } from "react-icons/fa";
import imgHome from "../../assets/imgHome.svg";

function Home1() {
  return (
    <>
      <div className="bg-[#E4F5E9] mb-7 h-full">
        {/* left section */}
        <div className=" grid grid-cols-3 text text-black font-redhat">
          <div className="col-span-2 ml-[8%]">
            <div className="flex justify-start capitalize mt-[50px] ml-[45%] font-sm ">
              telah digunakan oleh lebih dari 100++ klinik rekanan
            </div>
            <div className="uppercase font-bold text-[50px] leading-tight">
              {" "}
              <span className="bg-[#356E79] py-1 px-2  text-white">
                sistemasi
              </span>{" "}
              data kesehatan
              <br />
              terpercaya !
            </div>
            <div className="text-xl  font-medium capitalize">
              {" "}
              tidak ada lagi{" "}
              <span className=" font-bold">
                mistreated patient, complicated data arrangement dan
                <br />
                repeated data & history data
              </span>
            </div>
            <div className="capitalize mt-5">
              buat manajemen data anda menjadi lebih baik, agar kualitas
              pelayanan anda
              <br />
              semakin maksimal, yuk gabung bersama kami !
            </div>
            <div className="flex justify-start mt-10 mb-10">
              <button
                className=" drop-shadow-lg mb-[20px] bg-[#356E79] font-medium inline-flex items-center px-3 py-3 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                type="submit"
              >
                Get Started
                <FaForward className="ml-2" />
              </button>
            </div>
          </div>
          <div className="grid h-full w-full ml-[50px]">
            <div className="img-doctor w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
