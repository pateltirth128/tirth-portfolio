"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";

const PHONE = "+13065015052"; 

export default function CoffeeCall({ className = "" }: { className?: string }) {
  const [note, setNote] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isPhone = /Android|iPhone|iPod|Windows Phone|Mobile/i.test(navigator.userAgent);
    if (!isPhone) {
      e.preventDefault();
      setNote(true);
      setTimeout(() => setNote(false), 2000);
    }
  };

  return (
    <span className="relative inline-flex">
      <a
        href={`tel:${PHONE}`}
        onClick={handleClick}
        className={className}
        title="Coffee chat"
        aria-label="Call me for a coffee chat"
      >
        <Coffee size={18} />
      </a>
      {note && (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded border border-neon/50 bg-dark px-2 py-1 font-mono text-xs text-neon">
          Call from your phone, no WEB support!
        </span>
      )}
    </span>
  );
}