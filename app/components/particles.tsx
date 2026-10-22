"use client";

// Deterministic pseudo-random in [0, 1) so render stays pure and SSR matches the client
const rand = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const dots = Array.from({ length: 34 }, (_, i) => ({
  left: rand(i + 1) * 100,
  delay: rand(i + 101) * 6,
  duration: 10 + rand(i + 201) * 20,
  size: 4 + rand(i + 301) * 6,
}));

export default function Particles() {
  return (
    <div className="particles fixed inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
