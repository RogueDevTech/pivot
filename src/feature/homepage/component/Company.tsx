import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import img1 from "@/components/images/solution/homepage-woman.png";
import img2 from "@/components/images/solution/homepage-color.png";
import img3 from "@/components/images/solution/homepage-group.png";

const Company = () => {
  return (
    <section className="w-full">
      <div className="">
        <p className="leading-[100%] tracking-[0%] font-regular text-[#9EA3A2] text-[14px]">
          Company
        </p>
        <div>
          <h4 className="w-full mt-3 leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Building for Everyone,
          </h4>
          <h4 className="w-full leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Trusted by Enterprises
          </h4>
        </div>
      </div>
      <p className="text-[#9EA3A2] leading-[25px] mt-1 mb-3 max-w-[729px] text-[14px] tracking-[0%] font-regular">
        Our technology is the result of over two years of research and
        development. It features one of the most advanced AI infrastructure
        stacks in the industry. We have built our solutions from the ground up
        to support massive scale while maintaining an excellent developer
        experience.
      </p>
      <Button>Learn More</Button>
      <div className="mt-10 flex flex-col lg:flex-row gap-[10px] items-center h-full lg:h-[335px] w-full">
        <div className="relative w-full lg:w-[70%] h-[335px]">
          <Image src={img1} fill alt="image" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-[8px] w-full lg:w-[30%]">
          <div className="relative w-full lg:h-[163px] h-[300px]">
            <Image src={img2} fill alt="image" className="object-cover" />
          </div>
          <div className="relative w-full lg:h-[163px] h-[300px]">
            <Image src={img3} fill alt="image" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
