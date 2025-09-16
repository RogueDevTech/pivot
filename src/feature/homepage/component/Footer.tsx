"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full lg:w-[729px] flex flex-col gap-[16px]">
      <p className="text-sm">Keep up to date</p>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex relative justify-center items-center w-full md:w-auto">
          <FiSearch className="absolute left-[10px] top-[7px]" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="bg-[#1A1A1A] text-[#888888] h-[32px] px-[32px] py-[12x] rounded-md text-sm w-[215px] placeholder:text-[#888888] outline-none padding-none"
          />
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:example@example.com"
            className="hover:no-underline leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:no-underline leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:no-underline leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            X
          </a>
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="/privacy-policy"
            className="hover:no-underline  leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:no-underline  leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
