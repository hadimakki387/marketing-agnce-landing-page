import React from "react";
import "@/app/css/FourthDiv.css";
import Image from "next/image";

function FourthDiv() {
  return (
    <div className=" AgencyLifeDiv">
      <div className="gy-content">
        <div className="AgencyLifeWrapper">
          <div className="AgencyLifeDivText">
            <Image
              height={2000}
              width={2000}
              src="/BG.jpg"
              alt=""
              className="BgImg"
            />
            <h2 className="AgencyLifeH2">Agency life.</h2>
            <p className="AgencyLifeP">
              We help total beginners with zero Social media experience &amp;
              Increase there ingagement and protecting there accounts from being
              baned
            </p>
            <p className="AgencyLifeP">
              Very few people understand how to setup their accounts right. We
              place an emphasis on working ‘on’ the business and not ‘in’ it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthDiv;
