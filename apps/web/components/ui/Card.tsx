import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover 
    ? 'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' 
    : '';
  
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
