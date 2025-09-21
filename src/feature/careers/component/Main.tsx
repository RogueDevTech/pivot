import Bigger from "@/components/Bigger";

import React from "react";
import pic5 from "@/components/images/careers/career-five.png";
import Image from "next/image";
import InnerText from "@/components/InnerText";
import Button from "@/components/Button";

const Main = () => {
  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="flex flex-col gap-8 w-full">
        <Bigger>Why Choose Pivot Labs?</Bigger>
        <div className="flex flex-col lg:flex-row gap-[32px] w-full">
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <h4 className="text-[16px] leading-[20px] tracking-[0%] font-medium text-[#FFFFFF]">
              Work with Exceptional People
            </h4>
            <p className="w-full leading-[25px] tracking-[0%] text-[14px] text-[#9EA3A2]">
              Our team brings experience from top tech, PhDs, and engineers
              who&apos;ve scaled to billions. Together, we&apos;re not just learning from
              the best—we&apos;re pushing what&apos;s possible.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <h4 className="text-[16px] leading-[20px] tracking-[0%] font-medium text-[#FFFFFF]">
              Shape the Future of AI Infrastructure
            </h4>
            <p className="w-full leading-[25px] tracking-[0%] text-[14px] text-[#9EA3A2]">
              We&apos;re a global team with a close-knit startup culture, built for
              remote collaboration and distributed excellence—wherever you work
              from.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        <Bigger>What We Offer</Bigger>
        <div className="flex flex-col lg:flex-row gap-[16px] w-full">
          <div className="relative w-full lg:w-[40%] h-[250px] lg:h-[373px]">
            <Image
              src={pic5}
              fill
              alt="pic"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[16px] w-full lg:w-[60%]">
            <div className="flex flex-col gap-[8px]">
              <h5 className="text-[16px] text-[#ffffff] leading-[20px] tracking-[0%] font-medium">
                Compensation That Reflects Your Value
              </h5>
              <InnerText>
                We offer top-tier salaries, meaningful equity, and a transparent
                framework with annual refreshers—so pay grows with impact.
              </InnerText>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h5 className="text-[16px] text-[#ffffff] leading-[20px] tracking-[0%] font-medium">
                Flexible Work That Works for You
              </h5>
              <InnerText>
                We&apos;re remote-first with flexible work, family leave, and
                sabbaticals—balanced by retreats and in-person collaboration.
              </InnerText>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h5 className="text-[16px] text-[#ffffff] leading-[20px] tracking-[0%] font-medium">
                Unique Opportunities
              </h5>
              <InnerText>
                We give 20% time for passion projects and open source, fueling
                platform innovation—plus access to cutting-edge AI research and
                global collaborators.
              </InnerText>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        <p className="text-[#9EA3A2] leading-[20px] tracking-[0%] text-[14px] font-regular">
          Openings
        </p>
        <div className="flex flex-col gap-[16px] w-full">
          <p className="text-[#fff] leading-[20px] tracking-[0%] text-[20px] font-medium">
            We&apos;re Always Looking for Great People
          </p>
          <p className="w-full leading-[25px] tracking-[0%] text-[#9EA3A2] text-[14px] font-regular">
            We may not have open roles right now, but we&apos;re always on the
            lookout for curious minds, builders, and problem-solvers who want to
            make an impact.
          </p>
          <Button>Lets Connect</Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
