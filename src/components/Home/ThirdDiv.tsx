"use client";
import React from "react";
import "@/app/css/ThirdDiv.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import CountUp from "react-countup";
import LazyLoad from "react-lazy-load";
import Image from "next/image";

function ThirdDiv({theme}:{theme:String}) {
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

  return (
    <div className="OurMissionDiv ">
      <div className="ThridDivContent">
        <div className="ContentWrapper">
          <div className="TextDivWrapper">
          
              <section>
                <h2 className={"ThirdDivH2 "+theme}>Welcome to our TikTok Followers Agency!</h2>
                <p className={"ThirdDivP "+theme}>
                  Are you a TikTok creator, influencer, or business looking to
                  rapidly grow your follower base? Look no further! Our digital
                  agency specializes in providing top-notch solutions to help
                  you gain an army of engaged followers on TikTok.
                </p>
              </section>
              <section>
                <h3 className={"ThirdDivH3 "+theme}>Maximize TikTok presence</h3>
                <p className={"ThirdDivP "+theme}>
                  Unlock your TikTok potential with our expert agency services.
                  We craft viral content strategies, boost followers, and
                  enhance engagement. Elevate your brand&apos;s visibility on TikTok.
                </p>
              </section>
              <section>
                <h3 className={"ThirdDivH3 "+theme}>Strategic growth for influencers</h3>
                <p className={"ThirdDivP "+theme}>
                  Expand your TikTok influence and monetize your content. Our
                  agency connects you with brands and sponsorship opportunities.
                  Achieve sustainable success as a TikTok influencer.
                </p>
              </section>
         
          </div>
          <div className="GridSystem">
            
              <div className="Card firstCard">
                <Image width={1000} height={1000} src="/bonus.png" alt="bonus" />
                <LazyLoad>
                  <CountUp end={1600} duration={3} className="text-white" />
                </LazyLoad>
                <p className="text-white">Active Users</p>
              </div>
              <div className="Card moveDownCard secondCard">
                <Image width={1000} height={1000} src="/headphone.png" alt="bonus" />
                <LazyLoad>
                  <CountUp end={2500} duration={3} className="text-purple" />
                </LazyLoad>
                <p className="text-purple">Global client</p>
              </div>
              <div className="Card thirdCard">
                <Image width={1000} height={1000} src="/cup.png" alt="bonus" />
                <LazyLoad>
                  <CountUp end={2150} duration={3} className="text-blue" />
                </LazyLoad>
                <p className="text-blue">Win award</p>
              </div>
              <div className="Card  moveDownCard fourthCard">
                <Image width={1000} height={1000} src="/client.png" alt="bonus" />
                <LazyLoad>
                  <CountUp end={2150} duration={3} className="text-white" />
                </LazyLoad>
                <p className="text-white">Clients satisfaction</p>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdDiv;
