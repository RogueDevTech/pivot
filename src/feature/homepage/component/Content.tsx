import thirdImage from "@/components/images/third-image.webp";
import forthImage from "@/components/images/forth-homepage.png";
import fifthImage from "@/components/images/missing-content.png";
import Image, { StaticImageData } from "next/image";

import React from "react";
import Button from "@/components/Button";
import Text from "@/components/Text";
interface ResearchCard {
  id: number;
  title: string;
  imageSrc: string | StaticImageData;
}

const Content: React.FC = () => {
  const researchCards: { [key: string]: ResearchCard[] } = {
    privacy: [
      {
        id: 1,
        title:
          "Dynamic Multi-Model Orchestration for Scalable AI Infrastructure",
        imageSrc: thirdImage,
      },
    ],

    carbon: [
      {
        id: 2,
        title:
          "Privacy-Preserving Federated Learning for Enterprise AI Applications",
        imageSrc: forthImage,
      },
    ],

    dynamic: [
      {
        id: 3,
        title:
          "Carbon-Aware Edge AI: Sustainable Computing for Ultra-Low Latency Applications",
        imageSrc: fifthImage,
      },
    ],
  };

  return (
    <div className=" mt-6 flex flex-col justify-between gap-[25px] w-full mx-auto">
      <section className="">
        <Text>Research</Text>
        <h2 className="text-[#FFFFFF] mt-3 leading-[36px] text-[28px] font-medium">
          Advancing the Future of AI Infrastructure
        </h2>
        <p className="text-[#9EA3A2] mt-1 mb-5 font-regular leading-[25px] text-[14px] max-w-[700px] tracking-[0%] w-full">
          Our research drives breakthrough innovations in AI performance,
          efficiency, and accessibility. We publish our findings and contribute
          to the open-source community to accelerate progress for everyone.
        </p>
        <Button>Read More</Button>
      </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[8px]">
        <div>
          {researchCards.privacy.map((card) => (
            <div key={card.id} className=" w-full flex flex-col gap-[8px]">
              <div className="relative h-[364px] lg: w-[237px] w-full">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="lg:w-[219px] w-full text-[#ffffff] leading-[20px] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {researchCards.carbon.map((card) => (
            <div key={card.id} className="flex flex-col gap-[8px]">
              <div className="relative h-[176px] lg: w-[237px] w-full">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="lg:w-[200px] text-[#ffffff] leading-[20px] w-full rotate-0 text-[16px] tracking-[0%] font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {researchCards.dynamic.map((card) => (
            <div key={card.id} className="flex flex-col gap-[8px]">
              <div className="relative h-[295px] lg: w-[237px] w-full">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="lg:w-[219px] w-full text-[#ffffff] leading-[20px] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
