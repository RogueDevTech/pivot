import React from "react";

interface TextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const InnerText: React.FC<TextProps> = ({
  children,
  as: Bigger = "h5",
  className = "",
}) => {
  const baseClasses =
    "font-normal text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%]";

  return <Bigger className={`${baseClasses} ${className}`}>{children}</Bigger>;
};

export default InnerText;
