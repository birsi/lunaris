module.exports = [
"[project]/app/components/light-circle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LightCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function LightCircle({ count = 24, unlocked = [], today, hasOverride = false }) {
    const items = Array.from({
        length: count
    }, (_, i)=>i + 1);
    const glowIntensity = today ? today <= 6 ? 0.2 : today <= 12 ? 0.5 : today <= 18 ? 0.8 : 1 : 0.2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                const circleContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${x}%`,
                        top: `${y}%`,
                        zIndex: isToday ? 10 : 1
                    },
                    className: `absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all
            ${isSolved ? "bg-aurora text-night z-index: 10 shadow-[0_0_28px_rgba(98,255,216,0.85)] ring-2 ring-gold/60" : isClickable ? "bg-[#111418] text-gold" : "bg-gray-900/20 text-gray-500/50 backdrop-blur-sm border border-gray-600/20"}
            ${isToday ? "scale-125 shadow-[0_0_38px_rgba(244,230,194,0.85)]" : isClickable ? "hover:scale-110" : ""}
            ${!isClickable ? "cursor-not-allowed" : "cursor-pointer"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/day/${n}`,
                        children: circleContent
                    }, n, false, {
                        fileName: "[project]/app/components/light-circle.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: circleContent
                }, n, false, {
                    fileName: "[project]/app/components/light-circle.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "lunaris-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/app/lib/useLocalProgress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalProgress",
    ()=>useLocalProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useLocalProgress(token) {
    const key = token ? `advent:progress:${token}` : undefined;
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!key) return;
        try {
            localStorage.setItem(key, JSON.stringify(progress));
        } catch  {}
    }, [
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
}),
"[project]/app/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const override = undefined;
    const day = undefined;
}
}),
"[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonLinkClass",
    ()=>buttonLinkClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Button({ className, variant = "primary", asChild = false, ...rest }, ref) {
    const cn = cx(base, variants[variant], className);
    if (asChild) {
        // Allow using <Button asChild><a /></Button> pattern if desired later
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: cn,
            children: rest.children
        }, void 0, false, {
            fileName: "[project]/app/components/ui/button.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: cn,
        ...rest
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
});
function buttonLinkClass(variant = "link", className) {
    return cx(base, variants[variant], className);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/lib/riddles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$light$2d$circle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/light-circle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/useLocalProgress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/riddles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function DefaultHome() {
    const isDev = ("TURBOPACK compile-time value", "development") === 'development';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 relative z-10 page-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-2",
                children: "Willkommen zum Advent-Abenteuer"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "opacity-90",
                children: "Scanne deinen persönlichen QR-Code, um das mystische Portal zu öffnen."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isDev && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "opacity-60 text-sm",
                        children: "Kein QR-Code? Testlogin:"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/auth?t=test`,
                        className: "mt-2 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
function HomePage({ token, user, hasOverride }) {
    const { progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocalProgress"])(token);
    // Use base date for initial render to match SSR; apply override after mount
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentDayBase"])());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const apply = ()=>{
            setToday((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverrideDay"])() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentDayBase"])());
        };
        apply(); // apply immediately after mount
        window.addEventListener('storage', apply);
        return ()=>window.removeEventListener('storage', apply);
    }, []);
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
    const solvedClues = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["riddles"].filter((r)=>progress.includes(r.id) && r.solution_clue && r.solution_clue.length === 1).map((r)=>r.solution_clue);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative page-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7/12 mx-auto mt-10 h-px",
                style: {
                    background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-serif text-center mt-4 mb-5 text-gold",
                children: "Das Archiv des Vergessenen Lichts"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7/12 mx-auto mb-7 h-px",
                style: {
                    background: 'linear-gradient(to right, transparent, rgb(244, 230, 194), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 mx-auto w-[85vw] h-[85vw] max-w-[520px] max-h-[520px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$light$2d$circle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            solvedClues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gold text-lg mb-4",
                        children: "Gesammelte Fragmente"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-3 flex-wrap",
                        children: solvedClues.map((clue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function Page() {
    // Defer reading localStorage until after mount to keep SSR + first client render identical
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasOverride, setHasOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Populate token/user after mount using microtask to avoid synchronous nested renders warning
        queueMicrotask(()=>{
            try {
                const t = localStorage.getItem('advent:token');
                setToken(t);
                if (t) {
                    const u = localStorage.getItem(`advent:user:${t}`);
                    setUser(u);
                }
                setHasOverride((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverrideDay"])() !== null);
            } catch  {}
            setMounted(true);
        });
        const handleStorage = ()=>{
            queueMicrotask(()=>{
                try {
                    const t = localStorage.getItem('advent:token');
                    setToken(t);
                    if (t) {
                        const u = localStorage.getItem(`advent:user:${t}`);
                        setUser(u);
                    } else {
                        setUser(null);
                    }
                    setHasOverride((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverrideDay"])() !== null);
                } catch  {}
            });
        };
        window.addEventListener('storage', handleStorage);
        return ()=>window.removeEventListener('storage', handleStorage);
    }, []);
    // if user hasn't seen intro yet, redirect to /intro (run only after mount)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !token) return;
        try {
            const seen = localStorage.getItem(`advent:intro-seen:${token}`);
            if (!seen) {
                router.push('/intro');
            }
        } catch  {}
    }, [
        mounted,
        token,
        router
    ]);
    // Stable placeholder (matches SSR and avoids hydration mismatch)
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultHome, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 166,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
        token: token,
        user: user,
        hasOverride: hasOverride
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 170,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__317b6c18._.js.map