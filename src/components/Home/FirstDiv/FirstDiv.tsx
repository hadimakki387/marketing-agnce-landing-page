"use client"
import React, { useState } from 'react'
import NavBar from '../../NavBar'
import Link from 'next/link';
import { keyframes } from "@emotion/react";
import { Reveal } from 'react-awesome-reveal';
import FloatingImg from './FloatingImg';
import HamburgerMenu from '../HamburgerMenu';

function FirstDiv() {
    const [sideBar, setSideBar] = useState(false);
    const ToggleSideBar = () => {
        setSideBar(!sideBar);
        document.body.classList.toggle("no-scroll");
        console.log('clicked')
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
      console.log(sideBar)
  return (
    <div
        className="hero-section pt-50 background-img snipcss0-0-0-1 snipcss-FKFJG style-UoMqf"
        id="style-UoMqf"
      >
        
          <div className={!sideBar ? "SideBar" : "slideIn"}>
        <div className={sideBar ? "content contentIn" : "content"}>
          <HamburgerMenu onClick={ToggleSideBar} clicked={sideBar}/>
          <Link href="">Our Story</Link>
          <Link href="">Philosophy</Link>
          <Link href="">Resources</Link>
          <Link href="">Free Case Study</Link>
          <Link href="">Reviews</Link>
        </div>
      </div>
        
        
        <NavBar onClick={ToggleSideBar} clicked={sideBar}/>
        <div className="container ">
          <div className="row align-items-center justify-content-between pt-5 pb-5 snipcss0-2-2-3">
          
            <div className="col-md-12 col-lg-6 snipcss0-3-3-4">
              <div className="hero-content-left text-white snipcss0-4-4-5">
              <Reveal keyframes={customAnimation} duration={1500} delay={500} triggerOnce>
                <h1 className="text-white snipcss0-5-5-6">
                  We are Digital Agency &amp; Marketing
                </h1>
                <p className="lead snipcss0-5-5-7">
                  Dramatically grow customized potentialities vis-a-vis
                  synergistic alignments. Energistically drive team.
                </p>
                <a
                  href="#"
                  className="btn solid-btn btn-primary snipcss0-5-5-8"
                >
                  Contact with us
                </a>
              </Reveal>
                
                <div className="client-section-wrap mt-5 snipcss0-5-5-9">
                <Reveal keyframes={customAnimation} duration={1500} delay={800} triggerOnce>
                  <p className="snipcss0-6-9-10">Trusted by companies like:</p>
                  <FloatingImg/>
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 snipcss0-3-3-20">
              <div className="hero-animation-img snipcss0-4-20-21">
              <Reveal keyframes={customAnimation} duration={1500} delay={1000} triggerOnce>
                <img
                  className="img-fluid d-block animation-one snipcss0-5-21-22"
                  src="http://agencyco.themetags.com/img/hero-animation-04.svg"
                  alt="animation image"
                />
                <img
                  className="img-fluid d-none d-lg-block animation-two snipcss0-5-21-23"
                  src="http://agencyco.themetags.com/img/hero-animation-01.svg"
                  alt="animation image"
                  width="120"
                />
                <img
                  className="img-fluid d-none d-lg-block animation-three snipcss0-5-21-24"
                  src="http://agencyco.themetags.com/img/hero-animation-02.svg"
                  alt="animation image"
                  width="120"
                />
                <img
                  className="img-fluid d-none d-lg-block animation-four snipcss0-5-21-25"
                  src="http://agencyco.themetags.com/img/hero-animation-03.svg"
                  alt="animation image"
                  width="230"
                />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img snipcss0-1-1-26">
          <img
            src="http://agencyco.themetags.com/img/bg-wave.svg"
            alt="wave shape"
            className="img-fluid snipcss0-2-26-27"
          />
        </div>
      </div>
  )
}

export default FirstDiv