import React from "react";
import Image from "next/image";
import img7 from "@/components/images/sixth-homepage.webp";
import img8 from "@/components/images/seventh-homepage.png";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Logo from "@/components/Logo";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-[32px]">
        <div className="">
          <Text>Partners</Text>
          <h2 className="text-[#ffffff] mt-3 leading-[36px] text-[28px] font-meduim w-full">
            Trusted by Companies Building the Future of AI
          </h2>
          <p className="w-full  mt-1 mb-5 text-400 font-Regular leading-[25px] text-[14px] max-w-[710px]  tracking-[0%] text-[#9EA3A2]">
            From fast-growing startups to Fortune 500 enterprises, developers
            choose Pivot Labs to power their most critical AI features.
          </p>
          <Link href="/partners" className="no-underline">
          <Button> Become a Partner</Button>
          </Link>
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-8 w-fit">
          <div className=" relative lg:w-[483px] h-[318px] w-[100%]">
            <Image
              src={img7}
              fill
              alt="AI Technology"
              className="lg:object-cover object-contain"
            />
          </div>
          <div className="relative lg:w-[237px] h-[318px] w-[100%]">
            <Image
              src={img8}
              fill
              alt="AI Development"
              className="lg:object-cover object-contain"
            />
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          {/* First image - Bigger */}
          <div className="relative w-full lg:w-[70%] h-[250px] lg:h-[318px]">
            <Image
              src={img7}
              fill
              alt="AI Technology"
              className="object-cover"
            />
          </div>
          <div className="relative w-full lg:w-[30%] h-[250px] lg:h-[318px]">
            <Image
              src={img8}
              fill
              alt="AI Development"
              className="object-cover"
            />
          </div>
        </div>

        <Logo />
      </div>
    </section>
  );
};

export default Hero;
