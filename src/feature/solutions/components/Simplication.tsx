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


const Simplication = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);
  const [expandedContent, setExpandedContent] = useState<string | null>(
    "hr-workforce"
  );

  const tabContents: Record<string, React.ReactNode> = {
    "flexible-integration": (
      <div className=" flex flex-col lg:flex-row lg:items-start gap-[24px]">
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
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Add fraud-proof attendance tracking to your HR platform.
                  Enable employees to check in using facial recognition while
                  providing managers with real-time attendance insights and
                  anomaly detection.
                </div>
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
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Build smarter classroom management tools. Automate attendance
                  taking, track student engagement patterns, and provide
                  educators with actionable insights about learning
                  environments.
                </div>
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
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Create seamless event experiences. Enable badge-less entry,
                  real-time headcount tracking, and security monitoring for
                  conferences, concerts, and gatherings of any size.
                </div>
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
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Enhance your security applications with intelligent identity
                  verification. Add biometric authentication, visitor
                  management, and behavioral analysis to existing security
                  infrastructures.
                </div>
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
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Optimize space utilization across different environments.
                  Track occupancy patterns, monitor facility usage, and improve
                  operational efficiency through intelligent presence analytics.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    "developer-first-design": (
      <div className="flex flex-col lg:flex-row lg:items-start gap-[24px]">
        <div className="relative lg:w-[396px] h-[333px] w-full">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <div className="flex flex-col">
            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "comprehensive-docs"
                    ? null
                    : "comprehensive-docs"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium mb-2">
                RESTful API Architecture
              </h4>
              {expandedContent === "comprehensive-docs" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Clean, intuitive endpoints that follow REST principles.
                  Standard HTTP methods, JSON responses, and predictable URL
                  structures make integration straightforward for any
                  development team.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "intuitive-patterns"
                    ? null
                    : "intuitive-patterns"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Comprehensive Documentation
              </h4>
              {expandedContent === "intuitive-patterns" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Interactive API documentation with code examples in multiple
                  languages. Test endpoints directly in your browser and see
                  real responses before writing any code.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "rapid-integration"
                    ? null
                    : "rapid-integration"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Flexible Authentication
              </h4>
              {expandedContent === "rapid-integration" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Support for API keys, OAuth 2.0, and JWT tokens. Choose the
                  authentication method that best fits your application&apos;s
                  architecture and security requirements.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "developer-support"
                    ? null
                    : "developer-support"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Webhook Support
              </h4>
              {expandedContent === "developer-support" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Real-time notifications for identity events, attendance
                  changes, and security alerts. Keep your application
                  synchronized without constant polling.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    "built-for-scale": (
      <div className="flex flex-col lg:flex-row lg:items-start gap-[24px]">
        <div className="relative lg:w-[396px] h-[333px] w-full">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <div className="flex flex-col">
            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "auto-scaling" ? null : "auto-scaling"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium mb-2">
                Global Infrastructure
              </h4>
              {expandedContent === "auto-scaling" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Multi-region deployment ensures low latency regardless of
                  where your users are located. Automatic failover and load
                  balancing maintain performance during peak usage.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "global-cdn" ? null : "global-cdn"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Enterprise SLAs
              </h4>
              {expandedContent === "global-cdn" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  99.9% uptime guarantee with comprehensive monitoring and
                  alerting. Your application stays reliable even as you scale to
                  thousands of users.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "high-availability"
                    ? null
                    : "high-availability"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Flexible Pricing
              </h4>
              {expandedContent === "high-availability" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Usage-based pricing that grows with your application. Start
                  with our developer tier and scale seamlessly as your user base
                  expands.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>
          </div>
        </div>
      </div>
    ),
    "security-first": (
      <div className="flex flex-col lg:flex-row lg:items-start gap-[24px]">
        <div className="relative lg:w-[396px] h-[333px] w-full">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[16px] lg:w-[330px] w-full">
          <div className="flex flex-col">
            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "end-to-end-encryption"
                    ? null
                    : "end-to-end-encryption"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium mb-2">
                End-to-End Encryption
              </h4>
              {expandedContent === "end-to-end-encryption" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Biometric data is encrypted in transit and at rest using
                  industry-standard protocols. Templates are processed in secure
                  environments with no permanent storage of raw biometric
                  images.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "zero-trust-architecture"
                    ? null
                    : "zero-trust-architecture"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Data Sovereignty
              </h4>
              {expandedContent === "zero-trust-architecture" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Choose where your data is processed and stored. Regional
                  deployment options ensure compliance with local data residency
                  requirements.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

            <div
              className="py-4 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() =>
                setExpandedContent(
                  expandedContent === "compliance-standards"
                    ? null
                    : "compliance-standards"
                )
              }
            >
              <h4 className="text-[#ffffff] text-[16px] leading-[20px] tracking-[0%] font-medium">
                Transparent Policies
              </h4>
              {expandedContent === "compliance-standards" && (
                <div className="text-[#9EA3A2] leading-[20px] tracking-[0%] font-normal text-[14px] mt-2 transition-all duration-200 ease-out">
                  Clear documentation of data collection, processing, and
                  retention policies. Built-in tools for handling user consent
                  and data subject rights.
                </div>
              )}
            </div>
            <div className="border-t border-[#EAEAEA]"></div>

          
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section className="flex flex-col gap-[12px] w-full">
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
