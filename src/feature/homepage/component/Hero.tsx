import React from "react";
import Image, { StaticImageData } from "next/image";
import log1 from "@/components/images/logos/splice-logo.png";
import log2 from "@/components/images/logos/second-logo.png";
import log3 from "@/components/images/logos/logo-three.png";
import log4 from "@/components/images/logos/logo-four.png";
import log5 from "@/components/images/logos/logo-five.png";
import log6 from "@/components/images/logos/group-seven.png";
import log7 from "@/components/images/logos/logo-eight.png";
import log8 from "@/components/images/logos/logo-nine.png";
import log9 from "@/components/images/logos/logo-ten.png";
import img7 from "@/components/images/sixth-homepage.webp";
import img8 from "@/components/images/seventh-homepage.png";
import Button from "@/components/Button";
import Text from "@/components/Text";

interface Logo {
  src: StaticImageData | string;
  alt: string;
}

const Hero = () => {
  const logos: Logo[] = [
    { src: log1, alt: "Spike" },
    { src: log2, alt: "CymStore" },
    { src: log3, alt: "CarrotCredit" },
    { src: log4, alt: "Zap Creative" },
    { src: log5, alt: "Global Let" },
    { src: log6, alt: "Rogue" },
    { src: log7, alt: "Victoria Bros." },
    { src: log8, alt: "Workjeje" },
    { src: log9, alt: "Partner" },
  ];

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[24px]">
          <Text>Solutions/Products</Text>

          <h2 className="text-[#ffffff] leading-[36px] text-[28px] font-meduim w-[616px]">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid0row-2 gap-[16px] w-full lg:w-[728px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center">
              <Image src={logo.src} alt={logo.alt} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
