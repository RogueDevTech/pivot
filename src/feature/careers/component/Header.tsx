"use client";

import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import pic1 from "@/components/images/careers/careers-one.png";
import pic2 from "@/components/images/careers/career-two.png";
import pic3 from "@/components/images/careers/career-three.png";
import pic4 from "@/components/images/careers/carers.four.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="flex flex-col gap-[32px] w-full">
      <motion.div
        className="]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h3 className="text-[#ffffff] mt-3 leading-[36px] tracking-[0%] text-[28px] font-meduim text-500">
          Build the Infrastructure That Powers Tomorrow AI
        </h3>
        <p className="w-full leading-[20px] mt-1 mb-5 tracking-[0%] max-w-[690px] text-[#9EA3A2] text-400 text-[14px]">
          Join a team of world-class engineers, researchers, and innovators who
          are solving the hardest problems in AI infrastructure. At Pivot Labs,
          you will work on technology that processes millions of API calls
          monthly and powers intelligent applications across industries that
          matter.
        </p>
        <Button>View Openings</Button>
      </motion.div>
      <div className=" flex flex-col lg:flex-row gap-[8px] w-full">
        <motion.div
          className="relative w-full lg:w-[35%] h-[300px] lg:h-[450px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <Image
            src={pic1}
            fill
            alt="pic"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="flex flex-col gap-[8px] w-full lg:w-[30%]">
          <motion.div
            className="relative w-full h-[150px] lg:h-[217px]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -3 }}
          >
            <Image
              src={pic2}
              fill
              alt="pic"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            className="relative w-full h-[150px] lg:h-[217px]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            whileHover={{ y: -3 }}
          >
            <Image
              src={pic3}
              fill
              alt="pic"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <motion.div
          className="relative w-full lg:w-[35%] h-[300px] lg:h-[450px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          whileHover={{ scale: 1.01 }}
        >
          <Image
            src={pic4}
            fill
            alt="pic"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
