"use client";
import SolutionText from "@/components/SolutionText";
import React, { useState } from "react";
import img1 from "@/components/images/solution/solution-two.webp";
import Image from "next/image";

const tabs = [
  { name: "Flexible Integration", slug: "flexible-integration" },
  { name: "Developer First Design", slug: "developer-first-design" },
  { name: "Built for Scale", slug: "built-for-scale" },
  { name: "Security First", slug: "security-first" },
];

const lists = [
  { list: "Educational Technology" },
  { list: "Event Management Platforms" },
  { list: "Security and Access Control Systems" },
  { list: "Facility Management Solutions" },
];

const tabContents: Record<string, React.ReactNode> = {
  "flexible-integration": (
    <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
      <div className="relative lg:w-[396px] h-[333px] w-full">
        <Image
          src={img1}
          fill
          alt="image"
          className="object-fit w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[15px] lg:w-[330px] w-full">
        <SolutionText className="text-[14px]">
          HR and Workforce Applications
        </SolutionText>
        <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] font-normal text-[14px]">
          Add fraud-proof attendance tracking to your HR platform. Enable
          employees to check in using facial recognition while providing
          managers with real-time attendance insights and anomaly detection.
        </p>
        <div className="flex flex-col">
          {lists.map((ftr, index) => (
            <p
              key={index}
              className="border-t-1 border-[#EAEAEA] py-[14px] px-[2px] text-[#ffffff] leading-[100%] tracking-[0%] font-medium text-500"
            >
              {ftr.list}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
  "developer-first-design": (
    <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
      <div className="relative lg:w-[396px] h-[333px] w-full">
        <Image
          src={img1}
          fill
          alt="image"
          className="object-fit w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[15px] lg:w-[330px] w-full">
        <SolutionText className="text-[14px]">
          HR and Workforce Applications
        </SolutionText>
        <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-400 font-normal text-[14px]">
          Add fraud-proof attendance tracking to your HR platform. Enable
          employees to check in using facial recognition while providing
          managers with real-time attendance insights and anomaly detection.
        </p>
        <div className="flex flex-col">
          {lists.map((ftr, index) => (
            <p
              key={index}
              className="border-t-1 border-[#EAEAEA] py-[14px] px-[2px] text-[#ffffff] leading-[100%] tracking-[0%] font-medium text-500"
            >
              {ftr.list}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
  "built-for-scale": (
    <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
      <div className="relative lg:w-[396px] h-[333px] w-full">
        <Image
          src={img1}
          fill
          alt="image"
          className="object-fit w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[15px] lg:w-[330px] w-full">
        <SolutionText className="text-[14px]">
          HR and Workforce Applications
        </SolutionText>
        <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-400 font-normal text-[14px]">
          Add fraud-proof attendance tracking to your HR platform. Enable
          employees to check in using facial recognition while providing
          managers with real-time attendance insights and anomaly detection.
        </p>
        <div className="flex flex-col">
          {lists.map((ftr, index) => (
            <p
              key={index}
              className="border-t-1 border-[#EAEAEA] py-[14px] px-[2px] text-[#ffffff] leading-[100%] tracking-[0%] font-medium text-500"
            >
              {ftr.list}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
  "security-first": (
    <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
      <div className="relative lg:w-[396px] h-[333px] w-full">
        <Image
          src={img1}
          fill
          alt="image"
          className="object-fit w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[15px] lg:w-[330px] w-full">
        <SolutionText className="text-[14px]">
          HR and Workforce Applications
        </SolutionText>
        <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-400 font-normal text-[14px]">
          Add fraud-proof attendance tracking to your HR platform. Enable
          employees to check in using facial recognition while providing
          managers with real-time attendance insights and anomaly detection.
        </p>
        <div className="flex flex-col">
          {lists.map((ftr, index) => (
            <p
              key={index}
              className="border-t-1 border-[#EAEAEA] py-[14px] px-[2px] text-[#ffffff] leading-[100%] tracking-[0%] font-medium text-500"
            >
              {ftr.list}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
};

const Simplication = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);

  return (
    <section className="flex flex-col h-auto justify-between gap-[32px]">
      <div className="flex flex-col gap-[24px]">
        <SolutionText className="text-[20px] w-[343px]">
          Simplifying identity verification for modern applications
        </SolutionText>
        <ul className="flex gap-[16px] flex-wrap">
          {tabs.map((ftr, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(ftr.slug)}
              className={`cursor-pointer leading-[100%] tracking-[0%] font-regular p-2 rounded transition-colors ${
                activeTab === ftr.slug
                  ? "text-[#FFFFFF] border-b-1 border[#fffff] "
                  : "text-[#9EA3A2] hover:text-[#FFFFFF]"
              }`}
            >
              {ftr.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[24px]">{tabContents[activeTab]}</div>
    </section>
  );
};

export default Simplication;
