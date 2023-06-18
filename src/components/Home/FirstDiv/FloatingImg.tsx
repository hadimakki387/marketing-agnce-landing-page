import Image from "next/image";
import React from "react";

function FloatingImg() {
  return (
    <>
      <Image
        className="img-fluid d-block animation-one snipcss0-5-21-22"
        src="/hero-animation-04.png"
        alt="animation image"
        width={500}
        height={500}
      />
      <Image
        className="img-fluid d-none d-lg-block animation-two snipcss0-5-21-23"
        src="/hero-animation-01.png"
        alt="animation image"
        width={120}
        height={120}
      />
      <Image
        className="img-fluid d-none d-lg-block animation-three snipcss0-5-21-24"
        src="/hero-animation-02.png"
        alt="animation image"
        width={120}
        height={120}
      />
      <Image
        className="img-fluid d-none d-lg-block animation-four snipcss0-5-21-25"
        src="/hero-animation-03.png"
        alt="animation image"
        width={230}
        height={230}
      />
    </>
  );
}

export default FloatingImg;
