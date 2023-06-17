import Link from "next/link";
import React from "react";
import HamburgerMenu from "./Home/HamburgerMenu";

function NavBar(props) {
 
  return (
    <div className="gy-header-wrap " >
      <Link className="headerLogo " href="" >
        <p className="LOGO">LOGO</p>
      </Link>
      <div className="gy-header-menu "onClick={props.onClick}>
        <ul className="FirstDivUl">
          <li className="menu-item">
            <Link href="" className="LinkNoDecoration">
              Our Story
            </Link>
          </li>
          <li className="menu-item">
            <Link href="" className="LinkNoDecoration">
              Philosophy
            </Link>
          </li>
          <li className="menu-item">
            <Link href="" className="LinkNoDecoration">
              Resources
            </Link>
          </li>
          <li className="menu-item">
            <Link href="" className="LinkNoDecoration">
              Free Case Study
            </Link>
          </li>
          <li className="menu-item">
            <Link href="" className="LinkNoDecoration">
              Reviews
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
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
