"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useSidebarToggleStore } from "@/store/useSidebarToggleStore";
import clsx from "clsx";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");

  const { open, close } = useSidebarStore();
  const visible = useSidebarToggleStore((s) => s.visible);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const allItems = [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Solutions", path: "/solutions" },
      { name: "Research", path: "/research" },
      { name: "Company", path: "/company" },
      { name: "Partners", path: "/partners" },
      { name: "Careers", path: "/careers" },
      { name: "Community", path: "/community" },
      { name: "Blog", path: "/blog" },
      { name: "Book Call", path: "/book-call" },
      { name: "Help", path: "/help" },
      { name: "Feedback", path: "/feedback" },
    ];
    const current = allItems.find((item) => item.path === pathname);
    if (current) setActiveItem(current.name);
  }, [pathname]);

  const navItems = {
    main: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Solutions", path: "/solutions" },
      { name: "Research", path: "/research" },
    ],
    company: [
      { name: "Company", path: "/company" },
      { name: "Partners", path: "/partners" },
      { name: "Careers", path: "/careers" },
      { name: "Community", path: "/community" },
      { name: "Blog", path: "/blog" },
    ],
    support: [
      { name: "Book Call", path: "/book-call" },
      { name: "Help", path: "/help" },
      { name: "Feedback", path: "/feedback" },
    ],
  };

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className=" fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={close}
        />
      )}

      {/* Desktop Sidebar */}
      {visible && (
        <aside
          className={clsx(
            "sticky top-[60px] h-[calc(100vh-60px)] w-[250px] bg-black text-white flex flex-col shadow-lg border border-[#292929] overflow-y-auto no-scrollbar transition-transform z-40",
            "hidden md:flex"
          )}
        >
          <nav className="flex flex-col">
            <div className="px-5 py-5 border-b border-[#292929] sticky top-0 bg-black z-10">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Main */}
            <ul className="px-5 py-5 space-y-1 border-b border-[#292929]">
              {navItems.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex text-[14px] items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeItem === item.name && <ArrowIcon />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company */}
            <ul className="px-5 py-5 space-y-1 border-b border-[#292929]">
              {navItems.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex text-[14px] items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeItem === item.name && <ArrowIcon />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Support */}
            <ul className="px-5 py-5 space-y-1">
              {navItems.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex text-[14px] items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeItem === item.name && <ArrowIcon />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      {/* Mobile Sidebar */}
      {open && (
        <aside
          className={clsx(
            "fixed top-[60px] left-0 h-[calc(100vh-60px)] w-[80%] max-w-[300px] bg-black text-white flex flex-col shadow-lg border border-[#292929] overflow-y-auto no-scrollbar transition-transform z-40",
            open ? "translate-x-0" : "-translate-x-full",
            "md:hidden"
          )}
        >
          <nav className="flex flex-col">
            <div className="px-6 py-5 border-b border-[#292929] sticky top-0 bg-black z-10">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Main */}
            <ul className="px-6 py-5 space-y-4 border-b border-[#292929]">
              {navItems.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex text-[14px] items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company */}
            <ul className="px-6 py-5 space-y-4 border-b border-[#292929]">
              {navItems.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeItem === item.name && <ArrowIcon />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Support */}
            <ul className="px-6 py-5 space-y-4">
              {navItems.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={close}
                    className={`flex items-center justify-between py-1 ${
                      pathname === item.path
                        ? "text-[#FFFFFF]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeItem === item.name && <ArrowIcon />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default Sidebar;
