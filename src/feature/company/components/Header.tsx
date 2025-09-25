"use client";

import React from "react";
import com1 from "@/components/images/company/company-one.png";
import com2 from "@/components/images/company/company-two.png";
import com3 from "@/components/images/company/company-three.png";
import Image from "next/image";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className=" flex flex-col gap-[40px] w-full lg:w-[729px]">
      <div className="flex flex-col gap-[32px]">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="w-full mt-3 font-medium leading-[36px] max-w-[500px] text-[28px] tracking-[0%] text-[#ffffff]">
            Powering the Next Generation of Intelligent Applications
          </h3>
          <p className="w-full mt-1 mb-5 leading-[25px] tracking-[0%] text-[#9EA3A2] text-[14px] font-regular">
            Pivot Labs is the foundational AI infrastructure platform that
            transforms how enterprises build, deploy, and scale intelligent
            applications. As an API-first infrastructure company, we provide the
            critical AI-driven systems that power breakthrough products across
            fintech, healthcare, e-commerce, and enterprise software.
          </p>
          <p className="w-full leading-[25px] tracking-[0%] text-[#9EA3A2] text-[14px] font-regular">
            Our solutions powers developers and companies worldwide with
            reliable, lightning-fast AI inference. Backed by leading investors
            and rapid growth, we&apos;re building the essential AI
            infrastructure layer for the global economy
          </p>
        </motion.div>
        <div className="flex h-full lg:h-[296px] flex-row gap-[16px]">
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src={com1}
              fill
              alt="com"
              className="lg:object-cover object-contain w-full h-full"
            />
          </motion.div>
          <div className="flex flex-col justify-between h-auto">
            <motion.div
              className="relative w-full h-[161px] "
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              whileHover={{ y: -3 }}
            >
              <Image
                src={com2}
                fill
                alt="com"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="relative w-[150px] h-[126px] lg:w-[213px]"
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
              whileHover={{ y: -3 }}
            >
              <Image
                src={com3}
                fill
                alt="com"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-col gap-[32px]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className=" w-full lg:w-[620px]">
          <h3 className="w-full mt-3 font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
            Supported by the best
          </h3>
          <p className="w-full mt-1 mb-5 leading-[25px] tracking-[0%] text-[#9EA3A2] text-[14px] font-regular">
            Pivot Labs is supported by incredible partners and sponsors who make
            it possible for a team of talented designers and engineers to build
            using our solutions full-time.
          </p>
          <Button>Become a Partner</Button>
        </div>
        <Logo />
      </motion.div>
    </section>
  );
};

export default Header;
