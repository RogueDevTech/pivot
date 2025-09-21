"use client";

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

const Simplication = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);
  const [expandedContent, setExpandedContent] = useState<string | null>(
    "hr-workforce"
  );

  const tabContents: Record<string, React.ReactNode> = {
    "flexible-integration": (
      <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
        <div className="relative lg:w-[396px] h-[333px] w-full">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <div className="flex flex-col">
            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "hr-workforce" ? null : "hr-workforce"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium mb-2">
                HR and Workforce Applications
              </h4>
              {expandedContent === "hr-workforce" && (
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px]">
                  Add fraud-proof attendance tracking to your HR platform.
                  Enable employees to check in using facial recognition while
                  providing managers with real-time attendance insights and
                  anomaly detection.
                </p>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "educational" ? null : "educational"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Educational Technology
              </h4>
              {expandedContent === "educational" && (
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2">
                  Build smarter classroom management tools. Automate attendance
                  taking, track student engagement patterns, and provide
                  educators with actionable insights about learning
                  environments.
                </p>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "event-management"
                    ? null
                    : "event-management"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Event Management Platforms
              </h4>
              {expandedContent === "event-management" && (
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2">
                  Create seamless event experiences. Enable badge-less entry,
                  real-time headcount tracking, and security monitoring for
                  conferences, concerts, and gatherings of any size.
                </p>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "security-access"
                    ? null
                    : "security-access"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Security and Access Control Systems
              </h4>
              {expandedContent === "security-access" && (
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2">
                  Enhance your security applications with intelligent identity
                  verification. Add biometric authentication, visitor
                  management, and behavioral analysis to existing security
                  infrastructures.
                </p>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "facility-management"
                    ? null
                    : "facility-management"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Facility Management Solutions
              </h4>
              {expandedContent === "facility-management" && (
                <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2">
                  Optimize space utilization across different environments.
                  Track occupancy patterns, monitor facility usage, and improve
                  operational efficiency through intelligent presence analytics.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    "developer-first-design": (
      <div className="flex flex-col lg:flex-row lg:items-center gap-[24px]">
        <div className="relative lg:w-[396px] h-[333px] w-full">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
            Developer-First Design Philosophy
          </h4>
          <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px]">
            Built by developers, for developers. Our API prioritizes ease of
            use, comprehensive documentation, and intuitive design patterns that
            accelerate development time and reduce integration complexity.
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
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
            Built for Enterprise Scale
          </h4>
          <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px]">
            Handle millions of requests with our enterprise-grade
            infrastructure. Auto-scaling, global CDN, and 99.9% uptime guarantee
            ensure your application performs reliably under any load.
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
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
            Security-First Architecture
          </h4>
          <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px]">
            End-to-end encryption, zero-trust architecture, and compliance with
            industry standards. Your biometric data is protected with
            military-grade security and never stored in plain text.
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

  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="">
        <h3 className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
          Simplifying identity verification for modern applications
        </h3>
        <ul className="flex gap-[16px] flex-wrap mt-4">
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
