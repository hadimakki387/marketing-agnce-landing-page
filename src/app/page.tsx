"use client";
import "./css/SideBar.css";
import "./css/New.css";
import "./css/shortcuts.css";
import FirstDiv from "@/components/Home/FirstDiv/FirstDiv";
import SecondDiv from "@/components/Home/SecondDiv";
import ThirdDiv from "@/components/Home/ThirdDiv";
import FourthDiv from "@/components/Home/FourthDiv";
import FifthDiv from "@/components/Home/FifthDiv";
import SixthDiv from "@/components/Home/SixthDiv";
import EightThDiv from "@/components/Home/EightThDiv";
import Footer from "@/components/Home/Footer";
import LazyLoad from "react-lazy-load";
import { useEffect, useState } from "react";
import Testemonials from "@/components/Home/Testemonials";


export default function Index() {
  const [theme,setTheme]=useState(false)
  function themeF(){
    setTheme(!theme)
  }

  const [color,setColor] = useState("color-dark")
  const [bg,setBg] = useState("bg-white")

  useEffect(()=>{
    setColor(theme===true?" color-white":" color-dark")
    setBg(theme===true?" bg-dark": " bg-white")
  },[theme])

  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          setTimeout(()=>{
            element.classList.add('active');
          },700)
          
        } else {
          element.classList.remove('active');
        }
      });
    }

    // Add scroll event listener
    window.addEventListener('scroll', reveal);

    // Cleanup: remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div className={"main " + bg}>
      <LazyLoad >
        <FirstDiv theme={color} themeF={themeF}/>
      </LazyLoad>

      <LazyLoad >
        <SecondDiv theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <ThirdDiv theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <FourthDiv theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <FifthDiv theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <Testemonials theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <SixthDiv theme={color}/>
      </LazyLoad>
      <LazyLoad>
        <Footer theme={color}/>
      </LazyLoad>
    </div>
  );
}
