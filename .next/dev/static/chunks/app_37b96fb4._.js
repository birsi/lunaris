(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        solution_clue: "U"
    },
    {
        id: 2,
        title: "Das Siegel der Fünf Linien",
        text: "Verbinde die fünf Linien zu einem Siegel. Trage den mittleren Buchstaben in dein Fragmentbuch ein.",
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
                lines: 1,
                type: 'line'
            },
            {
                id: 2,
                lines: 2,
                type: 'line'
            },
            {
                id: 3,
                lines: 4,
                type: 'rectangle'
            },
            {
                id: 4,
                lines: 4,
                type: 'square'
            },
            {
                id: 5,
                lines: 5,
                type: 'line'
            }
        ]
    },
    {
        id: 3,
        title: "Die Stimmen von Geometris",
        text: "TBD",
        text_solution: `<p>Als die Formen übereinander lagen, flackerte der Obelisk auf. Ein Zeichen erschien — ein Kreis, der sich öffnete wie ein Atemzug.</p>
<p>Ein kleines Fach am Sockel sprang auf. Darin lag ein weiteres Lichtfragment.</p>
<p>Larissa nahm es mit schnellen Fingern heraus. Doch als sie sich umdrehte, schwor sie, Schritte gehört zu haben —</p>
<p>und ein Schatten verschwand zwischen den Häusern.</p>`,
        code: "S",
        image: "/images/days/3.png",
        solution_audio: "/audio/solution-3.mp3",
        solution_clue: "Das ist ein Hinweis"
    }
];
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
"[project]/app/day/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/riddles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/useLocalProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DayPage({ params }) {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const n = parseInt(id, 10);
    const riddle = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$riddles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["riddles"].find((r)=>r.id === n);
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSolution, setShowSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wrongKey, setWrongKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Use base date for initial render (matches SSR). Override applied after mount.
    const [currentDay, setCurrentDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DayPage.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentDayBase"])()
    }["DayPage.useState"]);
    const [currentDayResolved, setCurrentDayResolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get token and progress hook
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DayPage.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem("advent:token");
            }
            //TURBOPACK unreachable
            ;
        }
    }["DayPage.useState"]);
    const { progress, openDay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalProgress"])(token);
    const isSolved = progress.includes(n);
    // Only determine accessibility after we've applied client-side override
    const isAccessible = currentDayResolved ? isSolved || n <= currentDay : isSolved;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayPage.useEffect": ()=>{
            const handle = {
                "DayPage.useEffect.handle": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        const t = localStorage.getItem('advent:token');
                        setToken(t);
                        setCurrentDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverrideDay"])() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentDayBase"])());
                        setCurrentDayResolved(true);
                        setMounted(true);
                        // if already solved earlier, show solution text immediately
                        if (progress.includes(n)) setShowSolution(true);
                    }
                }
            }["DayPage.useEffect.handle"];
            handle(); // run once after mount
            window.addEventListener('storage', handle);
            return ({
                "DayPage.useEffect": ()=>window.removeEventListener('storage', handle)
            })["DayPage.useEffect"];
        }
    }["DayPage.useEffect"], [
        n,
        progress
    ]);
    // If we haven't mounted on client yet, render nothing to avoid SSR -> client flicker
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-80"
        }, void 0, false, {
            fileName: "[project]/app/day/[id]/page.tsx",
            lineNumber: 55,
            columnNumber: 12
        }, this);
    }
    function check() {
        if (!riddle) return;
        if (answer.trim().toLowerCase() === riddle.code.toLowerCase()) {
            setResult("correct");
            // Mark day as solved/unlocked
            if (token) {
                openDay(n);
                setShowSolution(true);
            }
        } else {
            setResult("wrong");
            setWrongKey((prev)=>prev + 1);
        }
    }
    if (!riddle) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 relative z-10 page-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-serif mb-4",
                    children: [
                        "Tag ",
                        n
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Für diesen Tag wurde kein Rätsel definiert."
                }, void 0, false, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-gold underline",
                        children: "Zurück"
                    }, void 0, false, {
                        fileName: "[project]/app/day/[id]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/day/[id]/page.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    // non-null alias for TypeScript
    const r = riddle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative z-10 page-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-2 font-serif",
                children: r.title
            }, void 0, false, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm opacity-60 mb-4",
                children: [
                    "Tag ",
                    n,
                    " · ",
                    isSolved ? 'Gelöst ✔' : 'Noch nicht gelöst'
                ]
            }, void 0, true, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0d0f19]/70 p-4 rounded-lg shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-90 text-gold/90 whitespace-pre-line",
                    children: r.text
                }, void 0, false, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            r.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 mx-auto my-4 rounded-lg shadow-lg border border-gold/20 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        width: '100%',
                        paddingTop: '150%'
                    },
                    className: "bg-[#07090a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: r.image,
                        alt: r.title,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, 50vw",
                        placeholder: "blur",
                        blurDataURL: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 7'><rect width='10' height='7' fill='%230a0c10'/></svg>",
                        className: "absolute inset-0 w-full h-full object-contain object-center"
                    }, void 0, false, {
                        fileName: "[project]/app/day/[id]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    !isSolved && !showSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: n === 2 ? // Drag and drop puzzle for day 2
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gold/80 text-center",
                                    children: "Ordne die Symbole in aufsteigender Reihenfolge (1 bis 5):"
                                }, void 0, false, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-4 flex-wrap",
                                    children: symbols.map((symbol, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            draggable: true,
                                            onDragStart: (e)=>handleDragStart(e, symbol.id),
                                            onDragOver: handleDragOver,
                                            onDragLeave: handleDragLeave,
                                            onDrop: (e)=>handleDrop(e, index),
                                            onDragEnd: handleDragEnd,
                                            className: "w-16 h-16 bg-night/50 border-2 border-gold/30 rounded-lg flex items-center justify-center cursor-move hover:border-gold/60 transition-colors select-none",
                                            style: {
                                                opacity: draggedSymbol === symbol.id ? 0.5 : 1
                                            },
                                            children: symbol.type === 'line' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center h-full",
                                                children: Array.from({
                                                    length: symbol.lines
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-1 bg-gold mb-1 last:mb-0 rounded-sm shadow-sm"
                                                    }, i, false, {
                                                        fileName: "[project]/app/day/[id]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/day/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 25
                                            }, this) : symbol.type === 'rectangle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-5 bg-gold border border-gold/50 rounded-sm shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/day/[id]/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 25
                                            }, this) : symbol.type === 'square' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 bg-gold border border-gold/50 rounded-sm shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/day/[id]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 25
                                            }, this) : null
                                        }, symbol.id, false, {
                                            fileName: "[project]/app/day/[id]/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gold/60 text-center",
                                    children: "Ziehe die Symbole, um sie zu ordnen"
                                }, void 0, false, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/day/[id]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this) : // Normal text input for other days
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: answer,
                                    onChange: (e)=>setAnswer(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter") {
                                            check();
                                        }
                                    },
                                    placeholder: "Lösung eingeben…",
                                    className: "w-full px-4 py-2 rounded bg-night border border-gold/30 text-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                                }, void 0, false, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: check,
                                            "aria-label": "Antwort prüfen",
                                            className: "active:scale-95 transition-transform",
                                            children: "Prüfen"
                                        }, void 0, false, {
                                            fileName: "[project]/app/day/[id]/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        result === "wrong" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400 text-sm font-medium solution-reveal",
                                            children: "✘ Falsch, versuche es erneut."
                                        }, wrongKey, false, {
                                            fileName: "[project]/app/day/[id]/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false),
                    (isSolved || showSolution) && r.text_solution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "solution-divider"
                            }, void 0, false, {
                                fileName: "[project]/app/day/[id]/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            r.solution_clue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-gold/10 border border-gold/30 rounded-md solution-reveal mx-auto w-1/4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gold font-semibold mb-2 text-center",
                                        children: "Lösungsfragment"
                                    }, void 0, false, {
                                        fileName: "[project]/app/day/[id]/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-gold text-center ${r.solution_clue.length === 1 ? 'text-2xl font-mono' : 'text-lg font-normal'}`,
                                        children: r.solution_clue
                                    }, void 0, false, {
                                        fileName: "[project]/app/day/[id]/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/day/[id]/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-night/80 p-4 rounded-md solution-reveal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gold leading-relaxed",
                                    dangerouslySetInnerHTML: {
                                        __html: r.text_solution
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/day/[id]/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/day/[id]/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            r.solution_audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                controls: true,
                                preload: "auto",
                                className: "mt-4 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        src: r.solution_audio,
                                        type: "audio/mpeg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/day/[id]/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    "Your browser does not support the audio element."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/day/[id]/page.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/day/[id]/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonLinkClass"])(),
                    children: "Zurück"
                }, void 0, false, {
                    fileName: "[project]/app/day/[id]/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/day/[id]/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/day/[id]/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(DayPage, "r57WdkvBvS4+g8Gonb2ufdHXGag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useLocalProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalProgress"]
    ];
});
_c = DayPage;
var _c;
__turbopack_context__.k.register(_c, "DayPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_37b96fb4._.js.map