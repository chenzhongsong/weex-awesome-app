// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.weexraxacechartcore = t() : e.weexraxacechartcore = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 4);
  }([function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();t.Plugin = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "web";n(this, e), this._platform = t;
      }return o(e, [{ key: "applyConfig", value: function value(e, t) {
          throw new Error("Don't directly instancing Plugin. Inherit Plugin and implement applyConfig please.");
        } }, { key: "execute", value: function value(e) {} }, { key: "invoke", value: function value(e) {
          var t = Object.assign({}, e);return this.execute(t), this.applyConfig(this._platform, t), t;
        } }]), e;
    }();
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorNormalize = t.SetDefaultValue = t.VersionCompare = void 0;var o = r(14),
        a = n(o),
        i = r(3),
        u = n(i),
        l = r(15),
        c = n(l);t.VersionCompare = a.default, t.SetDefaultValue = u.default, t.ColorNormalize = c.default;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.primary = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6"], t.secondary = ["#7f8c8d", "#bdc3c7", "#c0392b", "#d35400", "#f39c12"];
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r) {
      var n = e[t];if (null === n || void 0 === n) return void (e[t] = r);
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.WebDataConv = t.AndroidDataConv = t.iOSDataConv = t.commonDataConv = void 0;var o = r(5),
        a = n(o),
        i = r(20),
        u = n(i),
        l = r(24),
        c = n(l),
        f = r(25),
        s = n(f);t.commonDataConv = a.default, t.iOSDataConv = u.default, t.AndroidDataConv = c.default, t.WebDataConv = s.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      function t() {
        if ("undefined" == typeof WXEnvironment) {
          if (navigator && navigator.platform) {
            var e = navigator.platform.toLowerCase();return "ios" !== e && "android" !== e ? "web" : e;
          }return "web";
        }return WXEnvironment.platform.toLowerCase();
      }if (!e) return e;var r = t();switch (r) {case "ios":
          r = "iOS";break;case "android":
          r = "Android";break;case "web":default:
          r = "web";}for (var n = 0; n < a.default.length; n++) {
        e = new (0, a.default[n])(r).invoke(e);
      }return e;
    };var o = r(6),
        a = n(o);
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = r(7),
        a = n(o),
        i = r(8),
        u = n(i),
        l = r(9),
        c = n(l),
        f = r(10),
        s = n(f),
        p = r(12),
        y = n(p),
        d = r(13),
        b = n(d),
        v = r(16),
        h = n(v),
        g = r(19),
        m = n(g);t.default = [a.default, u.default, c.default, s.default, y.default, b.default, h.default, m.default];
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        u = r(0),
        l = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), i(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = t.series,
              n = t.xAxises,
              o = t.yAxises;return t.series = r && r.filter(function (e) {
            var t = e.xAxisIndex || 0,
                r = e.yAxisIndex || 0;return !(t >= 2) && !(r >= 2);
          }), t.xAxises = n && n.slice(0, 2), t.yAxises = o && o.slice(0, 2), t;
        } }]), t;
    }(u.Plugin);t.default = l;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }return r;
      }return Array.from(e);
    }function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    },
        c = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        f = r(0),
        s = r(2),
        p = n(s),
        y = function (e) {
      function t() {
        return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return u(t, e), c(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = ["bar", "stackbar", "scatter", "stackline", "line", "pie", "radar", "rose", "funnel", "gauge"],
              n = t.series;n = (n || []).filter(function (e) {
            return !!e && r.indexOf(e.type || "-") >= 0;
          }), n = n.map(function (e) {
            if (["pie", "rose"].indexOf(e.type) < 0) return e;var r = e.indicators;e.colors = e.colors || p.primary;var n = t.xAxises[e.xAxisIndex || 0],
                o = n.xCategories || [],
                a = e.points && e.points[0] || [],
                i = Math.max(o.length, a.length);o = o.slice(0, i), a = a.slice(0, i), r || (r = {});var u = r,
                c = u.data;if (null !== c && void 0 !== c && c.length && c.length > 0) {
              if ("[object Array]" !== Object.prototype.toString.call(c)) throw new Error("pie serie.indicators.data should be of array type");r.data = c.map(function (t, r) {
                var n = l({}, t);return n.text = n.text || o[r], n.textColor = n.textColor || e.colors[r] || p.primary[r % p.primary.length], n.lineColor = n.lineColor || e.colors[r] || p.primary[r % p.primary.length], n;
              });
            } else r.data = o.map(function (t, r) {
              var n = e.colors[r] || p.primary[r % p.primary.length];return { text: t, textColor: n, lineColor: n };
            });return e.indicators = r, e;
          });var a = ["pie", "radar", "rose", "gauge"];if (n[0]) {
            ["pie", "rose"].indexOf(n[0].type) >= 0 && (n = n.slice(0, 1), t.grid = { hidden: !0 });
          }switch (e) {case "iOS":
              n = n.map(function (e) {
                if (e = l({}, e), a.indexOf(e.type) < 0) return e;if (void 0 === e.startAngle || null === e.startAngle ? e.startAngle = -1.5707963267948966 : e.startAngle = e.startAngle * Math.PI / 180, void 0 !== e.endAngle && null !== e.endAngle && (e.endAngle = e.endAngle * Math.PI / 180), ["pie", "rose"].indexOf(e.type) < 0) return e;for (var r = t.xAxises[e.xAxisIndex || 0], n = r.xCategories || [], i = e.points && e.points[0], u = [].concat(o(i || [])), c = [], f = 0; f < n.length && f < u.length; f++) {
                  c.push(u[f]);
                }e.names = [].concat(o(n)), e.points = [c];var s = e,
                    p = s.indicators;if (p) {
                  var y = { around: 1, "point-to": 0 },
                      d = p.style;p.style = y[d];
                }return e;
              });break;case "Android":
              n = n.map(function (e) {
                var t = l({}, e);return "gauge" === t.type && e.points && (t.points = [].concat(o(e.points[0] || []))), t;
              });}return t.series = n, t;
        } }]), t;
    }(f.Plugin);t.default = y;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        u = r(0),
        l = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), i(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = t.series,
              n = r && r[0],
              o = ["pie", "radar", "rose", "gauge"];if (n && n.type && o.indexOf(n.type) >= 0) switch (e) {case "Android":
              var a = n.points;a && a[0] && 0 === a[0].length && (n.points = [[0]]);}return t;
        } }]), t;
    }(u.Plugin);t.default = l;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        l = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        c = r(0),
        f = r(11),
        s = n(f),
        p = function (e) {
      function t() {
        return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return i(t, e), l(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = s.default.iOS,
              n = s.default.Android,
              o = s.default.web,
              a = function a(e) {
            var r = function r(_r) {
              var n = _r.split(".");if (!n || 0 === n.length) return "continue";var o = (e[_r] || "").split(".");if (!o || 0 === o.length) return "continue";if (o.length > 1) throw new Error("value not correct.");!function e(t, r) {
                if (void 0 !== t && null !== t && r && 0 !== r.length) {
                  var n = r[0];if (1 !== r.length) {
                    if (n.indexOf("[]") >= 0) {
                      if (!(n = n.substr(0, n.length - 2)) || "" === n) throw new Error("key should not be empty.");var a = t[n];if (!a) return;if ("[object Array]" !== Object.prototype.toString.call(a)) throw new Error("Key indicates that it should be an array but received: " + t.toString());for (var i = 0; i < a.length; i++) {
                        e(a[i], r.slice(1));
                      }
                    } else e(t[n], r.slice(1));
                  } else {
                    if ("object" !== (void 0 === t ? "undefined" : u(t))) throw new Error("Last key not indicating an object.");var l = t[o[0]];if (null === l || void 0 === l) {
                      var c = t[n];"object" === (void 0 === c ? "undefined" : u(c)) ? "[object Array]" === Object.prototype.toString.call(c) ? t[o[0]] = [].concat(c) : t[o[0]] = Object.assign({}, c) : t[o[0]] = c;
                    }
                  }
                }
              }(t, n);
            };for (var n in e) {
              r(n);
            }
          };if (e) switch (e) {case "iOS":
              a(r);break;case "Android":
              a(n);break;case "web":
              a(o);}
        } }]), t;
    }(c.Plugin);t.default = p;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { iOS: { legend: "legends" }, Android: { legend: "legends", "yAxises[].decimalScale": "formatDecimalScale" }, web: {} };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }return r;
      }return Array.from(e);
    }function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        l = r(0),
        c = function (e) {
      function t() {
        return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return i(t, e), u(t, [{ key: "applyConfig", value: function value(e, t) {
          var r = t.series;r = r || [];for (var o = function o(e, t) {
            for (var r = Math.max(e.length, t.length), n = [], o = 0; o < r; o++) {
              var a = o >= e.length ? 0 : e[o] || 0,
                  i = o >= t.length ? 0 : t[o] || 0;n[o] = a + i;
            }return n;
          }, a = r.reduce(function (e, t) {
            var r = t.xAxisIndex;return Math.max(e, r || 0);
          }, 0) + 1, i = r.reduce(function (e, t) {
            var r = t.yAxisIndex;return Math.max(e, r || 0);
          }, 0) + 1, u = [].concat(n(t.xAxises || [])), l = [].concat(n(t.yAxises || [])), c = u.length; c < a; c++) {
            u.push({});
          }for (var f = l.length; f < i; f++) {
            l.push({});
          }var s = [],
              p = [],
              y = [],
              d = [],
              b = [];return r.map(function (e) {
            var t = e.type;if (t) {
              var r = e.xAxisIndex || 0,
                  n = e && e.points && e.points[0] || [],
                  a = s[r];a || (a = u[r].xCategories || [], s[r] = a);for (var i = a.length; i < n.length; i++) {
                a.push("" + i);
              }var l = e.yAxisIndex || 0,
                  c = e && e.points && e.points[0] || [0, 10],
                  f = Math.min.apply(Math, c),
                  v = Math.max.apply(Math, c);if (t.indexOf("stack") < 0) {
                var h = p[l];p[l] = h ? [Math.min(h[0], f), Math.max(v, h[1])] : [f, v];
              } else {
                var g = e.stackName || "0",
                    m = y[l] && y[l][g];m ? (b[l] = Math.min(Math.min.apply(Math, m), f), y[l][g] = o(m, c)) : (y[l] || (y[l] = []), b[l] = f, y[l][g] = c, d.push(g));
              }
            }
          }, 0), u.forEach(function (e, t) {
            e.xCategories = s[t];
          }), l.forEach(function (e, t) {
            if (!e.yRange && (p[t] || y[t])) {
              var r = void 0 !== b[t] ? b[t] : 1 / 0,
                  n = -1 / 0;d.forEach(function (e) {
                n = Math.max(n, Math.max.apply(Math, y[t][e]));
              }), p[t] && (r = Math.min(p[t][0], r), n = Math.max(p[t][1], n));var o = .2 * (n - r);n = Math.max(1.2 * n, n + o), n < 1 && n >= 0 && (n = 1), n > -1 && n < 0 && (n = -1), r = r >= 0 ? Math.max(r - o, 0) : r - o, e.yRange = [r, n];
            }
          }), t.xAxises = u, t.yAxises = l, t.series = r, t;
        } }]), t;
    }(l.Plugin);t.default = c;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }return r;
      }return Array.from(e);
    }function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    },
        c = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        f = r(0),
        s = r(1),
        p = r(2),
        y = n(p),
        d = function (e) {
      function t() {
        return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return u(t, e), c(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = t.series;switch (r = r || [], r = r.map(function (e, t) {
            var r = l({}, e);return (0, s.SetDefaultValue)(r, "color", y.primary[t % y.primary.length]), (0, s.SetDefaultValue)(r, "lineFillColor", y.primary[t % y.primary.length] + "66"), r;
          }), r = r.map(function (e) {
            return e.jointColor = e.jointColor || e.color, e;
          }), e) {case "iOS":
              r = r.map(function (e) {
                var r = e.type,
                    n = e.points && e.points[0];if ("scatter" !== r) {
                  var a = [].concat(o(n || [])),
                      i = a.map(function (e, t) {
                    return t;
                  }),
                      u = [i, a];e.points = u;
                } else {
                  var c = t.highlight || {},
                      f = l({}, c);f.style = void 0 === f.style || null === f.style ? 1 : f.style, f.color = f.color || f.lineColor, t.highlight = f;
                }return e;
              });}return t.series = r, t;
        } }]), t;
    }(f.Plugin);t.default = d;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) {
      return e.split(".").reduce(function (e, t, r) {
        return Math.pow(300, 4 - r) * +t + e;
      }, 0) < t.split(".").reduce(function (e, t, r) {
        return Math.pow(300, 4 - r) * +t + e;
      }, 0);
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (!e) return e;var t = o[e];return t || e;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n;var o = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", green: "#008000", greenyellow: "#ADFF2F", grey: "#808080", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        c = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        f = r(0),
        s = r(3),
        p = o(s),
        y = r(1),
        d = r(17),
        b = o(d),
        v = r(18),
        h = n(v),
        g = function (e) {
      function t() {
        return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return u(t, e), c(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          return this.loadConfig(t, (0, b.default)(e), null), t && t.tooltip && !t.tooltip.padding && (t.tooltip.padding = [10, 10]), t;
        } }, { key: "typeIdentifierCheck", value: function value(e) {
          var t = ["raw", "number", "string", "object", "array", "boolean", h.type];return e.split("|").reduce(function (e, r) {
            return e || t.indexOf(r) >= 0;
          }, !1);
        } }, { key: "matchTypeConformsTypeIdentifier", value: function value(e, t) {
          var r = t.split("|"),
              n = void 0 === e ? "undefined" : l(e);"object" === n && "[object Array]" === Object.prototype.toString.call(e) && (n = "array");var o = r.indexOf(n);return o < 0 ? "" : r[o];
        } }, { key: "loadConfig", value: function value(e, t, r, n) {
          var o = this,
              a = t.type,
              i = t.value;if (!a || !this.typeIdentifierCheck(a)) throw new Error("Type invalid. Encountered: " + a + " value: <" + i + ">");var u = this.matchTypeConformsTypeIdentifier("object" === (void 0 === e ? "undefined" : l(e)) ? e : e[r], a),
              c = function c(e, t) {
            for (var r in t) {
              var n = t[r],
                  a = n.type;"array" !== a && "object" !== a ? o.loadConfig(e, t[r], r, a) : (e[r] = e[r] || ("array" === a ? [] : {}), o.loadConfig(e[r], t[r], r, a));
            }
          };switch (u) {case "object":
              c(e, i);break;case "array":
              var f = void 0 === e ? "undefined" : l(e);if ("object" !== f || "[object Array]" !== Object.prototype.toString.call(e)) throw new Error("Expected array, get '" + ("object" === f ? JSON.stringify(e) : e) + "'");for (var s = 0; s < e.length; s++) {
                var d = e[s];"object" === (void 0 === d ? "undefined" : l(d)) ? c(d, i) : e[s] = i;
              }break;default:
              if (!r) throw new Error("key not correct. Expected non-empty value.");"object" === (void 0 === e ? "undefined" : l(e)) && ("color" === n ? (h.checkValue(i), (0, p.default)(e, r, (0, y.ColorNormalize)(i)), e[r] = (0, y.ColorNormalize)(e[r])) : (0, p.default)(e, r, i));}
        } }]), t;
    }(f.Plugin);t.default = g;
  }, function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    };t.default = function (e) {
      var t,
          r = { decimalScale: { type: "number", value: 0 }, formatDecimalScale: { type: "number", value: 0 }, commonFormat: { type: "string", value: "number" } },
          a = { type: "object", value: o({}, r) },
          i = 17,
          u = { hidden: { type: "boolean", value: !1 }, labelTextColor: { type: "color", value: "#999999" }, displayLabel: { type: "boolean", value: !0 }, axisLineWidth: { type: "number", value: 1 }, axisLineColor: { type: "color", value: "#999999" }, labelBias: { type: "number", value: 10 }, labelFontSize: { type: "number|string", value: i } };return { type: "object", value: { userInteractionDisabled: { type: "boolean", value: !1 }, enableGestureSimultaneously: { type: "boolean", value: !1 }, enableDataDecoratorAnimation: { type: "boolean", value: !0 }, enableZoomInGestureOnXAxisDirection: { type: "boolean", value: !1 }, enableZoomInGestureOnYAxisDirection: { type: "boolean", value: !1 }, maxXScaling: { type: "number", value: 3 }, maxYScaling: { type: "number", value: 3 }, grid: { type: "object", value: { hidden: { type: "boolean", value: !1 }, xAxisIndex: { type: "number", value: 0 }, yAxisIndex: { type: "number", value: 0 }, lineWidth: { type: "number", value: 1 }, lineColor: { type: "color", value: "#ececec" }, enableHorizontalLine: { type: "boolean", value: !0 }, enableVerticalLine: { type: "boolean", value: !1 } } }, highlight: { type: "object", value: { hidden: { type: "boolean", value: !1 }, lineColor: { type: "color", value: "#ececec" }, lineWidth: { type: "number", value: 1 }, jointSize: { type: "number", value: 16 }, isDashLine: { type: "boolean", value: !1 }, shadowSize: { type: "number", value: 0 }, shadowColor: { type: "color", value: "#cccccc" }, shadowOpaque: { type: "number", value: .2 }, displaySelectedLabel: { type: "boolean", value: !1 }, displaySelectLabelTextColor: { type: "color", value: "#999999" }, displaySelectLabelTextFontSize: { type: "number|string", value: i }, displaySelectLabelOffsetSize: { type: "number", value: 10 } } }, xAxises: { type: "array", value: o({}, u, { minimalGapBetweenTexts: { type: "number", value: 30 } }) }, yAxises: { type: "array", value: o({}, u, r, { isForcedStartAtZero: { type: "boolean", value: !1 }, minimalGapBetweenTexts: { type: "number", value: 0 } }) }, pieIndicator: { type: "object", value: { hidden: { type: "boolean", value: !1 } } }, tooltip: { type: "object", value: o({}, r, { formatter: o({}, a), displayXAxisValue: { type: "boolean", value: !0 }, displayDatasetValues: { type: "boolean", value: !0 }, backgroundColor: { type: "color", value: "#ffffff" }, cornerRadius: { type: "number", value: 5 }, borderColor: { type: "color", value: "#ececec" }, borderWidth: { type: "number", value: 1 }, datasetLabelFontSize: { type: "number|string", value: i }, xAxisLabelFontSize: { type: "number|string", value: i }, font: { type: "number|string", value: i }, fontSize: { type: "number|string", value: i } }) }, legends: { type: "object", value: { hidden: { type: "boolean", value: !1 }, font: { type: "number|string", value: i }, textColor: { type: "color", value: "#666666" } } }, radar: { type: "object", value: { name: { type: "object", value: { fontSize: { type: "number|string", value: i } } } } }, series: { type: "array", value: (t = { indicators: { type: "object", value: { style: { type: "string", value: "point-to" }, displayStartCircle: { type: "boolean", value: !0 }, data: { type: "array", value: { textFontSize: { type: "number|string", value: i }, textColor: { type: "color", value: "#333333" }, descFontSize: { type: "number|string", value: i }, descColor: { type: "color", value: "#999999" }, lineColor: { type: "color", value: "#ececec" }, lineWidth: { type: "number", value: 2 } } } } }, data: { type: "array", value: { valueFontSize: { type: "number|string", value: i }, titleFontSize: { type: "number|string", value: i }, subtitleFontSize: { type: "number|string", value: i } } }, archorSize: { type: "number", value: 15 }, archorInnerSize: { type: "number", value: 12 }, archorInnerColor: { type: "color", value: "#ffffff" }, type: { type: "string", value: "line" }, displayLabels: { type: "boolean", value: !1 }, displayLabelsFontSize: { type: "number|string", value: i }, name: { type: "string", value: "serie-name" }, xAxisIndex: { type: "number", value: 0 } }, n(t, "xAxisIndex", { type: "number", value: 0 }), n(t, "lineWidth", { type: "number", value: 2 }), n(t, "isDashLine", { type: "boolean", value: !1 }), n(t, "isLineFillEnabled", { type: "boolean", value: !1 }), n(t, "lineFillColor", { type: "color", value: "#999999" }), n(t, "isCubicEnabled", { type: "boolean", value: !0 }), n(t, "barGroupGapSize", { type: "number", value: .3 }), n(t, "barGapSize", { type: "number", value: .3 }), n(t, "barRadiusSize", { type: "number", value: 0 }), n(t, "color", { type: "color", value: "#fc4400" }), n(t, "displayJoint", { type: "boolean", value: !1 }), n(t, "displayLegend", { type: "boolean", value: !0 }), n(t, "displayStartCircle", { type: "boolean", value: !0 }), n(t, "displayArchors", { type: "boolean", value: !1 }), n(t, "innerRatio", { type: "number", value: 0 }), n(t, "outterRatio", { type: "number", value: .6 }), n(t, "isClockwise", { type: "boolean", value: !1 }), t) } } };
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (e.indexOf("rgb") >= 0) throw new Error("rgb or rgba color format currently not perfectly supported.");{
        if ("#" !== e.substr(0, 1)) throw new Error("color format should start with '#', get <" + e + ">");var t = e.substr(1);if (t.length !== "ccc".length && t.length !== "cccc".length && t.length !== "cccccc".length && t.length !== "cccccccc".length && "" !== t.replace(/[\da-fA-F]/g, "")) throw new Error("color format not correct, get <" + e + ">");
      }
    }function o(e) {}function a(e) {
      e && ("string" == typeof e && n(e), "object" === (void 0 === e ? "undefined" : i(e)) && o(e));
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    };t.checkValue = a;t.type = "color";
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    },
        u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        l = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        c = r(0),
        f = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), l(t, [{ key: "execute", value: function value(e) {} }, { key: "applyConfig", value: function value(e, t) {
          var r = function r(e) {
            return "object" === (void 0 === e ? "undefined" : u(e));
          },
              n = function n(e) {
            return r(e) && "[object Array]" === Object.prototype.toString.call(e);
          };!function e(t) {
            if (t && r(t)) if (n(t)) for (var o = 0; o < t.length; o++) {
              var a = t[o];r(a) && e(a), t[o] = a;
            } else for (var u = Object.keys(t), l = 0; l < u.length; l++) {
              var c = u[l],
                  f = t[c];if (f) {
                var s = f;if (r(f) ? (e(f), s = i({}, f)) : s = "" + s, /fontSize|FontSize/g.test(c)) {
                  var p = c.replace(/fontSize/g, "font").replace(/FontSize/g, "Font");t[p] = s;
                }
              }
            }
          }(t);
        } }]), t;
    }(c.Plugin);t.default = f;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    };t.default = function (e) {
      if (!e) return e;e = n({}, e), e.xAxises = (e.xAxises || []).reduce(function (e, t, r) {
        return e["" + r] = t, e;
      }, {}), e.yAxises = (e.yAxises || []).reduce(function (e, t, r) {
        return e["" + r] = t, e;
      }, {});var t = ["bar", "stackbar", "scatter", "stackline", "line", "pie", void 0, "radar", "rose", "funnel", "gauge"].map(function (e, t) {
        return { name: e, idx: t };
      }),
          r = Object.assign({}, e),
          o = [].concat(e.series || []);return o && (o = o.map(function (e) {
        if (!e) return e;var r = n({}, e);void 0 !== r.labelFormatter && null !== r.labelFormatter || (r.labelFormatter = { decimalScale: 2, commonFormat: "number" });var o = t.find(function (t) {
          return t.name === e.type;
        });return o ? (r.type = o.idx, r) : r;
      }).filter(function (e) {
        return !!e;
      }), o.length > 0 && (5 === o[0].type || 8 === o[0].type) && (o = [o[0]]), r.series = o), r;
    };r(1), r(21);
  }, function (e, t, r) {
    "use strict";
    (function (e) {
      function n(e) {
        if ("undefined" != typeof weex) {
          var t = (0, a.checkFeature)(weex, "supports"),
              r = !0;if (t && (r = weex.supports("@module/" + e) && r), r && (0, a.checkFeature)(weex, "requireModule")) return weex.requireModule(e);
        } else try {
          return i(e);
        } catch (e) {}return null;
      }Object.defineProperty(t, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      };t.requireWeexModule = n;var a = r(23),
          i = function (e) {
        return e.require;
      }("object" === (void 0 === e ? "undefined" : o(e)) && e || "object" === ("undefined" == typeof window ? "undefined" : o(window)) && window);
    }).call(t, r(22));
  }, function (e, t) {
    var r;r = function () {
      return this;
    }();try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
    }e.exports = r;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      return !(!e || !e[t] || "function" != typeof e[t]);
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.checkFeature = n;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      if (!e) return e;var t = Object.assign({}, e),
          r = [].concat(e.series || []);return r && (r = r.map(function (e) {
        var t = Object.assign({}, e);return t.innerRatio && t.outterRatio && (t.innerRatio = t.innerRatio * t.outterRatio), t;
      })), t.series = r, t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }return e;
    };t.default = function (e) {
      if (!e) return e;e = n({}, e);var t = e,
          r = [].concat(e.series || []);return r && (r = r.map(function (e) {
        if (!e) return e;var t = n({}, e);return void 0 !== t.labelFormatter && null !== t.labelFormatter || (t.labelFormatter = { decimalScale: 2, commonFormat: "number" }), t;
      }).filter(function (e) {
        return !!e;
      }), r.length > 0 && ("pie" === r[0].type || "rose" === r[0].type || "gauge" === r[0].type) && (r = [r[0]]), t.series = r), t;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexacechart = __webpack_require__(2);

var _weexacechart2 = _interopRequireDefault(_weexacechart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _weexacechart2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/asp/Desktop/Weex-Awesome-App/weex-awesome-app/node_modules/weex-acechart-js/src/lib/weexacechart.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-475a1b1a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "chart-style": {
    "flex": 1,
    "flexDirection": "row"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexRaxAcechartCore = __webpack_require__(0);

var weexraxacechartcore = _interopRequireWildcard(_weexRaxAcechartCore);

var _acechartIos = __webpack_require__(6);

var _acechartIos2 = _interopRequireDefault(_acechartIos);

var _acechartAndroid = __webpack_require__(9);

var _acechartAndroid2 = _interopRequireDefault(_acechartAndroid);

var _acechartWeb = __webpack_require__(13);

var _acechartWeb2 = _interopRequireDefault(_acechartWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
//
//
//
//
//
//
//

exports.default = {
  name: "WeexAceChart",
  props: ["option"],
  components: { chartios: _acechartIos2.default, chartandroid: _acechartAndroid2.default, chartWeb: _acechartWeb2.default },
  data: function data() {
    return {
      platform: weex.config.env.platform
    };
  },
  methods: {
    onHighlightChanged: function onHighlightChanged(selection, datasetIndex, gestureType) {
      this.$emit("onHighlightChanged", selection, gestureType);
    },
    focus: function focus(xIndex, serieIndex) {
      if (this.isAndroid) {
        if (this.$refs.chartandroid) {
          this.$refs.chartandroid.focus(xIndex, serieIndex);
        }
      } else {
        if (this.$refs.chartios) {
          this.$refs.chartios.focus(xIndex, serieIndex);
        }
      }
    }
  },
  computed: {
    isIOS: function isIOS() {
      return this.platform.toLowerCase() == "ios";
    },
    isAndroid: function isAndroid() {
      return this.platform.toLowerCase() == "android";
    },
    convertedOptions: function convertedOptions() {
      return weexraxacechartcore.commonDataConv(this.option);
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/asp/Desktop/Weex-Awesome-App/weex-awesome-app/node_modules/weex-acechart-js/src/lib/acechart-ios.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexRaxAcechartCore = __webpack_require__(0);

var weexraxacechartcore = _interopRequireWildcard(_weexRaxAcechartCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  props: ["option"],
  methods: {
    focus: function focus(xIndex, serieIndex) {
      if (this.$refs.polar) {
        this.$refs.polar.focus(xIndex, serieIndex);
      }
      if (this.$refs.cartesian) {
        this.$refs.cartesian.focus(xIndex, serieIndex);
      }
      if (this.$refs.funnel) {
        this.$refs.polar.focus(xIndex, serieIndex);
      }
      if (this.$refs.progress) {
        this.$refs.progress.focus(xIndex, serieIndex);
      }
    },
    onHighlightChanged: function onHighlightChanged(event) {
      // selection, datasetIndex
      if (this.finalSeries && this.finalSeries.length > 0) {
        var dataset = this.finalSeries[event.datasetIndex];
        // 散点图的时候要返回x，y值，因为一列x可能多个y值
        // console.log("dataset.type", JSON.stringify(event), JSON.stringify(dataset));
        if (dataset.type == 2) {
          this.$emit("onHighlightChanged", event.selection, event.datasetIndex, event.gestureType);
        } else {
          this.$emit("onHighlightChanged", event.selection.x, event.datasetIndex, event.gestureType);
        }
      }
      return;
    }
  },
  computed: {
    // 第一组数据
    firstSerie: function firstSerie() {
      return this.finalSeries && this.finalSeries[0];
    },
    isPolar: function isPolar() {
      if (!!this.firstSerie) {
        var type = this.firstSerie.type;
        return [5, 7, 8].indexOf(type) >= 0;
      }
      return false;
    },
    // 是否是横轴
    isHorizontal: function isHorizontal() {
      return this.computedOption.isHorizontal;
    },
    // 是否是漏斗图
    isFunnel: function isFunnel() {
      if (!!this.firstSerie) {
        return this.firstSerie.type == 9;
      }
      return false;
    },
    // 是否是仪表盘图
    isGauge: function isGauge() {
      if (!!this.firstSerie) {
        return this.firstSerie.type == 10;
      }
      return false;
    },
    // 是否是进度条图
    isProgress: function isProgress() {
      if (!!this.firstSerie) {
        return this.firstSerie.type == 11;
      }
      return false;
    },
    computedOption: function computedOption() {
      return weexraxacechartcore.iOSDataConv(this.option);
    },
    finalSeries: function finalSeries() {
      return this.computedOption && this.computedOption.series;
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isPolar || _vm.isGauge) ? _c('iosacpolarchart', {
    ref: "polar",
    attrs: {
      "option": _vm.computedOption,
      "series": _vm.finalSeries
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isHorizontal) ? _c('iosachorizontalchart', {
    ref: "horizontal",
    attrs: {
      "option": _vm.computedOption,
      "series": _vm.finalSeries
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isProgress) ? _c('iosprogresschart', {
    ref: "progress",
    attrs: {
      "option": _vm.computedOption,
      "series": _vm.finalSeries
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isFunnel) ? _c('iosfunnelchart', {
    ref: "funnel",
    attrs: {
      "option": _vm.computedOption,
      "series": _vm.finalSeries
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : _c('iosaccartesianchart', {
    ref: "cartesian",
    attrs: {
      "option": _vm.computedOption,
      "series": _vm.finalSeries
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/asp/Desktop/Weex-Awesome-App/weex-awesome-app/node_modules/weex-acechart-js/src/lib/acechart-android.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63086f3b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "default-chart-style": {
    "flex": 1
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexRaxAcechartCore = __webpack_require__(0);

var weexraxacechartcore = _interopRequireWildcard(_weexRaxAcechartCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  props: ["option"],
  methods: {
    focus: function focus(xIndex, serieIndex) {
      if (this.$refs.pie) {
        this.$refs.pie.focus(xIndex, serieIndex);
      }
      if (this.$refs.rose) {
        this.$refs.rose.focus(xIndex, serieIndex);
      }
      if (this.$refs.scatter) {
        this.$refs.scatter.focus(xIndex, serieIndex);
      }
      if (this.$refs.radar) {
        this.$refs.radar.focus(xIndex, serieIndex);
      }
      if (this.$refs.chart) {
        this.$refs.chart.focus(xIndex, serieIndex);
      }
    },
    onHighlightChanged: function onHighlightChanged(event) {
      // selection, datasetIndex
      if (this.finalSeries && this.finalSeries.length > 0) {
        if (this.finalSeries[0].type == "scatter") {
          this.$emit("onHighlightChanged", event.x, event.y, event.z, event.gestureType);
        } else {
          this.$emit("onHighlightChanged", event.xIndex, null, event.gestureType);
        }
      }
      return;
    }
  },
  computed: {
    options: function options() {
      return JSON.stringify(weexraxacechartcore.AndroidDataConv(this.option || {}));
    },
    finalSeries: function finalSeries() {
      return this.option && this.option.series;
    },

    isPolar: function isPolar() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "pie";
      }
      return false;
    },
    isRadar: function isRadar() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "radar";
      }
      return false;
    },
    isRose: function isRose() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "rose";
      }
      return false;
    },
    isScatter: function isScatter() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "scatter";
      }
      return false;
    },
    isGauge: function isGauge() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "gauge";
      }
      return false;
    },
    isProgress: function isProgress() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "progress";
      }
      return false;
    },
    isFunnel: function isFunnel() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "funnel";
      }
      return false;
    },
    isMix: function isMix() {
      if (this.finalSeries && this.finalSeries.length > 0) {
        return this.finalSeries[0].type == "line" || this.finalSeries[0].type == "bar" || this.finalSeries[0].type == "stackline" || this.finalSeries[0].type == "stackbar";
      }
      return false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isPolar) ? _c('acechartandroidpie', {
    ref: "pie",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isRose) ? _c('acechartandroidrose', {
    ref: "rose",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isScatter) ? _c('acechartandroidscatter', {
    ref: "scatter",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isRadar) ? _c('acechartandroidradar', {
    ref: "radar",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isGauge) ? _c('acechartandroidgauge', {
    ref: "gauge",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isFunnel) ? _c('acechartandroidfunnel', {
    ref: "funnel",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isProgress) ? _c('acechartandroidprogress', {
    ref: "progress",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isMix) ? _c('acechartandroid', {
    ref: "chart",
    staticClass: ["default-chart-style"],
    attrs: {
      "option": _vm.options
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/asp/Desktop/Weex-Awesome-App/weex-awesome-app/node_modules/weex-acechart-js/src/lib/acechart-web.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-706a03a0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexRaxAcechartCore = __webpack_require__(0);

var weexraxacechartcore = _interopRequireWildcard(_weexRaxAcechartCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {}; //
//
//
//

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isAndroid) ? _c('chartandroid', {
    ref: "chartandroid",
    staticClass: ["chart-style"],
    attrs: {
      "option": _vm.convertedOptions
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : (_vm.isIOS) ? _c('chartios', {
    ref: "chartios",
    staticClass: ["chart-style"],
    attrs: {
      "option": _vm.convertedOptions
    },
    on: {
      "onHighlightChanged": _vm.onHighlightChanged
    }
  }) : _c('chartWeb', {
    staticClass: ["chart-style"],
    attrs: {
      "option": _vm.convertedOptions
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/asp/Desktop/Weex-Awesome-App/weex-awesome-app/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "chart": {
    "height": "700",
    "width": "750"
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _weexAcechartJs = __webpack_require__(1);

var _weexAcechartJs2 = _interopRequireDefault(_weexAcechartJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WeexAceChart: _weexAcechartJs2.default },
    computed: {
        option: function option() {
            return {
                "enableDataDecoratorAnimation": true,
                "enableGestureSimultaneously": true,
                "tooltip": {
                    // "jointShadowSize": 0.01,
                    // "jointSize": 10,
                    hidden: true
                },
                "xAxises": [{ // 最多三个，三个时候 下下上
                    "xCategories": function () {
                        var r = [];
                        for (var i = 0; i < 3; i++) {
                            r.push('name' + i);
                        }
                        return r;
                    }() //["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                }],
                "legend": {
                    hidden: false
                },
                "series": [{
                    displayLegend: true,
                    "name": 'test1',
                    "type": 'pie', // => 'line', 'bar', 'scatter', 'stackline', 'stackbar'
                    "displayJoint": false,
                    "isClockwise": true,
                    "colors": ['#ec9900', '#9b59b6', '#2ecc71', '#3498db', '#e74c3c', '#e67e22', '#f1c40f'],
                    "points": [function () {
                        var r = [];
                        for (var i = 0; i < 3; i++) {
                            if (i < 3) {
                                r.push(5);
                            } else if (i < 7) {
                                r.push(5);
                            } else r.push(99);
                        }
                        return r;
                    }()],
                    "innerRatio": 0.9,
                    "outterRatio": 0.6,
                    indicators: {
                        style: 'around',
                        data: [{
                            text: 'abc1',
                            desc: '456',
                            lineWidth: 10
                        }, {
                            text: 'abc2',
                            desc: '456'
                        }, {
                            text: 'abc3',
                            desc: '456',
                            lineColor: 'blue'
                        }]
                        // startAngle iOS处理从顶部开始
                        // clockWise  顺时针
                    } }]
            };
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('weex-ace-chart', {
    staticClass: ["chart"],
    attrs: {
      "option": _vm.option
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);