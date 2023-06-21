import React, { Fragment, useContext } from "react";
import TestemonialsItems from "./TestemonialsItems";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Testemonials = ({ theme }: { theme: String }) => {
  const tests = [1, 2, 3, 4, 5];
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -15%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <Fragment>
      <h1 className={"OurWork " + theme}>Hear from Our Delighted Clients:</h1>
      <div className="Testemonials">
      <Reveal
                keyframes={customAnimation}
                duration={500}
                delay={800}
                cascade
              >
        {tests.map((test, index) => {
          return (
            <div key={index} className="testemonial">
                <TestemonialsItems theme={theme} />
              
            </div>
          );
        })}
        </Reveal>
      </div>
    </Fragment>
  );
};

export default Testemonials;
