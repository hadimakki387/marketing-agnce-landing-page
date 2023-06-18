"use client";
import React, { useState } from "react";
import "@/app/css/HamburgerMenu.css";

function HamburgerMenu({clicked,FF,onClick}:{clicked:Boolean,FF:Function,onClick:Function}) {
  
  return (
    <>
      <svg>
  <defs>
    <filter id="gooeyness">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
      <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
    </filter>
  </defs>
</svg>
<div className="plates HamburgerMenu" onClick={()=>{FF()}}>
  <div className={!clicked?"plate plate1 ":"plate plate1 active"} >
    <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
      <path className={!clicked?"line line1":"line line1 black-stroke"} d="M 30,65 H 70"/>
      <path className={!clicked?"line line2":"line line2 black-stroke"} d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"/>
      <path className={!clicked?"line line3":"line line3 black-stroke"} d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"/>
    </svg>
    <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
      <path className={!clicked?"line ":"line  black-stroke"} d="M 34,32 L 66,68" />
      <path className={!clicked?"line ":"line  black-stroke"} d="M 66,32 L 34,68" />
    </svg>
  </div>
  
</div>
    </>
  );
}

export default HamburgerMenu;
