"use client";

import thirdImage from "@/components/images/third-image.webp";
import forthImage from "@/components/images/forth-homepage.png";
import fifthImage from "@/components/images/missing-content.png";
import Image, { StaticImageData } from "next/image";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Link from "next/link";
import Text from "@/components/Text";
interface ResearchCard {
  id: number;
  title: string;
  imageSrc: string | StaticImageData;
}

const Content: React.FC = () => {
  const researchCards: { [key: string]: ResearchCard[] } = {
    privacy: [
      {
        id: 1,
        title:
          "Dynamic Multi-Model Orchestration for Scalable AI Infrastructure",
        imageSrc: thirdImage,
      },
    ],

    carbon: [
      {
        id: 2,
        title:
          "Privacy-Preserving Federated Learning for Enterprise AI Applications",
        imageSrc: forthImage,
      },
    ],

    dynamic: [
      {
        id: 3,
        title:
          "Carbon-Aware Edge AI: Sustainable Computing for Ultra-Low Latency Applications",
        imageSrc: fifthImage,
      },
    ],
  };

  return (
    <div className=" mt-6 flex flex-col justify-between gap-[25px] w-full mx-auto">
      <motion.section
        className=""
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Text>Research</Text>
        <motion.h2
          className="text-[#FFFFFF] mt-3 leading-[36px] text-[28px] font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Advancing the Future of AI Infrastructure
        </motion.h2>
        <motion.p
          className="text-[#9EA3A2] mt-1 mb-5 font-regular leading-[25px] text-[14px] max-w-[700px] tracking-[0%] w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          Our research drives breakthrough innovations in AI performance,
          efficiency, and accessibility. We publish our findings and contribute
          to the open-source community to accelerate progress for everyone.
        </motion.p>
        <Link href="/research" className="no-underline">
          <Button>Read More</Button>
        </Link>
      </motion.section>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[10px]">
        <div>
          {researchCards.privacy.map((card) => (
            <motion.div
              key={card.id}
              className="w-full flex flex-col gap-[12px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.div
                className="relative h-[250px] md:h-[300px] lg:h-[364px] w-full"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <p className="w-full text-[#ffffff] leading-[20px] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div>
          {researchCards.carbon.map((card) => (
            <motion.div
              key={card.id}
              className="flex flex-col gap-[12px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            >
              <motion.div
                className="relative h-[200px] md:h-[250px] lg:h-[176px] w-full"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <p className="w-full text-[#ffffff] leading-[20px] text-[16px] tracking-[0%] font-medium">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div>
          {researchCards.dynamic.map((card) => (
            <motion.div
              key={card.id}
              className="flex flex-col gap-[12px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            >
              <motion.div
                className="relative h-[250px] md:h-[300px] lg:h-[295px] w-full"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <p className="w-full text-[#ffffff] leading-[20px] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
