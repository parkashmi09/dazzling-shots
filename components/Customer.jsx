import React from "react";
import Image from "next/image";
import Baby from "../public/assests/images/baby3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Wave from "../public/assests/images/waves.png";
import "swiper/css";

export default function Customer() {
  return (
    <>
      <div className="max-w-[1800px] mx-auto border rounded-[34px] min-h-[500px] my-36 bg-[#34b54a] relative bg-imag">
        <div className=" max-w-[650px]">
          <h1 className="font-lato text-5xl text-white font-semibold leading-[52px] tracking-wide py-36 pl-6 lg:pl-24">
            See how our customers dazzled their Shoots!
          </h1>
        </div>
        <div className="absolute bottom-[-180px] right-24">
          <div className="w-[750px] h-[400px] shadow-sm rounded-[18px] bg-[#F5F5F5] flex flex-col justify-center">
            <p className="text-black/[0.8] leading-[48px]  font-lato font-semibold text-3xl px-16">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ac diam donec pellentesque mus bibendum euismod est vulputate.”
            </p>
            <div className="w-full flex justify-between px-16 mt-12">
              <div className="font-lato flex items-center gap-2">
                <h1 className="font-lato text-xl">Richard V.</h1>
                <div className="h-6 w-[3px] bg-black/[0.8]"></div>
                <h1 className="font-lato text-xl">Operations Manager</h1>
              </div>

              <div>Logo</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[180px]  right-[800px]">
          <Image
            src={Baby}
            className="w-44 h-44 rounded-[40px] border object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
