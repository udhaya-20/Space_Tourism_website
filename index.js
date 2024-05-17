(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Bm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var k = {
    exports: {}
}
  , j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni = Symbol.for("react.element")
  , $m = Symbol.for("react.portal")
  , Hm = Symbol.for("react.fragment")
  , Wm = Symbol.for("react.strict_mode")
  , Km = Symbol.for("react.profiler")
  , Qm = Symbol.for("react.provider")
  , Gm = Symbol.for("react.context")
  , Ym = Symbol.for("react.forward_ref")
  , Xm = Symbol.for("react.suspense")
  , Zm = Symbol.for("react.memo")
  , Jm = Symbol.for("react.lazy")
  , Vu = Symbol.iterator;
function bm(e) {
    return e === null || typeof e != "object" ? null : (e = Vu && e[Vu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Jf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , bf = Object.assign
  , qf = {};
function Jn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qf,
    this.updater = n || Jf
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Jn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ed() {}
ed.prototype = Jn.prototype;
function fa(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qf,
    this.updater = n || Jf
}
var da = fa.prototype = new ed;
da.constructor = fa;
bf(da, Jn.prototype);
da.isPureReactComponent = !0;
var Mu = Array.isArray
  , td = Object.prototype.hasOwnProperty
  , pa = {
    current: null
}
  , nd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function rd(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            td.call(t, r) && !nd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ni,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: pa.current
    }
}
function qm(e, t) {
    return {
        $$typeof: ni,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ha(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ni
}
function eg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Au = /\/+/g;
function ms(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? eg("" + e.key) : t.toString(36)
}
function Fi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ni:
            case $m:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + ms(s, 0) : r,
        Mu(i) ? (n = "",
        e != null && (n = e.replace(Au, "$&/") + "/"),
        Fi(i, t, n, "", function(u) {
            return u
        })) : i != null && (ha(i) && (i = qm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Au, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Mu(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + ms(o, l);
            s += Fi(o, t, n, a, i)
        }
    else if (a = bm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + ms(o, l++),
            s += Fi(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function hi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Fi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function tg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Se = {
    current: null
}
  , Ui = {
    transition: null
}
  , ng = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Ui,
    ReactCurrentOwner: pa
};
j.Children = {
    map: hi,
    forEach: function(e, t, n) {
        hi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return hi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return hi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ha(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
j.Component = Jn;
j.Fragment = Hm;
j.Profiler = Km;
j.PureComponent = fa;
j.StrictMode = Wm;
j.Suspense = Xm;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng;
j.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = bf({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = pa.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            td.call(t, a) && !nd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ni,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
j.createContext = function(e) {
    return e = {
        $$typeof: Gm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qm,
        _context: e
    },
    e.Consumer = e
}
;
j.createElement = rd;
j.createFactory = function(e) {
    var t = rd.bind(null, e);
    return t.type = e,
    t
}
;
j.createRef = function() {
    return {
        current: null
    }
}
;
j.forwardRef = function(e) {
    return {
        $$typeof: Ym,
        render: e
    }
}
;
j.isValidElement = ha;
j.lazy = function(e) {
    return {
        $$typeof: Jm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: tg
    }
}
;
j.memo = function(e, t) {
    return {
        $$typeof: Zm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
j.startTransition = function(e) {
    var t = Ui.transition;
    Ui.transition = {};
    try {
        e()
    } finally {
        Ui.transition = t
    }
}
;
j.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
j.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
}
;
j.useContext = function(e) {
    return Se.current.useContext(e)
}
;
j.useDebugValue = function() {}
;
j.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
}
;
j.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
}
;
j.useId = function() {
    return Se.current.useId()
}
;
j.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
}
;
j.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
}
;
j.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
}
;
j.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
}
;
j.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
}
;
j.useRef = function(e) {
    return Se.current.useRef(e)
}
;
j.useState = function(e) {
    return Se.current.useState(e)
}
;
j.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
}
;
j.useTransition = function() {
    return Se.current.useTransition()
}
;
j.version = "18.2.0";
(function(e) {
    e.exports = j
}
)(k);
const ma = Bm(k.exports);
var qs = {}
  , id = {
    exports: {}
}
  , Me = {}
  , od = {
    exports: {}
}
  , sd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, R) {
        var C = N.length;
        N.push(R);
        e: for (; 0 < C; ) {
            var M = C - 1 >>> 1
              , I = N[M];
            if (0 < i(I, R))
                N[M] = R,
                N[C] = I,
                C = M;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var R = N[0]
          , C = N.pop();
        if (C !== R) {
            N[0] = C;
            e: for (var M = 0, I = N.length, $e = I >>> 1; M < $e; ) {
                var de = 2 * (M + 1) - 1
                  , tr = N[de]
                  , qe = de + 1
                  , et = N[qe];
                if (0 > i(tr, C))
                    qe < I && 0 > i(et, tr) ? (N[M] = et,
                    N[qe] = C,
                    M = qe) : (N[M] = tr,
                    N[de] = C,
                    M = de);
                else if (qe < I && 0 > i(et, C))
                    N[M] = et,
                    N[qe] = C,
                    M = qe;
                else
                    break e
            }
        }
        return R
    }
    function i(N, R) {
        var C = N.sortIndex - R.sortIndex;
        return C !== 0 ? C : N.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , y = !1
      , w = !1
      , L = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(N) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= N)
                r(u),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(u)
        }
    }
    function v(N) {
        if (w = !1,
        h(N),
        !y)
            if (n(a) !== null)
                y = !0,
                J(x);
            else {
                var R = n(u);
                R !== null && De(v, R.startTime - N)
            }
    }
    function x(N, R) {
        y = !1,
        w && (w = !1,
        g(P),
        P = -1),
        m = !0;
        var C = d;
        try {
            for (h(R),
            f = n(a); f !== null && (!(f.expirationTime > R) || N && !U()); ) {
                var M = f.callback;
                if (typeof M == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var I = M(f.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof I == "function" ? f.callback = I : f === n(a) && r(a),
                    h(R)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var $e = !0;
            else {
                var de = n(u);
                de !== null && De(v, de.startTime - R),
                $e = !1
            }
            return $e
        } finally {
            f = null,
            d = C,
            m = !1
        }
    }
    var _ = !1
      , S = null
      , P = -1
      , O = 5
      , A = -1;
    function U() {
        return !(e.unstable_now() - A < O)
    }
    function G() {
        if (S !== null) {
            var N = e.unstable_now();
            A = N;
            var R = !0;
            try {
                R = S(!0, N)
            } finally {
                R ? le() : (_ = !1,
                S = null)
            }
        } else
            _ = !1
    }
    var le;
    if (typeof p == "function")
        le = function() {
            p(G)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var fe = new MessageChannel
          , Oe = fe.port2;
        fe.port1.onmessage = G,
        le = function() {
            Oe.postMessage(null)
        }
    } else
        le = function() {
            L(G, 0)
        }
        ;
    function J(N) {
        S = N,
        _ || (_ = !0,
        le())
    }
    function De(N, R) {
        P = L(function() {
            N(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || m || (y = !0,
        J(x))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(N) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = d
        }
        var C = d;
        d = R;
        try {
            return N()
        } finally {
            d = C
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, R) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var C = d;
        d = N;
        try {
            return R()
        } finally {
            d = C
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, R, C) {
        var M = e.unstable_now();
        switch (typeof C == "object" && C !== null ? (C = C.delay,
        C = typeof C == "number" && 0 < C ? M + C : M) : C = M,
        N) {
        case 1:
            var I = -1;
            break;
        case 2:
            I = 250;
            break;
        case 5:
            I = 1073741823;
            break;
        case 4:
            I = 1e4;
            break;
        default:
            I = 5e3
        }
        return I = C + I,
        N = {
            id: c++,
            callback: R,
            priorityLevel: N,
            startTime: C,
            expirationTime: I,
            sortIndex: -1
        },
        C > M ? (N.sortIndex = C,
        t(u, N),
        n(a) === null && N === n(u) && (w ? (g(P),
        P = -1) : w = !0,
        De(v, C - M))) : (N.sortIndex = I,
        t(a, N),
        y || m || (y = !0,
        J(x))),
        N
    }
    ,
    e.unstable_shouldYield = U,
    e.unstable_wrapCallback = function(N) {
        var R = d;
        return function() {
            var C = d;
            d = R;
            try {
                return N.apply(this, arguments)
            } finally {
                d = C
            }
        }
    }
}
)(sd);
(function(e) {
    e.exports = sd
}
)(od);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld = k.exports
  , Ve = od.exports;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ad = new Set
  , Ar = {};
function fn(e, t) {
    $n(e, t),
    $n(e + "Capture", t)
}
function $n(e, t) {
    for (Ar[e] = t,
    e = 0; e < t.length; e++)
        ad.add(t[e])
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , el = Object.prototype.hasOwnProperty
  , rg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ou = {}
  , Du = {};
function ig(e) {
    return el.call(Du, e) ? !0 : el.call(Ou, e) ? !1 : rg.test(e) ? Du[e] = !0 : (Ou[e] = !0,
    !1)
}
function og(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function sg(e, t, n, r) {
    if (t === null || typeof t > "u" || og(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ke(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new ke(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ce[t] = new ke(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ce[e] = new ke(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ce[e] = new ke(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new ke(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ce[e] = new ke(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ce[e] = new ke(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ce[e] = new ke(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ce[e] = new ke(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ga = /[\-:]([a-z])/g;
function va(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ga, va);
    ce[t] = new ke(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ga, va);
    ce[t] = new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ga, va);
    ce[t] = new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ce[e] = new ke(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ce.xlinkHref = new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ce[e] = new ke(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ya(e, t, n, r) {
    var i = ce.hasOwnProperty(t) ? ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sg(t, n, i, r) && (n = null),
    r || i === null ? ig(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var St = ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , mi = Symbol.for("react.element")
  , xn = Symbol.for("react.portal")
  , Sn = Symbol.for("react.fragment")
  , wa = Symbol.for("react.strict_mode")
  , tl = Symbol.for("react.profiler")
  , ud = Symbol.for("react.provider")
  , cd = Symbol.for("react.context")
  , xa = Symbol.for("react.forward_ref")
  , nl = Symbol.for("react.suspense")
  , rl = Symbol.for("react.suspense_list")
  , Sa = Symbol.for("react.memo")
  , Et = Symbol.for("react.lazy")
  , fd = Symbol.for("react.offscreen")
  , Iu = Symbol.iterator;
function rr(e) {
    return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Z = Object.assign, gs;
function pr(e) {
    if (gs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gs = t && t[1] || ""
        }
    return `
` + gs + e
}
var vs = !1;
function ys(e, t) {
    if (!e || vs)
        return "";
    vs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        vs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? pr(e) : ""
}
function lg(e) {
    switch (e.tag) {
    case 5:
        return pr(e.type);
    case 16:
        return pr("Lazy");
    case 13:
        return pr("Suspense");
    case 19:
        return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ys(e.type, !1),
        e;
    case 11:
        return e = ys(e.type.render, !1),
        e;
    case 1:
        return e = ys(e.type, !0),
        e;
    default:
        return ""
    }
}
function il(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Sn:
        return "Fragment";
    case xn:
        return "Portal";
    case tl:
        return "Profiler";
    case wa:
        return "StrictMode";
    case nl:
        return "Suspense";
    case rl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case cd:
            return (e.displayName || "Context") + ".Consumer";
        case ud:
            return (e._context.displayName || "Context") + ".Provider";
        case xa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Sa:
            return t = e.displayName || null,
            t !== null ? t : il(e.type) || "Memo";
        case Et:
            t = e._payload,
            e = e._init;
            try {
                return il(e(t))
            } catch {}
        }
    return null
}
function ag(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return il(t);
    case 8:
        return t === wa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ht(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function dd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function ug(e) {
    var t = dd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function gi(e) {
    e._valueTracker || (e._valueTracker = ug(e))
}
function pd(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = dd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function eo(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ol(e, t) {
    var n = t.checked;
    return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}
function zu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ht(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function hd(e, t) {
    t = t.checked,
    t != null && ya(e, "checked", t, !1)
}
function sl(e, t) {
    hd(e, t);
    var n = Ht(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ll(e, t.type, n) : t.hasOwnProperty("defaultValue") && ll(e, t.type, Ht(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ju(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ll(e, t, n) {
    (t !== "number" || eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hr = Array.isArray;
function On(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ht(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function al(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Fu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (hr(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ht(n)
    }
}
function md(e, t) {
    var n = Ht(t.value)
      , r = Ht(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function gd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ul(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var vi, vd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (vi = vi || document.createElement("div"),
        vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = vi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Or(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , cg = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function(e) {
    cg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        vr[t] = vr[e]
    })
});
function yd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vr.hasOwnProperty(e) && vr[e] ? ("" + t).trim() : t + "px"
}
function wd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = yd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var fg = Z({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function cl(e, t) {
    if (t) {
        if (fg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function fl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var dl = null;
function ka(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var pl = null
  , Dn = null
  , In = null;
function Bu(e) {
    if (e = oi(e)) {
        if (typeof pl != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = Ho(t),
        pl(e.stateNode, e.type, t))
    }
}
function xd(e) {
    Dn ? In ? In.push(e) : In = [e] : Dn = e
}
function Sd() {
    if (Dn) {
        var e = Dn
          , t = In;
        if (In = Dn = null,
        Bu(e),
        t)
            for (e = 0; e < t.length; e++)
                Bu(t[e])
    }
}
function kd(e, t) {
    return e(t)
}
function Cd() {}
var ws = !1;
function Pd(e, t, n) {
    if (ws)
        return e(t, n);
    ws = !0;
    try {
        return kd(e, t, n)
    } finally {
        ws = !1,
        (Dn !== null || In !== null) && (Cd(),
        Sd())
    }
}
function Dr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ho(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var hl = !1;
if (mt)
    try {
        var ir = {};
        Object.defineProperty(ir, "passive", {
            get: function() {
                hl = !0
            }
        }),
        window.addEventListener("test", ir, ir),
        window.removeEventListener("test", ir, ir)
    } catch {
        hl = !1
    }
function dg(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var yr = !1
  , to = null
  , no = !1
  , ml = null
  , pg = {
    onError: function(e) {
        yr = !0,
        to = e
    }
};
function hg(e, t, n, r, i, o, s, l, a) {
    yr = !1,
    to = null,
    dg.apply(pg, arguments)
}
function mg(e, t, n, r, i, o, s, l, a) {
    if (hg.apply(this, arguments),
    yr) {
        if (yr) {
            var u = to;
            yr = !1,
            to = null
        } else
            throw Error(T(198));
        no || (no = !0,
        ml = u)
    }
}
function dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            (t.flags & 4098) !== 0 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ed(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function $u(e) {
    if (dn(e) !== e)
        throw Error(T(188))
}
function gg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dn(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return $u(i),
                    e;
                if (o === r)
                    return $u(i),
                    t;
                o = o.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function Td(e) {
    return e = gg(e),
    e !== null ? _d(e) : null
}
function _d(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = _d(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ld = Ve.unstable_scheduleCallback
  , Hu = Ve.unstable_cancelCallback
  , vg = Ve.unstable_shouldYield
  , yg = Ve.unstable_requestPaint
  , ee = Ve.unstable_now
  , wg = Ve.unstable_getCurrentPriorityLevel
  , Ca = Ve.unstable_ImmediatePriority
  , Rd = Ve.unstable_UserBlockingPriority
  , ro = Ve.unstable_NormalPriority
  , xg = Ve.unstable_LowPriority
  , Nd = Ve.unstable_IdlePriority
  , Fo = null
  , ot = null;
function Sg(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function")
        try {
            ot.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Pg
  , kg = Math.log
  , Cg = Math.LN2;
function Pg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (kg(e) / Cg | 0) | 0
}
var yi = 64
  , wi = 4194304;
function mr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function io(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = mr(l) : (o &= s,
        o !== 0 && (r = mr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = mr(s) : o !== 0 && (r = mr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if ((r & 4) !== 0 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ye(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Eg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Tg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Ye(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? ((l & n) === 0 || (l & r) !== 0) && (i[s] = Eg(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function gl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Vd() {
    var e = yi;
    return yi <<= 1,
    (yi & 4194240) === 0 && (yi = 64),
    e
}
function xs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ri(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ye(t),
    e[t] = n
}
function _g(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ye(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Pa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ye(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var B = 0;
function Md(e) {
    return e &= -e,
    1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}
var Ad, Ea, Od, Dd, Id, vl = !1, xi = [], Ot = null, Dt = null, It = null, Ir = new Map, zr = new Map, Lt = [], Lg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Wu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ot = null;
        break;
    case "dragenter":
    case "dragleave":
        Dt = null;
        break;
    case "mouseover":
    case "mouseout":
        It = null;
        break;
    case "pointerover":
    case "pointerout":
        Ir.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zr.delete(t.pointerId)
    }
}
function or(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = oi(t),
    t !== null && Ea(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Rg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ot = or(Ot, e, t, n, r, i),
        !0;
    case "dragenter":
        return Dt = or(Dt, e, t, n, r, i),
        !0;
    case "mouseover":
        return It = or(It, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Ir.set(o, or(Ir.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        zr.set(o, or(zr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function zd(e) {
    var t = bt(e.target);
    if (t !== null) {
        var n = dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ed(n),
                t !== null) {
                    e.blockedOn = t,
                    Id(e.priority, function() {
                        Od(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Bi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            dl = r,
            n.target.dispatchEvent(r),
            dl = null
        } else
            return t = oi(n),
            t !== null && Ea(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ku(e, t, n) {
    Bi(e) && n.delete(t)
}
function Ng() {
    vl = !1,
    Ot !== null && Bi(Ot) && (Ot = null),
    Dt !== null && Bi(Dt) && (Dt = null),
    It !== null && Bi(It) && (It = null),
    Ir.forEach(Ku),
    zr.forEach(Ku)
}
function sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    vl || (vl = !0,
    Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Ng)))
}
function jr(e) {
    function t(i) {
        return sr(i, e)
    }
    if (0 < xi.length) {
        sr(xi[0], e);
        for (var n = 1; n < xi.length; n++) {
            var r = xi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ot !== null && sr(Ot, e),
    Dt !== null && sr(Dt, e),
    It !== null && sr(It, e),
    Ir.forEach(t),
    zr.forEach(t),
    n = 0; n < Lt.length; n++)
        r = Lt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0],
    n.blockedOn === null); )
        zd(n),
        n.blockedOn === null && Lt.shift()
}
var zn = St.ReactCurrentBatchConfig
  , oo = !0;
function Vg(e, t, n, r) {
    var i = B
      , o = zn.transition;
    zn.transition = null;
    try {
        B = 1,
        Ta(e, t, n, r)
    } finally {
        B = i,
        zn.transition = o
    }
}
function Mg(e, t, n, r) {
    var i = B
      , o = zn.transition;
    zn.transition = null;
    try {
        B = 4,
        Ta(e, t, n, r)
    } finally {
        B = i,
        zn.transition = o
    }
}
function Ta(e, t, n, r) {
    if (oo) {
        var i = yl(e, t, n, r);
        if (i === null)
            Ns(e, t, r, so, n),
            Wu(e, r);
        else if (Rg(i, e, t, n, r))
            r.stopPropagation();
        else if (Wu(e, r),
        t & 4 && -1 < Lg.indexOf(e)) {
            for (; i !== null; ) {
                var o = oi(i);
                if (o !== null && Ad(o),
                o = yl(e, t, n, r),
                o === null && Ns(e, t, r, so, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Ns(e, t, r, null, n)
    }
}
var so = null;
function yl(e, t, n, r) {
    if (so = null,
    e = ka(r),
    e = bt(e),
    e !== null)
        if (t = dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ed(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return so = e,
    null
}
function jd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (wg()) {
        case Ca:
            return 1;
        case Rd:
            return 4;
        case ro:
        case xg:
            return 16;
        case Nd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Nt = null
  , _a = null
  , $i = null;
function Fd() {
    if ($i)
        return $i;
    var e, t = _a, n = t.length, r, i = "value"in Nt ? Nt.value : Nt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return $i = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Hi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Si() {
    return !0
}
function Qu() {
    return !1
}
function Ae(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Si : Qu,
        this.isPropagationStopped = Qu,
        this
    }
    return Z(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Si)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Si)
        },
        persist: function() {},
        isPersistent: Si
    }),
    t
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, La = Ae(bn), ii = Z({}, bn, {
    view: 0,
    detail: 0
}), Ag = Ae(ii), Ss, ks, lr, Uo = Z({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ra,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (Ss = e.screenX - lr.screenX,
        ks = e.screenY - lr.screenY) : ks = Ss = 0,
        lr = e),
        Ss)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ks
    }
}), Gu = Ae(Uo), Og = Z({}, Uo, {
    dataTransfer: 0
}), Dg = Ae(Og), Ig = Z({}, ii, {
    relatedTarget: 0
}), Cs = Ae(Ig), zg = Z({}, bn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), jg = Ae(zg), Fg = Z({}, bn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Ug = Ae(Fg), Bg = Z({}, bn, {
    data: 0
}), Yu = Ae(Bg), $g = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Hg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Wg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Kg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wg[e]) ? !!t[e] : !1
}
function Ra() {
    return Kg
}
var Qg = Z({}, ii, {
    key: function(e) {
        if (e.key) {
            var t = $g[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Hi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ra,
    charCode: function(e) {
        return e.type === "keypress" ? Hi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Gg = Ae(Qg)
  , Yg = Z({}, Uo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Xu = Ae(Yg)
  , Xg = Z({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra
})
  , Zg = Ae(Xg)
  , Jg = Z({}, bn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , bg = Ae(Jg)
  , qg = Z({}, Uo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , e0 = Ae(qg)
  , t0 = [9, 13, 27, 32]
  , Na = mt && "CompositionEvent"in window
  , wr = null;
mt && "documentMode"in document && (wr = document.documentMode);
var n0 = mt && "TextEvent"in window && !wr
  , Ud = mt && (!Na || wr && 8 < wr && 11 >= wr)
  , Zu = String.fromCharCode(32)
  , Ju = !1;
function Bd(e, t) {
    switch (e) {
    case "keyup":
        return t0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function $d(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var kn = !1;
function r0(e, t) {
    switch (e) {
    case "compositionend":
        return $d(t);
    case "keypress":
        return t.which !== 32 ? null : (Ju = !0,
        Zu);
    case "textInput":
        return e = t.data,
        e === Zu && Ju ? null : e;
    default:
        return null
    }
}
function i0(e, t) {
    if (kn)
        return e === "compositionend" || !Na && Bd(e, t) ? (e = Fd(),
        $i = _a = Nt = null,
        kn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ud && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var o0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!o0[e.type] : t === "textarea"
}
function Hd(e, t, n, r) {
    xd(r),
    t = lo(t, "onChange"),
    0 < t.length && (n = new La("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var xr = null
  , Fr = null;
function s0(e) {
    ep(e, 0)
}
function Bo(e) {
    var t = En(e);
    if (pd(t))
        return e
}
function l0(e, t) {
    if (e === "change")
        return t
}
var Wd = !1;
if (mt) {
    var Ps;
    if (mt) {
        var Es = "oninput"in document;
        if (!Es) {
            var qu = document.createElement("div");
            qu.setAttribute("oninput", "return;"),
            Es = typeof qu.oninput == "function"
        }
        Ps = Es
    } else
        Ps = !1;
    Wd = Ps && (!document.documentMode || 9 < document.documentMode)
}
function ec() {
    xr && (xr.detachEvent("onpropertychange", Kd),
    Fr = xr = null)
}
function Kd(e) {
    if (e.propertyName === "value" && Bo(Fr)) {
        var t = [];
        Hd(t, Fr, e, ka(e)),
        Pd(s0, t)
    }
}
function a0(e, t, n) {
    e === "focusin" ? (ec(),
    xr = t,
    Fr = n,
    xr.attachEvent("onpropertychange", Kd)) : e === "focusout" && ec()
}
function u0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Bo(Fr)
}
function c0(e, t) {
    if (e === "click")
        return Bo(t)
}
function f0(e, t) {
    if (e === "input" || e === "change")
        return Bo(t)
}
function d0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Je = typeof Object.is == "function" ? Object.is : d0;
function Ur(e, t) {
    if (Je(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!el.call(t, i) || !Je(e[i], t[i]))
            return !1
    }
    return !0
}
function tc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function nc(e, t) {
    var n = tc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = tc(n)
    }
}
function Qd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gd() {
    for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = eo(e.document)
    }
    return t
}
function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function p0(e) {
    var t = Gd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Va(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = nc(n, o);
                var s = nc(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var h0 = mt && "documentMode"in document && 11 >= document.documentMode
  , Cn = null
  , wl = null
  , Sr = null
  , xl = !1;
function rc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xl || Cn == null || Cn !== eo(r) || (r = Cn,
    "selectionStart"in r && Va(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Sr && Ur(Sr, r) || (Sr = r,
    r = lo(wl, "onSelect"),
    0 < r.length && (t = new La("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Cn)))
}
function ki(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Pn = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd")
}
  , Ts = {}
  , Yd = {};
mt && (Yd = document.createElement("div").style,
"AnimationEvent"in window || (delete Pn.animationend.animation,
delete Pn.animationiteration.animation,
delete Pn.animationstart.animation),
"TransitionEvent"in window || delete Pn.transitionend.transition);
function $o(e) {
    if (Ts[e])
        return Ts[e];
    if (!Pn[e])
        return e;
    var t = Pn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Yd)
            return Ts[e] = t[n];
    return e
}
var Xd = $o("animationend")
  , Zd = $o("animationiteration")
  , Jd = $o("animationstart")
  , bd = $o("transitionend")
  , qd = new Map
  , ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(e, t) {
    qd.set(e, t),
    fn(t, [e])
}
for (var _s = 0; _s < ic.length; _s++) {
    var Ls = ic[_s]
      , m0 = Ls.toLowerCase()
      , g0 = Ls[0].toUpperCase() + Ls.slice(1);
    Kt(m0, "on" + g0)
}
Kt(Xd, "onAnimationEnd");
Kt(Zd, "onAnimationIteration");
Kt(Jd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(bd, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , v0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function oc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    mg(r, t, void 0, e),
    e.currentTarget = null
}
function ep(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    oc(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    oc(i, l, u),
                    o = a
                }
        }
    }
    if (no)
        throw e = ml,
        no = !1,
        ml = null,
        e
}
function W(e, t) {
    var n = t[El];
    n === void 0 && (n = t[El] = new Set);
    var r = e + "__bubble";
    n.has(r) || (tp(t, e, 2, !1),
    n.add(r))
}
function Rs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    tp(n, e, r, t)
}
var Ci = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
    if (!e[Ci]) {
        e[Ci] = !0,
        ad.forEach(function(n) {
            n !== "selectionchange" && (v0.has(n) || Rs(n, !1, e),
            Rs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ci] || (t[Ci] = !0,
        Rs("selectionchange", !1, t))
    }
}
function tp(e, t, n, r) {
    switch (jd(t)) {
    case 1:
        var i = Vg;
        break;
    case 4:
        i = Mg;
        break;
    default:
        i = Ta
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !hl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Ns(e, t, n, r, i) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = bt(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Pd(function() {
        var u = o
          , c = ka(n)
          , f = [];
        e: {
            var d = qd.get(e);
            if (d !== void 0) {
                var m = La
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Hi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = Gg;
                    break;
                case "focusin":
                    y = "focus",
                    m = Cs;
                    break;
                case "focusout":
                    y = "blur",
                    m = Cs;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = Cs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Gu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = Dg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = Zg;
                    break;
                case Xd:
                case Zd:
                case Jd:
                    m = jg;
                    break;
                case bd:
                    m = bg;
                    break;
                case "scroll":
                    m = Ag;
                    break;
                case "wheel":
                    m = e0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = Ug;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Xu
                }
                var w = (t & 4) !== 0
                  , L = !w && e === "scroll"
                  , g = w ? d !== null ? d + "Capture" : null : d;
                w = [];
                for (var p = u, h; p !== null; ) {
                    h = p;
                    var v = h.stateNode;
                    if (h.tag === 5 && v !== null && (h = v,
                    g !== null && (v = Dr(p, g),
                    v != null && w.push($r(p, v, h)))),
                    L)
                        break;
                    p = p.return
                }
                0 < w.length && (d = new m(d,y,null,n,c),
                f.push({
                    event: d,
                    listeners: w
                }))
            }
        }
        if ((t & 7) === 0) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                d && n !== dl && (y = n.relatedTarget || n.fromElement) && (bt(y) || y[gt]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (y = n.relatedTarget || n.toElement,
                m = u,
                y = y ? bt(y) : null,
                y !== null && (L = dn(y),
                y !== L || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
                y = u),
                m !== y)) {
                    if (w = Gu,
                    v = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = Xu,
                    v = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    L = m == null ? d : En(m),
                    h = y == null ? d : En(y),
                    d = new w(v,p + "leave",m,n,c),
                    d.target = L,
                    d.relatedTarget = h,
                    v = null,
                    bt(c) === u && (w = new w(g,p + "enter",y,n,c),
                    w.target = h,
                    w.relatedTarget = L,
                    v = w),
                    L = v,
                    m && y)
                        t: {
                            for (w = m,
                            g = y,
                            p = 0,
                            h = w; h; h = vn(h))
                                p++;
                            for (h = 0,
                            v = g; v; v = vn(v))
                                h++;
                            for (; 0 < p - h; )
                                w = vn(w),
                                p--;
                            for (; 0 < h - p; )
                                g = vn(g),
                                h--;
                            for (; p--; ) {
                                if (w === g || g !== null && w === g.alternate)
                                    break t;
                                w = vn(w),
                                g = vn(g)
                            }
                            w = null
                        }
                    else
                        w = null;
                    m !== null && sc(f, d, m, w, !1),
                    y !== null && L !== null && sc(f, L, y, w, !0)
                }
            }
            e: {
                if (d = u ? En(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var x = l0;
                else if (bu(d))
                    if (Wd)
                        x = f0;
                    else {
                        x = u0;
                        var _ = a0
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = c0);
                if (x && (x = x(e, u))) {
                    Hd(f, x, n, c);
                    break e
                }
                _ && _(e, d, u),
                e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && ll(d, "number", d.value)
            }
            switch (_ = u ? En(u) : window,
            e) {
            case "focusin":
                (bu(_) || _.contentEditable === "true") && (Cn = _,
                wl = u,
                Sr = null);
                break;
            case "focusout":
                Sr = wl = Cn = null;
                break;
            case "mousedown":
                xl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                xl = !1,
                rc(f, n, c);
                break;
            case "selectionchange":
                if (h0)
                    break;
            case "keydown":
            case "keyup":
                rc(f, n, c)
            }
            var S;
            if (Na)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                kn ? Bd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Ud && n.locale !== "ko" && (kn || P !== "onCompositionStart" ? P === "onCompositionEnd" && kn && (S = Fd()) : (Nt = c,
            _a = "value"in Nt ? Nt.value : Nt.textContent,
            kn = !0)),
            _ = lo(u, P),
            0 < _.length && (P = new Yu(P,e,null,n,c),
            f.push({
                event: P,
                listeners: _
            }),
            S ? P.data = S : (S = $d(n),
            S !== null && (P.data = S)))),
            (S = n0 ? r0(e, n) : i0(e, n)) && (u = lo(u, "onBeforeInput"),
            0 < u.length && (c = new Yu("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = S))
        }
        ep(f, t)
    })
}
function $r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function lo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Dr(e, n),
        o != null && r.unshift($r(e, o, i)),
        o = Dr(e, t),
        o != null && r.push($r(e, o, i))),
        e = e.return
    }
    return r
}
function vn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function sc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Dr(n, o),
        a != null && s.unshift($r(n, a, l))) : i || (a = Dr(n, o),
        a != null && s.push($r(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var y0 = /\r\n?/g
  , w0 = /\u0000|\uFFFD/g;
function lc(e) {
    return (typeof e == "string" ? e : "" + e).replace(y0, `
`).replace(w0, "")
}
function Pi(e, t, n) {
    if (t = lc(t),
    lc(e) !== t && n)
        throw Error(T(425))
}
function ao() {}
var Sl = null
  , kl = null;
function Cl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Pl = typeof setTimeout == "function" ? setTimeout : void 0
  , x0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ac = typeof Promise == "function" ? Promise : void 0
  , S0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ac < "u" ? function(e) {
    return ac.resolve(null).then(e).catch(k0)
}
: Pl;
function k0(e) {
    setTimeout(function() {
        throw e
    })
}
function Vs(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    jr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    jr(t)
}
function zt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function uc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var qn = Math.random().toString(36).slice(2)
  , it = "__reactFiber$" + qn
  , Hr = "__reactProps$" + qn
  , gt = "__reactContainer$" + qn
  , El = "__reactEvents$" + qn
  , C0 = "__reactListeners$" + qn
  , P0 = "__reactHandles$" + qn;
function bt(e) {
    var t = e[it];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[gt] || n[it]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = uc(e); e !== null; ) {
                    if (n = e[it])
                        return n;
                    e = uc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function oi(e) {
    return e = e[it] || e[gt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function En(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function Ho(e) {
    return e[Hr] || null
}
var Tl = []
  , Tn = -1;
function Qt(e) {
    return {
        current: e
    }
}
function K(e) {
    0 > Tn || (e.current = Tl[Tn],
    Tl[Tn] = null,
    Tn--)
}
function H(e, t) {
    Tn++,
    Tl[Tn] = e.current,
    e.current = t
}
var Wt = {}
  , ve = Qt(Wt)
  , Ee = Qt(!1)
  , sn = Wt;
function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function uo() {
    K(Ee),
    K(ve)
}
function cc(e, t, n) {
    if (ve.current !== Wt)
        throw Error(T(168));
    H(ve, t),
    H(Ee, n)
}
function np(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(T(108, ag(e) || "Unknown", i));
    return Z({}, n, r)
}
function co(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt,
    sn = ve.current,
    H(ve, e),
    H(Ee, Ee.current),
    !0
}
function fc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = np(e, t, sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    K(Ee),
    K(ve),
    H(ve, e)) : K(Ee),
    H(Ee, n)
}
var ft = null
  , Wo = !1
  , Ms = !1;
function rp(e) {
    ft === null ? ft = [e] : ft.push(e)
}
function E0(e) {
    Wo = !0,
    rp(e)
}
function Gt() {
    if (!Ms && ft !== null) {
        Ms = !0;
        var e = 0
          , t = B;
        try {
            var n = ft;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ft = null,
            Wo = !1
        } catch (i) {
            throw ft !== null && (ft = ft.slice(e + 1)),
            Ld(Ca, Gt),
            i
        } finally {
            B = t,
            Ms = !1
        }
    }
    return null
}
var _n = []
  , Ln = 0
  , fo = null
  , po = 0
  , Ie = []
  , ze = 0
  , ln = null
  , dt = 1
  , pt = "";
function Zt(e, t) {
    _n[Ln++] = po,
    _n[Ln++] = fo,
    fo = e,
    po = t
}
function ip(e, t, n) {
    Ie[ze++] = dt,
    Ie[ze++] = pt,
    Ie[ze++] = ln,
    ln = e;
    var r = dt;
    e = pt;
    var i = 32 - Ye(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ye(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        dt = 1 << 32 - Ye(t) + i | n << i | r,
        pt = o + e
    } else
        dt = 1 << o | n << i | r,
        pt = e
}
function Ma(e) {
    e.return !== null && (Zt(e, 1),
    ip(e, 1, 0))
}
function Aa(e) {
    for (; e === fo; )
        fo = _n[--Ln],
        _n[Ln] = null,
        po = _n[--Ln],
        _n[Ln] = null;
    for (; e === ln; )
        ln = Ie[--ze],
        Ie[ze] = null,
        pt = Ie[--ze],
        Ie[ze] = null,
        dt = Ie[--ze],
        Ie[ze] = null
}
var Ne = null
  , Re = null
  , Q = !1
  , Ge = null;
function op(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function dc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Re = zt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Re = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ln !== null ? {
            id: dt,
            overflow: pt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = je(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ne = e,
        Re = null,
        !0) : !1;
    default:
        return !1
    }
}
function _l(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ll(e) {
    if (Q) {
        var t = Re;
        if (t) {
            var n = t;
            if (!dc(e, t)) {
                if (_l(e))
                    throw Error(T(418));
                t = zt(n.nextSibling);
                var r = Ne;
                t && dc(e, t) ? op(r, n) : (e.flags = e.flags & -4097 | 2,
                Q = !1,
                Ne = e)
            }
        } else {
            if (_l(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            Q = !1,
            Ne = e
        }
    }
}
function pc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ne = e
}
function Ei(e) {
    if (e !== Ne)
        return !1;
    if (!Q)
        return pc(e),
        Q = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Cl(e.type, e.memoizedProps)),
    t && (t = Re)) {
        if (_l(e))
            throw sp(),
            Error(T(418));
        for (; t; )
            op(e, t),
            t = zt(t.nextSibling)
    }
    if (pc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Re = zt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Re = null
        }
    } else
        Re = Ne ? zt(e.stateNode.nextSibling) : null;
    return !0
}
function sp() {
    for (var e = Re; e; )
        e = zt(e.nextSibling)
}
function Wn() {
    Re = Ne = null,
    Q = !1
}
function Oa(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}
var T0 = St.ReactCurrentBatchConfig;
function Ke(e, t) {
    if (e && e.defaultProps) {
        t = Z({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var ho = Qt(null)
  , mo = null
  , Rn = null
  , Da = null;
function Ia() {
    Da = Rn = mo = null
}
function za(e) {
    var t = ho.current;
    K(ho),
    e._currentValue = t
}
function Rl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function jn(e, t) {
    mo = e,
    Da = Rn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Pe = !0),
    e.firstContext = null)
}
function Ue(e) {
    var t = e._currentValue;
    if (Da !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Rn === null) {
            if (mo === null)
                throw Error(T(308));
            Rn = e,
            mo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Rn = Rn.next = e;
    return t
}
var qt = null;
function ja(e) {
    qt === null ? qt = [e] : qt.push(e)
}
function lp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ja(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    vt(e, r)
}
function vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Tt = !1;
function Fa(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ap(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    (F & 2) !== 0) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        vt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ja(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    vt(e, n)
}
function Wi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pa(e, n)
    }
}
function hc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function go(e, t, n, r) {
    var i = e.updateQueue;
    Tt = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var d = l.lane
              , m = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , w = l;
                    switch (d = t,
                    m = n,
                    w.tag) {
                    case 1:
                        if (y = w.payload,
                        typeof y == "function") {
                            f = y.call(m, f, d);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = w.payload,
                        d = typeof y == "function" ? y.call(m, f, d) : y,
                        d == null)
                            break e;
                        f = Z({}, f, d);
                        break e;
                    case 2:
                        Tt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = m,
                a = f) : c = c.next = m,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        un |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function mc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(T(191, i));
                i.call(r)
            }
        }
}
var up = new ld.Component().refs;
function Nl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Z({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ko = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Ut(e)
          , o = ht(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = jt(e, o, i),
        t !== null && (Xe(t, e, i, r),
        Wi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Ut(e)
          , o = ht(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = jt(e, o, i),
        t !== null && (Xe(t, e, i, r),
        Wi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe()
          , r = Ut(e)
          , i = ht(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = jt(e, i, r),
        t !== null && (Xe(t, e, r, n),
        Wi(t, e, r))
    }
};
function gc(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, o) : !0
}
function cp(e, t, n) {
    var r = !1
      , i = Wt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ue(o) : (i = Te(t) ? sn : ve.current,
    r = t.contextTypes,
    o = (r = r != null) ? Hn(e, i) : Wt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ko,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function vc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ko.enqueueReplaceState(t, t.state, null)
}
function Vl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = up,
    Fa(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ue(o) : (o = Te(t) ? sn : ve.current,
    i.context = Hn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Nl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ko.enqueueReplaceState(i, i.state, null),
    go(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function ar(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                l === up && (l = i.refs = {}),
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function Ti(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function yc(e) {
    var t = e._init;
    return t(e._payload)
}
function fp(e) {
    function t(g, p) {
        if (e) {
            var h = g.deletions;
            h === null ? (g.deletions = [p],
            g.flags |= 16) : h.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function i(g, p) {
        return g = Bt(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, p, h) {
        return g.index = h,
        e ? (h = g.alternate,
        h !== null ? (h = h.index,
        h < p ? (g.flags |= 2,
        p) : h) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, p, h, v) {
        return p === null || p.tag !== 6 ? (p = Fs(h, g.mode, v),
        p.return = g,
        p) : (p = i(p, h),
        p.return = g,
        p)
    }
    function a(g, p, h, v) {
        var x = h.type;
        return x === Sn ? c(g, p, h.props.children, v, h.key) : p !== null && (p.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Et && yc(x) === p.type) ? (v = i(p, h.props),
        v.ref = ar(g, p, h),
        v.return = g,
        v) : (v = Zi(h.type, h.key, h.props, null, g.mode, v),
        v.ref = ar(g, p, h),
        v.return = g,
        v)
    }
    function u(g, p, h, v) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = Us(h, g.mode, v),
        p.return = g,
        p) : (p = i(p, h.children || []),
        p.return = g,
        p)
    }
    function c(g, p, h, v, x) {
        return p === null || p.tag !== 7 ? (p = on(h, g.mode, v, x),
        p.return = g,
        p) : (p = i(p, h),
        p.return = g,
        p)
    }
    function f(g, p, h) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Fs("" + p, g.mode, h),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case mi:
                return h = Zi(p.type, p.key, p.props, null, g.mode, h),
                h.ref = ar(g, null, p),
                h.return = g,
                h;
            case xn:
                return p = Us(p, g.mode, h),
                p.return = g,
                p;
            case Et:
                var v = p._init;
                return f(g, v(p._payload), h)
            }
            if (hr(p) || rr(p))
                return p = on(p, g.mode, h, null),
                p.return = g,
                p;
            Ti(g, p)
        }
        return null
    }
    function d(g, p, h, v) {
        var x = p !== null ? p.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return x !== null ? null : l(g, p, "" + h, v);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case mi:
                return h.key === x ? a(g, p, h, v) : null;
            case xn:
                return h.key === x ? u(g, p, h, v) : null;
            case Et:
                return x = h._init,
                d(g, p, x(h._payload), v)
            }
            if (hr(h) || rr(h))
                return x !== null ? null : c(g, p, h, v, null);
            Ti(g, h)
        }
        return null
    }
    function m(g, p, h, v, x) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return g = g.get(h) || null,
            l(p, g, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case mi:
                return g = g.get(v.key === null ? h : v.key) || null,
                a(p, g, v, x);
            case xn:
                return g = g.get(v.key === null ? h : v.key) || null,
                u(p, g, v, x);
            case Et:
                var _ = v._init;
                return m(g, p, h, _(v._payload), x)
            }
            if (hr(v) || rr(v))
                return g = g.get(h) || null,
                c(p, g, v, x, null);
            Ti(p, v)
        }
        return null
    }
    function y(g, p, h, v) {
        for (var x = null, _ = null, S = p, P = p = 0, O = null; S !== null && P < h.length; P++) {
            S.index > P ? (O = S,
            S = null) : O = S.sibling;
            var A = d(g, S, h[P], v);
            if (A === null) {
                S === null && (S = O);
                break
            }
            e && S && A.alternate === null && t(g, S),
            p = o(A, p, P),
            _ === null ? x = A : _.sibling = A,
            _ = A,
            S = O
        }
        if (P === h.length)
            return n(g, S),
            Q && Zt(g, P),
            x;
        if (S === null) {
            for (; P < h.length; P++)
                S = f(g, h[P], v),
                S !== null && (p = o(S, p, P),
                _ === null ? x = S : _.sibling = S,
                _ = S);
            return Q && Zt(g, P),
            x
        }
        for (S = r(g, S); P < h.length; P++)
            O = m(S, g, P, h[P], v),
            O !== null && (e && O.alternate !== null && S.delete(O.key === null ? P : O.key),
            p = o(O, p, P),
            _ === null ? x = O : _.sibling = O,
            _ = O);
        return e && S.forEach(function(U) {
            return t(g, U)
        }),
        Q && Zt(g, P),
        x
    }
    function w(g, p, h, v) {
        var x = rr(h);
        if (typeof x != "function")
            throw Error(T(150));
        if (h = x.call(h),
        h == null)
            throw Error(T(151));
        for (var _ = x = null, S = p, P = p = 0, O = null, A = h.next(); S !== null && !A.done; P++,
        A = h.next()) {
            S.index > P ? (O = S,
            S = null) : O = S.sibling;
            var U = d(g, S, A.value, v);
            if (U === null) {
                S === null && (S = O);
                break
            }
            e && S && U.alternate === null && t(g, S),
            p = o(U, p, P),
            _ === null ? x = U : _.sibling = U,
            _ = U,
            S = O
        }
        if (A.done)
            return n(g, S),
            Q && Zt(g, P),
            x;
        if (S === null) {
            for (; !A.done; P++,
            A = h.next())
                A = f(g, A.value, v),
                A !== null && (p = o(A, p, P),
                _ === null ? x = A : _.sibling = A,
                _ = A);
            return Q && Zt(g, P),
            x
        }
        for (S = r(g, S); !A.done; P++,
        A = h.next())
            A = m(S, g, P, A.value, v),
            A !== null && (e && A.alternate !== null && S.delete(A.key === null ? P : A.key),
            p = o(A, p, P),
            _ === null ? x = A : _.sibling = A,
            _ = A);
        return e && S.forEach(function(G) {
            return t(g, G)
        }),
        Q && Zt(g, P),
        x
    }
    function L(g, p, h, v) {
        if (typeof h == "object" && h !== null && h.type === Sn && h.key === null && (h = h.props.children),
        typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case mi:
                e: {
                    for (var x = h.key, _ = p; _ !== null; ) {
                        if (_.key === x) {
                            if (x = h.type,
                            x === Sn) {
                                if (_.tag === 7) {
                                    n(g, _.sibling),
                                    p = i(_, h.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Et && yc(x) === _.type) {
                                n(g, _.sibling),
                                p = i(_, h.props),
                                p.ref = ar(g, _, h),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, _);
                            break
                        } else
                            t(g, _);
                        _ = _.sibling
                    }
                    h.type === Sn ? (p = on(h.props.children, g.mode, v, h.key),
                    p.return = g,
                    g = p) : (v = Zi(h.type, h.key, h.props, null, g.mode, v),
                    v.ref = ar(g, p, h),
                    v.return = g,
                    g = v)
                }
                return s(g);
            case xn:
                e: {
                    for (_ = h.key; p !== null; ) {
                        if (p.key === _)
                            if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                n(g, p.sibling),
                                p = i(p, h.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = Us(h, g.mode, v),
                    p.return = g,
                    g = p
                }
                return s(g);
            case Et:
                return _ = h._init,
                L(g, p, _(h._payload), v)
            }
            if (hr(h))
                return y(g, p, h, v);
            if (rr(h))
                return w(g, p, h, v);
            Ti(g, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = i(p, h),
        p.return = g,
        g = p) : (n(g, p),
        p = Fs(h, g.mode, v),
        p.return = g,
        g = p),
        s(g)) : n(g, p)
    }
    return L
}
var Kn = fp(!0)
  , dp = fp(!1)
  , si = {}
  , st = Qt(si)
  , Wr = Qt(si)
  , Kr = Qt(si);
function en(e) {
    if (e === si)
        throw Error(T(174));
    return e
}
function Ua(e, t) {
    switch (H(Kr, t),
    H(Wr, e),
    H(st, si),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ul(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ul(t, e)
    }
    K(st),
    H(st, t)
}
function Qn() {
    K(st),
    K(Wr),
    K(Kr)
}
function pp(e) {
    en(Kr.current);
    var t = en(st.current)
      , n = ul(t, e.type);
    t !== n && (H(Wr, e),
    H(st, n))
}
function Ba(e) {
    Wr.current === e && (K(st),
    K(Wr))
}
var Y = Qt(0);
function vo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var As = [];
function $a() {
    for (var e = 0; e < As.length; e++)
        As[e]._workInProgressVersionPrimary = null;
    As.length = 0
}
var Ki = St.ReactCurrentDispatcher
  , Os = St.ReactCurrentBatchConfig
  , an = 0
  , X = null
  , ne = null
  , oe = null
  , yo = !1
  , kr = !1
  , Qr = 0
  , _0 = 0;
function pe() {
    throw Error(T(321))
}
function Ha(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Je(e[n], t[n]))
            return !1;
    return !0
}
function Wa(e, t, n, r, i, o) {
    if (an = o,
    X = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ki.current = e === null || e.memoizedState === null ? V0 : M0,
    e = n(r, i),
    kr) {
        o = 0;
        do {
            if (kr = !1,
            Qr = 0,
            25 <= o)
                throw Error(T(301));
            o += 1,
            oe = ne = null,
            t.updateQueue = null,
            Ki.current = A0,
            e = n(r, i)
        } while (kr)
    }
    if (Ki.current = wo,
    t = ne !== null && ne.next !== null,
    an = 0,
    oe = ne = X = null,
    yo = !1,
    t)
        throw Error(T(300));
    return e
}
function Ka() {
    var e = Qr !== 0;
    return Qr = 0,
    e
}
function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? X.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function Be() {
    if (ne === null) {
        var e = X.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ne.next;
    var t = oe === null ? X.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        ne = e;
    else {
        if (e === null)
            throw Error(T(310));
        ne = e,
        e = {
            memoizedState: ne.memoizedState,
            baseState: ne.baseState,
            baseQueue: ne.baseQueue,
            queue: ne.queue,
            next: null
        },
        oe === null ? X.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function Gr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ds(e) {
    var t = Be()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = ne
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((an & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                X.lanes |= c,
                un |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        Je(r, t.memoizedState) || (Pe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            X.lanes |= o,
            un |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Is(e) {
    var t = Be()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Je(o, t.memoizedState) || (Pe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function hp() {}
function mp(e, t) {
    var n = X
      , r = Be()
      , i = t()
      , o = !Je(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Pe = !0),
    r = r.queue,
    Qa(yp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yr(9, vp.bind(null, n, r, i, t), void 0, null),
        se === null)
            throw Error(T(349));
        (an & 30) !== 0 || gp(n, t, i)
    }
    return i
}
function gp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = X.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function vp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    wp(t) && xp(e)
}
function yp(e, t, n) {
    return n(function() {
        wp(t) && xp(e)
    })
}
function wp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Je(e, n)
    } catch {
        return !0
    }
}
function xp(e) {
    var t = vt(e, 1);
    t !== null && Xe(t, e, 1, -1)
}
function wc(e) {
    var t = nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = N0.bind(null, X, e),
    [t.memoizedState, e]
}
function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = X.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Sp() {
    return Be().memoizedState
}
function Qi(e, t, n, r) {
    var i = nt();
    X.flags |= e,
    i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Qo(e, t, n, r) {
    var i = Be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ne !== null) {
        var s = ne.memoizedState;
        if (o = s.destroy,
        r !== null && Ha(r, s.deps)) {
            i.memoizedState = Yr(t, n, o, r);
            return
        }
    }
    X.flags |= e,
    i.memoizedState = Yr(1 | t, n, o, r)
}
function xc(e, t) {
    return Qi(8390656, 8, e, t)
}
function Qa(e, t) {
    return Qo(2048, 8, e, t)
}
function kp(e, t) {
    return Qo(4, 2, e, t)
}
function Cp(e, t) {
    return Qo(4, 4, e, t)
}
function Pp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ep(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Qo(4, 4, Pp.bind(null, t, e), n)
}
function Ga() {}
function Tp(e, t) {
    var n = Be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function _p(e, t) {
    var n = Be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Lp(e, t, n) {
    return (an & 21) === 0 ? (e.baseState && (e.baseState = !1,
    Pe = !0),
    e.memoizedState = n) : (Je(n, t) || (n = Vd(),
    X.lanes |= n,
    un |= n,
    e.baseState = !0),
    t)
}
function L0(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Os.transition;
    Os.transition = {};
    try {
        e(!1),
        t()
    } finally {
        B = n,
        Os.transition = r
    }
}
function Rp() {
    return Be().memoizedState
}
function R0(e, t, n) {
    var r = Ut(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Np(e))
        Vp(t, n);
    else if (n = lp(e, t, n, r),
    n !== null) {
        var i = xe();
        Xe(n, e, r, i),
        Mp(n, t, r)
    }
}
function N0(e, t, n) {
    var r = Ut(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Np(e))
        Vp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                Je(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ja(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = lp(e, t, i, r),
        n !== null && (i = xe(),
        Xe(n, e, r, i),
        Mp(n, t, r))
    }
}
function Np(e) {
    var t = e.alternate;
    return e === X || t !== null && t === X
}
function Vp(e, t) {
    kr = yo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Mp(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pa(e, n)
    }
}
var wo = {
    readContext: Ue,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1
}
  , V0 = {
    readContext: Ue,
    useCallback: function(e, t) {
        return nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ue,
    useEffect: xc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qi(4194308, 4, Pp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = nt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = nt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = R0.bind(null, X, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: wc,
    useDebugValue: Ga,
    useDeferredValue: function(e) {
        return nt().memoizedState = e
    },
    useTransition: function() {
        var e = wc(!1)
          , t = e[0];
        return e = L0.bind(null, e[1]),
        nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = X
          , i = nt();
        if (Q) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            se === null)
                throw Error(T(349));
            (an & 30) !== 0 || gp(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        xc(yp.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Yr(9, vp.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = nt()
          , t = se.identifierPrefix;
        if (Q) {
            var n = pt
              , r = dt;
            n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , M0 = {
    readContext: Ue,
    useCallback: Tp,
    useContext: Ue,
    useEffect: Qa,
    useImperativeHandle: Ep,
    useInsertionEffect: kp,
    useLayoutEffect: Cp,
    useMemo: _p,
    useReducer: Ds,
    useRef: Sp,
    useState: function() {
        return Ds(Gr)
    },
    useDebugValue: Ga,
    useDeferredValue: function(e) {
        var t = Be();
        return Lp(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = Ds(Gr)[0]
          , t = Be().memoizedState;
        return [e, t]
    },
    useMutableSource: hp,
    useSyncExternalStore: mp,
    useId: Rp,
    unstable_isNewReconciler: !1
}
  , A0 = {
    readContext: Ue,
    useCallback: Tp,
    useContext: Ue,
    useEffect: Qa,
    useImperativeHandle: Ep,
    useInsertionEffect: kp,
    useLayoutEffect: Cp,
    useMemo: _p,
    useReducer: Is,
    useRef: Sp,
    useState: function() {
        return Is(Gr)
    },
    useDebugValue: Ga,
    useDeferredValue: function(e) {
        var t = Be();
        return ne === null ? t.memoizedState = e : Lp(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = Is(Gr)[0]
          , t = Be().memoizedState;
        return [e, t]
    },
    useMutableSource: hp,
    useSyncExternalStore: mp,
    useId: Rp,
    unstable_isNewReconciler: !1
};
function Gn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += lg(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function zs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n != null ? n : null,
        digest: t != null ? t : null
    }
}
function Ml(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var O0 = typeof WeakMap == "function" ? WeakMap : Map;
function Ap(e, t, n) {
    n = ht(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        So || (So = !0,
        $l = r),
        Ml(e, t)
    }
    ,
    n
}
function Op(e, t, n) {
    n = ht(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Ml(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Ml(e, t),
        typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new O0;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Y0.bind(null, e, t, n),
    t.then(e, e))
}
function kc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Cc(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ht(-1, 1),
    t.tag = 2,
    jt(n, t, 1))),
    n.lanes |= 1),
    e) : (e.flags |= 65536,
    e.lanes = i,
    e)
}
var D0 = St.ReactCurrentOwner
  , Pe = !1;
function we(e, t, n, r) {
    t.child = e === null ? dp(t, null, n, r) : Kn(t, e.child, n, r)
}
function Pc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return jn(t, i),
    r = Wa(e, t, n, r, o, i),
    n = Ka(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    yt(e, t, i)) : (Q && n && Ma(t),
    t.flags |= 1,
    we(e, t, r, i),
    t.child)
}
function Ec(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !tu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Dp(e, t, o, r, i)) : (e = Zi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    (e.lanes & i) === 0) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ur,
        n(s, r) && e.ref === t.ref)
            return yt(e, t, i)
    }
    return t.flags |= 1,
    e = Bt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Dp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ur(o, r) && e.ref === t.ref)
            if (Pe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                (e.flags & 131072) !== 0 && (Pe = !0);
            else
                return t.lanes = e.lanes,
                yt(e, t, i)
    }
    return Al(e, t, n, r, i)
}
function Ip(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((t.mode & 1) === 0)
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            H(Vn, Le),
            Le |= n;
        else {
            if ((n & 1073741824) === 0)
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                H(Vn, Le),
                Le |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            H(Vn, Le),
            Le |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        H(Vn, Le),
        Le |= r;
    return we(e, t, i, n),
    t.child
}
function zp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Al(e, t, n, r, i) {
    var o = Te(n) ? sn : ve.current;
    return o = Hn(t, o),
    jn(t, i),
    n = Wa(e, t, n, r, o, i),
    r = Ka(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    yt(e, t, i)) : (Q && r && Ma(t),
    t.flags |= 1,
    we(e, t, n, i),
    t.child)
}
function Tc(e, t, n, r, i) {
    if (Te(n)) {
        var o = !0;
        co(t)
    } else
        o = !1;
    if (jn(t, i),
    t.stateNode === null)
        Gi(e, t),
        cp(t, n, r),
        Vl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ue(u) : (u = Te(n) ? sn : ve.current,
        u = Hn(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && vc(t, s, r, u),
        Tt = !1;
        var d = t.memoizedState;
        s.state = d,
        go(t, r, s, i),
        a = t.memoizedState,
        l !== r || d !== a || Ee.current || Tt ? (typeof c == "function" && (Nl(t, n, c, r),
        a = t.memoizedState),
        (l = Tt || gc(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ap(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Ke(t.type, l),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Ue(a) : (a = Te(n) ? sn : ve.current,
        a = Hn(t, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && vc(t, s, r, a),
        Tt = !1,
        d = t.memoizedState,
        s.state = d,
        go(t, r, s, i);
        var y = t.memoizedState;
        l !== f || d !== y || Ee.current || Tt ? (typeof m == "function" && (Nl(t, n, m, r),
        y = t.memoizedState),
        (u = Tt || gc(t, n, u, r, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ol(e, t, n, r, o, i)
}
function Ol(e, t, n, r, i, o) {
    zp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && fc(t, n, !1),
        yt(e, t, o);
    r = t.stateNode,
    D0.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Kn(t, e.child, null, o),
    t.child = Kn(t, null, l, o)) : we(e, t, l, o),
    t.memoizedState = r.state,
    i && fc(t, n, !0),
    t.child
}
function jp(e) {
    var t = e.stateNode;
    t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1),
    Ua(e, t.containerInfo)
}
function _c(e, t, n, r, i) {
    return Wn(),
    Oa(i),
    t.flags |= 256,
    we(e, t, n, r),
    t.child
}
var Dl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Il(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Fp(e, t, n) {
    var r = t.pendingProps, i = Y.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    H(Y, i & 1),
    e === null)
        return Ll(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        (r & 1) === 0 && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Xo(s, r, 0, null),
        e = on(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Il(n),
        t.memoizedState = Dl,
        e) : Ya(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return I0(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return (s & 1) === 0 && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Bt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = Bt(l, o) : (o = on(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Il(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Dl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Bt(o, {
        mode: "visible",
        children: r.children
    }),
    (t.mode & 1) === 0 && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ya(e, t) {
    return t = Xo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _i(e, t, n, r) {
    return r !== null && Oa(r),
    Kn(t, e.child, null, n),
    e = Ya(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function I0(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = zs(Error(T(422))),
        _i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Xo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = on(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        (t.mode & 1) !== 0 && Kn(t, e.child, null, s),
        t.child.memoizedState = Il(s),
        t.memoizedState = Dl,
        o);
    if ((t.mode & 1) === 0)
        return _i(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(T(419)),
        r = zs(o, r, void 0),
        _i(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Pe || l) {
        if (r = se,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            vt(e, i),
            Xe(r, e, i, -1))
        }
        return eu(),
        r = zs(Error(T(421))),
        _i(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = X0.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Re = zt(i.nextSibling),
    Ne = t,
    Q = !0,
    Ge = null,
    e !== null && (Ie[ze++] = dt,
    Ie[ze++] = pt,
    Ie[ze++] = ln,
    dt = e.id,
    pt = e.overflow,
    ln = t),
    t = Ya(t, r.children),
    t.flags |= 4096,
    t)
}
function Lc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Rl(e.return, t, n)
}
function js(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Up(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (we(e, t, r.children, n),
    r = Y.current,
    (r & 2) !== 0)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Lc(e, n, t);
                else if (e.tag === 19)
                    Lc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (H(Y, r),
    (t.mode & 1) === 0)
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && vo(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            js(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && vo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            js(t, !0, n, null, o);
            break;
        case "together":
            js(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    un |= t.lanes,
    (n & t.childLanes) === 0)
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Bt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Bt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function z0(e, t, n) {
    switch (t.tag) {
    case 3:
        jp(t),
        Wn();
        break;
    case 5:
        pp(t);
        break;
    case 1:
        Te(t.type) && co(t);
        break;
    case 4:
        Ua(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        H(ho, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (H(Y, Y.current & 1),
            t.flags |= 128,
            null) : (n & t.child.childLanes) !== 0 ? Fp(e, t, n) : (H(Y, Y.current & 1),
            e = yt(e, t, n),
            e !== null ? e.sibling : null);
        H(Y, Y.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        (e.flags & 128) !== 0) {
            if (r)
                return Up(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        H(Y, Y.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ip(e, t, n)
    }
    return yt(e, t, n)
}
var Bp, zl, $p, Hp;
Bp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
zl = function() {}
;
$p = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        en(st.current);
        var o = null;
        switch (n) {
        case "input":
            i = ol(e, i),
            r = ol(e, r),
            o = [];
            break;
        case "select":
            i = Z({}, i, {
                value: void 0
            }),
            r = Z({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = al(e, i),
            r = al(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ao)
        }
        cl(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ar.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ar.hasOwnProperty(u) ? (a != null && u === "onScroll" && W("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Hp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ur(e, t) {
    if (!Q)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function j0(e, t, n) {
    var r = t.pendingProps;
    switch (Aa(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return he(t),
        null;
    case 1:
        return Te(t.type) && uo(),
        he(t),
        null;
    case 3:
        return r = t.stateNode,
        Qn(),
        K(Ee),
        K(ve),
        $a(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
        Ge !== null && (Kl(Ge),
        Ge = null))),
        zl(e, t),
        he(t),
        null;
    case 5:
        Ba(t);
        var i = en(Kr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            $p(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return he(t),
                null
            }
            if (e = en(st.current),
            Ei(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[it] = t,
                r[Hr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < gr.length; i++)
                        W(gr[i], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    zu(r, o),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    Fu(r, o),
                    W("invalid", r)
                }
                cl(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e),
                        i = ["children", "" + l]) : Ar.hasOwnProperty(s) && l != null && s === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    gi(r),
                    ju(r, o, !0);
                    break;
                case "textarea":
                    gi(r),
                    Uu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ao)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = gd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[it] = t,
                e[Hr] = r,
                Bp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = fl(n, r),
                    n) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < gr.length; i++)
                            W(gr[i], e);
                        i = r;
                        break;
                    case "source":
                        W("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        i = r;
                        break;
                    case "details":
                        W("toggle", e),
                        i = r;
                        break;
                    case "input":
                        zu(e, r),
                        i = ol(e, r),
                        W("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Z({}, r, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        Fu(e, r),
                        i = al(e, r),
                        W("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    cl(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? wd(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && vd(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Or(e, a) : typeof a == "number" && Or(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ar.hasOwnProperty(o) ? a != null && o === "onScroll" && W("scroll", e) : a != null && ya(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        gi(e),
                        ju(e, r, !1);
                        break;
                    case "textarea":
                        gi(e),
                        Uu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ht(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? On(e, !!r.multiple, o, !1) : r.defaultValue != null && On(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ao)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return he(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Hp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = en(Kr.current),
            en(st.current),
            Ei(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[it] = t,
                (o = r.nodeValue !== n) && (e = Ne,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Pi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Pi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[it] = t,
                t.stateNode = r
        }
        return he(t),
        null;
    case 13:
        if (K(Y),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Q && Re !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                sp(),
                Wn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ei(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(T(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(T(317));
                    o[it] = t
                } else
                    Wn(),
                    (t.flags & 128) === 0 && (t.memoizedState = null),
                    t.flags |= 4;
                he(t),
                o = !1
            } else
                Ge !== null && (Kl(Ge),
                Ge = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        (t.mode & 1) !== 0 && (e === null || (Y.current & 1) !== 0 ? ie === 0 && (ie = 3) : eu())),
        t.updateQueue !== null && (t.flags |= 4),
        he(t),
        null);
    case 4:
        return Qn(),
        zl(e, t),
        e === null && Br(t.stateNode.containerInfo),
        he(t),
        null;
    case 10:
        return za(t.type._context),
        he(t),
        null;
    case 17:
        return Te(t.type) && uo(),
        he(t),
        null;
    case 19:
        if (K(Y),
        o = t.memoizedState,
        o === null)
            return he(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                ur(o, !1);
            else {
                if (ie !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                        if (s = vo(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ur(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return H(Y, Y.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ee() > Yn && (t.flags |= 128,
                r = !0,
                ur(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = vo(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ur(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !Q)
                        return he(t),
                        null
                } else
                    2 * ee() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ur(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ee(),
        t.sibling = null,
        n = Y.current,
        H(Y, r ? n & 1 | 2 : n & 1),
        t) : (he(t),
        null);
    case 22:
    case 23:
        return qa(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0 ? (Le & 1073741824) !== 0 && (he(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function F0(e, t) {
    switch (Aa(t),
    t.tag) {
    case 1:
        return Te(t.type) && uo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Qn(),
        K(Ee),
        K(ve),
        $a(),
        e = t.flags,
        (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ba(t),
        null;
    case 13:
        if (K(Y),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            Wn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return K(Y),
        null;
    case 4:
        return Qn(),
        null;
    case 10:
        return za(t.type._context),
        null;
    case 22:
    case 23:
        return qa(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Li = !1
  , ge = !1
  , U0 = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                b(e, t, r)
            }
        else
            n.current = null
}
function jl(e, t, n) {
    try {
        n()
    } catch (r) {
        b(e, t, r)
    }
}
var Rc = !1;
function B0(e, t) {
    if (Sl = oo,
    e = Gd(),
    Va(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (l = s),
                            d === o && ++c === r && (a = s),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (kl = {
        focusedElem: e,
        selectionRange: n
    },
    oo = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var y = t.alternate;
                    if ((t.flags & 1024) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps
                                  , L = y.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ke(t.type, w), L);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (v) {
                    b(t, t.return, v)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return y = Rc,
    Rc = !1,
    y
}
function Cr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && jl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Go(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Fl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Wp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Wp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[it],
    delete t[Hr],
    delete t[El],
    delete t[C0],
    delete t[P0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Nc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ul(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ao));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ul(e, t, n),
        e = e.sibling; e !== null; )
            Ul(e, t, n),
            e = e.sibling
}
function Bl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bl(e, t, n),
        e = e.sibling; e !== null; )
            Bl(e, t, n),
            e = e.sibling
}
var ae = null
  , Qe = !1;
function kt(e, t, n) {
    for (n = n.child; n !== null; )
        Qp(e, t, n),
        n = n.sibling
}
function Qp(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
        try {
            ot.onCommitFiberUnmount(Fo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ge || Nn(n, t);
    case 6:
        var r = ae
          , i = Qe;
        ae = null,
        kt(e, t, n),
        ae = r,
        Qe = i,
        ae !== null && (Qe ? (e = ae,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
        break;
    case 18:
        ae !== null && (Qe ? (e = ae,
        n = n.stateNode,
        e.nodeType === 8 ? Vs(e.parentNode, n) : e.nodeType === 1 && Vs(e, n),
        jr(e)) : Vs(ae, n.stateNode));
        break;
    case 4:
        r = ae,
        i = Qe,
        ae = n.stateNode.containerInfo,
        Qe = !0,
        kt(e, t, n),
        ae = r,
        Qe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ge && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && jl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        kt(e, t, n);
        break;
    case 1:
        if (!ge && (Nn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                b(n, t, l)
            }
        kt(e, t, n);
        break;
    case 21:
        kt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null,
        kt(e, t, n),
        ge = r) : kt(e, t, n);
        break;
    default:
        kt(e, t, n)
    }
}
function Vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new U0),
        t.forEach(function(r) {
            var i = Z0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function He(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ae = l.stateNode,
                        Qe = !1;
                        break e;
                    case 3:
                        ae = l.stateNode.containerInfo,
                        Qe = !0;
                        break e;
                    case 4:
                        ae = l.stateNode.containerInfo,
                        Qe = !0;
                        break e
                    }
                    l = l.return
                }
                if (ae === null)
                    throw Error(T(160));
                Qp(o, s, i),
                ae = null,
                Qe = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                b(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Gp(t, e),
            t = t.sibling
}
function Gp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (He(t, e),
        tt(e),
        r & 4) {
            try {
                Cr(3, e, e.return),
                Go(3, e)
            } catch (w) {
                b(e, e.return, w)
            }
            try {
                Cr(5, e, e.return)
            } catch (w) {
                b(e, e.return, w)
            }
        }
        break;
    case 1:
        He(t, e),
        tt(e),
        r & 512 && n !== null && Nn(n, n.return);
        break;
    case 5:
        if (He(t, e),
        tt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Or(i, "")
            } catch (w) {
                b(e, e.return, w)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && hd(i, o),
                    fl(l, s);
                    var u = fl(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? wd(i, f) : c === "dangerouslySetInnerHTML" ? vd(i, f) : c === "children" ? Or(i, f) : ya(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        sl(i, o);
                        break;
                    case "textarea":
                        md(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        m != null ? On(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? On(i, !!o.multiple, o.defaultValue, !0) : On(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Hr] = o
                } catch (w) {
                    b(e, e.return, w)
                }
        }
        break;
    case 6:
        if (He(t, e),
        tt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (w) {
                b(e, e.return, w)
            }
        }
        break;
    case 3:
        if (He(t, e),
        tt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                jr(t.containerInfo)
            } catch (w) {
                b(e, e.return, w)
            }
        break;
    case 4:
        He(t, e),
        tt(e);
        break;
    case 13:
        He(t, e),
        tt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ja = ee())),
        r & 4 && Vc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ge = (u = ge) || c,
        He(t, e),
        ge = u) : He(t, e),
        tt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (f = V = c; V !== null; ) {
                        switch (d = V,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Cr(4, d, d.return);
                            break;
                        case 1:
                            Nn(d, d.return);
                            var y = d.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (w) {
                                    b(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Nn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Ac(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        V = m) : Ac(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = yd("display", s))
                        } catch (w) {
                            b(e, e.return, w)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (w) {
                            b(e, e.return, w)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        He(t, e),
        tt(e),
        r & 4 && Vc(e);
        break;
    case 21:
        break;
    default:
        He(t, e),
        tt(e)
    }
}
function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Or(i, ""),
                r.flags &= -33);
                var o = Nc(e);
                Bl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Nc(e);
                Ul(e, l, s);
                break;
            default:
                throw Error(T(161))
            }
        } catch (a) {
            b(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function $0(e, t, n) {
    V = e,
    Yp(e)
}
function Yp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Li;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || ge;
                l = Li;
                var u = ge;
                if (Li = s,
                (ge = a) && !u)
                    for (V = i; V !== null; )
                        s = V,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Oc(i) : a !== null ? (a.return = s,
                        V = a) : Oc(i);
                for (; o !== null; )
                    V = o,
                    Yp(o),
                    o = o.sibling;
                V = i,
                Li = l,
                ge = u
            }
            Mc(e)
        } else
            (i.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = i,
            V = o) : Mc(e)
    }
}
function Mc(e) {
    for (; V !== null; ) {
        var t = V;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ge || Go(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ge)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && mc(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            mc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && jr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                ge || t.flags & 512 && Fl(t)
            } catch (d) {
                b(t, t.return, d)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function Ac(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function Oc(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Go(4, t)
                } catch (a) {
                    b(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        b(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    Fl(t)
                } catch (a) {
                    b(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Fl(t)
                } catch (a) {
                    b(t, s, a)
                }
            }
        } catch (a) {
            b(t, t.return, a)
        }
        if (t === e) {
            V = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            V = l;
            break
        }
        V = t.return
    }
}
var H0 = Math.ceil
  , xo = St.ReactCurrentDispatcher
  , Xa = St.ReactCurrentOwner
  , Fe = St.ReactCurrentBatchConfig
  , F = 0
  , se = null
  , te = null
  , ue = 0
  , Le = 0
  , Vn = Qt(0)
  , ie = 0
  , Xr = null
  , un = 0
  , Yo = 0
  , Za = 0
  , Pr = null
  , Ce = null
  , Ja = 0
  , Yn = 1 / 0
  , ct = null
  , So = !1
  , $l = null
  , Ft = null
  , Ri = !1
  , Vt = null
  , ko = 0
  , Er = 0
  , Hl = null
  , Yi = -1
  , Xi = 0;
function xe() {
    return (F & 6) !== 0 ? ee() : Yi !== -1 ? Yi : Yi = ee()
}
function Ut(e) {
    return (e.mode & 1) === 0 ? 1 : (F & 2) !== 0 && ue !== 0 ? ue & -ue : T0.transition !== null ? (Xi === 0 && (Xi = Vd()),
    Xi) : (e = B,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : jd(e.type)),
    e)
}
function Xe(e, t, n, r) {
    if (50 < Er)
        throw Er = 0,
        Hl = null,
        Error(T(185));
    ri(e, n, r),
    ((F & 2) === 0 || e !== se) && (e === se && ((F & 2) === 0 && (Yo |= n),
    ie === 4 && Rt(e, ue)),
    _e(e, r),
    n === 1 && F === 0 && (t.mode & 1) === 0 && (Yn = ee() + 500,
    Wo && Gt()))
}
function _e(e, t) {
    var n = e.callbackNode;
    Tg(e, t);
    var r = io(e, e === se ? ue : 0);
    if (r === 0)
        n !== null && Hu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Hu(n),
        t === 1)
            e.tag === 0 ? E0(Dc.bind(null, e)) : rp(Dc.bind(null, e)),
            S0(function() {
                (F & 6) === 0 && Gt()
            }),
            n = null;
        else {
            switch (Md(r)) {
            case 1:
                n = Ca;
                break;
            case 4:
                n = Rd;
                break;
            case 16:
                n = ro;
                break;
            case 536870912:
                n = Nd;
                break;
            default:
                n = ro
            }
            n = nh(n, Xp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Xp(e, t) {
    if (Yi = -1,
    Xi = 0,
    (F & 6) !== 0)
        throw Error(T(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n)
        return null;
    var r = io(e, e === se ? ue : 0);
    if (r === 0)
        return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
        t = Co(e, r);
    else {
        t = r;
        var i = F;
        F |= 2;
        var o = Jp();
        (se !== e || ue !== t) && (ct = null,
        Yn = ee() + 500,
        rn(e, t));
        do
            try {
                Q0();
                break
            } catch (l) {
                Zp(e, l)
            }
        while (1);
        Ia(),
        xo.current = o,
        F = i,
        te !== null ? t = 0 : (se = null,
        ue = 0,
        t = ie)
    }
    if (t !== 0) {
        if (t === 2 && (i = gl(e),
        i !== 0 && (r = i,
        t = Wl(e, i))),
        t === 1)
            throw n = Xr,
            rn(e, 0),
            Rt(e, r),
            _e(e, ee()),
            n;
        if (t === 6)
            Rt(e, r);
        else {
            if (i = e.current.alternate,
            (r & 30) === 0 && !W0(i) && (t = Co(e, r),
            t === 2 && (o = gl(e),
            o !== 0 && (r = o,
            t = Wl(e, o))),
            t === 1))
                throw n = Xr,
                rn(e, 0),
                Rt(e, r),
                _e(e, ee()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Jt(e, Ce, ct);
                break;
            case 3:
                if (Rt(e, r),
                (r & 130023424) === r && (t = Ja + 500 - ee(),
                10 < t)) {
                    if (io(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        xe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Pl(Jt.bind(null, e, Ce, ct), t);
                    break
                }
                Jt(e, Ce, ct);
                break;
            case 4:
                if (Rt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Ye(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = ee() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * H0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Pl(Jt.bind(null, e, Ce, ct), r);
                    break
                }
                Jt(e, Ce, ct);
                break;
            case 5:
                Jt(e, Ce, ct);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return _e(e, ee()),
    e.callbackNode === n ? Xp.bind(null, e) : null
}
function Wl(e, t) {
    var n = Pr;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    e = Co(e, t),
    e !== 2 && (t = Ce,
    Ce = n,
    t !== null && Kl(t)),
    e
}
function Kl(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}
function W0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Je(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Rt(e, t) {
    for (t &= ~Za,
    t &= ~Yo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ye(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Dc(e) {
    if ((F & 6) !== 0)
        throw Error(T(327));
    Fn();
    var t = io(e, 0);
    if ((t & 1) === 0)
        return _e(e, ee()),
        null;
    var n = Co(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = gl(e);
        r !== 0 && (t = r,
        n = Wl(e, r))
    }
    if (n === 1)
        throw n = Xr,
        rn(e, 0),
        Rt(e, t),
        _e(e, ee()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Jt(e, Ce, ct),
    _e(e, ee()),
    null
}
function ba(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n,
        F === 0 && (Yn = ee() + 500,
        Wo && Gt())
    }
}
function cn(e) {
    Vt !== null && Vt.tag === 0 && (F & 6) === 0 && Fn();
    var t = F;
    F |= 1;
    var n = Fe.transition
      , r = B;
    try {
        if (Fe.transition = null,
        B = 1,
        e)
            return e()
    } finally {
        B = r,
        Fe.transition = n,
        F = t,
        (F & 6) === 0 && Gt()
    }
}
function qa() {
    Le = Vn.current,
    K(Vn)
}
function rn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    x0(n)),
    te !== null)
        for (n = te.return; n !== null; ) {
            var r = n;
            switch (Aa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && uo();
                break;
            case 3:
                Qn(),
                K(Ee),
                K(ve),
                $a();
                break;
            case 5:
                Ba(r);
                break;
            case 4:
                Qn();
                break;
            case 13:
                K(Y);
                break;
            case 19:
                K(Y);
                break;
            case 10:
                za(r.type._context);
                break;
            case 22:
            case 23:
                qa()
            }
            n = n.return
        }
    if (se = e,
    te = e = Bt(e.current, null),
    ue = Le = t,
    ie = 0,
    Xr = null,
    Za = Yo = un = 0,
    Ce = Pr = null,
    qt !== null) {
        for (t = 0; t < qt.length; t++)
            if (n = qt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        qt = null
    }
    return e
}
function Zp(e, t) {
    do {
        var n = te;
        try {
            if (Ia(),
            Ki.current = wo,
            yo) {
                for (var r = X.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                yo = !1
            }
            if (an = 0,
            oe = ne = X = null,
            kr = !1,
            Qr = 0,
            Xa.current = null,
            n === null || n.return === null) {
                ie = 1,
                Xr = t,
                te = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ue,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = kc(s);
                    if (m !== null) {
                        m.flags &= -257,
                        Cc(m, s, l, o, t),
                        m.mode & 1 && Sc(o, u, t),
                        t = m,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(a),
                            t.updateQueue = w
                        } else
                            y.add(a);
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            Sc(o, u, t),
                            eu();
                            break e
                        }
                        a = Error(T(426))
                    }
                } else if (Q && l.mode & 1) {
                    var L = kc(s);
                    if (L !== null) {
                        (L.flags & 65536) === 0 && (L.flags |= 256),
                        Cc(L, s, l, o, t),
                        Oa(Gn(a, l));
                        break e
                    }
                }
                o = a = Gn(a, l),
                ie !== 4 && (ie = 2),
                Pr === null ? Pr = [o] : Pr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = Ap(o, a, t);
                        hc(o, g);
                        break e;
                    case 1:
                        l = a;
                        var p = o.type
                          , h = o.stateNode;
                        if ((o.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ft === null || !Ft.has(h)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var v = Op(o, l, t);
                            hc(o, v);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            qp(n)
        } catch (x) {
            t = x,
            te === n && n !== null && (te = n = n.return);
            continue
        }
        break
    } while (1)
}
function Jp() {
    var e = xo.current;
    return xo.current = wo,
    e === null ? wo : e
}
function eu() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    se === null || (un & 268435455) === 0 && (Yo & 268435455) === 0 || Rt(se, ue)
}
function Co(e, t) {
    var n = F;
    F |= 2;
    var r = Jp();
    (se !== e || ue !== t) && (ct = null,
    rn(e, t));
    do
        try {
            K0();
            break
        } catch (i) {
            Zp(e, i)
        }
    while (1);
    if (Ia(),
    F = n,
    xo.current = r,
    te !== null)
        throw Error(T(261));
    return se = null,
    ue = 0,
    ie
}
function K0() {
    for (; te !== null; )
        bp(te)
}
function Q0() {
    for (; te !== null && !vg(); )
        bp(te)
}
function bp(e) {
    var t = th(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps,
    t === null ? qp(e) : te = t,
    Xa.current = null
}
function qp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        (t.flags & 32768) === 0) {
            if (n = j0(n, t, Le),
            n !== null) {
                te = n;
                return
            }
        } else {
            if (n = F0(n, t),
            n !== null) {
                n.flags &= 32767,
                te = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ie = 6,
                te = null;
                return
            }
        }
        if (t = t.sibling,
        t !== null) {
            te = t;
            return
        }
        te = t = e
    } while (t !== null);
    ie === 0 && (ie = 5)
}
function Jt(e, t, n) {
    var r = B
      , i = Fe.transition;
    try {
        Fe.transition = null,
        B = 1,
        G0(e, t, n, r)
    } finally {
        Fe.transition = i,
        B = r
    }
    return null
}
function G0(e, t, n, r) {
    do
        Fn();
    while (Vt !== null);
    if ((F & 6) !== 0)
        throw Error(T(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_g(e, o),
    e === se && (te = se = null,
    ue = 0),
    (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ri || (Ri = !0,
    nh(ro, function() {
        return Fn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    (n.subtreeFlags & 15990) !== 0 || o) {
        o = Fe.transition,
        Fe.transition = null;
        var s = B;
        B = 1;
        var l = F;
        F |= 4,
        Xa.current = null,
        B0(e, n),
        Gp(n, e),
        p0(kl),
        oo = !!Sl,
        kl = Sl = null,
        e.current = n,
        $0(n),
        yg(),
        F = l,
        B = s,
        Fe.transition = o
    } else
        e.current = n;
    if (Ri && (Ri = !1,
    Vt = e,
    ko = i),
    o = e.pendingLanes,
    o === 0 && (Ft = null),
    Sg(n.stateNode),
    _e(e, ee()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (So)
        throw So = !1,
        e = $l,
        $l = null,
        e;
    return (ko & 1) !== 0 && e.tag !== 0 && Fn(),
    o = e.pendingLanes,
    (o & 1) !== 0 ? e === Hl ? Er++ : (Er = 0,
    Hl = e) : Er = 0,
    Gt(),
    null
}
function Fn() {
    if (Vt !== null) {
        var e = Md(ko)
          , t = Fe.transition
          , n = B;
        try {
            if (Fe.transition = null,
            B = 16 > e ? 16 : e,
            Vt === null)
                var r = !1;
            else {
                if (e = Vt,
                Vt = null,
                ko = 0,
                (F & 6) !== 0)
                    throw Error(T(331));
                var i = F;
                for (F |= 4,
                V = e.current; V !== null; ) {
                    var o = V
                      , s = o.child;
                    if ((V.flags & 16) !== 0) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        V = f;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (Wp(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                V = d;
                                                break
                                            }
                                            V = m
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var L = w.sibling;
                                        w.sibling = null,
                                        w = L
                                    } while (w !== null)
                                }
                            }
                            V = o
                        }
                    }
                    if ((o.subtreeFlags & 2064) !== 0 && s !== null)
                        s.return = o,
                        V = s;
                    else
                        e: for (; V !== null; ) {
                            if (o = V,
                            (o.flags & 2048) !== 0)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cr(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                V = g;
                                break e
                            }
                            V = o.return
                        }
                }
                var p = e.current;
                for (V = p; V !== null; ) {
                    s = V;
                    var h = s.child;
                    if ((s.subtreeFlags & 2064) !== 0 && h !== null)
                        h.return = s,
                        V = h;
                    else
                        e: for (s = p; V !== null; ) {
                            if (l = V,
                            (l.flags & 2048) !== 0)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Go(9, l)
                                    }
                                } catch (x) {
                                    b(l, l.return, x)
                                }
                            if (l === s) {
                                V = null;
                                break e
                            }
                            var v = l.sibling;
                            if (v !== null) {
                                v.return = l.return,
                                V = v;
                                break e
                            }
                            V = l.return
                        }
                }
                if (F = i,
                Gt(),
                ot && typeof ot.onPostCommitFiberRoot == "function")
                    try {
                        ot.onPostCommitFiberRoot(Fo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            Fe.transition = t
        }
    }
    return !1
}
function Ic(e, t, n) {
    t = Gn(n, t),
    t = Ap(e, t, 1),
    e = jt(e, t, 1),
    t = xe(),
    e !== null && (ri(e, 1, t),
    _e(e, t))
}
function b(e, t, n) {
    if (e.tag === 3)
        Ic(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ic(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Gn(n, e),
                    e = Op(t, e, 1),
                    t = jt(t, e, 1),
                    e = xe(),
                    t !== null && (ri(t, 1, e),
                    _e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Y0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    se === e && (ue & n) === n && (ie === 4 || ie === 3 && (ue & 130023424) === ue && 500 > ee() - Ja ? rn(e, 0) : Za |= n),
    _e(e, t)
}
function eh(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = wi,
    wi <<= 1,
    (wi & 130023424) === 0 && (wi = 4194304)));
    var n = xe();
    e = vt(e, t),
    e !== null && (ri(e, t, n),
    _e(e, n))
}
function X0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    eh(e, n)
}
function Z0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    eh(e, n)
}
var th;
th = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current)
            Pe = !0;
        else {
            if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                return Pe = !1,
                z0(e, t, n);
            Pe = (e.flags & 131072) !== 0
        }
    else
        Pe = !1,
        Q && (t.flags & 1048576) !== 0 && ip(t, po, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gi(e, t),
        e = t.pendingProps;
        var i = Hn(t, ve.current);
        jn(t, n),
        i = Wa(null, t, r, e, i, n);
        var o = Ka();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (o = !0,
        co(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Fa(t),
        i.updater = Ko,
        t.stateNode = i,
        i._reactInternals = t,
        Vl(t, r, e, n),
        t = Ol(null, t, r, !0, o, n)) : (t.tag = 0,
        Q && o && Ma(t),
        we(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = b0(r),
            e = Ke(r, e),
            i) {
            case 0:
                t = Al(null, t, r, e, n);
                break e;
            case 1:
                t = Tc(null, t, r, e, n);
                break e;
            case 11:
                t = Pc(null, t, r, e, n);
                break e;
            case 14:
                t = Ec(null, t, r, Ke(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Al(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Tc(e, t, r, i, n);
    case 3:
        e: {
            if (jp(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ap(e, t),
            go(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Gn(Error(T(423)), t),
                    t = _c(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Gn(Error(T(424)), t),
                    t = _c(e, t, r, n, i);
                    break e
                } else
                    for (Re = zt(t.stateNode.containerInfo.firstChild),
                    Ne = t,
                    Q = !0,
                    Ge = null,
                    n = dp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Wn(),
                r === i) {
                    t = yt(e, t, n);
                    break e
                }
                we(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return pp(t),
        e === null && Ll(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Cl(r, i) ? s = null : o !== null && Cl(r, o) && (t.flags |= 32),
        zp(e, t),
        we(e, t, s, n),
        t.child;
    case 6:
        return e === null && Ll(t),
        null;
    case 13:
        return Fp(e, t, n);
    case 4:
        return Ua(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Kn(t, null, r, n) : we(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Pc(e, t, r, i, n);
    case 7:
        return we(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return we(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return we(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            H(ho, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Je(o.value, s)) {
                    if (o.children === i.children && !Ee.current) {
                        t = yt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = ht(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Rl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(T(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Rl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            we(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        jn(t, n),
        i = Ue(i),
        r = r(i),
        t.flags |= 1,
        we(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ke(r, t.pendingProps),
        i = Ke(r.type, i),
        Ec(e, t, r, i, n);
    case 15:
        return Dp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Gi(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        co(t)) : e = !1,
        jn(t, n),
        cp(t, r, i),
        Vl(t, r, i, n),
        Ol(null, t, r, !0, e, n);
    case 19:
        return Up(e, t, n);
    case 22:
        return Ip(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function nh(e, t) {
    return Ld(e, t)
}
function J0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function je(e, t, n, r) {
    return new J0(e,t,n,r)
}
function tu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function b0(e) {
    if (typeof e == "function")
        return tu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === xa)
            return 11;
        if (e === Sa)
            return 14
    }
    return 2
}
function Bt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Zi(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        tu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Sn:
            return on(n.children, i, o, t);
        case wa:
            s = 8,
            i |= 8;
            break;
        case tl:
            return e = je(12, n, t, i | 2),
            e.elementType = tl,
            e.lanes = o,
            e;
        case nl:
            return e = je(13, n, t, i),
            e.elementType = nl,
            e.lanes = o,
            e;
        case rl:
            return e = je(19, n, t, i),
            e.elementType = rl,
            e.lanes = o,
            e;
        case fd:
            return Xo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ud:
                    s = 10;
                    break e;
                case cd:
                    s = 9;
                    break e;
                case xa:
                    s = 11;
                    break e;
                case Sa:
                    s = 14;
                    break e;
                case Et:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = je(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function on(e, t, n, r) {
    return e = je(7, e, r, t),
    e.lanes = n,
    e
}
function Xo(e, t, n, r) {
    return e = je(22, e, r, t),
    e.elementType = fd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Fs(e, t, n) {
    return e = je(6, e, null, t),
    e.lanes = n,
    e
}
function Us(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function q0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = xs(0),
    this.expirationTimes = xs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = xs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function nu(e, t, n, r, i, o, s, l, a) {
    return e = new q0(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = je(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Fa(o),
    e
}
function ev(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function rh(e) {
    if (!e)
        return Wt;
    e = e._reactInternals;
    e: {
        if (dn(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return np(e, n, t)
    }
    return t
}
function ih(e, t, n, r, i, o, s, l, a) {
    return e = nu(n, r, !0, e, i, o, s, l, a),
    e.context = rh(null),
    n = e.current,
    r = xe(),
    i = Ut(n),
    o = ht(r, i),
    o.callback = t != null ? t : null,
    jt(n, o, i),
    e.current.lanes = i,
    ri(e, i, r),
    _e(e, r),
    e
}
function Zo(e, t, n, r) {
    var i = t.current
      , o = xe()
      , s = Ut(i);
    return n = rh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ht(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = jt(i, t, s),
    e !== null && (Xe(e, i, s, o),
    Wi(e, i, s)),
    s
}
function Po(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function zc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ru(e, t) {
    zc(e, t),
    (e = e.alternate) && zc(e, t)
}
function tv() {
    return null
}
var oh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function iu(e) {
    this._internalRoot = e
}
Jo.prototype.render = iu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    Zo(e, t, null, null)
}
;
Jo.prototype.unmount = iu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            Zo(null, e, null, null)
        }),
        t[gt] = null
    }
}
;
function Jo(e) {
    this._internalRoot = e
}
Jo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Dd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++)
            ;
        Lt.splice(n, 0, e),
        n === 0 && zd(e)
    }
}
;
function ou(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function bo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function jc() {}
function nv(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Po(s);
                o.call(u)
            }
        }
        var s = ih(t, r, e, 0, null, !1, !1, "", jc);
        return e._reactRootContainer = s,
        e[gt] = s.current,
        Br(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Po(a);
            l.call(u)
        }
    }
    var a = nu(e, 0, !1, null, null, !1, !1, "", jc);
    return e._reactRootContainer = a,
    e[gt] = a.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    cn(function() {
        Zo(t, a, n, r)
    }),
    a
}
function qo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Po(s);
                l.call(a)
            }
        }
        Zo(t, s, e, i)
    } else
        s = nv(n, t, e, i, r);
    return Po(s)
}
Ad = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = mr(t.pendingLanes);
            n !== 0 && (Pa(t, n | 1),
            _e(t, ee()),
            (F & 6) === 0 && (Yn = ee() + 500,
            Gt()))
        }
        break;
    case 13:
        cn(function() {
            var r = vt(e, 1);
            if (r !== null) {
                var i = xe();
                Xe(r, e, 1, i)
            }
        }),
        ru(e, 1)
    }
}
;
Ea = function(e) {
    if (e.tag === 13) {
        var t = vt(e, 134217728);
        if (t !== null) {
            var n = xe();
            Xe(t, e, 134217728, n)
        }
        ru(e, 134217728)
    }
}
;
Od = function(e) {
    if (e.tag === 13) {
        var t = Ut(e)
          , n = vt(e, t);
        if (n !== null) {
            var r = xe();
            Xe(n, e, t, r)
        }
        ru(e, t)
    }
}
;
Dd = function() {
    return B
}
;
Id = function(e, t) {
    var n = B;
    try {
        return B = e,
        t()
    } finally {
        B = n
    }
}
;
pl = function(e, t, n) {
    switch (t) {
    case "input":
        if (sl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ho(r);
                    if (!i)
                        throw Error(T(90));
                    pd(r),
                    sl(r, i)
                }
            }
        }
        break;
    case "textarea":
        md(e, n);
        break;
    case "select":
        t = n.value,
        t != null && On(e, !!n.multiple, t, !1)
    }
}
;
kd = ba;
Cd = cn;
var rv = {
    usingClientEntryPoint: !1,
    Events: [oi, En, Ho, xd, Sd, ba]
}
  , cr = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , iv = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Td(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || tv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber)
        try {
            Fo = Ni.inject(iv),
            ot = Ni
        } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv;
Me.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ou(t))
        throw Error(T(200));
    return ev(e, t, null, n)
}
;
Me.createRoot = function(e, t) {
    if (!ou(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , i = oh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = nu(e, 1, !1, null, null, n, !1, r, i),
    e[gt] = t.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
}
;
Me.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = Td(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Me.flushSync = function(e) {
    return cn(e)
}
;
Me.hydrate = function(e, t, n) {
    if (!bo(t))
        throw Error(T(200));
    return qo(null, e, t, !0, n)
}
;
Me.hydrateRoot = function(e, t, n) {
    if (!ou(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = oh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = ih(t, null, e, 1, n != null ? n : null, i, !1, o, s),
    e[gt] = t.current,
    Br(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Jo(t)
}
;
Me.render = function(e, t, n) {
    if (!bo(t))
        throw Error(T(200));
    return qo(null, e, t, !1, n)
}
;
Me.unmountComponentAtNode = function(e) {
    if (!bo(e))
        throw Error(T(40));
    return e._reactRootContainer ? (cn(function() {
        qo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[gt] = null
        })
    }),
    !0) : !1
}
;
Me.unstable_batchedUpdates = ba;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!bo(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return qo(e, t, n, !1, r)
}
;
Me.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
    }
    t(),
    e.exports = Me
}
)(id);
var Fc = id.exports;
qs.createRoot = Fc.createRoot,
qs.hydrateRoot = Fc.hydrateRoot;
function Eo() {
    return Eo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Eo.apply(this, arguments)
}
var tn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(tn || (tn = {}));
var Uc = function(e) {
    return e
}
  , Bc = "beforeunload"
  , ov = "popstate";
function sv(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.window
      , r = n === void 0 ? document.defaultView : n
      , i = r.history;
    function o() {
        var S = r.location
          , P = S.pathname
          , O = S.search
          , A = S.hash
          , U = i.state || {};
        return [U.idx, Uc({
            pathname: P,
            search: O,
            hash: A,
            state: U.usr || null,
            key: U.key || "default"
        })]
    }
    var s = null;
    function l() {
        if (s)
            m.call(s),
            s = null;
        else {
            var S = tn.Pop
              , P = o()
              , O = P[0]
              , A = P[1];
            if (m.length) {
                if (O != null) {
                    var U = c - O;
                    U && (s = {
                        action: S,
                        location: A,
                        retry: function() {
                            x(U * -1)
                        }
                    },
                    x(U))
                }
            } else
                p(S)
        }
    }
    r.addEventListener(ov, l);
    var a = tn.Pop
      , u = o()
      , c = u[0]
      , f = u[1]
      , d = Hc()
      , m = Hc();
    c == null && (c = 0,
    i.replaceState(Eo({}, i.state, {
        idx: c
    }), ""));
    function y(S) {
        return typeof S == "string" ? S : Ql(S)
    }
    function w(S, P) {
        return P === void 0 && (P = null),
        Uc(Eo({
            pathname: f.pathname,
            hash: "",
            search: ""
        }, typeof S == "string" ? pn(S) : S, {
            state: P,
            key: lv()
        }))
    }
    function L(S, P) {
        return [{
            usr: S.state,
            key: S.key,
            idx: P
        }, y(S)]
    }
    function g(S, P, O) {
        return !m.length || (m.call({
            action: S,
            location: P,
            retry: O
        }),
        !1)
    }
    function p(S) {
        a = S;
        var P = o();
        c = P[0],
        f = P[1],
        d.call({
            action: a,
            location: f
        })
    }
    function h(S, P) {
        var O = tn.Push
          , A = w(S, P);
        function U() {
            h(S, P)
        }
        if (g(O, A, U)) {
            var G = L(A, c + 1)
              , le = G[0]
              , fe = G[1];
            try {
                i.pushState(le, "", fe)
            } catch {
                r.location.assign(fe)
            }
            p(O)
        }
    }
    function v(S, P) {
        var O = tn.Replace
          , A = w(S, P);
        function U() {
            v(S, P)
        }
        if (g(O, A, U)) {
            var G = L(A, c)
              , le = G[0]
              , fe = G[1];
            i.replaceState(le, "", fe),
            p(O)
        }
    }
    function x(S) {
        i.go(S)
    }
    var _ = {
        get action() {
            return a
        },
        get location() {
            return f
        },
        createHref: y,
        push: h,
        replace: v,
        go: x,
        back: function() {
            x(-1)
        },
        forward: function() {
            x(1)
        },
        listen: function(P) {
            return d.push(P)
        },
        block: function(P) {
            var O = m.push(P);
            return m.length === 1 && r.addEventListener(Bc, $c),
            function() {
                O(),
                m.length || r.removeEventListener(Bc, $c)
            }
        }
    };
    return _
}
function $c(e) {
    e.preventDefault(),
    e.returnValue = ""
}
function Hc() {
    var e = [];
    return {
        get length() {
            return e.length
        },
        push: function(n) {
            return e.push(n),
            function() {
                e = e.filter(function(r) {
                    return r !== n
                })
            }
        },
        call: function(n) {
            e.forEach(function(r) {
                return r && r(n)
            })
        }
    }
}
function lv() {
    return Math.random().toString(36).substr(2, 8)
}
function Ql(e) {
    var t = e.pathname
      , n = t === void 0 ? "/" : t
      , r = e.search
      , i = r === void 0 ? "" : r
      , o = e.hash
      , s = o === void 0 ? "" : o;
    return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
}
function pn(e) {
    var t = {};
    if (e) {
        var n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        var r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const su = k.exports.createContext(null)
  , lu = k.exports.createContext(null)
  , es = k.exports.createContext({
    outlet: null,
    matches: []
});
function be(e, t) {
    if (!e)
        throw new Error(t)
}
function av(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? pn(t) : t
      , i = uh(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = sh(e);
    uv(o);
    let s = null;
    for (let l = 0; s == null && l < o.length; ++l)
        s = yv(o[l], i);
    return s
}
function sh(e, t, n, r) {
    return t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((i,o)=>{
        let s = {
            relativePath: i.path || "",
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        s.relativePath.startsWith("/") && (s.relativePath.startsWith(r) || be(!1),
        s.relativePath = s.relativePath.slice(r.length));
        let l = $t([r, s.relativePath])
          , a = n.concat(s);
        i.children && i.children.length > 0 && (i.index === !0 && be(!1),
        sh(i.children, t, a, l)),
        !(i.path == null && !i.index) && t.push({
            path: l,
            score: gv(l, i.index),
            routesMeta: a
        })
    }
    ),
    t
}
function uv(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : vv(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const cv = /^:\w+$/
  , fv = 3
  , dv = 2
  , pv = 1
  , hv = 10
  , mv = -2
  , Wc = e=>e === "*";
function gv(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Wc) && (r += mv),
    t && (r += dv),
    n.filter(i=>!Wc(i)).reduce((i,o)=>i + (cv.test(o) ? fv : o === "" ? pv : hv), r)
}
function vv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,i)=>r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function yv(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , o = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s]
          , a = s === n.length - 1
          , u = i === "/" ? t : t.slice(i.length) || "/"
          , c = lh({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: a
        }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        let f = l.route;
        o.push({
            params: r,
            pathname: $t([i, c.pathname]),
            pathnameBase: ch($t([i, c.pathnameBase])),
            route: f
        }),
        c.pathnameBase !== "/" && (i = $t([i, c.pathnameBase]))
    }
    return o
}
function lh(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = wv(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , l = i.slice(1);
    return {
        params: r.reduce((u,c,f)=>{
            if (c === "*") {
                let d = l[f] || "";
                s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = xv(l[f] || ""),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function wv(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0);
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (s,l)=>(r.push(l),
    "([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",
    [new RegExp(i,t ? void 0 : "i"), r]
}
function xv(e, t) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}
function Sv(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? pn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : kv(n, t) : t,
        search: Pv(r),
        hash: Ev(i)
    }
}
function kv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i=>{
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ah(e, t, n) {
    let r = typeof e == "string" ? pn(e) : e, i = e === "" || r.pathname === "" ? "/" : r.pathname, o;
    if (i == null)
        o = n;
    else {
        let l = t.length - 1;
        if (i.startsWith("..")) {
            let a = i.split("/");
            for (; a[0] === ".."; )
                a.shift(),
                l -= 1;
            r.pathname = a.join("/")
        }
        o = l >= 0 ? t[l] : "/"
    }
    let s = Sv(r, o);
    return i && i !== "/" && i.endsWith("/") && !s.pathname.endsWith("/") && (s.pathname += "/"),
    s
}
function Cv(e) {
    return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? pn(e).pathname : e.pathname
}
function uh(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = e.charAt(t.length);
    return n && n !== "/" ? null : e.slice(t.length) || "/"
}
const $t = e=>e.join("/").replace(/\/\/+/g, "/")
  , ch = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Pv = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Ev = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Tv(e) {
    er() || be(!1);
    let {basename: t, navigator: n} = k.exports.useContext(su)
      , {hash: r, pathname: i, search: o} = ts(e)
      , s = i;
    if (t !== "/") {
        let l = Cv(e)
          , a = l != null && l.endsWith("/");
        s = i === "/" ? t + (a ? "/" : "") : $t([t, i])
    }
    return n.createHref({
        pathname: s,
        search: o,
        hash: r
    })
}
function er() {
    return k.exports.useContext(lu) != null
}
function li() {
    return er() || be(!1),
    k.exports.useContext(lu).location
}
function fh(e) {
    er() || be(!1);
    let {pathname: t} = li();
    return k.exports.useMemo(()=>lh(e, t), [t, e])
}
function _v() {
    er() || be(!1);
    let {basename: e, navigator: t} = k.exports.useContext(su)
      , {matches: n} = k.exports.useContext(es)
      , {pathname: r} = li()
      , i = JSON.stringify(n.map(l=>l.pathnameBase))
      , o = k.exports.useRef(!1);
    return k.exports.useEffect(()=>{
        o.current = !0
    }
    ),
    k.exports.useCallback(function(l, a) {
        if (a === void 0 && (a = {}),
        !o.current)
            return;
        if (typeof l == "number") {
            t.go(l);
            return
        }
        let u = ah(l, JSON.parse(i), r);
        e !== "/" && (u.pathname = $t([e, u.pathname])),
        (a.replace ? t.replace : t.push)(u, a.state)
    }, [e, t, i, r])
}
function ts(e) {
    let {matches: t} = k.exports.useContext(es)
      , {pathname: n} = li()
      , r = JSON.stringify(t.map(i=>i.pathnameBase));
    return k.exports.useMemo(()=>ah(e, JSON.parse(r), n), [e, r, n])
}
function Lv(e, t) {
    er() || be(!1);
    let {matches: n} = k.exports.useContext(es)
      , r = n[n.length - 1]
      , i = r ? r.params : {};
    r && r.pathname;
    let o = r ? r.pathnameBase : "/";
    r && r.route;
    let s = li(), l;
    if (t) {
        var a;
        let d = typeof t == "string" ? pn(t) : t;
        o === "/" || ((a = d.pathname) == null ? void 0 : a.startsWith(o)) || be(!1),
        l = d
    } else
        l = s;
    let u = l.pathname || "/"
      , c = o === "/" ? u : u.slice(o.length) || "/"
      , f = av(e, {
        pathname: c
    });
    return Rv(f && f.map(d=>Object.assign({}, d, {
        params: Object.assign({}, i, d.params),
        pathname: $t([o, d.pathname]),
        pathnameBase: d.pathnameBase === "/" ? o : $t([o, d.pathnameBase])
    })), n)
}
function Rv(e, t) {
    return t === void 0 && (t = []),
    e == null ? null : e.reduceRight((n,r,i)=>k.exports.createElement(es.Provider, {
        children: r.route.element !== void 0 ? r.route.element : n,
        value: {
            outlet: n,
            matches: t.concat(e.slice(0, i + 1))
        }
    }), null)
}
function yn(e) {
    be(!1)
}
function Nv(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=tn.Pop, navigator: o, static: s=!1} = e;
    er() && be(!1);
    let l = ch(t)
      , a = k.exports.useMemo(()=>({
        basename: l,
        navigator: o,
        static: s
    }), [l, o, s]);
    typeof r == "string" && (r = pn(r));
    let {pathname: u="/", search: c="", hash: f="", state: d=null, key: m="default"} = r
      , y = k.exports.useMemo(()=>{
        let w = uh(u, l);
        return w == null ? null : {
            pathname: w,
            search: c,
            hash: f,
            state: d,
            key: m
        }
    }
    , [l, u, c, f, d, m]);
    return y == null ? null : k.exports.createElement(su.Provider, {
        value: a
    }, k.exports.createElement(lu.Provider, {
        children: n,
        value: {
            location: y,
            navigationType: i
        }
    }))
}
function Vv(e) {
    let {children: t, location: n} = e;
    return Lv(Gl(t), n)
}
function Gl(e) {
    let t = [];
    return k.exports.Children.forEach(e, n=>{
        if (!k.exports.isValidElement(n))
            return;
        if (n.type === k.exports.Fragment) {
            t.push.apply(t, Gl(n.props.children));
            return
        }
        n.type !== yn && be(!1);
        let r = {
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path
        };
        n.props.children && (r.children = Gl(n.props.children)),
        t.push(r)
    }
    ),
    t
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yl() {
    return Yl = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Yl.apply(this, arguments)
}
function Mv(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
const Av = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function Ov(e) {
    let {basename: t, children: n, window: r} = e
      , i = k.exports.useRef();
    i.current == null && (i.current = sv({
        window: r
    }));
    let o = i.current
      , [s,l] = k.exports.useState({
        action: o.action,
        location: o.location
    });
    return k.exports.useLayoutEffect(()=>o.listen(l), [o]),
    k.exports.createElement(Nv, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: o
    })
}
function Dv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
const ns = k.exports.forwardRef(function(t, n) {
    let {onClick: r, reloadDocument: i, replace: o=!1, state: s, target: l, to: a} = t
      , u = Mv(t, Av)
      , c = Tv(a)
      , f = Iv(a, {
        replace: o,
        state: s,
        target: l
    });
    function d(m) {
        r && r(m),
        !m.defaultPrevented && !i && f(m)
    }
    return k.exports.createElement("a", Yl({}, u, {
        href: c,
        onClick: d,
        ref: n,
        target: l
    }))
});
function Iv(e, t) {
    let {target: n, replace: r, state: i} = t === void 0 ? {} : t
      , o = _v()
      , s = li()
      , l = ts(e);
    return k.exports.useCallback(a=>{
        if (a.button === 0 && (!n || n === "_self") && !Dv(a)) {
            a.preventDefault();
            let u = !!r || Ql(s) === Ql(l);
            o(e, {
                replace: u,
                state: i
            })
        }
    }
    , [s, o, l, r, i, n, e])
}
const zv = "/assets/icon-close.829c583a.svg"
  , jv = "/assets/icon-hamburger.a9c92f26.svg"
  , Fv = "/assets/logo.43040818.svg"
  , au = k.exports.createContext({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , rs = k.exports.createContext({});
function Uv() {
    return k.exports.useContext(rs).visualElement
}
const ai = k.exports.createContext(null)
  , hn = typeof document < "u"
  , To = hn ? k.exports.useLayoutEffect : k.exports.useEffect
  , dh = k.exports.createContext({
    strict: !1
});
function Bv(e, t, n, r) {
    const i = Uv()
      , o = k.exports.useContext(dh)
      , s = k.exports.useContext(ai)
      , l = k.exports.useContext(au).reducedMotion
      , a = k.exports.useRef(void 0);
    r = r || o.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: s ? s.id : void 0,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    return To(()=>{
        u && u.syncRender()
    }
    ),
    k.exports.useEffect(()=>{
        u && u.animationState && u.animationState.animateChanges()
    }
    ),
    To(()=>()=>u && u.notifyUnmount(), []),
    u
}
function Mn(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function $v(e, t, n) {
    return k.exports.useCallback(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r))
    }
    , [t])
}
function Zr(e) {
    return typeof e == "string" || Array.isArray(e)
}
function is(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Hv = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
function os(e) {
    return is(e.animate) || Hv.some(t=>Zr(e[t]))
}
function ph(e) {
    return Boolean(os(e) || e.variants)
}
function Wv(e, t) {
    if (os(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Zr(n) ? n : void 0,
            animate: Zr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Kv(e) {
    const {initial: t, animate: n} = Wv(e, k.exports.useContext(rs));
    return k.exports.useMemo(()=>({
        initial: t,
        animate: n
    }), [Kc(t), Kc(n)])
}
function Kc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const ut = e=>({
    isEnabled: t=>e.some(n=>!!t[n])
})
  , Jr = {
    measureLayout: ut(["layout", "layoutId", "drag"]),
    animation: ut(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
    exit: ut(["exit"]),
    drag: ut(["drag", "dragControls"]),
    focus: ut(["whileFocus"]),
    hover: ut(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: ut(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: ut(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    inView: ut(["whileInView", "onViewportEnter", "onViewportLeave"])
};
function Qv(e) {
    for (const t in e)
        t === "projectionNodeConstructor" ? Jr.projectionNodeConstructor = e[t] : Jr[t].Component = e[t]
}
function ss(e) {
    const t = k.exports.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Tr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let Gv = 1;
function Yv() {
    return ss(()=>{
        if (Tr.hasEverUpdated)
            return Gv++
    }
    )
}
const uu = k.exports.createContext({});
class Xv extends ma.Component {
    getSnapshotBeforeUpdate() {
        const {visualElement: t, props: n} = this.props;
        return t && t.setProps(n),
        null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
const hh = k.exports.createContext({});
var ls = {
    exports: {}
}
  , as = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv = k.exports
  , Jv = Symbol.for("react.element")
  , bv = Symbol.for("react.fragment")
  , qv = Object.prototype.hasOwnProperty
  , ey = Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ty = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function mh(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        qv.call(t, r) && !ty.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Jv,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ey.current
    }
}
as.Fragment = bv;
as.jsx = mh;
as.jsxs = mh;
(function(e) {
    e.exports = as
}
)(ls);
const Qc = ls.exports.Fragment
  , E = ls.exports.jsx
  , z = ls.exports.jsxs;
function ny({preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: i, Component: o}) {
    e && Qv(e);
    function s(l, a) {
        const u = {
            ...k.exports.useContext(au),
            ...l,
            layoutId: ry(l)
        }
          , {isStatic: c} = u;
        let f = null;
        const d = Kv(l)
          , m = c ? void 0 : Yv()
          , y = i(l, c);
        if (!c && hn) {
            d.visualElement = Bv(o, y, u, t);
            const w = k.exports.useContext(dh).strict
              , L = k.exports.useContext(hh);
            d.visualElement && (f = d.visualElement.loadFeatures(l, w, e, m, n || Jr.projectionNodeConstructor, L))
        }
        return z(Xv, {
            visualElement: d.visualElement,
            props: u,
            children: [f, E(rs.Provider, {
                value: d,
                children: r(o, l, m, $v(y, d.visualElement, a), y, c, d.visualElement)
            })]
        })
    }
    return k.exports.forwardRef(s)
}
function ry({layoutId: e}) {
    const t = k.exports.useContext(uu).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function iy(e) {
    function t(r, i={}) {
        return ny(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const oy = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
function cu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(oy.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const _o = {};
function sy(e) {
    Object.assign(_o, e)
}
const Lo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "skew", "skewX", "skewY"]
  , ui = new Set(Lo);
function gh(e, {layout: t, layoutId: n}) {
    return ui.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!_o[e] || e === "opacity")
}
const at = e=>e === void 0 ? !1 : !!e.getVelocity
  , ly = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , ay = (e,t)=>Lo.indexOf(e) - Lo.indexOf(t);
function uy({transform: e, transformKeys: t}, {enableHardwareAcceleration: n=!0, allowTransformNone: r=!0}, i, o) {
    let s = "";
    t.sort(ay);
    for (const l of t)
        s += `${ly[l] || l}(${e[l]}) `;
    return n && !e.z && (s += "translateZ(0)"),
    s = s.trim(),
    o ? s = o(e, i ? "" : s) : r && i && (s = "none"),
    s
}
function vh(e) {
    return e.startsWith("--")
}
const cy = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
  , yh = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , _r = e=>e % 1 ? Number(e.toFixed(5)) : e
  , br = /(-)?([\d]*\.?[\d])+/g
  , Xl = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , fy = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ci(e) {
    return typeof e == "string"
}
const mn = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , Lr = Object.assign(Object.assign({}, mn), {
    transform: yh(0, 1)
})
  , Vi = Object.assign(Object.assign({}, mn), {
    default: 1
})
  , fi = e=>({
    test: t=>ci(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Ct = fi("deg")
  , lt = fi("%")
  , D = fi("px")
  , dy = fi("vh")
  , py = fi("vw")
  , Gc = Object.assign(Object.assign({}, lt), {
    parse: e=>lt.parse(e) / 100,
    transform: e=>lt.transform(e * 100)
})
  , fu = (e,t)=>n=>Boolean(ci(n) && fy.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , wh = (e,t,n)=>r=>{
    if (!ci(r))
        return r;
    const [i,o,s,l] = r.match(br);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , nn = {
    test: fu("hsl", "hue"),
    parse: wh("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + lt.transform(_r(t)) + ", " + lt.transform(_r(n)) + ", " + _r(Lr.transform(r)) + ")"
}
  , hy = yh(0, 255)
  , Bs = Object.assign(Object.assign({}, mn), {
    transform: e=>Math.round(hy(e))
})
  , Mt = {
    test: fu("rgb", "red"),
    parse: wh("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + Bs.transform(e) + ", " + Bs.transform(t) + ", " + Bs.transform(n) + ", " + _r(Lr.transform(r)) + ")"
};
function my(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substr(1, 2),
    n = e.substr(3, 2),
    r = e.substr(5, 2),
    i = e.substr(7, 2)) : (t = e.substr(1, 1),
    n = e.substr(2, 1),
    r = e.substr(3, 1),
    i = e.substr(4, 1),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Zl = {
    test: fu("#"),
    parse: my,
    transform: Mt.transform
}
  , ye = {
    test: e=>Mt.test(e) || Zl.test(e) || nn.test(e),
    parse: e=>Mt.test(e) ? Mt.parse(e) : nn.test(e) ? nn.parse(e) : Zl.parse(e),
    transform: e=>ci(e) ? e : e.hasOwnProperty("red") ? Mt.transform(e) : nn.transform(e)
}
  , xh = "${c}"
  , Sh = "${n}";
function gy(e) {
    var t, n, r, i;
    return isNaN(e) && ci(e) && ((n = (t = e.match(br)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Xl)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function kh(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Xl);
    r && (n = r.length,
    e = e.replace(Xl, xh),
    t.push(...r.map(ye.parse)));
    const i = e.match(br);
    return i && (e = e.replace(br, Sh),
    t.push(...i.map(mn.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Ch(e) {
    return kh(e).values
}
function Ph(e) {
    const {values: t, numColors: n, tokenised: r} = kh(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let l = 0; l < i; l++)
            s = s.replace(l < n ? xh : Sh, l < n ? ye.transform(o[l]) : _r(o[l]));
        return s
    }
}
const vy = e=>typeof e == "number" ? 0 : e;
function yy(e) {
    const t = Ch(e);
    return Ph(e)(t.map(vy))
}
const wt = {
    test: gy,
    parse: Ch,
    createTransformer: Ph,
    getAnimatableNone: yy
}
  , wy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function xy(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(br) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = wy.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const Sy = /([a-z-]*)\(.*?\)/g
  , Jl = Object.assign(Object.assign({}, wt), {
    getAnimatableNone: e=>{
        const t = e.match(Sy);
        return t ? t.map(xy).join(" ") : e
    }
})
  , Yc = {
    ...mn,
    transform: Math.round
}
  , Eh = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: Ct,
    rotateX: Ct,
    rotateY: Ct,
    rotateZ: Ct,
    scale: Vi,
    scaleX: Vi,
    scaleY: Vi,
    scaleZ: Vi,
    skew: Ct,
    skewX: Ct,
    skewY: Ct,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Lr,
    originX: Gc,
    originY: Gc,
    originZ: D,
    zIndex: Yc,
    fillOpacity: Lr,
    strokeOpacity: Lr,
    numOctaves: Yc
};
function du(e, t, n, r) {
    const {style: i, vars: o, transform: s, transformKeys: l, transformOrigin: a} = e;
    l.length = 0;
    let u = !1
      , c = !1
      , f = !0;
    for (const d in t) {
        const m = t[d];
        if (vh(d)) {
            o[d] = m;
            continue
        }
        const y = Eh[d]
          , w = cy(m, y);
        if (ui.has(d)) {
            if (u = !0,
            s[d] = w,
            l.push(d),
            !f)
                continue;
            m !== (y.default || 0) && (f = !1)
        } else
            d.startsWith("origin") ? (c = !0,
            a[d] = w) : i[d] = w
    }
    if (u || r ? i.transform = uy(e, n, f, r) : !t.transform && i.transform && (i.transform = "none"),
    c) {
        const {originX: d="50%", originY: m="50%", originZ: y=0} = a;
        i.transformOrigin = `${d} ${m} ${y}`
    }
}
const pu = ()=>({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
});
function Th(e, t, n) {
    for (const r in t)
        !at(t[r]) && !gh(r, n) && (e[r] = t[r])
}
function ky({transformTemplate: e}, t, n) {
    return k.exports.useMemo(()=>{
        const r = pu();
        return du(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function Cy(e, t, n) {
    const r = e.style || {}
      , i = {};
    return Th(i, r, e),
    Object.assign(i, ky(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
}
function Py(e, t, n) {
    const r = {}
      , i = Cy(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    r.style = i,
    r
}
const Ey = ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]
  , Ty = ["whileTap", "onTap", "onTapStart", "onTapCancel"]
  , _y = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]
  , Ly = ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"]
  , Ry = new Set(["initial", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", ...Ly, ...Ty, ...Ey, ..._y]);
function Ro(e) {
    return Ry.has(e)
}
let _h = e=>!Ro(e);
function Ny(e) {
    !e || (_h = t=>t.startsWith("on") ? !Ro(t) : e(t))
}
try {
    Ny(require("@emotion/is-prop-valid").default)
} catch {}
function Vy(e, t, n) {
    const r = {};
    for (const i in e)
        (_h(i) || n === !0 && Ro(i) || !t && !Ro(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Xc(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}
function My(e, t, n) {
    const r = Xc(t, e.x, e.width)
      , i = Xc(n, e.y, e.height);
    return `${r} ${i}`
}
const Ay = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Oy = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Dy(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? Ay : Oy;
    e[o.offset] = D.transform(-r);
    const s = D.transform(t)
      , l = D.transform(n);
    e[o.array] = `${s} ${l}`
}
function hu(e, {attrX: t, attrY: n, originX: r, originY: i, pathLength: o, pathSpacing: s=1, pathOffset: l=0, ...a}, u, c) {
    du(e, a, u, c),
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: d, dimensions: m} = e;
    f.transform && (m && (d.transform = f.transform),
    delete f.transform),
    m && (r !== void 0 || i !== void 0 || d.transform) && (d.transformOrigin = My(m, r !== void 0 ? r : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    o !== void 0 && Dy(f, o, s, l, !1)
}
const Lh = ()=>({
    ...pu(),
    attrs: {}
});
function Iy(e, t) {
    const n = k.exports.useMemo(()=>{
        const r = Lh();
        return hu(r, t, {
            enableHardwareAcceleration: !1
        }, e.transformTemplate),
        {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const r = {};
        Th(r, e.style, e),
        n.style = {
            ...r,
            ...n.style
        }
    }
    return n
}
function zy(e=!1) {
    return (n,r,i,o,{latestValues: s},l)=>{
        const u = (cu(n) ? Iy : Py)(r, s, l)
          , f = {
            ...Vy(r, typeof n == "string", e),
            ...u,
            ref: o
        };
        return i && (f["data-projection-id"] = i),
        k.exports.createElement(n, f)
    }
}
const Rh = e=>e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Nh(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const Vh = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
function Mh(e, t, n, r) {
    Nh(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Vh.has(i) ? i : Rh(i), t.attrs[i])
}
function mu(e) {
    const {style: t} = e
      , n = {};
    for (const r in t)
        (at(t[r]) || gh(r, e)) && (n[r] = t[r]);
    return n
}
function Ah(e) {
    const t = mu(e);
    for (const n in e)
        if (at(e[n])) {
            const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
            t[r] = e[n]
        }
    return t
}
function Oh(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
const qr = e=>Array.isArray(e)
  , jy = e=>Boolean(e && typeof e == "object" && e.mix && e.toValue)
  , Dh = e=>qr(e) ? e[e.length - 1] || 0 : e;
function Ji(e) {
    const t = at(e) ? e.get() : e;
    return jy(t) ? t.toValue() : t
}
function Fy({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const s = {
        latestValues: Uy(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = l=>n(r, l, s)),
    s
}
const Ih = e=>(t,n)=>{
    const r = k.exports.useContext(rs)
      , i = k.exports.useContext(ai)
      , o = ()=>Fy(e, t, r, i);
    return n ? o() : ss(o)
}
;
function Uy(e, t, n, r) {
    const i = {}
      , o = r(e);
    for (const d in o)
        i[d] = Ji(o[d]);
    let {initial: s, animate: l} = e;
    const a = os(e)
      , u = ph(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    return f && typeof f != "boolean" && !is(f) && (Array.isArray(f) ? f : [f]).forEach(m=>{
        const y = Oh(e, m);
        if (!y)
            return;
        const {transitionEnd: w, transition: L, ...g} = y;
        for (const p in g) {
            let h = g[p];
            if (Array.isArray(h)) {
                const v = c ? h.length - 1 : 0;
                h = h[v]
            }
            h !== null && (i[p] = h)
        }
        for (const p in w)
            i[p] = w[p]
    }
    ),
    i
}
const By = {
    useVisualState: Ih({
        scrapeMotionValuesFromProps: Ah,
        createRenderState: Lh,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            try {
                n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
            } catch {
                n.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            hu(n, r, {
                enableHardwareAcceleration: !1
            }, e.transformTemplate),
            Mh(t, n)
        }
    })
}
  , $y = {
    useVisualState: Ih({
        scrapeMotionValuesFromProps: mu,
        createRenderState: pu
    })
};
function Hy(e, {forwardMotionProps: t=!1}, n, r, i) {
    return {
        ...cu(e) ? By : $y,
        preloadedFeatures: n,
        useRender: zy(t),
        createVisualElement: r,
        projectionNodeConstructor: i,
        Component: e
    }
}
var $;
(function(e) {
    e.Animate = "animate",
    e.Hover = "whileHover",
    e.Tap = "whileTap",
    e.Drag = "whileDrag",
    e.Focus = "whileFocus",
    e.InView = "whileInView",
    e.Exit = "exit"
}
)($ || ($ = {}));
function us(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
function bl(e, t, n, r) {
    k.exports.useEffect(()=>{
        const i = e.current;
        if (n && i)
            return us(i, t, n, r)
    }
    , [e, t, n, r])
}
function Wy({whileFocus: e, visualElement: t}) {
    const {animationState: n} = t
      , r = ()=>{
        n && n.setActive($.Focus, !0)
    }
      , i = ()=>{
        n && n.setActive($.Focus, !1)
    }
    ;
    bl(t, "focus", e ? r : void 0),
    bl(t, "blur", e ? i : void 0)
}
function zh(e) {
    return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent
}
function jh(e) {
    return !!e.touches
}
function Ky(e) {
    return t=>{
        const n = t instanceof MouseEvent;
        (!n || n && t.button === 0) && e(t)
    }
}
const Qy = {
    pageX: 0,
    pageY: 0
};
function Gy(e, t="page") {
    const r = e.touches[0] || e.changedTouches[0] || Qy;
    return {
        x: r[t + "X"],
        y: r[t + "Y"]
    }
}
function Yy(e, t="page") {
    return {
        x: e[t + "X"],
        y: e[t + "Y"]
    }
}
function gu(e, t="page") {
    return {
        point: jh(e) ? Gy(e, t) : Yy(e, t)
    }
}
const Fh = (e,t=!1)=>{
    const n = r=>e(r, gu(r));
    return t ? Ky(n) : n
}
  , Xy = ()=>hn && window.onpointerdown === null
  , Zy = ()=>hn && window.ontouchstart === null
  , Jy = ()=>hn && window.onmousedown === null
  , by = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave"
}
  , qy = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel"
};
function Uh(e) {
    return Xy() ? e : Zy() ? qy[e] : Jy() ? by[e] : e
}
function Un(e, t, n, r) {
    return us(e, Uh(t), Fh(n, t === "pointerdown"), r)
}
function No(e, t, n, r) {
    return bl(e, Uh(t), n && Fh(n, t === "pointerdown"), r)
}
function Bh(e) {
    let t = null;
    return ()=>{
        const n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const Zc = Bh("dragHorizontal")
  , Jc = Bh("dragVertical");
function $h(e) {
    let t = !1;
    if (e === "y")
        t = Jc();
    else if (e === "x")
        t = Zc();
    else {
        const n = Zc()
          , r = Jc();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function Hh() {
    const e = $h(!0);
    return e ? (e(),
    !1) : !0
}
function bc(e, t, n) {
    return (r,i)=>{
        !zh(r) || Hh() || (e.animationState && e.animationState.setActive($.Hover, t),
        n && n(r, i))
    }
}
function e1({onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r}) {
    No(r, "pointerenter", e || n ? bc(r, !0, e) : void 0, {
        passive: !e
    }),
    No(r, "pointerleave", t || n ? bc(r, !1, t) : void 0, {
        passive: !t
    })
}
const Wh = (e,t)=>t ? e === t ? !0 : Wh(e, t.parentElement) : !1;
function vu(e) {
    return k.exports.useEffect(()=>()=>e(), [])
}
function Kh(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var t1 = function() {}
  , Vo = function() {};
const Mo = (e,t,n)=>Math.min(Math.max(n, e), t)
  , $s = .001
  , n1 = .01
  , qc = 10
  , r1 = .05
  , i1 = 1;
function o1({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o;
    t1(e <= qc * 1e3);
    let s = 1 - t;
    s = Mo(r1, i1, s),
    e = Mo(n1, qc, e / 1e3),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , m = ql(u, s)
          , y = Math.exp(-f);
        return $s - d / m * y
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(u, 2) * e
          , y = Math.exp(-f)
          , w = ql(Math.pow(u, 2), s);
        return (-i(u) + $s > 0 ? -1 : 1) * ((d - m) * y) / w
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -$s + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const l = 5 / e
      , a = l1(i, o, l);
    if (e = e * 1e3,
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const s1 = 12;
function l1(e, t, n) {
    let r = n;
    for (let i = 1; i < s1; i++)
        r = r - e(r) / t(r);
    return r
}
function ql(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const a1 = ["duration", "bounce"]
  , u1 = ["stiffness", "damping", "mass"];
function ef(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function c1(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!ef(e, u1) && ef(e, a1)) {
        const n = o1(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function yu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Kh(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: l, damping: a, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = c1(o)
      , m = tf
      , y = tf;
    function w() {
        const L = c ? -(c / 1e3) : 0
          , g = n - t
          , p = a / (2 * Math.sqrt(l * u))
          , h = Math.sqrt(l / u) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        p < 1) {
            const v = ql(h, p);
            m = x=>{
                const _ = Math.exp(-p * h * x);
                return n - _ * ((L + p * h * g) / v * Math.sin(v * x) + g * Math.cos(v * x))
            }
            ,
            y = x=>{
                const _ = Math.exp(-p * h * x);
                return p * h * _ * (Math.sin(v * x) * (L + p * h * g) / v + g * Math.cos(v * x)) - _ * (Math.cos(v * x) * (L + p * h * g) - v * g * Math.sin(v * x))
            }
        } else if (p === 1)
            m = v=>n - Math.exp(-h * v) * (g + (L + h * g) * v);
        else {
            const v = h * Math.sqrt(p * p - 1);
            m = x=>{
                const _ = Math.exp(-p * h * x)
                  , S = Math.min(v * x, 300);
                return n - _ * ((L + p * h * g) * Math.sinh(S) + v * g * Math.cosh(S)) / v
            }
        }
    }
    return w(),
    {
        next: L=>{
            const g = m(L);
            if (d)
                s.done = L >= f;
            else {
                const p = y(L) * 1e3
                  , h = Math.abs(p) <= r
                  , v = Math.abs(n - g) <= i;
                s.done = h && v
            }
            return s.value = s.done ? n : g,
            s
        }
        ,
        flipTarget: ()=>{
            c = -c,
            [t,n] = [n, t],
            w()
        }
    }
}
yu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const tf = e=>0
  , ei = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , q = (e,t,n)=>-n * e + n * t + e;
function Hs(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function nf({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = Hs(a, l, e + 1 / 3),
        o = Hs(a, l, e),
        s = Hs(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const f1 = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , d1 = [Zl, Mt, nn]
  , rf = e=>d1.find(t=>t.test(e))
  , Qh = (e,t)=>{
    let n = rf(e)
      , r = rf(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === nn && (i = nf(i),
    n = Mt),
    r === nn && (o = nf(o),
    r = Mt);
    const s = Object.assign({}, i);
    return l=>{
        for (const a in s)
            a !== "alpha" && (s[a] = f1(i[a], o[a], l));
        return s.alpha = q(i.alpha, o.alpha, l),
        n.transform(s)
    }
}
  , ea = e=>typeof e == "number"
  , p1 = (e,t)=>n=>t(e(n))
  , cs = (...e)=>e.reduce(p1);
function Gh(e, t) {
    return ea(e) ? n=>q(e, t, n) : ye.test(e) ? Qh(e, t) : Xh(e, t)
}
const Yh = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>Gh(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , h1 = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Gh(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function of(e) {
    const t = wt.parse(e)
      , n = t.length;
    let r = 0
      , i = 0
      , o = 0;
    for (let s = 0; s < n; s++)
        r || typeof t[s] == "number" ? r++ : t[s].hue !== void 0 ? o++ : i++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: i,
        numHSL: o
    }
}
const Xh = (e,t)=>{
    const n = wt.createTransformer(t)
      , r = of(e)
      , i = of(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? cs(Yh(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , m1 = (e,t)=>n=>q(e, t, n);
function g1(e) {
    if (typeof e == "number")
        return m1;
    if (typeof e == "string")
        return ye.test(e) ? Qh : Xh;
    if (Array.isArray(e))
        return Yh;
    if (typeof e == "object")
        return h1
}
function v1(e, t, n) {
    const r = []
      , i = n || g1(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] : t;
            l = cs(a, l)
        }
        r.push(l)
    }
    return r
}
function y1([e,t], [n]) {
    return r=>n(ei(e, t, r))
}
function w1(e, t) {
    const n = e.length
      , r = n - 1;
    return i=>{
        let o = 0
          , s = !1;
        if (i <= e[0] ? s = !0 : i >= e[r] && (o = r - 1,
        s = !0),
        !s) {
            let a = 1;
            for (; a < n && !(e[a] > i || a === r); a++)
                ;
            o = a - 1
        }
        const l = ei(e[o], e[o + 1], i);
        return t[o](l)
    }
}
function Zh(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Vo(o === t.length),
    Vo(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = v1(t, r, i)
      , l = o === 2 ? y1(e, s) : w1(e, s);
    return n ? a=>l(Mo(e[0], e[o - 1], a)) : l
}
const fs = e=>t=>1 - e(1 - t)
  , wu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , x1 = e=>t=>Math.pow(t, e)
  , Jh = e=>t=>t * t * ((e + 1) * t - e)
  , S1 = e=>{
    const t = Jh(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , bh = 1.525
  , k1 = 4 / 11
  , C1 = 8 / 11
  , P1 = 9 / 10
  , xu = e=>e
  , Su = x1(2)
  , E1 = fs(Su)
  , qh = wu(Su)
  , em = e=>1 - Math.sin(Math.acos(e))
  , ku = fs(em)
  , T1 = wu(ku)
  , Cu = Jh(bh)
  , _1 = fs(Cu)
  , L1 = wu(Cu)
  , R1 = S1(bh)
  , N1 = 4356 / 361
  , V1 = 35442 / 1805
  , M1 = 16061 / 1805
  , Ao = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < k1 ? 7.5625 * t : e < C1 ? 9.075 * t - 9.9 * e + 3.4 : e < P1 ? N1 * t - V1 * e + M1 : 10.8 * e * e - 20.52 * e + 10.72
}
  , A1 = fs(Ao)
  , O1 = e=>e < .5 ? .5 * (1 - Ao(1 - e * 2)) : .5 * Ao(e * 2 - 1) + .5;
function D1(e, t) {
    return e.map(()=>t || qh).splice(0, e.length - 1)
}
function I1(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function z1(e, t) {
    return e.map(n=>n * t)
}
function bi({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , l = z1(r && r.length === s.length ? r : I1(s), i);
    function a() {
        return Zh(l, s, {
            ease: Array.isArray(n) ? n : D1(s, n)
        })
    }
    let u = a();
    return {
        next: c=>(o.value = u(c),
        o.done = c >= i,
        o),
        flipTarget: ()=>{
            s.reverse(),
            u = a()
        }
    }
}
function j1({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
    const s = {
        done: !1,
        value: t
    };
    let l = n * e;
    const a = t + l
      , u = o === void 0 ? a : o(a);
    return u !== a && (l = u - t),
    {
        next: c=>{
            const f = -l * Math.exp(-c / r);
            return s.done = !(f > i || f < -i),
            s.value = s.done ? u : u + f,
            s
        }
        ,
        flipTarget: ()=>{}
    }
}
const sf = {
    keyframes: bi,
    spring: yu,
    decay: j1
};
function F1(e) {
    if (Array.isArray(e.to))
        return bi;
    if (sf[e.type])
        return sf[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? bi : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? yu : bi
}
const tm = 1 / 60 * 1e3
  , U1 = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , nm = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(U1()), tm);
function B1(e) {
    let t = []
      , n = []
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , l = {
        schedule: (a,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? t : n;
            return u && s.add(a),
            d.indexOf(a) === -1 && (d.push(a),
            f && i && (r = t.length)),
            a
        }
        ,
        cancel: a=>{
            const u = n.indexOf(a);
            u !== -1 && n.splice(u, 1),
            s.delete(a)
        }
        ,
        process: a=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.length = 0,
            r = t.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t[u];
                    c(a),
                    s.has(c) && (l.schedule(c),
                    e())
                }
            i = !1,
            o && (o = !1,
            l.process(a))
        }
    };
    return l
}
const $1 = 40;
let ta = !0
  , ti = !1
  , na = !1;
const Bn = {
    delta: 0,
    timestamp: 0
}
  , di = ["read", "update", "preRender", "render", "postRender"]
  , ds = di.reduce((e,t)=>(e[t] = B1(()=>ti = !0),
e), {})
  , Ze = di.reduce((e,t)=>{
    const n = ds[t];
    return e[t] = (r,i=!1,o=!1)=>(ti || W1(),
    n.schedule(r, i, o)),
    e
}
, {})
  , Xn = di.reduce((e,t)=>(e[t] = ds[t].cancel,
e), {})
  , Ws = di.reduce((e,t)=>(e[t] = ()=>ds[t].process(Bn),
e), {})
  , H1 = e=>ds[e].process(Bn)
  , rm = e=>{
    ti = !1,
    Bn.delta = ta ? tm : Math.max(Math.min(e - Bn.timestamp, $1), 1),
    Bn.timestamp = e,
    na = !0,
    di.forEach(H1),
    na = !1,
    ti && (ta = !1,
    nm(rm))
}
  , W1 = ()=>{
    ti = !0,
    ta = !0,
    na || nm(rm)
}
  , Oo = ()=>Bn;
function im(e, t, n=0) {
    return e - t - n
}
function K1(e, t, n=0, r=!0) {
    return r ? im(t + -e, t, n) : t - (e - t) + n
}
function Q1(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const G1 = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>Ze.update(t, !0),
        stop: ()=>Xn.update(t)
    }
}
;
function om(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=G1, elapsed: s=0, repeat: l=0, repeatType: a="loop", repeatDelay: u=0, onPlay: c, onStop: f, onComplete: d, onRepeat: m, onUpdate: y} = e, w = Kh(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: L} = w, g, p = 0, h = w.duration, v, x = !1, _ = !0, S;
    const P = F1(w);
    !((n = (t = P).needsInterpolation) === null || n === void 0) && n.call(t, r, L) && (S = Zh([0, 100], [r, L], {
        clamp: !1
    }),
    r = 0,
    L = 100);
    const O = P(Object.assign(Object.assign({}, w), {
        from: r,
        to: L
    }));
    function A() {
        p++,
        a === "reverse" ? (_ = p % 2 === 0,
        s = K1(s, h, u, _)) : (s = im(s, h, u),
        a === "mirror" && O.flipTarget()),
        x = !1,
        m && m()
    }
    function U() {
        g.stop(),
        d && d()
    }
    function G(fe) {
        if (_ || (fe = -fe),
        s += fe,
        !x) {
            const Oe = O.next(Math.max(0, s));
            v = Oe.value,
            S && (v = S(v)),
            x = _ ? Oe.done : s <= 0
        }
        y == null || y(v),
        x && (p === 0 && (h != null || (h = s)),
        p < l ? Q1(s, h, u, _) && A() : U())
    }
    function le() {
        c == null || c(),
        g = o(G),
        g.start()
    }
    return i && le(),
    {
        stop: ()=>{
            f == null || f(),
            g.stop()
        }
    }
}
function sm(e, t) {
    return t ? e * (1e3 / t) : 0
}
function Y1({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: l=10, restDelta: a=1, modifyTarget: u, driver: c, onUpdate: f, onComplete: d, onStop: m}) {
    let y;
    function w(h) {
        return n !== void 0 && h < n || r !== void 0 && h > r
    }
    function L(h) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - h) < Math.abs(r - h) ? n : r
    }
    function g(h) {
        y == null || y.stop(),
        y = om(Object.assign(Object.assign({}, h), {
            driver: c,
            onUpdate: v=>{
                var x;
                f == null || f(v),
                (x = h.onUpdate) === null || x === void 0 || x.call(h, v)
            }
            ,
            onComplete: d,
            onStop: m
        }))
    }
    function p(h) {
        g(Object.assign({
            type: "spring",
            stiffness: s,
            damping: l,
            restDelta: a
        }, h))
    }
    if (w(e))
        p({
            from: e,
            velocity: t,
            to: L(e)
        });
    else {
        let h = i * t + e;
        typeof u < "u" && (h = u(h));
        const v = L(h)
          , x = v === n ? -1 : 1;
        let _, S;
        const P = O=>{
            _ = S,
            S = O,
            t = sm(O - _, Oo().delta),
            (x === 1 && O > v || x === -1 && O < v) && p({
                from: O,
                to: v,
                velocity: t
            })
        }
        ;
        g({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: o,
            power: i,
            restDelta: a,
            modifyTarget: u,
            onUpdate: w(h) ? P : void 0
        })
    }
    return {
        stop: ()=>y == null ? void 0 : y.stop()
    }
}
const ra = e=>e.hasOwnProperty("x") && e.hasOwnProperty("y")
  , lf = e=>ra(e) && e.hasOwnProperty("z")
  , Mi = (e,t)=>Math.abs(e - t);
function lm(e, t) {
    if (ea(e) && ea(t))
        return Mi(e, t);
    if (ra(e) && ra(t)) {
        const n = Mi(e.x, t.x)
          , r = Mi(e.y, t.y)
          , i = lf(e) && lf(t) ? Mi(e.z, t.z) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2))
    }
}
const am = (e,t)=>1 - 3 * t + 3 * e
  , um = (e,t)=>3 * t - 6 * e
  , cm = e=>3 * e
  , Do = (e,t,n)=>((am(t, n) * e + um(t, n)) * e + cm(t)) * e
  , fm = (e,t,n)=>3 * am(t, n) * e * e + 2 * um(t, n) * e + cm(t)
  , X1 = 1e-7
  , Z1 = 10;
function J1(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = Do(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > X1 && ++l < Z1);
    return s
}
const b1 = 8
  , q1 = .001;
function ew(e, t, n, r) {
    for (let i = 0; i < b1; ++i) {
        const o = fm(t, n, r);
        if (o === 0)
            return t;
        t -= (Do(t, n, r) - e) / o
    }
    return t
}
const qi = 11
  , Ai = 1 / (qi - 1);
function tw(e, t, n, r) {
    if (e === t && n === r)
        return xu;
    const i = new Float32Array(qi);
    for (let s = 0; s < qi; ++s)
        i[s] = Do(s * Ai, e, n);
    function o(s) {
        let l = 0
          , a = 1;
        const u = qi - 1;
        for (; a !== u && i[a] <= s; ++a)
            l += Ai;
        --a;
        const c = (s - i[a]) / (i[a + 1] - i[a])
          , f = l + c * Ai
          , d = fm(f, e, n);
        return d >= q1 ? ew(s, f, e, n) : d === 0 ? f : J1(s, l, l + Ai, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Do(o(s), t, r)
}
function nw({onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: i}) {
    const o = e || t || n || r
      , s = k.exports.useRef(!1)
      , l = k.exports.useRef(null)
      , a = {
        passive: !(t || e || n || m)
    };
    function u() {
        l.current && l.current(),
        l.current = null
    }
    function c() {
        return u(),
        s.current = !1,
        i.animationState && i.animationState.setActive($.Tap, !1),
        !Hh()
    }
    function f(y, w) {
        !c() || (Wh(i.getInstance(), y.target) ? e && e(y, w) : n && n(y, w))
    }
    function d(y, w) {
        !c() || n && n(y, w)
    }
    function m(y, w) {
        u(),
        !s.current && (s.current = !0,
        l.current = cs(Un(window, "pointerup", f, a), Un(window, "pointercancel", d, a)),
        i.animationState && i.animationState.setActive($.Tap, !0),
        t && t(y, w))
    }
    No(i, "pointerdown", o ? m : void 0, a),
    vu(u)
}
const rw = "production"
  , dm = typeof process > "u" || process.env === void 0 ? rw : "production"
  , af = new Set;
function pm(e, t, n) {
    e || af.has(t) || (console.warn(t),
    n && console.warn(n),
    af.add(t))
}
const ia = new WeakMap
  , Ks = new WeakMap
  , iw = e=>{
    const t = ia.get(e.target);
    t && t(e)
}
  , ow = e=>{
    e.forEach(iw)
}
;
function sw({root: e, ...t}) {
    const n = e || document;
    Ks.has(n) || Ks.set(n, {});
    const r = Ks.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(ow,{
        root: e,
        ...t
    })),
    r[i]
}
function lw(e, t, n) {
    const r = sw(t);
    return ia.set(e, n),
    r.observe(e),
    ()=>{
        ia.delete(e),
        r.unobserve(e)
    }
}
function aw({visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: i={}}) {
    const o = k.exports.useRef({
        hasEnteredView: !1,
        isInView: !1
    });
    let s = Boolean(t || n || r);
    i.once && o.current.hasEnteredView && (s = !1),
    (typeof IntersectionObserver > "u" ? fw : cw)(s, o.current, e, i)
}
const uw = {
    some: 0,
    all: 1
};
function cw(e, t, n, {root: r, margin: i, amount: o="some", once: s}) {
    k.exports.useEffect(()=>{
        if (!e)
            return;
        const l = {
            root: r == null ? void 0 : r.current,
            rootMargin: i,
            threshold: typeof o == "number" ? o : uw[o]
        }
          , a = u=>{
            const {isIntersecting: c} = u;
            if (t.isInView === c || (t.isInView = c,
            s && !c && t.hasEnteredView))
                return;
            c && (t.hasEnteredView = !0),
            n.animationState && n.animationState.setActive($.InView, c);
            const f = n.getProps()
              , d = c ? f.onViewportEnter : f.onViewportLeave;
            d && d(u)
        }
        ;
        return lw(n.getInstance(), l, a)
    }
    , [e, r, i, o])
}
function fw(e, t, n, {fallback: r=!0}) {
    k.exports.useEffect(()=>{
        !e || !r || (dm !== "production" && pm(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
        requestAnimationFrame(()=>{
            t.hasEnteredView = !0;
            const {onViewportEnter: i} = n.getProps();
            i && i(null),
            n.animationState && n.animationState.setActive($.InView, !0)
        }
        ))
    }
    , [e])
}
const At = e=>t=>(e(t),
null)
  , dw = {
    inView: At(aw),
    tap: At(nw),
    focus: At(Wy),
    hover: At(e1)
};
function hm() {
    const e = k.exports.useContext(ai);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = k.exports.useId();
    return k.exports.useEffect(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
function mm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const Io = e=>e * 1e3
  , pw = {
    linear: xu,
    easeIn: Su,
    easeInOut: qh,
    easeOut: E1,
    circIn: em,
    circInOut: T1,
    circOut: ku,
    backIn: Cu,
    backInOut: L1,
    backOut: _1,
    anticipate: R1,
    bounceIn: A1,
    bounceInOut: O1,
    bounceOut: Ao
}
  , uf = e=>{
    if (Array.isArray(e)) {
        Vo(e.length === 4);
        const [t,n,r,i] = e;
        return tw(t, n, r, i)
    } else if (typeof e == "string")
        return pw[e];
    return e
}
  , hw = e=>Array.isArray(e) && typeof e[0] != "number"
  , cf = (e,t)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && wt.test(t) && !t.startsWith("url("))
  , Yt = ()=>({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
})
  , Oi = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Qs = ()=>({
    type: "keyframes",
    ease: "linear",
    duration: .3
})
  , mw = e=>({
    type: "keyframes",
    duration: .8,
    values: e
})
  , ff = {
    x: Yt,
    y: Yt,
    z: Yt,
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scaleX: Oi,
    scaleY: Oi,
    scale: Oi,
    opacity: Qs,
    backgroundColor: Qs,
    color: Qs,
    default: Oi
}
  , gw = (e,t)=>{
    let n;
    return qr(t) ? n = mw : n = ff[e] || ff.default,
    {
        to: t,
        ...n(t)
    }
}
  , vw = {
    ...Eh,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: Jl,
    WebkitFilter: Jl
}
  , Pu = e=>vw[e];
function Eu(e, t) {
    var n;
    let r = Pu(e);
    return r !== Jl && (r = wt),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
}
const yw = {
    current: !1
};
function ww({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, ...u}) {
    return !!Object.keys(u).length
}
function xw({ease: e, times: t, yoyo: n, flip: r, loop: i, ...o}) {
    const s = {
        ...o
    };
    return t && (s.offset = t),
    o.duration && (s.duration = Io(o.duration)),
    o.repeatDelay && (s.repeatDelay = Io(o.repeatDelay)),
    e && (s.ease = hw(e) ? e.map(uf) : uf(e)),
    o.type === "tween" && (s.type = "keyframes"),
    (n || i || r) && (n ? s.repeatType = "reverse" : i ? s.repeatType = "loop" : r && (s.repeatType = "mirror"),
    s.repeat = i || n || r || o.repeat),
    o.type !== "spring" && (s.type = "keyframes"),
    s
}
function Sw(e, t) {
    var n, r;
    return (r = (n = (Tu(e, t) || {}).delay) !== null && n !== void 0 ? n : e.delay) !== null && r !== void 0 ? r : 0
}
function kw(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function Cw(e, t, n) {
    return Array.isArray(t.to) && e.duration === void 0 && (e.duration = .8),
    kw(t),
    ww(e) || (e = {
        ...e,
        ...gw(n, t.to)
    }),
    {
        ...t,
        ...xw(e)
    }
}
function Pw(e, t, n, r, i) {
    const o = Tu(r, e) || {};
    let s = o.from !== void 0 ? o.from : t.get();
    const l = cf(e, n);
    s === "none" && l && typeof n == "string" ? s = Eu(e, n) : df(s) && typeof n == "string" ? s = pf(n) : !Array.isArray(n) && df(n) && typeof s == "string" && (n = pf(s));
    const a = cf(e, s);
    function u() {
        const f = {
            from: s,
            to: n,
            velocity: t.getVelocity(),
            onComplete: i,
            onUpdate: d=>t.set(d)
        };
        return o.type === "inertia" || o.type === "decay" ? Y1({
            ...f,
            ...o
        }) : om({
            ...Cw(o, f, e),
            onUpdate: d=>{
                f.onUpdate(d),
                o.onUpdate && o.onUpdate(d)
            }
            ,
            onComplete: ()=>{
                f.onComplete(),
                o.onComplete && o.onComplete()
            }
        })
    }
    function c() {
        const f = Dh(n);
        return t.set(f),
        i(),
        o.onUpdate && o.onUpdate(f),
        o.onComplete && o.onComplete(),
        {
            stop: ()=>{}
        }
    }
    return !a || !l || o.type === !1 ? c : u
}
function df(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}
function pf(e) {
    return typeof e == "number" ? 0 : Eu("", e)
}
function Tu(e, t) {
    return e[t] || e.default || e
}
function _u(e, t, n, r={}) {
    return yw.current && (r = {
        type: !1
    }),
    t.start(i=>{
        let o, s;
        const l = Pw(e, t, n, r, i)
          , a = Sw(r, e)
          , u = ()=>s = l();
        return a ? o = window.setTimeout(u, Io(a)) : u(),
        ()=>{
            clearTimeout(o),
            s && s.stop()
        }
    }
    )
}
const Ew = e=>/^\-?\d*\.?\d+$/.test(e)
  , Tw = e=>/^0[^.\s]+$/.test(e);
function Lu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ru(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Rr {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Lu(this.subscriptions, t),
        ()=>Ru(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (!!i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const _w = e=>!isNaN(parseFloat(e));
class Lw {
    constructor(t) {
        this.version = "7.2.1",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.updateSubscribers = new Rr,
        this.velocityUpdateSubscribers = new Rr,
        this.renderSubscribers = new Rr,
        this.canTrackVelocity = !1,
        this.updateAndNotify = (n,r=!0)=>{
            this.prev = this.current,
            this.current = n;
            const {delta: i, timestamp: o} = Oo();
            this.lastUpdated !== o && (this.timeDelta = i,
            this.lastUpdated = o,
            Ze.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.updateSubscribers.notify(this.current),
            this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()),
            r && this.renderSubscribers.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = ()=>Ze.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: n})=>{
            n !== this.lastUpdated && (this.prev = this.current,
            this.velocityUpdateSubscribers.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = _w(this.current)
    }
    onChange(t) {
        return this.updateSubscribers.add(t)
    }
    clearListeners() {
        this.updateSubscribers.clear()
    }
    onRenderRequest(t) {
        return t(this.get()),
        this.renderSubscribers.add(t)
    }
    attach(t) {
        this.passiveEffect = t
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? sm(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.stopAnimation = t(n)
        }
        ).then(()=>this.clearAnimation())
    }
    stop() {
        this.stopAnimation && this.stopAnimation(),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.stopAnimation
    }
    clearAnimation() {
        this.stopAnimation = null
    }
    destroy() {
        this.updateSubscribers.clear(),
        this.renderSubscribers.clear(),
        this.stop()
    }
}
function Zn(e) {
    return new Lw(e)
}
const gm = e=>t=>t.test(e)
  , Rw = {
    test: e=>e === "auto",
    parse: e=>e
}
  , vm = [mn, D, lt, Ct, py, dy, Rw]
  , fr = e=>vm.find(gm(e))
  , Nw = [...vm, ye, wt]
  , Vw = e=>Nw.find(gm(e));
function Mw(e) {
    const t = {};
    return e.forEachValue((n,r)=>t[r] = n.get()),
    t
}
function Aw(e) {
    const t = {};
    return e.forEachValue((n,r)=>t[r] = n.getVelocity()),
    t
}
function ps(e, t, n) {
    const r = e.getProps();
    return Oh(r, t, n !== void 0 ? n : r.custom, Mw(e), Aw(e))
}
function Ow(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zn(n))
}
function Dw(e, t) {
    const n = ps(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n ? e.makeTargetAnimatable(n, !1) : {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = Dh(o[s]);
        Ow(e, s, l)
    }
}
function Iw(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter(l=>!e.hasValue(l))
      , s = o.length;
    if (!!s)
        for (let l = 0; l < s; l++) {
            const a = o[l]
              , u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]),
            c != null && (typeof c == "string" && (Ew(c) || Tw(c)) ? c = parseFloat(c) : !Vw(c) && wt.test(u) && (c = Eu(a, u)),
            e.addValue(a, Zn(c)),
            n[a] === void 0 && (n[a] = c),
            e.setBaseTarget(a, c))
        }
}
function zw(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function jw(e, t, n) {
    var r;
    const i = {};
    for (const o in e) {
        const s = zw(o, t);
        i[o] = s !== void 0 ? s : (r = n.getValue(o)) === null || r === void 0 ? void 0 : r.get()
    }
    return i
}
function zo(e) {
    return Boolean(at(e) && e.add)
}
function Fw(e, t, n={}) {
    e.notifyAnimationStart(t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o=>oa(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = oa(e, t, n);
    else {
        const i = typeof t == "function" ? ps(e, t, n.custom) : t;
        r = ym(e, i, n)
    }
    return r.then(()=>e.notifyAnimationComplete(t))
}
function oa(e, t, n={}) {
    var r;
    const i = ps(e, t, n.custom);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? ()=>ym(e, i, n) : ()=>Promise.resolve()
      , l = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u=0)=>{
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = o;
        return Uw(e, t, c + u, f, d, n)
    }
    : ()=>Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then(c)
    } else
        return Promise.all([s(), l(n.delay)])
}
function ym(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: l, ...a} = e.makeTargetAnimatable(t);
    const u = e.getValue("willChange");
    r && (s = r);
    const c = []
      , f = i && ((o = e.animationState) === null || o === void 0 ? void 0 : o.getState()[i]);
    for (const d in a) {
        const m = e.getValue(d)
          , y = a[d];
        if (!m || y === void 0 || f && $w(f, d))
            continue;
        let w = {
            delay: n,
            ...s
        };
        e.shouldReduceMotion && ui.has(d) && (w = {
            ...w,
            type: !1,
            delay: 0
        });
        let L = _u(d, m, y, w);
        zo(u) && (u.add(d),
        L = L.then(()=>u.remove(d))),
        c.push(L)
    }
    return Promise.all(c).then(()=>{
        l && Dw(e, l)
    }
    )
}
function Uw(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0)=>u * r : (u=0)=>l - u * r;
    return Array.from(e.variantChildren).sort(Bw).forEach((u,c)=>{
        s.push(oa(u, t, {
            ...o,
            delay: n + a(c)
        }).then(()=>u.notifyAnimationComplete(t)))
    }
    ),
    Promise.all(s)
}
function Bw(e, t) {
    return e.sortNodePosition(t)
}
function $w({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
const Nu = [$.Animate, $.InView, $.Focus, $.Hover, $.Tap, $.Drag, $.Exit]
  , Hw = [...Nu].reverse()
  , Ww = Nu.length;
function Kw(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>Fw(e, n, r)))
}
function Qw(e) {
    let t = Kw(e);
    const n = Yw();
    let r = !0;
    const i = (a,u)=>{
        const c = ps(e, u);
        if (c) {
            const {transition: f, transitionEnd: d, ...m} = c;
            a = {
                ...a,
                ...m,
                ...d
            }
        }
        return a
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a, u) {
        var c;
        const f = e.getProps()
          , d = e.getVariantContext(!0) || {}
          , m = []
          , y = new Set;
        let w = {}
          , L = 1 / 0;
        for (let p = 0; p < Ww; p++) {
            const h = Hw[p]
              , v = n[h]
              , x = (c = f[h]) !== null && c !== void 0 ? c : d[h]
              , _ = Zr(x)
              , S = h === u ? v.isActive : null;
            S === !1 && (L = p);
            let P = x === d[h] && x !== f[h] && _;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            v.protectedKeys = {
                ...w
            },
            !v.isActive && S === null || !x && !v.prevProp || is(x) || typeof x == "boolean")
                continue;
            const O = Gw(v.prevProp, x);
            let A = O || h === u && v.isActive && !P && _ || p > L && _;
            const U = Array.isArray(x) ? x : [x];
            let G = U.reduce(i, {});
            S === !1 && (G = {});
            const {prevResolvedValues: le={}} = v
              , fe = {
                ...le,
                ...G
            }
              , Oe = J=>{
                A = !0,
                y.delete(J),
                v.needsAnimating[J] = !0
            }
            ;
            for (const J in fe) {
                const De = G[J]
                  , N = le[J];
                w.hasOwnProperty(J) || (De !== N ? qr(De) && qr(N) ? !mm(De, N) || O ? Oe(J) : v.protectedKeys[J] = !0 : De !== void 0 ? Oe(J) : y.add(J) : De !== void 0 && y.has(J) ? Oe(J) : v.protectedKeys[J] = !0)
            }
            v.prevProp = x,
            v.prevResolvedValues = G,
            v.isActive && (w = {
                ...w,
                ...G
            }),
            r && e.blockInitialAnimation && (A = !1),
            A && !P && m.push(...U.map(J=>({
                animation: J,
                options: {
                    type: h,
                    ...a
                }
            })))
        }
        if (y.size) {
            const p = {};
            y.forEach(h=>{
                const v = e.getBaseTarget(h);
                v !== void 0 && (p[h] = v)
            }
            ),
            m.push({
                animation: p
            })
        }
        let g = Boolean(m.length);
        return r && f.initial === !1 && !e.manuallyAnimateOnMount && (g = !1),
        r = !1,
        g ? t(m) : Promise.resolve()
    }
    function l(a, u, c) {
        var f;
        if (n[a].isActive === u)
            return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(m=>{
            var y;
            return (y = m.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const d = s(c, a);
        for (const m in n)
            n[m].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: ()=>n
    }
}
function Gw(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !mm(t, e) : !1
}
function Xt(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Yw() {
    return {
        [$.Animate]: Xt(!0),
        [$.InView]: Xt(),
        [$.Hover]: Xt(),
        [$.Tap]: Xt(),
        [$.Drag]: Xt(),
        [$.Focus]: Xt(),
        [$.Exit]: Xt()
    }
}
const Xw = {
    animation: At(({visualElement: e, animate: t})=>{
        e.animationState || (e.animationState = Qw(e)),
        is(t) && k.exports.useEffect(()=>t.subscribe(e), [t])
    }
    ),
    exit: At(e=>{
        const {custom: t, visualElement: n} = e
          , [r,i] = hm()
          , o = k.exports.useContext(ai);
        k.exports.useEffect(()=>{
            n.isPresent = r;
            const s = n.animationState && n.animationState.setActive($.Exit, !r, {
                custom: o && o.custom || t
            });
            s && !r && s.then(i)
        }
        , [r])
    }
    )
};
class wm {
    constructor(t, n, {transformPagePoint: r}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = Ys(this.lastMoveEventInfo, this.history)
              , c = this.startEvent !== null
              , f = lm(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!c && !f)
                return;
            const {point: d} = u
              , {timestamp: m} = Oo();
            this.history.push({
                ...d,
                timestamp: m
            });
            const {onStart: y, onMove: w} = this.handlers;
            c || (y && y(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            w && w(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u,c)=>{
            if (this.lastMoveEvent = u,
            this.lastMoveEventInfo = Gs(c, this.transformPagePoint),
            zh(u) && u.buttons === 0) {
                this.handlePointerUp(u, c);
                return
            }
            Ze.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u,c)=>{
            this.end();
            const {onEnd: f, onSessionEnd: d} = this.handlers
              , m = Ys(Gs(c, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, m),
            d && d(u, m)
        }
        ,
        jh(t) && t.touches.length > 1)
            return;
        this.handlers = n,
        this.transformPagePoint = r;
        const i = gu(t)
          , o = Gs(i, this.transformPagePoint)
          , {point: s} = o
          , {timestamp: l} = Oo();
        this.history = [{
            ...s,
            timestamp: l
        }];
        const {onSessionStart: a} = n;
        a && a(t, Ys(o, this.history)),
        this.removeListeners = cs(Un(window, "pointermove", this.handlePointerMove), Un(window, "pointerup", this.handlePointerUp), Un(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Xn.update(this.updatePoint)
    }
}
function Gs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function hf(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ys({point: e}, t) {
    return {
        point: e,
        delta: hf(e, xm(t)),
        offset: hf(e, Zw(t)),
        velocity: Jw(t, .1)
    }
}
function Zw(e) {
    return e[0]
}
function xm(e) {
    return e[e.length - 1]
}
function Jw(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = xm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > Io(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = (i.timestamp - r.timestamp) / 1e3;
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function xt(e) {
    return e.max - e.min
}
function mf(e, t=0, n=.01) {
    return lm(e, t) < n
}
function gf(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = q(t.min, t.max, e.origin),
    e.scale = xt(n) / xt(t),
    (mf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = q(n.min, n.max, e.origin) - e.originPoint,
    (mf(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Nr(e, t, n, r) {
    gf(e.x, t.x, n.x, r == null ? void 0 : r.originX),
    gf(e.y, t.y, n.y, r == null ? void 0 : r.originY)
}
function vf(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + xt(t)
}
function bw(e, t, n) {
    vf(e.x, t.x, n.x),
    vf(e.y, t.y, n.y)
}
function yf(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + xt(t)
}
function Vr(e, t, n) {
    yf(e.x, t.x, n.x),
    yf(e.y, t.y, n.y)
}
function qw(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)),
    e
}
function wf(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function ex(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: wf(e.x, n, i),
        y: wf(e.y, t, r)
    }
}
function xf(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function tx(e, t) {
    return {
        x: xf(e.x, t.x),
        y: xf(e.y, t.y)
    }
}
function nx(e, t) {
    let n = .5;
    const r = xt(e)
      , i = xt(t);
    return i > r ? n = ei(t.min, t.max - r, e.min) : r > i && (n = ei(e.min, e.max - i, t.min)),
    Mo(0, 1, n)
}
function rx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const sa = .35;
function ix(e=sa) {
    return e === !1 ? e = 0 : e === !0 && (e = sa),
    {
        x: Sf(e, "left", "right"),
        y: Sf(e, "top", "bottom")
    }
}
function Sf(e, t, n) {
    return {
        min: kf(e, t),
        max: kf(e, n)
    }
}
function kf(e, t) {
    var n;
    return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0
}
const Cf = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Mr = ()=>({
    x: Cf(),
    y: Cf()
})
  , Pf = ()=>({
    min: 0,
    max: 0
})
  , me = ()=>({
    x: Pf(),
    y: Pf()
});
function rt(e) {
    return [e("x"), e("y")]
}
function Sm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function ox({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function sx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Xs(e) {
    return e === void 0 || e === 1
}
function km({scale: e, scaleX: t, scaleY: n}) {
    return !Xs(e) || !Xs(t) || !Xs(n)
}
function Pt(e) {
    return km(e) || Ef(e.x) || Ef(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
}
function Ef(e) {
    return e && e !== "0%"
}
function jo(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Tf(e, t, n, r, i) {
    return i !== void 0 && (e = jo(e, i, r)),
    jo(e, n, r) + t
}
function la(e, t=0, n=1, r, i) {
    e.min = Tf(e.min, t, n, r, i),
    e.max = Tf(e.max, t, n, r, i)
}
function Cm(e, {x: t, y: n}) {
    la(e.x, t.translate, t.scale, t.originPoint),
    la(e.y, n.translate, n.scale, n.originPoint)
}
function lx(e, t, n, r=!1) {
    var i, o;
    const s = n.length;
    if (!s)
        return;
    t.x = t.y = 1;
    let l, a;
    for (let u = 0; u < s; u++)
        l = n[u],
        a = l.projectionDelta,
        ((o = (i = l.instance) === null || i === void 0 ? void 0 : i.style) === null || o === void 0 ? void 0 : o.display) !== "contents" && (r && l.options.layoutScroll && l.scroll && l !== l.root && An(e, {
            x: -l.scroll.x,
            y: -l.scroll.y
        }),
        a && (t.x *= a.x.scale,
        t.y *= a.y.scale,
        Cm(e, a)),
        r && Pt(l.latestValues) && An(e, l.latestValues))
}
function _t(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function _f(e, t, [n,r,i]) {
    const o = t[i] !== void 0 ? t[i] : .5
      , s = q(e.min, e.max, o);
    la(e, t[n], t[r], s, t.scale)
}
const ax = ["x", "scaleX", "originX"]
  , ux = ["y", "scaleY", "originY"];
function An(e, t) {
    _f(e.x, t, ax),
    _f(e.y, t, ux)
}
function Pm(e, t) {
    return Sm(sx(e.getBoundingClientRect(), t))
}
function cx(e, t, n) {
    const r = Pm(e, n)
      , {scroll: i} = t;
    return i && (_t(r.x, i.x),
    _t(r.y, i.y)),
    r
}
const fx = new WeakMap;
class dx {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = me(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        if (this.visualElement.isPresent === !1)
            return;
        const r = l=>{
            this.stopAnimation(),
            n && this.snapToCursor(gu(l, "page").point)
        }
          , i = (l,a)=>{
            var u;
            const {drag: c, dragPropagation: f, onDragStart: d} = this.getProps();
            c && !f && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = $h(c),
            !this.openGlobalLock) || (this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            rt(m=>{
                var y, w;
                let L = this.getAxisMotionValue(m).get() || 0;
                if (lt.test(L)) {
                    const g = (w = (y = this.visualElement.projection) === null || y === void 0 ? void 0 : y.layout) === null || w === void 0 ? void 0 : w.actual[m];
                    g && (L = xt(g) * (parseFloat(L) / 100))
                }
                this.originPoint[m] = L
            }
            ),
            d == null || d(l, a),
            (u = this.visualElement.animationState) === null || u === void 0 || u.setActive($.Drag, !0))
        }
          , o = (l,a)=>{
            const {dragPropagation: u, dragDirectionLock: c, onDirectionLock: f, onDrag: d} = this.getProps();
            if (!u && !this.openGlobalLock)
                return;
            const {offset: m} = a;
            if (c && this.currentDirection === null) {
                this.currentDirection = px(m),
                this.currentDirection !== null && (f == null || f(this.currentDirection));
                return
            }
            this.updateAxis("x", a.point, m),
            this.updateAxis("y", a.point, m),
            this.visualElement.syncRender(),
            d == null || d(l, a)
        }
          , s = (l,a)=>this.stop(l, a);
        this.panSession = new wm(t,{
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: s
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o == null || o(t, n)
    }
    cancel() {
        var t, n;
        this.isDragging = !1,
        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
        (t = this.panSession) === null || t === void 0 || t.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        (n = this.visualElement.animationState) === null || n === void 0 || n.setActive($.Drag, !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Di(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = qw(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , {layout: r} = this.visualElement.projection || {}
          , i = this.constraints;
        t && Mn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = ex(r.actual, t) : this.constraints = !1,
        this.elastic = ix(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && rt(o=>{
            this.getAxisMotionValue(o) && (this.constraints[o] = rx(r.actual[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Mn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = cx(r, i.root, this.visualElement.getTransformPagePoint());
        let s = tx(i.layout.actual, o);
        if (n) {
            const l = n(ox(s));
            this.hasMutatedConstraints = !!l,
            l && (s = Sm(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = rt(c=>{
            var f;
            if (!Di(c, n, this.currentDirection))
                return;
            let d = (f = a == null ? void 0 : a[c]) !== null && f !== void 0 ? f : {};
            s && (d = {
                min: 0,
                max: 0
            });
            const m = i ? 200 : 1e6
              , y = i ? 40 : 1e7
              , w = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: m,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...d
            };
            return this.startAxisValueAnimation(c, w)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return _u(t, r, 0, n)
    }
    stopAnimation() {
        rt(t=>this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        var n, r;
        const i = "_drag" + t.toUpperCase()
          , o = this.visualElement.getProps()[i];
        return o || this.visualElement.getValue(t, (r = (n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) !== null && r !== void 0 ? r : 0)
    }
    snapToCursor(t) {
        rt(n=>{
            const {drag: r} = this.getProps();
            if (!Di(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.actual[n];
                o.set(t[n] - q(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        var t;
        const {drag: n, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Mn(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        rt(l=>{
            const a = this.getAxisMotionValue(l);
            if (a) {
                const u = a.get();
                o[l] = nx({
                    min: u,
                    max: u
                }, this.constraints[l])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.getInstance().style.transform = s ? s({}, "") : "none",
        (t = i.root) === null || t === void 0 || t.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        rt(l=>{
            if (!Di(l, n, null))
                return;
            const a = this.getAxisMotionValue(l)
              , {min: u, max: c} = this.constraints[l];
            a.set(q(u, c, o[l]))
        }
        )
    }
    addListeners() {
        var t;
        fx.set(this.visualElement, this);
        const n = this.visualElement.getInstance()
          , r = Un(n, "pointerdown", u=>{
            const {drag: c, dragListener: f=!0} = this.getProps();
            c && f && this.start(u)
        }
        )
          , i = ()=>{
            const {dragConstraints: u} = this.getProps();
            Mn(u) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , s = o.addEventListener("measure", i);
        o && !o.layout && ((t = o.root) === null || t === void 0 || t.updateScroll(),
        o.updateLayout()),
        i();
        const l = us(window, "resize", ()=>this.scalePositionWithinConstraints())
          , a = o.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c})=>{
            this.isDragging && c && (rt(f=>{
                const d = this.getAxisMotionValue(f);
                !d || (this.originPoint[f] += u[f].translate,
                d.set(d.get() + u[f].translate))
            }
            ),
            this.visualElement.syncRender())
        }
        );
        return ()=>{
            l(),
            r(),
            s(),
            a == null || a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=sa, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Di(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function px(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
function hx(e) {
    const {dragControls: t, visualElement: n} = e
      , r = ss(()=>new dx(n));
    k.exports.useEffect(()=>t && t.subscribe(r), [r, t]),
    k.exports.useEffect(()=>r.addListeners(), [r])
}
function mx({onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: i}) {
    const o = e || t || n || r
      , s = k.exports.useRef(null)
      , {transformPagePoint: l} = k.exports.useContext(au)
      , a = {
        onSessionStart: r,
        onStart: t,
        onMove: e,
        onEnd: (c,f)=>{
            s.current = null,
            n && n(c, f)
        }
    };
    k.exports.useEffect(()=>{
        s.current !== null && s.current.updateHandlers(a)
    }
    );
    function u(c) {
        s.current = new wm(c,a,{
            transformPagePoint: l
        })
    }
    No(i, "pointerdown", o && u),
    vu(()=>s.current && s.current.end())
}
const gx = {
    pan: At(mx),
    drag: At(hx)
}
  , aa = {
    current: null
}
  , Em = {
    current: !1
};
function vx() {
    if (Em.current = !0,
    !!hn)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = ()=>aa.current = e.matches;
            e.addListener(t),
            t()
        } else
            aa.current = !1
}
const Ii = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
function yx() {
    const e = Ii.map(()=>new Rr)
      , t = {}
      , n = {
        clearAllListeners: ()=>e.forEach(r=>r.clear()),
        updatePropListeners: r=>{
            Ii.forEach(i=>{
                var o;
                const s = "on" + i
                  , l = r[s];
                (o = t[i]) === null || o === void 0 || o.call(t),
                l && (t[i] = n[s](l))
            }
            )
        }
    };
    return e.forEach((r,i)=>{
        n["on" + Ii[i]] = o=>r.add(o),
        n["notify" + Ii[i]] = (...o)=>r.notify(...o)
    }
    ),
    n
}
function wx(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const o = t[i]
          , s = n[i];
        if (at(o))
            e.addValue(i, o),
            zo(r) && r.add(i);
        else if (at(s))
            e.addValue(i, Zn(o)),
            zo(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(o)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Zn(l !== void 0 ? l : o))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Tm = Object.keys(Jr)
  , xx = Tm.length
  , _m = ({treeType: e="", build: t, getBaseTarget: n, makeTargetAnimatable: r, measureViewportBox: i, render: o, readValueFromInstance: s, removeValueFromRenderState: l, sortNodePosition: a, scrapeMotionValuesFromProps: u})=>({parent: c, props: f, presenceId: d, blockInitialAnimation: m, visualState: y, reducedMotionConfig: w},L={})=>{
    let g = !1;
    const {latestValues: p, renderState: h} = y;
    let v;
    const x = yx()
      , _ = new Map
      , S = new Map;
    let P = {};
    const O = {
        ...p
    };
    let A;
    function U() {
        !v || !g || (G(),
        o(v, h, f.style, R.projection))
    }
    function G() {
        t(R, h, p, L, f)
    }
    function le() {
        x.notifyUpdate(p)
    }
    function fe(C, M) {
        const I = M.onChange(de=>{
            p[C] = de,
            f.onUpdate && Ze.update(le, !1, !0)
        }
        )
          , $e = M.onRenderRequest(R.scheduleRender);
        S.set(C, ()=>{
            I(),
            $e()
        }
        )
    }
    const {willChange: Oe, ...J} = u(f);
    for (const C in J) {
        const M = J[C];
        p[C] !== void 0 && at(M) && (M.set(p[C], !1),
        zo(Oe) && Oe.add(C))
    }
    const De = os(f)
      , N = ph(f)
      , R = {
        treeType: e,
        current: null,
        depth: c ? c.depth + 1 : 0,
        parent: c,
        children: new Set,
        presenceId: d,
        shouldReduceMotion: null,
        variantChildren: N ? new Set : void 0,
        isVisible: void 0,
        manuallyAnimateOnMount: Boolean(c == null ? void 0 : c.isMounted()),
        blockInitialAnimation: m,
        isMounted: ()=>Boolean(v),
        mount(C) {
            g = !0,
            v = R.current = C,
            R.projection && R.projection.mount(C),
            N && c && !De && (A = c == null ? void 0 : c.addVariantChild(R)),
            _.forEach((M,I)=>fe(I, M)),
            Em.current || vx(),
            R.shouldReduceMotion = w === "never" ? !1 : w === "always" ? !0 : aa.current,
            c == null || c.children.add(R),
            R.setProps(f)
        },
        unmount() {
            var C;
            (C = R.projection) === null || C === void 0 || C.unmount(),
            Xn.update(le),
            Xn.render(U),
            S.forEach(M=>M()),
            A == null || A(),
            c == null || c.children.delete(R),
            x.clearAllListeners(),
            v = void 0,
            g = !1
        },
        loadFeatures(C, M, I, $e, de, tr) {
            const qe = [];
            for (let et = 0; et < xx; et++) {
                const gn = Tm[et]
                  , {isEnabled: hs, Component: nr} = Jr[gn];
                hs(f) && nr && qe.push(k.exports.createElement(nr, {
                    key: gn,
                    ...C,
                    visualElement: R
                }))
            }
            if (!R.projection && de) {
                R.projection = new de($e,R.getLatestValues(),c && c.projection);
                const {layoutId: et, layout: gn, drag: hs, dragConstraints: nr, layoutScroll: Um} = C;
                R.projection.setOptions({
                    layoutId: et,
                    layout: gn,
                    alwaysMeasureLayout: Boolean(hs) || nr && Mn(nr),
                    visualElement: R,
                    scheduleRender: ()=>R.scheduleRender(),
                    animationType: typeof gn == "string" ? gn : "both",
                    initialPromotionConfig: tr,
                    layoutScroll: Um
                })
            }
            return qe
        },
        addVariantChild(C) {
            var M;
            const I = R.getClosestVariantNode();
            if (I)
                return (M = I.variantChildren) === null || M === void 0 || M.add(C),
                ()=>I.variantChildren.delete(C)
        },
        sortNodePosition(C) {
            return !a || e !== C.treeType ? 0 : a(R.getInstance(), C.getInstance())
        },
        getClosestVariantNode: ()=>N ? R : c == null ? void 0 : c.getClosestVariantNode(),
        getLayoutId: ()=>f.layoutId,
        getInstance: ()=>v,
        getStaticValue: C=>p[C],
        setStaticValue: (C,M)=>p[C] = M,
        getLatestValues: ()=>p,
        setVisibility(C) {
            R.isVisible !== C && (R.isVisible = C,
            R.scheduleRender())
        },
        makeTargetAnimatable(C, M=!0) {
            return r(R, C, f, M)
        },
        measureViewportBox() {
            return i(v, f)
        },
        addValue(C, M) {
            R.hasValue(C) && R.removeValue(C),
            _.set(C, M),
            p[C] = M.get(),
            fe(C, M)
        },
        removeValue(C) {
            var M;
            _.delete(C),
            (M = S.get(C)) === null || M === void 0 || M(),
            S.delete(C),
            delete p[C],
            l(C, h)
        },
        hasValue: C=>_.has(C),
        getValue(C, M) {
            let I = _.get(C);
            return I === void 0 && M !== void 0 && (I = Zn(M),
            R.addValue(C, I)),
            I
        },
        forEachValue: C=>_.forEach(C),
        readValue: C=>p[C] !== void 0 ? p[C] : s(v, C, L),
        setBaseTarget(C, M) {
            O[C] = M
        },
        getBaseTarget(C) {
            if (n) {
                const M = n(f, C);
                if (M !== void 0 && !at(M))
                    return M
            }
            return O[C]
        },
        ...x,
        build() {
            return G(),
            h
        },
        scheduleRender() {
            Ze.render(U, !1, !0)
        },
        syncRender: U,
        setProps(C) {
            (C.transformTemplate || f.transformTemplate) && R.scheduleRender(),
            f = C,
            x.updatePropListeners(C),
            P = wx(R, u(f), P)
        },
        getProps: ()=>f,
        getVariant: C=>{
            var M;
            return (M = f.variants) === null || M === void 0 ? void 0 : M[C]
        }
        ,
        getDefaultTransition: ()=>f.transition,
        getTransformPagePoint: ()=>f.transformPagePoint,
        getVariantContext(C=!1) {
            if (C)
                return c == null ? void 0 : c.getVariantContext();
            if (!De) {
                const I = (c == null ? void 0 : c.getVariantContext()) || {};
                return f.initial !== void 0 && (I.initial = f.initial),
                I
            }
            const M = {};
            for (let I = 0; I < Sx; I++) {
                const $e = Lm[I]
                  , de = f[$e];
                (Zr(de) || de === !1) && (M[$e] = de)
            }
            return M
        }
    };
    return R
}
  , Lm = ["initial", ...Nu]
  , Sx = Lm.length;
function ua(e) {
    return typeof e == "string" && e.startsWith("var(--")
}
const Rm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function kx(e) {
    const t = Rm.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function ca(e, t, n=1) {
    const [r,i] = kx(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    return o ? o.trim() : ua(i) ? ca(i, t, n + 1) : i
}
function Cx(e, {...t}, n) {
    const r = e.getInstance();
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.forEachValue(i=>{
        const o = i.get();
        if (!ua(o))
            return;
        const s = ca(o, r);
        s && i.set(s)
    }
    );
    for (const i in t) {
        const o = t[i];
        if (!ua(o))
            continue;
        const s = ca(o, r);
        !s || (t[i] = s,
        n && n[i] === void 0 && (n[i] = o))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const Px = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"])
  , Nm = e=>Px.has(e)
  , Ex = e=>Object.keys(e).some(Nm)
  , Vm = (e,t)=>{
    e.set(t, !1),
    e.set(t)
}
  , Lf = e=>e === mn || e === D;
var Rf;
(function(e) {
    e.width = "width",
    e.height = "height",
    e.left = "left",
    e.right = "right",
    e.top = "top",
    e.bottom = "bottom"
}
)(Rf || (Rf = {}));
const Nf = (e,t)=>parseFloat(e.split(", ")[t])
  , Vf = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return Nf(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Nf(o[1], e) : 0
    }
}
  , Tx = new Set(["x", "y", "z"])
  , _x = Lo.filter(e=>!Tx.has(e));
function Lx(e) {
    const t = [];
    return _x.forEach(n=>{
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.syncRender(),
    t
}
const Mf = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: Vf(4, 13),
    y: Vf(5, 14)
}
  , Rx = (e,t,n)=>{
    const r = t.measureViewportBox()
      , i = t.getInstance()
      , o = getComputedStyle(i)
      , {display: s} = o
      , l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u=>{
        l[u] = Mf[u](r, o)
    }
    ),
    t.syncRender();
    const a = t.measureViewportBox();
    return n.forEach(u=>{
        const c = t.getValue(u);
        Vm(c, l[u]),
        e[u] = Mf[u](a, o)
    }
    ),
    e
}
  , Nx = (e,t,n={},r={})=>{
    t = {
        ...t
    },
    r = {
        ...r
    };
    const i = Object.keys(t).filter(Nm);
    let o = []
      , s = !1;
    const l = [];
    if (i.forEach(a=>{
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let c = n[a]
          , f = fr(c);
        const d = t[a];
        let m;
        if (qr(d)) {
            const y = d.length
              , w = d[0] === null ? 1 : 0;
            c = d[w],
            f = fr(c);
            for (let L = w; L < y; L++)
                m ? Vo(fr(d[L]) === m) : m = fr(d[L])
        } else
            m = fr(d);
        if (f !== m)
            if (Lf(f) && Lf(m)) {
                const y = u.get();
                typeof y == "string" && u.set(parseFloat(y)),
                typeof d == "string" ? t[a] = parseFloat(d) : Array.isArray(d) && m === D && (t[a] = d.map(parseFloat))
            } else
                (f == null ? void 0 : f.transform) && (m == null ? void 0 : m.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(m.transform(c)) : t[a] = f.transform(d) : (s || (o = Lx(e),
                s = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                Vm(u, d))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = Rx(t, e, l);
        return o.length && o.forEach(([c,f])=>{
            e.getValue(c).set(f)
        }
        ),
        e.syncRender(),
        hn && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function Vx(e, t, n, r) {
    return Ex(t) ? Nx(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const Mx = (e,t,n,r)=>{
    const i = Cx(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    Vx(e, t, n, r)
}
;
function Ax(e) {
    return window.getComputedStyle(e)
}
const Mm = {
    treeType: "dom",
    readValueFromInstance(e, t) {
        if (ui.has(t)) {
            const n = Pu(t);
            return n && n.default || 0
        } else {
            const n = Ax(e)
              , r = (vh(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == "string" ? r.trim() : r
        }
    },
    sortNodePosition(e, t) {
        return e.compareDocumentPosition(t) & 2 ? 1 : -1
    },
    getBaseTarget(e, t) {
        var n;
        return (n = e.style) === null || n === void 0 ? void 0 : n[t]
    },
    measureViewportBox(e, {transformPagePoint: t}) {
        return Pm(e, t)
    },
    resetTransform(e, t, n) {
        const {transformTemplate: r} = n;
        t.style.transform = r ? r({}, "") : "none",
        e.scheduleRender()
    },
    restoreTransform(e, t) {
        e.style.transform = t.style.transform
    },
    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e],
        delete n[e]
    },
    makeTargetAnimatable(e, {transition: t, transitionEnd: n, ...r}, {transformValues: i}, o=!0) {
        let s = jw(r, t || {}, e);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        s && (s = i(s))),
        o) {
            Iw(e, r, s);
            const l = Mx(e, r, s, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    },
    scrapeMotionValuesFromProps: mu,
    build(e, t, n, r, i) {
        e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"),
        du(t, n, r, i.transformTemplate)
    },
    render: Nh
}
  , Ox = _m(Mm)
  , Dx = _m({
    ...Mm,
    getBaseTarget(e, t) {
        return e[t]
    },
    readValueFromInstance(e, t) {
        var n;
        return ui.has(t) ? ((n = Pu(t)) === null || n === void 0 ? void 0 : n.default) || 0 : (t = Vh.has(t) ? t : Rh(t),
        e.getAttribute(t))
    },
    scrapeMotionValuesFromProps: Ah,
    build(e, t, n, r, i) {
        hu(t, n, r, i.transformTemplate)
    },
    render: Mh
})
  , Ix = (e,t)=>cu(e) ? Dx(t, {
    enableHardwareAcceleration: !1
}) : Ox(t, {
    enableHardwareAcceleration: !0
});
function Af(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const dr = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (D.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Af(e, t.target.x)
          , r = Af(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Of = "_$css"
  , zx = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        const r = e
          , i = e.includes("var(")
          , o = [];
        i && (e = e.replace(Rm, m=>(o.push(m),
        Of)));
        const s = wt.parse(e);
        if (s.length > 5)
            return r;
        const l = wt.createTransformer(e)
          , a = typeof s[0] != "number" ? 1 : 0
          , u = n.x.scale * t.x
          , c = n.y.scale * t.y;
        s[0 + a] /= u,
        s[1 + a] /= c;
        const f = q(u, c, .5);
        typeof s[2 + a] == "number" && (s[2 + a] /= f),
        typeof s[3 + a] == "number" && (s[3 + a] /= f);
        let d = l(s);
        if (i) {
            let m = 0;
            d = d.replace(Of, ()=>{
                const y = o[m];
                return m++,
                y
            }
            )
        }
        return d
    }
};
class jx extends ma.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        sy(Ux),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Tr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || Ze.postRender(()=>{
            var l;
            !((l = s.getStack()) === null || l === void 0) && l.members.length || this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        !t.currentAnimation && t.isLead() && this.safeToRemove())
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n != null && n.group && n.group.remove(i),
        r != null && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t == null || t()
    }
    render() {
        return null
    }
}
function Fx(e) {
    const [t,n] = hm()
      , r = k.exports.useContext(uu);
    return E(jx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: k.exports.useContext(hh),
        isPresent: t,
        safeToRemove: n
    })
}
const Ux = {
    borderRadius: {
        ...dr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: dr,
    borderTopRightRadius: dr,
    borderBottomLeftRadius: dr,
    borderBottomRightRadius: dr,
    boxShadow: zx
}
  , Bx = {
    measureLayout: Fx
};
function $x(e, t, n={}) {
    const r = at(e) ? e : Zn(e);
    return _u("", r, t, n),
    {
        stop: ()=>r.stop(),
        isAnimating: ()=>r.isAnimating()
    }
}
const Am = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Hx = Am.length
  , Df = e=>typeof e == "string" ? parseFloat(e) : e
  , If = e=>typeof e == "number" || D.test(e);
function Wx(e, t, n, r, i, o) {
    var s, l, a, u;
    i ? (e.opacity = q(0, (s = n.opacity) !== null && s !== void 0 ? s : 1, Kx(r)),
    e.opacityExit = q((l = t.opacity) !== null && l !== void 0 ? l : 1, 0, Qx(r))) : o && (e.opacity = q((a = t.opacity) !== null && a !== void 0 ? a : 1, (u = n.opacity) !== null && u !== void 0 ? u : 1, r));
    for (let c = 0; c < Hx; c++) {
        const f = `border${Am[c]}Radius`;
        let d = zf(t, f)
          , m = zf(n, f);
        if (d === void 0 && m === void 0)
            continue;
        d || (d = 0),
        m || (m = 0),
        d === 0 || m === 0 || If(d) === If(m) ? (e[f] = Math.max(q(Df(d), Df(m), r), 0),
        (lt.test(m) || lt.test(d)) && (e[f] += "%")) : e[f] = m
    }
    (t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r))
}
function zf(e, t) {
    var n;
    return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius
}
const Kx = Om(0, .5, ku)
  , Qx = Om(.5, .95, xu);
function Om(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(ei(e, t, r))
}
function jf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function We(e, t) {
    jf(e.x, t.x),
    jf(e.y, t.y)
}
function Ff(e, t, n, r, i) {
    return e -= t,
    e = jo(e, 1 / n, r),
    i !== void 0 && (e = jo(e, 1 / i, r)),
    e
}
function Gx(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (lt.test(t) && (t = parseFloat(t),
    t = q(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = q(o.min, o.max, r);
    e === o && (l -= t),
    e.min = Ff(e.min, t, n, l, i),
    e.max = Ff(e.max, t, n, l, i)
}
function Uf(e, t, [n,r,i], o, s) {
    Gx(e, t[n], t[r], t[i], t.scale, o, s)
}
const Yx = ["x", "scaleX", "originX"]
  , Xx = ["y", "scaleY", "originY"];
function Bf(e, t, n, r) {
    Uf(e.x, t, Yx, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    Uf(e.y, t, Xx, n == null ? void 0 : n.y, r == null ? void 0 : r.y)
}
function $f(e) {
    return e.translate === 0 && e.scale === 1
}
function Dm(e) {
    return $f(e.x) && $f(e.y)
}
function Im(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
class Zx {
    constructor() {
        this.members = []
    }
    add(t) {
        Lu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Ru(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i=>t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        var r;
        const i = this.lead;
        if (t !== i && (this.prevLead = i,
        this.lead = t,
        t.show(),
        i)) {
            i.instance && i.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = i,
            n && (t.resumeFrom.preserveOpacity = !0),
            i.snapshot && (t.snapshot = i.snapshot,
            t.snapshot.latestValues = i.animationValues || i.latestValues,
            t.snapshot.isShared = !0),
            !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: o} = t.options;
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            var n, r, i, o, s;
            (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n),
            (s = (i = t.resumingFrom) === null || i === void 0 ? void 0 : (o = i.options).onExitComplete) === null || s === void 0 || s.call(o)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const Jx = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Hf(e, t, n) {
    const r = e.x.translate / t.x
      , i = e.y.translate / t.y;
    let o = `translate3d(${r}px, ${i}px, 0) `;
    if (o += `scale(${1 / t.x}, ${1 / t.y}) `,
    n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (o += `rotate(${a}deg) `),
        u && (o += `rotateX(${u}deg) `),
        c && (o += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return o += `scale(${s}, ${l})`,
    o === Jx ? "none" : o
}
const bx = (e,t)=>e.depth - t.depth;
class qx {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Lu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ru(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(bx),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
const Wf = ["", "X", "Y", "Z"]
  , Kf = 1e3;
function zm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s, l={}, a=t == null ? void 0 : t()) {
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.potentialNodes = new Map,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.nodes.forEach(oS),
                this.nodes.forEach(sS)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.id = s,
            this.latestValues = l,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0,
            s && this.root.registerPotentialNode(s, this);
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qx)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Rr),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a == null || a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        registerPotentialNode(s, l) {
            this.potentialNodes.set(s, l)
        }
        mount(s, l=!1) {
            var a;
            if (this.instance)
                return;
            this.isSVG = s instanceof SVGElement && s.tagName !== "svg",
            this.instance = s;
            const {layoutId: u, layout: c, visualElement: f} = this.options;
            if (f && !f.getInstance() && f.mount(s),
            this.root.nodes.add(this),
            (a = this.parent) === null || a === void 0 || a.children.add(this),
            this.id && this.root.potentialNodes.delete(this.id),
            l && (c || u) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const m = ()=>this.root.updateBlockedByResize = !1;
                e(s, ()=>{
                    this.root.updateBlockedByResize = !0,
                    clearTimeout(d),
                    d = window.setTimeout(m, 250),
                    Tr.hasAnimatedSinceResize && (Tr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(iS))
                }
                )
            }
            u && this.root.registerSharedNode(u, this),
            this.options.animate !== !1 && f && (u || c) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: m, hasRelativeTargetChanged: y, layout: w})=>{
                var L, g, p, h, v;
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = (g = (L = this.options.transition) !== null && L !== void 0 ? L : f.getDefaultTransition()) !== null && g !== void 0 ? g : fS
                  , {onLayoutAnimationStart: _, onLayoutAnimationComplete: S} = f.getProps()
                  , P = !this.targetLayout || !Im(this.targetLayout, w) || y
                  , O = !m && y;
                if (((p = this.resumeFrom) === null || p === void 0 ? void 0 : p.instance) || O || m && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, O);
                    const A = {
                        ...Tu(x, "layout"),
                        onPlay: _,
                        onComplete: S
                    };
                    f.shouldReduceMotion && (A.delay = 0,
                    A.type = !1),
                    this.startAnimation(A)
                } else
                    !m && this.animationProgress === 0 && this.finishAnimation(),
                    this.isLead() && ((v = (h = this.options).onExitComplete) === null || v === void 0 || v.call(h));
                this.targetLayout = w
            }
            )
        }
        unmount() {
            var s, l;
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this),
            (s = this.getStack()) === null || s === void 0 || s.remove(this),
            (l = this.parent) === null || l === void 0 || l.children.delete(this),
            this.instance = void 0,
            Xn.preRender(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            var s;
            return this.isAnimationBlocked || ((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimationBlocked()) || !1
        }
        startUpdate() {
            var s;
            this.isUpdateBlocked() || (this.isUpdating = !0,
            (s = this.nodes) === null || s === void 0 || s.forEach(lS))
        }
        willUpdate(s=!0) {
            var l, a, u;
            if (this.root.isUpdateBlocked()) {
                (a = (l = this.options).onExitComplete) === null || a === void 0 || a.call(l);
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                y.shouldResetTransform = !0,
                y.updateScroll()
            }
            const {layoutId: c, layout: f} = this.options;
            if (c === void 0 && !f)
                return;
            const d = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
            this.prevTransformTemplateValue = d == null ? void 0 : d(this.latestValues, ""),
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        didUpdate() {
            if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Qf);
                return
            }
            !this.isUpdating || (this.isUpdating = !1,
            this.potentialNodes.size && (this.potentialNodes.forEach(dS),
            this.potentialNodes.clear()),
            this.nodes.forEach(rS),
            this.nodes.forEach(eS),
            this.nodes.forEach(tS),
            this.clearAllSnapshots(),
            Ws.update(),
            Ws.preRender(),
            Ws.render())
        }
        clearAllSnapshots() {
            this.nodes.forEach(nS),
            this.sharedNodes.forEach(aS)
        }
        scheduleUpdateProjection() {
            Ze.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            Ze.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            const s = this.measure()
              , l = this.removeTransform(this.removeElementScroll(s));
            Zf(l),
            this.snapshot = {
                measured: s,
                layout: l,
                latestValues: {}
            }
        }
        updateLayout() {
            var s;
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++)
                    this.path[u].updateScroll();
            const l = this.measure();
            Zf(l);
            const a = this.layout;
            this.layout = {
                measured: l,
                actual: this.removeElementScroll(l)
            },
            this.layoutCorrected = me(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.actual),
            (s = this.options.visualElement) === null || s === void 0 || s.notifyLayoutMeasure(this.layout.actual, a == null ? void 0 : a.actual)
        }
        updateScroll() {
            this.options.layoutScroll && this.instance && (this.isScrollRoot = r(this.instance),
            this.scroll = n(this.instance))
        }
        resetTransform() {
            var s;
            if (!i)
                return;
            const l = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !Dm(this.projectionDelta)
              , u = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate
              , c = u == null ? void 0 : u(this.latestValues, "")
              , f = c !== this.prevTransformTemplateValue;
            l && (a || Pt(this.latestValues) || f) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure() {
            const {visualElement: s} = this.options;
            if (!s)
                return me();
            const l = s.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (_t(l.x, a.x),
            _t(l.y, a.y)),
            l
        }
        removeElementScroll(s) {
            const l = me();
            We(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: f, isScrollRoot: d} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (d) {
                        We(l, s);
                        const {scroll: m} = this.root;
                        m && (_t(l.x, -m.x),
                        _t(l.y, -m.y))
                    }
                    _t(l.x, c.x),
                    _t(l.y, c.y)
                }
            }
            return l
        }
        applyTransform(s, l=!1) {
            const a = me();
            We(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && An(a, {
                    x: -c.scroll.x,
                    y: -c.scroll.y
                }),
                Pt(c.latestValues) && An(a, c.latestValues)
            }
            return Pt(this.latestValues) && An(a, this.latestValues),
            a
        }
        removeTransform(s) {
            var l;
            const a = me();
            We(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !Pt(c.latestValues))
                    continue;
                km(c.latestValues) && c.updateSnapshot();
                const f = me()
                  , d = c.measure();
                We(f, d),
                Bf(a, c.latestValues, (l = c.snapshot) === null || l === void 0 ? void 0 : l.layout, f)
            }
            return Pt(this.latestValues) && Bf(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection()
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        resolveTargetDelta() {
            var s;
            const {layout: l, layoutId: a} = this.options;
            !this.layout || !(l || a) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(),
            this.relativeParent && this.relativeParent.layout && (this.relativeTarget = me(),
            this.relativeTargetOrigin = me(),
            Vr(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
            We(this.relativeTarget, this.relativeTargetOrigin))),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = me(),
            this.targetWithTransforms = me()),
            this.relativeTarget && this.relativeTargetOrigin && ((s = this.relativeParent) === null || s === void 0 ? void 0 : s.target) ? bw(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : We(this.target, this.layout.actual),
            Cm(this.target, this.targetDelta)) : We(this.target, this.layout.actual),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.relativeParent = this.getClosestProjectingParent(),
            this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = me(),
            this.relativeTargetOrigin = me(),
            Vr(this.relativeTargetOrigin, this.target, this.relativeParent.target),
            We(this.relativeTarget, this.relativeTargetOrigin)))))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pt(this.parent.latestValues)))
                return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
        }
        calcProjection() {
            var s;
            const {layout: l, layoutId: a} = this.options;
            if (this.isTreeAnimating = Boolean(((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(l || a))
                return;
            const u = this.getLead();
            We(this.layoutCorrected, this.layout.actual),
            lx(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== u);
            const {target: c} = u;
            if (!c)
                return;
            this.projectionDelta || (this.projectionDelta = Mr(),
            this.projectionDeltaWithTransform = Mr());
            const f = this.treeScale.x
              , d = this.treeScale.y
              , m = this.projectionTransform;
            Nr(this.projectionDelta, this.layoutCorrected, c, this.latestValues),
            this.projectionTransform = Hf(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== m || this.treeScale.x !== f || this.treeScale.y !== d) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", c))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var l, a, u;
            (a = (l = this.options).scheduleRender) === null || a === void 0 || a.call(l),
            s && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()),
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, l=!1) {
            var a;
            const u = this.snapshot
              , c = (u == null ? void 0 : u.latestValues) || {}
              , f = {
                ...this.latestValues
            }
              , d = Mr();
            this.relativeTarget = this.relativeTargetOrigin = void 0,
            this.attemptToResolveRelativeTarget = !l;
            const m = me()
              , y = u == null ? void 0 : u.isShared
              , w = (((a = this.getStack()) === null || a === void 0 ? void 0 : a.members.length) || 0) <= 1
              , L = Boolean(y && !w && this.options.crossfade === !0 && !this.path.some(cS));
            this.animationProgress = 0,
            this.mixTargetDelta = g=>{
                var p;
                const h = g / 1e3;
                Gf(d.x, s.x, h),
                Gf(d.y, s.y, h),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && ((p = this.relativeParent) === null || p === void 0 ? void 0 : p.layout) && (Vr(m, this.layout.actual, this.relativeParent.layout.actual),
                uS(this.relativeTarget, this.relativeTargetOrigin, m, h)),
                y && (this.animationValues = f,
                Wx(f, c, this.latestValues, h, L, w)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = h
            }
            ,
            this.mixTargetDelta(0)
        }
        startAnimation(s) {
            var l, a;
            this.notifyListeners("animationStart"),
            (l = this.currentAnimation) === null || l === void 0 || l.stop(),
            this.resumingFrom && ((a = this.resumingFrom.currentAnimation) === null || a === void 0 || a.stop()),
            this.pendingAnimation && (Xn.update(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ze.update(()=>{
                Tr.hasAnimatedSinceResize = !0,
                this.currentAnimation = $x(0, Kf, {
                    ...s,
                    onUpdate: u=>{
                        var c;
                        this.mixTargetDelta(u),
                        (c = s.onUpdate) === null || c === void 0 || c.call(s, u)
                    }
                    ,
                    onComplete: ()=>{
                        var u;
                        (u = s.onComplete) === null || u === void 0 || u.call(s),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            var s;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0),
            (s = this.getStack()) === null || s === void 0 || s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            var s;
            this.currentAnimation && ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, Kf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const {targetWithTransforms: s, target: l, layout: a, latestValues: u} = this.getLead();
            !s || !l || !a || (We(s, l),
            An(s, u),
            Nr(this.projectionDeltaWithTransform, this.layoutCorrected, s, u))
        }
        registerSharedNode(s, l) {
            var a, u, c;
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Zx),
            this.sharedNodes.get(s).add(l),
            l.promote({
                transition: (a = l.options.initialPromotionConfig) === null || a === void 0 ? void 0 : a.transition,
                preserveFollowOpacity: (c = (u = l.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || c === void 0 ? void 0 : c.call(u, l)
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const a = {};
            for (let u = 0; u < Wf.length; u++) {
                const c = Wf[u]
                  , f = "rotate" + c;
                !s.getStaticValue(f) || (l = !0,
                a[f] = s.getStaticValue(f),
                s.setStaticValue(f, 0))
            }
            if (!!l) {
                s == null || s.syncRender();
                for (const u in a)
                    s.setStaticValue(u, a[u]);
                s.scheduleRender()
            }
        }
        getProjectionStyles(s={}) {
            var l, a, u;
            const c = {};
            if (!this.instance || this.isSVG)
                return c;
            if (this.isVisible)
                c.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const f = (l = this.options.visualElement) === null || l === void 0 ? void 0 : l.getProps().transformTemplate;
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = Ji(s.pointerEvents) || "",
                c.transform = f ? f(this.latestValues, "") : "none",
                c;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const L = {};
                return this.options.layoutId && (L.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                L.pointerEvents = Ji(s.pointerEvents) || ""),
                this.hasProjected && !Pt(this.latestValues) && (L.transform = f ? f({}, "") : "none",
                this.hasProjected = !1),
                L
            }
            const m = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            c.transform = Hf(this.projectionDeltaWithTransform, this.treeScale, m),
            f && (c.transform = f(m, c.transform));
            const {x: y, y: w} = this.projectionDelta;
            c.transformOrigin = `${y.origin * 100}% ${w.origin * 100}% 0`,
            d.animationValues ? c.opacity = d === this ? (u = (a = m.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : m.opacityExit : c.opacity = d === this ? m.opacity !== void 0 ? m.opacity : "" : m.opacityExit !== void 0 ? m.opacityExit : 0;
            for (const L in _o) {
                if (m[L] === void 0)
                    continue;
                const {correct: g, applyTo: p} = _o[L]
                  , h = g(m[L], d);
                if (p) {
                    const v = p.length;
                    for (let x = 0; x < v; x++)
                        c[p[x]] = h
                } else
                    c[L] = h
            }
            return this.options.layoutId && (c.pointerEvents = d === this ? Ji(s.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s=>{
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Qf),
            this.root.sharedNodes.clear()
        }
    }
}
function eS(e) {
    e.updateLayout()
}
function tS(e) {
    var t, n, r;
    const i = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {actual: o, measured: s} = e.layout;
        e.options.animationType === "size" ? rt(f=>{
            const d = i.isShared ? i.measured[f] : i.layout[f]
              , m = xt(d);
            d.min = o[f].min,
            d.max = d.min + m
        }
        ) : e.options.animationType === "position" && rt(f=>{
            const d = i.isShared ? i.measured[f] : i.layout[f]
              , m = xt(o[f]);
            d.max = d.min + m
        }
        );
        const l = Mr();
        Nr(l, o, i.layout);
        const a = Mr();
        i.isShared ? Nr(a, e.applyTransform(s, !0), i.measured) : Nr(a, o, i.layout);
        const u = !Dm(l);
        let c = !1;
        if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(),
        e.relativeParent && !e.relativeParent.resumeFrom)) {
            const {snapshot: f, layout: d} = e.relativeParent;
            if (f && d) {
                const m = me();
                Vr(m, i.layout, f.layout);
                const y = me();
                Vr(y, o, d.actual),
                Im(m, y) || (c = !0)
            }
        }
        e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: i,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else
        e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
    e.options.transition = void 0
}
function nS(e) {
    e.clearSnapshot()
}
function Qf(e) {
    e.clearMeasurements()
}
function rS(e) {
    const {visualElement: t} = e.options;
    t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(),
    e.resetTransform()
}
function iS(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0
}
function oS(e) {
    e.resolveTargetDelta()
}
function sS(e) {
    e.calcProjection()
}
function lS(e) {
    e.resetRotation()
}
function aS(e) {
    e.removeLeadSnapshot()
}
function Gf(e, t, n) {
    e.translate = q(t.translate, 0, n),
    e.scale = q(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Yf(e, t, n, r) {
    e.min = q(t.min, n.min, r),
    e.max = q(t.max, n.max, r)
}
function uS(e, t, n, r) {
    Yf(e.x, t.x, n.x, r),
    Yf(e.y, t.y, n.y, r)
}
function cS(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const fS = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};
function dS(e, t) {
    let n = e.root;
    for (let o = e.path.length - 1; o >= 0; o--)
        if (Boolean(e.path[o].instance)) {
            n = e.path[o];
            break
        }
    const i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    i && e.mount(i, !0)
}
function Xf(e) {
    e.min = Math.round(e.min),
    e.max = Math.round(e.max)
}
function Zf(e) {
    Xf(e.x),
    Xf(e.y)
}
const pS = zm({
    attachResizeListener: (e,t)=>us(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Zs = {
    current: void 0
}
  , hS = zm({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!Zs.current) {
            const e = new pS(0,{});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Zs.current = e
        }
        return Zs.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>Boolean(window.getComputedStyle(e).position === "fixed")
})
  , mS = {
    ...Xw,
    ...dw,
    ...gx,
    ...Bx
}
  , re = iy((e,t)=>Hy(e, t, mS, Ix, hS));
function jm() {
    const e = k.exports.useRef(!1);
    return To(()=>(e.current = !0,
    ()=>{
        e.current = !1
    }
    ), []),
    e
}
function gS() {
    const e = jm()
      , [t,n] = k.exports.useState(0)
      , r = k.exports.useCallback(()=>{
        e.current && n(t + 1)
    }
    , [t]);
    return [k.exports.useCallback(()=>Ze.postRender(r), [r]), t]
}
class vS extends k.exports.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function yS({children: e, isPresent: t}) {
    const n = k.exports.useId()
      , r = k.exports.useRef(null)
      , i = k.exports.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return k.exports.useInsertionEffect(()=>{
        const {width: o, height: s, top: l, left: a} = i.current;
        if (t || !r.current || !o || !s)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(u)
        }
    }
    , [t]),
    E(vS, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: k.exports.cloneElement(e, {
            ref: r
        })
    })
}
const Js = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s})=>{
    const l = ss(wS)
      , a = k.exports.useId()
      , u = k.exports.useMemo(()=>({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c=>{
            l.set(c, !0);
            for (const f of l.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: c=>(l.set(c, !1),
        ()=>l.delete(c))
    }), o ? void 0 : [n]);
    return k.exports.useMemo(()=>{
        l.forEach((c,f)=>l.set(f, !1))
    }
    , [n]),
    k.exports.useEffect(()=>{
        !n && !l.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = E(yS, {
        isPresent: n,
        children: e
    })),
    E(ai.Provider, {
        value: u,
        children: e
    })
}
;
function wS() {
    return new Map
}
const wn = e=>e.key || "";
function xS(e, t) {
    e.forEach(n=>{
        const r = wn(n);
        t.set(r, n)
    }
    )
}
function SS(e) {
    const t = [];
    return k.exports.Children.forEach(e, n=>{
        k.exports.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const kS = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: s="sync"})=>{
    i && (s = "wait",
    pm(!1, "Replace exitBeforeEnter with mode='wait'"));
    let[l] = gS();
    const a = k.exports.useContext(uu).forceRender;
    a && (l = a);
    const u = jm()
      , c = SS(e);
    let f = c;
    const d = new Set
      , m = k.exports.useRef(f)
      , y = k.exports.useRef(new Map).current
      , w = k.exports.useRef(!0);
    if (To(()=>{
        w.current = !1,
        xS(c, y),
        m.current = f
    }
    ),
    vu(()=>{
        w.current = !0,
        y.clear(),
        d.clear()
    }
    ),
    w.current)
        return E(Qc, {
            children: f.map(h=>E(Js, {
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: o,
                mode: s,
                children: h
            }, wn(h)))
        });
    f = [...f];
    const L = m.current.map(wn)
      , g = c.map(wn)
      , p = L.length;
    for (let h = 0; h < p; h++) {
        const v = L[h];
        g.indexOf(v) === -1 && d.add(v)
    }
    return s === "wait" && d.size && (f = []),
    d.forEach(h=>{
        if (g.indexOf(h) !== -1)
            return;
        const v = y.get(h);
        if (!v)
            return;
        const x = L.indexOf(h)
          , _ = ()=>{
            y.delete(h),
            d.delete(h);
            const S = m.current.findIndex(P=>P.key === h);
            if (m.current.splice(S, 1),
            !d.size) {
                if (m.current = c,
                u.current === !1)
                    return;
                l(),
                r && r()
            }
        }
        ;
        f.splice(x, 0, E(Js, {
            isPresent: !1,
            onExitComplete: _,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: v
        }, wn(v)))
    }
    ),
    f = f.map(h=>{
        const v = h.key;
        return d.has(v) ? h : E(Js, {
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s,
            children: h
        }, wn(h))
    }
    ),
    dm !== "production" && s === "wait" && f.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),
    E(Qc, {
        children: d.size ? f : f.map(h=>k.exports.cloneElement(h))
    })
}
  , pi = ()=>{
    const [e,t] = k.exports.useState(!1);
    return z("nav", {
        className: "navbar flex items-center justify-between px-5 md:pl-10 md:pr-0 md:h-24  relative",
        children: [E("div", {
            children: E("img", {
                src: Fv,
                alt: "logo"
            })
        }), E("span", {
            className: " w-[255px] lg:w-[315px] h-[1px] bg-white absolute top-1/2 left-[10.25rem] z-50 hidden lg:block"
        }), E("div", {
            className: "hidden md:flex h-full md:items-center justify-between  md:px-11  relative bg-white/5 backdrop-blur-sm",
            children: z("ul", {
                className: "flex items-center lg:justify-center md:space-x-9 lg:space-x-12 w-full lg:pl-[118px] lg:pr-[165px]",
                children: [E(zi, {
                    num: "00",
                    to: "/",
                    children: "Home"
                }), E(zi, {
                    num: "01",
                    to: "/destination",
                    children: "Destination"
                }), E(zi, {
                    num: "02",
                    to: "/crew",
                    children: "crew"
                }), E(zi, {
                    num: "03",
                    to: "/technology",
                    children: "technology"
                })]
            })
        }), E("div", {
            className: "md:hidden absolute top-5 right-5 z-50 cursor-pointer",
            children: E("img", {
                src: e ? zv : jv,
                alt: `${e ? "open menu" : "CloseIcon"}`,
                onClick: ()=>t(!e)
            })
        }), E(kS, {
            initial: !1,
            mode: "wait",
            onExitComplete: ()=>null,
            children: e && E(CS, {})
        })]
    })
}
;
function zi({to: e, num: t, children: n, ...r}) {
    const i = ts(e)
      , o = fh({
        path: i.pathname,
        end: !0
    });
    return E("li", {
        className: `${o ? "active" : ""} link`,
        children: z(ns, {
            to: e,
            children: [E("span", {
                className: "mr-2",
                children: t
            }), n]
        })
    })
}
function ji({to: e, num: t, children: n, ...r}) {
    const i = ts(e)
      , o = fh({
        path: i.pathname,
        end: !0
    });
    return E("li", {
        className: `${o ? "active" : ""} mobile-link link`,
        children: z(ns, {
            to: e,
            children: [E("span", {
                className: "mr-2",
                children: t
            }), n]
        })
    })
}
function CS() {
    return E(re.nav, {
        whileInView: {
            x: [100, 0],
            opacity: [0, 1]
        },
        exit: {
            opacity: [1, 0],
            x: [0, 100]
        },
        transition: {
            duration: .5
        },
        className: "md:hidden fixed w-[70%] bg-darkBlue/75 backdrop-blur-lg right-0 bottom-0 h-full  opacity-0 translate-x-full z-40",
        children: z("ul", {
            className: "flex items-start justify-center flex-col absolute top-[160px] left-7",
            children: [E(ji, {
                num: "00",
                to: "/",
                children: "Home"
            }), E(ji, {
                num: "01",
                to: "/destination",
                children: "Destination"
            }), E(ji, {
                num: "02",
                to: "/crew",
                children: "crew"
            }), E(ji, {
                num: "03",
                to: "/technology",
                children: "technology"
            })]
        })
    })
}
const PS = ()=>z("div", {
    className: 'pt-6 lg:pt-10 bg-[url("/assets/home/background-home-mobile.jpg")] md:bg-[url("/assets/home/background-home-tablet.jpg")] lg:bg-[url("/assets/home/background-home-desktop.jpg")]  bg-no-repeat bg-cover min-h-screen h-[44.6875rem] md:h-[64rem] lg:h-[56.25rem] ',
    children: [E(pi, {}), z("div", {
        className: "container flex items-center justify-center lg:justify-between flex-col lg:flex-row px-6 md:px-o mt-12 md:mt-[6.625rem] lg:mt-[15.6875rem] ",
        children: [z(re.div, {
            whileInView: {
                x: [-100, 0],
                opacity: [0, 1]
            },
            transition: {
                duration: .5
            },
            className: "w-full md:w-[28.125rem] md:h-[20.875rem] lg:h-[23.875rem] text-center lg:text-left mb-20 md:mb-[9.75rem] lg:mb-0",
            children: [E("h1", {
                className: "heading text-lg md:text-2xl lg:text-4xl uppercase text-white font-barlowCondensed",
                children: "So, you want to travel to"
            }), E("h2", {
                className: "text-head_lg md:text-head_xl lg:text-[10.75rem] text-white font-belle uppercase",
                children: "Space"
            }), E("p", {
                className: "text-base md:text-lg text-white font-barlow",
                children: "Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"
            })]
        }), z(re.div, {
            whileInView: {
                x: [100, 0],
                opacity: [0, 1]
            },
            transition: {
                duration: .5
            },
            className: "grid place-items-center relative explore",
            children: [E("span", {
                className: "absolute rounded-full w-[15.09375rem] h-[15.09375rem] md:w-[24.35125rem] md:h-[24.35125rem] lg:h-[28.125rem] lg:w-[28.125rem]  bg-white/20 opacity-0 z-20 duration-300 back"
            }), E(ns, {
                to: "/destination",
                className: "w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] bg-white text-darkBlue text-xl md:text-[2rem] font-belle uppercase rounded-full grid place-items-center cursor-pointer z-30",
                children: "Explore"
            })]
        })]
    })]
});
const Fm = e=>E("header", {
    className: "mx-auto w-fit md:mx-0 md:pl-10 lg:pl-[10.25rem] mt-6 md:mt-10  lg:mt-[4.75rem]",
    children: z("h1", {
        className: "font-barlowCondensed text-base md:text-xl lg:text-head_xs uppercase text-white mb-8 md:mb-[3.75rem] lg:mb-[4.375rem]",
        children: [E("span", {
            className: "mr-[1.125rem] md:mr-[1.13rem] lg:mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25",
            children: e.num
        }), e.text]
    })
})
  , ES = ({destination: e})=>{
    const [t,n] = k.exports.useState(0);
    let r = e[t];
    const i = o=>{
        switch (o) {
        case "moon":
            n(0);
            break;
        case "mars":
            n(1);
            break;
        case "europa":
            n(2);
            break;
        case "titan":
            n(3);
            break;
        default:
            n(0);
            break
        }
        const s = document.querySelectorAll(".dest-dest")
          , l = ()=>{
            s.forEach(a=>{
                a.classList.remove("active")
            }
            )
        }
        ;
        s.forEach(a=>{
            a.addEventListener("click", ()=>{
                l(),
                a.classList.add("active")
            }
            )
        }
        )
    }
    ;
    return z("section", {
        className: " destination-home ",
        children: [E(pi, {}), E(Fm, {
            num: "01",
            text: "pick your destination"
        }), E("div", {
            className: "dest-container",
            children: z("div", {
                className: "flex items-center justify-center flex-col lg:flex-row lg:space-x-[9.75rem]",
                children: [E(re.img, {
                    src: r.images.png,
                    alt: `${r.name} image`,
                    className: "dest-image fade-in",
                    whileInView: {
                        x: [-100, 0],
                        opacity: [0, 1]
                    },
                    transition: {
                        duration: .6
                    }
                }), z("div", {
                    className: "lg:w-[27.8125rem] lg:h-[29.5rem] ",
                    children: [z(re.div, {
                        whileInView: {
                            x: [-100, 0],
                            opacity: [0, 1]
                        },
                        transition: {
                            duration: .5
                        },
                        className: "flex items-center justify-center lg:justify-start space-x-7 md:space-x-9 mb-5 md:mb-9 ",
                        children: [E("span", {
                            className: "dest-dest active",
                            "aria-label": "see moon info",
                            onClick: o=>i(o.target.textContent),
                            children: "moon"
                        }), E("span", {
                            className: "dest-dest",
                            "aria-label": "see mars info",
                            onClick: o=>i(o.target.textContent),
                            children: "mars"
                        }), E("span", {
                            className: "dest-dest",
                            "aria-label": "see europa info",
                            onClick: o=>i(o.target.textContent),
                            children: "europa"
                        }), E("span", {
                            className: "dest-dest",
                            "aria-label": "see titan info",
                            onClick: o=>i(o.target.textContent),
                            children: "titan"
                        })]
                    }), z("div", {
                        className: "text-center lg:text-left",
                        children: [E(re.h2, {
                            className: "text-white text-head_md md:text-[5rem] lg:text-head_lg font-belle uppercase",
                            whileInView: {
                                x: [-100, 0],
                                opacity: [0, 1]
                            },
                            transition: {
                                duration: .5
                            },
                            children: r.name
                        }), E(re.article, {
                            whileInView: {
                                x: [100, 0],
                                opacity: [0, 1]
                            },
                            className: "dest-article",
                            children: r.description
                        }), E("span", {
                            className: "dest-line"
                        }), z("div", {
                            className: "dest-distance",
                            children: [z(re.div, {
                                whileInView: {
                                    x: [-100, 0],
                                    opacity: [0, 1]
                                },
                                transition: {
                                    duration: .5
                                },
                                className: "block text-center lg:text-left h-[3.8125rem] w-[13.5rem] space-y-3",
                                children: [E("p", {
                                    className: "text-lightBlue uppercase text-sm tracking-[2.36px] font-barlowCondensed",
                                    children: "avg. distance"
                                }), E("p", {
                                    className: "text-white uppercase font-belle text-[1.75rem]",
                                    children: r.distance
                                })]
                            }), z("div", {
                                className: "block text-center lg:text-left h-[3.8125rem] w-[13.5rem] space-y-3",
                                children: [E("p", {
                                    className: "text-lightBlue uppercase text-sm tracking-[2.36px] font-barlowCondensed",
                                    children: "est. travel time"
                                }), E("p", {
                                    className: "text-white uppercase font-belle text-[1.75rem]",
                                    children: r.travel
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
}
;
const TS = ({crew: e})=>{
    const [t,n] = k.exports.useState(0);
    let r = e[t];
    const i = document.querySelectorAll(".crew-crew")
      , o = ()=>{
        i.forEach(s=>{
            s.classList.remove("active")
        }
        )
    }
    ;
    return i.forEach(s=>{
        s.addEventListener("click", ()=>{
            o(),
            s.classList.add("active")
        }
        )
    }
    ),
    z("section", {
        className: "crew-home",
        children: [E(pi, {}), z("div", {
            className: "crew-container",
            children: [E(re.header, {
                whileInView: {
                    x: [-100, 0],
                    opacity: [0, 1]
                },
                transition: {
                    duration: .5
                },
                className: "mx-auto w-fit md:mx-0 mt-6 md:mt-10  lg:mt-[4.75rem]",
                children: z("h1", {
                    className: "font-barlow text-base md:text-xl lg:text-head_xs uppercase text-white mb-8 md:mb-[3.75rem] lg:mb-[4.375rem]",
                    children: [E("span", {
                        className: "mr-[1.125rem] md:mr-[1.13rem] lg:mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25",
                        children: "02"
                    }), "meet your crew"]
                })
            }), z("div", {
                className: "crew-content",
                children: [E(re.div, {
                    whileInView: {
                        y: [100, 0],
                        opacity: [0, 1]
                    },
                    transition: {
                        duration: .5
                    },
                    className: "border-b border-lightBlue md:border-none w-full h-[13.9375rem] md:h-[35.75rem]  max-w-[38.75rem] lg:max-h-[44.5rem] overflow-hidden ",
                    children: E("img", {
                        src: r.images.webp,
                        alt: `image of ${r.name}`,
                        className: "h-[13.9375rem] md:h-[35.75rem] mx-auto lg:mr-0"
                    })
                }), z("div", {
                    className: "crew-text lg:mt-[154px]",
                    children: [z(re.div, {
                        whileInView: {
                            x: [-100, 0],
                            opacity: [0, 1]
                        },
                        transition: {
                            duration: .5
                        },
                        className: "mb-8 flex items-start justify-center space-x-4 lg:space-x-6 mt-28 md:mt-0",
                        children: [E("span", {
                            className: "crew-crew active",
                            onClick: ()=>n(0)
                        }), E("span", {
                            className: "crew-crew",
                            onClick: ()=>n(1)
                        }), E("span", {
                            className: "crew-crew",
                            onClick: ()=>n(2)
                        }), E("span", {
                            className: "crew-crew",
                            onClick: ()=>n(3)
                        })]
                    }), z(re.div, {
                        whileInView: {
                            y: [-100, 0],
                            opacity: [0, 1]
                        },
                        transition: {
                            duration: .5
                        },
                        children: [E("h2", {
                            className: "crew-heading",
                            children: r.role
                        }), E("h3", {
                            className: "crew-name",
                            children: r.name
                        }), E("p", {
                            className: "crew-bio",
                            children: r.bio
                        })]
                    })]
                })]
            })]
        })]
    })
}
;
const _S = ({tech: e})=>{
    const [t,n] = k.exports.useState(0)
      , [r,i] = k.exports.useState(window.innerWidth);
    let o = e[t];
    const s = ()=>{
        i(window.innerWidth)
    }
    ;
    k.exports.useEffect(()=>(window.addEventListener("resize", s),
    ()=>{
        window.removeEventListener("resize", s)
    }
    ), []);
    const l = document.querySelectorAll(".tech-tech")
      , a = ()=>{
        l.forEach(u=>{
            u.classList.remove("active")
        }
        )
    }
    ;
    return l.forEach(u=>{
        u.addEventListener("click", ()=>{
            a(),
            u.classList.add("active")
        }
        )
    }
    ),
    z("section", {
        className: "tech-home",
        children: [E(pi, {}), E(Fm, {
            num: "03",
            text: "space launch 101"
        }), z("div", {
            className: "tech-container",
            children: [E(re.div, {
                whileInView: {
                    opacity: [0, 1]
                },
                transition: {
                    duration: .5
                },
                className: "tech-image",
                children: E("img", {
                    src: `${r > 1110 ? o.images.portrait : o.images.landscape}`,
                    alt: `${o.name} image`,
                    className: "w-full h-full object-contain"
                })
            }), z("div", {
                className: "tech-text",
                children: [z(re.div, {
                    whileInView: {
                        y: [-100, 0],
                        opacity: [0, 1]
                    },
                    transition: {
                        duration: .5
                    },
                    className: "tech-text-toggle",
                    children: [E("span", {
                        className: "tech-tech active",
                        onClick: ()=>n(0),
                        children: "1"
                    }), E("span", {
                        className: "tech-tech",
                        onClick: ()=>n(1),
                        children: "2"
                    }), E("span", {
                        className: "tech-tech",
                        onClick: ()=>n(2),
                        children: "3"
                    })]
                }), z(re.div, {
                    whileInView: {
                        x: [100, 0],
                        opacity: [0, 1]
                    },
                    transition: {
                        duration: .5
                    },
                    className: "tech-text-text",
                    children: [E("h2", {
                        className: "terminology",
                        children: "the terminology..."
                    }), E("h3", {
                        className: "name",
                        children: o.name
                    }), E("p", {
                        className: "description",
                        children: o.description
                    })]
                })]
            })]
        })]
    })
}
  , LS = ()=>z("div", {
    className: "bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] pt-6 lg:pt-10 h-[44.375rem] md:h-[64rem] lg:h-[56.25rem] bg-no-repeat bg-cover",
    children: [E(pi, {}), z("div", {
        className: "flex items-center justify-center flex-col lg:flex-row select-none container lg:space-x-20  mt-20  lg:mb-0",
        children: [E(re.div, {
            whileInView: {
                x: [100, 0],
                opacity: [0, 1]
            },
            transition: {
                duration: .5
            },
            className: "flex-[50%] ",
            children: E("img", {
                src: "/assets/destination/image-moon.png",
                alt: "image not found",
                className: "spin w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] lg:w-[27.8125rem] lg:h-[27.8125rem] mb-14 lg:mb-0 mx-auto"
            })
        }), z("div", {
            className: "flex-[50%] text-center lg:text-left",
            children: [E(re.p, {
                whileInView: {
                    y: [-100, 0],
                    opacity: [0, 1]
                },
                transition: {
                    duration: 1
                },
                className: "text-3xl text-lightBlue mb-6 md:mb-8",
                children: "Help me! Help me!"
            }), E(re.p, {
                whileInView: {
                    y: [100, 0],
                    opacity: [0, 1]
                },
                transition: {
                    duration: 2.5
                },
                className: "text-gray text-2xl capitalize mb-6",
                children: "your request dey carry me dey go where i no know"
            }), E(re.div, {
                whileInView: {
                    x: [100, 0],
                    opacity: [0, 1]
                },
                transition: {
                    duration: 3.5
                },
                children: z(ns, {
                    to: "/",
                    className: "text-2xl text-gray",
                    children: ["Abeg save me", " ", E("span", {
                        className: "text-lightBlue underline",
                        children: "Click here"
                    })]
                })
            })]
        })]
    })]
})
  , RS = [{
    name: "Moon",
    images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp"
    },
    description: "See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
}, {
    name: "Mars",
    images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp"
    },
    description: "Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
}, {
    name: "Europa",
    images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp"
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
}, {
    name: "Titan",
    images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp"
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
}]
  , VS = [{
    name: "Launch vehicle",
    // images: {
    //     portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
    //     landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
    // },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}, {
    name: "Spaceport",
    // images: {
    //     portrait: "./assets/technology/image-spaceport-portrait.jpg",
    //     landscape: "./assets/technology/image-spaceport-landscape.jpg"
    // },
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch."
}, {
    name: "Space capsule",
    // images: {
    //     portrait: "./assets/technology/image-space-capsule-portrait.jpg",
    //     landscape: "./assets/technology/image-space-capsule-landscape.jpg"
    // },
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
}]
  , bs = {
    destinations: RS,
    crew: NS,
    technology: VS
};
function MS() {
    return E(Ov, {
        children: z(Vv, {
            children: [E(yn, {
                path: "/",
                element: E(PS, {})
            }), E(yn, {
                path: "/destination",
                element: E(ES, {
                    destination: bs.destinations
                })
            }), E(yn, {
                path: "/crew",
                element: E(TS, {
                    crew: bs.crew
                })
            }), E(yn, {
                path: "/technology",
                element: E(_S, {
                    tech: bs.technology
                })
            }), E(yn, {
                path: "*",
                element: E(LS, {})
            })]
        })
    })
}
qs.createRoot(document.getElementById("root")).render(E(ma.StrictMode, {
    children: E(MS, {})
}));
