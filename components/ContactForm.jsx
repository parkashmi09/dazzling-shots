import React from "react";
import Image from "next/image";
import Shoot from "../public/assests/svgs/phomto2.svg";

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-r from-slate-300/[0.5] to-transparent pt-24 pb-24">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="px-4 lg:px-0 text-black/[0.6] text-2xl xl:text-5xl text-center">
          Book Your Next Shoot with Us - Reach Out to Our Team for More
          Information!
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-24 mb-12">
          <div className="hidden xl:flex justify-center">
            <Image
              width={500}
              height={500}
              className="object-contain  mt-36 lg:mt-12"
              src={Shoot}
              alt=""
            />
          </div>
          <div className="max-w-[1200px] xl:max-w-[1000px]  md:px-24 xl:px-0">
            <div className="flex flex-col gap-8 items-center justify-center p-12">
              <input
                placeholder="Name"
                className="border-b outline-0 bg-slate-400/[0.2] p-2 w-full"
                type="text"
              />
              <input
                placeholder="Mobile Number"
                className="border-b outline-0 bg-slate-400/[0.2] p-2 w-full"
                type="text"
              />
              <input
                placeholder="E-mail"
                className="border-b outline-0 bg-slate-400/[0.2] p-2 w-full"
                type="text"
              />
              <input
                placeholder="shoot type"
                className="border-b outline-0 bg-slate-400/[0.2] p-2 w-full"
                type="text"
              />
              <input
                placeholder="shoot date"
                className="border-b outline-0 bg-slate-400/[0.2] p-2 w-full"
                type="text"
              />
              <textarea
                placeholder="Tell us more "
                className=" outline-0 bg-slate-400/[0.2] pt-6 pb-6 pl-2 w-full"
                typeof="text"
              />
              <button className="h-14 w-full lg:h-18 lg:w-64 text-lg bg-black/[0.9] rounded font-lato tracking-widest text-white">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
