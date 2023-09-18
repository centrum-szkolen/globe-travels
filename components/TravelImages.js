"use client";
import { imageLoader } from "@/utils/imageLoader";
import Image from "next/image";
import React from "react";

const TravelImages = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Image
        onClick={()=>console.log("test")}
        className="col-span-2 rounded-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        loader={imageLoader}
        src={images[0].url}
        alt=""
      />
        <Image
          className="rounded-lg"
          width={0}
          height={0}
          sizes="200px"
          style={{ width: "100%", height: "auto" }}
          loader={imageLoader}
          src={images[1].url}
          alt=""
        />
        <Image
         className="rounded-lg"
          width={0}
          height={0}
          sizes="200px"
          style={{ width: "100%", height: "auto" }}
          loader={imageLoader}
          src={images[2].url}
          alt=""
        />
    </div>
  );
};

export default TravelImages;
