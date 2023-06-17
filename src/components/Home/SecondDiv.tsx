"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "@/app/css/SecondDiv.css";
import CarouselItem from "../CarouselItem";
import Marquee from "react-fast-marquee";

function SecondDiv() {
  const arr = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState();
  const [count, setCount] = useState(0);
  const slickTrackRef = useRef(null);

  return (
    <div className="gy-home-tests">
      <div className="gy-content">
        <div className="gy-secondDiv-row">
          <div className="gy-home-tests-slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div className="slick-track style-ftT9V" id="style-ftT9V">
                <Marquee autoFill={true}>
                  <div
                    className="gy-home-tests-slide slick-slide slick-cloned style-bDXxk"
                    style={{ opacity: 1 }}
                    data-slick-index="-3"
                    id="style-bDXxk"
                    aria-hidden="true"
                    ref={slickTrackRef}
                  >
                    <CarouselItem />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondDiv;
