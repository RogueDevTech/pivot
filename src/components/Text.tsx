// components/Text.tsx
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  as: Component = 'p', 
  className = '' 
}) => {
  const baseClasses = 'text-[#9EA3A2] leading-[100%] tracking-normal font-regular';
  
  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;