"use client";

import React from "react";
import img3 from "@/components/images/solution/solution-code.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const SimpleIntegration = () => {
  const items = [
    {
      header: "Skip the AI Complexity",
      list: "Building facial recognition, voice verification, and anomaly detection from scratch requires specialized expertise and significant resources. God's Eye API provides these capabilities through clean, well-documented endpoints that integrate into any application stack.",
    },
    {
      header: "Production-Ready from Day One",
      list: "Our API handles the infrastructure challenges of scaling biometric processing, managing encrypted templates, and ensuring sub-second response times. Your application gets enterprise-grade performance without the operational overhead.",
    },
    {
      header: "Compliance Built-In",
      list: "Privacy regulations like GDPR and NDPR are complex when handling biometric data. God's Eye API includes built-in compliance features, consent management, and audit trails, reducing your legal and technical burden.",
    },
  ];
  return (
    <section className="flex flex-col gap-[48px] w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h3 className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
          Simple Integration, Powerful Results
        </h3>
        <motion.div
          className="relative w-full h-[350px] lg:h-[495px] mt-4"
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <Image src={img3} fill alt="img" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col gap-[32px]">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="w-full font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
            Why Developers Choose God&apos;s Eye API
          </h3>
          <div className="flex flex-col gap-[24px] mt-4">
            {items.map((ftr, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-[16px]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
              >
                <h4 className="text-[#FFFFFF] text-[16px] leading-[20px] tracking-[0%] font-medium">
                  {ftr.header}
                </h4>
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] text-[14px] font-normal w-full">
                  {ftr.list}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[16px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        >
          <p className="text-[#9EA3A2] leading-[20px] text-[14px] tracking-[0%] font-regular w-full">
            PivotLabs delivers AI-powered APIs that address complex technical
            challenges for developers and businesses. With a focus on developer
            experience and practical innovation, we make advanced AI
            capabilities accessible, reliable, and easy to integrate. God Eye
            reflects our commitment to providing simple, scalable identity
            intelligence for any application.
          </p>
          <p className="text-[#9EA3A2] leading-[20px] text-[14px] tracking-[0%] font-regular w-full">
            Ready to get started? Visit our developer portal for API
            documentation, interactive examples, and free tier access. Join the
            developer community shaping the future of intelligent applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleIntegration;
