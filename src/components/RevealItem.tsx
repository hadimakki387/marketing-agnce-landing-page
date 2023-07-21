import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function RevealItem(props) {
  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, ${props.distance}, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  return <Reveal keyframes={customAnimation} duration={props.duration}></Reveal>;
}

export default RevealItem;
