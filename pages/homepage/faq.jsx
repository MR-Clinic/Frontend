import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";

function Faq() {
  return (
    <>
      <section id="faq">
        <div className="flex justify-starts ml-[3%] relative drop-shadow-lg">
          <button
            className=" cursor-default mb-[-20px] bg-[#356E79] font-medium inline-flex items-center px-10 py-3 rounded-2xl shadow-md text-white "
            type="submit"
          >
            FAQ ?
          </button>
        </div>
        <div className="bg-[#E4F5E9] py-5 mb-10">
          <div className="flex justify-center">
            <p className="font-bold text-black text-xl">
              {" "}
              Frequently Asked Questions
            </p>
          </div>
          <div className="w-full px-4 pt-5">
            <div className="w-full max-w-xl p-2 mx-auto">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-white bg-[#95B0B6] rounded-lg ">
                      <span>Apa itu Mr Clinic ?</span>
                      <AiOutlineDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quibusdam tempora dignissimos, maxime harum iusto?
                      Delectus earum ut molestias non.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="w-full max-w-xl p-2 mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-white bg-[#95B0B6] rounded-lg ">
                    <span>Kenapa Harus Menggunakan Mr Clinic?</span>
                    <AiOutlineDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    aliquam aut adipisci. Voluptatum aperiam saepe quae
                    consequuntur tenetur. Id, dolore?
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-full max-w-xl p-2 mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-white bg-[#95B0B6] rounded-lg ">
                    <span>Apa saja Layanan MR clinic?</span>
                    <AiOutlineDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt eveniet at rem numquam, dolore modi tempore ullam
                    culpa esse sequi. Soluta corporis eius dolores sapiente quae
                    est voluptates accusantium a?
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-full max-w-xl p-2 mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-white bg-[#95B0B6] rounded-lg ">
                    <span>
                      Saya Bekerja Tidak Hanya di Satu Klinik, Apakah saya masih
                      bisa mendaftar?
                    </span>
                    <AiOutlineDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus odit ipsa nesciunt vero obcaecati
                    exercitationem enim, possimus ex eius quas nulla quia vel
                    blanditiis debitis consequatur tenetur illo molestias
                    voluptatem.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
