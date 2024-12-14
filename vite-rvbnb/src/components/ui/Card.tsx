import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-lg p-6
        ${hover ? 'transform transition-transform hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};