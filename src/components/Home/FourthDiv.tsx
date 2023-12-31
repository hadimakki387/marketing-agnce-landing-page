"use clie"
import React from "react";
import "@/app/css/FourthDiv.css";
import Image from "next/image";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function FourthDiv({theme}:{theme:String}) {
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
    <div className=" AgencyLifeDiv">
      <div className="gy-content">
        <div className="AgencyLifeWrapper">
          <div className="AgencyLifeDivText">
          
              <h2 className={"AgencyLifeH2 reveal " +theme}>Agency life.</h2>
              <p className={"AgencyLifeP reveal " +theme}>
                We help total beginners with zero Social media experience &amp;
                Increase there ingagement and protecting there accounts from
                being baned
              </p>
              <p className={"AgencyLifeP reveal " +theme}>
                Very few people understand how to setup their accounts right. We
                place an emphasis on working ‘on’ the business and not ‘in’ it.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthDiv;
