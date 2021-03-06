import React, { useEffect } from "react";
import Nav from "../../components/nav";
import allStore from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

function VisitList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataVisitList = useSelector(
    (data) => data.visitListReducer.adminVisitList
  );
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;

  useEffect(() => {
    if (getType !== "admin") {
      router.push("/404");
    } else {
      dispatch(allStore.getVisitList());
    }
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Admin Page - Visit List</title>
        <meta
          property="og:title"
          content="Admin Page - Visit List"
          key="title"
        />
      </Head>
      <Nav />

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
                  <th className="border-b-2 ">Status Kunjungan</th>
                  <th className="border-b-2 ">Tanggal Appointment</th>
                </tr>
              </thead>
              <tbody>
                {dataVisitList
                  ? dataVisitList.map((el, i) => (
                      <tr className="text-center" key={i}>
                        <td className="py-2"> {el.patientName}</td>
                        <td>{el.nik}</td>
                        <td>{el.gender}</td>
                        <td>
                          <button className="bg-[#E4F5E9] text-xs px-3 py-1 rounded-md cursor-default ">
                            {" "}
                            confirmed
                          </button>
                        </td>
                        <td>{el.date}</td>
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
