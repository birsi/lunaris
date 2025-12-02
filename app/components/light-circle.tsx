"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { isDecember19th } from "../lib/utils";

export default function LightCircle({
  count = 24,
  unlocked = [],
  today,
  onSpecialDayClick,
}: {
  count?: number;
  unlocked: number[];
  today?: number;
  onSpecialDayClick?: () => void;
}) {
  const router = useRouter();
  const items = Array.from({ length: count }, (_, i) => i + 1);
  const glowIntensity = today ? (today <= 6 ? 0.2 : today <= 12 ? 0.5 : today <= 18 ? 0.8 : 1) : 0.2;

  // Check if effective date is December 19th (considering date override)
  const december19thActive = isDecember19th();

  const handleSpecialClick = () => {
    if (onSpecialDayClick) {
      onSpecialDayClick();
    }
    // Navigate to day 19 with a delay for animation
    setTimeout(() => {
      router.push('/day/19');
    }, 800);
  };

  return (
    <div className="relative w-full h-full">
      {items.map((n, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const radius = 38;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const isSolved = unlocked.includes(n);
        const isToday = n === today;
        const isClickable = isSolved || (today !== undefined && n <= today);

        const circleContent = (
          <div
            style={{ left: `${x}%`, top: `${y}%`, zIndex: isToday ? 10 : 1 }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all
            ${isSolved ? "bg-aurora text-night z-index: 10 shadow-[0_0_28px_rgba(98,255,216,0.85)] ring-2 ring-gold/60" : isClickable ? "bg-[#111418] text-gold" : "bg-gray-900/20 text-gray-500/50 backdrop-blur-sm border border-gray-600/20"}
            ${isToday ? "scale-125 shadow-[0_0_38px_rgba(244,230,194,0.85)]" : isClickable ? "hover:scale-110" : ""}
            ${!isClickable ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span className="font-serif text-base md:text-lg">{n}</span>
          </div>
        );

        if (isClickable) {
          return (
            <Link key={n} href={`/day/${n}`}>
              {circleContent}
            </Link>
          );
        }

        return <div key={n}>{circleContent}</div>;
      })}
      <div id="lunaris-light">
        <div className="absolute left-1/2 top-1/2 w-24 h-24 md:w-28 md:h-28 bg-gold/20 rounded-full blur-lg pulse-glow" style={{ zIndex: 0, boxShadow: `0 0 ${70 * glowIntensity}px rgba(244,230,194,${0.5 * glowIntensity})` }}></div>
        <div className="absolute left-1/2 top-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full blur-sm pulse-glow" style={{ zIndex: 1, background: 'radial-gradient(circle, rgba(244,230,194,1) 0%, rgba(244,230,194,0.8) 50%, rgba(244,230,194,0.3) 100%)', boxShadow: `0 0 ${35 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity}), 0 0 ${18 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity})` }}></div>
        <div 
          className={`absolute left-1/2 top-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full pulse-glow ${december19thActive ? 'cursor-pointer hover:scale-125 transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,230,194,1)]' : ''}`}
          style={{ 
            zIndex: 2, 
            background: '#f4e6c2', 
            boxShadow: `0 0 ${25 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity}), 0 0 ${12 * glowIntensity}px rgba(255,255,255,${0.8 * glowIntensity})`,
            ...(december19thActive && {
              animation: 'pulse-glow 1.5s ease-in-out infinite, special-glow 3s ease-in-out infinite'
            })
          }}
          onClick={december19thActive ? handleSpecialClick : undefined}
        ></div>
      </div>
    </div>
  );
}
