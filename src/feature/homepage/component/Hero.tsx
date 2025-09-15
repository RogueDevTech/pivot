import React from "react";
import Image from "next/image";
import img7 from "@/components/images/sixth-homepage.webp";
import img8 from "@/components/images/seventh-homepage.png";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Logo from "@/components/Logo";

const Hero = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <Text>Partners</Text>

          <h2 className="text-[#ffffff] leading-[36px] text-[28px] font-meduim lg:w-[616px] w-full">
            Trusted by Companies Building the Future of AI
          </h2>
          <p className="w-[728px] text-400 font-Regular leading-[180%] text-[14px] tracking-normal text-[#9EA3A2]">
            From fast-growing startups to Fortune 500 enterprises, developers
            choose Pivot Labs to power their most critical AI features.
          </p>
          <Button> Become a Partner</Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-fit">
          <div className=" relative w-[483px] h-[318px]">
            <Image
              src={img7}
              fill
              alt="AI Technology"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative w-[237px] h-[318px]">
            <Image
              src={img8}
              fill
              alt="AI Development"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <Logo />
      </div>
    </section>
  );
};

export default Hero;
