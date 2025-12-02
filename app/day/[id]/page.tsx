"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { riddles } from "../../lib/riddles";
import { useLocalProgress } from "../../lib/useLocalProgress";
import { getCurrentDayBase, getOverrideDay } from "../../lib/utils";
import { buttonLinkClass } from "../../components/ui/button";
import { PuzzleInput } from "../../components/puzzle-input";

export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const n = parseInt(id, 10);
  const riddle = riddles.find((r) => r.id === n);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [wrongKey, setWrongKey] = useState(0);
  const [puzzleJustSolved, setPuzzleJustSolved] = useState(false);
  // Use base date for initial render (matches SSR). Override applied after mount.
  const [currentDay, setCurrentDay] = useState(() => getCurrentDayBase());
  const [hasOverride, setHasOverride] = useState(false);
  const [currentDayResolved, setCurrentDayResolved] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Get token and progress hook
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("advent:token");
    }
    return null;
  });
  const { progress, openDay } = useLocalProgress(token);
  const isSolved = progress.includes(n);
  // Only determine accessibility after we've applied client-side override
  // Days up to currentDay are accessible, plus any solved days
  const isAccessible = currentDayResolved ? (n <= currentDay) || isSolved : isSolved;
  useEffect(() => {
    const handle = () => {
      if (typeof window !== 'undefined') {
        const t = localStorage.getItem('advent:token');
        setToken(t);
        const override = getOverrideDay();
        setCurrentDay(override ?? getCurrentDayBase());
        setHasOverride(override !== null);
        setCurrentDayResolved(true);
        setMounted(true);
        // if already solved earlier, show solution text immediately
        if (progress.includes(n)) setShowSolution(true);
      }
    };
    handle(); // run once after mount
    window.addEventListener('storage', handle);
    return () => window.removeEventListener('storage', handle);
  }, [n, progress]);

  // If we haven't mounted on client yet, render nothing to avoid SSR -> client flicker
  if (!mounted) {
    return <div className="min-h-80" />;
  }

  function check(isDragDropSolved = false) {
    if (!riddle) return;

    // For drag-drop puzzles, add fade-out delay
    if (isDragDropSolved && r.puzzle_type === 'drag-drop') {
      setPuzzleJustSolved(true);
      setTimeout(() => {
        setPuzzleJustSolved(false);
        setResult("correct");
        // Mark day as solved/unlocked
        if (token) {
          openDay(n);
          setShowSolution(true);
        }
      }, 200);
      return;
    }

    // For text-input puzzles, handle normally
    if (answer.trim().toLowerCase() === riddle.code.toLowerCase()) {
      setResult("correct");
      // Mark day as solved/unlocked
      if (token) {
        openDay(n);
        setShowSolution(true);
      }
    } else {
      setResult("wrong");
      setWrongKey(prev => prev + 1);
    }
  }

  if (!riddle) {
    return (
      <div className="p-6 relative z-10 page-content">
        <h1 className="text-3xl font-serif mb-4">Tag {n}</h1>
        <p>Für diesen Tag wurde kein Rätsel definiert.</p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-gold underline">
            Zurück
          </Link>
        </div>
      </div>
    );
  }

  // Check if day is accessible
  if (!isAccessible) {
    return (
      <div className="p-6 relative z-10 page-content">
        <h1 className="text-3xl font-serif mb-4">Tag {n}</h1>
        <p className="text-lg mb-4">Dieser Tag ist noch nicht verfügbar.</p>
        <p className="opacity-80 mb-6">
          {hasOverride 
            ? "Der Tag wird durch eine Überschreibung freigeschaltet."
            : `Dieser Tag wird am ${n}. Dezember verfügbar sein.`
          }
        </p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-gold underline">
            Zurück
          </Link>
        </div>
      </div>
    );
  }

  // non-null alias for TypeScript
  const r = riddle as NonNullable<typeof riddle>;
  return (
    <div className="p-6 relative z-10 page-content">
      <h1 className="text-3xl mb-2 font-serif">{r.title}</h1>
      <p className="text-sm opacity-60 mb-4">Tag {n} · {isSolved ? 'Gelöst ✔' : 'Noch nicht gelöst'}</p>

      <div className="bg-[#0d0f19]/70 p-4 rounded-lg shadow-xl">
        <p className="opacity-90 text-gold/90 whitespace-pre-line">{r.text}</p>
      </div>

      {r.image && (
        <div className="w-full md:w-1/2 mx-auto my-4 rounded-lg shadow-lg border border-gold/20 overflow-hidden">
          <div style={{ position: 'relative', width: '100%', paddingTop: '150%' }} className="bg-[#07090a]">
            <Image
              src={r.image!}
              alt={r.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 7'><rect width='10' height='7' fill='%230a0c10'/></svg>"}
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        {(!isSolved && !showSolution && !puzzleJustSolved) && (
          <PuzzleInput
            puzzleType={r.puzzle_type}
            symbols={r.symbols}
            answer={answer}
            setAnswer={setAnswer}
            onCheck={check}
            result={result}
            wrongKey={wrongKey}
          />
        )}

        {puzzleJustSolved && (
          <div className="space-y-4 transition-opacity duration-1000 opacity-0">
            {/* Render the solved puzzle state for fade-out effect */}
            <div className="flex justify-center gap-4 flex-wrap">
              {r.symbols?.map((symbol) => (
                <div
                  key={symbol.id}
                  className="w-16 h-16 bg-night/50 border-2 border-gold/30 rounded-lg flex items-center justify-center"
                >
                  <Image
                    src={symbol.src}
                    alt={`Symbol ${symbol.id}`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {(isSolved || showSolution) && r.text_solution && (
          <div className="mb-4">
            <div className="solution-divider" />
            {r.solution_clue && (
              <div className="mt-4 p-3 bg-gold/10 border border-gold/30 rounded-md solution-reveal mx-auto w-max">
                <h3 className="text-gold font-semibold mb-2 text-center">Lösungsfragment</h3>
                <p className={`text-gold text-center glow-text ${r.solution_clue.length === 1 ? 'text-2xl font-mono' : 'text-lg font-normal'}`}>{r.solution_clue}</p>
              </div>
            )}
            <div className="bg-night/80 p-4 rounded-md solution-reveal">
              <div
                className="text-gold leading-relaxed"
                dangerouslySetInnerHTML={{ __html: r.text_solution! }}
              />
            </div>
            {r.solution_audio && (
              <audio controls autoPlay preload="auto" className="mt-4 w-full">
                <source src={r.solution_audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )}

      </div>

      <div className="mt-8 text-center">
        <Link href="/" className={buttonLinkClass()}>
          Zurück
        </Link>
      </div>
    </div>
  );

}
