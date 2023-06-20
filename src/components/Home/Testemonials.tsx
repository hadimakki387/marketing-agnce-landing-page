import React, { Fragment, useContext } from "react";
import TestemonialsItems from "./TestemonialsItems";

const Testemonials = ({ theme }: { theme: String }) => {
  const tests = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      <h1 className="OurWork">Hear from Our Delighted Clients:</h1>
      <div className="Testemonials">
        {tests.map((test, index) => {
          return (
            <div key={index} className="testemonial">
              <TestemonialsItems theme={theme} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Testemonials;
