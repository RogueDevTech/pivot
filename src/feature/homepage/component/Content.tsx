import thirdImage from "@/components/images/third-image.webp";
import forthImage from "@/components/images/forth-homepage.png";
import fifthImage from "@/components/images/fifth-homepage.jpg";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "@/components/Button";
import Text from "@/components/Text";

// Define the interface for research cards
interface ResearchCard {
  id: number;
  title: string;
  imageSrc: string | StaticImageData;
}

const Content: React.FC = () => {
  // Update the researchCards object with proper typing
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
    <div className="flex flex-col justify-between gap-[48px]">
      <section className="flex flex-col gap-[24px]">
        <Text>Research</Text>
        <h2 className="text-[#FFFFFF] leading-[36px] text-[28px] font-medium">
          Advancing the Future of AI Infrastructure
        </h2>
        <p className="text-[#9EA3A2] font-regular leading-[180%] text-[14px] w-[728px]">
          Our research drives breakthrough innovations in AI performance,
          efficiency and accessibility. We publish our findings and carefully
          tie to the open-source community to accelerate progress for everyone.
        </p>
        <Button> Read More</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-[8px]">
        <div>
          {researchCards.privacy.map((card) => (
            <div key={card.id} className="flex flex-col gap-[24px]">
              <div className="relative h-[364px] w-[237px]">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="w-[219px] text-[#ffffff] leading-[100%] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {researchCards.carbon.map((card) => (
            <div key={card.id} className="flex flex-col gap-[24px]">
              <div className="relative h-[176px] w-[237px]">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="w-[219px] text-[#ffffff] leading-[100%] text-[16px] tracking-normal font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {researchCards.dynamic.map((card) => (
            <div key={card.id} className="flex flex-col gap-[24px]">
              <div className="relative h-[284px] w-[237px]">
                <Image
                  src={card.imageSrc}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="w-[219px] text-[#ffffff] leading-[100%] text-[16px] tracking-normal font-medium">
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
