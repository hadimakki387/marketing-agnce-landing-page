import Image from "next/image";
import React from "react";

function Icons() {
  return (
    <div className="IconsDiv">
      <div>
        <Image
          src="/client-1-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid icons snipcss0-8-12-13"
        />
      </div>

      <div>
        <Image
          src="/client-2-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid icons snipcss0-8-14-15"
        />
      </div>

      <div>
        <Image
          src="/client-3-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid icons snipcss0-8-16-17"
        />
      </div>

      <div>
        <Image
          src="/client-4-gray.png"
          width={85}
          height={85}
          alt="client"
          className="img-fluid icons snipcss0-8-18-19"
        />
      </div>
    </div>
  );
}

export default Icons;
