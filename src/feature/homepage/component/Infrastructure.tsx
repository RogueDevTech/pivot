import Paragraph from "@/components/Paragraph";
import React from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import img13 from "@/components/images/thirteen.png";
import img14 from "@/components/images/forteen.png";
import img15 from "@/components/images/fifteen.png";
import img16 from "@/components/images/sixteen.png";
import Image from "next/image";

const Infrastructure = () => {
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[24px]">
        <Paragraph className="text-[#FFFFFF] lg:w-[465px] w-full text-[28px]">
          Build the Future of AI Infrastructure
        </Paragraph>
        <Text className="lg:w-[729px] w-full">
          Join team of talented engineers, researchers, and innovators who are
          making AI accessible to developers worldwide. Work on technology that
          powers breakthrough applications across every industry. Lets push the
          boundaries of possibilities and build the future.
        </Text>
        <Button>Explore Roles</Button>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="relative w-[243px] h-[277px]">
          <Image
            src={img13}
            fill
            alt="img"
            className="object-fit w-full h-full"
          />
        </div>
        <div className="relative w-[243px] h-[277px]">
          <Image
            src={img14}
            fill
            alt="img"
            className="object-fit w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-[16px]">
          <div className="relative w-[220px] h-[129px]">
            <Image
              src={img15}
              fill
              alt="img"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="relative w-[220px] h-[129px]">
            <Image
              src={img16}
              fill
              alt="img"
              className="object-fit w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
