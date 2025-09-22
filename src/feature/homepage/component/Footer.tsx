"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className=" w-full lg: flex flex-col gap-[16px]">
      <p className="text-sm">Keep up to date</p>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex relative justify-center items-center w-full md:w-auto">
          <FiSearch className="absolute left-[10px] top-[10px]" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="bg-[#1A1A1A] text-[#fff] h-[35px] px-[32px] py-[15x] rounded-md text-[14px] w-[225px] placeholder:text-[#888888] outline-none padding-none"
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
            href="/privacy"
            className="hover:no-underline  leading-[100%] tracking-[0%] font-regular text-[#ffffff]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
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
