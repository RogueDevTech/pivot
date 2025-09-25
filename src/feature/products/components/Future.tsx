"use client";

import React from "react";
import img1 from "@/components/images/first-homepage.png";
import Image from "next/image";

import Button from "@/components/Button";
import { motion } from "framer-motion";

const Future = () => {
  return (
    <section className=" flex flex-col gap-[48px] w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.h3
          className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Avery AI: The Future of Design Intelligence
        </motion.h3>
        <motion.p
          className="w-full leading-[20px] mt-1 mb-5 tracking-[0%] max-w-[580px] text-[#9EA3A2] text-[14px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          While most design tools focus on creation, Avery AI focuses on
          intelligence. Rather than simply providing another canvas for
          designers to work on
        </motion.p>
        <Button>Join the waitlist</Button>
      </motion.div>
      <motion.div
        className="relative w-full h-[296px]"
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <Image src={img1} fill alt="img" className="object-cover" />
      </motion.div>
    </section>
  );
};

export default Future;
