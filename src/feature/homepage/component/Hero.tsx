"use client";

import React from "react";
import Image from "next/image";
import img7 from "@/components/images/sixth-homepage.webp";
import img8 from "@/components/images/seventh-homepage.png";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Logo from "@/components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-[32px]">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Text>Partners</Text>
          <motion.h2
            className="text-[#ffffff] mt-3 leading-[36px] text-[28px] font-meduim w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Trusted by Companies Building the Future of AI
          </motion.h2>
          <motion.p
            className="w-full  mt-1 mb-5 text-400 font-Regular leading-[25px] text-[14px] max-w-[710px]  tracking-[0%] text-[#9EA3A2]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          >
            From fast-growing startups to Fortune 500 enterprises, developers
            choose Pivot Labs to power their most critical AI features.
          </motion.p>
          <Link href="/partners" className="no-underline">
            <Button> Become a Partner</Button>
          </Link>
        </motion.div>

        {/* <div className="flex flex-col lg:flex-row gap-8 w-fit">
          <div className=" relative lg:w-[483px] h-[318px] w-[100%]">
            <Image
              src={img7}
              fill
              alt="AI Technology"
              className="lg:object-cover object-contain"
            />
          </div>
          <div className="relative lg:w-[237px] h-[318px] w-[100%]">
            <Image
              src={img8}
              fill
              alt="AI Development"
              className="lg:object-cover object-contain"
            />
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          {/* First image - Bigger */}
          <motion.div
            className="relative w-full lg:w-[70%] h-[250px] lg:h-[318px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.015, rotate: -0.3 }}
          >
            <Image
              src={img7}
              fill
              alt="AI Technology"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative w-full lg:w-[30%] h-[250px] lg:h-[318px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            whileHover={{ scale: 1.02, rotate: 0.3 }}
          >
            <Image
              src={img8}
              fill
              alt="AI Development"
              className="object-cover"
            />
          </motion.div>
        </div>

        <Logo />
      </div>
    </section>
  );
};

export default Hero;
