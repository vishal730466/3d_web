"use client"
import Image from "next/image";
import styles from "./page.module.css";
import About from "./About/page";
import { Canvas } from "@react-three/fiber";
import MovingBox from "./car/page";

export default function Home() {
  return (
    <div >
     {/* <ThreeDObject/> */}
     
     <About/>

    </div>
  );
}
