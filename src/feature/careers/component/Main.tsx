import Bigger from "@/components/Bigger";

import React from "react";
import pic5 from "@/components/images/careers/career-five.png";
import Image from "next/image";
import InnerText from "@/components/InnerText";

const Main = () => {
  return (
    <section className="flex flex-col gap-[48px] w-full lg:w-[729px]">
      <div className="flex flex-col gap-8">
        <Bigger>Why Choose Pivot Labs?</Bigger>
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[729px]">
          <div className="flex flex-col gap-2">
            <h4 className="text-[16px] leading-[100%] tracking-[0%] font-medium text-[#FFFFFF]">
              Work with Exceptional People
            </h4>
            <p className="w-[333.15px] leading-[180%] tracking-[0%] text-[14.5px] text-[#9EA3A2]">
              Our team brings experience from top tech, PhDs, and engineers
              who’ve scaled to billions. Together, we’re not just learning from
              the best—we’re pushing what’s possible.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[16px] leading-[100%] tracking-[0%] font-medium text-[#FFFFFF]">
              Shape the Future of AI Infrastructure
            </h4>
            <p className="w-[333.15px] leading-[180%] tracking-[0%] text-[15.5px] text-[#9EA3A2]">
              We’re a global team with a close-knit startup culture, built for
              remote collaboration and distributed excellence—wherever you work
              from.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] w-full lg:w-[729px]">
        <Bigger>What We Offer</Bigger>
        <div className="flex flex-col lg:flex-row gap-[16px] justify-between">
          <div className="relative lg:w-[303px] w-full h-[373px] ">
            <Image
              src={pic5}
              fill
              alt="pic"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[8px] justify-between w-full lg:w-[395px]">
            <div className="flex flex-col gap-[4px]">
              <h5 className="text-[16px] text-[#ffffff] leading-[100%] tracking-[0%] font-medium">
                Compensation That Reflects Your Value
              </h5>
              <InnerText className="w-[385px]">
                We offer top-tier salaries, meaningful equity, and a transparent
                framework with annual refreshers—so pay grows with impact.
              </InnerText>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h5>Flexible Work That Works for You</h5>
              <InnerText className="w-[385px]">
                We’re remote-first with flexible work, family leave, and
                sabbaticals—balanced by retreats and in-person collaboration.
              </InnerText>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h5>Unique Opportunities</h5>
              <InnerText className="w-[385px]">
                We give 20% time for passion projects and open source, fueling
                platform innovation—plus access to cutting-edge AI research and
                global collaborators.
              </InnerText>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="text-[#9EA3A2] leading-[100%] tracking-[0%] text-[14px] font-regular text-400">
          Openings
        </p>
        <div className="flex flex-col gap-[24px]">
          <Bigger>We’re Always Looking for Great People</Bigger>
          <InnerText>
            We may not have open roles right now, but we’re always on the
            lookout for curious minds, builders, and problem-solvers who want to
            make an impact.
          </InnerText>
          <Bigger>Lets Connect</Bigger>
        </div>
      </div>
    </section>
  );
};

export default Main;
