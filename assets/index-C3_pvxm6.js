const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/PublicationsSection-txv3xPh3.js", "assets/badge-BfuPy7Mz.js", "assets/ProjectsSection-CnMTajxU.js"]))) => i.map(i => d[i]);

function b0(n, r) {
    for (var o = 0; o < r.length; o++) {
        const s = r[o];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const l in s)
                if (l !== "default" && !(l in n)) {
                    const c = Object.getOwnPropertyDescriptor(s, l);
                    c && Object.defineProperty(n, l, c.get ? c : { enumerable: !0, get: () => s[l] })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }))
}

(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && s(d)
    }).observe(document, { childList: !0, subtree: !0 });

    function o(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function s(l) {
        if (l.ep) return;
        l.ep = !0;
        const c = o(l);
        fetch(l.href, c)
    }
})();

function nm(n) { return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n }

var Ml = { exports: {} }, Ri = {}, Dl = { exports: {} }, fe = {};
var dh;

function M0() {
    if (dh) return fe;
    dh = 1;
    var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;

    function w(T) { return T === null || typeof T != "object" ? null : (T = v && T[v] || T["@@iterator"], typeof T == "function" ? T : null) }
    var R = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} }, j = Object.assign, P = {};

    function b(T, V, re) { this.props = T, this.context = V, this.refs = P, this.updater = re || R }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(T, V) { if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, T, V, "setState") }, b.prototype.forceUpdate = function(T) { this.updater.enqueueForceUpdate(this, T, "forceUpdate") };

    function L() {}
    L.prototype = b.prototype;

    function z(T, V, re) { this.props = T, this.context = V, this.refs = P, this.updater = re || R }
    var _ = z.prototype = new L;
    _.constructor = z, j(_, b.prototype), _.isPureReactComponent = !0;
    var $ = Array.isArray, U = Object.prototype.hasOwnProperty, Q = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };

    function I(T, V, re) {
        var se, he = {}, me = null, ce = null;
        if (V != null)
            for (se in V.ref !== void 0 && (ce = V.ref), V.key !== void 0 && (me = "" + V.key), V) U.call(V, se) && !H.hasOwnProperty(se) && (he[se] = V[se]);
        var ye = arguments.length - 2;
        if (ye === 1) he.children = re;
        else if (1 < ye) {
            for (var xe = Array(ye), He = 0; He < ye; He++) xe[He] = arguments[He + 2];
            he.children = xe
        }
        if (T && T.defaultProps)
            for (se in ye = T.defaultProps, ye) he[se] === void 0 && (he[se] = ye[se]);
        return { $$typeof: n, type: T, key: me, ref: ce, props: he, _owner: Q.current }
    }
    return fe.createElement = I, fe
}

var fh;
function ju() { return fh || (fh = 1, Dl.exports = M0()), Dl.exports }

var hh;
function D0() {
    if (hh) return Ri;
    hh = 1;
    var n = ju(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };

    function d(h, p, g) {
        var y, v = {}, w = null, R = null;
        g !== void 0 && (w = "" + g), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (R = p.ref);
        for (y in p) s.call(p, y) && !c.hasOwnProperty(y) && (v[y] = p[y]);
        if (h && h.defaultProps)
            for (y in p = h.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
        return { $$typeof: r, type: h, key: w, ref: R, props: v, _owner: l.current }
    }
    return Ri.Fragment = o, Ri.jsx = d, Ri.jsxs = d, Ri
}

var ph;
function j0() { return ph || (ph = 1, Ml.exports = D0()), Ml.exports }

var k = j0();

// --- UPDATED RESEARCH SECTION ---
emo(function() {
    const r = [
        {
            title: "Embodied & Human-Interactive Robotics",
            description: "Focusing on the Human-Interactive Robot Learning (HIRL) paradigm, where agents move beyond learning in isolation to adapt via real-time Human-in-the-Loop (HiL) guidance and collaborative interaction.",
            icon: "🤖"
        },
        {
            title: "Deep RL & Preference-Based Alignment",
            description: "Advancing reinforcement learning by shifting from manual reward engineering to Preference-based RL, leveraging Few-Shot Meta-Learning and neurosymbolic constraints to align robot behavior with human intent efficiently.",
            icon: "🧠"
        },
        {
            title: "Computer Vision & Foundation Models for Action",
            description: "Investigating how Transformers and Multi-modal Foundation Models support 'Action-as-Tokens' architectures, translating high-level instructions and scene understanding into robust motor control.",
            icon: "👁️"
        },
        {
            title: "Collaborative Multi-Agent Systems",
            description: "Exploring coordination in multi-robot and human-robot teams using decentralized RL, focusing on how agents can generalize collaborative policies in shared, dynamic human environments.",
            icon: "🔗"
        }
    ];

    return k.jsxs("div", {
        className: "space-y-6",
        children: [
            k.jsxs("div", {
                className: "flex items-center gap-3 mb-2",
                children: [
                    k.jsx(Ak, { className: "w-8 h-8 text-blue-600" }),
                    k.jsx("h2", { className: "text-gray-900", children: "Research Interests" })
                ]
            }),
            k.jsx("p", {
                className: "text-gray-700 leading-relaxed",
                children: "My research interests lie at the intersection of learning-based embodied systems and human-centric AI. I am interested in how robots can perceive, reason, and act in complex environments while aligning their behaviors with human intent through interactive feedback loops and multimodal representation learning."
            }),
            k.jsx("div", {
                className: "space-y-4",
                children: r.map((o, s) => 
                    k.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            k.jsx("span", { className: "text-2xl flex-shrink-0 mt-1", children: o.icon }),
                            k.jsxs("div", {
                                children: [
                                    k.jsx("h3", { className: "text-gray-900 mb-1", children: o.title }),
                                    k.jsx("p", { className: "text-gray-700 leading-relaxed text-sm", children: o.description })
                                ]
                            })
                        ]
                    }, s)
                )
            })
        ]
    })
});
