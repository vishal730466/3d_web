"use client"
import Image from "next/image";
import styles from "./page.module.css";
import About from "./About/page";
import ThreeDObject from "@/app/Swip/page"

export default function Home() {
  return (
    <div >
     {/* <ThreeDObject/> */}
     
     <About/>
    </div>
  );
}
