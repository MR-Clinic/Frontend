import React, { useEffect } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import allStore from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

function VisitList() {
  const dispatch = useDispatch();
  const dataVisitList = useSelector(
    (data) => data.visitListReducer.adminVisitList
  );
  useEffect(() => {
    console.log("masuk allstore");
    dispatch(allStore.getVisitList());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] text-[#356E79] h-screen">
        <div className="ml-[7%]">
          <div className="grid justify-start pt-5 text-sm ">
            <p className="font-bold text-xl mb-5">Antrian Kunjungan</p>
            <table className="table-auto bg-white py-3 rounded-lg drop-shadow-lg max-w-screen-xl w-screen mb-10">
              <thead>
                <tr>
                  <th className="border-b-2 py-2 ">Nama Pasien</th>
                  <th className="border-b-2 ">NIK</th>
                  <th className="border-b-2 ">Gender </th>
                  <th className="border-b-2 ">Konfirmasi Kunjungan</th>
                  <th className="border-b-2 ">Tanggal Appointment</th>
                </tr>
              </thead>
              <tbody>
                {dataVisitList
                  ? dataVisitList.map((el, i) => (
                      <tr className="text-center">
                        <td className="py-2">lindawan {el.patientName}</td>
                        <td>121212121212{el.nik}</td>
                        <td>Laki-Laki{el.gender}</td>
                        <td>
                          <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md hover:opacity-70">
                            {" "}
                            confirm
                          </button>
                        </td>
                        <td>22 / 01 / 22 {el.date}</td>
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

export default VisitList;
