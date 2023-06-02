import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Header() {
  const [bg, setBg] = useState("bg-transparent");
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Portfolio", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];
  const subMenuData = [
    { id: 1, name: "pre-wedding shoot" },
    { id: 2, name: "wedding shoot" },
    { id: 3, name: "maternity shoot" },
    { id: 4, name: "new-born shoot" },
    { id: 5, name: "baby shoot" },
    { id: 5, name: "engagement shoot" },
  ];
  const [show, setShow] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 250) {
      setBg("bg-white shadow-xl border border-b-2");
    } else {
      setBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);
  return (
    <div
      className={`w-full h-[50px] md:h-[70px] ${bg} flex items-center justify-between z-20 sticky top-0`}
    >
      <div className=" w-full max-w-[1280px] lg:max-w-[2000px] px-5 md:px-10 mx-auto flex justify-center lg:justify-between items-center ">
        <div>
          <h1 className="text-4xl  new-font">Dazzling Shots</h1>
        </div>
        <ul className="hidden md:flex items-center gap-20 font-medium  text-black">
          {data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {!!item.subMenu ? (
                  <li
                    className="cursor-pointer  flex items-center  gap-2 relative hover:text-[#983B57] uppercase font-medium"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                  >
                    {item.name}
                    {show && (
                      <motion.ul
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 30, y: 1 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="absolute top-6 left-[-60px] min-w-[250px] w-[233px] bg-lightOverlay backdrop-blur-md rounded-md shadow-md flex flex-col items-center justify-center gap-4"
                      >
                        {subMenuData.map((item) => {
                          return (
                            <Link
                              href={`/portfolio/${item.name.replace(
                                /\s+/g,
                                ""
                              )}`}
                              key={item.id}
                              onClick={() => setShow(false)}
                            >
                              <li className="h-12 flex justify-between items-center px-3 text-black hover:bg-black/[0.03] rounded-md curosor-pointer hover:text-[#983B57] uppercase">
                                {item.name}
                              </li>
                            </Link>
                          );
                        })}
                      </motion.ul>
                    )}
                  </li>
                ) : (
                  <li className="curosor-pointer hover:text-[#983B57] uppercase font-medium">
                    <Link href={item?.url}>{item.name}</Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
