import React from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

function patientList() {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="bg-[#E4F5E9] text-[#324B50]">
        <div className="ml-[7%]"></div>
      </div>
    </>
  );
}

export default patientList;
