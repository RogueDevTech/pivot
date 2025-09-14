import React from "react";
import Img1 from "@/components/images/company/company-eight.png";
import Img2 from "@/components/images/company/company-nine.png";
import Image, { StaticImageData } from "next/image";
import InnerText from "@/components/InnerText";
import Bigger from "@/components/Bigger";
import Minisize from "@/components/Minisize";

const Main = () => {
  interface BuildItem {
    img: string | StaticImageData;
    header: string;
    para: string;
  }

  const array: BuildItem[] = [
    {
      img: Img1,
      header: "Commitment to Responsible AI",
      para: "We're committed to building AI infrastructure that benefits society. Our AI Ethics Advisory guides our development of fair, transparent, and beneficial AI systems. We implement comprehensive algorithmic auditing and maintain the highest standards for AI safety and ethics.",
    },
    {
      img: Img2,
      header: "Diversity and Inclusion",
      para: `Our team reflects the global developer community we serve, with 42% women and 45% of leadership roles held by underrepresented groups. 
We have active Employee Resource Groups, inclusive hiring practices, and maintain 98%+ pay equity across all demographics.`,
    },
  ];
  return (
    <section className="flex flex-col gap-[16px] w-full lg:w-[729px]">
      <div className="flex lg:flex-row flex-col gap-[16px] justify-between">
        {array.map((ftr, index) => (
          <div
            key={index}
            className="flex flex-col gap-[16px] justify-between lg:w-[357px] w-full"
          >
            <div className="relative w-full h-[189px] lg:w-[357px]">
              <Image
                src={ftr.img}
                alt="img"
                className="object-fit w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-[16px] justify-between h-auto border-2 border-[transparent]">
              <Minisize className="">{ftr.header}</Minisize>
              <InnerText>{ftr.para}</InnerText>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[16px]">
        <Bigger>The Future We are Building Together</Bigger>
        <InnerText>
          We are not just building an API platform—we are creating the
          infrastructure layer that will power the next generation of
          intelligent applications. From healthcare diagnostics that save lives
          to financial systems that democratize access to capital, the
          applications built on Pivot Labs are solving humanity most important
          challenges.
        </InnerText>
        <InnerText>
          Whether you are a developer looking to integrate AI into your
          application, an enterprise seeking to transform your business, or a
          researcher pushing the boundaries of what is possible, Pivot Labs
          provides the foundation you need to turn your vision into reality.
        </InnerText>
        <InnerText>
          Ready to start building? Get in touch with our team to learn how we
          can help power your next breakthrough application.
        </InnerText>
      </div>
    </section>
  );
};

export default Main;
