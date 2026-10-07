"use client";
import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export default function SpotlightCard({ children, className = "", size = 250 }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-neon/30 transition-colors ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(0, 255, 65, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
