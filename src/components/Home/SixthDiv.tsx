"use client";
import React, { useEffect, useState } from "react";
import "@/app/css/SixthDiv.css";
import CountUp from "react-countup";

function SixthDiv() {
  const [count, setCount] = useState(0);

  return (
    <div className="stats ">
      <div className="statsContent ">
        <div className="statsItems">
          <div className="stats-col ">
            <div className="stats-col-percents ">
              <span id="gy_num_1" className="">
                <CountUp end={1100} duration={5} />
              </span>
              <span className="">+</span>
            </div>
            <p className="">Active Students</p>
            <img
              decoding="async"
              src="https://www.growyouragency.com/wp-content/themes/GrowYourAgency/assets/img/graps_icon.png"
              alt="Chart Icon"
              className=""
            />
          </div>
          <div className="stats-col ">
            <span id="gy_num_2" className="">
              <CountUp end={43} duration={5} />
            </span>
            <p className="">6-7 Figure Students</p>
            <img
              decoding="async"
              src="https://www.growyouragency.com/wp-content/themes/GrowYourAgency/assets/img/money_icon.png"
              alt="Chart Icon"
              className=""
            />
          </div>
          <div className="stats-col ">
            <span id="gy_num_3" className="">
              <CountUp end={298} duration={5} />
            </span>
            <p className="">Jobs Quit</p>
            <img
              decoding="async"
              src="https://www.growyouragency.com/wp-content/themes/GrowYourAgency/assets/img/chart_icon.png"
              alt="Chart Icon"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthDiv;
