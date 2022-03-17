import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { FaTrashAlt } from "react-icons/fa";
import {useRouter} from "next/router"
import { useDispatch } from "react-redux";
import allStore from "../../store/actions";
function Check() {

  const route = useRouter();
  const dispatch = useDispatch()
  const pasienUid = route.query.pasien_uid
  const [NIK, NIKSet] = useState("~")
  const [Nama, NamaSet] = useState("~")
  const [Jenis, JenisSet] = useState("~")
  const [Alamat, AlamatSet] = useState("~")
  const [Tempat, TempatSet] = useState("~")
  const [Agama, AgamaSet] = useState("~")
  const [Status, StatusSet] = useState("~")
  const [Pekerjaan, PekerjaanSet] = useState("~")
  const [complaint, complaintSet] = useState("~")
  const [noMR, noMRSet] = useState("~")

  //Input var

  const [bloodPressuse, bloodPressuseSet] = useState("");
  const [heartRate, heartRateSet] = useState("");
  const [respiratoryRate, respiratoryRateSet] = useState("");
  const [o2Saturate, o2SaturateSet] = useState("");
  const [weight, weightSet] = useState("");
  const [height, heightSet] = useState("");
  const [bmi, bmiSet] = useState("");
  const [mainDiagnose, mainDiagnoseSet] = useState("");
  const [addiditonDiagnose, addiditonDiagnoseSet] = useState("");
  const [action, actionSet] = useState("");
  const [recipe, recipeSet] = useState("");
  const [status, statusSet] = useState("");


  const DoctorUid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;

  useEffect(()=>{
    if(pasienUid){
      dispatch(allStore.getPatientModal(pasienUid))
      .then((e)=>{
        NIKSet(e.nik)
        NamaSet(e.name)
        JenisSet(e.gender)
        AlamatSet(e.address)
        TempatSet(e.placeBirth+", "+e.dob)
        AgamaSet(e.religion)
        StatusSet(e.status)
        PekerjaanSet(e.job)
        complaintSet(e.complaint)
        console.log(e.complaint);
      })
      dispatch(allStore.kunjunganSumToday(DoctorUid))
      .then(({data})=>{
        let visit = data.visits[0];
        noMRSet(visit.visit_uid)
        console.log("JKTOday", visit);
      })
      
    }
    console.log('run');
  })

  useEffect(()=>{

  },[])

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
        <div className="ml-[7%] mr-[5%]">
          <div className=" flex justify-between border-b-2 border-gray-600">
            <div className="flex flex-col justify-start">
              <p className="text-3xl font-bold pt-10">
                {Nama}
              </p>
              <p className="font-light text-xl leading-tight mb-2 ">
                {NIK}
              </p>
            </div>
            <div className="font-bold text-right text-3xl pt-10">
              No. Medical Records.
              <p className="font-light text-xl leading-tight mb-2 ">
               {noMR}
              </p>
            </div>
          </div>

          <div className="bg-white border-2 rounded-lg p-5 mt-5 drop-shadow-lg">
            <div className="grid grid-cols-2 justify-items-stretch ">
              <div className="grid items-start ml-10 border-r-4 border-gray-700">
                <p className="text-2xl font-bold mb-3 "> Informasi Pasien</p>
                <div className="grid grid-cols-2">
                  <div className="ml-3">
                    <div className="font-semibold capitalize">
                      <p className="py-1"> jenis kelamin</p>
                      <p className="py-1"> umur </p>
                      <p className="py-1"> Agama </p>
                      <p className="py-1"> Pekerjaan </p>
                      <p className="py-1"> Status </p>
                    </div>
                  </div>
                  <div className="capitalize">
                    <p className="py-1"> : {Jenis}</p>
                    <p className="py-1"> : 25</p>
                    <p className="py-1"> : {Agama}</p>
                    <p className="py-1"> : {Pekerjaan}</p>
                    <p className="py-1"> : {Status}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 justify-start px-5 justify-items-stretch">
                <div className="w-full ">
                  <p className="text-2xl font-bold mb-3 "> Keluhan </p>
                  <div className="border-2 border-gray-700 px-3 py-2 rounded-lg w-full min-h-[200px]">
                    <p>
                      {complaint === undefined ? "Belum Ada Keluhan" : complaint}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 rounded-lg drop-shadow-lg p-5 mt-5 ">
            <div className="ml-10">
              <p className="text-2xl font-bold mb-3 "> Data Pemeriksaan</p>
              <div className="flex flex-wrap">
                <div className="text-medium font-semibold px-3">
                  <p> Tekanan Darah</p>
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
                  <textarea
                    className="border-2 w-[400px] h-[100px] border-gray-700 rounded-lg"
                    type="text"
                  />
                  <p> Diagnosa Tambahan</p>
                  <textarea
                    className="border-2 w-[400px] h-[150px] border-gray-700 rounded-lg"
                    type="text"
                  />
                  <p> Tindakan </p>
                  <textarea
                    className="border-2 w-[400px] h-[200px] border-gray-700 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="ml-8">
                  <p className="text-2xl font-bold mt-3 mb-3 "> Resep</p>
                  <p className="font-semibold"> Obat</p>
                  <div className="flex mb-3">
                    <input
                      className="border-2 w-[250px] border-gray-700 rounded-lg  px-5"
                      type="text"
                    />
                    <input
                      className="border-2 w-[60px] border-gray-700 rounded-lg ml-3 px-2 "
                      type="number"
                      placeholder="1,2"
                    />
                    <p className="font-bold text-3xl ml-3"> / </p>
                    <input
                      className="border-2 w-[150px] border-gray-700 rounded-lg ml-3 px-5"
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

export default Check;
