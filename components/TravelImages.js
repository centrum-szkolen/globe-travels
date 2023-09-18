"use client";
import { imageLoader } from "@/utils/imageLoader";
import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

const TravelImages = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(images[0].url);

  const handleZoom = (e) => {
    setIsVisible(true);
    setCurrent(e.target.src);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <Image
        onClick={images[0]?.url ? handleZoom : null}
        className="col-span-2 rounded-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        loader={images[0]?.url ? imageLoader : null}
        src={images[0]?.url ? images[0].url : "/placeholder.jpeg"}
        alt=""
      />
      <Image
        onClick={images[1]?.url ? handleZoom : null}
        className="rounded-lg"
        width={0}
        height={0}
        sizes="200px"
        style={{ width: "100%", height: "auto" }}
        loader={images[1]?.url ? imageLoader : null}
        src={images[1]?.url ? images[1].url : "/placeholder.jpeg"}
        alt=""
      />
      <Image
        onClick={images[2]?.url ? handleZoom : null}
        className="rounded-lg"
        width={0}
        height={0}
        sizes="200px"
        style={{ width: "100%", height: "auto" }}
        loader={images[2]?.url ? imageLoader : null}
        src={images[2]?.url ? images[2].url : "/placeholder.jpeg"}
        alt=""
      />

      <ImageModal current={current} isVisible={isVisible} onSetVisible={setIsVisible} />
    </div>
  );
};

export default TravelImages;
