import React from "react";
import notfound from "../assets/not found.png";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const getType =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (getType === "patient") {
        router.push("/patient");
      } else if (getType === "admin") {
        router.push("/admin");
      } else if (getType === "doctor") {
        router.push("/doctor");
      } else if (token === null) {
        router.push("/login");
      }
    }, 3000);
  });

  return (
    <div>
      <div className="bg-[#E4F5E9] h-screen text-[#324B50] grid place-items-center">
        <div className="text-2xl capitalize font-bold">
          {" "}
          page not found, back to homepage
        </div>
        <div className="w-[30%] animate-bounce">
          <Image src={notfound} />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
