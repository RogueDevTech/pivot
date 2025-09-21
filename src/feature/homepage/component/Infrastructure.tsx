import React from "react";

import Button from "@/components/Button";
import img13 from "@/components/images/thirteen.png";
import img14 from "@/components/images/forteen.png";
import img15 from "@/components/images/fifteen.png";
import img16 from "@/components/images/sixteen.png";
import Image from "next/image";

const Infrastructure = () => {
  return (
    <section className="flex flex-col gap-[32px] w-full">
      <div className="">
        <h4 className="w-full mt-3 leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
          Build the Future of AI Infrastructure
        </h4>
        <p className="text-[#9EA3A2] leading-[25px] mt-1 mb-3 max-w-[729px] text-[14px] tracking-[0%] font-regular">
          Join team of talented engineers, researchers, and innovators who are
          making AI accessible to developers worldwide. Work on technology that
          powers breakthrough applications across every industry. Lets push the
          boundaries of possibilities and build the future.
        </p>
        <Button>Explore Roles</Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-[16px] w-full">
        <div className="relative w-full h-[200px] lg:h-[285px]">
          <Image src={img13} fill alt="img" className="object-cover" />
        </div>
        <div className="relative w-full h-[200px] lg:h-[285px]">
          <Image src={img14} fill alt="img" className="object-cover" />
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px] w-full">
          <div className="relative w-full h-[150px] lg:h-[135px]">
            <Image src={img15} fill alt="img" className="object-cover" />
          </div>
          <div className="relative w-full h-[150px] lg:h-[135px]">
            <Image src={img16} fill alt="img" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
