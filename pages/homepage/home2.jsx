import React from "react";
import Image from "next/image";
import doctor1 from "../../assets/doctor1.svg";
import doctor2 from "../../assets/doctor2.svg";
import doctor3 from "../../assets/somedoctor.svg";

function Home2() {
  return (
    <>
      <div className="flex justify-start pl-4 relative drop-shadow-lg">
        <button
          className=" cursor-default mb-[-20px] bg-[#356E79] font-medium inline-flex items-center px-10 py-2 rounded-2xl shadow-md text-white "
          type="submit"
        >
          why choose us?
        </button>
      </div>
      <div className="bg-[#E4F5E9] ">
        <div className="grid grid-cols-3">
          <div className="grid pl-5">
            <div className="w-[300px] mt-10 mb-20">
              <Image src={doctor1} />
            </div>
            <div className=" mb-5">
              <Image src={doctor3} />{" "}
            </div>
          </div>
          <div className="grid">
            <div className="capitalize">
              <div className="text-left mt-[45px] ml-[-90px]">
                <p className="font-bold text-[39px] "> Sistematic data</p>
                <p className=" text-xs">
                  {" "}
                  semua data tercatat secara sistematis
                </p>
                <p className=" text-[20px]">
                  {" "}
                  semua data anda telah di record dengan baik di database kami,
                  dan disajikan dalam bentuk yang lebih informatif
                </p>
                <button
                  className="drop-shadow-lg mt-3 bg-[#356E79] font-sm inline-flex items-center px-4 py-2 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                  type="submit"
                >
                  check now
                </button>
              </div>
              <div className="text-right mb-10  mr-[-80px]">
                <p className="font-bold text-[39px]"> Book a doctor</p>
                <p className="text-xs">
                  {" "}
                  hindari antrian dengan fitur book a doctor!
                </p>
                <p className=" text-[20px]">
                  {" "}
                  cari klinik, lihat jadwal dokter dan <br /> availability,
                  kemudian book!
                </p>
                <button
                  className="drop-shadow-lg mt-3 bg-[#356E79] font-sm inline-flex items-center px-4 py-2 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                  type="submit"
                >
                  check now
                </button>
              </div>
              <div className="text-left ml-[15px] pt-3 mb-5">
                <p className="font-bold text-[39px] leading-[40px] ">
                  {" "}
                  get a realtime report
                </p>
                <p className="text-xs pt-3">
                  {" "}
                  dapatkan medical record secara realtime
                </p>
                <p className=" text-[20px]">
                  {" "}
                  medical record tercatat di database, sehingga bisa diakses
                  kapan saja dan dimana saja !
                </p>
                <button
                  className="drop-shadow-lg mt-3 bg-[#356E79] font-sm inline-flex items-center px-4 py-2 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                  type="submit"
                >
                  check now
                </button>
              </div>
            </div>
          </div>
          <div className="grid justify-center w-[350px] ml-[70px] mt-[60px]">
            <Image src={doctor2} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Home2;
