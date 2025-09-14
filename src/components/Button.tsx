// components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button',
  className = '' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[180px] h-[41px] bg-[#EDEDED] text-[14px] hover:bg-[#EDEDED]/70 text-[#0A0A0A] font-regular leading-[20px] tracking-normal px-[6px] transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;