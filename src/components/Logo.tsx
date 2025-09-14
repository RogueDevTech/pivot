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
  }
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid0row-2 gap-[16px] w-full lg:w-[728px]">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center">
          <Image src={logo.src} alt={logo.alt} className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Logo;
