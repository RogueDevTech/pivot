"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/images/logo.png";
import { useSidebarStore } from "@/store/useSidebarStore";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((s) => s.toggle);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#292929]">
      <div className=" w-[90%] md:w-[77%] max-w-[1440px] mx-auto flex items-center h-[60px] px-4  md:px-5 justify-between">
        <div className=" flex items-center gap-2">
          <Image src={Logo} alt="logo" priority />
        </div>

        <div className="flex items-center gap-[15px]">
          <p className="font-geist text-[14px] text-[#fff] font-normal">
            Search
          </p>
          <Link href="/book-call" className="no-underline">
            <button className="cursor-pointer px-[6px] text-[14px] w-[88px] h-[32px] bg-[#EDEDED] text-[#0A0A0A] font-medium text-sm">
              Book Call
            </button>
          </Link>

          <button
            onClick={toggleSidebar}
            className="md:hidden text-white ml-3"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
