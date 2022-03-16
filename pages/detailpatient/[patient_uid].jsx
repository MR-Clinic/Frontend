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
    (data) => data.detailPatientReducer.detailPatient
  );
  const dataDiagnose = useSelector(
    (data) => data.detailPatientReducer.patientDiagnose
  );

  useEffect(() => {
    dispatch(allStore.getPatientDetails());
    dispatch(allStore.patientDiagnose());
  }, [dispatch]);

  useEffect(() => {
    console.log("masuk use effect patient uid");
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
                    <p> : {dataPatient.nik}</p>
                    <p> : {dataPatient.name}</p>
                    <p> : {dataPatient.address}</p>
                    <p>
                      {" "}
                      : {dataPatient.placeBirth}, {dataPatient.dob}
                    </p>
                    <p> : {dataPatient.religion}</p>
                    <p> : {dataPatient.status}</p>
                    <p> : {dataPatient.job}</p>
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
                {dataDiagnose
                  ? dataDiagnose.map((el, i) => (
                      <tr className="text-center" key={i}>
                        <td className="py-2"> {el.visit_uid}2190129</td>
                        <td>Tekanan Darah {el.bloodPressuse}</td>
                        <td>Heart Rate {el.heartRate}</td>
                        <td>Respiratory Rate {el.respiratoryRate}</td>
                        <td>Saturasi O2 {el.o2Saturate}</td>
                        <td>Berat Badan {el.weight}</td>
                        <td>Tinggi Badan {el.height}</td>
                        <td>Body Mass Index {el.bmi}</td>
                      </tr>
                    ))
                  : null}
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
                {dataDiagnose
                  ? dataDiagnose.map((el, i) => (
                      <tr className="text-center" key={i}>
                        <td className="py-2">2190129{el.visit_uid}</td>
                        <td>Tekanan Darah {el.bloodPressuse} </td>
                        <td>Heart Rate {el.heartRate} </td>
                        <td>Respiratory rate {el.respiratoryRate} </td>
                        <td>Saturasi 02 {el.o2Saturate} </td>
                        <td>Resep Obat{el.recipe} </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
