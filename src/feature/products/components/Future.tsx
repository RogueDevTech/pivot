import React from "react";
import img1 from "@/components/images/first-homepage.png";
import Image from "next/image";

import Button from "@/components/Button";

const Future = () => {
  return (
    <section className="flex flex-col gap-[48px] w-full">
      <div className="">
        <h3 className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
          Avery AI: The Future of Design Intelligence
        </h3>
        <p className="w-full leading-[20px] mt-1 mb-5 tracking-[0%] max-w-[580px] text-[#9EA3A2] text-[14px]">
          While most design tools focus on creation, Avery AI focuses on
          intelligence. Rather than simply providing another canvas for
          designers to work on
        </p>
        <Button>Join the waitlist</Button>
      </div>
      <div className="relative w-full h-[296px]">
        <Image src={img1} fill alt="img" className="object-cover" />
      </div>
    </section>
  );
};

export default Future;
