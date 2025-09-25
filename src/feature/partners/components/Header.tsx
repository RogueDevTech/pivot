"use client";

import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="">
      <motion.h3
        className="text-[#ffffff] mt-3 max-w-[710px] text-[28px] leading-[36px] tracking-[0%] font-meduim"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        We are supported by incredible partners and sponsors who make everything
        possible
      </motion.h3>
      <motion.p
        className="text-[#9EA3A2] mt-2 mb-5 max-w-[710px] leading-[20px] tracking-[0%] text-[14px] text-400 font-regular"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
      >
        We believe the future of AI infrastructure is collaborative, powering
        the next generation of intelligent applications across fintech,
        healthcare, e-commerce, and enterprise software. Our customers and
        partners rely on us to deliver AI infrastructure that is reliable,
        lightning-fast, and built for scale.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
      >
        <Button>Become a Partner</Button>
      </motion.div>
    </section>
  );
};

export default Header;
