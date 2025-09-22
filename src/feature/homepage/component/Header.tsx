import React from "react";
import Link from "next/link";
import firstImage from "@/components/images/first-homepage.png";
import secondImage from "@/components/images/second-homepage.png";
import Image from "next/image";

const Header = () => {
  return (
    <section className=" flex flex-col gap-4 w-full ">
      <div className="mt-3 flex flex-col gap-3">
        <h3 className="w-full font-medium leading-[36px] max-w-[600px] text-[28px] tracking-[0%] text-[#ffffff]">
          Building open super intelligent infrastructure that powers you and
          your business.
        </h3>
        <p className="w-full leading-[20px] tracking-[0%] max-w-[690px] text-[#9EA3A2] text-400 text-[14px]">
          Skip the AI complexity. Our simple APIs give you production-ready AI
          capabilities, letting you focus on creating amazing products instead
          of managing infrastructure.
        </p>
      </div>
      <div className=" mt-4 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-[16px] w-full">
        <div className="border-1 border-[#ffffff] px-4 py-6 lg:px-6 lg:py-7  w-full  ">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[20px] leading-[36px] font-medium tracking-[0%] text-[#ffffff] font-500">
              Avery AI
            </h3>
            <div className="flex flex-col gap-[20px] justify-between">
              <p className="text-[#9EA3A2] font-regular tracking-[0%] leading-[22px] text-[14px] w-full">
                Design is the backbone of every product. Avery AI is redefining
                how businesses create, manage, and scale design systems by
                bringing intelligence and adaptability into the mix
              </p>
              <ul className="pl-[16px] text-[14px] leading-[26px] font-regular text-[#9EA3A2] w-full">
                <li className="space-y-2 list-disc">
                  {" "}
                  Intelligence platform that understands design context and user
                  intent.
                </li>
                <li className="space-y-2 list-disc">
                  Provides predictive guidance for UX outcomes before designs
                  are shipped.
                </li>
                <li className="space-y-2 list-disc">
                  Employs advanced AI to analyze visual consistency,
                  accessibility, and business impact of design decisions,{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button className="cursor-pointer px-[6px] w-full sm:w-[128px] h-[39px] bg-[#EDEDED] text-[#0A0A0A] font-regular text-[14px] leading-[20px] tracking-normal hover:bg-[#D4D4D4] transition-colors">
                Join Waitlist
              </button>
              <Link href={"/products"} className="no-decoration">
                <button className="cursor-pointer px-[6px] w-full sm:w-[128px] h-[39px] bg-transparent text-[#9EA3A2] font-regular text-[14px] leading-[20px] tracking-normal hover:bg-[#9EA3A2] hover:text-black transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-6 w-full h-[194px]">
            <Image
              src={firstImage}
              alt="fill"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border-1 border-[#ffffff] px-4 py-6 lg:px-6 lg:py-7  w-full  ">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[20px] leading-[36px] font-medium tracking-[0%] text-[#ffffff] font-500">
              Gods Eye
            </h3>
            <div className="flex flex-col gap-[20px] justify-between">
              <p className="text-[#9EA3A2] font-regular tracking-[0%] leading-[22px] text-[14px] w-full">
                Our API provides developers with powerful identity intelligence
                capabilities through simple, scalable endpoints. Built with
                advanced AI and computer vision.
              </p>
              <ul className="pl-[16px] text-[14px] leading-[26px] font-regular text-[#9EA3A2] w-full">
                <li className="space-y-2 list-disc">
                  {" "}
                  Biometric Recognition: Facial verification, voice
                  authentication, and multi-modal ID
                </li>
                <li className="space-y-2 list-disc">
                  Real-time Analytics: Attendance tracking, behavioral insights,
                  and anomaly detection
                </li>
                <li className="space-y-2 list-disc">
                  Privacy-First Architecture: End-to-end encryption, GDPR
                  compliance, and secure template processing
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button className="cursor-pointer px-[6px] w-full sm:w-[128px] h-[39px] bg-[#EDEDED] text-[#0A0A0A] font-regular text-[14px] leading-[20px] tracking-normal hover:bg-[#D4D4D4] transition-colors">
                Join Waitlist
              </button>
              <Link href={"/solutions"} className="no-decoration">
                <button className="cursor-pointer px-[6px] w-full sm:w-[128px] h-[39px] bg-transparent text-[#9EA3A2] font-regular text-[14px] leading-[20px] tracking-normal hover:bg-[#9EA3A2] hover:text-black transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-6 w-full h-[194px]">
            <Image
              src={secondImage}
              alt="fill"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
