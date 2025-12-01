export type Symbol = {
  id: number;
  src: string;
};

export type PuzzleType = 'text-input' | 'drag-drop';

export type Riddle = {
  id: number;
  title: string;
  text: string;
  text_solution?: string;
  code: string;
  image?: string; // optional illustration
  solution_audio?: string; // optional audio for solution
  solution_clue?: string; // optional clue for solution
  puzzle_type?: PuzzleType; // defaults to 'text-input'
  symbols?: Symbol[]; // required if puzzle_type is 'drag-drop'
};

export const riddles: Riddle[] = [
  {
    id: 1,
    title: "Die erwachenden Kreise",
    text: "Die Kreise wollten gelesen werden.",
    text_solution: `<p>Als Larissa den Buchstaben aussprach, sprang ein goldener Funke auf ihrer Haut. Er glomm warm, dann versank er wie ein Tropfen Licht in ihrer Handfläche.</p>
  <p><strong>Ein erstes Fragment.</strong><br/><em>Ein erstes Erinnern.</em></p>
  <p>Die drei Kreise verblassten — und auf der nächsten Seite des Buches wartete bereits der nächste Hinweis.</p>`,
    code: "Licht",
    image: "/images/days/1.png",
    solution_audio: "/audio/solution-1.mp3",
    solution_clue: "U",
    puzzle_type: "text-input",
  },
  {
    id: 2,
    title: "Das Siegel der Fünf Linien",
    text: "Fünf Linien, fünf Symbole. Aktiviere Sie!",
    text_solution: `<p>Der Buchstabe glomm auf, und die eingeritzten Linien auf Aureons Tisch begannen zu leuchten, als hätte das Holz all die Jahre darauf gewartet.</p>
<p>Das Muster setzte sich zusammen, formte ein kleines Licht-Siegel — und ein zweites Fragment sprang auf Larissas Hand.</p>
<p>Doch im Regal öffnete sich ein altes Buch leise von selbst. Nur eine Zeile stand darin: „Der Schatten geht denselben Weg."</p>
<p>Larissa fröstelte. Sie war nicht allein auf dieser Spur.</p>`,
    code: "S",
    image: "/images/days/2.png",
    solution_audio: "/audio/solution-2.mp3",
    solution_clue: "E",
    puzzle_type: "drag-drop",
    symbols: [
      { id: 1, src: '/images/riddles/symbol-1.svg' },
      { id: 2, src: '/images/riddles/symbol-2.svg' },
      { id: 3, src: '/images/riddles/symbol-3.svg' },
      { id: 4, src: '/images/riddles/symbol-4.svg' },
      { id: 5, src: '/images/riddles/symbol-5.svg' }
    ],
  },
  {
    id: 3,
    title: "Die Stimmen von Geometris",
    text: "Unter welcher Tasse liegt der Schlüssel?",
    text_solution: `<p>Als die Formen übereinander lagen, flackerte der Obelisk auf. Ein Zeichen erschien — ein Kreis, der sich öffnete wie ein Atemzug.</p>
<p>Ein kleines Fach am Sockel sprang auf. Darin lag ein weiteres Lichtfragment.</p>
<p>Larissa nahm es mit schnellen Fingern heraus. Doch als sie sich umdrehte, schwor sie, Schritte gehört zu haben —</p>
<p>und ein Schatten verschwand zwischen den Häusern.</p>`,
    code: "Weiße Tasse",
    image: "/images/days/3.png",
    solution_audio: "/audio/solution-3.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 4,
    title: "Die Taverne „Zum Letzten Funken“",
    text: "Finde das Losungswort!",
    text_solution: `<p>Als Larissa das Wort flüsterte, schimmerte das Medaillon kurz auf und gab ein fein geschnittenes Fragment frei. Es fühlte sich warm an, fast lebendig.</p>
<p>Der Mann nickte nur.</p>
<p>„Der Schattenzirkel ist schneller, als du denkst. Aber nicht klüger.“ Dann ging er.</p>
<p>Larissa blieb zurück — und das goldene Fragment vibrierte leise in ihrer Hand, als wollte es sie warnen.</p>`,
    code: "Wärme",
    image: "/images/days/4.png",
    solution_audio: "/audio/solution-4.mp3",
    solution_clue: "Die Symbole von Tag 3 werden dich zu Büchern führen.",
    puzzle_type: "text-input",
  },
  {
    id: 5,
    title: "Der Kreis der Morgenkristalle",
    text: "Wie viele Kristalle atmen insgesamt im Licht?",
    text_solution: `<p>Als Larissa die Reihenfolge verstand, öffnete sich ein Stein im Tempel leise.</p>
<p>Darin glomm ein weiteres Fragment, kalt wie gefrorenes Licht. Sie nahm es an sich.</p>
<p>Doch hinter ihr hörte sie ein Knacken. Jemand war hier — oder etwas.</p>
<p>Der Wind trug ein Wort mit sich: <b>Weiter...</b></p>`,
    code: "6",
    image: "/images/days/5.png",
    solution_audio: "/audio/solution-5.mp3",
    solution_clue: "Merke dir die Anzahl der Kristalle. Du wirst die Zahl noch brauchen.",
    puzzle_type: "text-input",
  },
  {
    id: 6,
    title: "Das Lied der Resonanz",
    text: "Vier Symbole. Ordne sie richtig!",
    text_solution: `<p>Ein Funken sprang aus den Runen und verwandelte sich in ein weiteres Fragment.
 Es schwebte kurz, dann legte es sich warm auf Larissas Handfläche.
</p>
<p>Als sie die Höhle verließ, sah sie im Schnee neue Spuren.
 Nicht menschlich.
 Nicht frisch.</p>
<p>Und nicht allein.</p>`,
    code: "S",
    image: "/images/days/6.png",
    solution_audio: "/audio/solution-6.mp3",
    solution_clue: "N",
    puzzle_type: "drag-drop",
    symbols: [
      { id: 6, src: '/images/riddles/symbol-6.svg' },
      { id: 7, src: '/images/riddles/symbol-7.svg' },
      { id: 8, src: '/images/riddles/symbol-8.svg' },
      { id: 9, src: '/images/riddles/symbol-9.svg' }
    ],
  },
  {
    id: 7,
    title: "Das zerbrochene Mosaik",
    text: "Erinnere dich an die Zahl der Kristalle, suche dort weiter.",
    text_solution: `<p>Als Larissa die Teile zusammenfügte, zündete das Mosaik auf — ein goldener Splitter sprang heraus.</p>
<p>Die Luft vibrierte.</p>
<p> Und sie spürte zum ersten Mal, dass jemand anderes dieselben Fragmente suchte.</p>`,
    code: "dully",
    image: "/images/days/7.png",
    solution_audio: "/audio/solution-7.mp3",
    solution_clue: "233 ... weiter am nächsten Tag",
    puzzle_type: "text-input",
  },
  {
    id: 8,
    title: "Das Archiv der Stimmen",
    text: "Nutze die Zahl von gestern! Ein Wort ist sichtbar, es bringt dich weiter!",
    text_solution: `<p>Als Larissa das Wort sprach, öffnete sich ein Fach in einem Regal.</p>
<p>Ein Fragment schob sich heraus wie ein neugieriges Auge.</p>
<p>Die Bücher flüsterten jetzt lauter. Sie war auf dem richtigen Weg.</p>`,
    code: "Fragmente",
    image: "/images/days/8.png",
    solution_audio: "/audio/solution-8.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 9,
    title: "Das Echo der Formen",
    text: "Spieglein, Spieglein, ...",
    text_solution: `<p>Ein leises Knacken durchlief den Spiegel.</p>
<p>Ein Lichtstück löste sich und glitt in ihre Hände.</p>
<p>Doch irgendwo im Nebel hörte sie Schritte.
 Diesmal ganz nah.</p>`,
    code: "S",
    image: "/images/days/9.png",
    solution_audio: "/audio/solution-9.mp3",
    solution_clue: "N",
    puzzle_type: "text-input",
  },
  {
    id: 10,
    title: "Der fehlende Stern",
    text: "Ein Stern fehlt...",
    text_solution: `<p>Ein Eisschacht öffnete sich im Boden.</p>
<p>Ein Fragment lag darin wie ein verlorener Atemzug.</p>
<p>Larissa nahm es auf — und sah in der Ferne einen dunklen Umriss am Horizont.</p>`,
    code: "5",
    image: "/images/days/10.png",
    solution_audio: "/audio/solution-10.mp3",
    solution_clue: "Wie können dir diese Buchstaben helfen? W, X, C, H, I, L, Q, M, N, T, E",
    puzzle_type: "text-input",
  },
  {
    id: 11,
    title: "Die Kristallstille",
    text: "Etwas passt hier nicht...",
    text_solution: `<p>Als Larissa den unpassenden Buchstaben berührte, sprang ein goldener Funke hervor.
 Ein weiteres Fragment.</p>
<p>Doch nun hörte sie eine Stimme.
 Ganz nah.
 Ganz falsch.</p>
<p>„Du bist spät, Kind.“</p>`,
    code: "L",
    image: "/images/days/11.png",
    solution_audio: "/audio/solution-11.mp3",
    solution_clue: "R",
    puzzle_type: "text-input",
  },
  {
    id: 12,
    title: "Die Sprache der Flamme",
    text: "Gib das Wort das du findest",
    text_solution: `<p>Als die Buchstaben klar wurden, öffnete sich ein kleiner Steinspalt.
 Ein Fragment glitt heraus und leuchtete warm.</p>
<p>Und dann hörte sie es —
 ein Flüstern hinter sich.</p>
<p>Nicht Aureon.
Jemand anderes jagte dasselbe Licht.
</p>`,
    code: "Tisch",
    image: "/images/days/12.png",
    solution_audio: "/audio/solution-12.mp3",
    solution_clue: "Wer sich selbst betrachtet, sieht nur die vordere Welt. Doch such nicht im Blick — such dort, wo der Blick endet. Hinter Glas und stillem Schein wartet, was als Nächstes dein soll sein.",
    puzzle_type: "text-input",
  },
  {
    id: 13,
    title: "Der Pfad der 24 Linien",
    text: "Wer kommt zu dir?",
    text_solution: `<p>Als Larissa den Buchstaben leise aussprach, öffnete sich unten am Basaltbogen ein länglicher Spalt — wie ein Atemzug aus uraltem Stein. Ein warmes Licht quoll hervor, und ein goldener Splitter schwebte in ihre Hand.</p>
<p>Doch da war etwas anderes.
 Ein Schatten hinter dem Bogen, reglos, als würde er warten.
 Nicht nah genug, um erkannt zu werden.
 Aber nah genug, um zu spüren, dass sie nicht allein suchte.</p>
<p>Ein Kältegefühl zog ihr über den Rücken.
Der Zirkel war nicht mehr weit.
</p>`,
    code: "Schatten",
    image: "/images/days/13.png",
    solution_audio: "/audio/solution-13.mp3",
    solution_clue: "I",
    puzzle_type: "text-input",
  },
  {
    id: 14,
    title: "Das Gedächtnis des Schnees",
    text: "Wenn sich Kristalle mit Linien multiplizieren...",
    text_solution: `<p>Ein plötzliches Knacken ließ sie zurückzucken.
 Unter dem Eis öffnete sich eine kleine Kammer, und ein goldenes Fragment schwebte empor, warm trotz der Kälte.</p>
<p>Als sie es aufhob, sah sie für einen Moment Schemen unter dem Eis — Menschen, Gestalten, Erinnerungen?
 Sie konnte es nicht sagen.</p>
<p>Aber sie wusste:
 Das Elixier speicherte nicht nur Licht.
 Es speicherte Geschichten. Und manche davon waren noch wach.
</p>`,
    code: "144",
    image: "/images/days/14.png",
    solution_audio: "/audio/solution-14.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 15,
    title: "Die fünf verblassten Verse",
    text: "Doch wo auf Erden birgt sich still der Anis?",
    text_solution: `<p>Als Larissa den klaren Buchstaben berührte, vibrierte die Wand. Ein Steinblock glitt langsam zurück und gab ein schimmerndes Fragment frei.
</p>
<p>Doch draußen hörte sie etwas.
 Schritte im Schnee.</p>
<p>Nicht näherkommend.
 Nur beobachtend. Sie wusste:
 Der Zirkel war ihr längst auf den Fersen.
</p>`,
    code: "Afghanistan",
    image: "/images/days/15.png",
    solution_audio: "/audio/solution-15.mp3",
    solution_clue: "Diese Zahl wird dir weiterhelfen: 121",
    puzzle_type: "text-input",
  },
  {
    id: 16,
    title: "Der Spiegel, der Fragen stellt",
    text: "Wenn diese Buchstabenreihe in der Mitte gespiegelt ist. Bei welchem Buchstaben liegt dann der Fehler?",
    text_solution: `<p>Als sie das Wort aussprach, löste sich ein Lichtsplitter aus dem Rahmen und sank in ihre Hand.
 Doch bevor er sich mit den anderen verband, flüsterte das Spiegelbild:</p>
<p>„Erinnere dich … an ihn.“</p>
<p>Larissa fröstelte.
 Sie wusste nicht, ob der Spiegel Aureon meinte —
 oder jemand anderen.
</p>`,
    code: "Z",
    image: "/images/days/16.png",
    solution_audio: "/audio/solution-16.mp3",
    solution_clue: "E",
    puzzle_type: "text-input",
  },
  {
    id: 17,
    title: "Die Stadt aus Glas",
    text: "TBD",
    text_solution: `<p>Als Larissa die fehlende Linie in Gedanken ergänzte, leuchtete die gläserne Wand auf. Ein Teil der Fassade löste sich und wurde zu einem goldenen Fragment.</p>
<p>Doch da hörte sie im Nebel eine Stimme.
Nicht Aureon.
 Nicht der Zirkel.</p>
<p>Eine Stimme, die sie noch nie gehört hatte.
„Warum suchst du wirklich?“
Der Nebel fraß die Worte, bevor sie sich umdrehen konnte.
</p>`,
    code: "Hypotenuse",
    image: "/images/days/17.png",
    solution_audio: "/audio/solution-17.mp3",
    solution_clue: "R",
    puzzle_type: "text-input",
  },
  {
    id: 18,
    title: "Der goldene Staub",
    text: "TBD",
    text_solution: `<p>Der Staub um sie herum wirbelte auf und verdichtete sich. Ein leuchtender Splitter entstand daraus und sank in ihre Hand.</p>
<p>Doch diesmal geschah mehr:
 Der Himmel flackerte.
 Das Nordlicht flammte hell auf — dann erlosch es für einen Moment.</p>
<p>Larissa fröstelte.
Das Gleichgewicht begann zu kippen.
</p>`,
    code: "S",
    image: "/images/days/18.png",
    solution_audio: "/audio/solution-18.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 19,
    title: "Die verschollene Formel",
    text: "TBD",
    text_solution: `<p>Als sie die Wortteile zusammensetzte, reagierte das Notizbuch. Die fehlende Formel erschien, ein Lichtspalt öffnete sich, und ein Fragment glitt heraus.</p>
<p>Dann, im Halbdunkel, sah sie etwas:
 Eine Gestalt am Ende des Klostergangs.
Diesmal rannte sie nicht davon.
 Sie wartete.
</p>
<p>Doch sie löste sich in Nebel auf.
Larissa wusste:
 Es war eine Warnung.
</p>`,
    code: "S",
    image: "/images/days/19.png",
    solution_audio: "/audio/solution-19.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 20,
    title: "Der Turm ohne Schatten",
    text: "TBD",
    text_solution: `<p>Als Larissa die Rune berührte, brach ein einzelner Lichtstrahl durch die Decke, leuchtete auf die Kartenlinie — und verwandelte sich in ein Fragment.</p>
<p>Dann hörte sie Schritte hinter sich.
Aureon.
„Du bist weiter gekommen, als ich gehofft habe,“ sagte er.
</p>
<p>Sein Blick war schwer.
 Und voller Wahrheit, die sie noch nicht kannte.
</p>`,
    code: "S",
    image: "/images/days/20.png",
    solution_audio: "/audio/solution-20.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 21,
    title: "Das Herz des Nordlichts",
    text: "TBD",
    text_solution: `<p>Die Kugel pulsierte.
 Der Wind hielt den Atem an.</p>
<p>Aureon sah sie an, und in seinen Augen lag Sorge, Vertrauen — und Furcht.
„Der Zirkel kommt näher,“ sagte er. „Und du musst zu Ende bringen, was ich nicht konnte.“
</p>
<p>Larissa nickte.
 Sie wusste, es gab kein Zurück mehr.
</p>`,
    code: "S",
    image: "/images/days/21.png",
    solution_audio: "/audio/solution-21.mp3",
    solution_clue: "G",
    puzzle_type: "text-input",
  },
  {
    id: 22,
    title: "Der Schlüssel im Staub",
    text: "TBD",
    text_solution: `<p>Als sie den Buchstaben sprach, vibrierte der Steinboden. Ein winziger Schlüssel löste sich aus der Spirale, schimmernd wie Metall, aber warm wie Haut.
Aureon trat neben sie.
</p>
<p>„Es gibt noch etwas, das du wissen musst,“ begann er.
Doch bevor er weitersprechen konnte, bebte der Turm.
</p>
<p>Der Zirkel war unter ihnen.</p>`,
    code: "S",
    image: "/images/days/22.png",
    solution_audio: "/audio/solution-22.mp3",
    solution_clue: "N",
    puzzle_type: "text-input",
  },
  {
    id: 23,
    title: "Der Verrat im Licht",
    text: "TBD",
    text_solution: `<p>Das Fach öffnete sich, und darin lag das vorletzte Fragment — größer, heller, schwerer als alle zuvor.
</p>
<p>Als Larissa es berührte, verband sich jedes Fragment in ihrer Tasche, vibrierend wie ein Herz.
Aureon sah sie an.
„Es gibt nur ein Wort, das das Licht weckt,“ sagte er.
 „Ein Wort, das du schon längst kennst.“
</p>
<p>Larissa spürte, wie sich alles um sie herum zusammenzog.</p>`,
    code: "S",
    image: "/images/days/23.png",
    solution_audio: "/audio/solution-23.mp3",
    solution_clue: "Das ist ein Hinweis",
    puzzle_type: "text-input",
  },
  {
    id: 24,
    title: "Das Licht erwacht",
    text: "TBD",
    text_solution: `<p>Als Larissa das Wort sprach, brach das Licht hervor — warm, hell, unaufhaltsam.
 Die Funken stiegen in den Himmel, zersplitterten in tausend goldene Sterne.
</p>
<p>Das Nordlicht erwachte.
 Die Lampe der Sternenuhr brannte wieder.
 Die Stadt atmete. Aureon legte ihr die Hand auf die Schulter.
„Du hast die Welt erinnert,“ sagte er.
Larissa lächelte, und das Licht spielte auf ihren Wangen wie ein alter Freund.

</p>
<p><b>Das Elixier war nie ein Trank.
 Es war eine Wahrheit:
 An was wir uns erinnern, geht niemals verloren.</b></p>`,
    code: "Erinnerung",
    image: "/images/days/24.png",
    solution_audio: "/audio/solution-24.mp3",
    solution_clue: "Unter dem Baum!",
    puzzle_type: "text-input",
  }
];
