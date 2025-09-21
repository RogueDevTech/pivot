import Button from "@/components/Button";

import React from "react";
import Image from "next/image";
import com1 from "@/components/images/community/comminity-one.png";
import com2 from "@/components/images/community/community-two.png";
import com3 from "@/components/images/community/community-three.png";
import com4 from "@/components/images/community/community-four.png";
import Bigger from "@/components/Bigger";
const Header = () => {
  return (
    <section className="flex flex-col gap-[32px] w-full lg:w-[729px]">
      <div className="flex flex-col gap-[32px]">
        <div className="">
          <h3 className="text-[#ffffff] leading-[36px] tracking-[0%] text-[28px] font-meduim text-500">
            Bridging the Gap by Pivot Labs
          </h3>
          <p className="w-full leading-[25px] mt-1 mb-3 tracking-[0%] max-w-[690px] text-[#9EA3A2] text-400 text-[14px]">
            Our community of developers, designers, researchers, and AI
            practitioners is at the heart of everything we do. From first-time
            API integrators to experienced ML engineers building production
            systems, our community shapes the direction of AI infrastructure and
            helps each other succeed.
          </p>
          <Button>Join Community</Button>
        </div>
        <div className="flex flex-row w-full lg:w-[729px] justify-between gap-[16px]">
          <div className="relative w-full lg:w-[32%] h-[364px]">
            <Image
              src={com1}
              fill
              alt="com"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-full lg:w-[32%] h-[364px]">
            <Image
              src={com2}
              fill
              alt="com"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-full lg:w-[32%] h-[364px]">
            <Image
              src={com3}
              fill
              alt="com"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col lg:gap-[32px] gap-[14px]">
          <Bigger>Learn and Grow Together</Bigger>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 ">
            <div className="flex flex-col gap-3">
              <h5 className="leading-[100%] tracking-[0%] text-[#ffffff] font-meduim text-[16px]">
                Study Groups and Book Clubs
              </h5>
              <p className="leading-[180%] tracking-[0%] text-[14px] fomt-normal text-[#9EA3A2]">
                Join focused learning groups on AI infrastructure—from
                distributed systems and ethics to open source and startup
                building—diving deep through papers, projects, and
                collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="leading-[100%] tracking-[0%] text-[#ffffff] font-meduim text-[16px]">
                Mentorship Program
              </h5>
              <p className="leading-[180%] tracking-[0%] text-[14px] fomt-normal text-[#9EA3A2]">
                Our mentorship program connects you with seasoned AI
                infrastructure developers for code reviews, project guidance,
                skill growth, career advice, and community networking.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="leading-[100%] tracking-[0%] text-[#ffffff] font-meduim text-[16px]">
                Community-Driven Learning
              </h5>
              <p className="leading-[180%] tracking-[0%] text-[14px] fomt-normal text-[#9EA3A2]">
                Our community shares knowledge through tutorials, code
                templates, best-practice guides, wikis, and real-world case
                studies—helping everyone succeed.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-[729px] h-[232px]">
          <Image
            src={com4}
            fill
            alt="pic"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
