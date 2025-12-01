"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    // nothing on mount
  }, []);

  const handleStart = () => {
    try {
      const token = localStorage.getItem("advent:token");
      if (token) {
        localStorage.setItem(`advent:intro-seen:${token}`, "1");
      }
    } catch {}
    router.push("/day/1");
  };

  return (
    <div className="p-4 sm:p-8 relative z-10 text-gold page-content">
      <article className="prose prose-invert max-w-none lg:prose-lg space-y-6">

        <div className="my-2 mx-auto w-full sm:max-w-3xl lg:max-w-xl">
          <Image
            src="/images/cover.jpg"
            alt="Titelbild"
            width={1000}
            height={360}
            placeholder="blur"
            blurDataURL={"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 4'><rect width='10' height='4' fill='%230a0c10'/></svg>"}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <audio controls autoPlay preload="auto">
            <source src="/audio/prolog.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <h1 className="text-xl font-semibold my-7">Prolog - Der letzte Funke</h1>

        <blockquote className="border-l-2 border-gold pl-4 italic">
          „Licht stirbt nicht, Larissa.
          <br />
          Es wird nur vergessen.“
          <br />
          — Meister Aureon
        </blockquote>

        <p>
          Die Nacht über Lunaris lag schwer wie gefrorener Samt. Das Nordlicht über der Stadt
          flackerte, als würde es nach etwas greifen, das ihm entzogen wurde. Larissa rannte die
          schmalen Stufen zur Sternenuhr hinauf, ihr Herz pochte wie ein fehlgeschlagener Zauber.
        </p>

        <p>
          Die Lampe im Turm, die seit Jahrhunderten brannte — der erste Funke, der die Stadt einst mit
          Licht versorgte — war dunkel. Nicht gedimmt. Nicht schwach. Erloschen.
        </p>

        <p>
          Kälte breitete sich aus, als hätte jemand ein Loch in die Welt geschnitten. Das Glasgefäß
          über der Flamme war milchig geworden. Und am Boden, in dieser unnatürlichen Stille, pulsierte
          eine silberne Rune: drei überlappende Kreise, matt flimmernd wie ein erschöpfter Stern.
        </p>

        <p>
          Larissa kniete sich hin, strich mit der Fingerspitze über eine der Linien. Ein kaum spürbarer
          Hauch antwortete ihr, wie ein verlorener Gedanke, der versucht, sich zu erinnern. Da hörte sie
          Schritte hinter sich.
        </p>

        <p>
          „Es ist geschehen“, sagte eine Stimme. Meister Aureon stand im Türrahmen, müde wie jemand,
          der die Zukunft gesehen und nicht gewollt hatte.
        </p>

        <p>
          „Das Elixier des 24. Lichts — das Archiv aller Erinnerungen dieser Welt — wurde gestohlen.“
        </p>

        <p>
          Larissa spürte, wie ihr die Luft entwich. Das Elixier war keine gewöhnliche Essenz. Es war das
          Archiv aller Erinnerungen, die die Stadt schützen, wärmen, lenken. Ohne diese Erinnerungen
          würde das Licht von Lunaris schwächer werden — und irgendwann bleiben nur Schatten übrig.
        </p>

        <p>
          Aureon zog ein kleines schwarzes Buch aus seiner Robe, der Einband glatt wie kalter Stein.
          Darauf eingraviert: 24 Linien, die sich zu einem Muster verbanden. Schön. Fremd. Unruhig.
        </p>

        <p>
          „Dieses Buch reagiert auf dich“, sagte er. „Es trägt Spuren des Elixiers. Aber nur ein Suchender
          kann sie lesen.“
        </p>

        <p>
          Larissa öffnete das Buch. Zwischen den Seiten lag eine Karte — die gleichen drei Kreise wie
          auf dem Boden, nur klarer, mit winzigen Buchstaben an den Schnittpunkten.
        </p>

        <p>
          „Erster Hinweis,“ flüsterte Aureon. „Folge den Kreisen. Lies sie von außen nach innen — wie
          Licht, das zurückkehrt.“
        </p>

        <p>
          Ein goldener Funke sprang von der Karte auf ihre Hand. Warm. Lebendig. Ein Gefühl, als würde
          jemand in weiter Ferne ihren Namen erinnern.
        </p>

        <p>
          Draußen flackerte das Nordlicht auf, heller als eben — und im selben Moment wusste Larissa:
          Sie war auf dem Weg, das Licht selbst zu erinnern.
        </p>

        <p>Larissas Reise hatte begonnen.</p>

        <div className="mt-8">
          <Button onClick={handleStart} aria-label="Starte das Abenteuer" className="active:scale-95 transition-transform">
            Starte das Abenteuer
          </Button>
        </div>
      </article>
    </div>
  );
}
