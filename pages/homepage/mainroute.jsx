import React from "react";
import Navbar from "../../components/navbar";
import Home1 from "./home1";
import Home2 from "./home2";
import Home3 from "./home3";
import Faq from "./faq";
import ContactUs from "./contactUs";
import Footer from "../../components/footer";

function Mainroute() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <Home2 />
      <Home3 />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Mainroute;
