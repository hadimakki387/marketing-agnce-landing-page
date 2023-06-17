import React from "react";

function CarouselItem() {
  return (
    <>
      <div className="gy-home-tests-slide-user">
        <img
          decoding="async"
          src="https://www.growyouragency.com/wp-content/uploads/2019/03/Mariah.jpg"
        />
        <div className="gy-home-tests-slide-user-info">
          <span className="gy-name">Mariah Miller</span>
        </div>
      </div>
      <div className="gy-home-tests-slide-feedback gy-Shark">
        <p>
          “Within 2 months of starting my SMMA, I built a six-figure (yearly)
          agency. And within 4 months, I was making well over $20k per month
          from my agency alone. “
        </p>
      </div>
    </>
  );
}

export default CarouselItem;
