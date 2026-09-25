module.exports = [
"[project]/src/app/schemes/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchemesDirectoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemes.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const NAV_TABS = [
    {
        href: "/dashboard",
        icon: "🏠",
        label: "होम",
        en: "Home",
        id: "nav-home"
    },
    {
        href: "/records",
        icon: "📒",
        label: "खाता",
        en: "Records",
        id: "nav-records"
    },
    {
        href: "/schemes",
        icon: "🗂️",
        label: "योजनाएं",
        en: "Schemes",
        id: "nav-schemes"
    },
    {
        href: "/profile",
        icon: "👤",
        label: "प्रोफाइल",
        en: "Profile",
        id: "nav-profile"
    }
];
function SchemesDirectoryPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [schemes, setSchemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [bookmarkedIds, setBookmarkedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedScheme, setSelectedScheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hi"); // 'hi' or 'en'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setBookmarkedIds((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBookmarkedSchemeIds"])());
        loadSchemes();
    }, []);
    const loadSchemes = async ()=>{
        setLoading(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetchSchemes"])();
        setSchemes(data);
        setLoading(false);
    };
    const handleBookmarkToggle = (e, schemeId)=>{
        e.stopPropagation();
        const isSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleBookmarkScheme"])(schemeId);
        setBookmarkedIds((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBookmarkedSchemeIds"])());
    };
    // Filter schemes based on tab and search
    const filteredSchemes = schemes.filter((s)=>{
        const q = search.toLowerCase();
        const matchesSearch = !search || s.name.toLowerCase().includes(q) || s.description && s.description.toLowerCase().includes(q) || s.business_type && s.business_type.toLowerCase().includes(q);
        if (!matchesSearch) return false;
        if (activeTab === "saved") {
            return bookmarkedIds.includes(s.id);
        }
        if (activeTab === "pan_india") {
            return (s.state_region || "").toLowerCase().includes("all india");
        }
        if (activeTab === "state") {
            return !(s.state_region || "").toLowerCase().includes("all india");
        }
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label-sm text-secondary",
                                children: lang === "hi" ? "सरकारी सहायता" : "Government Support"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "headline-sm",
                                children: lang === "hi" ? "सरकारी योजनाएं" : "Government Schemes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setLang(lang === "hi" ? "en" : "hi"),
                        className: "btn btn-secondary",
                        style: {
                            height: "36px",
                            padding: "0 12px",
                            fontSize: "12px"
                        },
                        children: lang === "hi" ? "English" : "हिंदी"
                    }, void 0, false, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            background: "linear-gradient(135deg, #ffdad2 0%, #fff0f0 100%)",
                            border: "1px solid #dec0b9",
                            marginBottom: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "36px"
                                        },
                                        children: "🎯"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "headline-sm",
                                                style: {
                                                    fontSize: "16px",
                                                    color: "#ac3231"
                                                },
                                                children: lang === "hi" ? "आपके लिए कौन सी योजना सही है?" : "Which scheme is right for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body-sm text-secondary",
                                                style: {
                                                    fontSize: "13px"
                                                },
                                                children: lang === "hi" ? "6 सरल प्रश्नों के उत्तर दें और सटीक योजनाएं देखें।" : "Answer 6 simple questions to find matching schemes."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/schemes/check",
                                id: "start-checker-btn",
                                className: "btn btn-primary btn-full",
                                style: {
                                    marginTop: "12px",
                                    height: "44px",
                                    fontSize: "14px"
                                },
                                children: [
                                    lang === "hi" ? "पात्रता जांचें (Scheme Checker)" : "Check Eligibility Now",
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-group",
                        style: {
                            marginBottom: "16px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "scheme-search-input",
                            type: "text",
                            className: "input-field",
                            placeholder: lang === "hi" ? "🔍 योजना का नाम या कीवर्ड खोजें..." : "🔍 Search scheme name or keyword...",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            overflowX: "auto",
                            paddingBottom: "8px",
                            marginBottom: "16px",
                            scrollbars: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "all",
                                onClick: ()=>setActiveTab("all"),
                                label: lang === "hi" ? "सभी (All)" : "All",
                                count: schemes.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "saved",
                                onClick: ()=>setActiveTab("saved"),
                                label: lang === "hi" ? "सहेजे गए (Saved)" : "Saved",
                                count: bookmarkedIds.length,
                                icon: "⭐️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "pan_india",
                                onClick: ()=>setActiveTab("pan_india"),
                                label: lang === "hi" ? "पूरे भारत" : "Pan-India"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "state",
                                onClick: ()=>setActiveTab("state"),
                                label: lang === "hi" ? "राज्य-विशेष" : "State Specific"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "40px 0",
                            color: "#ff6b4a"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner",
                                style: {
                                    margin: "0 auto 12px",
                                    borderColor: "rgba(255,107,74,0.3)",
                                    borderTopColor: "#ff6b4a"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-secondary",
                                children: lang === "hi" ? "योजनाएं लोड हो रही हैं..." : "Loading schemes..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this) : filteredSchemes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            textAlign: "center",
                            padding: "32px 16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "40px",
                                    marginBottom: "8px"
                                },
                                children: "📁"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "headline-sm",
                                children: lang === "hi" ? "कोई योजना नहीं मिली" : "No schemes found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-secondary",
                                style: {
                                    marginTop: "4px"
                                },
                                children: activeTab === "saved" ? lang === "hi" ? "आपने अभी तक कोई योजना सहेज (bookmark) नहीं की है।" : "You haven't bookmarked any schemes yet." : lang === "hi" ? "कृपया अलग शब्द खोजें या फ़िल्टर बदलें।" : "Try searching with a different term."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        },
                        children: filteredSchemes.map((scheme)=>{
                            const isBookmarked = bookmarkedIds.includes(scheme.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                onClick: ()=>setSelectedScheme(scheme),
                                style: {
                                    cursor: "pointer",
                                    position: "relative",
                                    transition: "transform 0.15s ease, box-shadow 0.15s ease"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(74,62,61,0.1)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = "";
                                    e.currentTarget.style.boxShadow = "";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "8px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-sm",
                                                        style: {
                                                            background: "#e8f5e9",
                                                            color: "#006e25",
                                                            padding: "2px 8px",
                                                            borderRadius: "12px",
                                                            fontSize: "11px",
                                                            display: "inline-block",
                                                            marginBottom: "4px"
                                                        },
                                                        children: scheme.state_region
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schemes/page.js",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "headline-sm",
                                                        style: {
                                                            fontSize: "16px"
                                                        },
                                                        children: scheme.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schemes/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "label-sm text-secondary",
                                                        style: {
                                                            fontSize: "12px",
                                                            marginTop: "2px"
                                                        },
                                                        children: scheme.introduced_by
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schemes/page.js",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>handleBookmarkToggle(e, scheme.id),
                                                style: {
                                                    background: "none",
                                                    border: "none",
                                                    fontSize: "20px",
                                                    cursor: "pointer",
                                                    padding: "4px"
                                                },
                                                title: isBookmarked ? "Unbookmark" : "Bookmark",
                                                children: isBookmarked ? "⭐️" : "☆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-sm text-secondary",
                                        style: {
                                            marginTop: "8px",
                                            lineClamp: 2,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden"
                                        },
                                        children: scheme.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 267,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "12px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-sm text-brand",
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                children: "विवरण देखें (View Details) →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 272,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-sm",
                                                style: {
                                                    background: "#fff0f0",
                                                    color: "#ac3231",
                                                    padding: "2px 8px",
                                                    borderRadius: "8px",
                                                    fontSize: "11px"
                                                },
                                                children: scheme.urban_rural || "Both"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, scheme.id, true, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 210,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            selectedScheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SchemeDetailModal, {
                scheme: selectedScheme,
                isBookmarked: bookmarkedIds.includes(selectedScheme.id),
                onClose: ()=>setSelectedScheme(null),
                onBookmarkToggle: (e)=>handleBookmarkToggle(e, selectedScheme.id),
                lang: lang
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 288,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bottom-nav",
                children: NAV_TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: tab.href,
                        id: tab.id,
                        className: `nav-tab${tab.href === "/schemes" ? " active" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: tab.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-label",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function TabButton({ active, onClick, label, count, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            border: "1.5px solid " + (active ? "#ff7e5f" : "#f3e3d3"),
            background: active ? "#ffdad2" : "#ffffff",
            color: active ? "#ac3231" : "#4a3e3d",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
        },
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 334,
                columnNumber: 16
            }, this),
            label,
            count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    background: active ? "#ff7e5f" : "#fff0f0",
                    color: active ? "#fff" : "#ac3231",
                    borderRadius: "10px",
                    padding: "0 6px",
                    fontSize: "11px"
                },
                children: count
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 337,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
function SchemeDetailModal({ scheme, isBookmarked, onClose, onBookmarkToggle, lang }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 200,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            onClick: (e)=>e.stopPropagation(),
            style: {
                width: "100%",
                maxWidth: "600px",
                maxHeight: "85vh",
                overflowY: "auto",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: "20px",
                background: "#fff",
                animation: "slideUp 0.25s ease-out"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-sm",
                                    style: {
                                        background: "#e8f5e9",
                                        color: "#006e25",
                                        padding: "2px 8px",
                                        borderRadius: "12px"
                                    },
                                    children: scheme.state_region
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "headline-sm",
                                    style: {
                                        marginTop: "4px"
                                    },
                                    children: scheme.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-sm text-secondary",
                                    children: scheme.introduced_by
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: "#f0f0f0",
                                border: "none",
                                borderRadius: "50%",
                                width: "32px",
                                height: "32px",
                                cursor: "pointer",
                                fontSize: "16px"
                            },
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "body-sm text-secondary",
                    style: {
                        marginTop: "12px"
                    },
                    children: scheme.description
                }, void 0, false, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 411,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px",
                        marginTop: "16px",
                        background: "#fff0f0",
                        padding: "12px",
                        borderRadius: "12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-sm text-secondary",
                                    children: lang === "hi" ? "आयु सीमा" : "Age Group"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-md",
                                    children: scheme.age_group || "18+ years"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-sm text-secondary",
                                    children: lang === "hi" ? "क्षेत्र" : "Area"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-md",
                                    children: scheme.urban_rural || "Both"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gridColumn: "1 / -1"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-sm text-secondary",
                                    children: lang === "hi" ? "व्यवसाय का प्रकार" : "Business Sector"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label-md",
                                    style: {
                                        fontSize: "13px"
                                    },
                                    children: scheme.business_type
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 416,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "16px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "label-md",
                            style: {
                                color: "#ac3231"
                            },
                            children: [
                                "📄 ",
                                lang === "hi" ? "आवश्यक दस्तावेज (Required Documents)" : "Required Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                paddingLeft: "20px",
                                marginTop: "6px"
                            },
                            className: "body-sm text-secondary",
                            children: (scheme.documents_required || []).map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: doc
                                }, idx, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 448,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "16px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "label-md",
                            style: {
                                color: "#ac3231"
                            },
                            children: [
                                "📌 ",
                                lang === "hi" ? "आवेदन कैसे करें (How to Apply)" : "How to Apply"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            style: {
                                paddingLeft: "20px",
                                marginTop: "6px"
                            },
                            className: "body-sm text-secondary",
                            children: (scheme.application_steps || []).map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    style: {
                                        marginBottom: "4px"
                                    },
                                    children: step
                                }, idx, false, {
                                    fileName: "[project]/src/app/schemes/page.js",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "20px",
                        display: "flex",
                        gap: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBookmarkToggle,
                            className: "btn btn-secondary",
                            style: {
                                flex: 1,
                                height: "46px",
                                fontSize: "14px"
                            },
                            children: isBookmarked ? "⭐️ " + (lang === "hi" ? "सहेजा गया" : "Saved") : "☆ " + (lang === "hi" ? "सहेजें (Bookmark)" : "Bookmark")
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: scheme.official_link || "https://www.myscheme.gov.in/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn btn-primary",
                            style: {
                                flex: 1,
                                height: "46px",
                                fontSize: "14px",
                                textDecoration: "none"
                            },
                            children: lang === "hi" ? "ऑफिशियल लिंक 🔗" : "Official Link 🔗"
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schemes/page.js",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 370,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/schemes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiCheckEligibility",
    ()=>apiCheckEligibility,
    "apiFetchSchemeById",
    ()=>apiFetchSchemeById,
    "apiFetchSchemes",
    ()=>apiFetchSchemes,
    "cacheSchemes",
    ()=>cacheSchemes,
    "getBookmarkedSchemeIds",
    ()=>getBookmarkedSchemeIds,
    "getCachedSchemes",
    ()=>getCachedSchemes,
    "getStoredMatches",
    ()=>getStoredMatches,
    "isSchemeBookmarked",
    ()=>isSchemeBookmarked,
    "toggleBookmarkScheme",
    ()=>toggleBookmarkScheme
]);
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
const BOOKMARKS_KEY = "sakhibiz_bookmarked_schemes";
const SCHEMES_CACHE_KEY = "sakhibiz_cached_schemes";
const LAST_MATCHES_KEY = "sakhibiz_last_scheme_matches";
// Pre-seeded fallback data for instant offline access even on first run
const DEFAULT_OFFLINE_SCHEMES = [
    {
        id: 1,
        name: "Pradhan Mantri Mudra Yojana (PMMY)",
        description: "Collateral-free loans up to ₹20 lakh (Shishu / Kishor / Tarun) for micro non-farm enterprises; priority & interest concessions for women",
        introduced_by: "Central Government (Ministry of Finance)",
        state_region: "All India",
        urban_rural: "Both",
        age_group: "18–65 years",
        category_preference: "Priority to women, SC/ST/OBC",
        business_type: "Non-farm micro enterprises (manufacturing, trading, services)",
        documents_required: [
            "Aadhaar Card",
            "PAN Card",
            "Bank Account Details",
            "Business Plan",
            "Passport photographs"
        ],
        application_steps: [
            "Check eligibility requirements",
            "Gather required documents",
            "Apply via Mudra portal or nearest bank branch"
        ],
        official_link: "https://www.mudra.org.in/"
    },
    {
        id: 2,
        name: "Stand-Up India Scheme",
        description: "Bank loans ₹10 lakh–₹1 crore for greenfield enterprises by women (and SC/ST); one woman borrower per bank branch",
        introduced_by: "Central Government (Ministry of Finance)",
        state_region: "All India",
        urban_rural: "Both",
        age_group: "18+ years",
        category_preference: "Women (any caste) + SC/ST",
        business_type: "Greenfield manufacturing, services, trading, agri-allied",
        documents_required: [
            "Identity Proof",
            "Address Proof",
            "Caste Certificate (if SC/ST)",
            "Project Report",
            "Pollution Clearance"
        ],
        application_steps: [
            "Register on Stand-Up India Portal",
            "Fill online loan application",
            "Connect with assigned bank branch"
        ],
        official_link: "https://www.standupmitra.in/"
    },
    {
        id: 3,
        name: "Prime Minister’s Employment Generation Programme (PMEGP)",
        description: "Credit-linked subsidy (up to 35% for women) for new micro enterprises in manufacturing/services",
        introduced_by: "Central Government (Ministry of MSME via KVIC)",
        state_region: "All India",
        urban_rural: "Both (higher subsidy rural)",
        age_group: "18+ years",
        category_preference: "Special category: Women, SC/ST, OBC (higher subsidy)",
        business_type: "New micro enterprises (manufacturing up to ₹50L, services up to ₹20L)",
        documents_required: [
            "Aadhaar",
            "EDP Training Certificate",
            "Project Report",
            "Caste/Special Category Certificate"
        ],
        application_steps: [
            "Apply online via KVIC e-portal",
            "Score EDP training",
            "Bank approval & subsidy release"
        ],
        official_link: "https://www.kviconline.gov.in/pmegpeportal/"
    },
    {
        id: 9,
        name: "DAY-NRLM / Lakhpati Didi",
        description: "SHG mobilisation, credit, enterprise support to make rural women earn ≥₹1 lakh/year",
        introduced_by: "Central Government (Ministry of Rural Development)",
        state_region: "All India (rural)",
        urban_rural: "Rural",
        age_group: "18+ years",
        category_preference: "Rural poor women (priority SC/ST)",
        business_type: "SHG-based farm & non-farm enterprises",
        documents_required: [
            "Aadhaar",
            "SHG Membership Passbook",
            "Bank Account Details"
        ],
        application_steps: [
            "Join or form local SHG",
            "Apply for Revolving Fund / Community Investment Fund",
            "Scale up enterprise"
        ],
        official_link: "https://daynrlm.gov.in/"
    },
    {
        id: 14,
        name: "Udyogini Scheme",
        description: "Subsidised bank loans up to ₹3 lakh (30–50% subsidy) for women in trade/services",
        introduced_by: "Government of Karnataka (KSWDC)",
        state_region: "Karnataka",
        urban_rural: "Both",
        age_group: "18–55 years",
        category_preference: "Higher subsidy SC/ST (50%); General/Special 30%",
        business_type: "Trade & service micro enterprises",
        documents_required: [
            "Karnataka Domicile Proof",
            "Aadhaar Card",
            "Income Certificate",
            "BPL Card / Caste Certificate"
        ],
        application_steps: [
            "Obtain application form from CDPO / KSWDC office",
            "Submit with income & project details",
            "Sanction by bank committee"
        ],
        official_link: "https://kswdc.karnataka.gov.in/"
    }
];
function getBookmarkedSchemeIds() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function isSchemeBookmarked(schemeId) {
    const bookmarks = getBookmarkedSchemeIds();
    return bookmarks.includes(Number(schemeId));
}
function toggleBookmarkScheme(schemeId) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const id = undefined;
    let bookmarks;
    let isSaved;
}
function getCachedSchemes() {
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_OFFLINE_SCHEMES;
    //TURBOPACK unreachable
    ;
}
function cacheSchemes(schemes) {
    if (("TURBOPACK compile-time value", "undefined") === "undefined" || !Array.isArray(schemes)) return;
    //TURBOPACK unreachable
    ;
}
async function apiFetchSchemes(filters = {}) {
    const params = new URLSearchParams();
    if (filters.state) params.append("state", filters.state);
    if (filters.urban_rural) params.append("urban_rural", filters.urban_rural);
    if (filters.category) params.append("category", filters.category);
    if (filters.search) params.append("search", filters.search);
    try {
        const res = await fetch(`${API_BASE}/schemes?${params.toString()}`);
        if (res.ok) {
            const data = await res.json();
            if (data.schemes && data.schemes.length > 0) {
                cacheSchemes(data.schemes);
                return data.schemes;
            }
        }
    } catch (err) {
        console.warn("API request failed, falling back to offline cached schemes:", err);
    }
    // Offline Fallback
    let schemes = getCachedSchemes();
    if (filters.search) {
        const q = filters.search.toLowerCase();
        schemes = schemes.filter((s)=>s.name && s.name.toLowerCase().includes(q) || s.description && s.description.toLowerCase().includes(q));
    }
    return schemes;
}
async function apiFetchSchemeById(id) {
    try {
        const res = await fetch(`${API_BASE}/schemes/${id}`);
        if (res.ok) {
            const data = await res.json();
            return data.scheme;
        }
    } catch (err) {
        console.warn("Failed to fetch scheme from API, checking local cache:", err);
    }
    const cachedSchemes = getCachedSchemes();
    return cachedSchemes.find((s)=>s.id === Number(id)) || null;
}
/**
 * Run intelligent offline scheme matching algorithm when server is offline.
 */ function runOfflineMatching(payload, schemes) {
    const userState = (payload.state || "").trim();
    const userUrbanRural = (payload.urban_rural || "").trim();
    const userAge = payload.age ? parseInt(payload.age, 10) : null;
    const userCategory = (payload.category || "").trim();
    const userBusinessType = (payload.business_type || "").trim();
    const isShgMember = !!payload.is_shg_member;
    const results = [];
    for (const scheme of schemes){
        let score = 50;
        const reasons = [];
        const sState = (scheme.state_region || "").toLowerCase();
        if (sState.includes("all india")) {
            score += 20;
            reasons.append("Pan-India scheme available in all states");
        } else if (userState && sState.includes(userState.toLowerCase())) {
            score += 30;
            reasons.push(`Specifically tailored for ${scheme.state_region} residents`);
        } else if (userState && !sState.includes("all india") && !sState.includes(userState.toLowerCase())) {
            score -= 40;
        }
        const sUr = (scheme.urban_rural || "").toLowerCase();
        if (sUr.includes("both")) {
            score += 10;
            reasons.push("Applies to both urban and rural areas");
        } else if (userUrbanRural && sUr.includes(userUrbanRural.toLowerCase())) {
            score += 15;
            reasons.push(`Matches your location type (${userUrbanRural})`);
        }
        const isShgFocused = (scheme.name + " " + (scheme.description || "")).toLowerCase().includes("shg");
        if (isShgFocused) {
            if (isShgMember) {
                score += 25;
                reasons.push("Exclusive benefits for Self-Help Group (SHG) members");
            } else {
                score -= 10;
                reasons.push("SHG membership preferred/required");
            }
        }
        const sCat = (scheme.category_preference || "").toLowerCase();
        if (userCategory && sCat.includes(userCategory.toLowerCase())) {
            score += 15;
            reasons.push(`Special priority for ${userCategory} category`);
        } else if (sCat.includes("women")) {
            score += 10;
            reasons.push("Priority assistance for women entrepreneurs");
        }
        if (userBusinessType && (scheme.business_type || "").toLowerCase().includes(userBusinessType.toLowerCase())) {
            score += 20;
            reasons.push(`Fits your business sector (${userBusinessType})`);
        }
        const finalScore = Math.max(10, Math.min(100, score));
        if (finalScore >= 40) {
            results.push({
                scheme,
                match_score: finalScore,
                match_reasons: reasons.length > 0 ? reasons : [
                    "General eligibility match"
                ],
                documents_required: scheme.documents_required || [
                    "Aadhaar Card",
                    "PAN Card",
                    "Bank Passbook"
                ],
                application_steps: scheme.application_steps || [
                    "Visit official website",
                    "Fill online application form"
                ]
            });
        }
    }
    results.sort((a, b)=>b.match_score - a.match_score);
    return {
        matches: results,
        total_matches: results.length
    };
}
async function apiCheckEligibility(payload) {
    try {
        const res = await fetch(`${API_BASE}/schemes/check`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            const data = await res.json();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return data;
        }
    } catch (err) {
        console.warn("API check request failed, running offline client-side matching:", err);
    }
    // Offline matching fallback
    const cachedSchemes = getCachedSchemes();
    const offlineResults = runOfflineMatching(payload, cachedSchemes);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return offlineResults;
}
function getStoredMatches() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
}),
];

//# sourceMappingURL=src_0v_-la5._.js.map