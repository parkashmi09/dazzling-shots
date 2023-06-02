import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import Shoot3 from "../public/assests/images/baby2.png";
import Shoot1 from "../public/assests/images/baby.png";
import Shoot2 from "../public/assests/images/pre.png";

const carouselData = [
  {
    image: Shoot1,
  },
  {
    image: Shoot2,
  },
  {
    image: Shoot3,
  },
];
export default function HeroBanner() {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="w-full -mt-[50px] md:-mt-[70px] relative"
      modules={[EffectFade]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
    >
      {carouselData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              className="aspect-[16/10] h-[992px] md:aspect-auto object-cover"
              src={item.image}
              alt="gsg"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
3;
