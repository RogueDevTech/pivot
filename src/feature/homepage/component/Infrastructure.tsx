"use client";

import React from "react";

import Button from "@/components/Button";
import img13 from "@/components/images/thirteen.png";
import img14 from "@/components/images/forteen.png";
import img15 from "@/components/images/fifteen.png";
import img16 from "@/components/images/sixteen.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Infrastructure = () => {
  return (
    <section className="flex flex-col gap-[32px] w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h4 className="w-full mt-3 leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
          Build the Future of AI Infrastructure
        </h4>
        <p className="text-[#9EA3A2] leading-[25px] mt-1 mb-3 max-w-[729px] text-[14px] tracking-[0%] font-regular">
          Join team of talented engineers, researchers, and innovators who are
          making AI accessible to developers worldwide. Work on technology that
          powers breakthrough applications across every industry. Lets push the
          boundaries of possibilities and build the future.
        </p>
        <Link href="/careers" className="no-underline">
          <Button>Explore Roles</Button>
        </Link>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-[8px] w-full">
        <motion.div
          className="relative w-full h-[200px] lg:h-[285px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <Image src={img13} fill alt="img" className="object-cover" />
        </motion.div>
        <motion.div
          className="relative w-full h-[200px] lg:h-[285px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          whileHover={{ scale: 1.01 }}
        >
          <Image src={img14} fill alt="img" className="object-cover" />
        </motion.div>
        <div className=" flex flex-col lg:flex-col gap-[10px] w-full">
          <motion.div
            className="relative w-full h-[150px] lg:h-[135px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <Image src={img15} fill alt="img" className="object-cover" />
          </motion.div>
          <motion.div
            className="relative w-full h-[150px] lg:h-[135px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            whileHover={{ scale: 1.01 }}
          >
            <Image src={img16} fill alt="img" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
