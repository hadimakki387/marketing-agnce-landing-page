import Image from "next/image";
import React from "react";

function CarouselItem() {
  return (
    <>
      <div className="gy-home-tests-slide-user">
        <Image
          alt=""
          decoding="async"
          src="/Mariah.jpg"
          width={50}
          height={50}
        />
        <div className="gy-home-tests-slide-user-info">
          <span className="gy-name">Mariah Miller</span>
        </div>
      </div>
      <div className="gy-home-tests-slide-feedback gy-Shark">
        <p>
          “Lorem ipsum dolor sit amet consectetur adipiscing elit, faucibus sed
          natoque odio nostra venenatis habitant, phasellus laoreet interdum hac
          consequat condimentum.“
        </p>
      </div>
    </>
  );
}

export default CarouselItem;
