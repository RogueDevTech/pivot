"use client";

import React from "react";
import { motion } from "framer-motion";

const Transform = () => {
  const list = [
    {
      txt: "Context-Aware Artificial Intelligence",
      paragraph:
        "Smarter design guidance through AI-driven context, psychology, and optimization.",
    },
    {
      txt: "Predictive Intelligence with Advanced Machine Learning",
      paragraph:
        "Proactive AI modeling forecasts engagement, conversions, and accessibility challenges.",
    },
    {
      txt: "Learning that Scales on Collective Intelligence",
      paragraph:
        "Federated learning makes Avery AI stronger with every design decision.",
    },
  ];

  const item = [
    {
      header: "Individual Designers: AI as Creative Partner",
      list1:
        "Spend 60-70% less time on manual quality checks through automated AI analysis",
      list2:
        "Receive personalized guidance that accelerates professional growth",
      list3:
        "Make confident decisions backed by AI-processed data from millions of design patterns",
      list4: " Discover innovative approaches through AI-generated suggestions",
    },
    {
      header: "Design Teams: Scalable Intelligence Infrastructure",
      list1:
        "Maintain design quality across unlimited projects through AI-powered pattern recognition",
      list2:
        "Share design expertise instantly through AI-mediated knowledge transfer",
      list3:
        "Build upon collective successes through AI analysis of what works and why",
      list4:
        "Automated design review processes that catch issues before they impact users",
    },
    {
      header: "Organizations: Strategic Design Intelligence",
      list1:
        " Direct correlation between design decisions and business outcomes through advanced analytics",
      list2:
        "Data-driven insights about where design improvements will have greatest impact",
      list3:
        "AI analysis of design trends and market positioning opportunities",
      list4:
        "Systematic approach to building design excellence across growing organizations",
    },
  ];

  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="flex flex-col gap-[32px]">
        <motion.div
          className="flex flex-col gap-[16px] w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="w-full font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
            Transforming Design from Creation to Intelligence
          </h3>
          <p className="w-full leading-[25px] tracking-[0%] max-w-[729px] text-[#9EA3A2] text-[14px]">
            In the rapidly evolving world of digital design, teams face an
            increasingly complex challenge: creating exceptional user
            experiences while maintaining consistency, accessibility, and
            business impact at scale. Enter Avery AI—Pivotlabs groundbreaking
            artificial general intelligence platform specifically engineered for
            design intelligence that fundamentally transforms how teams approach
            digital product creation.
          </p>
          <p className="w-full leading-[25px] tracking-[0%] max-w-[729px] text-[#9EA3A2] text-[14px]">
            Avery AI represents the convergence of advanced artificial
            intelligence with deep design expertise, creating the worlds first
            AGI system purpose-built to understand, analyze, and optimize the
            entire design process from conception to user impact.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[24px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          <h3 className="w-full font-medium leading-[36px] text-[28px] max-w-[600px] tracking-[0%] text-[#ffffff]">
            The Intelligence Difference: Multi-Dimensional AI Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
            {list.map((feat, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-[16px] w-full"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                whileHover={{ y: -3 }}
              >
                <p className="font-medium leading-[20px] tracking-[0%] text-[#ffffff] max-w-[230px] text-[16px]">
                  {feat.txt}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[25px] tracking-[0%]">
                  {feat.paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col gap-[24px]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h3 className="w-full font-medium leading-[36px] text-[28px] max-w-[400px] tracking-[0%] text-[#ffffff]">
          Built for Modern Design Teams: AI-Powered Collaboration
        </h3>
        <div className="flex flex-col gap-[32px] w-full">
          {item.map((feat, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-[16px]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <h4 className="font-medium text-[20px] leading-[20px] tracking-[0%] text-[#ffffff]">
                {feat.header}
              </h4>
              <ul className="flex flex-col gap-[10px] pl-[16px]">
                <li className="list-disc">
                  <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%]">
                    {feat.list1}
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%]">
                    {feat.list2}
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%]">
                    {feat.list3}
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%]">
                    {feat.list4}
                  </p>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Transform;
