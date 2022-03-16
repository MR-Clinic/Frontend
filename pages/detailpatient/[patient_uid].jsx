import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import allStore from "../../store/actions";

function Id() {
  const router = useRouter();
  const { patient_uid } = router.query;

  const dispatch = useDispatch();

  const dataPatient = useSelector(
    (data) => data.patientDetailReducer.listPatientDetail
  );
  useEffect(() => {
    dispatch(allStore.getPatientDetails());
  }, [dispatch]);

  useEffect(() => {
    if (patient_uid) {
      dispatch(allStore.detailPatient(patient_uid));
    }
  }, [patient_uid]);

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] text-[#356E79] h-full">
        <div className="ml-[7%]">
          <p className="font-bold text-xl mb-5 pt-5"> Data Pasien</p>
          <div className="bg-white border-2  mb-5 rounded-lg px-5 w-[40%] drop-shadow-lg">
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
                {dataPatient ? (
                  <div className="grid items-end space-y-2 pl-5 text-sm">
                    <p> : 121212121212 {dataPatient.nik}</p>
                    <p> : Muhammad Rizki Adiwiganda {dataPatient.name} </p>
                    <p> : Pria {dataPatient.gender}</p>
                    <p> : Jl. ABCD efghjkkk {dataPatient.address}</p>
                    <p>
                      {" "}
                      : Medan, 22 November 1997 {dataPatient.placeBirth},{" "}
                      {dataPatient.dob}
                    </p>
                    <p> : Islam {dataPatient.religion}</p>
                    <p> : Lajang {dataPatient.status}</p>
                    <p> : Web Developer {dataPatient.job}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid justify-start  pt-5 text-sm ">
            <p className="font-bold text-xl mb-5">Riwayat Pemeriksaan</p>
            <table className="table-auto bg-white py-3 rounded-lg drop-shadow-lg max-w-screen-xl w-screen mb-10">
              <thead>
                <tr>
                  <th className="border-b-2 py-2 ">No. MR</th>
                  <th className="border-b-2 ">Tekanan Darah</th>
                  <th className="border-b-2 ">Heart Rate </th>
                  <th className="border-b-2 ">Respiratory Rate</th>
                  <th className="border-b-2 ">Saturasi O2</th>
                  <th className="border-b-2 ">Berat Badan</th>
                  <th className="border-b-2 ">Tinggi Badan</th>
                  <th className="border-b-2 ">Body Mass Index</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory Rate</td>
                  <td>Saturasi O2</td>
                  <td>Berat Badan</td>
                  <td>Tinggi Badan</td>
                  <td>Body Mass Index</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory Rate</td>
                  <td>Saturasi O2</td>
                  <td>Berat Badan</td>
                  <td>Tinggi Badan</td>
                  <td>Body Mass Index</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory Rate</td>
                  <td>Saturasi O2</td>
                  <td>Berat Badan</td>
                  <td>Tinggi Badan</td>
                  <td>Body Mass Index</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid justify-start pt-5 text-sm ">
            <p className="font-bold text-xl mb-5">Riwayat Diagnosa</p>
            <table className="table-auto bg-white py-3 rounded-lg drop-shadow-lg max-w-screen-xl w-screen mb-10">
              <thead>
                <tr>
                  <th className="border-b-2 py-2 ">No. MR</th>
                  <th className="border-b-2 ">Dokter</th>
                  <th className="border-b-2 ">Diagnosa</th>
                  <th className="border-b-2 ">Diagnosa Tambahan</th>
                  <th className="border-b-2 ">Tindakan</th>
                  <th className="border-b-2 ">Resep Obat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory rate</td>
                  <td>Saturasi 02</td>
                  <td>Resep Obat</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory rate</td>
                  <td>Saturasi 02</td>
                  <td>Resep Obat</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">2190129</td>
                  <td>Tekanan Darah</td>
                  <td>Heart Rate</td>
                  <td>Respiratory rate</td>
                  <td>Saturasi 02</td>
                  <td>Resep Obat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
