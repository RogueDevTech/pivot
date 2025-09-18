import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import img1 from "@/components/images/solution/homepage-woman.png";
import img2 from "@/components/images/solution/homepage-color.png";
import img3 from "@/components/images/solution/homepage-group.png";

const Company = () => {
  return (
    <section className="flex flex-col gap-[24px] lg:w-[729px] w-full">
      <div className="flex flex-col gap-[12px]">
        <p className="leading-[100%] tracking-[0%] font-regular text-[#9EA3A2] text-[14px]">
          Company
        </p>
        <div>
          <h4 className="w-[542px] leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Building for Everyone,
          </h4>
          <h4 className="w-[542px] leading-[36px] trackking-[0%] text-[28px] text-[#ffffff] font-meduim">
            Trusted by Enterprises
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#9EA3A2] leading-[180%] text-[14px] tracking-[0%] font-regular">
          Our technology is the result of over two years of research and
          development. It features one of the most advanced AI infrastructure
          stacks in the industry. We have built our solutions from the ground up
          to support massive scale while maintaining an excellent developer
          experience.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between h-full lg:h-[335px] lg:w-[729px] w-full">
        <div className="relative lg:w-[473px] w-full h-[335px]">
          <Image
            src={img1}
            fill
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-[8px]">
          <div className=" w-full lg:w-[247px] lg:h-[163px] h-[300px]">
            <Image
              src={img2}
              width={500}
              height={300}
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-[247px] lg:h-[163px] h-[300px]">
            <Image
              src={img3}
              width={500}
              height={300}
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
