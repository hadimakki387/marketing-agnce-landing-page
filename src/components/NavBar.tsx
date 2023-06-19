"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "./Home/HamburgerMenu";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Image from "next/image";

function NavBar({
  clicked,
  onClick,
  theme,
  themeF,
}: {
  clicked: Boolean;
  onClick: Function;
  theme: String;
  themeF: Function;
}) {
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
  const customAnimation2 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -15%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const [src,setSrc] = useState("")

useEffect(()=>{
  setSrc(theme===" color-white"?"/light.png":"/dark.png")
  
},[theme])


  return (
    <div className="gy-header-wrap ">
      <Reveal duration={500} keyframes={customAnimation2} triggerOnce>
        <Link className="headerLogo " href="">
          <p className={"LOGO " + theme}>LOGO</p>
        </Link>
      </Reveal>

      <div className="gy-header-menu ">
        <ul className="FirstDivUl">
          <Reveal
            duration={500}
            keyframes={customAnimation2}
            triggerOnce
            cascade
          >
            <li className="menu-item">
              <Link href="" className={" LinkNoDecoration " + theme}>
                Our Story
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className={" LinkNoDecoration " + theme}>
                Philosophy
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className={" LinkNoDecoration " + theme}>
                Resources
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className={" LinkNoDecoration " + theme}>
                Free Case Study
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className={" LinkNoDecoration " + theme}>
                Reviews
              </Link>
            </li>
            <li className="menu-item">
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
            </li>
          </Reveal>
        </ul>

        <HamburgerMenu FF={onClick} clicked={clicked} onClick={() => {}} />
      </div>

      <div className="gy-header-trigger ">
        <i className=""></i>
        <i className=""></i>
        <i className=""></i>
      </div>
    </div>
  );
}

export default NavBar;
