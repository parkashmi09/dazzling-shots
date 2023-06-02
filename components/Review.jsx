import React from "react";
import Image from "next/image";
import Client from "../public/assests/images/t1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import { Grid } from "antd";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

const { useBreakpoint } = Grid;
export default function Review() {
  const screens = useBreakpoint();
  console.log("screens", screens);
  SwiperCore.use([Autoplay]);
  const reviewData = [
    {
      heading: "Enterprise-className solution designed for SMBs",
      title:
        "Simply5 Solutions helps to unblock your connectivity challenges without requireing a dedicated networking professional",
    },
    {
      heading: "Fully Cloud Managed service ",
      title:
        "All solutions work Plug’n’Play and required Minimal to No management to keep your networking running",
    },
    {
      heading: "No more hardware chaos",
      title:
        "Being an All-in-One solution, Simply5 replaces 2-3 different hardware devices into a single Cloud Managed solution",
    },
    {
      heading: "Easy to manage",
      title:
        "Simply5 takes care of the complexity while your business grows, 2 sites or 100 sites, go live in under 30 mins with Simply5 Edge",
    },
    {
      heading: "Concierge onboarding",
      title:
        "SMB’s are already stretched with budgets and resources, let Simply5 & our partners provide peace of mind deployment and management while you grow your business",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className={`w-full rounded-2xl bg-red-200 p-8 ${screens.md? "px-0" : "px-6"}  mx-auto`}>
      {/* <h2 className="text-center my-24 text-3xl lg:text-5xl tracking-wider">
        What Our Customer Says!
      </h2> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={screens.xs  ? 1 : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="md:max-w-[900px] lg:max-w-[1800px] mx-auto lg:px-0"
      >
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>

              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <Image src={Client} alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className=" text-2xl">David Dell</h2>
              <div className="flex justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <q className="px-12 mt-4 text-xl  my-10 lg:text-3xl italic text-center">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </q>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
