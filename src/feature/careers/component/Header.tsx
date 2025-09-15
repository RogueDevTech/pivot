import Button from "@/components/Button";
import InnerText from "@/components/InnerText";
import React from "react";
import Image from "next/image";
import pic1 from "@/components/images/careers/careers-one.png";
import pic2 from "@/components/images/careers/career-two.png";
import pic3 from "@/components/images/careers/career-three.png";
import pic4 from "@/components/images/careers/carers.four.png";

const Header = () => {
  return (
    <section className="flex flex-col gap-[32px] lg:w-[729px] w-full">
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[#ffffff] leading-[36px] tracking-[0%] text-[28px] font-meduim text-500">
          Build the Infrastructure That Powers Tomorrow AI
        </h3>
        <InnerText>
          Join a team of world-class engineers, researchers, and innovators who
          are solving the hardest problems in AI infrastructure. At Pivot Labs,
          you will work on technology that processes millions of API calls
          monthly and powers intelligent applications across industries that
          matter.
        </InnerText>
        <Button>View Openings</Button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-[16px] h-full lg:h-[364px]">
        <div className="relative w-full h-[364px] lg:w-[237px]">
          <Image
            src={pic1}
            fill
            alt="pic"
            className="object-fit w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-[16px]">
          <div className="relative lg:w-[237px] w-full h-[177px]">
            <Image
              src={pic2}
              fill
              alt="pic"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="relative lg:w-[237px] w-full h-[177px]">
            <Image
              src={pic3}
              fill
              alt="pic"
              className="object-fit w-full h-full"
            />
          </div>
        </div>
        <div className="relative w-full h-[364px] lg:w-[237px]">
          <Image
            src={pic4}
            fill
            alt="pic"
            className="object-fit w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
