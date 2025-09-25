"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import par1 from "@/components/images/partner/product-one.png";
import par2 from "@/components/images/partner/product-two.png";
import par3 from "@/components/images/partner/product-three.png";
import par4 from "@/components/images/partner/product-tool.png";
import par5 from "@/components/images/partner/product-five.png";
import par6 from "@/components/images/partner/product-tool-2.png";
import par7 from "@/components/images/partner/product-seven.png";
import par8 from "@/components/images/partner/product-eight.png";
import par9 from "@/components/images/partner/product-nine.png";
import par10 from "@/components/images/partner/product-ten.png";
import InnerText from "@/components/InnerText";
import { motion } from "framer-motion";

const Main = () => {
  interface Storage {
    img: string | StaticImageData;
    text: string;
    textone: string;
  }
  const storage: Storage[] = [
    {
      img: par2,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par3,
      text: "Anaconda freed its engineers from maintaining custom documentation ...",
      textone: "Read story",
    },
    {
      img: par4,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par5,
      text: "Anaconda freed its engineers from maintaining custom documentation ...",
      textone: "Read story",
    },
    {
      img: par6,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par7,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par8,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par9,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par10,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
  ];
  return (
    <section className=" flex flex-col gap-[10px] w-full ">
      <motion.div
        className=" relative w-full h-[347px]"
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={par1}
          fill
          alt="par"
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-[25px] gap-x-[10px] w-full">
        {storage.map((ftr, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-[10px] w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: (index % 2) * 0.06,
            }}
          >
            <motion.div
              className="relative w-full h-[234px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={ftr.img}
                alt="ftr"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="flex flex-col gap-[12px]">
              <InnerText>{ftr.text}</InnerText>
              <p className="text-[#ffffff] leading-[20px] tracking-[0%] text-[14px] font-regular hover:text-[#9EA3A2] transition-colors cursor-pointer">
                {ftr.textone}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Main;
