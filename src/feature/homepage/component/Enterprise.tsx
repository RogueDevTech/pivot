import React from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Image from "next/image";
import img10 from "@/components/images/tenth.jpg";
import img11 from "@/components/images/eleventh.png";
import img12 from "@/components/images/twelve-homepage.png";

const Enterprise = () => {
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <Text>Company</Text>
          <h3 className="leading-[36px] tracking-[0%] text-[28px] text-[#ffffff] font-medium text-500 w-[542px]">
            Building for Everyone, Trusted by Enterprises
          </h3>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="font-regular text-[#9EA3A2] tracking-[0%] text-[14px] leading-[180%] w-[728px]">
            Our technology represents the culmination of 2+ years of R&D
            investment and is one of the most sophisticated AI infrastructure
            stacks in the industry. We have built our solutions from the ground
            up to handle massive scale while maintaining the developer
            experience that teams love.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="relative w-[473px] h-[335px]">
          <Image
            src={img10}
            fill
            alt="ten"
            className="object-fit w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="relative w-[247px] h-[163px]">
            <Image
              src={img11}
              fill
              alt="img"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="relative w-[247px] h-[163px] ">
            <Image
              src={img12}
              fill
              alt="img"
              className="object-fit w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
