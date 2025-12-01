'use client'

import { useEffect, useState } from 'react'

export function useLocalProgress(token: string | null) {
  const key = token ? `advent:progress:${token}` : undefined;
  
  const [progress, setProgress] = useState<number[]>(() => {
    if (!key || typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (!key) return;
    try {
      localStorage.setItem(key, JSON.stringify(progress));
    } catch {}
  }, [progress, key]);

  return {
    progress,
    openDay: (n: number) => setProgress((p) => (p.includes(n) ? p : [...p, n])),
  };
}
