import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function CustomAnimation() {
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

  return customAnimation
}

export default CustomAnimation;
