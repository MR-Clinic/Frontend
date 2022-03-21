import React, { Fragment, useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { FaTrashAlt } from "react-icons/fa";
import {useRouter} from "next/router"
import { useDispatch } from "react-redux";
import allStore from "../../store/actions";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs"
import swal from "sweetalert";
import moment from "moment";
import ReactLoad from "react-loading";

function Check() {

  const date =moment(new Date).format("YYYY")
  const route = useRouter();
  const dispatch = useDispatch()
  const pasienUid = typeof window !== "undefined" ?  localStorage.getItem("pasienUid") : null;
  const [NIK, NIKSet] = useState("~")
  const [Nama, NamaSet] = useState("~")
  const [Jenis, JenisSet] = useState("~")
  const [Alamat, AlamatSet] = useState("~")
  const [Tempat, TempatSet] = useState("~")
  const [Agama, AgamaSet] = useState("~")
  const [Status, StatusSet] = useState("~")
  const [Pekerjaan, PekerjaanSet] = useState("~")
  const complaint = typeof window !== "undefined" ? localStorage.getItem("complaint") : null;
  const [noMR, noMRSet] = useState("~")
  const [age, ageSet] = useState("");
  

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
  const [status, statusSet] = useState("");
  const [namaObat, namaObatSet] = useState("Nama Obat");
  const [angkaDosis, angkaDosisSet] = useState("0");
  const [dosisSel, dosisSelSet] = useState("Hari / Minggu");
  const [resepList , resepListSet ] = useState([]);

  const [loadSubmit, loadSubmitSet] =useState(false);

  const DoctorUid = typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;
  const visitUid = typeof window !== "undefined" ? localStorage.getItem("vuid") : null;

  useEffect(()=>{
    console.log(pasienUid);
    if(pasienUid){
      console.log("vuid" ,visitUid);
      noMRSet(visitUid)

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
        ageSet(moment(e.dob).format("YYYY"))
      })
    }
    console.log('run');
  },[])

  function handleSubmit(){
    loadSubmitSet(true)
    let recipe = ""
    for (let i = 0; i < resepList.length; i++) {
        recipe += ", "+resepList[i].namaObat+" - "+resepList[i].dosis;      
    }
    const data = new FormData();
    data.append("bloodPressuse",bloodPressuse)
    data.append("heartRate",heartRate)
    data.append("respiratoryRate",respiratoryRate)
    data.append("o2Saturate",o2Saturate)
    data.append("weight",weight)
    data.append("height",height)
    data.append("bmi",bmi)
    data.append("mainDiagnose",mainDiagnose)
    data.append("addiditonDiagnose",addiditonDiagnose)
    data.append("action",action)
    data.append("recipe",recipe)

    dispatch(allStore.putVisit(data))
    .then((e)=>{
      swal("Data Tersimpan","","success");
      setTimeout(() => {
        swal.close();
        route.push("/doctor")
      }, 3000);
    })
    .catch((e)=>{
      swal("Data Belum Tersimpan", e+" ,Coba dalam beberapa saat", "error")
    })
    .finally(()=>{
      loadSubmitSet(false)
    })

  }

  function addObatList(){
    console.log("resep :",resepList);
    let state = resepList
    let dosis = angkaDosis+" / "+dosisSel
    if(namaObat === "" || namaObat === "Nama Obat"){
      swal("Nama Obat Kosong","","error")
    }else if (angkaDosis === "0" || angkaDosis < 0){
      swal("Angka Dosis Belum Dimasukkan / Tidak Boleh Minus","","error")
    }else if (dosisSel.match("Hari / Minggu")){
      swal("Hari/Minggu Belum Dipilih","","error")
    }else{
      resepListSet([...state ,{namaObat, dosis}])
    }
    namaObatSet("Nama Obat");
    angkaDosisSet("0");
    dosisSelSet("Hari / Minggu ");
  }

  function deleteList(e){
    let list = resepList;
    swal("Resep Terhapus","","success")
    namaObatSet("");
    list.splice(e,1);
    resepListSet(list);
  }

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-full text-[#324B50] pb-5">
        <div className="ml-[7%] mr-[calc(9%-70px)]">
          <div className="px-5 flex justify-between border-b-2 border-gray-600 ">
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

          <div className="bg-white border-2 rounded-lg p-5 px-10 mt-5 drop-shadow-lg">
            <div className="grid grid-cols-2 justify-items-stretch divide-x-4 divide-green-800">
              <div className="grid grid-cols-1 justify-start justify-items-stretch">
                <div className="w-full">
                  <p className="text-2xl font-bold"> Informasi Pasien</p>
                  <div className="grid grid-cols-2">
                    <div className="">
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
                      <p className="py-1"> : {date - age} Tahun</p>
                      <p className="py-1"> : {Agama}</p>
                      <p className="py-1"> : {Pekerjaan}</p>
                      <p className="py-1"> : {Status}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 justify-start px-5 justify-items-stretch">
                <div className="w-full ">
                  <p className="text-2xl font-bold mb-3 "> Keluhan </p>
                  <div className="border-2 border-gray-700 px-3 py-2 rounded-lg w-full min-h-[150px]">
                    <p>
                      {complaint === undefined ? "Belum Ada Keluhan" : complaint}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 rounded-lg drop-shadow-lg p-5 px-10 mt-5 ">
            <div className="grid grid-cols-2 justify-items-stretch gap-10">
              <div className="col-span-2 ">
                <p className="text-2xl font-bold mb-3 "> Data Pemeriksaan</p>
                <div className="flex flex-wrap justify-between">
                  <div className="text-medium font-semibold px-3">
                    <p> Tekanan Darah</p>
                    <input
                      className="border-2  w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{bloodPressuseSet(e.target.value)}}
                    />
                  </div>
                  <div className="text-medium font-semibold px-3">
                    <p> Heart Rate</p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{heartRateSet(e.target.value)}}
                    />
                  </div>
                  <div className="text-medium font-semibold px-3">
                    <p> Respiratory Rate</p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{respiratoryRateSet(e.target.value)}}
                    />
                  </div>
                  <div className="text-medium font-semibold px-3">
                    <p> Saturasi 02</p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{o2SaturateSet(e.target.value)}}
                    />
                  </div>
                  <div className="text-medium font-semibold px-3">
                    <p> Berat Badan </p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{weightSet(e.target.value)}}
                    />
                  </div>
                  <div className="text-medium font-semibold px-3">
                    <p> Tinggi Badan </p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{heightSet(e.target.value)}}
                    />
                  </div>
                  <div className=" font-semibold px-3 text-medium">
                    <p> Body Mass Index</p>
                    <input
                      className="border-2 w-[150px] px-2 h-[40px] border-gray-700 rounded-lg"
                      type="text"
                      onChange={(e)=>{bmiSet(e.target.value)}}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mt-3 mb-3 "> Diagnosa</p>
                <div className="px-3">
                  <p> Diagnosa Utama</p>
                  <textarea
                    className="px-2  py-1 border-2 w-full min-h-[100px] border-gray-700 rounded-lg"
                    type="text"
                    onChange={(e)=>{mainDiagnoseSet(e.target.value)}}/>
                  <p> Diagnosa Tambahan</p>
                  <textarea
                    className="px-2  py-1 border-2 w-full min-h-[150px] border-gray-700 rounded-lg"
                    type="text"
                    onChange={(e)=>{addiditonDiagnoseSet(e.target.value)}}/>
                  <p> Tindakan </p>
                  <textarea
                    className="px-2  py-1 border-2 w-full min-h-[200px] border-gray-700 rounded-lg"
                    type="text"
                    onChange={(e)=>{actionSet(e.target.value)}}/>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mt-3 mb-3 "> Resep</p>
                <div className="px-2">
                  <p className="font-semibold"> Obat</p>
                  <div className="flex justify-between mb-3">
                    <input
                      className="border-2 w-5/12 border-gray-700 rounded-lg  px-2"
                      type="text"
                      value={namaObat}
                      onClick={(e)=>{namaObatSet("")}}
                      onChange={(e)=>{namaObatSet(e.target.value)}}
                    />
                    <input
                      className="border-2 w-1/12 border-gray-700 rounded-lg ml-3 px-2 "
                      type="number"
                      value={angkaDosis}
                      min="1"
                      onChange={(e)=>{angkaDosisSet(e.target.value)}}
                    />
                    <p className="font-bold text-2xl"> / </p>
                    <div className="border-2 w-4/12 border-gray-700 rounded-lg px-2 py-1 relative ">
                      <Menu as="div" className="relative inline-block w-full text-left">
                        <div className="h-full">
                          <Menu.Button className="inline-flex items-center px-3 justify-between w-full  text-slate-500">
                            {dosisSel}
                            <BsChevronDown className="ml-2"/>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute origin-top-right  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-[200px] w-full overflow-y-scroll focus:outline-none">
                              <Menu.Item>
                                <div className="py-2 px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dosisSelSet("Hari")}}>
                                  <span className="w-full ">
                                    Hari
                                  </span>
                                </div>
                              </Menu.Item>
                              <Menu.Item>
                                <div className="py-2 px-3 hover:bg-slate-200 rounded-md" onClick={()=>{dosisSelSet("Minggu")}}>
                                  <span className="w-full ">
                                    Minggu
                                  </span>
                                </div>
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <button className=" font-semibold items-center text-white px-3 py-1 border-2 bg-[#324B50] rounded-lg hover:opacity-80 " onClick={()=>{addObatList()}}>
                    Tambah <span className=""> + </span>
                  </button>
                  <div className="mt-5">
                    <p className="font-semibold"> Semua Resep</p>
                    <div className="border-2 border-[#324B50] p-3 w-full max-h-[320px] overflow-y-scroll rounded-lg">
                      { resepList ?
                        resepList.map((e,i)=>(
                          <div className="flex justify-between items-center" id={"obat-"+i} key={i}>
                            <p className="font-semibold w-4/6">{e.namaObat}</p>
                            <p className="font-semibold inline "> {e.dosis} </p>
                            <div className="inline-block ml-3 cursor-pointer" uu={i} onClick={()=>deleteList(i)}>
                              <FaTrashAlt key={i} />
                            </div>
                          </div>
                        ))
                        :
                        null
                      }
                    </div>
                  </div>
                  <div className="flex justify-end items-end mt-5  ">
                    <span className="text-white font-semibold px-6 py-2 bg-[#324B50] rounded-lg hover:opacity-80 cursor-pointer flex justify-center items-center" onClick={handleSubmit}>
                      submit
                      {loadSubmit ? 
                      <ReactLoad
                      className="ml-2 mb-2 inline-block"
                      type={"spin"}
                      color={"#ffffff"}
                      height={"15px"}
                      width={"20px"}
                      />
                      :
                      null
                    }
                    </span>
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
