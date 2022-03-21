import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import allStore from '../../store/actions';
import ReactLoading from "react-loading";
import swal from 'sweetalert';
import { useRouter } from 'next/router';


function ListJanjiKunjungan() {
    const [isOpen, setIsOpen] = useState(false);

    const uid = typeof window !== "undefined" ? localStorage.getItem("doctor_uid") : null;
    const dispatch = useDispatch()
    const listJK =useSelector(({getListJK})=> getListJK.listJK.visits )
    const [NIK, NIKSet] = useState("~")
    const [Nama, NamaSet] = useState("~")
    const [Jenis, JenisSet] = useState("~")
    const [Alamat, AlamatSet] = useState("~")
    const [Tempat, TempatSet] = useState("~")
    const [Agama, AgamaSet] = useState("~")
    const [Status, StatusSet] = useState("~")
    const [Pekerjaan, PekerjaanSet] = useState("~")
    const [complaint, complaintSet] = useState("~")
    const [pasienUid, pasienUidSet] = useState("")
    const [before, beforeSet] = useState("")

    const route = useRouter();
    
    useEffect(()=>{
      console.log("re",listJK);
      dispatch(allStore.getTodayJK(uid));
    },[dispatch])
    
    function closeModal() {
      NIKSet("~")
      NamaSet("~")
      JenisSet("~")
      AlamatSet("~")
      TempatSet("~")
      AgamaSet("~")
      StatusSet("~")
      PekerjaanSet("~")
      complaintSet("~")
        setIsOpen(false);
    }

    function openModal() {
      console.log(this);
        setIsOpen(true);
    }

    function handleStatus(e){
      if(e ==="pending"){
        return (
          <p className="bg-yellow-200 text-yellow-800 font-semibold drop-shadow-lg rounded-md px-2 py-1">
            Pending
          </p>
        )
      } else if(e === "ready"){
        return (
          <p className="bg-green-200 text-green-800 font-semibold drop-shadow-lg rounded-md px-2 py-1 ">
            Ready
          </p>
        )
      } else if(e === "completed"){
        return (
          <p className="bg-green-200 text-green-800 font-semibold drop-shadow-lg rounded-md px-2 py-1 ">
            Completed
          </p>
        )
      } else {
        return (
          <p className="bg-red-200 text-red-800 font-semibold drop-shadow-lg rounded-md px-2 py-1 ">
            Canceled
          </p>
        )
      }
    }

    function handleModal(e) {
      setIsOpen(true);
      let id = e.patient_uid;
      let vuid = e.visit_uid;
      console.log("modal ",id, vuid);
      pasienUidSet(id);
      localStorage.setItem("vuid", vuid);
      // console.log(e.target.attributes.visit_uid.value);
      dispatch(allStore.getPatientModal(id))
      .then((el)=>{
        NIKSet(el.nik)
        NamaSet(el.name)
        JenisSet(el.gender)
        AlamatSet(el.address)
        TempatSet(el.placeBirth+", "+el.dob)
        AgamaSet(el.religion)
        StatusSet(el.status)
        PekerjaanSet(el.job)
        complaintSet(e.complaint);
      })
      .catch((e)=>{
        setIsOpen(false);
        swal("Maaf Data Bermasalah","Data tidak tersedia pada server","error")
      })
      
    }


  return (
    <>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" text-[#356E79] inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-start text-2xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  Data Umum
                </Dialog.Title>

                <div className=" grid grid-cols-2 text-medium w-full mt-5 ">
                    <p className="font-bold"> 
                     NIK 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {NIK}</p>
                    <p className="font-bold"> 
                     Nama Lengkap 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Nama}</p>
                    <p className="font-bold"> 
                     Jenis Kelamin 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Jenis}</p>
                    <p className="font-bold"> 
                     Alamat 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Alamat}</p>
                    <p className="font-bold"> 
                     Tempat/Tanggal Lahir 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Tempat}</p>
                    <p className="font-bold"> 
                     Agama 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Agama}</p>
                    <p className="font-bold"> 
                     Status 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Status}</p>
                    <p className="font-bold"> 
                     Pekerjaan 
                     </p>
                    <p className=' px-1 py-1 font-normal relative before:content-[":"] before:absolute before:left-[-10px]'> {Pekerjaan}</p>
                 
                </div>

                <p className=" form-textarea text-[#356E79] flex justify-start text-2xl font-bold leading-6 border-b-2 border-gray-500 py-3">
                  {" "}
                  Keluhan
                </p>
                <p className="px-2 py-1 border w-full h-[100px] border-[#356E79] rounded-md active:border-[#356E79] mt-5">
                  {complaint}
                </p>

                <div className="flex justify-end mt-5 space-x-2 ">
                  <button
                    type="button"
                    className=" outline-none text-xs inline-flex justify-center px-2 py-2  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={()=>{localStorage.setItem("pasienUid",pasienUid); route.push("/detailpatient/"+pasienUid); }}
                  >
                    Lihat Detail Pasien
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-xs font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={()=>{localStorage.setItem("pasienUid",pasienUid);localStorage.setItem("complaint", complaint);route.push("/checkup/"+pasienUid)}}
                  >
                    Periksa Sekarang
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="flex flex-wrap items-start mt-10">
        {listJK ?
          listJK.map((e,i)=>(
            e.status !== "completed" ? 
            <div key={i} className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5 capitalize">
              <p className="text-xl font-bold"> {e.patientName} </p>
              <p className=""> {e.gender} </p>
              <p className=""> </p>
              <div className="flex text-xs mt-3">
                {handleStatus(e.status)}
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1 cursor-pointer"  onClick={(el)=>handleModal(e)}>
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            :
            null
          )) 
          :
          null
        }
        
        
      </div>
    </>
  )
}

export default ListJanjiKunjungan