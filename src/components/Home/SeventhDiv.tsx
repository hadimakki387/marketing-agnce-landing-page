import React from "react";
import "@/app/css/SeventhDiv.css";

function SeventhDiv() {
  return (
    <div className="OurSystem">
      <div className="OurSystemRow">
        <div className="OurSystemRowTitle">
          <h2>Our tiered system.</h2>
          <p id="style-TAnbM" className="style-TAnbM">
            In the GrowYourAgency community, we have a three tier client system.
            Whenever anyone signs a client, we all celebrate in the community
            together whether it’s just a small fish or a huge whale.
          </p>
        </div>
        <div className="gy-home-sys-levels gy-home-sys-levels-fish">
          <div className="gy-home-sys-levels-col">
            <div className="gy-home-sys-levels-image">
              <img
                decoding="async"
                src="https://www.growyouragency.com/wp-content/uploads/2019/03/fish.png"
                className="Img"
                id="FishImg1"
              />
              <span>$1-3K/mo</span>
            </div>
          </div>
          <div className="gy-home-sys-levels-col">
            <h3>Fish</h3>
            <p>
              Clients who pay:
              <br />
              <b>$1,000-3,000 per month</b>
            </p>
            <p>
              You get a couple of these clients and you’re already making a full
              time income. We get students catching fish everyday!
            </p>
          </div>
        </div>
        <div className="gy-home-sys-levels gy-home-sys-levels-shark">
          <div className="gy-home-sys-levels-col">
            <div className="gy-home-sys-levels-image">
              <img
                decoding="async"
                src="https://www.growyouragency.com/wp-content/uploads/2019/03/shark.png"
                className="Imgs"
                id="FishImg2"
              />
              <span>$3-8K/mo</span>
            </div>
          </div>
          <div className="gy-home-sys-levels-col">
            <h3>Shark</h3>
            <p>
              Clients who pay:
              <br />
              <b>$3,000-8,000 per month</b>
            </p>
            <p>
              This is where you’re getting into more serious territory. One of
              these clients and you can quit your job! It’s always a proud day
              when students sign their first shark.
            </p>
          </div>
        </div>
        <div className="gy-home-sys-levels gy-home-sys-levels-whale">
          <div className="gy-home-sys-levels-col">
            <div className="gy-home-sys-levels-image">
              <img
                decoding="async"
                src="https://www.growyouragency.com/wp-content/uploads/2019/03/whale.png"
                className="Imgs"
                id="FishImg3"
              />
              <span>$8K+/mo</span>
            </div>
          </div>
          <div className="gy-home-sys-levels-col">
            <h3>Whale</h3>
            <p>
              Clients who pay:
              <br />
              <b>$8,000+ per month</b>
            </p>
            <p>
              This one client alone will bring you more than $100,000 in a year.
              This is the greatest catch of all- they’re the North Star for
              everyone in the community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhDiv;
