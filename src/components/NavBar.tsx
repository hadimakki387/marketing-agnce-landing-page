"use client";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./Home/HamburgerMenu";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

function NavBar({ clicked, onClick }: { clicked: Boolean; onClick: Function }) {
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

  return (
    <div className="gy-header-wrap ">
      <Reveal duration={500} keyframes={customAnimation2} triggerOnce >
        <Link className="headerLogo " href="">
          <p className="LOGO dark">LOGO</p>
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
              <Link href="" className="dark LinkNoDecoration ">
                Our Story
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="dark LinkNoDecoration">
                Philosophy
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="dark LinkNoDecoration">
                Resources
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="dark LinkNoDecoration">
                Free Case Study
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="dark LinkNoDecoration">
                Reviews
              </Link>
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
