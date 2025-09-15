import React from "react";
import com1 from "@/components/images/company/company-one.png";
import com2 from "@/components/images/company/company-two.png";
import com3 from "@/components/images/company/company-three.png";
import Image from "next/image";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Header = () => {
  return (
    <section className=" flex flex-col gap-[40px] w-full lg:w-[729px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[#ffffff] text-[28px] leading-[36px] tracking-[0%] font-meduim">
            Powering the Next Generation of Intelligent Applications
          </h3>
          <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] font-regular">
            Pivot Labs is the foundational AI infrastructure platform that
            transforms how enterprises build, deploy, and scale intelligent
            applications. As an API-first infrastructure company, we provide the
            critical AI-driven systems that power breakthrough products across
            fintech, healthcare, e-commerce, and enterprise software.
          </p>
          <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] font-regular">
            Our solutions powers developers and companies worldwide with
            reliable, lightning-fast AI inference. Backed by leading investors
            and rapid growth, we’re building the essential AI infrastructure
            layer for the global economy
          </p>
        </div>
        <div className="flex flex-col h-full lg:h-[296px] lg:flex-row gap-[16px]">
          <div className="relative w-full">
            <Image
              src={com1}
              fill
              alt="com"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between h-auto">
            <div className="relative w-full h-[161px] ">
              <Image
                src={com2}
                fill
                alt="com"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-full h-[126px] w-full lg:w-[213px]">
              <Image
                src={com3}
                fill
                alt="com"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px] w-full lg:w-[620px]">
          <h3 className="text-[#FFFFFF] text-[20px] leading-[36px] tracking-[0%] font-meduim">
            Supported by the best
          </h3>
          <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] font-regular text-400">
            Pivot Labs is supported by incredible partners and sponsors who make
            it possible for a team of talented designers and engineers to build
            using our solutions full-time.
          </p>
          <Button>Become a Partner</Button>
        </div>
        <Logo />
      </div>
    </section>
  );
};

export default Header;
