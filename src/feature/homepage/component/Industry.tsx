import Text from "@/components/Text";
import React from "react";
import img8 from "@/components/images/eight-remaining-image.webp";
import img9 from "@/components/images/ninth-homepage.png";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

const Industry = () => {
  return (
    <section className="flex flex-col gap-[8px] w-full">
      <div className="flex flex-col ">
        <Text>Solutions/Products</Text>
        <div className="">
          <h3 className=" text-[#FFFFFF] mt-3 leading-[36px] tracking-normal text-[28px] text-400 font-medium">
            AI Solutions Built for Your Industry
          </h3>
          <p className="text-[#9EA3A2] leading-[25px] mt-1 mb-5 max-w-[710px] tracking-normal text-[14px] w-full">
            From fraud detection in fintech to medical imaging in healthcare,
            Pivot Labs provides industry-specific AI capabilities that solve
            real business problems. Deploy proven solutions in days, not months.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[10px] w-full">
        <div className="flex flex-col gap-[20px] w-full">
          <div className="w-full h-[298px]">
            <Image
              src={img8}
              width={500}
              height={300}
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Paragraph className="w-full text-[#ffffff]">
              Powering to simplify their books and scale customer purchases
            </Paragraph>
            <Text>Solutions</Text>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className="w-full h-[298px]">
            <Image
              src={img9}
              width={500}
              height={300}
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Paragraph className="w-full text-[#ffffff]">
              Solving crowd identity search and verification in groups
            </Paragraph>
            <Text>APIs</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
