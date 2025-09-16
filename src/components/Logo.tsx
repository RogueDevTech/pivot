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

const Logo = () => {
  interface Logo {
    src: StaticImageData | string;
    alt: string;
    width: number;
    height: number;
  }
  const logos: Logo[] = [
    { src: log1, alt: "Spike", width: 81, height: 23 },
    { src: log2, alt: "CymStore", width: 144, height: 26 },
    { src: log3, alt: "CarrotCredit", width: 121, height: 30 },
    { src: log4, alt: "Zap Creative", width: 130, height: 27 },
    { src: log5, alt: "Global Let", width: 100, height: 43 },
    { src: log6, alt: "Rogue", width: 156, height: 30 },
    { src: log7, alt: "Victoria Bros.", width: 77, height: 30 },
    { src: log8, alt: "Workjeje", width: 109, height: 20 },
    { src: log9, alt: "Partner", width: 124, height: 27 },
  ];
  return (
    <div className="flex gap-[16px] flex-wrap justify-between w-full lg:w-[719px]">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative"
          style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
        >
          <Image src={logo.src} fill alt={logo.alt} className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Logo;
