import Button from "@/components/Button";
import SolutionText from "@/components/SolutionText";
import Text from "@/components/Text";
import React from "react";
import Image from "next/image";
import img1 from "@/components/images/solution/solution-first.png";

const BuildSmarter = () => {
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <SolutionText className="text-[20px]">
          Why Developers Choose God Eye API
        </SolutionText>
        <Text className="lg:w-[583px] w-[100%]">
          Our API handles the infrastructure challenges of scaling biometric
          processing, managing encrypted templates, and ensuring sub-second
          response times.
        </Text>
        <Button>Join the waitlist</Button>
      </div>
      <div className="relative w-full lg:w-[729px] h-[296px]">
        <Image
          src={img1}
          fill
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[729px]">
        <div className="flex flex-col justify-between h-[215px] w-full lg:w-[355px]">
          <SolutionText className="text-[20px]">
            Build Smarter Applications with God Eye API
          </SolutionText>
          <p className="text-[#9EA3A2] leading-[180%] font-regular text-[14px] tracking-[0%]">
            We are building God’s Eye, an API delivering advanced identity
            intelligence. It eliminates the need for developers to build AI
            models, manage biometrics, or navigate compliance—removing barriers
            to next-gen verification and advancing the standard for secure
            digital identity.
          </p>
        </div>
        <div className="flex flex-col justify-between h-[215px] w-full lg:w-[355px]">
          <SolutionText className="text-[20px]">
            System Identity Intelligence as a Service
          </SolutionText>
          <p className="text-[#9EA3A2] leading-[180%] font-regular text-[14px] tracking-[0%]">
            God’s Eye API turns complex identity verification into simple calls.
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
