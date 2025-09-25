"use client";

import React from "react";
import prod1 from "@/components/images/products/product-image-one.png";
import prod2 from "@/components/images/products/product-two.jpg";
import prod3 from "@/components/images/products/product-3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const IntelligentDesign = () => {
  const text = [
    {
      header: "The Future of Design Decision-Making",
      txtone:
        "Traditional design processes rely on intuition and subjective feedback. Avery AI augments human creativity with AI-powered insights, proven patterns, and predictive analytics spanning millions of design decisions.",
      txttwo:
        " This doesn't replace the designer's creative process—it enhances it exponentially. By handling routine analysis and providing contextual intelligence, Avery AI frees designers to focus on solving complex problems and creating delightful user experiences.",
      txtthree: "",
      txtfour: "",
    },
    {
      header: "Join the Intelligence Revolution",
      txtone:
        "The future of design isn't just about better tools—it's about fundamentally smarter decisions powered by artificial intelligence that truly understands design, users, and business impact. Avery AI represents a paradigm shift from reactive design processes to proactive design intelligence.",
      txttwo:
        "By combining human creativity with artificial general intelligence, contextual understanding with predictive analytics, and individual insights with collective learning, Avery AI is building the foundation for the next generation of digital experiences.",
      txtthree:
        "The age of design intelligence has arrived. The question isn't whether AI will transform design—it's whether your team will be leading that transformation.",
      txtfour: `Avery AI is currently in development by PivotLabs, representing years of research into the intersection of artificial intelligence and design excellence. To learn more about early access opportunities or stay updated on our progress toward launching the world's first design-focused AGI system, contact our team.`,
    },
  ];
  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="flex flex-col lg:flex-row items-center gap-[16px] w-full">
        <motion.div
          className="relative w-full lg:w-[70%] h-[296px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <Image src={prod1} fill alt="prod" className="object-cover" />
        </motion.div>
        <div className="flex flex-col justify-between gap-[16px] w-full lg:w-[30%]">
          <motion.div
            className="relative w-full h-[140px]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -3 }}
          >
            <Image src={prod2} fill alt="prod" className="object-cover" />
          </motion.div>
          <motion.div
            className="relative w-full h-[140px]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            whileHover={{ y: -3 }}
          >
            <Image src={prod3} fill alt="prod" className="object-cover" />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] w-full">
        <motion.div
          className="flex flex-col gap-[16px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h3 className="w-full font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
            The Power of Artificial General Intelligence in Design
          </h3>
          <div className="flex flex-col gap-[16px] w-full">
            <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
              Avery AI leverages cutting-edge AGI capabilities that go far
              beyond pattern matching or rule-based analysis. The system
              demonstrates genuine understanding of design principles, user
              psychology, and business strategy. It can:
            </p>
            <ul className="flex flex-col gap-[12px] pl-[16px]">
              <li className="list-disc">
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  Reason About Design Intent: Understanding not just what
                  elements exist in a design, but why they were placed there and
                  how they contribute to the overall user journey
                </p>
              </li>
              <li className="list-disc">
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  Synthesize Complex Relationships: Connecting visual design
                  choices to business metrics, user satisfaction, and long-term
                  product success
                </p>
              </li>
              <li className="list-disc">
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  Adapt to Novel Contexts: Applying learned principles to
                  entirely new design challenges and industry verticals
                </p>
              </li>
              <li className="list-disc">
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  Learn from Minimal Data: Generating insights from limited
                  information, much like experienced designers do when
                  approaching new projects
                </p>
              </li>
            </ul>
            <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
              This level of AI sophistication enables Avery AI to provide
              strategic guidance rather than just tactical feedback, making it
              an invaluable partner in the design process rather than simply
              another tool.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col gap-[32px] w-full">
          {text.map((ftxt, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-[16px] w-full"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <h3 className="w-full font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
                {ftxt.header}
              </h3>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  {ftxt.txtone}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  {ftxt.txttwo}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  {ftxt.txtthree}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] font-regular">
                  {ftxt.txtfour}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentDesign;
