import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

import Pre1 from "../../public/assests/images/pre1.jpg";
import Pre2 from "../../public/assests/images/pre2.jpg";
import Pre3 from "../../public/assests/images/pre3.jpg";
import Pre4 from "../../public/assests/images/pre4.jpg";
import Pre5 from "../../public/assests/images/pre5.jpg";
import Pre6 from "../../public/assests/images/pre6.jpg";
import Pre7 from "../../public/assests/images/pre7.jpg";
import Pre8 from "../../public/assests/images/pre8.jpg";
import Pre9 from "../../public/assests/images/pre9.jpg";
import Pre10 from "../../public/assests/images/pre10.jpg";
import Pre11 from "../../public/assests/images/pre11.jpg";
import Pre12 from "../../public/assests/images/pre12.jpg";

const preWeddingShootsData = [
  {
    img: Pre1,
    name: "hghdh",
  },
  {
    img: Pre2,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre4,

    name: "dhdhdh",
  },
  {
    img: Pre5,

    name: "dhdhdh",
  },
  {
    img: Pre6,

    name: "dhdhdh",
  },
  {
    img: Pre7,

    name: "dhdhdh",
  },
  {
    img: Pre8,

    name: "dhdhdh",
  },
  {
    img: Pre9,

    name: "dhdhdh",
  },
  {
    img: Pre10,
    name: "dhdhdh",
  },
  {
    img: Pre1,

    name: "dhdhdh",
  },
  {
    img: Pre2,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre3,

    name: "dhdhdh",
  },
  {
    img: Pre5,

    name: "dhdhdh",
  },
  {
    img: Pre6,

    name: "dhdhdh",
  },
  {
    img: Pre5,

    name: "dhdhdh",
  },
  {
    img: Pre6,

    name: "dhdhdh",
  },
  {
    img: Pre11,
    name: "dhdhdh",
  },
  {
    img: Pre12,
    name: "dhdhdh",
  },
];

const Portfolio = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className=" element-class -mt-24">
      <div className="container mx-auto py-24">
        <h1 className="text-center text-7xl mb-12">Our Portfolios</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {preWeddingShootsData.map((item, index) => (
              <div
                className="relative overflow-hidden cursor-pointer"
                key={index}
              >
                <Image
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={`photo${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center  mx-auto text-5xl  max-w-[1000px] px-4 lg:px-0">
        Thanks for taking the time to view my work. If you&apos;re interested in
        seeing more of my photography or hiring me for a project, please
        don&apos;t hesitate to contact me!
      </p>
      `
      <div className="px-4 py-12">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1536: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          // scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          className="gap-4"
        >
          {preWeddingShootsData.map((i, index) => (
            <SwiperSlide key={i}>
              <div className="h-96 p-2">
                <Image
                  src={i.img}
                  className="object-cover h-full w-full"
                  alt={`photo${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      `
    </div>
  );
};

export default Portfolio;
