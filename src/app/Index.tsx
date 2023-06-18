"use client"
import "./css/SideBar.css";
import "./css/New.css";
import "./css/shortcuts.css"
import FirstDiv from "@/components/Home/FirstDiv/FirstDiv";
import SecondDiv from "@/components/Home/SecondDiv";
import ThirdDiv from "@/components/Home/ThirdDiv";
import FourthDiv from "@/components/Home/FourthDiv";
import FifthDiv from "@/components/Home/FifthDiv";
import SixthDiv from "@/components/Home/SixthDiv";
import EightThDiv from "@/components/Home/EightThDiv";
import Footer from "@/components/Home/Footer";
import LazyLoad from "react-lazy-load";

export default function Index() {
  return (
    <div className="main">
      <LazyLoad>
        <FirstDiv />
      </LazyLoad>
      <LazyLoad>
        <SecondDiv />
      </LazyLoad>
      <LazyLoad>
        <ThirdDiv />
      </LazyLoad>
      <LazyLoad>
        <FourthDiv />
      </LazyLoad>
      <LazyLoad>
        <FifthDiv />
      </LazyLoad>
      <LazyLoad>
        <SixthDiv />
      </LazyLoad>
      
      
      <LazyLoad>
        <Footer />
      </LazyLoad>
    </div>
  );
}
