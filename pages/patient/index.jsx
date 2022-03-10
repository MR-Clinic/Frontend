import React from "react";
import Image from "next/image";
import avatar from "../../assets/avatar1.png";
import Navbar from "../../components/navbar";

function index() {
  return (
    <>
      <Navbar />
      <div className="bg-[#E4F5E9] text-[#356E79]">
        <div className="grid grid-cols-2">
          <div className="pl-8 pt-8">
            <p className="font-bold text-xl mb-5"> Profile Data</p>
            <div className="bg-white border-2  mb-5 rounded-lg px-5 w-[80%] drop-shadow-lg">
              <div className="flex justify-start py-5 ">
                <div className="grid grid-cols-2 ">
                  <div className="space-y-2 pl-2 text-sm">
                    {" "}
                    <p className="font-bold"> NIK </p>
                    <p className="font-bold"> Nama Lengkap </p>
                    <p className="font-bold"> Jenis Kelamin </p>
                    <p className="font-bold"> Alamat </p>
                    <p className="font-bold"> Tempat/Tanggal Lahir </p>
                    <p className="font-bold"> Agama </p>
                    <p className="font-bold"> Status </p>
                    <p className="font-bold"> Pekerjaan </p>
                  </div>
                  <div className="grid items-end space-y-2 pl-5 text-sm">
                    <p> : 121212121212</p>
                    <p> : Muhammad Rizki Adiwiganda</p>
                    <p> : Pria</p>
                    <p> : Jl. ABCD efghjkkk </p>
                    <p> : Medan, 22 November 1997</p>
                    <p> : Islam</p>
                    <p> : Lajang</p>
                    <p> : Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-[-100px] pt-8 ">
            <p className="font-bold text-xl"> List Dokter</p>
            <div className=" flex flex-wrap">
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4  drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-rose-700 px-2 py-1 rounded-lg ">
                      <button> unavailable </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#324B50] w-[230px] h-[150px] pt-8 mt-5 rounded-lg mr-4 drop-shadow-lg">
                <div className="bg-white h-full text-[10px]">
                  <div className="flex justify-center ">
                    <div className="w-[60px] rounded-full pt-2 ">
                      <Image src={avatar} alt="doctor-img" />{" "}
                    </div>
                    <div className="mx-5 pt-2">
                      {" "}
                      <p className="font-semibold text-sm ">John doa</p>
                      <p> Clinic Bersama</p>
                      <p> Jl. Depan Bersama dkk</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3 px-7">
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg ">
                      <button> available </button>
                    </div>
                    <div className="bg-[#E4F5E9] px-2 py-1 rounded-lg">
                      <button className=" w-[50px]"> buat janji </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start pl-8 mt-[-200px] text-sm">
            <p className="font-bold text-xl mb-5">Janji Kunjungan</p>
            <div className="bg-white border-2  mb-5 rounded-lg px-5 w-[430px] drop-shadow-lg ">
              <div className="flex justify-start py-5 ">
                <div className="grid grid-cols-2 ">
                  <div className="grid space-y-2 pl-4">
                    {" "}
                    <p className="font-bold"> Clinic </p>
                    <p className="font-bold"> Dokter </p>
                    <p className="font-bold"> Hari Kunjungan </p>
                    <p className="font-bold"> Alamat </p>
                  </div>
                  <div className="grid items-end space-y-2 pl-5">
                    <p> : Klinik Bersama sama</p>
                    <p> : dr awenk</p>
                    <p> : 22/03/2022</p>
                    <p> : Jl. ABCD efghjkkk </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-start pl-8 pt-5 text-sm ">
          <p className="font-bold text-xl mb-5">Sejarah Kunjungan</p>
          <table class="table-auto bg-white py-3 rounded-lg drop-shadow-lg max-w-screen-xl w-screen mb-10">
            <thead>
              <tr>
                <th className="border-b-2 py-2 ">Tanggal</th>
                <th className="border-b-2 ">Dokter</th>
                <th className="border-b-2 ">Alamat Praktek </th>
                <th className="border-b-2 ">Diagnosa Utama</th>
                <th className="border-b-2 ">Diagnosa Tambahan</th>
                <th className="border-b-2 ">Daftar obat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="py-2">05/03/22</td>
                <td>dr. lindawati</td>
                <td>jl. sana sini bisa kemana aja</td>
                <td>flu</td>
                <td>demam dll</td>
                <td>lihat resep</td>
              </tr>
              <tr className="text-center">
                <td className="py-2">05/03/22</td>
                <td>dr. lindawati</td>
                <td>jl. sana sini bisa kemana aja</td>
                <td>flu</td>
                <td>demam dll</td>
                <td>lihat resep</td>
              </tr>
              <tr className="text-center">
                <td className="py-2">05/03/22</td>
                <td>dr. lindawati</td>
                <td>jl. sana sini bisa kemana aja</td>
                <td>flu</td>
                <td>demam dll</td>
                <td>lihat resep</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default index;
