import React from "react";
import "@/app/css/FifthDiv.css";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

function FifthDiv() {
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
    <div className="EagleEye">
      <div className="EagleEyeWraper">
        <div className="EagleEyeItems">
          <Image
            src="/studying.jpg"
            className="EagleEyeImg"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="EagleEyeItems">
        <Reveal
              keyframes={customAnimation}
              duration={1500}
              delay={500}
              triggerOnce
            >
          <h2 className="EagleEyeTitle">Lorem ipsum.</h2>
          <p>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing.</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit hac urna
            placerat, posuere pulvinar quis ridiculus sociosqu lacus faucibus
            dapibus aliquam magna, curae suscipit magnis vestibulum blandit
            phasellus per fames gravida.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu,
              mauris habitant ullamcorper id felis scelerisque.
            </li>
          </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default FifthDiv;
