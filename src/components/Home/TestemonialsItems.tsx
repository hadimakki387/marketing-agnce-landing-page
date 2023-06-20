"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/app/css/testemonialsItems.css";


function TestemonialsItems({theme}:{theme:String}) {
  const [BG,setBG] = useState("")

  useEffect(()=>{
    setBG(theme===" color-dark"?"":"bg-card-dark")
  },[theme])

  console.log(theme)

  return (
    <div className="collection-list-wrapper customer " >
      <div role="list" className="grid-list ">
        <div role="listitem" className="collection-item ">
          <a href="" className={"_3-card__card w-inline-block " +BG}>
            <div className="_3-card__image-wrap">
              <Image
                src="/tiktok.png"
                loading="lazy"
                alt=""
                className="_3-card__thumbnail"
                height={1000}
                width={1000}
              />
              <h1 className="cardH1">Title</h1>
            </div>
            <div className="_3-card__copy-wrap">
              <div className="_3-card__name">
                <span className={"CardP " + theme}>
                   Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                aliquet aenean molestie parturientng
                </span>
               
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestemonialsItems;
