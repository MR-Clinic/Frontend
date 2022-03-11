import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUserMd,
  FaAddressBook,
  FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/router";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" mt-[-80px] absolute">
        <div className="flex">
          <div className="bg-[#324B50] w-[70px] h-screen">
            <div className="flex flex-col text-white items-center">
              <div className="mt-5">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <FaBars className={!isOpen ? "block" : "hidden"} size={30} />
                  <FaTimes className={isOpen ? "block" : "hidden"} size={30} />
                </button>
                {/* dataprofile = doctor */}
                <div className="mt-14">
                  <FaHome size={25} />
                  <FaUserMd className="mt-14" size={25} />
                  <FaAddressBook className="mt-14" size={25} />
                </div>
              </div>
            </div>
          </div>
          {isOpen ? (
            <div className="bg-[#324B50] w-[120px] h-screen ">
              <div className="flex flex-col text-white items-start">
                <div className="mt-[10%] font-bold text-center">
                  <p className="bg-[#356E79] py-2 px-2  text-center ">
                    {" "}
                    Dashboard Menu
                  </p>
                  <p className="mt-8 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                    {" "}
                    Home
                  </p>
                  <div className="mt-9 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                    <p>Doctor</p>
                  </div>
                  <div className="mt-10 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                    <p> Contact</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
