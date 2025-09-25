"use client";

import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import img1 from "@/components/images/solution/homepage-woman.png";
import img2 from "@/components/images/solution/homepage-color.png";
import img3 from "@/components/images/solution/homepage-group.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <section className="w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="leading-[100%] tracking-[0%] font-regular text-[#9EA3A2] text-[14px]">
          Company
        </p>
        <div>
          <h4 className="w-full mt-3 leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Building for Everyone,
          </h4>
          <h4 className="w-full leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Trusted by Enterprises
          </h4>
        </div>
      </motion.div>
      <p className="text-[#9EA3A2] leading-[25px] mt-1 mb-3 max-w-[729px] text-[14px] tracking-[0%] font-regular">
        Our technology is the result of over two years of research and
        development. It features one of the most advanced AI infrastructure
        stacks in the industry. We have built our solutions from the ground up
        to support massive scale while maintaining an excellent developer
        experience.
      </p>
      <Link href="/company" className="no-underline">
        <Button>Learn More</Button>
      </Link>
      <div className="mt-10 flex flex-col lg:flex-row gap-[10px] items-center h-full lg:h-[335px] w-full">
        <motion.div
          className="relative w-full lg:w-[70%] h-[335px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <Image src={img1} fill alt="image" className="object-cover" />
        </motion.div>
        <div className="flex flex-col justify-between gap-[8px] w-full lg:w-[30%]">
          <motion.div
            className="relative w-full lg:h-[163px] h-[300px]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -3 }}
          >
            <Image src={img2} fill alt="image" className="object-cover" />
          </motion.div>
          <motion.div
            className="relative w-full lg:h-[163px] h-[300px]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            whileHover={{ y: -3 }}
          >
            <Image src={img3} fill alt="image" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
