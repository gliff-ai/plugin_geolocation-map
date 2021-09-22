var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r$2 = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u$1 = 60115, v$1 = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w$1 = Symbol.for;
  n$1 = w$1("react.element");
  p$1 = w$1("react.portal");
  react_production_min.Fragment = w$1("react.fragment");
  react_production_min.StrictMode = w$1("react.strict_mode");
  react_production_min.Profiler = w$1("react.profiler");
  q$1 = w$1("react.provider");
  r$2 = w$1("react.context");
  t = w$1("react.forward_ref");
  react_production_min.Suspense = w$1("react.suspense");
  u$1 = w$1("react.memo");
  v$1 = w$1("react.lazy");
}
var x$1 = typeof Symbol === "function" && Symbol.iterator;
function y$2(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = x$1 && a2[x$1] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
function z$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$2 = {};
function C$1(a2, b2, c2) {
  this.props = a2;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$1;
}
C$1.prototype.isReactComponent = {};
C$1.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error(z$1(85));
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
C$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function D$2() {
}
D$2.prototype = C$1.prototype;
function E$2(a2, b2, c2) {
  this.props = a2;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$1;
}
var F$2 = E$2.prototype = new D$2();
F$2.constructor = E$2;
l$1(F$2, C$1.prototype);
F$2.isPureReactComponent = true;
var G$2 = { current: null }, H$2 = Object.prototype.hasOwnProperty, I$2 = { key: true, ref: true, __self: true, __source: true };
function J$1(a2, b2, c2) {
  var e, d2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (e in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      H$2.call(b2, e) && !I$2.hasOwnProperty(e) && (d2[e] = b2[e]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (e in g2 = a2.defaultProps, g2)
      d2[e] === void 0 && (d2[e] = g2[e]);
  return { $$typeof: n$1, type: a2, key: k2, ref: h2, props: d2, _owner: G$2.current };
}
function K$1(a2, b2) {
  return { $$typeof: n$1, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function L$1(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === n$1;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var M$2 = /\/+/g;
function N$2(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function O$2(a2, b2, c2, e, d2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case n$1:
          case p$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, d2 = d2(h2), a2 = e === "" ? "." + N$2(h2, 0) : e, Array.isArray(d2) ? (c2 = "", a2 != null && (c2 = a2.replace(M$2, "$&/") + "/"), O$2(d2, b2, c2, "", function(a3) {
      return a3;
    })) : d2 != null && (L$1(d2) && (d2 = K$1(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$2, "$&/") + "/") + a2)), b2.push(d2)), 1;
  h2 = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = e + N$2(k2, g2);
      h2 += O$2(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$2(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = e + N$2(k2, g2++), h2 += O$2(k2, b2, c2, f2, d2);
  else if (k2 === "object")
    throw b2 = "" + a2, Error(z$1(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
  return h2;
}
function P$2(a2, b2, c2) {
  if (a2 == null)
    return a2;
  var e = [], d2 = 0;
  O$2(a2, e, "", "", function(a3) {
    return b2.call(c2, a3, d2++);
  });
  return e;
}
function Q$1(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    a2._status = 0;
    a2._result = b2;
    b2.then(function(b3) {
      a2._status === 0 && (b3 = b3.default, a2._status = 1, a2._result = b3);
    }, function(b3) {
      a2._status === 0 && (a2._status = 2, a2._result = b3);
    });
  }
  if (a2._status === 1)
    return a2._result;
  throw a2._result;
}
var R$2 = { current: null };
function S$2() {
  var a2 = R$2.current;
  if (a2 === null)
    throw Error(z$1(321));
  return a2;
}
var T$2 = { ReactCurrentDispatcher: R$2, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$2, IsSomeRendererActing: { current: false }, assign: l$1 };
react_production_min.Children = { map: P$2, forEach: function(a2, b2, c2) {
  P$2(a2, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a2) {
  var b2 = 0;
  P$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return P$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!L$1(a2))
    throw Error(z$1(143));
  return a2;
} };
react_production_min.Component = C$1;
react_production_min.PureComponent = E$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$2;
react_production_min.cloneElement = function(a2, b2, c2) {
  if (a2 === null || a2 === void 0)
    throw Error(z$1(267, a2));
  var e = l$1({}, a2.props), d2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = G$2.current);
    b2.key !== void 0 && (d2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      H$2.call(b2, f2) && !I$2.hasOwnProperty(f2) && (e[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a2.type,
    key: d2,
    ref: k2,
    props: e,
    _owner: h2
  };
};
react_production_min.createContext = function(a2, b2) {
  b2 === void 0 && (b2 = null);
  a2 = { $$typeof: r$2, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
  a2.Provider = { $$typeof: q$1, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = J$1;
react_production_min.createFactory = function(a2) {
  var b2 = J$1.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: t, render: a2 };
};
react_production_min.isValidElement = L$1;
react_production_min.lazy = function(a2) {
  return { $$typeof: v$1, _payload: { _status: -1, _result: a2 }, _init: Q$1 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: u$1, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.useCallback = function(a2, b2) {
  return S$2().useCallback(a2, b2);
};
react_production_min.useContext = function(a2, b2) {
  return S$2().useContext(a2, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a2, b2) {
  return S$2().useEffect(a2, b2);
};
react_production_min.useImperativeHandle = function(a2, b2, c2) {
  return S$2().useImperativeHandle(a2, b2, c2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return S$2().useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return S$2().useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, c2) {
  return S$2().useReducer(a2, b2, c2);
};
react_production_min.useRef = function(a2) {
  return S$2().useRef(a2);
};
react_production_min.useState = function(a2) {
  return S$2().useState(a2);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var o = propTypes.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a2 = exports.unstable_now();
          t2(true, a2);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t2 !== null ? setTimeout(f2, 0, a2) : (t2 = a2, setTimeout(w2, 0));
    };
    g2 = function(a2, b2) {
      u2 = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F = new MessageChannel(), G2 = F.port2;
    F.port1.onmessage = function() {
      if (B2 !== null) {
        var a2 = exports.unstable_now();
        E2 = a2 + D2;
        try {
          B2(true, a2) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a2) {
      B2 = a2;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a2, b2) {
      C2 = x2(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e = a2[d2];
        if (e !== void 0 && 0 < I2(e, b2))
          a2[d2] = b2, a2[c2] = e, c2 = d2;
        else
          break a;
      }
  }
  function J(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e = a2.length; d2 < e; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a2[m2], v2 = m2 + 1, r2 = a2[v2];
            if (n2 !== void 0 && 0 > I2(n2, c2))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a2[d2] = r2, a2[v2] = c2, d2 = v2) : (a2[d2] = n2, a2[m2] = c2, d2 = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c2))
              a2[d2] = r2, a2[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a2) {
    for (var b2 = J(M2); b2 !== null; ) {
      if (b2.callback === null)
        K2(M2);
      else if (b2.startTime <= a2)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J(M2);
    }
  }
  function U2(a2) {
    S2 = false;
    T2(a2);
    if (!R2)
      if (J(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b2 = J(M2);
        b2 !== null && g2(U2, b2.startTime - a2);
      }
  }
  function V2(a2, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J(L2); O2 !== null && (!(O2.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if (typeof d2 === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J(M2);
        n2 !== null && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L2);
  };
  exports.unstable_next = function(a2) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = P2;
    P2 = a2;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c2 + e;
    a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, H2(M2, a2), J(L2) === null && a2 === J(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a2.sortIndex = e, H2(L2, a2), R2 || Q || (R2 = true, f2(V2)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$1 = objectAssign, r$1 = scheduler.exports;
function y$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$1(227));
var ba = new Set(), ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B$1(a2, b2, c2, d2, e, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D$1[a2] = new B$1(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D$1[b2] = new B$1(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D$1[a2] = new B$1(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D$1.xlinkHref = new B$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D$1[a2] = new B$1(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c2, d2) {
  var e = D$1.hasOwnProperty(b2) ? D$1[b2] : null;
  var f2 = e !== null ? e.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c2, e, d2) && (c2 = null), d2 || e === null ? la(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = c2 === null ? e.type === 3 ? false : "" : c2 : (b2 = e.attributeName, d2 = e.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e = e.type, c2 = e === 3 || e === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E$1 = Symbol.for;
  sa = E$1("react.element");
  ta = E$1("react.portal");
  ua = E$1("react.fragment");
  wa = E$1("react.strict_mode");
  xa = E$1("react.profiler");
  ya = E$1("react.provider");
  za = E$1("react.context");
  Aa = E$1("react.forward_ref");
  Ba = E$1("react.suspense");
  Ca = E$1("react.suspense_list");
  Da = E$1("react.memo");
  Ea = E$1("react.lazy");
  Fa = E$1("react.block");
  E$1("react.scope");
  Ga = E$1("react.opaque.id");
  Ha = E$1("react.debug_trace_mode");
  Ia = E$1("react.offscreen");
  Ja = E$1("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a2();
    }
  } catch (k2) {
    if (k2 && d2 && typeof k2.stack === "string") {
      for (var e = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2])
                return "\n" + e[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return m$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Sa(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
function db(a2) {
  var b2 = "";
  aa.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = m$1({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c2.length; e++)
      b2["$" + c2[e]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e = 0; e < a2.length; e++) {
      if (a2[e].value === c2) {
        a2[e].selected = true;
        d2 && (a2[e].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e].disabled || (b2 = a2[e]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y$1(91));
  return m$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(y$1(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb, ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e = sb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e) : a2[c2] = e;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y$1(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y$1(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$1(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y$1(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y$1(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c2, d2, e) {
  return a2(b2, c2, d2, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b2, c2) {
  if (Lb)
    return a2(b2, c2);
  Lb = true;
  try {
    return Jb(a2, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Db(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
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
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(y$1(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
function Rb(a2, b2, c2, d2, e, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a2) {
  Sb = true;
  Tb = a2;
} };
function Xb(a2, b2, c2, d2, e, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c2, d2, e, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$1(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y$1(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y$1(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e = c2.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d2 = e.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c2)
          return ac(e), a2;
        if (f2 === d2)
          return ac(e), b2;
        f2 = f2.sibling;
      }
      throw Error(y$1(188));
    }
    if (c2.return !== d2.return)
      c2 = e, d2 = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$1(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$1(190));
  }
  if (c2.tag !== 3)
    throw Error(y$1(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c2 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c2, d2, e) {
  return { blockedOn: a2, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e, targetContainers: [d2] };
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c2, d2, e, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c2, d2, e, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e !== null && b2.indexOf(e) === -1 && b2.push(e);
  return a2;
}
function uc(a2, b2, c2, d2, e) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c2, d2, e), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c2, d2, e), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c2, d2, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c2, d2, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c2, d2, e)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c2 = Zb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = $b(c2), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            r$1.unstable_runWithPriority(a2.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.hydrate) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 !== null)
      return b2 = Cb(c2), b2 !== null && fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c2) {
  xc(a2) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c2 !== null) {
        a2.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
    vc(c2), c2.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a2] = b2[c2];
  return a2;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b2) {
  for (var c2 = 0; c2 < a2.length; c2 += 2) {
    var d2 = a2[c2], e = a2[c2 + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e);
    da(e, [d2]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F$1 = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F$1 = 15, 1;
  if ((2 & a2) !== 0)
    return F$1 = 14, 2;
  if ((4 & a2) !== 0)
    return F$1 = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F$1 = 12, b2;
  if ((a2 & 32) !== 0)
    return F$1 = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F$1 = 10, b2;
  if ((a2 & 256) !== 0)
    return F$1 = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F$1 = 8, b2;
  if ((a2 & 4096) !== 0)
    return F$1 = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F$1 = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F$1 = 5, b2;
  if (a2 & 67108864)
    return F$1 = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F$1 = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F$1 = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F$1 = 1, 1073741824;
  F$1 = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$1(358, a2));
  }
}
function Uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return F$1 = 0;
  var d2 = 0, e = 0, f2 = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d2 = f2, e = F$1 = 15;
  else if (f2 = c2 & 134217727, f2 !== 0) {
    var k2 = f2 & ~g2;
    k2 !== 0 ? (d2 = Rc(k2), e = F$1) : (h2 &= f2, h2 !== 0 && (d2 = Rc(h2), e = F$1));
  } else
    f2 = c2 & ~g2, f2 !== 0 ? (d2 = Rc(f2), e = F$1) : h2 !== 0 && (d2 = Rc(h2), e = F$1);
  if (d2 === 0)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
    Rc(b2);
    if (e <= F$1)
      return b2;
    F$1 = e;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e = 1 << c2, d2 |= a2[c2], b2 &= ~e;
  return d2;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y$1(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c2) {
  a2.pendingLanes |= b2;
  var d2 = b2 - 1;
  a2.suspendedLanes &= d2;
  a2.pingedLanes &= d2;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a2, b2, c2, d2) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a2, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c2, d2) {
  ed(dd, hd.bind(null, a2, b2, c2, d2));
}
function hd(a2, b2, c2, d2) {
  if (fd) {
    var e;
    if ((e = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c2, d2), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c2, d2);
      if (f2 === null)
        e && sc(a2, d2);
      else {
        if (e) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c2, d2);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c2, d2))
            return;
          sc(a2, d2);
        }
        jd(a2, b2, d2, null, c2);
      }
    }
  }
}
function yc(a2, b2, c2, d2) {
  var e = xb(d2);
  e = wc(e);
  if (e !== null) {
    var f2 = Zb(e);
    if (f2 === null)
      e = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e = $b(f2);
        if (e !== null)
          return e;
        e = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a2, b2, d2, e, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e[f2 - d2]; d2++)
    ;
  return md = e.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e, f2, g2) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae$1 || be && 8 < be && 11 >= be), ee$1 = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie$1)
    return a2 === "compositionend" || !ae$1 && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le$1[a2.type] : b2 === "textarea" ? true : false;
}
function ne$1(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe = null;
function re$1(a2) {
  se$1(a2, 0);
}
function te$1(a2) {
  var b2 = ue$1(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be), qe = pe$1 = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te$1(qe)) {
    var b2 = [];
    ne$1(b2, qe, a2, xb(a2));
    a2 = re$1;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c2) {
  a2 === "focusin" ? (Ae(), pe$1 = b2, qe = c2, pe$1.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te$1(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te$1(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te$1(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a2[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c2 = Ke(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe$1(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Yb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$1(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G$1(a2, b2) {
  var c2 = $e(b2), d2 = a2 + "__bubble";
  c2.has(d2) || (af(b2, a2, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c2, d2) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c2;
  a2 === "selectionchange" && c2.nodeType !== 9 && (f2 = c2.ownerDocument);
  if (d2 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e |= 4), af(f2, a2, e, b2), g2.add(h2));
}
function af(a2, b2, c2, d2) {
  var e = Nc.get(b2);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c2 = e.bind(null, b2, c2, a2);
  e = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e = true);
  d2 ? e !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e }) : a2.addEventListener(b2, c2, true) : e !== void 0 ? a2.addEventListener(b2, c2, { passive: e }) : a2.addEventListener(b2, c2, false);
}
function jd(a2, b2, c2, d2, e) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e || k2.nodeType === 8 && k2.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e2 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k3 = td, x2 = a2;
        switch (a2) {
          case "keypress":
            if (od(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = (b2 & 4) !== 0, z2 = !w2 && a2 === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q; t2 !== null; ) {
          q = t2;
          var v2 = q.stateNode;
          q.tag === 5 && v2 !== null && (q = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e2), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k3 == null ? h3 : ue$1(k3);
            q = x2 == null ? h3 : ue$1(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e2);
            h3.target = z2;
            h3.relatedTarget = q;
            v2 = null;
            wc(e2) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e2), w2.target = q, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q = w2; q; q = gf(q))
                  t2++;
                q = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q++;
                for (; 0 < t2 - q; )
                  w2 = gf(w2), t2--;
                for (; 0 < q - t2; )
                  u2 = gf(u2), q--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && hf(g3, h3, k3, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var J = ve;
        else if (me(h3))
          if (we)
            J = Fe;
          else {
            J = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J = Ee);
        if (J && (J = J(a2, d3))) {
          ne$1(g3, J, c2, e2);
          break a;
        }
        K2 && K2(a2, h3, d3);
        a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue$1(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e2);
      }
      var Q;
      if (ae$1)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie$1 ? ge(a2, c2) && (L2 = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c2.locale !== "ko" && (ie$1 || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie$1 && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), K2 = oe$1(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c2, e2), g3.push({ event: L2, listeners: K2 }), Q ? L2.data = Q : (Q = he$1(c2), Q !== null && (L2.data = Q))));
      if (Q = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d3 }), e2.data = Q);
    }
    se$1(g3, b2);
  });
}
function ef(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$1(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e = a2, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Ob(a2, c2), f2 != null && d2.unshift(ef(a2, f2, e)), f2 = Ob(a2, b2), f2 != null && d2.push(ef(a2, f2, e)));
    a2 = a2.return;
  }
  return d2;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c2, d2, e) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k2 = Ob(c2, f2), k2 != null && g2.unshift(ef(c2, k2, h2))) : e || (k2 = Ob(c2, f2), k2 != null && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return { $$typeof: Ga, toString: a2, valueOf: a2 };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c2 = a2[wf])
            return c2;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue$1(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y$1(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a2) {
  return { current: a2 };
}
function H$1(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I$1(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {}, M$1 = Bf(Cf), N$1 = Bf(false), Df = Cf;
function Ef(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c2)
    e[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H$1(N$1);
  H$1(M$1);
}
function Hf(a2, b2, c2) {
  if (M$1.current !== Cf)
    throw Error(y$1(168));
  I$1(M$1, b2);
  I$1(N$1, c2);
}
function If(a2, b2, c2) {
  var d2 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e in d2)
    if (!(e in a2))
      throw Error(y$1(108, Ra(b2) || "Unknown", e));
  return m$1({}, c2, d2);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M$1.current;
  I$1(M$1, a2);
  I$1(N$1, N$1.current);
  return true;
}
function Kf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(y$1(169));
  c2 ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H$1(N$1), H$1(M$1), I$1(M$1, a2)) : H$1(N$1);
  I$1(N$1, c2);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O$1 = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$1(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$1(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c2) {
  a2 = fg(a2);
  return Of(a2, b2, c2);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c2 = b2[a2];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      ag = null;
    } catch (c2) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = m$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H$1(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c2 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (c2 === null || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a2.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = { context: a2, observedBits: b2, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y$1(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c2 = a2.pending;
    c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e = f2 = b2 : f2 = f2.next = b2;
    } else
      e = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a2, b2, c2, d2) {
  var e = a2.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (h2 !== null) {
    e.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (f2 !== null) {
    A2 = e.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x2 = f2;
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e.effects, h2 === null ? e.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e.lastBaseUpdate = h2, e.shared.pending = null;
    } while (1);
    n2 === null && (k2 = A2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g2;
    a2.lanes = g2;
    a2.memoizedState = A2;
  }
}
function Eg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e = d2.callback;
      if (e !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e !== "function")
          throw Error(y$1(191, e));
        e.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : m$1({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e = Ig(a2), f2 = zg(d2, e);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e, d2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e = Ig(a2), f2 = zg(d2, e);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e, d2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Hg(), d2 = Ig(a2), e = zg(c2, d2);
  e.tag = 2;
  b2 !== void 0 && b2 !== null && (e.callback = b2);
  Ag(a2, e);
  Jg(a2, d2, c2);
} };
function Lg(a2, b2, c2, d2, e, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e, f2) : true;
}
function Mg(a2, b2, c2) {
  var d2 = false, e = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e = Ff(b2) ? Df : M$1.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Ef(a2, e) : Cf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c2, d2) {
  var e = a2.stateNode;
  e.props = c2;
  e.state = a2.memoizedState;
  e.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = vg(f2) : (f2 = Ff(b2) ? Df : M$1.current, e.context = Ef(a2, f2));
  Cg(a2, c2, e, d2);
  e.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c2), e.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b2 = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b2 !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a2, c2, e, d2), e.state = a2.memoizedState);
  typeof e.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(y$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$1(147, a2));
      var e = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        a3 === null ? delete b3[e] : b3[e] = a3;
      };
      b2._stringRef = e;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y$1(284));
    if (!c2._owner)
      throw Error(y$1(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y$1(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.lastEffect;
      d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    if (b3 !== null && b3.elementType === c3.type)
      return d3 = e(b3, c3.props), d3.ref = Qg(a3, b3, c3), d3.return = a3, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Qg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e(b3, c3);
    b3.return = a3;
    return b3;
  }
  function A2(a3, b3, c3) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Qg(a3, null, b3), c3.return = a3, c3;
        case ta:
          return b3 = Wg(b3, a3.mode, c3), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p2(a3, b3, c3, d3) {
    var e2 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e2 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e2 ? c3.type === ua ? n2(a3, b3, c3.props.children, d3, e2) : k2(a3, b3, c3, d3) : null;
        case ta:
          return c3.key === e2 ? l2(a3, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return e2 !== null ? null : n2(a3, b3, c3, d3, null);
      Rg(a3, c3);
    }
    return null;
  }
  function C2(a3, b3, c3, d3, e2) {
    if (typeof d3 === "string" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e2);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case sa:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a3, d3.props.children, e2, d3.key) : k2(b3, a3, d3, e2);
        case ta:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e2);
      }
      if (Pg(d3) || La(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e2, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e2, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q = u2, u2 = null) : q = u2.sibling;
      var n3 = p2(e2, u2, h3[z2], k3);
      if (n3 === null) {
        u2 === null && (u2 = q);
        break;
      }
      a2 && u2 && n3.alternate === null && b2(e2, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q;
    }
    if (z2 === h3.length)
      return c2(e2, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e2, h3[z2], k3), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e2, u2); z2 < h3.length; z2++)
      q = C2(u2, e2, z2, h3[z2], k3), q !== null && (a2 && q.alternate !== null && u2.delete(q.key === null ? z2 : q.key), g3 = f2(q, g3, z2), t2 === null ? l3 = q : t2.sibling = q, t2 = q);
    a2 && u2.forEach(function(a3) {
      return b2(e2, a3);
    });
    return l3;
  }
  function w2(e2, g3, h3, k3) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y$1(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y$1(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q = u2, u2 = null) : q = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k3);
      if (w3 === null) {
        u2 === null && (u2 = q);
        break;
      }
      a2 && u2 && w3.alternate === null && b2(e2, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q;
    }
    if (n3.done)
      return c2(e2, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e2, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e2, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e2, z2, n3.value, k3), n3 !== null && (a2 && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a2 && u2.forEach(function(a3) {
      return b2(e2, a3);
    });
    return l3;
  }
  return function(a3, d3, f3, h3) {
    var k3 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k3 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a3, k3.sibling);
                      d3 = e(k3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a3, k3.sibling);
                      d3 = e(k3, f3.props);
                      d3.ref = Qg(a3, k3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                }
                c2(a3, k3);
                break;
              } else
                b2(a3, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case ta:
          a: {
            for (k3 = f3.key; d3 !== null; ) {
              if (d3.key === k3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Ug(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
    if (Pg(f3))
      return x2(a3, d3, f3, h3);
    if (La(f3))
      return w2(a3, d3, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k3)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$1(152, Ra(a3.type) || "Component"));
      }
    return c2(a3, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y$1(174));
  return a2;
}
function eh(a2, b2) {
  I$1(ch, b2);
  I$1(bh, a2);
  I$1(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H$1(ah);
  I$1(ah, b2);
}
function fh() {
  H$1(ah);
  H$1(bh);
  H$1(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a2.type);
  b2 !== c2 && (I$1(bh, a2), I$1(ah, c2));
}
function hh(a2) {
  bh.current === a2 && (H$1(ah), H$1(bh));
}
var P$1 = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a2, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  c2.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c2);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y$1(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R$1 = null, S$1 = null, T$1 = null, yh = false, zh = false;
function Ah() {
  throw Error(y$1(321));
}
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a2, b2, c2, d2, e, f2) {
  xh = f2;
  R$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c2(d2, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$1(301));
      f2 += 1;
      T$1 = S$1 = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c2(d2, e);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S$1 !== null && S$1.next !== null;
  xh = 0;
  T$1 = S$1 = R$1 = null;
  yh = false;
  if (b2)
    throw Error(y$1(300));
  return a2;
}
function Hh() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T$1 === null ? R$1.memoizedState = T$1 = a2 : T$1 = T$1.next = a2;
  return T$1;
}
function Ih() {
  if (S$1 === null) {
    var a2 = R$1.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S$1.next;
  var b2 = T$1 === null ? R$1.memoizedState : T$1.next;
  if (b2 !== null)
    T$1 = b2, S$1 = a2;
  else {
    if (a2 === null)
      throw Error(y$1(310));
    S$1 = a2;
    a2 = { memoizedState: S$1.memoizedState, baseState: S$1.baseState, baseQueue: S$1.baseQueue, queue: S$1.queue, next: null };
    T$1 === null ? R$1.memoizedState = T$1 = a2 : T$1 = T$1.next = a2;
  }
  return T$1;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = S$1, e = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e = f2;
    c2.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R$1.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e);
    h2 === null ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
  if (e !== null) {
    c2.pending = null;
    var g2 = e = e.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a2, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e = b2._workInProgressVersionPrimary;
  if (e !== null)
    a2 = e === d2;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a2)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$1(350));
}
function Nh(a2, b2, c2, d2) {
  var e = U$1;
  if (e === null)
    throw Error(y$1(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T$1;
  var A2 = a2.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R$1;
  a2.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g2, a3)) {
      a3 = c2(b2._source);
      He(n2, a3) || (l2(a3), a3 = Ig(w2), e.mutableReadLanes |= a3 & e.pendingLanes);
      a3 = e.mutableReadLanes;
      e.entangledLanes |= a3;
      for (var d3 = e.entanglements, h3 = a3; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a3 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a3(b2._source));
        var d3 = Ig(w2);
        e.mutableReadLanes |= d3 & e.pendingLanes;
      } catch (q) {
        c3(function() {
          throw q;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a2.dispatch = l2 = Oh.bind(null, R$1, a2), k2.queue = a2, k2.baseQueue = null, n2 = Mh(e, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a2, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a2, b2, c2);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
  a2 = a2.dispatch = Oh.bind(null, R$1, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null }, R$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c2, d2) {
  var e = Hh();
  R$1.flags |= a2;
  e.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function Vh(a2, b2, c2, d2) {
  var e = Ih();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (S$1 !== null) {
    var g2 = S$1.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R$1.flags |= a2;
  e.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c2);
}
function ai() {
}
function bi(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a2(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a2, b2, c2) {
  var d2 = Hg(), e = Ig(a2), f2 = { lane: e, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a2.alternate;
  if (a2 === R$1 || g2 !== null && g2 === R$1)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Hh();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  a2 = a2.dispatch = Oh.bind(null, R$1, a2);
  return [d2.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
  return Nh(d2, a2, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$1(355));
    }), c2 = Qh(b2)[1];
    (R$1.mode & 2) === 0 && (R$1.flags |= 516, Rh(5, function() {
      c2("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a2, b2, c2, d2) {
  b2.child = a2 === null ? Zg(b2, null, c2, d2) : Yg(b2, a2.child, c2, d2);
}
function gi(a2, b2, c2, d2, e) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e);
  d2 = Ch(a2, b2, c2, d2, f2, e);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e, hi(a2, b2, e);
  b2.flags |= 1;
  fi(a2, b2, d2, e);
  return b2.child;
}
function ii(a2, b2, c2, d2, e, f2) {
  if (a2 === null) {
    var g2 = c2.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = g2, ki(a2, b2, g2, d2, e, f2);
    a2 = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g2 = a2.child;
  if ((e & f2) === 0 && (e = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je, c2(e, d2) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c2, d2, e, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d2) && a2.ref === b2.ref)
    if (ug = false, (f2 & e) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c2, d2, f2);
}
function mi(a2, b2, c2) {
  var d2 = b2.pendingProps, e = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, f2 !== null ? f2.baseLanes : c2);
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a2, b2, e, c2);
  return b2.child;
}
function oi(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 128;
}
function li(a2, b2, c2, d2, e) {
  var f2 = Ff(c2) ? Df : M$1.current;
  f2 = Ef(b2, f2);
  tg(b2, e);
  c2 = Ch(a2, b2, c2, d2, f2, e);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e, hi(a2, b2, e);
  b2.flags |= 1;
  fi(a2, b2, c2, e);
  return b2.child;
}
function pi(a2, b2, c2, d2, e) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M$1.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N$1.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M$1.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N$1.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a2, b2, c2, d2, f2, e);
}
function qi(a2, b2, c2, d2, e, f2) {
  oi(a2, b2);
  var g2 = (b2.flags & 64) !== 0;
  if (!d2 && !g2)
    return e && Kf(b2, c2, false), hi(a2, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e && Kf(b2, c2, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a2, b2, c2) {
  var d2 = b2.pendingProps, e = P$1.current, f2 = false, g2;
  (g2 = (b2.flags & 64) !== 0) || (g2 = a2 !== null && a2.memoizedState === null ? false : (e & 2) !== 0);
  g2 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e |= 1);
  I$1(P$1, e & 1);
  if (a2 === null) {
    d2.fallback !== void 0 && ph(b2);
    a2 = d2.children;
    e = d2.fallback;
    if (f2)
      return a2 = ui(b2, a2, e, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a2;
    if (typeof d2.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c2 = vi({ mode: "visible", children: a2 }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e = a2.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c2 } : { baseLanes: e.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e = a2.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c2 } : { baseLanes: e.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a2, b2, c2, d2) {
  var e = a2.mode, f2 = a2.child;
  b2 = { mode: "hidden", children: b2 };
  (e & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e, 0, null);
  c2 = Xg(c2, e, d2, null);
  f2.return = a2;
  c2.return = a2;
  f2.sibling = c2;
  a2.child = f2;
  return c2;
}
function xi(a2, b2, c2, d2) {
  var e = a2.child;
  a2 = e.sibling;
  c2 = Tg(e, { mode: "visible", children: c2 });
  (b2.mode & 2) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c2;
}
function wi(a2, b2, c2, d2, e) {
  var f2 = b2.mode, g2 = a2.child;
  a2 = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  (f2 & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  a2 !== null ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f2, e, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c2, d2, e, f2) {
  var g2 = a2.memoizedState;
  g2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e, g2.lastEffect = f2);
}
function Ai(a2, b2, c2) {
  var d2 = b2.pendingProps, e = d2.revealOrder, f2 = d2.tail;
  fi(a2, b2, d2.children, c2);
  d2 = P$1.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c2);
          else if (a2.tag === 19)
            yi(a2, c2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  I$1(P$1, d2);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && ih(a2) === null && (e = c2), c2 = c2.sibling;
        c2 = e;
        c2 === null ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        zi(b2, false, e, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; e !== null; ) {
          a2 = e.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e;
            break;
          }
          a2 = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a2;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c2 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y$1(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c2 = Tg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c2 = c2.sibling = Tg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c2, d2) {
  var e = a2.memoizedProps;
  if (e !== d2) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e = Ya(a2, e);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "option":
        e = eb(a2, e);
        d2 = eb(a2, d2);
        f2 = [];
        break;
      case "select":
        e = m$1({}, e, { value: void 0 });
        d2 = m$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a2, e);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e)
      if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h2 = e[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e != null ? e[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
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
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H$1(N$1);
      H$1(M$1);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e = dh(ch.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c2, d2, e), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(y$1(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G$1("cancel", d2);
              G$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", d2);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G$1(Xe[a2], d2);
              break;
            case "source":
              G$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", d2);
              G$1("load", d2);
              break;
            case "details":
              G$1("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G$1("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G$1("invalid", d2);
          }
          vb(c2, f2);
          a2 = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e = f2[g2], g2 === "children" ? typeof e === "string" ? d2.textContent !== e && (a2 = ["children", e]) : typeof e === "number" && d2.textContent !== "" + e && (a2 = ["children", "" + e]) : ca.hasOwnProperty(g2) && e != null && g2 === "onScroll" && G$1("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = jf);
          }
          d2 = a2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a2 === kb.html && (a2 = lb(c2));
          a2 === kb.html ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[wf] = b2;
          a2[xf] = d2;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G$1("cancel", a2);
              G$1("close", a2);
              e = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", a2);
              e = d2;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G$1(Xe[e], a2);
              e = d2;
              break;
            case "source":
              G$1("error", a2);
              e = d2;
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", a2);
              G$1("load", a2);
              e = d2;
              break;
            case "details":
              G$1("toggle", a2);
              e = d2;
              break;
            case "input":
              Za(a2, d2);
              e = Ya(a2, d2);
              G$1("invalid", a2);
              break;
            case "option":
              e = eb(a2, d2);
              break;
            case "select":
              a2._wrapperState = { wasMultiple: !!d2.multiple };
              e = m$1({}, d2, { value: void 0 });
              G$1("invalid", a2);
              break;
            case "textarea":
              hb(a2, d2);
              e = gb(a2, d2);
              G$1("invalid", a2);
              break;
            default:
              e = d2;
          }
          vb(c2, e);
          var h2 = e;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              f2 === "style" ? tb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && G$1("scroll", a2) : k2 != null && qa(a2, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a2);
              cb(a2, d2, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d2.value != null && a2.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a2.multiple = !!d2.multiple;
              f2 = d2.value;
              f2 != null ? fb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && fb(a2, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a2.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(y$1(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H$1(P$1);
      d2 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a2.memoizedState !== null;
      if (d2 && !c2 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P$1.current & 1) !== 0)
          V$1 === 0 && (V$1 = 3);
        else {
          if (V$1 === 0 || V$1 === 3)
            V$1 = 4;
          U$1 === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U$1, W$1);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H$1(P$1);
      d2 = b2.memoizedState;
      if (d2 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g2 = d2.rendering;
      if (g2 === null)
        if (f2)
          Fi(d2, false);
        else {
          if (V$1 !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = ih(a2);
              if (g2 !== null) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d2.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                I$1(P$1, P$1.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d2.tail !== null && O$1() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g2), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O$1() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O$1(), c2.sibling = null, b2 = P$1.current, I$1(P$1, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y$1(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H$1(N$1);
      H$1(M$1);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y$1(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H$1(P$1), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H$1(P$1), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e = c2;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e };
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a2, b2);
  };
  return c2;
}
function Si(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e = b2.value;
    c2.payload = function() {
      Ni(a2, b2);
      return d2(e);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    typeof d2 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c2) {
        Wi(a2, c2);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c2 = a2.memoizedProps, d2 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$1(163));
}
function Yi(a2, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d2 = a2.create;
            a2.destroy = d2();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e = a2;
          d2 = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c2, a2), $i(c2, a2));
          a2 = d2;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c2.stateNode;
      c2.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c2.updateQueue;
      b2 !== null && Eg(c2, b2, a2);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a2 = c2.child.stateNode;
              break;
            case 1:
              a2 = c2.child.stateNode;
          }
        Eg(c2, b2, a2);
      }
      return;
    case 5:
      a2 = c2.stateNode;
      b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$1(163));
}
function aj(a2, b2) {
  for (var c2 = a2; ; ) {
    if (c2.tag === 5) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e = c2.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d2.style.display = sb("display", e);
      }
    } else if (c2.tag === 6)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a2) && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === a2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c2 = a2 = a2.next;
        do {
          var d2 = c2, e = d2.destroy;
          d2 = d2.tag;
          if (e !== void 0)
            if ((d2 & 4) !== 0)
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$1(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$1(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a2; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.flags & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a2, c2, b2) : hj(a2, c2, b2);
}
function gj(a2, b2, c2) {
  var d2 = a2.tag, e = d2 === 5 || d2 === 6;
  if (e)
    a2 = e ? a2.stateNode : a2.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c2), a2 = a2.sibling;
}
function hj(a2, b2, c2) {
  var d2 = a2.tag, e = d2 === 5 || d2 === 6;
  if (e)
    a2 = e ? a2.stateNode : a2.stateNode.instance, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c2), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c2 = b2, d2 = false, e, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (d2 === null)
            throw Error(y$1(160));
          e = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (c2.tag === 5 || c2.tag === 6) {
      a:
        for (var g2 = a2, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e.removeChild(c2.stateNode);
    } else if (c2.tag === 4) {
      if (c2.child !== null) {
        e = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a2, c2), c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
      c2.tag === 4 && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = c2 !== null ? c2.lastEffect : null;
      if (c2 !== null) {
        var d2 = c2 = c2.next;
        do
          (d2.tag & 3) === 3 && (a2 = d2.destroy, d2.destroy = void 0, a2 !== void 0 && a2()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (c2 != null) {
        d2 = b2.memoizedProps;
        var e = a2 !== null ? a2.memoizedProps : d2;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c2[xf] = d2;
          a2 === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
          wb(a2, e);
          b2 = wb(a2, d2);
          for (e = 0; e < f2.length; e += 2) {
            var g2 = f2[e], h2 = f2[e + 1];
            g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? fb(c2, !!d2.multiple, f2, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y$1(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O$1(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y$1(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X$1 = 0, U$1 = null, Y$1 = null, W$1 = 0, qj = 0, rj = Bf(0), V$1 = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O$1() + 500;
}
var Z$1 = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X$1 & 48) !== 0 ? O$1() : Fj !== -1 ? Fj : Fj = O$1();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X$1 & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$1(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c2);
  a2 === U$1 && (Hi |= b2, V$1 === 4 && Ii(a2, W$1));
  var d2 = eg();
  b2 === 1 ? (X$1 & 8) !== 0 && (X$1 & 48) === 0 ? Lj(a2) : (Mj(a2, c2), X$1 === 0 && (wj(), ig())) : ((X$1 & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c2));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Mj(a2, b2) {
  for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e = a2.pingedLanes, f2 = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k2 & d2) === 0 || (k2 & e) !== 0) {
        l2 = b2;
        Rc(k2);
        var n2 = F$1;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a2, a2 === U$1 ? W$1 : 0);
  b2 = F$1;
  if (d2 === 0)
    c2 !== null && (c2 !== Zf && Pf(c2), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c2 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    b2 === 15 ? (c2 = Lj.bind(null, a2), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a2)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X$1 & 48) !== 0)
    throw Error(y$1(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c2 = Uc(a2, a2 === U$1 ? W$1 : 0);
  if (c2 === 0)
    return null;
  var d2 = c2;
  var e = X$1;
  X$1 |= 16;
  var f2 = Pj();
  if (U$1 !== a2 || W$1 !== d2)
    wj(), Qj(a2, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X$1 = e;
  Y$1 !== null ? d2 = 0 : (U$1 = null, W$1 = 0, d2 = V$1);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d2 !== 0) {
    d2 === 2 && (X$1 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c2 = Wc(a2), c2 !== 0 && (d2 = Tj(a2, c2)));
    if (d2 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c2), Mj(a2, O$1()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$1(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O$1(), 10 < d2)) {
          if (Uc(a2, 0) !== 0)
            break;
          e = a2.suspendedLanes;
          if ((e & c2) !== c2) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d2);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a2.eventTimes;
        for (e = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e && (e = g2);
          c2 &= ~f2;
        }
        c2 = e;
        c2 = O$1() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c2);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y$1(329));
    }
  }
  Mj(a2, O$1());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a2) {
  if ((X$1 & 48) !== 0)
    throw Error(y$1(327));
  Oj();
  if (a2 === U$1 && (a2.expiredLanes & W$1) !== 0) {
    var b2 = W$1;
    var c2 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c2 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c2 = Tj(a2, b2);
  a2.tag !== 0 && c2 === 2 && (X$1 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c2 = Tj(a2, b2)));
  if (c2 === 1)
    throw c2 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O$1()), c2;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O$1());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O$1());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c2 = X$1;
  X$1 |= 1;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, X$1 === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c2 = X$1;
  X$1 &= -2;
  X$1 |= 8;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, X$1 === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I$1(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H$1(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, pf(c2));
  if (Y$1 !== null)
    for (c2 = Y$1.return; c2 !== null; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H$1(N$1);
          H$1(M$1);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H$1(P$1);
          break;
        case 19:
          H$1(P$1);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U$1 = a2;
  Y$1 = Tg(a2.current, null);
  W$1 = qj = tj = b2;
  V$1 = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R$1.memoizedState; d2 !== null; ) {
          var e = d2.queue;
          e !== null && (e.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T$1 = S$1 = R$1 = null;
      zh = false;
      pj.current = null;
      if (c2 === null || c2.return === null) {
        V$1 = 1;
        sj = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W$1;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P$1.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q = f2.pingCache;
              q === null ? (q = f2.pingCache = new Oi(), k2 = new Set(), q.set(l2, k2)) : (k2 = q.get(l2), k2 === void 0 && (k2 = new Set(), q.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V$1 !== 5 && (V$1 = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J = Pi(p2, f2, b2);
              Bg(p2, J);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y$1 === c2 && c2 !== null && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c2 = X$1;
  X$1 |= 16;
  var d2 = Pj();
  U$1 === a2 && W$1 === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a2, e);
    }
  while (1);
  qg();
  X$1 = c2;
  oj.current = d2;
  if (Y$1 !== null)
    throw Error(y$1(261));
  U$1 = null;
  W$1 = 0;
  return V$1;
}
function ak() {
  for (; Y$1 !== null; )
    bk(Y$1);
}
function Rj() {
  for (; Y$1 !== null && !Qf(); )
    bk(Y$1);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y$1 = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c2 = Gi(c2, b2, qj);
      if (c2 !== null) {
        Y$1 = c2;
        return;
      }
      c2 = b2;
      if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
        for (var d2 = 0, e = c2.child; e !== null; )
          d2 |= e.lanes | e.childLanes, e = e.sibling;
        c2.childLanes = d2;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (c2 !== null) {
        c2.flags &= 2047;
        Y$1 = c2;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (b2 !== null);
  V$1 === 0 && (V$1 = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X$1 & 48) !== 0)
    throw Error(y$1(327));
  var c2 = a2.finishedWork;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(y$1(177));
  a2.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e = d2, f2 = a2.pendingLanes & ~e;
  a2.pendingLanes = e;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e;
  a2.mutableReadLanes &= e;
  a2.entangledLanes &= e;
  e = a2.entanglements;
  for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d2 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U$1 && (Y$1 = U$1 = null, W$1 = 0);
  1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (d2 !== null) {
    e = X$1;
    X$1 |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z$1 = d2;
    do
      try {
        ek();
      } catch (va) {
        if (Z$1 === null)
          throw Error(y$1(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (Z$1 !== null);
    Ij = null;
    Z$1 = d2;
    do
      try {
        for (g2 = a2; Z$1 !== null; ) {
          var t2 = Z$1.flags;
          t2 & 16 && pb(Z$1.stateNode, "");
          if (t2 & 128) {
            var q = Z$1.alternate;
            if (q !== null) {
              var v2 = q.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z$1);
              Z$1.flags &= -3;
              break;
            case 6:
              fj(Z$1);
              Z$1.flags &= -3;
              ij(Z$1.alternate, Z$1);
              break;
            case 1024:
              Z$1.flags &= -1025;
              break;
            case 1028:
              Z$1.flags &= -1025;
              ij(Z$1.alternate, Z$1);
              break;
            case 4:
              ij(Z$1.alternate, Z$1);
              break;
            case 8:
              h2 = Z$1;
              cj(g2, h2);
              var J = h2.alternate;
              dj(h2);
              J !== null && dj(J);
          }
          Z$1 = Z$1.nextEffect;
        }
      } catch (va) {
        if (Z$1 === null)
          throw Error(y$1(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (Z$1 !== null);
    v2 = lf;
    q = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q), "selectionStart" in t2 ? (t2.selectionStart = q, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q = t2.ownerDocument || document) && q.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J : Math.min(g2.end, h2), !v2.extend && J > g2 && (h2 = g2, g2 = J, J = h2), h2 = Le(t2, J), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q = q.createRange(), q.setStart(h2.node, h2.offset), v2.removeAllRanges(), J > g2 ? (v2.addRange(q), v2.extend(f2.node, f2.offset)) : (q.setEnd(f2.node, f2.offset), v2.addRange(q))))));
      q = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q.length; t2++)
        v2 = q[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c2;
    Z$1 = d2;
    do
      try {
        for (t2 = a2; Z$1 !== null; ) {
          var K2 = Z$1.flags;
          K2 & 36 && Yi(t2, Z$1.alternate, Z$1);
          if (K2 & 128) {
            q = void 0;
            var Q = Z$1.ref;
            if (Q !== null) {
              var L2 = Z$1.stateNode;
              switch (Z$1.tag) {
                case 5:
                  q = L2;
                  break;
                default:
                  q = L2;
              }
              typeof Q === "function" ? Q(q) : Q.current = q;
            }
          }
          Z$1 = Z$1.nextEffect;
        }
      } catch (va) {
        if (Z$1 === null)
          throw Error(y$1(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (Z$1 !== null);
    Z$1 = null;
    $f();
    X$1 = e;
  } else
    a2.current = c2;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z$1 = d2; Z$1 !== null; )
      b2 = Z$1.nextEffect, Z$1.nextEffect = null, Z$1.flags & 8 && (K2 = Z$1, K2.sibling = null, K2.stateNode = null), Z$1 = b2;
  d2 = a2.pendingLanes;
  d2 === 0 && (Ti = null);
  d2 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O$1());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X$1 & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z$1 !== null; ) {
    var a2 = Z$1.alternate;
    Jj || Ij === null || ((Z$1.flags & 8) !== 0 ? dc(Z$1, Ij) && (Jj = true) : Z$1.tag === 13 && mj(a2, Z$1) && dc(Z$1, Ij) && (Jj = true));
    var b2 = Z$1.flags;
    (b2 & 256) !== 0 && Xi(a2, Z$1);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z$1 = Z$1.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X$1 & 48) !== 0)
    throw Error(y$1(331));
  var b2 = X$1;
  X$1 |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e = c2[d2], f2 = c2[d2 + 1], g2 = e.destroy;
    e.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k2) {
        if (f2 === null)
          throw Error(y$1(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e.create;
      e.destroy = h2();
    } catch (k2) {
      if (f2 === null)
        throw Error(y$1(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X$1 = b2;
  ig();
  return true;
}
function gk(a2, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c2 = a2.return; c2 !== null; ) {
      if (c2.tag === 3) {
        gk(c2, a2, b2);
        break;
      } else if (c2.tag === 1) {
        var d2 = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
          a2 = Mi(b2, a2);
          var e = Si(c2, a2, 1);
          Ag(c2, e);
          e = Hg();
          c2 = Kj(c2, 1);
          if (c2 !== null)
            $c(c2, 1, e), Mj(c2, e);
          else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  U$1 === a2 && (W$1 & c2) === c2 && (V$1 === 4 || V$1 === 3 && (W$1 & 62914560) === W$1 && 500 > O$1() - jj ? Qj(a2, 0) : uj |= c2);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c2 = a2.stateNode;
  c2 !== null && c2.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c2 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c2), Mj(a2, c2));
}
var ck;
ck = function(a2, b2, c2) {
  var d2 = b2.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || N$1.current)
      ug = true;
    else if ((c2 & d2) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e = b2.type._context;
          I$1(mg, e._currentValue);
          e._currentValue = d2;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c2 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c2);
            I$1(P$1, P$1.current & 1);
            b2 = hi(a2, b2, c2);
            return b2 !== null ? b2.sibling : null;
          }
          I$1(P$1, P$1.current & 1);
          break;
        case 19:
          d2 = (c2 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d2)
              return Ai(a2, b2, c2);
            b2.flags |= 64;
          }
          e = b2.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I$1(P$1, P$1.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c2);
      }
      return hi(a2, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e = Ef(b2, M$1.current);
      tg(b2, c2);
      e = Ch(null, b2, d2, a2, e, c2);
      b2.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b2, d2, g2, a2);
        e.updater = Kg;
        b2.stateNode = e;
        e._reactInternals = b2;
        Og(b2, d2, a2, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e, c2), b2 = b2.child;
      return b2;
    case 16:
      e = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b2.type = e;
        f2 = b2.tag = hk(e);
        a2 = lg(e, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e, a2, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e, a2, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e, a2, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e, lg(e.type, a2), d2, c2);
            break a;
        }
        throw Error(y$1(306, e, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), li(a2, b2, d2, e, c2);
    case 1:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), pi(a2, b2, d2, e, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (a2 === null || d2 === null)
        throw Error(y$1(282));
      d2 = b2.pendingProps;
      e = b2.memoizedState;
      e = e !== null ? e.element : null;
      yg(a2, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e)
        sh(), b2 = hi(a2, b2, c2);
      else {
        e = b2.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e = 0; e < a2.length; e += 2)
              f2 = a2[e], f2._workInProgressVersionPrimary = a2[e + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a2, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d2 = b2.type, e = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e.children, nf(d2, e) ? g2 = null : f2 !== null && nf(d2, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d2, c2) : fi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), gi(a2, b2, d2, e, c2);
    case 7:
      return fi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e.value;
        var h2 = b2.type._context;
        I$1(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e.children && !N$1.current) {
              b2 = hi(a2, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k2 = h2.dependencies;
              if (k2 !== null) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d2 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a2, b2, e.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e = vg(e, f2.unstable_observedBits), d2 = d2(e), b2.flags |= 1, fi(a2, b2, d2, c2), b2.child;
    case 14:
      return e = b2.type, f2 = lg(e, b2.pendingProps), f2 = lg(e.type, f2), ii(a2, b2, e, f2, d2, c2);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c2), Mg(b2, d2, e), Og(b2, d2, e, c2), qi(null, b2, d2, true, a2, c2);
    case 19:
      return Ai(a2, b2, c2);
    case 23:
      return mi(a2, b2, c2);
    case 24:
      return mi(a2, b2, c2);
  }
  throw Error(y$1(156, b2.tag));
};
function ik(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c2, d2) {
  return new ik(a2, b2, c2, d2);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = nh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Vg(a2, b2, c2, d2, e, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c2.children, e, f2, b2);
        case Ha:
          g2 = 8;
          e |= 16;
          break;
        case wa:
          g2 = 8;
          e |= 1;
          break;
        case xa:
          return a2 = nh(12, c2, b2, e | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c2, b2, e), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c2, b2, e), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c2, e, f2, b2);
        case Ja:
          return a2 = nh(24, c2, b2, e), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$1(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g2, c2, b2, e);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c2, d2) {
  a2 = nh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function vi(a2, b2, c2, d2) {
  a2 = nh(23, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  return a2;
}
function Ug(a2, b2, c2) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Wg(a2, b2, c2) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function jk(a2, b2, c2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function lk(a2, b2, c2, d2) {
  var e = b2.current, f2 = Hg(), g2 = Ig(e);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || c2.tag !== 1)
          throw Error(y$1(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y$1(171));
      }
      if (c2.tag === 1) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e, b2);
  Jg(e, g2, f2);
  return g2;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c2) {
  var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a2, b2, c2 != null && c2.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a2[ff] = c2.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++) {
      b2 = d2[a2];
      var e = b2._getVersion;
      e = e(b2._source);
      c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e] : c2.mutableSourceEagerHydrationData.push(b2, e);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a2.lastChild; )
      a2.removeChild(c2);
  return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a2, b2, c2, d2, e) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e === "function") {
      var h2 = e;
      e = function() {
        var a3 = mk(g2);
        h2.call(a3);
      };
    }
    lk(b2, g2, a2, e);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if (typeof e === "function") {
      var k2 = e;
      e = function() {
        var a3 = mk(g2);
        k2.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g2, a2, e);
    });
  }
  return mk(g2);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c2 = Ig(a2);
    Jg(a2, c2, b2);
    ok(a2, c2);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      ab(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e = Db(d2);
            if (!e)
              throw Error(y$1(90));
            Wa(d2);
            ab(d2, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c2, d2, e) {
  var f2 = X$1;
  X$1 |= 4;
  try {
    return gg(98, a2.bind(null, b2, c2, d2, e));
  } finally {
    X$1 = f2, X$1 === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X$1 & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c2 = X$1;
  X$1 |= 2;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, X$1 === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$1(200));
  return kk(a2, b2, null, c2);
}
var vk = { Events: [Cb, ue$1, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y$1(188));
    throw Error(y$1(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2, b2) {
  var c2 = X$1;
  if ((c2 & 48) !== 0)
    return a2(b2);
  X$1 |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X$1 = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a2, b2, true, c2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y$1(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$1(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y$1(38));
  return tk(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var n = reactDom.exports;
var eventemitter3 = { exports: {} };
(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = Object.create(null);
    if (!new Events().__proto__)
      prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt])
      emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn)
      emitter._events[evt].push(listener);
    else
      emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0)
      emitter._events = new Events();
    else
      delete emitter._events[evt];
  }
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0)
      return names;
    for (name in events = this._events) {
      if (has.call(events, name))
        names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers)
      return [];
    if (handlers.fn)
      return [handlers.fn];
    for (var i = 0, l2 = handlers.length, ee = new Array(l2); i < l2; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners)
      return 0;
    if (listeners.fn)
      return 1;
    return listeners.length;
  };
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j2;
      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j2 = 1, args = new Array(len - 1); j2 < len; j2++) {
                args[j2 - 1] = arguments[j2];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else
        clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt])
        clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  EventEmitter.prefixed = prefix;
  EventEmitter.EventEmitter = EventEmitter;
  {
    module.exports = EventEmitter;
  }
})(eventemitter3);
var r = eventemitter3.exports;
var fastDeepEqual = function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a2[i], b2[i]))
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a2[key], b2[key]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
};
const DEFAULT_ID = "__googleMapsScriptId";
class Loader {
  constructor({ apiKey, channel, client, id: id2 = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = "https://maps.googleapis.com/maps/api/js" }) {
    this.CALLBACK = "__googleMapsCallback";
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.version = version;
    this.apiKey = apiKey;
    this.channel = channel;
    this.client = client;
    this.id = id2 || DEFAULT_ID;
    this.libraries = libraries;
    this.language = language;
    this.region = region;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.retries = retries;
    this.url = url;
    if (Loader.instance) {
      if (!fastDeepEqual(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url
    };
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let url = this.url;
    url += `?callback=${this.CALLBACK}`;
    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }
    if (this.channel) {
      url += `&channel=${this.channel}`;
    }
    if (this.client) {
      url += `&client=${this.client}`;
    }
    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    if (this.language) {
      url += `&language=${this.language}`;
    }
    if (this.region) {
      url += `&region=${this.region}`;
    }
    if (this.version) {
      url += `&v=${this.version}`;
    }
    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }
    return url;
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err) => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  setScript() {
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const url = this.createUrl();
    const script = document.createElement("script");
    script.id = this.id;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = this.loadErrorCallback.bind(this);
    script.defer = true;
    script.async = true;
    if (this.nonce) {
      script.nonce = this.nonce;
    }
    document.head.appendChild(script);
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e) {
    this.errors.push(e);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }
  setCallback() {
    window.__googleMapsCallback = this.callback.bind(this);
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach((cb2) => {
      cb2(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.done) {
      this.callback();
    } else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      if (this.loading)
        ;
      else {
        this.loading = true;
        this.setCallback();
        this.setScript();
      }
    }
  }
}
var pointGeometry = Point;
function Point(x2, y2) {
  this.x = x2;
  this.y = y2;
}
Point.prototype = {
  clone: function() {
    return new Point(this.x, this.y);
  },
  add: function(p2) {
    return this.clone()._add(p2);
  },
  sub: function(p2) {
    return this.clone()._sub(p2);
  },
  multByPoint: function(p2) {
    return this.clone()._multByPoint(p2);
  },
  divByPoint: function(p2) {
    return this.clone()._divByPoint(p2);
  },
  mult: function(k2) {
    return this.clone()._mult(k2);
  },
  div: function(k2) {
    return this.clone()._div(k2);
  },
  rotate: function(a2) {
    return this.clone()._rotate(a2);
  },
  rotateAround: function(a2, p2) {
    return this.clone()._rotateAround(a2, p2);
  },
  matMult: function(m2) {
    return this.clone()._matMult(m2);
  },
  unit: function() {
    return this.clone()._unit();
  },
  perp: function() {
    return this.clone()._perp();
  },
  round: function() {
    return this.clone()._round();
  },
  mag: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  equals: function(other) {
    return this.x === other.x && this.y === other.y;
  },
  dist: function(p2) {
    return Math.sqrt(this.distSqr(p2));
  },
  distSqr: function(p2) {
    var dx = p2.x - this.x, dy = p2.y - this.y;
    return dx * dx + dy * dy;
  },
  angle: function() {
    return Math.atan2(this.y, this.x);
  },
  angleTo: function(b2) {
    return Math.atan2(this.y - b2.y, this.x - b2.x);
  },
  angleWith: function(b2) {
    return this.angleWithSep(b2.x, b2.y);
  },
  angleWithSep: function(x2, y2) {
    return Math.atan2(this.x * y2 - this.y * x2, this.x * x2 + this.y * y2);
  },
  _matMult: function(m2) {
    var x2 = m2[0] * this.x + m2[1] * this.y, y2 = m2[2] * this.x + m2[3] * this.y;
    this.x = x2;
    this.y = y2;
    return this;
  },
  _add: function(p2) {
    this.x += p2.x;
    this.y += p2.y;
    return this;
  },
  _sub: function(p2) {
    this.x -= p2.x;
    this.y -= p2.y;
    return this;
  },
  _mult: function(k2) {
    this.x *= k2;
    this.y *= k2;
    return this;
  },
  _div: function(k2) {
    this.x /= k2;
    this.y /= k2;
    return this;
  },
  _multByPoint: function(p2) {
    this.x *= p2.x;
    this.y *= p2.y;
    return this;
  },
  _divByPoint: function(p2) {
    this.x /= p2.x;
    this.y /= p2.y;
    return this;
  },
  _unit: function() {
    this._div(this.mag());
    return this;
  },
  _perp: function() {
    var y2 = this.y;
    this.y = this.x;
    this.x = -y2;
    return this;
  },
  _rotate: function(angle) {
    var cos = Math.cos(angle), sin = Math.sin(angle), x2 = cos * this.x - sin * this.y, y2 = sin * this.x + cos * this.y;
    this.x = x2;
    this.y = y2;
    return this;
  },
  _rotateAround: function(angle, p2) {
    var cos = Math.cos(angle), sin = Math.sin(angle), x2 = p2.x + cos * (this.x - p2.x) - sin * (this.y - p2.y), y2 = p2.y + sin * (this.x - p2.x) + cos * (this.y - p2.y);
    this.x = x2;
    this.y = y2;
    return this;
  },
  _round: function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
};
Point.convert = function(a2) {
  if (a2 instanceof Point) {
    return a2;
  }
  if (Array.isArray(a2)) {
    return new Point(a2[0], a2[1]);
  }
  return a2;
};
function a() {
  return (a = Object.assign || function(e) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var o2 = arguments[t2];
      for (var n2 in o2)
        Object.prototype.hasOwnProperty.call(o2, n2) && (e[n2] = o2[n2]);
    }
    return e;
  }).apply(this, arguments);
}
function p(e, t2) {
  e.prototype = Object.create(t2.prototype), e.prototype.constructor = e, e.__proto__ = t2;
}
function l(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var u = { width: "100%", height: "100%", left: 0, top: 0, margin: 0, padding: 0, position: "absolute" }, h = function(t2) {
  function o2() {
    return t2.apply(this, arguments) || this;
  }
  p(o2, t2);
  var n2 = o2.prototype;
  return n2.shouldComponentUpdate = function() {
    return false;
  }, n2.render = function() {
    return React.createElement("div", { ref: this.props.registerChild, style: u });
  }, o2;
}(react.exports.Component), c = function(e) {
  function t2(t3) {
    var o3;
    return (o3 = e.call(this) || this).gmapInstance = t3, o3;
  }
  p(t2, e);
  var o2 = t2.prototype;
  return o2.getChildren = function() {
    return this.gmapInstance.props.children;
  }, o2.getMousePosition = function() {
    return this.gmapInstance.mouse_;
  }, o2.getUpdateCounter = function() {
    return this.gmapInstance.updateCounter_;
  }, o2.dispose = function() {
    this.gmapInstance = null, this.removeAllListeners();
  }, t2;
}(r), d = function(e, t2) {
  for (var o2 = a({}, e), n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2 in o2 && delete o2[r2];
  }
  return o2;
}, m = Object.prototype.hasOwnProperty;
function g(e, t2) {
  return e === t2 ? e !== 0 || t2 !== 0 || 1 / e == 1 / t2 : e != e && t2 != t2;
}
function _(e, t2) {
  if (g(e, t2))
    return true;
  if (typeof e != "object" || e === null || typeof t2 != "object" || t2 === null)
    return false;
  var o2 = Object.keys(e), n2 = Object.keys(t2);
  if (o2.length !== n2.length)
    return false;
  for (var r2 = 0; r2 < o2.length; r2++)
    if (!m.call(t2, o2[r2]) || !g(e[o2[r2]], t2[o2[r2]]))
      return false;
  return true;
}
var f = { width: "100%", height: "100%", left: 0, top: 0, margin: 0, padding: 0, position: "absolute" }, v = { width: 0, height: 0, left: 0, top: 0, backgroundColor: "transparent", position: "absolute" }, M = function(t2) {
  function o2(o3) {
    var n3;
    return (n3 = t2.call(this, o3) || this)._getState = function() {
      return { children: n3.props.dispatcher.getChildren(), updateCounter: n3.props.dispatcher.getUpdateCounter() };
    }, n3._onChangeHandler = function() {
      if (n3.dimensionsCache_) {
        var e = (n3.state.children || []).length, t3 = n3._getState();
        n3.setState(t3, function() {
          return (t3.children || []).length !== e && n3._onMouseChangeHandler();
        });
      }
    }, n3._onChildClick = function() {
      n3.props.onChildClick && n3.hoverChildProps_ && n3.props.onChildClick(n3.hoverKey_, n3.hoverChildProps_);
    }, n3._onChildMouseDown = function() {
      n3.props.onChildMouseDown && n3.hoverChildProps_ && n3.props.onChildMouseDown(n3.hoverKey_, n3.hoverChildProps_);
    }, n3._onChildMouseEnter = function(e, t3) {
      n3.dimensionsCache_ && (n3.props.onChildMouseEnter && n3.props.onChildMouseEnter(e, t3), n3.hoverChildProps_ = t3, n3.hoverKey_ = e, n3.setState({ hoverKey: e }));
    }, n3._onChildMouseLeave = function() {
      if (n3.dimensionsCache_) {
        var e = n3.hoverKey_;
        e != null && (n3.props.onChildMouseLeave && n3.props.onChildMouseLeave(e, n3.hoverChildProps_), n3.hoverKey_ = null, n3.hoverChildProps_ = null, n3.setState({ hoverKey: null }));
      }
    }, n3._onMouseAllow = function(e) {
      e || n3._onChildMouseLeave(), n3.allowMouse_ = e;
    }, n3._onMouseChangeHandler = function() {
      n3.allowMouse_ && n3._onMouseChangeHandlerRaf();
    }, n3._onMouseChangeHandlerRaf = function() {
      if (n3.dimensionsCache_) {
        var t3 = n3.props.dispatcher.getMousePosition();
        if (t3) {
          var o4 = [], r2 = n3.props.getHoverDistance();
          if (React.Children.forEach(n3.state.children, function(e, i2) {
            if (e && (e.props.latLng !== void 0 || e.props.lat !== void 0 || e.props.lng !== void 0)) {
              var s2 = e.key != null ? e.key : i2, a2 = n3.props.distanceToMouse(n3.dimensionsCache_[s2], t3, e.props);
              a2 < r2 && o4.push({ key: s2, dist: a2, props: e.props });
            }
          }), o4.length) {
            o4.sort(function(e, t4) {
              return e.dist - t4.dist;
            });
            var i = o4[0].key, s = o4[0].props;
            n3.hoverKey_ !== i && (n3._onChildMouseLeave(), n3._onChildMouseEnter(i, s));
          } else
            n3._onChildMouseLeave();
        } else
          n3._onChildMouseLeave();
      }
    }, n3._getDimensions = function(e) {
      return n3.dimensionsCache_[e];
    }, n3.dimensionsCache_ = {}, n3.hoverKey_ = null, n3.hoverChildProps_ = null, n3.allowMouse_ = true, n3.state = a({}, n3._getState(), { hoverKey: null }), n3;
  }
  p(o2, t2);
  var n2 = o2.prototype;
  return n2.componentDidMount = function() {
    this.props.dispatcher.on("kON_CHANGE", this._onChangeHandler), this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE", this._onMouseChangeHandler), this.props.dispatcher.on("kON_CLICK", this._onChildClick), this.props.dispatcher.on("kON_MDOWN", this._onChildMouseDown);
  }, n2.shouldComponentUpdate = function(e, t3) {
    return this.props.experimental === true ? !_(this.props, e) || !_(d(this.state, ["hoverKey"]), d(t3, ["hoverKey"])) : !_(this.props, e) || !_(this.state, t3);
  }, n2.componentWillUnmount = function() {
    this.props.dispatcher.removeListener("kON_CHANGE", this._onChangeHandler), this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE", this._onMouseChangeHandler), this.props.dispatcher.removeListener("kON_CLICK", this._onChildClick), this.props.dispatcher.removeListener("kON_MDOWN", this._onChildMouseDown), this.dimensionsCache_ = null;
  }, n2.render = function() {
    var t3 = this, o3 = this.props.style || f;
    this.dimensionsCache_ = {};
    var n3 = React.Children.map(this.state.children, function(o4, n4) {
      if (o4) {
        if (o4.props.latLng === void 0 && o4.props.lat === void 0 && o4.props.lng === void 0)
          return React.cloneElement(o4, { $geoService: t3.props.geoService, $onMouseAllow: t3._onMouseAllow, $prerender: t3.props.prerender });
        var r2 = o4.props.latLng !== void 0 ? o4.props.latLng : { lat: o4.props.lat, lng: o4.props.lng }, i = t3.props.insideMapPanes ? t3.props.geoService.fromLatLngToDivPixel(r2) : t3.props.geoService.fromLatLngToCenterPixel(r2), s = { left: i.x, top: i.y };
        if (o4.props.seLatLng !== void 0 || o4.props.seLat !== void 0 && o4.props.seLng !== void 0) {
          var p2 = o4.props.seLatLng !== void 0 ? o4.props.seLatLng : { lat: o4.props.seLat, lng: o4.props.seLng }, l2 = t3.props.insideMapPanes ? t3.props.geoService.fromLatLngToDivPixel(p2) : t3.props.geoService.fromLatLngToCenterPixel(p2);
          s.width = l2.x - i.x, s.height = l2.y - i.y;
        }
        var u2 = t3.props.geoService.fromLatLngToContainerPixel(r2), h2 = o4.key != null ? o4.key : n4;
        return t3.dimensionsCache_[h2] = a({ x: u2.x, y: u2.y }, r2), React.createElement("div", { key: h2, style: a({}, v, s), className: o4.props.$markerHolderClassName }, React.cloneElement(o4, { $hover: h2 === t3.state.hoverKey, $getDimensions: t3._getDimensions, $dimensionKey: h2, $geoService: t3.props.geoService, $onMouseAllow: t3._onMouseAllow, $prerender: t3.props.prerender }));
      }
    });
    return React.createElement("div", { style: o3 }, n3);
  }, o2;
}(react.exports.Component);
M.propTypes = { geoService: o.any, style: o.any, distanceToMouse: o.func, dispatcher: o.any, onChildClick: o.func, onChildMouseDown: o.func, onChildMouseLeave: o.func, onChildMouseEnter: o.func, getHoverDistance: o.func, insideMapPanes: o.bool, prerender: o.bool }, M.defaultProps = { insideMapPanes: false, prerender: false };
var y = { width: "50%", height: "50%", left: "50%", top: "50%", margin: 0, padding: 0, position: "absolute" };
function C(t2) {
  return React.createElement("div", { style: y }, React.createElement(M, a({}, t2, { prerender: true })));
}
var w, L, b, D = new Promise(function(e) {
  b = e;
}), z = function(e, t2) {
  if (!e)
    return D;
  if (L)
    return L;
  e.libraries || (e.libraries = []);
  var o2 = [].concat(e.libraries);
  if (t2 && (o2.length !== 0 && o2.includes("visualization") || o2.push("visualization"), console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")), false)
    ;
  if (typeof window == "undefined")
    throw new Error("google map cannot be loaded outside browser env");
  var r2 = e.key, s = function(e2, t3) {
    if (e2 == null)
      return {};
    var o3, n2, r3 = {}, i = Object.keys(e2);
    for (n2 = 0; n2 < i.length; n2++)
      t3.indexOf(o3 = i[n2]) >= 0 || (r3[o3] = e2[o3]);
    return r3;
  }(e, ["key"]);
  return w || (w = new Loader(a({ apiKey: r2 || "" }, s, { libraries: o2 }))), L = w.load().then(function() {
    return b(window.google.maps), window.google.maps;
  }), b(L), L;
};
function k(e, t2, o2) {
  var n2 = o2 - t2;
  return e === o2 ? e : ((e - t2) % n2 + n2) % n2 + t2;
}
var O = function() {
  function e(e2, t2) {
    if (isNaN(e2) || isNaN(t2))
      throw new Error("Invalid LatLng object: (" + e2 + ", " + t2 + ")");
    this.lat = +e2, this.lng = +t2;
  }
  return e.prototype.wrap = function() {
    return new e(this.lat, k(this.lng, -180, 180));
  }, e;
}();
O.convert = function(e) {
  return e instanceof O ? e : Array.isArray(e) ? new O(e[0], e[1]) : "lng" in e && "lat" in e ? new O(e.lat, e.lng) : e;
};
var x = function() {
  function e(e2, t3, o3) {
    this.tileSize = e2 || 512, this._minZoom = t3 || 0, this._maxZoom = o3 || 52, this.latRange = [-85.05113, 85.05113], this.width = 0, this.height = 0, this.zoom = 0, this.center = new O(0, 0), this.angle = 0;
  }
  var t2, o2 = e.prototype;
  return o2.zoomScale = function(e2) {
    return Math.pow(2, e2);
  }, o2.scaleZoom = function(e2) {
    return Math.log(e2) / Math.LN2;
  }, o2.project = function(e2, t3) {
    return new pointGeometry(this.lngX(e2.lng, t3), this.latY(e2.lat, t3));
  }, o2.unproject = function(e2, t3) {
    return new O(this.yLat(e2.y, t3), this.xLng(e2.x, t3));
  }, o2.lngX = function(e2, t3) {
    return (180 + e2) * (t3 || this.worldSize) / 360;
  }, o2.latY = function(e2, t3) {
    return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e2 * Math.PI / 360))) * (t3 || this.worldSize) / 360;
  }, o2.xLng = function(e2, t3) {
    return 360 * e2 / (t3 || this.worldSize) - 180;
  }, o2.yLat = function(e2, t3) {
    return 360 / Math.PI * Math.atan(Math.exp((180 - 360 * e2 / (t3 || this.worldSize)) * Math.PI / 180)) - 90;
  }, o2.locationPoint = function(e2) {
    var t3 = this.project(e2);
    return this.centerPoint._sub(this.point._sub(t3)._rotate(this.angle));
  }, o2.pointLocation = function(e2) {
    var t3 = this.centerPoint._sub(e2)._rotate(-this.angle);
    return this.unproject(this.point.sub(t3));
  }, (t2 = [{ key: "minZoom", get: function() {
    return this._minZoom;
  }, set: function(e2) {
    this._minZoom = e2, this.zoom = Math.max(this.zoom, e2);
  } }, { key: "maxZoom", get: function() {
    return this._maxZoom;
  }, set: function(e2) {
    this._maxZoom = e2, this.zoom = Math.min(this.zoom, e2);
  } }, { key: "worldSize", get: function() {
    return this.tileSize * this.scale;
  } }, { key: "centerPoint", get: function() {
    return new pointGeometry(0, 0);
  } }, { key: "size", get: function() {
    return new pointGeometry(this.width, this.height);
  } }, { key: "bearing", get: function() {
    return -this.angle / Math.PI * 180;
  }, set: function(e2) {
    this.angle = -k(e2, -180, 180) * Math.PI / 180;
  } }, { key: "zoom", get: function() {
    return this._zoom;
  }, set: function(e2) {
    var t3 = Math.min(Math.max(e2, this.minZoom), this.maxZoom);
    this._zoom = t3, this.scale = this.zoomScale(t3), this.tileZoom = Math.floor(t3), this.zoomFraction = t3 - this.tileZoom;
  } }, { key: "x", get: function() {
    return this.lngX(this.center.lng);
  } }, { key: "y", get: function() {
    return this.latY(this.center.lat);
  } }, { key: "point", get: function() {
    return new pointGeometry(this.x, this.y);
  } }]) && function(e2, t3) {
    for (var o3 = 0; o3 < t3.length; o3++) {
      var n2 = t3[o3];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }(e.prototype, t2), e;
}(), T = function() {
  function e(e2) {
    this.hasSize_ = false, this.hasView_ = false, this.transform_ = new x(e2 || 512);
  }
  var t2 = e.prototype;
  return t2.setView = function(e2, t3, o2) {
    this.transform_.center = O.convert(e2), this.transform_.zoom = +t3, this.transform_.bearing = +o2, this.hasView_ = true;
  }, t2.setViewSize = function(e2, t3) {
    this.transform_.width = e2, this.transform_.height = t3, this.hasSize_ = true;
  }, t2.setMapCanvasProjection = function(e2, t3) {
    this.maps_ = e2, this.mapCanvasProjection_ = t3;
  }, t2.canProject = function() {
    return this.hasSize_ && this.hasView_;
  }, t2.hasSize = function() {
    return this.hasSize_;
  }, t2.fromLatLngToCenterPixel = function(e2) {
    return this.transform_.locationPoint(O.convert(e2));
  }, t2.fromLatLngToDivPixel = function(e2) {
    if (this.mapCanvasProjection_) {
      var t3 = new this.maps_.LatLng(e2.lat, e2.lng);
      return this.mapCanvasProjection_.fromLatLngToDivPixel(t3);
    }
    return this.fromLatLngToCenterPixel(e2);
  }, t2.fromLatLngToContainerPixel = function(e2) {
    if (this.mapCanvasProjection_) {
      var t3 = new this.maps_.LatLng(e2.lat, e2.lng);
      return this.mapCanvasProjection_.fromLatLngToContainerPixel(t3);
    }
    var o2 = this.fromLatLngToCenterPixel(e2);
    return o2.x -= this.transform_.worldSize * Math.round(o2.x / this.transform_.worldSize), o2.x += this.transform_.width / 2, o2.y += this.transform_.height / 2, o2;
  }, t2.fromContainerPixelToLatLng = function(e2) {
    if (this.mapCanvasProjection_) {
      var t3 = this.mapCanvasProjection_.fromContainerPixelToLatLng(e2);
      return { lat: t3.lat(), lng: t3.lng() };
    }
    var o2 = a({}, e2);
    o2.x -= this.transform_.width / 2, o2.y -= this.transform_.height / 2;
    var n2 = this.transform_.pointLocation(pointGeometry.convert(o2));
    return n2.lng -= 360 * Math.round(n2.lng / 360), n2;
  }, t2.getWidth = function() {
    return this.transform_.width;
  }, t2.getHeight = function() {
    return this.transform_.height;
  }, t2.getZoom = function() {
    return this.transform_.zoom;
  }, t2.getCenter = function() {
    return this.transform_.pointLocation({ x: 0, y: 0 });
  }, t2.getBounds = function(e2, t3) {
    var o2 = e2 && e2[0] || 0, n2 = e2 && e2[1] || 0, r2 = e2 && e2[2] || 0, i = e2 && e2[3] || 0;
    if (this.getWidth() - n2 - i > 0 && this.getHeight() - o2 - r2 > 0) {
      var a2 = this.transform_.pointLocation(pointGeometry.convert({ x: i - this.getWidth() / 2, y: o2 - this.getHeight() / 2 })), p2 = this.transform_.pointLocation(pointGeometry.convert({ x: this.getWidth() / 2 - n2, y: this.getHeight() / 2 - r2 })), l2 = [a2.lat, a2.lng, p2.lat, p2.lng, p2.lat, a2.lng, a2.lat, p2.lng];
      return t3 && (l2 = l2.map(function(e3) {
        return Math.round(e3 * t3) / t3;
      })), l2;
    }
    return [0, 0, 0, 0];
  }, e;
}();
function S(e) {
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame(e);
  var t2 = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  return t2 ? t2(e) : window.setTimeout(e, 1e3 / 60);
}
var E = Math.log2 ? Math.log2 : function(e) {
  return Math.log(e) / Math.LN2;
};
function P(e, t2) {
  return Object.keys(e).reduce(function(o2, n2) {
    return t2(e[n2]) && (o2[n2] = e[n2]), o2;
  }, {});
}
var A = function(e) {
  if (e !== null && typeof e == "object") {
    if (Object.keys(e).length === 0)
      return true;
  } else if (e == null || e === "")
    return true;
  return false;
}, I = Object.prototype.toString;
function N(e) {
  return typeof e == "number" || function(e2) {
    return !!e2 && typeof e2 == "object";
  }(e) && I.call(e) === "[object Number]";
}
var Z = null;
function j() {
  if (Z)
    return Z;
  if (typeof navigator != "undefined") {
    var e = navigator.userAgent.indexOf("MSIE") > -1, t2 = navigator.userAgent.indexOf("Firefox") > -1, o2 = navigator.userAgent.toLowerCase().indexOf("op") > -1, n2 = navigator.userAgent.indexOf("Chrome") > -1, r2 = navigator.userAgent.indexOf("Safari") > -1;
    return n2 && r2 && (r2 = false), n2 && o2 && (n2 = false), Z = { isExplorer: e, isFirefox: t2, isOpera: o2, isChrome: n2, isSafari: r2 };
  }
  return Z = { isChrome: true, isExplorer: false, isFirefox: false, isOpera: false, isSafari: false };
}
var U = function(e) {
  return Function.prototype.toString.call(e);
};
function H(e) {
  if (!e || typeof e != "object")
    return false;
  var t2 = typeof e.constructor == "function" ? Object.getPrototypeOf(e) : Object.prototype;
  if (t2 === null)
    return true;
  var o2 = t2.constructor;
  return typeof o2 == "function" && o2 instanceof o2 && U(o2) === U(Object);
}
function K(e, t2, o2, n2) {
  e.addEventListener(t2, o2, function() {
    var e2 = false;
    try {
      var t3 = Object.defineProperty({}, "passive", { get: function() {
        e2 = true;
      } });
      window.addEventListener("test", t3, t3), window.removeEventListener("test", t3, t3);
    } catch (t4) {
      e2 = false;
    }
    return e2;
  }() ? { capture: n2, passive: true } : n2);
}
var R, G = !(typeof window == "undefined" || !window.document || !window.document.createElement);
R = G ? window : typeof self != "undefined" ? self : void 0;
var B, W = typeof document != "undefined" && document.attachEvent, V = false;
if (G && !W) {
  var F = function() {
    var e = R.requestAnimationFrame || R.mozRequestAnimationFrame || R.webkitRequestAnimationFrame || function(e2) {
      return R.setTimeout(e2, 20);
    };
    return function(t2) {
      return e(t2);
    };
  }(), $ = (B = R.cancelAnimationFrame || R.mozCancelAnimationFrame || R.webkitCancelAnimationFrame || R.clearTimeout, function(e) {
    return B(e);
  }), q = function(e) {
    var t2 = e.__resizeTriggers__, o2 = t2.firstElementChild, n2 = t2.lastElementChild, r2 = o2.firstElementChild;
    n2.scrollLeft = n2.scrollWidth, n2.scrollTop = n2.scrollHeight, r2.style.width = o2.offsetWidth + 1 + "px", r2.style.height = o2.offsetHeight + 1 + "px", o2.scrollLeft = o2.scrollWidth, o2.scrollTop = o2.scrollHeight;
  }, Y = function(e) {
    var t2 = this;
    q(this), this.__resizeRAF__ && $(this.__resizeRAF__), this.__resizeRAF__ = F(function() {
      (function(e2) {
        return e2.offsetWidth != e2.__resizeLast__.width || e2.offsetHeight != e2.__resizeLast__.height;
      })(t2) && (t2.__resizeLast__.width = t2.offsetWidth, t2.__resizeLast__.height = t2.offsetHeight, t2.__resizeListeners__.forEach(function(o2) {
        o2.call(t2, e);
      }));
    });
  }, X = false, J = "", Q = "animationstart", ee = "Webkit Moz O ms".split(" "), te = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
  if (G) {
    var oe = document.createElement("fakeelement");
    if (oe.style.animationName !== void 0 && (X = true), X === false) {
      for (var ne = 0; ne < ee.length; ne++)
        if (oe.style[ee[ne] + "AnimationName"] !== void 0) {
          J = "-" + ee[ne].toLowerCase() + "-", Q = te[ne], X = true;
          break;
        }
    }
  }
  var re = "resizeanim", ie = "@" + J + "keyframes " + re + " { from { opacity: 0; } to { opacity: 0; } } ", se = J + "animation: 1ms " + re + "; ";
}
var ae = n.createPortal !== void 0, pe = ae ? n.createPortal : n.unstable_renderSubtreeIntoContainer, le = function(e) {
  return H(e) ? e : { lat: e[0], lng: e[1] };
}, ue = function(e, t2) {
  return t2 < e ? e : t2;
}, he = function(t2) {
  function o2(o3) {
    var r3;
    if ((r3 = t2.call(this, o3) || this)._getMinZoom = function() {
      if (r3.geoService_.getWidth() > 0 || r3.geoService_.getHeight() > 0) {
        var e = Math.ceil(r3.geoService_.getWidth() / 256) + 2, t3 = Math.ceil(r3.geoService_.getHeight() / 256) + 2, o4 = Math.max(e, t3);
        return Math.ceil(E(o4));
      }
      return 3;
    }, r3._computeMinZoom = function(e) {
      return A(e) ? r3._getMinZoom() : e;
    }, r3._mapDomResizeCallback = function() {
      if (r3.resetSizeOnIdle_ = true, r3.maps_) {
        var e = r3.props.center || r3.props.defaultCenter, t3 = r3.map_.getCenter();
        r3.maps_.event.trigger(r3.map_, "resize"), r3.map_.setCenter(r3.props.resetBoundsOnResize ? e : t3);
      }
    }, r3._setLayers = function(e) {
      e.forEach(function(e2) {
        r3.layers_[e2] = new r3.maps_[e2](), r3.layers_[e2].setMap(r3.map_);
      });
    }, r3._renderPortal = function() {
      return React.createElement(M, { experimental: r3.props.experimental, onChildClick: r3._onChildClick, onChildMouseDown: r3._onChildMouseDown, onChildMouseEnter: r3._onChildMouseEnter, onChildMouseLeave: r3._onChildMouseLeave, geoService: r3.geoService_, insideMapPanes: true, distanceToMouse: r3.props.distanceToMouse, getHoverDistance: r3._getHoverDistance, dispatcher: r3.markersDispatcher_ });
    }, r3._initMap = function() {
      if (!r3.initialized_) {
        r3.initialized_ = true;
        var e = le(r3.props.center || r3.props.defaultCenter);
        r3.geoService_.setView(e, r3.props.zoom || r3.props.defaultZoom, 0), r3._onBoundsChanged();
        var t3 = a({}, r3.props.apiKey && { key: r3.props.apiKey }, r3.props.bootstrapURLKeys);
        r3.props.googleMapLoader(t3, r3.props.heatmapLibrary).then(function(e2) {
          if (r3.mounted_) {
            var t4, o4, i2 = r3.geoService_.getCenter(), s = { zoom: r3.props.zoom || r3.props.defaultZoom, center: new e2.LatLng(i2.lat, i2.lng) };
            r3.props.heatmap.positions && (Object.assign(l(r3), { heatmap: (t4 = e2, o4 = r3.props.heatmap, new t4.visualization.HeatmapLayer({ data: o4.positions.reduce(function(e3, o5) {
              var n2 = o5.weight, r4 = n2 === void 0 ? 1 : n2;
              return e3.push({ location: new t4.LatLng(o5.lat, o5.lng), weight: r4 }), e3;
            }, []) })) }), function(e3, t5) {
              var o5 = t5.options, n2 = o5 === void 0 ? {} : o5;
              Object.keys(n2).map(function(t6) {
                return e3.set(t6, n2[t6]);
              });
            }(r3.heatmap, r3.props.heatmap));
            var p2 = P(e2, H), u2 = typeof r3.props.options == "function" ? r3.props.options(p2) : r3.props.options, h2 = !A(r3.props.draggable) && { draggable: r3.props.draggable }, c2 = r3._computeMinZoom(u2.minZoom);
            r3.minZoom_ = c2;
            var d2 = a({}, { overviewMapControl: false, streetViewControl: false, rotateControl: true, mapTypeControl: false, styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }], minZoom: 3 }, { minZoom: c2 }, u2, s);
            r3.defaultDraggableOption_ = A(d2.draggable) ? r3.defaultDraggableOption_ : d2.draggable;
            var m2 = a({}, d2, h2);
            m2.minZoom = ue(m2.minZoom, c2);
            var g2 = new e2.Map(n.findDOMNode(r3.googleMapDom_), m2);
            r3.map_ = g2, r3.maps_ = e2, r3._setLayers(r3.props.layerTypes);
            var _2 = e2.version.match(/^3\.(\d+)\./), f2 = _2 && Number(_2[1]), v2 = l(r3), M2 = Object.assign(new e2.OverlayView(), { onAdd: function() {
              var t5 = typeof screen != "undefined" ? screen.width + "px" : "2000px", o5 = typeof screen != "undefined" ? screen.height + "px" : "2000px", n2 = document.createElement("div");
              if (n2.style.backgroundColor = "transparent", n2.style.position = "absolute", n2.style.left = "0px", n2.style.top = "0px", n2.style.width = t5, n2.style.height = o5, v2.props.overlayViewDivStyle) {
                var r4 = v2.props.overlayViewDivStyle;
                typeof r4 == "object" && Object.keys(r4).forEach(function(e3) {
                  n2.style[e3] = r4[e3];
                });
              }
              this.getPanes().overlayMouseTarget.appendChild(n2), v2.geoService_.setMapCanvasProjection(e2, M2.getProjection()), ae ? v2.setState({ overlay: n2 }) : pe(v2, v2._renderPortal(), n2, function() {
                return v2.setState({ overlay: n2 });
              });
            }, onRemove: function() {
              var e3 = v2.state.overlay;
              e3 && !ae && n.unmountComponentAtNode(e3), v2.setState({ overlay: null });
            }, draw: function() {
              if (v2.updateCounter_++, v2._onBoundsChanged(g2, e2, !v2.props.debounced), v2.googleApiLoadedCalled_ || (v2._onGoogleApiLoaded({ map: g2, maps: e2, ref: v2.googleMapDom_ }), v2.googleApiLoadedCalled_ = true), v2.mouse_) {
                var t5 = v2.geoService_.fromContainerPixelToLatLng(v2.mouse_);
                v2.mouse_.lat = t5.lat, v2.mouse_.lng = t5.lng;
              }
              v2._onChildMouseMove(), v2.markersDispatcher_ && (v2.markersDispatcher_.emit("kON_CHANGE"), v2.fireMouseEventOnIdle_ && v2.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"));
            } });
            r3.overlay_ = M2, M2.setMap(g2), r3.props.heatmap.positions && r3.heatmap.setMap(g2), r3.props.onTilesLoaded && e2.event.addListener(g2, "tilesloaded", function() {
              v2._onTilesLoaded();
            }), e2.event.addListener(g2, "zoom_changed", function() {
              v2.geoService_.getZoom() !== g2.getZoom() && (v2.zoomAnimationInProgress_ || (v2.zoomAnimationInProgress_ = true, v2._onZoomAnimationStart(g2.zoom)), f2 < 32) && (new Date().getTime() - r3.zoomControlClickTime_ < 300 ? S(function() {
                return S(function() {
                  v2.updateCounter_++, v2._onBoundsChanged(g2, e2);
                });
              }) : (v2.updateCounter_++, v2._onBoundsChanged(g2, e2)));
            }), e2.event.addListener(g2, "idle", function() {
              if (r3.resetSizeOnIdle_) {
                r3._setViewSize();
                var t5 = r3._computeMinZoom(u2.minZoom);
                t5 !== r3.minZoom_ && (r3.minZoom_ = t5, g2.setOptions({ minZoom: t5 })), r3.resetSizeOnIdle_ = false;
              }
              v2.zoomAnimationInProgress_ && (v2.zoomAnimationInProgress_ = false, v2._onZoomAnimationEnd(g2.zoom)), v2.updateCounter_++, v2._onBoundsChanged(g2, e2), v2.dragTime_ = 0, v2.markersDispatcher_ && v2.markersDispatcher_.emit("kON_CHANGE");
            }), e2.event.addListener(g2, "mouseover", function() {
              v2.mouseInMap_ = true;
            }), e2.event.addListener(g2, "click", function() {
              v2.mouseInMap_ = true;
            }), e2.event.addListener(g2, "mouseout", function() {
              v2.mouseInMap_ = false, v2.mouse_ = null, v2.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE");
            }), e2.event.addListener(g2, "drag", function() {
              v2.dragTime_ = new Date().getTime(), v2._onDrag(g2);
            }), e2.event.addListener(g2, "dragend", function() {
              var t5 = e2.event.addListener(g2, "idle", function() {
                e2.event.removeListener(t5), v2._onDragEnd(g2);
              });
            }), e2.event.addListener(g2, "maptypeid_changed", function() {
              v2._onMapTypeIdChange(g2.getMapTypeId());
            });
          }
        }).catch(function(e2) {
          throw r3._onGoogleApiLoaded({ map: null, maps: null, ref: r3.googleMapDom_ }), console.error(e2), e2;
        });
      }
    }, r3._onGoogleApiLoaded = function() {
      var e;
      r3.props.onGoogleApiLoaded && (e = r3.props).onGoogleApiLoaded.apply(e, arguments);
    }, r3._getHoverDistance = function() {
      return r3.props.hoverDistance;
    }, r3._onDrag = function() {
      var e;
      return r3.props.onDrag && (e = r3.props).onDrag.apply(e, arguments);
    }, r3._onDragEnd = function() {
      var e;
      return r3.props.onDragEnd && (e = r3.props).onDragEnd.apply(e, arguments);
    }, r3._onMapTypeIdChange = function() {
      var e;
      return r3.props.onMapTypeIdChange && (e = r3.props).onMapTypeIdChange.apply(e, arguments);
    }, r3._onZoomAnimationStart = function() {
      var e;
      return r3.props.onZoomAnimationStart && (e = r3.props).onZoomAnimationStart.apply(e, arguments);
    }, r3._onZoomAnimationEnd = function() {
      var e;
      return r3.props.onZoomAnimationEnd && (e = r3.props).onZoomAnimationEnd.apply(e, arguments);
    }, r3._onTilesLoaded = function() {
      return r3.props.onTilesLoaded && r3.props.onTilesLoaded();
    }, r3._onChildClick = function() {
      var e;
      if (r3.props.onChildClick)
        return (e = r3.props).onChildClick.apply(e, arguments);
    }, r3._onChildMouseDown = function(e, t3) {
      r3.childMouseDownArgs_ = [e, t3], r3.props.onChildMouseDown && r3.props.onChildMouseDown(e, t3, a({}, r3.mouse_));
    }, r3._onChildMouseUp = function() {
      var e;
      r3.childMouseDownArgs_ && (r3.props.onChildMouseUp && (e = r3.props).onChildMouseUp.apply(e, r3.childMouseDownArgs_.concat([a({}, r3.mouse_)])), r3.childMouseDownArgs_ = null, r3.childMouseUpTime_ = new Date().getTime());
    }, r3._onChildMouseMove = function() {
      var e;
      r3.childMouseDownArgs_ && r3.props.onChildMouseMove && (e = r3.props).onChildMouseMove.apply(e, r3.childMouseDownArgs_.concat([a({}, r3.mouse_)]));
    }, r3._onChildMouseEnter = function() {
      var e;
      if (r3.props.onChildMouseEnter)
        return (e = r3.props).onChildMouseEnter.apply(e, arguments);
    }, r3._onChildMouseLeave = function() {
      var e;
      if (r3.props.onChildMouseLeave)
        return (e = r3.props).onChildMouseLeave.apply(e, arguments);
    }, r3._setViewSize = function() {
      if (r3.mounted_) {
        if (document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)
          r3.geoService_.setViewSize(window.innerWidth, window.innerHeight);
        else {
          var e = n.findDOMNode(r3.googleMapDom_);
          r3.geoService_.setViewSize(e.clientWidth, e.clientHeight);
        }
        r3._onBoundsChanged();
      }
    }, r3._onWindowResize = function() {
      r3.resetSizeOnIdle_ = true;
    }, r3._onMapMouseMove = function(e) {
      if (r3.mouseInMap_) {
        var t3 = new Date().getTime();
        t3 - r3.mouseMoveTime_ > 50 && (r3.boundingRect_ = e.currentTarget.getBoundingClientRect()), r3.mouseMoveTime_ = t3;
        var o4 = e.clientX - r3.boundingRect_.left, n2 = e.clientY - r3.boundingRect_.top;
        r3.mouse_ || (r3.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 }), r3.mouse_.x = o4, r3.mouse_.y = n2;
        var i2 = r3.geoService_.fromContainerPixelToLatLng(r3.mouse_);
        r3.mouse_.lat = i2.lat, r3.mouse_.lng = i2.lng, r3._onChildMouseMove(), t3 - r3.dragTime_ < 100 ? r3.fireMouseEventOnIdle_ = true : (r3.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"), r3.fireMouseEventOnIdle_ = false);
      }
    }, r3._onClick = function() {
      var e;
      return r3.props.onClick && !r3.childMouseDownArgs_ && new Date().getTime() - r3.childMouseUpTime_ > 300 && r3.dragTime_ === 0 && (e = r3.props).onClick.apply(e, arguments);
    }, r3._onMapClick = function(e) {
      r3.markersDispatcher_ && (r3._onMapMouseMove(e), new Date().getTime() - r3.dragTime_ > 100 && (r3.mouse_ && r3._onClick(a({}, r3.mouse_, { event: e })), r3.markersDispatcher_.emit("kON_CLICK", e)));
    }, r3._onMapMouseDownNative = function(e) {
      r3.mouseInMap_ && r3._onMapMouseDown(e);
    }, r3._onMapMouseDown = function(e) {
      r3.markersDispatcher_ && new Date().getTime() - r3.dragTime_ > 100 && (r3._onMapMouseMove(e), r3.markersDispatcher_.emit("kON_MDOWN", e));
    }, r3._onMapMouseDownCapture = function() {
      j().isChrome && (r3.zoomControlClickTime_ = new Date().getTime());
    }, r3._onKeyDownCapture = function() {
      j().isChrome && (r3.zoomControlClickTime_ = new Date().getTime());
    }, r3._isCenterDefined = function(e) {
      return e && (H(e) && N(e.lat) && N(e.lng) || e.length === 2 && N(e[0]) && N(e[1]));
    }, r3._onBoundsChanged = function(e, t3, o4) {
      if (e) {
        var n2 = e.getCenter();
        r3.geoService_.setView([n2.lat(), n2.lng()], e.getZoom(), 0);
      }
      if ((r3.props.onChange || r3.props.onBoundsChange) && r3.geoService_.canProject()) {
        var i2 = r3.geoService_.getZoom(), s = r3.geoService_.getBounds(), p2 = r3.geoService_.getCenter();
        if (!function(e2, t4, o5) {
          if (e2 && t4) {
            for (var n3 = 0; n3 !== e2.length; ++n3)
              if (Math.abs(e2[n3] - t4[n3]) > 1e-5)
                return false;
            return true;
          }
          return false;
        }(s, r3.prevBounds_) && o4 !== false) {
          var l2 = r3.geoService_.getBounds(r3.props.margin);
          r3.props.onBoundsChange && r3.props.onBoundsChange(r3.centerIsObject_ ? a({}, p2) : [p2.lat, p2.lng], i2, s, l2), r3.props.onChange && r3.props.onChange({ center: a({}, p2), zoom: i2, bounds: { nw: { lat: s[0], lng: s[1] }, se: { lat: s[2], lng: s[3] }, sw: { lat: s[4], lng: s[5] }, ne: { lat: s[6], lng: s[7] } }, marginBounds: { nw: { lat: l2[0], lng: l2[1] }, se: { lat: l2[2], lng: l2[3] }, sw: { lat: l2[4], lng: l2[5] }, ne: { lat: l2[6], lng: l2[7] } }, size: r3.geoService_.hasSize() ? { width: r3.geoService_.getWidth(), height: r3.geoService_.getHeight() } : { width: 0, height: 0 } }), r3.prevBounds_ = s;
        }
      }
    }, r3._registerChild = function(e) {
      r3.googleMapDom_ = e;
    }, r3.mounted_ = false, r3.initialized_ = false, r3.googleApiLoadedCalled_ = false, r3.map_ = null, r3.maps_ = null, r3.prevBounds_ = null, r3.heatmap = null, r3.layers_ = {}, r3.mouse_ = null, r3.mouseMoveTime_ = 0, r3.boundingRect_ = null, r3.mouseInMap_ = true, r3.dragTime_ = 0, r3.fireMouseEventOnIdle_ = false, r3.updateCounter_ = 0, r3.markersDispatcher_ = new c(l(r3)), r3.geoService_ = new T(256), r3.centerIsObject_ = H(r3.props.center), r3.minZoom_ = 3, r3.defaultDraggableOption_ = true, r3.zoomControlClickTime_ = 0, r3.childMouseDownArgs_ = null, r3.childMouseUpTime_ = 0, r3.googleMapDom_ = null, r3._isCenterDefined(r3.props.center || r3.props.defaultCenter)) {
      var i = le(r3.props.center || r3.props.defaultCenter);
      r3.geoService_.setView(i, r3.props.zoom || r3.props.defaultZoom, 0);
    }
    return r3.zoomAnimationInProgress_ = false, r3.state = { overlay: null }, r3;
  }
  p(o2, t2);
  var r2 = o2.prototype;
  return r2.componentDidMount = function() {
    var e = this;
    this.mounted_ = true, K(window, "resize", this._onWindowResize, false), K(window, "keydown", this._onKeyDownCapture, true);
    var t3 = n.findDOMNode(this.googleMapDom_);
    t3 && K(t3, "mousedown", this._onMapMouseDownNative, true), K(window, "mouseup", this._onChildMouseUp, false);
    var o3 = a({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);
    this.props.googleMapLoader(o3, this.props.heatmapLibrary), setTimeout(function() {
      e._setViewSize(), e._isCenterDefined(e.props.center || e.props.defaultCenter) && e._initMap();
    }, 0, this), this.props.resetBoundsOnResize && function(e2, t4) {
      if (e2.parentNode === void 0) {
        var o4 = document.createElement("div");
        e2.parentNode = o4;
      }
      e2 = e2.parentNode, W ? e2.attachEvent("onresize", t4) : (e2.__resizeTriggers__ || (getComputedStyle(e2).position == "static" && (e2.style.position = "relative"), function() {
        if (!V) {
          var e3 = (ie || "") + ".resize-triggers { " + (se || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', t5 = document.head || document.getElementsByTagName("head")[0], o5 = document.createElement("style");
          o5.type = "text/css", o5.styleSheet ? o5.styleSheet.cssText = e3 : o5.appendChild(document.createTextNode(e3)), t5.appendChild(o5), V = true;
        }
      }(), e2.__resizeLast__ = {}, e2.__resizeListeners__ = [], (e2.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e2.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e2.appendChild(e2.__resizeTriggers__), q(e2), K(e2, "scroll", Y, true), Q && e2.__resizeTriggers__.addEventListener(Q, function(t5) {
        t5.animationName == re && q(e2);
      })), e2.__resizeListeners__.push(t4));
    }(t3, this._mapDomResizeCallback);
  }, r2.shouldComponentUpdate = function(e, t3) {
    return !_(d(this.props, ["draggable"]), d(e, ["draggable"])) || !_(this.state, t3);
  }, r2.componentDidUpdate = function(e) {
    var t3 = this;
    if (!this._isCenterDefined(e.center) && this._isCenterDefined(this.props.center) && setTimeout(function() {
      return t3._initMap();
    }, 0), this.map_) {
      var o3 = this.geoService_.getCenter();
      if (this._isCenterDefined(this.props.center)) {
        var n2 = le(this.props.center), r3 = this._isCenterDefined(e.center) ? le(e.center) : null;
        (!r3 || Math.abs(n2.lat - r3.lat) + Math.abs(n2.lng - r3.lng) > 1e-5) && Math.abs(n2.lat - o3.lat) + Math.abs(n2.lng - o3.lng) > 1e-5 && this.map_.panTo({ lat: n2.lat, lng: n2.lng });
      }
      if (A(this.props.zoom) || Math.abs(this.props.zoom - e.zoom) > 0 && this.map_.setZoom(this.props.zoom), !A(e.draggable) && A(this.props.draggable) ? this.map_.setOptions({ draggable: this.defaultDraggableOption_ }) : _(e.draggable, this.props.draggable) || this.map_.setOptions({ draggable: this.props.draggable }), !A(this.props.options) && !_(e.options, this.props.options)) {
        var i = P(this.maps_, H), s = typeof this.props.options == "function" ? this.props.options(i) : this.props.options;
        if ("minZoom" in (s = d(s, ["zoom", "center", "draggable"]))) {
          var a2 = this._computeMinZoom(s.minZoom);
          s.minZoom = ue(s.minZoom, a2);
        }
        this.map_.setOptions(s);
      }
      _(this.props.layerTypes, e.layerTypes) || (Object.keys(this.layers_).forEach(function(e2) {
        t3.layers_[e2].setMap(null), delete t3.layers_[e2];
      }), this._setLayers(this.props.layerTypes)), this.heatmap && !_(this.props.heatmap.positions, e.heatmap.positions) && this.heatmap.setData(this.props.heatmap.positions.map(function(e2) {
        return { location: new t3.maps_.LatLng(e2.lat, e2.lng), weight: e2.weight };
      })), this.heatmap && !_(this.props.heatmap.options, e.heatmap.options) && Object.keys(this.props.heatmap.options).forEach(function(e2) {
        t3.heatmap.set(e2, t3.props.heatmap.options[e2]);
      });
    }
    this.markersDispatcher_.emit("kON_CHANGE"), _(this.props.hoverDistance, e.hoverDistance) || this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE");
  }, r2.componentWillUnmount = function() {
    this.mounted_ = false;
    var e, t3, o3 = n.findDOMNode(this.googleMapDom_);
    o3 && o3.removeEventListener("mousedown", this._onMapMouseDownNative, true), window.removeEventListener("resize", this._onWindowResize), window.removeEventListener("keydown", this._onKeyDownCapture), window.removeEventListener("mouseup", this._onChildMouseUp, false), this.props.resetBoundsOnResize && (t3 = this._mapDomResizeCallback, e = (e = o3).parentNode, W ? e.detachEvent("onresize", t3) : (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t3), 1), e.__resizeListeners__.length || (e.removeEventListener("scroll", Y), e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__)))), this.overlay_ && this.overlay_.setMap(null), this.maps_ && this.map_ && this.props.shouldUnregisterMapOnUnmount && (this.map_.setOptions({ scrollwheel: false }), this.maps_.event.clearInstanceListeners(this.map_)), this.props.shouldUnregisterMapOnUnmount && (this.map_ = null, this.maps_ = null), this.markersDispatcher_.dispose(), this.resetSizeOnIdle_ = false, this.props.shouldUnregisterMapOnUnmount && (delete this.map_, delete this.markersDispatcher_);
  }, r2.render = function() {
    var t3 = this.state.overlay, o3 = t3 ? null : React.createElement(C, { experimental: this.props.experimental, onChildClick: this._onChildClick, onChildMouseDown: this._onChildMouseDown, onChildMouseEnter: this._onChildMouseEnter, onChildMouseLeave: this._onChildMouseLeave, geoService: this.geoService_, insideMapPanes: false, distanceToMouse: this.props.distanceToMouse, getHoverDistance: this._getHoverDistance, dispatcher: this.markersDispatcher_ });
    return React.createElement("div", { style: this.props.style, onMouseMove: this._onMapMouseMove, onMouseDownCapture: this._onMapMouseDownCapture, onClick: this._onMapClick }, React.createElement(h, { registerChild: this._registerChild }), ae && t3 && pe(this._renderPortal(), t3), o3);
  }, o2;
}(react.exports.Component);
he.propTypes = { apiKey: o.string, bootstrapURLKeys: o.any, defaultCenter: o.oneOfType([o.array, o.shape({ lat: o.number, lng: o.number })]), center: o.oneOfType([o.array, o.shape({ lat: o.number, lng: o.number })]), defaultZoom: o.number, zoom: o.number, onBoundsChange: o.func, onChange: o.func, onClick: o.func, onChildClick: o.func, onChildMouseDown: o.func, onChildMouseUp: o.func, onChildMouseMove: o.func, onChildMouseEnter: o.func, onChildMouseLeave: o.func, onZoomAnimationStart: o.func, onZoomAnimationEnd: o.func, onDrag: o.func, onDragEnd: o.func, onMapTypeIdChange: o.func, onTilesLoaded: o.func, options: o.any, distanceToMouse: o.func, hoverDistance: o.number, debounced: o.bool, margin: o.array, googleMapLoader: o.any, onGoogleApiLoaded: o.func, yesIWantToUseGoogleMapApiInternals: o.bool, draggable: o.bool, style: o.any, resetBoundsOnResize: o.bool, layerTypes: o.arrayOf(o.string), shouldUnregisterMapOnUnmount: o.bool }, he.defaultProps = { distanceToMouse: function(e, t2) {
  return Math.sqrt((e.x - t2.x) * (e.x - t2.x) + (e.y - t2.y) * (e.y - t2.y));
}, hoverDistance: 30, debounced: true, options: function() {
  return { overviewMapControl: false, streetViewControl: false, rotateControl: true, mapTypeControl: false, styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }], minZoom: 3 };
}, googleMapLoader: z, yesIWantToUseGoogleMapApiInternals: false, style: { width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }, layerTypes: [], heatmap: {}, heatmapLibrary: false, shouldUnregisterMapOnUnmount: true }, he.googleMapLoader = z;
class GeolocationMap {
  constructor() {
    this.getData = (metadata) => metadata.filter((mitem) => {
      var _a, _b;
      return ((_a = mitem == null ? void 0 : mitem.gps) == null ? void 0 : _a.latitude) && ((_b = mitem == null ? void 0 : mitem.gps) == null ? void 0 : _b.longitude);
    }).map(({ gps }) => ({
      lat: gps.latitude,
      lng: gps.longitude,
      weight: 1
    }));
    this.getCenter = (positionData) => {
      function getSum(data, key) {
        return data.map((d2) => d2[key]).reduce((a2, b2) => a2 + b2);
      }
      return [
        getSum(positionData, "lat") / positionData.length,
        getSum(positionData, "lng") / positionData.length
      ];
    };
    this.isEmpty = (metadata) => {
      const res = metadata.filter((mitem) => "gps" in mitem);
      return res.length === 0;
    };
    this.onClick = (metadata) => {
      if (!metadata || this.isEmpty(metadata))
        return null;
      const defaultZoom = 1;
      const positionData = this.getData(metadata);
      const heatmapCenter = this.getCenter(positionData);
      const heatmapData = {
        positions: positionData,
        options: {
          radius: 20,
          opacity: 1
        }
      };
      return positionData.length > 0 ? /* @__PURE__ */ React.createElement(he, {
        defaultZoom,
        defaultCenter: heatmapCenter,
        heatmap: heatmapData,
        bootstrapURLKeys: {
          key: "AIzaSyA4zViSigqaandxHw1fgqDbaHhOo-tNTcU",
          libraries: ["places", "visualization"]
        }
      }) : null;
    };
    this.name = "Geolocation Map";
    this.icon = "places";
    this.tooltip = "Plot geolocation heatmap";
    this.usesModal = true;
  }
}
export { GeolocationMap as default };
