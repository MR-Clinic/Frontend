import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Mainroute from "./homepage/mainroute";

export default function Home() {
  return (
    <>
      <Mainroute />
    </>
  );
}
