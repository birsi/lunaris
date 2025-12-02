"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Symbol, PuzzleType } from "../lib/riddles";

type PuzzleInputProps = {
  puzzleType?: PuzzleType;
  symbols?: Symbol[];
  answer: string;
  setAnswer: (answer: string) => void;
  onCheck: (isDragDropSolved?: boolean) => void;
  result: string | null;
  wrongKey: number;
};

export function PuzzleInput({
  puzzleType = 'text-input',
  symbols = [],
  answer,
  setAnswer,
  onCheck,
  result,
  wrongKey
}: PuzzleInputProps) {
  // Drag and drop state
  const [shuffledSymbols, setShuffledSymbols] = useState(() => {
    // For day 6 (symbols starting with id 6), use reverse order as initial
    // For other days, use the day 2 initial order
    const hasSymbol6 = symbols.some(s => s.id === 6);
    const initialOrder = hasSymbol6 
      ? symbols.map(s => s.id).reverse()  // Reverse order for day 6
      : [4, 1, 5, 3, 2];  // Day 2 initial order
    return initialOrder.map(id => symbols.find(s => s.id === id)!).filter(Boolean);
  });
  const [draggedSymbol, setDraggedSymbol] = useState<number | null>(null);
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, symbolId: number) => {
    setDraggedSymbol(symbolId);
    e.dataTransfer.setData('text/plain', symbolId.toString());
    e.dataTransfer.effectAllowed = 'move';
    (e.target as HTMLElement).classList.add('dragging');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    (e.target as HTMLElement).classList.add('drag-over');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    (e.target as HTMLElement).classList.remove('drag-over');
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
    if (!draggedId) return;

    const draggedIndex = shuffledSymbols.findIndex(s => s.id === draggedId);
    if (draggedIndex === -1 || draggedIndex === dropIndex) {
      setDraggedSymbol(null);
      return;
    }

    const newSymbols = [...shuffledSymbols];
    const [draggedItem] = newSymbols.splice(draggedIndex, 1);
    newSymbols.splice(dropIndex, 0, draggedItem);

    setShuffledSymbols(newSymbols);
    setDraggedSymbol(null);

    // Check if puzzle is solved (symbols in the correct order as defined in riddle)
    const isSolved = newSymbols.every((symbol, index) => symbol.id === symbols[index].id);
    if (isSolved) {
      onCheck(true); // Immediately trigger solution reveal
    }
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedSymbol(null);
    (e.target as HTMLElement).classList.remove('dragging');
    // Remove drag-over class from all elements
    document.querySelectorAll('.drag-over').forEach(el => {
      el.classList.remove('drag-over');
    });
  };

  // Touch event handlers for mobile support
  const handleTouchStart = (e: React.TouchEvent, symbolId: number) => {
    setDraggedSymbol(symbolId);
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    (e.target as HTMLElement).classList.add('dragging');
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!draggedSymbol || !touchStartPos) return;

    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartPos.x;
    const deltaY = touch.clientY - touchStartPos.y;

    // Only consider it a drag if moved more than 10px
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      // Find which symbol we're hovering over
      const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
      const symbolElement = elements.find(el => el.hasAttribute('data-symbol-index'));
      
      if (symbolElement) {
        const hoverIndex = parseInt(symbolElement.getAttribute('data-symbol-index') || '-1');
        if (hoverIndex !== -1 && hoverIndex !== draggedOverIndex) {
          // Remove previous drag-over
          document.querySelectorAll('.drag-over').forEach(el => {
            el.classList.remove('drag-over');
          });
          // Add drag-over to new element
          symbolElement.classList.add('drag-over');
          setDraggedOverIndex(hoverIndex);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    if (!draggedSymbol) return;

    // If we have a draggedOverIndex, perform the drop
    if (draggedOverIndex !== null) {
      const draggedIndex = shuffledSymbols.findIndex(s => s.id === draggedSymbol);
      if (draggedIndex !== -1 && draggedIndex !== draggedOverIndex) {
        const newSymbols = [...shuffledSymbols];
        const [draggedItem] = newSymbols.splice(draggedIndex, 1);
        newSymbols.splice(draggedOverIndex, 0, draggedItem);

        setShuffledSymbols(newSymbols);

        // Check if puzzle is solved (symbols in the correct order as defined in riddle)
        const isSolved = newSymbols.every((symbol, index) => symbol.id === symbols[index].id);
        if (isSolved) {
          onCheck(true); // Immediately trigger solution reveal
        }
      }
    }

    // Clean up
    setDraggedSymbol(null);
    setTouchStartPos(null);
    setDraggedOverIndex(null);
    document.querySelectorAll('.drag-over, .dragging').forEach(el => {
      el.classList.remove('drag-over', 'dragging');
    });
  };

  if (puzzleType === 'drag-drop' && symbols.length > 0) {
    return (
      <div className="space-y-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {shuffledSymbols.map((symbol, index) => (
            <div
              key={symbol.id}
              data-symbol-index={index}
              draggable
              onDragStart={(e) => handleDragStart(e, symbol.id)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              onTouchStart={(e) => handleTouchStart(e, symbol.id)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="w-16 h-16 bg-night/50 border-2 border-gold/30 rounded-lg flex items-center justify-center cursor-move hover:border-gold/60 transition-colors select-none touch-none"
              style={{
                opacity: draggedSymbol === symbol.id ? 0.5 : 1,
              }}
            >
              <Image
                src={symbol.src}
                alt={`Symbol ${symbol.id}`}
                width={48}
                height={48}
                className="object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (puzzleType === 'special') {
    return (
      <div className="text-center py-4">
        <div className="text-gold/80 text-lg font-serif">
          ✨ Das Rätsel des Lichts ist noch nicht gelöst! ✨
        </div>
        <div className="text-gold/60 text-sm mt-2">
          Das Licht jedoch hat dich hierhergeführt... Suche den Ort des Lichts und berühre ihn!
        </div>
      </div>
    );
  }

  // Default text input
  return (
    <>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCheck();
          }
        }}
        placeholder="Lösung eingeben…"
        className="w-full px-4 py-2 rounded bg-night border border-gold/30 text-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
      <div className="mt-3 flex items-center gap-3">
        <Button onClick={() => onCheck()} aria-label="Antwort prüfen" className="active:scale-95 transition-transform">Prüfen</Button>
        {result === "wrong" && (
          <span key={wrongKey} className="text-red-400 text-sm font-medium solution-reveal">✘ Falsch, versuche es erneut.</span>
        )}
      </div>
    </>
  );
}