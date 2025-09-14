import React from "react";

interface TextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const Minisize: React.FC<TextProps> = ({
  children,
  as: Bigger = "h5",
  className = "",
}) => {
  const baseClasses =
    "font-medium font-[#ffffff] text-[14px] leading-[36px] tracking-[0%] align-middle";

  return <Bigger className={`${baseClasses} ${className}`}>{children}</Bigger>;
};

export default Minisize;
