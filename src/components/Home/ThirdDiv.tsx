import React from "react";
import "@/app/css/ThirdDiv.css";

function ThirdDiv() {
  return (
    <div className="OurMissionDiv ">
      <div className="ThridDivContent">
        <div className="ContentWrapper">
          <div className="ThirdDivImgWrapper">
            <img
              decoding="async"
              src="https://www.growyouragency.com/wp-content/uploads/2019/03/University02.png"
              className="ThridDivImg"
            />
          </div>
          <div className="TextWraper">
            <h2 className="ThridDivTitle">Our mission.</h2>
            <p className="ThridDivP">
              <strong className="ThirdDivSubTitle">
                The collapse of our education system as we know it.
              </strong>
            </p>
            <p className="ThridDivP">
              We’re on a mission to reform the education system by bringing our
              customers the best online business programs the world has ever
              seen. Period. We’re here to help nurture &amp; grow the next breed
              of agencies. Traditional education is outdated, invalid &amp;
              overpriced. Our courses aim to deliver 10x the impact on your
              income for 1/100 of the price tag of a regular college education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdDiv;
