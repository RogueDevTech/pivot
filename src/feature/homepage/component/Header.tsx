import React from "react";
import Link from "next/link";
import firstImage from "@/components/images/first-homepage.png";
import secondImage from "@/components/images/second-homepage.png";
import Image from "next/image";

const Header = () => {
  return (
    <section className="flex flex-col gap-4 w-full lg:w-[729px]">
      <div className="flex flex-col gap-3">
        <h3 className="lg:w-[729px] w-full font-medium leading-[36px] text-[28px] tracking-normal text-[#ffffff]">
          Building open super intelligent infrastructure that powers you and
          your business.
        </h3>
        <p className=" lg:w-[729px] w-full leading-[100%] tracking-normal text-[#9EA3A2] text-400 text-[14px]">
          Skip the AI complexity. Our simple APIs give you production-ready AI
          capabilities, letting you focus on creating amazing products instead
          of managing infrastructure.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[24px] w-[100%]">
        <div className="border-1 border-[#ffffff] px-6 py-6 flex flex-col justify-between w-[360px] h-[632px]">
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[20px] leading-[36px] font-medium text-[#ffffff] font-500">
              Avery AI
            </h3>
            <div className="flex flex-col gap-[24px]">
              <p className="h-[72px] text-[#9EA3A2] tracking-normal leading-[100%] w-[304px]">
                Design is the backbone of every product. Avery AI is redefining
                how businesses create, manage, and scale design systems by
                bringing intelligence and adaptability into the mix
              </p>
              <ul className="flex flex-col gap-[20px] text-[#9EA3A2]">
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  {" "}
                  Intelligence platform that understands design context and user
                  intent.
                </li>
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  Provides predictive guidance for UX outcomes before designs
                  are shipped.
                </li>
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  Employs advanced AI to analyze visual consistency,
                  accessibility, and business impact of design decisions,{" "}
                </li>
              </ul>
              <div className="flex gap-4 items-center">
                <button className="px-[6px] w-[128px] h-[39px] bg-[#EDEDED] text-[#0A0A0A] font-regular text-[14px] leadind-[20px] tracking-normal">
                  Join Waitlist
                </button>
                <Link href={"/learn"} className="no-decoration">
                  <p className="text-[#9EA3A2] font-regular text-[14px] leadind-[20px] tracking-normal">
                    Learn More
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:w-[304px] w-full h-[198px]">
            <Image
              src={firstImage}
              alt="fill"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border-1 border-[#ffffff] px-6 py-6 flex flex-col justify-between w-[360px] h-[632px]">
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[20px] leading-[36px] font-medium text-[#ffffff] font-500">
              Gods Eye
            </h3>
            <div className="flex flex-col gap-[24px]">
              <p className="h-[72px] text-[#9EA3A2] tracking-normal leading-[100%] w-[304px]">
                Our API provides developers with powerful identity intelligence
                capabilities through simple, scalable endpoints. Built with
                advanced AI and computer vision.
              </p>
              <ul className="flex flex-col gap-[20px] text-[#9EA3A2]">
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  {" "}
                  Biometric Recognition: Facial verification, voice
                  authentication, and multi-modal ID
                </li>
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  Real-time Analytics: Attendance tracking, behavioral insights,
                  and anomaly detection
                </li>
                <li className="leading-[100%] text-[14px] font-regular tracking-normal">
                  Privacy-First Architecture: End-to-end encryption, GDPR
                  compliance, and secure template processing
                </li>
              </ul>
              <div className="flex gap-4 items-center">
                <button className="px-[6px] w-[128px] h-[39px] bg-[#EDEDED] text-[#0A0A0A] font-regular text-[14px] leadind-[20px] tracking-normal">
                  Join Waitlist
                </button>
                <Link href={"/learn"} className="no-decoration">
                  <p className="text-[#9EA3A2] font-regular text-[14px] leadind-[20px] tracking-normal">
                    Learn More
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:w-[304px] w-full h-[198px]">
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
