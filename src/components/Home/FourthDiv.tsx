import React from "react";
import "@/app/css/FourthDiv.css";

function FourthDiv() {
  return (
    <div className=" AgencyLifeDiv">
      <div className="gy-content">
        <div className="AgencyLifeWrapper">
          <div className="FourthDivImgWraper">
            <img
              decoding="async"
              src="https://www.growyouragency.com/wp-content/uploads/2019/04/Agency-Life-GYA.png"
              className="AgencyLifeImg"
            />
          </div>
          <div className="AgencyLifeDivText">
            <h2 className="AgencyLifeH2">Agency life.</h2>
            <p className="AgencyLifeP">
              We help total beginners with zero business experience start &amp;
              scale their own agencies to ‘fiercely’ profitable levels. We also
              help 6-Figure agencies scale to 7-Figures.
            </p>
            <p className="AgencyLifeP">
              Very few people understand how to setup their agency right. We
              place an emphasis on working ‘on’ the business and not ‘in’ it.
            </p>
            <p className="AgencyLifeP">
              We make sure our students act like real agency owners, not
              glorified contractors. The result? If done right, having an agency
              is incredibly lucrative and can be very hands off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthDiv;
