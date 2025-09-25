"use client";

import React from "react";
import Image from "next/image";
import com4 from "@/components/images/company/company-four.png";
import com5 from "@/components/images/company/company-five.png";
import com6 from "@/components/images/company/company-six.png";
import com7 from "@/components/images/company/company-seven.png";
import { motion } from "framer-motion";

const Content = () => {
  const content = [
    {
      header: "Developer-First Philosophy",
      paragraph:
        "We optimize developer experience and time-to-value with SDKs and docs that make AI integration effortless",
    },
    {
      header: "Reliability at Scale",
      paragraph:
        "Our promise: infrastructure never bottlenecks. With enterprise-grade SLAs, we’re always there when your apps need us most.",
    },
    {
      header: "Intelligent by Design",
      paragraph:
        "We build AI to enhance human capability, with explainable, auditable outputs teams can trust.",
    },
    {
      header: "Transparent Innovation",
      paragraph:
        "We’re transparent about capabilities, limits, and roadmap—driven by open communication with our community.",
    },
    {
      header: "Security by Default",
      paragraph:
        "Our privacy-first, secure-by-design architecture meets top enterprise standards—your data security is our responsibility.",
    },
  ];
  return (
    <section className="flex flex-col w-full lg:w-[729px]">
      <div className="">
        <div className="flex flex-col gap-[16px]">
          <motion.div
            className="flex flex-col gap-[8px]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div>
              <h3 className="w-full font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
                Built for Scale,{" "}
              </h3>
              <p className="w-full font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
                Designed for Developers
              </p>
            </div>
            <p className="w-full leading-[25px] tracking-[0%] text-[#9EA3A2] text-[14px] font-regular">
              Our technology represents the culmination of 2+ years of R&D
              investment and is one of the most sophisticated AI infrastructure
              stacks in the industry. We have built our platform from the ground
              up to handle massive scale while maintaining the developer
              experience that teams love.
            </p>
          </motion.div>
          <div className="flex flex-col justify-between gap-[12px]">
            <motion.div
              className="relative w-full h-[202px]"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={com4}
                fill
                alt="com"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-between gap-[8px]">
              <motion.div
                className="relative w-full h-[206px] lg:w-[437px]"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -3 }}
              >
                <Image
                  src={com5}
                  fill
                  alt="com"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col justify-between gap-[8px]">
                <motion.div
                  className="relative w-full h-[99px] lg:w-[285px] "
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <Image
                    src={com6}
                    fill
                    alt="com"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div
                  className="relative w-full h-[99px] lg:w-[285px]"
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
                  whileHover={{ y: -3 }}
                >
                  <Image
                    src={com7}
                    fill
                    alt="com"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className=" mt-[24px]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h3 className="w-full mt-3 font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
          Our Values Drive Everything We Do
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-[24px] w-full lg:w-[729px] lg:grid-cols-3 justify-between">
          {content.map((ftr, index) => (
            <motion.div
              key={index}
              className=" w-full lg:w-[216px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <h3 className="w-full mb-2 font-medium text-[14px] leading-[20px] tracking-[0%] text-[#ffffff]">
                {ftr.header}
              </h3>
              <p className="w-full max-w-[210px] leading-[25px] text-[#9EA3A2] text-[14px] font-regular">
                {ftr.paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
