"use client";

import React from "react";
import Boundaries from "./components/Boundaries";
// import DynamicInfrastructure from "./components/DynamicInfrastructure";
import { motion } from "framer-motion";

const ResearchPage = () => {
  return (
    <motion.div
      className=" flex w-[100%]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="w-full flex flex-col gap-[48px] md:w-[75%] h-full">
        <Boundaries />
      </div>
      <div className="hidden  md:block p-2 w-[25%] h-[500px]">
        <div className="w-[100%] h-[100%] "></div>
      </div>
    </motion.div>
  );
};

export default ResearchPage;
