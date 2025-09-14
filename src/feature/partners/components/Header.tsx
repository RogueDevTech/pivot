import Button from "@/components/Button";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col gap-[16px] lg:w-[729px] w-full lg:w-[729px]">
      <h3 className="text-[#ffffff] text-[28px] leading-[36px] tracking-[0%] font-meduim">
        We are supported by incredible partners and sponsors who make everything
        possible
      </h3>
      <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] text-[14px] text-400 font-regular">
        We believe the future of AI infrastructure is collaborative, powering
        the next generation of intelligent applications across fintech,
        healthcare, e-commerce, and enterprise software. Our customers and
        partners rely on us to deliver AI infrastructure that is reliable,
        lightning-fast, and built for scale.
      </p>
      <Button>Become a Partner</Button>
    </section>
  );
};

export default Header;
