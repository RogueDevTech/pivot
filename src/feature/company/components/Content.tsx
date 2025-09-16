import React from "react";
import Image from "next/image";
import com4 from "@/components/images/company/company-four.png";
import com5 from "@/components/images/company/company-five.png";
import com6 from "@/components/images/company/company-six.png";
import com7 from "@/components/images/company/company-seven.png";

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
          <div className="flex flex-col gap-[8px]">
            <div>
              <h3 className="text-[#ffffff] leading-[36px] text-[20px] tracking-[0%] font-meduim">
                Built for Scale,{" "}
              </h3>
              <p className="text-[#ffffff] leading-[36px] text-[20px] tracking-[0%] font-meduim">
                Designed for Developers
              </p>
            </div>
            <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] font-400">
              Our technology represents the culmination of 2+ years of R&D
              investment and is one of the most sophisticated AI infrastructure
              stacks in the industry. We have built our platform from the ground
              up to handle massive scale while maintaining the developer
              experience that teams love.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-[12px]">
            <div className="relative w-full h-[202px]">
              <Image
                src={com4}
                fill
                alt="com"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[8px]">
              <div className="relative w-full h-[206px] lg:w-[437px]">
                <Image
                  src={com5}
                  fill
                  alt="com"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-[8px]">
                <div className="relative w-full h-[99px] lg:w-[285px] ">
                  <Image
                    src={com6}
                    fill
                    alt="com"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative w-full h-[99px] lg:w-[285px]">
                  <Image
                    src={com7}
                    fill
                    alt="com"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] mt-[24px]">
        <h3 className="text-[#ffffff] leading-[36px] text-[20px] font-meduim">
          Our Values Drive Everything We Do
        </h3>
        <div className="grid grid-cols-1 gap-[24px] w-full lg:w-[729px] lg:grid-cols-3 justify-between">
          {content.map((ftr, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] w-full lg:w-[216px]"
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[100%] tracling-[0%] text-500">
                {ftr.header}
              </h3>
              <p className="text-[#9EA3A2] leading-[180%] text-[14px] font-regular">
                {ftr.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
