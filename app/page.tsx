'use client'

import React, { useEffect, useState } from 'react'
import LightCircle from './components/light-circle'
import { useLocalProgress } from './lib/useLocalProgress'
import { getCurrentDayBase, getOverrideDay } from './lib/utils'
import { Button } from './components/ui/button'
import { useRouter } from 'next/navigation'
import { riddles } from './lib/riddles'

function DefaultHome() {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="p-10 relative z-10 page-content">
      <h1 className="text-4xl font-serif mb-2">Willkommen zum Advent-Abenteuer</h1>
      <p className="opacity-90">Scanne deinen persönlichen QR-Code, um das mystische Portal zu öffnen.</p>

      {isDev && (
        <div className="mt-6">
          <p className="opacity-60 text-sm">Kein QR-Code? Testlogin:</p>
          <a href={`/auth?t=test`} className="mt-2 inline-block">
            <Button asChild variant="primary">Testlogin</Button>
          </a>
        </div>
      )}
    </div>
  );
}

function HomePage({ token, user, hasOverride }: { token: string; user: string; hasOverride: boolean }) {
  const { progress } = useLocalProgress(token);

  // Use base date for initial render to match SSR; apply override after mount
  const [today, setToday] = useState(() => getCurrentDayBase());

  useEffect(() => {
    const apply = () => {
      setToday(getOverrideDay() ?? getCurrentDayBase());
    };
    apply(); // apply immediately after mount
    window.addEventListener('storage', apply);
    return () => window.removeEventListener('storage', apply);
  }, []);

  const handleLogout = () => {
    if (confirm('Möchtest du dich wirklich abmelden?')) {
      localStorage.removeItem('advent:token');
      localStorage.removeItem(`advent:user:${token}`);
      localStorage.removeItem(`advent:intro-seen:${token}`);
      localStorage.removeItem(`advent:progress:${token}`);
      window.location.reload();
    }
  };

  const currentDate = new Date().toLocaleDateString('de-DE', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });

  const solvedClues = riddles
    .filter(r => progress.includes(r.id) && r.solution_clue && r.solution_clue.length === 1)
    .map(r => r.solution_clue!);

  return (
    <div className="p-6 relative page-content">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl md:text-2xl">Hallo, {user}!</h1>
          <p className="text-sm opacity-80">{currentDate}</p>
        </div>
        <Button onClick={handleLogout} variant="primary" className="text-sm active:scale-95 transition-transform">
          Abmelden
        </Button>
      </div>


      <div className="w-7/12 mx-auto mt-10 h-px" style={{ background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)' }} />
      <h2 className="text-2xl md:text-3xl font-serif text-center mt-4 mb-5 text-gold">Das Archiv des Vergessenen Lichts</h2>
      <div className="w-7/12 mx-auto mb-7 h-px" style={{ background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)' }} />

      <div className="relative mt-4 mx-auto w-[85vw] h-[85vw] max-w-[520px] max-h-[520px]">
        <LightCircle unlocked={progress} today={today} hasOverride={hasOverride} />
      </div>

      {solvedClues.length > 0 && (
        <div className="mt-8 text-center page-content">
          <h3 className="text-gold text-lg mb-4">Gesammelte Fragmente</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            {solvedClues.map((clue, index) => (
              <span key={index} className="text-gold text-4xl font-serif border border-gold/40 rounded px-3 py-2 bg-night/70 shadow-lg cursor-default" style={{ textShadow: '0 0 10px rgba(244, 230, 194, 0.8)', boxShadow: '0 0 20px rgba(244, 230, 194, 0.3), inset 0 0 10px rgba(244, 230, 194, 0.1)' }}>
                {clue}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  // Defer reading localStorage until after mount to keep SSR + first client render identical
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [hasOverride, setHasOverride] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Populate token/user after mount using microtask to avoid synchronous nested renders warning
    queueMicrotask(() => {
      try {
        const t = localStorage.getItem('advent:token');
        setToken(t);
        if (t) {
          const u = localStorage.getItem(`advent:user:${t}`);
          setUser(u);
        }
        setHasOverride(getOverrideDay() !== null);
      } catch {}
      setMounted(true);
    });

    const handleStorage = () => {
      queueMicrotask(() => {
        try {
          const t = localStorage.getItem('advent:token');
          setToken(t);
          if (t) {
            const u = localStorage.getItem(`advent:user:${t}`);
            setUser(u);
          } else {
            setUser(null);
          }
          setHasOverride(getOverrideDay() !== null);
        } catch {}
      });
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // if user hasn't seen intro yet, redirect to /intro (run only after mount)
  useEffect(() => {
    if (!mounted || !token) return;
    try {
      const seen = localStorage.getItem(`advent:intro-seen:${token}`);
      if (!seen) {
        router.push('/intro');
      }
    } catch {}
  }, [mounted, token, router]);

  // Stable placeholder (matches SSR and avoids hydration mismatch)
  if (!mounted) {
    return (
      <div className="p-6 relative z-10">
        <div className="animate-pulse w-full h-40 rounded bg-[#111418]" />
      </div>
    );
  }

  if (!token || !user) {
    return <DefaultHome />;
  }


  return <HomePage token={token} user={user} hasOverride={hasOverride} />;
}
