"use client";
import "./css/SideBar.css";
import "./css/New.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import SecondDiv from "@/components/Home/SecondDiv";
import ThirdDiv from "@/components/Home/ThirdDiv";
import FourthDiv from "@/components/Home/FourthDiv";
import FifthDiv from "@/components/Home/FifthDiv";
import SixthDiv from "@/components/Home/SixthDiv";
import SeventhDiv from "@/components/Home/SeventhDiv";
import EightThDiv from "@/components/Home/EightThDiv";
import Footer from "@/components/Home/Footer";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import { Typewriter } from "react-simple-typewriter";

const AnimationsForChaining = ["popIn", "popOut"];

export default function Home() {
  const [sideBar, setSideBar] = useState(false);

  const ToggleSideBar = () => {
    setSideBar(!sideBar);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className="main">
      
      <div
        className="hero-section pt-50 background-img snipcss0-0-0-1 snipcss-FKFJG style-UoMqf"
        id="style-UoMqf"
      >
        <NavBar onClick={ToggleSideBar} />
        <div className="container snipcss0-1-1-2">
          <div className="row align-items-center justify-content-between pt-5 pb-5 snipcss0-2-2-3">
          
            <div className="col-md-12 col-lg-6 snipcss0-3-3-4">
              <div className="hero-content-left text-white snipcss0-4-4-5">
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
                <div className="client-section-wrap mt-5 snipcss0-5-5-9">
                  <p className="snipcss0-6-9-10">Trusted by companies like:</p>
                  <ul className="list-inline snipcss0-6-9-11">
                    <li className="list-inline-item snipcss0-7-11-12">
                      <img
                        src="http://agencyco.themetags.com/img/client-1-gray.png"
                        width="85"
                        alt="client"
                        className="img-fluid snipcss0-8-12-13"
                      />
                    </li>
                    <li className="list-inline-item snipcss0-7-11-14">
                      <img
                        src="http://agencyco.themetags.com/img/client-2-gray.png"
                        width="85"
                        alt="client"
                        className="img-fluid snipcss0-8-14-15"
                      />
                    </li>
                    <li className="list-inline-item snipcss0-7-11-16">
                      <img
                        src="http://agencyco.themetags.com/img/client-3-gray.png"
                        width="85"
                        alt="client"
                        className="img-fluid snipcss0-8-16-17"
                      />
                    </li>
                    <li className="list-inline-item snipcss0-7-11-18">
                      <img
                        src="http://agencyco.themetags.com/img/client-4-gray.png"
                        width="85"
                        alt="client"
                        className="img-fluid snipcss0-8-18-19"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 snipcss0-3-3-20">
              <div className="hero-animation-img snipcss0-4-20-21">
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

      

      
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
      <FifthDiv />
      <LazyLoad once>
        <SixthDiv />
      </LazyLoad>

      <SeventhDiv />
      <EightThDiv />
      <Footer />
    </div>
  );
}
