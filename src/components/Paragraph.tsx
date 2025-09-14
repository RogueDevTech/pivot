// components/Paragraph.tsx

import React from 'react';

interface TextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Paragraph: React.FC<TextProps> = ({ 
  children, 
  as: Paragraph = 'p', 
  className = '' 
}) => {
  const baseClasses = "font-medium text-[18px] leading-[100%] tracking-[0%] align-middle";
  
  return (
    <Paragraph className={`${baseClasses} ${className}`}>
      {children}
    </Paragraph>
  );
};

export default Paragraph;