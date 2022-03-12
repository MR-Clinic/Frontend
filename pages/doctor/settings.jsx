import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Settings() {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);

  function closeModalEdit() {
    setIsOpenEdit(false);
  }
  function closeModalChange() {
    setIsOpenChange(false);
  }
  function openModalEdit() {
    setIsOpenEdit(true);
  }
  function openModalChange() {
    setIsOpenChange(true);
  }
  return (
    <>
      {/* modal edit*/}
      <Transition appear show={isOpenEdit} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModalEdit}
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
              <div className=" text-[#356E79] inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-center capitalize text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  edit data akun
                </Dialog.Title>

                <div className=" flex justify-center text-medium w-full mt-5 ">
                  <div className="space-y-2 pl-2 text-sm">
                    {" "}
                    <p className="font-bold"> Nama </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold">User name </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold"> Email </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold"> Password </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold"> Alamat</p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold"> Jadwal Buka </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold"> Status </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-5  ">
                  <button
                    type="button"
                    className=" text-sm inline-flex justify-center px-5 py-1  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* modal change */}
      <Transition appear show={isOpenChange} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModalChange}
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
              <div className=" text-[#356E79] inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-[#356E79] flex justify-center text-xl font-bold leading-6  border-b-2 py-3 border-gray-500"
                >
                  Edit Data Admin
                </Dialog.Title>

                <div className=" flex justify-center text-medium w-full mt-5 ">
                  <div className="space-y-2 pl-2 text-sm">
                    {" "}
                    <p className="font-bold"> Nama </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                    <p className="font-bold">User name </p>
                    <input
                      className="border-2 w-[250px] h-[35px] border-gray-700 rounded-md"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-5  ">
                  <button
                    type="button"
                    className=" text-sm inline-flex justify-center px-5 py-1  font-medium text-white bg-[#356E79] border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] h-full text-[#324B50]">
        <div className="ml-[7%]">
          <p className="text-3xl font-bold pt-5 mb-3"> Pengaturan</p>{" "}
          <div className="bg-white border-2 p-5 mb-5 rounded-lg w-6/12">
            <p className="text-xl font-bold border-b-2 border-gray-500">
              {" "}
              Akun
            </p>
            <div className="grid grid-cols-2 pt-5 ">
              <div className="space-y-3 pl-5 font-bold">
                <p> Nama</p>
                <p> Username</p>
                <p> Email </p>
                <p> Password</p>
                <p> Alamat </p>
                <p> Jadwal Buka</p>
                <p> Status</p>
              </div>
              <div className="space-y-3">
                <p>
                  {" "}
                  <span className="pr-5">: </span> Nama
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> Username
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> Email{" "}
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> Password
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> Alamat{" "}
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> Jadwal Buka
                </p>
                <p>
                  {" "}
                  <span className="pr-5">: </span> available/unavailable
                </p>
              </div>
            </div>
            <div className="pl-5">
              <button
                className="bg-[#324B50] text-white px-6 py-1  rounded-lg mt-5 hover:opacity-80"
                onClick={openModalEdit}
              >
                {" "}
                Edit
              </button>
            </div>
          </div>
          <div className="bg-white border-2 p-5 pb-10 rounded-lg w-6/12">
            <p className="text-xl font-bold border-b-2 border-gray-500">
              {" "}
              Admin Akun
            </p>
            <div className="grid grid-cols-2 pt-5 ">
              <div className="space-y-3 pl-5 font-bold">
                <p> Username</p>
                <p> Password</p>
              </div>
              <div className="space-y-3">
                <p>
                  {" "}
                  <span className="pr-5">: </span> Username
                </p>

                <p>
                  {" "}
                  <span className="pr-5">: </span> Password
                </p>
              </div>
            </div>
            <div className="pl-5">
              <button
                className="bg-[#324B50] text-white px-6 py-1  rounded-lg mt-5 hover:opacity-80"
                onClick={openModalChange}
              >
                {" "}
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
