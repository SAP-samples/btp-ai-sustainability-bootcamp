!(function (e) {
  function t(i) {
    if (a[i]) return a[i].exports;
    var s = (a[i] = {
      exports: {},
      id: i,
      loaded: !1,
    });
    return e[i].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
  }
  var a = {};
  return (t.m = e), (t.c = a), (t.p = ""), t(0);
})([
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    var s = a(147),
      n = i(s),
      u = a(112),
      r = i(u),
      l = a(247),
      o = i(l),
      m = a(2),
      p = i(m),
      T = a(13),
      c = i(T),
      d = a(144),
      S = i(d),
      h = a(3),
      v = i(h),
      y = a(145),
      f = i(y),
      _ = a(1),
      x = i(_);
    f["default"].init();
    var M = [
        "dry",
        "drugs",
        "milk",
        "frozen",
        "meat",
        "veg",
        "magazines",
        "convenience",
      ],
      g = [
        "dry_action",
        "drugs_action",
        "meat_action",
        "veg_action",
        "convenience_action",
      ],
      C = function (e) {
        return M.reduce(function (t, a) {
          return t + e[a];
        }, 0);
      },
      E = function (e, t) {
        var a =
            arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
          i =
            arguments.length <= 3 || void 0 === arguments[3]
              ? 0.5
              : arguments[3];
        return t.reduce(function (e, t) {
          return v["default"].assign(
            {},
            e,
            (0, n["default"])({}, t, e[t] * (Math.random() * a + i))
          );
        }, v["default"].assign({}, e));
      };
    c["default"].addFilter(function (e) {
      return v["default"].assign({}, e, {
        frankfurt: E(e.frankfurt, M.concat(g), 0, 40),
        lastYear: E(e.lastYear, M.concat(g), 0, 40),
        plan: E(e.plan, M.concat(g), 0, 40),
        munich: E(e.munich, M.concat(g), 0, 40),
        berlin: E(e.berlin, M.concat(g), 0, 40),
        dresden: E(e.dresden, M.concat(g), 0, 40),
      });
    }),
      c["default"].addFilter(function (e) {
        return v["default"].assign({}, e, {
          frankfurt: E(
            e.frankfurt,
            M.concat(g),
            0,
            p["default"].state.frankfurtMultiplier
          ),
        });
      }),
      c["default"].addFilter(function (e) {
        return 6 !== (0, x["default"])(e.frankfurt.timestamp).day()
          ? e
          : v["default"].assign({}, e, {
              frankfurt: E(e.frankfurt, M.concat(g), 0, 2),
              lastYear: E(e.lastYear, M.concat(g), 0, 2),
              plan: E(e.plan, M.concat(g), 0, 2),
              munich: E(e.munich, M.concat(g), 0, 2),
              berlin: E(e.berlin, M.concat(g), 0, 2),
              dresden: E(e.dresden, M.concat(g), 0, 2),
            });
      }),
      c["default"].addFilter(function (e) {
        return 5 !== (0, x["default"])(e.frankfurt.timestamp).day()
          ? e
          : v["default"].assign({}, e, {
              frankfurt: E(e.frankfurt, M.concat(g), 0, 1.5),
              lastYear: E(e.lastYear, M.concat(g), 0, 1.5),
              plan: E(e.plan, M.concat(g), 0, 1.5),
              munich: E(e.munich, M.concat(g), 0, 1.5),
              berlin: E(e.berlin, M.concat(g), 0, 1.5),
              dresden: E(e.dresden, M.concat(g), 0, 1.5),
            });
      }),
      c["default"].addFilter(function (e) {
        return v["default"].assign({}, e, {
          lastYear: E(e.lastYear, M.concat(g)),
          plan: E(e.plan, M.concat(g)),
          munich: E(e.munich, M.concat(g), 0.5, 1),
          berlin: E(e.berlin, M.concat(g), 0.75, 1),
          dresden: E(e.dresden, M.concat(g), 0.9, 1),
        });
      }),
      c["default"].addFilter(function (e) {
        return v["default"].merge({}, e, {
          frankfurt: {
            all: C(e.frankfurt),
          },
          lastYear: {
            all: C(e.lastYear),
          },
          plan: {
            all: C(e.plan),
          },
          munich: {
            all: C(e.munich),
          },
          berlin: {
            all: C(e.berlin),
          },
          dresden: {
            all: C(e.dresden),
          },
        });
      }),
      c["default"].addObserver({
        update: function (e) {
          e.frankfurt.notifications &&
            p["default"].addNotification(e.frankfurt.notifications),
            "convenienceOffer" === e.frankfurt.notifications &&
              (p["default"].state.convenienceOffer = !0);
        },
      }),
      c["default"].addObserver({
        update: function (e) {
          "convenienceOffer" === e.frankfurt.notifications &&
            ((p["default"].state.convenienceOffer = !0),
            p["default"].pauseRevsim());
        },
      }),
      c["default"].addObserver({
        update: function (e) {
          "dryAction" === e.frankfurt.actions &&
            (p["default"].addNotification("dry"),
            (p["default"].state.heatmapAnnotations.dry = "dry"),
            p["default"].pauseRevsim());
        },
      }),
      c["default"].addObserver({
        update: function (e) {
          "vegAction" === e.frankfurt.actions &&
            (p["default"].addNotification("veg"),
            (p["default"].state.heatmapAnnotations.veg = "veg"),
            p["default"].pauseRevsim());
        },
      }),
      c["default"].init(6).start(),
      S["default"].start(),
      new r["default"]({
        el: "body",
        components: {
          App: o["default"],
        },
      });
  },
  function (e, t, a) {
    (function (e) {
      !(function (t, a) {
        e.exports = a();
      })(this, function () {
        "use strict";

        function t() {
          return Ja.apply(null, arguments);
        }

        function i(e) {
          Ja = e;
        }

        function s(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }

        function n(e) {
          return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
          );
        }

        function u(e, t) {
          var a,
            i = [];
          for (a = 0; a < e.length; ++a) i.push(t(e[a], a));
          return i;
        }

        function r(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }

        function l(e, t) {
          for (var a in t) r(t, a) && (e[a] = t[a]);
          return (
            r(t, "toString") && (e.toString = t.toString),
            r(t, "valueOf") && (e.valueOf = t.valueOf),
            e
          );
        }

        function o(e, t, a, i) {
          return Ye(e, t, a, i, !0).utc();
        }

        function m() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
          };
        }

        function p(e) {
          return null == e._pf && (e._pf = m()), e._pf;
        }

        function T(e) {
          if (null == e._isValid) {
            var t = p(e);
            (e._isValid = !(
              isNaN(e._d.getTime()) ||
              !(t.overflow < 0) ||
              t.empty ||
              t.invalidMonth ||
              t.invalidWeekday ||
              t.nullInput ||
              t.invalidFormat ||
              t.userInvalidated
            )),
              e._strict &&
                (e._isValid =
                  e._isValid &&
                  0 === t.charsLeftOver &&
                  0 === t.unusedTokens.length &&
                  void 0 === t.bigHour);
          }
          return e._isValid;
        }

        function c(e) {
          var t = o(NaN);
          return null != e ? l(p(t), e) : (p(t).userInvalidated = !0), t;
        }

        function d(e) {
          return void 0 === e;
        }

        function S(e, t) {
          var a, i, s;
          if (
            (d(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            d(t._i) || (e._i = t._i),
            d(t._f) || (e._f = t._f),
            d(t._l) || (e._l = t._l),
            d(t._strict) || (e._strict = t._strict),
            d(t._tzm) || (e._tzm = t._tzm),
            d(t._isUTC) || (e._isUTC = t._isUTC),
            d(t._offset) || (e._offset = t._offset),
            d(t._pf) || (e._pf = p(t)),
            d(t._locale) || (e._locale = t._locale),
            Xa.length > 0)
          )
            for (a in Xa) (i = Xa[a]), (s = t[i]), d(s) || (e[i] = s);
          return e;
        }

        function h(e) {
          S(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            qa === !1 && ((qa = !0), t.updateOffset(this), (qa = !1));
        }

        function v(e) {
          return e instanceof h || (null != e && null != e._isAMomentObject);
        }

        function y(e) {
          return 0 > e ? Math.ceil(e) : Math.floor(e);
        }

        function f(e) {
          var t = +e,
            a = 0;
          return 0 !== t && isFinite(t) && (a = y(t)), a;
        }

        function _(e, t, a) {
          var i,
            s = Math.min(e.length, t.length),
            n = Math.abs(e.length - t.length),
            u = 0;
          for (i = 0; s > i; i++)
            ((a && e[i] !== t[i]) || (!a && f(e[i]) !== f(t[i]))) && u++;
          return u + n;
        }

        function x() {}

        function M(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }

        function g(e) {
          for (var t, a, i, s, n = 0; n < e.length; ) {
            for (
              s = M(e[n]).split("-"),
                t = s.length,
                a = M(e[n + 1]),
                a = a ? a.split("-") : null;
              t > 0;

            ) {
              if ((i = C(s.slice(0, t).join("-")))) return i;
              if (a && a.length >= t && _(s, a, !0) >= t - 1) break;
              t--;
            }
            n++;
          }
          return null;
        }

        function C(t) {
          var i = null;
          if (!Ka[t] && "undefined" != typeof e && e && e.exports)
            try {
              (i = Va._abbr), a(177)("./" + t), E(i);
            } catch (s) {}
          return Ka[t];
        }

        function E(e, t) {
          var a;
          return e && ((a = d(t) ? L(e) : D(e, t)), a && (Va = a)), Va._abbr;
        }

        function D(e, t) {
          return null !== t
            ? ((t.abbr = e),
              (Ka[e] = Ka[e] || new x()),
              Ka[e].set(t),
              E(e),
              Ka[e])
            : (delete Ka[e], null);
        }

        function L(e) {
          var t;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return Va;
          if (!s(e)) {
            if ((t = C(e))) return t;
            e = [e];
          }
          return g(e);
        }

        function w(e, t) {
          var a = e.toLowerCase();
          $a[a] = $a[a + "s"] = $a[t] = e;
        }

        function k(e) {
          return "string" == typeof e ? $a[e] || $a[e.toLowerCase()] : void 0;
        }

        function N(e) {
          var t,
            a,
            i = {};
          for (a in e) r(e, a) && ((t = k(a)), t && (i[t] = e[a]));
          return i;
        }

        function Y(e) {
          return (
            e instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }

        function j(e, a) {
          return function (i) {
            return null != i
              ? (z(this, e, i), t.updateOffset(this, a), this)
              : b(this, e);
          };
        }

        function b(e, t) {
          return e.isValid()
            ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            : NaN;
        }

        function z(e, t, a) {
          e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a);
        }

        function I(e, t) {
          var a;
          if ("object" == typeof e) for (a in e) this.set(a, e[a]);
          else if (((e = k(e)), Y(this[e]))) return this[e](t);
          return this;
        }

        function A(e, t, a) {
          var i = "" + Math.abs(e),
            s = t - i.length,
            n = e >= 0;
          return (
            (n ? (a ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, s)).toString().substr(1) +
            i
          );
        }

        function O(e, t, a, i) {
          var s = i;
          "string" == typeof i &&
            (s = function () {
              return this[i]();
            }),
            e && (ii[e] = s),
            t &&
              (ii[t[0]] = function () {
                return A(s.apply(this, arguments), t[1], t[2]);
              }),
            a &&
              (ii[a] = function () {
                return this.localeData().ordinal(s.apply(this, arguments), e);
              });
        }

        function H(e) {
          return e.match(/\[[\s\S]/)
            ? e.replace(/^\[|\]$/g, "")
            : e.replace(/\\/g, "");
        }

        function U(e) {
          var t,
            a,
            i = e.match(ei);
          for (t = 0, a = i.length; a > t; t++)
            ii[i[t]] ? (i[t] = ii[i[t]]) : (i[t] = H(i[t]));
          return function (s) {
            var n = "";
            for (t = 0; a > t; t++)
              n += i[t] instanceof Function ? i[t].call(s, e) : i[t];
            return n;
          };
        }

        function R(e, t) {
          return e.isValid()
            ? ((t = P(t, e.localeData())), (ai[t] = ai[t] || U(t)), ai[t](e))
            : e.localeData().invalidDate();
        }

        function P(e, t) {
          function a(e) {
            return t.longDateFormat(e) || e;
          }
          var i = 5;
          for (ti.lastIndex = 0; i >= 0 && ti.test(e); )
            (e = e.replace(ti, a)), (ti.lastIndex = 0), (i -= 1);
          return e;
        }

        function Q(e, t, a) {
          xi[e] = Y(t)
            ? t
            : function (e, i) {
                return e && a ? a : t;
              };
        }

        function W(e, t) {
          return r(xi, e) ? xi[e](t._strict, t._locale) : new RegExp(F(e));
        }

        function F(e) {
          return B(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, a, i, s) {
                  return t || a || i || s;
                }
              )
          );
        }

        function B(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }

        function G(e, t) {
          var a,
            i = t;
          for (
            "string" == typeof e && (e = [e]),
              "number" == typeof t &&
                (i = function (e, a) {
                  a[t] = f(e);
                }),
              a = 0;
            a < e.length;
            a++
          )
            Mi[e[a]] = i;
        }

        function Z(e, t) {
          G(e, function (e, a, i, s) {
            (i._w = i._w || {}), t(e, i._w, i, s);
          });
        }

        function J(e, t, a) {
          null != t && r(Mi, e) && Mi[e](t, a._a, a, e);
        }

        function V(e, t) {
          return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
        }

        function X(e, t) {
          return s(this._months)
            ? this._months[e.month()]
            : this._months[ji.test(t) ? "format" : "standalone"][e.month()];
        }

        function q(e, t) {
          return s(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[ji.test(t) ? "format" : "standalone"][
                e.month()
              ];
        }

        function K(e, t, a) {
          var i, s, n;
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              i = 0;
            12 > i;
            i++
          ) {
            if (
              ((s = o([2e3, i])),
              a &&
                !this._longMonthsParse[i] &&
                ((this._longMonthsParse[i] = new RegExp(
                  "^" + this.months(s, "").replace(".", "") + "$",
                  "i"
                )),
                (this._shortMonthsParse[i] = new RegExp(
                  "^" + this.monthsShort(s, "").replace(".", "") + "$",
                  "i"
                ))),
              a ||
                this._monthsParse[i] ||
                ((n =
                  "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
                (this._monthsParse[i] = new RegExp(n.replace(".", ""), "i"))),
              a && "MMMM" === t && this._longMonthsParse[i].test(e))
            )
              return i;
            if (a && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
            if (!a && this._monthsParse[i].test(e)) return i;
          }
        }

        function $(e, t) {
          var a;
          return e.isValid()
            ? "string" == typeof t &&
              ((t = e.localeData().monthsParse(t)), "number" != typeof t)
              ? e
              : ((a = Math.min(e.date(), V(e.year(), t))),
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a),
                e)
            : e;
        }

        function ee(e) {
          return null != e
            ? ($(this, e), t.updateOffset(this, !0), this)
            : b(this, "Month");
        }

        function te() {
          return V(this.year(), this.month());
        }

        function ae(e) {
          return this._monthsParseExact
            ? (r(this, "_monthsRegex") || se.call(this),
              e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
        }

        function ie(e) {
          return this._monthsParseExact
            ? (r(this, "_monthsRegex") || se.call(this),
              e ? this._monthsStrictRegex : this._monthsRegex)
            : this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex;
        }

        function se() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            a,
            i = [],
            s = [],
            n = [];
          for (t = 0; 12 > t; t++)
            (a = o([2e3, t])),
              i.push(this.monthsShort(a, "")),
              s.push(this.months(a, "")),
              n.push(this.months(a, "")),
              n.push(this.monthsShort(a, ""));
          for (i.sort(e), s.sort(e), n.sort(e), t = 0; 12 > t; t++)
            (i[t] = B(i[t])), (s[t] = B(s[t])), (n[t] = B(n[t]));
          (this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + s.join("|") + ")$",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + i.join("|") + ")$",
              "i"
            ));
        }

        function ne(e) {
          var t,
            a = e._a;
          return (
            a &&
              -2 === p(e).overflow &&
              ((t =
                a[Ci] < 0 || a[Ci] > 11
                  ? Ci
                  : a[Ei] < 1 || a[Ei] > V(a[gi], a[Ci])
                  ? Ei
                  : a[Di] < 0 ||
                    a[Di] > 24 ||
                    (24 === a[Di] &&
                      (0 !== a[Li] || 0 !== a[wi] || 0 !== a[ki]))
                  ? Di
                  : a[Li] < 0 || a[Li] > 59
                  ? Li
                  : a[wi] < 0 || a[wi] > 59
                  ? wi
                  : a[ki] < 0 || a[ki] > 999
                  ? ki
                  : -1),
              p(e)._overflowDayOfYear && (gi > t || t > Ei) && (t = Ei),
              p(e)._overflowWeeks && -1 === t && (t = Ni),
              p(e)._overflowWeekday && -1 === t && (t = Yi),
              (p(e).overflow = t)),
            e
          );
        }

        function ue(e) {
          t.suppressDeprecationWarnings === !1 &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
        }

        function re(e, t) {
          var a = !0;
          return l(function () {
            return (
              a &&
                (ue(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(arguments).join(", ") +
                    "\n" +
                    new Error().stack
                ),
                (a = !1)),
              t.apply(this, arguments)
            );
          }, t);
        }

        function le(e, t) {
          Oi[e] || (ue(t), (Oi[e] = !0));
        }

        function oe(e) {
          var t,
            a,
            i,
            s,
            n,
            u,
            r = e._i,
            l = Hi.exec(r) || Ui.exec(r);
          if (l) {
            for (p(e).iso = !0, t = 0, a = Pi.length; a > t; t++)
              if (Pi[t][1].exec(l[1])) {
                (s = Pi[t][0]), (i = Pi[t][2] !== !1);
                break;
              }
            if (null == s) return void (e._isValid = !1);
            if (l[3]) {
              for (t = 0, a = Qi.length; a > t; t++)
                if (Qi[t][1].exec(l[3])) {
                  n = (l[2] || " ") + Qi[t][0];
                  break;
                }
              if (null == n) return void (e._isValid = !1);
            }
            if (!i && null != n) return void (e._isValid = !1);
            if (l[4]) {
              if (!Ri.exec(l[4])) return void (e._isValid = !1);
              u = "Z";
            }
            (e._f = s + (n || "") + (u || "")), Ce(e);
          } else e._isValid = !1;
        }

        function me(e) {
          var a = Wi.exec(e._i);
          return null !== a
            ? void (e._d = new Date(+a[1]))
            : (oe(e),
              void (
                e._isValid === !1 &&
                (delete e._isValid, t.createFromInputFallback(e))
              ));
        }

        function pe(e, t, a, i, s, n, u) {
          var r = new Date(e, t, a, i, s, n, u);
          return (
            100 > e && e >= 0 && isFinite(r.getFullYear()) && r.setFullYear(e),
            r
          );
        }

        function Te(e) {
          var t = new Date(Date.UTC.apply(null, arguments));
          return (
            100 > e &&
              e >= 0 &&
              isFinite(t.getUTCFullYear()) &&
              t.setUTCFullYear(e),
            t
          );
        }

        function ce(e) {
          return de(e) ? 366 : 365;
        }

        function de(e) {
          return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
        }

        function Se() {
          return de(this.year());
        }

        function he(e, t, a) {
          var i = 7 + t - a,
            s = (7 + Te(e, 0, i).getUTCDay() - t) % 7;
          return -s + i - 1;
        }

        function ve(e, t, a, i, s) {
          var n,
            u,
            r = (7 + a - i) % 7,
            l = he(e, i, s),
            o = 1 + 7 * (t - 1) + r + l;
          return (
            0 >= o
              ? ((n = e - 1), (u = ce(n) + o))
              : o > ce(e)
              ? ((n = e + 1), (u = o - ce(e)))
              : ((n = e), (u = o)),
            {
              year: n,
              dayOfYear: u,
            }
          );
        }

        function ye(e, t, a) {
          var i,
            s,
            n = he(e.year(), t, a),
            u = Math.floor((e.dayOfYear() - n - 1) / 7) + 1;
          return (
            1 > u
              ? ((s = e.year() - 1), (i = u + fe(s, t, a)))
              : u > fe(e.year(), t, a)
              ? ((i = u - fe(e.year(), t, a)), (s = e.year() + 1))
              : ((s = e.year()), (i = u)),
            {
              week: i,
              year: s,
            }
          );
        }

        function fe(e, t, a) {
          var i = he(e, t, a),
            s = he(e + 1, t, a);
          return (ce(e) - i + s) / 7;
        }

        function _e(e, t, a) {
          return null != e ? e : null != t ? t : a;
        }

        function xe(e) {
          var a = new Date(t.now());
          return e._useUTC
            ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()]
            : [a.getFullYear(), a.getMonth(), a.getDate()];
        }

        function Me(e) {
          var t,
            a,
            i,
            s,
            n = [];
          if (!e._d) {
            for (
              i = xe(e),
                e._w && null == e._a[Ei] && null == e._a[Ci] && ge(e),
                e._dayOfYear &&
                  ((s = _e(e._a[gi], i[gi])),
                  e._dayOfYear > ce(s) && (p(e)._overflowDayOfYear = !0),
                  (a = Te(s, 0, e._dayOfYear)),
                  (e._a[Ci] = a.getUTCMonth()),
                  (e._a[Ei] = a.getUTCDate())),
                t = 0;
              3 > t && null == e._a[t];
              ++t
            )
              e._a[t] = n[t] = i[t];
            for (; 7 > t; t++)
              e._a[t] = n[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[Di] &&
              0 === e._a[Li] &&
              0 === e._a[wi] &&
              0 === e._a[ki] &&
              ((e._nextDay = !0), (e._a[Di] = 0)),
              (e._d = (e._useUTC ? Te : pe).apply(null, n)),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[Di] = 24);
          }
        }

        function ge(e) {
          var t, a, i, s, n, u, r, l;
          (t = e._w),
            null != t.GG || null != t.W || null != t.E
              ? ((n = 1),
                (u = 4),
                (a = _e(t.GG, e._a[gi], ye(je(), 1, 4).year)),
                (i = _e(t.W, 1)),
                (s = _e(t.E, 1)),
                (1 > s || s > 7) && (l = !0))
              : ((n = e._locale._week.dow),
                (u = e._locale._week.doy),
                (a = _e(t.gg, e._a[gi], ye(je(), n, u).year)),
                (i = _e(t.w, 1)),
                null != t.d
                  ? ((s = t.d), (0 > s || s > 6) && (l = !0))
                  : null != t.e
                  ? ((s = t.e + n), (t.e < 0 || t.e > 6) && (l = !0))
                  : (s = n)),
            1 > i || i > fe(a, n, u)
              ? (p(e)._overflowWeeks = !0)
              : null != l
              ? (p(e)._overflowWeekday = !0)
              : ((r = ve(a, i, s, n, u)),
                (e._a[gi] = r.year),
                (e._dayOfYear = r.dayOfYear));
        }

        function Ce(e) {
          if (e._f === t.ISO_8601) return void oe(e);
          (e._a = []), (p(e).empty = !0);
          var a,
            i,
            s,
            n,
            u,
            r = "" + e._i,
            l = r.length,
            o = 0;
          for (s = P(e._f, e._locale).match(ei) || [], a = 0; a < s.length; a++)
            (n = s[a]),
              (i = (r.match(W(n, e)) || [])[0]),
              i &&
                ((u = r.substr(0, r.indexOf(i))),
                u.length > 0 && p(e).unusedInput.push(u),
                (r = r.slice(r.indexOf(i) + i.length)),
                (o += i.length)),
              ii[n]
                ? (i ? (p(e).empty = !1) : p(e).unusedTokens.push(n),
                  J(n, i, e))
                : e._strict && !i && p(e).unusedTokens.push(n);
          (p(e).charsLeftOver = l - o),
            r.length > 0 && p(e).unusedInput.push(r),
            p(e).bigHour === !0 &&
              e._a[Di] <= 12 &&
              e._a[Di] > 0 &&
              (p(e).bigHour = void 0),
            (e._a[Di] = Ee(e._locale, e._a[Di], e._meridiem)),
            Me(e),
            ne(e);
        }

        function Ee(e, t, a) {
          var i;
          return null == a
            ? t
            : null != e.meridiemHour
            ? e.meridiemHour(t, a)
            : null != e.isPM
            ? ((i = e.isPM(a)),
              i && 12 > t && (t += 12),
              i || 12 !== t || (t = 0),
              t)
            : t;
        }

        function De(e) {
          var t, a, i, s, n;
          if (0 === e._f.length)
            return (p(e).invalidFormat = !0), void (e._d = new Date(NaN));
          for (s = 0; s < e._f.length; s++)
            (n = 0),
              (t = S({}, e)),
              null != e._useUTC && (t._useUTC = e._useUTC),
              (t._f = e._f[s]),
              Ce(t),
              T(t) &&
                ((n += p(t).charsLeftOver),
                (n += 10 * p(t).unusedTokens.length),
                (p(t).score = n),
                (null == i || i > n) && ((i = n), (a = t)));
          l(e, a || t);
        }

        function Le(e) {
          if (!e._d) {
            var t = N(e._i);
            (e._a = u(
              [
                t.year,
                t.month,
                t.day || t.date,
                t.hour,
                t.minute,
                t.second,
                t.millisecond,
              ],
              function (e) {
                return e && parseInt(e, 10);
              }
            )),
              Me(e);
          }
        }

        function we(e) {
          var t = new h(ne(ke(e)));
          return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
        }

        function ke(e) {
          var t = e._i,
            a = e._f;
          return (
            (e._locale = e._locale || L(e._l)),
            null === t || (void 0 === a && "" === t)
              ? c({
                  nullInput: !0,
                })
              : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                v(t)
                  ? new h(ne(t))
                  : (s(a) ? De(e) : a ? Ce(e) : n(t) ? (e._d = t) : Ne(e),
                    T(e) || (e._d = null),
                    e))
          );
        }

        function Ne(e) {
          var a = e._i;
          void 0 === a
            ? (e._d = new Date(t.now()))
            : n(a)
            ? (e._d = new Date(+a))
            : "string" == typeof a
            ? me(e)
            : s(a)
            ? ((e._a = u(a.slice(0), function (e) {
                return parseInt(e, 10);
              })),
              Me(e))
            : "object" == typeof a
            ? Le(e)
            : "number" == typeof a
            ? (e._d = new Date(a))
            : t.createFromInputFallback(e);
        }

        function Ye(e, t, a, i, s) {
          var n = {};
          return (
            "boolean" == typeof a && ((i = a), (a = void 0)),
            (n._isAMomentObject = !0),
            (n._useUTC = n._isUTC = s),
            (n._l = a),
            (n._i = e),
            (n._f = t),
            (n._strict = i),
            we(n)
          );
        }

        function je(e, t, a, i) {
          return Ye(e, t, a, i, !1);
        }

        function be(e, t) {
          var a, i;
          if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return je();
          for (a = t[0], i = 1; i < t.length; ++i)
            (!t[i].isValid() || t[i][e](a)) && (a = t[i]);
          return a;
        }

        function ze() {
          var e = [].slice.call(arguments, 0);
          return be("isBefore", e);
        }

        function Ie() {
          var e = [].slice.call(arguments, 0);
          return be("isAfter", e);
        }

        function Ae(e) {
          var t = N(e),
            a = t.year || 0,
            i = t.quarter || 0,
            s = t.month || 0,
            n = t.week || 0,
            u = t.day || 0,
            r = t.hour || 0,
            l = t.minute || 0,
            o = t.second || 0,
            m = t.millisecond || 0;
          (this._milliseconds = +m + 1e3 * o + 6e4 * l + 36e5 * r),
            (this._days = +u + 7 * n),
            (this._months = +s + 3 * i + 12 * a),
            (this._data = {}),
            (this._locale = L()),
            this._bubble();
        }

        function Oe(e) {
          return e instanceof Ae;
        }

        function He(e, t) {
          O(e, 0, 0, function () {
            var e = this.utcOffset(),
              a = "+";
            return (
              0 > e && ((e = -e), (a = "-")),
              a + A(~~(e / 60), 2) + t + A(~~e % 60, 2)
            );
          });
        }

        function Ue(e, t) {
          var a = (t || "").match(e) || [],
            i = a[a.length - 1] || [],
            s = (i + "").match(Ji) || ["-", 0, 0],
            n = +(60 * s[1]) + f(s[2]);
          return "+" === s[0] ? n : -n;
        }

        function Re(e, a) {
          var i, s;
          return a._isUTC
            ? ((i = a.clone()),
              (s = (v(e) || n(e) ? +e : +je(e)) - +i),
              i._d.setTime(+i._d + s),
              t.updateOffset(i, !1),
              i)
            : je(e).local();
        }

        function Pe(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
        }

        function Qe(e, a) {
          var i,
            s = this._offset || 0;
          return this.isValid()
            ? null != e
              ? ("string" == typeof e
                  ? (e = Ue(yi, e))
                  : Math.abs(e) < 16 && (e = 60 * e),
                !this._isUTC && a && (i = Pe(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != i && this.add(i, "m"),
                s !== e &&
                  (!a || this._changeInProgress
                    ? st(this, $e(e - s, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      t.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this)
              : this._isUTC
              ? s
              : Pe(this)
            : null != e
            ? this
            : NaN;
        }

        function We(e, t) {
          return null != e
            ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
            : -this.utcOffset();
        }

        function Fe(e) {
          return this.utcOffset(0, e);
        }

        function Be(e) {
          return (
            this._isUTC &&
              (this.utcOffset(0, e),
              (this._isUTC = !1),
              e && this.subtract(Pe(this), "m")),
            this
          );
        }

        function Ge() {
          return (
            this._tzm
              ? this.utcOffset(this._tzm)
              : "string" == typeof this._i && this.utcOffset(Ue(vi, this._i)),
            this
          );
        }

        function Ze(e) {
          return this.isValid()
            ? ((e = e ? je(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 === 0)
            : !1;
        }

        function Je() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }

        function Ve() {
          if (!d(this._isDSTShifted)) return this._isDSTShifted;
          var e = {};
          if ((S(e, this), (e = ke(e)), e._a)) {
            var t = e._isUTC ? o(e._a) : je(e._a);
            this._isDSTShifted = this.isValid() && _(e._a, t.toArray()) > 0;
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        }

        function Xe() {
          return this.isValid() ? !this._isUTC : !1;
        }

        function qe() {
          return this.isValid() ? this._isUTC : !1;
        }

        function Ke() {
          return this.isValid() ? this._isUTC && 0 === this._offset : !1;
        }

        function $e(e, t) {
          var a,
            i,
            s,
            n = e,
            u = null;
          return (
            Oe(e)
              ? (n = {
                  ms: e._milliseconds,
                  d: e._days,
                  M: e._months,
                })
              : "number" == typeof e
              ? ((n = {}), t ? (n[t] = e) : (n.milliseconds = e))
              : (u = Vi.exec(e))
              ? ((a = "-" === u[1] ? -1 : 1),
                (n = {
                  y: 0,
                  d: f(u[Ei]) * a,
                  h: f(u[Di]) * a,
                  m: f(u[Li]) * a,
                  s: f(u[wi]) * a,
                  ms: f(u[ki]) * a,
                }))
              : (u = Xi.exec(e))
              ? ((a = "-" === u[1] ? -1 : 1),
                (n = {
                  y: et(u[2], a),
                  M: et(u[3], a),
                  d: et(u[4], a),
                  h: et(u[5], a),
                  m: et(u[6], a),
                  s: et(u[7], a),
                  w: et(u[8], a),
                }))
              : null == n
              ? (n = {})
              : "object" == typeof n &&
                ("from" in n || "to" in n) &&
                ((s = at(je(n.from), je(n.to))),
                (n = {}),
                (n.ms = s.milliseconds),
                (n.M = s.months)),
            (i = new Ae(n)),
            Oe(e) && r(e, "_locale") && (i._locale = e._locale),
            i
          );
        }

        function et(e, t) {
          var a = e && parseFloat(e.replace(",", "."));
          return (isNaN(a) ? 0 : a) * t;
        }

        function tt(e, t) {
          var a = {
            milliseconds: 0,
            months: 0,
          };
          return (
            (a.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(a.months, "M").isAfter(t) && --a.months,
            (a.milliseconds = +t - +e.clone().add(a.months, "M")),
            a
          );
        }

        function at(e, t) {
          var a;
          return e.isValid() && t.isValid()
            ? ((t = Re(t, e)),
              e.isBefore(t)
                ? (a = tt(e, t))
                : ((a = tt(t, e)),
                  (a.milliseconds = -a.milliseconds),
                  (a.months = -a.months)),
              a)
            : {
                milliseconds: 0,
                months: 0,
              };
        }

        function it(e, t) {
          return function (a, i) {
            var s, n;
            return (
              null === i ||
                isNaN(+i) ||
                (le(
                  t,
                  "moment()." +
                    t +
                    "(period, number) is deprecated. Please use moment()." +
                    t +
                    "(number, period)."
                ),
                (n = a),
                (a = i),
                (i = n)),
              (a = "string" == typeof a ? +a : a),
              (s = $e(a, i)),
              st(this, s, e),
              this
            );
          };
        }

        function st(e, a, i, s) {
          var n = a._milliseconds,
            u = a._days,
            r = a._months;
          e.isValid() &&
            ((s = null == s ? !0 : s),
            n && e._d.setTime(+e._d + n * i),
            u && z(e, "Date", b(e, "Date") + u * i),
            r && $(e, b(e, "Month") + r * i),
            s && t.updateOffset(e, u || r));
        }

        function nt(e, t) {
          var a = e || je(),
            i = Re(a, this).startOf("day"),
            s = this.diff(i, "days", !0),
            n =
              -6 > s
                ? "sameElse"
                : -1 > s
                ? "lastWeek"
                : 0 > s
                ? "lastDay"
                : 1 > s
                ? "sameDay"
                : 2 > s
                ? "nextDay"
                : 7 > s
                ? "nextWeek"
                : "sameElse",
            u = t && (Y(t[n]) ? t[n]() : t[n]);
          return this.format(u || this.localeData().calendar(n, this, je(a)));
        }

        function ut() {
          return new h(this);
        }

        function rt(e, t) {
          var a = v(e) ? e : je(e);
          return this.isValid() && a.isValid()
            ? ((t = k(d(t) ? "millisecond" : t)),
              "millisecond" === t ? +this > +a : +a < +this.clone().startOf(t))
            : !1;
        }

        function lt(e, t) {
          var a = v(e) ? e : je(e);
          return this.isValid() && a.isValid()
            ? ((t = k(d(t) ? "millisecond" : t)),
              "millisecond" === t ? +a > +this : +this.clone().endOf(t) < +a)
            : !1;
        }

        function ot(e, t, a) {
          return this.isAfter(e, a) && this.isBefore(t, a);
        }

        function mt(e, t) {
          var a,
            i = v(e) ? e : je(e);
          return this.isValid() && i.isValid()
            ? ((t = k(t || "millisecond")),
              "millisecond" === t
                ? +this === +i
                : ((a = +i),
                  +this.clone().startOf(t) <= a && a <= +this.clone().endOf(t)))
            : !1;
        }

        function pt(e, t) {
          return this.isSame(e, t) || this.isAfter(e, t);
        }

        function Tt(e, t) {
          return this.isSame(e, t) || this.isBefore(e, t);
        }

        function ct(e, t, a) {
          var i, s, n, u;
          return this.isValid()
            ? ((i = Re(e, this)),
              i.isValid()
                ? ((s = 6e4 * (i.utcOffset() - this.utcOffset())),
                  (t = k(t)),
                  "year" === t || "month" === t || "quarter" === t
                    ? ((u = dt(this, i)),
                      "quarter" === t ? (u /= 3) : "year" === t && (u /= 12))
                    : ((n = this - i),
                      (u =
                        "second" === t
                          ? n / 1e3
                          : "minute" === t
                          ? n / 6e4
                          : "hour" === t
                          ? n / 36e5
                          : "day" === t
                          ? (n - s) / 864e5
                          : "week" === t
                          ? (n - s) / 6048e5
                          : n)),
                  a ? u : y(u))
                : NaN)
            : NaN;
        }

        function dt(e, t) {
          var a,
            i,
            s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            n = e.clone().add(s, "months");
          return (
            0 > t - n
              ? ((a = e.clone().add(s - 1, "months")), (i = (t - n) / (n - a)))
              : ((a = e.clone().add(s + 1, "months")), (i = (t - n) / (a - n))),
            -(s + i)
          );
        }

        function St() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }

        function ht() {
          var e = this.clone().utc();
          return 0 < e.year() && e.year() <= 9999
            ? Y(Date.prototype.toISOString)
              ? this.toDate().toISOString()
              : R(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            : R(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        }

        function vt(e) {
          var a = R(this, e || t.defaultFormat);
          return this.localeData().postformat(a);
        }

        function yt(e, t) {
          return this.isValid() && ((v(e) && e.isValid()) || je(e).isValid())
            ? $e({
                to: this,
                from: e,
              })
                .locale(this.locale())
                .humanize(!t)
            : this.localeData().invalidDate();
        }

        function ft(e) {
          return this.from(je(), e);
        }

        function _t(e, t) {
          return this.isValid() && ((v(e) && e.isValid()) || je(e).isValid())
            ? $e({
                from: this,
                to: e,
              })
                .locale(this.locale())
                .humanize(!t)
            : this.localeData().invalidDate();
        }

        function xt(e) {
          return this.to(je(), e);
        }

        function Mt(e) {
          var t;
          return void 0 === e
            ? this._locale._abbr
            : ((t = L(e)), null != t && (this._locale = t), this);
        }

        function gt() {
          return this._locale;
        }

        function Ct(e) {
          switch ((e = k(e))) {
            case "year":
              this.month(0);
            case "quarter":
            case "month":
              this.date(1);
            case "week":
            case "isoWeek":
            case "day":
              this.hours(0);
            case "hour":
              this.minutes(0);
            case "minute":
              this.seconds(0);
            case "second":
              this.milliseconds(0);
          }
          return (
            "week" === e && this.weekday(0),
            "isoWeek" === e && this.isoWeekday(1),
            "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
            this
          );
        }

        function Et(e) {
          return (
            (e = k(e)),
            void 0 === e || "millisecond" === e
              ? this
              : this.startOf(e)
                  .add(1, "isoWeek" === e ? "week" : e)
                  .subtract(1, "ms")
          );
        }

        function Dt() {
          return +this._d - 6e4 * (this._offset || 0);
        }

        function Lt() {
          return Math.floor(+this / 1e3);
        }

        function wt() {
          return this._offset ? new Date(+this) : this._d;
        }

        function kt() {
          var e = this;
          return [
            e.year(),
            e.month(),
            e.date(),
            e.hour(),
            e.minute(),
            e.second(),
            e.millisecond(),
          ];
        }

        function Nt() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }

        function Yt() {
          return this.isValid() ? this.toISOString() : "null";
        }

        function jt() {
          return T(this);
        }

        function bt() {
          return l({}, p(this));
        }

        function zt() {
          return p(this).overflow;
        }

        function It() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }

        function At(e, t) {
          O(0, [e, e.length], 0, t);
        }

        function Ot(e) {
          return Pt.call(
            this,
            e,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }

        function Ht(e) {
          return Pt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }

        function Ut() {
          return fe(this.year(), 1, 4);
        }

        function Rt() {
          var e = this.localeData()._week;
          return fe(this.year(), e.dow, e.doy);
        }

        function Pt(e, t, a, i, s) {
          var n;
          return null == e
            ? ye(this, i, s).year
            : ((n = fe(e, i, s)),
              t > n && (t = n),
              Qt.call(this, e, t, a, i, s));
        }

        function Qt(e, t, a, i, s) {
          var n = ve(e, t, a, i, s),
            u = Te(n.year, 0, n.dayOfYear);
          return (
            this.year(u.getUTCFullYear()),
            this.month(u.getUTCMonth()),
            this.date(u.getUTCDate()),
            this
          );
        }

        function Wt(e) {
          return null == e
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (e - 1) + (this.month() % 3));
        }

        function Ft(e) {
          return ye(e, this._week.dow, this._week.doy).week;
        }

        function Bt() {
          return this._week.dow;
        }

        function Gt() {
          return this._week.doy;
        }

        function Zt(e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), "d");
        }

        function Jt(e) {
          var t = ye(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), "d");
        }

        function Vt(e, t) {
          return "string" != typeof e
            ? e
            : isNaN(e)
            ? ((e = t.weekdaysParse(e)), "number" == typeof e ? e : null)
            : parseInt(e, 10);
        }

        function Xt(e, t) {
          return s(this._weekdays)
            ? this._weekdays[e.day()]
            : this._weekdays[
                this._weekdays.isFormat.test(t) ? "format" : "standalone"
              ][e.day()];
        }

        function qt(e) {
          return this._weekdaysShort[e.day()];
        }

        function Kt(e) {
          return this._weekdaysMin[e.day()];
        }

        function $t(e, t, a) {
          var i, s, n;
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              i = 0;
            7 > i;
            i++
          ) {
            if (
              ((s = je([2e3, 1]).day(i)),
              a &&
                !this._fullWeekdaysParse[i] &&
                ((this._fullWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdays(s, "").replace(".", ".?") + "$",
                  "i"
                )),
                (this._shortWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdaysShort(s, "").replace(".", ".?") + "$",
                  "i"
                )),
                (this._minWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdaysMin(s, "").replace(".", ".?") + "$",
                  "i"
                ))),
              this._weekdaysParse[i] ||
                ((n =
                  "^" +
                  this.weekdays(s, "") +
                  "|^" +
                  this.weekdaysShort(s, "") +
                  "|^" +
                  this.weekdaysMin(s, "")),
                (this._weekdaysParse[i] = new RegExp(n.replace(".", ""), "i"))),
              a && "dddd" === t && this._fullWeekdaysParse[i].test(e))
            )
              return i;
            if (a && "ddd" === t && this._shortWeekdaysParse[i].test(e))
              return i;
            if (a && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
            if (!a && this._weekdaysParse[i].test(e)) return i;
          }
        }

        function ea(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e
            ? ((e = Vt(e, this.localeData())), this.add(e - t, "d"))
            : t;
        }

        function ta(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, "d");
        }

        function aa(e) {
          return this.isValid()
            ? null == e
              ? this.day() || 7
              : this.day(this.day() % 7 ? e : e - 7)
            : null != e
            ? this
            : NaN;
        }

        function ia(e) {
          var t =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5
            ) + 1;
          return null == e ? t : this.add(e - t, "d");
        }

        function sa() {
          return this.hours() % 12 || 12;
        }

        function na(e, t) {
          O(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }

        function ua(e, t) {
          return t._meridiemParse;
        }

        function ra(e) {
          return "p" === (e + "").toLowerCase().charAt(0);
        }

        function la(e, t, a) {
          return " "; /* e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"*/
        }

        function oa(e, t) {
          t[ki] = f(1e3 * ("0." + e));
        }

        function ma() {
          return this._isUTC ? "UTC" : "";
        }

        function pa() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }

        function Ta(e) {
          return je(1e3 * e);
        }

        function ca() {
          return je.apply(null, arguments).parseZone();
        }

        function da(e, t, a) {
          var i = this._calendar[e];
          return Y(i) ? i.call(t, a) : i;
        }

        function Sa(e) {
          var t = this._longDateFormat[e],
            a = this._longDateFormat[e.toUpperCase()];
          return t || !a
            ? t
            : ((this._longDateFormat[e] = a.replace(
                /MMMM|MM|DD|dddd/g,
                function (e) {
                  return e.slice(1);
                }
              )),
              this._longDateFormat[e]);
        }

        function ha() {
          return this._invalidDate;
        }

        function va(e) {
          return this._ordinal.replace("%d", e);
        }

        function ya(e) {
          return e;
        }

        function fa(e, t, a, i) {
          var s = this._relativeTime[a];
          return Y(s) ? s(e, t, a, i) : s.replace(/%d/i, e);
        }

        function _a(e, t) {
          var a = this._relativeTime[e > 0 ? "future" : "past"];
          return Y(a) ? a(t) : a.replace(/%s/i, t);
        }

        function xa(e) {
          var t, a;
          for (a in e) (t = e[a]), Y(t) ? (this[a] = t) : (this["_" + a] = t);
          this._ordinalParseLenient = new RegExp(
            this._ordinalParse.source + "|" + /\d{1,2}/.source
          );
        }

        function Ma(e, t, a, i) {
          var s = L(),
            n = o().set(i, t);
          return s[a](n, e);
        }

        function ga(e, t, a, i, s) {
          if (
            ("number" == typeof e && ((t = e), (e = void 0)),
            (e = e || ""),
            null != t)
          )
            return Ma(e, t, a, s);
          var n,
            u = [];
          for (n = 0; i > n; n++) u[n] = Ma(e, n, a, s);
          return u;
        }

        function Ca(e, t) {
          return ga(e, t, "months", 12, "month");
        }

        function Ea(e, t) {
          return ga(e, t, "monthsShort", 12, "month");
        }

        function Da(e, t) {
          return ga(e, t, "weekdays", 7, "day");
        }

        function La(e, t) {
          return ga(e, t, "weekdaysShort", 7, "day");
        }

        function wa(e, t) {
          return ga(e, t, "weekdaysMin", 7, "day");
        }

        function ka() {
          var e = this._data;
          return (
            (this._milliseconds = _s(this._milliseconds)),
            (this._days = _s(this._days)),
            (this._months = _s(this._months)),
            (e.milliseconds = _s(e.milliseconds)),
            (e.seconds = _s(e.seconds)),
            (e.minutes = _s(e.minutes)),
            (e.hours = _s(e.hours)),
            (e.months = _s(e.months)),
            (e.years = _s(e.years)),
            this
          );
        }

        function Na(e, t, a, i) {
          var s = $e(t, a);
          return (
            (e._milliseconds += i * s._milliseconds),
            (e._days += i * s._days),
            (e._months += i * s._months),
            e._bubble()
          );
        }

        function Ya(e, t) {
          return Na(this, e, t, 1);
        }

        function ja(e, t) {
          return Na(this, e, t, -1);
        }

        function ba(e) {
          return 0 > e ? Math.floor(e) : Math.ceil(e);
        }

        function za() {
          var e,
            t,
            a,
            i,
            s,
            n = this._milliseconds,
            u = this._days,
            r = this._months,
            l = this._data;
          return (
            (n >= 0 && u >= 0 && r >= 0) ||
              (0 >= n && 0 >= u && 0 >= r) ||
              ((n += 864e5 * ba(Aa(r) + u)), (u = 0), (r = 0)),
            (l.milliseconds = n % 1e3),
            (e = y(n / 1e3)),
            (l.seconds = e % 60),
            (t = y(e / 60)),
            (l.minutes = t % 60),
            (a = y(t / 60)),
            (l.hours = a % 24),
            (u += y(a / 24)),
            (s = y(Ia(u))),
            (r += s),
            (u -= ba(Aa(s))),
            (i = y(r / 12)),
            (r %= 12),
            (l.days = u),
            (l.months = r),
            (l.years = i),
            this
          );
        }

        function Ia(e) {
          return (4800 * e) / 146097;
        }

        function Aa(e) {
          return (146097 * e) / 4800;
        }

        function Oa(e) {
          var t,
            a,
            i = this._milliseconds;
          if (((e = k(e)), "month" === e || "year" === e))
            return (
              (t = this._days + i / 864e5),
              (a = this._months + Ia(t)),
              "month" === e ? a : a / 12
            );
          switch (((t = this._days + Math.round(Aa(this._months))), e)) {
            case "week":
              return t / 7 + i / 6048e5;
            case "day":
              return t + i / 864e5;
            case "hour":
              return 24 * t + i / 36e5;
            case "minute":
              return 1440 * t + i / 6e4;
            case "second":
              return 86400 * t + i / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + i;
            default:
              throw new Error("Unknown unit " + e);
          }
        }

        function Ha() {
          return (
            this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * f(this._months / 12)
          );
        }

        function Ua(e) {
          return function () {
            return this.as(e);
          };
        }

        function Ra(e) {
          return (e = k(e)), this[e + "s"]();
        }

        function Pa(e) {
          return function () {
            return this._data[e];
          };
        }

        function Qa() {
          return y(this.days() / 7);
        }

        function Wa(e, t, a, i, s) {
          return s.relativeTime(t || 1, !!a, e, i);
        }

        function Fa(e, t, a) {
          var i = $e(e).abs(),
            s = As(i.as("s")),
            n = As(i.as("m")),
            u = As(i.as("h")),
            r = As(i.as("d")),
            l = As(i.as("M")),
            o = As(i.as("y")),
            m = (s < Os.s && ["s", s]) ||
              (1 >= n && ["m"]) ||
              (n < Os.m && ["mm", n]) ||
              (1 >= u && ["h"]) ||
              (u < Os.h && ["hh", u]) ||
              (1 >= r && ["d"]) ||
              (r < Os.d && ["dd", r]) ||
              (1 >= l && ["M"]) ||
              (l < Os.M && ["MM", l]) ||
              (1 >= o && ["y"]) || ["yy", o];
          return (m[2] = t), (m[3] = +e > 0), (m[4] = a), Wa.apply(null, m);
        }

        function Ba(e, t) {
          return void 0 === Os[e]
            ? !1
            : void 0 === t
            ? Os[e]
            : ((Os[e] = t), !0);
        }

        function Ga(e) {
          var t = this.localeData(),
            a = Fa(this, !e, t);
          return e && (a = t.pastFuture(+this, a)), t.postformat(a);
        }

        function Za() {
          var e,
            t,
            a,
            i = Hs(this._milliseconds) / 1e3,
            s = Hs(this._days),
            n = Hs(this._months);
          (e = y(i / 60)),
            (t = y(e / 60)),
            (i %= 60),
            (e %= 60),
            (a = y(n / 12)),
            (n %= 12);
          var u = a,
            r = n,
            l = s,
            o = t,
            m = e,
            p = i,
            T = this.asSeconds();
          return T
            ? (0 > T ? "-" : "") +
                "P" +
                (u ? u + "Y" : "") +
                (r ? r + "M" : "") +
                (l ? l + "D" : "") +
                (o || m || p ? "T" : "") +
                (o ? o + "H" : "") +
                (m ? m + "M" : "") +
                (p ? p + "S" : "")
            : "P0D";
        }
        var Ja,
          Va,
          Xa = (t.momentProperties = []),
          qa = !1,
          Ka = {},
          $a = {},
          ei =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          ti = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          ai = {},
          ii = {},
          si = /\d/,
          ni = /\d\d/,
          ui = /\d{3}/,
          ri = /\d{4}/,
          li = /[+-]?\d{6}/,
          oi = /\d\d?/,
          mi = /\d\d\d\d?/,
          pi = /\d\d\d\d\d\d?/,
          Ti = /\d{1,3}/,
          ci = /\d{1,4}/,
          di = /[+-]?\d{1,6}/,
          Si = /\d+/,
          hi = /[+-]?\d+/,
          vi = /Z|[+-]\d\d:?\d\d/gi,
          yi = /Z|[+-]\d\d(?::?\d\d)?/gi,
          fi = /[+-]?\d+(\.\d{1,3})?/,
          _i =
            /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
          xi = {},
          Mi = {},
          gi = 0,
          Ci = 1,
          Ei = 2,
          Di = 3,
          Li = 4,
          wi = 5,
          ki = 6,
          Ni = 7,
          Yi = 8;
        O("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
          O("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          O("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          w("month", "M"),
          Q("M", oi),
          Q("MM", oi, ni),
          Q("MMM", function (e, t) {
            return t.monthsShortRegex(e);
          }),
          Q("MMMM", function (e, t) {
            return t.monthsRegex(e);
          }),
          G(["M", "MM"], function (e, t) {
            t[Ci] = f(e) - 1;
          }),
          G(["MMM", "MMMM"], function (e, t, a, i) {
            var s = a._locale.monthsParse(e, i, a._strict);
            null != s ? (t[Ci] = s) : (p(a).invalidMonth = e);
          });
        var ji = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
          bi =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          zi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          Ii = _i,
          Ai = _i,
          Oi = {};
        t.suppressDeprecationWarnings = !1;
        var Hi =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
          Ui =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
          Ri = /Z|[+-]\d\d(?::?\d\d)?/,
          Pi = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
          ],
          Qi = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          Wi = /^\/?Date\((\-?\d+)/i;
        (t.createFromInputFallback = re(
          "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          }
        )),
          O("Y", 0, 0, function () {
            var e = this.year();
            return 9999 >= e ? "" + e : "+" + e;
          }),
          O(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          O(0, ["YYYY", 4], 0, "year"),
          O(0, ["YYYYY", 5], 0, "year"),
          O(0, ["YYYYYY", 6, !0], 0, "year"),
          w("year", "y"),
          Q("Y", hi),
          Q("YY", oi, ni),
          Q("YYYY", ci, ri),
          Q("YYYYY", di, li),
          Q("YYYYYY", di, li),
          G(["YYYYY", "YYYYYY"], gi),
          G("YYYY", function (e, a) {
            a[gi] = 2 === e.length ? t.parseTwoDigitYear(e) : f(e);
          }),
          G("YY", function (e, a) {
            a[gi] = t.parseTwoDigitYear(e);
          }),
          G("Y", function (e, t) {
            t[gi] = parseInt(e, 10);
          }),
          (t.parseTwoDigitYear = function (e) {
            return f(e) + (f(e) > 68 ? 1900 : 2e3);
          });
        var Fi = j("FullYear", !1);
        t.ISO_8601 = function () {};
        var Bi = re(
            "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
            function () {
              var e = je.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? this > e
                  ? this
                  : e
                : c();
            }
          ),
          Gi = re(
            "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
            function () {
              var e = je.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : c();
            }
          ),
          Zi = function () {
            return Date.now ? Date.now() : +new Date();
          };
        He("Z", ":"),
          He("ZZ", ""),
          Q("Z", yi),
          Q("ZZ", yi),
          G(["Z", "ZZ"], function (e, t, a) {
            (a._useUTC = !0), (a._tzm = Ue(yi, e));
          });
        var Ji = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () {};
        var Vi = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
          Xi =
            /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        $e.fn = Ae.prototype;
        var qi = it(1, "add"),
          Ki = it(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var $i = re(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          }
        );
        O(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
          O(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          At("gggg", "weekYear"),
          At("ggggg", "weekYear"),
          At("GGGG", "isoWeekYear"),
          At("GGGGG", "isoWeekYear"),
          w("weekYear", "gg"),
          w("isoWeekYear", "GG"),
          Q("G", hi),
          Q("g", hi),
          Q("GG", oi, ni),
          Q("gg", oi, ni),
          Q("GGGG", ci, ri),
          Q("gggg", ci, ri),
          Q("GGGGG", di, li),
          Q("ggggg", di, li),
          Z(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, a, i) {
            t[i.substr(0, 2)] = f(e);
          }),
          Z(["gg", "GG"], function (e, a, i, s) {
            a[s] = t.parseTwoDigitYear(e);
          }),
          O("Q", 0, "Qo", "quarter"),
          w("quarter", "Q"),
          Q("Q", si),
          G("Q", function (e, t) {
            t[Ci] = 3 * (f(e) - 1);
          }),
          O("w", ["ww", 2], "wo", "week"),
          O("W", ["WW", 2], "Wo", "isoWeek"),
          w("week", "w"),
          w("isoWeek", "W"),
          Q("w", oi),
          Q("ww", oi, ni),
          Q("W", oi),
          Q("WW", oi, ni),
          Z(["w", "ww", "W", "WW"], function (e, t, a, i) {
            t[i.substr(0, 1)] = f(e);
          });
        var es = {
          dow: 0,
          doy: 6,
        };
        O("D", ["DD", 2], "Do", "date"),
          w("date", "D"),
          Q("D", oi),
          Q("DD", oi, ni),
          Q("Do", function (e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient;
          }),
          G(["D", "DD"], Ei),
          G("Do", function (e, t) {
            t[Ei] = f(e.match(oi)[0], 10);
          });
        var ts = j("Date", !0);
        O("d", 0, "do", "day"),
          O("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          O("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          O("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          O("e", 0, 0, "weekday"),
          O("E", 0, 0, "isoWeekday"),
          w("day", "d"),
          w("weekday", "e"),
          w("isoWeekday", "E"),
          Q("d", oi),
          Q("e", oi),
          Q("E", oi),
          Q("dd", _i),
          Q("ddd", _i),
          Q("dddd", _i),
          Z(["dd", "ddd", "dddd"], function (e, t, a, i) {
            var s = a._locale.weekdaysParse(e, i, a._strict);
            null != s ? (t.d = s) : (p(a).invalidWeekday = e);
          }),
          Z(["d", "e", "E"], function (e, t, a, i) {
            t[i] = f(e);
          });
        var as =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          is = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        O("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          w("dayOfYear", "DDD"),
          Q("DDD", Ti),
          Q("DDDD", ui),
          G(["DDD", "DDDD"], function (e, t, a) {
            a._dayOfYear = f(e);
          }),
          O("H", ["HH", 2], 0, "hour"),
          O("h", ["hh", 2], 0, sa),
          O("hmm", 0, 0, function () {
            return "" + sa.apply(this) + A(this.minutes(), 2);
          }),
          O("hmmss", 0, 0, function () {
            return (
              "" + sa.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
            );
          }),
          O("Hmm", 0, 0, function () {
            return "" + this.hours() + A(this.minutes(), 2);
          }),
          O("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
            );
          }),
          na("a", !0),
          na("A", !1),
          w("hour", "h"),
          Q("a", ua),
          Q("A", ua),
          Q("H", oi),
          Q("h", oi),
          Q("HH", oi, ni),
          Q("hh", oi, ni),
          Q("hmm", mi),
          Q("hmmss", pi),
          Q("Hmm", mi),
          Q("Hmmss", pi),
          G(["H", "HH"], Di),
          G(["a", "A"], function (e, t, a) {
            (a._isPm = a._locale.isPM(e)), (a._meridiem = e);
          }),
          G(["h", "hh"], function (e, t, a) {
            (t[Di] = f(e)), (p(a).bigHour = !0);
          }),
          G("hmm", function (e, t, a) {
            var i = e.length - 2;
            (t[Di] = f(e.substr(0, i))),
              (t[Li] = f(e.substr(i))),
              (p(a).bigHour = !0);
          }),
          G("hmmss", function (e, t, a) {
            var i = e.length - 4,
              s = e.length - 2;
            (t[Di] = f(e.substr(0, i))),
              (t[Li] = f(e.substr(i, 2))),
              (t[wi] = f(e.substr(s))),
              (p(a).bigHour = !0);
          }),
          G("Hmm", function (e, t, a) {
            var i = e.length - 2;
            (t[Di] = f(e.substr(0, i))), (t[Li] = f(e.substr(i)));
          }),
          G("Hmmss", function (e, t, a) {
            var i = e.length - 4,
              s = e.length - 2;
            (t[Di] = f(e.substr(0, i))),
              (t[Li] = f(e.substr(i, 2))),
              (t[wi] = f(e.substr(s)));
          });
        var ns = /[ap]\.?m?\.?/i,
          us = j("Hours", !0);
        O("m", ["mm", 2], 0, "minute"),
          w("minute", "m"),
          Q("m", oi),
          Q("mm", oi, ni),
          G(["m", "mm"], Li);
        var rs = j("Minutes", !1);
        O("s", ["ss", 2], 0, "second"),
          w("second", "s"),
          Q("s", oi),
          Q("ss", oi, ni),
          G(["s", "ss"], wi);
        var ls = j("Seconds", !1);
        O("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          O(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          O(0, ["SSS", 3], 0, "millisecond"),
          O(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          O(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          O(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          O(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          O(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          O(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          w("millisecond", "ms"),
          Q("S", Ti, si),
          Q("SS", Ti, ni),
          Q("SSS", Ti, ui);
        var os;
        for (os = "SSSS"; os.length <= 9; os += "S") Q(os, Si);
        for (os = "S"; os.length <= 9; os += "S") G(os, oa);
        var ms = j("Milliseconds", !1);
        O("z", 0, 0, "zoneAbbr"), O("zz", 0, 0, "zoneName");
        var ps = h.prototype;
        (ps.add = qi),
          (ps.calendar = nt),
          (ps.clone = ut),
          (ps.diff = ct),
          (ps.endOf = Et),
          (ps.format = vt),
          (ps.from = yt),
          (ps.fromNow = ft),
          (ps.to = _t),
          (ps.toNow = xt),
          (ps.get = I),
          (ps.invalidAt = zt),
          (ps.isAfter = rt),
          (ps.isBefore = lt),
          (ps.isBetween = ot),
          (ps.isSame = mt),
          (ps.isSameOrAfter = pt),
          (ps.isSameOrBefore = Tt),
          (ps.isValid = jt),
          (ps.lang = $i),
          (ps.locale = Mt),
          (ps.localeData = gt),
          (ps.max = Gi),
          (ps.min = Bi),
          (ps.parsingFlags = bt),
          (ps.set = I),
          (ps.startOf = Ct),
          (ps.subtract = Ki),
          (ps.toArray = kt),
          (ps.toObject = Nt),
          (ps.toDate = wt),
          (ps.toISOString = ht),
          (ps.toJSON = Yt),
          (ps.toString = St),
          (ps.unix = Lt),
          (ps.valueOf = Dt),
          (ps.creationData = It),
          (ps.year = Fi),
          (ps.isLeapYear = Se),
          (ps.weekYear = Ot),
          (ps.isoWeekYear = Ht),
          (ps.quarter = ps.quarters = Wt),
          (ps.month = ee),
          (ps.daysInMonth = te),
          (ps.week = ps.weeks = Zt),
          (ps.isoWeek = ps.isoWeeks = Jt),
          (ps.weeksInYear = Rt),
          (ps.isoWeeksInYear = Ut),
          (ps.date = ts),
          (ps.day = ps.days = ea),
          (ps.weekday = ta),
          (ps.isoWeekday = aa),
          (ps.dayOfYear = ia),
          (ps.hour = ps.hours = us),
          (ps.minute = ps.minutes = rs),
          (ps.second = ps.seconds = ls),
          (ps.millisecond = ps.milliseconds = ms),
          (ps.utcOffset = Qe),
          (ps.utc = Fe),
          (ps.local = Be),
          (ps.parseZone = Ge),
          (ps.hasAlignedHourOffset = Ze),
          (ps.isDST = Je),
          (ps.isDSTShifted = Ve),
          (ps.isLocal = Xe),
          (ps.isUtcOffset = qe),
          (ps.isUtc = Ke),
          (ps.isUTC = Ke),
          (ps.zoneAbbr = ma),
          (ps.zoneName = pa),
          (ps.dates = re(
            "dates accessor is deprecated. Use date instead.",
            ts
          )),
          (ps.months = re(
            "months accessor is deprecated. Use month instead",
            ee
          )),
          (ps.years = re("years accessor is deprecated. Use year instead", Fi)),
          (ps.zone = re(
            "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
            We
          ));
        var Ts = ps,
          cs = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          ds = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          Ss = "Invalid date",
          hs = "%d",
          vs = /\d{1,2}/,
          ys = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          fs = x.prototype;
        (fs._calendar = cs),
          (fs.calendar = da),
          (fs._longDateFormat = ds),
          (fs.longDateFormat = Sa),
          (fs._invalidDate = Ss),
          (fs.invalidDate = ha),
          (fs._ordinal = hs),
          (fs.ordinal = va),
          (fs._ordinalParse = vs),
          (fs.preparse = ya),
          (fs.postformat = ya),
          (fs._relativeTime = ys),
          (fs.relativeTime = fa),
          (fs.pastFuture = _a),
          (fs.set = xa),
          (fs.months = X),
          (fs._months = bi),
          (fs.monthsShort = q),
          (fs._monthsShort = zi),
          (fs.monthsParse = K),
          (fs._monthsRegex = Ai),
          (fs.monthsRegex = ie),
          (fs._monthsShortRegex = Ii),
          (fs.monthsShortRegex = ae),
          (fs.week = Ft),
          (fs._week = es),
          (fs.firstDayOfYear = Gt),
          (fs.firstDayOfWeek = Bt),
          (fs.weekdays = Xt),
          (fs._weekdays = as),
          (fs.weekdaysMin = Kt),
          (fs._weekdaysMin = ss),
          (fs.weekdaysShort = qt),
          (fs._weekdaysShort = is),
          (fs.weekdaysParse = $t),
          (fs.isPM = ra),
          (fs._meridiemParse = ns),
          (fs.meridiem = la),
          E("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10,
                a =
                  1 === f((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th";
              return e + a;
            },
          }),
          (t.lang = re(
            "moment.lang is deprecated. Use moment.locale instead.",
            E
          )),
          (t.langData = re(
            "moment.langData is deprecated. Use moment.localeData instead.",
            L
          ));
        var _s = Math.abs,
          xs = Ua("ms"),
          Ms = Ua("s"),
          gs = Ua("m"),
          Cs = Ua("h"),
          Es = Ua("d"),
          Ds = Ua("w"),
          Ls = Ua("M"),
          ws = Ua("y"),
          ks = Pa("milliseconds"),
          Ns = Pa("seconds"),
          Ys = Pa("minutes"),
          js = Pa("hours"),
          bs = Pa("days"),
          zs = Pa("months"),
          Is = Pa("years"),
          As = Math.round,
          Os = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11,
          },
          Hs = Math.abs,
          Us = Ae.prototype;
        (Us.abs = ka),
          (Us.add = Ya),
          (Us.subtract = ja),
          (Us.as = Oa),
          (Us.asMilliseconds = xs),
          (Us.asSeconds = Ms),
          (Us.asMinutes = gs),
          (Us.asHours = Cs),
          (Us.asDays = Es),
          (Us.asWeeks = Ds),
          (Us.asMonths = Ls),
          (Us.asYears = ws),
          (Us.valueOf = Ha),
          (Us._bubble = za),
          (Us.get = Ra),
          (Us.milliseconds = ks),
          (Us.seconds = Ns),
          (Us.minutes = Ys),
          (Us.hours = js),
          (Us.days = bs),
          (Us.weeks = Qa),
          (Us.months = zs),
          (Us.years = Is),
          (Us.humanize = Ga),
          (Us.toISOString = Za),
          (Us.toString = Za),
          (Us.toJSON = Za),
          (Us.locale = Mt),
          (Us.localeData = gt),
          (Us.toIsoString = re(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Za
          )),
          (Us.lang = $i),
          O("X", 0, 0, "unix"),
          O("x", 0, 0, "valueOf"),
          Q("x", hi),
          Q("X", fi),
          G("X", function (e, t, a) {
            a._d = new Date(1e3 * parseFloat(e, 10));
          }),
          G("x", function (e, t, a) {
            a._d = new Date(f(e));
          }),
          (t.version = "2.11.2"),
          i(je),
          (t.fn = Ts),
          (t.min = ze),
          (t.max = Ie),
          (t.now = Zi),
          (t.utc = o),
          (t.unix = Ta),
          (t.months = Ca),
          (t.isDate = n),
          (t.locale = E),
          (t.invalid = c),
          (t.duration = $e),
          (t.isMoment = v),
          (t.weekdays = Da),
          (t.parseZone = ca),
          (t.localeData = L),
          (t.isDuration = Oe),
          (t.monthsShort = Ea),
          (t.weekdaysMin = wa),
          (t.defineLocale = D),
          (t.weekdaysShort = La),
          (t.normalizeUnits = k),
          (t.relativeTimeThreshold = Ba),
          (t.prototype = Ts);
        var Rs = t;
        return Rs;
      });
    }.call(t, a(113)(e)));
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(141),
      n = i(s),
      u = a(3),
      r = i(u),
      l = a(11),
      o = i(l),
      m = a(1),
      p = i(m),
      T = a(13),
      c = i(T),
      d = a(10),
      S = i(d),
      h = a(142),
      v = i(h),
      y = a(137),
      f = i(y),
      _ = a(143),
      x = i(_);
    S["default"].language("de", v["default"]);
    var M = {
      state: {
        segments: [
          "all",
          "dry",
          "drugs",
          "milk",
          "frozen",
          "meat",
          "veg",
          "magazines",
          "convenience",
        ],
        sections: [],
        languages: ["de", "en"],
        lang: {},
        currentLanguage: "en",
        currentSegment: "all",
        currentSection: "",
        notifications: [],
        rawRevenues: o["default"],
        revenues: [],
        currentRevenues: {},
        heatmapData: [],
        heatmapAnnotations: {
          dry: !1,
          veg: !1,
        },
        smoothies: f["default"],
        editArea: !1,
        message: !1,
        marketingMessage: !1,
        convenienceOffer: !1,
        hidecursor: !1,
        checkedElements: [],
        frankfurtMultiplier: 1,
      },
      setLanguage: function (e) {
        return (
          (this.state.currentLanguage = e),
          (this.state.lang = r["default"].defaultsDeep(
            {},
            n["default"][this.state.currentLanguage],
            n["default"].de
          )),
          p["default"].locale(e),
          S["default"].language(e),
          this
        );
      },
      setSegment: function (e) {
        return (this.state.currentSegment = e), this;
      },
      setSection: function (e) {
        return (this.state.currentSection = e), this;
      },
      addNotification: function (e) {
        var t = x["default"][e];
        return (
          this.state.notifications.push({
            timestamp:
              this.state.currentRevenues.frankfurt.timestamp +
              (0, p["default"])().format(" HH:mm:ss"),
            type: t.type,
            body: t.body,
            action: t.action,
            seen: !1,
            show: !0,
            name: e,
          }),
          this
        );
      },
      hideNotification: function (e) {
        this.state.notifications = this.state.notifications.map(function (t) {
          return t.name !== e
            ? t
            : r["default"].assign({}, t, {
                show: !1,
              });
        });
      },
      resumeRevsim: function () {
        c["default"].resume();
      },
      pauseRevsim: function () {
        c["default"].pause();
      },
    };
    M.setLanguage("de"),
      (M.state.hidecursor = "#hidecursor" === location.hash),
      (t["default"] = M);
  },
  function (e, t, a) {
    var i;
    (function (e, s) {
      (function () {
        function n(e, t) {
          return e.set(t[0], t[1]), e;
        }

        function u(e, t) {
          return e.add(t), e;
        }

        function r(e, t, a) {
          var i = a.length;
          switch (i) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, a[0]);
            case 2:
              return e.call(t, a[0], a[1]);
            case 3:
              return e.call(t, a[0], a[1], a[2]);
          }
          return e.apply(t, a);
        }

        function l(e, t, a, i) {
          for (var s = -1, n = e.length; ++s < n; ) {
            var u = e[s];
            t(i, u, a(u), e);
          }
          return i;
        }

        function o(e, t) {
          for (
            var a = -1, i = e.length, s = -1, n = t.length, u = Array(i + n);
            ++a < i;

          )
            u[a] = e[a];
          for (; ++s < n; ) u[a++] = t[s];
          return u;
        }

        function m(e, t) {
          for (var a = -1, i = e.length; ++a < i && t(e[a], a, e) !== !1; );
          return e;
        }

        function p(e, t) {
          for (var a = e.length; a-- && t(e[a], a, e) !== !1; );
          return e;
        }

        function T(e, t) {
          for (var a = -1, i = e.length; ++a < i; )
            if (!t(e[a], a, e)) return !1;
          return !0;
        }

        function c(e, t) {
          for (var a = -1, i = e.length, s = -1, n = []; ++a < i; ) {
            var u = e[a];
            t(u, a, e) && (n[++s] = u);
          }
          return n;
        }

        function d(e, t) {
          return !!e.length && C(e, t, 0) > -1;
        }

        function S(e, t, a) {
          for (var i = -1, s = e.length; ++i < s; ) if (a(t, e[i])) return !0;
          return !1;
        }

        function h(e, t) {
          for (var a = -1, i = e.length, s = Array(i); ++a < i; )
            s[a] = t(e[a], a, e);
          return s;
        }

        function v(e, t) {
          for (var a = -1, i = t.length, s = e.length; ++a < i; )
            e[s + a] = t[a];
          return e;
        }

        function y(e, t, a, i) {
          var s = -1,
            n = e.length;
          for (i && n && (a = e[++s]); ++s < n; ) a = t(a, e[s], s, e);
          return a;
        }

        function f(e, t, a, i) {
          var s = e.length;
          for (i && s && (a = e[--s]); s--; ) a = t(a, e[s], s, e);
          return a;
        }

        function _(e, t) {
          for (var a = -1, i = e.length; ++a < i; )
            if (t(e[a], a, e)) return !0;
          return !1;
        }

        function x(e, t, a) {
          for (var i = -1, s = e.length; ++i < s; ) {
            var n = e[i],
              u = t(n);
            if (null != u && (r === q ? u === u : a(u, r)))
              var r = u,
                l = n;
          }
          return l;
        }

        function M(e, t, a, i) {
          var s;
          return (
            a(e, function (e, a, n) {
              return t(e, a, n) ? ((s = i ? a : e), !1) : void 0;
            }),
            s
          );
        }

        function g(e, t, a) {
          for (var i = e.length, s = a ? i : -1; a ? s-- : ++s < i; )
            if (t(e[s], s, e)) return s;
          return -1;
        }

        function C(e, t, a) {
          if (t !== t) return R(e, a);
          for (var i = a - 1, s = e.length; ++i < s; ) if (e[i] === t) return i;
          return -1;
        }

        function E(e, t, a, i, s) {
          return (
            s(e, function (e, s, n) {
              a = i ? ((i = !1), e) : t(a, e, s, n);
            }),
            a
          );
        }

        function D(e, t) {
          var a = e.length;
          for (e.sort(t); a--; ) e[a] = e[a].value;
          return e;
        }

        function L(e, t) {
          for (var a, i = -1, s = e.length; ++i < s; ) {
            var n = t(e[i]);
            n !== q && (a = a === q ? n : a + n);
          }
          return a;
        }

        function w(e, t) {
          for (var a = -1, i = Array(e); ++a < e; ) i[a] = t(a);
          return i;
        }

        function k(e, t) {
          return h(t, function (t) {
            return [t, e[t]];
          });
        }

        function N(e) {
          return function (t) {
            return e(t);
          };
        }

        function Y(e, t) {
          return h(t, function (t) {
            return e[t];
          });
        }

        function j(e, t) {
          for (var a = -1, i = e.length; ++a < i && C(t, e[a], 0) > -1; );
          return a;
        }

        function b(e, t) {
          for (var a = e.length; a-- && C(t, e[a], 0) > -1; );
          return a;
        }

        function z(e) {
          return e && e.Object === Object ? e : null;
        }

        function I(e, t) {
          if (e !== t) {
            var a = null === e,
              i = e === q,
              s = e === e,
              n = null === t,
              u = t === q,
              r = t === t;
            if ((e > t && !n) || !s || (a && !u && r) || (i && r)) return 1;
            if ((t > e && !a) || !r || (n && !i && s) || (u && s)) return -1;
          }
          return 0;
        }

        function A(e, t, a) {
          for (
            var i = -1,
              s = e.criteria,
              n = t.criteria,
              u = s.length,
              r = a.length;
            ++i < u;

          ) {
            var l = I(s[i], n[i]);
            if (l) {
              if (i >= r) return l;
              var o = a[i];
              return l * ("desc" == o ? -1 : 1);
            }
          }
          return e.index - t.index;
        }

        function O(e) {
          return xa[e];
        }

        function H(e) {
          return Ma[e];
        }

        function U(e) {
          return "\\" + Ea[e];
        }

        function R(e, t, a) {
          for (var i = e.length, s = t + (a ? 0 : -1); a ? s-- : ++s < i; ) {
            var n = e[s];
            if (n !== n) return s;
          }
          return -1;
        }

        function P(e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (a) {}
          return t;
        }

        function Q(e, t) {
          return (
            (e = "number" == typeof e || Lt.test(e) ? +e : -1),
            (t = null == t ? Me : t),
            e > -1 && e % 1 == 0 && t > e
          );
        }

        function W(e) {
          for (var t, a = []; !(t = e.next()).done; ) a.push(t.value);
          return a;
        }

        function F(e) {
          var t = -1,
            a = Array(e.size);
          return (
            e.forEach(function (e, i) {
              a[++t] = [i, e];
            }),
            a
          );
        }

        function B(e, t) {
          for (var a = -1, i = e.length, s = -1, n = []; ++a < i; )
            e[a] === t && ((e[a] = we), (n[++s] = a));
          return n;
        }

        function G(e) {
          var t = -1,
            a = Array(e.size);
          return (
            e.forEach(function (e) {
              a[++t] = e;
            }),
            a
          );
        }

        function Z(e) {
          if (!e || !ca.test(e)) return e.length;
          for (var t = (Ta.lastIndex = 0); Ta.test(e); ) t++;
          return t;
        }

        function J(e) {
          return e.match(Ta);
        }

        function V(e) {
          return ga[e];
        }

        function X(e) {
          function t(e) {
            if (bu(e) && !hm(e) && !(e instanceof s)) {
              if (e instanceof i) return e;
              if (Hl.call(e, "__wrapped__")) return ks(e);
            }
            return new i(e);
          }

          function a() {}

          function i(e, t) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__chain__ = !!t),
              (this.__index__ = 0),
              (this.__values__ = q);
          }

          function s(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = Ee),
              (this.__views__ = []);
          }

          function z() {
            var e = new s(this.__wrapped__);
            return (
              (e.__actions__ = bi(this.__actions__)),
              (e.__dir__ = this.__dir__),
              (e.__filtered__ = this.__filtered__),
              (e.__iteratees__ = bi(this.__iteratees__)),
              (e.__takeCount__ = this.__takeCount__),
              (e.__views__ = bi(this.__views__)),
              e
            );
          }

          function Lt() {
            if (this.__filtered__) {
              var e = new s(this);
              (e.__dir__ = -1), (e.__filtered__ = !0);
            } else (e = this.clone()), (e.__dir__ *= -1);
            return e;
          }

          function Yt() {
            var e = this.__wrapped__.value(),
              t = this.__dir__,
              a = hm(e),
              i = 0 > t,
              s = a ? e.length : 0,
              n = ms(0, s, this.__views__),
              u = n.start,
              r = n.end,
              l = r - u,
              o = i ? r : u - 1,
              m = this.__iteratees__,
              p = m.length,
              T = 0,
              c = lo(l, this.__takeCount__);
            if (!a || Se > s || (s == l && c == l))
              return xi(e, this.__actions__);
            var d = [];
            e: for (; l-- && c > T; ) {
              o += t;
              for (var S = -1, h = e[o]; ++S < p; ) {
                var v = m[S],
                  y = v.iteratee,
                  f = v.type,
                  _ = y(h);
                if (f == ve) h = _;
                else if (!_) {
                  if (f == he) continue e;
                  break e;
                }
              }
              d[T++] = h;
            }
            return d;
          }

          function jt() {}

          function bt(e, t) {
            return It(e, t) && delete e[t];
          }

          function zt(e, t) {
            if (ho) {
              var a = e[t];
              return a === _e ? q : a;
            }
            return Hl.call(e, t) ? e[t] : q;
          }

          function It(e, t) {
            return ho ? e[t] !== q : Hl.call(e, t);
          }

          function At(e, t, a) {
            e[t] = ho && a === q ? _e : a;
          }

          function Ot(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var i = e[t];
              this.set(i[0], i[1]);
            }
          }

          function Ht() {
            this.__data__ = {
              hash: new jt(),
              map: To ? new To() : [],
              string: new jt(),
            };
          }

          function Ut(e) {
            var t = this.__data__;
            return ys(e)
              ? bt("string" == typeof e ? t.string : t.hash, e)
              : To
              ? t.map["delete"](e)
              : Kt(t.map, e);
          }

          function Rt(e) {
            var t = this.__data__;
            return ys(e)
              ? zt("string" == typeof e ? t.string : t.hash, e)
              : To
              ? t.map.get(e)
              : $t(t.map, e);
          }

          function Pt(e) {
            var t = this.__data__;
            return ys(e)
              ? It("string" == typeof e ? t.string : t.hash, e)
              : To
              ? t.map.has(e)
              : ea(t.map, e);
          }

          function Qt(e, t) {
            var a = this.__data__;
            return (
              ys(e)
                ? At("string" == typeof e ? a.string : a.hash, e, t)
                : To
                ? a.map.set(e, t)
                : aa(a.map, e, t),
              this
            );
          }

          function Wt(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.__data__ = new Ot(); ++t < a; ) this.push(e[t]);
          }

          function Ft(e, t) {
            var a = e.__data__;
            if (ys(t)) {
              var i = a.__data__,
                s = "string" == typeof t ? i.string : i.hash;
              return s[t] === _e;
            }
            return a.has(t);
          }

          function Bt(e) {
            var t = this.__data__;
            if (ys(e)) {
              var a = t.__data__,
                i = "string" == typeof e ? a.string : a.hash;
              i[e] = _e;
            } else t.set(e, _e);
          }

          function Gt(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var i = e[t];
              this.set(i[0], i[1]);
            }
          }

          function Zt() {
            this.__data__ = {
              array: [],
              map: null,
            };
          }

          function Jt(e) {
            var t = this.__data__,
              a = t.array;
            return a ? Kt(a, e) : t.map["delete"](e);
          }

          function Vt(e) {
            var t = this.__data__,
              a = t.array;
            return a ? $t(a, e) : t.map.get(e);
          }

          function Xt(e) {
            var t = this.__data__,
              a = t.array;
            return a ? ea(a, e) : t.map.has(e);
          }

          function qt(e, t) {
            var a = this.__data__,
              i = a.array;
            i &&
              (i.length < Se - 1
                ? aa(i, e, t)
                : ((a.array = null), (a.map = new Ot(i))));
            var s = a.map;
            return s && s.set(e, t), this;
          }

          function Kt(e, t) {
            var a = ta(e, t);
            if (0 > a) return !1;
            var i = e.length - 1;
            return a == i ? e.pop() : to.call(e, a, 1), !0;
          }

          function $t(e, t) {
            var a = ta(e, t);
            return 0 > a ? q : e[a][1];
          }

          function ea(e, t) {
            return ta(e, t) > -1;
          }

          function ta(e, t) {
            for (var a = e.length; a--; ) if (du(e[a][0], t)) return a;
            return -1;
          }

          function aa(e, t, a) {
            var i = ta(e, t);
            0 > i ? e.push([t, a]) : (e[i][1] = a);
          }

          function ia(e, t, a, i) {
            return e === q || (du(e, Al[a]) && !Hl.call(i, a)) ? t : e;
          }

          function sa(e, t, a) {
            ((a !== q && !du(e[t], a)) ||
              ("number" == typeof t && a === q && !(t in e))) &&
              (e[t] = a);
          }

          function na(e, t, a) {
            var i = e[t];
            (!du(i, a) ||
              (du(i, Al[t]) && !Hl.call(e, t)) ||
              (a === q && !(t in e))) &&
              (e[t] = a);
          }

          function ua(e, t, a, i) {
            return (
              Do(e, function (e, s, n) {
                t(i, e, a(e), n);
              }),
              i
            );
          }

          function ra(e, t) {
            return e && zi(t, fr(t), e);
          }

          function la(e, t) {
            for (
              var a = -1, i = null == e, s = t.length, n = Array(s);
              ++a < s;

            )
              n[a] = i ? q : hr(e, t[a]);
            return n;
          }

          function oa(e, t, a) {
            return (
              e === e &&
                (a !== q && (e = a >= e ? e : a),
                t !== q && (e = e >= t ? e : t)),
              e
            );
          }

          function ma(e, t, a, i, s, n) {
            var u;
            if ((a && (u = s ? a(e, i, s, n) : a(e)), u !== q)) return u;
            if (!ju(e)) return e;
            var r = hm(e);
            if (r) {
              if (((u = Ts(e)), !t)) return bi(e, u);
            } else {
              var l = os(e),
                o = l == ze || l == Ie;
              if (vm(e)) return Ci(e, t);
              if (l != He && l != ke && (!o || s))
                return _a[l] ? ds(e, l, t) : s ? e : {};
              if (P(e)) return s ? e : {};
              if (((u = cs(o ? {} : e)), !t)) return Ai(e, ra(u, e));
            }
            n || (n = new Gt());
            var p = n.get(e);
            return p
              ? p
              : (n.set(e, u),
                (r ? m : Na)(e, function (i, s) {
                  na(u, s, ma(i, t, a, s, e, n));
                }),
                r ? u : Ai(e, u));
          }

          function Ta(e) {
            var t = fr(e),
              a = t.length;
            return function (i) {
              if (null == i) return !a;
              for (var s = a; s--; ) {
                var n = t[s],
                  u = e[n],
                  r = i[n];
                if ((r === q && !(n in Object(i))) || !u(r)) return !1;
              }
              return !0;
            };
          }

          function xa(e, t, a) {
            if ("function" != typeof e) throw new zl(fe);
            return eo(function () {
              e.apply(q, a);
            }, t);
          }

          function Ma(e, t, a, i) {
            var s = -1,
              n = d,
              u = !0,
              r = e.length,
              l = [],
              o = t.length;
            if (!r) return l;
            a && (t = h(t, N(a))),
              i
                ? ((n = S), (u = !1))
                : t.length >= Se && ((n = Ft), (u = !1), (t = new Wt(t)));
            e: for (; ++s < r; ) {
              var m = e[s],
                p = a ? a(m) : m;
              if (u && p === p) {
                for (var T = o; T--; ) if (t[T] === p) continue e;
                l.push(m);
              } else n(t, p, i) || l.push(m);
            }
            return l;
          }

          function ga(e, t) {
            var a = !0;
            return (
              Do(e, function (e, i, s) {
                return (a = !!t(e, i, s));
              }),
              a
            );
          }

          function Ca(e, t, a, i) {
            var s = e.length;
            for (
              a = tr(a),
                0 > a && (a = -a > s ? 0 : s + a),
                i = i === q || i > s ? s : tr(i),
                0 > i && (i += s),
                i = a > i ? 0 : ar(i);
              i > a;

            )
              e[a++] = t;
            return e;
          }

          function Ea(e, t) {
            var a = [];
            return (
              Do(e, function (e, i, s) {
                t(e, i, s) && a.push(e);
              }),
              a
            );
          }

          function wa(e, t, a, i) {
            i || (i = []);
            for (var s = -1, n = e.length; ++s < n; ) {
              var u = e[s];
              _u(u) && (a || hm(u) || vu(u))
                ? t
                  ? wa(u, t, a, i)
                  : v(i, u)
                : a || (i[i.length] = u);
            }
            return i;
          }

          function ka(e, t) {
            return null == e ? e : wo(e, t, _r);
          }

          function Na(e, t) {
            return e && wo(e, t, fr);
          }

          function Ya(e, t) {
            return e && ko(e, t, fr);
          }

          function ja(e, t) {
            return c(t, function (t) {
              return ku(e[t]);
            });
          }

          function za(e, t) {
            t = vs(t, e) ? [t + ""] : vi(t);
            for (var a = 0, i = t.length; null != e && i > a; ) e = e[t[a++]];
            return a && a == i ? e : q;
          }

          function Oa(e, t) {
            return (
              Hl.call(e, t) ||
              ("object" == typeof e && t in e && null === Xl(e))
            );
          }

          function Ha(e, t) {
            return t in Object(e);
          }

          function Ua(e, t, a) {
            return e >= lo(t, a) && e < ro(t, a);
          }

          function Ra(e, t, a) {
            for (
              var i = a ? S : d, s = e.length, n = s, u = Array(s), r = [];
              n--;

            ) {
              var l = e[n];
              n && t && (l = h(l, N(t))),
                (u[n] = !a && (t || l.length >= 120) ? new Wt(n && l) : q);
            }
            l = e[0];
            var o = -1,
              m = l.length,
              p = u[0];
            e: for (; ++o < m; ) {
              var T = l[o],
                c = t ? t(T) : T;
              if (!(p ? Ft(p, c) : i(r, c, a))) {
                for (var n = s; --n; ) {
                  var v = u[n];
                  if (!(v ? Ft(v, c) : i(e[n], c, a))) continue e;
                }
                p && p.push(c), r.push(T);
              }
            }
            return r;
          }

          function Pa(e, t, a, i) {
            return (
              Na(e, function (e, s, n) {
                t(i, a(e), s, n);
              }),
              i
            );
          }

          function Qa(e, t, a) {
            vs(t, e) || ((t = vi(t)), (e = Cs(e, t)), (t = Gs(t)));
            var i = null == e ? e : e[t];
            return null == i ? q : r(i, e, a);
          }

          function Wa(e, t, a, i, s) {
            return e === t
              ? !0
              : null == e || null == t || (!ju(e) && !bu(t))
              ? e !== e && t !== t
              : Fa(e, t, Wa, a, i, s);
          }

          function Fa(e, t, a, i, s, n) {
            var u = hm(e),
              r = hm(t),
              l = Ne,
              o = Ne;
            u || ((l = os(e)), l == ke ? (l = He) : l != He && (u = Ju(e))),
              r || ((o = os(t)), o == ke ? (o = He) : o != He && (r = Ju(t)));
            var m = l == He && !P(e),
              p = o == He && !P(t),
              T = l == o;
            if (T && !u && !m) return is(e, t, l, a, i, s);
            var c = s & me;
            if (!c) {
              var d = m && Hl.call(e, "__wrapped__"),
                S = p && Hl.call(t, "__wrapped__");
              if (d || S)
                return a(d ? e.value() : e, S ? t.value() : t, i, s, n);
            }
            return T
              ? (n || (n = new Gt()), (u ? as : ss)(e, t, a, i, s, n))
              : !1;
          }

          function Ba(e, t, a, i) {
            var s = a.length,
              n = s,
              u = !i;
            if (null == e) return !n;
            for (e = Object(e); s--; ) {
              var r = a[s];
              if (u && r[2] ? r[1] !== e[r[0]] : !(r[0] in e)) return !1;
            }
            for (; ++s < n; ) {
              r = a[s];
              var l = r[0],
                o = e[l],
                m = r[1];
              if (u && r[2]) {
                if (o === q && !(l in e)) return !1;
              } else {
                var p = new Gt(),
                  T = i ? i(o, m, l, e, t, p) : q;
                if (!(T === q ? Wa(m, o, i, oe | me, p) : T)) return !1;
              }
            }
            return !0;
          }

          function Ga(e) {
            var t = typeof e;
            return "function" == t
              ? e
              : null == e
              ? ll
              : "object" == t
              ? hm(e)
                ? qa(e[0], e[1])
                : Xa(e)
              : hl(e);
          }

          function Za(e) {
            return uo(Object(e));
          }

          function Ja(e) {
            e = null == e ? e : Object(e);
            var t = [];
            for (var a in e) t.push(a);
            return t;
          }

          function Va(e, t) {
            var a = -1,
              i = fu(e) ? Array(e.length) : [];
            return (
              Do(e, function (e, s, n) {
                i[++a] = t(e, s, n);
              }),
              i
            );
          }

          function Xa(e) {
            var t = rs(e);
            if (1 == t.length && t[0][2]) {
              var a = t[0][0],
                i = t[0][1];
              return function (e) {
                return null == e
                  ? !1
                  : e[a] === i && (i !== q || a in Object(e));
              };
            }
            return function (a) {
              return a === e || Ba(a, e, t);
            };
          }

          function qa(e, t) {
            return function (a) {
              var i = hr(a, e);
              return i === q && i === t ? yr(a, e) : Wa(t, i, q, oe | me);
            };
          }

          function Ka(e, t, a, i, s) {
            if (e !== t) {
              var n = hm(t) || Ju(t) ? q : _r(t);
              m(n || t, function (u, r) {
                if ((n && ((r = u), (u = t[r])), ju(u)))
                  s || (s = new Gt()), $a(e, t, r, a, Ka, i, s);
                else {
                  var l = i ? i(e[r], u, r + "", e, t, s) : q;
                  l === q && (l = u), sa(e, r, l);
                }
              });
            }
          }

          function $a(e, t, a, i, s, n, u) {
            var r = e[a],
              l = t[a],
              o = u.get(l);
            if (o) return void sa(e, a, o);
            var m = n ? n(r, l, a + "", e, t, u) : q,
              p = m === q;
            p &&
              ((m = l),
              hm(l) || Ju(l)
                ? hm(r)
                  ? (m = i ? bi(r) : r)
                  : _u(r)
                  ? (m = bi(r))
                  : ((p = !1), (m = ma(l)))
                : Qu(l) || vu(l)
                ? vu(r)
                  ? (m = sr(r))
                  : !ju(r) || (i && ku(r))
                  ? ((p = !1), (m = ma(l)))
                  : (m = i ? ma(r) : r)
                : (p = !1)),
              u.set(l, m),
              p && s(m, l, i, n, u),
              sa(e, a, m);
          }

          function ei(e, t, a) {
            var i = -1,
              s = us();
            t = h(t.length ? t : Array(1), function (e) {
              return s(e);
            });
            var n = Va(e, function (e, a, s) {
              var n = h(t, function (t) {
                return t(e);
              });
              return {
                criteria: n,
                index: ++i,
                value: e,
              };
            });
            return D(n, function (e, t) {
              return A(e, t, a);
            });
          }

          function ti(e, t) {
            return (
              (e = Object(e)),
              y(
                t,
                function (t, a) {
                  return a in e && (t[a] = e[a]), t;
                },
                {}
              )
            );
          }

          function ai(e, t) {
            var a = {};
            return (
              ka(e, function (e, i) {
                t(e, i) && (a[i] = e);
              }),
              a
            );
          }

          function ii(e) {
            return function (t) {
              return null == t ? q : t[e];
            };
          }

          function si(e) {
            return function (t) {
              return za(t, e);
            };
          }

          function ni(e, t) {
            return ui(e, t);
          }

          function ui(e, t, a) {
            var i = -1,
              s = t.length,
              n = e;
            for (
              a &&
              (n = h(e, function (e) {
                return a(e);
              }));
              ++i < s;

            )
              for (
                var u = 0, r = t[i], l = a ? a(r) : r;
                (u = C(n, l, u)) > -1;

              )
                n !== e && to.call(n, u, 1), to.call(e, u, 1);
            return e;
          }

          function ri(e, t) {
            for (var a = e ? t.length : 0, i = a - 1; a--; ) {
              var s = t[a];
              if (i == a || s != n) {
                var n = s;
                if (Q(s)) to.call(e, s, 1);
                else if (vs(s, e)) delete e[s];
                else {
                  var u = vi(s),
                    r = Cs(e, u);
                  null != r && delete r[Gs(u)];
                }
              }
            }
            return e;
          }

          function li(e, t) {
            return e + io(mo() * (t - e + 1));
          }

          function oi(e, t, a, i) {
            for (
              var s = -1, n = ro(ao((t - e) / (a || 1)), 0), u = Array(n);
              n--;

            )
              (u[i ? n : ++s] = e), (e += a);
            return u;
          }

          function mi(e, t, a, i) {
            t = vs(t, e) ? [t + ""] : vi(t);
            for (
              var s = -1, n = t.length, u = n - 1, r = e;
              null != r && ++s < n;

            ) {
              var l = t[s];
              if (ju(r)) {
                var o = a;
                if (s != u) {
                  var m = r[l];
                  (o = i ? i(m, l, r) : q),
                    o === q && (o = null == m ? (Q(t[s + 1]) ? [] : {}) : m);
                }
                na(r, l, o);
              }
              r = r[l];
            }
            return e;
          }

          function pi(e, t, a) {
            var i = -1,
              s = e.length;
            0 > t && (t = -t > s ? 0 : s + t),
              (a = a > s ? s : a),
              0 > a && (a += s),
              (s = t > a ? 0 : (a - t) >>> 0),
              (t >>>= 0);
            for (var n = Array(s); ++i < s; ) n[i] = e[i + t];
            return n;
          }

          function Ti(e, t) {
            var a;
            return (
              Do(e, function (e, i, s) {
                return (a = t(e, i, s)), !a;
              }),
              !!a
            );
          }

          function ci(e, t, a) {
            var i = 0,
              s = e ? e.length : i;
            if ("number" == typeof t && t === t && Le >= s) {
              for (; s > i; ) {
                var n = (i + s) >>> 1,
                  u = e[n];
                (a ? t >= u : t > u) && null !== u ? (i = n + 1) : (s = n);
              }
              return s;
            }
            return di(e, t, ll, a);
          }

          function di(e, t, a, i) {
            t = a(t);
            for (
              var s = 0,
                n = e ? e.length : 0,
                u = t !== t,
                r = null === t,
                l = t === q;
              n > s;

            ) {
              var o = io((s + n) / 2),
                m = a(e[o]),
                p = m !== q,
                T = m === m;
              if (u) var c = T || i;
              else
                c = r
                  ? T && p && (i || null != m)
                  : l
                  ? T && (i || p)
                  : null == m
                  ? !1
                  : i
                  ? t >= m
                  : t > m;
              c ? (s = o + 1) : (n = o);
            }
            return lo(n, De);
          }

          function Si(e) {
            return hi(e);
          }

          function hi(e, t) {
            for (
              var a = 0,
                i = e.length,
                s = e[0],
                n = t ? t(s) : s,
                u = n,
                r = 0,
                l = [s];
              ++a < i;

            )
              (s = e[a]),
                (n = t ? t(s) : s),
                du(n, u) || ((u = n), (l[++r] = s));
            return l;
          }

          function vi(e) {
            return hm(e) ? e : Ds(e);
          }

          function yi(e, t, a) {
            var i = -1,
              s = d,
              n = e.length,
              u = !0,
              r = [],
              l = r;
            if (a) (u = !1), (s = S);
            else if (n >= Se) {
              var o = t ? null : Yo(e);
              if (o) return G(o);
              (u = !1), (s = Ft), (l = new Wt());
            } else l = t ? [] : r;
            e: for (; ++i < n; ) {
              var m = e[i],
                p = t ? t(m) : m;
              if (u && p === p) {
                for (var T = l.length; T--; ) if (l[T] === p) continue e;
                t && l.push(p), r.push(m);
              } else s(l, p, a) || (l !== r && l.push(p), r.push(m));
            }
            return r;
          }

          function fi(e, t) {
            (t = vs(t, e) ? [t + ""] : vi(t)), (e = Cs(e, t));
            var a = Gs(t);
            return null != e && vr(e, a) ? delete e[a] : !0;
          }

          function _i(e, t, a, i) {
            for (
              var s = e.length, n = i ? s : -1;
              (i ? n-- : ++n < s) && t(e[n], n, e);

            );
            return a
              ? pi(e, i ? 0 : n, i ? n + 1 : s)
              : pi(e, i ? n + 1 : 0, i ? s : n);
          }

          function xi(e, t) {
            var a = e;
            return (
              a instanceof s && (a = a.value()),
              y(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, v([e], t.args));
                },
                a
              )
            );
          }

          function Mi(e, t, a) {
            for (var i = -1, s = e.length; ++i < s; )
              var n = n ? v(Ma(n, e[i], t, a), Ma(e[i], n, t, a)) : e[i];
            return n && n.length ? yi(n, t, a) : [];
          }

          function gi(e, t, a) {
            for (var i = -1, s = e.length, n = t.length, u = {}; ++i < s; )
              a(u, e[i], n > i ? t[i] : q);
            return u;
          }

          function Ci(e, t) {
            if (t) return e.slice();
            var a = e.constructor,
              i = new a(e.length);
            return e.copy(i), i;
          }

          function Ei(e) {
            var t = e.constructor,
              a = new t(e.byteLength),
              i = new Zl(a);
            return i.set(new Zl(e)), a;
          }

          function Di(e) {
            var t = e.constructor;
            return y(F(e), n, new t());
          }

          function Li(e) {
            var t = e.constructor,
              a = new t(e.source, xt.exec(e));
            return (a.lastIndex = e.lastIndex), a;
          }

          function wi(e) {
            var t = e.constructor;
            return y(G(e), u, new t());
          }

          function ki(e) {
            return Gl ? Object(Mo.call(e)) : {};
          }

          function Ni(e, t) {
            var a = e.buffer,
              i = e.constructor;
            return new i(t ? Ei(a) : a, e.byteOffset, e.length);
          }

          function Yi(e, t, a) {
            for (
              var i = a.length,
                s = -1,
                n = ro(e.length - i, 0),
                u = -1,
                r = t.length,
                l = Array(r + n);
              ++u < r;

            )
              l[u] = t[u];
            for (; ++s < i; ) l[a[s]] = e[s];
            for (; n--; ) l[u++] = e[s++];
            return l;
          }

          function ji(e, t, a) {
            for (
              var i = -1,
                s = a.length,
                n = -1,
                u = ro(e.length - s, 0),
                r = -1,
                l = t.length,
                o = Array(u + l);
              ++n < u;

            )
              o[n] = e[n];
            for (var m = n; ++r < l; ) o[m + r] = t[r];
            for (; ++i < s; ) o[m + a[i]] = e[n++];
            return o;
          }

          function bi(e, t) {
            var a = -1,
              i = e.length;
            for (t || (t = Array(i)); ++a < i; ) t[a] = e[a];
            return t;
          }

          function zi(e, t, a) {
            return Ii(e, t, a);
          }

          function Ii(e, t, a, i) {
            a || (a = {});
            for (var s = -1, n = t.length; ++s < n; ) {
              var u = t[s],
                r = i ? i(a[u], e[u], u, a, e) : e[u];
              na(a, u, r);
            }
            return a;
          }

          function Ai(e, t) {
            return zi(e, zo(e), t);
          }

          function Oi(e, t) {
            return function (a, i) {
              var s = hm(a) ? l : ua,
                n = t ? t() : {};
              return s(a, e, us(i), n);
            };
          }

          function Hi(e) {
            return nu(function (t, a) {
              var i = -1,
                s = a.length,
                n = s > 1 ? a[s - 1] : q,
                u = s > 2 ? a[2] : q;
              for (
                n = "function" == typeof n ? (s--, n) : q,
                  u && hs(a[0], a[1], u) && ((n = 3 > s ? q : n), (s = 1)),
                  t = Object(t);
                ++i < s;

              ) {
                var r = a[i];
                r && e(t, r, i, n);
              }
              return t;
            });
          }

          function Ui(e, t) {
            return function (a, i) {
              if (null == a) return a;
              if (!fu(a)) return e(a, i);
              for (
                var s = a.length, n = t ? s : -1, u = Object(a);
                (t ? n-- : ++n < s) && i(u[n], n, u) !== !1;

              );
              return a;
            };
          }

          function Ri(e) {
            return function (t, a, i) {
              for (var s = -1, n = Object(t), u = i(t), r = u.length; r--; ) {
                var l = u[e ? r : ++s];
                if (a(n[l], l, n) === !1) break;
              }
              return t;
            };
          }

          function Pi(e, t, a) {
            function i() {
              var t = this && this !== Ia && this instanceof i ? n : e;
              return t.apply(s ? a : this, arguments);
            }
            var s = t & $,
              n = Fi(e);
            return i;
          }

          function Qi(e) {
            return function (t) {
              t = ur(t);
              var a = ca.test(t) ? J(t) : q,
                i = a ? a[0] : t.charAt(0),
                s = a ? a.slice(1).join("") : t.slice(1);
              return i[e]() + s;
            };
          }

          function Wi(e) {
            return function (t) {
              return y(sl(Hr(t)), e, "");
            };
          }

          function Fi(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var a = Eo(e.prototype),
                i = e.apply(a, t);
              return ju(i) ? i : a;
            };
          }

          function Bi(e, a, i) {
            function s() {
              for (
                var u = arguments.length,
                  l = u,
                  o = Array(u),
                  m = this && this !== Ia && this instanceof s ? n : e,
                  p = t.placeholder || s.placeholder;
                l--;

              )
                o[l] = arguments[l];
              var T = 3 > u && o[0] !== p && o[u - 1] !== p ? [] : B(o, p);
              return (
                (u -= T.length),
                i > u ? $i(e, a, Zi, p, q, o, T, q, q, i - u) : r(m, this, o)
              );
            }
            var n = Fi(e);
            return s;
          }

          function Gi(e) {
            return nu(function (t) {
              t = wa(t);
              var a = t.length,
                s = a,
                n = i.prototype.thru;
              for (e && t.reverse(); s--; ) {
                var u = t[s];
                if ("function" != typeof u) throw new zl(fe);
                if (n && !r && "wrapper" == ns(u)) var r = new i([], !0);
              }
              for (s = r ? s : a; ++s < a; ) {
                u = t[s];
                var l = ns(u),
                  o = "wrapper" == l ? jo(u) : q;
                r =
                  o &&
                  fs(o[0]) &&
                  o[1] == (ue | ae | se | re) &&
                  !o[4].length &&
                  1 == o[9]
                    ? r[ns(o[0])].apply(r, o[3])
                    : 1 == u.length && fs(u)
                    ? r[l]()
                    : r.thru(u);
              }
              return function () {
                var e = arguments,
                  i = e[0];
                if (r && 1 == e.length && hm(i) && i.length >= Se)
                  return r.plant(i).value();
                for (var s = 0, n = a ? t[s].apply(this, e) : i; ++s < a; )
                  n = t[s].call(this, n);
                return n;
              };
            });
          }

          function Zi(e, a, i, s, n, u, r, l, o, m) {
            function p() {
              for (var f = arguments.length, _ = f, x = Array(f); _--; )
                x[_] = arguments[_];
              if ((s && (x = Yi(x, s, n)), u && (x = ji(x, u, r)), S || h)) {
                var M = t.placeholder || p.placeholder,
                  g = B(x, M);
                if (((f -= g.length), m > f))
                  return $i(e, a, Zi, M, i, x, g, l, o, m - f);
              }
              var C = c ? i : this,
                E = d ? C[e] : e;
              return (
                l ? (x = Es(x, l)) : v && x.length > 1 && x.reverse(),
                T && o < x.length && (x.length = o),
                this && this !== Ia && this instanceof p && (E = y || Fi(E)),
                E.apply(C, x)
              );
            }
            var T = a & ue,
              c = a & $,
              d = a & ee,
              S = a & ae,
              h = a & ie,
              v = a & le,
              y = d ? q : Fi(e);
            return p;
          }

          function Ji(e, t) {
            return function (a, i) {
              return Pa(a, e, t(i), {});
            };
          }

          function Vi(e) {
            return nu(function (t) {
              return (
                (t = h(wa(t), us())),
                nu(function (a) {
                  var i = this;
                  return e(t, function (e) {
                    return r(e, i, a);
                  });
                })
              );
            });
          }

          function Xi(e, t, a) {
            t = tr(t);
            var i = Z(e);
            if (!t || i >= t) return "";
            var s = t - i;
            a = a === q ? " " : a + "";
            var n = Gr(a, ao(s / Z(a)));
            return ca.test(a) ? J(n).slice(0, s).join("") : n.slice(0, s);
          }

          function qi(e, t, a, i) {
            function s() {
              for (
                var t = -1,
                  l = arguments.length,
                  o = -1,
                  m = i.length,
                  p = Array(m + l),
                  T = this && this !== Ia && this instanceof s ? u : e;
                ++o < m;

              )
                p[o] = i[o];
              for (; l--; ) p[o++] = arguments[++t];
              return r(T, n ? a : this, p);
            }
            var n = t & $,
              u = Fi(e);
            return s;
          }

          function Ki(e) {
            return function (t, a, i) {
              return (
                i && "number" != typeof i && hs(t, a, i) && (a = i = q),
                (t = ir(t)),
                (t = t === t ? t : 0),
                a === q ? ((a = t), (t = 0)) : (a = ir(a) || 0),
                (i = i === q ? (a > t ? 1 : -1) : ir(i) || 0),
                oi(t, a, i, e)
              );
            };
          }

          function $i(e, t, a, i, s, n, u, r, l, o) {
            var m = t & ae,
              p = r ? bi(r) : q,
              T = m ? u : q,
              c = m ? q : u,
              d = m ? n : q,
              S = m ? q : n;
            (t |= m ? se : ne),
              (t &= ~(m ? ne : se)),
              t & te || (t &= ~($ | ee));
            var h = [e, t, s, d, T, S, c, p, l, o],
              v = a.apply(q, h);
            return fs(e) && Io(v, h), (v.placeholder = i), v;
          }

          function es(e) {
            var t = jl[e];
            return function (e, a) {
              if (((e = ir(e)), (a = tr(a)))) {
                var i = (ur(e) + "e").split("e"),
                  s = t(i[0] + "e" + (+i[1] + a));
                return (
                  (i = (ur(s) + "e").split("e")), +(i[0] + "e" + (+i[1] - a))
                );
              }
              return t(e);
            };
          }

          function ts(e, t, a, i, s, n, u, r) {
            var l = t & ee;
            if (!l && "function" != typeof e) throw new zl(fe);
            var o = i ? i.length : 0;
            if (
              (o || ((t &= ~(se | ne)), (i = s = q)),
              (u = u === q ? u : ro(tr(u), 0)),
              (r = r === q ? r : tr(r)),
              (o -= s ? s.length : 0),
              t & ne)
            ) {
              var m = i,
                p = s;
              i = s = q;
            }
            var T = l ? q : jo(e),
              c = [e, t, a, i, s, m, p, n, u, r];
            if (
              (T && Ms(c, T),
              (e = c[0]),
              (t = c[1]),
              (a = c[2]),
              (i = c[3]),
              (s = c[4]),
              (r = c[9] = null == c[9] ? (l ? 0 : e.length) : ro(c[9] - o, 0)),
              !r && t & (ae | ie) && (t &= ~(ae | ie)),
              t && t != $)
            )
              d =
                t == ae || t == ie
                  ? Bi(e, t, r)
                  : (t != se && t != ($ | se)) || s.length
                  ? Zi.apply(q, c)
                  : qi(e, t, a, i);
            else var d = Pi(e, t, a);
            var S = T ? No : Io;
            return S(d, c);
          }

          function as(e, t, a, i, s, n) {
            var u = -1,
              r = s & me,
              l = s & oe,
              o = e.length,
              m = t.length;
            if (o != m && !(r && m > o)) return !1;
            var p = n.get(e);
            if (p) return p == t;
            var T = !0;
            for (n.set(e, t); ++u < o; ) {
              var c = e[u],
                d = t[u];
              if (i) var S = r ? i(d, c, u, t, e, n) : i(c, d, u, e, t, n);
              if (S !== q) {
                if (S) continue;
                T = !1;
                break;
              }
              if (l) {
                if (
                  !_(t, function (e) {
                    return c === e || a(c, e, i, s, n);
                  })
                ) {
                  T = !1;
                  break;
                }
              } else if (c !== d && !a(c, d, i, s, n)) {
                T = !1;
                break;
              }
            }
            return n["delete"](e), T;
          }

          function is(e, t, a, i, s, n) {
            switch (a) {
              case Be:
                return e.byteLength == t.byteLength && i(new Zl(e), new Zl(t))
                  ? !0
                  : !1;
              case Ye:
              case je:
                return +e == +t;
              case be:
                return e.name == t.name && e.message == t.message;
              case Oe:
                return e != +e ? t != +t : e == +t;
              case Ue:
              case Pe:
                return e == t + "";
              case Ae:
                var u = F;
              case Re:
                var r = n & me;
                return (
                  u || (u = G),
                  (r || e.size == t.size) && i(u(e), u(t), s, n | oe)
                );
              case Qe:
                return !!Gl && Mo.call(e) == Mo.call(t);
            }
            return !1;
          }

          function ss(e, t, a, i, s, n) {
            var u = s & me,
              r = fr(e),
              l = r.length,
              o = fr(t),
              m = o.length;
            if (l != m && !u) return !1;
            for (var p = l; p--; ) {
              var T = r[p];
              if (!(u ? T in t : Oa(t, T))) return !1;
            }
            var c = n.get(e);
            if (c) return c == t;
            var d = !0;
            n.set(e, t);
            for (var S = u; ++p < l; ) {
              T = r[p];
              var h = e[T],
                v = t[T];
              if (i) var y = u ? i(v, h, T, t, e, n) : i(h, v, T, e, t, n);
              if (!(y === q ? h === v || a(h, v, i, s, n) : y)) {
                d = !1;
                break;
              }
              S || (S = "constructor" == T);
            }
            if (d && !S) {
              var f = e.constructor,
                _ = t.constructor;
              f != _ &&
                "constructor" in e &&
                "constructor" in t &&
                !(
                  "function" == typeof f &&
                  f instanceof f &&
                  "function" == typeof _ &&
                  _ instanceof _
                ) &&
                (d = !1);
            }
            return n["delete"](e), d;
          }

          function ns(e) {
            for (
              var t = e.name + "", a = Co[t], i = Hl.call(Co, t) ? a.length : 0;
              i--;

            ) {
              var s = a[i],
                n = s.func;
              if (null == n || n == e) return s.name;
            }
            return t;
          }

          function us() {
            var e = t.iteratee || ol;
            return (
              (e = e === ol ? Ga : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }

          function rs(e) {
            for (var t = wr(e), a = t.length; a--; ) t[a][2] = xs(t[a][1]);
            return t;
          }

          function ls(e, t) {
            var a = null == e ? q : e[t];
            return Hu(a) ? a : q;
          }

          function os(e) {
            return Pl.call(e);
          }

          function ms(e, t, a) {
            for (var i = -1, s = a.length; ++i < s; ) {
              var n = a[i],
                u = n.size;
              switch (n.type) {
                case "drop":
                  e += u;
                  break;
                case "dropRight":
                  t -= u;
                  break;
                case "take":
                  t = lo(t, e + u);
                  break;
                case "takeRight":
                  e = ro(e, t - u);
              }
            }
            return {
              start: e,
              end: t,
            };
          }

          function ps(e, t, a) {
            if (null == e) return !1;
            var i = a(e, t);
            i ||
              vs(t) ||
              ((t = vi(t)),
              (e = Cs(e, t)),
              null != e && ((t = Gs(t)), (i = a(e, t))));
            var s = e ? e.length : q;
            return i || (!!s && Yu(s) && Q(t, s) && (hm(e) || Gu(e) || vu(e)));
          }

          function Ts(e) {
            var t = e.length,
              a = e.constructor(t);
            return (
              t &&
                "string" == typeof e[0] &&
                Hl.call(e, "index") &&
                ((a.index = e.index), (a.input = e.input)),
              a
            );
          }

          function cs(e) {
            if (_s(e)) return {};
            var t = e.constructor;
            return Eo(ku(t) ? t.prototype : q);
          }

          function ds(e, t, a) {
            var i = e.constructor;
            switch (t) {
              case Be:
                return Ei(e);
              case Ye:
              case je:
                return new i(+e);
              case Ge:
              case Ze:
              case Je:
              case Ve:
              case Xe:
              case qe:
              case Ke:
              case $e:
              case et:
                return Ni(e, a);
              case Ae:
                return Di(e);
              case Oe:
              case Pe:
                return new i(e);
              case Ue:
                return Li(e);
              case Re:
                return wi(e);
              case Qe:
                return ki(e);
            }
          }

          function Ss(e) {
            var t = e ? e.length : q;
            return Yu(t) && (hm(e) || Gu(e) || vu(e)) ? w(t, String) : null;
          }

          function hs(e, t, a) {
            if (!ju(a)) return !1;
            var i = typeof t;
            return (
              "number" == i ? fu(a) && Q(t, a.length) : "string" == i && t in a
            )
              ? du(a[t], e)
              : !1;
          }

          function vs(e, t) {
            return "number" == typeof e
              ? !0
              : !hm(e) &&
                  (Tt.test(e) || !pt.test(e) || (null != t && e in Object(t)));
          }

          function ys(e) {
            var t = typeof e;
            return (
              "number" == t ||
              "boolean" == t ||
              ("string" == t && "__proto__" !== e) ||
              null == e
            );
          }

          function fs(e) {
            var a = ns(e),
              i = t[a];
            if ("function" != typeof i || !(a in s.prototype)) return !1;
            if (e === i) return !0;
            var n = jo(i);
            return !!n && e === n[0];
          }

          function _s(e) {
            var t = e && e.constructor,
              a = ("function" == typeof t && t.prototype) || Al;
            return e === a;
          }

          function xs(e) {
            return e === e && !ju(e);
          }

          function Ms(e, t) {
            var a = e[1],
              i = t[1],
              s = a | i,
              n = ($ | ee | ue) > s,
              u =
                (i == ue && a == ae) ||
                (i == ue && a == re && e[7].length <= t[8]) ||
                (i == (ue | re) && t[7].length <= t[8] && a == ae);
            if (!n && !u) return e;
            i & $ && ((e[2] = t[2]), (s |= a & $ ? 0 : te));
            var r = t[3];
            if (r) {
              var l = e[3];
              (e[3] = l ? Yi(l, r, t[4]) : bi(r)),
                (e[4] = l ? B(e[3], we) : bi(t[4]));
            }
            return (
              (r = t[5]),
              r &&
                ((l = e[5]),
                (e[5] = l ? ji(l, r, t[6]) : bi(r)),
                (e[6] = l ? B(e[5], we) : bi(t[6]))),
              (r = t[7]),
              r && (e[7] = bi(r)),
              i & ue && (e[8] = null == e[8] ? t[8] : lo(e[8], t[8])),
              null == e[9] && (e[9] = t[9]),
              (e[0] = t[0]),
              (e[1] = s),
              e
            );
          }

          function gs(e, t, a, i, s, n) {
            return ju(e) && ju(t) && (n.set(t, e), Ka(e, t, q, gs, n)), e;
          }

          function Cs(e, t) {
            return 1 == t.length ? e : hr(e, pi(t, 0, -1));
          }

          function Es(e, t) {
            for (var a = e.length, i = lo(t.length, a), s = bi(e); i--; ) {
              var n = t[i];
              e[i] = Q(n, a) ? s[n] : q;
            }
            return e;
          }

          function Ds(e) {
            var t = [];
            return (
              ur(e).replace(ct, function (e, a, i, s) {
                t.push(i ? s.replace(ft, "$1") : a || e);
              }),
              t
            );
          }

          function Ls(e) {
            return _u(e) ? e : [];
          }

          function ws(e) {
            return "function" == typeof e ? e : ll;
          }

          function ks(e) {
            if (e instanceof s) return e.clone();
            var t = new i(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = bi(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }

          function Ns(e, t) {
            t = ro(tr(t), 0);
            var a = e ? e.length : 0;
            if (!a || 1 > t) return [];
            for (var i = 0, s = -1, n = Array(ao(a / t)); a > i; )
              n[++s] = pi(e, i, (i += t));
            return n;
          }

          function Ys(e) {
            for (var t = -1, a = e ? e.length : 0, i = -1, s = []; ++t < a; ) {
              var n = e[t];
              n && (s[++i] = n);
            }
            return s;
          }

          function js(e, t, a) {
            var i = e ? e.length : 0;
            return i
              ? ((t = a || t === q ? 1 : tr(t)), pi(e, 0 > t ? 0 : t, i))
              : [];
          }

          function bs(e, t, a) {
            var i = e ? e.length : 0;
            return i
              ? ((t = a || t === q ? 1 : tr(t)),
                (t = i - t),
                pi(e, 0, 0 > t ? 0 : t))
              : [];
          }

          function zs(e, t) {
            return e && e.length ? _i(e, us(t, 3), !0, !0) : [];
          }

          function Is(e, t) {
            return e && e.length ? _i(e, us(t, 3), !0) : [];
          }

          function As(e, t, a, i) {
            var s = e ? e.length : 0;
            return s
              ? (a && "number" != typeof a && hs(e, t, a) && ((a = 0), (i = s)),
                Ca(e, t, a, i))
              : [];
          }

          function Os(e, t) {
            return e && e.length ? g(e, us(t, 3)) : -1;
          }

          function Hs(e, t) {
            return e && e.length ? g(e, us(t, 3), !0) : -1;
          }

          function Us(e) {
            var t = e ? e.length : 0;
            return t ? wa(e) : [];
          }

          function Rs(e) {
            var t = e ? e.length : 0;
            return t ? wa(e, !0) : [];
          }

          function Ps(e) {
            for (var t = -1, a = e ? e.length : 0, i = {}; ++t < a; ) {
              var s = e[t];
              i[s[0]] = s[1];
            }
            return i;
          }

          function Qs(e) {
            return e ? e[0] : q;
          }

          function Ws(e, t, a) {
            var i = e ? e.length : 0;
            return i
              ? ((a = tr(a)), 0 > a && (a = ro(i + a, 0)), C(e, t, a))
              : -1;
          }

          function Fs(e) {
            return bs(e, 1);
          }

          function Bs(e, t) {
            return e ? no.call(e, t) : "";
          }

          function Gs(e) {
            var t = e ? e.length : 0;
            return t ? e[t - 1] : q;
          }

          function Zs(e, t, a) {
            var i = e ? e.length : 0;
            if (!i) return -1;
            var s = i;
            if (
              (a !== q &&
                ((s = tr(a)), (s = (0 > s ? ro(i + s, 0) : lo(s, i - 1)) + 1)),
              t !== t)
            )
              return R(e, s, !0);
            for (; s--; ) if (e[s] === t) return s;
            return -1;
          }

          function Js(e, t) {
            return e && e.length && t && t.length ? ni(e, t) : e;
          }

          function Vs(e, t, a) {
            return e && e.length && t && t.length ? ui(e, t, us(a)) : e;
          }

          function Xs(e, t) {
            var a = [];
            if (!e || !e.length) return a;
            var i = -1,
              s = [],
              n = e.length;
            for (t = us(t, 3); ++i < n; ) {
              var u = e[i];
              t(u, i, e) && (a.push(u), s.push(i));
            }
            return ri(e, s), a;
          }

          function qs(e) {
            return e ? po.call(e) : e;
          }

          function Ks(e, t, a) {
            var i = e ? e.length : 0;
            return i
              ? (a && "number" != typeof a && hs(e, t, a)
                  ? ((t = 0), (a = i))
                  : ((t = null == t ? 0 : tr(t)), (a = a === q ? i : tr(a))),
                pi(e, t, a))
              : [];
          }

          function $s(e, t) {
            return ci(e, t);
          }

          function en(e, t, a) {
            return di(e, t, us(a));
          }

          function tn(e, t) {
            var a = e ? e.length : 0;
            if (a) {
              var i = ci(e, t);
              if (a > i && du(e[i], t)) return i;
            }
            return -1;
          }

          function an(e, t) {
            return ci(e, t, !0);
          }

          function sn(e, t, a) {
            return di(e, t, us(a), !0);
          }

          function nn(e, t) {
            var a = e ? e.length : 0;
            if (a) {
              var i = ci(e, t, !0) - 1;
              if (du(e[i], t)) return i;
            }
            return -1;
          }

          function un(e) {
            return e && e.length ? Si(e) : [];
          }

          function rn(e, t) {
            return e && e.length ? hi(e, us(t)) : [];
          }

          function ln(e) {
            return js(e, 1);
          }

          function on(e, t, a) {
            return e && e.length
              ? ((t = a || t === q ? 1 : tr(t)), pi(e, 0, 0 > t ? 0 : t))
              : [];
          }

          function mn(e, t, a) {
            var i = e ? e.length : 0;
            return i
              ? ((t = a || t === q ? 1 : tr(t)),
                (t = i - t),
                pi(e, 0 > t ? 0 : t, i))
              : [];
          }

          function pn(e, t) {
            return e && e.length ? _i(e, us(t, 3), !1, !0) : [];
          }

          function Tn(e, t) {
            return e && e.length ? _i(e, us(t, 3)) : [];
          }

          function cn(e) {
            return e && e.length ? yi(e) : [];
          }

          function dn(e, t) {
            return e && e.length ? yi(e, us(t)) : [];
          }

          function Sn(e, t) {
            return e && e.length ? yi(e, q, t) : [];
          }

          function hn(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = c(e, function (e) {
                return _u(e) ? ((t = ro(e.length, t)), !0) : void 0;
              })),
              w(t, function (t) {
                return h(e, ii(t));
              })
            );
          }

          function vn(e, t) {
            if (!e || !e.length) return [];
            var a = hn(e);
            return null == t
              ? a
              : h(a, function (e) {
                  return r(t, q, e);
                });
          }

          function yn(e, t) {
            return gi(e || [], t || [], na);
          }

          function fn(e, t) {
            return gi(e || [], t || [], mi);
          }

          function _n(e) {
            var a = t(e);
            return (a.__chain__ = !0), a;
          }

          function xn(e, t) {
            return t(e), e;
          }

          function Mn(e, t) {
            return t(e);
          }

          function gn() {
            return _n(this);
          }

          function Cn() {
            return new i(this.value(), this.__chain__);
          }

          function En(e) {
            return this.map(e).flatten();
          }

          function Dn() {
            this.__values__ === q && (this.__values__ = er(this.value()));
            var e = this.__index__ >= this.__values__.length,
              t = e ? q : this.__values__[this.__index__++];
            return {
              done: e,
              value: t,
            };
          }

          function Ln() {
            return this;
          }

          function wn(e) {
            for (var t, i = this; i instanceof a; ) {
              var s = ks(i);
              (s.__index__ = 0),
                (s.__values__ = q),
                t ? (n.__wrapped__ = s) : (t = s);
              var n = s;
              i = i.__wrapped__;
            }
            return (n.__wrapped__ = e), t;
          }

          function kn() {
            var e = this.__wrapped__;
            if (e instanceof s) {
              var t = e;
              return (
                this.__actions__.length && (t = new s(this)),
                (t = t.reverse()),
                t.__actions__.push({
                  func: Mn,
                  args: [qs],
                  thisArg: q,
                }),
                new i(t, this.__chain__)
              );
            }
            return this.thru(qs);
          }

          function Nn() {
            return xi(this.__wrapped__, this.__actions__);
          }

          function Yn(e, t, a) {
            var i = hm(e) ? T : ga;
            return a && hs(e, t, a) && (t = q), i(e, us(t, 3));
          }

          function jn(e, t) {
            var a = hm(e) ? c : Ea;
            return a(e, us(t, 3));
          }

          function bn(e, t) {
            if (((t = us(t, 3)), hm(e))) {
              var a = g(e, t);
              return a > -1 ? e[a] : q;
            }
            return M(e, t, Do);
          }

          function zn(e, t) {
            if (((t = us(t, 3)), hm(e))) {
              var a = g(e, t, !0);
              return a > -1 ? e[a] : q;
            }
            return M(e, t, Lo);
          }

          function In(e, t) {
            return wa(Un(e, t));
          }

          function An(e, t) {
            return "function" == typeof t && hm(e) ? m(e, t) : Do(e, ws(t));
          }

          function On(e, t) {
            return "function" == typeof t && hm(e) ? p(e, t) : Lo(e, ws(t));
          }

          function Hn(e, t, a, i) {
            (e = fu(e) ? e : jr(e)), (a = a && !i ? tr(a) : 0);
            var s = e.length;
            return (
              0 > a && (a = ro(s + a, 0)),
              Gu(e) ? s >= a && e.indexOf(t, a) > -1 : !!s && C(e, t, a) > -1
            );
          }

          function Un(e, t) {
            var a = hm(e) ? h : Va;
            return a(e, us(t, 3));
          }

          function Rn(e, t, a, i) {
            return null == e
              ? []
              : (hm(t) || (t = null == t ? [] : [t]),
                (a = i ? q : a),
                hm(a) || (a = null == a ? [] : [a]),
                ei(e, t, a));
          }

          function Pn(e, t, a) {
            var i = hm(e) ? y : E,
              s = arguments.length < 3;
            return i(e, us(t, 4), a, s, Do);
          }

          function Qn(e, t, a) {
            var i = hm(e) ? f : E,
              s = arguments.length < 3;
            return i(e, us(t, 4), a, s, Lo);
          }

          function Wn(e, t) {
            var a = hm(e) ? c : Ea;
            return (
              (t = us(t, 3)),
              a(e, function (e, a, i) {
                return !t(e, a, i);
              })
            );
          }

          function Fn(e) {
            var t = fu(e) ? e : jr(e),
              a = t.length;
            return a > 0 ? t[li(0, a - 1)] : q;
          }

          function Bn(e, t) {
            var a = -1,
              i = er(e),
              s = i.length,
              n = s - 1;
            for (t = oa(tr(t), 0, s); ++a < t; ) {
              var u = li(a, n),
                r = i[u];
              (i[u] = i[a]), (i[a] = r);
            }
            return (i.length = t), i;
          }

          function Gn(e) {
            return Bn(e, Ee);
          }

          function Zn(e) {
            if (null == e) return 0;
            if (fu(e)) {
              var t = e.length;
              return t && Gu(e) ? Z(e) : t;
            }
            return fr(e).length;
          }

          function Jn(e, t, a) {
            var i = hm(e) ? _ : Ti;
            return a && hs(e, t, a) && (t = q), i(e, us(t, 3));
          }

          function Vn(e, t) {
            if ("function" != typeof t) throw new zl(fe);
            return (
              (e = tr(e)),
              function () {
                return --e < 1 ? t.apply(this, arguments) : void 0;
              }
            );
          }

          function Xn(e, t, a) {
            return (
              (t = a ? q : t),
              (t = e && null == t ? e.length : t),
              ts(e, ue, q, q, q, q, t)
            );
          }

          function qn(e, t) {
            var a;
            if ("function" != typeof t) throw new zl(fe);
            return (
              (e = tr(e)),
              function () {
                return (
                  --e > 0 && (a = t.apply(this, arguments)),
                  1 >= e && (t = q),
                  a
                );
              }
            );
          }

          function Kn(e, a, i) {
            a = i ? q : a;
            var s = ts(e, ae, q, q, q, q, q, a);
            return (s.placeholder = t.placeholder || Kn.placeholder), s;
          }

          function $n(e, a, i) {
            a = i ? q : a;
            var s = ts(e, ie, q, q, q, q, q, a);
            return (s.placeholder = t.placeholder || $n.placeholder), s;
          }

          function eu(e, t, a) {
            function i() {
              d && Jl(d), m && Jl(m), (h = 0), (o = m = c = d = S = q);
            }

            function s(t, a) {
              a && Jl(a),
                (m = d = S = q),
                t && ((h = rm()), (p = e.apply(c, o)), d || m || (o = c = q));
            }

            function n() {
              var e = t - (rm() - T);
              0 >= e || e > t ? s(S, m) : (d = eo(n, e));
            }

            function u() {
              return ((d && S) || (m && f)) && (p = e.apply(c, o)), i(), p;
            }

            function r() {
              s(f, d);
            }

            function l() {
              if (
                ((o = arguments),
                (T = rm()),
                (c = this),
                (S = f && (d || !v)),
                y === !1)
              )
                var a = v && !d;
              else {
                h || m || v || (h = T);
                var i = y - (T - h),
                  s = 0 >= i || i > y;
                s
                  ? (m && (m = Jl(m)), (h = T), (p = e.apply(c, o)))
                  : m || (m = eo(r, i));
              }
              return (
                s && d ? (d = Jl(d)) : d || t === y || (d = eo(n, t)),
                a && ((s = !0), (p = e.apply(c, o))),
                !s || d || m || (o = c = q),
                p
              );
            }
            var o,
              m,
              p,
              T,
              c,
              d,
              S,
              h = 0,
              v = !1,
              y = !1,
              f = !0;
            if ("function" != typeof e) throw new zl(fe);
            return (
              (t = ir(t) || 0),
              ju(a) &&
                ((v = !!a.leading),
                (y = "maxWait" in a && ro(ir(a.maxWait) || 0, t)),
                (f = "trailing" in a ? !!a.trailing : f)),
              (l.cancel = i),
              (l.flush = u),
              l
            );
          }

          function tu(e) {
            return ts(e, le);
          }

          function au(e, t) {
            if ("function" != typeof e || (t && "function" != typeof t))
              throw new zl(fe);
            var a = function () {
              var i = arguments,
                s = t ? t.apply(this, i) : i[0],
                n = a.cache;
              if (n.has(s)) return n.get(s);
              var u = e.apply(this, i);
              return (a.cache = n.set(s, u)), u;
            };
            return (a.cache = new au.Cache()), a;
          }

          function iu(e) {
            if ("function" != typeof e) throw new zl(fe);
            return function () {
              return !e.apply(this, arguments);
            };
          }

          function su(e) {
            return qn(2, e);
          }

          function nu(e, t) {
            if ("function" != typeof e) throw new zl(fe);
            return (
              (t = ro(t === q ? e.length - 1 : tr(t), 0)),
              function () {
                for (
                  var a = arguments,
                    i = -1,
                    s = ro(a.length - t, 0),
                    n = Array(s);
                  ++i < s;

                )
                  n[i] = a[t + i];
                switch (t) {
                  case 0:
                    return e.call(this, n);
                  case 1:
                    return e.call(this, a[0], n);
                  case 2:
                    return e.call(this, a[0], a[1], n);
                }
                var u = Array(t + 1);
                for (i = -1; ++i < t; ) u[i] = a[i];
                return (u[t] = n), r(e, this, u);
              }
            );
          }

          function uu(e, t) {
            if ("function" != typeof e) throw new zl(fe);
            return (
              (t = t === q ? 0 : ro(tr(t), 0)),
              nu(function (a) {
                var i = a[t],
                  s = a.slice(0, t);
                return i && v(s, i), r(e, this, s);
              })
            );
          }

          function ru(e, t, a) {
            var i = !0,
              s = !0;
            if ("function" != typeof e) throw new zl(fe);
            return (
              ju(a) &&
                ((i = "leading" in a ? !!a.leading : i),
                (s = "trailing" in a ? !!a.trailing : s)),
              eu(e, t, {
                leading: i,
                maxWait: t,
                trailing: s,
              })
            );
          }

          function lu(e) {
            return Xn(e, 1);
          }

          function ou(e, t) {
            return (t = null == t ? ll : t), cm(t, e);
          }

          function mu(e) {
            return ma(e);
          }

          function pu(e, t) {
            return ma(e, !1, t);
          }

          function Tu(e) {
            return ma(e, !0);
          }

          function cu(e, t) {
            return ma(e, !0, t);
          }

          function du(e, t) {
            return e === t || (e !== e && t !== t);
          }

          function Su(e, t) {
            return e > t;
          }

          function hu(e, t) {
            return e >= t;
          }

          function vu(e) {
            return (
              _u(e) &&
              Hl.call(e, "callee") &&
              (!$l.call(e, "callee") || Pl.call(e) == ke)
            );
          }

          function yu(e) {
            return bu(e) && Pl.call(e) == Be;
          }

          function fu(e) {
            return null != e && !("function" == typeof e && ku(e)) && Yu(bo(e));
          }

          function _u(e) {
            return bu(e) && fu(e);
          }

          function xu(e) {
            return e === !0 || e === !1 || (bu(e) && Pl.call(e) == Ye);
          }

          function Mu(e) {
            return bu(e) && Pl.call(e) == je;
          }

          function gu(e) {
            return !!e && 1 === e.nodeType && bu(e) && !Qu(e);
          }

          function Cu(e) {
            if (fu(e) && (hm(e) || Gu(e) || ku(e.splice) || vu(e)))
              return !e.length;
            for (var t in e) if (Hl.call(e, t)) return !1;
            return !0;
          }

          function Eu(e, t) {
            return Wa(e, t);
          }

          function Du(e, t, a) {
            a = "function" == typeof a ? a : q;
            var i = a ? a(e, t) : q;
            return i === q ? Wa(e, t, a) : !!i;
          }

          function Lu(e) {
            return bu(e) && "string" == typeof e.message && Pl.call(e) == be;
          }

          function wu(e) {
            return "number" == typeof e && so(e);
          }

          function ku(e) {
            var t = ju(e) ? Pl.call(e) : "";
            return t == ze || t == Ie;
          }

          function Nu(e) {
            return "number" == typeof e && e == tr(e);
          }

          function Yu(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && Me >= e;
          }

          function ju(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t);
          }

          function bu(e) {
            return !!e && "object" == typeof e;
          }

          function zu(e) {
            return bu(e) && os(e) == Ae;
          }

          function Iu(e, t) {
            return e === t || Ba(e, t, rs(t));
          }

          function Au(e, t, a) {
            return (a = "function" == typeof a ? a : q), Ba(e, t, rs(t), a);
          }

          function Ou(e) {
            return Pu(e) && e != +e;
          }

          function Hu(e) {
            return null == e
              ? !1
              : ku(e)
              ? Wl.test(Ol.call(e))
              : bu(e) && (P(e) ? Wl : Et).test(e);
          }

          function Uu(e) {
            return null === e;
          }

          function Ru(e) {
            return null == e;
          }

          function Pu(e) {
            return "number" == typeof e || (bu(e) && Pl.call(e) == Oe);
          }

          function Qu(e) {
            if (!bu(e) || Pl.call(e) != He || P(e)) return !1;
            var t = Al;
            if (("function" == typeof e.constructor && (t = Xl(e)), null === t))
              return !0;
            var a = t.constructor;
            return "function" == typeof a && a instanceof a && Ol.call(a) == Rl;
          }

          function Wu(e) {
            return ju(e) && Pl.call(e) == Ue;
          }

          function Fu(e) {
            return Nu(e) && e >= -Me && Me >= e;
          }

          function Bu(e) {
            return bu(e) && os(e) == Re;
          }

          function Gu(e) {
            return (
              "string" == typeof e || (!hm(e) && bu(e) && Pl.call(e) == Pe)
            );
          }

          function Zu(e) {
            return "symbol" == typeof e || (bu(e) && Pl.call(e) == Qe);
          }

          function Ju(e) {
            return bu(e) && Yu(e.length) && !!fa[Pl.call(e)];
          }

          function Vu(e) {
            return e === q;
          }

          function Xu(e) {
            return bu(e) && os(e) == We;
          }

          function qu(e) {
            return bu(e) && Pl.call(e) == Fe;
          }

          function Ku(e, t) {
            return t > e;
          }

          function $u(e, t) {
            return t >= e;
          }

          function er(e) {
            if (!e) return [];
            if (fu(e)) return Gu(e) ? J(e) : bi(e);
            if (Kl && e[Kl]) return W(e[Kl]());
            var t = os(e),
              a = t == Ae ? F : t == Re ? G : jr;
            return a(e);
          }

          function tr(e) {
            if (!e) return 0 === e ? e : 0;
            if (((e = ir(e)), e === xe || e === -xe)) {
              var t = 0 > e ? -1 : 1;
              return t * ge;
            }
            var a = e % 1;
            return e === e ? (a ? e - a : e) : 0;
          }

          function ar(e) {
            return e ? oa(tr(e), 0, Ee) : 0;
          }

          function ir(e) {
            if (ju(e)) {
              var t = ku(e.valueOf) ? e.valueOf() : e;
              e = ju(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(ht, "");
            var a = Ct.test(e);
            return a || Dt.test(e)
              ? La(e.slice(2), a ? 2 : 8)
              : gt.test(e)
              ? Ce
              : +e;
          }

          function sr(e) {
            return zi(e, _r(e));
          }

          function nr(e) {
            return oa(tr(e), -Me, Me);
          }

          function ur(e) {
            if ("string" == typeof e) return e;
            if (null == e) return "";
            if (Zu(e)) return Gl ? go.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -xe ? "-0" : t;
          }

          function rr(e, t) {
            var a = Eo(e);
            return t ? ra(a, t) : a;
          }

          function lr(e, t) {
            return M(e, us(t, 3), Na, !0);
          }

          function or(e, t) {
            return M(e, us(t, 3), Ya, !0);
          }

          function mr(e, t) {
            return null == e ? e : wo(e, ws(t), _r);
          }

          function pr(e, t) {
            return null == e ? e : ko(e, ws(t), _r);
          }

          function Tr(e, t) {
            return e && Na(e, ws(t));
          }

          function cr(e, t) {
            return e && Ya(e, ws(t));
          }

          function dr(e) {
            return null == e ? [] : ja(e, fr(e));
          }

          function Sr(e) {
            return null == e ? [] : ja(e, _r(e));
          }

          function hr(e, t, a) {
            var i = null == e ? q : za(e, t);
            return i === q ? a : i;
          }

          function vr(e, t) {
            return ps(e, t, Oa);
          }

          function yr(e, t) {
            return ps(e, t, Ha);
          }

          function fr(e) {
            var t = _s(e);
            if (!t && !fu(e)) return Za(e);
            var a = Ss(e),
              i = !!a,
              s = a || [],
              n = s.length;
            for (var u in e)
              !Oa(e, u) ||
                (i && ("length" == u || Q(u, n))) ||
                (t && "constructor" == u) ||
                s.push(u);
            return s;
          }

          function _r(e) {
            for (
              var t = -1,
                a = _s(e),
                i = Ja(e),
                s = i.length,
                n = Ss(e),
                u = !!n,
                r = n || [],
                l = r.length;
              ++t < s;

            ) {
              var o = i[t];
              (u && ("length" == o || Q(o, l))) ||
                ("constructor" == o && (a || !Hl.call(e, o))) ||
                r.push(o);
            }
            return r;
          }

          function xr(e, t) {
            var a = {};
            return (
              (t = us(t, 3)),
              Na(e, function (e, i, s) {
                a[t(e, i, s)] = e;
              }),
              a
            );
          }

          function Mr(e, t) {
            var a = {};
            return (
              (t = us(t, 3)),
              Na(e, function (e, i, s) {
                a[i] = t(e, i, s);
              }),
              a
            );
          }

          function gr(e, t) {
            return (
              (t = us(t, 2)),
              ai(e, function (e, a) {
                return !t(e, a);
              })
            );
          }

          function Cr(e, t) {
            return null == e ? {} : ai(e, us(t, 2));
          }

          function Er(e, t, a) {
            if (vs(t, e)) i = null == e ? q : e[t];
            else {
              t = vi(t);
              var i = hr(e, t);
              e = Cs(e, t);
            }
            return i === q && (i = a), ku(i) ? i.call(e) : i;
          }

          function Dr(e, t, a) {
            return null == e ? e : mi(e, t, a);
          }

          function Lr(e, t, a, i) {
            return (
              (i = "function" == typeof i ? i : q),
              null == e ? e : mi(e, t, a, i)
            );
          }

          function wr(e) {
            return k(e, fr(e));
          }

          function kr(e) {
            return k(e, _r(e));
          }

          function Nr(e, t, a) {
            var i = hm(e) || Ju(e);
            if (((t = us(t, 4)), null == a))
              if (i || ju(e)) {
                var s = e.constructor;
                a = i ? (hm(e) ? new s() : []) : Eo(ku(s) ? s.prototype : q);
              } else a = {};
            return (
              (i ? m : Na)(e, function (e, i, s) {
                return t(a, e, i, s);
              }),
              a
            );
          }

          function Yr(e, t) {
            return null == e ? !0 : fi(e, t);
          }

          function jr(e) {
            return e ? Y(e, fr(e)) : [];
          }

          function br(e) {
            return null == e ? Y(e, _r(e)) : [];
          }

          function zr(e, t, a) {
            return (
              a === q && ((a = t), (t = q)),
              a !== q && ((a = ir(a)), (a = a === a ? a : 0)),
              t !== q && ((t = ir(t)), (t = t === t ? t : 0)),
              oa(ir(e), t, a)
            );
          }

          function Ir(e, t, a) {
            return (
              (t = ir(t) || 0),
              a === q ? ((a = t), (t = 0)) : (a = ir(a) || 0),
              (e = ir(e)),
              Ua(e, t, a)
            );
          }

          function Ar(e, t, a) {
            if (
              (a && "boolean" != typeof a && hs(e, t, a) && (t = a = q),
              a === q &&
                ("boolean" == typeof t
                  ? ((a = t), (t = q))
                  : "boolean" == typeof e && ((a = e), (e = q))),
              e === q && t === q
                ? ((e = 0), (t = 1))
                : ((e = ir(e) || 0),
                  t === q ? ((t = e), (e = 0)) : (t = ir(t) || 0)),
              e > t)
            ) {
              var i = e;
              (e = t), (t = i);
            }
            if (a || e % 1 || t % 1) {
              var s = mo();
              return lo(e + s * (t - e + Da("1e-" + ((s + "").length - 1))), t);
            }
            return li(e, t);
          }

          function Or(e) {
            return Am(ur(e).toLowerCase());
          }

          function Hr(e) {
            return (e = ur(e)), e && e.replace(wt, O).replace(pa, "");
          }

          function Ur(e, t, a) {
            (e = ur(e)), (t = "string" == typeof t ? t : t + "");
            var i = e.length;
            return (
              (a = a === q ? i : oa(tr(a), 0, i)),
              (a -= t.length),
              a >= 0 && e.indexOf(t, a) == a
            );
          }

          function Rr(e) {
            return (e = ur(e)), e && rt.test(e) ? e.replace(nt, H) : e;
          }

          function Pr(e) {
            return (e = ur(e)), e && St.test(e) ? e.replace(dt, "\\$&") : e;
          }

          function Qr(e, t, a) {
            (e = ur(e)), (t = tr(t));
            var i = Z(e);
            if (!t || i >= t) return e;
            var s = (t - i) / 2,
              n = io(s),
              u = ao(s);
            return Xi("", n, a) + e + Xi("", u, a);
          }

          function Wr(e, t, a) {
            return (e = ur(e)), e + Xi(e, t, a);
          }

          function Fr(e, t, a) {
            return (e = ur(e)), Xi(e, t, a) + e;
          }

          function Br(e, t, a) {
            return (
              a || null == t ? (t = 0) : t && (t = +t),
              (e = ur(e).replace(ht, "")),
              oo(e, t || (Mt.test(e) ? 16 : 10))
            );
          }

          function Gr(e, t) {
            (e = ur(e)), (t = tr(t));
            var a = "";
            if (!e || 1 > t || t > Me) return a;
            do t % 2 && (a += e), (t = io(t / 2)), (e += e);
            while (t);
            return a;
          }

          function Zr() {
            var e = arguments,
              t = ur(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2]);
          }

          function Jr(e, t, a) {
            return ur(e).split(t, a);
          }

          function Vr(e, t, a) {
            return (
              (e = ur(e)),
              (a = oa(tr(a), 0, e.length)),
              e.lastIndexOf(t, a) == a
            );
          }

          function Xr(e, a, i) {
            var s = t.templateSettings;
            i && hs(e, a, i) && (a = q), (e = ur(e)), (a = _m({}, a, s, ia));
            var n,
              u,
              r = _m({}, a.imports, s.imports, ia),
              l = fr(r),
              o = Y(r, l),
              m = 0,
              p = a.interpolate || kt,
              T = "__p += '",
              c = bl(
                (a.escape || kt).source +
                  "|" +
                  p.source +
                  "|" +
                  (p === mt ? _t : kt).source +
                  "|" +
                  (a.evaluate || kt).source +
                  "|$",
                "g"
              ),
              d =
                "//# sourceURL=" +
                ("sourceURL" in a
                  ? a.sourceURL
                  : "lodash.templateSources[" + ++ya + "]") +
                "\n";
            e.replace(c, function (t, a, i, s, r, l) {
              return (
                i || (i = s),
                (T += e.slice(m, l).replace(Nt, U)),
                a && ((n = !0), (T += "' +\n__e(" + a + ") +\n'")),
                r && ((u = !0), (T += "';\n" + r + ";\n__p += '")),
                i &&
                  (T += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"),
                (m = l + t.length),
                t
              );
            }),
              (T += "';\n");
            var S = a.variable;
            S || (T = "with (obj) {\n" + T + "\n}\n"),
              (T = (u ? T.replace(tt, "") : T)
                .replace(at, "$1")
                .replace(it, "$1;")),
              (T =
                "function(" +
                (S || "obj") +
                ") {\n" +
                (S ? "" : "obj || (obj = {});\n") +
                "var __t, __p = ''" +
                (n ? ", __e = _.escape" : "") +
                (u
                  ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                  : ";\n") +
                T +
                "return __p\n}");
            var h = Rm(function () {
              return Function(l, d + "return " + T).apply(q, o);
            });
            if (((h.source = T), Lu(h))) throw h;
            return h;
          }

          function qr(e) {
            return ur(e).toLowerCase();
          }

          function Kr(e) {
            return ur(e).toUpperCase();
          }

          function $r(e, t, a) {
            if (((e = ur(e)), !e)) return e;
            if (a || t === q) return e.replace(ht, "");
            if (((t += ""), !t)) return e;
            var i = J(e),
              s = J(t);
            return i.slice(j(i, s), b(i, s) + 1).join("");
          }

          function el(e, t, a) {
            if (((e = ur(e)), !e)) return e;
            if (a || t === q) return e.replace(yt, "");
            if (((t += ""), !t)) return e;
            var i = J(e);
            return i.slice(0, b(i, J(t)) + 1).join("");
          }

          function tl(e, t, a) {
            if (((e = ur(e)), !e)) return e;
            if (a || t === q) return e.replace(vt, "");
            if (((t += ""), !t)) return e;
            var i = J(e);
            return i.slice(j(i, J(t))).join("");
          }

          function al(e, t) {
            var a = pe,
              i = Te;
            if (ju(t)) {
              var s = "separator" in t ? t.separator : s;
              (a = "length" in t ? tr(t.length) : a),
                (i = "omission" in t ? ur(t.omission) : i);
            }
            e = ur(e);
            var n = e.length;
            if (ca.test(e)) {
              var u = J(e);
              n = u.length;
            }
            if (a >= n) return e;
            var r = a - Z(i);
            if (1 > r) return i;
            var l = u ? u.slice(0, r).join("") : e.slice(0, r);
            if (s === q) return l + i;
            if ((u && (r += l.length - r), Wu(s))) {
              if (e.slice(r).search(s)) {
                var o,
                  m = l;
                for (
                  s.global || (s = bl(s.source, ur(xt.exec(s)) + "g")),
                    s.lastIndex = 0;
                  (o = s.exec(m));

                )
                  var p = o.index;
                l = l.slice(0, p === q ? r : p);
              }
            } else if (e.indexOf(s, r) != r) {
              var T = l.lastIndexOf(s);
              T > -1 && (l = l.slice(0, T));
            }
            return l + i;
          }

          function il(e) {
            return (e = ur(e)), e && ut.test(e) ? e.replace(st, V) : e;
          }

          function sl(e, t, a) {
            return (
              (e = ur(e)),
              (t = a ? q : t),
              t === q && (t = ha.test(e) ? Sa : da),
              e.match(t) || []
            );
          }

          function nl(e) {
            var t = e ? e.length : 0,
              a = us();
            return (
              (e = t
                ? h(e, function (e) {
                    if ("function" != typeof e[1]) throw new zl(fe);
                    return [a(e[0]), e[1]];
                  })
                : []),
              nu(function (a) {
                for (var i = -1; ++i < t; ) {
                  var s = e[i];
                  if (r(s[0], this, a)) return r(s[1], this, a);
                }
              })
            );
          }

          function ul(e) {
            return Ta(ma(e, !0));
          }

          function rl(e) {
            return function () {
              return e;
            };
          }

          function ll(e) {
            return e;
          }

          function ol(e) {
            return Ga("function" == typeof e ? e : ma(e, !0));
          }

          function ml(e) {
            return Xa(ma(e, !0));
          }

          function pl(e, t) {
            return qa(e, ma(t, !0));
          }

          function Tl(e, t, a) {
            var i = fr(t),
              s = ja(t, i);
            null != a ||
              (ju(t) && (s.length || !i.length)) ||
              ((a = t), (t = e), (e = this), (s = ja(t, fr(t))));
            var n = ju(a) && "chain" in a ? a.chain : !0,
              u = ku(e);
            return (
              m(s, function (a) {
                var i = t[a];
                (e[a] = i),
                  u &&
                    (e.prototype[a] = function () {
                      var t = this.__chain__;
                      if (n || t) {
                        var a = e(this.__wrapped__),
                          s = (a.__actions__ = bi(this.__actions__));
                        return (
                          s.push({
                            func: i,
                            args: arguments,
                            thisArg: e,
                          }),
                          (a.__chain__ = t),
                          a
                        );
                      }
                      return i.apply(e, v([this.value()], arguments));
                    });
              }),
              e
            );
          }

          function cl() {
            return Ia._ === this && (Ia._ = Ql), this;
          }

          function dl() {}

          function Sl(e) {
            return (
              (e = tr(e)),
              function () {
                return arguments[e];
              }
            );
          }

          function hl(e) {
            return vs(e) ? ii(e) : si(e);
          }

          function vl(e) {
            return function (t) {
              return null == e ? q : za(e, t);
            };
          }

          function yl(e, t) {
            if (((e = tr(e)), 1 > e || e > Me)) return [];
            var a = Ee,
              i = lo(e, Ee);
            (t = ws(t)), (e -= Ee);
            for (var s = w(i, t); ++a < e; ) t(a);
            return s;
          }

          function fl(e) {
            return hm(e) ? h(e, String) : Ds(e);
          }

          function _l(e) {
            var t = ++Ul;
            return ur(e) + t;
          }

          function xl(e, t) {
            var a;
            return e === q && t === q
              ? 0
              : (e !== q && (a = e), t !== q && (a = a === q ? t : a + t), a);
          }

          function Ml(e) {
            return e && e.length ? x(e, ll, Su) : q;
          }

          function gl(e, t) {
            return e && e.length ? x(e, us(t), Su) : q;
          }

          function Cl(e) {
            return wl(e) / (e ? e.length : 0);
          }

          function El(e) {
            return e && e.length ? x(e, ll, Ku) : q;
          }

          function Dl(e, t) {
            return e && e.length ? x(e, us(t), Ku) : q;
          }

          function Ll(e, t) {
            var a;
            return e === q && t === q
              ? 0
              : (e !== q && (a = e), t !== q && (a = a === q ? t : a - t), a);
          }

          function wl(e) {
            return e && e.length ? L(e, ll) : 0;
          }

          function kl(e, t) {
            return e && e.length ? L(e, us(t)) : 0;
          }
          e = e ? Aa.defaults({}, e, Aa.pick(Ia, va)) : Ia;
          var Nl = e.Date,
            Yl = e.Error,
            jl = e.Math,
            bl = e.RegExp,
            zl = e.TypeError,
            Il = e.Array.prototype,
            Al = e.Object.prototype,
            Ol = e.Function.prototype.toString,
            Hl = Al.hasOwnProperty,
            Ul = 0,
            Rl = Ol.call(Object),
            Pl = Al.toString,
            Ql = Ia._,
            Wl = bl(
              "^" +
                Ol.call(Hl)
                  .replace(dt, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Fl = ba ? e.Buffer : q,
            Bl = e.Reflect,
            Gl = e.Symbol,
            Zl = e.Uint8Array,
            Jl = e.clearTimeout,
            Vl = Bl ? Bl.enumerate : q,
            Xl = Object.getPrototypeOf,
            ql = Object.getOwnPropertySymbols,
            Kl = "symbol" == typeof (Kl = Gl && Gl.iterator) ? Kl : q,
            $l = Al.propertyIsEnumerable,
            eo = e.setTimeout,
            to = Il.splice,
            ao = jl.ceil,
            io = jl.floor,
            so = e.isFinite,
            no = Il.join,
            uo = Object.keys,
            ro = jl.max,
            lo = jl.min,
            oo = e.parseInt,
            mo = jl.random,
            po = Il.reverse,
            To = ls(e, "Map"),
            co = ls(e, "Set"),
            So = ls(e, "WeakMap"),
            ho = ls(Object, "create"),
            vo = So && new So(),
            yo = To ? Ol.call(To) : "",
            fo = co ? Ol.call(co) : "",
            _o = So ? Ol.call(So) : "",
            xo = Gl ? Gl.prototype : q,
            Mo = Gl ? xo.valueOf : q,
            go = Gl ? xo.toString : q,
            Co = {};
          t.templateSettings = {
            escape: lt,
            evaluate: ot,
            interpolate: mt,
            variable: "",
            imports: {
              _: t,
            },
          };
          var Eo = (function () {
              function e() {}
              return function (t) {
                if (ju(t)) {
                  e.prototype = t;
                  var a = new e();
                  e.prototype = q;
                }
                return a || {};
              };
            })(),
            Do = Ui(Na),
            Lo = Ui(Ya, !0),
            wo = Ri(),
            ko = Ri(!0);
          Vl &&
            !$l.call(
              {
                valueOf: 1,
              },
              "valueOf"
            ) &&
            (Ja = function (e) {
              return W(Vl(e));
            });
          var No = vo
              ? function (e, t) {
                  return vo.set(e, t), e;
                }
              : ll,
            Yo =
              co && 2 === new co([1, 2]).size
                ? function (e) {
                    return new co(e);
                  }
                : dl,
            jo = vo
              ? function (e) {
                  return vo.get(e);
                }
              : dl,
            bo = ii("length"),
            zo =
              ql ||
              function () {
                return [];
              };
          ((To && os(new To()) != Ae) ||
            (co && os(new co()) != Re) ||
            (So && os(new So()) != We)) &&
            (os = function (e) {
              var t = Pl.call(e),
                a = t == He ? e.constructor : null,
                i = "function" == typeof a ? Ol.call(a) : "";
              if (i)
                switch (i) {
                  case yo:
                    return Ae;
                  case fo:
                    return Re;
                  case _o:
                    return We;
                }
              return t;
            });
          var Io = (function () {
              var e = 0,
                t = 0;
              return function (a, i) {
                var s = rm(),
                  n = de - (s - t);
                if (((t = s), n > 0)) {
                  if (++e >= ce) return a;
                } else e = 0;
                return No(a, i);
              };
            })(),
            Ao = nu(function (e, t) {
              return (
                hm(e) || (e = null == e ? [] : [Object(e)]),
                (t = wa(t)),
                o(e, t)
              );
            }),
            Oo = nu(function (e, t) {
              return _u(e) ? Ma(e, wa(t, !1, !0)) : [];
            }),
            Ho = nu(function (e, t) {
              var a = Gs(t);
              return _u(a) && (a = q), _u(e) ? Ma(e, wa(t, !1, !0), us(a)) : [];
            }),
            Uo = nu(function (e, t) {
              var a = Gs(t);
              return _u(a) && (a = q), _u(e) ? Ma(e, wa(t, !1, !0), q, a) : [];
            }),
            Ro = nu(function (e) {
              var t = h(e, Ls);
              return t.length && t[0] === e[0] ? Ra(t) : [];
            }),
            Po = nu(function (e) {
              var t = Gs(e),
                a = h(e, Ls);
              return (
                t === Gs(a) ? (t = q) : a.pop(),
                a.length && a[0] === e[0] ? Ra(a, us(t)) : []
              );
            }),
            Qo = nu(function (e) {
              var t = Gs(e),
                a = h(e, Ls);
              return (
                t === Gs(a) ? (t = q) : a.pop(),
                a.length && a[0] === e[0] ? Ra(a, q, t) : []
              );
            }),
            Wo = nu(Js),
            Fo = nu(function (e, t) {
              t = h(wa(t), String);
              var a = la(e, t);
              return ri(e, t.sort(I)), a;
            }),
            Bo = nu(function (e) {
              return yi(wa(e, !1, !0));
            }),
            Go = nu(function (e) {
              var t = Gs(e);
              return _u(t) && (t = q), yi(wa(e, !1, !0), us(t));
            }),
            Zo = nu(function (e) {
              var t = Gs(e);
              return _u(t) && (t = q), yi(wa(e, !1, !0), q, t);
            }),
            Jo = nu(function (e, t) {
              return _u(e) ? Ma(e, t) : [];
            }),
            Vo = nu(function (e) {
              return Mi(c(e, _u));
            }),
            Xo = nu(function (e) {
              var t = Gs(e);
              return _u(t) && (t = q), Mi(c(e, _u), us(t));
            }),
            qo = nu(function (e) {
              var t = Gs(e);
              return _u(t) && (t = q), Mi(c(e, _u), q, t);
            }),
            Ko = nu(hn),
            $o = nu(function (e) {
              var t = e.length,
                a = t > 1 ? e[t - 1] : q;
              return (a = "function" == typeof a ? (e.pop(), a) : q), vn(e, a);
            }),
            em = nu(function (e) {
              e = wa(e);
              var t = e.length,
                a = t ? e[0] : 0,
                n = this.__wrapped__,
                u = function (t) {
                  return la(t, e);
                };
              return !(t > 1 || this.__actions__.length) &&
                n instanceof s &&
                Q(a)
                ? ((n = n.slice(a, +a + (t ? 1 : 0))),
                  n.__actions__.push({
                    func: Mn,
                    args: [u],
                    thisArg: q,
                  }),
                  new i(n, this.__chain__).thru(function (e) {
                    return t && !e.length && e.push(q), e;
                  }))
                : this.thru(u);
            }),
            tm = Oi(function (e, t, a) {
              Hl.call(e, a) ? ++e[a] : (e[a] = 1);
            }),
            am = Oi(function (e, t, a) {
              Hl.call(e, a) ? e[a].push(t) : (e[a] = [t]);
            }),
            im = nu(function (e, t, a) {
              var i = -1,
                s = "function" == typeof t,
                n = vs(t),
                u = fu(e) ? Array(e.length) : [];
              return (
                Do(e, function (e) {
                  var l = s ? t : n && null != e ? e[t] : q;
                  u[++i] = l ? r(l, e, a) : Qa(e, t, a);
                }),
                u
              );
            }),
            sm = Oi(function (e, t, a) {
              e[a] = t;
            }),
            nm = Oi(
              function (e, t, a) {
                e[a ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            ),
            um = nu(function (e, t) {
              if (null == e) return [];
              var a = t.length;
              return (
                a > 1 && hs(e, t[0], t[1])
                  ? (t = [])
                  : a > 2 && hs(t[0], t[1], t[2]) && (t.length = 1),
                ei(e, wa(t), [])
              );
            }),
            rm = Nl.now,
            lm = nu(function (e, a, i) {
              var s = $;
              if (i.length) {
                var n = t.placeholder || lm.placeholder,
                  u = B(i, n);
                s |= se;
              }
              return ts(e, s, a, i, u);
            }),
            om = nu(function (e, a, i) {
              var s = $ | ee;
              if (i.length) {
                var n = t.placeholder || om.placeholder,
                  u = B(i, n);
                s |= se;
              }
              return ts(a, s, e, i, u);
            }),
            mm = nu(function (e, t) {
              return xa(e, 1, t);
            }),
            pm = nu(function (e, t, a) {
              return xa(e, ir(t) || 0, a);
            }),
            Tm = nu(function (e, t) {
              t = h(wa(t), us());
              var a = t.length;
              return nu(function (i) {
                for (var s = -1, n = lo(i.length, a); ++s < n; )
                  i[s] = t[s].call(this, i[s]);
                return r(e, this, i);
              });
            }),
            cm = nu(function (e, a) {
              var i = t.placeholder || cm.placeholder,
                s = B(a, i);
              return ts(e, se, q, a, s);
            }),
            dm = nu(function (e, a) {
              var i = t.placeholder || dm.placeholder,
                s = B(a, i);
              return ts(e, ne, q, a, s);
            }),
            Sm = nu(function (e, t) {
              return ts(e, re, q, q, q, wa(t));
            }),
            hm = Array.isArray,
            vm = Fl
              ? function (e) {
                  return e instanceof Fl;
                }
              : rl(!1),
            ym = Hi(function (e, t) {
              zi(t, fr(t), e);
            }),
            fm = Hi(function (e, t) {
              zi(t, _r(t), e);
            }),
            _m = Hi(function (e, t, a, i) {
              Ii(t, _r(t), e, i);
            }),
            xm = Hi(function (e, t, a, i) {
              Ii(t, fr(t), e, i);
            }),
            Mm = nu(function (e, t) {
              return la(e, wa(t));
            }),
            gm = nu(function (e) {
              return e.push(q, ia), r(_m, q, e);
            }),
            Cm = nu(function (e) {
              return e.push(q, gs), r(km, q, e);
            }),
            Em = Ji(function (e, t, a) {
              e[t] = a;
            }, rl(ll)),
            Dm = Ji(function (e, t, a) {
              Hl.call(e, t) ? e[t].push(a) : (e[t] = [a]);
            }, us),
            Lm = nu(Qa),
            wm = Hi(function (e, t, a) {
              Ka(e, t, a);
            }),
            km = Hi(function (e, t, a, i) {
              Ka(e, t, a, i);
            }),
            Nm = nu(function (e, t) {
              return null == e
                ? {}
                : ((t = h(wa(t), String)), ti(e, Ma(_r(e), t)));
            }),
            Ym = nu(function (e, t) {
              return null == e ? {} : ti(e, wa(t));
            }),
            jm = Wi(function (e, t, a) {
              return (t = t.toLowerCase()), e + (a ? Or(t) : t);
            }),
            bm = Wi(function (e, t, a) {
              return e + (a ? "-" : "") + t.toLowerCase();
            }),
            zm = Wi(function (e, t, a) {
              return e + (a ? " " : "") + t.toLowerCase();
            }),
            Im = Qi("toLowerCase"),
            Am = Qi("toUpperCase"),
            Om = Wi(function (e, t, a) {
              return e + (a ? "_" : "") + t.toLowerCase();
            }),
            Hm = Wi(function (e, t, a) {
              return e + (a ? " " : "") + Or(t);
            }),
            Um = Wi(function (e, t, a) {
              return e + (a ? " " : "") + t.toUpperCase();
            }),
            Rm = nu(function (e, t) {
              try {
                return r(e, q, t);
              } catch (a) {
                return ju(a) ? a : new Yl(a);
              }
            }),
            Pm = nu(function (e, t) {
              return (
                m(wa(t), function (t) {
                  e[t] = lm(e[t], e);
                }),
                e
              );
            }),
            Qm = Gi(),
            Wm = Gi(!0),
            Fm = nu(function (e, t) {
              return function (a) {
                return Qa(a, e, t);
              };
            }),
            Bm = nu(function (e, t) {
              return function (a) {
                return Qa(e, a, t);
              };
            }),
            Gm = Vi(h),
            Zm = Vi(T),
            Jm = Vi(_),
            Vm = Ki(),
            Xm = Ki(!0),
            qm = es("ceil"),
            Km = es("floor"),
            $m = es("round");
          return (
            (t.prototype = a.prototype),
            (i.prototype = Eo(a.prototype)),
            (i.prototype.constructor = i),
            (s.prototype = Eo(a.prototype)),
            (s.prototype.constructor = s),
            (jt.prototype = ho ? ho(null) : Al),
            (Ot.prototype.clear = Ht),
            (Ot.prototype["delete"] = Ut),
            (Ot.prototype.get = Rt),
            (Ot.prototype.has = Pt),
            (Ot.prototype.set = Qt),
            (Wt.prototype.push = Bt),
            (Gt.prototype.clear = Zt),
            (Gt.prototype["delete"] = Jt),
            (Gt.prototype.get = Vt),
            (Gt.prototype.has = Xt),
            (Gt.prototype.set = qt),
            (au.Cache = Ot),
            (t.after = Vn),
            (t.ary = Xn),
            (t.assign = ym),
            (t.assignIn = fm),
            (t.assignInWith = _m),
            (t.assignWith = xm),
            (t.at = Mm),
            (t.before = qn),
            (t.bind = lm),
            (t.bindAll = Pm),
            (t.bindKey = om),
            (t.chain = _n),
            (t.chunk = Ns),
            (t.compact = Ys),
            (t.concat = Ao),
            (t.cond = nl),
            (t.conforms = ul),
            (t.constant = rl),
            (t.countBy = tm),
            (t.create = rr),
            (t.curry = Kn),
            (t.curryRight = $n),
            (t.debounce = eu),
            (t.defaults = gm),
            (t.defaultsDeep = Cm),
            (t.defer = mm),
            (t.delay = pm),
            (t.difference = Oo),
            (t.differenceBy = Ho),
            (t.differenceWith = Uo),
            (t.drop = js),
            (t.dropRight = bs),
            (t.dropRightWhile = zs),
            (t.dropWhile = Is),
            (t.fill = As),
            (t.filter = jn),
            (t.flatMap = In),
            (t.flatten = Us),
            (t.flattenDeep = Rs),
            (t.flip = tu),
            (t.flow = Qm),
            (t.flowRight = Wm),
            (t.fromPairs = Ps),
            (t.functions = dr),
            (t.functionsIn = Sr),
            (t.groupBy = am),
            (t.initial = Fs),
            (t.intersection = Ro),
            (t.intersectionBy = Po),
            (t.intersectionWith = Qo),
            (t.invert = Em),
            (t.invertBy = Dm),
            (t.invokeMap = im),
            (t.iteratee = ol),
            (t.keyBy = sm),
            (t.keys = fr),
            (t.keysIn = _r),
            (t.map = Un),
            (t.mapKeys = xr),
            (t.mapValues = Mr),
            (t.matches = ml),
            (t.matchesProperty = pl),
            (t.memoize = au),
            (t.merge = wm),
            (t.mergeWith = km),
            (t.method = Fm),
            (t.methodOf = Bm),
            (t.mixin = Tl),
            (t.negate = iu),
            (t.nthArg = Sl),
            (t.omit = Nm),
            (t.omitBy = gr),
            (t.once = su),
            (t.orderBy = Rn),
            (t.over = Gm),
            (t.overArgs = Tm),
            (t.overEvery = Zm),
            (t.overSome = Jm),
            (t.partial = cm),
            (t.partialRight = dm),
            (t.partition = nm),
            (t.pick = Ym),
            (t.pickBy = Cr),
            (t.property = hl),
            (t.propertyOf = vl),
            (t.pull = Wo),
            (t.pullAll = Js),
            (t.pullAllBy = Vs),
            (t.pullAt = Fo),
            (t.range = Vm),
            (t.rangeRight = Xm),
            (t.rearg = Sm),
            (t.reject = Wn),
            (t.remove = Xs),
            (t.rest = nu),
            (t.reverse = qs),
            (t.sampleSize = Bn),
            (t.set = Dr),
            (t.setWith = Lr),
            (t.shuffle = Gn),
            (t.slice = Ks),
            (t.sortBy = um),
            (t.sortedUniq = un),
            (t.sortedUniqBy = rn),
            (t.split = Jr),
            (t.spread = uu),
            (t.tail = ln),
            (t.take = on),
            (t.takeRight = mn),
            (t.takeRightWhile = pn),
            (t.takeWhile = Tn),
            (t.tap = xn),
            (t.throttle = ru),
            (t.thru = Mn),
            (t.toArray = er),
            (t.toPairs = wr),
            (t.toPairsIn = kr),
            (t.toPath = fl),
            (t.toPlainObject = sr),
            (t.transform = Nr),
            (t.unary = lu),
            (t.union = Bo),
            (t.unionBy = Go),
            (t.unionWith = Zo),
            (t.uniq = cn),
            (t.uniqBy = dn),
            (t.uniqWith = Sn),
            (t.unset = Yr),
            (t.unzip = hn),
            (t.unzipWith = vn),
            (t.values = jr),
            (t.valuesIn = br),
            (t.without = Jo),
            (t.words = sl),
            (t.wrap = ou),
            (t.xor = Vo),
            (t.xorBy = Xo),
            (t.xorWith = qo),
            (t.zip = Ko),
            (t.zipObject = yn),
            (t.zipObjectDeep = fn),
            (t.zipWith = $o),
            (t.extend = fm),
            (t.extendWith = _m),
            Tl(t, t),
            (t.add = xl),
            (t.attempt = Rm),
            (t.camelCase = jm),
            (t.capitalize = Or),
            (t.ceil = qm),
            (t.clamp = zr),
            (t.clone = mu),
            (t.cloneDeep = Tu),
            (t.cloneDeepWith = cu),
            (t.cloneWith = pu),
            (t.deburr = Hr),
            (t.endsWith = Ur),
            (t.eq = du),
            (t.escape = Rr),
            (t.escapeRegExp = Pr),
            (t.every = Yn),
            (t.find = bn),
            (t.findIndex = Os),
            (t.findKey = lr),
            (t.findLast = zn),
            (t.findLastIndex = Hs),
            (t.findLastKey = or),
            (t.floor = Km),
            (t.forEach = An),
            (t.forEachRight = On),
            (t.forIn = mr),
            (t.forInRight = pr),
            (t.forOwn = Tr),
            (t.forOwnRight = cr),
            (t.get = hr),
            (t.gt = Su),
            (t.gte = hu),
            (t.has = vr),
            (t.hasIn = yr),
            (t.head = Qs),
            (t.identity = ll),
            (t.includes = Hn),
            (t.indexOf = Ws),
            (t.inRange = Ir),
            (t.invoke = Lm),
            (t.isArguments = vu),
            (t.isArray = hm),
            (t.isArrayBuffer = yu),
            (t.isArrayLike = fu),
            (t.isArrayLikeObject = _u),
            (t.isBoolean = xu),
            (t.isBuffer = vm),
            (t.isDate = Mu),
            (t.isElement = gu),
            (t.isEmpty = Cu),
            (t.isEqual = Eu),
            (t.isEqualWith = Du),
            (t.isError = Lu),
            (t.isFinite = wu),
            (t.isFunction = ku),
            (t.isInteger = Nu),
            (t.isLength = Yu),
            (t.isMap = zu),
            (t.isMatch = Iu),
            (t.isMatchWith = Au),
            (t.isNaN = Ou),
            (t.isNative = Hu),
            (t.isNil = Ru),
            (t.isNull = Uu),
            (t.isNumber = Pu),
            (t.isObject = ju),
            (t.isObjectLike = bu),
            (t.isPlainObject = Qu),
            (t.isRegExp = Wu),
            (t.isSafeInteger = Fu),
            (t.isSet = Bu),
            (t.isString = Gu),
            (t.isSymbol = Zu),
            (t.isTypedArray = Ju),
            (t.isUndefined = Vu),
            (t.isWeakMap = Xu),
            (t.isWeakSet = qu),
            (t.join = Bs),
            (t.kebabCase = bm),
            (t.last = Gs),
            (t.lastIndexOf = Zs),
            (t.lowerCase = zm),
            (t.lowerFirst = Im),
            (t.lt = Ku),
            (t.lte = $u),
            (t.max = Ml),
            (t.maxBy = gl),
            (t.mean = Cl),
            (t.min = El),
            (t.minBy = Dl),
            (t.noConflict = cl),
            (t.noop = dl),
            (t.now = rm),
            (t.pad = Qr),
            (t.padEnd = Wr),
            (t.padStart = Fr),
            (t.parseInt = Br),
            (t.random = Ar),
            (t.reduce = Pn),
            (t.reduceRight = Qn),
            (t.repeat = Gr),
            (t.replace = Zr),
            (t.result = Er),
            (t.round = $m),
            (t.runInContext = X),
            (t.sample = Fn),
            (t.size = Zn),
            (t.snakeCase = Om),
            (t.some = Jn),
            (t.sortedIndex = $s),
            (t.sortedIndexBy = en),
            (t.sortedIndexOf = tn),
            (t.sortedLastIndex = an),
            (t.sortedLastIndexBy = sn),
            (t.sortedLastIndexOf = nn),
            (t.startCase = Hm),
            (t.startsWith = Vr),
            (t.subtract = Ll),
            (t.sum = wl),
            (t.sumBy = kl),
            (t.template = Xr),
            (t.times = yl),
            (t.toInteger = tr),
            (t.toLength = ar),
            (t.toLower = qr),
            (t.toNumber = ir),
            (t.toSafeInteger = nr),
            (t.toString = ur),
            (t.toUpper = Kr),
            (t.trim = $r),
            (t.trimEnd = el),
            (t.trimStart = tl),
            (t.truncate = al),
            (t.unescape = il),
            (t.uniqueId = _l),
            (t.upperCase = Um),
            (t.upperFirst = Am),
            (t.each = An),
            (t.eachRight = On),
            (t.first = Qs),
            Tl(
              t,
              (function () {
                var e = {};
                return (
                  Na(t, function (a, i) {
                    Hl.call(t.prototype, i) || (e[i] = a);
                  }),
                  e
                );
              })(),
              {
                chain: !1,
              }
            ),
            (t.VERSION = K),
            m(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                t[e].placeholder = t;
              }
            ),
            m(["drop", "take"], function (e, t) {
              (s.prototype[e] = function (a) {
                var i = this.__filtered__;
                if (i && !t) return new s(this);
                a = a === q ? 1 : ro(tr(a), 0);
                var n = this.clone();
                return (
                  i
                    ? (n.__takeCount__ = lo(a, n.__takeCount__))
                    : n.__views__.push({
                        size: lo(a, Ee),
                        type: e + (n.__dir__ < 0 ? "Right" : ""),
                      }),
                  n
                );
              }),
                (s.prototype[e + "Right"] = function (t) {
                  return this.reverse()[e](t).reverse();
                });
            }),
            m(["filter", "map", "takeWhile"], function (e, t) {
              var a = t + 1,
                i = a == he || a == ye;
              s.prototype[e] = function (e) {
                var t = this.clone();
                return (
                  t.__iteratees__.push({
                    iteratee: us(e, 3),
                    type: a,
                  }),
                  (t.__filtered__ = t.__filtered__ || i),
                  t
                );
              };
            }),
            m(["head", "last"], function (e, t) {
              var a = "take" + (t ? "Right" : "");
              s.prototype[e] = function () {
                return this[a](1).value()[0];
              };
            }),
            m(["initial", "tail"], function (e, t) {
              var a = "drop" + (t ? "" : "Right");
              s.prototype[e] = function () {
                return this.__filtered__ ? new s(this) : this[a](1);
              };
            }),
            (s.prototype.compact = function () {
              return this.filter(ll);
            }),
            (s.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (s.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (s.prototype.invokeMap = nu(function (e, t) {
              return "function" == typeof e
                ? new s(this)
                : this.map(function (a) {
                    return Qa(a, e, t);
                  });
            })),
            (s.prototype.reject = function (e) {
              return (
                (e = us(e, 3)),
                this.filter(function (t) {
                  return !e(t);
                })
              );
            }),
            (s.prototype.slice = function (e, t) {
              e = tr(e);
              var a = this;
              return a.__filtered__ && (e > 0 || 0 > t)
                ? new s(a)
                : (0 > e ? (a = a.takeRight(-e)) : e && (a = a.drop(e)),
                  t !== q &&
                    ((t = tr(t)),
                    (a = 0 > t ? a.dropRight(-t) : a.take(t - e))),
                  a);
            }),
            (s.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (s.prototype.toArray = function () {
              return this.take(Ee);
            }),
            Na(s.prototype, function (e, a) {
              var n = /^(?:filter|find|map|reject)|While$/.test(a),
                u = /^(?:head|last)$/.test(a),
                r = t[u ? "take" + ("last" == a ? "Right" : "") : a],
                l = u || /^find/.test(a);
              r &&
                (t.prototype[a] = function () {
                  var a = this.__wrapped__,
                    o = u ? [1] : arguments,
                    m = a instanceof s,
                    p = o[0],
                    T = m || hm(a),
                    c = function (e) {
                      var a = r.apply(t, v([e], o));
                      return u && d ? a[0] : a;
                    };
                  T &&
                    n &&
                    "function" == typeof p &&
                    1 != p.length &&
                    (m = T = !1);
                  var d = this.__chain__,
                    S = !!this.__actions__.length,
                    h = l && !d,
                    y = m && !S;
                  if (!l && T) {
                    a = y ? a : new s(this);
                    var f = e.apply(a, o);
                    return (
                      f.__actions__.push({
                        func: Mn,
                        args: [c],
                        thisArg: q,
                      }),
                      new i(f, d)
                    );
                  }
                  return h && y
                    ? e.apply(this, o)
                    : ((f = this.thru(c)),
                      h ? (u ? f.value()[0] : f.value()) : f);
                });
            }),
            m(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var a = Il[e],
                  i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  s = /^(?:pop|shift)$/.test(e);
                t.prototype[e] = function () {
                  var e = arguments;
                  return s && !this.__chain__
                    ? a.apply(this.value(), e)
                    : this[i](function (t) {
                        return a.apply(t, e);
                      });
                };
              }
            ),
            Na(s.prototype, function (e, a) {
              var i = t[a];
              if (i) {
                var s = i.name + "",
                  n = Co[s] || (Co[s] = []);
                n.push({
                  name: a,
                  func: i,
                });
              }
            }),
            (Co[Zi(q, ee).name] = [
              {
                name: "wrapper",
                func: q,
              },
            ]),
            (s.prototype.clone = z),
            (s.prototype.reverse = Lt),
            (s.prototype.value = Yt),
            (t.prototype.at = em),
            (t.prototype.chain = gn),
            (t.prototype.commit = Cn),
            (t.prototype.flatMap = En),
            (t.prototype.next = Dn),
            (t.prototype.plant = wn),
            (t.prototype.reverse = kn),
            (t.prototype.toJSON = t.prototype.valueOf = t.prototype.value = Nn),
            Kl && (t.prototype[Kl] = Ln),
            t
          );
        }
        var q,
          K = "4.3.0",
          $ = 1,
          ee = 2,
          te = 4,
          ae = 8,
          ie = 16,
          se = 32,
          ne = 64,
          ue = 128,
          re = 256,
          le = 512,
          oe = 1,
          me = 2,
          pe = 30,
          Te = "...",
          ce = 150,
          de = 16,
          Se = 200,
          he = 1,
          ve = 2,
          ye = 3,
          fe = "Expected a function",
          _e = "__lodash_hash_undefined__",
          xe = 1 / 0,
          Me = 9007199254740991,
          ge = 1.7976931348623157e308,
          Ce = NaN,
          Ee = 4294967295,
          De = Ee - 1,
          Le = Ee >>> 1,
          we = "__lodash_placeholder__",
          ke = "[object Arguments]",
          Ne = "[object Array]",
          Ye = "[object Boolean]",
          je = "[object Date]",
          be = "[object Error]",
          ze = "[object Function]",
          Ie = "[object GeneratorFunction]",
          Ae = "[object Map]",
          Oe = "[object Number]",
          He = "[object Object]",
          Ue = "[object RegExp]",
          Re = "[object Set]",
          Pe = "[object String]",
          Qe = "[object Symbol]",
          We = "[object WeakMap]",
          Fe = "[object WeakSet]",
          Be = "[object ArrayBuffer]",
          Ge = "[object Float32Array]",
          Ze = "[object Float64Array]",
          Je = "[object Int8Array]",
          Ve = "[object Int16Array]",
          Xe = "[object Int32Array]",
          qe = "[object Uint8Array]",
          Ke = "[object Uint8ClampedArray]",
          $e = "[object Uint16Array]",
          et = "[object Uint32Array]",
          tt = /\b__p \+= '';/g,
          at = /\b(__p \+=) '' \+/g,
          it = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          st = /&(?:amp|lt|gt|quot|#39|#96);/g,
          nt = /[&<>"'`]/g,
          ut = RegExp(st.source),
          rt = RegExp(nt.source),
          lt = /<%-([\s\S]+?)%>/g,
          ot = /<%([\s\S]+?)%>/g,
          mt = /<%=([\s\S]+?)%>/g,
          pt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Tt = /^\w*$/,
          ct =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
          dt = /[\\^$.*+?()[\]{}|]/g,
          St = RegExp(dt.source),
          ht = /^\s+|\s+$/g,
          vt = /^\s+/,
          yt = /\s+$/,
          ft = /\\(\\)?/g,
          _t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          xt = /\w*$/,
          Mt = /^0x/i,
          gt = /^[-+]0x[0-9a-f]+$/i,
          Ct = /^0b[01]+$/i,
          Et = /^\[object .+?Constructor\]$/,
          Dt = /^0o[0-7]+$/i,
          Lt = /^(?:0|[1-9]\d*)$/,
          wt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
          kt = /($^)/,
          Nt = /['\n\r\u2028\u2029\\]/g,
          Yt = "\\ud800-\\udfff",
          jt = "\\u0300-\\u036f\\ufe20-\\ufe23",
          bt = "\\u20d0-\\u20f0",
          zt = "\\u2700-\\u27bf",
          It = "a-z\\xdf-\\xf6\\xf8-\\xff",
          At = "\\xac\\xb1\\xd7\\xf7",
          Ot = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          Ht = "\\u2018\\u2019\\u201c\\u201d",
          Ut =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          Rt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          Pt = "\\ufe0e\\ufe0f",
          Qt = At + Ot + Ht + Ut,
          Wt = "[" + Yt + "]",
          Ft = "[" + Qt + "]",
          Bt = "[" + jt + bt + "]",
          Gt = "\\d+",
          Zt = "[" + zt + "]",
          Jt = "[" + It + "]",
          Vt = "[^" + Yt + Qt + Gt + zt + It + Rt + "]",
          Xt = "\\ud83c[\\udffb-\\udfff]",
          qt = "(?:" + Bt + "|" + Xt + ")",
          Kt = "[^" + Yt + "]",
          $t = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          ea = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          ta = "[" + Rt + "]",
          aa = "\\u200d",
          ia = "(?:" + Jt + "|" + Vt + ")",
          sa = "(?:" + ta + "|" + Vt + ")",
          na = qt + "?",
          ua = "[" + Pt + "]?",
          ra =
            "(?:" + aa + "(?:" + [Kt, $t, ea].join("|") + ")" + ua + na + ")*",
          la = ua + na + ra,
          oa = "(?:" + [Zt, $t, ea].join("|") + ")" + la,
          ma = "(?:" + [Kt + Bt + "?", Bt, $t, ea, Wt].join("|") + ")",
          pa = RegExp(Bt, "g"),
          Ta = RegExp(Xt + "(?=" + Xt + ")|" + ma + la, "g"),
          ca = RegExp("[" + aa + Yt + jt + bt + Pt + "]"),
          da = /[a-zA-Z0-9]+/g,
          Sa = RegExp(
            [
              ta + "?" + Jt + "+(?=" + [Ft, ta, "$"].join("|") + ")",
              sa + "+(?=" + [Ft, ta + ia, "$"].join("|") + ")",
              ta + "?" + ia + "+",
              ta + "+",
              Gt,
              oa,
            ].join("|"),
            "g"
          ),
          ha = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          va = [
            "Array",
            "Buffer",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Reflect",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          ya = -1,
          fa = {};
        (fa[Ge] =
          fa[Ze] =
          fa[Je] =
          fa[Ve] =
          fa[Xe] =
          fa[qe] =
          fa[Ke] =
          fa[$e] =
          fa[et] =
            !0),
          (fa[ke] =
            fa[Ne] =
            fa[Be] =
            fa[Ye] =
            fa[je] =
            fa[be] =
            fa[ze] =
            fa[Ae] =
            fa[Oe] =
            fa[He] =
            fa[Ue] =
            fa[Re] =
            fa[Pe] =
            fa[We] =
              !1);
        var _a = {};
        (_a[ke] =
          _a[Ne] =
          _a[Be] =
          _a[Ye] =
          _a[je] =
          _a[Ge] =
          _a[Ze] =
          _a[Je] =
          _a[Ve] =
          _a[Xe] =
          _a[Ae] =
          _a[Oe] =
          _a[He] =
          _a[Ue] =
          _a[Re] =
          _a[Pe] =
          _a[Qe] =
          _a[qe] =
          _a[Ke] =
          _a[$e] =
          _a[et] =
            !0),
          (_a[be] = _a[ze] = _a[We] = !1);
        var xa = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
          },
          Ma = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;",
          },
          ga = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`",
          },
          Ca = {
            function: !0,
            object: !0,
          },
          Ea = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Da = parseFloat,
          La = parseInt,
          wa = Ca[typeof t] && t && !t.nodeType ? t : null,
          ka = Ca[typeof e] && e && !e.nodeType ? e : null,
          Na = z(wa && ka && "object" == typeof s && s),
          Ya = z(Ca[typeof self] && self),
          ja = z(Ca[typeof window] && window),
          ba = ka && ka.exports === wa ? wa : null,
          za = z(Ca[typeof this] && this),
          Ia =
            Na ||
            (ja !== (za && za.window) && ja) ||
            Ya ||
            za ||
            Function("return this")(),
          Aa = X();
        ((ja || Ya || {})._ = Aa),
          (i = function () {
            return Aa;
          }.call(t, a, t, e)),
          !(i !== q && (e.exports = i));
      }.call(this));
    }.call(
      t,
      a(113)(e),
      (function () {
        return this;
      })()
    ));
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE4IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMyBDb3B5IDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IjAxX1Vtc2F0eiIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2MzQuMDAwMDAwLCAtMzI3LjAwMDAwMCkiIGZpbGw9IiNFMzU1MDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMy1Db3B5LTIiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzQuMDAwMDAwLCAzMjcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuODE4LDE1LjkzNjM2MzYgTDIuMDE3NjM2MzYsMTUuOTM2MzYzNiBDMS4yMDgzNjM2NCwxNS45MzYzNjM2IDAuNTU2OTA5MDkxLDE1LjYxMjE4MTggMC4yMzAzNjM2MzYsMTUuMDQ2MTgxOCBDLTAuMDk2LDE0LjQ4MTA5MDkgLTAuMDUxMjcyNzI3MywxMy43NTQ1NDU1IDAuMzUzNDU0NTQ1LDEzLjA1NCBMNy4yNTM0NTQ1NSwxLjEwMjU0NTQ1IEM3LjY1ODU0NTQ1LDAuNDAxODE4MTgyIDguMjY1MDkwOTEsMCA4LjkxOCwwIEM5LjU3MTA5MDkxLDAgMTAuMTc3NjM2NCwwLjQwMiAxMC41ODIxODE4LDEuMTAyNzI3MjcgTDE3LjQ4MTgxODIsMTMuMDU0MzYzNiBDMTcuODg2NzI3MywxMy43NTUwOTA5IDE3LjkzMTYzNjQsMTQuNDgxMjcyNyAxNy42MDUyNzI3LDE1LjA0NjU0NTUgQzE3LjI3ODcyNzMsMTUuNjEyMTgxOCAxNi42MjcyNzI3LDE1LjkzNjM2MzYgMTUuODE4LDE1LjkzNjM2MzYgTDE1LjgxOCwxNS45MzYzNjM2IFogTTguOTE4LDEuNDUwNTQ1NDUgQzguODIzMjcyNzMsMS40NTA1NDU0NSA4LjY2MDM2MzY0LDEuNTY3MjcyNzMgOC41MDk4MTgxOCwxLjgyODE4MTgyIEwxLjYwOTYzNjM2LDEzLjc3OTQ1NDUgQzEuNDU4OTA5MDksMTQuMDQwMTgxOCAxLjQzOTI3MjczLDE0LjIzOTYzNjQgMS40ODY1NDU0NSwxNC4zMjE2MzY0IEMxLjUzMzgxODE4LDE0LjQwMzA5MDkgMS43MTYzNjM2NCwxNC40ODU4MTgyIDIuMDE3NjM2MzYsMTQuNDg1ODE4MiBMMTUuODE4LDE0LjQ4NTgxODIgQzE2LjExOTI3MjcsMTQuNDg1ODE4MiAxNi4zMDE2MzY0LDE0LjQwMzA5MDkgMTYuMzQ5MDkwOSwxNC4zMjEyNzI3IEMxNi4zOTYzNjM2LDE0LjIzOTYzNjQgMTYuMzc2MzYzNiwxNC4wNDAzNjM2IDE2LjIyNTgxODIsMTMuNzc5NDU0NSBMOS4zMjU4MTgxOCwxLjgyOCBDOS4xNzU0NTQ1NSwxLjU2NzI3MjczIDkuMDEyMzYzNjQsMS40NTA1NDU0NSA4LjkxOCwxLjQ1MDU0NTQ1IEw4LjkxOCwxLjQ1MDU0NTQ1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMDU2OTA5MDksOS41MjYzNjM2NCBDOC4wOTUwOTA5MSw5LjkyMjU0NTQ1IDguMTU5MjcyNzMsMTAuMjEzODE4MiA4LjI1MzQ1NDU1LDEwLjQxNzI3MjcgQzguMzcxNjM2MzYsMTAuNjczMjcyNyA4LjU5MDkwOTA5LDEwLjgwODU0NTUgOC44ODgsMTAuODA4NTQ1NSBDOS4xNzg3MjcyNywxMC44MDg1NDU1IDkuMzk5NDU0NTUsMTAuNjcxNDU0NSA5LjUyNjcyNzI3LDEwLjQxMjE4MTggQzkuNjMwMTgxODIsMTAuMjAwNTQ1NSA5LjY5NTQ1NDU1LDkuOTEzMjcyNzMgOS43MjUyNzI3Myw5LjUzNjE4MTgyIEw5Ljk4MDkwOTA5LDYuNjA1MjcyNzMgQzEwLjAwOTA5MDksNi4zMzA5MDkwOSAxMC4wMjM0NTQ1LDYuMDU1MjcyNzMgMTAuMDIzNDU0NSw1Ljc4NjM2MzY0IEMxMC4wMjM0NTQ1LDUuMzA1ODE4MTggOS45NjAzNjM2NCw0Ljk0MjM2MzY0IDkuODMsNC42NzQ5MDkwOSBDOS43MjUyNzI3Myw0LjQ2MDE4MTgyIDkuNDg5MDkwOTEsNC4yMDQ1NDU0NSA4Ljk1OTYzNjM2LDQuMjA0NTQ1NDUgQzguNjE5MjcyNzMsNC4yMDQ1NDU0NSA4LjMzOTA5MDkxLDQuMzE5NjM2MzYgOC4xMjY5MDkwOSw0LjU0NjU0NTQ1IEM3LjkxOCw0Ljc3IDcuODEyLDUuMDc2NzI3MjcgNy44MTIsNS40NTkyNzI3MyBDNy44MTIsNS43MDU4MTgxOCA3LjgzMDE4MTgyLDYuMTEyNTQ1NDUgNy44NjYsNi42NjkyNzI3MyBMOC4wNTY5MDkwOSw5LjUyNjM2MzY0IEw4LjA1NjkwOTA5LDkuNTI2MzYzNjQgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC45MTIsMTEuNDM1NDU0NSBDOC42MDYsMTEuNDM1NDU0NSA4LjM0MzYzNjM2LDExLjU0MzYzNjQgOC4xMzE2MzYzNiwxMS43NTUwOTA5IEM3LjkxOTQ1NDU1LDExLjk2NzA5MDkgNy44MTIsMTIuMjI4IDcuODEyLDEyLjUyOTQ1NDUgQzcuODEyLDEyLjg3MjkwOTEgNy45MjcwOTA5MSwxMy4xNDY5MDkxIDguMTU0MTgxODIsMTMuMzQzODE4MiBDOC4zNzI1NDU0NSwxMy41MzM4MTgyIDguNjMxNDU0NTUsMTMuNjI5NDU0NSA4LjkyMzgxODE4LDEzLjYyOTQ1NDUgQzkuMjEyOTA5MDksMTMuNjI5NDU0NSA5LjQ2OTQ1NDU1LDEzLjUzMjE4MTggOS42ODYzNjM2NCwxMy4zMzkyNzI3IEM5LjkwOTgxODE4LDEzLjE0MDE4MTggMTAuMDIzNDU0NSwxMi44NjgxODE4IDEwLjAyMzQ1NDUsMTIuNTI5MjcyNyBDMTAuMDIzNDU0NSwxMi4yMjY3MjczIDkuOTEzNjM2MzYsMTEuOTY1NDU0NSA5LjY5NjE4MTgyLDExLjc1MzA5MDkgQzkuNDgwNTQ1NDUsMTEuNTQyNTQ1NSA5LjIxNjU0NTQ1LDExLjQzNTQ1NDUgOC45MTIsMTEuNDM1NDU0NSBMOC45MTIsMTEuNDM1NDU0NSBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
  },
  function (e, t, a) {
    var i;
    /*!
     * Chart.js
     * http://chartjs.org/
     * Version: 1.0.2
     *
     * Copyright 2015 Nick Downie
     * Released under the MIT license
     * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
     */
    (function () {
      "use strict";
      var s = this,
        n = s.Chart,
        u = function (e) {
          (this.canvas = e.canvas), (this.ctx = e);
          var t = function (e, t) {
              return e["offset" + t]
                ? e["offset" + t]
                : document.defaultView.getComputedStyle(e).getPropertyValue(t);
            },
            a = (this.width = t(e.canvas, "Width")),
            i = (this.height = t(e.canvas, "Height"));
          (e.canvas.width = a), (e.canvas.height = i);
          var a = (this.width = e.canvas.width),
            i = (this.height = e.canvas.height);
          return (
            (this.aspectRatio = this.width / this.height),
            r.retinaScale(this),
            this
          );
        };
      (u.defaults = {
        global: {
          animation: !0,
          animationSteps: 60,
          animationEasing: "easeOutQuart",
          showScale: !0,
          scaleOverride: !1,
          scaleSteps: null,
          scaleStepWidth: null,
          scaleStartValue: null,
          scaleLineColor: "rgba(0,0,0,.1)",
          scaleLineWidth: 1,
          scaleShowLabels: !0,
          scaleLabel: "<%=value%>",
          scaleIntegersOnly: !0,
          scaleBeginAtZero: !1,
          scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          scaleFontSize: 12,
          scaleFontStyle: "normal",
          scaleFontColor: "#666",
          responsive: !1,
          maintainAspectRatio: !0,
          showTooltips: !0,
          customTooltips: !1,
          tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
          tooltipFillColor: "rgba(0,0,0,0.8)",
          tooltipFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipFontSize: 14,
          tooltipFontStyle: "normal",
          tooltipFontColor: "#fff",
          tooltipTitleFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipTitleFontSize: 14,
          tooltipTitleFontStyle: "bold",
          tooltipTitleFontColor: "#fff",
          tooltipYPadding: 6,
          tooltipXPadding: 6,
          tooltipCaretSize: 8,
          tooltipCornerRadius: 6,
          tooltipXOffset: 10,
          tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
          multiTooltipTemplate: "<%= value %>",
          multiTooltipKeyBackground: "#fff",
          onAnimationProgress: function () {},
          onAnimationComplete: function () {},
        },
      }),
        (u.types = {});
      var r = (u.helpers = {}),
        l = (r.each = function (e, t, a) {
          var i = Array.prototype.slice.call(arguments, 3);
          if (e)
            if (e.length === +e.length) {
              var s;
              for (s = 0; s < e.length; s++) t.apply(a, [e[s], s].concat(i));
            } else for (var n in e) t.apply(a, [e[n], n].concat(i));
        }),
        o = (r.clone = function (e) {
          var t = {};
          return (
            l(e, function (a, i) {
              e.hasOwnProperty(i) && (t[i] = a);
            }),
            t
          );
        }),
        m = (r.extend = function (e) {
          return (
            l(Array.prototype.slice.call(arguments, 1), function (t) {
              l(t, function (a, i) {
                t.hasOwnProperty(i) && (e[i] = a);
              });
            }),
            e
          );
        }),
        p = (r.merge = function (e, t) {
          var a = Array.prototype.slice.call(arguments, 0);
          return a.unshift({}), m.apply(null, a);
        }),
        T = (r.indexOf = function (e, t) {
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (var a = 0; a < e.length; a++) if (e[a] === t) return a;
          return -1;
        }),
        c =
          ((r.where = function (e, t) {
            var a = [];
            return (
              r.each(e, function (e) {
                t(e) && a.push(e);
              }),
              a
            );
          }),
          (r.findNextWhere = function (e, t, a) {
            a || (a = -1);
            for (var i = a + 1; i < e.length; i++) {
              var s = e[i];
              if (t(s)) return s;
            }
          }),
          (r.findPreviousWhere = function (e, t, a) {
            a || (a = e.length);
            for (var i = a - 1; i >= 0; i--) {
              var s = e[i];
              if (t(s)) return s;
            }
          }),
          (r.inherits = function (e) {
            var t = this,
              a =
                e && e.hasOwnProperty("constructor")
                  ? e.constructor
                  : function () {
                      return t.apply(this, arguments);
                    },
              i = function () {
                this.constructor = a;
              };
            return (
              (i.prototype = t.prototype),
              (a.prototype = new i()),
              (a.extend = c),
              e && m(a.prototype, e),
              (a.__super__ = t.prototype),
              a
            );
          })),
        d = (r.noop = function () {}),
        S = (r.uid = (function () {
          var e = 0;
          return function () {
            return "chart-" + e++;
          };
        })()),
        h = (r.warn = function (e) {
          window.console &&
            "function" == typeof window.console.warn &&
            console.warn(e);
        }),
        v = (r.amd = a(264)),
        y = (r.isNumber = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }),
        f = (r.max = function (e) {
          return Math.max.apply(Math, e);
        }),
        _ = (r.min = function (e) {
          return Math.min.apply(Math, e);
        }),
        x =
          ((r.cap = function (e, t, a) {
            if (y(t)) {
              if (e > t) return t;
            } else if (y(a) && a > e) return a;
            return e;
          }),
          (r.getDecimalPlaces = function (e) {
            return e % 1 !== 0 && y(e) ? e.toString().split(".")[1].length : 0;
          })),
        M = (r.radians = function (e) {
          return e * (Math.PI / 180);
        }),
        g =
          ((r.getAngleFromPoint = function (e, t) {
            var a = t.x - e.x,
              i = t.y - e.y,
              s = Math.sqrt(a * a + i * i),
              n = 2 * Math.PI + Math.atan2(i, a);
            return (
              0 > a && 0 > i && (n += 2 * Math.PI),
              {
                angle: n,
                distance: s,
              }
            );
          }),
          (r.aliasPixel = function (e) {
            return e % 2 === 0 ? 0 : 0.5;
          })),
        C =
          ((r.splineCurve = function (e, t, a, i) {
            var s = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)),
              n = Math.sqrt(Math.pow(a.x - t.x, 2) + Math.pow(a.y - t.y, 2)),
              u = (i * s) / (s + n),
              r = (i * n) / (s + n);
            return {
              inner: {
                x: t.x - u * (a.x - e.x),
                y: t.y - u * (a.y - e.y),
              },
              outer: {
                x: t.x + r * (a.x - e.x),
                y: t.y + r * (a.y - e.y),
              },
            };
          }),
          (r.calculateOrderOfMagnitude = function (e) {
            return Math.floor(Math.log(e) / Math.LN10);
          })),
        E =
          ((r.calculateScaleRange = function (e, t, a, i, s) {
            var n = 2,
              u = Math.floor(t / (1.5 * a)),
              r = n >= u,
              l = f(e),
              o = _(e);
            l === o && ((l += 0.5), o >= 0.5 && !i ? (o -= 0.5) : (l += 0.5));
            for (
              var m = Math.abs(l - o),
                p = C(m),
                T = Math.ceil(l / (1 * Math.pow(10, p))) * Math.pow(10, p),
                c = i
                  ? 0
                  : Math.floor(o / (1 * Math.pow(10, p))) * Math.pow(10, p),
                d = T - c,
                S = Math.pow(10, p),
                h = Math.round(d / S);
              (h > u || u > 2 * h) && !r;

            )
              if (h > u)
                (S *= 2), (h = Math.round(d / S)), h % 1 !== 0 && (r = !0);
              else if (s && p >= 0) {
                if ((S / 2) % 1 !== 0) break;
                (S /= 2), (h = Math.round(d / S));
              } else (S /= 2), (h = Math.round(d / S));
            return (
              r && ((h = n), (S = d / h)),
              {
                steps: h,
                stepValue: S,
                min: c,
                max: c + h * S,
              }
            );
          }),
          (r.template = function (e, t) {
            function a(e, t) {
              var a = /\W/.test(e)
                ? new Function(
                    "obj",
                    "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" +
                      e
                        .replace(/[\r\t\n]/g, " ")
                        .split("<%")
                        .join("	")
                        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                        .replace(/\t=(.*?)%>/g, "',$1,'")
                        .split("	")
                        .join("');")
                        .split("%>")
                        .join("p.push('")
                        .split("\r")
                        .join("\\'") +
                      "');}return p.join('');"
                  )
                : (i[e] = i[e]);
              return t ? a(t) : a;
            }
            if (e instanceof Function) return e(t);
            var i = {};
            return a(e, t);
          })),
        D =
          ((r.generateLabels = function (e, t, a, i) {
            var s = new Array(t);
            return (
              labelTemplateString &&
                l(s, function (t, n) {
                  s[n] = E(e, {
                    value: a + i * (n + 1),
                  });
                }),
              s
            );
          }),
          (r.easingEffects = {
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return -1 * e * (e - 2);
            },
            easeInOutQuad: function (e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return 1 * ((e = e / 1 - 1) * e * e + 1);
            },
            easeInOutCubic: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e
                : 0.5 * ((e -= 2) * e * e + 2);
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return -1 * ((e = e / 1 - 1) * e * e * e - 1);
            },
            easeInOutQuart: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e
                : -0.5 * ((e -= 2) * e * e * e - 2);
            },
            easeInQuint: function (e) {
              return 1 * (e /= 1) * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return 1 * ((e = e / 1 - 1) * e * e * e * e + 1);
            },
            easeInOutQuint: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            },
            easeInSine: function (e) {
              return -1 * Math.cos((e / 1) * (Math.PI / 2)) + 1;
            },
            easeOutSine: function (e) {
              return 1 * Math.sin((e / 1) * (Math.PI / 2));
            },
            easeInOutSine: function (e) {
              return -0.5 * (Math.cos((Math.PI * e) / 1) - 1);
            },
            easeInExpo: function (e) {
              return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1));
            },
            easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 * (-Math.pow(2, (-10 * e) / 1) + 1);
            },
            easeInOutExpo: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (e - 1))
                : 0.5 * (-Math.pow(2, -10 * --e) + 2);
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
            },
            easeOutCirc: function (e) {
              return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
            },
            easeInOutCirc: function (e) {
              return (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                a = 0,
                i = 1;
              return 0 === e
                ? 0
                : 1 == (e /= 1)
                ? 1
                : (a || (a = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (t = a / 4))
                    : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                  -(
                    i *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((1 * e - t) * (2 * Math.PI)) / a)
                  ));
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                a = 0,
                i = 1;
              return 0 === e
                ? 0
                : 1 == (e /= 1)
                ? 1
                : (a || (a = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (t = a / 4))
                    : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                  i *
                    Math.pow(2, -10 * e) *
                    Math.sin(((1 * e - t) * (2 * Math.PI)) / a) +
                    1);
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                a = 0,
                i = 1;
              return 0 === e
                ? 0
                : 2 == (e /= 0.5)
                ? 1
                : (a || (a = 1 * (0.3 * 1.5)),
                  i < Math.abs(1)
                    ? ((i = 1), (t = a / 4))
                    : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                  1 > e
                    ? -0.5 *
                      (i *
                        Math.pow(2, 10 * (e -= 1)) *
                        Math.sin(((1 * e - t) * (2 * Math.PI)) / a))
                    : i *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((1 * e - t) * (2 * Math.PI)) / a) *
                        0.5 +
                      1);
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return 1 * (e /= 1) * e * ((t + 1) * e - t);
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1);
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= 0.5) < 1
                ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
                : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
            },
            easeInBounce: function (e) {
              return 1 - D.easeOutBounce(1 - e);
            },
            easeOutBounce: function (e) {
              return (e /= 1) < 1 / 2.75
                ? 1 * (7.5625 * e * e)
                : 2 / 2.75 > e
                ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                : 2.5 / 2.75 > e
                ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
            },
            easeInOutBounce: function (e) {
              return 0.5 > e
                ? 0.5 * D.easeInBounce(2 * e)
                : 0.5 * D.easeOutBounce(2 * e - 1) + 0.5;
            },
          })),
        L = (r.requestAnimFrame = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              return window.setTimeout(e, 1e3 / 60);
            }
          );
        })()),
        w = (r.cancelAnimFrame = (function () {
          return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function (e) {
              return window.clearTimeout(e, 1e3 / 60);
            }
          );
        })()),
        k =
          ((r.animationLoop = function (e, t, a, i, s, n) {
            var u = 0,
              r = D[a] || D.linear,
              l = function () {
                u++;
                var a = u / t,
                  o = r(a);
                e.call(n, o, a, u),
                  i.call(n, o, a),
                  t > u ? (n.animationFrame = L(l)) : s.apply(n);
              };
            L(l);
          }),
          (r.getRelativePosition = function (e) {
            var t,
              a,
              i = e.originalEvent || e,
              s = e.currentTarget || e.srcElement,
              n = s.getBoundingClientRect();
            return (
              i.touches
                ? ((t = i.touches[0].clientX - n.left),
                  (a = i.touches[0].clientY - n.top))
                : ((t = i.clientX - n.left), (a = i.clientY - n.top)),
              {
                x: t,
                y: a,
              }
            );
          }),
          (r.addEvent = function (e, t, a) {
            e.addEventListener
              ? e.addEventListener(t, a)
              : e.attachEvent
              ? e.attachEvent("on" + t, a)
              : (e["on" + t] = a);
          })),
        N = (r.removeEvent = function (e, t, a) {
          e.removeEventListener
            ? e.removeEventListener(t, a, !1)
            : e.detachEvent
            ? e.detachEvent("on" + t, a)
            : (e["on" + t] = d);
        }),
        Y =
          ((r.bindEvents = function (e, t, a) {
            e.events || (e.events = {}),
              l(t, function (t) {
                (e.events[t] = function () {
                  a.apply(e, arguments);
                }),
                  k(e.chart.canvas, t, e.events[t]);
              });
          }),
          (r.unbindEvents = function (e, t) {
            l(t, function (t, a) {
              N(e.chart.canvas, a, t);
            });
          })),
        j = (r.getMaximumWidth = function (e) {
          var t = e.parentNode;
          return t.clientWidth;
        }),
        b = (r.getMaximumHeight = function (e) {
          var t = e.parentNode;
          return t.clientHeight;
        }),
        z =
          ((r.getMaximumSize = r.getMaximumWidth),
          (r.retinaScale = function (e) {
            var t = e.ctx,
              a = e.canvas.width,
              i = e.canvas.height;
            window.devicePixelRatio &&
              ((t.canvas.style.width = a + "px"),
              (t.canvas.style.height = i + "px"),
              (t.canvas.height = i * window.devicePixelRatio),
              (t.canvas.width = a * window.devicePixelRatio),
              t.scale(window.devicePixelRatio, window.devicePixelRatio));
          })),
        I = (r.clear = function (e) {
          e.ctx.clearRect(0, 0, e.width, e.height);
        }),
        A = (r.fontString = function (e, t, a) {
          return t + " " + e + "px " + a;
        }),
        O = (r.longestText = function (e, t, a) {
          e.font = t;
          var i = 0;
          return (
            l(a, function (t) {
              var a = e.measureText(t).width;
              i = a > i ? a : i;
            }),
            i
          );
        }),
        H = (r.drawRoundedRectangle = function (e, t, a, i, s, n) {
          e.beginPath(),
            e.moveTo(t + n, a),
            e.lineTo(t + i - n, a),
            e.quadraticCurveTo(t + i, a, t + i, a + n),
            e.lineTo(t + i, a + s - n),
            e.quadraticCurveTo(t + i, a + s, t + i - n, a + s),
            e.lineTo(t + n, a + s),
            e.quadraticCurveTo(t, a + s, t, a + s - n),
            e.lineTo(t, a + n),
            e.quadraticCurveTo(t, a, t + n, a),
            e.closePath();
        });
      (u.instances = {}),
        (u.Type = function (e, t, a) {
          (this.options = t),
            (this.chart = a),
            (this.id = S()),
            (u.instances[this.id] = this),
            t.responsive && this.resize(),
            this.initialize.call(this, e);
        }),
        m(u.Type.prototype, {
          initialize: function () {
            return this;
          },
          clear: function () {
            return I(this.chart), this;
          },
          stop: function () {
            return w(this.animationFrame), this;
          },
          resize: function (e) {
            this.stop();
            var t = this.chart.canvas,
              a = j(this.chart.canvas),
              i = this.options.maintainAspectRatio
                ? a / this.chart.aspectRatio
                : b(this.chart.canvas);
            return (
              (t.width = this.chart.width = a),
              (t.height = this.chart.height = i),
              z(this.chart),
              "function" == typeof e &&
                e.apply(this, Array.prototype.slice.call(arguments, 1)),
              this
            );
          },
          reflow: d,
          render: function (e) {
            return (
              e && this.reflow(),
              this.options.animation && !e
                ? r.animationLoop(
                    this.draw,
                    this.options.animationSteps,
                    this.options.animationEasing,
                    this.options.onAnimationProgress,
                    this.options.onAnimationComplete,
                    this
                  )
                : (this.draw(), this.options.onAnimationComplete.call(this)),
              this
            );
          },
          generateLegend: function () {
            return E(this.options.legendTemplate, this);
          },
          destroy: function () {
            this.clear(), Y(this, this.events);
            var e = this.chart.canvas;
            (e.width = this.chart.width),
              (e.height = this.chart.height),
              e.style.removeProperty
                ? (e.style.removeProperty("width"),
                  e.style.removeProperty("height"))
                : (e.style.removeAttribute("width"),
                  e.style.removeAttribute("height")),
              delete u.instances[this.id];
          },
          showTooltip: function (e, t) {
            "undefined" == typeof this.activeElements &&
              (this.activeElements = []);
            var a = function (e) {
              var t = !1;
              return e.length !== this.activeElements.length
                ? (t = !0)
                : (l(
                    e,
                    function (e, a) {
                      e !== this.activeElements[a] && (t = !0);
                    },
                    this
                  ),
                  t);
            }.call(this, e);
            if (a || t) {
              if (
                ((this.activeElements = e),
                this.draw(),
                this.options.customTooltips && this.options.customTooltips(!1),
                e.length > 0)
              )
                if (this.datasets && this.datasets.length > 1) {
                  for (
                    var i, s, n = this.datasets.length - 1;
                    n >= 0 &&
                    ((i =
                      this.datasets[n].points ||
                      this.datasets[n].bars ||
                      this.datasets[n].segments),
                    (s = T(i, e[0])),
                    -1 === s);
                    n--
                  );
                  var o = [],
                    m = [],
                    p = function (e) {
                      var t,
                        a,
                        i,
                        n,
                        u,
                        l = [],
                        p = [],
                        T = [];
                      return (
                        r.each(this.datasets, function (e) {
                          (t = e.points || e.bars || e.segments),
                            t[s] && t[s].hasValue() && l.push(t[s]);
                        }),
                        r.each(
                          l,
                          function (e) {
                            p.push(e.x),
                              T.push(e.y),
                              o.push(
                                r.template(this.options.multiTooltipTemplate, e)
                              ),
                              m.push({
                                fill: e._saved.fillColor || e.fillColor,
                                stroke: e._saved.strokeColor || e.strokeColor,
                              });
                          },
                          this
                        ),
                        (u = _(T)),
                        (i = f(T)),
                        (n = _(p)),
                        (a = f(p)),
                        {
                          x: n > this.chart.width / 2 ? n : a,
                          y: (u + i) / 2,
                        }
                      );
                    }.call(this, s);
                  new u.MultiTooltip({
                    x: p.x,
                    y: p.y,
                    xPadding: this.options.tooltipXPadding,
                    yPadding: this.options.tooltipYPadding,
                    xOffset: this.options.tooltipXOffset,
                    fillColor: this.options.tooltipFillColor,
                    textColor: this.options.tooltipFontColor,
                    fontFamily: this.options.tooltipFontFamily,
                    fontStyle: this.options.tooltipFontStyle,
                    fontSize: this.options.tooltipFontSize,
                    titleTextColor: this.options.tooltipTitleFontColor,
                    titleFontFamily: this.options.tooltipTitleFontFamily,
                    titleFontStyle: this.options.tooltipTitleFontStyle,
                    titleFontSize: this.options.tooltipTitleFontSize,
                    cornerRadius: this.options.tooltipCornerRadius,
                    labels: o,
                    legendColors: m,
                    legendColorBackground:
                      this.options.multiTooltipKeyBackground,
                    title: e[0].label,
                    chart: this.chart,
                    ctx: this.chart.ctx,
                    custom: this.options.customTooltips,
                  }).draw();
                } else
                  l(
                    e,
                    function (e) {
                      var t = e.tooltipPosition();
                      new u.Tooltip({
                        x: Math.round(t.x),
                        y: Math.round(t.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: E(this.options.tooltipTemplate, e),
                        chart: this.chart,
                        custom: this.options.customTooltips,
                      }).draw();
                    },
                    this
                  );
              return this;
            }
          },
          toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(
              this.chart.canvas,
              arguments
            );
          },
        }),
        (u.Type.extend = function (e) {
          var t = this,
            a = function () {
              return t.apply(this, arguments);
            };
          if (
            ((a.prototype = o(t.prototype)),
            m(a.prototype, e),
            (a.extend = u.Type.extend),
            e.name || t.prototype.name)
          ) {
            var i = e.name || t.prototype.name,
              s = u.defaults[t.prototype.name]
                ? o(u.defaults[t.prototype.name])
                : {};
            (u.defaults[i] = m(s, e.defaults)),
              (u.types[i] = a),
              (u.prototype[i] = function (e, t) {
                var s = p(u.defaults.global, u.defaults[i], t || {});
                return new a(e, s, this);
              });
          } else
            h("Name not provided for this chart, so it hasn't been registered");
          return t;
        }),
        (u.Element = function (e) {
          m(this, e), this.initialize.apply(this, arguments), this.save();
        }),
        m(u.Element.prototype, {
          initialize: function () {},
          restore: function (e) {
            return (
              e
                ? l(
                    e,
                    function (e) {
                      this[e] = this._saved[e];
                    },
                    this
                  )
                : m(this, this._saved),
              this
            );
          },
          save: function () {
            return (this._saved = o(this)), delete this._saved._saved, this;
          },
          update: function (e) {
            return (
              l(
                e,
                function (e, t) {
                  (this._saved[t] = this[t]), (this[t] = e);
                },
                this
              ),
              this
            );
          },
          transition: function (e, t) {
            return (
              l(
                e,
                function (e, a) {
                  this[a] = (e - this._saved[a]) * t + this._saved[a];
                },
                this
              ),
              this
            );
          },
          tooltipPosition: function () {
            return {
              x: this.x,
              y: this.y,
            };
          },
          hasValue: function () {
            return y(this.value);
          },
        }),
        (u.Element.extend = c),
        (u.Point = u.Element.extend({
          display: !0,
          inRange: function (e, t) {
            var a = this.hitDetectionRadius + this.radius;
            return (
              Math.pow(e - this.x, 2) + Math.pow(t - this.y, 2) < Math.pow(a, 2)
            );
          },
          draw: function () {
            if (this.display) {
              var e = this.ctx;
              e.beginPath(),
                e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                e.closePath(),
                (e.strokeStyle = this.strokeColor),
                (e.lineWidth = this.strokeWidth),
                (e.fillStyle = this.fillColor),
                e.fill(),
                e.stroke();
            }
          },
        })),
        (u.Arc = u.Element.extend({
          inRange: function (e, t) {
            var a = r.getAngleFromPoint(this, {
                x: e,
                y: t,
              }),
              i = a.angle >= this.startAngle && a.angle <= this.endAngle,
              s =
                a.distance >= this.innerRadius &&
                a.distance <= this.outerRadius;
            return i && s;
          },
          tooltipPosition: function () {
            var e = this.startAngle + (this.endAngle - this.startAngle) / 2,
              t = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
              x: this.x + Math.cos(e) * t,
              y: this.y + Math.sin(e) * t,
            };
          },
          draw: function (e) {
            var t = this.ctx;
            t.beginPath(),
              t.arc(
                this.x,
                this.y,
                this.outerRadius,
                this.startAngle,
                this.endAngle
              ),
              t.arc(
                this.x,
                this.y,
                this.innerRadius,
                this.endAngle,
                this.startAngle,
                !0
              ),
              t.closePath(),
              (t.strokeStyle = this.strokeColor),
              (t.lineWidth = this.strokeWidth),
              (t.fillStyle = this.fillColor),
              t.fill(),
              (t.lineJoin = "bevel"),
              this.showStroke && t.stroke();
          },
        })),
        (u.Rectangle = u.Element.extend({
          draw: function () {
            var e = this.ctx,
              t = this.width / 2,
              a = this.x - t,
              i = this.x + t,
              s = this.base - (this.base - this.y),
              n = this.strokeWidth / 2;
            this.showStroke && ((a += n), (i -= n), (s += n)),
              e.beginPath(),
              (e.fillStyle = this.fillColor),
              (e.strokeStyle = this.strokeColor),
              (e.lineWidth = this.strokeWidth),
              e.moveTo(a, this.base),
              e.lineTo(a, s),
              e.lineTo(i, s),
              e.lineTo(i, this.base),
              e.fill(),
              this.showStroke && e.stroke();
          },
          height: function () {
            return this.base - this.y;
          },
          inRange: function (e, t) {
            return (
              e >= this.x - this.width / 2 &&
              e <= this.x + this.width / 2 &&
              t >= this.y &&
              t <= this.base
            );
          },
        })),
        (u.Tooltip = u.Element.extend({
          draw: function () {
            var e = this.chart.ctx;
            (e.font = A(this.fontSize, this.fontStyle, this.fontFamily)),
              (this.xAlign = "center"),
              (this.yAlign = "above");
            var t = (this.caretPadding = 2),
              a = e.measureText(this.text).width + 2 * this.xPadding,
              i = this.fontSize + 2 * this.yPadding,
              s = i + this.caretHeight + t;
            this.x + a / 2 > this.chart.width
              ? (this.xAlign = "left")
              : this.x - a / 2 < 0 && (this.xAlign = "right"),
              this.y - s < 0 && (this.yAlign = "below");
            var n = this.x - a / 2,
              u = this.y - s;
            if (((e.fillStyle = this.fillColor), this.custom))
              this.custom(this);
            else {
              switch (this.yAlign) {
                case "above":
                  e.beginPath(),
                    e.moveTo(this.x, this.y - t),
                    e.lineTo(
                      this.x + this.caretHeight,
                      this.y - (t + this.caretHeight)
                    ),
                    e.lineTo(
                      this.x - this.caretHeight,
                      this.y - (t + this.caretHeight)
                    ),
                    e.closePath(),
                    e.fill();
                  break;
                case "below":
                  (u = this.y + t + this.caretHeight),
                    e.beginPath(),
                    e.moveTo(this.x, this.y + t),
                    e.lineTo(
                      this.x + this.caretHeight,
                      this.y + t + this.caretHeight
                    ),
                    e.lineTo(
                      this.x - this.caretHeight,
                      this.y + t + this.caretHeight
                    ),
                    e.closePath(),
                    e.fill();
              }
              switch (this.xAlign) {
                case "left":
                  n = this.x - a + (this.cornerRadius + this.caretHeight);
                  break;
                case "right":
                  n = this.x - (this.cornerRadius + this.caretHeight);
              }
              H(e, n, u, a, i, this.cornerRadius),
                e.fill(),
                (e.fillStyle = this.textColor),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                e.fillText(this.text, n + a / 2, u + i / 2);
            }
          },
        })),
        (u.MultiTooltip = u.Element.extend({
          initialize: function () {
            (this.font = A(this.fontSize, this.fontStyle, this.fontFamily)),
              (this.titleFont = A(
                this.titleFontSize,
                this.titleFontStyle,
                this.titleFontFamily
              )),
              (this.height =
                this.labels.length * this.fontSize +
                (this.labels.length - 1) * (this.fontSize / 2) +
                2 * this.yPadding +
                1.5 * this.titleFontSize),
              (this.ctx.font = this.titleFont);
            var e = this.ctx.measureText(this.title).width,
              t = O(this.ctx, this.font, this.labels) + this.fontSize + 3,
              a = f([t, e]);
            this.width = a + 2 * this.xPadding;
            var i = this.height / 2;
            this.y - i < 0
              ? (this.y = i)
              : this.y + i > this.chart.height &&
                (this.y = this.chart.height - i),
              this.x > this.chart.width / 2
                ? (this.x -= this.xOffset + this.width)
                : (this.x += this.xOffset);
          },
          getLineHeight: function (e) {
            var t = this.y - this.height / 2 + this.yPadding,
              a = e - 1;
            return 0 === e
              ? t + this.titleFontSize / 2
              : t +
                  (1.5 * this.fontSize * a + this.fontSize / 2) +
                  1.5 * this.titleFontSize;
          },
          draw: function () {
            if (this.custom) this.custom(this);
            else {
              H(
                this.ctx,
                this.x,
                this.y - this.height / 2,
                this.width,
                this.height,
                this.cornerRadius
              );
              var e = this.ctx;
              (e.fillStyle = this.fillColor),
                e.fill(),
                e.closePath(),
                (e.textAlign = "left"),
                (e.textBaseline = "middle"),
                (e.fillStyle = this.titleTextColor),
                (e.font = this.titleFont),
                e.fillText(
                  this.title,
                  this.x + this.xPadding,
                  this.getLineHeight(0)
                ),
                (e.font = this.font),
                r.each(
                  this.labels,
                  function (t, a) {
                    (e.fillStyle = this.textColor),
                      e.fillText(
                        t,
                        this.x + this.xPadding + this.fontSize + 3,
                        this.getLineHeight(a + 1)
                      ),
                      (e.fillStyle = this.legendColorBackground),
                      e.fillRect(
                        this.x + this.xPadding,
                        this.getLineHeight(a + 1) - this.fontSize / 2,
                        this.fontSize,
                        this.fontSize
                      ),
                      (e.fillStyle = this.legendColors[a].fill),
                      e.fillRect(
                        this.x + this.xPadding,
                        this.getLineHeight(a + 1) - this.fontSize / 2,
                        this.fontSize,
                        this.fontSize
                      );
                  },
                  this
                );
            }
          },
        })),
        (u.Scale = u.Element.extend({
          initialize: function () {
            this.fit();
          },
          buildYLabels: function () {
            this.yLabels = [];
            for (var e = x(this.stepValue), t = 0; t <= this.steps; t++)
              this.yLabels.push(
                E(this.templateString, {
                  value: (this.min + t * this.stepValue).toFixed(e),
                })
              );
            this.yLabelWidth =
              this.display && this.showLabels
                ? O(this.ctx, this.font, this.yLabels)
                : 0;
          },
          addXLabel: function (e) {
            this.xLabels.push(e), this.valuesCount++, this.fit();
          },
          removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit();
          },
          fit: function () {
            (this.startPoint = this.display ? this.fontSize : 0),
              (this.endPoint = this.display
                ? this.height - 1.5 * this.fontSize - 5
                : this.height),
              (this.startPoint += this.padding),
              (this.endPoint -= this.padding);
            var e,
              t = this.endPoint - this.startPoint;
            for (
              this.calculateYRange(t),
                this.buildYLabels(),
                this.calculateXLabelRotation();
              t > this.endPoint - this.startPoint;

            )
              (t = this.endPoint - this.startPoint),
                (e = this.yLabelWidth),
                this.calculateYRange(t),
                this.buildYLabels(),
                e < this.yLabelWidth && this.calculateXLabelRotation();
          },
          calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var e,
              t,
              a = this.ctx.measureText(this.xLabels[0]).width,
              i = this.ctx.measureText(
                this.xLabels[this.xLabels.length - 1]
              ).width;
            if (
              ((this.xScalePaddingRight = i / 2 + 3),
              (this.xScalePaddingLeft =
                a / 2 > this.yLabelWidth + 10 ? a / 2 : this.yLabelWidth + 10),
              (this.xLabelRotation = 0),
              this.display)
            ) {
              var s,
                n = O(this.ctx, this.font, this.xLabels);
              this.xLabelWidth = n;
              for (
                var u = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;
                (this.xLabelWidth > u && 0 === this.xLabelRotation) ||
                (this.xLabelWidth > u &&
                  this.xLabelRotation <= 90 &&
                  this.xLabelRotation > 0);

              )
                (s = Math.cos(M(this.xLabelRotation))),
                  (e = s * a),
                  (t = s * i),
                  e + this.fontSize / 2 > this.yLabelWidth + 8 &&
                    (this.xScalePaddingLeft = e + this.fontSize / 2),
                  (this.xScalePaddingRight = this.fontSize / 2),
                  this.xLabelRotation++,
                  (this.xLabelWidth = s * n);
              this.xLabelRotation > 0 &&
                (this.endPoint -= Math.sin(M(this.xLabelRotation)) * n + 3);
            } else
              (this.xLabelWidth = 0),
                (this.xScalePaddingRight = this.padding),
                (this.xScalePaddingLeft = this.padding);
          },
          calculateYRange: d,
          drawingArea: function () {
            return this.startPoint - this.endPoint;
          },
          calculateY: function (e) {
            var t = this.drawingArea() / (this.min - this.max);
            return this.endPoint - t * (e - this.min);
          },
          calculateX: function (e) {
            var t =
                (this.xLabelRotation > 0,
                this.width -
                  (this.xScalePaddingLeft + this.xScalePaddingRight)),
              a =
                t /
                Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
              i = a * e + this.xScalePaddingLeft;
            return this.offsetGridLines && (i += a / 2), Math.round(i);
          },
          update: function (e) {
            r.extend(this, e), this.fit();
          },
          draw: function () {
            var e = this.ctx,
              t = (this.endPoint - this.startPoint) / this.steps,
              a = Math.round(this.xScalePaddingLeft);
            this.display &&
              ((e.fillStyle = this.textColor),
              (e.font = this.font),
              l(
                this.yLabels,
                function (i, s) {
                  var n = this.endPoint - t * s,
                    u = Math.round(n),
                    l = this.showHorizontalLines;
                  (e.textAlign = "right"),
                    (e.textBaseline = "middle"),
                    this.showLabels && e.fillText(i, a - 10, n),
                    0 !== s || l || (l = !0),
                    l && e.beginPath(),
                    s > 0
                      ? ((e.lineWidth = this.gridLineWidth),
                        (e.strokeStyle = this.gridLineColor))
                      : ((e.lineWidth = this.lineWidth),
                        (e.strokeStyle = this.lineColor)),
                    (u += r.aliasPixel(e.lineWidth)),
                    l &&
                      (e.moveTo(a, u),
                      e.lineTo(this.width, u),
                      e.stroke(),
                      e.closePath()),
                    (e.lineWidth = this.lineWidth),
                    (e.strokeStyle = this.lineColor),
                    e.beginPath(),
                    e.moveTo(a - 5, u),
                    e.lineTo(a, u),
                    e.stroke(),
                    e.closePath();
                },
                this
              ),
              l(
                this.xLabels,
                function (t, a) {
                  var i = this.calculateX(a) + g(this.lineWidth),
                    s =
                      this.calculateX(a - (this.offsetGridLines ? 0.5 : 0)) +
                      g(this.lineWidth),
                    n = this.xLabelRotation > 0,
                    u = this.showVerticalLines;
                  0 !== a || u || (u = !0),
                    u && e.beginPath(),
                    a > 0
                      ? ((e.lineWidth = this.gridLineWidth),
                        (e.strokeStyle = this.gridLineColor))
                      : ((e.lineWidth = this.lineWidth),
                        (e.strokeStyle = this.lineColor)),
                    u &&
                      (e.moveTo(s, this.endPoint),
                      e.lineTo(s, this.startPoint - 3),
                      e.stroke(),
                      e.closePath()),
                    (e.lineWidth = this.lineWidth),
                    (e.strokeStyle = this.lineColor),
                    e.beginPath(),
                    e.moveTo(s, this.endPoint),
                    e.lineTo(s, this.endPoint + 5),
                    e.stroke(),
                    e.closePath(),
                    e.save(),
                    e.translate(i, n ? this.endPoint + 12 : this.endPoint + 8),
                    e.rotate(-1 * M(this.xLabelRotation)),
                    (e.font = this.font),
                    (e.textAlign = n ? "right" : "center"),
                    (e.textBaseline = n ? "middle" : "top"),
                    e.fillText(t, 0, 0),
                    e.restore();
                },
                this
              ));
          },
        })),
        (u.RadialScale = u.Element.extend({
          initialize: function () {
            (this.size = _([this.height, this.width])),
              (this.drawingArea = this.display
                ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY)
                : this.size / 2);
          },
          calculateCenterOffset: function (e) {
            var t = this.drawingArea / (this.max - this.min);
            return (e - this.min) * t;
          },
          update: function () {
            this.lineArc
              ? (this.drawingArea = this.display
                  ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY)
                  : this.size / 2)
              : this.setScaleSize(),
              this.buildYLabels();
          },
          buildYLabels: function () {
            this.yLabels = [];
            for (var e = x(this.stepValue), t = 0; t <= this.steps; t++)
              this.yLabels.push(
                E(this.templateString, {
                  value: (this.min + t * this.stepValue).toFixed(e),
                })
              );
          },
          getCircumference: function () {
            return (2 * Math.PI) / this.valuesCount;
          },
          setScaleSize: function () {
            var e,
              t,
              a,
              i,
              s,
              n,
              u,
              r,
              l,
              o,
              m,
              p,
              T = _([
                this.height / 2 - this.pointLabelFontSize - 5,
                this.width / 2,
              ]),
              c = this.width,
              d = 0;
            for (
              this.ctx.font = A(
                this.pointLabelFontSize,
                this.pointLabelFontStyle,
                this.pointLabelFontFamily
              ),
                t = 0;
              t < this.valuesCount;
              t++
            )
              (e = this.getPointPosition(t, T)),
                (a =
                  this.ctx.measureText(
                    E(this.templateString, {
                      value: this.labels[t],
                    })
                  ).width + 5),
                0 === t || t === this.valuesCount / 2
                  ? ((i = a / 2),
                    e.x + i > c && ((c = e.x + i), (s = t)),
                    e.x - i < d && ((d = e.x - i), (u = t)))
                  : t < this.valuesCount / 2
                  ? e.x + a > c && ((c = e.x + a), (s = t))
                  : t > this.valuesCount / 2 &&
                    e.x - a < d &&
                    ((d = e.x - a), (u = t));
            (l = d),
              (o = Math.ceil(c - this.width)),
              (n = this.getIndexAngle(s)),
              (r = this.getIndexAngle(u)),
              (m = o / Math.sin(n + Math.PI / 2)),
              (p = l / Math.sin(r + Math.PI / 2)),
              (m = y(m) ? m : 0),
              (p = y(p) ? p : 0),
              (this.drawingArea = T - (p + m) / 2),
              this.setCenterPoint(p, m);
          },
          setCenterPoint: function (e, t) {
            var a = this.width - t - this.drawingArea,
              i = e + this.drawingArea;
            (this.xCenter = (i + a) / 2), (this.yCenter = this.height / 2);
          },
          getIndexAngle: function (e) {
            var t = (2 * Math.PI) / this.valuesCount;
            return e * t - Math.PI / 2;
          },
          getPointPosition: function (e, t) {
            var a = this.getIndexAngle(e);
            return {
              x: Math.cos(a) * t + this.xCenter,
              y: Math.sin(a) * t + this.yCenter,
            };
          },
          draw: function () {
            if (this.display) {
              var e = this.ctx;
              if (
                (l(
                  this.yLabels,
                  function (t, a) {
                    if (a > 0) {
                      var i,
                        s = a * (this.drawingArea / this.steps),
                        n = this.yCenter - s;
                      if (this.lineWidth > 0)
                        if (
                          ((e.strokeStyle = this.lineColor),
                          (e.lineWidth = this.lineWidth),
                          this.lineArc)
                        )
                          e.beginPath(),
                            e.arc(
                              this.xCenter,
                              this.yCenter,
                              s,
                              0,
                              2 * Math.PI
                            ),
                            e.closePath(),
                            e.stroke();
                        else {
                          e.beginPath();
                          for (var u = 0; u < this.valuesCount; u++)
                            (i = this.getPointPosition(
                              u,
                              this.calculateCenterOffset(
                                this.min + a * this.stepValue
                              )
                            )),
                              0 === u ? e.moveTo(i.x, i.y) : e.lineTo(i.x, i.y);
                          e.closePath(), e.stroke();
                        }
                      if (this.showLabels) {
                        if (
                          ((e.font = A(
                            this.fontSize,
                            this.fontStyle,
                            this.fontFamily
                          )),
                          this.showLabelBackdrop)
                        ) {
                          var r = e.measureText(t).width;
                          (e.fillStyle = this.backdropColor),
                            e.fillRect(
                              this.xCenter - r / 2 - this.backdropPaddingX,
                              n - this.fontSize / 2 - this.backdropPaddingY,
                              r + 2 * this.backdropPaddingX,
                              this.fontSize + 2 * this.backdropPaddingY
                            );
                        }
                        (e.textAlign = "center"),
                          (e.textBaseline = "middle"),
                          (e.fillStyle = this.fontColor),
                          e.fillText(t, this.xCenter, n);
                      }
                    }
                  },
                  this
                ),
                !this.lineArc)
              ) {
                (e.lineWidth = this.angleLineWidth),
                  (e.strokeStyle = this.angleLineColor);
                for (var t = this.valuesCount - 1; t >= 0; t--) {
                  if (this.angleLineWidth > 0) {
                    var a = this.getPointPosition(
                      t,
                      this.calculateCenterOffset(this.max)
                    );
                    e.beginPath(),
                      e.moveTo(this.xCenter, this.yCenter),
                      e.lineTo(a.x, a.y),
                      e.stroke(),
                      e.closePath();
                  }
                  var i = this.getPointPosition(
                    t,
                    this.calculateCenterOffset(this.max) + 5
                  );
                  (e.font = A(
                    this.pointLabelFontSize,
                    this.pointLabelFontStyle,
                    this.pointLabelFontFamily
                  )),
                    (e.fillStyle = this.pointLabelFontColor);
                  var s = this.labels.length,
                    n = this.labels.length / 2,
                    u = n / 2,
                    r = u > t || t > s - u,
                    o = t === u || t === s - u;
                  0 === t
                    ? (e.textAlign = "center")
                    : t === n
                    ? (e.textAlign = "center")
                    : n > t
                    ? (e.textAlign = "left")
                    : (e.textAlign = "right"),
                    o
                      ? (e.textBaseline = "middle")
                      : r
                      ? (e.textBaseline = "bottom")
                      : (e.textBaseline = "top"),
                    e.fillText(this.labels[t], i.x, i.y);
                }
              }
            }
          },
        })),
        r.addEvent(
          window,
          "resize",
          (function () {
            var e;
            return function () {
              clearTimeout(e),
                (e = setTimeout(function () {
                  l(u.instances, function (e) {
                    e.options.responsive && e.resize(e.render, !0);
                  });
                }, 50));
            };
          })()
        ),
        v
          ? ((i = function () {
              return u;
            }.call(t, a, t, e)),
            !(void 0 !== i && (e.exports = i)))
          : "object" == typeof e && e.exports && (e.exports = u),
        (s.Chart = u),
        (u.noConflict = function () {
          return (s.Chart = n), u;
        });
    }.call(this),
      function () {
        "use strict";
        var e = this,
          t = e.Chart,
          a = t.helpers,
          i = {
            scaleBeginAtZero: !0,
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            legendTemplate:
              '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
          };
        t.Type.extend({
          name: "Bar",
          defaults: i,
          initialize: function (e) {
            var i = this.options;
            (this.ScaleClass = t.Scale.extend({
              offsetGridLines: !0,
              calculateBarX: function (e, t, a) {
                var s = this.calculateBaseWidth(),
                  n = this.calculateX(a) - s / 2,
                  u = this.calculateBarWidth(e);
                return n + u * t + t * i.barDatasetSpacing + u / 2;
              },
              calculateBaseWidth: function () {
                return (
                  this.calculateX(1) -
                  this.calculateX(0) -
                  2 * i.barValueSpacing
                );
              },
              calculateBarWidth: function (e) {
                var t =
                  this.calculateBaseWidth() - (e - 1) * i.barDatasetSpacing;
                return t / e;
              },
            })),
              (this.datasets = []),
              this.options.showTooltips &&
                a.bindEvents(this, this.options.tooltipEvents, function (e) {
                  var t = "mouseout" !== e.type ? this.getBarsAtEvent(e) : [];
                  this.eachBars(function (e) {
                    e.restore(["fillColor", "strokeColor"]);
                  }),
                    a.each(t, function (e) {
                      (e.fillColor = e.highlightFill),
                        (e.strokeColor = e.highlightStroke);
                    }),
                    this.showTooltip(t);
                }),
              (this.BarClass = t.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx,
              })),
              a.each(
                e.datasets,
                function (t, i) {
                  var s = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    bars: [],
                  };
                  this.datasets.push(s),
                    a.each(
                      t.data,
                      function (a, i) {
                        s.bars.push(
                          new this.BarClass({
                            value: a,
                            label: e.labels[i],
                            datasetLabel: t.label,
                            strokeColor: t.strokeColor,
                            fillColor: t.fillColor,
                            highlightFill: t.highlightFill || t.fillColor,
                            highlightStroke: t.highlightStroke || t.strokeColor,
                          })
                        );
                      },
                      this
                    );
                },
                this
              ),
              this.buildScale(e.labels),
              (this.BarClass.prototype.base = this.scale.endPoint),
              this.eachBars(function (e, t, i) {
                a.extend(e, {
                  width: this.scale.calculateBarWidth(this.datasets.length),
                  x: this.scale.calculateBarX(this.datasets.length, i, t),
                  y: this.scale.endPoint,
                }),
                  e.save();
              }, this),
              this.render();
          },
          update: function () {
            this.scale.update(),
              a.each(this.activeElements, function (e) {
                e.restore(["fillColor", "strokeColor"]);
              }),
              this.eachBars(function (e) {
                e.save();
              }),
              this.render();
          },
          eachBars: function (e) {
            a.each(
              this.datasets,
              function (t, i) {
                a.each(t.bars, e, this, i);
              },
              this
            );
          },
          getBarsAtEvent: function (e) {
            for (
              var t,
                i = [],
                s = a.getRelativePosition(e),
                n = function (e) {
                  i.push(e.bars[t]);
                },
                u = 0;
              u < this.datasets.length;
              u++
            )
              for (t = 0; t < this.datasets[u].bars.length; t++)
                if (this.datasets[u].bars[t].inRange(s.x, s.y))
                  return a.each(this.datasets, n), i;
            return i;
          },
          buildScale: function (e) {
            var t = this,
              i = function () {
                var e = [];
                return (
                  t.eachBars(function (t) {
                    e.push(t.value);
                  }),
                  e
                );
              },
              s = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: e.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (e) {
                  var t = a.calculateScaleRange(
                    i(),
                    e,
                    this.fontSize,
                    this.beginAtZero,
                    this.integersOnly
                  );
                  a.extend(this, t);
                },
                xLabels: e,
                font: a.fontString(
                  this.options.scaleFontSize,
                  this.options.scaleFontStyle,
                  this.options.scaleFontFamily
                ),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines
                  ? this.options.scaleGridLineWidth
                  : 0,
                gridLineColor: this.options.scaleShowGridLines
                  ? this.options.scaleGridLineColor
                  : "rgba(0,0,0,0)",
                padding: this.options.showScale
                  ? 0
                  : this.options.barShowStroke
                  ? this.options.barStrokeWidth
                  : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale,
              };
            this.options.scaleOverride &&
              a.extend(s, {
                calculateYRange: a.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max:
                  this.options.scaleStartValue +
                  this.options.scaleSteps * this.options.scaleStepWidth,
              }),
              (this.scale = new this.ScaleClass(s));
          },
          addData: function (e, t) {
            a.each(
              e,
              function (e, a) {
                this.datasets[a].bars.push(
                  new this.BarClass({
                    value: e,
                    label: t,
                    x: this.scale.calculateBarX(
                      this.datasets.length,
                      a,
                      this.scale.valuesCount + 1
                    ),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[a].strokeColor,
                    fillColor: this.datasets[a].fillColor,
                  })
                );
              },
              this
            ),
              this.scale.addXLabel(t),
              this.update();
          },
          removeData: function () {
            this.scale.removeXLabel(),
              a.each(
                this.datasets,
                function (e) {
                  e.bars.shift();
                },
                this
              ),
              this.update();
          },
          reflow: function () {
            a.extend(this.BarClass.prototype, {
              y: this.scale.endPoint,
              base: this.scale.endPoint,
            });
            var e = a.extend({
              height: this.chart.height,
              width: this.chart.width,
            });
            this.scale.update(e);
          },
          draw: function (e) {
            var t = e || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(t),
              a.each(
                this.datasets,
                function (e, i) {
                  a.each(
                    e.bars,
                    function (e, a) {
                      e.hasValue() &&
                        ((e.base = this.scale.endPoint),
                        e
                          .transition(
                            {
                              x: this.scale.calculateBarX(
                                this.datasets.length,
                                i,
                                a
                              ),
                              y: this.scale.calculateY(e.value),
                              width: this.scale.calculateBarWidth(
                                this.datasets.length
                              ),
                            },
                            t
                          )
                          .draw());
                    },
                    this
                  );
                },
                this
              );
          },
        });
      }.call(this),
      function () {
        "use strict";
        var e = this,
          t = e.Chart,
          a = t.helpers,
          i = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate:
              '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
          };
        t.Type.extend({
          name: "Doughnut",
          defaults: i,
          initialize: function (e) {
            (this.segments = []),
              (this.outerRadius =
                (a.min([this.chart.width, this.chart.height]) -
                  this.options.segmentStrokeWidth / 2) /
                2),
              (this.SegmentArc = t.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2,
              })),
              this.options.showTooltips &&
                a.bindEvents(this, this.options.tooltipEvents, function (e) {
                  var t =
                    "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                  a.each(this.segments, function (e) {
                    e.restore(["fillColor"]);
                  }),
                    a.each(t, function (e) {
                      e.fillColor = e.highlightColor;
                    }),
                    this.showTooltip(t);
                }),
              this.calculateTotal(e),
              a.each(
                e,
                function (e, t) {
                  this.addData(e, t, !0);
                },
                this
              ),
              this.render();
          },
          getSegmentsAtEvent: function (e) {
            var t = [],
              i = a.getRelativePosition(e);
            return (
              a.each(
                this.segments,
                function (e) {
                  e.inRange(i.x, i.y) && t.push(e);
                },
                this
              ),
              t
            );
          },
          addData: function (e, t, a) {
            var i = t || this.segments.length;
            this.segments.splice(
              i,
              0,
              new this.SegmentArc({
                value: e.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale
                  ? 0
                  : (this.outerRadius / 100) *
                    this.options.percentageInnerCutout,
                fillColor: e.color,
                highlightColor: e.highlight || e.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate
                  ? 0
                  : this.calculateCircumference(e.value),
                label: e.label,
              })
            ),
              a || (this.reflow(), this.update());
          },
          calculateCircumference: function (e) {
            return 2 * Math.PI * (Math.abs(e) / this.total);
          },
          calculateTotal: function (e) {
            (this.total = 0),
              a.each(
                e,
                function (e) {
                  this.total += Math.abs(e.value);
                },
                this
              );
          },
          update: function () {
            this.calculateTotal(this.segments),
              a.each(this.activeElements, function (e) {
                e.restore(["fillColor"]);
              }),
              a.each(this.segments, function (e) {
                e.save();
              }),
              this.render();
          },
          removeData: function (e) {
            var t = a.isNumber(e) ? e : this.segments.length - 1;
            this.segments.splice(t, 1), this.reflow(), this.update();
          },
          reflow: function () {
            a.extend(this.SegmentArc.prototype, {
              x: this.chart.width / 2,
              y: this.chart.height / 2,
            }),
              (this.outerRadius =
                (a.min([this.chart.width, this.chart.height]) -
                  this.options.segmentStrokeWidth / 2) /
                2),
              a.each(
                this.segments,
                function (e) {
                  e.update({
                    outerRadius: this.outerRadius,
                    innerRadius:
                      (this.outerRadius / 100) *
                      this.options.percentageInnerCutout,
                  });
                },
                this
              );
          },
          draw: function (e) {
            var t = e ? e : 1;
            this.clear(),
              a.each(
                this.segments,
                function (e, a) {
                  e.transition(
                    {
                      circumference: this.calculateCircumference(e.value),
                      outerRadius: this.outerRadius,
                      innerRadius:
                        (this.outerRadius / 100) *
                        this.options.percentageInnerCutout,
                    },
                    t
                  ),
                    (e.endAngle = e.startAngle + e.circumference),
                    e.draw(),
                    0 === a && (e.startAngle = 1.5 * Math.PI),
                    a < this.segments.length - 1 &&
                      (this.segments[a + 1].startAngle = e.endAngle);
                },
                this
              );
          },
        }),
          t.types.Doughnut.extend({
            name: "Pie",
            defaults: a.merge(i, {
              percentageInnerCutout: 0,
            }),
          });
      }.call(this),
      function () {
        "use strict";
        var e = this,
          t = e.Chart,
          a = t.helpers,
          i = {
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            bezierCurve: !0,
            bezierCurveTension: 0.4,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate:
              '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
          };
        t.Type.extend({
          name: "Line",
          defaults: i,
          initialize: function (e) {
            (this.PointClass = t.Point.extend({
              strokeWidth: this.options.pointDotStrokeWidth,
              radius: this.options.pointDotRadius,
              display: this.options.pointDot,
              hitDetectionRadius: this.options.pointHitDetectionRadius,
              ctx: this.chart.ctx,
              inRange: function (e) {
                return (
                  Math.pow(e - this.x, 2) <
                  Math.pow(this.radius + this.hitDetectionRadius, 2)
                );
              },
            })),
              (this.datasets = []),
              this.options.showTooltips &&
                a.bindEvents(this, this.options.tooltipEvents, function (e) {
                  var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                  this.eachPoints(function (e) {
                    e.restore(["fillColor", "strokeColor"]);
                  }),
                    a.each(t, function (e) {
                      (e.fillColor = e.highlightFill),
                        (e.strokeColor = e.highlightStroke);
                    }),
                    this.showTooltip(t);
                }),
              a.each(
                e.datasets,
                function (t) {
                  var i = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: [],
                  };
                  this.datasets.push(i),
                    a.each(
                      t.data,
                      function (a, s) {
                        i.points.push(
                          new this.PointClass({
                            value: a,
                            label: e.labels[s],
                            datasetLabel: t.label,
                            strokeColor: t.pointStrokeColor,
                            fillColor: t.pointColor,
                            highlightFill: t.pointHighlightFill || t.pointColor,
                            highlightStroke:
                              t.pointHighlightStroke || t.pointStrokeColor,
                          })
                        );
                      },
                      this
                    ),
                    this.buildScale(e.labels),
                    this.eachPoints(function (e, t) {
                      a.extend(e, {
                        x: this.scale.calculateX(t),
                        y: this.scale.endPoint,
                      }),
                        e.save();
                    }, this);
                },
                this
              ),
              this.render();
          },
          update: function () {
            this.scale.update(),
              a.each(this.activeElements, function (e) {
                e.restore(["fillColor", "strokeColor"]);
              }),
              this.eachPoints(function (e) {
                e.save();
              }),
              this.render();
          },
          eachPoints: function (e) {
            a.each(
              this.datasets,
              function (t) {
                a.each(t.points, e, this);
              },
              this
            );
          },
          getPointsAtEvent: function (e) {
            var t = [],
              i = a.getRelativePosition(e);
            return (
              a.each(
                this.datasets,
                function (e) {
                  a.each(e.points, function (e) {
                    e.inRange(i.x, i.y) && t.push(e);
                  });
                },
                this
              ),
              t
            );
          },
          buildScale: function (e) {
            var i = this,
              s = function () {
                var e = [];
                return (
                  i.eachPoints(function (t) {
                    e.push(t.value);
                  }),
                  e
                );
              },
              n = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: e.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (e) {
                  var t = a.calculateScaleRange(
                    s(),
                    e,
                    this.fontSize,
                    this.beginAtZero,
                    this.integersOnly
                  );
                  a.extend(this, t);
                },
                xLabels: e,
                font: a.fontString(
                  this.options.scaleFontSize,
                  this.options.scaleFontStyle,
                  this.options.scaleFontFamily
                ),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines
                  ? this.options.scaleGridLineWidth
                  : 0,
                gridLineColor: this.options.scaleShowGridLines
                  ? this.options.scaleGridLineColor
                  : "rgba(0,0,0,0)",
                padding: this.options.showScale
                  ? 0
                  : this.options.pointDotRadius +
                    this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale,
              };
            this.options.scaleOverride &&
              a.extend(n, {
                calculateYRange: a.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max:
                  this.options.scaleStartValue +
                  this.options.scaleSteps * this.options.scaleStepWidth,
              }),
              (this.scale = new t.Scale(n));
          },
          addData: function (e, t) {
            a.each(
              e,
              function (e, a) {
                this.datasets[a].points.push(
                  new this.PointClass({
                    value: e,
                    label: t,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[a].pointStrokeColor,
                    fillColor: this.datasets[a].pointColor,
                  })
                );
              },
              this
            ),
              this.scale.addXLabel(t),
              this.update();
          },
          removeData: function () {
            this.scale.removeXLabel(),
              a.each(
                this.datasets,
                function (e) {
                  e.points.shift();
                },
                this
              ),
              this.update();
          },
          reflow: function () {
            var e = a.extend({
              height: this.chart.height,
              width: this.chart.width,
            });
            this.scale.update(e);
          },
          draw: function (e) {
            var t = e || 1;
            this.clear();
            var i = this.chart.ctx,
              s = function (e) {
                return null !== e.value;
              },
              n = function (e, t, i) {
                return a.findNextWhere(t, s, i) || e;
              },
              u = function (e, t, i) {
                return a.findPreviousWhere(t, s, i) || e;
              };
            this.scale.draw(t),
              a.each(
                this.datasets,
                function (e) {
                  var r = a.where(e.points, s);
                  a.each(
                    e.points,
                    function (e, a) {
                      e.hasValue() &&
                        e.transition(
                          {
                            y: this.scale.calculateY(e.value),
                            x: this.scale.calculateX(a),
                          },
                          t
                        );
                    },
                    this
                  ),
                    this.options.bezierCurve &&
                      a.each(
                        r,
                        function (e, t) {
                          var i =
                            t > 0 && t < r.length - 1
                              ? this.options.bezierCurveTension
                              : 0;
                          (e.controlPoints = a.splineCurve(
                            u(e, r, t),
                            e,
                            n(e, r, t),
                            i
                          )),
                            e.controlPoints.outer.y > this.scale.endPoint
                              ? (e.controlPoints.outer.y = this.scale.endPoint)
                              : e.controlPoints.outer.y <
                                  this.scale.startPoint &&
                                (e.controlPoints.outer.y =
                                  this.scale.startPoint),
                            e.controlPoints.inner.y > this.scale.endPoint
                              ? (e.controlPoints.inner.y = this.scale.endPoint)
                              : e.controlPoints.inner.y <
                                  this.scale.startPoint &&
                                (e.controlPoints.inner.y =
                                  this.scale.startPoint);
                        },
                        this
                      ),
                    (i.lineWidth = this.options.datasetStrokeWidth),
                    (i.strokeStyle = e.strokeColor),
                    i.beginPath(),
                    a.each(
                      r,
                      function (e, t) {
                        if (0 === t) i.moveTo(e.x, e.y);
                        else if (this.options.bezierCurve) {
                          var a = u(e, r, t);
                          i.bezierCurveTo(
                            a.controlPoints.outer.x,
                            a.controlPoints.outer.y,
                            e.controlPoints.inner.x,
                            e.controlPoints.inner.y,
                            e.x,
                            e.y
                          );
                        } else i.lineTo(e.x, e.y);
                      },
                      this
                    ),
                    i.stroke(),
                    this.options.datasetFill &&
                      r.length > 0 &&
                      (i.lineTo(r[r.length - 1].x, this.scale.endPoint),
                      i.lineTo(r[0].x, this.scale.endPoint),
                      (i.fillStyle = e.fillColor),
                      i.closePath(),
                      i.fill()),
                    a.each(r, function (e) {
                      e.draw();
                    });
                },
                this
              );
          },
        });
      }.call(this),
      function () {
        "use strict";
        var e = this,
          t = e.Chart,
          a = t.helpers,
          i = {
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: !0,
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            scaleShowLine: !0,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate:
              '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
          };
        t.Type.extend({
          name: "PolarArea",
          defaults: i,
          initialize: function (e) {
            (this.segments = []),
              (this.SegmentArc = t.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2,
              })),
              (this.scale = new t.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine
                  ? this.options.scaleLineWidth
                  : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: e.length,
              })),
              this.updateScaleRange(e),
              this.scale.update(),
              a.each(
                e,
                function (e, t) {
                  this.addData(e, t, !0);
                },
                this
              ),
              this.options.showTooltips &&
                a.bindEvents(this, this.options.tooltipEvents, function (e) {
                  var t =
                    "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                  a.each(this.segments, function (e) {
                    e.restore(["fillColor"]);
                  }),
                    a.each(t, function (e) {
                      e.fillColor = e.highlightColor;
                    }),
                    this.showTooltip(t);
                }),
              this.render();
          },
          getSegmentsAtEvent: function (e) {
            var t = [],
              i = a.getRelativePosition(e);
            return (
              a.each(
                this.segments,
                function (e) {
                  e.inRange(i.x, i.y) && t.push(e);
                },
                this
              ),
              t
            );
          },
          addData: function (e, t, a) {
            var i = t || this.segments.length;
            this.segments.splice(
              i,
              0,
              new this.SegmentArc({
                fillColor: e.color,
                highlightColor: e.highlight || e.color,
                label: e.label,
                value: e.value,
                outerRadius: this.options.animateScale
                  ? 0
                  : this.scale.calculateCenterOffset(e.value),
                circumference: this.options.animateRotate
                  ? 0
                  : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI,
              })
            ),
              a || (this.reflow(), this.update());
          },
          removeData: function (e) {
            var t = a.isNumber(e) ? e : this.segments.length - 1;
            this.segments.splice(t, 1), this.reflow(), this.update();
          },
          calculateTotal: function (e) {
            (this.total = 0),
              a.each(
                e,
                function (e) {
                  this.total += e.value;
                },
                this
              ),
              (this.scale.valuesCount = this.segments.length);
          },
          updateScaleRange: function (e) {
            var t = [];
            a.each(e, function (e) {
              t.push(e.value);
            });
            var i = this.options.scaleOverride
              ? {
                  steps: this.options.scaleSteps,
                  stepValue: this.options.scaleStepWidth,
                  min: this.options.scaleStartValue,
                  max:
                    this.options.scaleStartValue +
                    this.options.scaleSteps * this.options.scaleStepWidth,
                }
              : a.calculateScaleRange(
                  t,
                  a.min([this.chart.width, this.chart.height]) / 2,
                  this.options.scaleFontSize,
                  this.options.scaleBeginAtZero,
                  this.options.scaleIntegersOnly
                );
            a.extend(this.scale, i, {
              size: a.min([this.chart.width, this.chart.height]),
              xCenter: this.chart.width / 2,
              yCenter: this.chart.height / 2,
            });
          },
          update: function () {
            this.calculateTotal(this.segments),
              a.each(this.segments, function (e) {
                e.save();
              }),
              this.reflow(),
              this.render();
          },
          reflow: function () {
            a.extend(this.SegmentArc.prototype, {
              x: this.chart.width / 2,
              y: this.chart.height / 2,
            }),
              this.updateScaleRange(this.segments),
              this.scale.update(),
              a.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
              }),
              a.each(
                this.segments,
                function (e) {
                  e.update({
                    outerRadius: this.scale.calculateCenterOffset(e.value),
                  });
                },
                this
              );
          },
          draw: function (e) {
            var t = e || 1;
            this.clear(),
              a.each(
                this.segments,
                function (e, a) {
                  e.transition(
                    {
                      circumference: this.scale.getCircumference(),
                      outerRadius: this.scale.calculateCenterOffset(e.value),
                    },
                    t
                  ),
                    (e.endAngle = e.startAngle + e.circumference),
                    0 === a && (e.startAngle = 1.5 * Math.PI),
                    a < this.segments.length - 1 &&
                      (this.segments[a + 1].startAngle = e.endAngle),
                    e.draw();
                },
                this
              ),
              this.scale.draw();
          },
        });
      }.call(this),
      function () {
        "use strict";
        var e = this,
          t = e.Chart,
          a = t.helpers;
        t.Type.extend({
          name: "Radar",
          defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate:
              '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
          },
          initialize: function (e) {
            (this.PointClass = t.Point.extend({
              strokeWidth: this.options.pointDotStrokeWidth,
              radius: this.options.pointDotRadius,
              display: this.options.pointDot,
              hitDetectionRadius: this.options.pointHitDetectionRadius,
              ctx: this.chart.ctx,
            })),
              (this.datasets = []),
              this.buildScale(e),
              this.options.showTooltips &&
                a.bindEvents(this, this.options.tooltipEvents, function (e) {
                  var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                  this.eachPoints(function (e) {
                    e.restore(["fillColor", "strokeColor"]);
                  }),
                    a.each(t, function (e) {
                      (e.fillColor = e.highlightFill),
                        (e.strokeColor = e.highlightStroke);
                    }),
                    this.showTooltip(t);
                }),
              a.each(
                e.datasets,
                function (t) {
                  var i = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: [],
                  };
                  this.datasets.push(i),
                    a.each(
                      t.data,
                      function (a, s) {
                        var n;
                        this.scale.animation ||
                          (n = this.scale.getPointPosition(
                            s,
                            this.scale.calculateCenterOffset(a)
                          )),
                          i.points.push(
                            new this.PointClass({
                              value: a,
                              label: e.labels[s],
                              datasetLabel: t.label,
                              x: this.options.animation
                                ? this.scale.xCenter
                                : n.x,
                              y: this.options.animation
                                ? this.scale.yCenter
                                : n.y,
                              strokeColor: t.pointStrokeColor,
                              fillColor: t.pointColor,
                              highlightFill:
                                t.pointHighlightFill || t.pointColor,
                              highlightStroke:
                                t.pointHighlightStroke || t.pointStrokeColor,
                            })
                          );
                      },
                      this
                    );
                },
                this
              ),
              this.render();
          },
          eachPoints: function (e) {
            a.each(
              this.datasets,
              function (t) {
                a.each(t.points, e, this);
              },
              this
            );
          },
          getPointsAtEvent: function (e) {
            var t = a.getRelativePosition(e),
              i = a.getAngleFromPoint(
                {
                  x: this.scale.xCenter,
                  y: this.scale.yCenter,
                },
                t
              ),
              s = (2 * Math.PI) / this.scale.valuesCount,
              n = Math.round((i.angle - 1.5 * Math.PI) / s),
              u = [];
            return (
              (n >= this.scale.valuesCount || 0 > n) && (n = 0),
              i.distance <= this.scale.drawingArea &&
                a.each(this.datasets, function (e) {
                  u.push(e.points[n]);
                }),
              u
            );
          },
          buildScale: function (e) {
            (this.scale = new t.RadialScale({
              display: this.options.showScale,
              fontStyle: this.options.scaleFontStyle,
              fontSize: this.options.scaleFontSize,
              fontFamily: this.options.scaleFontFamily,
              fontColor: this.options.scaleFontColor,
              showLabels: this.options.scaleShowLabels,
              showLabelBackdrop: this.options.scaleShowLabelBackdrop,
              backdropColor: this.options.scaleBackdropColor,
              backdropPaddingY: this.options.scaleBackdropPaddingY,
              backdropPaddingX: this.options.scaleBackdropPaddingX,
              lineWidth: this.options.scaleShowLine
                ? this.options.scaleLineWidth
                : 0,
              lineColor: this.options.scaleLineColor,
              angleLineColor: this.options.angleLineColor,
              angleLineWidth: this.options.angleShowLineOut
                ? this.options.angleLineWidth
                : 0,
              pointLabelFontColor: this.options.pointLabelFontColor,
              pointLabelFontSize: this.options.pointLabelFontSize,
              pointLabelFontFamily: this.options.pointLabelFontFamily,
              pointLabelFontStyle: this.options.pointLabelFontStyle,
              height: this.chart.height,
              width: this.chart.width,
              xCenter: this.chart.width / 2,
              yCenter: this.chart.height / 2,
              ctx: this.chart.ctx,
              templateString: this.options.scaleLabel,
              labels: e.labels,
              valuesCount: e.datasets[0].data.length,
            })),
              this.scale.setScaleSize(),
              this.updateScaleRange(e.datasets),
              this.scale.buildYLabels();
          },
          updateScaleRange: function (e) {
            var t = (function () {
                var t = [];
                return (
                  a.each(e, function (e) {
                    e.data
                      ? (t = t.concat(e.data))
                      : a.each(e.points, function (e) {
                          t.push(e.value);
                        });
                  }),
                  t
                );
              })(),
              i = this.options.scaleOverride
                ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max:
                      this.options.scaleStartValue +
                      this.options.scaleSteps * this.options.scaleStepWidth,
                  }
                : a.calculateScaleRange(
                    t,
                    a.min([this.chart.width, this.chart.height]) / 2,
                    this.options.scaleFontSize,
                    this.options.scaleBeginAtZero,
                    this.options.scaleIntegersOnly
                  );
            a.extend(this.scale, i);
          },
          addData: function (e, t) {
            this.scale.valuesCount++,
              a.each(
                e,
                function (e, a) {
                  var i = this.scale.getPointPosition(
                    this.scale.valuesCount,
                    this.scale.calculateCenterOffset(e)
                  );
                  this.datasets[a].points.push(
                    new this.PointClass({
                      value: e,
                      label: t,
                      x: i.x,
                      y: i.y,
                      strokeColor: this.datasets[a].pointStrokeColor,
                      fillColor: this.datasets[a].pointColor,
                    })
                  );
                },
                this
              ),
              this.scale.labels.push(t),
              this.reflow(),
              this.update();
          },
          removeData: function () {
            this.scale.valuesCount--,
              this.scale.labels.shift(),
              a.each(
                this.datasets,
                function (e) {
                  e.points.shift();
                },
                this
              ),
              this.reflow(),
              this.update();
          },
          update: function () {
            this.eachPoints(function (e) {
              e.save();
            }),
              this.reflow(),
              this.render();
          },
          reflow: function () {
            a.extend(this.scale, {
              width: this.chart.width,
              height: this.chart.height,
              size: a.min([this.chart.width, this.chart.height]),
              xCenter: this.chart.width / 2,
              yCenter: this.chart.height / 2,
            }),
              this.updateScaleRange(this.datasets),
              this.scale.setScaleSize(),
              this.scale.buildYLabels();
          },
          draw: function (e) {
            var t = e || 1,
              i = this.chart.ctx;
            this.clear(),
              this.scale.draw(),
              a.each(
                this.datasets,
                function (e) {
                  a.each(
                    e.points,
                    function (e, a) {
                      e.hasValue() &&
                        e.transition(
                          this.scale.getPointPosition(
                            a,
                            this.scale.calculateCenterOffset(e.value)
                          ),
                          t
                        );
                    },
                    this
                  ),
                    (i.lineWidth = this.options.datasetStrokeWidth),
                    (i.strokeStyle = e.strokeColor),
                    i.beginPath(),
                    a.each(
                      e.points,
                      function (e, t) {
                        0 === t ? i.moveTo(e.x, e.y) : i.lineTo(e.x, e.y);
                      },
                      this
                    ),
                    i.closePath(),
                    i.stroke(),
                    (i.fillStyle = e.fillColor),
                    i.fill(),
                    a.each(e.points, function (e) {
                      e.hasValue() && e.draw();
                    });
                },
                this
              );
          },
        });
      }.call(this));
  },
  function (e, t, a) {
    var i, s;
    a(167),
      (i = a(127)),
      (s = a(239)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(171),
      (i = a(131)),
      (s = a(243)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      init: function () {
        var e = this;
        n["default"].state.editArea = {
          area: 2,
          segment: "dry",
          save: function () {
            e.initMessage(), (n["default"].state.editArea = !1);
          },
        };
      },
      initMessage: function () {
        // n["default"].state.message = {
        // 	save: function() {
        // 		n["default"].state.message = !1, n["default"].addNotification("dryChange"), n["default"].state.heatmapAnnotations.dry = !1, n[
        // 			"default"].hideNotification("dry"), n["default"].resumeRevsim()
        // 	}
        // }
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      init: function () {
        var e = this;
        n["default"].state.editArea = {
          area: 1,
          segment: "veg",
          save: function () {
            e.initMessage(), (n["default"].state.editArea = !1);
          },
        };
      },
      initMessage: function () {
        // n["default"].state.message = {
        // 	save: function() {
        // 		n["default"].state.message = !1, n["default"].addNotification("vegChange"), n["default"].state.heatmapAnnotations.veg = !1, n[
        // 			"default"].hideNotification("veg"), n["default"].resumeRevsim()
        // 	}
        // }
      },
    };
  },
  function (e, t, a) {
    var i, s;
    /*!
     * numeral.js
     * version : 1.5.3
     * author : Adam Draper
     * license : MIT
     * http://adamwdraper.github.com/Numeral-js/
     */
    (function () {
      function a(e) {
        this._value = e;
      }

      function n(e, t, a, i) {
        var s,
          n,
          u = Math.pow(10, t);
        return (
          (n = (a(e * u) / u).toFixed(t)),
          i && ((s = new RegExp("0{1," + i + "}$")), (n = n.replace(s, ""))),
          n
        );
      }

      function u(e, t, a) {
        var i;
        return (i =
          t.indexOf("$") > -1
            ? l(e, t, a)
            : t.indexOf("%") > -1
            ? o(e, t, a)
            : t.indexOf(":") > -1
            ? m(e, t)
            : T(e._value, t, a));
      }

      function r(e, t) {
        var a,
          i,
          s,
          n,
          u,
          r = t,
          l = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          o = !1;
        if (t.indexOf(":") > -1) e._value = p(t);
        else if (t === _) e._value = 0;
        else {
          for (
            "." !== y[f].delimiters.decimal &&
              (t = t.replace(/\./g, "").replace(y[f].delimiters.decimal, ".")),
              a = new RegExp(
                "[^a-zA-Z]" +
                  y[f].abbreviations.thousand +
                  "(?:\\)|(\\" +
                  y[f].currency.symbol +
                  ")?(?:\\))?)?$"
              ),
              i = new RegExp(
                "[^a-zA-Z]" +
                  y[f].abbreviations.million +
                  "(?:\\)|(\\" +
                  y[f].currency.symbol +
                  ")?(?:\\))?)?$"
              ),
              s = new RegExp(
                "[^a-zA-Z]" +
                  y[f].abbreviations.billion +
                  "(?:\\)|(\\" +
                  y[f].currency.symbol +
                  ")?(?:\\))?)?$"
              ),
              n = new RegExp(
                "[^a-zA-Z]" +
                  y[f].abbreviations.trillion +
                  "(?:\\)|(\\" +
                  y[f].currency.symbol +
                  ")?(?:\\))?)?$"
              ),
              u = 0;
            u <= l.length &&
            !(o = t.indexOf(l[u]) > -1 ? Math.pow(1024, u + 1) : !1);
            u++
          );
          (e._value =
            (o ? o : 1) *
            (r.match(a) ? Math.pow(10, 3) : 1) *
            (r.match(i) ? Math.pow(10, 6) : 1) *
            (r.match(s) ? Math.pow(10, 9) : 1) *
            (r.match(n) ? Math.pow(10, 12) : 1) *
            (t.indexOf("%") > -1 ? 0.01 : 1) *
            ((t.split("-").length +
              Math.min(t.split("(").length - 1, t.split(")").length - 1)) %
            2
              ? 1
              : -1) *
            Number(t.replace(/[^0-9\.]+/g, ""))),
            (e._value = o ? Math.ceil(e._value) : e._value);
        }
        return e._value;
      }

      function l(e, t, a) {
        var i,
          s,
          n = t.indexOf("$"),
          u = t.indexOf("("),
          r = t.indexOf("-"),
          l = "";
        return (
          t.indexOf(" $") > -1
            ? ((l = " "), (t = t.replace(" $", "")))
            : t.indexOf("$ ") > -1
            ? ((l = " "), (t = t.replace("$ ", "")))
            : (t = t.replace("$", "")),
          (s = T(e._value, t, a)),
          1 >= n
            ? s.indexOf("(") > -1 || s.indexOf("-") > -1
              ? ((s = s.split("")),
                (i = 1),
                (u > n || r > n) && (i = 0),
                s.splice(i, 0, y[f].currency.symbol + l),
                (s = s.join("")))
              : (s = y[f].currency.symbol + l + s)
            : s.indexOf(")") > -1
            ? ((s = s.split("")),
              s.splice(-1, 0, l + y[f].currency.symbol),
              (s = s.join("")))
            : (s = s + l + y[f].currency.symbol),
          s
        );
      }

      function o(e, t, a) {
        var i,
          s = "",
          n = 100 * e._value;
        return (
          t.indexOf(" %") > -1
            ? ((s = " "), (t = t.replace(" %", "")))
            : (t = t.replace("%", "")),
          (i = T(n, t, a)),
          i.indexOf(")") > -1
            ? ((i = i.split("")), i.splice(-1, 0, s + "%"), (i = i.join("")))
            : (i = i + s + "%"),
          i
        );
      }

      function m(e) {
        var t = Math.floor(e._value / 60 / 60),
          a = Math.floor((e._value - 60 * t * 60) / 60),
          i = Math.round(e._value - 60 * t * 60 - 60 * a);
        return t + ":" + (10 > a ? "0" + a : a) + ":" + (10 > i ? "0" + i : i);
      }

      function p(e) {
        var t = e.split(":"),
          a = 0;
        return (
          3 === t.length
            ? ((a += 60 * Number(t[0]) * 60),
              (a += 60 * Number(t[1])),
              (a += Number(t[2])))
            : 2 === t.length && ((a += 60 * Number(t[0])), (a += Number(t[1]))),
          Number(a)
        );
      }

      function T(e, t, a) {
        var i,
          s,
          u,
          r,
          l,
          o,
          m = !1,
          p = !1,
          T = !1,
          c = "",
          d = !1,
          S = !1,
          h = !1,
          v = !1,
          x = !1,
          M = "",
          g = "",
          C = Math.abs(e),
          E = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          D = "",
          L = !1;
        if (0 === e && null !== _) return _;
        if (
          (t.indexOf("(") > -1
            ? ((m = !0), (t = t.slice(1, -1)))
            : t.indexOf("+") > -1 && ((p = !0), (t = t.replace(/\+/g, ""))),
          t.indexOf("a") > -1 &&
            ((d = t.indexOf("aK") >= 0),
            (S = t.indexOf("aM") >= 0),
            (h = t.indexOf("aB") >= 0),
            (v = t.indexOf("aT") >= 0),
            (x = d || S || h || v),
            t.indexOf(" a") > -1
              ? ((c = " "), (t = t.replace(" a", "")))
              : (t = t.replace("a", "")),
            (C >= Math.pow(10, 12) && !x) || v
              ? ((c += y[f].abbreviations.trillion), (e /= Math.pow(10, 12)))
              : (C < Math.pow(10, 12) && C >= Math.pow(10, 9) && !x) || h
              ? ((c += y[f].abbreviations.billion), (e /= Math.pow(10, 9)))
              : (C < Math.pow(10, 9) && C >= Math.pow(10, 6) && !x) || S
              ? ((c += y[f].abbreviations.million), (e /= Math.pow(10, 6)))
              : ((C < Math.pow(10, 6) && C >= Math.pow(10, 3) && !x) || d) &&
                ((c += y[f].abbreviations.thousand), (e /= Math.pow(10, 3)))),
          t.indexOf("b") > -1)
        )
          for (
            t.indexOf(" b") > -1
              ? ((M = " "), (t = t.replace(" b", "")))
              : (t = t.replace("b", "")),
              u = 0;
            u <= E.length;
            u++
          )
            if (
              ((i = Math.pow(1024, u)),
              (s = Math.pow(1024, u + 1)),
              e >= i && s > e)
            ) {
              (M += E[u]), i > 0 && (e /= i);
              break;
            }
        return (
          t.indexOf("o") > -1 &&
            (t.indexOf(" o") > -1
              ? ((g = " "), (t = t.replace(" o", "")))
              : (t = t.replace("o", "")),
            (g += y[f].ordinal(e))),
          t.indexOf("[.]") > -1 && ((T = !0), (t = t.replace("[.]", "."))),
          (r = e.toString().split(".")[0]),
          (l = t.split(".")[1]),
          (o = t.indexOf(",")),
          l
            ? (l.indexOf("[") > -1
                ? ((l = l.replace("]", "")),
                  (l = l.split("[")),
                  (D = n(e, l[0].length + l[1].length, a, l[1].length)))
                : (D = n(e, l.length, a)),
              (r = D.split(".")[0]),
              (D = D.split(".")[1].length
                ? y[f].delimiters.decimal + D.split(".")[1]
                : ""),
              T && 0 === Number(D.slice(1)) && (D = ""))
            : (r = n(e, null, a)),
          r.indexOf("-") > -1 && ((r = r.slice(1)), (L = !0)),
          o > -1 &&
            (r = r
              .toString()
              .replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1" + y[f].delimiters.thousands
              )),
          0 === t.indexOf(".") && (r = ""),
          (m && L ? "(" : "") +
            (!m && L ? "-" : "") +
            (!L && p ? "+" : "") +
            r +
            D +
            (g ? g : "") +
            (c ? c : "") +
            (M ? M : "") +
            (m && L ? ")" : "")
        );
      }

      function c(e, t) {
        y[e] = t;
      }

      function d(e) {
        var t = e.toString().split(".");
        return t.length < 2 ? 1 : Math.pow(10, t[1].length);
      }

      function S() {
        var e = Array.prototype.slice.call(arguments);
        return e.reduce(function (e, t) {
          var a = d(e),
            i = d(t);
          return a > i ? a : i;
        }, -(1 / 0));
      }
      var h,
        v = "1.5.3",
        y = {},
        f = "en",
        _ = null,
        x = "0,0",
        M = "undefined" != typeof e && e.exports;
      (h = function (e) {
        return (
          h.isNumeral(e)
            ? (e = e.value())
            : 0 === e || "undefined" == typeof e
            ? (e = 0)
            : Number(e) || (e = h.fn.unformat(e)),
          new a(Number(e))
        );
      }),
        (h.version = v),
        (h.isNumeral = function (e) {
          return e instanceof a;
        }),
        (h.language = function (e, t) {
          if (!e) return f;
          if (e && !t) {
            if (!y[e]) throw new Error("Unknown language : " + e);
            f = e;
          }
          return (t || !y[e]) && c(e, t), h;
        }),
        (h.languageData = function (e) {
          if (!e) return y[f];
          if (!y[e]) throw new Error("Unknown language : " + e);
          return y[e];
        }),
        h.language("en", {
          delimiters: {
            thousands: ",",
            decimal: ".",
          },
          abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t",
          },
          ordinal: function (e) {
            var t = e % 10;
            return 1 === ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th";
          },
          currency: {
            symbol: "$",
          },
        }),
        (h.zeroFormat = function (e) {
          _ = "string" == typeof e ? e : null;
        }),
        (h.defaultFormat = function (e) {
          x = "string" == typeof e ? e : "0.0";
        }),
        "function" != typeof Array.prototype.reduce &&
          (Array.prototype.reduce = function (e, t) {
            "use strict";
            if (null === this || "undefined" == typeof this)
              throw new TypeError(
                "Array.prototype.reduce called on null or undefined"
              );
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            var a,
              i,
              s = this.length >>> 0,
              n = !1;
            for (1 < arguments.length && ((i = t), (n = !0)), a = 0; s > a; ++a)
              this.hasOwnProperty(a) &&
                (n ? (i = e(i, this[a], a, this)) : ((i = this[a]), (n = !0)));
            if (!n)
              throw new TypeError(
                "Reduce of empty array with no initial value"
              );
            return i;
          }),
        (h.fn = a.prototype =
          {
            clone: function () {
              return h(this);
            },
            format: function (e, t) {
              return u(this, e ? e : x, void 0 !== t ? t : Math.round);
            },
            unformat: function (e) {
              return "[object Number]" === Object.prototype.toString.call(e)
                ? e
                : r(this, e ? e : x);
            },
            value: function () {
              return this._value;
            },
            valueOf: function () {
              return this._value;
            },
            set: function (e) {
              return (this._value = Number(e)), this;
            },
            add: function (e) {
              function t(e, t, i, s) {
                return e + a * t;
              }
              var a = S.call(null, this._value, e);
              return (this._value = [this._value, e].reduce(t, 0) / a), this;
            },
            subtract: function (e) {
              function t(e, t, i, s) {
                return e - a * t;
              }
              var a = S.call(null, this._value, e);
              return (this._value = [e].reduce(t, this._value * a) / a), this;
            },
            multiply: function (e) {
              function t(e, t, a, i) {
                var s = S(e, t);
                return (e * s * (t * s)) / (s * s);
              }
              return (this._value = [this._value, e].reduce(t, 1)), this;
            },
            divide: function (e) {
              function t(e, t, a, i) {
                var s = S(e, t);
                return (e * s) / (t * s);
              }
              return (this._value = [this._value, e].reduce(t)), this;
            },
            difference: function (e) {
              return Math.abs(h(this._value).subtract(e).value());
            },
          }),
        M && (e.exports = h),
        "undefined" == typeof ender && (this.numeral = h),
        (i = []),
        (s = function () {
          return h;
        }.apply(t, i)),
        !(void 0 !== s && (e.exports = s));
    }.call(this));
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(151),
      n = i(s),
      u = a(3),
      r = i(u),
      l = a(1),
      o = i(l),
      m = function (e) {
        return function () {
          var t = (0, o["default"])().add(e++, "days");
          return (
            0 === t.day() && (t = (0, o["default"])().add(e++, "days")),
            t.format("YYYY-MM-DD")
          );
        };
      },
      p = m(-8);
    t["default"] = n["default"].map(function (e) {
      return r["default"].assign({}, e, {
        timestamp: p(),
        dry: parseFloat(e.dry),
        dry_action: parseFloat(e.dry_action),
        drugs: parseFloat(e.drugs),
        drugs_action: parseFloat(e.drugs_action),
        milk: parseFloat(e.milk),
        frozen: parseFloat(e.frozen),
        meat: parseFloat(e.meat),
        meat_action: parseFloat(e.meat_action),
        veg: parseFloat(e.veg),
        veg_action: parseFloat(e.veg_action),
        magazines: parseFloat(e.magazines),
        convenience: parseFloat(e.convenience),
        convenience_action: parseFloat(e.convenience_action),
      });
    });
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      init: function () {
        console.log("init");
        (n["default"].state.currentSegment = "convenience"),
          (n["default"].state.marketingMessage = {
            save: function () {
              (n["default"].state.marketingMessage = !1),
                (n["default"].state.convenienceOffer = !1),
                n["default"].hideNotification("convenienceOffer"),
                n["default"].addNotification("convenienceChange"),
                n["default"].resumeRevsim(),
                (n["default"].state.frankfurtMultiplier =
                  1.5 * n["default"].state.frankfurtMultiplier);
            },
          });
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(11),
      r = i(u),
      l = a(136),
      o = i(l),
      m = a(3),
      p = i(m),
      T = r["default"].concat(),
      c = o["default"].concat(),
      d = !0,
      S = {
        filters: [],
        observers: [],
        start: function () {
          var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? 5e3
              : arguments[0];
          this.timer = setInterval(this.tick.bind(this), e);
        },
        pause: function () {
          return (d = !1), this;
        },
        resume: function () {
          return (d = !0), this;
        },
        tick: function () {
          if (d) {
            if (!T.length) return clearInterval(this.timer);
            var e = T.splice(0, 1)[0],
              t = c.splice(0, 1)[0],
              a = {
                frankfurt: e,
                munich: t,
                berlin: t,
                dresden: t,
                plan: t,
                lastYear: t,
              };
            (a = this.filters.reduce(function (e, t) {
              return t(e);
            }, a)),
              n["default"].state.revenues.push(a);
            var i = n["default"].state.revenues.length;
            i >= 3 &&
              ((n["default"].state.currentRevenues =
                n["default"].state.revenues[i - 3]),
              this.notify(n["default"].state.currentRevenues));
          }
        },
        addFilter: function (e) {
          this.filters.push(e);
        },
        addObserver: function (e) {
          this.observers.push(e);
        },
        notify: function (e) {
          this.observers.forEach(function (t) {
            return t.update(e);
          });
        },
        init: function (e) {
          return p["default"].times(e, this.tick.bind(this)), this;
        },
      };
    t["default"] = S;
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("af", {
        months:
          "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
            "_"
          ),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e);
        },
        meridiem: function (e, t, a) {
          return 12 > e ? (a ? "vm" : "VM") : a ? "nm" : "NM";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar",
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ar-ma", {
        months:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: {
          dow: 6,
          doy: 12,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        a = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        i = e.defineLocale("ar-sa", {
          months:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_"
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_"
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, t, a) {
            return 12 > e ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          preparse: function (e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return a[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          week: {
            dow: 6,
            doy: 12,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ar-tn", {
        months:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        a = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        i = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && 10 >= e % 100
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        s = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        n = function (e) {
          return function (t, a, n, u) {
            var r = i(t),
              l = s[e][i(t)];
            return 2 === r && (l = l[a ? 0 : 1]), l.replace(/%d/i, t);
          };
        },
        u = [
          "كانون الثاني يناير",
          "شباط فبراير",
          "آذار مارس",
          "نيسان أبريل",
          "أيار مايو",
          "حزيران يونيو",
          "تموز يوليو",
          "آب أغسطس",
          "أيلول سبتمبر",
          "تشرين الأول أكتوبر",
          "تشرين الثاني نوفمبر",
          "كانون الأول ديسمبر",
        ],
        r = e.defineLocale("ar", {
          months: u,
          monthsShort: u,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_"
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, t, a) {
            return 12 > e ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: n("s"),
            m: n("m"),
            mm: n("m"),
            h: n("h"),
            hh: n("h"),
            d: n("d"),
            dd: n("d"),
            M: n("M"),
            MM: n("M"),
            y: n("y"),
            yy: n("y"),
          },
          preparse: function (e) {
            return e
              .replace(/\u200f/g, "")
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return a[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          week: {
            dow: 6,
            doy: 12,
          },
        });
      return r;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-üncü",
          4: "-üncü",
          100: "-üncü",
          6: "-ncı",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-ıncı",
          90: "-ıncı",
        },
        a = e.defineLocale("az", {
          months:
            "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
              "_"
            ),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
            "_"
          ),
          weekdays:
            "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
              "_"
            ),
          weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
          weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il",
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function (e) {
            return /^(gündüz|axşam)$/.test(e);
          },
          meridiem: function (e, t, a) {
            return 4 > e
              ? "gecə"
              : 12 > e
              ? "səhər"
              : 17 > e
              ? "gündüz"
              : "axşam";
          },
          ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function (e) {
            if (0 === e) return e + "-ıncı";
            var a = e % 10,
              i = (e % 100) - a,
              s = e >= 100 ? 100 : null;
            return e + (t[a] || t[i] || t[s]);
          },
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t) {
        var a = e.split("_");
        return t % 10 === 1 && t % 100 !== 11
          ? a[0]
          : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20)
          ? a[1]
          : a[2];
      }

      function a(e, a, i) {
        var s = {
          mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў",
        };
        return "m" === i
          ? a
            ? "хвіліна"
            : "хвіліну"
          : "h" === i
          ? a
            ? "гадзіна"
            : "гадзіну"
          : e + " " + t(s[i], +e);
      }
      var i = e.defineLocale("be", {
        months: {
          format:
            "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
              "_"
            ),
          standalone:
            "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
              "_"
            ),
        },
        monthsShort:
          "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format:
            "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
              "_"
            ),
          standalone:
            "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
              "_"
            ),
          isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/,
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm",
        },
        calendar: {
          sameDay: "[Сёння ў] LT",
          nextDay: "[Заўтра ў] LT",
          lastDay: "[Учора ў] LT",
          nextWeek: function () {
            return "[У] dddd [ў] LT";
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: "дзень",
          dd: a,
          M: "месяц",
          MM: a,
          y: "год",
          yy: a,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, t, a) {
          return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара";
        },
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return (e % 10 !== 2 && e % 10 !== 3) ||
                e % 100 === 12 ||
                e % 100 === 13
                ? e + "-ы"
                : e + "-і";
            case "D":
              return e + "-га";
            default:
              return e;
          }
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("bg", {
        months:
          "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays:
          "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[В изминалата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[В изминалия] dddd [в] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дни",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години",
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            a = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === a
            ? e + "-ен"
            : a > 10 && 20 > a
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "১",
          2: "২",
          3: "৩",
          4: "৪",
          5: "৫",
          6: "৬",
          7: "৭",
          8: "৮",
          9: "৯",
          0: "০",
        },
        a = {
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
          "০": "0",
        },
        i = e.defineLocale("bn", {
          months:
            "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
              "_"
            ),
          monthsShort:
            "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
          weekdays:
            "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split(
              "_"
            ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
          weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর",
          },
          preparse: function (e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          isPM: function (e) {
            return /^(দুপুর|বিকাল|রাত)$/.test(e);
          },
          meridiem: function (e, t, a) {
            return 4 > e
              ? "রাত"
              : 10 > e
              ? "সকাল"
              : 17 > e
              ? "দুপুর"
              : 20 > e
              ? "বিকাল"
              : "রাত";
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "༡",
          2: "༢",
          3: "༣",
          4: "༤",
          5: "༥",
          6: "༦",
          7: "༧",
          8: "༨",
          9: "༩",
          0: "༠",
        },
        a = {
          "༡": "1",
          "༢": "2",
          "༣": "3",
          "༤": "4",
          "༥": "5",
          "༦": "6",
          "༧": "7",
          "༨": "8",
          "༩": "9",
          "༠": "0",
        },
        i = e.defineLocale("bo", {
          months:
            "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
              "_"
            ),
          monthsShort:
            "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
              "_"
            ),
          weekdays:
            "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
              "_"
            ),
          weekdaysShort:
            "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          weekdaysMin:
            "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ",
          },
          preparse: function (e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          isPM: function (e) {
            return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e);
          },
          meridiem: function (e, t, a) {
            return 4 > e
              ? "མཚན་མོ"
              : 10 > e
              ? "ཞོགས་ཀས"
              : 17 > e
              ? "ཉིན་གུང"
              : 20 > e
              ? "དགོང་དག"
              : "མཚན་མོ";
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a) {
        var i = {
          mm: "munutenn",
          MM: "miz",
          dd: "devezh",
        };
        return e + " " + s(i[a], e);
      }

      function a(e) {
        switch (i(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + " bloaz";
          default:
            return e + " vloaz";
        }
      }

      function i(e) {
        return e > 9 ? i(e % 10) : e;
      }

      function s(e, t) {
        return 2 === t ? n(e) : e;
      }

      function n(e) {
        var t = {
          m: "v",
          b: "v",
          d: "z",
        };
        return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
      }
      var u = e.defineLocale("br", {
        months:
          "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            "_"
          ),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
          "_"
        ),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        longDateFormat: {
          LT: "h[e]mm A",
          LTS: "h[e]mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY h[e]mm A",
          LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A",
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warc'hoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Dec'h da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s 'zo",
          s: "un nebeud segondennoù",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: a,
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          var t = 1 === e ? "añ" : "vet";
          return e + t;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return u;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a) {
        var i = e + " ";
        switch (a) {
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (i +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (i +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (i += 1 === e ? "dan" : "dana");
          case "MM":
            return (i +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (i +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      var a = e.defineLocale("bs", {
        months:
          "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ca", {
        months:
          "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
            "_"
          ),
        monthsShort:
          "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split(
            "_"
          ),
        weekdays:
          "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
            "_"
          ),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [passat a " +
              (1 !== this.hours() ? "les" : "la") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "fa %s",
          s: "uns segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys",
        },
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var a =
            1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return ("w" === t || "W" === t) && (a = "a"), e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        return e > 1 && 5 > e && 1 !== ~~(e / 10);
      }

      function a(e, a, i, s) {
        var n = e + " ";
        switch (i) {
          case "s":
            return a || s ? "pár sekund" : "pár sekundami";
          case "m":
            return a ? "minuta" : s ? "minutu" : "minutou";
          case "mm":
            return a || s ? n + (t(e) ? "minuty" : "minut") : n + "minutami";
          case "h":
            return a ? "hodina" : s ? "hodinu" : "hodinou";
          case "hh":
            return a || s ? n + (t(e) ? "hodiny" : "hodin") : n + "hodinami";
          case "d":
            return a || s ? "den" : "dnem";
          case "dd":
            return a || s ? n + (t(e) ? "dny" : "dní") : n + "dny";
          case "M":
            return a || s ? "měsíc" : "měsícem";
          case "MM":
            return a || s ? n + (t(e) ? "měsíce" : "měsíců") : n + "měsíci";
          case "y":
            return a || s ? "rok" : "rokem";
          case "yy":
            return a || s ? n + (t(e) ? "roky" : "let") : n + "lety";
        }
      }
      var i =
          "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
            "_"
          ),
        s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
        n = e.defineLocale("cs", {
          months: i,
          monthsShort: s,
          monthsParse: (function (e, t) {
            var a,
              i = [];
            for (a = 0; 12 > a; a++)
              i[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
            return i;
          })(i, s),
          shortMonthsParse: (function (e) {
            var t,
              a = [];
            for (t = 0; 12 > t; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
            return a;
          })(s),
          longMonthsParse: (function (e) {
            var t,
              a = [];
            for (t = 0; 12 > t; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
            return a;
          })(i),
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT";
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("cv", {
        months:
          "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
            "_"
          ),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
          "_"
        ),
        weekdays:
          "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
            "_"
          ),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
            return e + t;
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул",
        },
        ordinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("cy", {
        months:
          "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
            "_"
          ),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split(
          "_"
        ),
        weekdays:
          "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
            "_"
          ),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd",
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = e,
            a = "",
            i = [
              "",
              "af",
              "il",
              "ydd",
              "ydd",
              "ed",
              "ed",
              "ed",
              "fed",
              "fed",
              "fed",
              "eg",
              "fed",
              "eg",
              "eg",
              "fed",
              "eg",
              "eg",
              "fed",
              "eg",
              "fed",
            ];
          return (
            t > 20
              ? (a =
                  40 === t || 50 === t || 60 === t || 80 === t || 100 === t
                    ? "fed"
                    : "ain")
              : t > 0 && (a = i[t]),
            e + a
          );
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("da", {
        months:
          "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[I dag kl.] LT",
          nextDay: "[I morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[I går kl.] LT",
          lastWeek: "[sidste] dddd [kl] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? s[a][0] : s[a][1];
      }
      var a = e.defineLocale("de-at", {
        months:
          "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
            "_"
          ),
        weekdays:
          "Sonntag_Montag_Dienstag_Mattwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? s[a][0] : s[a][1];
      }
      var a = e.defineLocale("de", document.loc_firstlang);
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = [
          "ޖެނުއަރީ",
          "ފެބްރުއަރީ",
          "މާރިޗު",
          "އޭޕްރީލު",
          "މޭ",
          "ޖޫން",
          "ޖުލައި",
          "އޯގަސްޓު",
          "ސެޕްޓެމްބަރު",
          "އޮކްޓޯބަރު",
          "ނޮވެމްބަރު",
          "ޑިސެމްބަރު",
        ],
        a = [
          "އާދިއްތަ",
          "ހޯމަ",
          "އަންގާރަ",
          "ބުދަ",
          "ބުރާސްފަތި",
          "ހުކުރު",
          "ހޮނިހިރު",
        ],
        i = e.defineLocale("dv", {
          months: t,
          monthsShort: t,
          weekdays: a,
          weekdaysShort: a,
          weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /މކ|މފ/,
          isPM: function (e) {
            return "" === e;
          },
          meridiem: function (e, t, a) {
            return 12 > e ? "މކ" : "މފ";
          },
          calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d",
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: {
            dow: 7,
            doy: 12,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        return (
          e instanceof Function ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }
      var a = e.defineLocale("el", {
        monthsNominativeEl:
          "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
            "_"
          ),
        monthsGenitiveEl:
          "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
            "_"
          ),
        months: function (e, t) {
          return /D/.test(t.substring(0, t.indexOf("MMMM")))
            ? this._monthsGenitiveEl[e.month()]
            : this._monthsNominativeEl[e.month()];
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split(
          "_"
        ),
        weekdays:
          "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, a) {
          return e > 11 ? (a ? "μμ" : "ΜΜ") : a ? "πμ" : "ΠΜ";
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT";
            }
          },
          sameElse: "L",
        },
        calendar: function (e, a) {
          var i = this._calendarEl[e],
            s = a && a.hours();
          return (
            t(i) && (i = i.apply(a)),
            i.replace("{}", s % 12 === 1 ? "στη" : "στις")
          );
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια",
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("en-au", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th";
          return e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("en-ca", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "D MMMM, YYYY",
          LLL: "D MMMM, YYYY h:mm A",
          LLLL: "dddd, D MMMM, YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th";
          return e + a;
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("en-gb", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th";
          return e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("en-ie", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th";
          return e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("en-nz", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th";
          return e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("eo", {
        months:
          "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split(
          "_"
        ),
        weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D[-an de] MMMM, YYYY",
          LLL: "D[-an de] MMMM, YYYY HH:mm",
          LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm",
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, t, a) {
          return e > 11 ? (a ? "p.t.m." : "P.T.M.") : a ? "a.t.m." : "A.T.M.";
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd [je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasinta] dddd [je] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "je %s",
          past: "antaŭ %s",
          s: "sekundoj",
          m: "minuto",
          mm: "%d minutoj",
          h: "horo",
          hh: "%d horoj",
          d: "tago",
          dd: "%d tagoj",
          M: "monato",
          MM: "%d monatoj",
          y: "jaro",
          yy: "%d jaroj",
        },
        ordinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        i = e.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (e, i) {
            return /-MMM-/.test(i) ? a[e.month()] : t[e.month()];
          },
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"],
        };
        return t ? (s[a][2] ? s[a][2] : s[a][1]) : i ? s[a][0] : s[a][1];
      }
      var a = e.defineLocale("et", {
        months:
          "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
            "_"
          ),
        monthsShort:
          "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
            "_"
          ),
        weekdays:
          "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
            "_"
          ),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("eu", {
        months:
          "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
            "_"
          ),
        monthsShort:
          "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
            "_"
          ),
        weekdays:
          "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
            "_"
          ),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "۱",
          2: "۲",
          3: "۳",
          4: "۴",
          5: "۵",
          6: "۶",
          7: "۷",
          8: "۸",
          9: "۹",
          0: "۰",
        },
        a = {
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
          "۰": "0",
        },
        i = e.defineLocale("fa", {
          months:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_"
            ),
          monthsShort:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_"
            ),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
            "_"
          ),
          weekdaysShort:
            "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function (e) {
            return /بعد از ظهر/.test(e);
          },
          meridiem: function (e, t, a) {
            return 12 > e ? "قبل از ظهر" : "بعد از ظهر";
          },
          calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چندین ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال",
          },
          preparse: function (e) {
            return e
              .replace(/[۰-۹]/g, function (e) {
                return a[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return t[e];
              })
              .replace(/,/g, "،");
          },
          ordinalParse: /\d{1,2}م/,
          ordinal: "%dم",
          week: {
            dow: 6,
            doy: 12,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, i, s) {
        var n = "";
        switch (i) {
          case "s":
            return s ? "muutaman sekunnin" : "muutama sekunti";
          case "m":
            return s ? "minuutin" : "minuutti";
          case "mm":
            n = s ? "minuutin" : "minuuttia";
            break;
          case "h":
            return s ? "tunnin" : "tunti";
          case "hh":
            n = s ? "tunnin" : "tuntia";
            break;
          case "d":
            return s ? "päivän" : "päivä";
          case "dd":
            n = s ? "päivän" : "päivää";
            break;
          case "M":
            return s ? "kuukauden" : "kuukausi";
          case "MM":
            n = s ? "kuukauden" : "kuukautta";
            break;
          case "y":
            return s ? "vuoden" : "vuosi";
          case "yy":
            n = s ? "vuoden" : "vuotta";
        }
        return (n = a(e, s) + " " + n);
      }

      function a(e, t) {
        return 10 > e ? (t ? s[e] : i[e]) : e;
      }
      var i =
          "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
            " "
          ),
        s = [
          "nolla",
          "yhden",
          "kahden",
          "kolmen",
          "neljän",
          "viiden",
          "kuuden",
          i[7],
          i[8],
          i[9],
        ],
        n = e.defineLocale("fi", {
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_"
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
              "_"
            ),
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_"
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm",
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("fo", {
        months:
          "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          m: "ein minutt",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaði",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("fr-ca", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd'hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e) {
          return e + (1 === e ? "er" : "e");
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("fr-ch", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd'hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e) {
          return e + (1 === e ? "er" : "e");
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("fr", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd'hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function (e) {
          return e + (1 === e ? "er" : "");
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t =
          "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
            "_"
          ),
        a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        i = e.defineLocale("fy", {
          months:
            "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
              "_"
            ),
          monthsShort: function (e, i) {
            return /-MMM-/.test(i) ? a[e.month()] : t[e.month()];
          },
          weekdays:
            "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren",
          },
          ordinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = [
          "Am Faoilleach",
          "An Gearran",
          "Am Màrt",
          "An Giblean",
          "An Cèitean",
          "An t-Ògmhios",
          "An t-Iuchar",
          "An Lùnastal",
          "An t-Sultain",
          "An Dàmhair",
          "An t-Samhain",
          "An Dùbhlachd",
        ],
        a = [
          "Faoi",
          "Gear",
          "Màrt",
          "Gibl",
          "Cèit",
          "Ògmh",
          "Iuch",
          "Lùn",
          "Sult",
          "Dàmh",
          "Samh",
          "Dùbh",
        ],
        i = [
          "Didòmhnaich",
          "Diluain",
          "Dimàirt",
          "Diciadain",
          "Diardaoin",
          "Dihaoine",
          "Disathairne",
        ],
        s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        n = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        u = e.defineLocale("gd", {
          months: t,
          monthsShort: a,
          monthsParseExact: !0,
          weekdays: i,
          weekdaysShort: s,
          weekdaysMin: n,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna",
          },
          ordinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (e) {
            var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
            return e + t;
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return u;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("gl", {
        months:
          "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split(
            "_"
          ),
        monthsShort:
          "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split(
            "_"
          ),
        weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
          },
          lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
          },
          lastWeek: function () {
            return (
              "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return "uns segundos" === e ? "nuns segundos" : "en " + e;
          },
          past: "hai %s",
          s: "uns segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos",
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("he", {
        months:
          "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
            "_"
          ),
        monthsShort:
          "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
            "_"
          ),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות";
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים";
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים";
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e
              ? "שנתיים"
              : e % 10 === 0 && 10 !== e
              ? e + " שנה"
              : e + " שנים";
          },
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        a = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        },
        i = e.defineLocale("hi", {
          months:
            "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
              "_"
            ),
          monthsShort:
            "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
              "_"
            ),
          weekdays:
            "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष",
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function (e, t) {
            return (
              12 === e && (e = 0),
              "रात" === t
                ? 4 > e
                  ? e
                  : e + 12
                : "सुबह" === t
                ? e
                : "दोपहर" === t
                ? e >= 10
                  ? e
                  : e + 12
                : "शाम" === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, t, a) {
            return 4 > e
              ? "रात"
              : 10 > e
              ? "सुबह"
              : 17 > e
              ? "दोपहर"
              : 20 > e
              ? "शाम"
              : "रात";
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a) {
        var i = e + " ";
        switch (a) {
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (i +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (i +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (i += 1 === e ? "dan" : "dana");
          case "MM":
            return (i +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (i +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      var a = e.defineLocale("hr", {
        months: {
          format:
            "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
              "_"
            ),
          standalone:
            "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
              "_"
            ),
        },
        monthsShort:
          "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
            "_"
          ),
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = e;
        switch (a) {
          case "s":
            return i || t ? "néhány másodperc" : "néhány másodperce";
          case "m":
            return "egy" + (i || t ? " perc" : " perce");
          case "mm":
            return s + (i || t ? " perc" : " perce");
          case "h":
            return "egy" + (i || t ? " óra" : " órája");
          case "hh":
            return s + (i || t ? " óra" : " órája");
          case "d":
            return "egy" + (i || t ? " nap" : " napja");
          case "dd":
            return s + (i || t ? " nap" : " napja");
          case "M":
            return "egy" + (i || t ? " hónap" : " hónapja");
          case "MM":
            return s + (i || t ? " hónap" : " hónapja");
          case "y":
            return "egy" + (i || t ? " év" : " éve");
          case "yy":
            return s + (i || t ? " év" : " éve");
        }
        return "";
      }

      function a(e) {
        return (e ? "" : "[múlt] ") + "[" + i[this.day()] + "] LT[-kor]";
      }
      var i =
          "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
            " "
          ),
        s = e.defineLocale("hu", {
          months:
            "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
              "_"
            ),
          monthsShort:
            "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
            "_"
          ),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm",
          },
          meridiemParse: /de|du/i,
          isPM: function (e) {
            return "u" === e.charAt(1).toLowerCase();
          },
          meridiem: function (e, t, a) {
            return 12 > e ? (a === !0 ? "de" : "DE") : a === !0 ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return a.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return a.call(this, !1);
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return s;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("hy-am", {
        months: {
          format:
            "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
              "_"
            ),
          standalone:
            "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
              "_"
            ),
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
          "_"
        ),
        weekdays:
          "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
            "_"
          ),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm",
        },
        calendar: {
          sameDay: "[այսօր] LT",
          nextDay: "[վաղը] LT",
          lastDay: "[երեկ] LT",
          nextWeek: function () {
            return "dddd [օրը ժամը] LT";
          },
          lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի",
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function (e) {
          return 4 > e
            ? "գիշերվա"
            : 12 > e
            ? "առավոտվա"
            : 17 > e
            ? "ցերեկվա"
            : "երեկոյան";
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case "DDD":
            case "w":
            case "W":
            case "DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e;
          }
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("id", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "siang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sore" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0;
      }

      function a(e, a, i, s) {
        var n = e + " ";
        switch (i) {
          case "s":
            return a || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case "m":
            return a ? "mínúta" : "mínútu";
          case "mm":
            return t(e)
              ? n + (a || s ? "mínútur" : "mínútum")
              : a
              ? n + "mínúta"
              : n + "mínútu";
          case "hh":
            return t(e)
              ? n + (a || s ? "klukkustundir" : "klukkustundum")
              : n + "klukkustund";
          case "d":
            return a ? "dagur" : s ? "dag" : "degi";
          case "dd":
            return t(e)
              ? a
                ? n + "dagar"
                : n + (s ? "daga" : "dögum")
              : a
              ? n + "dagur"
              : n + (s ? "dag" : "degi");
          case "M":
            return a ? "mánuður" : s ? "mánuð" : "mánuði";
          case "MM":
            return t(e)
              ? a
                ? n + "mánuðir"
                : n + (s ? "mánuði" : "mánuðum")
              : a
              ? n + "mánuður"
              : n + (s ? "mánuð" : "mánuði");
          case "y":
            return a || s ? "ár" : "ári";
          case "yy":
            return t(e)
              ? n + (a || s ? "ár" : "árum")
              : n + (a || s ? "ár" : "ári");
        }
      }
      var i = e.defineLocale("is", {
        months:
          "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: a,
          m: a,
          mm: a,
          h: "klukkustund",
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("it", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
          },
          past: "%s fa",
          s: "alcuni secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "Ah時m分",
          LTS: "Ah時m分s秒",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah時m分",
          LLLL: "YYYY年M月D日Ah時m分 dddd",
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e;
        },
        meridiem: function (e, t, a) {
          return 12 > e ? "午前" : "午後";
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: "[来週]dddd LT",
          lastDay: "[昨日] LT",
          lastWeek: "[前週]dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年",
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("jv", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "enjing" === t
              ? e
              : "siyang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sonten" === t || "ndalu" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          return 11 > e
            ? "enjing"
            : 15 > e
            ? "siyang"
            : 19 > e
            ? "sonten"
            : "ndalu";
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ka", {
        months: {
          standalone:
            "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
              "_"
            ),
          format:
            "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split(
              "_"
            ),
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
          "_"
        ),
        weekdays: {
          standalone:
            "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
              "_"
            ),
          format:
            "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
              "_"
            ),
          isFormat: /(წინა|შემდეგ)/,
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return /(წამი|წუთი|საათი|წელი)/.test(e)
              ? e.replace(/ი$/, "ში")
              : e + "ში";
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
              ? e.replace(/(ი|ე)$/, "ის წინ")
              : /წელი/.test(e)
              ? e.replace(/წელი$/, "წლის წინ")
              : void 0;
          },
          s: "რამდენიმე წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი",
        },
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e
            ? e
            : 1 === e
            ? e + "-ლი"
            : 20 > e || (100 >= e && e % 20 === 0) || e % 100 === 0
            ? "მე-" + e
            : e + "-ე";
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          0: "-ші",
          1: "-ші",
          2: "-ші",
          3: "-ші",
          4: "-ші",
          5: "-ші",
          6: "-шы",
          7: "-ші",
          8: "-ші",
          9: "-шы",
          10: "-шы",
          20: "-шы",
          30: "-шы",
          40: "-шы",
          50: "-ші",
          60: "-шы",
          70: "-ші",
          80: "-ші",
          90: "-шы",
          100: "-ші",
        },
        a = e.defineLocale("kk", {
          months:
            "Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан".split(
              "_"
            ),
          monthsShort: "Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел".split(
            "_"
          ),
          weekdays:
            "Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі".split(
              "_"
            ),
          weekdaysShort: "Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен".split("_"),
          weekdaysMin: "Жк_Дй_Сй_Ср_Бй_Жм_Сн".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл",
          },
          ordinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function (e) {
            var a = e % 10,
              i = e >= 100 ? 100 : null;
            return e + (t[e] || t[a] || t[i]);
          },
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("km", {
        months:
          "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        monthsShort:
          "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
          "_"
        ),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ",
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
          "_"
        ),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h시 m분",
          LTS: "A h시 m분 s초",
          L: "YYYY.MM.DD",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h시 m분",
          LLLL: "YYYY년 MMMM D일 dddd A h시 m분",
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇초",
          ss: "%d초",
          m: "일분",
          mm: "%d분",
          h: "한시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한달",
          MM: "%d달",
          y: "일년",
          yy: "%d년",
        },
        ordinalParse: /\d{1,2}일/,
        ordinal: "%d일",
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e;
        },
        meridiem: function (e, t, a) {
          return 12 > e ? "오전" : "오후";
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"],
        };
        return t ? s[a][0] : s[a][1];
      }

      function a(e) {
        var t = e.substr(0, e.indexOf(" "));
        return s(t) ? "a " + e : "an " + e;
      }

      function i(e) {
        var t = e.substr(0, e.indexOf(" "));
        return s(t) ? "viru " + e : "virun " + e;
      }

      function s(e) {
        if (((e = parseInt(e, 10)), isNaN(e))) return !1;
        if (0 > e) return !0;
        if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
        if (100 > e) {
          var t = e % 10,
            a = e / 10;
          return s(0 === t ? a : t);
        }
        if (1e4 > e) {
          for (; e >= 10; ) e /= 10;
          return s(e);
        }
        return (e /= 1e3), s(e);
      }
      var n = e.defineLocale("lb", {
        months:
          "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
            "_"
          ),
        weekdays:
          "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
            "_"
          ),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT";
            }
          },
        },
        relativeTime: {
          future: a,
          past: i,
          s: "e puer Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("lo", {
        months:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        monthsShort:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e;
        },
        meridiem: function (e, t, a) {
          return 12 > e ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ",
        },
        ordinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e;
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        return t
          ? "kelios sekundės"
          : i
          ? "kelių sekundžių"
          : "kelias sekundes";
      }

      function a(e, t, a, i) {
        return t ? s(a)[0] : i ? s(a)[1] : s(a)[2];
      }

      function i(e) {
        return e % 10 === 0 || (e > 10 && 20 > e);
      }

      function s(e) {
        return u[e].split("_");
      }

      function n(e, t, n, u) {
        var r = e + " ";
        return 1 === e
          ? r + a(e, t, n[0], u)
          : t
          ? r + (i(e) ? s(n)[1] : s(n)[0])
          : u
          ? r + s(n)[1]
          : r + (i(e) ? s(n)[1] : s(n)[2]);
      }
      var u = {
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus",
        },
        r = e.defineLocale("lt", {
          months: {
            format:
              "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                "_"
              ),
            standalone:
              "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                "_"
              ),
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_"
          ),
          weekdays: {
            format:
              "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                "_"
              ),
            standalone:
              "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                "_"
              ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: t,
            m: a,
            mm: n,
            h: a,
            hh: n,
            d: a,
            dd: n,
            M: a,
            MM: n,
            y: a,
            yy: n,
          },
          ordinalParse: /\d{1,2}-oji/,
          ordinal: function (e) {
            return e + "-oji";
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return r;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a) {
        return a
          ? t % 10 === 1 && 11 !== t
            ? e[2]
            : e[3]
          : t % 10 === 1 && 11 !== t
          ? e[0]
          : e[1];
      }

      function a(e, a, i) {
        return e + " " + t(n[i], e, a);
      }

      function i(e, a, i) {
        return t(n[i], e, a);
      }

      function s(e, t) {
        return t ? "dažas sekundes" : "dažām sekundēm";
      }
      var n = {
          m: "minūtes_minūtēm_minūte_minūtes".split("_"),
          mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
          h: "stundas_stundām_stunda_stundas".split("_"),
          hh: "stundas_stundām_stunda_stundas".split("_"),
          d: "dienas_dienām_diena_dienas".split("_"),
          dd: "dienas_dienām_diena_dienas".split("_"),
          M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_"),
        },
        u = e.defineLocale("lv", {
          months:
            "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays:
            "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
              "_"
            ),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: s,
            m: i,
            mm: a,
            h: i,
            hh: a,
            d: i,
            dd: a,
            M: i,
            MM: a,
            y: i,
            yy: a,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return u;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          words: {
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2];
          },
          translate: function (e, a, i) {
            var s = t.words[i];
            return 1 === i.length
              ? a
                ? s[0]
                : s[1]
              : e + " " + t.correctGrammaticalCase(e, s);
          },
        },
        a = e.defineLocale("me", {
          months: [
            "januar",
            "februar",
            "mart",
            "april",
            "maj",
            "jun",
            "jul",
            "avgust",
            "septembar",
            "oktobar",
            "novembar",
            "decembar",
          ],
          monthsShort: [
            "jan.",
            "feb.",
            "mar.",
            "apr.",
            "maj",
            "jun",
            "jul",
            "avg.",
            "sep.",
            "okt.",
            "nov.",
            "dec.",
          ],
          weekdays: [
            "nedjelja",
            "ponedjeljak",
            "utorak",
            "srijeda",
            "četvrtak",
            "petak",
            "subota",
          ],
          weekdaysShort: [
            "ned.",
            "pon.",
            "uto.",
            "sri.",
            "čet.",
            "pet.",
            "sub.",
          ],
          weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              var e = [
                "[prošle] [nedjelje] [u] LT",
                "[prošlog] [ponedjeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srijede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ];
              return e[this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "dan",
            dd: t.translate,
            M: "mjesec",
            MM: t.translate,
            y: "godinu",
            yy: t.translate,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("mk", {
        months:
          "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
          "_"
        ),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "после %s",
          past: "пред %s",
          s: "неколку секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеци",
          y: "година",
          yy: "%d години",
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            a = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === a
            ? e + "-ен"
            : a > 10 && 20 > a
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ml", {
        months:
          "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
            "_"
          ),
        monthsShort:
          "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
            "_"
          ),
        weekdays:
          "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
            "_"
          ),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം",
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        isPM: function (e) {
          return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e);
        },
        meridiem: function (e, t, a) {
          return 4 > e
            ? "രാത്രി"
            : 12 > e
            ? "രാവിലെ"
            : 17 > e
            ? "ഉച്ച കഴിഞ്ഞ്"
            : 20 > e
            ? "വൈകുന്നേരം"
            : "രാത്രി";
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = "";
        if (t)
          switch (a) {
            case "s":
              s = "काही सेकंद";
              break;
            case "m":
              s = "एक मिनिट";
              break;
            case "mm":
              s = "%d मिनिटे";
              break;
            case "h":
              s = "एक तास";
              break;
            case "hh":
              s = "%d तास";
              break;
            case "d":
              s = "एक दिवस";
              break;
            case "dd":
              s = "%d दिवस";
              break;
            case "M":
              s = "एक महिना";
              break;
            case "MM":
              s = "%d महिने";
              break;
            case "y":
              s = "एक वर्ष";
              break;
            case "yy":
              s = "%d वर्षे";
          }
        else
          switch (a) {
            case "s":
              s = "काही सेकंदां";
              break;
            case "m":
              s = "एका मिनिटा";
              break;
            case "mm":
              s = "%d मिनिटां";
              break;
            case "h":
              s = "एका तासा";
              break;
            case "hh":
              s = "%d तासां";
              break;
            case "d":
              s = "एका दिवसा";
              break;
            case "dd":
              s = "%d दिवसां";
              break;
            case "M":
              s = "एका महिन्या";
              break;
            case "MM":
              s = "%d महिन्यां";
              break;
            case "y":
              s = "एका वर्षा";
              break;
            case "yy":
              s = "%d वर्षां";
          }
        return s.replace(/%d/i, e);
      }
      var a = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        i = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        },
        s = e.defineLocale("mr", {
          months:
            "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
              "_"
            ),
          monthsShort:
            "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
              "_"
            ),
          weekdays:
            "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return i[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function (e, t) {
            return (
              12 === e && (e = 0),
              "रात्री" === t
                ? 4 > e
                  ? e
                  : e + 12
                : "सकाळी" === t
                ? e
                : "दुपारी" === t
                ? e >= 10
                  ? e
                  : e + 12
                : "सायंकाळी" === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, t, a) {
            return 4 > e
              ? "रात्री"
              : 10 > e
              ? "सकाळी"
              : 17 > e
              ? "दुपारी"
              : 20 > e
              ? "सायंकाळी"
              : "रात्री";
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return s;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ms-my", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          return 11 > e
            ? "pagi"
            : 15 > e
            ? "tengahari"
            : 19 > e
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("ms", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          return 11 > e
            ? "pagi"
            : 15 > e
            ? "tengahari"
            : 19 > e
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "၁",
          2: "၂",
          3: "၃",
          4: "၄",
          5: "၅",
          6: "၆",
          7: "၇",
          8: "၈",
          9: "၉",
          0: "၀",
        },
        a = {
          "၁": "1",
          "၂": "2",
          "၃": "3",
          "၄": "4",
          "၅": "5",
          "၆": "6",
          "၇": "7",
          "၈": "8",
          "၉": "9",
          "၀": "0",
        },
        i = e.defineLocale("my", {
          months:
            "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
              "_"
            ),
          monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
            "_"
          ),
          weekdays:
            "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
          weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L",
          },
          relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်",
          },
          preparse: function (e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("nb", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "for %s siden",
          s: "noen sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        a = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        },
        i = e.defineLocale("ne", {
          months:
            "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
              "_"
            ),
          monthsShort:
            "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
              "_"
            ),
          weekdays:
            "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
          longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function (e, t) {
            return (
              12 === e && (e = 0),
              "राति" === t
                ? 4 > e
                  ? e
                  : e + 12
                : "बिहान" === t
                ? e
                : "दिउँसो" === t
                ? e >= 10
                  ? e
                  : e + 12
                : "साँझ" === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, t, a) {
            return 3 > e
              ? "राति"
              : 12 > e
              ? "बिहान"
              : 16 > e
              ? "दिउँसो"
              : 20 > e
              ? "साँझ"
              : "राति";
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष",
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        i = e.defineLocale("nl", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: function (e, i) {
            return /-MMM-/.test(i) ? a[e.month()] : t[e.month()];
          },
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_"
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar",
          },
          ordinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("nn", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
          "_"
        ),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
          "_"
        ),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "for %s sidan",
          s: "nokre sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1;
      }

      function a(e, a, i) {
        var s = e + " ";
        switch (i) {
          case "m":
            return a ? "minuta" : "minutę";
          case "mm":
            return s + (t(e) ? "minuty" : "minut");
          case "h":
            return a ? "godzina" : "godzinę";
          case "hh":
            return s + (t(e) ? "godziny" : "godzin");
          case "MM":
            return s + (t(e) ? "miesiące" : "miesięcy");
          case "yy":
            return s + (t(e) ? "lata" : "lat");
        }
      }
      var i =
          "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
            "_"
          ),
        s =
          "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
            "_"
          ),
        n = e.defineLocale("pl", {
          months: function (e, t) {
            return "" === t
              ? "(" + s[e.month()] + "|" + i[e.month()] + ")"
              : /D MMMM/.test(t)
              ? s[e.month()]
              : i[e.month()];
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
            "_"
          ),
          weekdays:
            "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
              "_"
            ),
          weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: a,
            y: "rok",
            yy: a,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("pt-br", {
        months:
          "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
          "_"
        ),
        weekdays:
          "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split(
            "_"
          ),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "%s atrás",
          s: "poucos segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("pt", {
        months:
          "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
          "_"
        ),
        weekdays:
          "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split(
            "_"
          ),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a) {
        var i = {
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani",
          },
          s = " ";
        return (
          (e % 100 >= 20 || (e >= 100 && e % 100 === 0)) && (s = " de "),
          e + s + i[a]
        );
      }
      var a = e.defineLocale("ro", {
        months:
          "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
            "_"
          ),
        monthsShort:
          "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
            "_"
          ),
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t,
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t) {
        var a = e.split("_");
        return t % 10 === 1 && t % 100 !== 11
          ? a[0]
          : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20)
          ? a[1]
          : a[2];
      }

      function a(e, a, i) {
        var s = {
          mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет",
        };
        return "m" === i ? (a ? "минута" : "минуту") : e + " " + t(s[i], +e);
      }
      var i = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[й|я]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i,
        ],
        s = e.defineLocale("ru", {
          months: {
            format:
              "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split(
                "_"
              ),
            standalone:
              "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
                "_"
              ),
          },
          monthsShort: {
            format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split(
              "_"
            ),
            standalone:
              "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
          },
          weekdays: {
            standalone:
              "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split(
                "_"
              ),
            format:
              "Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу".split(
                "_"
              ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
          },
          weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
          weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
          monthsParse: i,
          longMonthsParse: i,
          shortMonthsParse: i,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm",
          },
          calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function (e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd [в] LT"
                  : "[В] dddd [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В следующее] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В следующий] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В следующую] dddd [в] LT";
              }
            },
            lastWeek: function (e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd [в] LT"
                  : "[В] dddd [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd [в] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: a,
            mm: a,
            h: "час",
            hh: a,
            d: "день",
            dd: a,
            M: "месяц",
            MM: a,
            y: "год",
            yy: a,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function (e) {
            return /^(дня|вечера)$/.test(e);
          },
          meridiem: function (e, t, a) {
            return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера";
          },
          ordinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function (e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
                return e + "-й";
              case "D":
                return e + "-го";
              case "w":
              case "W":
                return e + "-я";
              default:
                return e;
            }
          },
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return s;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("se", {
        months:
          "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
            "_"
          ),
        monthsShort:
          "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
            "_"
          ),
        weekdays:
          "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
            "_"
          ),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("si", {
        months:
          "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
            "_"
          ),
        monthsShort:
          "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays:
          "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
            "_"
          ),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d",
        },
        ordinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි";
        },
        meridiem: function (e, t, a) {
          return e > 11 ? (a ? "ප.ව." : "පස් වරු") : a ? "පෙ.ව." : "පෙර වරු";
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        return e > 1 && 5 > e;
      }

      function a(e, a, i, s) {
        var n = e + " ";
        switch (i) {
          case "s":
            return a || s ? "pár sekúnd" : "pár sekundami";
          case "m":
            return a ? "minúta" : s ? "minútu" : "minútou";
          case "mm":
            return a || s ? n + (t(e) ? "minúty" : "minút") : n + "minútami";
          case "h":
            return a ? "hodina" : s ? "hodinu" : "hodinou";
          case "hh":
            return a || s ? n + (t(e) ? "hodiny" : "hodín") : n + "hodinami";
          case "d":
            return a || s ? "deň" : "dňom";
          case "dd":
            return a || s ? n + (t(e) ? "dni" : "dní") : n + "dňami";
          case "M":
            return a || s ? "mesiac" : "mesiacom";
          case "MM":
            return a || s
              ? n + (t(e) ? "mesiace" : "mesiacov")
              : n + "mesiacmi";
          case "y":
            return a || s ? "rok" : "rokom";
          case "yy":
            return a || s ? n + (t(e) ? "roky" : "rokov") : n + "rokmi";
        }
      }
      var i =
          "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
            "_"
          ),
        s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
        n = e.defineLocale("sk", {
          months: i,
          monthsShort: s,
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
            "_"
          ),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT";
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 6:
                  return "[minulú sobotu o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = e + " ";
        switch (a) {
          case "s":
            return t || i ? "nekaj sekund" : "nekaj sekundami";
          case "m":
            return t ? "ena minuta" : "eno minuto";
          case "mm":
            return (s +=
              1 === e
                ? t
                  ? "minuta"
                  : "minuto"
                : 2 === e
                ? t || i
                  ? "minuti"
                  : "minutama"
                : 5 > e
                ? t || i
                  ? "minute"
                  : "minutami"
                : t || i
                ? "minut"
                : "minutami");
          case "h":
            return t ? "ena ura" : "eno uro";
          case "hh":
            return (s +=
              1 === e
                ? t
                  ? "ura"
                  : "uro"
                : 2 === e
                ? t || i
                  ? "uri"
                  : "urama"
                : 5 > e
                ? t || i
                  ? "ure"
                  : "urami"
                : t || i
                ? "ur"
                : "urami");
          case "d":
            return t || i ? "en dan" : "enim dnem";
          case "dd":
            return (s +=
              1 === e
                ? t || i
                  ? "dan"
                  : "dnem"
                : 2 === e
                ? t || i
                  ? "dni"
                  : "dnevoma"
                : t || i
                ? "dni"
                : "dnevi");
          case "M":
            return t || i ? "en mesec" : "enim mesecem";
          case "MM":
            return (s +=
              1 === e
                ? t || i
                  ? "mesec"
                  : "mesecem"
                : 2 === e
                ? t || i
                  ? "meseca"
                  : "mesecema"
                : 5 > e
                ? t || i
                  ? "mesece"
                  : "meseci"
                : t || i
                ? "mesecev"
                : "meseci");
          case "y":
            return t || i ? "eno leto" : "enim letom";
          case "yy":
            return (s +=
              1 === e
                ? t || i
                  ? "leto"
                  : "letom"
                : 2 === e
                ? t || i
                  ? "leti"
                  : "letoma"
                : 5 > e
                ? t || i
                  ? "leta"
                  : "leti"
                : t || i
                ? "let"
                : "leti");
        }
      }
      var a = e.defineLocale("sl", {
        months:
          "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
            "_"
          ),
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
          "_"
        ),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danes ob] LT",
          nextDay: "[jutri ob] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT";
            }
          },
          lastDay: "[včeraj ob] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("sq", {
        months:
          "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
            "_"
          ),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
          "_"
        ),
        weekdays:
          "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
            "_"
          ),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0);
        },
        meridiem: function (e, t, a) {
          return 12 > e ? "PD" : "MD";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite",
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          words: {
            m: ["један минут", "једне минуте"],
            mm: ["минут", "минуте", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            dd: ["дан", "дана", "дана"],
            MM: ["месец", "месеца", "месеци"],
            yy: ["година", "године", "година"],
          },
          correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2];
          },
          translate: function (e, a, i) {
            var s = t.words[i];
            return 1 === i.length
              ? a
                ? s[0]
                : s[1]
              : e + " " + t.correctGrammaticalCase(e, s);
          },
        },
        a = e.defineLocale("sr-cyrl", {
          months: [
            "јануар",
            "фебруар",
            "март",
            "април",
            "мај",
            "јун",
            "јул",
            "август",
            "септембар",
            "октобар",
            "новембар",
            "децембар",
          ],
          monthsShort: [
            "јан.",
            "феб.",
            "мар.",
            "апр.",
            "мај",
            "јун",
            "јул",
            "авг.",
            "сеп.",
            "окт.",
            "нов.",
            "дец.",
          ],
          weekdays: [
            "недеља",
            "понедељак",
            "уторак",
            "среда",
            "четвртак",
            "петак",
            "субота",
          ],
          weekdaysShort: [
            "нед.",
            "пон.",
            "уто.",
            "сре.",
            "чет.",
            "пет.",
            "суб.",
          ],
          weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[у] [недељу] [у] LT";
                case 3:
                  return "[у] [среду] [у] LT";
                case 6:
                  return "[у] [суботу] [у] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[у] dddd [у] LT";
              }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function () {
              var e = [
                "[прошле] [недеље] [у] LT",
                "[прошлог] [понедељка] [у] LT",
                "[прошлог] [уторка] [у] LT",
                "[прошле] [среде] [у] LT",
                "[прошлог] [четвртка] [у] LT",
                "[прошлог] [петка] [у] LT",
                "[прошле] [суботе] [у] LT",
              ];
              return e[this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "дан",
            dd: t.translate,
            M: "месец",
            MM: t.translate,
            y: "годину",
            yy: t.translate,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          words: {
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2];
          },
          translate: function (e, a, i) {
            var s = t.words[i];
            return 1 === i.length
              ? a
                ? s[0]
                : s[1]
              : e + " " + t.correctGrammaticalCase(e, s);
          },
        },
        a = e.defineLocale("sr", {
          months: [
            "januar",
            "februar",
            "mart",
            "april",
            "maj",
            "jun",
            "jul",
            "avgust",
            "septembar",
            "oktobar",
            "novembar",
            "decembar",
          ],
          monthsShort: [
            "jan.",
            "feb.",
            "mar.",
            "apr.",
            "maj",
            "jun",
            "jul",
            "avg.",
            "sep.",
            "okt.",
            "nov.",
            "dec.",
          ],
          weekdays: [
            "nedelja",
            "ponedeljak",
            "utorak",
            "sreda",
            "četvrtak",
            "petak",
            "subota",
          ],
          weekdaysShort: [
            "ned.",
            "pon.",
            "uto.",
            "sre.",
            "čet.",
            "pet.",
            "sub.",
          ],
          weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedelju] [u] LT";
                case 3:
                  return "[u] [sredu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              var e = [
                "[prošle] [nedelje] [u] LT",
                "[prošlog] [ponedeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ];
              return e[this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: "dan",
            dd: t.translate,
            M: "mesec",
            MM: t.translate,
            y: "godinu",
            yy: t.translate,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("sv", {
        months:
          "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
          "_"
        ),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år",
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
          var t = e % 10,
            a =
              1 === ~~((e % 100) / 10)
                ? "e"
                : 1 === t
                ? "a"
                : 2 === t
                ? "a"
                : "e";
          return e + a;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("sw", {
        months:
          "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
            "_"
          ),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "masiku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "௧",
          2: "௨",
          3: "௩",
          4: "௪",
          5: "௫",
          6: "௬",
          7: "௭",
          8: "௮",
          9: "௯",
          0: "௦",
        },
        a = {
          "௧": "1",
          "௨": "2",
          "௩": "3",
          "௪": "4",
          "௫": "5",
          "௬": "6",
          "௭": "7",
          "௮": "8",
          "௯": "9",
          "௦": "0",
        },
        i = e.defineLocale("ta", {
          months:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_"
            ),
          monthsShort:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_"
            ),
          weekdays:
            "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
              "_"
            ),
          weekdaysShort:
            "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
          weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm",
          },
          calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்",
          },
          ordinalParse: /\d{1,2}வது/,
          ordinal: function (e) {
            return e + "வது";
          },
          preparse: function (e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
              return a[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return t[e];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function (e, t, a) {
            return 2 > e
              ? " யாமம்"
              : 6 > e
              ? " வைகறை"
              : 10 > e
              ? " காலை"
              : 14 > e
              ? " நண்பகல்"
              : 18 > e
              ? " எற்பாடு"
              : 22 > e
              ? " மாலை"
              : " யாமம்";
          },
          meridiemHour: function (e, t) {
            return (
              12 === e && (e = 0),
              "யாமம்" === t
                ? 2 > e
                  ? e
                  : e + 12
                : "வைகறை" === t || "காலை" === t
                ? e
                : "நண்பகல்" === t && e >= 10
                ? e
                : e + 12
            );
          },
          week: {
            dow: 0,
            doy: 6,
          },
        });
      return i;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("te", {
        months:
          "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
            "_"
          ),
        monthsShort:
          "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
            "_"
          ),
        weekdays:
          "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
            "_"
          ),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు",
        },
        ordinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "రాత్రి" === t
              ? 4 > e
                ? e
                : e + 12
              : "ఉదయం" === t
              ? e
              : "మధ్యాహ్నం" === t
              ? e >= 10
                ? e
                : e + 12
              : "సాయంత్రం" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          return 4 > e
            ? "రాత్రి"
            : 10 > e
            ? "ఉదయం"
            : 17 > e
            ? "మధ్యాహ్నం"
            : 20 > e
            ? "సాయంత్రం"
            : "రాత్రి";
        },
        week: {
          dow: 0,
          doy: 6,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("th", {
        months:
          "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
            "_"
          ),
        monthsShort:
          "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split(
            "_"
          ),
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        longDateFormat: {
          LT: "H นาฬิกา m นาที",
          LTS: "H นาฬิกา m นาที s วินาที",
          L: "YYYY/MM/DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที",
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e;
        },
        meridiem: function (e, t, a) {
          return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง";
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี",
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("tl-ph", {
        months:
          "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
          "_"
        ),
        weekdays:
          "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Ngayon sa] LT",
          nextDay: "[Bukas sa] LT",
          nextWeek: "dddd [sa] LT",
          lastDay: "[Kahapon sa] LT",
          lastWeek: "dddd [huling linggo] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon",
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e) {
        var t = e;
        return (t =
          -1 !== e.indexOf("jaj")
            ? t.slice(0, -3) + "leS"
            : -1 !== e.indexOf("jar")
            ? t.slice(0, -3) + "waQ"
            : -1 !== e.indexOf("DIS")
            ? t.slice(0, -3) + "nem"
            : t + " pIq");
      }

      function a(e) {
        var t = e;
        return (t =
          -1 !== e.indexOf("jaj")
            ? t.slice(0, -3) + "Hu’"
            : -1 !== e.indexOf("jar")
            ? t.slice(0, -3) + "wen"
            : -1 !== e.indexOf("DIS")
            ? t.slice(0, -3) + "ben"
            : t + " ret");
      }

      function i(e, t, a, i) {
        var n = s(e);
        switch (a) {
          case "mm":
            return n + " tup";
          case "hh":
            return n + " rep";
          case "dd":
            return n + " jaj";
          case "MM":
            return n + " jar";
          case "yy":
            return n + " DIS";
        }
      }

      function s(e) {
        var t = Math.floor((e % 1e3) / 100),
          a = Math.floor((e % 100) / 10),
          i = e % 10,
          s = "";
        return (
          t > 0 && (s += n[t] + "vatlh"),
          a > 0 && (s += ("" !== s ? " " : "") + n[a] + "maH"),
          i > 0 && (s += ("" !== s ? " " : "") + n[i]),
          "" === s ? "pagh" : s
        );
      }
      var n = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
        u = e.defineLocale("tlh", {
          months:
            "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
              "_"
            ),
          monthsShort:
            "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
              "_"
            ),
          weekdays:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          weekdaysShort:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          weekdaysMin:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L",
          },
          relativeTime: {
            future: t,
            past: a,
            s: "puS lup",
            m: "wa’ tup",
            mm: i,
            h: "wa’ rep",
            hh: i,
            d: "wa’ jaj",
            dd: i,
            M: "wa’ jar",
            MM: i,
            y: "wa’ DIS",
            yy: i,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4,
          },
        });
      return u;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        },
        a = e.defineLocale("tr", {
          months:
            "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
              "_"
            ),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
            "_"
          ),
          weekdays:
            "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
          weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl",
          },
          ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
          ordinal: function (e) {
            if (0 === e) return e + "'ıncı";
            var a = e % 10,
              i = (e % 100) - a,
              s = e >= 100 ? 100 : null;
            return e + (t[a] || t[i] || t[s]);
          },
          week: {
            dow: 1,
            doy: 7,
          },
        });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t, a, i) {
        var s = {
          s: ["viensas secunds", "'iensas secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", "" + e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", "" + e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", "" + e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", "" + e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", "" + e + " ars"],
        };
        return i ? s[a][0] : t ? s[a][0] : s[a][1];
      }
      var a = e.defineLocale("tzl", {
        months:
          "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
          "_"
        ),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
          "_"
        ),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
        },
        meridiem: function (e, t, a) {
          return e > 11 ? (a ? "d'o" : "D'O") : a ? "d'a" : "D'A";
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return a;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("tzm-latn", {
        months:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        monthsShort:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn",
        },
        week: {
          dow: 6,
          doy: 12,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("tzm", {
        months:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        monthsShort:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ",
        },
        week: {
          dow: 6,
          doy: 12,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";

      function t(e, t) {
        var a = e.split("_");
        return t % 10 === 1 && t % 100 !== 11
          ? a[0]
          : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20)
          ? a[1]
          : a[2];
      }

      function a(e, a, i) {
        var s = {
          mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: a ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років",
        };
        return "m" === i
          ? a
            ? "хвилина"
            : "хвилину"
          : "h" === i
          ? a
            ? "година"
            : "годину"
          : e + " " + t(s[i], +e);
      }

      function i(e, t) {
        var a = {
            nominative:
              "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                "_"
              ),
            accusative:
              "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                "_"
              ),
            genitive:
              "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                "_"
              ),
          },
          i = /(\[[ВвУу]\]) ?dddd/.test(t)
            ? "accusative"
            : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
            ? "genitive"
            : "nominative";
        return a[i][e.day()];
      }

      function s(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
      }
      var n = e.defineLocale("uk", {
        months: {
          format:
            "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
              "_"
            ),
          standalone:
            "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
              "_"
            ),
        },
        monthsShort:
          "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: i,
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm",
        },
        calendar: {
          sameDay: s("[Сьогодні "),
          nextDay: s("[Завтра "),
          lastDay: s("[Вчора "),
          nextWeek: s("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return s("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return s("[Минулого] dddd [").call(this);
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          m: a,
          mm: a,
          h: "годину",
          hh: a,
          d: "день",
          dd: a,
          M: "місяць",
          MM: a,
          y: "рік",
          yy: a,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, a) {
          return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора";
        },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return e + "-й";
            case "D":
              return e + "-го";
            default:
              return e;
          }
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return n;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("uz", {
        months:
          "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
          "_"
        ),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm",
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L",
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил",
        },
        week: {
          dow: 1,
          doy: 7,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("vi", {
        months:
          "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
            "_"
          ),
        monthsShort:
          "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split(
            "_"
          ),
        weekdays:
          "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần rồi lúc] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm",
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("zh-cn", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "Ah点mm分",
          LTS: "Ah点m分s秒",
          L: "YYYY-MM-DD",
          LL: "YYYY年MMMD日",
          LLL: "YYYY年MMMD日Ah点mm分",
          LLLL: "YYYY年MMMD日ddddAh点mm分",
          l: "YYYY-MM-DD",
          ll: "YYYY年MMMD日",
          lll: "YYYY年MMMD日Ah点mm分",
          llll: "YYYY年MMMD日ddddAh点mm分",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "下午" === t || "晚上" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, a) {
          var i = 100 * e + t;
          return 600 > i
            ? "凌晨"
            : 900 > i
            ? "早上"
            : 1130 > i
            ? "上午"
            : 1230 > i
            ? "中午"
            : 1800 > i
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: function () {
            return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT";
          },
          nextDay: function () {
            return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT";
          },
          lastDay: function () {
            return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT";
          },
          nextWeek: function () {
            var t, a;
            return (
              (t = e().startOf("week")),
              (a = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]"),
              0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm"
            );
          },
          lastWeek: function () {
            var t, a;
            return (
              (t = e().startOf("week")),
              (a = this.unix() < t.unix() ? "[上]" : "[本]"),
              0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm"
            );
          },
          sameElse: "LL",
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "周";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        week: {
          dow: 1,
          doy: 4,
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    !(function (e, t) {
      t(a(1));
    })(this, function (e) {
      "use strict";
      var t = e.defineLocale("zh-tw", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "Ah點mm分",
          LTS: "Ah點m分s秒",
          L: "YYYY年MMMD日",
          LL: "YYYY年MMMD日",
          LLL: "YYYY年MMMD日Ah點mm分",
          LLLL: "YYYY年MMMD日ddddAh點mm分",
          l: "YYYY年MMMD日",
          ll: "YYYY年MMMD日",
          lll: "YYYY年MMMD日Ah點mm分",
          llll: "YYYY年MMMD日ddddAh點mm分",
        },
        meridiemParse: /早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, a) {
          var i = 100 * e + t;
          return 900 > i
            ? "早上"
            : 1130 > i
            ? "上午"
            : 1230 > i
            ? "中午"
            : 1800 > i
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L",
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          m: "一分鐘",
          mm: "%d分鐘",
          h: "一小時",
          hh: "%d小時",
          d: "一天",
          dd: "%d天",
          M: "一個月",
          MM: "%d個月",
          y: "一年",
          yy: "%d年",
        },
      });
      return t;
    });
  },
  function (e, t, a) {
    var i, s;
    a(158),
      (i = a(118)),
      (s = a(230)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(160),
      (i = a(120)),
      (s = a(232)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    (function (t) {
      /*!
       * Vue.js v1.0.16
       * (c) 2016 Evan You
       * Released under the MIT License.
       */
      "use strict";

      function a(e, t, i) {
        if (s(e, t)) return void (e[t] = i);
        if (e._isVue) return void a(e._data, t, i);
        var n = e.__ob__;
        if (!n) return void (e[t] = i);
        if ((n.convert(t, i), n.dep.notify(), n.vms))
          for (var u = n.vms.length; u--; ) {
            var r = n.vms[u];
            r._proxy(t), r._digest();
          }
        return i;
      }

      function i(e, t) {
        if (s(e, t)) {
          delete e[t];
          var a = e.__ob__;
          if (a && (a.dep.notify(), a.vms))
            for (var i = a.vms.length; i--; ) {
              var n = a.vms[i];
              n._unproxy(t), n._digest();
            }
        }
      }

      function s(e, t) {
        return ya.call(e, t);
      }

      function n(e) {
        return fa.test(e);
      }

      function u(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }

      function r(e) {
        return null == e ? "" : e.toString();
      }

      function l(e) {
        if ("string" != typeof e) return e;
        var t = Number(e);
        return isNaN(t) ? e : t;
      }

      function o(e) {
        return "true" === e ? !0 : "false" === e ? !1 : e;
      }

      function m(e) {
        var t = e.charCodeAt(0),
          a = e.charCodeAt(e.length - 1);
        return t !== a || (34 !== t && 39 !== t) ? e : e.slice(1, -1);
      }

      function p(e) {
        return e.replace(_a, T);
      }

      function T(e, t) {
        return t ? t.toUpperCase() : "";
      }

      function c(e) {
        return e.replace(xa, "$1-$2").toLowerCase();
      }

      function d(e) {
        return e.replace(Ma, T);
      }

      function S(e, t) {
        return function (a) {
          var i = arguments.length;
          return i ? (i > 1 ? e.apply(t, arguments) : e.call(t, a)) : e.call(t);
        };
      }

      function h(e, t) {
        t = t || 0;
        for (var a = e.length - t, i = new Array(a); a--; ) i[a] = e[a + t];
        return i;
      }

      function v(e, t) {
        for (var a = Object.keys(t), i = a.length; i--; ) e[a[i]] = t[a[i]];
        return e;
      }

      function y(e) {
        return null !== e && "object" == typeof e;
      }

      function f(e) {
        return ga.call(e) === Ca;
      }

      function _(e, t, a, i) {
        Object.defineProperty(e, t, {
          value: a,
          enumerable: !!i,
          writable: !0,
          configurable: !0,
        });
      }

      function x(e, t) {
        var a,
          i,
          s,
          n,
          u,
          r = function l() {
            var r = Date.now() - n;
            t > r && r >= 0
              ? (a = setTimeout(l, t - r))
              : ((a = null), (u = e.apply(s, i)), a || (s = i = null));
          };
        return function () {
          return (
            (s = this),
            (i = arguments),
            (n = Date.now()),
            a || (a = setTimeout(r, t)),
            u
          );
        };
      }

      function M(e, t) {
        for (var a = e.length; a--; ) if (e[a] === t) return a;
        return -1;
      }

      function g(e) {
        var t = function a() {
          return a.cancelled ? void 0 : e.apply(this, arguments);
        };
        return (
          (t.cancel = function () {
            t.cancelled = !0;
          }),
          t
        );
      }

      function C(e, t) {
        return (
          e == t ||
          (y(e) && y(t) ? JSON.stringify(e) === JSON.stringify(t) : !1)
        );
      }

      function E(e) {
        (this.size = 0),
          (this.limit = e),
          (this.head = this.tail = void 0),
          (this._keymap = Object.create(null));
      }

      function D() {
        var e,
          t = Ua.slice(Ba, Wa).trim();
        if (t) {
          e = {};
          var a = t.match(Ka);
          (e.name = a[0]), a.length > 1 && (e.args = a.slice(1).map(L));
        }
        e && (Ra.filters = Ra.filters || []).push(e), (Ba = Wa + 1);
      }

      function L(e) {
        if ($a.test(e))
          return {
            value: l(e),
            dynamic: !1,
          };
        var t = m(e),
          a = t === e;
        return {
          value: a ? e : t,
          dynamic: a,
        };
      }

      function w(e) {
        var t = qa.get(e);
        if (t) return t;
        for (
          Ua = e,
            Ga = Za = !1,
            Ja = Va = Xa = 0,
            Ba = 0,
            Ra = {},
            Wa = 0,
            Fa = Ua.length;
          Fa > Wa;
          Wa++
        )
          if (((Qa = Pa), (Pa = Ua.charCodeAt(Wa)), Ga))
            39 === Pa && 92 !== Qa && (Ga = !Ga);
          else if (Za) 34 === Pa && 92 !== Qa && (Za = !Za);
          else if (
            124 === Pa &&
            124 !== Ua.charCodeAt(Wa + 1) &&
            124 !== Ua.charCodeAt(Wa - 1)
          )
            null == Ra.expression
              ? ((Ba = Wa + 1), (Ra.expression = Ua.slice(0, Wa).trim()))
              : D();
          else
            switch (Pa) {
              case 34:
                Za = !0;
                break;
              case 39:
                Ga = !0;
                break;
              case 40:
                Xa++;
                break;
              case 41:
                Xa--;
                break;
              case 91:
                Va++;
                break;
              case 93:
                Va--;
                break;
              case 123:
                Ja++;
                break;
              case 125:
                Ja--;
            }
        return (
          null == Ra.expression
            ? (Ra.expression = Ua.slice(0, Wa).trim())
            : 0 !== Ba && D(),
          qa.put(e, Ra),
          Ra
        );
      }

      function k(e) {
        return e.replace(ti, "\\$&");
      }

      function N() {
        var e = k(oi.delimiters[0]),
          t = k(oi.delimiters[1]),
          a = k(oi.unsafeDelimiters[0]),
          i = k(oi.unsafeDelimiters[1]);
        (ii = new RegExp(a + "(.+?)" + i + "|" + e + "(.+?)" + t, "g")),
          (si = new RegExp("^" + a + ".*" + i + "$")),
          (ai = new E(1e3));
      }

      function Y(e) {
        ai || N();
        var t = ai.get(e);
        if (t) return t;
        if (((e = e.replace(/\n/g, "")), !ii.test(e))) return null;
        for (
          var a, i, s, n, u, r, l = [], o = (ii.lastIndex = 0);
          (a = ii.exec(e));

        )
          (i = a.index),
            i > o &&
              l.push({
                value: e.slice(o, i),
              }),
            (s = si.test(a[0])),
            (n = s ? a[1] : a[2]),
            (u = n.charCodeAt(0)),
            (r = 42 === u),
            (n = r ? n.slice(1) : n),
            l.push({
              tag: !0,
              value: n.trim(),
              html: s,
              oneTime: r,
            }),
            (o = i + a[0].length);
        return (
          o < e.length &&
            l.push({
              value: e.slice(o),
            }),
          ai.put(e, l),
          l
        );
      }

      function j(e, t) {
        return e.length > 1
          ? e
              .map(function (e) {
                return b(e, t);
              })
              .join("+")
          : b(e[0], t, !0);
      }

      function b(e, t, a) {
        return e.tag
          ? e.oneTime && t
            ? '"' + t.$eval(e.value) + '"'
            : z(e.value, a)
          : '"' + e.value + '"';
      }

      function z(e, t) {
        if (ni.test(e)) {
          var a = w(e);
          return a.filters
            ? "this._applyFilters(" +
                a.expression +
                ",null," +
                JSON.stringify(a.filters) +
                ",false)"
            : "(" + e + ")";
        }
        return t ? e : "(" + e + ")";
      }

      function I(e, t, a, i) {
        H(
          e,
          1,
          function () {
            t.appendChild(e);
          },
          a,
          i
        );
      }

      function A(e, t, a, i) {
        H(
          e,
          1,
          function () {
            F(e, t);
          },
          a,
          i
        );
      }

      function O(e, t, a) {
        H(
          e,
          -1,
          function () {
            G(e);
          },
          t,
          a
        );
      }

      function H(e, t, a, i, s) {
        var n = e.__v_trans;
        if (
          !n ||
          (!n.hooks && !ja) ||
          !i._isCompiled ||
          (i.$parent && !i.$parent._isCompiled)
        )
          return a(), void (s && s());
        var u = t > 0 ? "enter" : "leave";
        n[u](a, s);
      }

      function U(e) {
        if ("string" == typeof e) {
          e = document.querySelector(e);
        }
        return e;
      }

      function R(e) {
        var t = document.documentElement,
          a = e && e.parentNode;
        return (
          t === e || t === a || !(!a || 1 !== a.nodeType || !t.contains(a))
        );
      }

      function P(e, t) {
        var a = e.getAttribute(t);
        return null !== a && e.removeAttribute(t), a;
      }

      function Q(e, t) {
        var a = P(e, ":" + t);
        return null === a && (a = P(e, "v-bind:" + t)), a;
      }

      function W(e, t) {
        return (
          e.hasAttribute(t) ||
          e.hasAttribute(":" + t) ||
          e.hasAttribute("v-bind:" + t)
        );
      }

      function F(e, t) {
        t.parentNode.insertBefore(e, t);
      }

      function B(e, t) {
        t.nextSibling ? F(e, t.nextSibling) : t.parentNode.appendChild(e);
      }

      function G(e) {
        e.parentNode.removeChild(e);
      }

      function Z(e, t) {
        t.firstChild ? F(e, t.firstChild) : t.appendChild(e);
      }

      function J(e, t) {
        var a = e.parentNode;
        a && a.replaceChild(t, e);
      }

      function V(e, t, a, i) {
        e.addEventListener(t, a, i);
      }

      function X(e, t, a) {
        e.removeEventListener(t, a);
      }

      function q(e, t) {
        !ka || e instanceof SVGElement
          ? e.setAttribute("class", t)
          : (e.className = t);
      }

      function K(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          var a = " " + (e.getAttribute("class") || "") + " ";
          a.indexOf(" " + t + " ") < 0 && q(e, (a + t).trim());
        }
      }

      function $(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          for (
            var a = " " + (e.getAttribute("class") || "") + " ",
              i = " " + t + " ";
            a.indexOf(i) >= 0;

          )
            a = a.replace(i, " ");
          q(e, a.trim());
        }
        e.className || e.removeAttribute("class");
      }

      function ee(e, t) {
        var a, i;
        if (
          (ie(e) && e.content instanceof DocumentFragment && (e = e.content),
          e.hasChildNodes())
        )
          for (
            te(e),
              i = t
                ? document.createDocumentFragment()
                : document.createElement("div");
            (a = e.firstChild);

          )
            i.appendChild(a);
        return i;
      }

      function te(e) {
        for (var t; (t = e.firstChild), ae(t); ) e.removeChild(t);
        for (; (t = e.lastChild), ae(t); ) e.removeChild(t);
      }

      function ae(e) {
        return e && ((3 === e.nodeType && !e.data.trim()) || 8 === e.nodeType);
      }

      function ie(e) {
        return e.tagName && "template" === e.tagName.toLowerCase();
      }

      function se(e, t) {
        var a = oi.debug
          ? document.createComment(e)
          : document.createTextNode(t ? " " : "");
        return (a.__vue_anchor = !0), a;
      }

      function ne(e) {
        if (e.hasAttributes())
          for (var t = e.attributes, a = 0, i = t.length; i > a; a++) {
            var s = t[a].name;
            if (pi.test(s)) return p(s.replace(pi, ""));
          }
      }

      function ue(e, t, a) {
        for (var i; e !== t; ) (i = e.nextSibling), a(e), (e = i);
        a(t);
      }

      function re(e, t, a, i, s) {
        function n() {
          if ((r++, u && r >= l.length)) {
            for (var e = 0; e < l.length; e++) i.appendChild(l[e]);
            s && s();
          }
        }
        var u = !1,
          r = 0,
          l = [];
        ue(e, t, function (e) {
          e === t && (u = !0), l.push(e), O(e, a, n);
        });
      }

      function le(e, t) {
        var a = e.tagName.toLowerCase(),
          i = e.hasAttributes();
        if (Ti.test(a) || ci.test(a)) {
          if (i) return oe(e);
        } else {
          if (fe(t, "components", a))
            return {
              id: a,
            };
          var s = i && oe(e);
          if (s) return s;
        }
      }

      function oe(e) {
        var t = P(e, "is");
        return null != t
          ? {
              id: t,
            }
          : ((t = Q(e, "is")),
            null != t
              ? {
                  id: t,
                  dynamic: !0,
                }
              : void 0);
      }

      function me(e, t, a) {
        var i = t.path;
        (a = Te(t, a)), (e[i] = e._data[i] = pe(t, a) ? a : void 0);
      }

      function pe(e, t) {
        if (null === e.raw && !e.required) return !0;
        var a,
          i = e.options,
          s = i.type,
          n = !0;
        if (
          (s &&
            (s === String
              ? ((a = "string"), (n = typeof t === a))
              : s === Number
              ? ((a = "number"), (n = "number" == typeof t))
              : s === Boolean
              ? ((a = "boolean"), (n = "boolean" == typeof t))
              : s === Function
              ? ((a = "function"), (n = "function" == typeof t))
              : s === Object
              ? ((a = "object"), (n = f(t)))
              : s === Array
              ? ((a = "array"), (n = Ea(t)))
              : (n = t instanceof s)),
          !n)
        )
          return !1;
        var u = i.validator;
        return u && !u.call(null, t) ? !1 : !0;
      }

      function Te(e, t) {
        var a = e.options.coerce;
        return a ? a(t) : t;
      }

      function ce(e, t) {
        var i, n, u;
        for (i in t)
          (n = e[i]),
            (u = t[i]),
            s(e, i) ? y(n) && y(u) && ce(n, u) : a(e, i, u);
        return e;
      }

      function de(e, t) {
        var a = Object.create(e);
        return t ? v(a, ve(t)) : a;
      }

      function Se(e) {
        if (e.components)
          for (
            var t,
              a = (e.components = ve(e.components)),
              i = Object.keys(a),
              s = 0,
              n = i.length;
            n > s;
            s++
          ) {
            var u = i[s];
            Ti.test(u) ||
              ci.test(u) ||
              ((t = a[u]), f(t) && (a[u] = Ta.extend(t)));
          }
      }

      function he(e) {
        var t,
          a,
          i = e.props;
        if (Ea(i))
          for (e.props = {}, t = i.length; t--; )
            (a = i[t]),
              "string" == typeof a
                ? (e.props[a] = null)
                : a.name && (e.props[a.name] = a);
        else if (f(i)) {
          var s = Object.keys(i);
          for (t = s.length; t--; )
            (a = i[s[t]]),
              "function" == typeof a &&
                (i[s[t]] = {
                  type: a,
                });
        }
      }

      function ve(e) {
        if (Ea(e)) {
          for (var t, a = {}, i = e.length; i--; ) {
            t = e[i];
            var s =
              "function" == typeof t
                ? (t.options && t.options.name) || t.id
                : t.name || t.id;
            s && (a[s] = t);
          }
          return a;
        }
        return e;
      }

      function ye(e, t, a) {
        function i(i) {
          var s = di[i] || Si;
          u[i] = s(e[i], t[i], a, i);
        }
        Se(t), he(t);
        var n,
          u = {};
        if (t.mixins)
          for (var r = 0, l = t.mixins.length; l > r; r++)
            e = ye(e, t.mixins[r], a);
        for (n in e) i(n);
        for (n in t) s(e, n) || i(n);
        return u;
      }

      function fe(e, t, a) {
        if ("string" == typeof a) {
          var i,
            s = e[t];
          return (
            s[a] || s[(i = p(a))] || s[i.charAt(0).toUpperCase() + i.slice(1)]
          );
        }
      }

      function _e(e, t, a) {}

      function xe() {
        (this.id = yi++), (this.subs = []);
      }

      function Me(e) {
        if (
          ((this.value = e), (this.dep = new xe()), _(e, "__ob__", this), Ea(e))
        ) {
          var t = Da ? ge : Ce;
          t(e, vi, fi), this.observeArray(e);
        } else this.walk(e);
      }

      function ge(e, t) {
        e.__proto__ = t;
      }

      function Ce(e, t, a) {
        for (var i = 0, s = a.length; s > i; i++) {
          var n = a[i];
          _(e, n, t[n]);
        }
      }

      function Ee(e, t) {
        if (e && "object" == typeof e) {
          var a;
          return (
            s(e, "__ob__") && e.__ob__ instanceof Me
              ? (a = e.__ob__)
              : (Ea(e) || f(e)) &&
                Object.isExtensible(e) &&
                !e._isVue &&
                (a = new Me(e)),
            a && t && a.addVm(t),
            a
          );
        }
      }

      function De(e, t, a) {
        var i,
          s,
          n = new xe();
        if (oi.convertAllProperties) {
          var u = Object.getOwnPropertyDescriptor(e, t);
          if (u && u.configurable === !1) return;
          (i = u && u.get), (s = u && u.set);
        }
        var r = Ee(a);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var t = i ? i.call(e) : a;
            if (xe.target && (n.depend(), r && r.dep.depend(), Ea(t)))
              for (var s, u = 0, l = t.length; l > u; u++)
                (s = t[u]), s && s.__ob__ && s.__ob__.dep.depend();
            return t;
          },
          set: function (t) {
            var u = i ? i.call(e) : a;
            t !== u && (s ? s.call(e, t) : (a = t), (r = Ee(t)), n.notify());
          },
        });
      }

      function Le(e) {
        e.prototype._init = function (e) {
          (e = e || {}),
            (this.$el = null),
            (this.$parent = e.parent),
            (this.$root = this.$parent ? this.$parent.$root : this),
            (this.$children = []),
            (this.$refs = {}),
            (this.$els = {}),
            (this._watchers = []),
            (this._directives = []),
            (this._uid = xi++),
            (this._isVue = !0),
            (this._events = {}),
            (this._eventsCount = {}),
            (this._isFragment = !1),
            (this._fragment = this._fragmentStart = this._fragmentEnd = null),
            (this._isCompiled =
              this._isDestroyed =
              this._isReady =
              this._isAttached =
              this._isBeingDestroyed =
              this._vForRemoving =
                !1),
            (this._unlinkFn = null),
            (this._context = e._context || this.$parent),
            (this._scope = e._scope),
            (this._frag = e._frag),
            this._frag && this._frag.children.push(this),
            this.$parent && this.$parent.$children.push(this),
            (e = this.$options = ye(this.constructor.options, e, this)),
            this._updateRef(),
            (this._data = {}),
            this._callHook("init"),
            this._initState(),
            this._initEvents(),
            this._callHook("created"),
            e.el && this.$mount(e.el);
        };
      }

      function we(e) {
        if (void 0 === e) return "eof";
        var t = e.charCodeAt(0);
        switch (t) {
          case 91:
          case 93:
          case 46:
          case 34:
          case 39:
          case 48:
            return e;
          case 95:
          case 36:
            return "ident";
          case 32:
          case 9:
          case 10:
          case 13:
          case 160:
          case 65279:
          case 8232:
          case 8233:
            return "ws";
        }
        return (t >= 97 && 122 >= t) || (t >= 65 && 90 >= t)
          ? "ident"
          : t >= 49 && 57 >= t
          ? "number"
          : "else";
      }

      function ke(e) {
        var t = e.trim();
        return "0" === e.charAt(0) && isNaN(e) ? !1 : n(t) ? m(t) : "*" + t;
      }

      function Ne(e) {
        function t() {
          var t = e[m + 1];
          return (p === ji && "'" === t) || (p === bi && '"' === t)
            ? (m++, (i = "\\" + t), c[gi](), !0)
            : void 0;
        }
        var a,
          i,
          s,
          n,
          u,
          r,
          l,
          o = [],
          m = -1,
          p = Li,
          T = 0,
          c = [];
        for (
          c[Ci] = function () {
            void 0 !== s && (o.push(s), (s = void 0));
          },
            c[gi] = function () {
              void 0 === s ? (s = i) : (s += i);
            },
            c[Ei] = function () {
              c[gi](), T++;
            },
            c[Di] = function () {
              if (T > 0) T--, (p = Yi), c[gi]();
              else {
                if (((T = 0), (s = ke(s)), s === !1)) return !1;
                c[Ci]();
              }
            };
          null != p;

        )
          if ((m++, (a = e[m]), "\\" !== a || !t())) {
            if (
              ((n = we(a)),
              (l = Ai[p]),
              (u = l[n] || l["else"] || Ii),
              u === Ii)
            )
              return;
            if (
              ((p = u[0]),
              (r = c[u[1]]),
              r && ((i = u[2]), (i = void 0 === i ? a : i), r() === !1))
            )
              return;
            if (p === zi) return (o.raw = e), o;
          }
      }

      function Ye(e) {
        var t = Mi.get(e);
        return t || ((t = Ne(e)), t && Mi.put(e, t)), t;
      }

      function je(e, t) {
        return Re(t).get(e);
      }

      function be(e, t, i) {
        var s = e;
        if (("string" == typeof t && (t = Ne(t)), !t || !y(e))) return !1;
        for (var n, u, r = 0, l = t.length; l > r; r++)
          (n = e),
            (u = t[r]),
            "*" === u.charAt(0) && (u = Re(u.slice(1)).get.call(s, s)),
            l - 1 > r
              ? ((e = e[u]), y(e) || ((e = {}), a(n, u, e)))
              : Ea(e)
              ? e.$set(u, i)
              : u in e
              ? (e[u] = i)
              : a(e, u, i);
        return !0;
      }

      function ze(e, t) {
        var a = Xi.length;
        return (Xi[a] = t ? e.replace(Fi, "\\n") : e), '"' + a + '"';
      }

      function Ie(e) {
        var t = e.charAt(0),
          a = e.slice(1);
        return Ri.test(a)
          ? e
          : ((a = a.indexOf('"') > -1 ? a.replace(Gi, Ae) : a),
            t + "scope." + a);
      }

      function Ae(e, t) {
        return Xi[t];
      }

      function Oe(e) {
        Qi.test(e), (Xi.length = 0);
        var t = e.replace(Bi, ze).replace(Wi, "");
        return (t = (" " + t).replace(Ji, Ie).replace(Gi, Ae)), He(t);
      }

      function He(e) {
        try {
          return new Function("scope", "return " + e + ";");
        } catch (t) {}
      }

      function Ue(e) {
        var t = Ye(e);
        return t
          ? function (e, a) {
              be(e, t, a);
            }
          : void 0;
      }

      function Re(e, t) {
        e = e.trim();
        var a = Hi.get(e);
        if (a) return t && !a.set && (a.set = Ue(a.exp)), a;
        var i = {
          exp: e,
        };
        return (
          (i.get = Pe(e) && e.indexOf("[") < 0 ? He("scope." + e) : Oe(e)),
          t && (i.set = Ue(e)),
          Hi.put(e, i),
          i
        );
      }

      function Pe(e) {
        return Zi.test(e) && !Vi.test(e) && "Math." !== e.slice(0, 5);
      }

      function Qe() {
        (Ki = []), ($i = []), (es = {}), (ts = {}), (as = is = !1);
      }

      function We() {
        Fe(Ki), (is = !0), Fe($i), wa && wa.emit("flush"), Qe();
      }

      function Fe(e) {
        for (var t = 0; t < e.length; t++) {
          var a = e[t],
            i = a.id;
          (es[i] = null), a.run();
        }
      }

      function Be(e) {
        var t = e.id;
        if (null == es[t]) {
          if (is && !e.user) return void e.run();
          var a = e.user ? $i : Ki;
          (es[t] = a.length), a.push(e), as || ((as = !0), Oa(We));
        }
      }

      function Ge(e, t, a, i) {
        i && v(this, i);
        var s = "function" == typeof t;
        if (
          ((this.vm = e),
          e._watchers.push(this),
          (this.expression = s ? t.toString() : t),
          (this.cb = a),
          (this.id = ++ss),
          (this.active = !0),
          (this.dirty = this.lazy),
          (this.deps = Object.create(null)),
          (this.newDeps = null),
          (this.prevError = null),
          s)
        )
          (this.getter = t), (this.setter = void 0);
        else {
          var n = Re(t, this.twoWay);
          (this.getter = n.get), (this.setter = n.set);
        }
        (this.value = this.lazy ? void 0 : this.get()),
          (this.queued = this.shallow = !1);
      }

      function Ze(e) {
        var t, a;
        if (Ea(e)) for (t = e.length; t--; ) Ze(e[t]);
        else if (y(e))
          for (a = Object.keys(e), t = a.length; t--; ) Ze(e[a[t]]);
      }

      function Je(e) {
        if (xs[e]) return xs[e];
        var t = Ve(e);
        return (xs[e] = xs[t] = t), t;
      }

      function Ve(e) {
        e = c(e);
        var t = p(e),
          a = t.charAt(0).toUpperCase() + t.slice(1);
        Ms || (Ms = document.createElement("div"));
        for (var i, s = ys.length; s--; )
          if (((i = fs[s] + a), i in Ms.style)) return ys[s] + e;
        return t in Ms.style ? e : void 0;
      }

      function Xe(e, t) {
        var a = t.map(function (e) {
          var t = e.charCodeAt(0);
          return t > 47 && 58 > t
            ? parseInt(e, 10)
            : 1 === e.length &&
              ((t = e.toUpperCase().charCodeAt(0)), t > 64 && 91 > t)
            ? t
            : Ns[e];
        });
        return (
          (a = [].concat.apply([], a)),
          function (t) {
            return a.indexOf(t.keyCode) > -1 ? e.call(this, t) : void 0;
          }
        );
      }

      function qe(e) {
        return function (t) {
          return t.stopPropagation(), e.call(this, t);
        };
      }

      function Ke(e) {
        return function (t) {
          return t.preventDefault(), e.call(this, t);
        };
      }

      function $e(e) {
        return function (t) {
          return t.target === t.currentTarget ? e.call(this, t) : void 0;
        };
      }

      function et(e, t, a) {
        for (
          var i, s, n, u = t ? [] : null, r = 0, l = e.options.length;
          l > r;
          r++
        )
          if (
            ((i = e.options[r]),
            (n = a ? i.hasAttribute("selected") : i.selected))
          ) {
            if (((s = i.hasOwnProperty("_value") ? i._value : i.value), !t))
              return s;
            u.push(s);
          }
        return u;
      }

      function tt(e, t) {
        for (var a = e.length; a--; ) if (C(e[a], t)) return a;
        return -1;
      }

      function at(e) {
        return ie(e) && e.content instanceof DocumentFragment;
      }

      function it(e, t) {
        var a = t ? e : e.trim(),
          i = Us.get(a);
        if (i) return i;
        var s = document.createDocumentFragment(),
          n = e.match(Qs),
          u = Ws.test(e);
        if (n || u) {
          var r = n && n[1],
            l = Ps[r] || Ps.efault,
            o = l[0],
            m = l[1],
            p = l[2],
            T = document.createElement("div");
          for (T.innerHTML = m + e + p; o--; ) T = T.lastChild;
          for (var c; (c = T.firstChild); ) s.appendChild(c);
        } else s.appendChild(document.createTextNode(e));
        return t || te(s), Us.put(a, s), s;
      }

      function st(e) {
        if (at(e)) return te(e.content), e.content;
        if ("SCRIPT" === e.tagName) return it(e.textContent);
        for (
          var t, a = nt(e), i = document.createDocumentFragment();
          (t = a.firstChild);

        )
          i.appendChild(t);
        return te(i), i;
      }

      function nt(e) {
        if (!e.querySelectorAll) return e.cloneNode();
        var t,
          a,
          i,
          s = e.cloneNode(!0);
        if (Fs) {
          var n = s;
          if (
            (at(e) && ((e = e.content), (n = s.content)),
            (a = e.querySelectorAll("template")),
            a.length)
          )
            for (i = n.querySelectorAll("template"), t = i.length; t--; )
              i[t].parentNode.replaceChild(nt(a[t]), i[t]);
        }
        if (Bs)
          if ("TEXTAREA" === e.tagName) s.value = e.value;
          else if (((a = e.querySelectorAll("textarea")), a.length))
            for (i = s.querySelectorAll("textarea"), t = i.length; t--; )
              i[t].value = a[t].value;
        return s;
      }

      function ut(e, t, a) {
        var i, s;
        return e instanceof DocumentFragment
          ? (te(e), t ? nt(e) : e)
          : ("string" == typeof e
              ? a || "#" !== e.charAt(0)
                ? (s = it(e, a))
                : ((s = Rs.get(e)),
                  s ||
                    ((i = document.getElementById(e.slice(1))),
                    i && ((s = st(i)), Rs.put(e, s))))
              : e.nodeType && (s = st(e)),
            s && t ? nt(s) : s);
      }

      function rt(e, t, a, i, s, n) {
        (this.children = []),
          (this.childFrags = []),
          (this.vm = t),
          (this.scope = s),
          (this.inserted = !1),
          (this.parentFrag = n),
          n && n.childFrags.push(this),
          (this.unlink = e(t, a, i, s, this));
        var u = (this.single =
          1 === a.childNodes.length && !a.childNodes[0].__vue_anchor);
        u
          ? ((this.node = a.childNodes[0]),
            (this.before = lt),
            (this.remove = ot))
          : ((this.node = se("fragment-start")),
            (this.end = se("fragment-end")),
            (this.frag = a),
            Z(this.node, a),
            a.appendChild(this.end),
            (this.before = mt),
            (this.remove = pt)),
          (this.node.__vfrag__ = this);
      }

      function lt(e, t) {
        this.inserted = !0;
        var a = t !== !1 ? A : F;
        a(this.node, e, this.vm), R(this.node) && this.callHook(Tt);
      }

      function ot() {
        this.inserted = !1;
        var e = R(this.node),
          t = this;
        this.beforeRemove(),
          O(this.node, this.vm, function () {
            e && t.callHook(ct), t.destroy();
          });
      }

      function mt(e, t) {
        this.inserted = !0;
        var a = this.vm,
          i = t !== !1 ? A : F;
        ue(this.node, this.end, function (t) {
          i(t, e, a);
        }),
          R(this.node) && this.callHook(Tt);
      }

      function pt() {
        this.inserted = !1;
        var e = this,
          t = R(this.node);
        this.beforeRemove(),
          re(this.node, this.end, this.vm, this.frag, function () {
            t && e.callHook(ct), e.destroy();
          });
      }

      function Tt(e) {
        e._isAttached || e._callHook("attached");
      }

      function ct(e) {
        e._isAttached && e._callHook("detached");
      }

      function dt(e, t) {
        this.vm = e;
        var a,
          i = "string" == typeof t;
        i || ie(t)
          ? (a = ut(t, !0))
          : ((a = document.createDocumentFragment()), a.appendChild(t)),
          (this.template = a);
        var s,
          n = e.constructor.cid;
        if (n > 0) {
          var u = n + (i ? t : t.outerHTML);
          (s = Zs.get(u)), s || ((s = Lt(a, e.$options, !0)), Zs.put(u, s));
        } else s = Lt(a, e.$options, !0);
        this.linker = s;
      }

      function St(e, t, a) {
        var i = e.node.previousSibling;
        if (i) {
          for (
            e = i.__vfrag__;
            !((e && e.forId === a && e.inserted) || i === t);

          ) {
            if (((i = i.previousSibling), !i)) return;
            e = i.__vfrag__;
          }
          return e;
        }
      }

      function ht(e) {
        var t = e.node;
        if (e.end)
          for (; !t.__vue__ && t !== e.end && t.nextSibling; )
            t = t.nextSibling;
        return t.__vue__;
      }

      function vt(e) {
        for (var t = -1, a = new Array(Math.floor(e)); ++t < e; ) a[t] = t;
        return a;
      }

      function yt(e) {
        en.push(e), tn || ((tn = !0), Oa(ft));
      }

      function ft() {
        for (
          var e = document.documentElement.offsetHeight, t = 0;
          t < en.length;
          t++
        )
          en[t]();
        return (en = []), (tn = !1), e;
      }

      function _t(e, t, a, i) {
        (this.id = t),
          (this.el = e),
          (this.enterClass = (a && a.enterClass) || t + "-enter"),
          (this.leaveClass = (a && a.leaveClass) || t + "-leave"),
          (this.hooks = a),
          (this.vm = i),
          (this.pendingCssEvent =
            this.pendingCssCb =
            this.cancel =
            this.pendingJsCb =
            this.op =
            this.cb =
              null),
          (this.justEntered = !1),
          (this.entered = this.left = !1),
          (this.typeCache = {}),
          (this.type = a && a.type);
        var s = this;
        ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(
          function (e) {
            s[e] = S(s[e], s);
          }
        );
      }

      function xt(e) {
        return !(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }

      function Mt(e) {
        for (var t = {}, a = e.trim().split(/\s+/), i = a.length; i--; )
          t[a[i]] = !0;
        return t;
      }

      function gt(e, t) {
        return Ea(e) ? e.indexOf(t) > -1 : s(e, t);
      }

      function Ct(e, t) {
        for (
          var a, i, s, u, r, l, o, m = [], T = Object.keys(t), d = T.length;
          d--;

        )
          (i = T[d]),
            (a = t[i] || Sn),
            (r = p(i)),
            hn.test(r) &&
              ((o = {
                name: i,
                path: r,
                options: a,
                mode: dn.ONE_WAY,
                raw: null,
              }),
              (s = c(i)),
              null === (u = Q(e, s)) &&
                (null !== (u = Q(e, s + ".sync"))
                  ? (o.mode = dn.TWO_WAY)
                  : null !== (u = Q(e, s + ".once")) && (o.mode = dn.ONE_TIME)),
              null !== u
                ? ((o.raw = u),
                  (l = w(u)),
                  (u = l.expression),
                  (o.filters = l.filters),
                  n(u) && !l.filters
                    ? (o.optimizedLiteral = !0)
                    : (o.dynamic = !0),
                  (o.parentPath = u))
                : null !== (u = P(e, s))
                ? (o.raw = u)
                : a.required,
              m.push(o));
        return Et(m);
      }

      function Et(e) {
        return function (t, a) {
          t._props = {};
          for (var i, s, n, u, r, p = e.length; p--; )
            if (
              ((i = e[p]),
              (r = i.raw),
              (s = i.path),
              (n = i.options),
              (t._props[s] = i),
              null === r)
            )
              me(t, i, Dt(t, n));
            else if (i.dynamic)
              t._context &&
                (i.mode === dn.ONE_TIME
                  ? ((u = (a || t._context).$get(i.parentPath)), me(t, i, u))
                  : t._bindDir(
                      {
                        name: "prop",
                        def: mn,
                        prop: i,
                      },
                      null,
                      null,
                      a
                    ));
            else if (i.optimizedLiteral) {
              var T = m(r);
              (u = T === r ? o(l(r)) : T), me(t, i, u);
            } else (u = n.type === Boolean && "" === r ? !0 : r), me(t, i, u);
        };
      }

      function Dt(e, t) {
        if (!s(t, "default")) return t.type === Boolean ? !1 : void 0;
        var a = t["default"];
        return (
          y(a), "function" == typeof a && t.type !== Function ? a.call(e) : a
        );
      }

      function Lt(e, t, a) {
        var i = a || !t._asComponent ? zt(e, t) : null,
          s =
            (i && i.terminal) || "SCRIPT" === e.tagName || !e.hasChildNodes()
              ? null
              : Rt(e.childNodes, t);
        return function (e, t, a, n, u) {
          var r = h(t.childNodes),
            l = wt(function () {
              i && i(e, t, a, n, u), s && s(e, r, a, n, u);
            }, e);
          return Nt(e, l);
        };
      }

      function wt(e, t) {
        t._directives = [];
        var a = t._directives.length;
        e();
        var i = t._directives.slice(a);
        i.sort(kt);
        for (var s = 0, n = i.length; n > s; s++) i[s]._bind();
        return i;
      }

      function kt(e, t) {
        return (
          (e = e.descriptor.def.priority || gn),
          (t = t.descriptor.def.priority || gn),
          e > t ? -1 : e === t ? 0 : 1
        );
      }

      function Nt(e, t, a, i) {
        function s(s) {
          Yt(e, t, s), a && i && Yt(a, i);
        }
        return (s.dirs = t), s;
      }

      function Yt(e, t, a) {
        for (var i = t.length; i--; ) t[i]._teardown();
      }

      function jt(e, t, a, i) {
        var s = Ct(t, a),
          n = wt(function () {
            s(e, i);
          }, e);
        return Nt(e, n);
      }

      function bt(e, t, a) {
        var i,
          s,
          n = t._containerAttrs,
          u = t._replacerAttrs;
        if (11 !== e.nodeType)
          t._asComponent
            ? (n && a && (i = Zt(n, a)), u && (s = Zt(u, t)))
            : (s = Zt(e.attributes, t));
        else;
        return (
          (t._containerAttrs = t._replacerAttrs = null),
          function (e, t, a) {
            var n,
              u = e._context;
            u &&
              i &&
              (n = wt(function () {
                i(u, t, null, a);
              }, u));
            var r = wt(function () {
              s && s(e, t);
            }, e);
            return Nt(e, r, u, n);
          }
        );
      }

      function zt(e, t) {
        var a = e.nodeType;
        return 1 === a && "SCRIPT" !== e.tagName
          ? It(e, t)
          : 3 === a && e.data.trim()
          ? At(e, t)
          : null;
      }

      function It(e, t) {
        if ("TEXTAREA" === e.tagName) {
          var a = Y(e.value);
          a && (e.setAttribute(":value", j(a)), (e.value = ""));
        }
        var i,
          s = e.hasAttributes();
        return (
          s && (i = Ft(e, t)),
          i || (i = Qt(e, t)),
          i || (i = Wt(e, t)),
          !i && s && (i = Zt(e.attributes, t)),
          i
        );
      }

      function At(e, t) {
        if (e._skip) return Ot;
        var a = Y(e.wholeText);
        if (!a) return null;
        for (var i = e.nextSibling; i && 3 === i.nodeType; )
          (i._skip = !0), (i = i.nextSibling);
        for (
          var s, n, u = document.createDocumentFragment(), r = 0, l = a.length;
          l > r;
          r++
        )
          (n = a[r]),
            (s = n.tag ? Ht(n, t) : document.createTextNode(n.value)),
            u.appendChild(s);
        return Ut(a, u, t);
      }

      function Ot(e, t) {
        G(t);
      }

      function Ht(e, t) {
        function a(t) {
          if (!e.descriptor) {
            var a = w(e.value);
            e.descriptor = {
              name: t,
              def: $s[t],
              expression: a.expression,
              filters: a.filters,
            };
          }
        }
        var i;
        return (
          e.oneTime
            ? (i = document.createTextNode(e.value))
            : e.html
            ? ((i = document.createComment("v-html")), a("html"))
            : ((i = document.createTextNode(" ")), a("text")),
          i
        );
      }

      function Ut(e, t) {
        return function (a, i, s, n) {
          for (
            var u,
              r,
              l,
              o = t.cloneNode(!0),
              m = h(o.childNodes),
              p = 0,
              T = e.length;
            T > p;
            p++
          )
            (u = e[p]),
              (r = u.value),
              u.tag &&
                ((l = m[p]),
                u.oneTime
                  ? ((r = (n || a).$eval(r)),
                    u.html ? J(l, ut(r, !0)) : (l.data = r))
                  : a._bindDir(u.descriptor, l, s, n));
          J(i, o);
        };
      }

      function Rt(e, t) {
        for (var a, i, s, n = [], u = 0, r = e.length; r > u; u++)
          (s = e[u]),
            (a = zt(s, t)),
            (i =
              (a && a.terminal) || "SCRIPT" === s.tagName || !s.hasChildNodes()
                ? null
                : Rt(s.childNodes, t)),
            n.push(a, i);
        return n.length ? Pt(n) : null;
      }

      function Pt(e) {
        return function (t, a, i, s, n) {
          for (var u, r, l, o = 0, m = 0, p = e.length; p > o; m++) {
            (u = a[m]), (r = e[o++]), (l = e[o++]);
            var T = h(u.childNodes);
            r && r(t, u, i, s, n), l && l(t, T, i, s, n);
          }
        };
      }

      function Qt(e, t) {
        var a = e.tagName.toLowerCase();
        if (!Ti.test(a)) {
          "slot" === a && W(e, "name") && (a = "_namedSlot");
          var i = fe(t, "elementDirectives", a);
          return i ? Gt(e, a, "", t, i) : void 0;
        }
      }

      function Wt(e, t) {
        var a = le(e, t);
        if (a) {
          var i = ne(e),
            s = {
              name: "component",
              ref: i,
              expression: a.id,
              def: cn.component,
              modifiers: {
                literal: !a.dynamic,
              },
            },
            n = function (e, t, a, n, u) {
              i && De((n || e).$refs, i, null), e._bindDir(s, t, a, n, u);
            };
          return (n.terminal = !0), n;
        }
      }

      function Ft(e, t) {
        if (null !== P(e, "v-pre")) return Bt;
        if (e.hasAttribute("v-else")) {
          var a = e.previousElementSibling;
          if (a && a.hasAttribute("v-if")) return Bt;
        }
        for (var i, s, n = 0, u = Mn.length; u > n; n++)
          if (((s = Mn[n]), (i = e.getAttribute("v-" + s)), null != i))
            return Gt(e, s, i, t);
      }

      function Bt() {}

      function Gt(e, t, a, i, s) {
        var n = w(a),
          u = {
            name: t,
            expression: n.expression,
            filters: n.filters,
            raw: a,
            def: s || $s[t],
          };
        ("for" === t || "router-view" === t) && (u.ref = ne(e));
        var r = function (e, t, a, i, s) {
          u.ref && De((i || e).$refs, u.ref, null), e._bindDir(u, t, a, i, s);
        };
        return (r.terminal = !0), r;
      }

      function Zt(e, t) {
        function a(e, t, a) {
          var i = a && Xt(a),
            s = !i && w(n);
          S.push({
            name: e,
            attr: u,
            raw: r,
            def: t,
            arg: o,
            modifiers: m,
            expression: s && s.expression,
            filters: s && s.filters,
            interp: a,
            hasOneTime: i,
          });
        }
        for (var i, s, n, u, r, l, o, m, p, T, c, d = e.length, S = []; d--; )
          if (
            ((i = e[d]),
            (s = u = i.name),
            (n = r = i.value),
            (T = Y(n)),
            (o = null),
            (m = Jt(s)),
            (s = s.replace(_n, "")),
            T)
          )
            (n = j(T)), (o = s), a("bind", $s.bind, T);
          else if (xn.test(s))
            (m.literal = !vn.test(s)), a("transition", cn.transition);
          else if (yn.test(s)) (o = s.replace(yn, "")), a("on", $s.on);
          else if (vn.test(s))
            (l = s.replace(vn, "")),
              "style" === l || "class" === l
                ? a(l, cn[l])
                : ((o = l), a("bind", $s.bind));
          else if ((c = s.match(fn))) {
            if (((l = c[1]), (o = c[2]), "else" === l)) continue;
            (p = fe(t, "directives", l)), p && a(l, p);
          }
        return S.length ? Vt(S) : void 0;
      }

      function Jt(e) {
        var t = Object.create(null),
          a = e.match(_n);
        if (a) for (var i = a.length; i--; ) t[a[i].slice(1)] = !0;
        return t;
      }

      function Vt(e) {
        return function (t, a, i, s, n) {
          for (var u = e.length; u--; ) t._bindDir(e[u], a, i, s, n);
        };
      }

      function Xt(e) {
        for (var t = e.length; t--; ) if (e[t].oneTime) return !0;
      }

      function qt(e, t) {
        return (
          t && (t._containerAttrs = $t(e)),
          ie(e) && (e = ut(e)),
          t &&
            (t._asComponent && !t.template && (t.template = "<slot></slot>"),
            t.template && ((t._content = ee(e)), (e = Kt(e, t)))),
          e instanceof DocumentFragment &&
            (Z(se("v-start", !0), e), e.appendChild(se("v-end", !0))),
          e
        );
      }

      function Kt(e, t) {
        var a = t.template,
          i = ut(a, !0);
        if (i) {
          var s = i.firstChild,
            n = s.tagName && s.tagName.toLowerCase();
          return t.replace
            ? (e === document.body,
              i.childNodes.length > 1 ||
              1 !== s.nodeType ||
              "component" === n ||
              fe(t, "components", n) ||
              W(s, "is") ||
              fe(t, "elementDirectives", n) ||
              s.hasAttribute("v-for") ||
              s.hasAttribute("v-if")
                ? i
                : ((t._replacerAttrs = $t(s)), ea(e, s), s))
            : (e.appendChild(i), e);
        }
      }

      function $t(e) {
        return 1 === e.nodeType && e.hasAttributes() ? h(e.attributes) : void 0;
      }

      function ea(e, t) {
        for (var a, i, s = e.attributes, n = s.length; n--; )
          (a = s[n].name),
            (i = s[n].value),
            t.hasAttribute(a) || Cn.test(a)
              ? "class" !== a ||
                Y(i) ||
                i.split(/\s+/).forEach(function (e) {
                  K(t, e);
                })
              : t.setAttribute(a, i);
      }

      function ta(e) {
        function t() {}

        function i(e, t) {
          var a = new Ge(t, e, null, {
            lazy: !0,
          });
          return function () {
            return a.dirty && a.evaluate(), xe.target && a.depend(), a.value;
          };
        }
        Object.defineProperty(e.prototype, "$data", {
          get: function () {
            return this._data;
          },
          set: function (e) {
            e !== this._data && this._setData(e);
          },
        }),
          (e.prototype._initState = function () {
            this._initProps(),
              this._initMeta(),
              this._initMethods(),
              this._initData(),
              this._initComputed();
          }),
          (e.prototype._initProps = function () {
            var e = this.$options,
              t = e.el,
              a = e.props;
            (t = e.el = U(t)),
              (this._propsUnlinkFn =
                t && 1 === t.nodeType && a
                  ? jt(this, t, a, this._scope)
                  : null);
          }),
          (e.prototype._initData = function () {
            var e = this._data,
              t = this.$options.data,
              i = t && t();
            if (i) {
              this._data = i;
              for (var n in e)
                (null === this._props[n].raw && s(i, n)) || a(i, n, e[n]);
            }
            var u,
              r,
              l = this._data,
              o = Object.keys(l);
            for (u = o.length; u--; ) (r = o[u]), this._proxy(r);
            Ee(l, this);
          }),
          (e.prototype._setData = function (e) {
            e = e || {};
            var t = this._data;
            this._data = e;
            var a, i, n;
            for (a = Object.keys(t), n = a.length; n--; )
              (i = a[n]), i in e || this._unproxy(i);
            for (a = Object.keys(e), n = a.length; n--; )
              (i = a[n]), s(this, i) || this._proxy(i);
            t.__ob__.removeVm(this), Ee(e, this), this._digest();
          }),
          (e.prototype._proxy = function (e) {
            if (!u(e)) {
              var t = this;
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return t._data[e];
                },
                set: function (a) {
                  t._data[e] = a;
                },
              });
            }
          }),
          (e.prototype._unproxy = function (e) {
            u(e) || delete this[e];
          }),
          (e.prototype._digest = function () {
            for (var e = 0, t = this._watchers.length; t > e; e++)
              this._watchers[e].update(!0);
          }),
          (e.prototype._initComputed = function () {
            var e = this.$options.computed;
            if (e)
              for (var a in e) {
                var s = e[a],
                  n = {
                    enumerable: !0,
                    configurable: !0,
                  };
                "function" == typeof s
                  ? ((n.get = i(s, this)), (n.set = t))
                  : ((n.get = s.get
                      ? s.cache !== !1
                        ? i(s.get, this)
                        : S(s.get, this)
                      : t),
                    (n.set = s.set ? S(s.set, this) : t)),
                  Object.defineProperty(this, a, n);
              }
          }),
          (e.prototype._initMethods = function () {
            var e = this.$options.methods;
            if (e) for (var t in e) this[t] = S(e[t], this);
          }),
          (e.prototype._initMeta = function () {
            var e = this.$options._meta;
            if (e) for (var t in e) De(this, t, e[t]);
          });
      }

      function aa(e) {
        function t(e, t) {
          for (var a, i, s = t.attributes, n = 0, u = s.length; u > n; n++)
            (a = s[n].name),
              Dn.test(a) &&
                ((a = a.replace(Dn, "")),
                (i = (e._scope || e._context).$eval(s[n].value, !0)),
                (i._fromParent = !0),
                e.$on(a.replace(Dn), i));
        }

        function a(e, t, a) {
          if (a) {
            var s, n, u, r;
            for (n in a)
              if (((s = a[n]), Ea(s)))
                for (u = 0, r = s.length; r > u; u++) i(e, t, n, s[u]);
              else i(e, t, n, s);
          }
        }

        function i(e, t, a, s, n) {
          var u = typeof s;
          if ("function" === u) e[t](a, s, n);
          else if ("string" === u) {
            var r = e.$options.methods,
              l = r && r[s];
            l && e[t](a, l, n);
          } else s && "object" === u && i(e, t, a, s.handler, s);
        }

        function s() {
          this._isAttached ||
            ((this._isAttached = !0), this.$children.forEach(n));
        }

        function n(e) {
          !e._isAttached && R(e.$el) && e._callHook("attached");
        }

        function u() {
          this._isAttached &&
            ((this._isAttached = !1), this.$children.forEach(r));
        }

        function r(e) {
          e._isAttached && !R(e.$el) && e._callHook("detached");
        }
        (e.prototype._initEvents = function () {
          var e = this.$options;
          e._asComponent && t(this, e.el),
            a(this, "$on", e.events),
            a(this, "$watch", e.watch);
        }),
          (e.prototype._initDOMHooks = function () {
            this.$on("hook:attached", s), this.$on("hook:detached", u);
          }),
          (e.prototype._callHook = function (e) {
            this.$emit("pre-hook:" + e);
            var t = this.$options[e];
            if (t) for (var a = 0, i = t.length; i > a; a++) t[a].call(this);
            this.$emit("hook:" + e);
          });
      }

      function ia() {}

      function sa(e, t, a, i, s, n) {
        (this.vm = t),
          (this.el = a),
          (this.descriptor = e),
          (this.name = e.name),
          (this.expression = e.expression),
          (this.arg = e.arg),
          (this.modifiers = e.modifiers),
          (this.filters = e.filters),
          (this.literal = this.modifiers && this.modifiers.literal),
          (this._locked = !1),
          (this._bound = !1),
          (this._listeners = null),
          (this._host = i),
          (this._scope = s),
          (this._frag = n);
      }

      function na(e) {
        (e.prototype._updateRef = function (e) {
          var t = this.$options._ref;
          if (t) {
            var a = (this._scope || this._context).$refs;
            e ? a[t] === this && (a[t] = null) : (a[t] = this);
          }
        }),
          (e.prototype._compile = function (e) {
            var t = this.$options,
              a = e;
            if (
              ((e = qt(e, t)),
              this._initElement(e),
              1 !== e.nodeType || null === P(e, "v-pre"))
            ) {
              var i,
                s = this._context && this._context.$options,
                n = bt(e, t, s),
                u = this.constructor;
              t._linkerCachable &&
                ((i = u.linker), i || (i = u.linker = Lt(e, t)));
              var r = n(this, e, this._scope),
                l = i ? i(this, e) : Lt(e, t)(this, e);
              (this._unlinkFn = function () {
                r(), l(!0);
              }),
                t.replace && J(a, e),
                (this._isCompiled = !0),
                this._callHook("compiled");
            }
          }),
          (e.prototype._initElement = function (e) {
            e instanceof DocumentFragment
              ? ((this._isFragment = !0),
                (this.$el = this._fragmentStart = e.firstChild),
                (this._fragmentEnd = e.lastChild),
                3 === this._fragmentStart.nodeType &&
                  (this._fragmentStart.data = this._fragmentEnd.data = ""),
                (this._fragment = e))
              : (this.$el = e),
              (this.$el.__vue__ = this),
              this._callHook("beforeCompile");
          }),
          (e.prototype._bindDir = function (e, t, a, i, s) {
            this._directives.push(new sa(e, this, t, a, i, s));
          }),
          (e.prototype._destroy = function (e, t) {
            if (this._isBeingDestroyed) return void (t || this._cleanup());
            var a,
              i,
              s = this,
              n = function () {
                !a || i || t || s._cleanup();
              };
            e &&
              this.$el &&
              ((i = !0),
              this.$remove(function () {
                (i = !1), n();
              })),
              this._callHook("beforeDestroy"),
              (this._isBeingDestroyed = !0);
            var u,
              r = this.$parent;
            for (
              r &&
                !r._isBeingDestroyed &&
                (r.$children.$remove(this), this._updateRef(!0)),
                u = this.$children.length;
              u--;

            )
              this.$children[u].$destroy();
            for (
              this._propsUnlinkFn && this._propsUnlinkFn(),
                this._unlinkFn && this._unlinkFn(),
                u = this._watchers.length;
              u--;

            )
              this._watchers[u].teardown();
            this.$el && (this.$el.__vue__ = null), (a = !0), n();
          }),
          (e.prototype._cleanup = function () {
            this._isDestroyed ||
              (this._frag && this._frag.children.$remove(this),
              this._data.__ob__ && this._data.__ob__.removeVm(this),
              (this.$el =
                this.$parent =
                this.$root =
                this.$children =
                this._watchers =
                this._context =
                this._scope =
                this._directives =
                  null),
              (this._isDestroyed = !0),
              this._callHook("destroyed"),
              this.$off());
          });
      }

      function ua(e) {
        (e.prototype._applyFilters = function (e, t, a, i) {
          var s, n, u, r, l, o, m, p, T;
          for (o = 0, m = a.length; m > o; o++)
            if (
              ((s = a[o]),
              (n = fe(this.$options, "filters", s.name)),
              n && ((n = i ? n.write : n.read || n), "function" == typeof n))
            ) {
              if (((u = i ? [e, t] : [e]), (l = i ? 2 : 1), s.args))
                for (p = 0, T = s.args.length; T > p; p++)
                  (r = s.args[p]),
                    (u[p + l] = r.dynamic ? this.$get(r.value) : r.value);
              e = n.apply(this, u);
            }
          return e;
        }),
          (e.prototype._resolveComponent = function (t, a) {
            var i = fe(this.$options, "components", t);
            if (i)
              if (i.options) a(i);
              else if (i.resolved) a(i.resolved);
              else if (i.requested) i.pendingCallbacks.push(a);
              else {
                i.requested = !0;
                var s = (i.pendingCallbacks = [a]);
                i(
                  function (t) {
                    f(t) && (t = e.extend(t)), (i.resolved = t);
                    for (var a = 0, n = s.length; n > a; a++) s[a](t);
                  },
                  function (e) {}
                );
              }
          });
      }

      function ra(e) {
        function t(e) {
          return new Function(
            "return function " + d(e) + " (options) { this._init(options) }"
          )();
        }
        (e.util = _i),
          (e.config = oi),
          (e.set = a),
          (e["delete"] = i),
          (e.nextTick = Oa),
          (e.compiler = En),
          (e.FragmentFactory = dt),
          (e.internalDirectives = cn),
          (e.parsers = {
            path: Oi,
            text: ui,
            template: Gs,
            directive: ei,
            expression: qi,
          }),
          (e.cid = 0);
        var s = 1;
        (e.extend = function (e) {
          e = e || {};
          var a = this,
            i = 0 === a.cid;
          if (i && e._Ctor) return e._Ctor;
          var n = e.name || a.options.name,
            u = t(n || "VueComponent");
          return (
            (u.prototype = Object.create(a.prototype)),
            (u.prototype.constructor = u),
            (u.cid = s++),
            (u.options = ye(a.options, e)),
            (u["super"] = a),
            (u.extend = a.extend),
            oi._assetTypes.forEach(function (e) {
              u[e] = a[e];
            }),
            n && (u.options.components[n] = u),
            i && (e._Ctor = u),
            u
          );
        }),
          (e.use = function (e) {
            if (!e.installed) {
              var t = h(arguments, 1);
              return (
                t.unshift(this),
                "function" == typeof e.install
                  ? e.install.apply(e, t)
                  : e.apply(null, t),
                (e.installed = !0),
                this
              );
            }
          }),
          (e.mixin = function (t) {
            e.options = ye(e.options, t);
          }),
          oi._assetTypes.forEach(function (t) {
            e[t] = function (a, i) {
              return i
                ? ("component" === t &&
                    f(i) &&
                    ((i.name = a), (i = e.extend(i))),
                  (this.options[t + "s"][a] = i),
                  i)
                : this.options[t + "s"][a];
            };
          });
      }

      function la(e) {
        function t(e) {
          return JSON.parse(JSON.stringify(e));
        }
        (e.prototype.$get = function (e, t) {
          var a = Re(e);
          if (a) {
            if (t && !Pe(e)) {
              var i = this;
              return function () {
                i.$arguments = h(arguments);
                var e = a.get.call(i, i);
                return (i.$arguments = null), e;
              };
            }
            try {
              return a.get.call(this, this);
            } catch (s) {}
          }
        }),
          (e.prototype.$set = function (e, t) {
            var a = Re(e, !0);
            a && a.set && a.set.call(this, this, t);
          }),
          (e.prototype.$delete = function (e) {
            i(this._data, e);
          }),
          (e.prototype.$watch = function (e, t, a) {
            var i,
              s = this;
            "string" == typeof e && ((i = w(e)), (e = i.expression));
            var n = new Ge(s, e, t, {
              deep: a && a.deep,
              sync: a && a.sync,
              filters: i && i.filters,
              user: !a || a.user !== !1,
            });
            return (
              a && a.immediate && t.call(s, n.value),
              function () {
                n.teardown();
              }
            );
          }),
          (e.prototype.$eval = function (e, t) {
            if (Ln.test(e)) {
              var a = w(e),
                i = this.$get(a.expression, t);
              return a.filters ? this._applyFilters(i, null, a.filters) : i;
            }
            return this.$get(e, t);
          }),
          (e.prototype.$interpolate = function (e) {
            var t = Y(e),
              a = this;
            return t
              ? 1 === t.length
                ? a.$eval(t[0].value) + ""
                : t
                    .map(function (e) {
                      return e.tag ? a.$eval(e.value) : e.value;
                    })
                    .join("")
              : e;
          }),
          (e.prototype.$log = function (e) {
            var a = e ? je(this._data, e) : this._data;
            if ((a && (a = t(a)), !e))
              for (var i in this.$options.computed) a[i] = t(this[i]);
            console.log(a);
          });
      }

      function oa(e) {
        function t(e, t, i, s, n, u) {
          t = a(t);
          var r = !R(t),
            l = s === !1 || r ? n : u,
            o = !r && !e._isAttached && !R(e.$el);
          return (
            e._isFragment
              ? (ue(e._fragmentStart, e._fragmentEnd, function (a) {
                  l(a, t, e);
                }),
                i && i())
              : l(e.$el, t, e, i),
            o && e._callHook("attached"),
            e
          );
        }

        function a(e) {
          return "string" == typeof e ? document.querySelector(e) : e;
        }

        function i(e, t, a, i) {
          t.appendChild(e), i && i();
        }

        function s(e, t, a, i) {
          F(e, t), i && i();
        }

        function n(e, t, a) {
          G(e), a && a();
        }
        (e.prototype.$nextTick = function (e) {
          Oa(e, this);
        }),
          (e.prototype.$appendTo = function (e, a, s) {
            return t(this, e, a, s, i, I);
          }),
          (e.prototype.$prependTo = function (e, t, i) {
            return (
              (e = a(e)),
              e.hasChildNodes()
                ? this.$before(e.firstChild, t, i)
                : this.$appendTo(e, t, i),
              this
            );
          }),
          (e.prototype.$before = function (e, a, i) {
            return t(this, e, a, i, s, A);
          }),
          (e.prototype.$after = function (e, t, i) {
            return (
              (e = a(e)),
              e.nextSibling
                ? this.$before(e.nextSibling, t, i)
                : this.$appendTo(e.parentNode, t, i),
              this
            );
          }),
          (e.prototype.$remove = function (e, t) {
            if (!this.$el.parentNode) return e && e();
            var a = this._isAttached && R(this.$el);
            a || (t = !1);
            var i = this,
              s = function () {
                a && i._callHook("detached"), e && e();
              };
            if (this._isFragment)
              re(
                this._fragmentStart,
                this._fragmentEnd,
                this,
                this._fragment,
                s
              );
            else {
              var u = t === !1 ? n : O;
              u(this.$el, this, s);
            }
            return this;
          });
      }

      function ma(e) {
        function t(e, t, i) {
          var s = e.$parent;
          if (s && i && !a.test(t))
            for (; s; )
              (s._eventsCount[t] = (s._eventsCount[t] || 0) + i),
                (s = s.$parent);
        }
        (e.prototype.$on = function (e, a) {
          return (
            (this._events[e] || (this._events[e] = [])).push(a),
            t(this, e, 1),
            this
          );
        }),
          (e.prototype.$once = function (e, t) {
            function a() {
              i.$off(e, a), t.apply(this, arguments);
            }
            var i = this;
            return (a.fn = t), this.$on(e, a), this;
          }),
          (e.prototype.$off = function (e, a) {
            var i;
            if (!arguments.length) {
              if (this.$parent)
                for (e in this._events)
                  (i = this._events[e]), i && t(this, e, -i.length);
              return (this._events = {}), this;
            }
            if (((i = this._events[e]), !i)) return this;
            if (1 === arguments.length)
              return t(this, e, -i.length), (this._events[e] = null), this;
            for (var s, n = i.length; n--; )
              if (((s = i[n]), s === a || s.fn === a)) {
                t(this, e, -1), i.splice(n, 1);
                break;
              }
            return this;
          }),
          (e.prototype.$emit = function (e) {
            var t = "string" == typeof e;
            e = t ? e : e.name;
            var a = this._events[e],
              i = t || !a;
            if (a) {
              a = a.length > 1 ? h(a) : a;
              var s =
                t &&
                a.some(function (e) {
                  return e._fromParent;
                });
              s && (i = !1);
              for (var n = h(arguments, 1), u = 0, r = a.length; r > u; u++) {
                var l = a[u],
                  o = l.apply(this, n);
                o !== !0 || (s && !l._fromParent) || (i = !0);
              }
            }
            return i;
          }),
          (e.prototype.$broadcast = function (e) {
            var t = "string" == typeof e;
            if (((e = t ? e : e.name), this._eventsCount[e])) {
              var a = this.$children,
                i = h(arguments);
              t &&
                (i[0] = {
                  name: e,
                  source: this,
                });
              for (var s = 0, n = a.length; n > s; s++) {
                var u = a[s],
                  r = u.$emit.apply(u, i);
                r && u.$broadcast.apply(u, i);
              }
              return this;
            }
          }),
          (e.prototype.$dispatch = function (e) {
            var t = this.$emit.apply(this, arguments);
            if (t) {
              var a = this.$parent,
                i = h(arguments);
              for (
                i[0] = {
                  name: e,
                  source: this,
                };
                a;

              )
                (t = a.$emit.apply(a, i)), (a = t ? a.$parent : null);
              return this;
            }
          });
        var a = /^hook:/;
      }

      function pa(e) {
        function t() {
          (this._isAttached = !0),
            (this._isReady = !0),
            this._callHook("ready");
        }
        (e.prototype.$mount = function (e) {
          return this._isCompiled
            ? void 0
            : ((e = U(e)),
              e || (e = document.createElement("div")),
              this._compile(e),
              this._initDOMHooks(),
              R(this.$el)
                ? (this._callHook("attached"), t.call(this))
                : this.$once("hook:attached", t),
              this);
        }),
          (e.prototype.$destroy = function (e, t) {
            this._destroy(e, t);
          }),
          (e.prototype.$compile = function (e, t, a, i) {
            return Lt(e, this.$options, !0)(this, e, t, a, i);
          });
      }

      function Ta(e) {
        this._init(e);
      }

      function ca(e, t, a) {
        return (
          (a = a ? parseInt(a, 10) : 0),
          (t = l(t)),
          "number" == typeof t ? e.slice(a, a + t) : e
        );
      }

      function da(e, t, a) {
        if (((e = wn(e)), null == t)) return e;
        if ("function" == typeof t) return e.filter(t);
        t = ("" + t).toLowerCase();
        for (
          var i,
            s,
            n,
            u,
            r = "in" === a ? 3 : 2,
            l = h(arguments, r).reduce(function (e, t) {
              return e.concat(t);
            }, []),
            o = [],
            m = 0,
            p = e.length;
          p > m;
          m++
        )
          if (((i = e[m]), (n = (i && i.$value) || i), (u = l.length))) {
            for (; u--; )
              if (
                ((s = l[u]), ("$key" === s && ha(i.$key, t)) || ha(je(n, s), t))
              ) {
                o.push(i);
                break;
              }
          } else ha(i, t) && o.push(i);
        return o;
      }

      function Sa(e, t, a) {
        if (((e = wn(e)), !t)) return e;
        var i = a && 0 > a ? -1 : 1;
        return e.slice().sort(function (e, a) {
          return (
            "$key" !== t &&
              (y(e) && "$value" in e && (e = e.$value),
              y(a) && "$value" in a && (a = a.$value)),
            (e = y(e) ? je(e, t) : e),
            (a = y(a) ? je(a, t) : a),
            e === a ? 0 : e > a ? i : -i
          );
        });
      }

      function ha(e, t) {
        var a;
        if (f(e)) {
          var i = Object.keys(e);
          for (a = i.length; a--; ) if (ha(e[i[a]], t)) return !0;
        } else if (Ea(e)) {
          for (a = e.length; a--; ) if (ha(e[a], t)) return !0;
        } else if (null != e) return e.toString().toLowerCase().indexOf(t) > -1;
      }

      function va(e, t, a) {
        function i(e) {
          !ie(e) ||
            e.hasAttribute("v-if") ||
            e.hasAttribute("v-for") ||
            (e = ut(e)),
            (e = nt(e)),
            s.appendChild(e);
        }
        for (
          var s = document.createDocumentFragment(), n = 0, u = e.length;
          u > n;
          n++
        ) {
          var r = e[n];
          a && !r.__v_selected
            ? i(r)
            : a || r.parentNode !== t || ((r.__v_selected = !0), i(r));
        }
        return s;
      }
      var ya = Object.prototype.hasOwnProperty,
        fa = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
        _a = /-(\w)/g,
        xa = /([a-z\d])([A-Z])/g,
        Ma = /(?:^|[-_\/])(\w)/g,
        ga = Object.prototype.toString,
        Ca = "[object Object]",
        Ea = Array.isArray,
        Da = "__proto__" in {},
        La =
          "undefined" != typeof window &&
          "[object Object]" !== Object.prototype.toString.call(window),
        wa = La && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        ka = La && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0,
        Na = La && navigator.userAgent.toLowerCase().indexOf("android") > 0,
        Ya = void 0,
        ja = void 0,
        ba = void 0,
        za = void 0;
      if (La && !ka) {
        var Ia =
            void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend,
          Aa =
            void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend;
        (Ya = Ia ? "WebkitTransition" : "transition"),
          (ja = Ia ? "webkitTransitionEnd" : "transitionend"),
          (ba = Aa ? "WebkitAnimation" : "animation"),
          (za = Aa ? "webkitAnimationEnd" : "animationend");
      }
      var Oa = (function () {
          function e() {
            s = !1;
            var e = i.slice(0);
            i = [];
            for (var t = 0; t < e.length; t++) e[t]();
          }
          var a,
            i = [],
            s = !1;
          if ("undefined" != typeof MutationObserver) {
            var n = 1,
              u = new MutationObserver(e),
              r = document.createTextNode(n);
            u.observe(r, {
              characterData: !0,
            }),
              (a = function () {
                (n = (n + 1) % 2), (r.data = n);
              });
          } else {
            var l = La ? window : "undefined" != typeof t ? t : {};
            a = l.setImmediate || setTimeout;
          }
          return function (t, n) {
            var u = n
              ? function () {
                  t.call(n);
                }
              : t;
            i.push(u), s || ((s = !0), a(e, 0));
          };
        })(),
        Ha = E.prototype;
      (Ha.put = function (e, t) {
        var a;
        this.size === this.limit && (a = this.shift());
        var i = this.get(e, !0);
        return (
          i ||
            ((i = {
              key: e,
            }),
            (this._keymap[e] = i),
            this.tail
              ? ((this.tail.newer = i), (i.older = this.tail))
              : (this.head = i),
            (this.tail = i),
            this.size++),
          (i.value = t),
          a
        );
      }),
        (Ha.shift = function () {
          var e = this.head;
          return (
            e &&
              ((this.head = this.head.newer),
              (this.head.older = void 0),
              (e.newer = e.older = void 0),
              (this._keymap[e.key] = void 0),
              this.size--),
            e
          );
        }),
        (Ha.get = function (e, t) {
          var a = this._keymap[e];
          if (void 0 !== a)
            return a === this.tail
              ? t
                ? a
                : a.value
              : (a.newer &&
                  (a === this.head && (this.head = a.newer),
                  (a.newer.older = a.older)),
                a.older && (a.older.newer = a.newer),
                (a.newer = void 0),
                (a.older = this.tail),
                this.tail && (this.tail.newer = a),
                (this.tail = a),
                t ? a : a.value);
        });
      var Ua,
        Ra,
        Pa,
        Qa,
        Wa,
        Fa,
        Ba,
        Ga,
        Za,
        Ja,
        Va,
        Xa,
        qa = new E(1e3),
        Ka = /[^\s'"]+|'[^']*'|"[^"]*"/g,
        $a = /^in$|^-?\d+/,
        ei = Object.freeze({
          parseDirective: w,
        }),
        ti = /[-.*+?^${}()|[\]\/\\]/g,
        ai = void 0,
        ii = void 0,
        si = void 0,
        ni = /[^|]\|[^|]/,
        ui = Object.freeze({
          compileRegex: N,
          parseText: Y,
          tokensToExp: j,
        }),
        ri = ["{{", "}}"],
        li = ["{{{", "}}}"],
        oi = Object.defineProperties(
          {
            debug: !1,
            silent: !1,
            async: !0,
            warnExpressionErrors: !0,
            convertAllProperties: !1,
            _delimitersChanged: !0,
            _assetTypes: [
              "component",
              "directive",
              "elementDirective",
              "filter",
              "transition",
              "partial",
            ],
            _propBindingModes: {
              ONE_WAY: 0,
              TWO_WAY: 1,
              ONE_TIME: 2,
            },
            _maxUpdateCount: 100,
          },
          {
            delimiters: {
              get: function () {
                return ri;
              },
              set: function (e) {
                (ri = e), N();
              },
              configurable: !0,
              enumerable: !0,
            },
            unsafeDelimiters: {
              get: function () {
                return li;
              },
              set: function (e) {
                (li = e), N();
              },
              configurable: !0,
              enumerable: !0,
            },
          }
        ),
        mi = void 0,
        pi = /^v-ref:/,
        Ti =
          /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/,
        ci = /^(slot|partial|component)$/,
        di = (oi.optionMergeStrategies = Object.create(null));
      (di.data = function (e, t, a) {
        return a
          ? e || t
            ? function () {
                var i = "function" == typeof t ? t.call(a) : t,
                  s = "function" == typeof e ? e.call(a) : void 0;
                return i ? ce(i, s) : s;
              }
            : void 0
          : t
          ? "function" != typeof t
            ? e
            : e
            ? function () {
                return ce(t.call(this), e.call(this));
              }
            : t
          : e;
      }),
        (di.el = function (e, t, a) {
          if (a || !t || "function" == typeof t) {
            var i = t || e;
            return a && "function" == typeof i ? i.call(a) : i;
          }
        }),
        (di.init =
          di.created =
          di.ready =
          di.attached =
          di.detached =
          di.beforeCompile =
          di.compiled =
          di.beforeDestroy =
          di.destroyed =
            function (e, t) {
              return t ? (e ? e.concat(t) : Ea(t) ? t : [t]) : e;
            }),
        (di.paramAttributes = function () {}),
        oi._assetTypes.forEach(function (e) {
          di[e + "s"] = de;
        }),
        (di.watch = di.events =
          function (e, t) {
            if (!t) return e;
            if (!e) return t;
            var a = {};
            v(a, e);
            for (var i in t) {
              var s = a[i],
                n = t[i];
              s && !Ea(s) && (s = [s]), (a[i] = s ? s.concat(n) : [n]);
            }
            return a;
          }),
        (di.props =
          di.methods =
          di.computed =
            function (e, t) {
              if (!t) return e;
              if (!e) return t;
              var a = Object.create(null);
              return v(a, e), v(a, t), a;
            });
      var Si = function (e, t) {
          return void 0 === t ? e : t;
        },
        hi = Array.prototype,
        vi = Object.create(hi);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        function (e) {
          var t = hi[e];
          _(vi, e, function () {
            for (var a = arguments.length, i = new Array(a); a--; )
              i[a] = arguments[a];
            var s,
              n = t.apply(this, i),
              u = this.__ob__;
            switch (e) {
              case "push":
                s = i;
                break;
              case "unshift":
                s = i;
                break;
              case "splice":
                s = i.slice(2);
            }
            return s && u.observeArray(s), u.dep.notify(), n;
          });
        }
      ),
        _(hi, "$set", function (e, t) {
          return (
            e >= this.length && (this.length = Number(e) + 1),
            this.splice(e, 1, t)[0]
          );
        }),
        _(hi, "$remove", function (e) {
          if (this.length) {
            var t = M(this, e);
            return t > -1 ? this.splice(t, 1) : void 0;
          }
        });
      var yi = 0;
      (xe.target = null),
        (xe.prototype.addSub = function (e) {
          this.subs.push(e);
        }),
        (xe.prototype.removeSub = function (e) {
          this.subs.$remove(e);
        }),
        (xe.prototype.depend = function () {
          xe.target.addDep(this);
        }),
        (xe.prototype.notify = function () {
          for (var e = h(this.subs), t = 0, a = e.length; a > t; t++)
            e[t].update();
        });
      var fi = Object.getOwnPropertyNames(vi);
      (Me.prototype.walk = function (e) {
        for (var t = Object.keys(e), a = 0, i = t.length; i > a; a++)
          this.convert(t[a], e[t[a]]);
      }),
        (Me.prototype.observeArray = function (e) {
          for (var t = 0, a = e.length; a > t; t++) Ee(e[t]);
        }),
        (Me.prototype.convert = function (e, t) {
          De(this.value, e, t);
        }),
        (Me.prototype.addVm = function (e) {
          (this.vms || (this.vms = [])).push(e);
        }),
        (Me.prototype.removeVm = function (e) {
          this.vms.$remove(e);
        });
      var _i = Object.freeze({
          defineReactive: De,
          set: a,
          del: i,
          hasOwn: s,
          isLiteral: n,
          isReserved: u,
          _toString: r,
          toNumber: l,
          toBoolean: o,
          stripQuotes: m,
          camelize: p,
          hyphenate: c,
          classify: d,
          bind: S,
          toArray: h,
          extend: v,
          isObject: y,
          isPlainObject: f,
          def: _,
          debounce: x,
          indexOf: M,
          cancellable: g,
          looseEqual: C,
          isArray: Ea,
          hasProto: Da,
          inBrowser: La,
          devtools: wa,
          isIE9: ka,
          isAndroid: Na,
          get transitionProp() {
            return Ya;
          },
          get transitionEndEvent() {
            return ja;
          },
          get animationProp() {
            return ba;
          },
          get animationEndEvent() {
            return za;
          },
          nextTick: Oa,
          query: U,
          inDoc: R,
          getAttr: P,
          getBindAttr: Q,
          hasBindAttr: W,
          before: F,
          after: B,
          remove: G,
          prepend: Z,
          replace: J,
          on: V,
          off: X,
          setClass: q,
          addClass: K,
          removeClass: $,
          extractContent: ee,
          trimNode: te,
          isTemplate: ie,
          createAnchor: se,
          findRef: ne,
          mapNodeRange: ue,
          removeNodeRange: re,
          mergeOptions: ye,
          resolveAsset: fe,
          assertAsset: _e,
          checkComponentAttr: le,
          initProp: me,
          assertProp: pe,
          coerceProp: Te,
          commonTagRE: Ti,
          reservedTagRE: ci,
          get warn() {
            return mi;
          },
        }),
        xi = 0,
        Mi = new E(1e3),
        gi = 0,
        Ci = 1,
        Ei = 2,
        Di = 3,
        Li = 0,
        wi = 1,
        ki = 2,
        Ni = 3,
        Yi = 4,
        ji = 5,
        bi = 6,
        zi = 7,
        Ii = 8,
        Ai = [];
      (Ai[Li] = {
        ws: [Li],
        ident: [Ni, gi],
        "[": [Yi],
        eof: [zi],
      }),
        (Ai[wi] = {
          ws: [wi],
          ".": [ki],
          "[": [Yi],
          eof: [zi],
        }),
        (Ai[ki] = {
          ws: [ki],
          ident: [Ni, gi],
        }),
        (Ai[Ni] = {
          ident: [Ni, gi],
          0: [Ni, gi],
          number: [Ni, gi],
          ws: [wi, Ci],
          ".": [ki, Ci],
          "[": [Yi, Ci],
          eof: [zi, Ci],
        }),
        (Ai[Yi] = {
          "'": [ji, gi],
          '"': [bi, gi],
          "[": [Yi, Ei],
          "]": [wi, Di],
          eof: Ii,
          else: [Yi, gi],
        }),
        (Ai[ji] = {
          "'": [Yi, gi],
          eof: Ii,
          else: [ji, gi],
        }),
        (Ai[bi] = {
          '"': [Yi, gi],
          eof: Ii,
          else: [bi, gi],
        });
      var Oi = Object.freeze({
          parsePath: Ye,
          getPath: je,
          setPath: be,
        }),
        Hi = new E(1e3),
        Ui =
          "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
        Ri = new RegExp("^(" + Ui.replace(/,/g, "\\b|") + "\\b)"),
        Pi =
          "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
        Qi = new RegExp("^(" + Pi.replace(/,/g, "\\b|") + "\\b)"),
        Wi = /\s/g,
        Fi = /\n/g,
        Bi =
          /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g,
        Gi = /"(\d+)"/g,
        Zi =
          /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
        Ji = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
        Vi = /^(?:true|false)$/,
        Xi = [],
        qi = Object.freeze({
          parseExpression: Re,
          isSimplePath: Pe,
        }),
        Ki = [],
        $i = [],
        es = {},
        ts = {},
        as = !1,
        is = !1,
        ss = 0;
      (Ge.prototype.addDep = function (e) {
        var t = e.id;
        this.newDeps[t] ||
          ((this.newDeps[t] = e),
          this.deps[t] || ((this.deps[t] = e), e.addSub(this)));
      }),
        (Ge.prototype.get = function () {
          this.beforeGet();
          var e,
            t = this.scope || this.vm;
          try {
            e = this.getter.call(t, t);
          } catch (a) {}
          return (
            this.deep && Ze(e),
            this.preProcess && (e = this.preProcess(e)),
            this.filters && (e = t._applyFilters(e, null, this.filters, !1)),
            this.postProcess && (e = this.postProcess(e)),
            this.afterGet(),
            e
          );
        }),
        (Ge.prototype.set = function (e) {
          var t = this.scope || this.vm;
          this.filters &&
            (e = t._applyFilters(e, this.value, this.filters, !0));
          try {
            this.setter.call(t, t, e);
          } catch (a) {}
          var i = t.$forContext;
          if (i && i.alias === this.expression) {
            if (i.filters) return;
            i._withLock(function () {
              t.$key ? (i.rawValue[t.$key] = e) : i.rawValue.$set(t.$index, e);
            });
          }
        }),
        (Ge.prototype.beforeGet = function () {
          (xe.target = this), (this.newDeps = Object.create(null));
        }),
        (Ge.prototype.afterGet = function () {
          xe.target = null;
          for (var e = Object.keys(this.deps), t = e.length; t--; ) {
            var a = e[t];
            this.newDeps[a] || this.deps[a].removeSub(this);
          }
          this.deps = this.newDeps;
        }),
        (Ge.prototype.update = function (e) {
          this.lazy
            ? (this.dirty = !0)
            : this.sync || !oi.async
            ? this.run()
            : ((this.shallow = this.queued ? (e ? this.shallow : !1) : !!e),
              (this.queued = !0),
              Be(this));
        }),
        (Ge.prototype.run = function () {
          if (this.active) {
            var e = this.get();
            if (e !== this.value || ((y(e) || this.deep) && !this.shallow)) {
              var t = this.value;
              this.value = e;
              this.prevError;
              this.cb.call(this.vm, e, t);
            }
            this.queued = this.shallow = !1;
          }
        }),
        (Ge.prototype.evaluate = function () {
          var e = xe.target;
          (this.value = this.get()), (this.dirty = !1), (xe.target = e);
        }),
        (Ge.prototype.depend = function () {
          for (var e = Object.keys(this.deps), t = e.length; t--; )
            this.deps[e[t]].depend();
        }),
        (Ge.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed ||
              this.vm._vForRemoving ||
              this.vm._watchers.$remove(this);
            for (var e = Object.keys(this.deps), t = e.length; t--; )
              this.deps[e[t]].removeSub(this);
            (this.active = !1), (this.vm = this.cb = this.value = null);
          }
        });
      var ns = {
          bind: function () {
            var e = this.el;
            this.vm.$once("pre-hook:compiled", function () {
              e.removeAttribute("v-cloak");
            });
          },
        },
        us = {
          bind: function () {},
        },
        rs = 700,
        ls = 800,
        os = 850,
        ms = 1100,
        ps = 1500,
        Ts = 1500,
        cs = 1750,
        ds = 2e3,
        Ss = 2e3,
        hs = 2100,
        vs = {
          priority: ps,
          bind: function () {
            if (this.arg) {
              var e = (this.id = p(this.arg)),
                t = (this._scope || this.vm).$els;
              s(t, e) ? (t[e] = this.el) : De(t, e, this.el);
            }
          },
          unbind: function () {
            var e = (this._scope || this.vm).$els;
            e[this.id] === this.el && (e[this.id] = null);
          },
        },
        ys = ["-webkit-", "-moz-", "-ms-"],
        fs = ["Webkit", "Moz", "ms"],
        _s = /!important;?$/,
        xs = Object.create(null),
        Ms = null,
        gs = {
          deep: !0,
          update: function (e) {
            "string" == typeof e
              ? (this.el.style.cssText = e)
              : Ea(e)
              ? this.handleObject(e.reduce(v, {}))
              : this.handleObject(e || {});
          },
          handleObject: function (e) {
            var t,
              a,
              i = this.cache || (this.cache = {});
            for (t in i) t in e || (this.handleSingle(t, null), delete i[t]);
            for (t in e)
              (a = e[t]), a !== i[t] && ((i[t] = a), this.handleSingle(t, a));
          },
          handleSingle: function (e, t) {
            if ((e = Je(e)))
              if ((null != t && (t += ""), t)) {
                var a = _s.test(t) ? "important" : "";
                a && (t = t.replace(_s, "").trim()),
                  this.el.style.setProperty(e, t, a);
              } else this.el.style.removeProperty(e);
          },
        },
        Cs = "http://www.w3.org/1999/xlink",
        Es = /^xlink:/,
        Ds =
          /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
        Ls = /^(?:value|checked|selected|muted)$/,
        ws = {
          value: "_value",
          "true-value": "_trueValue",
          "false-value": "_falseValue",
        },
        ks = {
          priority: os,
          bind: function () {
            var e = this.arg,
              t = this.el.tagName;
            e || (this.deep = !0);
            var a = this.descriptor,
              i = a.interp;
            if (i) {
              a.hasOneTime && (this.expression = j(i, this._scope || this.vm)),
                (Ds.test(e) ||
                  ("name" === e && ("PARTIAL" === t || "SLOT" === t))) &&
                  (this.el.removeAttribute(e), (this.invalid = !0));
            }
          },
          update: function (e) {
            if (!this.invalid) {
              var t = this.arg;
              this.arg ? this.handleSingle(t, e) : this.handleObject(e || {});
            }
          },
          handleObject: gs.handleObject,
          handleSingle: function (e, t) {
            var a = this.el,
              i = this.descriptor.interp;
            this.modifiers.camel && (e = p(e)),
              !i &&
                Ls.test(e) &&
                e in a &&
                (a[e] = "value" === e && null == t ? "" : t);
            var s = ws[e];
            if (!i && s) {
              a[s] = t;
              var n = a.__v_model;
              n && n.listener();
            }
            return "value" === e && "TEXTAREA" === a.tagName
              ? void a.removeAttribute(e)
              : void (null != t && t !== !1
                  ? "class" === e
                    ? (a.__v_trans &&
                        (t += " " + a.__v_trans.id + "-transition"),
                      q(a, t))
                    : Es.test(e)
                    ? a.setAttributeNS(Cs, e, t === !0 ? "" : t)
                    : a.setAttribute(e, t === !0 ? "" : t)
                  : a.removeAttribute(e));
          },
        },
        Ns = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          delete: [8, 46],
          up: 38,
          left: 37,
          right: 39,
          down: 40,
        },
        Ys = {
          acceptStatement: !0,
          priority: rs,
          bind: function () {
            if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
              var e = this;
              (this.iframeBind = function () {
                V(e.el.contentWindow, e.arg, e.handler, e.modifiers.capture);
              }),
                this.on("load", this.iframeBind);
            }
          },
          update: function (e) {
            if (
              (this.descriptor.raw || (e = function () {}),
              "function" == typeof e)
            ) {
              this.modifiers.stop && (e = qe(e)),
                this.modifiers.prevent && (e = Ke(e)),
                this.modifiers.self && (e = $e(e));
              var t = Object.keys(this.modifiers).filter(function (e) {
                return "stop" !== e && "prevent" !== e;
              });
              t.length && (e = Xe(e, t)),
                this.reset(),
                (this.handler = e),
                this.iframeBind
                  ? this.iframeBind()
                  : V(this.el, this.arg, this.handler, this.modifiers.capture);
            }
          },
          reset: function () {
            var e = this.iframeBind ? this.el.contentWindow : this.el;
            this.handler && X(e, this.arg, this.handler);
          },
          unbind: function () {
            this.reset();
          },
        },
        js = {
          bind: function () {
            function e() {
              var e = a.checked;
              return e && a.hasOwnProperty("_trueValue")
                ? a._trueValue
                : !e && a.hasOwnProperty("_falseValue")
                ? a._falseValue
                : e;
            }
            var t = this,
              a = this.el;
            (this.getValue = function () {
              return a.hasOwnProperty("_value")
                ? a._value
                : t.params.number
                ? l(a.value)
                : a.value;
            }),
              (this.listener = function () {
                var i = t._watcher.value;
                if (Ea(i)) {
                  var s = t.getValue();
                  a.checked ? M(i, s) < 0 && i.push(s) : i.$remove(s);
                } else t.set(e());
              }),
              this.on("change", this.listener),
              a.hasAttribute("checked") && (this.afterBind = this.listener);
          },
          update: function (e) {
            var t = this.el;
            Ea(e)
              ? (t.checked = M(e, this.getValue()) > -1)
              : t.hasOwnProperty("_trueValue")
              ? (t.checked = C(e, t._trueValue))
              : (t.checked = !!e);
          },
        },
        bs = {
          bind: function () {
            var e = this,
              t = this.el;
            this.forceUpdate = function () {
              e._watcher && e.update(e._watcher.get());
            };
            var a = (this.multiple = t.hasAttribute("multiple"));
            (this.listener = function () {
              var i = et(t, a);
              (i = e.params.number ? (Ea(i) ? i.map(l) : l(i)) : i), e.set(i);
            }),
              this.on("change", this.listener);
            var i = et(t, a, !0);
            ((a && i.length) || (!a && null !== i)) &&
              (this.afterBind = this.listener),
              this.vm.$on("hook:attached", this.forceUpdate);
          },
          update: function (e) {
            var t = this.el;
            t.selectedIndex = -1;
            for (
              var a, i, s = this.multiple && Ea(e), n = t.options, u = n.length;
              u--;

            )
              (a = n[u]),
                (i = a.hasOwnProperty("_value") ? a._value : a.value),
                (a.selected = s ? tt(e, i) > -1 : C(e, i));
          },
          unbind: function () {
            this.vm.$off("hook:attached", this.forceUpdate);
          },
        },
        zs = {
          bind: function () {
            var e = this,
              t = this.el;
            (this.getValue = function () {
              if (t.hasOwnProperty("_value")) return t._value;
              var a = t.value;
              return e.params.number && (a = l(a)), a;
            }),
              (this.listener = function () {
                e.set(e.getValue());
              }),
              this.on("change", this.listener),
              t.hasAttribute("checked") && (this.afterBind = this.listener);
          },
          update: function (e) {
            this.el.checked = C(e, this.getValue());
          },
        },
        Is = {
          bind: function () {
            var e = this,
              t = this.el,
              a = "range" === t.type,
              i = this.params.lazy,
              s = this.params.number,
              n = this.params.debounce,
              u = !1;
            if (
              (Na ||
                a ||
                (this.on("compositionstart", function () {
                  u = !0;
                }),
                this.on("compositionend", function () {
                  (u = !1), i || e.listener();
                })),
              (this.focused = !1),
              a ||
                i ||
                (this.on("focus", function () {
                  e.focused = !0;
                }),
                this.on("blur", function () {
                  (e.focused = !1),
                    (!e._frag || e._frag.inserted) && e.rawListener();
                })),
              (this.listener = this.rawListener =
                function () {
                  if (!u && e._bound) {
                    var i = s || a ? l(t.value) : t.value;
                    e.set(i),
                      Oa(function () {
                        e._bound && !e.focused && e.update(e._watcher.value);
                      });
                  }
                }),
              n && (this.listener = x(this.listener, n)),
              (this.hasjQuery = "function" == typeof jQuery),
              this.hasjQuery)
            ) {
              var r = jQuery.fn.on ? "on" : "bind";
              jQuery(t)[r]("change", this.listener),
                i || jQuery(t)[r]("input", this.listener);
            } else
              this.on("change", this.listener),
                i || this.on("input", this.listener);
            !i &&
              ka &&
              (this.on("cut", function () {
                Oa(e.listener);
              }),
              this.on("keyup", function (t) {
                (46 === t.keyCode || 8 === t.keyCode) && e.listener();
              })),
              (t.hasAttribute("value") ||
                ("TEXTAREA" === t.tagName && t.value.trim())) &&
                (this.afterBind = this.listener);
          },
          update: function (e) {
            this.el.value = r(e);
          },
          unbind: function () {
            var e = this.el;
            if (this.hasjQuery) {
              var t = jQuery.fn.off ? "off" : "unbind";
              jQuery(e)[t]("change", this.listener),
                jQuery(e)[t]("input", this.listener);
            }
          },
        },
        As = {
          text: Is,
          radio: zs,
          select: bs,
          checkbox: js,
        },
        Os = {
          priority: ls,
          twoWay: !0,
          handlers: As,
          params: ["lazy", "number", "debounce"],
          bind: function () {
            this.checkFilters(), this.hasRead && !this.hasWrite;
            var e,
              t = this.el,
              a = t.tagName;
            if ("INPUT" === a) e = As[t.type] || As.text;
            else if ("SELECT" === a) e = As.select;
            else {
              if ("TEXTAREA" !== a) return;
              e = As.text;
            }
            (t.__v_model = this),
              e.bind.call(this),
              (this.update = e.update),
              (this._unbind = e.unbind);
          },
          checkFilters: function () {
            var e = this.filters;
            if (e)
              for (var t = e.length; t--; ) {
                var a = fe(this.vm.$options, "filters", e[t].name);
                ("function" == typeof a || a.read) && (this.hasRead = !0),
                  a.write && (this.hasWrite = !0);
              }
          },
          unbind: function () {
            (this.el.__v_model = null), this._unbind && this._unbind();
          },
        },
        Hs = {
          bind: function () {
            var e = this.el.nextElementSibling;
            e && null !== P(e, "v-else") && (this.elseEl = e);
          },
          update: function (e) {
            this.apply(this.el, e), this.elseEl && this.apply(this.elseEl, !e);
          },
          apply: function (e, t) {
            function a() {
              e.style.display = t ? "" : "none";
            }
            R(e) ? H(e, t ? 1 : -1, a, this.vm) : a();
          },
        },
        Us = new E(1e3),
        Rs = new E(1e3),
        Ps = {
          efault: [0, "", ""],
          legend: [1, "<fieldset>", "</fieldset>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        };
      (Ps.td = Ps.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"]),
        (Ps.option = Ps.optgroup =
          [1, '<select multiple="multiple">', "</select>"]),
        (Ps.thead =
          Ps.tbody =
          Ps.colgroup =
          Ps.caption =
          Ps.tfoot =
            [1, "<table>", "</table>"]),
        (Ps.g =
          Ps.defs =
          Ps.symbol =
          Ps.use =
          Ps.image =
          Ps.text =
          Ps.circle =
          Ps.ellipse =
          Ps.line =
          Ps.path =
          Ps.polygon =
          Ps.polyline =
          Ps.rect =
            [
              1,
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',
              "</svg>",
            ]);
      var Qs = /<([\w:]+)/,
        Ws = /&#?\w+?;/,
        Fs = (function () {
          if (La) {
            var e = document.createElement("div");
            return (
              (e.innerHTML = "<template>1</template>"),
              !e.cloneNode(!0).firstChild.innerHTML
            );
          }
          return !1;
        })(),
        Bs = (function () {
          if (La) {
            var e = document.createElement("textarea");
            return (e.placeholder = "t"), "t" === e.cloneNode(!0).value;
          }
          return !1;
        })(),
        Gs = Object.freeze({
          cloneNode: nt,
          parseTemplate: ut,
        });
      (rt.prototype.callHook = function (e) {
        var t, a;
        for (t = 0, a = this.childFrags.length; a > t; t++)
          this.childFrags[t].callHook(e);
        for (t = 0, a = this.children.length; a > t; t++) e(this.children[t]);
      }),
        (rt.prototype.beforeRemove = function () {
          var e, t;
          for (e = 0, t = this.childFrags.length; t > e; e++)
            this.childFrags[e].beforeRemove(!1);
          for (e = 0, t = this.children.length; t > e; e++)
            this.children[e].$destroy(!1, !0);
          var a = this.unlink.dirs;
          for (e = 0, t = a.length; t > e; e++)
            a[e]._watcher && a[e]._watcher.teardown();
        }),
        (rt.prototype.destroy = function () {
          this.parentFrag && this.parentFrag.childFrags.$remove(this),
            (this.node.__vfrag__ = null),
            this.unlink();
        });
      var Zs = new E(5e3);
      dt.prototype.create = function (e, t, a) {
        var i = nt(this.template);
        return new rt(this.linker, this.vm, i, e, t, a);
      };
      var Js = {
          priority: Ss,
          bind: function () {
            var e = this.el;
            if (e.__vue__) this.invalid = !0;
            else {
              var t = e.nextElementSibling;
              t &&
                null !== P(t, "v-else") &&
                (G(t), (this.elseFactory = new dt(this.vm, t))),
                (this.anchor = se("v-if")),
                J(e, this.anchor),
                (this.factory = new dt(this.vm, e));
            }
          },
          update: function (e) {
            this.invalid || (e ? this.frag || this.insert() : this.remove());
          },
          insert: function () {
            this.elseFrag && (this.elseFrag.remove(), (this.elseFrag = null)),
              (this.frag = this.factory.create(
                this._host,
                this._scope,
                this._frag
              )),
              this.frag.before(this.anchor);
          },
          remove: function () {
            this.frag && (this.frag.remove(), (this.frag = null)),
              this.elseFactory &&
                !this.elseFrag &&
                ((this.elseFrag = this.elseFactory.create(
                  this._host,
                  this._scope,
                  this._frag
                )),
                this.elseFrag.before(this.anchor));
          },
          unbind: function () {
            this.frag && this.frag.destroy(),
              this.elseFrag && this.elseFrag.destroy();
          },
        },
        Vs = 0,
        Xs = {
          priority: ds,
          params: ["track-by", "stagger", "enter-stagger", "leave-stagger"],
          bind: function () {
            var e = this.expression.match(/(.*) in (.*)/);
            if (e) {
              var t = e[1].match(/\((.*),(.*)\)/);
              t
                ? ((this.iterator = t[1].trim()), (this.alias = t[2].trim()))
                : (this.alias = e[1].trim()),
                (this.expression = e[2]);
            }
            if (this.alias) {
              this.id = "__v-for__" + ++Vs;
              var a = this.el.tagName;
              (this.isOption =
                ("OPTION" === a || "OPTGROUP" === a) &&
                "SELECT" === this.el.parentNode.tagName),
                (this.start = se("v-for-start")),
                (this.end = se("v-for-end")),
                J(this.el, this.end),
                F(this.start, this.end),
                (this.cache = Object.create(null)),
                (this.factory = new dt(this.vm, this.el));
            }
          },
          update: function (e) {
            this.diff(e), this.updateRef(), this.updateModel();
          },
          diff: function (e) {
            var t,
              a,
              i,
              n,
              u,
              r,
              l = e[0],
              o = (this.fromObject = y(l) && s(l, "$key") && s(l, "$value")),
              m = this.params.trackBy,
              p = this.frags,
              T = (this.frags = new Array(e.length)),
              c = this.alias,
              d = this.iterator,
              S = this.start,
              h = this.end,
              v = R(S),
              f = !p;
            for (t = 0, a = e.length; a > t; t++)
              (l = e[t]),
                (n = o ? l.$key : null),
                (u = o ? l.$value : l),
                (r = !y(u)),
                (i = !f && this.getCachedFrag(u, t, n)),
                i
                  ? ((i.reused = !0),
                    (i.scope.$index = t),
                    n && (i.scope.$key = n),
                    d && (i.scope[d] = null !== n ? n : t),
                    (m || o || r) && (i.scope[c] = u))
                  : ((i = this.create(u, c, t, n)), (i.fresh = !f)),
                (T[t] = i),
                f && i.before(h);
            if (!f) {
              var _ = 0,
                x = p.length - T.length;
              for (this.vm._vForRemoving = !0, t = 0, a = p.length; a > t; t++)
                (i = p[t]),
                  i.reused ||
                    (this.deleteCachedFrag(i), this.remove(i, _++, x, v));
              (this.vm._vForRemoving = !1),
                (this.vm._watchers = this.vm._watchers.filter(function (e) {
                  return e.active;
                }));
              var M,
                g,
                C,
                E = 0;
              for (t = 0, a = T.length; a > t; t++)
                (i = T[t]),
                  (M = T[t - 1]),
                  (g = M
                    ? M.staggerCb
                      ? M.staggerAnchor
                      : M.end || M.node
                    : S),
                  i.reused && !i.staggerCb
                    ? ((C = St(i, S, this.id)),
                      C === M ||
                        (C && St(C, S, this.id) === M) ||
                        this.move(i, g))
                    : this.insert(i, E++, g, v),
                  (i.reused = i.fresh = !1);
            }
          },
          create: function (e, t, a, i) {
            var s = this._host,
              n = this._scope || this.vm,
              u = Object.create(n);
            (u.$refs = Object.create(n.$refs)),
              (u.$els = Object.create(n.$els)),
              (u.$parent = n),
              (u.$forContext = this),
              De(u, t, e),
              De(u, "$index", a),
              i ? De(u, "$key", i) : u.$key && _(u, "$key", null),
              this.iterator && De(u, this.iterator, null !== i ? i : a);
            var r = this.factory.create(s, u, this._frag);
            return (r.forId = this.id), this.cacheFrag(e, r, a, i), r;
          },
          updateRef: function () {
            var e = this.descriptor.ref;
            if (e) {
              var t,
                a = (this._scope || this.vm).$refs;
              this.fromObject
                ? ((t = {}),
                  this.frags.forEach(function (e) {
                    t[e.scope.$key] = ht(e);
                  }))
                : (t = this.frags.map(ht)),
                (a[e] = t);
            }
          },
          updateModel: function () {
            if (this.isOption) {
              var e = this.start.parentNode,
                t = e && e.__v_model;
              t && t.forceUpdate();
            }
          },
          insert: function (e, t, a, i) {
            e.staggerCb && (e.staggerCb.cancel(), (e.staggerCb = null));
            var s = this.getStagger(e, t, null, "enter");
            if (i && s) {
              var n = e.staggerAnchor;
              n ||
                ((n = e.staggerAnchor = se("stagger-anchor")),
                (n.__vfrag__ = e)),
                B(n, a);
              var u = (e.staggerCb = g(function () {
                (e.staggerCb = null), e.before(n), G(n);
              }));
              setTimeout(u, s);
            } else e.before(a.nextSibling);
          },
          remove: function (e, t, a, i) {
            if (e.staggerCb)
              return e.staggerCb.cancel(), void (e.staggerCb = null);
            var s = this.getStagger(e, t, a, "leave");
            if (i && s) {
              var n = (e.staggerCb = g(function () {
                (e.staggerCb = null), e.remove();
              }));
              setTimeout(n, s);
            } else e.remove();
          },
          move: function (e, t) {
            t.nextSibling || this.end.parentNode.appendChild(this.end),
              e.before(t.nextSibling, !1);
          },
          cacheFrag: function (e, t, a, i) {
            var n,
              u = this.params.trackBy,
              r = this.cache,
              l = !y(e);
            i || u || l
              ? ((n = u ? ("$index" === u ? a : e[u]) : i || e),
                r[n] || (r[n] = t))
              : ((n = this.id),
                s(e, n) ? null === e[n] && (e[n] = t) : _(e, n, t)),
              (t.raw = e);
          },
          getCachedFrag: function (e, t, a) {
            var i,
              s = this.params.trackBy,
              n = !y(e);
            if (a || s || n) {
              var u = s ? ("$index" === s ? t : e[s]) : a || e;
              i = this.cache[u];
            } else i = e[this.id];
            return i && (i.reused || i.fresh), i;
          },
          deleteCachedFrag: function (e) {
            var t = e.raw,
              a = this.params.trackBy,
              i = e.scope,
              n = i.$index,
              u = s(i, "$key") && i.$key,
              r = !y(t);
            if (a || u || r) {
              var l = a ? ("$index" === a ? n : t[a]) : u || t;
              this.cache[l] = null;
            } else (t[this.id] = null), (e.raw = null);
          },
          getStagger: function (e, t, a, i) {
            i += "Stagger";
            var s = e.node.__v_trans,
              n = s && s.hooks,
              u = n && (n[i] || n.stagger);
            return u
              ? u.call(e, t, a)
              : t * parseInt(this.params[i] || this.params.stagger, 10);
          },
          _preProcess: function (e) {
            return (this.rawValue = e), e;
          },
          _postProcess: function (e) {
            if (Ea(e)) return e;
            if (f(e)) {
              for (
                var t, a = Object.keys(e), i = a.length, s = new Array(i);
                i--;

              )
                (t = a[i]),
                  (s[i] = {
                    $key: t,
                    $value: e[t],
                  });
              return s;
            }
            return "number" != typeof e || isNaN(e) || (e = vt(e)), e || [];
          },
          unbind: function () {
            if (
              (this.descriptor.ref &&
                ((this._scope || this.vm).$refs[this.descriptor.ref] = null),
              this.frags)
            )
              for (var e, t = this.frags.length; t--; )
                (e = this.frags[t]), this.deleteCachedFrag(e), e.destroy();
          },
        },
        qs = {
          bind: function () {
            8 === this.el.nodeType &&
              ((this.nodes = []),
              (this.anchor = se("v-html")),
              J(this.el, this.anchor));
          },
          update: function (e) {
            (e = r(e)), this.nodes ? this.swap(e) : (this.el.innerHTML = e);
          },
          swap: function (e) {
            for (var t = this.nodes.length; t--; ) G(this.nodes[t]);
            var a = ut(e, !0, !0);
            (this.nodes = h(a.childNodes)), F(a, this.anchor);
          },
        },
        Ks = {
          bind: function () {
            this.attr = 3 === this.el.nodeType ? "data" : "textContent";
          },
          update: function (e) {
            this.el[this.attr] = r(e);
          },
        },
        $s = {
          text: Ks,
          html: qs,
          for: Xs,
          if: Js,
          show: Hs,
          model: Os,
          on: Ys,
          bind: ks,
          el: vs,
          ref: us,
          cloak: ns,
        },
        en = [],
        tn = !1,
        an = "transition",
        sn = "animation",
        nn = Ya + "Duration",
        un = ba + "Duration",
        rn = _t.prototype;
      (rn.enter = function (e, t) {
        this.cancelPending(),
          this.callHook("beforeEnter"),
          (this.cb = t),
          K(this.el, this.enterClass),
          e(),
          (this.entered = !1),
          this.callHookWithCb("enter"),
          this.entered ||
            ((this.cancel = this.hooks && this.hooks.enterCancelled),
            yt(this.enterNextTick));
      }),
        (rn.enterNextTick = function () {
          this.justEntered = !0;
          var e = this;
          setTimeout(function () {
            e.justEntered = !1;
          }, 17);
          var t = this.enterDone,
            a = this.getCssTransitionType(this.enterClass);
          this.pendingJsCb
            ? a === an && $(this.el, this.enterClass)
            : a === an
            ? ($(this.el, this.enterClass), this.setupCssCb(ja, t))
            : a === sn
            ? this.setupCssCb(za, t)
            : t();
        }),
        (rn.enterDone = function () {
          (this.entered = !0),
            (this.cancel = this.pendingJsCb = null),
            $(this.el, this.enterClass),
            this.callHook("afterEnter"),
            this.cb && this.cb();
        }),
        (rn.leave = function (e, t) {
          this.cancelPending(),
            this.callHook("beforeLeave"),
            (this.op = e),
            (this.cb = t),
            K(this.el, this.leaveClass),
            (this.left = !1),
            this.callHookWithCb("leave"),
            this.left ||
              ((this.cancel = this.hooks && this.hooks.leaveCancelled),
              this.op &&
                !this.pendingJsCb &&
                (this.justEntered ? this.leaveDone() : yt(this.leaveNextTick)));
        }),
        (rn.leaveNextTick = function () {
          var e = this.getCssTransitionType(this.leaveClass);
          if (e) {
            var t = e === an ? ja : za;
            this.setupCssCb(t, this.leaveDone);
          } else this.leaveDone();
        }),
        (rn.leaveDone = function () {
          (this.left = !0),
            (this.cancel = this.pendingJsCb = null),
            this.op(),
            $(this.el, this.leaveClass),
            this.callHook("afterLeave"),
            this.cb && this.cb(),
            (this.op = null);
        }),
        (rn.cancelPending = function () {
          this.op = this.cb = null;
          var e = !1;
          this.pendingCssCb &&
            ((e = !0),
            X(this.el, this.pendingCssEvent, this.pendingCssCb),
            (this.pendingCssEvent = this.pendingCssCb = null)),
            this.pendingJsCb &&
              ((e = !0), this.pendingJsCb.cancel(), (this.pendingJsCb = null)),
            e && ($(this.el, this.enterClass), $(this.el, this.leaveClass)),
            this.cancel &&
              (this.cancel.call(this.vm, this.el), (this.cancel = null));
        }),
        (rn.callHook = function (e) {
          this.hooks && this.hooks[e] && this.hooks[e].call(this.vm, this.el);
        }),
        (rn.callHookWithCb = function (e) {
          var t = this.hooks && this.hooks[e];
          t &&
            (t.length > 1 && (this.pendingJsCb = g(this[e + "Done"])),
            t.call(this.vm, this.el, this.pendingJsCb));
        }),
        (rn.getCssTransitionType = function (e) {
          if (
            !(
              !ja ||
              document.hidden ||
              (this.hooks && this.hooks.css === !1) ||
              xt(this.el)
            )
          ) {
            var t = this.type || this.typeCache[e];
            if (t) return t;
            var a = this.el.style,
              i = window.getComputedStyle(this.el),
              s = a[nn] || i[nn];
            if (s && "0s" !== s) t = an;
            else {
              var n = a[un] || i[un];
              n && "0s" !== n && (t = sn);
            }
            return t && (this.typeCache[e] = t), t;
          }
        }),
        (rn.setupCssCb = function (e, t) {
          this.pendingCssEvent = e;
          var a = this,
            i = this.el,
            s = (this.pendingCssCb = function (n) {
              n.target === i &&
                (X(i, e, s),
                (a.pendingCssEvent = a.pendingCssCb = null),
                !a.pendingJsCb && t && t());
            });
          V(i, e, s);
        });
      var ln = {
          priority: ms,
          update: function (e, t) {
            var a = this.el,
              i = fe(this.vm.$options, "transitions", e);
            (e = e || "v"),
              (a.__v_trans = new _t(a, e, i, this.el.__vue__ || this.vm)),
              t && $(a, t + "-transition"),
              K(a, e + "-transition");
          },
        },
        on = oi._propBindingModes,
        mn = {
          bind: function () {
            var e = this.vm,
              t = e._context,
              a = this.descriptor.prop,
              i = a.path,
              s = a.parentPath,
              n = a.mode === on.TWO_WAY,
              u = (this.parentWatcher = new Ge(
                t,
                s,
                function (t) {
                  (t = Te(a, t)), pe(a, t) && (e[i] = t);
                },
                {
                  twoWay: n,
                  filters: a.filters,
                  scope: this._scope,
                }
              ));
            if ((me(e, a, u.value), n)) {
              var r = this;
              e.$once("pre-hook:created", function () {
                r.childWatcher = new Ge(
                  e,
                  i,
                  function (e) {
                    u.set(e);
                  },
                  {
                    sync: !0,
                  }
                );
              });
            }
          },
          unbind: function () {
            this.parentWatcher.teardown(),
              this.childWatcher && this.childWatcher.teardown();
          },
        },
        pn = {
          priority: Ts,
          params: ["keep-alive", "transition-mode", "inline-template"],
          bind: function () {
            this.el.__vue__ ||
              ((this.keepAlive = this.params.keepAlive),
              this.keepAlive && (this.cache = {}),
              this.params.inlineTemplate &&
                (this.inlineTemplate = ee(this.el, !0)),
              (this.pendingComponentCb = this.Component = null),
              (this.pendingRemovals = 0),
              (this.pendingRemovalCb = null),
              (this.anchor = se("v-component")),
              J(this.el, this.anchor),
              this.el.removeAttribute("is"),
              this.descriptor.ref &&
                this.el.removeAttribute("v-ref:" + c(this.descriptor.ref)),
              this.literal && this.setComponent(this.expression));
          },
          update: function (e) {
            this.literal || this.setComponent(e);
          },
          setComponent: function (e, t) {
            if ((this.invalidatePending(), e)) {
              var a = this;
              this.resolveComponent(e, function () {
                a.mountComponent(t);
              });
            } else
              this.unbuild(!0),
                this.remove(this.childVM, t),
                (this.childVM = null);
          },
          resolveComponent: function (e, t) {
            var a = this;
            (this.pendingComponentCb = g(function (i) {
              (a.ComponentName = i.options.name || e), (a.Component = i), t();
            })),
              this.vm._resolveComponent(e, this.pendingComponentCb);
          },
          mountComponent: function (e) {
            this.unbuild(!0);
            var t = this,
              a = this.Component.options.activate,
              i = this.getCached(),
              s = this.build();
            a && !i
              ? ((this.waitingFor = s),
                a.call(s, function () {
                  t.waitingFor === s &&
                    ((t.waitingFor = null), t.transition(s, e));
                }))
              : (i && s._updateRef(), this.transition(s, e));
          },
          invalidatePending: function () {
            this.pendingComponentCb &&
              (this.pendingComponentCb.cancel(),
              (this.pendingComponentCb = null));
          },
          build: function (e) {
            var t = this.getCached();
            if (t) return t;
            if (this.Component) {
              var a = {
                name: this.ComponentName,
                el: nt(this.el),
                template: this.inlineTemplate,
                parent: this._host || this.vm,
                _linkerCachable: !this.inlineTemplate,
                _ref: this.descriptor.ref,
                _asComponent: !0,
                _isRouterView: this._isRouterView,
                _context: this.vm,
                _scope: this._scope,
                _frag: this._frag,
              };
              e && v(a, e);
              var i = new this.Component(a);
              return this.keepAlive && (this.cache[this.Component.cid] = i), i;
            }
          },
          getCached: function () {
            return this.keepAlive && this.cache[this.Component.cid];
          },
          unbuild: function (e) {
            this.waitingFor &&
              (this.waitingFor.$destroy(), (this.waitingFor = null));
            var t = this.childVM;
            return !t || this.keepAlive
              ? void (t && t._updateRef(!0))
              : void t.$destroy(!1, e);
          },
          remove: function (e, t) {
            var a = this.keepAlive;
            if (e) {
              this.pendingRemovals++, (this.pendingRemovalCb = t);
              var i = this;
              e.$remove(function () {
                i.pendingRemovals--,
                  a || e._cleanup(),
                  !i.pendingRemovals &&
                    i.pendingRemovalCb &&
                    (i.pendingRemovalCb(), (i.pendingRemovalCb = null));
              });
            } else t && t();
          },
          transition: function (e, t) {
            var a = this,
              i = this.childVM;
            switch (((this.childVM = e), a.params.transitionMode)) {
              case "in-out":
                e.$before(a.anchor, function () {
                  a.remove(i, t);
                });
                break;
              case "out-in":
                a.remove(i, function () {
                  e.$before(a.anchor, t);
                });
                break;
              default:
                a.remove(i), e.$before(a.anchor, t);
            }
          },
          unbind: function () {
            if ((this.invalidatePending(), this.unbuild(), this.cache)) {
              for (var e in this.cache) this.cache[e].$destroy();
              this.cache = null;
            }
          },
        },
        Tn = {
          deep: !0,
          update: function (e) {
            e && "string" == typeof e
              ? this.handleObject(Mt(e))
              : f(e)
              ? this.handleObject(e)
              : Ea(e)
              ? this.handleArray(e)
              : this.cleanup();
          },
          handleObject: function (e) {
            this.cleanup(e);
            for (
              var t = (this.prevKeys = Object.keys(e)), a = 0, i = t.length;
              i > a;
              a++
            ) {
              var s = t[a];
              e[s] ? K(this.el, s) : $(this.el, s);
            }
          },
          handleArray: function (e) {
            this.cleanup(e);
            for (var t = 0, a = e.length; a > t; t++) e[t] && K(this.el, e[t]);
            this.prevKeys = e.slice();
          },
          cleanup: function (e) {
            if (this.prevKeys)
              for (var t = this.prevKeys.length; t--; ) {
                var a = this.prevKeys[t];
                !a || (e && gt(e, a)) || $(this.el, a);
              }
          },
        },
        cn = {
          style: gs,
          class: Tn,
          component: pn,
          prop: mn,
          transition: ln,
        },
        dn = oi._propBindingModes,
        Sn = {},
        hn = /^[$_a-zA-Z]+[\w$]*$/,
        vn = /^v-bind:|^:/,
        yn = /^v-on:|^@/,
        fn = /^v-([^:]+)(?:$|:(.*)$)/,
        _n = /\.[^\.]+/g,
        xn = /^(v-bind:|:)?transition$/,
        Mn = ["for", "if"],
        gn = 1e3;
      Bt.terminal = !0;
      var Cn = /[^\w\-:\.]/,
        En = Object.freeze({
          compile: Lt,
          compileAndLinkProps: jt,
          compileRoot: bt,
          terminalDirectives: Mn,
          transclude: qt,
        }),
        Dn = /^v-on:|^@/;
      (sa.prototype._bind = function () {
        var e = this.name,
          t = this.descriptor;
        if (
          ("cloak" !== e || this.vm._isCompiled) &&
          this.el &&
          this.el.removeAttribute
        ) {
          var a = t.attr || "v-" + e;
          this.el.removeAttribute(a);
        }
        var i = t.def;
        if (
          ("function" == typeof i ? (this.update = i) : v(this, i),
          this._setupParams(),
          this.bind && this.bind(),
          (this._bound = !0),
          this.literal)
        )
          this.update && this.update(t.raw);
        else if (
          (this.expression || this.modifiers) &&
          (this.update || this.twoWay) &&
          !this._checkStatement()
        ) {
          var s = this;
          this.update
            ? (this._update = function (e, t) {
                s._locked || s.update(e, t);
              })
            : (this._update = ia);
          var n = this._preProcess ? S(this._preProcess, this) : null,
            u = this._postProcess ? S(this._postProcess, this) : null,
            r = (this._watcher = new Ge(
              this.vm,
              this.expression,
              this._update,
              {
                filters: this.filters,
                twoWay: this.twoWay,
                deep: this.deep,
                preProcess: n,
                postProcess: u,
                scope: this._scope,
              }
            ));
          this.afterBind
            ? this.afterBind()
            : this.update && this.update(r.value);
        }
      }),
        (sa.prototype._setupParams = function () {
          if (this.params) {
            var e = this.params;
            this.params = Object.create(null);
            for (var t, a, i, s = e.length; s--; )
              (t = e[s]),
                (i = p(t)),
                (a = Q(this.el, t)),
                null != a
                  ? this._setupParamWatcher(i, a)
                  : ((a = P(this.el, t)),
                    null != a && (this.params[i] = "" === a ? !0 : a));
          }
        }),
        (sa.prototype._setupParamWatcher = function (e, t) {
          var a = this,
            i = !1,
            s = (this._scope || this.vm).$watch(
              t,
              function (t, s) {
                if (((a.params[e] = t), i)) {
                  var n = a.paramWatchers && a.paramWatchers[e];
                  n && n.call(a, t, s);
                } else i = !0;
              },
              {
                immediate: !0,
                user: !1,
              }
            );
          (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(s);
        }),
        (sa.prototype._checkStatement = function () {
          var e = this.expression;
          if (e && this.acceptStatement && !Pe(e)) {
            var t = Re(e).get,
              a = this._scope || this.vm,
              i = function (e) {
                (a.$event = e), t.call(a, a), (a.$event = null);
              };
            return (
              this.filters && (i = a._applyFilters(i, null, this.filters)),
              this.update(i),
              !0
            );
          }
        }),
        (sa.prototype.set = function (e) {
          this.twoWay &&
            this._withLock(function () {
              this._watcher.set(e);
            });
        }),
        (sa.prototype._withLock = function (e) {
          var t = this;
          (t._locked = !0),
            e.call(t),
            Oa(function () {
              t._locked = !1;
            });
        }),
        (sa.prototype.on = function (e, t, a) {
          V(this.el, e, t, a),
            (this._listeners || (this._listeners = [])).push([e, t]);
        }),
        (sa.prototype._teardown = function () {
          if (this._bound) {
            (this._bound = !1),
              this.unbind && this.unbind(),
              this._watcher && this._watcher.teardown();
            var e,
              t = this._listeners;
            if (t) for (e = t.length; e--; ) X(this.el, t[e][0], t[e][1]);
            var a = this._paramUnwatchFns;
            if (a) for (e = a.length; e--; ) a[e]();
            this.vm = this.el = this._watcher = this._listeners = null;
          }
        });
      var Ln = /[^|]\|[^|]/;
      Le(Ta),
        ta(Ta),
        aa(Ta),
        na(Ta),
        ua(Ta),
        ra(Ta),
        la(Ta),
        oa(Ta),
        ma(Ta),
        pa(Ta);
      var wn = Xs._postProcess,
        kn = /(\d{3})(?=\d)/g,
        Nn = {
          orderBy: Sa,
          filterBy: da,
          limitBy: ca,
          json: {
            read: function (e, t) {
              return "string" == typeof e
                ? e
                : JSON.stringify(e, null, Number(t) || 2);
            },
            write: function (e) {
              try {
                return JSON.parse(e);
              } catch (t) {
                return e;
              }
            },
          },
          capitalize: function (e) {
            return e || 0 === e
              ? ((e = e.toString()), e.charAt(0).toUpperCase() + e.slice(1))
              : "";
          },
          uppercase: function (e) {
            return e || 0 === e ? e.toString().toUpperCase() : "";
          },
          lowercase: function (e) {
            return e || 0 === e ? e.toString().toLowerCase() : "";
          },
          currency: function (e, t) {
            if (((e = parseFloat(e)), !isFinite(e) || (!e && 0 !== e)))
              return "";
            t = null != t ? t : "$";
            var a = Math.abs(e).toFixed(2),
              i = a.slice(0, -3),
              s = i.length % 3,
              n = s > 0 ? i.slice(0, s) + (i.length > 3 ? "," : "") : "",
              u = a.slice(-3),
              r = 0 > e ? "-" : "";
            return t + r + n + i.slice(s).replace(kn, "$1,") + u;
          },
          pluralize: function (e) {
            var t = h(arguments, 1);
            return t.length > 1
              ? t[(e % 10) - 1] || t[t.length - 1]
              : t[0] + (1 === e ? "" : "s");
          },
          debounce: function (e, t) {
            return e ? (t || (t = 300), x(e, t)) : void 0;
          },
        },
        Yn = {
          priority: cs,
          params: ["name"],
          paramWatchers: {
            name: function (e) {
              Js.remove.call(this), e && this.insert(e);
            },
          },
          bind: function () {
            (this.anchor = se("v-partial")),
              J(this.el, this.anchor),
              this.insert(this.params.name);
          },
          insert: function (e) {
            var t = fe(this.vm.$options, "partials", e);
            t && ((this.factory = new dt(this.vm, t)), Js.insert.call(this));
          },
          unbind: function () {
            this.frag && this.frag.destroy();
          },
        },
        jn = {
          priority: hs,
          bind: function () {
            var e = this.vm,
              t = e.$options._content;
            if (!t) return void this.fallback();
            var a = e._context,
              i = this.params && this.params.name;
            if (i) {
              var s = '[slot="' + i + '"]',
                n = t.querySelectorAll(s);
              n.length ? this.tryCompile(va(n, t), a, e) : this.fallback();
            } else this.tryCompile(va(t.childNodes, t, !0), a, e);
          },
          tryCompile: function (e, t, a) {
            e.hasChildNodes() ? this.compile(e, t, a) : this.fallback();
          },
          compile: function (e, t, a) {
            if (e && t) {
              if (
                this.el.hasChildNodes() &&
                1 === e.childNodes.length &&
                1 === e.childNodes[0].nodeType &&
                e.childNodes[0].hasAttribute("v-if")
              ) {
                var i = document.createElement("template");
                i.setAttribute("v-else", ""),
                  (i.innerHTML = this.el.innerHTML),
                  e.appendChild(i);
              }
              var s = a ? a._scope : this._scope;
              this.unlink = t.$compile(e, a, s, this._frag);
            }
            e ? J(this.el, e) : G(this.el);
          },
          fallback: function () {
            this.compile(ee(this.el, !0), this.vm);
          },
          unbind: function () {
            this.unlink && this.unlink();
          },
        },
        bn = v(v({}, jn), {
          priority: jn.priority + 1,
          params: ["name"],
        }),
        zn = {
          slot: jn,
          _namedSlot: bn,
          partial: Yn,
        };
      (Ta.version = "1.0.16"),
        (Ta.options = {
          directives: $s,
          elementDirectives: zn,
          filters: Nn,
          transitions: {},
          components: {},
          partials: {},
          replace: !0,
        }),
        wa && wa.emit("init", Ta),
        (e.exports = Ta);
    }.call(
      t,
      (function () {
        return this;
      })()
    ));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          (e.children = []),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(262),
      n = i(s),
      u = a(261),
      r = i(u),
      l = a(259),
      o = i(l),
      m = a(253),
      p = i(m),
      T = a(254),
      c = i(T),
      d = a(110),
      S = i(d),
      h = a(111),
      v = i(h),
      y = a(260),
      f = i(y),
      _ = a(248),
      x = i(_),
      M = a(249),
      g = i(M),
      C = a(251),
      E = i(C),
      D = a(7),
      L = i(D),
      w = a(6),
      k = i(w),
      N = a(257),
      Y = i(N),
      j = a(256),
      b = i(j),
      z = a(252),
      I = i(z),
      A = a(2),
      O = i(A),
      H = a(1),
      U = i(H);
    t["default"] = {
      data: function () {
        return {
          state: O["default"].state,
          showModal: !1,
        };
      },
      components: {
        Segments: n["default"],
        Notifications: o["default"],
        Heatmap: p["default"],
        Languageselect: c["default"],
        Barchart: S["default"],
        Donutchart: v["default"],
        Sectionmenu: r["default"],
        overview: f["default"],
        actions: x["default"],
        area: g["default"],
        customer: E["default"],
        Radarchart: L["default"],
        Modal: k["default"],
        Message: Y["default"],
        Editarea: I["default"],
        Marketingmessage: b["default"],
      },
      computed: {
        date: function () {
          return (0, U["default"])(
            this.state.currentRevenues.frankfurt.timestamp
          ).format(this.state.lang.date.main);
        },
      },
      methods: {
        reload: function () {
          window.location.reload();
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(111),
      r = i(u),
      l = a(263),
      o = i(l),
      m = a(3),
      p = i(m),
      T = a(138),
      c = i(T),
      d = function (e) {
        return [
          "dry_action",
          "drugs_action",
          "meat_action",
          "veg_action",
          "convenience_action",
        ].reduce(function (t, a) {
          return t + e[a];
        }, 0);
      };
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      computed: {
        balken: function () {
          var e = p["default"].takeRight(this.state.revenues, 3, 1)[0];
          return [
            [this.state.lang.cities.munich, (d(e.munich) / e.munich.all) * 100],
            [this.state.lang.cities.berlin, (d(e.berlin) / e.berlin.all) * 100],
            [
              this.state.lang.cities.dresden,
              (d(e.dresden) / e.dresden.all) * 100,
            ],
          ];
        },
        topSeller: function () {
          var e = this;
          return p["default"].take(
            c["default"].filter(function (t) {
              return t.segment === e.state.currentSegment;
            }),
            3
          );
        },
        lowSeller: function () {
          var e = this;
          return p["default"].takeRight(
            c["default"].filter(function (t) {
              return t.segment === e.state.currentSegment;
            }),
            3
          );
        },
      },
      components: {
        Donutchart: r["default"],
        Smalldonutchart: o["default"],
      },
      methods: {
        calcPercentage: function (e) {
          return (
            ((e /
              this.state.currentRevenues.frankfurt[this.state.currentSegment]) *
              100) /
            60
          );
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(3),
      r = i(u),
      l = a(110),
      o = i(l),
      m = a(7),
      p = i(m);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      computed: {
        stunden: function () {
          for (var e = [], t = 8; 21 > t; t++) e.push(t.toString());
          return e;
        },
        tage: function () {
          return ["Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        },
        tageswerte: function () {
          for (
            var e = r["default"].slice(this.state.segments, 1), t = [], a = 0;
            a < e.length;
            a++
          ) {
            var i = [];
            i.push(e[a]), i.push("#cccccc");
            for (var s = [], n = 0; 6 > n; n++)
              s.push(Math.floor(5e3 * Math.random() + 5e3));
            i.push(s), t.push(i);
          }
          return t;
        },
        stundenwerte: function () {
          this.state.currentRevenues;
          for (
            var e = r["default"].slice(this.state.segments, 1), t = [], a = 0;
            a < e.length;
            a++
          ) {
            var i = [];
            i.push(e[a]), i.push("#cccccc");
            for (var s = [], n = 0; 13 > n; n++)
              s.push(Math.floor(50 * Math.random() + 50));
            s.push(0), i.push(s), t.push(i);
          }
          return t;
        },
      },
      components: {
        Barchart: o["default"],
        Radarchart: p["default"],
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      props: ["schwelle", "bars"],
      methods: {
        valueWidth: function (e) {
          return (120 * e) / this.max + "px";
        },
      },
      computed: {
        max: function () {
          return this.bars.reduce(function (e, t) {
            return t[1] > e ? t[1] : e;
          }, 0);
        },
        labels: function () {
          return this.bars.map(function (e) {
            return e[0];
          });
        },
        values: function () {
          return this.bars.map(function (e) {
            return e[1];
          });
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    function s(e) {
      return (0.5 * Math.random() + 0.75) * e;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var n = a(2),
      u = i(n),
      r = a(5),
      l = i(r),
      o = void 0;
    t["default"] = {
      data: function () {
        return {
          state: u["default"].state,
        };
      },
      computed: {
        chartData: function () {
          var e =
              this.state.currentRevenues.frankfurt[this.state.currentSegment] /
              1300,
            t = s(
              this.state.currentRevenues.frankfurt[this.state.currentSegment] /
                1300
            );
          return (
            this.state.heatmapAnnotations.veg &&
              ("veg" === this.state.currentSegment && (e /= 5),
              "all" === this.state.currentSegment && (e /= 2)),
            this.state.heatmapAnnotations.dry &&
              ("dry" === this.state.currentSegment && (e /= 4),
              "all" === this.state.currentSegment && (e /= 2)),
            {
              labels: [
                this.state.lang.cities.frankfurt,
                this.state.lang.cities.munich,
                this.state.lang.cities.berlin,
                this.state.lang.cities.dresden,
              ],
              datasets: [
                {
                  label: "Ist-Zahlen",
                  strokeColor: "rgba(151,187,205,0)",
                  fillColor: "#1564A9",
                  pointColor: "rgba(151,187,205,0)",
                  pointStrokeColor: "rgba(220,220,220,0)",
                  pointHighlightFill: "rgba(220,220,220,0)",
                  pointHighlightStroke: "rgba(151,187,205,1)",
                  data: [
                    e,
                    this.state.currentRevenues.frankfurt[
                      this.state.currentSegment
                    ] / 1100,
                    this.state.currentRevenues.frankfurt[
                      this.state.currentSegment
                    ] / 1300,
                    this.state.currentRevenues.frankfurt[
                      this.state.currentSegment
                    ] / 1600,
                  ],
                },
                {
                  label: "Plan-Zahlen",
                  strokeColor: "rgba(220,220,220,0)",
                  fillColor: "#D3DFED",
                  pointColor: "rgba(220,220,220,0)",
                  pointStrokeColor: "rgba(220,220,220,0)",
                  pointHighlightFill: "rgba(220,220,220,0)",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [
                    t,
                    s(
                      this.state.currentRevenues.frankfurt[
                        this.state.currentSegment
                      ] / 1100
                    ),
                    s(
                      this.state.currentRevenues.frankfurt[
                        this.state.currentSegment
                      ] / 1300
                    ),
                    s(
                      this.state.currentRevenues.frankfurt[
                        this.state.currentSegment
                      ] / 1600
                    ),
                  ],
                },
              ],
            }
          );
        },
      },
      ready: function () {
        this.createChart();
      },
      methods: {
        checkWarning: function () {
          var e = "";
          return (
            "veg" === this.state.heatmapAnnotations.veg &&
              ("all" === this.state.currentSegment) |
                ("veg" === this.state.currentSegment) &&
              (e = "warning"),
            "dry" === this.state.heatmapAnnotations.dry &&
              ("all" === this.state.currentSegment) |
                ("dry" === this.state.currentSegment) &&
              (e = "warning"),
            e
          );
        },
        destroyChart: function () {
          o.destroy();
        },
        createChart: function () {
          var e = document.getElementById("myBarChart").getContext("2d");
          o = new l["default"](e).Bar(this.chartData, {
            scaleShowGridLines: !1,
            datasetStrokeWidth: 1,
            showTooltips: !1,
            scaleBeginAtZero: !0,
            scaleStartValue: 0,
            scaleFontSize: 10,
            scaleOverride: !1,
            scaleSteps: 4,
            scaleStepWidth: 1,
            barDatasetSpacing: 3,
            barValueSpacing: 40,
            animationSteps: 1,
            responsive: !1,
            maintainAspectRatio: !1,
            scaleGridLineColor: "rgba(0,0,0,0)",
            scaleGridLineWidth: 0,
          });
        },
      },
      watch: {
        chartData: function () {
          this.destroyChart(), this.createChart();
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(7),
      r = i(u),
      l = a(3),
      o = i(l),
      m = a(12),
      p = i(m);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
          stunden: o["default"].range(8, 21),
        };
      },
      computed: {
        tage: function () {
          return this.state.lang.radarchart.days;
        },
        sections: function () {
          return [
            "dry",
            "drugs",
            "milk",
            "frozen",
            "meat",
            "veg",
            "magazines",
            "convenience",
          ];
        },
        tageswerte: function () {
          for (
            var e = o["default"].slice(this.state.segments, 1), t = [], a = 0;
            a < e.length;
            a++
          ) {
            var i = [];
            i.push(e[a]), i.push("#cccccc");
            for (var s = [], n = 0; 6 > n; n++)
              s.push(Math.floor(35 * Math.random() + 5));
            i.push(s), t.push(i);
          }
          return t;
        },
        stundenwerte: function () {
          for (
            var e = o["default"].slice(this.state.segments, 1), t = [], a = 0;
            a < e.length;
            a++
          ) {
            var i = [];
            i.push(e[a]), i.push("#cccccc");
            for (var s = [], n = 0; 13 > n; n++)
              s.push(Math.floor(35 * Math.random() + 5));
            s.push(0), i.push(s), t.push(i);
          }
          return t;
        },
        werte: function () {
          return [
            ["Aktuell", "#cccccc", [5.8, 8.1, 7.6, 2, 4.3, 6]],
            ["Neujahr", "#cccccc", [7, 7, 7, 7, 7, 7]],
            ["Vorjahr", "#E87836", [2.8, 3.1, 3.6, 4, 5.3, 7]],
          ];
        },
        values: function () {
          return [
            ["Neujahr", "#cccccc", [7, 7, 7, 7, 7, 7]],
            ["Vorjahr", "#bbb", [2.8, 3.1, 3.6, 4, 5.3, 7]],
          ];
        },
        bouncerate: function () {
          return this.state.currentRevenues, 7 + 2 * Math.random();
        },
        customers: function () {
          return (
            this.state.currentRevenues, parseInt(35e3 + 1e4 * Math.random(), 10)
          );
        },
        visits: function () {
          return parseInt(this.customers + 5e3 + 5e3 * Math.random(), 10);
        },
        visitsPerCustomer: function () {
          return this.visits / this.customers;
        },
        dwellTime: function () {
          return (
            this.state.currentRevenues,
            parseInt(30 + 10 * Math.random(), 10) +
              "m " +
              parseInt(1 * Math.random() * 59, 10) +
              "s"
          );
        },
      },
      components: {
        Radarchart: r["default"],
      },
      methods: {
        convenienceClick: function () {
          p["default"].init();
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    function s(e, t, a, i) {
      return "all" === t ? i : e === t ? i : a;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var n = a(2),
      u = i(n),
      r = a(5),
      l = i(r),
      o = a(8),
      m = i(o),
      p = a(9),
      T = i(p),
      c = void 0;
    t["default"] = {
      data: function () {
        return {
          state: u["default"].state,
        };
      },
      props: ["schwelle"],
      computed: {
        rest: function () {
          var e = this.state.currentRevenues.frankfurt;
          return (
            (e.dry_action +
              e.drugs_action +
              e.convenience_action +
              e.meat_action +
              e.veg_action) /
            e.all
          );
        },
        currentSegment: function () {
          return this.state.currentSegment;
        },
        li_veg: function () {
          return parseInt(
            (this.state.currentRevenues.frankfurt.veg_action /
              this.state.currentRevenues.frankfurt.all) *
              100 +
              0.5,
            10
          );
        },
        li_dry: function () {
          return parseInt(
            (this.state.currentRevenues.frankfurt.dry_action /
              this.state.currentRevenues.frankfurt.all) *
              100 +
              0.5,
            10
          );
        },
        li_meat: function () {
          return parseInt(
            (this.state.currentRevenues.frankfurt.meat_action /
              this.state.currentRevenues.frankfurt.all) *
              100 +
              0.5,
            10
          );
        },
        li_drugs: function () {
          return parseInt(
            (this.state.currentRevenues.frankfurt.drugs_action /
              this.state.currentRevenues.frankfurt.all) *
              100 +
              0.5,
            10
          );
        },
        li_conv: function () {
          return parseInt(
            (this.state.currentRevenues.frankfurt.convenience_action /
              this.state.currentRevenues.frankfurt.all) *
              100 +
              0.5,
            10
          );
        },
        graphData: function () {
          var e = this.state.currentRevenues.frankfurt;
          return [
            {
              value: parseInt((e.veg_action / e.all) * 100 + 0.5, 10),
              color: s("veg", this.state.currentSegment, "#CBE2F3", "#0C8FD1"),
              highlight: "#0C8FD1",
              label: "",
            },
            {
              value: parseInt((e.dry_action / e.all) * 100 + 0.5, 10),
              color: s("dry", this.state.currentSegment, "#D1E6F5", "#55A5DB"),
              highlight: "#55A5DB",
              label: "",
            },
            {
              value: parseInt((e.meat_action / e.all) * 100 + 0.5, 10),
              color: s("meat", this.state.currentSegment, "#D6E8F5", "#84BAE4"),
              highlight: "#84BAE4",
              label: "",
            },
            {
              value: parseInt((e.drugs_action / e.all) * 100 + 0.5, 10),
              color: s(
                "drugs",
                this.state.currentSegment,
                "#E0EDF8",
                "#ACD2ED"
              ),
              highlight: "#ACD2ED",
              label: "",
            },
            {
              value: parseInt((e.convenience_action / e.all) * 100 + 0.5, 10),
              color: s(
                "convenience",
                this.state.currentSegment,
                "#E9F2F9",
                "#C0DCF1"
              ),
              highlight: "#C0DCF1",
              label: "",
            },
            {
              value: parseInt(100 * (1 - this.rest) + 0.5, 10),
              color: "#D6E8F5",
              highlight: "#D6E8F5",
              label: "",
            },
          ];
        },
      },
      ready: function () {
        this.createChart();
      },
      watch: {
        graphData: function (e, t) {
          this.destroyChart(), this.createChart();
        },
      },
      methods: {
        dryClick: function () {
          m["default"].init();
        },
        vegClick: function () {
          console.log("veg");
          alert("test");
          T["default"].init();
        },
        destroyChart: function () {
          c.destroy();
        },
        createChart: function () {
          var e = this.$el
            .getElementsByClassName("donutchart__canvas")
            .item(0)
            .getContext("2d");
          c = new l["default"](e).Doughnut(this.graphData, {
            segmentShowStroke: !1,
            scaleShowGridLines: !1,
            datasetStrokeWidth: 1,
            showTooltips: !0,
            tooltipFillColor: "#f0f0f0",
            tooltipFontColor: "#999999",
            tooltipBorderColor: "#999999",
            tooltipCornerRadius: 0,
            tooltipCaretSize: 5,
            tooltipTemplate: "<%= value %>%",
            scaleBeginAtZero: !0,
            scaleStartValue: 0,
            scaleFontSize: 10,
            responsive: !1,
            animationSteps: 1,
            scaleGridLineColor: "rgba(0,0,0,0)",
            scaleGridLineWidth: 0,
          });
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(6),
      r = i(u),
      l = a(135),
      o = i(l),
      m = a(3),
      p = i(m),
      T = a(1),
      c = i(T),
      d = o["default"].map(function (e) {
        return p["default"].assign({}, e, {
          selected: !1,
          image: a(265)("./" + e.image),
        });
      });
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
          selectedProduct: {},
        };
      },
      computed: {
        products: function () {
          var e = this;
          if (!this.state.editArea) return [];
          var t = d
            .filter(function (t) {
              return t.area === e.state.editArea.area;
            })
            .map(function (t) {
              return p["default"].assign({}, t, {
                selected: !1,
                supDate: (0, c["default"])(
                  e.state.currentRevenues.frankfurt.timestamp
                ).add(Math.floor(3 * Math.random() + 1), "d"),
              });
            });
          return (t[0].selected = !0), (this.selectedProduct = t[0]), t;
        },
      },
      components: {
        Modal: r["default"],
      },
      events: {
        modalSave: function () {
          this.state.editArea.save();
          // console.log("save here");
        localStorage.setItem("AICORE-ACTION", "Navigate");
        localStorage.setItem("AICORE-OBJECT", "Anomaly");
        localStorage.setItem("AICORE-OBJECTID", "1662");

		  // var requestOptions = {
			// method: 'GET',
			// redirect: 'follow'
		  // };
		  
		  // fetch("http://localhost:4004/browse/EqCondsQuery(1)", requestOptions)
			// .then(response => response.text())
			// .then(result => console.log(result))
			// .catch(error => console.log('error', error));	  

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		
		var raw = JSON.stringify({
		  "followUpDocNum": "201920023"
		});
		
		var requestOptions = {
		  method: 'PATCH',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};
		
		fetch("/browse/EqCondsQuery(1)", requestOptions)
		  .then(response => response.text())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));

        },
        modalCancel: function () {
          this.state.editArea = !1;
          // console.log("cancel here.");
          const btn = document.getElementById('asd');
          btn.textContent = 'Button clicked';

btn.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Button clicked';
  } else {
    btn.textContent = initialText;
  }
});

        },
      },
      methods: {
        select: function (e) {
          (this.selectedProduct.selected = !1),
            (this.selectedProduct = e),
            (e.selected = !0);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s,
      n = a(2),
      u = i(n),
      r = a(175),
      l = i(r),
      o = a(8),
      m = i(o),
      p = a(9),
      T = i(p),
      c = function (e) {
        return {
          x: 4 * e.x,
          y: 4 * e.y,
          value: e.value,
        };
      },
      d = function (e) {
        return {
          x: e.x,
          y: 100 - e.y,
          value: e.value,
        };
      };
    t["default"] = {
      data: function () {
        return {
          state: u["default"].state,
        };
      },
      ready: function () {
        this.createChart();
      },
      methods: {
        createChart: function () {
          var e = {
            container: this.$el
              .getElementsByClassName("heatmap__container")
              .item(0),
            radius: 30,
            maxOpacity: 0.5,
            minOpacity: 0,
            blur: 0.85,
            gradient: {
              ".14": "#e8f5fb",
              ".15": "#a6c8df",
              ".29": "#a6c8df",
              ".3": "#9e76b6",
              ".49": "#9e76b6",
              ".5": "#f20c12",
            },
          };
          s = l["default"].create(e);
        },
        dryClick: function () {
          m["default"].init();
        },
        vegClick: function () {
          console.log("veg");
          alert("test");
          T["default"].init();
        },
      },
      computed: {
        chartData: function () {
          return {
            max: 2e3,
            min: 0,
            data: this.state.heatmapData.map(d).map(c),
          };
        },
      },
      watch: {
        chartData: function () {
          s.setData(this.chartData);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      methods: {
        setLanguage: function (e) {
          n["default"].setLanguage(e);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s,
      n = a(2),
      u = i(n),
      r = a(5),
      l = i(r),
      o = a(3),
      m = i(o),
      p = a(10),
      T = i(p);
    t["default"] = {
      data: function () {
        return {
          state: u["default"].state,
        };
      },
      computed: {
        graphData: function () {
          return {
            labels: ["", "", "", "", "", ""],
            datasets: [
              {
                label: this.state.lang.linechart.lastYear,
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#D6E8F5",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "rgba(220,220,220,0)",
                pointHighlightFill: "rgba(220,220,220,0)",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: m["default"]
                  .map(
                    m["default"].takeRight(this.state.revenues, 6),
                    "lastYear." + this.state.currentSegment
                  )
                  .map(function (e) {
                    return e / 1e3;
                  }),
              },
              {
                label: this.state.lang.linechart.plan,
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#43A9DB",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "rgba(220,220,220,0)",
                pointHighlightFill: "rgba(220,220,220,0)",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: m["default"]
                  .map(
                    m["default"].takeRight(this.state.revenues, 6),
                    "plan." + this.state.currentSegment
                  )
                  .map(function (e) {
                    return e / 1e3;
                  }),
              },
              {
                label: this.state.lang.linechart.current,
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "#1564A9",
                pointColor: "rgba(220,220,220,0)",
                pointStrokeColor: "rgba(220,220,220,0)",
                pointHighlightFill: "rgba(220,220,220,0)",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: m["default"]
                  .map(
                    m["default"].take(
                      m["default"].takeRight(this.state.revenues, 6),
                      4
                    ),
                    "frankfurt." + this.state.currentSegment
                  )
                  .map(function (e) {
                    return e / 1e3;
                  }),
              },
            ],
          };
        },
        legendX: function () {
          return m["default"].map(
            m["default"].takeRight(this.state.revenues, 6),
            "frankfurt"
          );
        },
      },
      ready: function () {
        this.createChart();
      },
      watch: {
        graphData: function (e, t) {
          this.destroyChart(), this.createChart();
        },
      },
      methods: {
        destroyChart: function () {
          s.destroy();
        },
        createChart: function () {
          var e = this.$el
            .getElementsByClassName("linechart__canvas")
            .item(0)
            .getContext("2d");
          s = new l["default"](e).Line(this.graphData, {
            bezierCurve: !1,
            pointDot: !1,
            scaleShowGridLines: !1,
            datasetStrokeWidth: 1,
            animationSteps: 1,
            showTooltips: !1,
            scaleBeginAtZero: !0,
            scaleStartValue: 0,
            scaleFontSize: 10,
            maintainAspectRatio: !1,
            responsive: !1,
            scaleGridLineColor: "rgba(0,0,0,0)",
            scaleGridLineWidth: 0,
            scaleLabel: function (e) {
              return (0, T["default"])(e.value).format("0");
            },
          });
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(6),
      r = i(u),
      l = a(7),
      o = i(l),
      m = a(3),
      p = i(m);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
          stunden: p["default"].range(8, 21),
          layouts: [
            {
              image: a(187),
              selected: !0,
            },
            {
              image: a(188),
              selected: !1,
            },
          ],
        };
      },
      computed: {
        stundenwerte: function () {
          for (
            var e = p["default"].slice(this.state.segments, 1), t = [], a = 0;
            a < e.length;
            a++
          ) {
            var i = [];
            i.push(e[a]), i.push("#cccccc");
            for (var s = [], n = 0; 13 > n; n++)
              s.push(Math.floor(35 * Math.random() + 5));
            s.push(0), i.push(s), t.push(i);
          }
          return t;
        },
      },
      components: {
        Modal: r["default"],
        Radarchart: o["default"],
      },
      events: {
        modalSave: function () {
          this.state.marketingMessage.save();
        },
        modalCancel: function () {
          this.state.marketingMessage = !1;
        },
      },
      methods: {
        selectLayout: function (e) {
          this.layouts.forEach(function (e) {
            return (e.selected = !1);
          }),
            (e.selected = !0);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(6),
      r = i(u);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      components: {
        Modal: r["default"],
      },
      events: {
        modalSave: function () {
          this.state.message.save();
        },
        modalCancel: function () {
          this.state.message = !1;
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      props: {
        show: {
          type: Boolean,
          required: !0,
        },
      },
      methods: {
        save: function () {
          this.$dispatch("modalSave");
        },
        cancel: function () {
          this.$dispatch("modalCancel");
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      props: ["notification"],
      methods: {
        getText: function (e) {
          return this.state.lang.notifications.messages[e];
        },
        click: function () {
          (this.notification.seen = !0),
            this.notification.action(this.notification);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(258),
      r = i(u);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      methods: {
        getText: function (e) {
          return this.state.lang.notifications.messages[e];
        },
        click: function (e) {
          e.action();
        },
      },
      computed: {
        notifications: function () {
          return this.state.notifications
            .filter(function (e) {
              return e.show;
            })
            .reverse();
        },
        activeNotifications: function () {
          return this.notifications.filter(function (e) {
            return !e.seen;
          }).length;
        },
      },
      components: {
        Notification: r["default"],
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(255),
      r = i(u),
      l = a(250),
      o = i(l),
      m = a(3),
      p = i(m);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      computed: {
        revenue: function () {
          return Math.round(
            p["default"]
              .takeRight(
                p["default"].map(
                  this.state.revenues,
                  "frankfurt." + this.state.currentSegment
                ),
                6
              )
              .reduce(function (e, t) {
                return e + t;
              })
          );
        },
        bars: function () {
          return [
            [
              document.lbl_frankfurt,
              this.state.currentRevenues.frankfurt[this.state.currentSegment] /
                1e3,
            ],
            [
              document.lbl_munchen,
              this.state.currentRevenues.munich[this.state.currentSegment] /
                1e3,
            ],
            [
              document.lbl_berlin,
              this.state.currentRevenues.berlin[this.state.currentSegment] /
                1e3,
            ],
            [
              document.lbl_dresden,
              this.state.currentRevenues.dresden[this.state.currentSegment] /
                1e3,
            ],
          ];
        },
        balken: function () {
          return [
            [
              document.lbl_frankfurt,
              (0.4 *
                this.state.currentRevenues.frankfurt[
                  this.state.currentSegment
                ]) /
                1e3,
            ],
            [
              document.lbl_munchen,
              (0.4 *
                this.state.currentRevenues.munich[this.state.currentSegment]) /
                1e3,
            ],
            [
              document.lbl_berlin,
              (0.4 *
                this.state.currentRevenues.berlin[this.state.currentSegment]) /
                1e3,
            ],
            [
              document.lbl_dresden,
              (0.4 *
                this.state.currentRevenues.dresden[this.state.currentSegment]) /
                1e3,
            ],
          ];
        },
        threshold: function () {
          return "all" === this.state.currentSegment ? 150 : 12;
        },
        thresholdRaw: function () {
          return 0.4 * this.threshold;
        },
      },
      components: {
        Linechart: r["default"],
        Balkenchart: o["default"],
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    function s(e, t, a, i) {
      var s =
          arguments.length <= 4 || void 0 === arguments[4]
            ? "#E87836"
            : arguments[4],
        n = a;
      return (
        e === t && (n = i),
        "veg" === r["default"].state.heatmapAnnotations.veg &&
          "veg" === e &&
          (n = s),
        "dry" === r["default"].state.heatmapAnnotations.dry &&
          "dry" === e &&
          (n = s),
        n
      );
    }

    function n(e, t) {
      if (e.length > t.length) return e;
      if (e.length === t.length) return e;
      for (; e.length < t.length; ) e.push(0);
      return e;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var u = a(2),
      r = i(u),
      l = a(5),
      o = i(l),
      m = a(3),
      p = i(m);
    t["default"] = {
      data: function () {
        return {
          state: r["default"].state,
        };
      },
      computed: {
        weekday: function () {
          return new Date(
            this.state.currentRevenues.frankfurt.timestamp
          ).getDay();
        },
        showlegend: function () {
          return !this.hidelegend;
        },
        drawdays: function () {
          return void 0 === this.daymode
            ? !1
            : "true" === this.daymode
            ? !0
            : !1;
        },
        items: function () {
          return this.values.map(function (e) {
            return e[0];
          });
        },
        legend: function () {
          var e = "",
            t = [];
          "percent" === this.mode && (e = " %");
          for (var a = 5; a > -1; a--)
            t.push((a * parseInt(this.stepwidth, 10) * 2).toString().concat(e));
          return "NaN" === t[0] ? [] : t;
        },
        graphData: function () {
          return {
            labels: this.labels,
            datasets: [],
          };
        },
      },
      props: [
        "labels",
        "values",
        "mode",
        "maxval",
        "stepwidth",
        "hidelegend",
        "hilitecolor",
        "strokecolor",
        "filter",
        "showlegend",
        "daymode",
      ],
      ready: function () {
        this.createChart();
      },
      watch: {
        values: function (e, t) {
          this.destroyChart(), this.createChart();
        },
        "state.checkedElements": function (e, t) {
          this.destroyChart(), this.createChart();
        },
        "state.currentSegment": function (e, t) {
          -1 ===
            p["default"].indexOf(
              this.state.checkedElements,
              this.state.currentSegment
            ) &&
            ((this.state.checkedElements = []),
            this.state.checkedElements.push(this.state.currentSegment));
        },
        "state.currentRevenues": function () {
          this.destroyChart(), this.createChart();
        },
      },
      methods: {
        checkWarning: function (e) {
          var t = "";
          return (
            "veg" === this.state.heatmapAnnotations.veg &&
              "veg" === e &&
              (t = "warning"),
            "dry" === this.state.heatmapAnnotations.dry &&
              "dry" === e &&
              (t = "warning"),
            t
          );
        },
        setActive: function (e) {
          r["default"].setSegment(e);
        },
        redraw: function () {
          -1 ===
            p["default"].indexOf(
              this.state.checkedElements,
              this.state.currentSegment
            ) &&
            ((this.state.checkedElements = []),
            this.state.checkedElements.push(this.state.currentSegment)),
            this.destroyChart(),
            this.createChart();
        },
        destroyChart: function () {
          this.myNewRadarChart.destroy();
        },
        createChart: function () {
          var e = [],
            t = 0,
            a = [],
            i = 1;
          for (
            -1 ===
              p["default"].indexOf(
                this.state.checkedElements,
                this.state.currentSegment
              ) &&
              ((this.state.checkedElements = []),
              this.state.checkedElements.push(this.state.currentSegment)),
              ("" === this.strokecolor) | (void 0 === this.strokecolor) &&
                (this.strokecolor = "#ccc"),
              ("" === this.hilitecolor) | (void 0 === this.hilitecolor) &&
                (this.hilitecolor = "#1063aa"),
              i = parseInt(this.maxval, 10),
              t = 0;
            t < this.labels.length;
            t++
          )
            a.push(i);
          for (
            e.push({
              label: "",
              strokeColor: "rgba(0,0,0,0.1)",
              data: a,
              fillColor: "rgba(0,0,0,0)",
              pointColor: "rgba(0,0,0,0)",
              pointHighlightFill: "rgba(0,0,0,0)",
              pointHighlightStroke: "rgba(0,0,0,1)",
              pointStrokeColor: "rgba(0,0,0,0)",
            }),
              ("" === this.stepwidth) | (void 0 === this.stepwidth) &&
                (this.stepwidth = parseInt(i / 10, 10)),
              t = 0;
            t < this.values.length;
            t++
          )
            p["default"].indexOf(
              this.state.checkedElements,
              this.values[t][0]
            ) > -1 &&
              e.push({
                label: this.values[t][0],
                strokeColor: s(
                  this.values[t][0],
                  this.state.currentSegment,
                  this.values[t][1],
                  this.hilitecolor
                ),
                data: n(this.values[t][2], this.labels),
                fillColor: "rgba(0,0,0,0)",
                pointColor: "rgba(0,0,0,0)",
                pointHighlightFill: "rgba(0,0,0,0)",
                pointHighlightStroke: "rgba(120,0,0,1)",
                pointStrokeColor: "rgba(0,0,0,0)",
              });
          var u = this.$el
            .getElementsByClassName("radar_canvas")
            .item(0)
            .getContext("2d");
          this.drawdays && (this.labels = [" ", " ", " ", " ", " ", " "]),
            (this.myNewRadarChart = new o["default"](u).Radar(
              {
                labels: this.labels,
                datasets: e,
              },
              {
                segmentShowStroke: !1,
                legendTemplate:
                  '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=1; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
                scaleShowGridLines: !1,
                datasetStrokeWidth: 1,
                showTooltips: !1,
                tooltipFillColor: "#f0f0f0",
                tooltipFontColor: "#999999",
                tooltipBorderColor: "#999999",
                tooltipCornerRadius: 0,
                tooltipCaretSize: 5,
                tooltipTemplate: "<%= value %>%",
                scaleBeginAtZero: !0,
                scaleStartValue: 0,
                scaleOverride: !0,
                scaleSteps: 10,
                scaleStepWidth: this.stepwidth,
                scaleFontSize: 10,
                scaleShowLabels: !1,
                datasetFill: !0,
                responsive: !1,
                animationSteps: 1,
                scaleShowLine: !1,
                scaleGridLineColor: "rgba(0,0,0,0)",
                scaleGridLineWidth: 0,
              }
            ));
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      methods: {
        setSection: function (e) {
          n["default"].setSection(e);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      methods: {
        setSegment: function (e) {
          n["default"].setSegment(e);
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(5),
      r = i(u);
    t["default"] = {
      data: function () {
        return {
          state: n["default"].state,
        };
      },
      computed: {
        graphData: function () {
          return [
            {
              value: this.wert[1],
              color: "#1363A8",
              highlight: "#D6E8F5",
              label: "",
            },
            {
              value: 100 - this.wert[1],
              color: "#D6E8F5",
              highlight: "#D6E8F5",
              label: "",
            },
          ];
        },
      },
      props: ["wert"],
      ready: function () {
        this.createChart();
      },
      watch: {
        graphData: function (e, t) {
          this.destroyChart(), this.createChart();
        },
      },
      methods: {
        destroyChart: function () {
          this.chart.destroy();
        },
        createChart: function () {
          var e = this.$el
            .getElementsByClassName("smalldonutchart__canvas")
            .item(0)
            .getContext("2d");
          this.chart = new r["default"](e).Doughnut(this.graphData, {
            segmentShowStroke: !1,
            scaleShowGridLines: !1,
            datasetStrokeWidth: 1,
            showTooltips: !1,
            tooltipFillColor: "#f0f0f0",
            tooltipFontColor: "#999999",
            tooltipBorderColor: "#999999",
            tooltipCornerRadius: 0,
            tooltipCaretSize: 5,
            tooltipTemplate: "<%= value %>%",
            scaleBeginAtZero: !0,
            scaleStartValue: 0,
            scaleFontSize: 10,
            responsive: !1,
            animationSteps: 1,
            percentageInnerCutout: 66,
            scaleGridLineColor: "rgba(0,0,0,0)",
            scaleGridLineWidth: 0,
          });
        },
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(150),
      n = i(s),
      u = a(3),
      r = i(u);
    t["default"] = n["default"].map(function (e) {
      return r["default"].assign({}, e, {
        area: parseFloat(e.area),
        active: parseFloat(e.active),
        currentSalesRate: parseFloat(99),
        lastSalesRate: parseFloat(e.lastSalesRate),
        currentRevenue: parseFloat(e.currentRevenue),
        lastRevenue: parseFloat(e.lastRevenue),
        // currentSalesRate: "Damage noise with cracking",
        // lastSalesRate: "LGP-LED assembling machine robotic arm 4",
        // currentRevenue: "0.9962",
        // lastRevenue: "April 20, 2022, 6:00:00 AM",
        stock: parseFloat(e.stock),
        sales: parseFloat(e.sales),
      });
    });
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(152),
      n = i(s),
      u = a(3),
      r = i(u);
    t["default"] = n["default"].map(function (e) {
      return r["default"].assign({}, e, {
        dry: parseFloat(e.dry),
        dry_action: parseFloat(e.dry_action),
        drugs: parseFloat(e.drugs),
        drugs_action: parseFloat(e.drugs_action),
        milk: parseFloat(e.milk),
        frozen: parseFloat(e.frozen),
        meat: parseFloat(e.meat),
        meat_action: parseFloat(e.meat_action),
        veg: parseFloat(e.veg),
        veg_action: parseFloat(e.veg_action),
        magazines: parseFloat(e.magazines),
        convenience: parseFloat(e.convenience),
        convenience_action: parseFloat(e.convenience_action),
      });
    });
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(178),
      n = i(s),
      u = a(3),
      r = i(u),
      l = {
        "Golden Glow": a(219),
        "Red Ruby": a(218),
        "Pink Power": a(216),
        "Green Garden": a(217),
        "Purple Passion": a(221),
        "Orange Orchard": a(220),
      },
      o = function (e) {
        return r["default"].assign({}, e, {
          image: l[e.name],
        });
      },
      m = [
        {
          name: "Golden Glow",
          count: 15,
        },
        {
          name: "Orange Orchard",
          count: 13,
        },
        {
          name: "Pink Power",
          count: 1,
        },
      ],
      p = [
        {
          name: "Golden Glow",
          count: 50,
        },
        {
          name: "Orange Orchard",
          count: 45,
        },
        {
          name: "Pink Power",
          count: 42,
        },
      ];
    (p = p.map(o)), (m = m.map(o));
    var T = {
      day: m,
      week: p,
    };
    t["default"] = T;
    var c = function () {
      // (0, n["default"])("GET", "http://46.101.226.88:3000/week").end(function (
      //   e,
      //   t
      // ) {
      //   console.log("hello");
      //   e || (T.week = t.body.map(o));
      // }),
      //   (0, n["default"])("GET", "http://46.101.226.88:3000/day").end(function (
      //     e,
      //     t
      //   ) {
      //     e || (T.day = t.body.map(o));
      //   });
    };
    c(), setInterval(c, 3e4);
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(153),
      n = i(s),
      u = a(3),
      r = i(u);
    t["default"] = n["default"].map(function (e) {
      return r["default"].assign({}, e, {
        revenue: (40 * parseFloat(e.revenue)) / 100,
        salesrate: parseFloat(e.salesrate),
      });
    });
  },
  function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t["default"] = document.first_lang);
  },
  function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t["default"] = document.lang_english);
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(139),
      n = i(s),
      u = a(140),
      r = i(u);
    t["default"] = {
      de: n["default"],
      en: r["default"],
    };
  },
  function (e, t) {
    "use strict";
    !(function () {
      var t = {
        delimiters: {
          thousands: ".",
          decimal: ",",
        },
        abbreviations: {
          thousand: "k",
          million: "m",
          billion: "b",
          trillion: "t",
        },
        ordinal: function (e) {
          return ".";
        },
        currency: {
          symbol: "€",
        },
      };
      "undefined" != typeof e && e.exports && (e.exports = t);
    })();
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(8),
      n = i(s),
      u = a(9),
      r = i(u),
      l = a(12),
      o = i(l);
    t["default"] = {
      convenienceOffer: {
        seen: !1,
        type: "alert",
        body: "convenienceOffer",
        action: function (e) {
          o["default"].init();
        },
      },
      convenienceChange: {
        type: "cart",
        body: "convenienceChange",
        action: function () {},
      },
      dry: {
        type: "cart",
        body: "dry",
        action: function (e) {
          n["default"].init();
        },
      },
      dryChange: {
        type: "cart",
        body: "dryChange",
        action: function () {},
      },
      veg: {
        type: "cart",
        body: "veg",
        action: function (e) {
          r["default"].init();
        },
      },
      vegChange: {
        type: "cart",
        body: "vegChange",
        action: function () {},
      },
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(2),
      n = i(s),
      u = a(176),
      r = i(u),
      l = a(3),
      o = i(l),
      m = [],
      p = function () {
        m = r["default"].concat();
      },
      T = {
        filters: [],
        observers: [],
        start: function () {
          var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? 50
              : arguments[0];
          this.timer = setInterval(this.tick.bind(this), e);
        },
        tick: function () {
          var e = this;
          m.length || p(),
            m.splice(0, 10).forEach(function (t) {
              var a = e.filters.reduce(function (e, t) {
                return t(e);
              }, t);
              n["default"].state.heatmapData.push(a), e.notify(a);
            }),
            (n["default"].state.heatmapData = o["default"].takeRight(
              n["default"].state.heatmapData,
              1e3
            ));
        },
        addFilter: function (e) {
          this.filters.push(e);
        },
        addObserver: function (e) {
          this.observers.push(e);
        },
        notify: function (e) {
          this.observers.forEach(function (t) {
            return t.update(e);
          });
        },
      };
    t["default"] = T;
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var s = a(1),
      n = i(s),
      u = a(2),
      r = i(u),
      l = a(112),
      o = i(l),
      m = a(10),
      p = i(m);
    t["default"] = {
      init: function () {
        o["default"].filter("formatDate", function (e) {
          return (0, n["default"])(e).format(
            r["default"].state.lang.date.notification
          );
        }),
          o["default"].filter("formatDay", function (e) {
            return (0, n["default"])(e).format(
              r["default"].state.lang.date.day
            );
          }),
          o["default"].filter("formatDateOnly", function (e) {
            return (0, n["default"])(e).format(
              r["default"].state.lang.date.date
            );
          }),
          o["default"].filter("twoDecimals", function (e) {
            return (
              r["default"].state.lang, (0, p["default"])(e).format("0,0.00")
            );
          }),
          o["default"].filter("int", function (e) {
            return r["default"].state.lang, (0, p["default"])(e).format("0,0");
          }),
          o["default"].filter("radarchartValue", function (e) {
            var t =
              arguments.length <= 1 || void 0 === arguments[1]
                ? !1
                : arguments[1];
            return (
              r["default"].state.lang,
              "percent" === t ? e : (0, p["default"])(e).format("0,0")
            );
          });
      },
    };
  },
  function (e, t, a) {
    e.exports = {
      default: a(148),
      __esModule: !0,
    };
  },
  function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    t.__esModule = !0;
    var s = a(146),
      n = i(s);
    t["default"] = function (e, t, a) {
      return (
        t in e
          ? (0, n["default"])(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = a),
        e
      );
    };
  },
  function (e, t, a) {
    var i = a(149);
    e.exports = function (e, t, a) {
      return i.setDesc(e, t, a);
    };
  },
  function (e, t) {
    var a = Object;
    e.exports = {
      create: a.create,
      getProto: a.getPrototypeOf,
      isEnum: {}.propertyIsEnumerable,
      getDesc: a.getOwnPropertyDescriptor,
      setDesc: a.defineProperty,
      setDescs: a.defineProperties,
      getKeys: a.keys,
      getNames: a.getOwnPropertyNames,
      getSymbols: a.getOwnPropertySymbols,
      each: [].forEach,
    };
  },
  function (e, t) {
    e.exports = document.prod_data;
  },
  function (e, t) {
    e.exports = document.weather1_data;
  },
  function (e, t) {
    e.exports = document.weather2_data;
  },
  function (e, t) {
    e.exports = document.prodsales_data;
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, a) {
    var i, s;
    !(function (n, u, r) {
      "undefined" != typeof e && e.exports
        ? (e.exports = r())
        : ((i = r),
          (s = "function" == typeof i ? i.call(t, a, t, e) : i),
          !(void 0 !== s && (e.exports = s)));
    })("h337", this, function () {
      var e = {
          // heatmap canvas here
          defaultRadius: 40,
          defaultRenderer: "canvas2d",
          defaultGradient: {
            0.25: "rgb(0,0,255)",
            0.55: "rgb(0,255,0)",
            0.85: "yellow",
            1: "rgb(0,58,100)",
          },
          defaultMaxOpacity: 1,
          defaultMinOpacity: 0,
          defaultBlur: 0.85,
          defaultXField: "x",
          defaultYField: "y",
          defaultValueField: "value",
          plugins: {},
        },
        t = (function () {
          var t = function (e) {
              (this._coordinator = {}),
                (this._data = []),
                (this._radi = []),
                (this._min = 0),
                (this._max = 1),
                (this._xField = e.xField || e.defaultXField),
                (this._yField = e.yField || e.defaultYField),
                (this._valueField = e.valueField || e.defaultValueField),
                e.radius && (this._cfgRadius = e.radius);
            },
            a = e.defaultRadius;
          return (
            (t.prototype = {
              _organiseData: function (e, t) {
                var i = e[this._xField],
                  s = e[this._yField],
                  n = this._radi,
                  u = this._data,
                  r = this._max,
                  l = this._min,
                  o = e[this._valueField] || 1,
                  m = e.radius || this._cfgRadius || a;
                return (
                  u[i] || ((u[i] = []), (n[i] = [])),
                  u[i][s] ? (u[i][s] += o) : ((u[i][s] = o), (n[i][s] = m)),
                  u[i][s] > r
                    ? (t ? this.setDataMax(u[i][s]) : (this._max = u[i][s]), !1)
                    : {
                        x: i,
                        y: s,
                        value: o,
                        radius: m,
                        min: l,
                        max: r,
                      }
                );
              },
              _unOrganizeData: function () {
                var e = [],
                  t = this._data,
                  a = this._radi;
                for (var i in t)
                  for (var s in t[i])
                    e.push({
                      x: i,
                      y: s,
                      radius: a[i][s],
                      value: t[i][s],
                    });
                return {
                  min: this._min,
                  max: this._max,
                  data: e,
                };
              },
              _onExtremaChange: function () {
                this._coordinator.emit("extremachange", {
                  min: this._min,
                  max: this._max,
                });
              },
              addData: function () {
                if (arguments[0].length > 0)
                  for (var e = arguments[0], t = e.length; t--; )
                    this.addData.call(this, e[t]);
                else {
                  var a = this._organiseData(arguments[0], !0);
                  a &&
                    this._coordinator.emit("renderpartial", {
                      min: this._min,
                      max: this._max,
                      data: [a],
                    });
                }
                return this;
              },
              setData: function (e) {
                var t = e.data,
                  a = t.length;
                (this._data = []), (this._radi = []);
                for (var i = 0; a > i; i++) this._organiseData(t[i], !1);
                return (
                  (this._max = e.max),
                  (this._min = e.min || 0),
                  this._onExtremaChange(),
                  this._coordinator.emit("renderall", this._getInternalData()),
                  this
                );
              },
              removeData: function () {},
              setDataMax: function (e) {
                return (
                  (this._max = e),
                  this._onExtremaChange(),
                  this._coordinator.emit("renderall", this._getInternalData()),
                  this
                );
              },
              setDataMin: function (e) {
                return (
                  (this._min = e),
                  this._onExtremaChange(),
                  this._coordinator.emit("renderall", this._getInternalData()),
                  this
                );
              },
              setCoordinator: function (e) {
                this._coordinator = e;
              },
              _getInternalData: function () {
                return {
                  max: this._max,
                  min: this._min,
                  data: this._data,
                  radi: this._radi,
                };
              },
              getData: function () {
                return this._unOrganizeData();
              },
            }),
            t
          );
        })(),
        a = (function () {
          function e(e) {
            var a = e.container,
              i = (this.shadowCanvas = document.createElement("canvas")),
              s = (this.canvas = e.canvas || document.createElement("canvas")),
              n =
                ((this._renderBoundaries = [1e4, 1e4, 0, 0]),
                getComputedStyle(e.container) || {});
            (s.className = "heatmap-canvas"),
              (this._width =
                s.width =
                i.width =
                  e.width || +n.width.replace(/px/, "")),
              (this._height =
                s.height =
                i.height =
                  e.height || +n.height.replace(/px/, "")),
              (this.shadowCtx = i.getContext("2d")),
              (this.ctx = s.getContext("2d")),
              (s.style.cssText = i.style.cssText =
                "position:absolute;left:0;top:0;"),
              (a.style.position = "relative"),
              a.appendChild(s),
              (this._palette = t(e)),
              (this._templates = {}),
              this._setStyles(e);
          }
          var t = function (e) {
              var t = e.gradient || e.defaultGradient,
                a = document.createElement("canvas"),
                i = a.getContext("2d");
              (a.width = 256), (a.height = 1);
              var s = i.createLinearGradient(0, 0, 256, 1);
              for (var n in t) s.addColorStop(n, t[n]);
              return (
                (i.fillStyle = s),
                i.fillRect(0, 0, 256, 1),
                i.getImageData(0, 0, 256, 1).data
              );
            },
            a = function (e, t) {
              var a = document.createElement("canvas"),
                i = a.getContext("2d"),
                s = e,
                n = e;
              if (((a.width = a.height = 2 * e), 1 == t))
                i.beginPath(),
                  i.arc(s, n, e, 0, 2 * Math.PI, !1),
                  (i.fillStyle = "rgba(0,0,0,1)"),
                  i.fill();
              else {
                var u = i.createRadialGradient(s, n, e * t, s, n, e);
                u.addColorStop(0, "rgba(0,0,0,1)"),
                  u.addColorStop(1, "rgba(0,0,0,0)"),
                  (i.fillStyle = u),
                  i.fillRect(0, 0, 2 * e, 2 * e);
              }
              return a;
            },
            i = function (e) {
              for (
                var t = [],
                  a = e.min,
                  i = e.max,
                  s = e.radi,
                  e = e.data,
                  n = Object.keys(e),
                  u = n.length;
                u--;

              )
                for (var r = n[u], l = Object.keys(e[r]), o = l.length; o--; ) {
                  var m = l[o],
                    p = e[r][m],
                    T = s[r][m];
                  t.push({
                    x: r,
                    y: m,
                    value: p,
                    radius: T,
                  });
                }
              return {
                min: a,
                max: i,
                data: t,
              };
            };
          return (
            (e.prototype = {
              renderPartial: function (e) {
                e.data.length > 0 && (this._drawAlpha(e), this._colorize());
              },
              renderAll: function (e) {
                this._clear(),
                  e.data.length > 0 &&
                    (this._drawAlpha(i(e)), this._colorize());
              },
              _updateGradient: function (e) {
                this._palette = t(e);
              },
              updateConfig: function (e) {
                e.gradient && this._updateGradient(e), this._setStyles(e);
              },
              setDimensions: function (e, t) {
                (this._width = e),
                  (this._height = t),
                  (this.canvas.width = this.shadowCanvas.width = e),
                  (this.canvas.height = this.shadowCanvas.height = t);
              },
              _clear: function () {
                this.shadowCtx.clearRect(0, 0, this._width, this._height),
                  this.ctx.clearRect(0, 0, this._width, this._height);
              },
              _setStyles: function (e) {
                (this._blur = 0 == e.blur ? 0 : e.blur || e.defaultBlur),
                  e.backgroundColor &&
                    (this.canvas.style.backgroundColor = e.backgroundColor),
                  (this._width =
                    this.canvas.width =
                    this.shadowCanvas.width =
                      e.width || this._width),
                  (this._height =
                    this.canvas.height =
                    this.shadowCanvas.height =
                      e.height || this._height),
                  (this._opacity = 255 * (e.opacity || 0)),
                  (this._maxOpacity =
                    255 * (e.maxOpacity || e.defaultMaxOpacity)),
                  (this._minOpacity =
                    255 * (e.minOpacity || e.defaultMinOpacity)),
                  (this._useGradientOpacity = !!e.useGradientOpacity);
              },
              _drawAlpha: function (e) {
                for (
                  var t = (this._min = e.min),
                    i = (this._max = e.max),
                    e = e.data || [],
                    s = e.length,
                    n = 1 - this._blur;
                  s--;

                ) {
                  var u,
                    r = e[s],
                    l = r.x,
                    o = r.y,
                    m = r.radius,
                    p = Math.min(r.value, i),
                    T = l - m,
                    c = o - m,
                    d = this.shadowCtx;
                  this._templates[m]
                    ? (u = this._templates[m])
                    : (this._templates[m] = u = a(m, n));
                  var S = (p - t) / (i - t);
                  (d.globalAlpha = 0.01 > S ? 0.01 : S),
                    d.drawImage(u, T, c),
                    T < this._renderBoundaries[0] &&
                      (this._renderBoundaries[0] = T),
                    c < this._renderBoundaries[1] &&
                      (this._renderBoundaries[1] = c),
                    T + 2 * m > this._renderBoundaries[2] &&
                      (this._renderBoundaries[2] = T + 2 * m),
                    c + 2 * m > this._renderBoundaries[3] &&
                      (this._renderBoundaries[3] = c + 2 * m);
                }
              },
              _colorize: function () {
                var e = this._renderBoundaries[0],
                  t = this._renderBoundaries[1],
                  a = this._renderBoundaries[2] - e,
                  i = this._renderBoundaries[3] - t,
                  s = this._width,
                  n = this._height,
                  u = this._opacity,
                  r = this._maxOpacity,
                  l = this._minOpacity,
                  o = this._useGradientOpacity;
                0 > e && (e = 0),
                  0 > t && (t = 0),
                  e + a > s && (a = s - e),
                  t + i > n && (i = n - t);
                for (
                  var m = this.shadowCtx.getImageData(e, t, a, i),
                    p = m.data,
                    T = p.length,
                    c = this._palette,
                    d = 3;
                  T > d;
                  d += 4
                ) {
                  var S = p[d],
                    h = 4 * S;
                  if (h) {
                    var v;
                    (v = u > 0 ? u : r > S ? (l > S ? l : S) : r),
                      (p[d - 3] = c[h]),
                      (p[d - 2] = c[h + 1]),
                      (p[d - 1] = c[h + 2]),
                      (p[d] = o ? c[h + 3] : v);
                  }
                }
                (m.data = p),
                  this.ctx.putImageData(m, e, t),
                  (this._renderBoundaries = [1e3, 1e3, 0, 0]);
              },
              getValueAt: function (e) {
                var t,
                  a = this.shadowCtx,
                  i = a.getImageData(e.x, e.y, 1, 1),
                  s = i.data[3],
                  n = this._max,
                  u = this._min;
                return (t = (Math.abs(n - u) * (s / 255)) >> 0);
              },
              getDataURL: function () {
                return this.canvas.toDataURL();
              },
            }),
            e
          );
        })(),
        i = (function () {
          var t = !1;
          return "canvas2d" === e.defaultRenderer && (t = a), t;
        })(),
        s = {
          merge: function () {
            for (var e = {}, t = arguments.length, a = 0; t > a; a++) {
              var i = arguments[a];
              for (var s in i) e[s] = i[s];
            }
            return e;
          },
        },
        n = (function () {
          function a() {
            var a = (this._config = s.merge(e, arguments[0] || {}));
            if (((this._coordinator = new n()), a.plugin)) {
              var r = a.plugin;
              if (!e.plugins[r])
                throw new Error(
                  "Plugin '" + r + "' not found. Maybe it was not registered."
                );
              var l = e.plugins[r];
              (this._renderer = new l.renderer(a)),
                (this._store = new l.store(a));
            } else (this._renderer = new i(a)), (this._store = new t(a));
            u(this);
          }
          var n = (function () {
              function e() {
                this.cStore = {};
              }
              return (
                (e.prototype = {
                  on: function (e, t, a) {
                    var i = this.cStore;
                    i[e] || (i[e] = []),
                      i[e].push(function (e) {
                        return t.call(a, e);
                      });
                  },
                  emit: function (e, t) {
                    var a = this.cStore;
                    if (a[e])
                      for (var i = a[e].length, s = 0; i > s; s++) {
                        var n = a[e][s];
                        n(t);
                      }
                  },
                }),
                e
              );
            })(),
            u = function (e) {
              var t = e._renderer,
                a = e._coordinator,
                i = e._store;
              a.on("renderpartial", t.renderPartial, t),
                a.on("renderall", t.renderAll, t),
                a.on("extremachange", function (t) {
                  e._config.onExtremaChange &&
                    e._config.onExtremaChange({
                      min: t.min,
                      max: t.max,
                      gradient: e._config.gradient || e._config.defaultGradient,
                    });
                }),
                i.setCoordinator(a);
            };
          return (
            (a.prototype = {
              addData: function () {
                return this._store.addData.apply(this._store, arguments), this;
              },
              removeData: function () {
                return (
                  this._store.removeData &&
                    this._store.removeData.apply(this._store, arguments),
                  this
                );
              },
              setData: function () {
                return this._store.setData.apply(this._store, arguments), this;
              },
              setDataMax: function () {
                return (
                  this._store.setDataMax.apply(this._store, arguments), this
                );
              },
              setDataMin: function () {
                return (
                  this._store.setDataMin.apply(this._store, arguments), this
                );
              },
              configure: function (e) {
                return (
                  (this._config = s.merge(this._config, e)),
                  this._renderer.updateConfig(this._config),
                  this._coordinator.emit(
                    "renderall",
                    this._store._getInternalData()
                  ),
                  this
                );
              },
              repaint: function () {
                return (
                  this._coordinator.emit(
                    "renderall",
                    this._store._getInternalData()
                  ),
                  this
                );
              },
              getData: function () {
                return this._store.getData();
              },
              getDataURL: function () {
                return this._renderer.getDataURL();
              },
              getValueAt: function (e) {
                return this._store.getValueAt
                  ? this._store.getValueAt(e)
                  : this._renderer.getValueAt
                  ? this._renderer.getValueAt(e)
                  : null;
              },
            }),
            a
          );
        })(),
        u = {
          create: function (e) {
            return new n(e);
          },
          register: function (t, a) {
            e.plugins[t] = a;
          },
        };
      return u;
    });
  },
  function (e, t) {
    e.exports = document.loc_data;
  },
  function (e, t, a) {
    function i(e) {
      return a(s(e));
    }

    function s(e) {
      return (
        n[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var n = {
      "./af": 14,
      "./af.js": 14,
      "./ar": 18,
      "./ar-ma": 15,
      "./ar-ma.js": 15,
      "./ar-sa": 16,
      "./ar-sa.js": 16,
      "./ar-tn": 17,
      "./ar-tn.js": 17,
      "./ar.js": 18,
      "./az": 19,
      "./az.js": 19,
      "./be": 20,
      "./be.js": 20,
      "./bg": 21,
      "./bg.js": 21,
      "./bn": 22,
      "./bn.js": 22,
      "./bo": 23,
      "./bo.js": 23,
      "./br": 24,
      "./br.js": 24,
      "./bs": 25,
      "./bs.js": 25,
      "./ca": 26,
      "./ca.js": 26,
      "./cs": 27,
      "./cs.js": 27,
      "./cv": 28,
      "./cv.js": 28,
      "./cy": 29,
      "./cy.js": 29,
      "./da": 30,
      "./da.js": 30,
      "./de": 32,
      "./de-at": 31,
      "./de-at.js": 31,
      "./de.js": 32,
      "./dv": 33,
      "./dv.js": 33,
      "./el": 34,
      "./el.js": 34,
      "./en-au": 35,
      "./en-au.js": 35,
      "./en-ca": 36,
      "./en-ca.js": 36,
      "./en-gb": 37,
      "./en-gb.js": 37,
      "./en-ie": 38,
      "./en-ie.js": 38,
      "./en-nz": 39,
      "./en-nz.js": 39,
      "./eo": 40,
      "./eo.js": 40,
      "./es": 41,
      "./es.js": 41,
      "./et": 42,
      "./et.js": 42,
      "./eu": 43,
      "./eu.js": 43,
      "./fa": 44,
      "./fa.js": 44,
      "./fi": 45,
      "./fi.js": 45,
      "./fo": 46,
      "./fo.js": 46,
      "./fr": 49,
      "./fr-ca": 47,
      "./fr-ca.js": 47,
      "./fr-ch": 48,
      "./fr-ch.js": 48,
      "./fr.js": 49,
      "./fy": 50,
      "./fy.js": 50,
      "./gd": 51,
      "./gd.js": 51,
      "./gl": 52,
      "./gl.js": 52,
      "./he": 53,
      "./he.js": 53,
      "./hi": 54,
      "./hi.js": 54,
      "./hr": 55,
      "./hr.js": 55,
      "./hu": 56,
      "./hu.js": 56,
      "./hy-am": 57,
      "./hy-am.js": 57,
      "./id": 58,
      "./id.js": 58,
      "./is": 59,
      "./is.js": 59,
      "./it": 60,
      "./it.js": 60,
      "./ja": 61,
      "./ja.js": 61,
      "./jv": 62,
      "./jv.js": 62,
      "./ka": 63,
      "./ka.js": 63,
      "./kk": 64,
      "./kk.js": 64,
      "./km": 65,
      "./km.js": 65,
      "./ko": 66,
      "./ko.js": 66,
      "./lb": 67,
      "./lb.js": 67,
      "./lo": 68,
      "./lo.js": 68,
      "./lt": 69,
      "./lt.js": 69,
      "./lv": 70,
      "./lv.js": 70,
      "./me": 71,
      "./me.js": 71,
      "./mk": 72,
      "./mk.js": 72,
      "./ml": 73,
      "./ml.js": 73,
      "./mr": 74,
      "./mr.js": 74,
      "./ms": 76,
      "./ms-my": 75,
      "./ms-my.js": 75,
      "./ms.js": 76,
      "./my": 77,
      "./my.js": 77,
      "./nb": 78,
      "./nb.js": 78,
      "./ne": 79,
      "./ne.js": 79,
      "./nl": 80,
      "./nl.js": 80,
      "./nn": 81,
      "./nn.js": 81,
      "./pl": 82,
      "./pl.js": 82,
      "./pt": 84,
      "./pt-br": 83,
      "./pt-br.js": 83,
      "./pt.js": 84,
      "./ro": 85,
      "./ro.js": 85,
      "./ru": 86,
      "./ru.js": 86,
      "./se": 87,
      "./se.js": 87,
      "./si": 88,
      "./si.js": 88,
      "./sk": 89,
      "./sk.js": 89,
      "./sl": 90,
      "./sl.js": 90,
      "./sq": 91,
      "./sq.js": 91,
      "./sr": 93,
      "./sr-cyrl": 92,
      "./sr-cyrl.js": 92,
      "./sr.js": 93,
      "./sv": 94,
      "./sv.js": 94,
      "./sw": 95,
      "./sw.js": 95,
      "./ta": 96,
      "./ta.js": 96,
      "./te": 97,
      "./te.js": 97,
      "./th": 98,
      "./th.js": 98,
      "./tl-ph": 99,
      "./tl-ph.js": 99,
      "./tlh": 100,
      "./tlh.js": 100,
      "./tr": 101,
      "./tr.js": 101,
      "./tzl": 102,
      "./tzl.js": 102,
      "./tzm": 104,
      "./tzm-latn": 103,
      "./tzm-latn.js": 103,
      "./tzm.js": 104,
      "./uk": 105,
      "./uk.js": 105,
      "./uz": 106,
      "./uz.js": 106,
      "./vi": 107,
      "./vi.js": 107,
      "./zh-cn": 108,
      "./zh-cn.js": 108,
      "./zh-tw": 109,
      "./zh-tw.js": 109,
    };
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (e.exports = i),
      (i.id = 177);
  },
  function (e, t, a) {
    function i() {}

    function s(e) {
      var t = {}.toString.call(e);
      switch (t) {
        case "[object File]":
        case "[object Blob]":
        case "[object FormData]":
          return !0;
        default:
          return !1;
      }
    }

    function n(e) {
      return e === Object(e);
    }

    function u(e) {
      if (!n(e)) return e;
      var t = [];
      for (var a in e) null != e[a] && r(t, a, e[a]);
      return t.join("&");
    }

    function r(e, t, a) {
      return Array.isArray(a)
        ? a.forEach(function (a) {
            r(e, t, a);
          })
        : void e.push(encodeURIComponent(t) + "=" + encodeURIComponent(a));
    }

    function l(e) {
      for (var t, a, i = {}, s = e.split("&"), n = 0, u = s.length; u > n; ++n)
        (a = s[n]),
          (t = a.split("=")),
          (i[decodeURIComponent(t[0])] = decodeURIComponent(t[1]));
      return i;
    }

    function o(e) {
      var t,
        a,
        i,
        s,
        n = e.split(/\r?\n/),
        u = {};
      n.pop();
      for (var r = 0, l = n.length; l > r; ++r)
        (a = n[r]),
          (t = a.indexOf(":")),
          (i = a.slice(0, t).toLowerCase()),
          (s = _(a.slice(t + 1))),
          (u[i] = s);
      return u;
    }

    function m(e) {
      return /[\/+]json\b/.test(e);
    }

    function p(e) {
      return e.split(/ *; */).shift();
    }

    function T(e) {
      return f(
        e.split(/ *; */),
        function (e, t) {
          var a = t.split(/ *= */),
            i = a.shift(),
            s = a.shift();
          return i && s && (e[i] = s), e;
        },
        {}
      );
    }

    function c(e, t) {
      (t = t || {}),
        (this.req = e),
        (this.xhr = this.req.xhr),
        (this.text =
          ("HEAD" != this.req.method &&
            ("" === this.xhr.responseType ||
              "text" === this.xhr.responseType)) ||
          "undefined" == typeof this.xhr.responseType
            ? this.xhr.responseText
            : null),
        (this.statusText = this.req.xhr.statusText),
        this.setStatusProperties(this.xhr.status),
        (this.header = this.headers = o(this.xhr.getAllResponseHeaders())),
        (this.header["content-type"] =
          this.xhr.getResponseHeader("content-type")),
        this.setHeaderProperties(this.header),
        (this.body =
          "HEAD" != this.req.method
            ? this.parseBody(this.text ? this.text : this.xhr.response)
            : null);
    }

    function d(e, t) {
      var a = this;
      y.call(this),
        (this._query = this._query || []),
        (this.method = e),
        (this.url = t),
        (this.header = {}),
        (this._header = {}),
        this.on("end", function () {
          var e = null,
            t = null;
          try {
            t = new c(a);
          } catch (i) {
            return (
              (e = new Error("Parser is unable to parse the response")),
              (e.parse = !0),
              (e.original = i),
              (e.rawResponse =
                a.xhr && a.xhr.responseText ? a.xhr.responseText : null),
              a.callback(e)
            );
          }
          if ((a.emit("response", t), e)) return a.callback(e, t);
          if (t.status >= 200 && t.status < 300) return a.callback(e, t);
          var s = new Error(t.statusText || "Unsuccessful HTTP response");
          (s.original = e),
            (s.response = t),
            (s.status = t.status),
            a.callback(s, t);
        });
    }

    function S(e, t) {
      return "function" == typeof t
        ? new d("GET", e).end(t)
        : 1 == arguments.length
        ? new d("GET", e)
        : new d(e, t);
    }

    function h(e, t) {
      var a = S("DELETE", e);
      return t && a.end(t), a;
    }
    var v,
      y = a(179),
      f = a(180);
    (v =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : this),
      (S.getXHR = function () {
        if (
          !(
            !v.XMLHttpRequest ||
            (v.location && "file:" == v.location.protocol && v.ActiveXObject)
          )
        )
          return new XMLHttpRequest();
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
        return !1;
      });
    var _ = "".trim
      ? function (e) {
          return e.trim();
        }
      : function (e) {
          return e.replace(/(^\s*|\s*$)/g, "");
        };
    (S.serializeObject = u),
      (S.parseString = l),
      (S.types = {
        html: "text/html",
        json: "application/json",
        xml: "application/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
      }),
      (S.serialize = {
        "application/x-www-form-urlencoded": u,
        "application/json": JSON.stringify,
      }),
      (S.parse = {
        "application/x-www-form-urlencoded": l,
        "application/json": JSON.parse,
      }),
      (c.prototype.get = function (e) {
        return this.header[e.toLowerCase()];
      }),
      (c.prototype.setHeaderProperties = function (e) {
        var t = this.header["content-type"] || "";
        this.type = p(t);
        var a = T(t);
        for (var i in a) this[i] = a[i];
      }),
      (c.prototype.parseBody = function (e) {
        var t = S.parse[this.type];
        return t && e && (e.length || e instanceof Object) ? t(e) : null;
      }),
      (c.prototype.setStatusProperties = function (e) {
        1223 === e && (e = 204);
        var t = (e / 100) | 0;
        (this.status = this.statusCode = e),
          (this.statusType = t),
          (this.info = 1 == t),
          (this.ok = 2 == t),
          (this.clientError = 4 == t),
          (this.serverError = 5 == t),
          (this.error = 4 == t || 5 == t ? this.toError() : !1),
          (this.accepted = 202 == e),
          (this.noContent = 204 == e),
          (this.badRequest = 400 == e),
          (this.unauthorized = 401 == e),
          (this.notAcceptable = 406 == e),
          (this.notFound = 404 == e),
          (this.forbidden = 403 == e);
      }),
      (c.prototype.toError = function () {
        var e = this.req,
          t = e.method,
          a = e.url,
          i = "cannot " + t + " " + a + " (" + this.status + ")",
          s = new Error(i);
        return (s.status = this.status), (s.method = t), (s.url = a), s;
      }),
      (S.Response = c),
      y(d.prototype),
      (d.prototype.use = function (e) {
        return e(this), this;
      }),
      (d.prototype.timeout = function (e) {
        return (this._timeout = e), this;
      }),
      (d.prototype.clearTimeout = function () {
        return (this._timeout = 0), clearTimeout(this._timer), this;
      }),
      (d.prototype.abort = function () {
        return this.aborted
          ? void 0
          : ((this.aborted = !0),
            this.xhr.abort(),
            this.clearTimeout(),
            this.emit("abort"),
            this);
      }),
      (d.prototype.set = function (e, t) {
        if (n(e)) {
          for (var a in e) this.set(a, e[a]);
          return this;
        }
        return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this;
      }),
      (d.prototype.unset = function (e) {
        return (
          delete this._header[e.toLowerCase()], delete this.header[e], this
        );
      }),
      (d.prototype.getHeader = function (e) {
        return this._header[e.toLowerCase()];
      }),
      (d.prototype.type = function (e) {
        return this.set("Content-Type", S.types[e] || e), this;
      }),
      (d.prototype.parse = function (e) {
        return (this._parser = e), this;
      }),
      (d.prototype.accept = function (e) {
        return this.set("Accept", S.types[e] || e), this;
      }),
      (d.prototype.auth = function (e, t) {
        var a = btoa(e + ":" + t);
        return this.set("Authorization", "Basic " + a), this;
      }),
      (d.prototype.query = function (e) {
        return (
          "string" != typeof e && (e = u(e)), e && this._query.push(e), this
        );
      }),
      (d.prototype.field = function (e, t) {
        return (
          this._formData || (this._formData = new v.FormData()),
          this._formData.append(e, t),
          this
        );
      }),
      (d.prototype.attach = function (e, t, a) {
        return (
          this._formData || (this._formData = new v.FormData()),
          this._formData.append(e, t, a || t.name),
          this
        );
      }),
      (d.prototype.send = function (e) {
        var t = n(e),
          a = this.getHeader("Content-Type");
        if (t && n(this._data)) for (var i in e) this._data[i] = e[i];
        else
          "string" == typeof e
            ? (a || this.type("form"),
              (a = this.getHeader("Content-Type")),
              "application/x-www-form-urlencoded" == a
                ? (this._data = this._data ? this._data + "&" + e : e)
                : (this._data = (this._data || "") + e))
            : (this._data = e);
        return !t || s(e) ? this : (a || this.type("json"), this);
      }),
      (d.prototype.callback = function (e, t) {
        var a = this._callback;
        this.clearTimeout(), a(e, t);
      }),
      (d.prototype.crossDomainError = function () {
        var e = new Error(
          "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
        );
        (e.crossDomain = !0),
          (e.status = this.status),
          (e.method = this.method),
          (e.url = this.url),
          this.callback(e);
      }),
      (d.prototype.timeoutError = function () {
        var e = this._timeout,
          t = new Error("timeout of " + e + "ms exceeded");
        (t.timeout = e), this.callback(t);
      }),
      (d.prototype.withCredentials = function () {
        return (this._withCredentials = !0), this;
      }),
      (d.prototype.end = function (e) {
        var t = this,
          a = (this.xhr = S.getXHR()),
          n = this._query.join("&"),
          u = this._timeout,
          r = this._formData || this._data;
        (this._callback = e || i),
          (a.onreadystatechange = function () {
            if (4 == a.readyState) {
              var e;
              try {
                e = a.status;
              } catch (i) {
                e = 0;
              }
              if (0 == e) {
                if (t.timedout) return t.timeoutError();
                if (t.aborted) return;
                return t.crossDomainError();
              }
              t.emit("end");
            }
          });
        var l = function (e) {
          e.total > 0 && (e.percent = (e.loaded / e.total) * 100),
            (e.direction = "download"),
            t.emit("progress", e);
        };
        this.hasListeners("progress") && (a.onprogress = l);
        try {
          a.upload &&
            this.hasListeners("progress") &&
            (a.upload.onprogress = l);
        } catch (o) {}
        if (
          (u &&
            !this._timer &&
            (this._timer = setTimeout(function () {
              (t.timedout = !0), t.abort();
            }, u)),
          n &&
            ((n = S.serializeObject(n)),
            (this.url += ~this.url.indexOf("?") ? "&" + n : "?" + n)),
          a.open(this.method, this.url, !0),
          this._withCredentials && (a.withCredentials = !0),
          "GET" != this.method &&
            "HEAD" != this.method &&
            "string" != typeof r &&
            !s(r))
        ) {
          var p = this.getHeader("Content-Type"),
            T = this._parser || S.serialize[p ? p.split(";")[0] : ""];
          !T && m(p) && (T = S.serialize["application/json"]), T && (r = T(r));
        }
        for (var c in this.header)
          null != this.header[c] && a.setRequestHeader(c, this.header[c]);
        return (
          this.emit("request", this),
          a.send("undefined" != typeof r ? r : null),
          this
        );
      }),
      (d.prototype.then = function (e, t) {
        return this.end(function (a, i) {
          a ? t(a) : e(i);
        });
      }),
      (S.Request = d),
      (S.get = function (e, t, a) {
        var i = S("GET", e);
        return (
          "function" == typeof t && ((a = t), (t = null)),
          t && i.query(t),
          a && i.end(a),
          i
        );
      }),
      (S.head = function (e, t, a) {
        var i = S("HEAD", e);
        return (
          "function" == typeof t && ((a = t), (t = null)),
          t && i.send(t),
          a && i.end(a),
          i
        );
      }),
      (S.del = h),
      (S["delete"] = h),
      (S.patch = function (e, t, a) {
        var i = S("PATCH", e);
        return (
          "function" == typeof t && ((a = t), (t = null)),
          t && i.send(t),
          a && i.end(a),
          i
        );
      }),
      (S.post = function (e, t, a) {
        var i = S("POST", e);
        return (
          "function" == typeof t && ((a = t), (t = null)),
          t && i.send(t),
          a && i.end(a),
          i
        );
      }),
      (S.put = function (e, t, a) {
        var i = S("PUT", e);
        return (
          "function" == typeof t && ((a = t), (t = null)),
          t && i.send(t),
          a && i.end(a),
          i
        );
      }),
      (e.exports = S);
  },
  function (e, t) {
    function a(e) {
      return e ? i(e) : void 0;
    }

    function i(e) {
      for (var t in a.prototype) e[t] = a.prototype[t];
      return e;
    }
    (e.exports = a),
      (a.prototype.on = a.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
      (a.prototype.once = function (e, t) {
        function a() {
          this.off(e, a), t.apply(this, arguments);
        }
        return (a.fn = t), this.on(e, a), this;
      }),
      (a.prototype.off =
        a.prototype.removeListener =
        a.prototype.removeAllListeners =
        a.prototype.removeEventListener =
          function (e, t) {
            if (
              ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
            )
              return (this._callbacks = {}), this;
            var a = this._callbacks["$" + e];
            if (!a) return this;
            if (1 == arguments.length)
              return delete this._callbacks["$" + e], this;
            for (var i, s = 0; s < a.length; s++)
              if (((i = a[s]), i === t || i.fn === t)) {
                a.splice(s, 1);
                break;
              }
            return this;
          }),
      (a.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
          a = this._callbacks["$" + e];
        if (a) {
          a = a.slice(0);
          for (var i = 0, s = a.length; s > i; ++i) a[i].apply(this, t);
        }
        return this;
      }),
      (a.prototype.listeners = function (e) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + e] || []
        );
      }),
      (a.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
      });
  },
  function (e, t) {
    e.exports = function (e, t, a) {
      for (
        var i = 0, s = e.length, n = 3 == arguments.length ? a : e[i++];
        s > i;

      )
        n = t.call(null, n, e[i], ++i, e);
      return n;
    };
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE4IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMyBDb3B5IDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IjAxX1Vtc2F0eiIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2MzQuMDAwMDAwLCAtMzI3LjAwMDAwMCkiIGZpbGw9IiM5OTk5OTkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMy1Db3B5LTIiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzQuMDAwMDAwLCAzMjcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuODE4LDE1LjkzNjM2MzYgTDIuMDE3NjM2MzYsMTUuOTM2MzYzNiBDMS4yMDgzNjM2NCwxNS45MzYzNjM2IDAuNTU2OTA5MDkxLDE1LjYxMjE4MTggMC4yMzAzNjM2MzYsMTUuMDQ2MTgxOCBDLTAuMDk2LDE0LjQ4MTA5MDkgLTAuMDUxMjcyNzI3MywxMy43NTQ1NDU1IDAuMzUzNDU0NTQ1LDEzLjA1NCBMNy4yNTM0NTQ1NSwxLjEwMjU0NTQ1IEM3LjY1ODU0NTQ1LDAuNDAxODE4MTgyIDguMjY1MDkwOTEsMCA4LjkxOCwwIEM5LjU3MTA5MDkxLDAgMTAuMTc3NjM2NCwwLjQwMiAxMC41ODIxODE4LDEuMTAyNzI3MjcgTDE3LjQ4MTgxODIsMTMuMDU0MzYzNiBDMTcuODg2NzI3MywxMy43NTUwOTA5IDE3LjkzMTYzNjQsMTQuNDgxMjcyNyAxNy42MDUyNzI3LDE1LjA0NjU0NTUgQzE3LjI3ODcyNzMsMTUuNjEyMTgxOCAxNi42MjcyNzI3LDE1LjkzNjM2MzYgMTUuODE4LDE1LjkzNjM2MzYgTDE1LjgxOCwxNS45MzYzNjM2IFogTTguOTE4LDEuNDUwNTQ1NDUgQzguODIzMjcyNzMsMS40NTA1NDU0NSA4LjY2MDM2MzY0LDEuNTY3MjcyNzMgOC41MDk4MTgxOCwxLjgyODE4MTgyIEwxLjYwOTYzNjM2LDEzLjc3OTQ1NDUgQzEuNDU4OTA5MDksMTQuMDQwMTgxOCAxLjQzOTI3MjczLDE0LjIzOTYzNjQgMS40ODY1NDU0NSwxNC4zMjE2MzY0IEMxLjUzMzgxODE4LDE0LjQwMzA5MDkgMS43MTYzNjM2NCwxNC40ODU4MTgyIDIuMDE3NjM2MzYsMTQuNDg1ODE4MiBMMTUuODE4LDE0LjQ4NTgxODIgQzE2LjExOTI3MjcsMTQuNDg1ODE4MiAxNi4zMDE2MzY0LDE0LjQwMzA5MDkgMTYuMzQ5MDkwOSwxNC4zMjEyNzI3IEMxNi4zOTYzNjM2LDE0LjIzOTYzNjQgMTYuMzc2MzYzNiwxNC4wNDAzNjM2IDE2LjIyNTgxODIsMTMuNzc5NDU0NSBMOS4zMjU4MTgxOCwxLjgyOCBDOS4xNzU0NTQ1NSwxLjU2NzI3MjczIDkuMDEyMzYzNjQsMS40NTA1NDU0NSA4LjkxOCwxLjQ1MDU0NTQ1IEw4LjkxOCwxLjQ1MDU0NTQ1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMDU2OTA5MDksOS41MjYzNjM2NCBDOC4wOTUwOTA5MSw5LjkyMjU0NTQ1IDguMTU5MjcyNzMsMTAuMjEzODE4MiA4LjI1MzQ1NDU1LDEwLjQxNzI3MjcgQzguMzcxNjM2MzYsMTAuNjczMjcyNyA4LjU5MDkwOTA5LDEwLjgwODU0NTUgOC44ODgsMTAuODA4NTQ1NSBDOS4xNzg3MjcyNywxMC44MDg1NDU1IDkuMzk5NDU0NTUsMTAuNjcxNDU0NSA5LjUyNjcyNzI3LDEwLjQxMjE4MTggQzkuNjMwMTgxODIsMTAuMjAwNTQ1NSA5LjY5NTQ1NDU1LDkuOTEzMjcyNzMgOS43MjUyNzI3Myw5LjUzNjE4MTgyIEw5Ljk4MDkwOTA5LDYuNjA1MjcyNzMgQzEwLjAwOTA5MDksNi4zMzA5MDkwOSAxMC4wMjM0NTQ1LDYuMDU1MjcyNzMgMTAuMDIzNDU0NSw1Ljc4NjM2MzY0IEMxMC4wMjM0NTQ1LDUuMzA1ODE4MTggOS45NjAzNjM2NCw0Ljk0MjM2MzY0IDkuODMsNC42NzQ5MDkwOSBDOS43MjUyNzI3Myw0LjQ2MDE4MTgyIDkuNDg5MDkwOTEsNC4yMDQ1NDU0NSA4Ljk1OTYzNjM2LDQuMjA0NTQ1NDUgQzguNjE5MjcyNzMsNC4yMDQ1NDU0NSA4LjMzOTA5MDkxLDQuMzE5NjM2MzYgOC4xMjY5MDkwOSw0LjU0NjU0NTQ1IEM3LjkxOCw0Ljc3IDcuODEyLDUuMDc2NzI3MjcgNy44MTIsNS40NTkyNzI3MyBDNy44MTIsNS43MDU4MTgxOCA3LjgzMDE4MTgyLDYuMTEyNTQ1NDUgNy44NjYsNi42NjkyNzI3MyBMOC4wNTY5MDkwOSw5LjUyNjM2MzY0IEw4LjA1NjkwOTA5LDkuNTI2MzYzNjQgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC45MTIsMTEuNDM1NDU0NSBDOC42MDYsMTEuNDM1NDU0NSA4LjM0MzYzNjM2LDExLjU0MzYzNjQgOC4xMzE2MzYzNiwxMS43NTUwOTA5IEM3LjkxOTQ1NDU1LDExLjk2NzA5MDkgNy44MTIsMTIuMjI4IDcuODEyLDEyLjUyOTQ1NDUgQzcuODEyLDEyLjg3MjkwOTEgNy45MjcwOTA5MSwxMy4xNDY5MDkxIDguMTU0MTgxODIsMTMuMzQzODE4MiBDOC4zNzI1NDU0NSwxMy41MzM4MTgyIDguNjMxNDU0NTUsMTMuNjI5NDU0NSA4LjkyMzgxODE4LDEzLjYyOTQ1NDUgQzkuMjEyOTA5MDksMTMuNjI5NDU0NSA5LjQ2OTQ1NDU1LDEzLjUzMjE4MTggOS42ODYzNjM2NCwxMy4zMzkyNzI3IEM5LjkwOTgxODE4LDEzLjE0MDE4MTggMTAuMDIzNDU0NSwxMi44NjgxODE4IDEwLjAyMzQ1NDUsMTIuNTI5MjcyNyBDMTAuMDIzNDU0NSwxMi4yMjY3MjczIDkuOTEzNjM2MzYsMTEuOTY1NDU0NSA5LjY5NjE4MTgyLDExLjc1MzA5MDkgQzkuNDgwNTQ1NDUsMTEuNTQyNTQ1NSA5LjIxNjU0NTQ1LDExLjQzNTQ1NDUgOC45MTIsMTEuNDM1NDU0NSBMOC45MTIsMTEuNDM1NDU0NSBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIxcHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDIxIDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMDFfVW1zYXR6IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzMi4wMDAwMDAsIC0yMjUuMDAwMDAwKSIgc3Ryb2tlPSIjOTk5OTk5Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTE2MzcuNjM2OTQsMjM5LjExMjE0NCBDMTYzNy4zMzY2NCwyMzkuMzcwODc5IDE2MzcuMTM1NzEsMjM5Ljc0MDYyNSAxNjM3LjEzNTcxLDI0MC4xNjkyODQgQzE2MzcuMTM1NzEsMjQwLjk0ODM0NCAxNjM3Ljc2ODE4LDI0MS41ODA1NjIgMTYzOC41NDcyNywyNDEuNTgwNTYyIEMxNjM5LjMyNjE0LDI0MS41ODA1NjIgMTYzOS45NTg2MSwyNDAuOTQ4MzQ0IDE2MzkuOTU4NjEsMjQwLjE2OTI4NCBDMTYzOS45NTg2MSwyMzkuNzQ2MzQgMTYzOS43NjQ3MSwyMzkuMzc5NDUyIDE2MzkuNDY5MjYsMjM5LjEyMDkzNyBMMTY0OC4wNDk4NCwyMzkuMTIwOTM3IEMxNjQ3Ljc1NDM4LDIzOS4zNzk0NTIgMTY0Ny41NjA0OCwyMzkuNzQ2MzQgMTY0Ny41NjA0OCwyNDAuMTY5Mjg0IEMxNjQ3LjU2MDQ4LDI0MC45NDgzNDQgMTY0OC4xOTI5NSwyNDEuNTgwNTYyIDE2NDguOTcxODIsMjQxLjU4MDU2MiBDMTY0OS43NTExMywyNDEuNTgwNTYyIDE2NTAuMzgzMzgsMjQwLjk0ODM0NCAxNjUwLjM4MzM4LDI0MC4xNjkyODQgQzE2NTAuMzgzMzgsMjM5Ljc0MjgyMyAxNjUwLjE4NDIxLDIzOS4zNzI4NTcgMTY0OS44ODM5MSwyMzkuMTE0MTIzIEMxNjUwLjEzNzE2LDIzOS4wOTMwMTkgMTY1MC42Mjc0LDIzOC44ODUwNjUgMTY1MC42MTM1NSwyMzguMzQ5MzUxIEMxNjUwLjU5Mzc2LDIzNy41ODAxODIgMTY0OS42NTY2MSwyMzcuNTgzOTE5IDE2NDkuNjU2NjEsMjM3LjU4MzkxOSBMMTYzOC42MTg5NCwyMzcuNTcwNzMgTDE2MzguMjM0MjMsMjM2LjA4NjkxIEwxNjUxLjY4Njc4LDIzNC40MTcxMTcgQzE2NTEuOTM0NzUsMjM0LjQxNzExNyAxNjUyLjEzMzcsMjM0LjIxNTk3NyAxNjUyLjEzMzcsMjMzLjk2OTU1MyBMMTY1Mi4xMzM3LDIyNy40NDkwOTggQzE2NTIuMTMzNywyMjcuNDQ5MDk4IDE2NTIuMjExNzQsMjI2Ljg0MDQwMiAxNjUxLjU3MDcsMjI2LjgzNTc4NSBDMTY1MC44Mzc3OCwyMjYuODMwNzI5IDE2MzcuMDYxNjMsMjI2LjgzNTc4NSAxNjM3LjA2MTYzLDIyNi44MzU3ODUgTDE2MzYuODU1ODYsMjI2LjA5MzQzNiBDMTYzNi43MTYwNSwyMjUuNjQ5ODI4IDE2MzYuNTU4ODcsMjI1LjM3MDQzMSAxNjM2LjE5MTk2LDIyNS4zNzA0MzEgTDE2MzIuODkwOTMsMjI1LjM3MDQzMSBDMTYzMi41MjQyNSwyMjUuMzcwNDMxIDE2MzIuMjM0MDYsMjI1LjY5MzU3NCAxNjMyLjIyNzAzLDIyNi4wOTM0MzYgQzE2MzIuMjE2NywyMjYuNTQ0Mjk3IDE2MzIuNDgwNzIsMjI2LjgwOTg0NiAxNjMyLjkwMzQ2LDIyNi44Mjg5NzEgTDE2MzQuODkwMSwyMjYuODIzOTE1IEwxNjM2LjgyNzUxLDIzNS42ODMzMTEgTDE2MzcuMDQyMjgsMjM2LjcxNzU4OCBMMTYzNy42MzY5NCwyMzkuMTEyMTQ0IEwxNjM3LjYzNjk0LDIzOS4xMTIxNDQgWiBNMTY0OC45ODc2NSwyMzkuNjQwNjA0IEMxNjQ5LjMwMTU3LDIzOS42NDA2MDQgMTY0OS41NTU3LDIzOS44OTQ3MjIgMTY0OS41NTU3LDI0MC4yMDg0MTMgQzE2NDkuNTU1NywyNDAuNTIyMTAzIDE2NDkuMzAxNTcsMjQwLjc3NjIyMSAxNjQ4Ljk4NzY1LDI0MC43NzYyMjEgQzE2NDguNjc0MTcsMjQwLjc3NjIyMSAxNjQ4LjQyMDA0LDI0MC41MjIxMDMgMTY0OC40MjAwNCwyNDAuMjA4NDEzIEMxNjQ4LjQyMDA0LDIzOS44OTQ3MjIgMTY0OC42NzQxNywyMzkuNjQwNjA0IDE2NDguOTg3NjUsMjM5LjY0MDYwNCBMMTY0OC45ODc2NSwyMzkuNjQwNjA0IFogTTE2MzkuMTEzNTYsMjQwLjIwODQxMyBDMTYzOS4xMTM1NiwyNDAuNTIyMTAzIDE2MzguODU5NDQsMjQwLjc3NjIyMSAxNjM4LjU0NTczLDI0MC43NzYyMjEgQzE2MzguMjMyMDMsMjQwLjc3NjIyMSAxNjM3Ljk3NzksMjQwLjUyMjEwMyAxNjM3Ljk3NzksMjQwLjIwODQxMyBDMTYzNy45Nzc5LDIzOS44OTQ3MjIgMTYzOC4yMzIwMywyMzkuNjQwNjA0IDE2MzguNTQ1NzMsMjM5LjY0MDYwNCBDMTYzOC44NTk0NCwyMzkuNjQwNjA0IDE2MzkuMTEzNTYsMjM5Ljg5NDcyMiAxNjM5LjExMzU2LDI0MC4yMDg0MTMgTDE2MzkuMTEzNTYsMjQwLjIwODQxMyBaIiBpZD0iU2hhcGUtQ29weSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIxcHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDIxIDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMDFfVW1zYXR6IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzMi4wMDAwMDAsIC0yMjUuMDAwMDAwKSIgc3Ryb2tlPSIjRTM1NTAwIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE2MzcuNjM2OTQsMjM5LjExMjE0NCBDMTYzNy4zMzY2NCwyMzkuMzcwODc5IDE2MzcuMTM1NzEsMjM5Ljc0MDYyNSAxNjM3LjEzNTcxLDI0MC4xNjkyODQgQzE2MzcuMTM1NzEsMjQwLjk0ODM0NCAxNjM3Ljc2ODE4LDI0MS41ODA1NjIgMTYzOC41NDcyNywyNDEuNTgwNTYyIEMxNjM5LjMyNjE0LDI0MS41ODA1NjIgMTYzOS45NTg2MSwyNDAuOTQ4MzQ0IDE2MzkuOTU4NjEsMjQwLjE2OTI4NCBDMTYzOS45NTg2MSwyMzkuNzQ2MzQgMTYzOS43NjQ3MSwyMzkuMzc5NDUyIDE2MzkuNDY5MjYsMjM5LjEyMDkzNyBMMTY0OC4wNDk4NCwyMzkuMTIwOTM3IEMxNjQ3Ljc1NDM4LDIzOS4zNzk0NTIgMTY0Ny41NjA0OCwyMzkuNzQ2MzQgMTY0Ny41NjA0OCwyNDAuMTY5Mjg0IEMxNjQ3LjU2MDQ4LDI0MC45NDgzNDQgMTY0OC4xOTI5NSwyNDEuNTgwNTYyIDE2NDguOTcxODIsMjQxLjU4MDU2MiBDMTY0OS43NTExMywyNDEuNTgwNTYyIDE2NTAuMzgzMzgsMjQwLjk0ODM0NCAxNjUwLjM4MzM4LDI0MC4xNjkyODQgQzE2NTAuMzgzMzgsMjM5Ljc0MjgyMyAxNjUwLjE4NDIxLDIzOS4zNzI4NTcgMTY0OS44ODM5MSwyMzkuMTE0MTIzIEMxNjUwLjEzNzE2LDIzOS4wOTMwMTkgMTY1MC42Mjc0LDIzOC44ODUwNjUgMTY1MC42MTM1NSwyMzguMzQ5MzUxIEMxNjUwLjU5Mzc2LDIzNy41ODAxODIgMTY0OS42NTY2MSwyMzcuNTgzOTE5IDE2NDkuNjU2NjEsMjM3LjU4MzkxOSBMMTYzOC42MTg5NCwyMzcuNTcwNzMgTDE2MzguMjM0MjMsMjM2LjA4NjkxIEwxNjUxLjY4Njc4LDIzNC40MTcxMTcgQzE2NTEuOTM0NzUsMjM0LjQxNzExNyAxNjUyLjEzMzcsMjM0LjIxNTk3NyAxNjUyLjEzMzcsMjMzLjk2OTU1MyBMMTY1Mi4xMzM3LDIyNy40NDkwOTggQzE2NTIuMTMzNywyMjcuNDQ5MDk4IDE2NTIuMjExNzQsMjI2Ljg0MDQwMiAxNjUxLjU3MDcsMjI2LjgzNTc4NSBDMTY1MC44Mzc3OCwyMjYuODMwNzI5IDE2MzcuMDYxNjMsMjI2LjgzNTc4NSAxNjM3LjA2MTYzLDIyNi44MzU3ODUgTDE2MzYuODU1ODYsMjI2LjA5MzQzNiBDMTYzNi43MTYwNSwyMjUuNjQ5ODI4IDE2MzYuNTU4ODcsMjI1LjM3MDQzMSAxNjM2LjE5MTk2LDIyNS4zNzA0MzEgTDE2MzIuODkwOTMsMjI1LjM3MDQzMSBDMTYzMi41MjQyNSwyMjUuMzcwNDMxIDE2MzIuMjM0MDYsMjI1LjY5MzU3NCAxNjMyLjIyNzAzLDIyNi4wOTM0MzYgQzE2MzIuMjE2NywyMjYuNTQ0Mjk3IDE2MzIuNDgwNzIsMjI2LjgwOTg0NiAxNjMyLjkwMzQ2LDIyNi44Mjg5NzEgTDE2MzQuODkwMSwyMjYuODIzOTE1IEwxNjM2LjgyNzUxLDIzNS42ODMzMTEgTDE2MzcuMDQyMjgsMjM2LjcxNzU4OCBMMTYzNy42MzY5NCwyMzkuMTEyMTQ0IEwxNjM3LjYzNjk0LDIzOS4xMTIxNDQgWiBNMTY0OC45ODc2NSwyMzkuNjQwNjA0IEMxNjQ5LjMwMTU3LDIzOS42NDA2MDQgMTY0OS41NTU3LDIzOS44OTQ3MjIgMTY0OS41NTU3LDI0MC4yMDg0MTMgQzE2NDkuNTU1NywyNDAuNTIyMTAzIDE2NDkuMzAxNTcsMjQwLjc3NjIyMSAxNjQ4Ljk4NzY1LDI0MC43NzYyMjEgQzE2NDguNjc0MTcsMjQwLjc3NjIyMSAxNjQ4LjQyMDA0LDI0MC41MjIxMDMgMTY0OC40MjAwNCwyNDAuMjA4NDEzIEMxNjQ4LjQyMDA0LDIzOS44OTQ3MjIgMTY0OC42NzQxNywyMzkuNjQwNjA0IDE2NDguOTg3NjUsMjM5LjY0MDYwNCBMMTY0OC45ODc2NSwyMzkuNjQwNjA0IFogTTE2MzkuMTEzNTYsMjQwLjIwODQxMyBDMTYzOS4xMTM1NiwyNDAuNTIyMTAzIDE2MzguODU5NDQsMjQwLjc3NjIyMSAxNjM4LjU0NTczLDI0MC43NzYyMjEgQzE2MzguMjMyMDMsMjQwLjc3NjIyMSAxNjM3Ljk3NzksMjQwLjUyMjEwMyAxNjM3Ljk3NzksMjQwLjIwODQxMyBDMTYzNy45Nzc5LDIzOS44OTQ3MjIgMTYzOC4yMzIwMywyMzkuNjQwNjA0IDE2MzguNTQ1NzMsMjM5LjY0MDYwNCBDMTYzOC44NTk0NCwyMzkuNjQwNjA0IDE2MzkuMTEzNTYsMjM5Ljg5NDcyMiAxNjM5LjExMzU2LDI0MC4yMDg0MTMgTDE2MzkuMTEzNTYsMjQwLjIwODQxMyBaIiBpZD0iU2hhcGUtQ29weSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDEwIDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPg0KICAgICAgICA8ZyBpZD0iMDRfQWt0aW9uc2Zsw6RjaGVuX092ZXJsYXkxIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTM5OS4wMDAwMDApIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNiIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQwLjAwMDAwMCwgMzg4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy4yMzgyMTE2LDE0Ljk1MjU4NDYgTDE2LjA0NjY4NTEsMTcuNzYxMDU4MSBMMjAuODU5MjUwNSwxMS44NTY3ODQ1IiBpZD0iUGF0aC0yMDk0IiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg==";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDEwIDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPg0KICAgICAgICA8ZyBpZD0iMDRfQWt0aW9uc2Zsw6RjaGVuX092ZXJsYXkxIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTM5OS4wMDAwMDApIiBzdHJva2U9IiMwMDhGRDMiIHN0cm9rZS13aWR0aD0iMiI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNiIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQwLjAwMDAwMCwgMzg4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy4yMzgyMTE2LDE0Ljk1MjU4NDYgTDE2LjA0NjY4NTEsMTcuNzYxMDU4MSBMMjAuODU5MjUwNSwxMS44NTY3ODQ1IiBpZD0iUGF0aC0yMDk0IiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg==";
  },
  function (e, t, a) {
    e.exports = a.p + "layout.svg?c8d83dc";
  },
  function (e, t, a) {
    e.exports = a.p + "1.png?ca8a3e6";
  },
  function (e, t, a) {
    e.exports = a.p + "2.png?7444e25";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjFweCIgdmlld0JveD0iMCAwIDI0IDIxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bm90aWZpY2F0aW9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSIwMV9VbXNhdHoiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjMxLjAwMDAwMCwgLTE0NS4wMDAwMDApIiBmaWxsPSIjOTk5OTk5Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTE2NTEuOTk5NjgsMTQ1IEwxNjMzLjc5OTk2LDE0NSBDMTYzMi4yNTM4MiwxNDUgMTYzMSwxNDYuMjUzNTQxIDE2MzEsMTQ3Ljc5OTk1OCBMMTYzMSwxNTcuNTk5ODExIEMxNjMxLDE1OS4xNDU2NjggMTYzMi4yNTM4MiwxNjAuMzk5NzY5IDE2MzMuNzk5OTYsMTYwLjM5OTc2OSBMMTYzNS4xOTk5NCwxNjAuMzk5NzY5IEwxNjM1LjE5OTk0LDE2NS4yOTk0MTUgQzE2MzUuMTk5OTQsMTY1LjQ3ODYxMyAxNjM1LjI2ODI2LDE2NS42NTcyNSAxNjM1LjQwNTczLDE2NS43OTQ3MjggQzE2MzUuNjc5MjksMTY2LjA2ODI4NCAxNjM2LjEyMjI0LDE2Ni4wNjg1NjQgMTYzNi4zOTU1MiwxNjUuNzk0NzI4IEwxNjQyLjE5OTgzLDE2MC4zOTk3NjkgTDE2NTEuOTk5NjgsMTYwLjM5OTc2OSBDMTY1My41NDU1NCwxNjAuMzk5NzY5IDE2NTQuNzk5NjQsMTU5LjE0NTY2OCAxNjU0Ljc5OTY0LDE1Ny41OTk1MzEgTDE2NTQuNzk5NjQsMTQ3Ljc5OTk1OCBDMTY1NC43OTk2NCwxNDYuMjUzNTQxIDE2NTMuNTQ1NTQsMTQ1IDE2NTEuOTk5NjgsMTQ1IEwxNjUxLjk5OTY4LDE0NSBaIE0xNjM1Ljg5OTkzLDE0OS4xOTk5MzcgTDE2NDcuMDk5NzYsMTQ5LjE5OTkzNyBDMTY0Ny40ODY3MSwxNDkuMTk5OTM3IDE2NDcuNzk5NzUsMTQ5LjUxMjk3MiAxNjQ3Ljc5OTc1LDE0OS44OTk5MjYgQzE2NDcuNzk5NzUsMTUwLjI4Njg4MSAxNjQ3LjQ4NjcxLDE1MC41OTk5MTYgMTY0Ny4wOTk3NiwxNTAuNTk5OTE2IEwxNjM1Ljg5OTkzLDE1MC41OTk5MTYgQzE2MzUuNTEyOTcsMTUwLjU5OTkxNiAxNjM1LjE5OTk0LDE1MC4yODY4ODEgMTYzNS4xOTk5NCwxNDkuODk5OTI2IEMxNjM1LjE5OTk0LDE0OS41MTI5NzIgMTYzNS41MTI5NywxNDkuMTk5OTM3IDE2MzUuODk5OTMsMTQ5LjE5OTkzNyBMMTYzNS44OTk5MywxNDkuMTk5OTM3IFogTTE2NDEuNDk5ODQsMTU2LjE5OTgzMiBMMTYzNS44OTk5MywxNTYuMTk5ODMyIEMxNjM1LjUxMjk3LDE1Ni4xOTk4MzIgMTYzNS4xOTk5NCwxNTUuODg2Nzk3IDE2MzUuMTk5OTQsMTU1LjQ5OTg0MiBDMTYzNS4xOTk5NCwxNTUuMTEyODg4IDE2MzUuNTEyOTcsMTU0Ljc5OTg1MyAxNjM1Ljg5OTkzLDE1NC43OTk4NTMgTDE2NDEuNDk5ODQsMTU0Ljc5OTg1MyBDMTY0MS44ODY4LDE1NC43OTk4NTMgMTY0Mi4xOTk4MywxNTUuMTEyODg4IDE2NDIuMTk5ODMsMTU1LjQ5OTg0MiBDMTY0Mi4xOTk4MywxNTUuODg2Nzk3IDE2NDEuODg2OCwxNTYuMTk5ODMyIDE2NDEuNDk5ODQsMTU2LjE5OTgzMiBMMTY0MS40OTk4NCwxNTYuMTk5ODMyIFogTTE2NDkuODk5NzIsMTUzLjM5OTg3NCBMMTYzNS44OTk5MywxNTMuMzk5ODc0IEMxNjM1LjUxMjk3LDE1My4zOTk4NzQgMTYzNS4xOTk5NCwxNTMuMDg2ODM5IDE2MzUuMTk5OTQsMTUyLjY5OTg4NCBDMTYzNS4xOTk5NCwxNTIuMzEyOTMgMTYzNS41MTI5NywxNTEuOTk5ODk1IDE2MzUuODk5OTMsMTUxLjk5OTg5NSBMMTY0OS44OTk3MiwxNTEuOTk5ODk1IEMxNjUwLjI4NjY3LDE1MS45OTk4OTUgMTY1MC41OTk3MSwxNTIuMzEyOTMgMTY1MC41OTk3MSwxNTIuNjk5ODg0IEMxNjUwLjU5OTcxLDE1My4wODY4MzkgMTY1MC4yODY2NywxNTMuMzk5ODc0IDE2NDkuODk5NzIsMTUzLjM5OTg3NCBMMTY0OS44OTk3MiwxNTMuMzk5ODc0IFoiIGlkPSJub3RpZmljYXRpb24iIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
  },
  function (e, t, a) {
    e.exports = a.p + "apples.png?29cc07e";
  },
  function (e, t, a) {
    e.exports = a.p + "banana.png?5516e39";
  },
  function (e, t, a) {
    e.exports = a.p + "bananas.png?3e80046";
  },
  function (e, t, a) {
    e.exports = a.p + "berrymix.png?515f86d";
  },
  function (e, t, a) {
    e.exports = a.p + "cherries.png?23f068f";
  },
  function (e, t, a) {
    e.exports = a.p + "hellespesto.png?0a88390";
  },
  function (e, t, a) {
    e.exports = a.p + "jam.png?c1d36b0";
  },
  function (e, t, a) {
    e.exports = a.p + "ketchup.png?bc29b23";
  },
  function (e, t, a) {
    e.exports = a.p + "kohl.png?b69253a";
  },
  function (e, t, a) {
    e.exports = a.p + "limetten.png?c578538";
  },
  function (e, t, a) {
    e.exports = a.p + "mango.png?03bcccc";
  },
  function (e, t, a) {
    e.exports = a.p + "noodles.png?683d4b6";
  },
  function (e, t, a) {
    e.exports = a.p + "olives.png?aa218b3";
  },
  function (e, t, a) {
    e.exports = a.p + "orange.png?6892c06";
  },
  function (e, t, a) {
    e.exports = a.p + "oranges.png?282b3aa";
  },
  function (e, t, a) {
    e.exports = a.p + "pears.png?21cbf2e";
  },
  function (e, t, a) {
    e.exports = a.p + "pickles.png?94daa38";
  },
  function (e, t, a) {
    e.exports = a.p + "rice.png?e750a3f";
  },
  function (e, t, a) {
    e.exports = a.p + "rotkohl.png?65cb743";
  },
  function (e, t, a) {
    e.exports = a.p + "sauce.png?95fa4f4";
  },
  function (e, t, a) {
    e.exports = a.p + "smoothiestand.png?42a28c7";
  },
  function (e, t, a) {
    e.exports = a.p + "strawberries.png?515f86d";
  },
  function (e, t, a) {
    e.exports = a.p + "tea.png?3a7f3f3";
  },
  function (e, t, a) {
    e.exports = a.p + "profil2@2x.png?77a2f8c";
  },
  function (e, t, a) {
    e.exports = a.p + "profil@2x.png?ef1b5de";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function (e, t, a) {
    e.exports = a.p + "fru.png?0603b64";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function (e, t, a) {
    e.exports = a.p + "man.png?8de3690";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTFweCIgdmlld0JveD0iMCAwIDE3IDExIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMTZfSWNvbnMiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIyLjAwMDAwMCwgLTQ1NS4wMDAwMDApIiBmaWxsPSIjNjY2NjY2Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjIuMDAwMDAwLCA0NTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNzk5OTMwMSwzLjI0NjYyMTYyIEMxMi40OTEyOTM3LDEuNDA4NzgzNzggMTAuODgwMjc5NywwIDguOTUwNDU0NTUsMCBDNi43OTY3ODMyMiwwIDUuMDQ2NzEzMjksMS43NDY2MjE2MiA1LjA0NjcxMzI5LDMuODg4NTEzNTEgTDUuMDQ2NzEzMjksNC41NDcyOTczIEwzLjE5MTUwMzUsNC41NDcyOTczIEMxLjQzMTI1ODc0LDQuNTQ3Mjk3MyAxLjc3NjM1Njg0ZS0xNSw1Ljk3Mjk3Mjk3IDEuNzc2MzU2ODRlLTE1LDcuNzIyOTcyOTcgQzEuNzc2MzU2ODRlLTE1LDkuMzg1MTM1MTQgMS4yODU0MTk1OCwxMC43NTMzNzg0IDIuOTIwMTc0ODMsMTAuODg4NTEzNSBDMi45NDA1MjQ0OCwxMC44OTE4OTE5IDIuOTY0MjY1NzMsMTAuODk1MjcwMyAyLjk4ODAwNjk5LDEwLjg5NTI3MDMgTDEyLjI4MTAxNCwxMC44OTUyNzAzIEwxMi4yODEwMTQsMTAuOTAyMzY0OSBDMTQuNDQ1MTk5MywxMC45MDIzNjQ5IDE2LjIwNTEwNDksOS4xMzU0NzI5NyAxNi4yMDUxMDQ5LDYuOTYzMTc1NjggQzE2LjIwNTEwNDksNS4wODEwODEwOCAxNC43MjYzNjM2LDMuNTE2ODkxODkgMTIuNzk5OTMwMSwzLjI0NjYyMTYyIEwxMi43OTk5MzAxLDMuMjQ2NjIxNjIgWiBNMTIuNDE2Njc4MywxMC4yMjI5NzMgTDEyLjQxNjY3ODMsMTAuMjE5NTk0NiBMMy4wNjI2MjIzOCwxMC4yMTk1OTQ2IEMxLjczNjUwMzUsMTAuMTU1NzQzMiAwLjY3ODMyMTY3OCw5LjA2MDgxMDgxIDAuNjc4MzIxNjc4LDcuNzIyOTcyOTcgQzAuNjc4MzIxNjc4LDYuMzQ0NTk0NTkgMS44MDQzMzU2Niw1LjIyMjk3Mjk3IDMuMTkxNTAzNSw1LjIyMjk3Mjk3IEw1LjcyMTY0MzM2LDUuMjIyOTcyOTcgTDUuNzIxNjQzMzYsNS4wNDcyOTczIEw1LjcyNTAzNDk3LDUuMDQ3Mjk3MyBMNS43MjUwMzQ5NywzLjg4ODUxMzUxIEM1LjcyNTAzNDk3LDIuMTE4MjQzMjQgNy4xNzMyNTE3NSwwLjY3NTY3NTY3NiA4Ljk1MDQ1NDU1LDAuNjc1Njc1Njc2IEMxMC43Mjc2NTczLDAuNjc1Njc1Njc2IDEyLjE3NTg3NDEsMi4xMTgyNDMyNCAxMi4xNzU4NzQxLDMuODg4NTEzNTEgTDEyLjQ1NzM3NzYsMy44ODg1MTM1MSBDMTQuMTczNTMxNSw0LjAxMDEzNTE0IDE1LjUyNjc4MzIsNS4zNDQ1OTQ1OSAxNS41MjY3ODMyLDYuOTYyODM3ODQgQzE1LjUyNjc4MzIsOC42ODU4MTA4MSAxNC4xMTkyNjU3LDEwLjE0ODY0ODYgMTIuNDE2Njc4MywxMC4yMjI5NzMgTDEyLjQxNjY3ODMsMTAuMjIyOTczIFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE4IDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMTZfSWNvbnMiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjI0LjAwMDAwMCwgLTQ1NC4wMDAwMDApIiBmaWxsPSIjNjY2NjY2Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjQuMDAwMDAwLCA0NTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNjM2NzEzMywzLjYyNSBDMTMuMzI4MDc2OSwxLjc4NzE2MjE2IDExLjcxNzA2MjksMC4zNzgzNzgzNzggOS43ODcyMzc3NiwwLjM3ODM3ODM3OCBDNy42MzM1NjY0MywwLjM3ODM3ODM3OCA1Ljg4MzQ5NjUsMi4xMjUgNS44ODM0OTY1LDQuMjY2ODkxODkgTDUuODgzNDk2NSw0LjkyNTY3NTY4IEw0LjAyODI4NjcxLDQuOTI1Njc1NjggQzIuMjY4MDQxOTYsNC45MjU2NzU2OCAwLjgzNjc4MzIxNyw2LjM1MTM1MTM1IDAuODM2NzgzMjE3LDguMTAxMzUxMzUgQzAuODM2NzgzMjE3LDkuNzYzNTEzNTEgMi4xMjIyMDI4LDExLjEzMTc1NjggMy43NTY5NTgwNCwxMS4yNjY4OTE5IEMzLjc3NzMwNzY5LDExLjI3MDI3MDMgMy44MDEwNDg5NSwxMS4yNzM2NDg2IDMuODI0NzkwMjEsMTEuMjczNjQ4NiBMMTMuMTE3Nzk3MiwxMS4yNzM2NDg2IEwxMy4xMTc3OTcyLDExLjI4MDc0MzIgQzE1LjI4MTk4MjUsMTEuMjgwNzQzMiAxNy4wNDE4ODgxLDkuNTEzODUxMzUgMTcuMDQxODg4MSw3LjM0MTU1NDA1IEMxNy4wNDE4ODgxLDUuNDU5NDU5NDYgMTUuNTYzMTQ2OSwzLjg5NTI3MDI3IDEzLjYzNjcxMzMsMy42MjUgTDEzLjYzNjcxMzMsMy42MjUgWiBNMTMuMjUzNDYxNSwxMC42MDEzNTE0IEwxMy4yNTM0NjE1LDEwLjU5Nzk3MyBMMy44OTk0MDU1OSwxMC41OTc5NzMgQzIuNTczMjg2NzEsMTAuNTM0MTIxNiAxLjUxNTEwNDksOS40MzkxODkxOSAxLjUxNTEwNDksOC4xMDEzNTEzNSBDMS41MTUxMDQ5LDYuNzIyOTcyOTcgMi42NDExMTg4OCw1LjYwMTM1MTM1IDQuMDI4Mjg2NzEsNS42MDEzNTEzNSBMNi41NTg0MjY1Nyw1LjYwMTM1MTM1IEw2LjU1ODQyNjU3LDUuNDI1Njc1NjggTDYuNTYxODE4MTgsNS40MjU2NzU2OCBMNi41NjE4MTgxOCw0LjI2Njg5MTg5IEM2LjU2MTgxODE4LDIuNDk2NjIxNjIgOC4wMTAwMzQ5NywxLjA1NDA1NDA1IDkuNzg3MjM3NzYsMS4wNTQwNTQwNSBDMTEuNTY0NDQwNiwxLjA1NDA1NDA1IDEzLjAxMjY1NzMsMi40OTY2MjE2MiAxMy4wMTI2NTczLDQuMjY2ODkxODkgTDEzLjI5NDE2MDgsNC4yNjY4OTE4OSBDMTUuMDEwMzE0Nyw0LjM4ODUxMzUxIDE2LjM2MzU2NjQsNS43MjI5NzI5NyAxNi4zNjM1NjY0LDcuMzQxMjE2MjIgQzE2LjM2MzU2NjQsOS4wNjQxODkxOSAxNC45NTYwNDksMTAuNTI3MDI3IDEzLjI1MzQ2MTUsMTAuNjAxMzUxNCBMMTMuMjUzNDYxNSwxMC42MDEzNTE0IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuODc1OTcyMDMsMTYuMTk5MzI0MyBDMS44MDQ0MDkwOSwxNi4xOTkzMjQzIDEuNzMyMTY3ODMsMTYuMTc3MDI3IDEuNjcwNzc5NzIsMTYuMTMwMDY3NiBDMS41MjE4ODgxMSwxNi4wMTY4OTE5IDEuNDkzMzk4NiwxNS44MDUwNjc2IDEuNjA3MDE3NDgsMTUuNjU2NzU2OCBMMy41MTQ3OTcyLDEzLjE2NTIwMjcgQzMuNjI4MDc2OTIsMTMuMDE2ODkxOSAzLjg0MDczMDc3LDEyLjk4NzgzNzggMy45ODk5NjE1NCwxMy4xMDE2ODkyIEM0LjEzODg1MzE1LDEzLjIxNDg2NDkgNC4xNjczNDI2NiwxMy40MjY2ODkyIDQuMDUzNzIzNzgsMTMuNTc1IEwyLjE0NTk0NDA2LDE2LjA2NjU1NDEgQzIuMDc5MTI5MzcsMTYuMTUzMzc4NCAxLjk3ODA1OTQ0LDE2LjE5OTMyNDMgMS44NzU5NzIwMywxNi4xOTkzMjQzIEwxLjg3NTk3MjAzLDE2LjE5OTMyNDMgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xNDAzOTUxLDE1LjA1OTEyMTYgQzUuMDY4ODMyMTcsMTUuMDU5MTIxNiA0Ljk5NjU5MDkxLDE1LjAzNjgyNDMgNC45MzUyMDI4LDE0Ljk4OTg2NDkgQzQuNzg2MzExMTksMTQuODc2Njg5MiA0Ljc1NzgyMTY4LDE0LjY2NDg2NDkgNC44NzE0NDA1NiwxNC41MTY1NTQxIEw2Ljc3OTIyMDI4LDEyLjAyNSBDNi44OTI1LDExLjg3NjY4OTIgNy4xMDUxNTM4NSwxMS44NDc2MzUxIDcuMjU0Mzg0NjIsMTEuOTYxNDg2NSBDNy40MDMyNzYyMiwxMi4wNzQ2NjIyIDcuNDMxNzY1NzMsMTIuMjg2NDg2NSA3LjMxODE0Njg1LDEyLjQzNDc5NzMgTDUuNDEwMzY3MTMsMTQuOTI2MzUxNCBDNS4zNDM1NTI0NSwxNS4wMTMxNzU3IDUuMjQyNDgyNTIsMTUuMDU5MTIxNiA1LjE0MDM5NTEsMTUuMDU5MTIxNiBMNS4xNDAzOTUxLDE1LjA1OTEyMTYgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS44MTg3MTY3OCwxNy45NzI5NzMgQzUuNzQ3MTUzODUsMTcuOTcyOTczIDUuNjc0OTEyNTksMTcuOTUwNjc1NyA1LjYxMzUyNDQ4LDE3LjkwMzcxNjIgQzUuNDY0NjMyODcsMTcuNzkwNTQwNSA1LjQzNjE0MzM2LDE3LjU3ODcxNjIgNS41NDk3NjIyNCwxNy40MzA0MDU0IEw3LjQ1NzU0MTk2LDE0LjkzODg1MTQgQzcuNTcwODIxNjgsMTQuNzkwNTQwNSA3Ljc4MzQ3NTUyLDE0Ljc2MTQ4NjUgNy45MzI3MDYyOSwxNC44NzUzMzc4IEM4LjA4MTU5NzksMTQuOTg4NTEzNSA4LjExMDA4NzQxLDE1LjIwMDMzNzggNy45OTY0Njg1MywxNS4zNDg2NDg2IEw2LjA4ODY4ODgxLDE3Ljg0MDIwMjcgQzYuMDIxODc0MTMsMTcuOTI3MDI3IDUuOTIwODA0MiwxNy45NzI5NzMgNS44MTg3MTY3OCwxNy45NzI5NzMgTDUuODE4NzE2NzgsMTcuOTcyOTczIFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMTY3OTMwMDcsMTUuMzk2OTU5NSBDOS4wOTYzNjcxMywxNS4zOTY5NTk1IDkuMDI0MTI1ODcsMTUuMzc0NjYyMiA4Ljk2MjczNzc2LDE1LjMyNzcwMjcgQzguODEzODQ2MTUsMTUuMjE0NTI3IDguNzg1MzU2NjQsMTUuMDAyNzAyNyA4Ljg5ODk3NTUyLDE0Ljg1NDM5MTkgTDEwLjgwNjc1NTIsMTIuMzYyODM3OCBDMTAuOTE5Njk1OCwxMi4yMTQ4NjQ5IDExLjEzMzM2NzEsMTIuMTg1NDczIDExLjI4MTkxOTYsMTIuMjk5MzI0MyBDMTEuNDMwODExMiwxMi40MTI1IDExLjQ1OTMwMDcsMTIuNjI0MzI0MyAxMS4zNDU2ODE4LDEyLjc3MjYzNTEgTDkuNDM3OTAyMSwxNS4yNjQxODkyIEM5LjM3MTA4NzQxLDE1LjM1MTAxMzUgOS4yNzAwMTc0OCwxNS4zOTY5NTk1IDkuMTY3OTMwMDcsMTUuMzk2OTU5NSBMOS4xNjc5MzAwNywxNS4zOTY5NTk1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE3IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iMTZfSWNvbnMiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDIwLjAwMDAwMCwgLTQ1NS4wMDAwMDApIiBmaWxsPSIjNjY2NjY2Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjAuMDAwMDAwLCA0NTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuODIwMjc5NywzLjU1NzQzMjQzIEMxMi41MTE2NDM0LDEuNzE5NTk0NTkgMTAuOTAwNjI5NCwwLjMxMDgxMDgxMSA4Ljk3MDgwNDIsMC4zMTA4MTA4MTEgQzYuODE3MTMyODcsMC4zMTA4MTA4MTEgNS4wNjcwNjI5NCwyLjA1NzQzMjQzIDUuMDY3MDYyOTQsNC4xOTkzMjQzMiBMNS4wNjcwNjI5NCw0Ljg1ODEwODExIEwzLjIxMTg1MzE1LDQuODU4MTA4MTEgQzEuNDUxNjA4MzksNC44NTgxMDgxMSAwLjAyMDM0OTY1MDMsNi4yODM3ODM3OCAwLjAyMDM0OTY1MDMsOC4wMzM3ODM3OCBDMC4wMjAzNDk2NTAzLDkuNjk1OTQ1OTUgMS4zMDU3NjkyMywxMS4wNjQxODkyIDIuOTQwNTI0NDgsMTEuMTk5MzI0MyBDMi45NjA4NzQxMywxMS4yMDI3MDI3IDIuOTg0NjE1MzgsMTEuMjA2MDgxMSAzLjAwODM1NjY0LDExLjIwNjA4MTEgTDEyLjMwMTM2MzYsMTEuMjA2MDgxMSBMMTIuMzAxMzYzNiwxMS4yMTMxNzU3IEMxNC40NjU1NDksMTEuMjEzMTc1NyAxNi4yMjU0NTQ1LDkuNDQ2MjgzNzggMTYuMjI1NDU0NSw3LjI3Mzk4NjQ5IEMxNi4yMjU0NTQ1LDUuMzkxODkxODkgMTQuNzQ2NzEzMywzLjgyNzcwMjcgMTIuODIwMjc5NywzLjU1NzQzMjQzIEwxMi44MjAyNzk3LDMuNTU3NDMyNDMgWiBNMTIuNDM3MDI4LDEwLjUzMzc4MzggTDEyLjQzNzAyOCwxMC41MzA0MDU0IEwzLjA4Mjk3MjAzLDEwLjUzMDQwNTQgQzEuNzU2ODUzMTUsMTAuNDY2NTU0MSAwLjY5ODY3MTMyOSw5LjM3MTYyMTYyIDAuNjk4NjcxMzI5LDguMDMzNzgzNzggQzAuNjk4NjcxMzI5LDYuNjU1NDA1NDEgMS44MjQ2ODUzMSw1LjUzMzc4Mzc4IDMuMjExODUzMTUsNS41MzM3ODM3OCBMNS43NDE5OTMwMSw1LjUzMzc4Mzc4IEw1Ljc0MTk5MzAxLDUuMzU4MTA4MTEgTDUuNzQ1Mzg0NjIsNS4zNTgxMDgxMSBMNS43NDUzODQ2Miw0LjE5OTMyNDMyIEM1Ljc0NTM4NDYyLDIuNDI5MDU0MDUgNy4xOTM2MDE0LDAuOTg2NDg2NDg2IDguOTcwODA0MiwwLjk4NjQ4NjQ4NiBDMTAuNzQ4MDA3LDAuOTg2NDg2NDg2IDEyLjE5NjIyMzgsMi40MjkwNTQwNSAxMi4xOTYyMjM4LDQuMTk5MzI0MzIgTDEyLjQ3NzcyNzMsNC4xOTkzMjQzMiBDMTQuMTkzODgxMSw0LjMyMDk0NTk1IDE1LjU0NzEzMjksNS42NTU0MDU0MSAxNS41NDcxMzI5LDcuMjczNjQ4NjUgQzE1LjU0NzEzMjksOC45OTY2MjE2MiAxNC4xMzk2MTU0LDEwLjQ1OTQ1OTUgMTIuNDM3MDI4LDEwLjUzMzc4MzggTDEyLjQzNzAyOCwxMC41MzM3ODM4IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk1Mzg3NzYsMTQuNDU2NzU2OCBDMTEuMDYzMDg3NCwxNC41MzI3NzAzIDExLjA4OTU0MiwxNC42NzkwNTQxIDExLjAxMzU2OTksMTQuNzg1ODEwOCBDMTAuOTY4NDYxNSwxNC44NTE2ODkyIDEwLjg5NDg2MzYsMTQuODg3NSAxMC44MTg4OTE2LDE0Ljg4NzUgQzEwLjc3Mzc4MzIsMTQuODg3NSAxMC43MjYzMDA3LDE0Ljg3MzMxMDggMTAuNjgzOTA1NiwxNC44NDQ5MzI0IEw5LjkwOTYwMTQsMTQuMzA4MTA4MSBMOS45MDk2MDE0LDE1LjM2MDQ3MyBDOS45MDk2MDE0LDE1LjQ5MDU0MDUgOS44MDMxMDQ5LDE1LjU5Njk1OTUgOS42NzI1Mjc5NywxNS41OTY5NTk1IEM5LjU0MTk1MTA1LDE1LjU5Njk1OTUgOS40MzUxMTUzOCwxNS40OTA1NDA1IDkuNDM1MTE1MzgsMTUuMzYwNDczIEw5LjQzNTExNTM4LDE0LjM5MzI0MzIgTDguNTc4Mzk1MSwxNC45NjU1NDA1IEM4LjUzODAzNDk3LDE0Ljk5MzkxODkgOC40OTI1ODc0MSwxNS4wMDU3NDMyIDguNDQ1MTA0OSwxNS4wMDU3NDMyIEM4LjM2OTEzMjg3LDE1LjAwNTc0MzIgOC4yOTU1MzQ5NywxNC45NzAyNzAzIDguMjQ4MDUyNDUsMTQuOTAxMzUxNCBDOC4xNzY4Mjg2NywxNC43OTI1Njc2IDguMjA1MzE4MTgsMTQuNjQ1OTQ1OSA4LjMxNDE4ODgxLDE0LjU3MjYzNTEgTDkuMzE4NzgzMjIsMTMuOTAxMDEzNSBMOC4zNTAxMzk4NiwxMy4yMjk3Mjk3IEM4LjI0MzY0MzM2LDEzLjE1MzcxNjIgOC4yMTQ4MTQ2OSwxMy4wMDcwOTQ2IDguMjkwNzg2NzEsMTIuOTAwNjc1NyBDOC4zNjQ3MjM3OCwxMi43OTE4OTE5IDguNTE0MjkzNzEsMTIuNzY2MjE2MiA4LjYyMDc5MDIxLDEyLjg0MTU1NDEgTDkuNDM1MTE1MzgsMTMuNDA0MzkxOSBMOS40MzUxMTUzOCwxMi40ODIwOTQ2IEM5LjQzNTExNTM4LDEyLjM1MjAyNyA5LjU0MTk1MTA1LDEyLjI0NTk0NTkgOS42NzI1Mjc5NywxMi4yNDU5NDU5IEM5LjgwMzEwNDksMTIuMjQ1OTQ1OSA5LjkwOTYwMTQsMTIuMzUyMDI3IDkuOTA5NjAxNCwxMi40ODIwOTQ2IEw5LjkwOTYwMTQsMTMuNTAzNzE2MiBMMTAuNzI2MzAwNywxMi45NTc0MzI0IEMxMC44MzU1MTA1LDEyLjg4NDEyMTYgMTAuOTgyNzA2MywxMi45MTI1IDExLjA1NjMwNDIsMTMuMDIxMjgzOCBDMTEuMTMwNTgwNCwxMy4xMzAwNjc2IDExLjEwMTQxMjYsMTMuMjc2Njg5MiAxMC45OTI1NDIsMTMuMzUgTDEwLjE1ODg4NDYsMTMuOTA1NzQzMiBMMTAuOTUzODc3NiwxNC40NTY3NTY4IEwxMC45NTM4Nzc2LDE0LjQ1Njc1NjggWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy45MDE0MzAwNywxNy40OTc2MzUxIEM4LjAxMDYzOTg2LDE3LjU3MzY0ODYgOC4wMzcwOTQ0MSwxNy43MTk5MzI0IDcuOTYxMTIyMzgsMTcuODI2Njg5MiBDNy45MTYwMTM5OSwxNy44OTI1Njc2IDcuODQyNDE2MDgsMTcuOTI4Mzc4NCA3Ljc2NjQ0NDA2LDE3LjkyODM3ODQgQzcuNzIxMzM1NjYsMTcuOTI4Mzc4NCA3LjY3Mzg1MzE1LDE3LjkxNDE4OTIgNy42MzE0NTgwNCwxNy44ODU4MTA4IEw2Ljg1NzE1Mzg1LDE3LjM0ODk4NjUgTDYuODU3MTUzODUsMTguNDAxMzUxNCBDNi44NTcxNTM4NSwxOC41MzE0MTg5IDYuNzUwNjU3MzQsMTguNjM3ODM3OCA2LjYyMDA4MDQyLDE4LjYzNzgzNzggQzYuNDg5NTAzNSwxOC42Mzc4Mzc4IDYuMzgyNjY3ODMsMTguNTMxNDE4OSA2LjM4MjY2NzgzLDE4LjQwMTM1MTQgTDYuMzgyNjY3ODMsMTcuNDM0MTIxNiBMNS41MjU5NDc1NSwxOC4wMDY0MTg5IEM1LjQ4NTU4NzQxLDE4LjAzNDc5NzMgNS40NDAxMzk4NiwxOC4wNDY2MjE2IDUuMzkyNjU3MzQsMTguMDQ2NjIxNiBDNS4zMTY2ODUzMSwxOC4wNDY2MjE2IDUuMjQzMDg3NDEsMTguMDExMTQ4NiA1LjE5NTYwNDksMTcuOTQyMjI5NyBDNS4xMjQzODExMiwxNy44MzM0NDU5IDUuMTUyODcwNjMsMTcuNjg2ODI0MyA1LjI2MTc0MTI2LDE3LjYxMzUxMzUgTDYuMjY2MzM1NjYsMTYuOTQxODkxOSBMNS4yOTc2OTIzMSwxNi4yNzA2MDgxIEM1LjE5MTE5NTgsMTYuMTk0NTk0NiA1LjE2MjM2NzEzLDE2LjA0Nzk3MyA1LjIzODMzOTE2LDE1Ljk0MTU1NDEgQzUuMzEyMjc2MjIsMTUuODMyNzcwMyA1LjQ2MTg0NjE1LDE1LjgwNzA5NDYgNS41NjgzNDI2NiwxNS44ODI0MzI0IEw2LjM4MjY2NzgzLDE2LjQ0NTI3MDMgTDYuMzgyNjY3ODMsMTUuNTIyOTczIEM2LjM4MjY2NzgzLDE1LjM5MjkwNTQgNi40ODk1MDM1LDE1LjI4NjgyNDMgNi42MjAwODA0MiwxNS4yODY4MjQzIEM2Ljc1MDY1NzM0LDE1LjI4NjgyNDMgNi44NTcxNTM4NSwxNS4zOTI5MDU0IDYuODU3MTUzODUsMTUuNTIyOTczIEw2Ljg1NzE1Mzg1LDE2LjU0NDU5NDYgTDcuNjczODUzMTUsMTUuOTk4MzEwOCBDNy43ODMwNjI5NCwxNS45MjUgNy45MzAyNTg3NCwxNS45NTMzNzg0IDguMDAzODU2NjQsMTYuMDYyMTYyMiBDOC4wNzgxMzI4NywxNi4xNzA5NDU5IDguMDQ4OTY1MDMsMTYuMzE3NTY3NiA3Ljk0MDA5NDQxLDE2LjM5MDg3ODQgTDcuMTA2NDM3MDYsMTYuOTQ2NjIxNiBMNy45MDE0MzAwNywxNy40OTc2MzUxIEw3LjkwMTQzMDA3LDE3LjQ5NzYzNTEgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41ODU5NzkwMiwxNC4zMTc5MDU0IEM1LjY5NTE4ODgxLDE0LjM5MzkxODkgNS43MjE2NDMzNiwxNC41NDAyMDI3IDUuNjQ1NjcxMzMsMTQuNjQ2OTU5NSBDNS42MDA1NjI5NCwxNC43MTI4Mzc4IDUuNTI2OTY1MDMsMTQuNzQ4NjQ4NiA1LjQ1MDk5MzAxLDE0Ljc0ODY0ODYgQzUuNDA1ODg0NjIsMTQuNzQ4NjQ4NiA1LjM1ODQwMjEsMTQuNzM0NDU5NSA1LjMxNjAwNjk5LDE0LjcwNjA4MTEgTDQuNTQxMzYzNjQsMTQuMTY4OTE4OSBMNC41NDEzNjM2NCwxNS4yMjEyODM4IEM0LjU0MTM2MzY0LDE1LjM1MTM1MTQgNC40MzQ4NjcxMywxNS40NTc3NzAzIDQuMzA0MjkwMjEsMTUuNDU3NzcwMyBDNC4xNzM3MTMyOSwxNS40NTc3NzAzIDQuMDY2ODc3NjIsMTUuMzUxMzUxNCA0LjA2Njg3NzYyLDE1LjIyMTI4MzggTDQuMDY2ODc3NjIsMTQuMjU0MDU0MSBMMy4yMTAxNTczNCwxNC44MjYzNTE0IEMzLjE2OTc5NzIsMTQuODU0NzI5NyAzLjEyNDM0OTY1LDE0Ljg2NjU1NDEgMy4wNzY4NjcxMywxNC44NjY1NTQxIEMzLjAwMDg5NTEsMTQuODY2NTU0MSAyLjkyNzI5NzIsMTQuODMxMDgxMSAyLjg3OTgxNDY5LDE0Ljc2MjE2MjIgQzIuODA4NTkwOTEsMTQuNjUzMzc4NCAyLjgzNzA4MDQyLDE0LjUwNjc1NjggMi45NDU5NTEwNSwxNC40MzM0NDU5IEwzLjk1MDU0NTQ1LDEzLjc2MTgyNDMgTDIuOTgxOTAyMSwxMy4wOTA1NDA1IEMyLjg3NTQwNTU5LDEzLjAxNDUyNyAyLjg0NjU3NjkyLDEyLjg2NzkwNTQgMi45MjI1NDg5NSwxMi43NjE0ODY1IEMyLjk5NjQ4NjAxLDEyLjY1MjcwMjcgMy4xNDYwNTU5NCwxMi42MjcwMjcgMy4yNTI1NTI0NSwxMi43MDIzNjQ5IEw0LjA2Njg3NzYyLDEzLjI2NTIwMjcgTDQuMDY2ODc3NjIsMTIuMzQyOTA1NCBDNC4wNjY4Nzc2MiwxMi4yMTI4Mzc4IDQuMTczNzEzMjksMTIuMTA2NzU2OCA0LjMwNDI5MDIxLDEyLjEwNjc1NjggQzQuNDM0ODY3MTMsMTIuMTA2NzU2OCA0LjU0MTM2MzY0LDEyLjIxMjgzNzggNC41NDEzNjM2NCwxMi4zNDI5MDU0IEw0LjU0MTM2MzY0LDEzLjM2NDUyNyBMNS4zNTgwNjI5NCwxMi44MTgyNDMyIEM1LjQ2NzI3MjczLDEyLjc0NDkzMjQgNS42MTQ0Njg1MywxMi43NzMzMTA4IDUuNjg4MDY2NDMsMTIuODgyMDk0NiBDNS43NjIzNDI2NiwxMi45OTA4Nzg0IDUuNzMzMTc0ODMsMTMuMTM3NSA1LjYyNDMwNDIsMTMuMjEwODEwOCBMNC43OTA2NDY4NSwxMy43NjY1NTQxIEw1LjU4NTk3OTAyLDE0LjMxNzkwNTQgTDUuNTg1OTc5MDIsMTQuMzE3OTA1NCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjFweCIgdmlld0JveD0iMCAwIDIwIDIxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDMuNS4xICgyNTIzNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IjE2X0ljb25zIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTE1LjAwMDAwMCwgLTQ1Mi4wMDAwMDApIiBmaWxsPSIjNjY2NjY2Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTUuMDAwMDAwLCA0NTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjYyOTQwNiw1Ljg3ODM3ODM4IEwxNC4xODMzNjcxLDUuNDAwNjc1NjggTDE2LjcxODkzMzYsMi44NzUzMzc4NCBMMTcuMTk4NTA3LDMuMzUzMDQwNTQgTDE0LjY2Mjk0MDYsNS44NzgzNzgzOCBMMTQuNjYyOTQwNiw1Ljg3ODM3ODM4IFogTTE0LjU3OTE2NzgsMTAuMTA1NDA1NCBDMTQuNTc5MTY3OCw3LjU5ODMxMDgxIDEyLjUzMTMxNDcsNS41NTg0NDU5NSAxMC4wMTQ0MDIxLDUuNTU4NDQ1OTUgQzcuNDk3NDg5NTEsNS41NTg0NDU5NSA1LjQ0OTYzNjM2LDcuNTk4MzEwODEgNS40NDk2MzYzNiwxMC4xMDU0MDU0IEM1LjQ0OTYzNjM2LDEyLjYxMjUgNy40OTc0ODk1MSwxNC42NTIwMjcgMTAuMDE0NDAyMSwxNC42NTIwMjcgQzEyLjUzMTMxNDcsMTQuNjUyMDI3IDE0LjU3OTE2NzgsMTIuNjEyNSAxNC41NzkxNjc4LDEwLjEwNTQwNTQgTDE0LjU3OTE2NzgsMTAuMTA1NDA1NCBaIE0xMy45MDA4NDYyLDEwLjEwNTQwNTQgQzEzLjkwMDg0NjIsMTIuMjM5ODY0OSAxMi4xNTcyMjAzLDEzLjk3NjM1MTQgMTAuMDE0NDAyMSwxMy45NzYzNTE0IEM3Ljg3MTU4MzkyLDEzLjk3NjM1MTQgNi4xMjc5NTgwNCwxMi4yMzk4NjQ5IDYuMTI3OTU4MDQsMTAuMTA1NDA1NCBDNi4xMjc5NTgwNCw3Ljk3MDYwODExIDcuODcxNTgzOTIsNi4yMzQxMjE2MiAxMC4wMTQ0MDIxLDYuMjM0MTIxNjIgQzEyLjE1NzU1OTQsNi4yMzQxMjE2MiAxMy45MDA4NDYyLDcuOTcwNjA4MTEgMTMuOTAwODQ2MiwxMC4xMDU0MDU0IEwxMy45MDA4NDYyLDEwLjEwNTQwNTQgWiBNMTAuNDA4NTA3LDAuMjA0NzI5NzMgTDkuNzMwMTg1MzEsMC4yMDQ3Mjk3MyBMOS43MzAxODUzMSwzLjc3MzMxMDgxIEwxMC40MDg1MDcsMy43NzMzMTA4MSBMMTAuNDA4NTA3LDAuMjA0NzI5NzMgTDEwLjQwODUwNywwLjIwNDcyOTczIFogTTE5Ljk4OTgwMDcsOS44MDM3MTYyMiBMMTYuNDA3NTgzOSw5LjgwMzcxNjIyIEwxNi40MDc1ODM5LDEwLjQ3OTM5MTkgTDE5Ljk5MDEzOTksMTAuNDc5MzkxOSBMMTkuOTkwMTM5OSw5LjgwMzcxNjIyIEwxOS45ODk4MDA3LDkuODAzNzE2MjIgWiBNNS44MDgxMjkzNyw1LjI5MTU1NDA1IEwzLjM4MzEyOTM3LDIuODc2MDEzNTEgTDIuOTAzNTU1OTQsMy4zNTM3MTYyMiBMNS4zMjg1NTU5NCw1Ljc2OTI1Njc2IEw1LjgwODEyOTM3LDUuMjkxNTU0MDUgTDUuODA4MTI5MzcsNS4yOTE1NTQwNSBaIE01LjgxNDkxMjU5LDE0Ljc2NTU0MDUgTDUuMzIxNzcyNzMsMTQuMzAxNjg5MiBMMi44MjM1MTM5OSwxNi45MzY4MjQzIEwzLjMxNjY1Mzg1LDE3LjQwMDY3NTcgTDUuODE0OTEyNTksMTQuNzY1NTQwNSBMNS44MTQ5MTI1OSwxNC43NjU1NDA1IFogTTEwLjM5MDUzMTUsMTYuNTgzMTA4MSBMOS43MTIyMDk3OSwxNi41ODMxMDgxIEw5LjcxMjIwOTc5LDIwLjAyMzY0ODYgTDEwLjM5MDUzMTUsMjAuMDIzNjQ4NiBMMTAuMzkwNTMxNSwxNi41ODMxMDgxIEwxMC4zOTA1MzE1LDE2LjU4MzEwODEgWiBNMTcuMzQ1NzAyOCwxNy4wMDI3MDI3IEwxNC42MjYzMTEyLDE0LjI5NDU5NDYgTDE0LjE0NjczNzgsMTQuNzcyMjk3MyBMMTYuODY2MTI5NCwxNy40ODA0MDU0IEwxNy4zNDU3MDI4LDE3LjAwMjcwMjcgTDE3LjM0NTcwMjgsMTcuMDAyNzAyNyBaIE0zLjY1ODE4ODgxLDkuODc2Njg5MTkgTDAuMjA0MTc0ODI1LDkuODc2Njg5MTkgTDAuMjA0MTc0ODI1LDEwLjU1MjM2NDkgTDMuNjU4MTg4ODEsMTAuNTUyMzY0OSBMMy42NTgxODg4MSw5Ljg3NjY4OTE5IEwzLjY1ODE4ODgxLDkuODc2Njg5MTkgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
  },
  function (e, t, a) {
    // headers area
    e.exports =
      '<div id=app :class="{hidecursor: this.state.hidecursor}"><div class=content><segments></segments><div class=heatmaparea><heatmap></heatmap></div></div><editarea></editarea><message></message><marketingmessage></marketingmessage></div>';
  },
  function (e, t, a) {
    e.exports =
      '<div class=actionssection><div class=actionmenu><p>{{ state.lang.actionssection.cartPart }}</p></div><div class=maindonut><donutchart schwelle=3></donutchart></div><div class=compare_donuts v-if="state.currentSegment === \'all\'"><smalldonutchart v-for="bar in balken" :wert=bar></smalldonutchart></div><div class=seller v-if="state.currentSegment !== \'all\'"><div class=sellersection><table><tr><th>{{ state.lang.actionssection.month }}<th colspan=3>Topseller {{ state.lang.segments[state.currentSegment] }}<th><th colspan=3>Lowseller {{ state.lang.segments[state.currentSegment] }}<tr class=products><th><th>{{ state.lang.toplow[topSeller[0].product] }}<th>{{ state.lang.toplow[topSeller[1].product] }}<th>{{ state.lang.toplow[topSeller[2].product] }}<th><th>{{ state.lang.toplow[lowSeller[0].product] }}<th>{{ state.lang.toplow[lowSeller[1].product] }}<th>{{ state.lang.toplow[lowSeller[2].product] }}<tr><td>{{ state.lang.toplow.rate }}<td>{{ topSeller[0].salesrate | twoDecimals }} %<td>{{ topSeller[1].salesrate | twoDecimals }} %<td>{{ topSeller[2].salesrate | twoDecimals }} %<td><td>{{ lowSeller[0].salesrate | twoDecimals }} %<td>{{ lowSeller[1].salesrate | twoDecimals }} %<td class=warn>{{ lowSeller[2].salesrate | twoDecimals }} %<tr><td>{{ state.lang.toplow.revenue }}<td>{{ topSeller[0].revenue | int }} €<td>{{ topSeller[1].revenue | int }} €<td>{{ topSeller[2].revenue | int }} €<td><td>{{ lowSeller[0].revenue | int }} €<td>{{ lowSeller[1].revenue | int }} €<td class=warn>{{ lowSeller[2].revenue | int }} €<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt=""></table></div></div></div>';
  },
  function (e, t) {
    // segments area
    e.exports =
      "<div class=areasection><p v-if=\"state.currentSegment === 'all'\">{{ state.lang.areasection.revenue }}</p><p v-if=\"state.currentSegment !== 'all'\">{{ state.lang.areasection.revenue }}: {{ state.lang.segments[state.currentSegment] }}</p><barchart></barchart><div class=radarsection><div class=radarelement><div class=head>{{ state.lang.areasection.customersPerHour }}</div><radarchart maxval=100 :labels=stunden :values=stundenwerte hidelegend=true></radarchart></div><div class=radarelement><div class=head>{{ state.lang.areasection.customersPerDay }}</div><radarchart maxval=10000 :labels=tage :values=tageswerte daymode=true></radarchart></div></div></div>";
  },
  function (e, t, a) {
    e.exports =
      '<table class=balkenchart__umsatz><tr v-for="bar in labels"><td class="td caption">{{ bar }}<td class="td value"><div class=back><div class=ist :style="{width: valueWidth(values[$index]) }">{{ values[$index] | int }}</div></div><td class="td warning"><img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt="" v-if="values[$index] < schwelle"></table>';
  },
  function (e, t, a) {
    e.exports =
      "<div class=barchartarea><div class=legend_y>{{ state.lang.units.teur }}</div><div class=barchart><canvas id=myBarChart width=545 height=130></canvas></div><div class=barchartlegend id=barchartlegend><div>{{ state.lang.barchart.is }}</div><div>{{ state.lang.barchart.plan }}</div></div></div><div class=barchartxlegend><table><tr><td width=25% :class=checkWarning()>{{ state.lang.cities.frankfurt }}<img class=symbolwarn src=" +
      a(4) +
      ' width=14 alt=""><td width=25%>{{ state.lang.cities.munich }}<td width=25%>{{ state.lang.cities.berlin }}<td width=25%>{{ state.lang.cities.dresden }}</table></div>';
  },
  function (e, t) {
    e.exports =
      "<div class=kundentypo><div class=info><div class=head>{{ state.lang.customersection.statistic }}</div><div class=statsblock><div>{{ state.lang.customersection.totalVisits }}</div><div>{{ visits | int }}</div></div><div class=statsblock><div>{{ state.lang.customersection.totalCustomers }}</div><div>{{ customers | int }}</div></div><div class=statsblock><div>{{ state.lang.customersection.visitsPerCustomer }}</div><div>{{ visitsPerCustomer | twoDecimals }}</div></div><div class=statsblock><div>{{ state.lang.customersection.dwellTime }}</div><div>{{ dwellTime }}</div><div>{{ state.lang.customersection.dwellTimeDescription }}</div></div><div class=statsblock><div>{{ state.lang.customersection.bouncerate}}</div><div>{{ bouncerate | twoDecimals }} %</div><div>{{ state.lang.customersection.bouncerateDescription }}</div></div></div><div class=charts><div class=radarelement><div class=head>{{ state.lang.customersection.cartDay }}</div><radarchart maxval=40 :labels=tage :values=tageswerte daymode=true mode=percent></radarchart></div><div class=radarelement><div class=head>{{ state.lang.customersection.cartHour }}</div><radarchart maxval=40 :labels=stunden :values=stundenwerte mode=percent></radarchart></div><div></div></div><div class=kundentypo__annotation v-if=state.convenienceOffer @click=convenienceClick>{{ state.lang.customersection.convenienceAnnotation }}</div></div>";
  },
  function (e, t, a) {
    e.exports =
      "<div><div class=donutchart><div class=donutchart__title><div><div>{{ rest * 100 | twoDecimals }}%</div><div>{{ state.lang.cities.frankfurt }}</div></div></div><canvas class=donutchart__canvas></canvas><div class=donutchart__legend><ul :class=\"{ 'all': (currentSegment == 'all' ) }\"><li :class=\"{ 'active': (currentSegment == 'veg' ) }\"><div class=\"counter veg\">1</div><div :class=\"{ 'warning': (li_veg < schwelle) }\">{{ state.lang.segments.actionarea }} {{ state.lang.segments.veg }}: {{ li_veg }} %<img class=symbolwarn src=" +
      a(4) +
      ' width=14 alt="" v-if="li_veg < schwelle" @click="vegClick"></div></li><li :class="{ \'active\': (currentSegment == \'dry\' ) }"><div class="counter dry">2</div><div :class="{ \'warning\': (li_dry < schwelle) }">{{ state.lang.segments.actionarea }} {{ state.lang.segments.dry }}: {{ li_dry }} %<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt="" v-if="li_dry < schwelle" @click="dryClick"></div></li><li :class="{ \'active\': (currentSegment == \'meat\' ) }"><div class="counter meat">3</div><div :class="{ \'warning\': (li_meat < schwelle) }">{{ state.lang.segments.actionarea }} {{ state.lang.segments.meat }}: {{ li_meat }} %<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt="" v-if="li_meat < schwelle"></div></li><li :class="{ \'active\': (currentSegment == \'drugs\' ) }"><div class="counter drugs">4</div><div :class="{ \'warning\': (li_drugs < schwelle) }">{{ state.lang.segments.actionarea }} {{ state.lang.segments.drugs }}: {{ li_drugs }} %<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt="" v-if="li_drugs < schwelle"></div></li><li :class="{ \'active\': (currentSegment == \'convenience\' ) }"><div class="counter conv">5</div><div :class="{ \'warning\': (li_conv < schwelle) }">{{ state.lang.segments.actionarea }} {{ state.lang.segments.convenience }}: {{ li_conv }} %<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt="" v-if="li_conv < schwelle"></div></li></ul></div></div></div>';
  },
  function (e, t, a) {
    e.exports =
      '<modal :show="state.editArea != false"><h2 slot=header class=modal__heading>{{ state.lang.editArea.edit }} LED Assem Robot Arm 4</h2><div slot=body><div class=editarea><div class=editarea__details><div class=editarea__details__meta><div class=editarea__details__meta__info><p class=editarea__details__name>{{ state.lang.products[selectedProduct.name]}}</p><p>{{ selectedProduct.amount }}<br>{{ selectedProduct.info }}</p><audio controls> <source src="/media/sound/a1-slow-sound/clip0008.wav" type="audio/wav"> </audio></div><div class=editarea__details__meta__image><img :src=selectedProduct.image alt="" width="100"></div></div><table class="editarea__details__table"> <tbody> <tr class="editarea__details__table__row"> <td class="editarea__details__table__row__col"> Anomaly Type <div class="editarea__value"> Damage noise with cracking </div> </td> <td class="editarea__details__table__row__col"> Equipment Name <div class="editarea__value"> LGP-LED assembling machine robotic arm 4 </div> </td> </tr> <tr class="editarea__details__table__row"> <td class="editarea__details__table__row__col"> Anomaly Detection Confidence <div class="editarea__value editarea__value--alert"> 0.9962 </div> </td> <td class="editarea__details__table__row__col"> Anomaly Detection Date <div class="editarea__value"> April 20, 2022, 6:00:00 AM </div> </td> </tr> </tbody> </table></div><div class=editarea__list><ul class=editarea__list__list><li class=editarea__list__list__item v-for="product in products"><div class=editarea__list__list__item__product :class="{\'editarea__list__list__item__product--active\': product.active, \'editarea__list__list__item__product--selected\': product.selected}" @click=select(product)><img :src=product.image alt="" width=100 class="editarea__list__list__item__product__image"><div class=editarea__list__list__item__product__name>{{ state.lang.products[product.name] }}</div><img src=' +
      a(184) +
      ' alt="" class="editarea__list__list__item__product__check"></div></li></ul></div></div></div></modal>';
  },
  function (e, t, a) {
    e.exports =
      "<div class=heatmap><img src=" +
      a(186) +
      ' alt="" class="heatmap__background"><div id="simulationHeatmap" class=heatmap__container></div><div class=heatmap__areaicons> <div id="eqaup" class=heatmap__areaicons__item style="top: 190px; left: 30px"></div> <div id="eqadown" class=heatmap__areaicons__item__arm style="top: 185px; left: 30px"></div> <div id="eqafix" class=heatmap__areaicons__item__break style="top: 160px; left: 10px"></div> <div id="eqaalert" class=heatmap__areaicons__item__alert style="top: 175px; left: 20px"></div> <div id="eqbup" class=heatmap__areaicons__item style="top: 190px; left: 115px"></div> <div id="eqbdown" class=heatmap__areaicons__item__arm style="top: 185px; left: 115px"></div> <div id="eqbfix" class=heatmap__areaicons__item__break style="top: 160px; left: 95px"></div> <div id="eqbalert" class=heatmap__areaicons__item__alert style="top: 175px; left: 105px"></div> <div id="eq1up" class=heatmap__areaicons__item style="top: 190px; left: 190px"></div> <div id="eq1down" class=heatmap__areaicons__item__arm style="top: 185px; left: 190px"></div> <div id="eq1fix" class=heatmap__areaicons__item__break style="top: 160px; left: 170px"></div> <div id="eq1alert" class=heatmap__areaicons__item__alert style="top: 175px; left: 180px"></div> <div id="eq2up" class=heatmap__areaicons__item style="top: 190px; left: 270px"></div> <div id="eq2down" class=heatmap__areaicons__item__arm style="top: 185px; left: 270px"></div> <div id="eq2fix" class=heatmap__areaicons__item__break style="top: 160px; left: 250px"></div> <div id="eq2alert" class=heatmap__areaicons__item__alert style="top: 175px; left: 260px"></div> <div id="eq3up" class=heatmap__areaicons__item style="top: 190px; left: 355px"></div> <div id="eq3down" class=heatmap__areaicons__item__arm style="top: 185px; left: 355px"></div> <div id="eq3fix" class=heatmap__areaicons__item__break style="top: 160px; left: 335px"></div> <div id="eq3alert" class=heatmap__areaicons__item__alert style="top: 175px; left: 345px"></div> <div id="eq4up" class=heatmap__areaicons__item style="top: 70px; left: 239px"></div> <div id="eq4down" class=heatmap__areaicons__item__arm style="top: 65px; left: 239px"></div> <div id="eq4fix" class=heatmap__areaicons__item__break style="top: 40px; left: 219px"></div> <div id="eq4alert" class=heatmap__areaicons__item__alert style="top: 55px; left: 229px"></div> <div id="eq5up" class=heatmap__areaicons__item style="top: 278px; left: 90px"></div> <div id="eq5down" class=heatmap__areaicons__item__arm style="top: 273px; left: 90px"></div> <div id="eq5fix" class=heatmap__areaicons__item__break style="top: 248px; left: 70px"></div> <div id="eq5alert" class=heatmap__areaicons__item__alert style="top: 263px; left: 80px"></div> <div id="eq6up" class=heatmap__areaicons__item style="top: 278px; left: 310px"></div> <div id="eq6down" class=heatmap__areaicons__item__arm style="top: 273px; left: 310px"></div> <div id="eq6fix" class=heatmap__areaicons__item__break style="top: 248px; left: 290px"></div> <div id="eq6alert" class=heatmap__areaicons__item__alert style="top: 263px; left: 300px"></div> </div><div class=heatmap__overlay><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'veg\'}" @click="state.currentSegment = \'veg\'" class=heatmap__overlay__area style="top: 3px;left: 170px;width: 250px;height: 130px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'dry\'}" @click="state.currentSegment = \'dry\'" class=heatmap__overlay__area style="top: 125px;left: 5px;width: 74px;height: 150px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'drugs\'}" @click="state.currentSegment = \'drugs\'" class=heatmap__overlay__area style="top: 125px;left: 85px;width: 80px;height: 150px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'meat\'}" @click="state.currentSegment = \'meat\'" class=heatmap__overlay__area style="top: 125px;left: 350px;width: 110px;height: 150px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'convenience\'}" @click="state.currentSegment = \'convenience\'" class=heatmap__overlay__area style="top: 270px;left: 210px;width: 210px;height: 40px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'milk\'}" @click="state.currentSegment = \'milk\'" class=heatmap__overlay__area style="top: 125px;left: 165px;width: 85px;height: 150px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'magazines\'}" @click="state.currentSegment = \'magazines\'" class=heatmap__overlay__area style="top: 270px;left: 0px;width: 210px;height: 40px"></div><div :class="{\'heatmap__overlay__area--active\': state.currentSegment === \'frozen\'}" @click="state.currentSegment = \'frozen\'" class=heatmap__overlay__area style="top: 125px;left: 250px;width: 85px;height: 150px"></div></div><div class=heatmap__annotations><div id="realAnnotation" class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front"> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45OTcgNTExLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5NyA1MTEuOTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkVDQTA5OyIgZD0iTTQzNS4xOTksMjU1Ljk5N2MwLDk4Ljk3LTgwLjIzLDE3OS4yLTE3OS4yLDE3OS4ycy0xNzkuMi04MC4yMy0xNzkuMi0xNzkuMg0KCQlzODAuMjMtMTc5LjIsMTc5LjItMTc5LjJTNDM1LjE5OSwxNTcuMDI4LDQzNS4xOTksMjU1Ljk5NyIvPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkM1OTIzOyIgZD0iTTgxLjAxNSw0MzkuNTE0Yy0yLjE4NSwwLTQuMzY5LTAuODM2LTYuMDMzLTIuNUMyNi42MjQsMzg4LjY2NCwwLDMyNC4zNzQsMCwyNTUuOTk3DQoJCQlTMjYuNjI0LDEyMy4zMjksNzQuOTgyLDc0Ljk3OWMzLjMzNy0zLjMyOCw4LjczLTMuMzI4LDEyLjA2NiwwYzMuMzM3LDMuMzM3LDMuMzM3LDguNzM4LDAsMTIuMDY2DQoJCQljLTQ1LjEzMyw0NS4xMzMtNjkuOTgyLDEwNS4xMzEtNjkuOTgyLDE2OC45NTFzMjQuODQ5LDEyMy44MTksNjkuOTgyLDE2OC45NTFjMy4zMzcsMy4zMzcsMy4zMzcsOC43MywwLDEyLjA2Ng0KCQkJQzg1LjM4NSw0MzguNjc4LDgzLjIsNDM5LjUxNCw4MS4wMTUsNDM5LjUxNCIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkM1OTIzOyIgZD0iTTQzMC45ODIsNDM5LjUxNGMtMi4xODUsMC00LjM2OS0wLjgzNi02LjAzMy0yLjVjLTMuMzM3LTMuMzM3LTMuMzM3LTguNzMsMC0xMi4wNjYNCgkJCWM0NS4xMzMtNDUuMTMzLDY5Ljk4Mi0xMDUuMTMxLDY5Ljk4Mi0xNjguOTUxcy0yNC44NDktMTIzLjgxOS02OS45ODItMTY4Ljk1MWMtMy4zMzctMy4zMjgtMy4zMzctOC43MywwLTEyLjA2Ng0KCQkJYzMuMzM3LTMuMzI4LDguNzMtMy4zMjgsMTIuMDY2LDBjNDguMzU4LDQ4LjM1LDc0Ljk4MiwxMTIuNjQsNzQuOTgyLDE4MS4wMThzLTI2LjYyNCwxMzIuNjY4LTc0Ljk4MiwxODEuMDE4DQoJCQlDNDM1LjM1MSw0MzguNjc4LDQzMy4xNjcsNDM5LjUxNCw0MzAuOTgyLDQzOS41MTQiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjU1Ljk5OSwyOTguNjY0TDI1NS45OTksMjk4LjY2NGMtOS40MjksMC0xNy4wNjctNy42MzctMTcuMDY3LTE3LjA2N1YxMzYuNTMxDQoJCQljMC05LjQyOSw3LjYzNy0xNy4wNjcsMTcuMDY3LTE3LjA2N3MxNy4wNjcsNy42MzcsMTcuMDY3LDE3LjA2N3YxNDUuMDY3QzI3My4wNjYsMjkxLjAyNywyNjUuNDI4LDI5OC42NjQsMjU1Ljk5OSwyOTguNjY0Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjgxLjU5OSwzNjYuOTMxYzAsMTQuMTQtMTEuNDYsMjUuNi0yNS42LDI1LjZjLTE0LjE0LDAtMjUuNi0xMS40Ni0yNS42LTI1LjYNCgkJCXMxMS40Ni0yNS42LDI1LjYtMjUuNkMyNzAuMTM5LDM0MS4zMzEsMjgxLjU5OSwzNTIuNzkxLDI4MS41OTksMzY2LjkzMSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="" style="width: 25px; height: 25px; position: absolute;top: 60px;left: 80px;"><div id="anomaly1" class="heatmap__annotations__item__text__flip" style="position:absolute; top: 65px; left: 75px;">Info on Equipment Anomaly</div></div> <div class="flip-card-back"> <h6 id="totalEqCondAnom" style="cursor: pointer;" onclick="navigateToEq();">EQ NAME</h6> <table> <tbody> <tr> <th>Equipment Name</th> <th># of Anomalies</th> </tr> <tr> <td id="eqaname" style="cursor: pointer;" onclick="navigateToEqACond();">EQ A</td> <td id="eqaanom">0</td> </tr> <tr> <td id="eqbname" style="cursor: pointer;" onclick="navigateToEqBCond();">EQ B</td> <td id="eqbanom">0</td> </tr> <tr> <td id="eq1name" style="cursor: pointer;" onclick="navigateToEq1Cond();">EQ 1</td> <td id="eq1anom">0</td> </tr> <tr> <td id="eq2name" style="cursor: pointer;" onclick="navigateToEq2Cond();">EQ 2</td> <td id="eq2anom">0</td> </tr> <tr> <td id="eq3name" style="cursor: pointer;" onclick="navigateToEq3Cond();">EQ 3</td> <td id="eq3anom">0</td> </tr> <tr> <td id="eq4name" style="cursor: pointer;" onclick="navigateToEq4Cond();">EQ 4</td> <td id="eq4anom">0</td> </tr> <tr> <td id="eq5name" style="cursor: pointer;" onclick="navigateToEq5Cond();">EQ 5</td> <td id="eq5anom">0</td> </tr> <tr> <td id="eq6name" style="cursor: pointer;" onclick="navigateToEq6Cond();">EQ 6</td> <td id="eq6anom">0</td> </tr> </tbody> </table> </div> </div> </div><div v-if="state.heatmapAnnotations.dry !== false" id="simulationAnnotation" class=heatmap__annotations__item style="display:none; top: -20px; left: 45px" @click=dryClick><div class=heatmap__annotations__item__image><img src=' +
      a(4) +
      ' alt=""></div><div id="anomaly1" class=heatmap__annotations__item__text>{{ state.lang.heatmap.annotations[state.heatmapAnnotations.dry] }}</div></div><div v-if="state.heatmapAnnotations.veg !== false" class="heatmap__annotations__item heatmap__annotations__item--right" style="top: 5px; left: 230px" @click=vegClick><div class=heatmap__annotations__item__image><img src=' +
      a(4) +
      ' alt=""></div><div id="anomaly2" class=heatmap__annotations__item__text>{{ state.lang.heatmap.annotations[state.heatmapAnnotations.veg] }}</div></div></div><div id="heatmapLegend" class=heatmap__legend_container><div class=heatmap__legend_container__item><ul class=heatmap__legend><li class=heatmap__legend__item><span class=heatmap__legend__item__color style="background: #f20c12"></span> &gt; 8 kHz {{ state.lang.heatmap.customers }}</li><li class=heatmap__legend__item><span class=heatmap__legend__item__color style="background: #9e76b6"></span> 6 kHz - 8 kHz {{ state.lang.heatmap.customers }}</li><li class=heatmap__legend__item><span class=heatmap__legend__item__color style="background: #a6c8df"></span> 4 kHz - 6 kHz {{ state.lang.heatmap.customers }}</li><li class=heatmap__legend__item><span class=heatmap__legend__item__color style="background: #e8f5fb"></span> &lt; 4 kHz {{ state.lang.heatmap.customers }}</li></ul></div></div></div>';
  },
  function (e, t) {
    e.exports =
      '<ul class=languageselect><li class=languageselect__language v-for="language in state.languages" :class="{ \'languageselect__language--active\': language == state.currentLanguage }"><a class=languageselect__language__link href=# @click.prevent=setLanguage(language)>{{ state.lang.languages[language] }}</a></li></ul>';
  },
  function (e, t, a) {
    e.exports =
      '<div class=linechart__umsatz><canvas class=linechart__canvas width=550 height=200></canvas><div class=legend_y>{{ state.lang.units.teur }}</div><div class=legend_x><div v-for="day in legendX" class=legend_x__item><div class=legend_x__item__day>{{ day.timestamp | formatDay }}</div><div class=legend_x__item__weather><img src=' +
      a(225) +
      ' alt="" v-if="day.weather === \'sun\'"> <img src=' +
      a(224) +
      ' alt="" v-if="day.weather === \'snow\'"> <img src=' +
      a(223) +
      ' alt="" v-if="day.weather === \'rain\'"> <img src=' +
      a(222) +
      ' alt="" v-if="day.weather === \'cloud\'"></div></div></div><div class=linechart__legend><div class=legend_vorjahr>{{ state.lang.linechart.lastYear }}</div><div class=legend_plan>{{ state.lang.linechart.plan }}</div><div class=legend_ist>{{ state.lang.linechart.current }}</div></div><div class=linechart__dateline></div></div>';
  },
  function (e, t, a) {
    e.exports =
      '<div class=marketingmessage><modal :show="state.marketingMessage != false"><h2 slot=header class="modal__heading marketingmessage__title"><span class=marketingmessage__title__first>{{ state.lang.marketingMessage.currentAction }}</span> <span class=marketingmessage__title__second>{{ state.lang.marketingMessage.title }}</span></h2><div slot=body><div class=marketingmessage__body><div class=marketingmessage__smoothies><div class=marketingmessage__subheading>{{ state.lang.marketingMessage.smoothieStand }}</div><p class=marketingmessage__smoothies__listheading>{{ state.lang.marketingMessage.currentDay }}</p><ul class=marketingmessage__smoothies__list><li class=marketingmessage__smoothies__list__item v-for="smoothie in state.smoothies.day | orderBy \'count\' -1 | limitBy 3"><div class=marketingmessage__smoothies__list__item__image><img :src=smoothie.image alt=""></div><div class=marketingmessage__smoothies__list__item__body><div class=marketingmessage__smoothies__list__item__body__name>{{ smoothie.name }}</div><div class=marketingmessage__smoothies__list__item__body__count>{{ smoothie.count }} {{ state.lang.marketingMessage.pieces }}</div></div></li></ul><p class=marketingmessage__smoothies__listheading>{{ state.lang.marketingMessage.lastWeek }}</p><ul class=marketingmessage__smoothies__list><li class=marketingmessage__smoothies__list__item v-for="smoothie in state.smoothies.week | orderBy \'count\' -1 | limitBy 3"><div class=marketingmessage__smoothies__list__item__image><img :src=smoothie.image alt=""></div><div class=marketingmessage__smoothies__list__item__body><div class=marketingmessage__smoothies__list__item__body__name>{{ smoothie.name }}</div><div class=marketingmessage__smoothies__list__item__body__count>{{ smoothie.count }} {{ state.lang.marketingMessage.pieces }}</div></div></li></ul></div><div class=marketingmessage__center><div class=marketingmessage__meta><div class=marketingmessage__meta__image><img src=' +
      a(213) +
      ' alt="" width="100"></div><div class=marketingmessage__meta__info><p>{{ state.lang.marketingMessage.saved }}</p><p class=marketingmessage__name>Klaus Rattinger</p><p>{{ state.lang.marketingMessage.position }}</p></div></div><radarchart maxval=40 :labels=stunden :values=stundenwerte mode=percent></radarchart><textarea name=message class=marketingmessage__textarea>\n{{ state.lang.marketingMessage.message }}\n            </textarea></div><div class=marketingmessage__layout>{{ state.lang.marketingMessage.layout }}<ul class=marketingmessage__layout__list><li class=marketingmessage__layout__list__item v-for="layout in layouts" :class="{\'marketingmessage__layout__list__item--selected\': layout.selected}" @click=selectLayout(layout)><img :src=layout.image alt="" class="marketingmessage__layout__list__item__image"></li></ul></div></div></div></modal></div>';
  },
  function (e, t, a) {
    e.exports =
      '<div class=message><modal :show="state.message != false"><h2 slot=header class="modal__heading message__title">{{ state.lang.message.title }}</h2><div slot=body><div class=message__body><div class=message__meta><div class=message__meta__image><img src=' +
      a(214) +
      ' alt="" width="100"></div><div class=message__meta__info><p>{{ state.lang.message.saved }}</p><p class=message__name>Max Mustermann</p><p>{{ state.lang.message.position }}</p></div></div><textarea name=message class=message__textarea>\n{{ state.lang.message.message }}\n          </textarea></div></div></modal></div>';
  },
  function (e, t) {
    e.exports =
      '<div class=modal v-if=show transition=modal @click.self=cancel()><div class=modal__container><div class=modal__header><slot name=header>default header</slot><button type=button class=modal__close @click=cancel()><svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=18 height=18 viewBox="0 0 18 18" version=1.1><g stroke=none stroke-width=1 fill=none fill-rule=evenodd sketch:type=MSPage><g sketch:type=MSArtboardGroup transform="translate(-1471.000000, -231.000000)" fill=#999999><g sketch:type=MSLayerGroup transform="translate(1471.000000, 231.000000)"><path d="M17.09 18C16.91 18 16.73 17.93 16.59 17.79L0.4 1.42C0.13 1.14 0.13 0.69 0.4 0.41 0.68 0.13 1.13 0.13 1.41 0.41L17.6 16.77C17.87 17.05 17.87 17.51 17.6 17.79 17.46 17.93 17.28 18 17.09 18L17.09 18Z" sketch:type="MSShapeGroup"/><path d="M0.91 18C0.72 18 0.54 17.93 0.4 17.79 0.13 17.51 0.13 17.05 0.4 16.77L16.59 0.41C16.87 0.13 17.32 0.13 17.6 0.41 17.87 0.69 17.87 1.14 17.6 1.42L1.41 17.79C1.27 17.93 1.09 18 0.91 18L0.91 18Z" sketch:type="MSShapeGroup"/></g></g></g></svg></button></div><div class=modal__body><slot name=body>default body</slot></div><div class=modal__footer><slot name=footer><button id="asd" type=button class="modal__button modal__button--cancel" @click=cancel()>{{ state.lang.buttons.cancel }}</button> <button type=button class="modal__button modal__button--save" @click=save()>{{ state.lang.buttons.save }}</button><button type=button class="modal__button modal__button--save" @click=cancel() onclick="navigateToEq()">Navigate to Equipment Info</button></slot></div></div></div>';
  },
  function (e, t, a) {
    e.exports =
      "<li class=notifications__item @click=click><div class=notifications__item__icon><img src=" +
      a(183) +
      ' alt="" v-if="notification.type == \'cart\' && !notification.seen"> <img src=' +
      a(4) +
      ' alt="" v-if="notification.type == \'alert\' && !notification.seen"> <img src=' +
      a(182) +
      ' alt="" v-if="notification.type == \'cart\' && notification.seen"> <img src=' +
      a(181) +
      ' alt="" v-if="notification.type == \'alert\' && notification.seen"></div><div class=notifications__item__body><div class=notifications__time>{{ notification.timestamp | formatDate }}</div><div class=notifications__text>{{ getText(notification.body) }}</div></div></li>';
  },
  function (e, t, a) {
    e.exports =
      "<ul class=notifications><li class=notifications__item><div class=notifications__item__icon><img src=" +
      a(189) +
      ' alt=""></div><div class=notifications__item__body><span class=notifications__heading>{{ state.lang.notifications.notifications }}</span> <span class=notifications__new>{{ activeNotifications }}</span></div></li><notification v-for="notification in notifications" :notification=notification></notification></ul>';
  },
  function (e, t) {
    e.exports =
      "<div class=overviewsection><div class=overviewsection__revenue>{{ state.lang.overviewsection.revenue }} <span class=overviewsection__revenue__value>{{ state.lang.units.teur }} {{ revenue | int }}</span></div><linechart></linechart><div class=overviewsection__comparison><div class=overviewsection__comparison__item>{{ state.lang.overviewsection.revenueComparison }}<balkenchart :schwelle=threshold :bars=bars></balkenchart></div><div class=overviewsection__comparison__item>{{ state.lang.overviewsection.rawRevenueComparison }}<balkenchart :schwelle=thresholdRaw :bars=balken></balkenchart></div></div></div>";
  },
  function (e, t, a) {
    e.exports =
      '<div><div class=radarchart><div class=valuelegend><div v-for="label in legend">{{ label | radarchartValue mode }}</div></div><canvas class=radar_canvas></canvas><div class=monday :class="{ \'hilite\': weekday === 1 }" v-if="drawdays === true">{{ state.lang.radarchart.days[0] }}</div><div class=tuesday :class="{ \'hilite\': weekday === 2 }" v-if="drawdays === true">{{ state.lang.radarchart.days[1] }}</div><div class=wednesday :class="{ \'hilite\': weekday === 3 }" v-if="drawdays === true">{{ state.lang.radarchart.days[2] }}</div><div class=thursday :class="{ \'hilite\': weekday === 4 }" v-if="drawdays === true">{{ state.lang.radarchart.days[3] }}</div><div class=friday :class="{ \'hilite\': weekday === 5 }" v-if="drawdays === true">{{ state.lang.radarchart.days[4] }}</div><div class=saturday :class="{ \'hilite\': weekday === 6 }" v-if="drawdays === true">{{ state.lang.radarchart.days[5] }}</div><div class=itemslegend v-if="showlegend === true"><ul><li v-for="item in items" :class="{ \'active\': item == state.currentSegment }"><input type=checkbox id=rdr-{{_uid}}-{{item}} value={{item}} v-model=state.checkedElements><label for="rdr-{{_uid  }}-{{item}}" :class=checkWarning(item)>{{ state.lang.segments[item] }}<img class=symbolwarn src=' +
      a(4) +
      ' width=14 alt=""></label></li></ul></div></div></div>';
  },
  function (e, t) {
    e.exports =
      '<ul class=sectionmenu><li class=sectionmenu__item :class="{ \'sectionmenu__item--active\': section === state.currentSection }" v-for="section in state.sections"><a href=# class=sectionmenu__item__link @click.prevent=setSection(section)>{{ state.lang.sections[section] }}</a></li></ul>';
  },
  function (e, t) {
    // segments here
    e.exports =
      '<ul class=segments> <li class=segments__item :class="{ \'segments__item--active\': segment === state.currentSegment }" v-for="segment in state.segments"> <a class=segments__item__link href=# @click.prevent=setSegment(segment)> <svg v-if="segment === \'all\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="factory_1_" d="M1.563 2.1C0.791 2.1 0.4 1.604 0.4 0.625c0 -0.124 0.101 -0.225 0.225 -0.225S0.85 0.501 0.85 0.625c0 0.901 0.343 1.025 0.712 1.025c0.674 0 1.163 0.62 1.163 1.475c0 0.124 -0.101 0.225 -0.225 0.225S2.275 3.249 2.275 3.125C2.275 2.616 2.031 2.1 1.563 2.1zM2.188 0.85c0.813 0 1.338 0.525 1.338 1.338c0 0.124 0.101 0.225 0.225 0.225S3.975 2.312 3.975 2.188c0 -1.069 -0.718 -1.787 -1.787 -1.787c-0.124 0 -0.225 0.101 -0.225 0.225S2.063 0.85 2.188 0.85zM6.25 12.275c-0.124 0 -0.225 0.101 -0.225 0.225v1.25c0 0.124 0.101 0.225 0.225 0.225s0.225 -0.101 0.225 -0.225v-1.25C6.475 12.376 6.374 12.275 6.25 12.275zM19.6 14.496V19.375c0 0.124 -0.101 0.225 -0.225 0.225H1.25c-0.124 0 -0.225 -0.101 -0.225 -0.225V3.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.5c0.124 0 0.225 0.101 0.225 0.225v6.473l3.72 -2.289c0.069 -0.043 0.157 -0.044 0.227 -0.005C7.994 7.969 8.037 8.044 8.037 8.125v2.112l4.038 -2.308c0.07 -0.04 0.155 -0.039 0.224 0.001s0.112 0.114 0.112 0.195v2.098l3.719 -2.289c0.069 -0.043 0.157 -0.044 0.227 -0.005C16.431 7.969 16.475 8.044 16.475 8.125v4.15h0.921c0.297 0 1.05 0.061 1.614 0.627C19.403 13.295 19.601 13.832 19.6 14.496zM16.475 13.525h0.859c0.56 0 1.016 0.45 1.016 1.002v4.622h0.799v-4.654c0.001 -0.541 -0.152 -0.971 -0.458 -1.276c-0.309 -0.309 -0.794 -0.494 -1.296 -0.494H16.475V13.525zM16.475 13.975v5.174h1.424v-4.622c0 -0.304 -0.253 -0.552 -0.565 -0.552H16.475V13.975zM1.475 3.975v3.925h2.05V3.975H1.475zM3.525 19.15V8.35H1.475v10.8H3.525zM3.975 19.15h4.55V15.625c0 -0.124 0.101 -0.225 0.225 -0.225h2.5c0.124 0 0.225 0.101 0.225 0.225v3.525h4.549V8.527l-3.719 2.289c-0.069 0.042 -0.156 0.044 -0.227 0.005C12.007 10.782 11.963 10.707 11.963 10.625v-2.112l-4.038 2.308c-0.07 0.039 -0.155 0.039 -0.224 -0.001c-0.07 -0.04 -0.112 -0.114 -0.112 -0.194v-2.098l-3.613 2.223V19.15zM11.025 15.85h-2.05v3.299h2.05V15.85zM8.75 13.975c0.124 0 0.225 -0.101 0.225 -0.225v-1.25c0 -0.124 -0.101 -0.225 -0.225 -0.225s-0.225 0.101 -0.225 0.225v1.25C8.525 13.874 8.626 13.975 8.75 13.975zM11.25 13.975c0.124 0 0.225 -0.101 0.225 -0.225v-1.25c0 -0.124 -0.101 -0.225 -0.225 -0.225s-0.225 0.101 -0.225 0.225v1.25C11.025 13.874 11.126 13.975 11.25 13.975zM13.75 13.975c0.124 0 0.225 -0.101 0.225 -0.225v-1.25c0 -0.124 -0.101 -0.225 -0.225 -0.225s-0.225 0.101 -0.225 0.225v1.25C13.525 13.874 13.626 13.975 13.75 13.975z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'dry\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="monitored--item--on--conveyor_1_" d="M3.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475S1.025 14.186 1.025 15S1.687 16.475 2.5 16.475S3.975 15.814 3.975 15zM1.475 15c0 -0.565 0.46 -1.025 1.025 -1.025S3.525 14.435 3.525 15S3.065 16.025 2.5 16.025S1.475 15.565 1.475 15zM8.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475S6.025 14.186 6.025 15s0.662 1.475 1.475 1.475S8.975 15.814 8.975 15zM6.475 15c0 -0.565 0.46 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.46 1.025 -1.025 1.025S6.475 15.565 6.475 15zM13.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475s-1.475 0.662 -1.475 1.475s0.662 1.475 1.475 1.475S13.975 15.814 13.975 15zM11.475 15c0 -0.565 0.459 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.459 1.025 -1.025 1.025S11.475 15.565 11.475 15zM18.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475s-1.475 0.662 -1.475 1.475s0.662 1.475 1.475 1.475S18.975 15.814 18.975 15zM16.475 15c0 -0.565 0.459 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.459 1.025 -1.025 1.025S16.475 15.565 16.475 15zM19.375 12.275v0.451H0.625V12.275H19.375zM0.625 17.275h18.75v0.451H0.625V17.275zM7.5 11.475h5c0.124 0 0.225 -0.101 0.225 -0.225v-5c0 -0.124 -0.101 -0.225 -0.225 -0.225h-5c-0.124 0 -0.225 0.101 -0.225 0.225v5C7.275 11.374 7.376 11.475 7.5 11.475zM7.725 6.475h4.55v4.55h-4.55C7.725 11.025 7.725 6.475 7.725 6.475zM13.75 7.1h5c0.124 0 0.225 -0.101 0.225 -0.225V1.875c0 -0.124 -0.101 -0.225 -0.225 -0.225h-5c-0.124 0 -0.225 0.101 -0.225 0.225v5C13.525 6.999 13.626 7.1 13.75 7.1zM13.975 3.218l1.118 -1.118h1.238l-2.356 2.356V3.218zM13.975 5.093l2.993 -2.993h1.238l-4.231 4.231V5.093zM18.525 5.532l-1.118 1.118H16.169l2.356 -2.356V5.532zM18.525 3.657l-2.993 2.993H14.294l4.231 -4.231V3.657zM18.043 6.65l0.482 -0.481v0.482L18.043 6.65L18.043 6.65zM14.457 2.1L13.975 2.581V2.1H14.457zM1.25 11.475h5c0.124 0 0.225 -0.101 0.225 -0.225v-5c0 -0.124 -0.101 -0.225 -0.225 -0.225H1.25c-0.124 0 -0.225 0.101 -0.225 0.225v5C1.025 11.374 1.126 11.475 1.25 11.475zM1.475 6.475h4.55v4.55H1.475V6.475z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'drugs\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="monitored--item--on--conveyor_1_" d="M3.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475S1.025 14.186 1.025 15S1.687 16.475 2.5 16.475S3.975 15.814 3.975 15zM1.475 15c0 -0.565 0.46 -1.025 1.025 -1.025S3.525 14.435 3.525 15S3.065 16.025 2.5 16.025S1.475 15.565 1.475 15zM8.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475S6.025 14.186 6.025 15s0.662 1.475 1.475 1.475S8.975 15.814 8.975 15zM6.475 15c0 -0.565 0.46 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.46 1.025 -1.025 1.025S6.475 15.565 6.475 15zM13.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475s-1.475 0.662 -1.475 1.475s0.662 1.475 1.475 1.475S13.975 15.814 13.975 15zM11.475 15c0 -0.565 0.459 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.459 1.025 -1.025 1.025S11.475 15.565 11.475 15zM18.975 15c0 -0.814 -0.662 -1.475 -1.475 -1.475s-1.475 0.662 -1.475 1.475s0.662 1.475 1.475 1.475S18.975 15.814 18.975 15zM16.475 15c0 -0.565 0.459 -1.025 1.025 -1.025s1.025 0.459 1.025 1.025s-0.459 1.025 -1.025 1.025S16.475 15.565 16.475 15zM19.375 12.275v0.451H0.625V12.275H19.375zM0.625 17.275h18.75v0.451H0.625V17.275zM7.5 11.475h5c0.124 0 0.225 -0.101 0.225 -0.225v-5c0 -0.124 -0.101 -0.225 -0.225 -0.225h-5c-0.124 0 -0.225 0.101 -0.225 0.225v5C7.275 11.374 7.376 11.475 7.5 11.475zM7.725 6.475h4.55v4.55h-4.55C7.725 11.025 7.725 6.475 7.725 6.475zM13.75 7.1h5c0.124 0 0.225 -0.101 0.225 -0.225V1.875c0 -0.124 -0.101 -0.225 -0.225 -0.225h-5c-0.124 0 -0.225 0.101 -0.225 0.225v5C13.525 6.999 13.626 7.1 13.75 7.1zM13.975 3.218l1.118 -1.118h1.238l-2.356 2.356V3.218zM13.975 5.093l2.993 -2.993h1.238l-4.231 4.231V5.093zM18.525 5.532l-1.118 1.118H16.169l2.356 -2.356V5.532zM18.525 3.657l-2.993 2.993H14.294l4.231 -4.231V3.657zM18.043 6.65l0.482 -0.481v0.482L18.043 6.65L18.043 6.65zM14.457 2.1L13.975 2.581V2.1H14.457zM1.25 11.475h5c0.124 0 0.225 -0.101 0.225 -0.225v-5c0 -0.124 -0.101 -0.225 -0.225 -0.225H1.25c-0.124 0 -0.225 0.101 -0.225 0.225v5C1.025 11.374 1.126 11.475 1.25 11.475zM1.475 6.475h4.55v4.55H1.475V6.475z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'milk\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'frozen\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'meat\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'veg\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'magazines\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> <svg v-if="segment === \'convenience\'" class=segments__svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns width=20 height=20 viewBox="0 0 20 20" version=1.1> <path id="robotics_2_" d="M19.375 19.6H0.625c-0.124 0 -0.225 -0.101 -0.225 -0.225c0 -0.039 0.011 -0.083 0.03 -0.117l1.441 -2.496c0.04 -0.069 0.115 -0.113 0.195 -0.113H9.775V13.75c0 -0.124 0.101 -0.225 0.225 -0.225h2.251l-1.603 -2.781c-0.333 -0.577 -0.331 -1.323 0.003 -1.898c0.168 -0.289 0.408 -0.529 0.693 -0.694c0.114 -0.065 0.232 -0.117 0.354 -0.158l2.112 -3.658c-0.058 -0.116 -0.108 -0.237 -0.149 -0.362h-4.241c-0.327 0.736 -1.064 1.25 -1.92 1.25c-0.129 0 -0.256 -0.012 -0.379 -0.034L5.994 7.143c0.109 0.175 0.191 0.368 0.241 0.574c0.128 0.516 0.048 1.048 -0.225 1.5l-0.936 1.609c-0.062 0.108 -0.199 0.145 -0.307 0.082l-1.331 -0.768l-0.506 0.876c0.221 0.181 0.383 0.423 0.466 0.704c0.11 0.37 0.069 0.759 -0.113 1.096l-0.326 0.6c-0.029 0.039 -0.089 0.096 -0.135 0.109l-0.977 0.289l-0.128 -0.431l0.891 -0.264l0.279 -0.518c0.125 -0.231 0.152 -0.498 0.077 -0.752c-0.076 -0.254 -0.244 -0.463 -0.476 -0.588s-0.498 -0.152 -0.753 -0.077c-0.254 0.076 -0.463 0.245 -0.588 0.476l-0.281 0.518l0.263 0.887l-0.431 0.128l-0.289 -0.976c-0.017 -0.057 -0.011 -0.119 0.018 -0.171l0.326 -0.6c0.182 -0.336 0.486 -0.583 0.856 -0.692c0.312 -0.094 0.637 -0.079 0.934 0.038l0.504 -0.873l-1.349 -0.779c-0.052 -0.03 -0.09 -0.08 -0.105 -0.139s-0.006 -0.121 0.026 -0.173l0.998 -1.656c0.273 -0.452 0.706 -0.771 1.222 -0.898c0.23 -0.056 0.464 -0.073 0.69 -0.048l1.169 -2.024C5.508 3.884 5.4 3.517 5.4 3.125c0 -1.158 0.942 -2.1 2.1 -2.1c0.856 0 1.593 0.514 1.92 1.25h4.241c0.357 -1.087 1.383 -1.875 2.589 -1.875c1.502 0 2.725 1.222 2.725 2.725c0 1.493 -1.208 2.709 -2.696 2.725l-2.037 3.529l2.389 4.146H18.125c0.124 0 0.225 0.101 0.225 0.225v2.9H19.375c0.124 0 0.225 0.101 0.225 0.225v2.5C19.6 19.499 19.499 19.6 19.375 19.6zM1.013 19.15h18.137v-2.05H2.196L1.013 19.15zM10.225 16.65h7.675v-2.675H10.225V16.65zM12.77 13.525h3.342l-2.566 -4.452c-0.126 -0.217 -0.307 -0.399 -0.524 -0.525c-0.45 -0.261 -1.007 -0.264 -1.452 -0.006c-0.217 0.126 -0.401 0.309 -0.529 0.529c-0.251 0.432 -0.252 1.014 -0.003 1.447L12.77 13.525zM2.121 8.861l2.677 1.546l0.826 -1.419c0.213 -0.352 0.274 -0.764 0.176 -1.163c-0.099 -0.399 -0.345 -0.734 -0.694 -0.944c-0.348 -0.21 -0.761 -0.273 -1.159 -0.174s-0.734 0.345 -0.945 0.694L2.121 8.861zM12.288 7.901c0.331 0 0.663 0.086 0.959 0.258c0.285 0.166 0.522 0.404 0.688 0.69l0.046 0.081l1.801 -3.119c-0.692 -0.12 -1.295 -0.503 -1.704 -1.04l-1.807 3.131C12.277 7.901 12.283 7.901 12.288 7.901zM4.986 6.328c0.121 0.044 0.239 0.1 0.351 0.168c0.129 0.078 0.247 0.169 0.354 0.272l0.988 -1.71C6.419 4.947 6.186 4.785 5.992 4.585L4.986 6.328zM16.25 0.85c-1.254 0 -2.275 1.021 -2.275 2.275S14.996 5.4 16.25 5.4S18.525 4.379 18.525 3.125S17.504 0.85 16.25 0.85zM7.5 1.475c-0.91 0 -1.65 0.741 -1.65 1.65S6.59 4.775 7.5 4.775S9.15 4.035 9.15 3.125S8.41 1.475 7.5 1.475zM9.562 3.525h3.992C13.535 3.394 13.525 3.261 13.525 3.125s0.011 -0.269 0.029 -0.4h-3.992C9.587 2.854 9.6 2.988 9.6 3.125S9.587 3.396 9.562 3.525zM7.813 3.125c0 0.173 -0.14 0.313 -0.313 0.313S7.188 3.297 7.188 3.125s0.14 -0.313 0.313 -0.313S7.813 2.953 7.813 3.125zM16.25 2.813c-0.173 0 -0.313 0.14 -0.313 0.313s0.14 0.313 0.313 0.313s0.313 -0.14 0.313 -0.313S16.422 2.813 16.25 2.813zM12.188 9.688c-0.173 0 -0.313 0.14 -0.313 0.313c0 0.173 0.14 0.313 0.313 0.313S12.5 10.172 12.5 10S12.36 9.688 12.188 9.688z"/> <path id="_Transparent_Rectangle" style="fill:none" width="32" height="32" d="M0 0H20V20H0V0z"/> </svg> {{ state.lang.segments[segment] }} </a> </li> </ul>';
  },
  function (e, t) {
    e.exports =
      "<div class=smalldonutchart><div class=smalldonutchart__title><div><div>{{ wert[1] | twoDecimals }}%</div></div></div><canvas class=smalldonutchart__canvas></canvas><div class=smalldonutchart__legend>{{ wert[0] }}</div></div>";
  },
  function (e, t, a) {
    var i, s;
    a(154),
      (i = a(114)),
      (s = a(226)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(155),
      (i = a(115)),
      (s = a(227)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(156),
      (i = a(116)),
      (s = a(228)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(157),
      (i = a(117)),
      (s = a(229)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(159),
      (i = a(119)),
      (s = a(231)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(161),
      (i = a(121)),
      (s = a(233)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(162),
      (i = a(122)),
      (s = a(234)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(163),
      (i = a(123)),
      (s = a(235)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(164),
      (i = a(124)),
      (s = a(236)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(165),
      (i = a(125)),
      (s = a(237)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(166),
      (i = a(126)),
      (s = a(238)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(168),
      (i = a(128)),
      (s = a(240)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(169),
      (i = a(129)),
      (s = a(241)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(170),
      (i = a(130)),
      (s = a(242)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(172),
      (i = a(132)),
      (s = a(244)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(173),
      (i = a(133)),
      (s = a(245)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t, a) {
    var i, s;
    a(174),
      (i = a(134)),
      (s = a(246)),
      (e.exports = i || {}),
      e.exports.__esModule && (e.exports = e.exports["default"]),
      s &&
        (("function" == typeof e.exports
          ? e.exports.options || (e.exports.options = {})
          : e.exports
        ).template = s);
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }.call(t, {}));
  },
  function (e, t, a) {
    function i(e) {
      return a(s(e));
    }

    function s(e) {
      return (
        n[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var n = {
      "./apples.png": 190,
      "./banana.png": 191,
      "./bananas.png": 192,
      "./berrymix.png": 193,
      "./cherries.png": 194,
      "./hellespesto.png": 195,
      "./jam.png": 196,
      "./ketchup.png": 197,
      "./kohl.png": 198,
      "./limetten.png": 199,
      "./mango.png": 200,
      "./noodles.png": 201,
      "./olives.png": 202,
      "./orange.png": 203,
      "./oranges.png": 204,
      "./pears.png": 205,
      "./pickles.png": 206,
      "./rice.png": 207,
      "./rotkohl.png": 208,
      "./sauce.png": 209,
      "./smoothiestand.png": 210,
      "./strawberries.png": 211,
      "./tea.png": 212,
    };
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (e.exports = i),
      (i.id = 265);
  },
]);
//# sourceMappingURL=app.115555d33d7e73fdce0c.js.map
