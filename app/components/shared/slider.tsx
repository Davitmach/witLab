"use client";
import Image from "next/image";

export const Slider = () => {
  const images = [
    "/slider1.png",
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
    "/slider5.png",

  ];

  return (
    <div className="overflow-hidden w-full bg-white">
      <div className="animate-scroll flex w-max gap-[85px] py-[58px]">
        {[...Array(10)].flatMap((_, repeatIndex) =>
          images.map((src, imgIndex) => (
            <img className={`${imgIndex==4 &&'sun'} ${imgIndex ==0&&'complex'}`} src={src} key={`${repeatIndex}-${imgIndex}`} alt="" />
          ))
        )}
      </div>
    </div>
  );
};
