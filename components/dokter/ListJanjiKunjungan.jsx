import React from 'react'

function ListJanjiKunjungan() {
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
  return (
    <div className="flex flex-wrap items-start mt-10">
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p
                  className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1 cursor-pointer"
                  onClick={openModal}
                >
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex drop-shadow-lg flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-yellow-300 font-semibold  rounded-md px-2 py-1">
                  Pending
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg drop-shadow-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5 ">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-rose-400 font-semibold drop-shadow-lg  rounded-md px-2 py-1">
                  canceled
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg drop-shadow-lg p-5 flex flex-col items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col drop-shadow-lg items-start ml-5 w-[220px] mb-5">
              <p className="text-xl font-bold"> John Dorian </p>
              <p className=""> Pria </p>
              <p className=""> 123456789327372 </p>
              <div className="flex text-xs mt-3">
                <p className="bg-[#E4F5E9] font-semibold drop-shadow-lg rounded-md px-2 py-1">
                  Ready
                </p>
                <p className="border-2 rounded-md font-semibold ml-10 px-1 py-1">
                  {" "}
                  Detail Data
                </p>
              </div>
            </div>
          </div>
  )
}

export default ListJanjiKunjungan