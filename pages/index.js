import Image from "next/image";
import SVG from "../public/assests/svgs/phomto.svg";
import { BiChevronsRight } from "react-icons/bi";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import Specialization from "@/components/Specialization";
import ContactForm from "@/components/ContactForm";
import Hire from "@/components/Hire";

export default function Home() {
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
      title: "High-Quality Images",
      desc: "Our team uses state-of-the-art equipment and techniques to produce stunning, high-quality images that capture the essence of your brand or event.",
    },
    {
      title: "Client satisfaction",
      desc: "Our top priority is client satisfaction, and we will go above and beyond to ensure that you are happy with the final results.",
    },
    {
      title: "Attention to detail",
      desc: "We pay close attention to every aspect of the photoshoot, from lighting and composition to post-processing, to ensure that every image is visually appealing and impactful.",
    },
    {
      title: "Creative vision",
      desc: "We approach every project with a creative eye, striving to capture unique and memorable images that stand out from the rest.",
    },
    {
      title: "Competitive pricing",
      desc: "We offer competitive pricing for our photography services, with packages and options that can be customized to fit your budget and requirements.",
    },
  ];

  return (
    <>
      <HeroBanner />
      <Layout className="">
        <Specialization />
        {/* <Hire /> */}
        <ContactForm />
      </Layout>
    </>
  );
}
