import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Home1 from "./home1";
import Home2 from "./home2";
import Home3 from "./home3";
import ContactUs from "./contactUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Home1 />
      <Home2 />
      <Home3 />
      <ContactUs />
      <Footer />
    </>
  );
}
