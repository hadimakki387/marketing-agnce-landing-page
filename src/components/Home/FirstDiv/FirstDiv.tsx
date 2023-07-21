"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import FloatingImg from "./FloatingImg";
import HamburgerMenu from "../HamburgerMenu";
import Icons from "./Icons";
import Image from "next/image";

function FirstDiv({theme,themeF}:{theme:String,themeF:Function}) {
  const [sideBar, setSideBar] = useState(false);
  const ToggleSideBar = () => {
    setSideBar(!sideBar);
    document.body.classList.toggle("no-scroll");

  };
  const customAnimation = keyframes`
      from {
        opacity: 0;
        transform: translate3d(0, -25%, 0);
      }
    
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;
    const [src,setSrc] = useState("")
    const [bg,setBg] = useState("")

useEffect(()=>{
  setSrc(theme===" color-white"?"/light.png":"/dark.png")
  setBg(theme===" color-white"?"bg-dark":"")
  
},[theme])

  return (
    <>
      <div
        className=" pt-50 Header"
        
      >
        <div className={!sideBar ? "SideBar" : `slideIn `}>
          <div className={sideBar ? `content contentIn ${bg}`  : "content "}>
            <div>
              <Reveal
                keyframes={customAnimation}
                duration={300}
                delay={800}
                cascade
              >
                <HamburgerMenu
                  onClick={() => {}}
                  clicked={sideBar}
                  FF={ToggleSideBar}
                  theme={theme}
                />
              </Reveal>
            </div>
            <div className="LinksInSideBar ">
              <Reveal
                keyframes={customAnimation}
                duration={300}
                delay={800}
                cascade
              >
                <Link href="" >Our Story</Link>
                <Link href="">Philosophy</Link>
                <Link href="">Resources</Link>
                <Link href="">Free Case Study</Link>
                <Link href="">Reviews</Link>
              </Reveal>
            </div>
            <div>
            <Reveal
                keyframes={customAnimation}
                duration={300}
                delay={800}
                cascade
              >
                <button
                className="NoDecorationButton"
                onClick={() => {
                  themeF();
                }}
              >
                <Image
                  className="ThemeImg"
                  height={100}
                  width={100}
                  alt=""
                  src={src}
                />
              </button>
              </Reveal>
            
            </div>
          </div>
        </div>
        <div>
          
        </div>
        <NavBar onClick={ToggleSideBar} clicked={sideBar} theme={theme} themeF={themeF}/>
        <div className="container " >
          
          <div className="row align-items-center justify-content-between pt-5 pb-5 snipcss0-2-2-3">
            <div className="col-md-12 col-lg-6 snipcss0-3-3-4">
              <div className="hero-content-left text-white snipcss0-4-4-5">
                <Reveal
                  keyframes={customAnimation}
                  duration={1500}
                  delay={500}
                  triggerOnce
                >
                  <h1 className={"HeaderH1 snipcss0-5-5-6 "+theme} >
                    We are Digital Agency &amp; Marketing
                  </h1>
                  <p className={"HeaderP  snipcss0-5-5-7 "+theme}>
                    Dramatically grow customized potentialities vis-a-vis
                    synergistic alignments. Energistically drive team.
                  </p>
                  <div className="ContantBtnDiv">
                    <a
                    href="#Contact"
                    className="btn solid-btn  snipcss0-5-5-8"
                  >
                    Contact with us
                  </a>
                  </div>
                  
                </Reveal>

                <div className="client-section-wrap mt-5 snipcss0-5-5-9">
                  <Reveal
                    keyframes={customAnimation}
                    duration={1500}
                    delay={800}
                    triggerOnce
                  >
                    <p className={"Trusted snipcss0-6-9-10 " +theme}>
                      Trusted by companies like:
                    </p>
                    <Icons />
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 snipcss0-3-3-20">
              <div className="hero-animation-img snipcss0-4-20-21">
                <Reveal
                  keyframes={customAnimation}
                  duration={1500}
                  delay={1000}
                  triggerOnce
                >
                  <FloatingImg />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default FirstDiv;
