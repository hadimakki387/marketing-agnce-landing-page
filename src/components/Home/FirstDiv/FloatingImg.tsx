import Image from "next/image";
import React from "react";

function FloatingImg() {
  return (
    <ul className="list-inline snipcss0-6-9-11">
      <li className="list-inline-item snipcss0-7-11-12">
        <Image
          src="/client-1-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid snipcss0-8-12-13"
        />
      </li>
      <li className="list-inline-item snipcss0-7-11-14">
        <Image
          src="/client-2-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid snipcss0-8-14-15"
        />
      </li>
      <li className="list-inline-item snipcss0-7-11-16">
        <Image
          src="/client-3-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid snipcss0-8-16-17"
        />
      </li>
      <li className="list-inline-item snipcss0-7-11-18">
        <Image
          src="/client-4-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid snipcss0-8-18-19"
        />
      </li>
    </ul>
  );
}

export default FloatingImg;
