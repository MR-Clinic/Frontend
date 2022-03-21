import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo mrc.svg";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";

function Navbar(props) {
  // dropdown func

  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  let name =
    typeof window !== "undefined" ? localStorage.getItem("name") : null;
  const route = useRouter();
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  function Logout() {
    route.push("/");
    localStorage.clear();
  }

  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function DuplicateActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <>
      <div className="bg-[#324B50] drop-shadow-lg">
        <div className="flex justify-between py-3 pl-[5%]">
          <div className="w-[100px]">
            <Image src={logo} alt="logo-navbar" />
          </div>
          <div className="flex items-center px-2 font-semibold text-white cursor-pointer ">
            <div className="flex items-center px-2">
              <a
                href="#feature"
                className="px-7 hover:bg-[#356E79] rounded-lg p-2 "
              >
                {" "}
                Feature{" "}
              </a>
              <a
                href="#about"
                className="px-7 hover:bg-[#356E79] rounded-lg p-2"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#contact"
                className="px-7 hover:bg-[#356E79] rounded-lg p-2"
              >
                {" "}
                Contact{" "}
              </a>
              <a href="#faq" className="px-7 hover:bg-[#356E79] rounded-lg p-2">
                {" "}
                FAQ{" "}
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center pr-5">
            {getToken ? null : (
              <div className="space-x-5">
                <Link href="/register" passHref>
                  <button
                    className=" bg-[#356E79] border-2 border-white font-medium inline-flex items-center px-5 py-1 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </Link>
                <Link href="/login" passHref>
                  <button
                    className=" bg-[#356E79] border-2 border-white font-medium inline-flex items-center px-5 py-1 rounded-2xl shadow-md text-white transition hover:bg-[#E4F5E9] hover:text-[#324B50]"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              </div>
            )}
            <Menu
              as="div"
              className="relative inline-block text-left px-5 z-70"
            >
              {getToken ? (
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Hello !{" "}
                    {name
                      ? name
                      : props.dataPatient
                      ? props.dataPatient.name
                      : ""}
                    <AiOutlineDown
                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
              ) : null}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-70 right-0 w-42 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/patient"
                          passHref
                          className="active:bg-[#E4F5E9]"
                        >
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                          >
                            {active ? (
                              <EditActiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <EditInactiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            dashboard
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#E4F5E9] text-black" : "text-gray-900"
                          } z-70 group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                          onClick={() => {
                            Logout();
                          }}
                        >
                          {active ? (
                            <DuplicateActiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <DuplicateInactiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
