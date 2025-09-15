import React from "react";

interface TextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const Bigger: React.FC<TextProps> = ({
  children,
  as: Bigger = "h3",
  className = "",
}) => {
  const baseClasses =
    "font-medium text-[#ffffff] text-[20px] leading-[36px] tracking-[0%] align-middle";

  return <Bigger className={`${baseClasses} ${className}`}>{children}</Bigger>;
};

export default Bigger;
