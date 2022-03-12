import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { FaTrashAlt } from "react-icons/fa";

function Periksa() {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] text-[#324B50]">
        <div className="ml-[7%] mr-[5%]">
          <div className=" flex justify-between border-b-2 border-gray-600">
            <div className="flex flex-col justify-start">
              <p className="text-3xl font-bold pt-5">
                {" "}
                Rizki Adiwiganda (Nama Pasien)
              </p>
              <p className="font-light text-xl leading-tight mb-2 ">
                {" "}
                12764763864876 (nik)
              </p>
            </div>
            <div className="font-bold text-3xl pt-5">
              {" "}
              No. Medical Records : 1212121{" "}
            </div>
          </div>

          <div className="bg-white border-2 rounded-lg p-5 mt-5">
            <div className="grid grid-cols-2">
              <div className="grid items-start ml-10 border-r-4 border-gray-700">
                <p className="text-2xl font-bold mb-3 "> Informasi Pasien</p>
                <div className="grid grid-cols-2">
                  <div className="ml-3">
                    <div className="font-semibold">
                      <p className="py-1"> jenis kelamin</p>
                      <p className="py-1"> umur </p>
                      <p className="py-1"> Agama </p>
                      <p className="py-1"> Pekerjaan </p>
                      <p className="py-1"> Status </p>
                    </div>
                  </div>
                  <div>
                    <p className="py-1"> : Pria</p>
                    <p className="py-1"> : 25</p>
                    <p className="py-1"> : Islam</p>
                    <p className="py-1"> : Wirausaha</p>
                    <p className="py-1"> : Lajang</p>
                  </div>
                </div>
              </div>
              <div className="grid justify-center">
                <p className="text-2xl font-bold mb-3 "> Keluhan </p>
                <div className="border-2 border-gray-700 p-2 rounded-lg w-[500px]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  eius dolore impedit delectus maxime veritatis officiis
                  deserunt nesciunt voluptates? Distinctio eius neque, error
                  harum eos facilis exercitationem at optio dolore vero sint
                  veritatis dolorum fugiat, magnam odio laudantium aut,
                  molestias necessitatibus magni cum saepe aspernatur eum
                  voluptatibus quasi. Laudantium, repellat!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 rounded-lg p-5 mt-5">
            <div className="ml-10">
              <p className="text-2xl font-bold mb-3 "> Data Pemeriksaan</p>
              <div className="flex flex-wrap">
                <div className="text-medium font-semibold px-3">
                  <p> tekanan darah</p>
                  <input
                    className="border-2  w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="text-medium font-semibold px-3">
                  <p> Heart Rate</p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="text-medium font-semibold px-3">
                  <p> Respiratory Rate</p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="text-medium font-semibold px-3">
                  <p> Saturasi 02</p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="text-medium font-semibold px-3">
                  <p> Berat Badan </p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="text-medium font-semibold px-3">
                  <p> Tinggi Badan </p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" font-semibold px-3 text-medium">
                  <p> Body Mass Index</p>
                  <input
                    className="border-2 w-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-2xl font-bold mt-3 mb-3 "> Diagnosa</p>
              <div className="grid grid-cols-2 ">
                <div className="px-3 border-r-4 border-gray-700">
                  <p> Diagnosa Utama</p>
                  <input
                    className="border-2 w-[400px] h-[100px] border-gray-700 rounded-lg"
                    type="text"
                  />
                  <p> Diagnosa Tambahan</p>
                  <input
                    className="border-2 w-[400px] h-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                  <p> Tindakan </p>
                  <input
                    className="border-2 w-[400px] h-[200px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="ml-8">
                  <p className="text-2xl font-bold mt-3 mb-3 "> Resep</p>
                  <p className="font-semibold"> Obat</p>
                  <div className="flex mb-3">
                    <input
                      className="border-2 w-[250px] border-gray-700 rounded-lg"
                      type="text"
                    />
                    <input
                      className="border-2 w-[50px] border-gray-700 rounded-lg ml-3"
                      type="number"
                      placeholder="1,2"
                    />
                    <p className="font-bold text-3xl ml-3"> / </p>
                    <input
                      className="border-2 w-[150px] border-gray-700 rounded-lg ml-3"
                      type="text"
                      placeholder="hari/minggu"
                    />
                  </div>
                  <button className=" font-semibold items-center text-white px-3 py-1 border-2 bg-[#324B50] rounded-lg hover:opacity-80 ">
                    Tambah <span className=""> + </span>
                  </button>
                  <div className="mt-5">
                    <p className="font-semibold"> Semua Resep</p>
                    <div className="border-2 border-[#324B50] p-3 w-[500px] rounded-lg">
                      <div className="flex justify-between mx-2 py-1">
                        <p className="font-semibold">Paracetamol</p>
                        <p className="font-semibold"> 3 / hari </p>
                        <FaTrashAlt />
                      </div>
                      <div className="flex justify-between mx-2 py-1">
                        <p className="font-semibold">Paracetamol</p>
                        <p className="font-semibold"> 3 / hari </p>
                        <FaTrashAlt />
                      </div>
                      <div className="flex justify-between mx-2 py-1">
                        <p className="font-semibold">Paracetamol</p>
                        <p className="font-semibold"> 3 / hari </p>
                        <FaTrashAlt />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-end mt-5  ">
                    <button className="text-white font-semibold px-6 py-1 bg-[#324B50] rounded-lg hover:opacity-80 ">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Periksa;
