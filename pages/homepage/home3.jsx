import React from "react";
import doctor1 from "../../assets/doctorwoman.svg";
import doctor2 from "../../assets/doctorman.svg";
import Image from "next/image";

function home3() {
  return (
    <>
      <section id="about">
        <div className="flex justify-end relative drop-shadow-lg mr-[3%]">
          <button
            className="cursor-default inactive mb-[-20px] bg-[#356E79] font-medium inline-flex items-center px-10 py-3 rounded-2xl shadow-md text-white "
            type="submit"
          >
            about us and what the others think
          </button>
        </div>
        <div className="bg-[#E4F5E9] pt-20 px-24 ">
          <div className="bg-[#324B50] rounded-lg h-[280px]"> </div>
          <div className="flex justify-center mt-[-350px] ">
            <div className="w-[400px] ml-[-100px]">
              <Image src={doctor1} alt="img-doctor1" />
            </div>
            <div className="capitalize flex flex-col items-center text-white relative pl-16 mt-[8%]">
              <p className="font-semibold text-2xl mt-7 mb-5 w-[200px] text-center ">
                {" "}
                jaminan layanan terbaik !
              </p>
              <p className="w-[400px] font-light text-center">
                tidak puas dengan layanan kami? segera beritahu kami dan dalam
                kurun waktu 30 hari uang anda akan kami kembalikan sepenuhnya
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-[-80px] text-white text-[13px] pr-4">
            <p> free trial 30 hari !</p>
          </div>
          <div className="flex justify-center capitalize mb-7  ">
            <div className="grid mt-[150px] text-justify w-[450px] ">
              <p>
                {" "}
                " mr clinic is one of the best clinic management web app ! we
                got more than 80% satisified customer growth here. so when you
                search a good management database for your clinic, mr clinic is
                the best answer "
              </p>
              <p className="font-bold text-[16px] ml-[90px]">
                {" "}
                mr jaash singh, doctor at medika farma clinic
              </p>
            </div>
            <div className="w-[500px] mt-[-30px] ml-[200px]">
              <Image src={doctor2} alt="img-doctor2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default home3;
