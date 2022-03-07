import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Home1 from "./home1";
import Home2 from "./home2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Home1 />
      <Home2 />
      <Footer />
    </>
  );
}
