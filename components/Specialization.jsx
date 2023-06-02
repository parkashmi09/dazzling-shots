import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../public/assests/images/pre1.png";
import Image2 from "../public/assests/images/w2.png";
import Image3 from "../public/assests/images/t1.jpg";
import Image4 from "../public/assests/images/t4.jpg";
import Image5 from "../public/assests/images/t5.jpg";
import Image6 from "../public/assests/images/w1.png";

const imageCard = [
  {
    image: Image1,
    title: "Pre-wedding shoot",
  },
  {
    image: Image2,
    title: "wedding shoot",
  },
  {
    image: Image3,
    title: "Maternity shoot",
  },
  {
    image: Image4,
    title: "New Born shoot",
  },
  {
    image: Image5,
    title: "Baby shoot",
  },
  {
    image: Image6,
    title: "Engagement shoot",
  },
];
export default function Specialization() {
  return (
    <div className="bg-white px-2 lg:px-0 flex flex-col justify-center items-center relative special-class">
      <h1 className="font-lato text-black/[0.6] font-light uppercase flex justify-center mb-4  mt-[100px] text-2xl lg:text-5xl">
        Our Specialization
      </h1>
      <p className="font-lato text-black/[0.5] leading-normal text-xl md:text-2xl max-w-[1400px] text-center tracking-wider ">
        Premium Maternity, Pre-wedding & New-born baby photo-shoots
      </p>
      <div className="mt-12">
        <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {imageCard.map((data, index) => {
            return (
              <Link
                href="/"
                key={index}
                className="transform overflow-hidden bg-transparent duration-200 hover:scale-105 cursor-pointer group"
              >
                <div className="text-center">
                  <Image
                    src={data.image}
                    className="object-cover rounded-lg border h-[450px] w-[380px] "
                    alt="shoot1"
                  />
                  <h1 className="uppercase font-lato text-xl mt-4 text-black/[0.7] font-semibold tracking-wider group-hover:bg-gradient-to-r from-theme via-green-500 to-indigo-400 inline-block bg-clip-text">
                    {data.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto h-[1px] mt-20 mb-10 bg-slate-500"></div>
    </div>
  );
}




