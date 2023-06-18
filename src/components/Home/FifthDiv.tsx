import React from "react";
import "@/app/css/FifthDiv.css";
import Image from "next/image";

function FifthDiv() {
  return (
    <div className="EagleEye">
      <div className="EagleEyeWraper">
        <div className="EagleEyeItems">
          <Image
            src="/Falcon.jpg"
            className="EagleEyeImg"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="EagleEyeItems">
          <h2 className="EagleEyeTitle">Eagle-eye.</h2>
          <p>
            <strong>We don’t believe in being a one trick pony.</strong>
          </p>
          <p>
            After thousands of paid customers, we understand it’s just as much
            about the mental battle as it is about tactics. Our teaching is
            designed to build real Entrepreneurs. Entrepreneurs who have an
            ‘Eagle-Eye’.
          </p>
          <ul>
            <li>
              We teach our students about not only how to sell but how to build
              an incredible team.
            </li>
            <li>
              We teach our students how to manage cash-flow, how to understand
              copywriting, paid traffic, accounting and more.
            </li>
            <li>
              We’re building real Entrepreneurs with real skills, not gimmicks.
            </li>
            <li>
              Finally – we teach our community how to manage mindset, structure
              &amp; habits.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FifthDiv;
