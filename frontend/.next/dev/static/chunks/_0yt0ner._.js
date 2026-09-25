(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
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
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
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
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
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
            onNavigate: true,
            transitionTypes: true
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
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
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
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
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
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
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
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
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
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
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
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
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
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
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
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
}
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
}
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
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
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
                value: "E1035",
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
            value: "E1025",
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
}
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
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/app/schemes/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchemesDirectoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemes.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [schemes, setSchemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [bookmarkedIds, setBookmarkedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedScheme, setSelectedScheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hi"); // 'hi' or 'en'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchemesDirectoryPage.useEffect": ()=>{
            setBookmarkedIds((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookmarkedSchemeIds"])());
            loadSchemes();
        }
    }["SchemesDirectoryPage.useEffect"], []);
    const loadSchemes = async ()=>{
        setLoading(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetchSchemes"])();
        setSchemes(data);
        setLoading(false);
    };
    const handleBookmarkToggle = (e, schemeId)=>{
        e.stopPropagation();
        const isSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleBookmarkScheme"])(schemeId);
        setBookmarkedIds((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookmarkedSchemeIds"])());
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label-sm text-secondary",
                                children: lang === "hi" ? "सरकारी सहायता" : "Government Support"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "headline-sm",
                                children: lang === "hi" ? "सरकारी योजनाएं" : "Government Schemes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            background: "linear-gradient(135deg, #ffdad2 0%, #fff0f0 100%)",
                            border: "1px solid #dec0b9",
                            marginBottom: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "36px"
                                        },
                                        children: "🎯"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "headline-sm",
                                                style: {
                                                    fontSize: "16px",
                                                    color: "#ac3231"
                                                },
                                                children: lang === "hi" ? "आपके लिए कौन सी योजना सही है?" : "Which scheme is right for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body-sm text-secondary",
                                                style: {
                                                    fontSize: "13px"
                                                },
                                                children: lang === "hi" ? "6 सरल प्रश्नों के उत्तर दें और सटीक योजनाएं देखें।" : "Answer 6 simple questions to find matching schemes."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-group",
                        style: {
                            marginBottom: "16px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "scheme-search-input",
                            type: "text",
                            className: "input-field",
                            placeholder: lang === "hi" ? "🔍 योजना का नाम या कीवर्ड खोजें..." : "🔍 Search scheme name or keyword...",
                            value: search,
                            onChange: (e_0)=>setSearch(e_0.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/schemes/page.js",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            overflowX: "auto",
                            paddingBottom: "8px",
                            marginBottom: "16px",
                            scrollbars: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "all",
                                onClick: ()=>setActiveTab("all"),
                                label: lang === "hi" ? "सभी (All)" : "All",
                                count: schemes.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "saved",
                                onClick: ()=>setActiveTab("saved"),
                                label: lang === "hi" ? "सहेजे गए (Saved)" : "Saved",
                                count: bookmarkedIds.length,
                                icon: "⭐️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "pan_india",
                                onClick: ()=>setActiveTab("pan_india"),
                                label: lang === "hi" ? "पूरे भारत" : "Pan-India"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                active: activeTab === "state",
                                onClick: ()=>setActiveTab("state"),
                                label: lang === "hi" ? "राज्य-विशेष" : "State Specific"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "40px 0",
                            color: "#ff6b4a"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner",
                                style: {
                                    margin: "0 auto 12px",
                                    borderColor: "rgba(255,107,74,0.3)",
                                    borderTopColor: "#ff6b4a"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-secondary",
                                children: lang === "hi" ? "योजनाएं लोड हो रही हैं..." : "Loading schemes..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 158,
                        columnNumber: 20
                    }, this) : filteredSchemes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            textAlign: "center",
                            padding: "32px 16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "40px",
                                    marginBottom: "8px"
                                },
                                children: "📁"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "headline-sm",
                                children: lang === "hi" ? "कोई योजना नहीं मिली" : "No schemes found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-secondary",
                                style: {
                                    marginTop: "4px"
                                },
                                children: activeTab === "saved" ? lang === "hi" ? "आपने अभी तक कोई योजना सहेज (bookmark) नहीं की है।" : "You haven't bookmarked any schemes yet." : lang === "hi" ? "कृपया अलग शब्द खोजें या फ़िल्टर बदलें।" : "Try searching with a different term."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 171,
                        columnNumber: 51
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        },
                        children: filteredSchemes.map((scheme)=>{
                            const isBookmarked = bookmarkedIds.includes(scheme.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                onClick: ()=>setSelectedScheme(scheme),
                                style: {
                                    cursor: "pointer",
                                    position: "relative",
                                    transition: "transform 0.15s ease, box-shadow 0.15s ease"
                                },
                                onMouseEnter: (e_1)=>{
                                    e_1.currentTarget.style.transform = "translateY(-2px)";
                                    e_1.currentTarget.style.boxShadow = "0 6px 16px rgba(74,62,61,0.1)";
                                },
                                onMouseLeave: (e_2)=>{
                                    e_2.currentTarget.style.transform = "";
                                    e_2.currentTarget.style.boxShadow = "";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "8px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 212,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "headline-sm",
                                                        style: {
                                                            fontSize: "16px"
                                                        },
                                                        children: scheme.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schemes/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "label-sm text-secondary",
                                                        style: {
                                                            fontSize: "12px",
                                                            marginTop: "2px"
                                                        },
                                                        children: scheme.introduced_by
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schemes/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e_3)=>handleBookmarkToggle(e_3, scheme.id),
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
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "12px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-sm text-brand",
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                children: "विवरण देखें (View Details) →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schemes/page.js",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schemes/page.js",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, scheme.id, true, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 194,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 187,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            selectedScheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SchemeDetailModal, {
                scheme: selectedScheme,
                isBookmarked: bookmarkedIds.includes(selectedScheme.id),
                onClose: ()=>setSelectedScheme(null),
                onBookmarkToggle: (e_4)=>handleBookmarkToggle(e_4, selectedScheme.id),
                lang: lang
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 285,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bottom-nav",
                children: NAV_TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: tab.href,
                        id: tab.id,
                        className: `nav-tab${tab.href === "/schemes" ? " active" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: tab.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-label",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/schemes/page.js",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/app/schemes/page.js",
                        lineNumber: 289,
                        columnNumber: 30
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/schemes/page.js",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
_s(SchemesDirectoryPage, "ZROC0DuO3W3SzAqTabgcJZJbdew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SchemesDirectoryPage;
function TabButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "17f1b4dca3afc6b84c80ca07113882fd8990caa81977bfc052b3d90443a2b2f1") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17f1b4dca3afc6b84c80ca07113882fd8990caa81977bfc052b3d90443a2b2f1";
    }
    const { active, onClick, label, count, icon } = t0;
    const t1 = "1.5px solid " + (active ? "#ff7e5f" : "#f3e3d3");
    const t2 = active ? "#ffdad2" : "#ffffff";
    const t3 = active ? "#ac3231" : "#4a3e3d";
    let t4;
    if ($[1] !== t1 || $[2] !== t2 || $[3] !== t3) {
        t4 = {
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            border: t1,
            background: t2,
            color: t3,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== icon) {
        t5 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 339,
            columnNumber: 18
        }, this);
        $[5] = icon;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== active || $[8] !== count) {
        t6 = count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            lineNumber: 347,
            columnNumber: 33
        }, this);
        $[7] = active;
        $[8] = count;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== label || $[11] !== onClick || $[12] !== t4 || $[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            style: t4,
            children: [
                t5,
                label,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 362,
            columnNumber: 10
        }, this);
        $[10] = label;
        $[11] = onClick;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_c1 = TabButton;
function SchemeDetailModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(103);
    if ($[0] !== "17f1b4dca3afc6b84c80ca07113882fd8990caa81977bfc052b3d90443a2b2f1") {
        for(let $i = 0; $i < 103; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17f1b4dca3afc6b84c80ca07113882fd8990caa81977bfc052b3d90443a2b2f1";
    }
    const { scheme, isBookmarked, onClose, onBookmarkToggle, lang } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
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
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            width: "100%",
            maxWidth: "600px",
            maxHeight: "85vh",
            overflowY: "auto",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: "20px",
            background: "#fff",
            animation: "slideUp 0.25s ease-out"
        };
        t3 = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "12px"
        };
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "#e8f5e9",
            color: "#006e25",
            padding: "2px 8px",
            borderRadius: "12px"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== scheme.state_region) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "label-sm",
            style: t4,
            children: scheme.state_region
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 447,
            columnNumber: 10
        }, this);
        $[5] = scheme.state_region;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            marginTop: "4px"
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== scheme.name) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "headline-sm",
            style: t6,
            children: scheme.name
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 464,
            columnNumber: 10
        }, this);
        $[8] = scheme.name;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== scheme.introduced_by) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-sm text-secondary",
            children: scheme.introduced_by
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 472,
            columnNumber: 10
        }, this);
        $[10] = scheme.introduced_by;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t5 || $[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 480,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            background: "#f0f0f0",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            fontSize: "16px"
        };
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== onClose) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            style: t10,
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[17] = onClose;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 513,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t9;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            marginTop: "12px"
        };
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== scheme.description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "body-sm text-secondary",
            style: t13,
            children: scheme.description
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[23] = scheme.description;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginTop: "16px",
            background: "#fff0f0",
            padding: "12px",
            borderRadius: "12px"
        };
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = lang === "hi" ? "\u0906\u092F\u0941 \u0938\u0940\u092E\u093E" : "Age Group";
    let t17;
    if ($[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-sm text-secondary",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    const t18 = scheme.age_group || "18+ years";
    let t19;
    if ($[28] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-md",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 564,
            columnNumber: 11
        }, this);
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== t17 || $[31] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t19;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    const t21 = lang === "hi" ? "\u0915\u094D\u0937\u0947\u0924\u094D\u0930" : "Area";
    let t22;
    if ($[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-sm text-secondary",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    const t23 = scheme.urban_rural || "Both";
    let t24;
    if ($[35] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-md",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[35] = t23;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== t22 || $[38] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t24;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            gridColumn: "1 / -1"
        };
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    const t27 = lang === "hi" ? "\u0935\u094D\u092F\u0935\u0938\u093E\u092F \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930" : "Business Sector";
    let t28;
    if ($[41] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-sm text-secondary",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[41] = t27;
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            fontSize: "13px"
        };
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== scheme.business_type) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label-md",
            style: t29,
            children: scheme.business_type
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[44] = scheme.business_type;
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] !== t28 || $[47] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t26,
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 643,
            columnNumber: 11
        }, this);
        $[46] = t28;
        $[47] = t30;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    let t32;
    if ($[49] !== t20 || $[50] !== t25 || $[51] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t15,
            children: [
                t20,
                t25,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[49] = t20;
        $[50] = t25;
        $[51] = t31;
        $[52] = t32;
    } else {
        t32 = $[52];
    }
    let t33;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            marginTop: "16px"
        };
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            color: "#ac3231"
        };
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    const t35 = lang === "hi" ? "\u0906\u0935\u0936\u094D\u092F\u0915 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C (Required Documents)" : "Required Documents";
    let t36;
    if ($[55] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "label-md",
            style: t34,
            children: [
                "📄 ",
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 681,
            columnNumber: 11
        }, this);
        $[55] = t35;
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            paddingLeft: "20px",
            marginTop: "6px"
        };
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] !== scheme.documents_required) {
        t38 = scheme.documents_required || [];
        $[58] = scheme.documents_required;
        $[59] = t38;
    } else {
        t38 = $[59];
    }
    let t39;
    if ($[60] !== t38) {
        t39 = t38.map(_SchemeDetailModalAnonymous);
        $[60] = t38;
        $[61] = t39;
    } else {
        t39 = $[61];
    }
    let t40;
    if ($[62] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            style: t37,
            className: "body-sm text-secondary",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 715,
            columnNumber: 11
        }, this);
        $[62] = t39;
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] !== t36 || $[65] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t33,
            children: [
                t36,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 723,
            columnNumber: 11
        }, this);
        $[64] = t36;
        $[65] = t40;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            marginTop: "16px"
        };
        $[67] = t42;
    } else {
        t42 = $[67];
    }
    let t43;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            color: "#ac3231"
        };
        $[68] = t43;
    } else {
        t43 = $[68];
    }
    const t44 = lang === "hi" ? "\u0906\u0935\u0947\u0926\u0928 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902 (How to Apply)" : "How to Apply";
    let t45;
    if ($[69] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "label-md",
            style: t43,
            children: [
                "📌 ",
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 751,
            columnNumber: 11
        }, this);
        $[69] = t44;
        $[70] = t45;
    } else {
        t45 = $[70];
    }
    let t46;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            paddingLeft: "20px",
            marginTop: "6px"
        };
        $[71] = t46;
    } else {
        t46 = $[71];
    }
    let t47;
    if ($[72] !== scheme.application_steps) {
        t47 = scheme.application_steps || [];
        $[72] = scheme.application_steps;
        $[73] = t47;
    } else {
        t47 = $[73];
    }
    let t48;
    if ($[74] !== t47) {
        t48 = t47.map(_SchemeDetailModalAnonymous2);
        $[74] = t47;
        $[75] = t48;
    } else {
        t48 = $[75];
    }
    let t49;
    if ($[76] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            style: t46,
            className: "body-sm text-secondary",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 785,
            columnNumber: 11
        }, this);
        $[76] = t48;
        $[77] = t49;
    } else {
        t49 = $[77];
    }
    let t50;
    if ($[78] !== t45 || $[79] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t42,
            children: [
                t45,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 793,
            columnNumber: 11
        }, this);
        $[78] = t45;
        $[79] = t49;
        $[80] = t50;
    } else {
        t50 = $[80];
    }
    let t51;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = {
            marginTop: "20px",
            display: "flex",
            gap: "10px"
        };
        $[81] = t51;
    } else {
        t51 = $[81];
    }
    let t52;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = {
            flex: 1,
            height: "46px",
            fontSize: "14px"
        };
        $[82] = t52;
    } else {
        t52 = $[82];
    }
    const t53 = isBookmarked ? "\u2B50\uFE0F " + (lang === "hi" ? "\u0938\u0939\u0947\u091C\u093E \u0917\u092F\u093E" : "Saved") : "\u2606 " + (lang === "hi" ? "\u0938\u0939\u0947\u091C\u0947\u0902 (Bookmark)" : "Bookmark");
    let t54;
    if ($[83] !== onBookmarkToggle || $[84] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBookmarkToggle,
            className: "btn btn-secondary",
            style: t52,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 825,
            columnNumber: 11
        }, this);
        $[83] = onBookmarkToggle;
        $[84] = t53;
        $[85] = t54;
    } else {
        t54 = $[85];
    }
    const t55 = scheme.official_link || "https://www.myscheme.gov.in/";
    let t56;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = {
            flex: 1,
            height: "46px",
            fontSize: "14px",
            textDecoration: "none"
        };
        $[86] = t56;
    } else {
        t56 = $[86];
    }
    const t57 = lang === "hi" ? "\u0911\u092B\u093F\u0936\u093F\u092F\u0932 \u0932\u093F\u0902\u0915 \uD83D\uDD17" : "Official Link \uD83D\uDD17";
    let t58;
    if ($[87] !== t55 || $[88] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t55,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn btn-primary",
            style: t56,
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 848,
            columnNumber: 11
        }, this);
        $[87] = t55;
        $[88] = t57;
        $[89] = t58;
    } else {
        t58 = $[89];
    }
    let t59;
    if ($[90] !== t54 || $[91] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t51,
            children: [
                t54,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 857,
            columnNumber: 11
        }, this);
        $[90] = t54;
        $[91] = t58;
        $[92] = t59;
    } else {
        t59 = $[92];
    }
    let t60;
    if ($[93] !== t12 || $[94] !== t14 || $[95] !== t32 || $[96] !== t41 || $[97] !== t50 || $[98] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            onClick: _SchemeDetailModalDivOnClick,
            style: t2,
            children: [
                t12,
                t14,
                t32,
                t41,
                t50,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 866,
            columnNumber: 11
        }, this);
        $[93] = t12;
        $[94] = t14;
        $[95] = t32;
        $[96] = t41;
        $[97] = t50;
        $[98] = t59;
        $[99] = t60;
    } else {
        t60 = $[99];
    }
    let t61;
    if ($[100] !== onClose || $[101] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            onClick: onClose,
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/app/schemes/page.js",
            lineNumber: 879,
            columnNumber: 11
        }, this);
        $[100] = onClose;
        $[101] = t60;
        $[102] = t61;
    } else {
        t61 = $[102];
    }
    return t61;
}
_c2 = SchemeDetailModal;
function _SchemeDetailModalAnonymous2(step, idx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        style: {
            marginBottom: "4px"
        },
        children: step
    }, idx_0, false, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 889,
        columnNumber: 10
    }, this);
}
function _SchemeDetailModalAnonymous(doc, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: doc
    }, idx, false, {
        fileName: "[project]/src/app/schemes/page.js",
        lineNumber: 894,
        columnNumber: 10
    }, this);
}
function _SchemeDetailModalDivOnClick(e) {
    return e.stopPropagation();
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SchemesDirectoryPage");
__turbopack_context__.k.register(_c1, "TabButton");
__turbopack_context__.k.register(_c2, "SchemeDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/schemes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(BOOKMARKS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}
function isSchemeBookmarked(schemeId) {
    const bookmarks = getBookmarkedSchemeIds();
    return bookmarks.includes(Number(schemeId));
}
function toggleBookmarkScheme(schemeId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const id = Number(schemeId);
    let bookmarks = getBookmarkedSchemeIds();
    let isSaved = false;
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter((bId)=>bId !== id);
        isSaved = false;
    } else {
        bookmarks.push(id);
        isSaved = true;
    }
    try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (e) {
        console.error("Failed to update bookmarks in localStorage:", e);
    }
    return isSaved;
}
function getCachedSchemes() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cached = localStorage.getItem(SCHEMES_CACHE_KEY);
        return cached ? JSON.parse(cached) : DEFAULT_OFFLINE_SCHEMES;
    } catch (e) {
        return DEFAULT_OFFLINE_SCHEMES;
    }
}
function cacheSchemes(schemes) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !Array.isArray(schemes)) return;
    try {
        localStorage.setItem(SCHEMES_CACHE_KEY, JSON.stringify(schemes));
    } catch (e) {
        console.warn("Failed to cache schemes in localStorage:", e);
    }
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
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(LAST_MATCHES_KEY, JSON.stringify(data));
            }
            return data;
        }
    } catch (err) {
        console.warn("API check request failed, running offline client-side matching:", err);
    }
    // Offline matching fallback
    const cachedSchemes = getCachedSchemes();
    const offlineResults = runOfflineMatching(payload, cachedSchemes);
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(LAST_MATCHES_KEY, JSON.stringify(offlineResults));
    }
    return offlineResults;
}
function getStoredMatches() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(LAST_MATCHES_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0yt0ner._.js.map