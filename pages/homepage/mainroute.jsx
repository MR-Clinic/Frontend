import React from "react";
import Navbar from "../../components/navbar";
import Home1 from "./home1";
import Home2 from "./home2";
import Home3 from "./home3";
import Faq from "./faq";
import Footer from "../../components/footer";
import Head from "next/head";

function Mainroute() {
  return (
    <div>
      <Head>
        <title>MRC - Landing Page </title>
        <meta property="og:title" content="MRC - Landing Page" key="title" />
      </Head>
      <Navbar />
      <Home1 />
      <Home2 />
      <Home3 />
      <Faq />
      <Footer />
    </div>
  );
}

export default Mainroute;
