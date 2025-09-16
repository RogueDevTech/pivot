
"use client";
import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import keyboard from "@/components/images/Keyboard.png";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative flex">
      <FiSearch className="absolute left-[10px] top-[7px]" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#1A1A1A] outline-none py-[12px] px-[32px] w-full h-[32px] text-[rgba(136,136,136,1)] rounded-md font-geist font-normal leading-[100%] placeholder:text-[#888888] placeholder:font-geist placeholder:font-regular placeholder:leading-[100%]"
      />
      <Image
        src={keyboard}
        alt="Keyboard"
        className="absolute right-[10px] top-[6px]"
      />
    </div>
  );
};

export default SearchInput;
