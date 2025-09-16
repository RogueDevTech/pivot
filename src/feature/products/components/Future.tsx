import React from "react";
import img1 from "@/components/images/first-homepage.png";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import Text from "@/components/Text";
import Button from "@/components/Button";

const Future = () => {
  return (
    <section className="flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[24px]">
        <Paragraph className="lg:w-[596px] w-full lg:text-[28px] text-[18px]">
          Avery AI: The Future of Design Intelligence
        </Paragraph>
        <Text className="lg:w-[583px] w-full">
          While most design tools focus on creation, Avery AI focuses on
          intelligence. Rather than simply providing another canvas for
          designers to work on
        </Text>
        <Button>Join the waitlist</Button>
      </div>
      <div className="relative lg:w-[728px] w-[100%] h-[296px]">
        <Image src={img1} fill alt="img" className="object-fit w-full h-full" />
      </div>
    </section>
  );
};

export default Future;
