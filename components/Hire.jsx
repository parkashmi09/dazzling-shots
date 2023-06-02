import SVG from "../public/assests/svgs/phomto.svg";
import { BiChevronsRight } from "react-icons/bi";
import Image from "next/image";

export default function Hire() {
  const shoots = [
    {
      shoot: "Maternity Shoot",
    },
    {
      shoot: "Pre-Wedding shoot",
    },
    {
      shoot: "New born baby shoot",
    },
    {
      shoot: "Product shoot",
    },
  ];
  const content = [
    {
      title: " High-Quality Images",
      desc: "  Our team uses state-of-the-art equipment and techniques to produce stunning, high-quality images that capture the essence of your brand or event.",
    },
    {
      title: "Client satisfaction",
      desc: " Our top priority is client satisfaction, and we will go above and beyond to ensure that you are happy with the final results",
    },
    {
      title: "Attention to detail:",
      desc: "We pay close attention to every aspect of the photoshoot, from lighting and composition to post-processing, to ensure that every image is visually appealing and impactful.",
    },
    {
      title: "Competitive pricing",
      desc: "We offer competitive pricing for our photography services, with packages and options that can be customized to fit your budget and requirements.",
    },
  ];
  return (
    <div>
      <div className="container w-full mx-auto my-14">
        <div className="pl-12">
          <h1 className="text-5xl bg-gradient-to-r from-theme via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium tracking-wide leading-[100px]">
            Why Hire Us ?
          </h1>
          <h2 className="text-2xl -mt-5 text-black/[0.5] font-medium font-lato">
            The reasons why client should hire our photography services.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 my-10">
          <div className="flex px-8 items-center ">
            <div>
              {content.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-4 my-10">
                    <div className=" mt-3 ">
                      <BiChevronsRight size={20} />
                    </div>
                    <div>
                      <h1 className="font-semibold text-xl text-yellow-600">
                        {data.title}
                      </h1>
                      <h1 className="font-sm text-lg leading-6 text-black/[0.7]">
                        {data.desc}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-start p-3">
            <Image className="object-contain " src={SVG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
