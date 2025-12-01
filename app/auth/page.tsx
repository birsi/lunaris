'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("t");
    const isDev = process.env.NODE_ENV === 'development';

    if (t && (t.toLowerCase() === "larissa" || (isDev && t.toLowerCase() === "test"))) {
      // store token
      localStorage.setItem("advent:token", t);
      // assign user to token (here: always Larissa)
      localStorage.setItem(`advent:user:${t}`, "Larissa");
      // send new users to the intro page
      router.push("/intro");
    } else {
      // In development, redirect to home for invalid tokens
      // In production, redirect to 404 for invalid tokens
      router.push(isDev ? "/" : "/404");
    }
  }, [router]);

  return (
    <div className="p-10 text-center text-gold page-content">
      Authentifiziere…
    </div>
  );
}
