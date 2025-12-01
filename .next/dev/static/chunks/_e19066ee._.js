(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/light-circle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LightCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function LightCircle({ count = 24, unlocked = [], today, hasOverride = false }) {
    const items = Array.from({
        length: count
    }, (_, i)=>i + 1);
    const glowIntensity = today ? today <= 6 ? 0.2 : today <= 12 ? 0.5 : today <= 18 ? 0.8 : 1 : 0.2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            items.map((n, i)=>{
                const angle = i / count * Math.PI * 2 - Math.PI / 2;
                const radius = 38;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                const isSolved = unlocked.includes(n);
                const isToday = n === today;
                const isClickable = isSolved || today !== undefined && (n <= today || hasOverride && n > today);
                const circleContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${x}%`,
                        top: `${y}%`,
                        zIndex: isToday ? 10 : 1
                    },
                    className: `absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all
            ${isSolved ? "bg-aurora text-night z-index: 10 shadow-[0_0_28px_rgba(98,255,216,0.85)] ring-2 ring-gold/60" : isClickable ? "bg-[#111418] text-gold" : "bg-gray-900/20 text-gray-500/50 backdrop-blur-sm border border-gray-600/20"}
            ${isToday ? "scale-125 shadow-[0_0_38px_rgba(244,230,194,0.85)]" : isClickable ? "hover:scale-110" : ""}
            ${!isClickable ? "cursor-not-allowed" : "cursor-pointer"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-serif text-base md:text-lg",
                        children: n
                    }, void 0, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/light-circle.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this);
                if (isClickable) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/day/${n}`,
                        children: circleContent
                    }, n, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: circleContent
                }, n, false, {
                    fileName: "[project]/app/components/light-circle.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "lunaris-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 w-24 h-24 md:w-28 md:h-28 bg-gold/20 rounded-full blur-lg pulse-glow",
                        style: {
                            zIndex: 0,
                            boxShadow: `0 0 ${70 * glowIntensity}px rgba(244,230,194,${0.5 * glowIntensity})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full blur-sm pulse-glow",
                        style: {
                            zIndex: 1,
                            background: 'radial-gradient(circle, rgba(244,230,194,1) 0%, rgba(244,230,194,0.8) 50%, rgba(244,230,194,0.3) 100%)',
                            boxShadow: `0 0 ${35 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity}), 0 0 ${18 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full pulse-glow",
                        style: {
                            zIndex: 2,
                            background: '#f4e6c2',
                            boxShadow: `0 0 ${25 * glowIntensity}px rgba(244,230,194,${1 * glowIntensity}), 0 0 ${12 * glowIntensity}px rgba(255,255,255,${0.8 * glowIntensity})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/light-circle.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/light-circle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = LightCircle;
var _c;
__turbopack_context__.k.register(_c, "LightCircle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/useLocalProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalProgress",
    ()=>useLocalProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLocalProgress(token) {
    _s();
    const key = token ? `advent:progress:${token}` : undefined;
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalProgress.useState": ()=>{
            if (!key || ("TURBOPACK compile-time value", "object") === "undefined") return [];
            try {
                const raw = localStorage.getItem(key);
                return raw ? JSON.parse(raw) : [];
            } catch  {
                return [];
            }
        }
    }["useLocalProgress.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalProgress.useEffect": ()=>{
            if (!key) return;
            try {
                localStorage.setItem(key, JSON.stringify(progress));
            } catch  {}
        }
    }["useLocalProgress.useEffect"], [
        progress,
        key
    ]);
    return {
        progress,
        openDay: (n)=>setProgress((p)=>p.includes(n) ? p : [
                    ...p,
                    n
                ])
    };
}
_s(useLocalProgress, "ZIv0RgIXHbDkac+cyVdukcCuMik=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentDayBase",
    ()=>getCurrentDayBase,
    "getOverrideDay",
    ()=>getOverrideDay,
    "uuid",
    ()=>uuid
]);
function uuid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function getCurrentDayBase() {
    const now = new Date();
    return now.getMonth() === 11 ? Math.min(24, now.getDate()) : 0;
}
function getOverrideDay() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const override = localStorage.getItem('advent:date-override');
    if (!override) return null;
    const day = parseInt(override, 10);
    if (day >= 1 && day <= 24) return day;
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonLinkClass",
    ()=>buttonLinkClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
// Lightweight class merge utility (replaces external clsx dependency)
function cx(...parts) {
    return parts.filter(Boolean).join(" ");
}
const base = "relative inline-flex items-center justify-center whitespace-nowrap select-none font-medium tracking-wide transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night cursor-pointer";
const variants = {
    primary: "rounded-full px-5 py-2 bg-gold/90 hover:bg-gold text-night border border-gold/20 shadow-[0_4px_14px_-4px_rgba(244,230,194,0.45)] hover:shadow-[0_6px_22px_-6px_rgba(244,230,194,0.55)]",
    outline: "rounded-full px-5 py-2 bg-[#161b22] border border-gold/30 text-gold hover:border-gold/60 hover:bg-[#1c2229]",
    link: "px-0 py-0 text-gold underline underline-offset-4 hover:text-aurora"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Button({ className, variant = "primary", asChild = false, ...rest }, ref) {
    const cn = cx(base, variants[variant], className);
    if (asChild) {
        // Allow using <Button asChild><a /></Button> pattern if desired later
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: cn,
            children: rest.children
        }, void 0, false, {
            fileName: "[project]/app/components/ui/button.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: cn,
        ...rest
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
});
_c1 = Button;
function buttonLinkClass(variant = "link", className) {
    return cx(base, variants[variant], className);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/riddles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "riddles",
    ()=>riddles
]);
const riddles = [
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
        puzzle_type: "text-input"
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
            {
                id: 1,
                src: '/images/riddles/symbol-1.svg'
            },
            {
                id: 2,
                src: '/images/riddles/symbol-2.svg'
            },
            {
                id: 3,
                src: '/images/riddles/symbol-3.svg'
            },
            {
                id: 4,
                src: '/images/riddles/symbol-4.svg'
            },
            {
                id: 5,
                src: '/images/riddles/symbol-5.svg'
            }
        ]
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
            {
                id: 6,
                src: '/images/riddles/symbol-6.svg'
            },
            {
                id: 7,
                src: '/images/riddles/symbol-7.svg'
            },
            {
                id: 8,
                src: '/images/riddles/symbol-8.svg'
            },
            {
                id: 9,
                src: '/images/riddles/symbol-9.svg'
            }
        ]
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
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
        puzzle_type: "text-input"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$light$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/light-circle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/useLocalProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/riddles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function DefaultHome() {
    const isDev = ("TURBOPACK compile-time value", "development") === 'development';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 relative z-10 page-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-2",
                children: "Willkommen zum Advent-Abenteuer"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "opacity-90",
                children: "Scanne deinen persönlichen QR-Code, um das mystische Portal zu öffnen."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isDev && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "opacity-60 text-sm",
                        children: "Kein QR-Code? Testlogin:"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/auth?t=test`,
                        className: "mt-2 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "primary",
                            children: "Testlogin"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = DefaultHome;
function HomePage({ token, user, hasOverride }) {
    _s();
    const { progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalProgress"])(token);
    // Use base date for initial render to match SSR; apply override after mount
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentDayBase"])()
    }["HomePage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const apply = {
                "HomePage.useEffect.apply": ()=>{
                    setToday((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverrideDay"])() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentDayBase"])());
                }
            }["HomePage.useEffect.apply"];
            apply(); // apply immediately after mount
            window.addEventListener('storage', apply);
            return ({
                "HomePage.useEffect": ()=>window.removeEventListener('storage', apply)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const handleLogout = ()=>{
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
    const solvedClues = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["riddles"].filter((r)=>progress.includes(r.id) && r.solution_clue && r.solution_clue.length === 1).map((r)=>r.solution_clue);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative page-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-2xl",
                                children: [
                                    "Hallo, ",
                                    user,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-80",
                                children: currentDate
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleLogout,
                        variant: "primary",
                        className: "text-sm active:scale-95 transition-transform",
                        children: "Abmelden"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7/12 mx-auto mt-10 h-px",
                style: {
                    background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-serif text-center mt-4 mb-5 text-gold",
                children: "Das Archiv des Vergessenen Lichts"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7/12 mx-auto mb-7 h-px",
                style: {
                    background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 mx-auto w-[85vw] h-[85vw] max-w-[520px] max-h-[520px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$light$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    unlocked: progress,
                    today: today,
                    hasOverride: hasOverride
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            solvedClues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gold text-lg mb-4",
                        children: "Gesammelte Fragmente"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-3 flex-wrap",
                        children: solvedClues.map((clue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold text-4xl font-serif border border-gold/40 rounded px-3 py-2 bg-night/70 shadow-lg cursor-default",
                                style: {
                                    textShadow: '0 0 10px rgba(244, 230, 194, 0.8)',
                                    boxShadow: '0 0 20px rgba(244, 230, 194, 0.3), inset 0 0 10px rgba(244, 230, 194, 0.1)'
                                },
                                children: clue
                            }, index, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(HomePage, "x3ukbzu1NH7u5eWY4/qaonqneJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalProgress"]
    ];
});
_c1 = HomePage;
function Page() {
    _s1();
    // Defer reading localStorage until after mount to keep SSR + first client render identical
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasOverride, setHasOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // Populate token/user after mount using microtask to avoid synchronous nested renders warning
            queueMicrotask({
                "Page.useEffect": ()=>{
                    try {
                        const t = localStorage.getItem('advent:token');
                        setToken(t);
                        if (t) {
                            const u = localStorage.getItem(`advent:user:${t}`);
                            setUser(u);
                        }
                        setHasOverride((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverrideDay"])() !== null);
                    } catch  {}
                    setMounted(true);
                }
            }["Page.useEffect"]);
            const handleStorage = {
                "Page.useEffect.handleStorage": ()=>{
                    queueMicrotask({
                        "Page.useEffect.handleStorage": ()=>{
                            try {
                                const t = localStorage.getItem('advent:token');
                                setToken(t);
                                if (t) {
                                    const u = localStorage.getItem(`advent:user:${t}`);
                                    setUser(u);
                                } else {
                                    setUser(null);
                                }
                                setHasOverride((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverrideDay"])() !== null);
                            } catch  {}
                        }
                    }["Page.useEffect.handleStorage"]);
                }
            }["Page.useEffect.handleStorage"];
            window.addEventListener('storage', handleStorage);
            return ({
                "Page.useEffect": ()=>window.removeEventListener('storage', handleStorage)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    // if user hasn't seen intro yet, redirect to /intro (run only after mount)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted || !token) return;
            try {
                const seen = localStorage.getItem(`advent:intro-seen:${token}`);
                if (!seen) {
                    router.push('/intro');
                }
            } catch  {}
        }
    }["Page.useEffect"], [
        mounted,
        token,
        router
    ]);
    // Stable placeholder (matches SSR and avoids hydration mismatch)
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse w-full h-40 rounded bg-[#111418]"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    if (!token || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultHome, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 166,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
        token: token,
        user: user,
        hasOverride: hasOverride
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 170,
        columnNumber: 10
    }, this);
}
_s1(Page, "g/oUSaU6d7U8HXqNIIfnvA7hab0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Page;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DefaultHome");
__turbopack_context__.k.register(_c1, "HomePage");
__turbopack_context__.k.register(_c2, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e19066ee._.js.map