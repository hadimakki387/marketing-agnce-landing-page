import React, { useEffect, useRef, useState } from "react";
import "@/app/css/FifthDiv.css";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

function FifthDiv({theme}:{theme:string}) {
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


  const targetRef = useRef(null);

  return (
    <div className="EagleEye" ref={targetRef}>
      <div className="EagleEyeWraper">
        <div className="EagleEyeItems reveal">
          <Image
            src="/studying.jpg"
            className="EagleEyeImg"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="EagleEyeItems">
       
          <h2 className={"EagleEyeTitle reveal " +theme}>Lorem ipsum.</h2>
          <p>
            <strong className={theme +" reveal"}>Lorem ipsum dolor sit amet, consectetur adipiscing.</strong>
          </p>
          <p className={theme+" reveal"}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit hac urna
            placerat, posuere pulvinar quis ridiculus sociosqu lacus faucibus
            dapibus aliquam magna, curae suscipit magnis vestibulum blandit
            phasellus per fames gravida.
          </p>
          <ul>
            <li className={theme+" reveal"}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li className={theme+" reveal"}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li className={theme+" reveal"}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li className={theme+" reveal"}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default FifthDiv;
