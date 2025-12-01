"use client";

import { useState, useEffect } from "react";

export default function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only render particles after client-side mount to avoid hydration mismatch
    queueMicrotask(() => setMounted(true));
  }, []);

  if (!mounted) {
    return null;
  }

  const dots = Array.from({ length: 34 });

  return (
    <div className="particles fixed inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 10 + Math.random() * 20;
        const size = 4 + Math.random() * 6;

        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
