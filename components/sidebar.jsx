import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUserMd,
  FaAddressBook,
  FaTimes,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" mt-[-80px] fixed z-10">
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
                  <FiSettings className="mt-14" size={25} />
                </div>
              </div>
            </div>
          </div>
          {isOpen ? (
            <div className="bg-[#324B50] w-[130px] h-screen ">
              <div className="flex flex-col text-white items-start">
                <div className="mt-[10%] ml-2 font-bold text-left">
                  <p className="bg-[#356E79] py-2 px-2  text-center ">
                    {" "}
                    Dashboard Menu
                  </p>
                  <Link href="/doctor" passHref>
                    <p className="mt-8 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                      {" "}
                      Home
                    </p>
                  </Link>
                  <Link href="/doctor/check" passHref>
                    <div className="mt-9 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                      <p>Diagnose</p>
                    </div>
                  </Link>
                  <Link href="/doctor/patientList" passHref>
                    <div className="mt-10 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                      <p> Patient-List</p>
                    </div>
                  </Link>
                  <Link href="/doctor/settings" passHref>
                    <div className="mt-10 hover:bg-[#356E79] py-2 px-2 rounded-md cursor-pointer">
                      <p> Settings</p>
                    </div>
                  </Link>
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
