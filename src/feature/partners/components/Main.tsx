import React from "react";
import Image, { StaticImageData } from "next/image";
import par1 from "@/components/images/partner/product-one.png";
import par2 from "@/components/images/partner/product-two.png";
import par3 from "@/components/images/partner/product-three.png";
import par4 from "@/components/images/partner/product-tool.png";
import par5 from "@/components/images/partner/product-five.png";
import par6 from "@/components/images/partner/product-tool-2.png";
import par7 from "@/components/images/partner/product-seven.png";
import par8 from "@/components/images/partner/product-eight.png";
import par9 from "@/components/images/partner/product-nine.png";
import par10 from "@/components/images/partner/product-ten.png";
import InnerText from "@/components/InnerText";

const Main = () => {
  interface Storage {
    img: string | StaticImageData;
    text: string;
    textone: string;
  }
  const storage: Storage[] = [
    {
      img: par2,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par3,
      text: "Anaconda freed its engineers from maintaining custom documentation ...",
      textone: "Read story",
    },
    {
      img: par4,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par5,
      text: "Anaconda freed its engineers from maintaining custom documentation ...",
      textone: "Read story",
    },
    {
      img: par6,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par7,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par8,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par9,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
    {
      img: par10,
      text: "Anaconda freed its engineers from maintaining custom documentation infrastructure ...",
      textone: "Read story",
    },
  ];
  return (
    <section className="flex flex-col h-full gap-[24px] w-full lg:w-[729px]">
      <div className="relative w-full lg:w-[729px] h-[347px]">
        <Image
          src={par1}
          fill
          alt="par"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-[32px] w-full lg:w-[729px]">
        {storage.map((ftr, index) => (
          <div
            key={index}
            className="flex flex-col gap-[24px] justify-between h-auto"
          >
            <div className="relative lg:w-[359px] w-full h-[234px]">
              <Image
                src={ftr.img}
                alt="ftr"
                className="object-fit w-full h-full"
              />
            </div>
            <InnerText>{ftr.text}</InnerText>
            <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] font-regular text-400">
              {ftr.textone}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
