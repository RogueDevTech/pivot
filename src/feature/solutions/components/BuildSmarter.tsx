import Button from "@/components/Button";

import React from "react";
import Image from "next/image";
import img1 from "@/components/images/solution/solution-first.png";

const BuildSmarter = () => {
  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="">
        <h3 className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
          Why Developers Choose God Eye API
        </h3>
        <p className="w-full leading-[20px] mt-1 mb-5 tracking-[0%] max-w-[580px] text-[#9EA3A2] text-[14px]">
          Our API handles the infrastructure challenges of scaling biometric
          processing, managing encrypted templates, and ensuring sub-second
          response times.
        </p>
        <Button>Join the waitlist</Button>
      </div>
      <div className="relative w-full h-[296px]">
        <Image src={img1} fill alt="img" className="object-cover" />
      </div>
      <div className="flex flex-col lg:flex-row  items-center gap-[24px] w-full">
        <div className="flex flex-col gap-[16px] w-full lg:w-[355px]">
          <h3 className="w-full font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
            Build Smarter Applications with God Eye API
          </h3>
          <p className="text-[#9EA3A2] leading-[25px] font-regular text-[14px] tracking-[0%]">
            We are building God&apos;s Eye, an API delivering advanced identity
            intelligence. It eliminates the need for developers to build AI
            models, manage biometrics, or navigate compliance—removing barriers
            to next-gen verification and advancing the standard for secure
            digital identity.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] w-full lg:w-[355px]">
          <h3 className="w-full font-medium leading-[36px] text-[20px] tracking-[0%] text-[#ffffff]">
            System Identity Intelligence as a Service
          </h3>
          <p className="text-[#9EA3A2] leading-[25px] font-regular text-[14px] tracking-[0%]">
            God&apos;s Eye API turns complex identity verification into simple calls.
            From HR to education, events, or security, it powers biometric
            recognition, user tracking, and behavioral analysis—advancing
            digital trust so builders can focus on breakthrough user experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildSmarter;
