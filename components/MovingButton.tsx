'use client';
import React, { useState } from 'react';

const MovingButton = ({ children, className, }: { children: React.ReactNode, className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, textX: 0, textY: 0 });

  const handleMouseMove = (event: any) => {
    const directionX = event.clientX - window.innerWidth / 2 > 0 ? 7.5 : -7.5;
    const textX = event.clientX - window.innerWidth / 2 > 0 ? 3.5 : -3.5;
    const directionY = event.clientY - window.innerHeight / 2 > 0 ? 7.5 : -7.5;
    const textY = event.clientY - window.innerHeight / 2 > 0 ? 3.5 : -3.5;
    setPosition({ x: directionX, y: directionY, textX: textX, textY: textY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0, textX: 0, textY: 0 });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`transition-transform duration-500 ease-elastic bg-neutral-900 hover:bg-amber-500 text-white font-semibold py-4 px-8 text-lg md:text-lg rounded-full ${className}`}
    >
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translate(${position.textX}px, ${position.textY}px)` }}
      >
        {children}
      </div>
    </button>
  );
};

export default MovingButton;
