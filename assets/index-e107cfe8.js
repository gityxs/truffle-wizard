(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
var Sc;
(function (e) {
  e[(e.AllowHexSpecifier = 512)] = "AllowHexSpecifier";
})(Sc || (Sc = {}));
function kv(e, t) {
  const [, n, r, o] = e;
  return { sign: n || "", prefix: r || "", digits: o, radix: t };
}
function oh(e, t) {
  switch (t) {
    case 8:
      return e ? [0, 255] : [-128, 127];
    case 16:
      return e ? [0, 65535] : [-32768, 32767];
    case 32:
      return e ? [0, 4294967295] : [-2147483648, 2147483647];
    default:
      throw new Error("Invalid bit size.");
  }
}
function Tv(e) {
  switch (e) {
    case 2:
      return /[^0-1]/;
    case 8:
      return /[^0-7]/;
    case 10:
      return /[^0-9]/;
    case 16:
      return /[^0-9a-fA-F]/;
    default:
      throw new Error("Invalid Base.");
  }
}
function Nv(e, t) {
  if (t & Sc.AllowHexSpecifier) return 16;
  switch (e) {
    case "0b":
    case "0B":
      return 2;
    case "0o":
    case "0O":
      return 8;
    case "0x":
    case "0X":
      return 16;
    default:
      return 10;
  }
}
function wp(e, t, n) {
  const o = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/.exec(
    e.replace(/_/g, "")
  );
  if (o != null) {
    const [, , l, i] = o;
    if (((n = n || Nv(l, t)), !Tv(n).test(i))) return kv(o, n);
  }
  return null;
}
function vr(e, t, n, r, o) {
  const l = wp(e, t, o);
  if (l != null) {
    let i = Number.parseInt(l.sign + l.digits, l.radix);
    if (!Number.isNaN(i)) {
      const [s, u] = oh(!0, r);
      !n &&
        l.radix !== 10 &&
        i >= s &&
        i <= u &&
        (i = (i << (32 - r)) >> (32 - r));
      const [a, c] = oh(n, r);
      if (i >= a && i <= c) return i;
    }
  }
  throw new Error("Input string was not in a correct format.");
}
function Mv(e, t, n, r, o) {
  try {
    return (o.contents = vr(e, t, n, r)), !0;
  } catch {
    return !1;
  }
}
function Iv(e) {
  return e === -2147483648 ? e : -e;
}
const mo = Symbol("numeric");
function Sp(e) {
  return typeof e == "number" || (e == null ? void 0 : e[mo]);
}
function xv(e, t) {
  return typeof e == "number" ? (e < t ? -1 : e > t ? 1 : 0) : e.CompareTo(t);
}
function _c(e, t) {
  return typeof e == "number" ? e * t : e[mo]().multiply(t);
}
function Qs(e, t) {
  return typeof e == "number" ? e.toFixed(t) : e[mo]().toFixed(t);
}
function pu(e, t) {
  return typeof e == "number" ? e.toPrecision(t) : e[mo]().toPrecision(t);
}
function mu(e, t) {
  return typeof e == "number" ? e.toExponential(t) : e[mo]().toExponential(t);
}
function gu(e) {
  return typeof e == "number"
    ? (Number(e) >>> 0).toString(16)
    : e[mo]().toHex();
}
var _n = null;
try {
  _n = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
        127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11,
        7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
        100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
        101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
        10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4,
        66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
        1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
        34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
        173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
        132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
        32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
        32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
        1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
        173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
        11,
      ])
    ),
    {}
  ).exports;
} catch {}
function Zn(e, t, n) {
  (this.low = e | 0), (this.high = t | 0), (this.unsigned = !!n);
}
Zn.prototype.GetHashCode = function () {
  let e = this.unsigned ? 1 : 0;
  return (e = ((e << 5) + e) ^ this.high), (e = ((e << 5) + e) ^ this.low), e;
};
Zn.prototype.Equals = function (e) {
  return ln(this, e);
};
Zn.prototype.CompareTo = function (e) {
  return as(this, e);
};
Zn.prototype.toString = function (e) {
  return Al(this, e);
};
Zn.prototype.toJSON = function () {
  return Al(this);
};
Zn.prototype[mo] = function () {
  const e = this;
  return {
    multiply: (t) => an(e, t),
    toPrecision: (t) => String(e) + (0).toPrecision(t).substr(1),
    toExponential: (t) => String(e) + (0).toExponential(t).substr(1),
    toFixed: (t) => String(e) + (0).toFixed(t).substr(1),
    toHex: () => Al(e.unsigned ? e : Wv(Gv(e), !0), 16),
  };
};
Zn.prototype.__isLong__;
Object.defineProperty(Zn.prototype, "__isLong__", { value: !0 });
function qn(e) {
  return (e && e.__isLong__) === !0;
}
var lh = {},
  ih = {};
function Zo(e, t) {
  var n, r, o;
  return t
    ? ((e >>>= 0),
      (o = 0 <= e && e < 256) && ((r = ih[e]), r)
        ? r
        : ((n = Ae(e, (e | 0) < 0 ? -1 : 0, !0)), o && (ih[e] = n), n))
    : ((e |= 0),
      (o = -128 <= e && e < 128) && ((r = lh[e]), r)
        ? r
        : ((n = Ae(e, e < 0 ? -1 : 0, !1)), o && (lh[e] = n), n));
}
function sn(e, t) {
  if (isNaN(e)) return t ? jr : Un;
  if (t) {
    if (e < 0) return jr;
    if (e >= _p) return Rv;
  } else {
    if (e <= -uh) return Cn;
    if (e + 1 >= uh) return Ov;
  }
  return e < 0 ? mt(sn(-e, t)) : Ae(e % Pl | 0, (e / Pl) | 0, t);
}
function Ae(e, t, n) {
  return new Zn(e, t, n);
}
var yu = Math.pow;
function Wf(e, t, n) {
  if (e.length === 0) throw Error("empty string");
  if (e === "NaN" || e === "Infinity" || e === "+Infinity" || e === "-Infinity")
    return Un;
  if (
    (typeof t == "number" ? ((n = t), (t = !1)) : (t = !!t),
    (n = n || 10),
    n < 2 || 36 < n)
  )
    throw RangeError("radix");
  var r = e.indexOf("-");
  if (r > 0) throw Error("interior hyphen");
  if (r === 0) return mt(Wf(e.substring(1), t, n));
  for (var o = sn(yu(n, 8)), l = Un, i = 0; i < e.length; i += 8) {
    var s = Math.min(8, e.length - i),
      u = parseInt(e.substring(i, i + s), n);
    if (s < 8) {
      var a = sn(yu(n, s));
      l = Do(an(l, a), sn(u));
    } else (l = an(l, o)), (l = Do(l, sn(u)));
  }
  return (l.unsigned = t), l;
}
function go(e, t) {
  return typeof e == "number"
    ? sn(e, t)
    : typeof e == "string"
    ? Wf(e, t)
    : Ae(e.low, e.high, typeof t == "boolean" ? t : e.unsigned);
}
var sh = 1 << 16,
  Fv = 1 << 24,
  Pl = sh * sh,
  _p = Pl * Pl,
  uh = _p / 2,
  ah = Zo(Fv),
  Un = Zo(0),
  jr = Zo(0, !0),
  _i = Zo(1),
  Pv = Zo(1, !0),
  ch = Zo(-1),
  Ov = Ae(-1, 2147483647, !1),
  Rv = Ae(-1, -1, !0),
  Cn = Ae(0, -2147483648, !1);
function Ol(e) {
  return e.unsigned ? e.low >>> 0 : e.low;
}
function Rl(e) {
  return e.unsigned
    ? (e.high >>> 0) * Pl + (e.low >>> 0)
    : e.high * Pl + (e.low >>> 0);
}
function Al(e, t) {
  if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
  if (Oo(e)) return "0";
  if (Sn(e))
    if (ln(e, Cn)) {
      var n = sn(t),
        r = _r(e, n),
        o = $o(an(r, n), e);
      return Al(r, t) + Ol(o).toString(t);
    } else return "-" + Al(mt(e), t);
  for (var l = sn(yu(t, 6), e.unsigned), i = e, s = ""; ; ) {
    var u = _r(i, l),
      a = Ol($o(i, an(u, l))) >>> 0,
      c = a.toString(t);
    if (((i = u), Oo(i))) return c + s;
    for (; c.length < 6; ) c = "0" + c;
    s = "" + c + s;
  }
}
function Oo(e) {
  return e.high === 0 && e.low === 0;
}
function Sn(e) {
  return !e.unsigned && e.high < 0;
}
function fh(e) {
  return (e.low & 1) === 1;
}
function ln(e, t) {
  return (
    qn(t) || (t = go(t)),
    e.unsigned !== t.unsigned && e.high >>> 31 === 1 && t.high >>> 31 === 1
      ? !1
      : e.high === t.high && e.low === t.low
  );
}
function dh(e, t) {
  return as(e, t) < 0;
}
function Aa(e, t) {
  return as(e, t) > 0;
}
function Av(e, t) {
  return as(e, t) >= 0;
}
function as(e, t) {
  if ((qn(t) || (t = go(t)), ln(e, t))) return 0;
  var n = Sn(e),
    r = Sn(t);
  return n && !r
    ? -1
    : !n && r
    ? 1
    : e.unsigned
    ? t.high >>> 0 > e.high >>> 0 ||
      (t.high === e.high && t.low >>> 0 > e.low >>> 0)
      ? -1
      : 1
    : Sn($o(e, t))
    ? -1
    : 1;
}
function mt(e) {
  return !e.unsigned && ln(e, Cn) ? Cn : Do($v(e), _i);
}
function Do(e, t) {
  qn(t) || (t = go(t));
  var n = e.high >>> 16,
    r = e.high & 65535,
    o = e.low >>> 16,
    l = e.low & 65535,
    i = t.high >>> 16,
    s = t.high & 65535,
    u = t.low >>> 16,
    a = t.low & 65535,
    c = 0,
    d = 0,
    f = 0,
    v = 0;
  return (
    (v += l + a),
    (f += v >>> 16),
    (v &= 65535),
    (f += o + u),
    (d += f >>> 16),
    (f &= 65535),
    (d += r + s),
    (c += d >>> 16),
    (d &= 65535),
    (c += n + i),
    (c &= 65535),
    Ae((f << 16) | v, (c << 16) | d, e.unsigned)
  );
}
function $o(e, t) {
  return qn(t) || (t = go(t)), Do(e, mt(t));
}
function an(e, t) {
  if (Oo(e)) return e.unsigned ? jr : Un;
  if ((qn(t) || (t = go(t)), _n)) {
    var n = _n.mul(e.low, e.high, t.low, t.high);
    return Ae(n, _n.get_high(), e.unsigned);
  }
  if (Oo(t)) return e.unsigned ? jr : Un;
  if (ln(e, Cn)) return fh(t) ? Cn : Un;
  if (ln(t, Cn)) return fh(e) ? Cn : Un;
  if (Sn(e)) return Sn(t) ? an(mt(e), mt(t)) : mt(an(mt(e), t));
  if (Sn(t)) return mt(an(e, mt(t)));
  if (dh(e, ah) && dh(t, ah)) return sn(Rl(e) * Rl(t), e.unsigned);
  var r = e.high >>> 16,
    o = e.high & 65535,
    l = e.low >>> 16,
    i = e.low & 65535,
    s = t.high >>> 16,
    u = t.high & 65535,
    a = t.low >>> 16,
    c = t.low & 65535,
    d = 0,
    f = 0,
    v = 0,
    w = 0;
  return (
    (w += i * c),
    (v += w >>> 16),
    (w &= 65535),
    (v += l * c),
    (f += v >>> 16),
    (v &= 65535),
    (v += i * a),
    (f += v >>> 16),
    (v &= 65535),
    (f += o * c),
    (d += f >>> 16),
    (f &= 65535),
    (f += l * a),
    (d += f >>> 16),
    (f &= 65535),
    (f += i * u),
    (d += f >>> 16),
    (f &= 65535),
    (d += r * c + o * a + l * u + i * s),
    (d &= 65535),
    Ae((v << 16) | w, (d << 16) | f, e.unsigned)
  );
}
function _r(e, t) {
  if ((qn(t) || (t = go(t)), Oo(t))) throw Error("division by zero");
  if (_n) {
    if (!e.unsigned && e.high === -2147483648 && t.low === -1 && t.high === -1)
      return e;
    var n = (e.unsigned ? _n.div_u : _n.div_s)(e.low, e.high, t.low, t.high);
    return Ae(n, _n.get_high(), e.unsigned);
  }
  if (Oo(e)) return e.unsigned ? jr : Un;
  var r, o, l;
  if (e.unsigned) {
    if ((t.unsigned || (t = Vv(t)), Aa(t, e))) return jr;
    if (Aa(t, Uv(e, 1))) return Pv;
    l = jr;
  } else {
    if (ln(e, Cn)) {
      if (ln(t, _i) || ln(t, ch)) return Cn;
      if (ln(t, Cn)) return _i;
      var i = Bv(e, 1);
      return (
        (r = zv(_r(i, t), 1)),
        ln(r, Un)
          ? Sn(t)
            ? _i
            : ch
          : ((o = $o(e, an(t, r))), (l = Do(r, _r(o, t))), l)
      );
    } else if (ln(t, Cn)) return e.unsigned ? jr : Un;
    if (Sn(e)) return Sn(t) ? _r(mt(e), mt(t)) : mt(_r(mt(e), t));
    if (Sn(t)) return mt(_r(e, mt(t)));
    l = Un;
  }
  for (o = e; Av(o, t); ) {
    r = Math.max(1, Math.floor(Rl(o) / Rl(t)));
    for (
      var s = Math.ceil(Math.log(r) / Math.LN2),
        u = s <= 48 ? 1 : yu(2, s - 48),
        a = sn(r),
        c = an(a, t);
      Sn(c) || Aa(c, o);

    )
      (r -= u), (a = sn(r, e.unsigned)), (c = an(a, t));
    Oo(a) && (a = _i), (l = Do(l, a)), (o = $o(o, c));
  }
  return l;
}
function Dv(e, t) {
  if ((qn(t) || (t = go(t)), _n)) {
    var n = (e.unsigned ? _n.rem_u : _n.rem_s)(e.low, e.high, t.low, t.high);
    return Ae(n, _n.get_high(), e.unsigned);
  }
  return $o(e, an(_r(e, t), t));
}
function $v(e) {
  return Ae(~e.low, ~e.high, e.unsigned);
}
function Lv(e, t) {
  return qn(t) || (t = go(t)), Ae(e.low & t.low, e.high & t.high, e.unsigned);
}
function zv(e, t) {
  return (
    qn(t) && (t = Ol(t)),
    (t &= 63) === 0
      ? e
      : t < 32
      ? Ae(e.low << t, (e.high << t) | (e.low >>> (32 - t)), e.unsigned)
      : Ae(0, e.low << (t - 32), e.unsigned)
  );
}
function Bv(e, t) {
  return (
    qn(t) && (t = Ol(t)),
    (t &= 63) === 0
      ? e
      : t < 32
      ? Ae((e.low >>> t) | (e.high << (32 - t)), e.high >> t, e.unsigned)
      : Ae(e.high >> (t - 32), e.high >= 0 ? 0 : -1, e.unsigned)
  );
}
function Uv(e, t) {
  if ((qn(t) && (t = Ol(t)), (t &= 63), t === 0)) return e;
  var n = e.high;
  if (t < 32) {
    var r = e.low;
    return Ae((r >>> t) | (n << (32 - t)), n >>> t, e.unsigned);
  } else return Ae(t === 32 ? n : n >>> (t - 32), 0, e.unsigned);
}
function Vv(e) {
  return e.unsigned ? e : Ae(e.low, e.high, !0);
}
function Gv(e, t) {
  return t ? jv(e) : Hv(e);
}
function jv(e) {
  var t = e.high,
    n = e.low;
  return [
    n & 255,
    (n >>> 8) & 255,
    (n >>> 16) & 255,
    n >>> 24,
    t & 255,
    (t >>> 8) & 255,
    (t >>> 16) & 255,
    t >>> 24,
  ];
}
function Hv(e) {
  var t = e.high,
    n = e.low;
  return [
    t >>> 24,
    (t >>> 16) & 255,
    (t >>> 8) & 255,
    t & 255,
    n >>> 24,
    (n >>> 16) & 255,
    (n >>> 8) & 255,
    n & 255,
  ];
}
function Wv(e, t, n) {
  return n ? Qv(e, t) : Kv(e, t);
}
function Qv(e, t) {
  return new Zn(
    e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
    e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
    t
  );
}
function Kv(e, t) {
  return new Zn(
    (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
    (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
    t
  );
}
const be = Do,
  Lo = $o,
  Ze = an,
  Ht = _r,
  Cc = Dv,
  Cp = mt,
  Zl = Lv,
  zn = ln,
  W = as,
  Ep = Zo,
  p = Ae,
  vu = sn,
  Wn = Ol,
  kp = Rl,
  hh = Al;
function Jv(e, t, n) {
  switch (t) {
    case 2:
      return e
        ? "1111111111111111111111111111111111111111111111111111111111111111"
        : n
        ? "1000000000000000000000000000000000000000000000000000000000000000"
        : "111111111111111111111111111111111111111111111111111111111111111";
    case 8:
      return e
        ? "1777777777777777777777"
        : n
        ? "1000000000000000000000"
        : "777777777777777777777";
    case 10:
      return e
        ? "18446744073709551615"
        : n
        ? "9223372036854775808"
        : "9223372036854775807";
    case 16:
      return e
        ? "FFFFFFFFFFFFFFFF"
        : n
        ? "8000000000000000"
        : "7FFFFFFFFFFFFFFF";
    default:
      throw new Error("Invalid radix.");
  }
}
function le(e, t, n) {
  let r = e,
    o = 0;
  switch (n) {
    case 0:
      (r = (e << 24) >> 24), (o = r);
      break;
    case 4:
      r = (e << 24) >>> 24;
      break;
    case 1:
      (r = (e << 16) >> 16), (o = r);
      break;
    case 5:
      r = (e << 16) >>> 16;
      break;
    case 2:
      (r = e >> 0), (o = r);
      break;
    case 6:
      r = e >>> 0;
      break;
  }
  return Ae(r, o >> 31, t);
}
function Ks(e, t, n, r, o) {
  const l = wp(e, t, o);
  if (l != null) {
    const i = (a, c) => {
        const d = Math.max(a.length, c.length);
        return a.padStart(d, "0") <= c.padStart(d, "0");
      },
      s = l.sign === "-",
      u = Jv(n || l.radix !== 10, l.radix, s);
    if (i(l.digits.toUpperCase(), u))
      return (e = s ? l.sign + l.digits : l.digits), Wf(e, n, l.radix);
  }
  throw new Error("Input string was not in a correct format.");
}
function Zv(e, t, n, r, o) {
  try {
    return (o.contents = Ks(e, t, n, r)), !0;
  } catch {
    return !1;
  }
}
function qv(e, t) {
  return Ze(be(be(sn(e), 621355968e5), t), 1e4);
}
function Yv(e) {
  return Rl(Lo(Ht(e, 1e4), 621355968e5));
}
const Xv = p(1, 0, !1);
class Dl {
  constructor(t) {
    this.value = t;
  }
  toJSON() {
    return this.value;
  }
  toString() {
    return String(this.value);
  }
  GetHashCode() {
    return Et(this.value);
  }
  Equals(t) {
    return t == null ? !1 : Ee(this.value, t instanceof Dl ? t.value : t);
  }
  CompareTo(t) {
    return t == null ? 1 : re(this.value, t instanceof Dl ? t.value : t);
  }
}
function Re(e) {
  if (e == null) throw new Error("Option has no value");
  return e instanceof Dl ? e.value : e;
}
function Ir(e) {
  return Array.isArray(e) || ArrayBuffer.isView(e);
}
function bv(e) {
  return e != null && typeof e == "object" && Symbol.iterator in e;
}
function ew(e) {
  return e != null && typeof e.GetEnumerator == "function";
}
function tw(e) {
  return e != null && typeof e.CompareTo == "function";
}
function nw(e) {
  return e != null && typeof e.Equals == "function";
}
function Tp(e) {
  return e != null && typeof e.GetHashCode == "function";
}
function rw(e) {
  return e != null && typeof e.Dispose == "function";
}
function ce(e) {
  rw(e) && e.Dispose();
}
function Wt() {
  return null;
}
function wu(e, t) {
  var n, r;
  return (
    ((n = Object.getPrototypeOf(e)) === null || n === void 0
      ? void 0
      : n.constructor) ===
    ((r = Object.getPrototypeOf(t)) === null || r === void 0
      ? void 0
      : r.constructor)
  );
}
class ow {
  constructor(t) {
    (this.iter = t), (this.current = Wt());
  }
  "System.Collections.Generic.IEnumerator`1.get_Current"() {
    return this.current;
  }
  "System.Collections.IEnumerator.get_Current"() {
    return this.current;
  }
  "System.Collections.IEnumerator.MoveNext"() {
    const t = this.iter.next();
    return (this.current = t.value), !t.done;
  }
  "System.Collections.IEnumerator.Reset"() {
    throw new Error("JS iterators cannot be reset");
  }
  Dispose() {}
}
function Se(e) {
  return ew(e) ? e.GetEnumerator() : new ow(e[Symbol.iterator]());
}
function ql(e) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const t = e["System.Collections.IEnumerator.MoveNext"](),
        n = t
          ? e["System.Collections.Generic.IEnumerator`1.get_Current"]()
          : void 0;
      return { done: !t, value: n };
    },
  };
}
class nt {
  constructor(t) {
    (this.factory = t), (this.isValueCreated = !1);
  }
  get Value() {
    return (
      this.isValueCreated ||
        ((this.createdValue = this.factory()), (this.isValueCreated = !0)),
      this.createdValue
    );
  }
  get IsValueCreated() {
    return this.isValueCreated;
  }
}
function lr(e, t) {
  let n = e.toString(10);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function Ec(e) {
  const t = e;
  return typeof t.offset == "number"
    ? t.offset
    : e.kind === 1
    ? 0
    : e.getTimezoneOffset() * -6e4;
}
function kc(e, t) {
  return (
    (e = e < 0 && t != null && t !== 10 ? 4294967295 + e + 1 : e), e.toString(t)
  );
}
class Cr {
  static id(t) {
    return Cr.idMap.has(t) || Cr.idMap.set(t, ++Cr.count), Cr.idMap.get(t);
  }
}
Cr.idMap = new WeakMap();
Cr.count = 0;
function Qf(e) {
  let t = 0,
    n = 5381;
  const r = e.length;
  for (; t < r; ) n = (n * 33) ^ e.charCodeAt(t++);
  return n;
}
function Ui(e) {
  return (e * 2654435761) | 0;
}
function Yl(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => ((t << 5) + t) ^ n);
}
function lw(e) {
  if (e == null) return 0;
  switch (typeof e) {
    case "boolean":
      return e ? 1 : 0;
    case "number":
      return Ui(e);
    case "string":
      return Qf(e);
    default:
      return Ui(Cr.id(e));
  }
}
function iw(e) {
  return Tp(e) ? e.GetHashCode() : lw(e);
}
function sw(e) {
  return e.getTime();
}
function uw(e) {
  const t = e.length,
    n = new Array(t);
  for (let r = 0; r < t; r++) n[r] = Et(e[r]);
  return Yl(n);
}
function Et(e) {
  var t;
  if (e == null) return 0;
  switch (typeof e) {
    case "boolean":
      return e ? 1 : 0;
    case "number":
      return Ui(e);
    case "string":
      return Qf(e);
    default: {
      if (Tp(e)) return e.GetHashCode();
      if (Ir(e)) return uw(e);
      if (e instanceof Date) return sw(e);
      if (
        ((t = Object.getPrototypeOf(e)) === null || t === void 0
          ? void 0
          : t.constructor) === Object
      ) {
        const n = Object.values(e).map((r) => Et(r));
        return Yl(n);
      } else return Ui(Cr.id(e));
    }
  }
}
function Da(e) {
  return iw(e);
}
function Tc(e, t, n) {
  if (e == null) return t == null;
  if (t == null || e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (!n(e[r], t[r])) return !1;
  return !0;
}
function Np(e, t) {
  return Tc(e, t, Ee);
}
function aw(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  n.sort(), r.sort();
  for (let o = 0; o < n.length; o++)
    if (n[o] !== r[o] || !Ee(e[n[o]], t[r[o]])) return !1;
  return !0;
}
function Ee(e, t) {
  var n;
  return e === t
    ? !0
    : e == null
    ? t == null
    : t == null
    ? !1
    : nw(e)
    ? e.Equals(t)
    : Ir(e)
    ? Ir(t) && Np(e, t)
    : typeof e != "object"
    ? !1
    : e instanceof Date
    ? t instanceof Date && Mp(e, t) === 0
    : ((n = Object.getPrototypeOf(e)) === null || n === void 0
        ? void 0
        : n.constructor) === Object && aw(e, t);
}
function Mp(e, t) {
  let n, r;
  return (
    "offset" in e && "offset" in t
      ? ((n = e.getTime()), (r = t.getTime()))
      : ((n = e.getTime() + Ec(e)), (r = t.getTime() + Ec(t))),
    n === r ? 0 : n < r ? -1 : 1
  );
}
function Er(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function cw(e, t, n) {
  if (e == null) return t == null ? 0 : 1;
  if (t == null) return -1;
  if (e.length !== t.length) return e.length < t.length ? -1 : 1;
  for (let r = 0, o = 0; r < e.length; r++)
    if (((o = n(e[r], t[r])), o !== 0)) return o;
  return 0;
}
function Kf(e, t) {
  return cw(e, t, re);
}
function fw(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return n.length < r.length ? -1 : 1;
  n.sort(), r.sort();
  for (let o = 0, l = 0; o < n.length; o++) {
    const i = n[o];
    if (i !== r[o]) return i < r[o] ? -1 : 1;
    if (((l = re(e[i], t[i])), l !== 0)) return l;
  }
  return 0;
}
function re(e, t) {
  var n;
  return e === t
    ? 0
    : e == null
    ? t == null
      ? 0
      : -1
    : t == null
    ? 1
    : tw(e)
    ? e.CompareTo(t)
    : Ir(e)
    ? Ir(t)
      ? Kf(e, t)
      : -1
    : typeof e != "object"
    ? e < t
      ? -1
      : 1
    : e instanceof Date
    ? t instanceof Date
      ? Mp(e, t)
      : -1
    : ((n = Object.getPrototypeOf(e)) === null || n === void 0
        ? void 0
        : n.constructor) === Object
    ? fw(e, t)
    : -1;
}
function dw(e, t, n) {
  return e(t, n) < 0 ? t : n;
}
function Su(e, t, n) {
  return e(t, n) > 0 ? t : n;
}
function En(e) {
  const t = {};
  for (const n of e) t[n[0]] = n[1];
  return t;
}
const Vi = Symbol("curried");
function zo(e, t) {
  if (t == null) return t;
  const n = Re(t);
  if (n.length > 1) return n;
  const r = (...o) => {
    let l = n;
    for (let i = 0; i < e; i++) l = l(o[i]);
    return l;
  };
  return (r[Vi] = n), r;
}
function Jf(e, t, n) {
  return (r) => (t === 1 ? n(...e.concat([r])) : Jf(e.concat([r]), t - 1, n));
}
function hw(e, t) {
  if (t == null) return t;
  const n = Re(t);
  return n.length === 1 ? n : Vi in n ? n[Vi] : Jf([], e, n);
}
function cr(e, t, n) {
  if (t != null)
    if (Vi in t) {
      t = t[Vi];
      for (let r = 0; r < n.length; r++) t = t(n[r]);
      return t;
    } else return Jf(n, e, t);
}
function pw(e) {
  let t = 0,
    n = "[";
  for (const r of e) {
    if (t === 0) n += dn(r);
    else if (t === 100) {
      n += "; ...";
      break;
    } else n += "; " + dn(r);
    t++;
  }
  return n + "]";
}
function dn(e, t = 0) {
  var n, r;
  if (e != null && typeof e == "object") {
    if (typeof e.toString == "function") return e.toString();
    if (Symbol.iterator in e) return pw(e);
    {
      const o =
        (n = Object.getPrototypeOf(e)) === null || n === void 0
          ? void 0
          : n.constructor;
      return o === Object && t < 10
        ? "{ " +
            Object.entries(e).map(([l, i]) => l + " = " + dn(i, t + 1)).join(`
  `) +
            " }"
        : (r = o == null ? void 0 : o.name) !== null && r !== void 0
        ? r
        : "";
    }
  }
  return String(e);
}
function mw(e, t) {
  if (t.length === 0) return e;
  {
    let n,
      r = !0;
    return (
      t.length === 1
        ? ((n = dn(t[0])), (r = n.indexOf(" ") >= 0))
        : (n = t.map((o) => dn(o)).join(", ")),
      e + (r ? " (" : " ") + n + (r ? ")" : "")
    );
  }
}
class xn {
  get name() {
    return this.cases()[this.tag];
  }
  toJSON() {
    return this.fields.length === 0
      ? this.name
      : [this.name].concat(this.fields);
  }
  toString() {
    return mw(this.name, this.fields);
  }
  GetHashCode() {
    const t = this.fields.map((n) => Et(n));
    return t.splice(0, 0, Ui(this.tag)), Yl(t);
  }
  Equals(t) {
    return this === t
      ? !0
      : wu(this, t) && this.tag === t.tag
      ? Np(this.fields, t.fields)
      : !1;
  }
  CompareTo(t) {
    return this === t
      ? 0
      : wu(this, t)
      ? this.tag === t.tag
        ? Kf(this.fields, t.fields)
        : this.tag < t.tag
        ? -1
        : 1
      : -1;
  }
}
function gw(e) {
  const t = {},
    n = Object.keys(e);
  for (let r = 0; r < n.length; r++) t[n[r]] = e[n[r]];
  return t;
}
function yw(e) {
  return (
    "{ " +
    Object.entries(e).map(([t, n]) => t + " = " + dn(n)).join(`
  `) +
    " }"
  );
}
function vw(e) {
  const t = Object.values(e).map((n) => Et(n));
  return Yl(t);
}
function ww(e, t) {
  if (e === t) return !0;
  if (wu(e, t)) {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r++) if (!Ee(e[n[r]], t[n[r]])) return !1;
    return !0;
  } else return !1;
}
function Sw(e, t) {
  if (e === t) return 0;
  if (wu(e, t)) {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      const o = re(e[n[r]], t[n[r]]);
      if (o !== 0) return o;
    }
    return 0;
  } else return -1;
}
class Jt {
  toJSON() {
    return gw(this);
  }
  toString() {
    return yw(this);
  }
  GetHashCode() {
    return vw(this);
  }
  Equals(t) {
    return ww(this, t);
  }
  CompareTo(t) {
    return Sw(this, t);
  }
}
class so {
  get contents() {
    return this.getter();
  }
  set contents(t) {
    this.setter(t);
  }
  constructor(t, n) {
    typeof n == "function"
      ? ((this.getter = t), (this.setter = n))
      : ((this.getter = () => t),
        (this.setter = (r) => {
          t = r;
        }));
  }
}
var ge = {
    GetHashCode() {
      return Yl([this.s, this.e].concat(this.c));
    },
    Equals(e) {
      return !this.cmp(e);
    },
    CompareTo(e) {
      return this.cmp(e);
    },
    [mo]() {
      const e = this;
      return {
        multiply: (t) => e.mul(t),
        toPrecision: (t) => e.toPrecision(t),
        toExponential: (t) => e.toExponential(t),
        toFixed: (t) => e.toFixed(t),
        toHex: () => (Number(e) >>> 0).toString(16),
      };
    },
  },
  _w = 28,
  Cw = 1,
  Bo = 1e6,
  ph = 1e6,
  Ew = -29,
  kw = 29,
  Tw = !1,
  cs = "[big.js] ",
  qo = cs + "Invalid ",
  ia = qo + "decimal places",
  Nw = qo + "rounding mode",
  Ip = cs + "Division by zero",
  fr = void 0,
  Mw = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function xp() {
  function e(t) {
    var n = this;
    if (!(n instanceof e)) return t === fr ? xp() : new e(t);
    if (t instanceof e) (n.s = t.s), (n.e = t.e), (n.c = t.c.slice()), Iw(n);
    else {
      if (typeof t != "string") {
        if (e.strict === !0) throw TypeError(qo + "number");
        t = t === 0 && 1 / t < 0 ? "-0" : String(t);
      }
      xw(n, t);
    }
    n.constructor = e;
  }
  return (
    (e.prototype = ge),
    (e.DP = _w),
    (e.RM = Cw),
    (e.NE = Ew),
    (e.PE = kw),
    (e.strict = Tw),
    e
  );
}
function Iw(e) {
  if (e.c.length > 1 && !e.c[0]) {
    let t = e.c.findIndex((n) => n);
    (e.c = e.c.slice(t)), (e.e = e.e - t);
  }
}
function xw(e, t) {
  var n, r, o;
  if (!Mw.test(t)) throw Error(qo + "number");
  for (
    e.s = t.charAt(0) == "-" ? ((t = t.slice(1)), -1) : 1,
      (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (r = t.search(/e/i)) > 0
        ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
        : n < 0 && (n = t.length),
      o = t.length,
      r = 0;
    r < n && r < o && t.charAt(r) == "0";

  )
    ++r;
  if (r == o) e.c = [(e.e = 0)];
  else
    for (e.e = n - r - 1, e.c = [], n = 0; r < o; ) e.c[n++] = +t.charAt(r++);
  return (e = yo(e, Qn.DP + 1, Qn.RM)), e;
}
function yo(e, t, n, r) {
  var o = e.c;
  if ((n === fr && (n = Qn.RM), n !== 0 && n !== 1 && n !== 2 && n !== 3))
    throw Error(Nw);
  if (t < 1)
    (r =
      (n === 3 && (r || !!o[0])) ||
      (t === 0 &&
        ((n === 1 && o[0] >= 5) ||
          (n === 2 && (o[0] > 5 || (o[0] === 5 && (r || o[1] !== fr))))))),
      (o.length = 1),
      r ? ((e.e = e.e - t + 1), (o[0] = 1)) : (o[0] = e.e = 0);
  else if (t < o.length) {
    const l = o.findIndex((i, s) => s >= t && i > 0) < 0;
    if (
      ((r =
        (n === 1 && o[t] >= 5) ||
        (n === 2 &&
          (o[t] > 5 ||
            (o[t] === 5 && (r || o[t + 1] !== fr || o[t - 1] & 1)))) ||
        (n === 3 && (r || !l))),
      (o.length = t--),
      r)
    )
      for (; ++o[t] > 9; ) (o[t] = 0), t-- || (++e.e, o.unshift(1));
    for (t = o.length; !o[--t]; ) o.pop();
  }
  return e;
}
function Xl(e, t, n) {
  var r = e.e,
    o = e.c.join(""),
    l = o.length;
  if (t)
    o =
      o.charAt(0) + (l > 1 ? "." + o.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
  else if (r < 0) {
    for (; ++r; ) o = "0" + o;
    o = "0." + o;
  } else if (r > 0)
    if (++r > l) for (r -= l; r--; ) o += "0";
    else r < l && (o = o.slice(0, r) + "." + o.slice(r));
  else l > 1 && (o = o.charAt(0) + "." + o.slice(1));
  return e.s < 0 && n ? "-" + o : o;
}
ge.abs = function () {
  var e = new this.constructor(this);
  return (e.s = 1), e;
};
ge.cmp = function (o) {
  var t,
    n = this.constructor,
    r = new n(this),
    o = new n(o),
    l = r.c,
    i = o.c,
    s = r.s,
    u = o.s,
    a = r.e,
    c = o.e;
  if (!l[0] || !i[0]) return l[0] ? s : i[0] ? -u : 0;
  if (s != u) return s;
  if (((t = s < 0), a != c)) return (a > c) ^ t ? 1 : -1;
  for (u = Math.max(l.length, i.length), s = 0; s < u; s++)
    if (((a = s < l.length ? l[s] : 0), (c = s < i.length ? i[s] : 0), a != c))
      return (a > c) ^ t ? 1 : -1;
  return 0;
};
ge.div = function (r) {
  var t = this.constructor,
    n = new t(this),
    r = new t(r),
    o = n.c,
    l = r.c,
    i = n.s == r.s ? 1 : -1,
    s = t.DP;
  if (s !== ~~s || s < 0 || s > Bo) throw Error(ia);
  if (!l[0]) throw Error(Ip);
  if (!o[0]) return (r.s = i), (r.c = [(r.e = 0)]), r;
  var u,
    a,
    c,
    d,
    f,
    v = l.slice(),
    w = (u = l.length),
    _ = o.length,
    x = o.slice(0, u),
    m = x.length,
    h = r,
    y = (h.c = []),
    S = 0,
    E = s + (h.e = n.e - r.e) + 1;
  for (h.s = i, i = E < 0 ? 0 : E, v.unshift(0); m++ < u; ) x.push(0);
  do {
    for (c = 0; c < 10; c++) {
      if (u != (m = x.length)) d = u > m ? 1 : -1;
      else
        for (f = -1, d = 0; ++f < u; )
          if (l[f] != x[f]) {
            d = l[f] > x[f] ? 1 : -1;
            break;
          }
      if (d < 0) {
        for (a = m == u ? l : v; m; ) {
          if (x[--m] < a[m]) {
            for (f = m; f && !x[--f]; ) x[f] = 9;
            --x[f], (x[m] += 10);
          }
          x[m] -= a[m];
        }
        for (; !x[0]; ) x.shift();
      } else break;
    }
    (y[S++] = d ? c : ++c), x[0] && d ? (x[m] = o[w] || 0) : (x = [o[w]]);
  } while ((w++ < _ || x[0] !== fr) && i--);
  return (
    !y[0] && S != 1 && (y.shift(), h.e--, E--),
    S > E && yo(h, E, t.RM, x[0] !== fr),
    h
  );
};
ge.eq = function (e) {
  return this.cmp(e) === 0;
};
ge.gt = function (e) {
  return this.cmp(e) > 0;
};
ge.gte = function (e) {
  return this.cmp(e) > -1;
};
ge.lt = function (e) {
  return this.cmp(e) < 0;
};
ge.lte = function (e) {
  return this.cmp(e) < 1;
};
ge.minus = ge.sub = function (s) {
  var t,
    n,
    r,
    o,
    l = this.constructor,
    i = new l(this),
    s = new l(s),
    u = i.s,
    a = s.s;
  if (u != a) return (s.s = -a), i.plus(s);
  var c = i.c.slice(),
    d = i.e,
    f = s.c,
    v = s.e;
  if (!c[0] || !f[0])
    return f[0] ? (s.s = -a) : c[0] ? (s = new l(i)) : (s.s = 1), s;
  if ((u = d - v)) {
    for (
      (o = u < 0) ? ((u = -u), (r = c)) : ((v = d), (r = f)),
        r.reverse(),
        a = u;
      a--;

    )
      r.push(0);
    r.reverse();
  } else
    for (n = ((o = c.length < f.length) ? c : f).length, u = a = 0; a < n; a++)
      if (c[a] != f[a]) {
        o = c[a] < f[a];
        break;
      }
  if (
    (o && ((r = c), (c = f), (f = r), (s.s = -s.s)),
    (a = (n = f.length) - (t = c.length)) > 0)
  )
    for (; a--; ) c[t++] = 0;
  for (a = t; n > u; ) {
    if (c[--n] < f[n]) {
      for (t = n; t && !c[--t]; ) c[t] = 9;
      --c[t], (c[n] += 10);
    }
    c[n] -= f[n];
  }
  for (; c[--a] === 0; ) c.pop();
  for (; c[0] === 0; ) c.shift(), --v;
  return c[0] || ((s.s = 1), (c = [(v = 0)])), (s.c = c), (s.e = v), s;
};
ge.mod = function (o) {
  var t,
    n = this.constructor,
    r = new n(this),
    o = new n(o),
    l = r.s,
    i = o.s;
  if (!o.c[0]) throw Error(Ip);
  return (
    (r.s = o.s = 1),
    (t = o.cmp(r) == 1),
    (r.s = l),
    (o.s = i),
    t
      ? new n(r)
      : ((l = n.DP),
        (i = n.RM),
        (n.DP = n.RM = 0),
        (r = r.div(o)),
        (n.DP = l),
        (n.RM = i),
        this.minus(r.times(o)))
  );
};
ge.plus = ge.add = function (i) {
  var t,
    n,
    r,
    o = this.constructor,
    l = new o(this),
    i = new o(i);
  if (l.s != i.s) return (i.s = -i.s), l.minus(i);
  var s = l.e,
    u = l.c,
    a = i.e,
    c = i.c;
  if (!u[0] || !c[0]) return c[0] || (u[0] ? (i = new o(l)) : (i.s = l.s)), i;
  if (((u = u.slice()), (t = s - a))) {
    for (t > 0 ? ((a = s), (r = c)) : ((t = -t), (r = u)), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (
    u.length - c.length < 0 && ((r = c), (c = u), (u = r)), t = c.length, n = 0;
    t;
    u[t] %= 10
  )
    n = ((u[--t] = u[t] + c[t] + n) / 10) | 0;
  for (n && (u.unshift(n), ++a), t = u.length; u[--t] === 0; ) u.pop();
  return (i.c = u), (i.e = a), i;
};
ge.pow = function (e) {
  var t = this.constructor,
    n = new t(this),
    r = new t("1"),
    o = new t("1"),
    l = e < 0;
  if (e !== ~~e || e < -ph || e > ph) throw Error(qo + "exponent");
  for (l && (e = -e); e & 1 && (r = r.times(n)), (e >>= 1), !!e; )
    n = n.times(n);
  return l ? o.div(r) : r;
};
ge.prec = function (e, t) {
  if (e !== ~~e || e < 1 || e > Bo) throw Error(qo + "precision");
  return yo(new this.constructor(this), e, t);
};
ge.round = function (e, t) {
  if (e === fr) e = 0;
  else if (e !== ~~e || e < -Bo || e > Bo) throw Error(ia);
  return yo(new this.constructor(this), e + this.e + 1, t);
};
ge.sqrt = function () {
  var e,
    t,
    n,
    r = this.constructor,
    o = new r(this),
    l = o.s,
    i = o.e,
    s = new r("0.5");
  if (!o.c[0]) return new r(o);
  if (l < 0) throw Error(cs + "No square root");
  (l = Math.sqrt(o + "")),
    l === 0 || l === 1 / 0
      ? ((t = o.c.join("")),
        (t.length + i) & 1 || (t += "0"),
        (l = Math.sqrt(t)),
        (i = (((i + 1) / 2) | 0) - (i < 0 || i & 1)),
        (e = new r(
          (l == 1 / 0
            ? "5e"
            : (l = l.toExponential()).slice(0, l.indexOf("e") + 1)) + i
        )))
      : (e = new r(l + "")),
    (i = e.e + (r.DP += 4));
  do (n = e), (e = s.times(n.plus(o.div(n))));
  while (n.c.slice(0, i).join("") !== e.c.slice(0, i).join(""));
  return yo(e, (r.DP -= 4) + e.e + 1, r.RM);
};
ge.times = ge.mul = function (o) {
  var t,
    n = this.constructor,
    r = new n(this),
    o = new n(o),
    l = r.c,
    i = o.c,
    s = l.length,
    u = i.length,
    a = r.e,
    c = o.e;
  if (((o.s = r.s == o.s ? 1 : -1), !l[0] || !i[0]))
    return (o.c = [(o.e = 0)]), o;
  for (
    o.e = a + c,
      s < u && ((t = l), (l = i), (i = t), (c = s), (s = u), (u = c)),
      t = new Array((c = s + u));
    c--;

  )
    t[c] = 0;
  for (a = u; a--; ) {
    for (u = 0, c = s + a; c > a; )
      (u = t[c] + i[a] * l[c - a - 1] + u),
        (t[c--] = u % 10),
        (u = (u / 10) | 0);
    t[c] = u;
  }
  for (u ? ++o.e : t.shift(), a = t.length; !t[--a]; ) t.pop();
  return (o.c = t), o;
};
ge.toExponential = function (e, t) {
  var n = this,
    r = n.c[0];
  if (e !== fr) {
    if (e !== ~~e || e < 0 || e > Bo) throw Error(ia);
    for (n = yo(new n.constructor(n), ++e, t); n.c.length < e; ) n.c.push(0);
  }
  return Xl(n, !0, !!r);
};
ge.toFixed = function (e, t) {
  var n = this,
    r = n.c[0];
  if (e !== fr) {
    if (e !== ~~e || e < 0 || e > Bo) throw Error(ia);
    for (
      n = yo(new n.constructor(n), e + n.e + 1, t), e = e + n.e + 1;
      n.c.length < e;

    )
      n.c.push(0);
  }
  return Xl(n, !1, !!r);
};
ge.toJSON = ge.toString = function () {
  var e = this,
    t = e.constructor;
  return Xl(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
};
ge.toNumber = function () {
  var e = Number(Xl(this, !0, !0));
  if (this.constructor.strict === !0 && !this.eq(e.toString()))
    throw Error(cs + "Imprecise conversion");
  return e;
};
ge.toPrecision = function (e, t) {
  var n = this,
    r = n.constructor,
    o = n.c[0];
  if (e !== fr) {
    if (e !== ~~e || e < 1 || e > Bo) throw Error(qo + "precision");
    for (n = yo(new r(n), e, t); n.c.length < e; ) n.c.push(0);
  }
  return Xl(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!o);
};
ge.valueOf = function () {
  var e = this,
    t = e.constructor;
  if (t.strict === !0) throw Error(cs + "valueOf disallowed");
  return Xl(e, e.e <= t.NE || e.e >= t.PE, !0);
};
var Qn = xp();
new Qn(0);
new Qn(1);
new Qn(-1);
new Qn("79228162514264337593543950335");
new Qn("-79228162514264337593543950335");
function Nc(e) {
  return e.toString();
}
class Fw {
  constructor(t, n, r, o) {
    (this.declaringType = t),
      (this.tag = n),
      (this.name = r),
      (this.fields = o);
  }
}
let Yo = class {
  constructor(t, n, r, o, l, i, s) {
    (this.fullname = t),
      (this.generics = n),
      (this.construct = r),
      (this.parent = o),
      (this.fields = l),
      (this.cases = i),
      (this.enumCases = s);
  }
  toString() {
    return et(this);
  }
  GetHashCode() {
    return Fp(this);
  }
  Equals(t) {
    return _u(this, t);
  }
};
function Qt(e) {
  return e.generics != null ? e.generics : [];
}
function Fp(e) {
  const t = Qf(e.fullname),
    n = Qt(e).map(Fp);
  return Yl([t, ...n]);
}
function _u(e, t) {
  return e.fullname === ""
    ? t.fullname === "" &&
        Tc(Cu(e), Cu(t), ([n, r], [o, l]) => n === o && _u(r, l))
    : e.fullname === t.fullname && Tc(Qt(e), Qt(t), _u);
}
function Hr(e, t, n, r) {
  return new Yo(e, t, n, r);
}
function Zf(e, t, n, r) {
  return new Yo(e, t, n, void 0, r);
}
function Pp(e, t, n, r) {
  const o = new Yo(e, t, n, void 0, void 0, () => {
    const l = n.prototype.cases();
    return r().map((i, s) => new Fw(o, s, l[s], i));
  });
  return o;
}
const kr = new Yo("System.Int64");
function rt(e) {
  if (Array.isArray(e)) return e[0];
  if (e instanceof Yo) {
    const t = sa(e);
    if (t != null) return rt(t) + "[]";
    {
      const n = e.fullname.lastIndexOf(".");
      return n === -1 ? e.fullname : e.fullname.substr(n + 1);
    }
  } else return e.name;
}
function et(e) {
  const t = sa(e);
  return t != null
    ? et(t) + "[]"
    : e.generics == null || e.generics.length === 0
    ? e.fullname
    : e.fullname + "[" + e.generics.map((n) => et(n)).join(",") + "]";
}
function Pw(e) {
  return sa(e) != null;
}
function sa(e) {
  var t;
  return e.fullname === "[]" &&
    ((t = e.generics) === null || t === void 0 ? void 0 : t.length) === 1
    ? e.generics[0]
    : void 0;
}
function Ow(e) {
  return e.enumCases != null && e.enumCases.length > 0;
}
function Rw(e) {
  var t;
  return (t = e.generics) === null || t === void 0 ? void 0 : t[0];
}
function Op(e) {
  if (e.cases != null) return e.cases();
  throw new Error(`${e.fullname} is not an F# union type`);
}
function Cu(e) {
  if (e.fields != null) return e.fields();
  throw new Error(`${e.fullname} is not an F# record type`);
}
function Aw(e) {
  if (Rp(e) && e.generics != null) return e.generics;
  throw new Error(`${e.fullname} is not a tuple type`);
}
function Dw(e) {
  if (qf(e) && e.generics != null) {
    const t = e.generics;
    return [t[0], t[1]];
  } else throw new Error(`${e.fullname} is not an F# function type`);
}
function $w(e) {
  return e instanceof Yo ? e.cases != null : e instanceof xn;
}
function Lw(e) {
  return e instanceof Yo ? e.fields != null : e instanceof Jt;
}
function Rp(e) {
  return e.fullname.startsWith("System.Tuple");
}
function qf(e) {
  return e.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
function zw(e, t) {
  const r = Op(t)[e.tag];
  if (r == null) throw new Error(`Cannot find case ${e.name} in union type`);
  return [r, e.fields];
}
function Bw(e) {
  return e.fields == null ? [] : e.fields;
}
function Uw(e, t) {
  return e[t[0]];
}
function nr(e, t) {
  const n = (e.fields || []).length;
  if (t.length !== n)
    throw new Error(`Expected an array of length ${n} but got ${t.length}`);
  return e.declaringType.construct != null
    ? new e.declaringType.construct(e.tag, t)
    : {};
}
function Vw(e, t) {
  const n = Cu(e);
  if (n.length !== t.length)
    throw new Error(
      `Expected an array of length ${n.length} but got ${t.length}`
    );
  return e.construct != null
    ? new e.construct(...t)
    : n.reduce((r, [o, l], i) => ((r[o] = t[i]), r), {});
}
function Yf(e) {
  const t = e < 0;
  e = Math.abs(e);
  const n = ~~(e / 36e5),
    r = (e % 36e5) / 6e4;
  return (t ? "-" : "+") + lr(n, 2) + ":" + lr(r, 2);
}
function Eu(e, t) {
  const n = e.toISOString();
  return t === "first"
    ? n.substring(0, n.indexOf("T"))
    : n.substring(n.indexOf("T") + 1, n.length - 1);
}
function Gw(e, t) {
  if (t) return e.toISOString();
  {
    const n = e.kind == null ? !0 : e.kind === 2;
    return (
      lr(e.getFullYear(), 4) +
      "-" +
      lr(e.getMonth() + 1, 2) +
      "-" +
      lr(e.getDate(), 2) +
      "T" +
      lr(e.getHours(), 2) +
      ":" +
      lr(e.getMinutes(), 2) +
      ":" +
      lr(e.getSeconds(), 2) +
      "." +
      lr(e.getMilliseconds(), 3) +
      (n ? Yf(e.getTimezoneOffset() * -6e4) : "")
    );
  }
}
function jw(e, t) {
  const n = e.toISOString();
  return n.substring(0, n.length - 1) + Yf(t);
}
function Ap(e, t, n) {
  return t.replace(/(\w)\1*/g, (r) => {
    let o = Number.NaN;
    switch (r.substring(0, 1)) {
      case "y":
        const l = n ? e.getUTCFullYear() : e.getFullYear();
        o = r.length < 4 ? l % 100 : l;
        break;
      case "M":
        o = (n ? e.getUTCMonth() : e.getMonth()) + 1;
        break;
      case "d":
        o = n ? e.getUTCDate() : e.getDate();
        break;
      case "H":
        o = n ? e.getUTCHours() : e.getHours();
        break;
      case "h":
        const i = n ? e.getUTCHours() : e.getHours();
        o = i > 12 ? i % 12 : i;
        break;
      case "m":
        o = n ? e.getUTCMinutes() : e.getMinutes();
        break;
      case "s":
        o = n ? e.getUTCSeconds() : e.getSeconds();
        break;
      case "f":
        o = n ? e.getUTCMilliseconds() : e.getMilliseconds();
        break;
    }
    return Number.isNaN(o) ? r : lr(o, r.length);
  });
}
function Hw(e, t) {
  var n, r, o;
  const l = new Date(
    e.getTime() + ((n = e.offset) !== null && n !== void 0 ? n : 0)
  );
  if (typeof t != "string")
    return (
      l
        .toISOString()
        .replace(/\.\d+/, "")
        .replace(/[A-Z]|\.\d+/g, " ") +
      Yf((r = e.offset) !== null && r !== void 0 ? r : 0)
    );
  if (t.length === 1)
    switch (t) {
      case "D":
      case "d":
        return Eu(l, "first");
      case "T":
      case "t":
        return Eu(l, "second");
      case "O":
      case "o":
        return jw(l, (o = e.offset) !== null && o !== void 0 ? o : 0);
      default:
        throw new Error("Unrecognized Date print format");
    }
  else return Ap(l, t, !0);
}
function Ww(e, t) {
  const n = e.kind === 1;
  if (typeof t != "string") return n ? e.toUTCString() : e.toLocaleString();
  if (t.length === 1)
    switch (t) {
      case "D":
      case "d":
        return n ? Eu(e, "first") : e.toLocaleDateString();
      case "T":
      case "t":
        return n ? Eu(e, "second") : e.toLocaleTimeString();
      case "O":
      case "o":
        return Gw(e, n);
      default:
        throw new Error("Unrecognized Date print format");
    }
  else return Ap(e, t, n);
}
function $l(e, t, n) {
  return e.offset != null ? Hw(e, t) : Ww(e, t);
}
function Xf(e, t) {
  const n = new Date(e);
  return (n.kind = (t ?? 0) | 0), n;
}
function Qw(e) {
  return qv(e.getTime(), Ec(e));
}
function Dp(e) {
  function t() {
    throw new Error(`The string is not a valid Date: ${e}`);
  }
  (e == null || e.trim() === "") && t(),
    e.length === 10 && e[4] === "-" && e[7] === "-" && (e += "T00:00:00");
  let n = new Date(e),
    r = null;
  if (isNaN(n.getTime())) {
    const o =
      /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*(Z|[+-]([01]?\d):?([0-5]?\d)?)?\s*$/.exec(
        e
      );
    if (o != null) {
      let l,
        i = 0;
      if (o[2] != null) {
        const s = o[2].split(":");
        (i =
          parseInt(s[0], 10) * 3600 +
          parseInt(s[1] || "0", 10) * 60 +
          parseFloat(s[2] || "0")),
          o[3] != null && o[3].toUpperCase() === "PM" && (i += 720);
      }
      if (o[4] != null) {
        if (o[1] != null) l = new Date(o[1] + " UTC");
        else {
          const s = new Date();
          l = new Date(
            s.getUTCFullYear() +
              "/" +
              (s.getUTCMonth() + 1) +
              "/" +
              s.getUTCDate()
          );
        }
        if (o[4] === "Z") r = "Z";
        else {
          let s = parseInt(o[5], 10) * 60 + parseInt(o[6] || "0", 10);
          o[4][0] === "-" && (s *= -1), (r = s), (i -= s * 60);
        }
      } else if (o[1] != null) l = new Date(o[1]);
      else {
        const s = new Date();
        l = new Date(
          s.getFullYear() + "/" + (s.getMonth() + 1) + "/" + s.getDate()
        );
      }
      (n = new Date(l.getTime() + i * 1e3)),
        (n = new Date(
          n.getTime() + (n.getTimezoneOffset() - l.getTimezoneOffset()) * 6e4
        ));
    } else t();
    isNaN(n.getTime()) && t();
  }
  return [n, r];
}
function Kw(e, t = !1) {
  const [n, r] = Dp(e),
    o = r != null ? (t && r === "Z" ? 1 : 2) : 0;
  return Xf(n.getTime(), o);
}
function $p() {
  return Xf(Date.now(), 2);
}
function Jw(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
const fi = /(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,
  Zw = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
function Lp(e, t) {
  return xv(e, t) < 0;
}
function H(e) {
  return { input: e, cont: Yw(e) };
}
function zp(e, t) {
  return typeof t == "string" ? e(t) : t.cont(e);
}
function ke(e) {
  return zp((t) => t, e);
}
function Fe(e) {
  return zp((t) => {
    throw new Error(t);
  }, e);
}
function qw(e, t, n, r, o) {
  let l = "";
  if (((t = t || ""), (o = o || ""), Sp(e)))
    switch (
      (o.toLowerCase() !== "x" &&
        (Lp(e, 0)
          ? ((e = _c(e, -1)), (l = "-"))
          : t.indexOf(" ") >= 0
          ? (l = " ")
          : t.indexOf("+") >= 0 && (l = "+")),
      (r = r == null ? null : parseInt(r, 10)),
      o)
    ) {
      case "f":
      case "F":
        (r = r ?? 6), (e = Qs(e, r));
        break;
      case "g":
      case "G":
        e = r != null ? pu(e, r) : pu(e);
        break;
      case "e":
      case "E":
        e = r != null ? mu(e, r) : mu(e);
        break;
      case "x":
        e = gu(e);
        break;
      case "X":
        e = gu(e).toUpperCase();
        break;
      default:
        e = String(e);
        break;
    }
  else e instanceof Date ? (e = $l(e)) : (e = dn(e));
  if (((n = typeof n == "number" ? n : parseInt(n, 10)), isNaN(n))) e = l + e;
  else {
    const i = t.indexOf("0") >= 0,
      s = t.indexOf("-") >= 0,
      u = s || !i ? " " : "0";
    u === "0"
      ? ((e = Gi(e, n - l.length, u, s)), (e = l + e))
      : (e = Gi(l + e, n, u, s));
  }
  return e;
}
function Bp(e, t, n, r = "", o = -1) {
  return (...l) => {
    let i = r;
    const s = t.slice(),
      u = n.slice();
    for (const a of l) {
      const [, , c, d, f, v] = u[0];
      let w = d;
      if (o >= 0) (w = o), (o = -1);
      else if (w === "*") {
        if (a < 0) throw new Error("Non-negative number required");
        o = a;
        continue;
      }
      (i += s[0]), (i += qw(a, c, w, f, v)), s.splice(0, 1), u.splice(0, 1);
    }
    return u.length === 0 ? ((i += s[0]), e(i)) : Bp(e, s, u, i, o);
  };
}
function Yw(e) {
  return (t) => {
    fi.lastIndex = 0;
    const n = [],
      r = [];
    let o = 0,
      l = fi.exec(e);
    for (; l; ) {
      const i = l.index + (l[1] || "").length;
      n.push(e.substring(o, i).replace(/%%/g, "%")),
        r.push(l),
        (o = fi.lastIndex),
        (fi.lastIndex -= 1),
        (l = fi.exec(e));
    }
    return n.length === 0
      ? t(e.replace(/%%/g, "%"))
      : (n.push(e.substring(o).replace(/%%/g, "%")), Bp(t, n, r));
  };
}
function Up(e, ...t) {
  let n;
  return (
    typeof e == "object" ? ((n = String(t[0])), t.shift()) : (n = e),
    n.replace(Zw, (r, o, l, i, s, u) => {
      if (o < 0 || o >= t.length)
        throw new Error(
          "Index must be greater or equal to zero and less than the arguments' length."
        );
      let a = t[o];
      if (Sp(a))
        switch (((s = s == null ? null : parseInt(s, 10)), i)) {
          case "f":
          case "F":
            (s = s ?? 2), (a = Qs(a, s));
            break;
          case "g":
          case "G":
            a = s != null ? pu(a, s) : pu(a);
            break;
          case "e":
          case "E":
            a = s != null ? mu(a, s) : mu(a);
            break;
          case "p":
          case "P":
            (s = s ?? 2), (a = Qs(_c(a, 100), s) + " %");
            break;
          case "d":
          case "D":
            a = s != null ? $a(String(a), s, "0") : String(a);
            break;
          case "x":
          case "X":
            (a = s != null ? $a(gu(a), s, "0") : gu(a)),
              i === "X" && (a = a.toUpperCase());
            break;
          default:
            if (u) {
              let c = "";
              (a = u.replace(/([0#,]+)(\.[0#]+)?/, (d, f, v) => {
                Lp(a, 0) && ((a = _c(a, -1)), (c = "-")),
                  (v = v == null ? "" : v.substring(1)),
                  (a = Qs(a, Math.max(v.length, 0)));
                let [w, _] = a.split(".");
                _ || (_ = "");
                const x = f.replace(/,/g, "").replace(/^#+/, "").length;
                w = $a(w, x, "0");
                const m = v.replace(/#+$/, "").length;
                if (
                  (m > _.length
                    ? (_ = e2(_, m, "0"))
                    : m < _.length &&
                      (_ =
                        _.substring(0, m) + _.substring(m).replace(/0+$/, "")),
                  f.indexOf(",") > 0)
                ) {
                  const h = w.length % 3,
                    y = Math.floor(w.length / 3);
                  let S = h > 0 ? w.substr(0, h) + (y > 0 ? "," : "") : "";
                  for (let E = 0; E < y; E++)
                    S += w.substr(h + E * 3, 3) + (E < y - 1 ? "," : "");
                  w = S;
                }
                return _.length > 0 ? w + "." + _ : w;
              })),
                (a = c + a);
            }
        }
      else a instanceof Date ? (a = $l(a, u || i)) : (a = dn(a));
      return (
        (l = parseInt((l || " ").substring(1), 10)),
        isNaN(l) || (a = Gi(String(a), Math.abs(l), " ", l < 0)),
        a
      );
    })
  );
}
function Mc(e, t) {
  const n = e.lastIndexOf(t);
  return n >= 0 && n === e.length - t.length;
}
function Vp(e) {
  return typeof e != "string" || e.length === 0;
}
function G(e, t) {
  return Array.isArray(t) ? t.join(e) : Array.from(t).join(e);
}
function Xw(e) {
  throw new Error(
    "The environment doesn't support '" + e + "', please use a polyfill."
  );
}
function bw(e) {
  const t = typeof atob == "function" ? atob(e) : Xw("atob"),
    n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
}
function Gi(e, t, n, r) {
  (n = n || " "), (t = t - e.length);
  for (let o = 0; o < t; o++) e = r ? e + n : n + e;
  return e;
}
function $a(e, t, n) {
  return Gi(e, t, n);
}
function e2(e, t, n) {
  return Gi(e, t, n, !0);
}
function t2(e, ...t) {
  if (t.length === 0) return e.trim();
  const n = "[" + Jw(t.join("")) + "]+";
  return e.replace(new RegExp("^" + n), "").replace(new RegExp(n + "$"), "");
}
function n2(e, t, n) {
  if (t + (n || 0) > e.length)
    throw new Error("Invalid startIndex and/or length");
  return n != null ? e.substr(t, n) : e.substr(t);
}
const bf = "Collection was empty.";
function Zt(e) {
  return e == null || e instanceof Dl ? new Dl(e) : e;
}
function r2(e) {
  return e == null ? [] : [Re(e)];
}
function ed(e, t) {
  return e != null ? Re(e) : t;
}
function Ll(e, t) {
  return typeof e == "function" ? new e(t) : new Array(t);
}
function o2() {
  throw new Error(
    "An index satisfying the predicate was not found in the collection."
  );
}
function l2() {
  throw new Error("Arrays had different lengths");
}
function td(e, t, n, r) {
  const o = t | 0;
  return e.fill(r, o, o + n);
}
function Ic(e, t, n) {
  const r = t.length | 0,
    o = Ll(n, r);
  for (let l = 0; l <= r - 1; l++) o[l] = e(l, t[l]);
  return o;
}
function Ge(e, t, n) {
  const r = t.length | 0,
    o = Ll(n, r);
  for (let l = 0; l <= r - 1; l++) o[l] = e(t[l]);
  return o;
}
function i2(e, t) {
  const n = Array.isArray(e) ? e : Array.from(e),
    r = n.length | 0;
  if (r === 0) return Ll(t, 0);
  if (r === 1) return n[0];
  {
    let o = 0,
      l = 0;
    for (let s = 0; s <= n.length - 1; s++) {
      const u = n[s];
      l = (l + u.length) | 0;
    }
    const i = Ll(t, l);
    for (let s = 0; s <= n.length - 1; s++) {
      const u = n[s];
      for (let a = 0; a <= u.length - 1; a++) (i[o] = u[a]), (o = (o + 1) | 0);
    }
    return i;
  }
}
function s2(e, t) {
  const n = Ll(t, 1);
  return (n[0] = e), n;
}
function bl(e, t, n) {
  if (e < 0)
    throw new Error("The input must be non-negative\\nParameter name: count");
  const r = Ll(n, e);
  for (let o = 0; o <= e - 1; o++) r[o] = t(o);
  return r;
}
function u2(e) {
  return e.slice();
}
function a2(e, t) {
  const n = t.find(e);
  return n == null ? o2() : Re(n);
}
function ll(e, t) {
  return t.find(e);
}
function c2(e, t, n) {
  return n.reduce(e, t);
}
function La(e, t) {
  e.length !== t.length && l2();
  const n = new Array(e.length);
  for (let r = 0; r <= e.length - 1; r++) n[r] = [e[r], t[r]];
  return n;
}
function f2(e, t, n) {
  if (t == null) return n == null;
  if (n == null) return !1;
  {
    let r = 0,
      o = !0;
    const l = t.length | 0,
      i = n.length | 0;
    if (l > i) return !1;
    if (l < i) return !1;
    for (; r < l && o; ) (o = e(t[r], n[r])), (r = (r + 1) | 0);
    return o;
  }
}
function d2(e, t, n) {
  return t.reduceRight((r, o) => e(o, r), n);
}
class Kt extends Jt {
  constructor(t, n) {
    super(), (this.head = t), (this.tail = n);
  }
  toString() {
    return "[" + G("; ", this) + "]";
  }
  Equals(t) {
    const n = this;
    return n === t
      ? !0
      : ((o, l) => {
          e: for (;;) {
            const i = o,
              s = l,
              u = i.tail,
              a = s.tail;
            if (u != null)
              if (a != null) {
                const c = u,
                  d = a;
                if (Ee(i.head, s.head)) {
                  (o = c), (l = d);
                  continue e;
                } else return !1;
              } else return !1;
            else return a == null;
          }
        })(n, t);
  }
  GetHashCode() {
    return (
      ((r, o, l) => {
        e: for (;;) {
          const i = r,
            s = o,
            u = l,
            a = u.tail;
          if (a != null) {
            const c = a;
            if (i > 18) return s | 0;
            (r = i + 1), (o = (s << 1) + Et(u.head) + 631 * i), (l = c);
            continue e;
          } else return s | 0;
        }
      })(0, 0, this) | 0
    );
  }
  toJSON() {
    const t = this;
    return Array.from(t);
  }
  CompareTo(t) {
    return (
      ((o, l) => {
        e: for (;;) {
          const i = o,
            s = l,
            u = i.tail,
            a = s.tail;
          if (u != null)
            if (a != null) {
              const c = u,
                d = a,
                f = re(i.head, s.head) | 0;
              if (f === 0) {
                (o = c), (l = d);
                continue e;
              } else return f | 0;
            } else return 1;
          else return a != null ? -1 : 0;
        }
      })(this, t) | 0
    );
  }
  GetEnumerator() {
    return p2(this);
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return Se(this);
  }
}
class h2 {
  constructor(t) {
    (this.xs = t), (this.it = this.xs), (this.current = Wt());
  }
  "System.Collections.Generic.IEnumerator`1.get_Current"() {
    return this.current;
  }
  "System.Collections.IEnumerator.get_Current"() {
    return this.current;
  }
  "System.Collections.IEnumerator.MoveNext"() {
    const t = this,
      n = t.it.tail;
    if (n != null) {
      const r = n;
      return (t.current = t.it.head), (t.it = r), !0;
    } else return !1;
  }
  "System.Collections.IEnumerator.Reset"() {
    const t = this;
    (t.it = t.xs), (t.current = Wt());
  }
  Dispose() {}
}
function p2(e) {
  return new h2(e);
}
function ft() {
  return new Kt(Wt(), void 0);
}
function fs(e, t) {
  return new Kt(e, t);
}
function Uo(e) {
  return e.tail == null;
}
function Gp(e) {
  return (
    ((n, r) => {
      e: for (;;) {
        const o = n,
          i = r.tail;
        if (i != null) {
          (n = o + 1), (r = i);
          continue e;
        } else return o | 0;
      }
    })(0, e) | 0
  );
}
function ji(e) {
  if (e.tail != null) return e.head;
  throw new Error(bf + "\\nParameter name: list");
}
function cn(e) {
  const t = e.tail;
  if (t != null) return t;
  throw new Error(bf + "\\nParameter name: list");
}
function qe() {
  return ft();
}
function st(e, t) {
  return fs(e, t);
}
function ie(e) {
  return fs(e, ft());
}
function U(e) {
  return Uo(e);
}
function Js(e) {
  return Gp(e);
}
function P(e) {
  return ji(e);
}
function k(e) {
  return cn(e);
}
function Br(e) {
  const t = Gp(e) | 0,
    n = td(new Array(t), 0, t, null);
  return (
    ((o, l) => {
      e: for (;;) {
        const i = o,
          s = l;
        if (!Uo(s)) {
          (n[i] = ji(s)), (o = i + 1), (l = cn(s));
          continue e;
        }
        break;
      }
    })(0, e),
    n
  );
}
function Fn(e, t, n) {
  let r = t,
    o = n;
  for (; !Uo(o); ) (r = e(r, P(o))), (o = cn(o));
  return r;
}
function m2(e) {
  return Fn((t, n) => fs(n, t), ft(), e);
}
function g2(e, t, n) {
  return d2(e, Br(t), n);
}
function ku(e, t) {
  Fn(
    (n, r) => {
      e(r);
    },
    void 0,
    t
  );
}
function Le(e, t) {
  let n = t;
  for (let r = e.length - 1; r >= 0; r--) n = fs(e[r], n);
  return n;
}
function N(e) {
  return Le(e, ft());
}
function y2(e) {
  let t, n;
  if (Ir(e)) return N(e);
  if (e instanceof Kt) return e;
  {
    const r = ft();
    let o = r;
    const l = Se(e);
    try {
      for (; l["System.Collections.IEnumerator.MoveNext"](); ) {
        const u = l["System.Collections.Generic.IEnumerator`1.get_Current"]();
        o = ((t = o), (n = new Kt(u, void 0)), (t.tail = n), n);
      }
    } finally {
      ce(l);
    }
    const i = o,
      s = ft();
    return (i.tail = s), cn(r);
  }
}
function jp(e, t) {
  return Fn((n, r) => fs(r, n), t, m2(e));
}
function ei(e, t) {
  let n, r;
  const o = ft();
  let l = o,
    i = t;
  for (; !Uo(i); ) {
    let a = e(ji(i));
    for (; !Uo(a); )
      (l = ((n = l), (r = new Kt(ji(a), void 0)), (n.tail = r), r)),
        (a = cn(a));
    i = cn(i);
  }
  const s = l,
    u = ft();
  return (s.tail = u), cn(o);
}
function Ct(e, t) {
  const n = ft(),
    r = Fn(
      (l, i) => {
        const s = new Kt(e(i), void 0);
        return (l.tail = s), s;
      },
      n,
      t
    ),
    o = ft();
  return (r.tail = o), cn(n);
}
function v2(e, t) {
  return ((r) => {
    e: for (;;) {
      const o = r;
      if (Uo(o)) return;
      {
        const l = e(ji(o));
        if (l == null) {
          r = cn(o);
          continue e;
        } else return l;
      }
    }
  })(t);
}
function xc(e, t) {
  return v2((n) => (e(n) ? Zt(n) : void 0), t);
}
function ti(e, t) {
  const n = ft(),
    r = Fn(
      (l, i) => {
        if (e(i)) {
          const s = new Kt(i, void 0);
          return (l.tail = s), s;
        } else return l;
      },
      n,
      t
    ),
    o = ft();
  return (r.tail = o), cn(n);
}
function w2(e, t) {
  const n = ft(),
    r = ft(),
    o = n,
    l = Fn(
      (u, a) => {
        let c, d;
        const f = u[0],
          v = u[1];
        return e(a)
          ? [((c = new Kt(a, void 0)), (f.tail = c), c), v]
          : [f, ((d = new Kt(a, void 0)), (v.tail = d), d)];
      },
      [o, r],
      t
    ),
    i = ft();
  l[0].tail = i;
  const s = ft();
  return (l[1].tail = s), [cn(o), cn(r)];
}
function Hp(e, t) {
  const n = ft(),
    r = Fn(
      (l, i) => {
        const s = e(i);
        if (s == null) return l;
        {
          const u = new Kt(Re(s), void 0);
          return (l.tail = u), u;
        }
      },
      n,
      t
    ),
    o = ft();
  return (r.tail = o), cn(n);
}
function S2(e, t) {
  if (Uo(t)) throw new Error(bf);
  return Fn(e, P(t), k(t));
}
function _2(e, t, n) {
  return Fn((r, o) => n.Add(r, e(o)), n.GetZero(), t);
}
function C2(e) {
  throw new Error(e);
}
const E2 = "Enumeration already finished.",
  k2 = "Enumeration has not started. Call MoveNext.",
  Wp = "The input sequence has an insufficient number of elements.",
  T2 = "Reset is not supported on this enumerator.";
function N2() {
  throw new Error(T2);
}
function nd() {
  throw new Error(k2);
}
function Fc() {
  throw new Error(E2);
}
class M2 {
  constructor(t) {
    this.f = t;
  }
  toString() {
    const t = this,
      n = 4;
    let r = 0,
      o = "seq [";
    const l = Se(t);
    try {
      for (; r < n && l["System.Collections.IEnumerator.MoveNext"](); )
        r > 0 && (o = o + "; "),
          (o =
            o +
            dn(l["System.Collections.Generic.IEnumerator`1.get_Current"]())),
          (r = (r + 1) | 0);
      return r === n && (o = o + "; ..."), o + "]";
    } finally {
      ce(l);
    }
  }
  GetEnumerator() {
    return this.f();
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return this.f();
  }
}
function I2(e) {
  return new M2(e);
}
class x2 {
  constructor(t, n, r) {
    (this.current = t), (this.next = n), (this.dispose = r);
  }
  "System.Collections.Generic.IEnumerator`1.get_Current"() {
    return this.current();
  }
  "System.Collections.IEnumerator.get_Current"() {
    return this.current();
  }
  "System.Collections.IEnumerator.MoveNext"() {
    return this.next();
  }
  "System.Collections.IEnumerator.Reset"() {
    N2();
  }
  Dispose() {
    this.dispose();
  }
}
function ua(e, t, n) {
  return new x2(e, t, n);
}
function F2(e) {
  let t,
    n,
    r = !1,
    o = !1,
    l;
  const i = () => {
    if (((o = !0), n != null)) {
      const s = n;
      try {
        ce(s);
      } finally {
        n = void 0;
      }
    }
    if (t != null) {
      const s = t;
      try {
        ce(s);
      } finally {
        t = void 0;
      }
    }
  };
  return ua(
    () => (r ? o && Fc() : nd(), l != null ? Re(l) : Fc()),
    () => {
      let s;
      if ((r || (r = !0), o)) return !1;
      {
        let u;
        for (; u == null; ) {
          const a = t,
            c = n;
          if (a != null)
            if (c != null) {
              const d = c;
              if (d["System.Collections.IEnumerator.MoveNext"]())
                (l = Zt(
                  d["System.Collections.Generic.IEnumerator`1.get_Current"]()
                )),
                  (u = !0);
              else
                try {
                  ce(d);
                } finally {
                  n = void 0;
                }
            } else {
              const d = a;
              d["System.Collections.IEnumerator.MoveNext"]()
                ? (n =
                    ((s =
                      d[
                        "System.Collections.Generic.IEnumerator`1.get_Current"
                      ]()),
                    Se(s)))
                : (i(), (u = !1));
            }
          else t = Se(e);
        }
        return Re(u);
      }
    },
    () => {
      o || i();
    }
  );
}
function P2(e, t) {
  return ua(
    () => t["System.Collections.Generic.IEnumerator`1.get_Current"](),
    () => t["System.Collections.IEnumerator.MoveNext"](),
    () => {
      try {
        ce(t);
      } finally {
        e();
      }
    }
  );
}
function Qp(e, t, n) {
  let r = !1,
    o,
    l = Zt(e());
  const i = () => {
      if (l != null) {
        const u = Re(l);
        try {
          n(u);
        } finally {
          l = void 0;
        }
      }
    },
    s = () => {
      try {
        i();
      } finally {
        o = void 0;
      }
    };
  return ua(
    () => (r || nd(), o != null ? Re(o) : Fc()),
    () => {
      if ((r || (r = !0), l != null)) {
        const u = Re(l);
        let a;
        try {
          a = t(u);
        } catch (c) {
          throw (s(), c);
        }
        return a != null ? ((o = a), !0) : (s(), !1);
      } else return !1;
    },
    i
  );
}
function O2(e, t) {
  let n,
    r = t;
  return ua(
    () => {
      if (n != null) {
        const o = n[0];
        return n[1], o;
      } else return nd();
    },
    () => ((n = e(r)), n != null ? (n[0], (r = n[1]), !0) : !1),
    () => {}
  );
}
function R2(e, t) {
  t == null && C2(e);
}
function ni(e) {
  return I2(e);
}
function uo(e) {
  return R2("source", e), Se(e);
}
function b(e) {
  return ni(() => Se(e()));
}
function aa(e) {
  return ni(() => F2(e));
}
function A2(e, t) {
  return ni(() => O2(e, t));
}
function Lt() {
  return b(() => new Array(0));
}
function ve(e) {
  return b(() => s2(e, null));
}
function zl(e) {
  return e instanceof Kt ? Br(e) : Array.from(e);
}
function Nn(e) {
  return Ir(e) ? N(e) : e instanceof Kt ? e : y2(e);
}
function D2(e, t, n) {
  return ni(() => Qp(e, t, n));
}
function $2(e, t, n) {
  return ni(() => {
    let r = -1;
    return Qp(e, (o) => ((r = (r + 1) | 0), t(r, o)), n);
  });
}
function dt(e, t) {
  return aa([e, t]);
}
function L2(e, t, n) {
  const r = uo(t);
  try {
    const o = uo(n);
    try {
      let l = 0,
        i = r["System.Collections.IEnumerator.MoveNext"](),
        s = o["System.Collections.IEnumerator.MoveNext"]();
      for (; l === 0 && i && s; )
        (l =
          e(
            r["System.Collections.Generic.IEnumerator`1.get_Current"](),
            o["System.Collections.Generic.IEnumerator`1.get_Current"]()
          ) | 0),
          l === 0 &&
            ((i = r["System.Collections.IEnumerator.MoveNext"]()),
            (s = o["System.Collections.IEnumerator.MoveNext"]()));
      return (l !== 0 ? l : i ? 1 : s ? -1 : 0) | 0;
    } finally {
      ce(o);
    }
  } finally {
    ce(r);
  }
}
function z2(e, t) {
  const n = uo(t);
  try {
    let r = !1;
    for (; !r && n["System.Collections.IEnumerator.MoveNext"](); )
      r = e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());
    return r;
  } finally {
    ce(n);
  }
}
function B2(e, t) {
  const n = uo(t);
  try {
    let r;
    for (; r == null && n["System.Collections.IEnumerator.MoveNext"](); ) {
      const o = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
      e(o) && (r = Zt(o));
    }
    return r;
  } finally {
    ce(n);
  }
}
function Kp(e, t, n) {
  const r = uo(n);
  try {
    let o = t;
    for (; r["System.Collections.IEnumerator.MoveNext"](); )
      o = e(o, r["System.Collections.Generic.IEnumerator`1.get_Current"]());
    return o;
  } finally {
    ce(r);
  }
}
function U2(e, t) {
  return !z2((n) => !e(n), t);
}
function ca(e, t) {
  Kp(
    (n, r) => {
      e(r);
    },
    void 0,
    t
  );
}
function Jp(e, t) {
  Kp((n, r) => (e(n, r), (n + 1) | 0), 0, t);
}
function Me(e, t) {
  return D2(
    () => uo(t),
    (n) =>
      n["System.Collections.IEnumerator.MoveNext"]()
        ? Zt(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]()))
        : void 0,
    (n) => {
      ce(n);
    }
  );
}
function V2(e, t) {
  return ni(() => {
    const n = uo(t);
    try {
      for (let r = 1; r <= e; r++)
        if (!n["System.Collections.IEnumerator.MoveNext"]())
          throw new Error(Wp + "\\nParameter name: source");
      return P2(() => {}, n);
    } catch (r) {
      throw (ce(n), r);
    }
  });
}
function G2(e, t) {
  return $2(
    () => uo(t),
    (n, r) => {
      if (n < e) {
        if (r["System.Collections.IEnumerator.MoveNext"]())
          return Zt(
            r["System.Collections.Generic.IEnumerator`1.get_Current"]()
          );
        throw new Error(Wp + "\\nParameter name: source");
      } else return;
    },
    (n) => {
      ce(n);
    }
  );
}
function Hi(e, t) {
  return b(() => aa(Me(e, t)));
}
function rd(e, t, n) {
  return e.has(t) ? ((n.contents = e.get(t)), !0) : !1;
}
function j2(e, t) {
  return t.has(e) ? !1 : (t.add(e), !0);
}
function mh(e, t, n) {
  if (e.has(t))
    throw new Error(
      "An item with the same key has already been added. Key: " + t
    );
  e.set(t, n);
}
function Vo(e, t) {
  if (e.has(t)) return e.get(t);
  throw new Error(`The given key '${t}' was not present in the dictionary.`);
}
class za {
  constructor(t, n) {
    const r = new so(Wt());
    (this.comparer = n),
      (r.contents = this),
      (this.hashMap = new Map([])),
      (this["init@9"] = 1);
    const o = Se(t);
    try {
      for (; o["System.Collections.IEnumerator.MoveNext"](); ) {
        const l = o["System.Collections.Generic.IEnumerator`1.get_Current"]();
        Ba(r.contents, l);
      }
    } finally {
      ce(o);
    }
  }
  get [Symbol.toStringTag]() {
    return "HashSet";
  }
  toJSON() {
    const t = this;
    return Array.from(t);
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return Se(this);
  }
  GetEnumerator() {
    return Se(aa(this.hashMap.values()));
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.Generic.ICollection`1.Add2B595"(t) {
    Ba(this, t);
  }
  "System.Collections.Generic.ICollection`1.Clear"() {
    gh(this);
  }
  "System.Collections.Generic.ICollection`1.Contains2B595"(t) {
    return vh(this, t);
  }
  "System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(t, n) {
    Jp((o, l) => {
      t[n + o] = l;
    }, this);
  }
  "System.Collections.Generic.ICollection`1.get_Count"() {
    return yh(this) | 0;
  }
  "System.Collections.Generic.ICollection`1.get_IsReadOnly"() {
    return !1;
  }
  "System.Collections.Generic.ICollection`1.Remove2B595"(t) {
    return wh(this, t);
  }
  get size() {
    return yh(this) | 0;
  }
  add(t) {
    const n = this;
    return Ba(n, t), n;
  }
  clear() {
    gh(this);
  }
  delete(t) {
    return wh(this, t);
  }
  has(t) {
    return vh(this, t);
  }
  keys() {
    return Me((n) => n, this);
  }
  values() {
    return Me((n) => n, this);
  }
  entries() {
    return Me((n) => [n, n], this);
  }
  forEach(t, n) {
    const r = this;
    ca((o) => {
      cr(2, t, [o])(o)(r);
    }, r);
  }
}
function od(e, t) {
  const n = e.comparer.GetHashCode(t) | 0;
  let r,
    o = Wt();
  return (
    (r = [
      rd(
        e.hashMap,
        n,
        new so(
          () => o,
          (l) => {
            o = l;
          }
        )
      ),
      o,
    ]),
    r[0] ? [!0, n, r[1].findIndex((l) => e.comparer.Equals(t, l))] : [!1, n, -1]
  );
}
function gh(e) {
  e.hashMap.clear();
}
function yh(e) {
  let t = 0,
    n = Se(e.hashMap.values());
  try {
    for (; n["System.Collections.IEnumerator.MoveNext"](); ) {
      const r = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
      t = (t + r.length) | 0;
    }
  } finally {
    ce(n);
  }
  return t | 0;
}
function Ba(e, t) {
  const n = od(e, t);
  return n[0]
    ? n[2] > -1
      ? !1
      : (Vo(e.hashMap, n[1]).push(t), !0)
    : (e.hashMap.set(n[1], [t]), !0);
}
function vh(e, t) {
  const n = od(e, t);
  let r;
  switch ((n[0] && n[2] > -1 ? (r = 0) : (r = 1), r)) {
    case 0:
      return !0;
    case 1:
      return !1;
  }
}
function wh(e, t) {
  const n = od(e, t);
  let r;
  switch ((n[0] && n[2] > -1 ? (r = 0) : (r = 1), r)) {
    case 0:
      return Vo(e.hashMap, n[1]).splice(n[2], 1), !0;
    case 1:
      return !1;
  }
}
class Zp {
  constructor(t) {
    this.k = t;
  }
}
function nn(e) {
  return new Zp(e);
}
function $(e) {
  return e.k;
}
class oe extends Zp {
  constructor(t, n, r, o) {
    super(t), (this.left = n), (this.right = r), (this.h = o | 0);
  }
}
function rn(e, t, n, r) {
  return new oe(e, t, n, r);
}
function ne(e) {
  return e.left;
}
function te(e) {
  return e.right;
}
function al(e) {
  return e.h;
}
function qp(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (n != null) {
      const o = n;
      if (o instanceof oe) {
        (e = ne(o)), (t = qp(te(o), r + 1));
        continue e;
      } else return (r + 1) | 0;
    } else return r | 0;
  }
}
function H2(e) {
  return qp(e, 0);
}
function tn(e, t, n) {
  let r;
  const o = e;
  if (o != null) {
    const u = o;
    r = u instanceof oe ? al(u) : 1;
  } else r = 0;
  let l;
  const i = n;
  if (i != null) {
    const u = i;
    l = u instanceof oe ? al(u) : 1;
  } else l = 0;
  const s = (r < l ? l : r) | 0;
  return s === 0 ? nn(t) : rn(t, e, n, s + 1);
}
function Tu(e, t, n) {
  let r, o, l, i, s;
  const u = e;
  if (u != null) {
    const d = u;
    s = d instanceof oe ? al(d) : 1;
  } else s = 0;
  let a;
  const c = n;
  if (c != null) {
    const d = c;
    a = d instanceof oe ? al(d) : 1;
  } else a = 0;
  if (a > s + 2) {
    const d = Re(n);
    if (d instanceof oe)
      if (
        ((r = ne(d)),
        (r != null ? ((o = r), o instanceof oe ? al(o) : 1) : 0) > s + 1)
      ) {
        const f = Re(ne(d));
        if (f instanceof oe)
          return tn(tn(e, t, ne(f)), $(f), tn(te(f), $(d), te(d)));
        throw new Error("internal error: Set.rebalance");
      } else return tn(tn(e, t, ne(d)), $(d), te(d));
    else throw new Error("internal error: Set.rebalance");
  } else if (s > a + 2) {
    const d = Re(e);
    if (d instanceof oe)
      if (
        ((l = te(d)),
        (l != null ? ((i = l), i instanceof oe ? al(i) : 1) : 0) > a + 1)
      ) {
        const f = Re(te(d));
        if (f instanceof oe)
          return tn(tn(ne(d), $(d), ne(f)), $(f), tn(te(f), t, n));
        throw new Error("internal error: Set.rebalance");
      } else return tn(ne(d), $(d), tn(te(d), t, n));
    else throw new Error("internal error: Set.rebalance");
  } else return tn(e, t, n);
}
function xr(e, t, n) {
  if (n != null) {
    const r = n,
      o = e.Compare(t, $(r)) | 0;
    if (r instanceof oe)
      return o < 0
        ? Tu(xr(e, t, ne(r)), $(r), te(r))
        : o === 0
        ? n
        : Tu(ne(r), $(r), xr(e, t, te(r)));
    {
      const l = e.Compare(t, $(r)) | 0;
      return l < 0 ? rn(t, void 0, n, 2) : l === 0 ? n : rn(t, n, void 0, 2);
    }
  } else return nn(t);
}
function Yp(e) {
  if (e != null) {
    const t = e;
    if (t instanceof oe) {
      if (ne(t) == null) return [$(t), te(t)];
      {
        const n = Yp(ne(t));
        return [n[0], tn(n[1], $(t), te(t))];
      }
    } else return [$(t), void 0];
  } else throw new Error("internal error: Set.spliceOutSuccessor");
}
function Nu(e, t, n) {
  if (n != null) {
    const r = n,
      o = e.Compare(t, $(r)) | 0;
    if (r instanceof oe) {
      if (o < 0) return Tu(Nu(e, t, ne(r)), $(r), te(r));
      if (o === 0) {
        if (ne(r) == null) return te(r);
        if (te(r) == null) return ne(r);
        {
          const l = Yp(te(r));
          return tn(ne(r), l[0], l[1]);
        }
      } else return Tu(ne(r), $(r), Nu(e, t, te(r)));
    } else return o === 0 ? void 0 : n;
  } else return n;
}
function ld(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l != null) {
      const i = l,
        s = r.Compare(o, $(i)) | 0;
      if (i instanceof oe)
        if (s < 0) {
          (e = r), (t = o), (n = ne(i));
          continue e;
        } else {
          if (s === 0) return !0;
          (e = r), (t = o), (n = te(i));
          continue e;
        }
      else return s === 0;
    } else return !1;
  }
}
function Xp(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r != null) {
      const o = r;
      if (o instanceof oe) {
        Xp(n, ne(o)), n($(o)), (e = n), (t = te(o));
        continue e;
      } else n($(o));
    }
    break;
  }
}
function bp(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l != null) {
      const i = l;
      if (i instanceof oe) {
        (e = r), (t = r(bp(r, o, ne(i)), $(i))), (n = te(i));
        continue e;
      } else return r(o, $(i));
    } else return o;
  }
}
function W2(e, t, n) {
  return bp(e, t, n);
}
function em(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r != null) {
      const o = r;
      if (o instanceof oe)
        if (n($(o)) && em(n, ne(o))) {
          (e = n), (t = te(o));
          continue e;
        } else return !1;
      else return n($(o));
    } else return !0;
  }
}
function Q2(e, t, n) {
  return em((r) => ld(e, r, n), t);
}
function tm(e, t, n, r) {
  e: for (;;) {
    const o = e,
      l = t,
      i = n,
      s = r;
    if (i != null) {
      const u = i;
      if (u instanceof oe) {
        const a = l($(u)) ? xr(o, $(u), s) : s;
        (e = o), (t = l), (n = ne(u)), (r = tm(o, l, te(u), a));
        continue e;
      } else return l($(u)) ? xr(o, $(u), s) : s;
    } else return s;
  }
}
function K2(e, t, n) {
  return tm(e, t, n, void 0);
}
function nm(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l == null) return l;
    if (o != null) {
      const i = o;
      if (i instanceof oe) {
        (e = r), (t = ne(i)), (n = nm(r, te(i), Nu(r, $(i), l)));
        continue e;
      } else return Nu(r, $(i), l);
    } else return l;
  }
}
function J2(e, t, n) {
  return nm(e, n, t);
}
class Z2 extends Jt {
  constructor(t, n) {
    super(), (this.stack = t), (this.started = n);
  }
}
function rm(e) {
  e: for (;;) {
    const t = e;
    if (U(t)) return qe();
    {
      const n = P(t),
        r = k(t);
      if (n != null) {
        const o = n;
        if (o instanceof oe) {
          e = Le([ne(o), nn($(o)), te(o)], r);
          continue e;
        } else return t;
      } else {
        e = r;
        continue e;
      }
    }
  }
}
function Sh(e) {
  return new Z2(rm(ie(e)), !1);
}
function q2() {
  throw new Error("Enumeration not started");
}
function Y2() {
  throw new Error("Enumeration already started");
}
function _h(e) {
  if (e.started) {
    const t = e.stack;
    if (U(t)) return Y2();
    if (P(t) != null) {
      const n = P(t);
      return $(n);
    } else
      throw new Error(
        "Please report error: Set iterator, unexpected stack for current"
      );
  } else return q2();
}
function X2(e) {
  if (e.started) {
    const t = e.stack;
    if (U(t)) return !1;
    if (P(t) != null) {
      if (P(t) instanceof oe)
        throw new Error(
          "Please report error: Set iterator, unexpected stack for moveNext"
        );
      return (e.stack = rm(k(t))), !U(e.stack);
    } else
      throw new Error(
        "Please report error: Set iterator, unexpected stack for moveNext"
      );
  } else return (e.started = !0), !U(e.stack);
}
function Ch(e) {
  let t = Sh(e);
  return {
    "System.Collections.Generic.IEnumerator`1.get_Current"() {
      return _h(t);
    },
    "System.Collections.IEnumerator.get_Current"() {
      return _h(t);
    },
    "System.Collections.IEnumerator.MoveNext"() {
      return X2(t);
    },
    "System.Collections.IEnumerator.Reset"() {
      t = Sh(e);
    },
    Dispose() {},
  };
}
function b2(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (U(o)) return U(l) ? 0 : -1;
    if (U(l)) return 1;
    if (P(l) != null)
      if (P(o) != null) {
        const i = P(o),
          s = P(l);
        if (i instanceof oe)
          if (ne(i) == null)
            if (s instanceof oe)
              if (ne(s) == null) {
                const u = r.Compare($(i), $(s)) | 0;
                if (u !== 0) return u | 0;
                (e = r), (t = st(te(i), k(o))), (n = st(te(s), k(l)));
                continue e;
              } else {
                let u, a, c, d, f;
                switch (
                  (U(o)
                    ? U(l)
                      ? (u = 2)
                      : P(l) != null
                      ? ((u = 1), (d = k(l)), (f = P(l)))
                      : (u = 2)
                    : P(o) != null
                    ? ((u = 0), (a = k(o)), (c = P(o)))
                    : U(l)
                    ? (u = 2)
                    : P(l) != null
                    ? ((u = 1), (d = k(l)), (f = P(l)))
                    : (u = 2),
                  u)
                ) {
                  case 0:
                    if (c instanceof oe) {
                      (e = r),
                        (t = Le([ne(c), rn($(c), void 0, te(c), 0)], a)),
                        (n = l);
                      continue e;
                    } else {
                      (e = r), (t = Le([void 0, nn($(c))], a)), (n = l);
                      continue e;
                    }
                  case 1:
                    if (f instanceof oe) {
                      (e = r),
                        (t = o),
                        (n = Le([ne(f), rn($(f), void 0, te(f), 0)], d));
                      continue e;
                    } else {
                      (e = r), (t = o), (n = Le([void 0, nn($(f))], d));
                      continue e;
                    }
                  case 2:
                    throw new Error(
                      "unexpected state in SetTree.compareStacks"
                    );
                }
              }
            else {
              const u = r.Compare($(i), $(s)) | 0;
              if (u !== 0) return u | 0;
              (e = r), (t = st(te(i), k(o))), (n = st(void 0, k(l)));
              continue e;
            }
          else {
            let u, a, c, d, f;
            switch (
              (U(o)
                ? U(l)
                  ? (u = 2)
                  : P(l) != null
                  ? ((u = 1), (d = k(l)), (f = P(l)))
                  : (u = 2)
                : P(o) != null
                ? ((u = 0), (a = k(o)), (c = P(o)))
                : U(l)
                ? (u = 2)
                : P(l) != null
                ? ((u = 1), (d = k(l)), (f = P(l)))
                : (u = 2),
              u)
            ) {
              case 0:
                if (c instanceof oe) {
                  (e = r),
                    (t = Le([ne(c), rn($(c), void 0, te(c), 0)], a)),
                    (n = l);
                  continue e;
                } else {
                  (e = r), (t = Le([void 0, nn($(c))], a)), (n = l);
                  continue e;
                }
              case 1:
                if (f instanceof oe) {
                  (e = r),
                    (t = o),
                    (n = Le([ne(f), rn($(f), void 0, te(f), 0)], d));
                  continue e;
                } else {
                  (e = r), (t = o), (n = Le([void 0, nn($(f))], d));
                  continue e;
                }
              case 2:
                throw new Error("unexpected state in SetTree.compareStacks");
            }
          }
        else if (s instanceof oe)
          if (ne(s) == null) {
            const u = r.Compare($(i), $(s)) | 0;
            if (u !== 0) return u | 0;
            (e = r), (t = st(void 0, k(o))), (n = st(te(s), k(l)));
            continue e;
          } else {
            let u, a, c, d, f;
            switch (
              (U(o)
                ? U(l)
                  ? (u = 2)
                  : P(l) != null
                  ? ((u = 1), (d = k(l)), (f = P(l)))
                  : (u = 2)
                : P(o) != null
                ? ((u = 0), (a = k(o)), (c = P(o)))
                : U(l)
                ? (u = 2)
                : P(l) != null
                ? ((u = 1), (d = k(l)), (f = P(l)))
                : (u = 2),
              u)
            ) {
              case 0:
                if (c instanceof oe) {
                  (e = r),
                    (t = Le([ne(c), rn($(c), void 0, te(c), 0)], a)),
                    (n = l);
                  continue e;
                } else {
                  (e = r), (t = Le([void 0, nn($(c))], a)), (n = l);
                  continue e;
                }
              case 1:
                if (f instanceof oe) {
                  (e = r),
                    (t = o),
                    (n = Le([ne(f), rn($(f), void 0, te(f), 0)], d));
                  continue e;
                } else {
                  (e = r), (t = o), (n = Le([void 0, nn($(f))], d));
                  continue e;
                }
              case 2:
                throw new Error("unexpected state in SetTree.compareStacks");
            }
          }
        else {
          const u = r.Compare($(i), $(s)) | 0;
          if (u !== 0) return u | 0;
          (e = r), (t = k(o)), (n = k(l));
          continue e;
        }
      } else {
        P(l);
        let i, s, u, a, c;
        switch (
          (U(o)
            ? U(l)
              ? (i = 2)
              : P(l) != null
              ? ((i = 1), (a = k(l)), (c = P(l)))
              : (i = 2)
            : P(o) != null
            ? ((i = 0), (s = k(o)), (u = P(o)))
            : U(l)
            ? (i = 2)
            : P(l) != null
            ? ((i = 1), (a = k(l)), (c = P(l)))
            : (i = 2),
          i)
        ) {
          case 0:
            if (u instanceof oe) {
              (e = r),
                (t = Le([ne(u), rn($(u), void 0, te(u), 0)], s)),
                (n = l);
              continue e;
            } else {
              (e = r), (t = Le([void 0, nn($(u))], s)), (n = l);
              continue e;
            }
          case 1:
            if (c instanceof oe) {
              (e = r),
                (t = o),
                (n = Le([ne(c), rn($(c), void 0, te(c), 0)], a));
              continue e;
            } else {
              (e = r), (t = o), (n = Le([void 0, nn($(c))], a));
              continue e;
            }
          case 2:
            throw new Error("unexpected state in SetTree.compareStacks");
        }
      }
    else if (P(o) != null) {
      P(o);
      let i, s, u, a, c;
      switch (
        (U(o)
          ? U(l)
            ? (i = 2)
            : P(l) != null
            ? ((i = 1), (a = k(l)), (c = P(l)))
            : (i = 2)
          : P(o) != null
          ? ((i = 0), (s = k(o)), (u = P(o)))
          : U(l)
          ? (i = 2)
          : P(l) != null
          ? ((i = 1), (a = k(l)), (c = P(l)))
          : (i = 2),
        i)
      ) {
        case 0:
          if (u instanceof oe) {
            (e = r), (t = Le([ne(u), rn($(u), void 0, te(u), 0)], s)), (n = l);
            continue e;
          } else {
            (e = r), (t = Le([void 0, nn($(u))], s)), (n = l);
            continue e;
          }
        case 1:
          if (c instanceof oe) {
            (e = r), (t = o), (n = Le([ne(c), rn($(c), void 0, te(c), 0)], a));
            continue e;
          } else {
            (e = r), (t = o), (n = Le([void 0, nn($(c))], a));
            continue e;
          }
        case 2:
          throw new Error("unexpected state in SetTree.compareStacks");
      }
    } else {
      (e = r), (t = k(o)), (n = k(l));
      continue e;
    }
    break;
  }
}
function Eh(e, t, n) {
  return t == null
    ? n == null
      ? 0
      : -1
    : n == null
    ? 1
    : b2(e, ie(t), ie(n)) | 0;
}
function eS(e) {
  const t = (n, r) => {
    e: for (;;) {
      const o = n,
        l = r;
      if (o != null) {
        const i = o;
        if (i instanceof oe) {
          (n = ne(i)), (r = st($(i), t(te(i), l)));
          continue e;
        } else return st($(i), l);
      } else return l;
    }
  };
  return t(e, qe());
}
function tS(e, t, n) {
  let r = n;
  Xp((o) => {
    (t[r] = o), (r = (r + 1) | 0);
  }, e);
}
function nS(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l["System.Collections.IEnumerator.MoveNext"]()) {
      (e = r),
        (t = xr(
          r,
          l["System.Collections.Generic.IEnumerator`1.get_Current"](),
          o
        )),
        (n = l);
      continue e;
    } else return o;
  }
}
function rS(e, t) {
  return c2((n, r) => xr(e, r, n), void 0, t);
}
function oS(e, t) {
  return Fn((n, r) => xr(e, r, n), void 0, t);
}
function om(e, t) {
  if (Ir(t)) return rS(e, t);
  if (t instanceof Kt) return oS(e, t);
  {
    const n = Se(t);
    try {
      return nS(e, void 0, n);
    } finally {
      ce(n);
    }
  }
}
class id {
  constructor(t, n) {
    (this.comparer = t), (this.tree = n);
  }
  GetHashCode() {
    return fS(this) | 0;
  }
  Equals(t) {
    const n = this;
    return t instanceof id && Eh(Gn(n), Qe(n), Qe(t)) === 0;
  }
  toString() {
    return (
      "set [" +
      G(
        "; ",
        Me((n) => dn(n), this)
      ) +
      "]"
    );
  }
  get [Symbol.toStringTag]() {
    return "FSharpSet";
  }
  toJSON() {
    const t = this;
    return Array.from(t);
  }
  CompareTo(t) {
    const n = this;
    return Eh(Gn(n), Qe(n), Qe(t)) | 0;
  }
  "System.Collections.Generic.ICollection`1.Add2B595"(t) {
    throw new Error("ReadOnlyCollection");
  }
  "System.Collections.Generic.ICollection`1.Clear"() {
    throw new Error("ReadOnlyCollection");
  }
  "System.Collections.Generic.ICollection`1.Remove2B595"(t) {
    throw new Error("ReadOnlyCollection");
  }
  "System.Collections.Generic.ICollection`1.Contains2B595"(t) {
    const n = this;
    return ld(Gn(n), t, Qe(n));
  }
  "System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(t, n) {
    tS(Qe(this), t, n);
  }
  "System.Collections.Generic.ICollection`1.get_IsReadOnly"() {
    return !0;
  }
  "System.Collections.Generic.ICollection`1.get_Count"() {
    return Ua(this) | 0;
  }
  "System.Collections.Generic.IReadOnlyCollection`1.get_Count"() {
    return Ua(this) | 0;
  }
  GetEnumerator() {
    return Ch(Qe(this));
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return Ch(Qe(this));
  }
  get size() {
    return Ua(this) | 0;
  }
  add(t) {
    throw new Error("Set cannot be mutated");
  }
  clear() {
    throw new Error("Set cannot be mutated");
  }
  delete(t) {
    throw new Error("Set cannot be mutated");
  }
  has(t) {
    return lm(this, t);
  }
  keys() {
    return Me((n) => n, this);
  }
  values() {
    return Me((n) => n, this);
  }
  entries() {
    return Me((n) => [n, n], this);
  }
  forEach(t, n) {
    const r = this;
    ca((o) => {
      cr(2, t, [o])(o)(r);
    }, r);
  }
}
function Xo(e, t) {
  return new id(e, t);
}
function Gn(e) {
  return e.comparer;
}
function Qe(e) {
  return e.tree;
}
function lS(e) {
  return Xo(e, void 0);
}
function iS(e, t) {
  return Xo(Gn(e), xr(Gn(e), t, Qe(e)));
}
function Ua(e) {
  return H2(Qe(e));
}
function lm(e, t) {
  return ld(Gn(e), t, Qe(e));
}
function sS(e, t) {
  return Qe(e) == null ? e : Xo(Gn(e), K2(Gn(e), t, Qe(e)));
}
function uS(e, t, n) {
  return Xo(
    n,
    W2((r, o) => xr(n, t(o), r), void 0, Qe(e))
  );
}
function aS(e, t) {
  return Qe(e) == null || Qe(t) == null
    ? e
    : Xo(Gn(e), J2(Gn(e), Qe(e), Qe(t)));
}
function cS(e) {
  return eS(Qe(e));
}
function fS(e) {
  let t = 0;
  const n = Se(e);
  try {
    for (; n["System.Collections.IEnumerator.MoveNext"](); ) {
      const r = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
      t = ((t << 1) + Et(r) + 631) | 0;
    }
  } finally {
    ce(n);
  }
  return Math.abs(t) | 0;
}
function ue(e, t) {
  return lm(t, e);
}
function im(e, t) {
  return iS(t, e);
}
function sm(e) {
  return lS(e);
}
function dS(e, t) {
  return sS(t, e);
}
function hS(e, t, n) {
  return uS(t, e, n);
}
function um(e, t) {
  return Xo(t, om(t, e));
}
function am(e) {
  return cS(e);
}
function ur(e, t) {
  return Xo(t, om(t, e));
}
function pS(e, t) {
  return aS(e, t);
}
function il(e, t) {
  return Q2(Gn(e), Qe(e), Qe(t));
}
class cm {
  constructor(t, n) {
    (this.k = t), (this.v = n);
  }
}
function Wi(e, t) {
  return new cm(e, t);
}
function Te(e) {
  return e.k;
}
function Ke(e) {
  return e.v;
}
class ze extends cm {
  constructor(t, n, r, o, l) {
    super(t, n), (this.left = r), (this.right = o), (this.h = l | 0);
  }
}
function Ii(e, t, n, r, o) {
  return new ze(e, t, n, r, o);
}
function lt(e) {
  return e.left;
}
function it(e) {
  return e.right;
}
function Wr(e) {
  return e.h;
}
function fm(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r != null) {
      const o = r;
      if (o instanceof ze) {
        (e = fm(n + 1, lt(o))), (t = it(o));
        continue e;
      } else return (n + 1) | 0;
    } else return n | 0;
  }
}
function dm(e) {
  return fm(0, e);
}
function Rn(e, t, n, r) {
  let o;
  const l = e;
  if (l != null) {
    const a = l;
    o = a instanceof ze ? Wr(a) : 1;
  } else o = 0;
  let i;
  const s = r;
  if (s != null) {
    const a = s;
    i = a instanceof ze ? Wr(a) : 1;
  } else i = 0;
  const u = (o < i ? i : o) | 0;
  return u === 0 ? Wi(t, n) : Ii(t, n, e, r, u + 1);
}
function kh(e, t, n, r) {
  let o, l, i, s, u;
  const a = e;
  if (a != null) {
    const f = a;
    u = f instanceof ze ? Wr(f) : 1;
  } else u = 0;
  let c;
  const d = r;
  if (d != null) {
    const f = d;
    c = f instanceof ze ? Wr(f) : 1;
  } else c = 0;
  if (c > u + 2) {
    const f = Re(r);
    if (f instanceof ze)
      if (
        ((o = lt(f)),
        (o != null ? ((l = o), l instanceof ze ? Wr(l) : 1) : 0) > u + 1)
      ) {
        const v = Re(lt(f));
        if (v instanceof ze)
          return Rn(
            Rn(e, t, n, lt(v)),
            Te(v),
            Ke(v),
            Rn(it(v), Te(f), Ke(f), it(f))
          );
        throw new Error("internal error: Map.rebalance");
      } else return Rn(Rn(e, t, n, lt(f)), Te(f), Ke(f), it(f));
    else throw new Error("internal error: Map.rebalance");
  } else if (u > c + 2) {
    const f = Re(e);
    if (f instanceof ze)
      if (
        ((i = it(f)),
        (i != null ? ((s = i), s instanceof ze ? Wr(s) : 1) : 0) > c + 1)
      ) {
        const v = Re(it(f));
        if (v instanceof ze)
          return Rn(
            Rn(lt(f), Te(f), Ke(f), lt(v)),
            Te(v),
            Ke(v),
            Rn(it(v), t, n, r)
          );
        throw new Error("internal error: Map.rebalance");
      } else return Rn(lt(f), Te(f), Ke(f), Rn(it(f), t, n, r));
    else throw new Error("internal error: Map.rebalance");
  } else return Rn(e, t, n, r);
}
function Go(e, t, n, r) {
  if (r != null) {
    const o = r,
      l = e.Compare(t, Te(o)) | 0;
    return o instanceof ze
      ? l < 0
        ? kh(Go(e, t, n, lt(o)), Te(o), Ke(o), it(o))
        : l === 0
        ? Ii(t, n, lt(o), it(o), Wr(o))
        : kh(lt(o), Te(o), Ke(o), Go(e, t, n, it(o)))
      : l < 0
      ? Ii(t, n, void 0, r, 2)
      : l === 0
      ? Wi(t, n)
      : Ii(t, n, r, void 0, 2);
  } else return Wi(t, n);
}
function hm(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l != null) {
      const i = l,
        s = r.Compare(o, Te(i)) | 0;
      if (s === 0) return Zt(Ke(i));
      if (i instanceof ze) {
        (e = r), (t = o), (n = s < 0 ? lt(i) : it(i));
        continue e;
      } else return;
    } else return;
  }
}
function mS(e, t, n) {
  const r = hm(e, t, n);
  if (r == null) throw new Error();
  return Re(r);
}
function Th(e, t, n, r, o) {
  return t(n, r) ? Go(e, n, r, o) : o;
}
function pm(e, t, n, r) {
  e: for (;;) {
    const o = e,
      l = t,
      i = n,
      s = r;
    if (i != null) {
      const u = i;
      if (u instanceof ze) {
        const a = pm(o, l, lt(u), s),
          c = Th(o, l, Te(u), Ke(u), a);
        (e = o), (t = l), (n = it(u)), (r = c);
        continue e;
      } else return Th(o, l, Te(u), Ke(u), s);
    } else return s;
  }
}
function gS(e, t, n) {
  return pm(e, t, n, void 0);
}
function yS(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l != null) {
      const i = l,
        s = r.Compare(o, Te(i)) | 0;
      if (i instanceof ze)
        if (s < 0) {
          (e = r), (t = o), (n = lt(i));
          continue e;
        } else {
          if (s === 0) return !0;
          (e = r), (t = o), (n = it(i));
          continue e;
        }
      else return s === 0;
    } else return !1;
  }
}
function mm(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r != null) {
      const o = r;
      if (o instanceof ze) {
        mm(n, lt(o)), n(Te(o), Ke(o)), (e = n), (t = it(o));
        continue e;
      } else n(Te(o), Ke(o));
    }
    break;
  }
}
function vS(e, t) {
  mm(e, t);
}
function Pc(e, t) {
  if (t != null) {
    const n = t;
    if (n instanceof ze) {
      const r = Pc(e, lt(n)),
        o = e(Te(n), Ke(n)),
        l = Pc(e, it(n));
      return Ii(Te(n), o, r, l, Wr(n));
    } else return Wi(Te(n), e(Te(n), Ke(n)));
  } else return void 0;
}
function wS(e, t) {
  return Pc(e, t);
}
function gm(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l != null) {
      const i = l;
      if (i instanceof ze) {
        (e = r), (t = r(gm(r, o, lt(i)), Te(i), Ke(i))), (n = it(i));
        continue e;
      } else return r(o, Te(i), Ke(i));
    } else return o;
  }
}
function SS(e, t, n) {
  return gm(e, t, n);
}
function _S(e) {
  const t = (n, r) => {
    e: for (;;) {
      const o = n,
        l = r;
      if (o != null) {
        const i = o;
        if (i instanceof ze) {
          (n = lt(i)), (r = st([Te(i), Ke(i)], t(it(i), l)));
          continue e;
        } else return st([Te(i), Ke(i)], l);
      } else return l;
    }
  };
  return t(e, qe());
}
function ym(e, t, n) {
  let r = n;
  vS((o, l) => {
    (t[r] = [o, l]), (r = (r + 1) | 0);
  }, e);
}
function CS(e) {
  const t = dm(e) | 0,
    n = td(new Array(t), 0, t, [null, null]);
  return ym(e, n, 0), n;
}
function ES(e, t) {
  return Fn((n, r) => Go(e, r[0], r[1], n), void 0, t);
}
function kS(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (l["System.Collections.IEnumerator.MoveNext"]()) {
      const i = l["System.Collections.Generic.IEnumerator`1.get_Current"]();
      (e = r), (t = Go(r, i[0], i[1], o)), (n = l);
      continue e;
    } else return o;
  }
}
function TS(e, t) {
  let n = void 0;
  for (let r = 0; r <= t.length - 1; r++) {
    const o = t[r];
    n = Go(e, o[0], o[1], n);
  }
  return n;
}
function vm(e, t) {
  if (Ir(t)) return TS(e, t);
  if (t instanceof Kt) return ES(e, t);
  {
    const n = Se(t);
    try {
      return kS(e, void 0, n);
    } finally {
      ce(n);
    }
  }
}
class NS extends Jt {
  constructor(t, n) {
    super(), (this.stack = t), (this.started = n);
  }
}
function wm(e) {
  e: for (;;) {
    const t = e;
    if (U(t)) return qe();
    {
      const n = k(t),
        r = P(t);
      if (r != null) {
        const o = r;
        if (o instanceof ze) {
          e = Le([lt(o), Wi(Te(o), Ke(o)), it(o)], n);
          continue e;
        } else return t;
      } else {
        e = n;
        continue e;
      }
    }
  }
}
function Nh(e) {
  return new NS(wm(ie(e)), !1);
}
function MS() {
  throw new Error("enumeration not started");
}
function IS() {
  throw new Error("enumeration already finished");
}
function Mh(e) {
  if (e.started) {
    const t = e.stack;
    if (U(t)) return IS();
    if (P(t) != null) {
      const n = P(t);
      if (n instanceof ze)
        throw new Error(
          "Please report error: Map iterator, unexpected stack for current"
        );
      return [Te(n), Ke(n)];
    } else
      throw new Error(
        "Please report error: Map iterator, unexpected stack for current"
      );
  } else return MS();
}
function xS(e) {
  if (e.started) {
    const t = e.stack;
    if (U(t)) return !1;
    if (P(t) != null) {
      if (P(t) instanceof ze)
        throw new Error(
          "Please report error: Map iterator, unexpected stack for moveNext"
        );
      return (e.stack = wm(k(t))), !U(e.stack);
    } else
      throw new Error(
        "Please report error: Map iterator, unexpected stack for moveNext"
      );
  } else return (e.started = !0), !U(e.stack);
}
function Ih(e) {
  let t = Nh(e);
  return {
    "System.Collections.Generic.IEnumerator`1.get_Current"() {
      return Mh(t);
    },
    "System.Collections.IEnumerator.get_Current"() {
      return Mh(t);
    },
    "System.Collections.IEnumerator.MoveNext"() {
      return xS(t);
    },
    "System.Collections.IEnumerator.Reset"() {
      t = Nh(e);
    },
    Dispose() {},
  };
}
class Mu {
  constructor(t, n) {
    (this.comparer = t), (this.tree = n);
  }
  GetHashCode() {
    return BS(this) | 0;
  }
  Equals(t) {
    const n = this;
    if (t instanceof Mu) {
      const r = Se(n);
      try {
        const o = Se(t);
        try {
          const l = () => {
            const i = r["System.Collections.IEnumerator.MoveNext"]();
            if (i === o["System.Collections.IEnumerator.MoveNext"]())
              if (i) {
                const s =
                    r["System.Collections.Generic.IEnumerator`1.get_Current"](),
                  u =
                    o["System.Collections.Generic.IEnumerator`1.get_Current"]();
                return Ee(s[0], u[0]) && Ee(s[1], u[1]) ? l() : !1;
              } else return !0;
            else return !1;
          };
          return l();
        } finally {
          ce(o);
        }
      } finally {
        ce(r);
      }
    } else return !1;
  }
  toString() {
    return (
      "map [" +
      G(
        "; ",
        Me((n) => Up("({0}, {1})", n[0], n[1]), this)
      ) +
      "]"
    );
  }
  get [Symbol.toStringTag]() {
    return "FSharpMap";
  }
  toJSON() {
    const t = this;
    return Array.from(t);
  }
  GetEnumerator() {
    return Ih(this.tree);
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return Ih(this.tree);
  }
  CompareTo(t) {
    const n = this;
    if (t instanceof Mu)
      return (
        L2(
          (r, o) => {
            const l = n.comparer.Compare(r[0], o[0]) | 0;
            return (l !== 0 ? l : re(r[1], o[1])) | 0;
          },
          n,
          t
        ) | 0
      );
    throw new Error("not comparable\\nParameter name: obj");
  }
  "System.Collections.Generic.ICollection`1.Add2B595"(t) {
    throw new Error("Map cannot be mutated");
  }
  "System.Collections.Generic.ICollection`1.Clear"() {
    throw new Error("Map cannot be mutated");
  }
  "System.Collections.Generic.ICollection`1.Remove2B595"(t) {
    throw new Error("Map cannot be mutated");
  }
  "System.Collections.Generic.ICollection`1.Contains2B595"(t) {
    const n = this;
    return Rc(n, t[0]) && Ee(Oc(n, t[0]), t[1]);
  }
  "System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(t, n) {
    ym(this.tree, t, n);
  }
  "System.Collections.Generic.ICollection`1.get_IsReadOnly"() {
    return !0;
  }
  "System.Collections.Generic.ICollection`1.get_Count"() {
    return Zs(this) | 0;
  }
  "System.Collections.Generic.IReadOnlyCollection`1.get_Count"() {
    return Zs(this) | 0;
  }
  get size() {
    return Zs(this) | 0;
  }
  clear() {
    throw new Error("Map cannot be mutated");
  }
  delete(t) {
    throw new Error("Map cannot be mutated");
  }
  entries() {
    return Me((n) => [n[0], n[1]], this);
  }
  get(t) {
    return Oc(this, t);
  }
  has(t) {
    return Rc(this, t);
  }
  keys() {
    return Me((n) => n[0], this);
  }
  set(t, n) {
    throw new Error("Map cannot be mutated");
  }
  values() {
    return Me((n) => n[1], this);
  }
  forEach(t, n) {
    const r = this;
    ca((o) => {
      cr(2, t, [o[1]])(o[0])(r);
    }, r);
  }
}
function ri(e, t) {
  return new Mu(e, t);
}
function FS(e) {
  return ri(e, void 0);
}
function PS(e) {
  return e.tree;
}
function OS(e, t, n) {
  return ri(e.comparer, Go(e.comparer, t, n, e.tree));
}
function RS(e) {
  return e.tree == null;
}
function Oc(e, t) {
  return mS(e.comparer, t, e.tree);
}
function AS(e, t) {
  return ri(e.comparer, gS(e.comparer, t, e.tree));
}
function DS(e, t) {
  return ri(e.comparer, wS(t, e.tree));
}
function Zs(e) {
  return dm(e.tree);
}
function Rc(e, t) {
  return yS(e.comparer, t, e.tree);
}
function $S(e, t) {
  return hm(e.comparer, t, e.tree);
}
function LS(e) {
  return _S(e.tree);
}
function zS(e) {
  return CS(e.tree);
}
function BS(e) {
  const t = (o, l) => (o << 1) + l + 631;
  let n = 0;
  const r = Se(e);
  try {
    for (; r["System.Collections.IEnumerator.MoveNext"](); ) {
      const o = r["System.Collections.Generic.IEnumerator`1.get_Current"]();
      (n = t(n, Et(o[0])) | 0), (n = t(n, Et(o[1])) | 0);
    }
  } finally {
    ce(r);
  }
  return n | 0;
}
function xh(e) {
  return RS(e);
}
function ds(e, t, n) {
  return OS(n, e, t);
}
function Sm(e, t) {
  return Oc(t, e);
}
function Tt(e, t) {
  return $S(t, e);
}
function qs(e, t) {
  return Rc(t, e);
}
function US(e, t) {
  return AS(t, e);
}
function VS(e, t) {
  return DS(t, e);
}
function sd(e, t, n) {
  return SS(e, t, PS(n));
}
function _m(e) {
  return Me((t) => [t[0], t[1]], e);
}
function ir(e, t) {
  return ri(t, vm(t, e));
}
function hs(e, t) {
  return ri(t, vm(t, e));
}
function Ur(e) {
  return LS(e);
}
function GS(e) {
  return zS(e);
}
function Eo(e) {
  return FS(e);
}
function jS(e) {
  return Zs(e);
}
class g extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return [
      "Truffle",
      "Herb",
      "Onion",
      "Wood",
      "PreparedTruffle",
      "Clay",
      "Oddment",
      "Hand",
      "BrazenHead",
      "Golem",
      "Unobtainium",
    ];
  }
}
function El() {
  return Pp("Types.Resource", [], g, () => [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
}
const Cm = N([
    new g(0, []),
    new g(1, []),
    new g(2, []),
    new g(3, []),
    new g(4, []),
    new g(5, []),
    new g(6, []),
    new g(7, []),
    new g(8, []),
    new g(9, []),
    new g(10, []),
  ]),
  HS = ur(Cm, { Compare: re }),
  WS = N([
    new g(10, []),
    new g(9, []),
    new g(8, []),
    new g(7, []),
    new g(6, []),
    new g(4, []),
    new g(5, []),
    new g(3, []),
    new g(2, []),
    new g(1, []),
    new g(0, []),
  ]);
class T extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return [
      "OpenYourEyes",
      "EatTruffles",
      "DressWounds",
      "EatMeal",
      "BuildShelter",
      "InvestigateTownship",
      "GreetStranger",
      "BarterForTome",
      "BuildHomestead",
      "ClickMultiplier",
      "AttendTownFair",
      "HearNewsFromBorder",
      "BuildGolemWorkshop",
      "StorageMultiplier",
      "TendToRefugees",
      "AttendTownMeeting",
      "GolemNursemaids",
      "AdvancedClickMultiplier",
      "GeneratorMultiplier",
      "PrepareCatapults",
      "StockpileFood",
      "SufferRaid",
      "DefendTown",
      "TendToCasualties",
      "SendNegotiators",
      "RebuildTown",
      "EnjoyLife",
      "MakeFriends",
      "FallInLove",
      "OpenRestaurant",
      "ThankYou",
    ];
  }
}
function Em() {
  return Pp("Types.Adventure", [], T, () => [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
}
const ud = ur(
  [
    new T(0, []),
    new T(1, []),
    new T(2, []),
    new T(3, []),
    new T(4, []),
    new T(5, []),
    new T(6, []),
    new T(7, []),
    new T(8, []),
    new T(9, []),
    new T(10, []),
    new T(11, []),
    new T(12, []),
    new T(13, []),
    new T(14, []),
    new T(15, []),
    new T(16, []),
    new T(17, []),
    new T(18, []),
    new T(19, []),
    new T(20, []),
    new T(21, []),
    new T(22, []),
    new T(23, []),
    new T(24, []),
    new T(25, []),
    new T(26, []),
    new T(27, []),
    new T(28, []),
    new T(29, []),
    new T(30, []),
  ],
  { Compare: re }
);
class oi extends Jt {
  constructor(t, n, r, o) {
    super(),
      (this.Resources = t),
      (this.StorageFacilities = n),
      (this.Generators = r),
      (this.Adventures = o);
  }
}
function QS() {
  return Zf("Types.Inventory", [], oi, () => [
    ["Resources", Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr])],
    [
      "StorageFacilities",
      Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr]),
    ],
    ["Generators", Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr])],
    ["Adventures", Hr("Microsoft.FSharp.Collections.FSharpSet`1", [Em()])],
  ]);
}
class ad extends Jt {
  constructor(t, n, r, o) {
    super(),
      (this.Resources = t),
      (this.StorageFacilities = n),
      (this.Generators = r),
      (this.Adventures = o);
  }
}
function KS() {
  return Zf("Types.Unlocks", [], ad, () => [
    ["Resources", Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr])],
    [
      "StorageFacilities",
      Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr]),
    ],
    ["Generators", Hr("Microsoft.FSharp.Collections.FSharpMap`2", [El(), kr])],
    ["Adventures", Hr("Microsoft.FSharp.Collections.FSharpMap`2", [Em(), kr])],
  ]);
}
class Ys extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["Show", "Hide", "RequestReset", "CancelReset"];
  }
}
class Vn extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return [
      "Produce",
      "BuildGenerator",
      "BuildStorageFacility",
      "Venture",
      "Tick",
      "Save",
      "Load",
      "Reset",
      "Menu",
    ];
  }
}
class km extends Jt {
  constructor(t, n, r, o) {
    super(),
      (this.Tick = t),
      (this.Inventory = n),
      (this.Unlocks = r),
      (this.SaveVersion = o);
  }
}
function Tm() {
  return Zf("Types.StateSaveDto", [], km, () => [
    ["Tick", kr],
    ["Inventory", QS()],
    ["Unlocks", KS()],
    ["SaveVersion", kr],
  ]);
}
class cd extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["ModalMenu", "ModalResetWarning"];
  }
}
class ps extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["GameView", "MenuView"];
  }
}
class Yn extends Jt {
  constructor(t, n, r, o, l) {
    super(),
      (this.Tick = t),
      (this.Inventory = n),
      (this.Unlocks = r),
      (this.SaveLog = o),
      (this.View = l);
  }
}
const Nm = new Yn(
  p(0, 0, !1),
  new oi(
    Eo({ Compare: re }),
    Eo({ Compare: re }),
    Eo({ Compare: re }),
    sm({ Compare: re })
  ),
  new ad(
    Eo({ Compare: re }),
    Eo({ Compare: re }),
    Eo({ Compare: re }),
    Eo({ Compare: re })
  ),
  "[SaveLog is empty]",
  new ps(0, [])
);
function JS() {
  return typeof window < "u" && typeof window.document < "u";
}
class de extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["JNumber", "JString", "JBool", "JNull", "JArray", "JObject"];
  }
}
function ZS(e, t) {
  if (e != null && /\S/.test(e)) {
    const n = +e.replace("_", "");
    if (!Number.isNaN(n)) return (t.contents = n), !0;
  }
  return !1;
}
function Iu(e) {
  const t = new so(0);
  if (ZS(e, t)) return t.contents;
  throw new Error("Input string was not in a correct format.");
}
const ko = (e) => ({ tag: "ok", value: e }),
  di = (e) => ({ tag: "error", error: e });
class xt {
  constructor(t) {
    this.uri = t;
  }
  static isAbsoluteUri(t) {
    try {
      return new URL(t), !0;
    } catch {
      return !1;
    }
  }
  static tryCreateWithKind(t, n) {
    switch (n) {
      case 1:
        return xt.isAbsoluteUri(t)
          ? ko(new xt({ original: t, value: new URL(t), kind: n }))
          : di("Invalid URI: The format of the URI could not be determined.");
      case 2:
        return xt.isAbsoluteUri(t)
          ? di("URI is not a relative path.")
          : ko(new xt({ original: t, value: t, kind: n }));
      case 0:
        return xt.isAbsoluteUri(t)
          ? ko(new xt({ original: t, value: new URL(t), kind: 1 }))
          : ko(new xt({ original: t, value: t, kind: 2 }));
      default:
        return n;
    }
  }
  static tryCreateWithBase(t, n) {
    return t.uri.kind !== 1
      ? di("Base URI should have Absolute kind")
      : typeof n == "string"
      ? ko(
          new xt({
            original: new URL(n, t.uri.value).toString(),
            value: new URL(n, t.uri.value),
            kind: 1,
          })
        )
      : n.uri.kind === 2
      ? ko(
          new xt({
            original: new URL(n.uri.value, t.uri.value).toString(),
            value: new URL(n.uri.value, t.uri.value),
            kind: 1,
          })
        )
      : ko(t);
  }
  static tryCreateImpl(t, n = 1) {
    return typeof t == "string"
      ? typeof n != "number"
        ? di("Kind must be specified when the baseUri is a string.")
        : xt.tryCreateWithKind(t, n)
      : typeof n == "number"
      ? di("Kind should not be specified when the baseUri is an absolute Uri.")
      : xt.tryCreateWithBase(t, n);
  }
  static create(t, n = 1) {
    const r = xt.tryCreateImpl(t, n);
    switch (r.tag) {
      case "ok":
        return r.value;
      case "error":
        throw new Error(r.error);
      default:
        return r;
    }
  }
  static tryCreate(t, n = 1, r) {
    const o = xt.tryCreateImpl(t, n);
    switch (o.tag) {
      case "ok":
        return (r.contents = o.value), !0;
      case "error":
        return !1;
      default:
        return o;
    }
  }
  toString() {
    switch (this.uri.kind) {
      case 1:
        return decodeURIComponent(this.asUrl().toString());
      case 2:
        return this.uri.value;
      default:
        return this.uri;
    }
  }
  asUrl() {
    switch (this.uri.kind) {
      case 1:
        return this.uri.value;
      case 2:
        throw new Error("This operation is not supported for a relative URI.");
      default:
        return this.uri;
    }
  }
  get isAbsoluteUri() {
    return this.uri.kind === 1;
  }
  get absoluteUri() {
    return this.asUrl().href;
  }
  get scheme() {
    const t = this.asUrl().protocol;
    return t.slice(0, t.length - 1);
  }
  get host() {
    return this.asUrl().host;
  }
  get absolutePath() {
    return this.asUrl().pathname;
  }
  get query() {
    return this.asUrl().search;
  }
  get pathAndQuery() {
    const t = this.asUrl();
    return t.pathname + t.search;
  }
  get fragment() {
    return this.asUrl().hash;
  }
  get originalString() {
    return this.uri.original;
  }
}
function De(e) {
  if (!(this instanceof De)) return new De(e);
  this._ = e;
}
var Z = De.prototype;
function qS(e, t) {
  var n = 0;
  for (n; n < e; n++) t(n);
}
function YS(e, t) {
  qS(t.length, function (n) {
    e(t[n], n, t);
  });
}
function Mm(e, t, n) {
  return (
    YS(function (r, o, l) {
      t = e(t, r, o, l);
    }, n),
    t
  );
}
function Va(e, t) {
  return Mm(
    function (n, r, o, l) {
      return n.concat([e(r, o, l)]);
    },
    [],
    t
  );
}
function XS() {
  return typeof Buffer < "u";
}
function Im(e) {
  return e instanceof De;
}
function fd(e) {
  return {}.toString.call(e) === "[object Array]";
}
function xi(e) {
  return XS() && Buffer.isBuffer(e);
}
function qt(e, t) {
  return { status: !0, index: e, value: t, furthest: -1, expected: [] };
}
function ao(e, t) {
  return (
    fd(t) || (t = [t]),
    { status: !1, index: -1, value: null, furthest: e, expected: t }
  );
}
function dr(e, t) {
  if (!t || e.furthest > t.furthest) return e;
  var n = e.furthest === t.furthest ? bS(e.expected, t.expected) : t.expected;
  return {
    status: e.status,
    index: e.index,
    value: e.value,
    furthest: t.furthest,
    expected: n,
  };
}
function xm(e, t) {
  if (xi(e)) return { offset: t, line: -1, column: -1 };
  var n = e.slice(0, t).split(`
`),
    r = n.length,
    o = n[n.length - 1].length + 1;
  return { offset: t, line: r, column: o };
}
function bS(e, t) {
  for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = !0;
  for (var o = 0; o < t.length; o++) n[t[o]] = !0;
  var l = [];
  for (var i in n) ({}).hasOwnProperty.call(n, i) && l.push(i);
  return l.sort(), l;
}
function Bl(e) {
  if (!Im(e)) throw new Error("not a parser: " + e);
}
function Fm(e, t) {
  return typeof e == "string" ? e.charAt(t) : e[t];
}
function e_(e) {
  if (!fd(e)) throw new Error("not an array: " + e);
}
function Ac(e) {
  if (typeof e != "number") throw new Error("not a number: " + e);
}
function t_(e) {
  if (!(e instanceof RegExp)) throw new Error("not a regexp: " + e);
  for (var t = Pm(e), n = 0; n < t.length; n++) {
    var r = t.charAt(n);
    if (r !== "i" && r !== "m" && r !== "u")
      throw new Error('unsupported regexp flag "' + r + '": ' + e);
  }
}
function Ul(e) {
  if (typeof e != "function") throw new Error("not a function: " + e);
}
function Xs(e) {
  if (typeof e != "string") throw new Error("not a string: " + e);
}
var n_ = 2,
  r_ = 3,
  Qr = 8,
  o_ = Qr * 5,
  l_ = Qr * 4,
  Fh = "  ";
function xu(e, t) {
  return new Array(t + 1).join(e);
}
function i_(e) {
  return e.length === 1
    ? `Expected:

` + e[0]
    : `Expected one of the following: 

` + e.join(", ");
}
function Ns(e, t, n) {
  var r = t - e.length;
  return r <= 0 ? e : xu(n, r) + e;
}
function s_(e, t) {
  var n = e.length,
    r = [],
    o = 0;
  if (n <= t) return [e.slice()];
  for (var l = 0; l < n; l++)
    r[o] || r.push([]), r[o].push(e[l]), (l + 1) % t === 0 && o++;
  return r;
}
function Ph(e, t, n, r) {
  return { from: e - t > 0 ? e - t : 0, to: e + n > r ? r : e + n };
}
function u_(e) {
  return e.from === 0 && e.to === 1
    ? { from: e.from, to: e.to }
    : { from: e.from / Qr, to: Math.floor(e.to / Qr) };
}
function a_(e, t) {
  var n = t.index,
    r = n.offset,
    o = 1,
    l,
    i,
    s,
    u,
    a;
  if (r === e.length) return "Got the end of the input";
  if (xi(e)) {
    var c = r - (r % Qr),
      d = r - c,
      f = Ph(c, o_, l_ + Qr, e.length),
      v = e.slice(f.from, f.to),
      w = s_(v.toJSON().data, Qr),
      _ = Va(function (y) {
        return Va(function (S) {
          return Ns(S.toString(16), 2, "0");
        }, y);
      }, w);
    (u = u_(f)),
      (i = c / Qr),
      (l = d * 3),
      d >= 4 && (l += 1),
      (o = 2),
      (s = Va(function (y) {
        return y.length <= 4
          ? y.join(" ")
          : y.slice(0, 4).join(" ") + "  " + y.slice(4).join(" ");
      }, _)),
      (a = ((u.to > 0 ? u.to - 1 : u.to) * 8).toString(16).length),
      a < 2 && (a = 2);
  } else {
    var x = e.split(/\r\n|[\n\r\u2028\u2029]/);
    (l = n.column - 1),
      (i = n.line - 1),
      (u = Ph(i, n_, r_, x.length)),
      (s = x.slice(u.from, u.to)),
      (a = u.to.toString().length);
  }
  var m = i - u.from;
  xi(e) &&
    ((a = ((u.to > 0 ? u.to - 1 : u.to) * 8).toString(16).length),
    a < 2 && (a = 2));
  var h = Mm(
    function (y, S, E) {
      var M = E === m,
        F = M ? "> " : Fh,
        A;
      return (
        xi(e)
          ? (A = Ns(((u.from + E) * 8).toString(16), a, "0"))
          : (A = Ns((u.from + E + 1).toString(), a, " ")),
        [].concat(
          y,
          [F + A + " | " + S],
          M ? [Fh + xu(" ", a) + " | " + Ns("", l, " ") + xu("^", o)] : []
        )
      );
    },
    [],
    s
  );
  return h.join(`
`);
}
function c_(e, t) {
  return [
    `
`,
    "-- PARSING FAILED " + xu("-", 50),
    `

`,
    a_(e, t),
    `

`,
    i_(t.expected),
    `
`,
  ].join("");
}
function Pm(e) {
  var t = "" + e;
  return t.slice(t.lastIndexOf("/") + 1);
}
function f_(e) {
  return RegExp("^(?:" + e.source + ")", Pm(e));
}
function ms() {
  for (var e = [].slice.call(arguments), t = e.length, n = 0; n < t; n += 1)
    Bl(e[n]);
  return De(function (r, o) {
    for (var l, i = new Array(t), s = 0; s < t; s += 1) {
      if (((l = dr(e[s]._(r, o), l)), !l.status)) return l;
      (i[s] = l.value), (o = l.index);
    }
    return dr(qt(o, i), l);
  });
}
function li() {
  var e = [].slice.call(arguments);
  if (e.length === 0) throw new Error("seqMap needs at least one argument");
  var t = e.pop();
  return (
    Ul(t),
    ms.apply(null, e).map(function (n) {
      return t.apply(null, n);
    })
  );
}
function dd() {
  var e = [].slice.call(arguments),
    t = e.length;
  if (t === 0) return Rm("zero alternates");
  for (var n = 0; n < t; n += 1) Bl(e[n]);
  return De(function (r, o) {
    for (var l, i = 0; i < e.length; i += 1)
      if (((l = dr(e[i]._(r, o), l)), l.status)) return l;
    return l;
  });
}
function d_(e, t) {
  return Om(e, t).or(hd([]));
}
function Om(e, t) {
  Bl(e), Bl(t);
  var n = t.then(e).many();
  return li(e, n, function (r, o) {
    return [r].concat(o);
  });
}
Z.parse = function (e) {
  if (typeof e != "string" && !xi(e))
    throw new Error(
      ".parse must be called with a string or Buffer as its argument"
    );
  var t = this.skip(Dm)._(e, 0);
  return t.status
    ? { status: !0, value: t.value }
    : { status: !1, index: xm(e, t.furthest), expected: t.expected };
};
Z.tryParse = function (e) {
  var t = this.parse(e);
  if (t.status) return t.value;
  var n = c_(e, t),
    r = new Error(n);
  throw ((r.type = "ParsimmonError"), (r.result = t), r);
};
Z.or = function (e) {
  return dd(this, e);
};
Z.trim = function (e) {
  return this.wrap(e, e);
};
Z.wrap = function (e, t) {
  return li(e, this, t, function (n, r) {
    return r;
  });
};
Z.thru = function (e) {
  return e(this);
};
Z.then = function (e) {
  return (
    Bl(e),
    ms(this, e).map(function (t) {
      return t[1];
    })
  );
};
Z.many = function () {
  var e = this;
  return De(function (t, n) {
    for (var r = [], o = void 0; ; )
      if (((o = dr(e._(t, n), o)), o.status)) {
        if (n === o.index)
          throw new Error(
            "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
          );
        (n = o.index), r.push(o.value);
      } else return dr(qt(n, r), o);
  });
};
Z.tieWith = function (e) {
  return (
    Xs(e),
    this.map(function (t) {
      if ((e_(t), t.length)) {
        Xs(t[0]);
        for (var n = t[0], r = 1; r < t.length; r++) Xs(t[r]), (n += e + t[r]);
        return n;
      } else return "";
    })
  );
};
Z.tie = function () {
  return this.tieWith("");
};
Z.times = function (e, t) {
  var n = this;
  return (
    arguments.length < 2 && (t = e),
    Ac(e),
    Ac(t),
    De(function (r, o) {
      for (var l = [], i = void 0, s = void 0, u = 0; u < e; u += 1)
        if (((i = n._(r, o)), (s = dr(i, s)), i.status))
          (o = i.index), l.push(i.value);
        else return s;
      for (; u < t && ((i = n._(r, o)), (s = dr(i, s)), i.status); u += 1)
        (o = i.index), l.push(i.value);
      return dr(qt(o, l), s);
    })
  );
};
Z.result = function (e) {
  return this.map(function () {
    return e;
  });
};
Z.atMost = function (e) {
  return this.times(0, e);
};
Z.atLeast = function (e) {
  return li(this.times(e), this.many(), function (t, n) {
    return t.concat(n);
  });
};
Z.map = function (e) {
  Ul(e);
  var t = this;
  return De(function (n, r) {
    var o = t._(n, r);
    return o.status ? dr(qt(o.index, e(o.value)), o) : o;
  });
};
Z.contramap = function (e) {
  Ul(e);
  var t = this;
  return De(function (n, r) {
    var o = t.parse(e(n.slice(r)));
    return o.status ? qt(r + n.length, o.value) : o;
  });
};
Z.promap = function (e, t) {
  return Ul(e), Ul(t), this.contramap(e).map(t);
};
Z.skip = function (e) {
  return ms(this, e).map(function (t) {
    return t[0];
  });
};
Z.mark = function () {
  return li(Fu, this, Fu, function (e, t, n) {
    return { start: e, value: t, end: n };
  });
};
Z.node = function (e) {
  return li(Fu, this, Fu, function (t, n, r) {
    return { name: e, value: n, start: t, end: r };
  });
};
Z.sepBy = function (e) {
  return d_(this, e);
};
Z.sepBy1 = function (e) {
  return Om(this, e);
};
Z.lookahead = function (e) {
  return this.skip(Dc(e));
};
Z.notFollowedBy = function (e) {
  return this.skip(h_(e));
};
Z.desc = function (e) {
  fd(e) || (e = [e]);
  var t = this;
  return De(function (n, r) {
    var o = t._(n, r);
    return o.status || (o.expected = e), o;
  });
};
Z.fallback = function (e) {
  return this.or(hd(e));
};
Z.ap = function (e) {
  return li(e, this, function (t, n) {
    return t(n);
  });
};
Z.chain = function (e) {
  var t = this;
  return De(function (n, r) {
    var o = t._(n, r);
    if (!o.status) return o;
    var l = e(o.value);
    return dr(l._(n, o.index), o);
  });
};
function gs(e) {
  Xs(e);
  var t = "'" + e + "'";
  return De(function (n, r) {
    var o = r + e.length,
      l = n.slice(r, o);
    return l === e ? qt(o, l) : ao(r, t);
  });
}
function Fr(e, t) {
  t_(e), arguments.length >= 2 ? Ac(t) : (t = 0);
  var n = f_(e),
    r = "" + e;
  return De(function (o, l) {
    var i = n.exec(o.slice(l));
    if (i) {
      if (0 <= t && t <= i.length) {
        var s = i[0],
          u = i[t];
        return qt(l + s.length, u);
      }
      var a = "valid match group (0 to " + i.length + ") in " + r;
      return ao(l, a);
    }
    return ao(l, r);
  });
}
function hd(e) {
  return De(function (t, n) {
    return qt(n, e);
  });
}
function Rm(e) {
  return De(function (t, n) {
    return ao(n, e);
  });
}
function Dc(e) {
  if (Im(e))
    return De(function (t, n) {
      var r = e._(t, n);
      return (r.index = n), (r.value = ""), r;
    });
  if (typeof e == "string") return Dc(gs(e));
  if (e instanceof RegExp) return Dc(Fr(e));
  throw new Error("not a string, regexp, or parser: " + e);
}
function h_(e) {
  return (
    Bl(e),
    De(function (t, n) {
      var r = e._(t, n),
        o = t.slice(n, r.index);
      return r.status ? ao(n, 'not "' + o + '"') : qt(n, null);
    })
  );
}
function Am(e) {
  return (
    Ul(e),
    De(function (t, n) {
      var r = Fm(t, n);
      return n < t.length && e(r)
        ? qt(n + 1, r)
        : ao(n, "a character/byte matching " + e);
    })
  );
}
function p_(e) {
  for (var t = e.split(""), n = 0; n < t.length; n++) t[n] = "'" + t[n] + "'";
  return Am(function (r) {
    return e.indexOf(r) >= 0;
  }).desc(t);
}
function m_(e, t) {
  arguments.length < 2 && ((t = e), (e = void 0));
  var n = De(function (r, o) {
    return (n._ = t()._), n._(r, o);
  });
  return e ? n.desc(e) : n;
}
function g_() {
  return Rm("fantasy-land/empty");
}
Z.concat = Z.or;
Z.empty = g_;
Z.of = hd;
Z["fantasy-land/ap"] = Z.ap;
Z["fantasy-land/chain"] = Z.chain;
Z["fantasy-land/concat"] = Z.concat;
Z["fantasy-land/empty"] = Z.empty;
Z["fantasy-land/of"] = Z.of;
Z["fantasy-land/map"] = Z.map;
const Fu = De(function (e, t) {
  return qt(t, xm(e, t));
});
De(function (e, t) {
  return t >= e.length ? ao(t, "any character/byte") : qt(t + 1, Fm(e, t));
});
De(function (e, t) {
  return qt(e.length, e.slice(t));
});
const Dm = De(function (e, t) {
    return t < e.length ? ao(t, "EOF") : qt(t, null);
  }),
  y_ = Fr(/[0-9]/).desc("a digit");
Fr(/[0-9]*/).desc("optional digits");
Fr(/[a-z]/i).desc("a letter");
Fr(/[a-z]*/i).desc("optional letters");
const v_ = Fr(/\s*/).desc("optional whitespace");
Fr(/\s+/).desc("whitespace");
const w_ = gs("\r"),
  S_ = gs(`
`),
  __ = gs(`\r
`),
  C_ = dd(__, S_, w_).desc("newline");
dd(C_, Dm);
function E_(e, t) {
  const n = t.parse(e);
  if (n.status) return Zt(n.value);
}
function k_(e, t) {
  return t.or(e);
}
function T_(e, t) {
  return t.atLeast(e);
}
function N_(e, t) {
  return t.skip(e);
}
function $m(e) {
  return e.many();
}
const M_ = m_;
function I_(e, t) {
  return t.then(e);
}
const Lm = y_;
$m(Lm);
function Oh(e, t) {
  return t.sepBy(e);
}
function Pu(e, t, n) {
  return N_(t, I_(n, e));
}
function hr(e, t) {
  return t.map(e);
}
function ys(e) {
  return S2((t, n) => t.or(n), e);
}
const x_ = Am,
  Bn = gs,
  F_ = p_,
  Rh = v_;
function P_(e) {
  return T_(1, e);
}
function $c(e, t) {
  return hr((n) => t, Bn(e));
}
const zm = ms;
function Bm(e) {
  return e.map((t) => G("", t));
}
const O_ = ms,
  R_ = Bm(P_(Lm)),
  Um = hr(Iu, R_),
  A_ = hr((e) => -e[1], zm(Bn("-"), Um)),
  D_ = hr(
    Iu,
    ys(
      N([
        Fr(new RegExp("-?(0|[1-9][0-9]*)?[.][0-9]+([eE][+-]?[0-9]+)?")),
        Fr(new RegExp("-?[1-9][0-9]*[eE][+-]?[0-9]+")),
      ])
    )
  ),
  $_ = hr((e) => new de(0, [e]), ys(N([D_, Um, A_]))),
  L_ = ys(N([$c("true", new de(2, [!0])), $c("false", new de(2, [!1]))])),
  z_ = $c("null", new de(3, [])),
  Vm = (() => {
    const e = hr(
        (l) =>
          l === "b"
            ? "\b"
            : l === "f"
            ? "\f"
            : l === "n"
            ? `
`
            : l === "r"
            ? "\r"
            : l === "t"
            ? "	"
            : l,
        F_('"\\/bfnrt')
      ),
      t = hr((l) => l[1], zm(Bn("\\"), e)),
      n = Bm(
        $m(
          k_(
            t,
            x_((l) => l !== '"' && l !== "\\")
          )
        )
      ),
      r = Bn('"'),
      o = Bn('"');
    return Pu(r, o, n);
  })(),
  B_ = Vm.map((e) => new de(1, [e]));
function sr(e) {
  return Pu(Rh, Rh, e);
}
const U_ = ys(Ct(sr, N([z_, L_, $_, B_]))),
  Ah = sr(Bn(","));
function V_() {
  return M_(() => {
    const e = sr(Bn("[")),
      t = sr(Bn("]")),
      n = hr((l) => new de(4, [N(l)]), Pu(e, t, Oh(Ah, Lc.Value))),
      r = sr(Bn("{")),
      o = sr(Bn("}"));
    return ys(
      N([
        U_,
        n,
        hr(
          (l) => new de(5, [ir(N(l), { Compare: Er })]),
          Pu(
            r,
            o,
            Oh(
              Ah,
              hr((l) => [l[0], l[2]], O_(sr(Vm), sr(Bn(":")), sr(Lc.Value)))
            )
          )
        ),
      ])
    );
  });
}
const Lc = new nt(V_),
  G_ = Lc.Value,
  j_ = sr(G_);
class Gm extends Jt {
  constructor(t, n) {
    super(), (this.bound = t | 0), (this.digits = n);
  }
}
function jm(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r === 0) return 1;
    if (r % 2 === 0) {
      (e = n * n), (t = ~~(r / 2));
      continue e;
    } else return (n * jm(n * n, ~~(r / 2))) | 0;
  }
}
const H_ = 29;
bl(H_ - 1, (e) => jm(2, e), Int32Array);
function zc(e) {
  return e.bound;
}
function Ci(e, t) {
  return e.digits[t];
}
function Bc(e, t) {
  return le(Ci(e, t), !1, 2);
}
function Ou(e, t, n) {
  e.digits[t] = n | 0;
}
function pd(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r === 0) return p(1, 0, !1);
    if (r % 2 === 0) {
      (e = Ze(n, n)), (t = ~~(r / 2));
      continue e;
    } else return Ze(n, pd(Ze(n, n), ~~(r / 2)));
  }
}
function Vl(e, t) {
  e: for (;;) {
    const n = e,
      r = t;
    if (r === 0) return 1;
    if (r % 2 === 0) {
      (e = n * n), (t = ~~(r / 2));
      continue e;
    } else return (n * Vl(n * n, ~~(r / 2))) | 0;
  }
}
function W_(e) {
  let t = 0;
  for (let n = 0; n <= e.bound - 1; n++) t = (e.digits[n] + (t << 3)) | 0;
  return t | 0;
}
function Q_(e, t) {
  return e < t ? t | 0 : e | 0;
}
const jo = 24,
  Zr = 16777216,
  K_ = 16777215,
  gr = p(16777216, 0, !1),
  ii = p(16777215, 0, !1);
function J_(e) {
  return ~~((e >>> 0) >>> jo);
}
function Z_(e) {
  return e & K_;
}
function co(e) {
  return new Gm(e, new Int32Array(e));
}
function q_(e) {
  return new Gm(e.bound, u2(e.digits));
}
function Kn(e) {
  const n =
    ((r, o) => {
      e: for (;;) {
        const l = r,
          i = o;
        if (i === -1 || l[i] !== 0) return (i + 1) | 0;
        (r = l), (o = i - 1);
        continue e;
      }
    })(e.digits, e.bound - 1) | 0;
  return (e.bound = n | 0), e;
}
const Dh = 2,
  $h = 3;
function qr(e) {
  const t = (e < 0 ? 0 : e) | 0;
  if (t < Zr) {
    const n = co(1);
    return (n.digits[0] = t | 0), Kn(n);
  } else {
    const n = co(Dh);
    for (let r = 0; r <= Dh - 1; r++) n.digits[r] = ~~(t / Vl(Zr, r)) % Zr | 0;
    return Kn(n);
  }
}
function Y_(e) {
  const t = W(e, p(0, 0, !1)) < 0 ? p(0, 0, !1) : e,
    n = co($h);
  for (let r = 0; r <= $h - 1; r++)
    n.digits[r] = ~~Wn(Cc(Ht(t, pd(gr, r)), gr)) | 0;
  return Kn(n);
}
function X_(e) {
  if (e.bound === 1) return e.digits[0] | 0;
  {
    let t = 0;
    for (let n = e.bound - 1; n >= 0; n--) t = (e.digits[n] + Zr * t) | 0;
    return t | 0;
  }
}
const Hm = qr(1),
  b_ = qr(0);
function zt(e) {
  return e.bound - 1;
}
function eC(e, t, n, r, o, l) {
  let i, s, u, a;
  e: for (;;) {
    const c = e,
      d = t,
      f = n,
      v = r,
      w = o,
      _ = l;
    if (c < d) {
      const x =
        ((i = v),
        (((s = c | 0), s < i.bound ? i.digits[s] : 0) +
          ((u = w), (a = c | 0), a < u.bound ? u.digits[a] : 0) +
          f) |
          0);
      (_.digits[c] = Z_(x) | 0),
        (e = c + 1),
        (t = d),
        (n = J_(x)),
        (r = v),
        (o = w),
        (l = _);
      continue e;
    }
    break;
  }
}
function Wm(e, t) {
  const n = (1 + Q_(e.bound, t.bound)) | 0,
    r = co(n);
  return eC(0, n, 0, e, t, r), Kn(r);
}
function Pt(e) {
  return e.bound === 0;
}
function Lh(e, t) {
  return e.bound === t.bound
    ? ((r, o, l) => {
        e: for (;;) {
          const i = r,
            s = o,
            u = l;
          if (u === -1) return !0;
          if (i[u] === s[u]) {
            (r = i), (o = s), (l = u - 1);
            continue e;
          } else return !1;
        }
      })(e.digits, t.digits, e.bound - 1)
    : !1;
}
function tC(e, t, n, r) {
  return e.bound + t < n.bound + r
    ? -1
    : e.bound + t > n.bound + t
    ? 1
    : ((l, i, s) => {
        e: for (;;) {
          const u = l,
            a = i,
            c = s;
          if (c === -1) return 0;
          {
            const d = (c < t ? 0 : u[c - t]) | 0,
              f = (c < r ? 0 : a[c - r]) | 0;
            if (d === f) {
              (l = u), (i = a), (s = c - 1);
              continue e;
            } else return d < f ? -1 : 1;
          }
        }
      })(e.digits, n.digits, e.bound + t - 1) | 0;
}
function nC(e, t) {
  return e.bound < t.bound
    ? -1
    : e.bound > t.bound
    ? 1
    : ((r, o, l) => {
        e: for (;;) {
          const i = r,
            s = o,
            u = l;
          if (u === -1) return 0;
          if (i[u] === s[u]) {
            (r = i), (o = s), (l = u - 1);
            continue e;
          } else return i[u] < s[u] ? -1 : 1;
        }
      })(e.digits, t.digits, e.bound - 1) | 0;
}
function zh(e, t) {
  return nC(e, t) === -1;
}
function rC(e, t) {
  const n = co(2),
    r = Ze(le(e, !1, 2), le(t, !1, 2));
  return Ou(n, 0, ~~Wn(Zl(r, ii))), Ou(n, 1, ~~Wn(Ht(r, gr))), Kn(n);
}
function Qm(e, t, n) {
  e: for (;;) {
    const r = e,
      o = t,
      l = n;
    if (W(o, p(0, 0, !1)) > 0) {
      const i = be(Bc(r, l), o);
      Ou(r, l, ~~Wn(Zl(i, ii))), (e = r), (t = Ht(i, gr)), (n = l + 1);
      continue e;
    }
    break;
  }
}
function Bh(e, t) {
  const n = zc(e) | 0,
    r = co(n + 1),
    o = le(t, !1, 2);
  let l = p(0, 0, !1);
  for (let i = 0; i <= n - 1; i++) {
    const s = be(be(l, Bc(r, i)), Ze(Bc(e, i), o));
    Ou(r, i, ~~Wn(Zl(s, ii))), (l = Ht(s, gr));
  }
  return Qm(r, l, n), Kn(r);
}
function oC(e, t) {
  const n = co(e.bound + t.bound),
    r = n.digits;
  for (let o = 0; o <= e.bound - 1; o++) {
    const l = le(e.digits[o], !1, 2);
    let i = p(0, 0, !1),
      s = o;
    for (let u = 0; u <= t.bound - 1; u++) {
      const a = le(t.digits[u], !1, 2),
        c = be(be(le(r[s], !1, 2), i), Ze(l, a));
      (r[s] = ~~Wn(Zl(c, ii)) | 0), (i = Ht(c, gr)), (s = (s + 1) | 0);
    }
    Qm(n, i, s);
  }
  return Kn(n);
}
function lC(e, t) {
  const n = zc(e) === 1,
    r = zc(t) === 1;
  return n && r
    ? rC(Ci(e, 0), Ci(t, 0))
    : n
    ? Bh(t, Ci(e, 0))
    : r
    ? Bh(e, Ci(t, 0))
    : oC(e, t);
}
class iC extends Jt {
  constructor(t, n, r, o, l, i, s) {
    super(),
      (this.bigL = t | 0),
      (this.twoToBigL = n | 0),
      (this.k = r | 0),
      (this.bigK = o | 0),
      (this.bigN = l | 0),
      (this.split = i | 0),
      (this.splits = s);
  }
}
function en(e, t, n, r) {
  return new iC(
    e,
    Vl(2, e),
    t,
    n,
    r,
    ~~(jo / e),
    bl(~~(jo / e), (o) => Vl(2, e * o), Int32Array)
  );
}
const sC = [
  en(1, 28, 268435456, 268435456),
  en(2, 26, 67108864, 134217728),
  en(3, 24, 16777216, 50331648),
  en(4, 22, 4194304, 16777216),
  en(5, 20, 1048576, 5242880),
  en(6, 18, 262144, 1572864),
  en(7, 16, 65536, 458752),
  en(8, 14, 16384, 131072),
  en(9, 12, 4096, 36864),
  en(10, 10, 1024, 10240),
  en(11, 8, 256, 2816),
  en(12, 6, 64, 768),
  en(13, 4, 16, 208),
];
bl(jo, (e) => Vl(2, e) - 1, Int32Array);
bl(jo, (e) => Vl(2, e), Int32Array);
bl(jo, (e) => pd(p(2, 0, !1), e), null);
~~(sC[0].bigN / jo);
function Km(e, t) {
  return lC(e, t);
}
function uC(e, t, n, r) {
  const o = zt(e) | 0,
    l = e.digits,
    i = zt(n) | 0,
    s = n.digits,
    u = le(t, !1, 2);
  let a = 0,
    c = Ze(u, le(s[0], !1, 2));
  for (; W(c, p(0, 0, !1)) > 0 || a < i; ) {
    if (a > o)
      throw new Error(
        "scaleSubInPlace: pre-condition did not apply, result would be -ve"
      );
    let d = ~~Wn(Zl(c, ii)),
      f = Ht(c, gr);
    d <= l[a + r]
      ? (l[a + r] = (l[a + r] - d) | 0)
      : ((l[a + r] = (l[a + r] + (Zr - d)) | 0), (f = be(f, p(1, 0, !1)))),
      a < i ? (c = be(f, Ze(u, le(s[a + 1], !1, 2)))) : (c = f),
      (a = (a + 1) | 0);
  }
  Kn(e);
}
function aC(e, t, n, r) {
  const o = zt(e) | 0,
    l = e.digits,
    i = zt(n) | 0,
    s = n.digits,
    u = le(t, !1, 2);
  let a = 0,
    c = Ze(u, le(s[0], !1, 2));
  for (; W(c, p(0, 0, !1)) > 0 || a < i; ) {
    if (a > o)
      throw new Error(
        "scaleSubInPlace: pre-condition did not apply, result would be -ve"
      );
    let d = ~~Wn(Zl(c, ii)),
      f = Ht(c, gr);
    d < Zr - l[a + r]
      ? (l[a + r] = (l[a + r] + d) | 0)
      : ((l[a + r] = (d - (Zr - l[a + r])) | 0), (f = be(f, p(1, 0, !1)))),
      a < i ? (c = be(f, Ze(u, le(s[a + 1], !1, 2)))) : (c = f),
      (a = (a + 1) | 0);
  }
  Kn(e);
}
function cC(e, t, n) {
  const r = zt(t) | 0,
    o = zt(e) | 0,
    l = r | 0;
  if (o < l + n) return 0;
  {
    const i = e.digits,
      s = t.digits,
      u =
        (l === 0
          ? o === n
            ? ~~(i[n] / s[0])
            : ~~Wn(
                Ht(
                  be(Ze(le(i[o], !1, 2), gr), le(i[o - 1], !1, 2)),
                  le(s[0], !1, 2)
                )
              )
          : o === l + n
          ? ~~(i[o] / (s[l] + 1))
          : ~~Wn(
              Ht(
                be(Ze(le(i[o], !1, 2), gr), le(i[o - 1], !1, 2)),
                be(le(s[l], !1, 2), p(1, 0, !1))
              )
            )) | 0;
    return u === 0 ? (tC(t, n, e, 0) !== 1 ? 1 : 0) : u | 0;
  }
}
function fC(e, t) {
  if (Pt(t)) throw new Error();
  if (zt(e) < zt(t)) return [b_, e];
  {
    const n = q_(e),
      r = co(zt(e) - zt(t) + 1 + 1);
    let o = zt(e);
    const l = zt(t) | 0;
    let i = o - l,
      s = !1;
    for (; !s; ) {
      const u = cC(n, t, i) | 0;
      u > 0
        ? (uC(n, u, t, i), aC(r, u, Hm, i))
        : ((s = u === 0 && i === 0),
          s ||
            (o === l + i
              ? (i = (i - 1) | 0)
              : ((i = (i - 1) | 0), (o = (o - 1) | 0))));
    }
    return [Kn(r), Kn(n)];
  }
}
qr(2);
function Uh(e) {
  return ((n, r, o) => {
    e: for (;;) {
      const l = n,
        i = r,
        s = o;
      if (s === e.bound) return l;
      (n = l + i * e.digits[s]), (r = i * Zr), (o = s + 1);
      continue e;
    }
  })(0, 1, 0);
}
function Uc(e) {
  return qr(e);
}
function bs(e) {
  return Y_(e);
}
function Vh(e) {
  const t = zt(e) | 0,
    n = (l, i, s) => {
      e: for (;;) {
        const u = l,
          a = i,
          c = s;
        if (zt(c) > t) return st([a, c], u);
        (l = st([a, c], u)), (i = a + 1), (s = Km(c, c));
        continue e;
      }
    },
    r = (l, i, s, u) => {
      e: for (;;) {
        const a = l,
          c = i,
          d = s,
          f = u;
        if (U(f)) {
          const v = X_(d) | 0;
          return a && v === 0 ? c : st(kc(v), c);
        } else {
          const v = k(f),
            w = fC(d, P(f)[1]),
            _ = w[1],
            x = w[0];
          if (a && Pt(x)) {
            (l = a), (i = c), (s = _), (u = v);
            continue e;
          } else {
            (l = a), (i = r(!1, c, _, v)), (s = x), (u = v);
            continue e;
          }
        }
      }
    },
    o = r(!0, qe(), e, n(qe(), 0, qr(10)));
  return U(o) ? "0" : G("", Br(o));
}
function Ga(e) {
  const t = e.length | 0;
  if (Vp(e)) throw new Error("empty string\\nParameter name: str");
  const n = qr(10);
  return ((o, l) => {
    e: for (;;) {
      const i = o,
        s = l;
      if (s === t) return i;
      {
        const a = (e[s].charCodeAt(0) - 48) | 0;
        if (0 <= a && a <= 9) {
          (o = Wm(Km(n, i), qr(a))), (l = s + 1);
          continue e;
        } else throw new Error();
      }
    }
  })(qr(0), 0);
}
function dC(e) {
  return e.bound <= 1;
}
function Gh(e) {
  const t = e,
    n = 0;
  return n < t.bound ? t.digits[n] | 0 : 0;
}
class Ot {
  constructor(t, n) {
    (this.signInt = t | 0), (this.v = n);
  }
  toString() {
    const t = this,
      n = fo(t) | 0;
    if (n === -1) return Pt(ye(t)) ? "0" : "-" + Vh(ye(t));
    if (n === 0) return "0";
    if (n === 1) return Vh(ye(t));
    throw new Error("signs should be +/- 1 or 0");
  }
  Equals(t) {
    const n = this;
    return t instanceof Ot && Jm(n, t);
  }
  GetHashCode() {
    return gC(this) | 0;
  }
  toJSON() {
    return dn(this);
  }
  CompareTo(t) {
    const n = this;
    if (t instanceof Ot) return mC(n, t) | 0;
    throw new Error("the objects are not comparable\\nParameter name: obj");
  }
}
function Yr(e, t) {
  return new Ot(e, t);
}
(Ot.smallLim = 4096),
  (Ot.smallPosTab = bl(Ot.smallLim, Uc, null)),
  (Ot.one = eu(1)),
  (Ot.two = eu(2)),
  (Ot.zero = eu(0));
function Xr(e) {
  return dC(e) && Gh(e) < Ot.smallLim ? Ot.smallPosTab[Gh(e)] : e;
}
function jh(e) {
  return Yr(1, Xr(e));
}
function hC(e) {
  return Yr(-1, Xr(e));
}
function fo(e) {
  return e.signInt;
}
function ye(e) {
  return e.v;
}
function Jm(e, t) {
  const n = fo(e) | 0,
    r = fo(t) | 0;
  let o;
  switch (
    (n === -1
      ? r === -1
        ? (o = 1)
        : r === 0
        ? (o = 8)
        : r === 1
        ? (o = 3)
        : (o = 9)
      : n === 0
      ? r === -1
        ? (o = 6)
        : r === 0
        ? (o = 4)
        : r === 1
        ? (o = 5)
        : (o = 9)
      : n === 1
      ? r === -1
        ? (o = 2)
        : r === 0
        ? (o = 7)
        : r === 1
        ? (o = 0)
        : (o = 9)
      : (o = 9),
    o)
  ) {
    case 0:
      return Lh(ye(e), ye(t));
    case 1:
      return Lh(ye(e), ye(t));
    case 2:
      return Pt(ye(e)) ? Pt(ye(t)) : !1;
    case 3:
      return Pt(ye(e)) ? Pt(ye(t)) : !1;
    case 4:
      return !0;
    case 5:
      return Pt(ye(t));
    case 6:
      return Pt(ye(t));
    case 7:
      return Pt(ye(e));
    case 8:
      return Pt(ye(e));
    case 9:
      throw new Error("signs should be +/- 1 or 0\\nParameter name: x");
  }
}
function pC(e, t) {
  const n = fo(e) | 0,
    r = fo(t) | 0;
  let o;
  switch (
    (n === -1
      ? r === -1
        ? (o = 1)
        : r === 0
        ? (o = 8)
        : r === 1
        ? (o = 3)
        : (o = 9)
      : n === 0
      ? r === -1
        ? (o = 6)
        : r === 0
        ? (o = 4)
        : r === 1
        ? (o = 5)
        : (o = 9)
      : n === 1
      ? r === -1
        ? (o = 2)
        : r === 0
        ? (o = 7)
        : r === 1
        ? (o = 0)
        : (o = 9)
      : (o = 9),
    o)
  ) {
    case 0:
      return zh(ye(e), ye(t));
    case 1:
      return zh(ye(t), ye(e));
    case 2:
      return !1;
    case 3:
      return Pt(ye(e)) ? !Pt(ye(t)) : !0;
    case 4:
      return !1;
    case 5:
      return !Pt(ye(t));
    case 6:
      return !1;
    case 7:
      return !1;
    case 8:
      return !Pt(ye(e));
    case 9:
      throw new Error("signs should be +/- 1 or 0\\nParameter name: x");
  }
}
function mC(e, t) {
  return pC(e, t) ? -1 : Jm(e, t) ? 0 : 1;
}
function gC(e) {
  return fo(e) === 0 ? 1 : (fo(e) + W_(ye(e))) | 0;
}
function eu(e) {
  return e >= 0
    ? Yr(1, Xr(Uc(e)))
    : e === -2147483648
    ? Yr(-1, Xr(bs(Cp(le(e, !1, 2)))))
    : Yr(-1, Xr(Uc(Iv(e))));
}
function yC(e) {
  return W(e, p(0, 0, !1)) >= 0
    ? Yr(1, Xr(bs(e)))
    : zn(e, p(0, 2147483648, !1))
    ? Yr(-1, Xr(Wm(bs(p(4294967295, 2147483647, !1)), Hm)))
    : Yr(-1, Xr(bs(Cp(e))));
}
function Zm() {
  return Ot.one;
}
function vC() {
  return Ot.two;
}
function qm() {
  return Ot.zero;
}
function wC(e) {
  const t = fo(e) | 0;
  if (t === -1) return -Uh(ye(e));
  if (t === 0) return 0;
  if (t === 1) return Uh(ye(e));
  throw new Error("signs should be +/- 1 or 0\\nParameter name: x");
}
function SC(e) {
  return new Qn(wC(e));
}
function _C(e) {
  if (e == null) throw new Error("text");
  const t = e.trim(),
    n = t.length | 0;
  if (n === 0) throw new Error();
  const r = t[0];
  if (r === "+") {
    if (n === 1) throw new Error();
    return jh(Ga(t.slice(1, n - 1 + 1)));
  } else if (r === "-") {
    if (n === 1) throw new Error();
    return hC(Ga(t.slice(1, n - 1 + 1)));
  } else return jh(Ga(t));
}
function CC(e) {
  return _C(e);
}
qm();
Zm();
vC();
function EC(e) {
  return e > 2147483647 ? yC(le(e, !1, 6)) : eu(e);
}
function Hh(e) {
  return SC(e);
}
function kC(e) {
  return dn(e);
}
qm();
Zm();
function TC(e) {
  if (typeof e == "string") return e;
}
function NC(e) {
  if (typeof e == "boolean") return e;
}
function MC(e) {
  if (typeof e == "number") return e;
}
function IC(e) {
  if (typeof e == "object") return Zt(e);
}
function xC(e) {
  if (e == null) return Zt(e);
}
function FC(e) {
  if (Array.isArray(e)) return e;
}
function PC(e) {
  return e instanceof Date ? "offset" in e : !1;
}
function OC(e) {
  return typeof e == "object";
}
function Wh(e) {
  return e != null && OC(e) && "signInt" in e && "v" in e && "digits" in e.v
    ? "bound" in e.v
    : !1;
}
function Ym(e) {
  return E_(e, j_);
}
function RC(e) {
  const t = Ym(e);
  return t ?? Fe(H("Could not parse the JSON input: %s"))(e);
}
function cl(e) {
  if (e.tag === 2) return e.fields[0] ? "true" : "false";
  if (e.tag === 0) return e.fields[0].toString();
  if (e.tag === 1) return ke(H('"%s"'))(e.fields[0]);
  if (e.tag === 4) {
    const t = G(",", Ct(cl, e.fields[0]));
    return ke(H("[%s]"))(t);
  } else if (e.tag === 5) {
    const t = G(
      ",",
      Ct((r) => {
        const o = cl(r[1]);
        return ke(H('"%s":%s'))(r[0])(o);
      }, Ur(e.fields[0]))
    );
    return ke(H("{%s}"))(t);
  } else return "null";
}
function Vc(e) {
  switch (e.tag) {
    case 2:
      return e.fields[0];
    case 0:
      return e.fields[0];
    case 1:
      return e.fields[0];
    case 4: {
      const t = [],
        n = Se(e.fields[0]);
      try {
        for (; n["System.Collections.IEnumerator.MoveNext"](); ) {
          const r = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
          t.push(Vc(r));
        }
      } finally {
        ce(n);
      }
      return t;
    }
    case 5: {
      const t = {},
        n = Se(Ur(e.fields[0]));
      try {
        for (; n["System.Collections.IEnumerator.MoveNext"](); ) {
          const r = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
          t[r[0]] = Vc(r[1]);
        }
      } finally {
        ce(n);
      }
      return t;
    }
    default:
      return Wt();
  }
}
function Qh(e) {
  return e == null
    ? JSON.stringify(Wt())
    : JSON.stringify(
        e,
        (t, n) =>
          Wh(n)
            ? Nc(Hh(n))
            : n instanceof Date
            ? $l(n, "o")
            : typeof n == "string"
            ? n
            : bv(n)
            ? Array.isArray(n)
              ? n
              : Array.from(n)
            : Wh(n)
            ? Nc(Hh(n))
            : PC(n)
            ? $l(n, "O")
            : n,
        Zt(0)
      );
}
function Gc(e) {
  const t = TC(e);
  if (t != null) {
    const n = t;
    return new de(1, [n]);
  } else {
    const n = MC(e);
    if (n != null) {
      const r = n;
      return new de(0, [r]);
    } else {
      const r = NC(e);
      if (r != null) {
        const o = r;
        return new de(2, [o]);
      } else {
        if (xC(e) != null) return new de(3, []);
        {
          const o = FC(e);
          if (o != null) {
            const l = o;
            return new de(4, [N(Ge(Gc, l, null))]);
          } else {
            const l = IC(e);
            if (l != null) {
              const i = Re(l);
              return new de(5, [
                ir(Nn(b(() => Me((s) => [s, Gc(i[s])], Object.keys(i)))), {
                  Compare: Er,
                }),
              ]);
            } else return new de(3, []);
          }
        }
      }
    }
  }
}
function ja(e) {
  return Gc(JSON.parse(e));
}
function Xm(e, t) {
  AC(t);
  const n = new Date(e);
  return (n.offset = t ?? new Date().getTimezoneOffset() * -6e4), n;
}
function AC(e) {
  if (e != null && e !== 0) {
    if (e % 6e4 !== 0)
      throw new Error("Offset must be specified in whole minutes.");
    if (Math.abs(e / 36e5) > 14)
      throw new Error("Offset must be within plus or minus 14 hours.");
  }
}
function DC(e) {
  const [t, n] = Dp(e),
    r = n == null ? t.getTimezoneOffset() * -6e4 : n === "Z" ? 0 : n * 6e4;
  return Xm(t.getTime(), r);
}
function $C(e) {
  return Xf(e, 1);
}
function LC(e) {
  return Wn(Ht(Qw(e), 864e9));
}
function Kh(e) {
  const t = Ze(vu(864e9), e);
  return $C(Yv(t));
}
function zC(e) {
  return Ze(vu(e), 1e4);
}
function BC(e = 0, t = 0, n = 0, r = 0) {
  if (e < 0 || t < 0 || n < 0 || r < 0)
    throw new Error("The parameters describe an unrepresentable TimeOnly.");
  return arguments.length === 1
    ? UC(arguments[0])
    : e * 36e5 + t * 6e4 + n * 1e3 + r;
}
function UC(e) {
  return kp(Ht(e, 1e4));
}
const VC =
    /^[\(\{]{0,2}[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[\)\}]{0,2}$/,
  Jh = /^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/,
  GC =
    /^\{0x[0-9a-f]{8},(0x[0-9a-f]{4},){2}\{(0x[0-9a-f]{2},){7}0x[0-9a-f]{2}\}\}$/;
function jC(e) {
  function t(r) {
    return r.replace(Jh, "$1-$2-$3-$4-$5");
  }
  const n = e.trim().toLowerCase();
  if (VC.test(n)) return t2(n, "{", "}", "(", ")");
  if (Jh.test(n)) return t(n);
  if (GC.test(n)) return t(n.replace(/[\{\},]|0x/g, ""));
  throw new Error(
    "Guid should contain 32 digits with 4 dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  );
}
const jc = !0;
function Zh(e) {
  const t = new Uint8Array(4);
  return (
    new DataView(t.buffer, t.byteOffset, t.byteLength).setInt32(0, e, jc), t
  );
}
function HC(e, t) {
  const n = ArrayBuffer.isView(e) ? e : Uint8Array.from(e),
    r = new DataView(n.buffer, n.byteOffset, n.byteLength),
    o = r.getInt32(t + 0, jc),
    l = r.getInt32(t + 4, jc);
  return p(o, l, !1);
}
class WC extends Jt {
  constructor(t, n, r) {
    super(),
      (this.FieldName = t),
      (this.FieldType = n),
      (this.PropertyInfo = r);
  }
}
class QC extends Jt {
  constructor(t, n, r) {
    super(), (this.CaseName = t), (this.CaseTypes = n), (this.Info = r);
  }
}
class J extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return [
      "Unit",
      "Char",
      "String",
      "UInt16",
      "UInt32",
      "UInt64",
      "Int32",
      "Bool",
      "Float32",
      "Float",
      "Decimal",
      "Short",
      "Long",
      "Byte",
      "SByte",
      "DateTime",
      "DateTimeOffset",
      "DateOnly",
      "TimeOnly",
      "BigInt",
      "TimeSpan",
      "Guid",
      "Uri",
      "Object",
      "Any",
      "Async",
      "Promise",
      "Option",
      "List",
      "Set",
      "Array",
      "Seq",
      "Tuple",
      "Map",
      "Dictionary",
      "ResizeArray",
      "HashSet",
      "Func",
      "Enum",
      "Record",
      "Union",
    ];
  }
}
class To {
  constructor(t, n) {
    const r = new so(Wt());
    (this.comparer = n),
      (r.contents = this),
      (this.hashMap = new Map([])),
      (this["init@9"] = 1);
    const o = Se(t);
    try {
      for (; o["System.Collections.IEnumerator.MoveNext"](); ) {
        const l = o["System.Collections.Generic.IEnumerator`1.get_Current"]();
        Ha(r.contents, l[0], l[1]);
      }
    } finally {
      ce(o);
    }
  }
  get [Symbol.toStringTag]() {
    return "Dictionary";
  }
  toJSON() {
    const t = this;
    return Array.from(t);
  }
  "System.Collections.IEnumerable.GetEnumerator"() {
    return Se(this);
  }
  GetEnumerator() {
    return Se(aa(this.hashMap.values()));
  }
  [Symbol.iterator]() {
    return ql(this.GetEnumerator());
  }
  "System.Collections.Generic.ICollection`1.Add2B595"(t) {
    Ha(this, t[0], t[1]);
  }
  "System.Collections.Generic.ICollection`1.Clear"() {
    qh(this);
  }
  "System.Collections.Generic.ICollection`1.Contains2B595"(t) {
    const r = tu(this, t[0]);
    let o;
    switch ((r != null && Ee(r[1], t[1]) ? (o = 0) : (o = 1), o)) {
      case 0:
        return !0;
      case 1:
        return !1;
    }
  }
  "System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(t, n) {
    Jp((o, l) => {
      t[n + o] = l;
    }, this);
  }
  "System.Collections.Generic.ICollection`1.get_Count"() {
    return Yh(this) | 0;
  }
  "System.Collections.Generic.ICollection`1.get_IsReadOnly"() {
    return !1;
  }
  "System.Collections.Generic.ICollection`1.Remove2B595"(t) {
    const n = this,
      r = tu(n, t[0]);
    return r != null ? (Ee(r[1], t[1]) && Wa(n, t[0]), !0) : !1;
  }
  "System.Collections.Generic.IDictionary`2.Add5BDDA1"(t, n) {
    Ha(this, t, n);
  }
  "System.Collections.Generic.IDictionary`2.ContainsKey2B595"(t) {
    return e1(this, t);
  }
  "System.Collections.Generic.IDictionary`2.get_Item2B595"(t) {
    return Xh(this, t);
  }
  "System.Collections.Generic.IDictionary`2.set_Item5BDDA1"(t, n) {
    bh(this, t, n);
  }
  "System.Collections.Generic.IDictionary`2.get_Keys"() {
    const t = this;
    return zl(b(() => Me((n) => n[0], t)));
  }
  "System.Collections.Generic.IDictionary`2.Remove2B595"(t) {
    return Wa(this, t);
  }
  "System.Collections.Generic.IDictionary`2.TryGetValue6DC89625"(t, n) {
    const o = tu(this, t);
    if (o != null) {
      const l = o;
      return (n.contents = l[1]), !0;
    } else return !1;
  }
  "System.Collections.Generic.IDictionary`2.get_Values"() {
    const t = this;
    return zl(b(() => Me((n) => n[1], t)));
  }
  get size() {
    return Yh(this) | 0;
  }
  clear() {
    qh(this);
  }
  delete(t) {
    return Wa(this, t);
  }
  entries() {
    return Me((n) => [n[0], n[1]], this);
  }
  get(t) {
    return Xh(this, t);
  }
  has(t) {
    return e1(this, t);
  }
  keys() {
    return Me((n) => n[0], this);
  }
  set(t, n) {
    const r = this;
    return bh(r, t, n), r;
  }
  values() {
    return Me((n) => n[1], this);
  }
  forEach(t, n) {
    const r = this;
    ca((o) => {
      cr(2, t, [o[1]])(o[0])(r);
    }, r);
  }
}
function vs(e, t) {
  const n = e.comparer.GetHashCode(t) | 0;
  let r,
    o = Wt();
  return (
    (r = [
      rd(
        e.hashMap,
        n,
        new so(
          () => o,
          (l) => {
            o = l;
          }
        )
      ),
      o,
    ]),
    r[0]
      ? [!0, n, r[1].findIndex((l) => e.comparer.Equals(t, l[0]))]
      : [!1, n, -1]
  );
}
function tu(e, t) {
  const n = vs(e, t);
  let r;
  switch ((n[0] && n[2] > -1 ? (r = 0) : (r = 1), r)) {
    case 0:
      return Vo(e.hashMap, n[1])[n[2]];
    case 1:
      return;
  }
}
function qh(e) {
  e.hashMap.clear();
}
function Yh(e) {
  let t = 0,
    n = Se(e.hashMap.values());
  try {
    for (; n["System.Collections.IEnumerator.MoveNext"](); ) {
      const r = n["System.Collections.Generic.IEnumerator`1.get_Current"]();
      t = (t + r.length) | 0;
    }
  } finally {
    ce(n);
  }
  return t | 0;
}
function Xh(e, t) {
  const n = tu(e, t);
  if (n != null) return n[1];
  throw new Error("The item was not found in collection");
}
function bh(e, t, n) {
  const r = vs(e, t);
  r[0]
    ? r[2] > -1
      ? (Vo(e.hashMap, r[1])[r[2]] = [t, n])
      : Vo(e.hashMap, r[1]).push([t, n])
    : e.hashMap.set(r[1], [[t, n]]);
}
function Ha(e, t, n) {
  const r = vs(e, t);
  if (r[0]) {
    if (r[2] > -1)
      throw new Error(
        Up("An item with the same key has already been added. Key: {0}", t)
      );
    Vo(e.hashMap, r[1]).push([t, n]);
  } else e.hashMap.set(r[1], [[t, n]]);
}
function e1(e, t) {
  const n = vs(e, t);
  let r;
  switch ((n[0] && n[2] > -1 ? (r = 0) : (r = 1), r)) {
    case 0:
      return !0;
    case 1:
      return !1;
  }
}
function Wa(e, t) {
  const n = vs(e, t);
  let r;
  switch ((n[0] && n[2] > -1 ? (r = 0) : (r = 1), r)) {
    case 0:
      return Vo(e.hashMap, n[1]).splice(n[2], 1), !0;
    case 1:
      return !1;
  }
}
function KC(e) {
  const t = et(e);
  let n;
  switch (
    (t === "System.String"
      ? (n = 0)
      : t === "System.Char"
      ? (n = 1)
      : t === "System.Int16"
      ? (n = 2)
      : t === "System.Int32"
      ? (n = 3)
      : t === "Microsoft.FSharp.Core.int64`1" || t === "System.Int64"
      ? (n = 4)
      : t === "System.UInt16"
      ? (n = 5)
      : t === "System.UInt32"
      ? (n = 6)
      : t === "System.UInt64"
      ? (n = 7)
      : t === "System.DateTime"
      ? (n = 8)
      : t === "System.DateOnly"
      ? (n = 9)
      : t === "System.TimeOnly"
      ? (n = 10)
      : t === "System.TimeSpan"
      ? (n = 11)
      : t === "System.DateTimeOffset"
      ? (n = 12)
      : t === "System.Boolean"
      ? (n = 13)
      : t === "System.Single"
      ? (n = 14)
      : t === "System.Double"
      ? (n = 15)
      : t === "Microsoft.FSharp.Core.decimal`1" || t === "System.Decimal"
      ? (n = 16)
      : t === "System.Numerics.BigInteger"
      ? (n = 17)
      : t === "Microsoft.FSharp.Core.Unit"
      ? (n = 18)
      : t === "System.Guid"
      ? (n = 19)
      : t === "System.Byte"
      ? (n = 20)
      : t === "System.SByte"
      ? (n = 21)
      : t === "System.Object"
      ? (n = 22)
      : t === "System.Uri"
      ? (n = 23)
      : (n = 24),
    n)
  ) {
    case 0:
      return new J(2, []);
    case 1:
      return new J(1, []);
    case 2:
      return new J(11, []);
    case 3:
      return new J(6, []);
    case 4:
      return new J(12, []);
    case 5:
      return new J(3, []);
    case 6:
      return new J(4, []);
    case 7:
      return new J(5, []);
    case 8:
      return new J(15, []);
    case 9:
      return new J(17, []);
    case 10:
      return new J(18, []);
    case 11:
      return new J(20, []);
    case 12:
      return new J(16, []);
    case 13:
      return new J(7, []);
    case 14:
      return new J(8, []);
    case 15:
      return new J(9, []);
    case 16:
      return new J(10, []);
    case 17:
      return new J(19, []);
    case 18:
      return new J(0, []);
    case 19:
      return new J(21, []);
    case 20:
      return new J(13, []);
    case 21:
      return new J(14, []);
    case 22:
      return new J(23, []);
    case 23:
      return new J(22, []);
    case 24:
      return;
  }
}
function JC(e) {
  if (Lw(e)) return Ge((t) => [t, rt(t), t[1]], Cu(e), null);
}
function ZC(e) {
  if (et(e).indexOf("Microsoft.FSharp.Collections.FSharpSet`1") === 0)
    return Qt(e)[0];
}
function qC(e) {
  if (et(e).indexOf("System.Nullable`1") === 0) return Qt(e)[0];
}
function YC(e) {
  if ($w(e))
    return Ge((t) => [rt(t), t, Ge((n) => n[1], Bw(t), null)], Op(e), null);
}
function XC(e) {
  if (et(e).indexOf("Microsoft.FSharp.Collections.FSharpMap`2") === 0) {
    const t = Qt(e);
    return [t[0], t[1]];
  } else return;
}
function bC(e) {
  if (et(e).indexOf("Microsoft.FSharp.Collections.FSharpList`1") === 0)
    return Qt(e)[0];
}
function Hc(e) {
  return zl(
    b(() => {
      if (qf(e)) {
        const t = Dw(e);
        return dt(
          Hc(t[0]),
          b(() => Hc(t[1]))
        );
      } else return ve(e);
    })
  );
}
function e3(e) {
  if (qf(e)) return Hc(e);
}
function t3(e) {
  if (Pw(e)) return sa(e);
}
function n3(e) {
  if (et(e).indexOf("Microsoft.FSharp.Core.FSharpOption`1") === 0)
    return Qt(e)[0];
}
function r3(e) {
  if (Rp(e)) return Aw(e);
}
function o3(e) {
  if (et(e).indexOf("System.Collections.Generic.IEnumerable`1") === 0)
    return Qt(e)[0];
}
function l3(e) {
  if (et(e).indexOf("System.Collections.Generic.Dictionary") === 0) {
    const t = Qt(e);
    return [t[0], t[1]];
  } else return;
}
function i3(e) {
  if (et(e).indexOf("System.Collections.Generic.List") === 0) return Qt(e)[0];
}
function s3(e) {
  if (et(e).indexOf("System.Collections.Generic.HashSet") === 0)
    return Qt(e)[0];
}
function u3(e) {
  if (et(e).indexOf("Microsoft.FSharp.Control.FSharpAsync`1") === 0)
    return Qt(e)[0];
}
function a3(e) {
  if (et(e).indexOf("Fable.Core.JS.Promise`1") === 0) return Qt(e)[0];
}
function at(e, t) {
  return e.Value;
}
function c3(e) {
  if (Ow(e)) return Rw(e);
}
function f3(e) {
  let t, n, r, o, l, i, s, u, a, c, d, f, v, w, _, x;
  const m = KC(e);
  if (m != null) return m;
  {
    const h = e3(e);
    if (h != null) {
      const y = h;
      return new J(37, [((t = new nt(() => Ge(We, y, null))), () => at(t))]);
    } else {
      const y = JC(e);
      if (y != null) {
        const S = y,
          E = new nt(() => [
            zl(b(() => Hi((M) => ve(new WC(M[1], We(M[2]), M[0])), S))),
            e,
          ]);
        return new J(39, [() => at(E)]);
      } else {
        const S = YC(e);
        if (S != null) {
          const E = S,
            M = new nt(() => [
              zl(
                b(() =>
                  Hi((F) => ve(new QC(F[0], Ge(We, F[2], null), F[1])), E)
                )
              ),
              e,
            ]);
          return new J(40, [() => at(M)]);
        } else {
          const E = c3(e);
          if (E != null) {
            const M = E;
            return new J(38, [((n = new nt(() => [We(M), e])), () => at(n))]);
          } else {
            const M = bC(e);
            if (M != null) {
              const F = M;
              return new J(28, [((r = new nt(() => We(F))), () => at(r))]);
            } else {
              const F = i3(e);
              if (F != null) {
                const A = F;
                return new J(35, [((o = new nt(() => We(A))), () => at(o))]);
              } else {
                const A = s3(e);
                if (A != null) {
                  const fe = A;
                  return new J(36, [((l = new nt(() => We(fe))), () => at(l))]);
                } else {
                  const fe = t3(e);
                  if (fe != null) {
                    const q = fe;
                    return new J(30, [
                      ((i = new nt(() => We(q))), () => at(i)),
                    ]);
                  } else {
                    const q = r3(e);
                    if (q != null) {
                      const tt = q;
                      return new J(32, [
                        ((s = new nt(() => Ge(We, tt, null))), () => at(s)),
                      ]);
                    } else {
                      const tt = n3(e);
                      if (tt != null) {
                        const Yt = tt;
                        return new J(27, [
                          ((u = new nt(() => We(Yt))), () => at(u)),
                        ]);
                      } else {
                        const Yt = qC(e);
                        if (Yt != null) {
                          const Xt = Yt;
                          return new J(27, [
                            ((a = new nt(() => We(Xt))), () => at(a)),
                          ]);
                        } else {
                          const Xt = ZC(e);
                          if (Xt != null) {
                            const Pn = Xt;
                            return new J(29, [
                              ((c = new nt(() => We(Pn))), () => at(c)),
                            ]);
                          } else {
                            const Pn = XC(e);
                            if (Pn != null) {
                              const Xn = Pn[0],
                                bt = Pn[1];
                              return new J(33, [
                                ((d = new nt(() => [We(Xn), We(bt)])),
                                () => at(d)),
                              ]);
                            } else {
                              const Xn = l3(e);
                              if (Xn != null) {
                                const bt = Xn[0],
                                  $t = Xn[1];
                                return new J(34, [
                                  ((f = new nt(() => [We(bt), We($t), $t])),
                                  () => at(f)),
                                ]);
                              } else {
                                const bt = o3(e);
                                if (bt != null) {
                                  const $t = bt;
                                  return new J(31, [
                                    ((v = new nt(() => We($t))), () => at(v)),
                                  ]);
                                } else {
                                  const $t = u3(e);
                                  if ($t != null) {
                                    const I = $t;
                                    return new J(25, [
                                      ((w = new nt(() => We(I))), () => at(w)),
                                    ]);
                                  } else {
                                    const I = a3(e);
                                    if (I != null) {
                                      const Q = I;
                                      return new J(26, [
                                        ((_ = new nt(() => We(Q))),
                                        () => at(_)),
                                      ]);
                                    } else
                                      return new J(24, [
                                        ((x = new nt(() => e)), () => at(x)),
                                      ]);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const t1 = new To([], { Equals: _u, GetHashCode: Et });
function We(e) {
  let t,
    n = Wt();
  if (
    ((t = [
      rd(
        t1,
        e,
        new so(
          () => n,
          (r) => {
            n = r;
          }
        )
      ),
      n,
    ]),
    t[0])
  )
    return t[1];
  {
    const r = f3(e);
    return (
      !Vp(et(e)) && !Mc(et(e), "`1[]") && !Mc(et(e), "`2[]") && t1.set(e, r), r
    );
  }
}
function Ei(e) {
  switch (e.tag) {
    case 0:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 21:
    case 27:
      return !0;
    default:
      return !1;
  }
}
function ul(e) {
  return e.tag === 40
    ? e.fields[0]()[0].every((n) => n.CaseTypes.length === 0)
    : !1;
}
function d3(e) {
  var t =
      /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    n = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    };
  return (
    (t.lastIndex = 0),
    t.test(e)
      ? '"' +
        e.replace(t, function (r) {
          var o = n[r];
          return typeof o == "string"
            ? o
            : "\\u" + ("0000" + r.charCodeAt(0).toString(16)).slice(-4);
        }) +
        '"'
      : '"' + e + '"'
  );
}
const h3 = JS,
  p3 = h3();
function Ms(e) {
  return e !== void 0;
}
function m3() {
  const t = JSON.parse(
    JSON.stringify(
      ir(
        N([
          [1, 1],
          [2, 2],
        ]),
        { Compare: Er }
      )
    )
  ).tree;
  return Ms(t) && Ms(t.k) && Ms(t.v) ? Ms(t.h) : !1;
}
m3();
class Qa extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["MapEmpty", "MapOne", "MapNode"];
  }
}
function Wc(e) {
  switch (e.tag) {
    case 1:
      return ie([e.fields[0], e.fields[1]]);
    case 2:
      return Nn(
        b(() =>
          dt(
            Wc(e.fields[2]),
            b(() =>
              dt(
                Wc(e.fields[3]),
                b(() => ve([e.fields[0], e.fields[1]]))
              )
            )
          )
        )
      );
    default:
      return qe();
  }
}
function g3(e) {
  if (e.tag !== 4) return e;
}
function y3(e) {
  let t;
  switch ((e.tag === 1 && e.fields[0] === "MapEmpty" ? (t = 0) : (t = 1), t)) {
    case 0:
      return e;
    case 1:
      return;
  }
}
function bm(e) {
  switch (e.tag) {
    case 0:
      return e.fields[0].toString();
    case 1:
      return e.fields[0];
    default:
      return;
  }
}
function v3(e) {
  let t, n, r;
  if (e.tag === 4)
    if (U(e.fields[0])) t = 1;
    else if (P(e.fields[0]).tag === 1)
      if (P(e.fields[0]).fields[0] === "MapOne")
        if (U(k(e.fields[0]))) t = 1;
        else {
          const o = bm(P(k(e.fields[0])));
          o != null
            ? U(k(k(e.fields[0])))
              ? (t = 1)
              : U(k(k(k(e.fields[0]))))
              ? ((t = 0), (n = o), (r = P(k(k(e.fields[0])))))
              : (t = 1)
            : (t = 1);
        }
      else t = 1;
    else t = 1;
  else t = 1;
  switch (t) {
    case 0:
      return [n, r];
    case 1:
      return;
  }
}
function w3(e) {
  let t, n, r, o, l;
  if (e.tag === 4)
    if (U(e.fields[0])) t = 1;
    else if (P(e.fields[0]).tag === 1)
      if (P(e.fields[0]).fields[0] === "MapNode")
        if (U(k(e.fields[0]))) t = 1;
        else {
          const i = bm(P(k(e.fields[0])));
          i != null
            ? U(k(k(e.fields[0]))) ||
              U(k(k(k(e.fields[0])))) ||
              U(k(k(k(k(e.fields[0]))))) ||
              U(k(k(k(k(k(e.fields[0]))))))
              ? (t = 1)
              : P(k(k(k(k(k(e.fields[0])))))).tag === 0 &&
                U(k(k(k(k(k(k(e.fields[0])))))))
              ? ((t = 0),
                (n = i),
                (r = P(k(k(k(e.fields[0]))))),
                (o = P(k(k(k(k(e.fields[0])))))),
                (l = P(k(k(e.fields[0])))))
              : (t = 1)
            : (t = 1);
        }
      else t = 1;
    else t = 1;
  else t = 1;
  switch (t) {
    case 0:
      return [n, l, r, o];
    case 1:
      return;
  }
}
function Qc(e) {
  if (y3(e) != null) return new Qa(0, []);
  {
    const t = v3(e);
    if (t != null) {
      const n = t[0],
        r = t[1];
      return new Qa(1, [n, r]);
    } else {
      const n = w3(e);
      if (n != null) {
        const r = n[0],
          o = n[2],
          l = n[3],
          i = n[1],
          s = Qc(o),
          u = Qc(l);
        let a, c, d;
        switch (
          (s != null && u != null ? ((a = 0), (c = s), (d = u)) : (a = 1), a)
        ) {
          case 0:
            return new Qa(2, [r, i, c, d]);
          case 1:
            return;
        }
      } else return;
    }
  }
}
function Kc(e) {
  return Nn(
    b(() => {
      let t, n, r, o;
      return dt(
        ((t = Tt("k", e)),
        (n = Tt("v", e)),
        t != null && t.tag === 1 && n != null
          ? ((r = t.fields[0]), (o = n), ve([r, o]))
          : Lt()),
        b(() => {
          let l, i;
          return dt(
            ((l = Tt("left", e)),
            l != null && l.tag === 5 ? ((i = l.fields[0]), Kc(i)) : Lt()),
            b(() => {
              const s = Tt("right", e);
              let u, a;
              switch (
                (s != null && s.tag === 5
                  ? ((u = 0), (a = s.fields[0]))
                  : (u = 1),
                u)
              ) {
                case 0:
                  return Kc(a);
                case 1:
                  return Lt();
              }
            })
          );
        })
      );
    })
  );
}
function eg(e) {
  return Nn(
    b(() => {
      let t;
      return dt(
        ((t = Tt("head", e)), t == null ? Lt() : ve(t)),
        b(() => {
          const n = Tt("tail", e);
          let r, o;
          switch (
            (n != null && n.tag === 5 ? ((r = 0), (o = n.fields[0])) : (r = 1),
            r)
          ) {
            case 0:
              return eg(o);
            case 1:
              return Lt();
          }
        })
      );
    })
  );
}
function n1(e) {
  switch (e.tag) {
    case 30:
      return !0;
    case 28:
      return !0;
    case 31:
      return !0;
    case 32:
      return !0;
    case 29:
      return !0;
    case 35:
      return !0;
    case 36:
      return !0;
    default:
      return !1;
  }
}
function S3(e) {
  return e.tag === 39;
}
function _3(e) {
  return e.tag === 40
    ? U2(
        (t) => (t.CaseTypes.length === 1 ? S3(t.CaseTypes[0]) : !1),
        e.fields[0]()[0]
      )
    : !1;
}
function C3(e) {
  return e.tag === 27;
}
function Fi(e) {
  return e.indexOf('"') === 0 ? Mc(e, '"') : !1;
}
function yn(e) {
  return '"' + e + '"';
}
function E3(e) {
  return n2(e, 1, e.length - 2);
}
function me(e, t) {
  let n, r, o, l, i;
  e: for (;;) {
    const s = e,
      u = t;
    let a,
      c,
      d,
      f,
      v,
      w,
      _,
      x,
      m,
      h,
      y,
      S,
      E,
      M,
      F,
      A,
      fe,
      q,
      tt,
      Yt,
      Xt,
      Pn,
      Xn,
      bt,
      $t,
      I,
      Q,
      X,
      xe,
      $e,
      gn,
      bn,
      nl,
      er,
      _o,
      y0,
      v0,
      w0,
      S0,
      _0,
      C0,
      E0,
      k0,
      T0,
      N0,
      On,
      rl,
      ol,
      M0,
      I0,
      x0,
      Fa,
      F0,
      Pa,
      P0,
      O0,
      yr,
      R0,
      A0,
      D0,
      $0,
      L0,
      z0,
      B0,
      U0,
      V0,
      G0,
      j0,
      H0,
      W0,
      Oa,
      Q0,
      K0,
      J0,
      Z0,
      q0,
      Y0,
      X0,
      b0,
      eh,
      th,
      ks,
      Co;
    switch (
      (s.tag === 1
        ? u.tag === 9
          ? s.fields[0].toLocaleLowerCase() === "nan"
            ? (a = 1)
            : ((a = 2), (d = s.fields[0]))
          : u.tag === 8
          ? s.fields[0].toLocaleLowerCase() === "nan"
            ? (a = 4)
            : ((a = 5), (v = s.fields[0]))
          : u.tag === 6
          ? ((a = 8), (x = s.fields[0]))
          : u.tag === 1
          ? ((a = 9), (m = s.fields[0]))
          : u.tag === 2
          ? ((a = 11), (y = s.fields[0]))
          : u.tag === 22
          ? ((a = 13), (E = s.fields[0]))
          : u.tag === 10
          ? ((a = 14), (M = s.fields[0]))
          : u.tag === 11
          ? ((a = 16), (A = s.fields[0]))
          : u.tag === 3
          ? ((a = 19), (tt = s.fields[0]))
          : u.tag === 4
          ? ((a = 21), (Xt = s.fields[0]))
          : u.tag === 5
          ? ((a = 23), (Xn = s.fields[0]))
          : u.tag === 38
          ? ((a = 25), ($t = u.fields[0]), (I = s.fields[0]))
          : u.tag === 30
          ? ((a = 27), (xe = u.fields[0]), ($e = s.fields[0]))
          : u.tag === 23
          ? ((a = 30), (gn = s))
          : u.tag === 12
          ? ((a = 31), (bn = s.fields[0]))
          : u.tag === 13
          ? ((a = 32), (nl = s.fields[0]))
          : u.tag === 14
          ? ((a = 35), (y0 = s.fields[0]))
          : u.tag === 19
          ? ((a = 36), (v0 = s.fields[0]))
          : u.tag === 15
          ? ((a = 38), (S0 = s.fields[0]))
          : u.tag === 16
          ? ((a = 39), (_0 = s.fields[0]))
          : u.tag === 17
          ? ((a = 42), (k0 = s.fields[0]))
          : u.tag === 18
          ? ((a = 43), (T0 = s.fields[0]))
          : u.tag === 27
          ? Ee(s, new de(3, []))
            ? (a = 67)
            : ((a = 46), (rl = s), (ol = u.fields[0]))
          : u.tag === 21
          ? ((a = 47), (M0 = s.fields[0]))
          : u.tag === 40
          ? Fi(s.fields[0])
            ? ((a = 50), (Fa = s.fields[0]), (F0 = u.fields[0]))
            : ((a = 51), (Pa = s.fields[0]), (P0 = u.fields[0]))
          : u.tag === 39
          ? ((a = 52), u.fields[0], (O0 = s.fields[0]))
          : u.tag === 24
          ? ((a = 66), (Co = u.fields[0]))
          : (a = 67)
        : s.tag === 2
        ? u.tag === 7
          ? ((a = 7), (_ = s.fields[0]))
          : u.tag === 23
          ? ((a = 30), (gn = s))
          : u.tag === 27
          ? Ee(s, new de(3, []))
            ? (a = 67)
            : ((a = 46), (rl = s), (ol = u.fields[0]))
          : u.tag === 24
          ? ((a = 66), (Co = u.fields[0]))
          : (a = 67)
        : s.tag === 3
        ? u.tag === 2
          ? (a = 28)
          : u.tag === 0
          ? (a = 29)
          : u.tag === 23
          ? ((a = 30), (gn = s))
          : u.tag === 27
          ? (a = 45)
          : u.tag === 24
          ? ((a = 66), (Co = u.fields[0]))
          : (a = 67)
        : s.tag === 5
        ? u.tag === 23
          ? ((a = 30), (gn = s))
          : u.tag === 40
          ? ((a = 44), (N0 = u.fields[0]), (On = s.fields[0]))
          : u.tag === 27
          ? Ee(s, new de(3, []))
            ? (a = 67)
            : ((a = 46), (rl = s), (ol = u.fields[0]))
          : u.tag === 12
          ? ((a = 49), (x0 = s.fields[0]))
          : u.tag === 28
          ? ((a = 56), (z0 = u.fields[0]), (B0 = s.fields[0]))
          : u.tag === 39
          ? ((a = 60), (Oa = s.fields[0]), (Q0 = u.fields[0]))
          : u.tag === 34
          ? ((a = 63), (Y0 = s.fields[0]), (X0 = u.fields[0]))
          : u.tag === 33
          ? ((a = 65), (th = u.fields[0]), (ks = s.fields[0]))
          : u.tag === 24
          ? ((a = 66), (Co = u.fields[0]))
          : (a = 67)
        : s.tag === 4
        ? u.tag === 23
          ? ((a = 30), (gn = s))
          : u.tag === 27
          ? Ee(s, new de(3, []))
            ? (a = 67)
            : ((a = 46), (rl = s), (ol = u.fields[0]))
          : u.tag === 40
          ? ((a = 53), (yr = s.fields[0]), (R0 = u.fields[0]))
          : u.tag === 30
          ? ((a = 54), (A0 = u.fields[0]), (D0 = s.fields[0]))
          : u.tag === 28
          ? ((a = 55), ($0 = u.fields[0]), (L0 = s.fields[0]))
          : u.tag === 29
          ? ((a = 57), (U0 = u.fields[0]), (V0 = s.fields[0]))
          : u.tag === 31
          ? ((a = 58), (G0 = u.fields[0]), (j0 = s.fields[0]))
          : u.tag === 32
          ? ((a = 59), (H0 = s.fields[0]), (W0 = u.fields[0]))
          : u.tag === 33
          ? ((a = 61), (K0 = u.fields[0]), (J0 = s.fields[0]))
          : u.tag === 34
          ? ((a = 62), (Z0 = u.fields[0]), (q0 = s.fields[0]))
          : u.tag === 36
          ? ((a = 64), (b0 = u.fields[0]), (eh = s.fields[0]))
          : u.tag === 24
          ? ((a = 66), (Co = u.fields[0]))
          : (a = 67)
        : u.tag === 9
        ? ((a = 0), (c = s.fields[0]))
        : u.tag === 8
        ? ((a = 3), (f = s.fields[0]))
        : u.tag === 6
        ? ((a = 6), (w = s.fields[0]))
        : u.tag === 1
        ? ((a = 10), (h = s.fields[0]))
        : u.tag === 2
        ? ((a = 12), (S = s.fields[0]))
        : u.tag === 10
        ? ((a = 15), (F = s.fields[0]))
        : u.tag === 11
        ? ((a = 17), (fe = s.fields[0]))
        : u.tag === 3
        ? ((a = 18), (q = s.fields[0]))
        : u.tag === 4
        ? ((a = 20), (Yt = s.fields[0]))
        : u.tag === 5
        ? ((a = 22), (Pn = s.fields[0]))
        : u.tag === 20
        ? ((a = 24), (bt = s.fields[0]))
        : u.tag === 38
        ? ((a = 26), (Q = u.fields[0]), (X = s.fields[0]))
        : u.tag === 23
        ? ((a = 30), (gn = s))
        : u.tag === 13
        ? ((a = 33), (er = s.fields[0]))
        : u.tag === 14
        ? ((a = 34), (_o = s.fields[0]))
        : u.tag === 19
        ? ((a = 37), (w0 = s.fields[0]))
        : u.tag === 16
        ? ((a = 40), (C0 = s.fields[0]))
        : u.tag === 17
        ? ((a = 41), (E0 = s.fields[0]))
        : u.tag === 27
        ? Ee(s, new de(3, []))
          ? (a = 67)
          : ((a = 46), (rl = s), (ol = u.fields[0]))
        : u.tag === 12
        ? ((a = 48), (I0 = s.fields[0]))
        : u.tag === 24
        ? ((a = 66), (Co = u.fields[0]))
        : (a = 67),
      a)
    ) {
      case 0:
        return c;
      case 1:
        return NaN;
      case 2:
        return Iu(d);
      case 3:
        return f;
      case 4:
        return NaN;
      case 5:
        return Iu(v);
      case 6:
        return Math.floor(w);
      case 7:
        return _;
      case 8:
        return vr(x, 511, !1, 32);
      case 9:
        return m;
      case 10:
        return String.fromCharCode(h);
      case 11:
        return y;
      case 12:
        return S.toString();
      case 13:
        return xt.create(E);
      case 14:
        return new Qn(M);
      case 15:
        return new Qn(F);
      case 16:
        return vr(A, 511, !1, 16);
      case 17:
        return ((fe + 32768) & 65535) - 32768;
      case 18:
        return q & 65535;
      case 19:
        return vr(tt, 511, !0, 16);
      case 20:
        return Yt >>> 0;
      case 21:
        return vr(Xt, 511, !0, 32);
      case 22:
        return vu(Pn, !0);
      case 23:
        return Ks(Xn, 511, !0);
      case 24:
        return Math.floor(bt);
      case 25: {
        const L = $t(),
          O = L[0],
          D = L[1];
        switch (O.tag) {
          case 6: {
            let z,
              j = 0;
            if (
              ((z = [
                Mv(
                  I,
                  511,
                  !1,
                  32,
                  new so(
                    () => j,
                    (K) => {
                      j = K | 0;
                    }
                  )
                ),
                j,
              ]),
              z[0])
            )
              return z[1];
            {
              const K = rt(D);
              return Fe(H("The value '%s' is not valid for enum of type '%s'"))(
                I
              )(K);
            }
          }
          case 12: {
            let z,
              j = Ep(0);
            if (
              ((z = [
                Zv(
                  I,
                  511,
                  !1,
                  64,
                  new so(
                    () => j,
                    (K) => {
                      j = K;
                    }
                  )
                ),
                j,
              ]),
              z[0])
            )
              return z[1];
            {
              const K = rt(D);
              return Fe(H("The value '%s' is not valid for enum of type '%s'"))(
                I
              )(K);
            }
          }
          default: {
            const z = rt(D);
            return Fe(
              H("The value '%s' cannot be converted to enum of type '%s'")
            )(I)(z);
          }
        }
      }
      case 26:
        return Q(), X;
      case 27: {
        const L = xe();
        return L.tag === 13
          ? (typeof WorkerGlobalScope < "u" &&
              self instanceof WorkerGlobalScope) ||
            p3
            ? bw($e)
            : Array.prototype.slice.call(Buffer.from($e, "base64"))
          : Fe(H("Cannot convert arbitrary string '%s' to %A"))($e)(L);
      }
      case 28:
        return Wt();
      case 29:
        return;
      case 30:
        return Vc(gn);
      case 31:
        return Ks(bn, 511, !1);
      case 32:
        return vr(nl, 511, !0, 8);
      case 33:
        return er & 255;
      case 34:
        return ((_o + 128) & 255) - 128;
      case 35:
        return vr(y0, 511, !1, 8);
      case 36:
        return CC(v0);
      case 37:
        return EC(Math.floor(w0));
      case 38:
        return Kw(S0);
      case 39:
        return DC(_0);
      case 40:
        return Xm(kp(vu(Math.floor(C0), !1)) * 1e3, 0);
      case 41:
        return Kh(~~E0);
      case 42:
        return Kh(vr(k0, 511, !1, 32));
      case 43:
        return BC(Ks(T0, 511, !1));
      case 44: {
        const L = N0(),
          O = L[1],
          D = L[0],
          z = Ur(On);
        let j, K, He, _e, pe;
        if (U(z)) j = 2;
        else if (P(z)[1].tag === 4)
          U(k(z))
            ? ((j = 0), (K = P(z)[0]), (He = P(z)[1].fields[0]))
            : (j = 2);
        else {
          const Y = g3(P(z)[1]);
          Y != null && U(k(z)) ? ((j = 1), (_e = P(z)[0]), (pe = Y)) : (j = 2);
        }
        switch (j) {
          case 0: {
            const Y = ll((B) => B.CaseName === K, D);
            if (Y != null)
              if (((n = Y), n.CaseTypes.length === 1 && n1(n.CaseTypes[0]))) {
                const B = Y;
                return nr(B.Info, [me(new de(4, [He]), B.CaseTypes[0])]);
              } else if (
                ((r = Y), r.CaseTypes.length === 1 && C3(r.CaseTypes[0]))
              ) {
                const B = Y;
                return nr(B.Info, [me(new de(4, [He]), B.CaseTypes[0])]);
              } else {
                const B = Y;
                if (
                  B.CaseTypes.length === 1 &&
                  !n1(B.CaseTypes[0]) &&
                  B.CaseTypes.length !== Js(He)
                ) {
                  const ee = B.CaseTypes.length | 0,
                    vt = Js(He) | 0;
                  Fe(
                    H(
                      "Expected case '%s' to have %d argument types but the JSON data only contained %d values"
                    )
                  )(B.CaseName)(ee)(vt);
                }
                return nr(
                  B.Info,
                  Ge((ee) => me(ee[1], ee[0]), La(B.CaseTypes, Br(He)), null)
                );
              }
            else {
              const B = G(
                  ", ",
                  Ge((tr) => ke(H(" '%s' "))(tr.CaseName), D, null)
                ),
                ee = rt(O);
              return Fe(
                H(
                  "Case %s was not valid for type '%s', expected one of the cases [%s]"
                )
              )(K)(ee)(B);
            }
          }
          case 1: {
            const Y = ll((Ye) => Ye.CaseName === _e, D);
            let B, ee, vt;
            switch (
              (Y != null
                ? ((l = Y.CaseTypes),
                  !f2(Ee, l, Wt()) && l.length === 1
                    ? ((B = 0),
                      (ee = Y.Info),
                      Y.CaseName,
                      (vt = Y.CaseTypes[0]))
                    : (B = 1))
                : (B = 1),
              B)
            ) {
              case 0:
                return nr(ee, [
                  ((o = (
                    (Ye) => (It) =>
                      me(Ye, It)
                  )(pe)),
                  o(vt)),
                ]);
              case 1: {
                const Ye = G(
                    ", ",
                    Ge((nh) => ke(H(" '%s' "))(nh.CaseName), D, null)
                  ),
                  It = rt(O);
                return Fe(
                  H(
                    "Case %s was not valid for type '%s', expected one of the cases [%s]"
                  )
                )(_e)(It)(Ye);
              }
            }
          }
          case 2:
            if (qs("tag", On) && qs("fields", On) && jS(On) === 2) {
              const Y = Tt("tag", On),
                B = Tt("fields", On);
              let ee, vt, Ye;
              switch (
                (Y != null && Y.tag === 0 && B != null && B.tag === 4
                  ? ((ee = 0), (vt = Y.fields[0]), (Ye = B.fields[0]))
                  : (ee = 1),
                ee)
              ) {
                case 0: {
                  const It = D[~~vt];
                  return nr(
                    It.Info,
                    Ic((tr, ci) => me(ci, It.CaseTypes[tr]), Br(Ye), null)
                  );
                }
                case 1: {
                  const It = cl(new de(5, [On])),
                    tr = et(O);
                  return Fe(H("Could not deserialize JSON(%s) into type %s"))(
                    It
                  )(tr);
                }
              }
            } else if (_3(u)) {
              const Y = xc(
                (B) => qs(B, On),
                N(["__typename", "$typename", "$type"])
              );
              if (Y != null) {
                const B = Sm(Y, On);
                if (B.tag === 1) {
                  const ee = B.fields[0],
                    vt = B2(
                      (Ye) => Ye.CaseName.toUpperCase() === ee.toUpperCase(),
                      D
                    );
                  if (vt != null) {
                    const Ye = vt;
                    return nr(Ye.Info, [me(new de(5, [On]), Ye.CaseTypes[0])]);
                  } else {
                    const Ye = rt(O);
                    return Fe(
                      H(
                        "Union of records of type '%s' does not have a matching case '%s'"
                      )
                    )(Ye)(ee);
                  }
                } else {
                  const ee = rt(O);
                  return Fe(
                    H(
                      "Union of records of type '%s' cannot be deserialized with the value of the discriminator key is not a string to match against a specific union case"
                    )
                  )(ee);
                }
              } else {
                const B = rt(O);
                return Fe(
                  H(
                    "Could not serialize the JSON object into the union of records of type %s because the JSON did not contain a known discriminator. Expected '__typename', '$typeName' or '$type'"
                  )
                )(B);
              }
            } else {
              const Y = JSON.stringify(z),
                B = JSON.stringify(D);
              return Fe(
                H(`Expected JSON:
%s
to match the type
%s`)
              )(Y)(B);
            }
        }
      }
      case 45:
        return;
      case 46:
        return Zt(me(rl, ol()));
      case 47:
        return jC(M0);
      case 48:
        return ((L) => le(L, !1, 2))(~~I0);
      case 49: {
        const L = (K) => Tt(K, x0),
          O = Hp((K) => K, N([L("low"), L("high"), L("unsigned")]));
        let D, z, j;
        switch (
          (U(O)
            ? (D = 1)
            : P(O).tag === 0
            ? U(k(O))
              ? (D = 1)
              : P(k(O)).tag === 0
              ? U(k(k(O)))
                ? (D = 1)
                : P(k(k(O))).tag === 2 && U(k(k(k(O))))
                ? ((D = 0), (z = P(k(O)).fields[0]), (j = P(O).fields[0]))
                : (D = 1)
              : (D = 1)
            : (D = 1),
          D)
        ) {
          case 0:
            return HC(i2([Zh(~~j), Zh(~~z)], Uint8Array), 0);
          case 1:
            return Fe(
              H(
                "Unable to construct int64 from object literal { low: int, high: int, unsigned: bool }"
              )
            );
        }
      }
      case 50: {
        const L = F0(),
          O = L[0],
          D = ll((z) => z.CaseName === E3(Fa), O);
        if (D == null) {
          const z = G(
              ", ",
              Ge((pe) => ke(H(" '%s' "))(pe.CaseName), O, null)
            ),
            j = rt(L[1]);
          return Fe(
            H(
              "Case %s was not valid for type '%s', expected one of the cases [%s]"
            )
          )(Fa)(j)(z);
        } else return nr(D.Info, []);
      }
      case 51: {
        const L = P0(),
          O = L[0],
          D = ll((z) => z.CaseName === Pa, O);
        if (D == null) {
          const z = G(
              ", ",
              Ge((pe) => ke(H(" '%s' "))(pe.CaseName), O, null)
            ),
            j = rt(L[1]);
          return Fe(
            H(
              "Case %s was not valid for type '%s', expected one of the cases [%s]"
            )
          )(Pa)(j)(z);
        } else return nr(D.Info, []);
      }
      case 52: {
        (e = RC(O0)), (t = u);
        continue e;
      }
      case 53: {
        const L = R0(),
          O = L[0];
        let D, z, j, K, He;
        switch (
          (U(yr)
            ? ((D = 2), (He = yr))
            : P(yr).tag === 1
            ? U(k(yr))
              ? ((D = 0), (z = P(yr).fields[0]))
              : ((D = 1), (j = P(yr).fields[0]), (K = k(yr)))
            : ((D = 2), (He = yr)),
          D)
        ) {
          case 0: {
            const _e = ll((pe) => pe.CaseName === z, O);
            if (_e == null) {
              const pe = G(
                  ", ",
                  Ge((Ye) => ke(H(" '%s' "))(Ye.CaseName), O, null)
                ),
                Y = rt(L[1]);
              return Fe(
                H(
                  "Case '%s' was not valid for type '%s', expected one of the cases [%s]"
                )
              )(z)(Y)(pe);
            } else return _e.CaseName, _e.CaseTypes, nr(_e.Info, []);
          }
          case 1: {
            const _e = ll((pe) => pe.CaseName === j, O);
            if (_e != null) {
              const pe = _e.CaseTypes,
                Y = _e.CaseName,
                B = _e.Info;
              return (
                pe.length !== Js(K) &&
                  Fe(
                    H(
                      "The number of union case parameters for '%s' is different"
                    )
                  )(Y),
                nr(
                  B,
                  Ge((ee) => me(ee[1], ee[0]), La(pe, Br(K)), null)
                )
              );
            } else {
              const pe = G(
                ", ",
                Ge((ee) => ee.CaseName, O, null)
              );
              return Fe(H("Case %s was not valid, expected one of [%s]"))(j)(
                pe
              );
            }
          }
          case 2: {
            const _e = JSON.stringify(He),
              pe = JSON.stringify(O);
            return Fe(
              H(`Expected JSON:
%s
to match the type
%s`)
            )(_e)(pe);
          }
        }
      }
      case 54: {
        const L = A0();
        return Br(Ct((O) => me(O, L), D0));
      }
      case 55: {
        const L = $0();
        return Ct((O) => me(O, L), L0);
      }
      case 56: {
        const L = z0();
        return Ct((O) => me(O, L), eg(B0));
      }
      case 57: {
        const L = U0();
        return um(
          Ct((O) => me(O, L), V0),
          { Compare: re }
        );
      }
      case 58: {
        const L = G0();
        return Ct((O) => me(O, L), j0);
      }
      case 59: {
        const L = W0();
        return Ge((O) => me(O[1], O[0]), La(L, Br(H0)), null);
      }
      case 60: {
        const L = Q0(),
          O = L[1],
          D = L[0];
        return Vw(
          O,
          ((i = Ur(Oa)),
          Ge(
            (z) => {
              let j, K, He, _e;
              const pe = z.FieldType,
                Y = z.FieldName,
                B = xc((ee) => Y === ee[0], i);
              if (B == null) {
                if (pe.tag === 27) return;
                {
                  let ee;
                  const vt = G(
                    ", ",
                    ((j = Ur(Oa)),
                    (K =
                      ((He = ((_e = ke(H("'%s'"))), _e)), (Ts) => He(Ts[0]))),
                    Ct(K, j))
                  );
                  ee = ke(H("[ %s ]"))(vt);
                  let It;
                  const tr = G(
                    ", ",
                    Ge(
                      (Ts) => {
                        const rh = Ts.FieldName;
                        return Ts.FieldType.tag === 27
                          ? ke(H("optional('%s')"))(rh)
                          : ke(H("required('%s')"))(rh);
                      },
                      D,
                      null
                    )
                  );
                  It = ke(H("[ %s ]"))(tr);
                  const Ra = rt(O);
                  return Fe(
                    H(
                      "Could not find the required key '%s' in the JSON object literal with keys %s to match with record type '%s' that has fields %s"
                    )
                  )(Y)(ee)(Ra)(It);
                }
              } else return B[0], me(B[1], pe);
            },
            D,
            null
          ))
        );
      }
      case 61: {
        const L = K0(),
          O = L[0],
          D = Nn(
            b(() =>
              Hi((z) => {
                let j;
                return ve(me(z, new J(32, [((j = [O, L[1]]), () => j)])));
              }, J0)
            )
          );
        switch (O.tag) {
          case 6:
          case 2:
          case 7:
            return ir(D, { Compare: Er });
          default:
            return ir(D, { Compare: re });
        }
      }
      case 62: {
        const L = Z0(),
          O = L[0],
          D = Nn(
            b(() => Hi((K) => ve(me(K, new J(32, [() => [O, L[1]]]))), q0))
          ),
          z =
            O.tag === 40
              ? new To([], { Equals: Ee, GetHashCode: Da })
              : O.tag === 39
              ? new To([], { Equals: Ee, GetHashCode: Et })
              : new To([], { Equals: Ee, GetHashCode: Et }),
          j = Se(D);
        try {
          for (; j["System.Collections.IEnumerator.MoveNext"](); ) {
            const K =
              j["System.Collections.Generic.IEnumerator`1.get_Current"]();
            mh(z, K[0], K[1]);
          }
        } finally {
          ce(j);
        }
        return z;
      }
      case 63: {
        const L = X0(),
          O = L[0],
          D = Ct((K) => [me(new de(1, [K[0]]), O), me(K[1], L[1])], Ur(Y0)),
          z =
            O.tag === 40
              ? new To([], { Equals: Ee, GetHashCode: Da })
              : O.tag === 39
              ? new To([], { Equals: Ee, GetHashCode: Et })
              : new To([], { Equals: Ee, GetHashCode: Et }),
          j = Se(D);
        try {
          for (; j["System.Collections.IEnumerator.MoveNext"](); ) {
            const K =
              j["System.Collections.Generic.IEnumerator`1.get_Current"]();
            mh(z, K[0], K[1]);
          }
        } finally {
          ce(j);
        }
        return z;
      }
      case 64: {
        const L = b0(),
          O =
            L.tag === 40
              ? new za([], { Equals: Ee, GetHashCode: Da })
              : L.tag === 39
              ? new za([], { Equals: Ee, GetHashCode: Et })
              : new za([], { Equals: Ee, GetHashCode: Et }),
          D = Se(eh);
        try {
          for (; D["System.Collections.IEnumerator.MoveNext"](); )
            j2(
              me(
                D["System.Collections.Generic.IEnumerator`1.get_Current"](),
                L
              ),
              O
            );
        } finally {
          ce(D);
        }
        return O;
      }
      case 65: {
        const L = th(),
          O = L[1],
          D = L[0],
          z = Tt("comparer", ks),
          j = Tt("tree", ks);
        let K, He, _e;
        switch (
          (z != null && z.tag === 5 && j != null
            ? j.tag === 4
              ? (j.fields[0],
                xh(z.fields[0])
                  ? ((K = 0), z.fields[0], (He = j.fields[0]))
                  : (K = 2))
              : j.tag === 5
              ? (j.fields[0],
                xh(z.fields[0])
                  ? ((K = 1), z.fields[0], (_e = j.fields[0]))
                  : (K = 2))
              : (K = 2)
            : (K = 2),
          K)
        ) {
          case 0: {
            const pe = Qc(new de(4, [He]));
            if (pe == null) {
              const Y = cl(new de(4, [He]));
              return Fe(
                H(`Could not generate map from JSON
 %s`)
              )(Y);
            } else {
              const Y = Ct((B) => {
                const ee = B[0];
                return [
                  Fi(ee) ? me(ja(ee), D) : me(new de(1, [ee]), D),
                  me(B[1], O),
                ];
              }, Wc(pe));
              switch (D.tag) {
                case 6:
                case 2:
                case 7:
                  return ir(Y, { Compare: Er });
                default:
                  return ir(Y, { Compare: re });
              }
            }
          }
          case 1: {
            (e = new de(5, [ir(Kc(_e), { Compare: Er })])), (t = u);
            continue e;
          }
          case 2: {
            const pe = Ct((Y) => {
              const B = Y[0];
              return [
                Fi(B)
                  ? me(ja(B), D)
                  : Ei(D) || ul(D)
                  ? me(new de(1, [B]), D)
                  : me(ja(B), D),
                me(Y[1], O),
              ];
            }, Ur(ks));
            switch (D.tag) {
              case 6:
              case 2:
              case 7:
                return ir(pe, { Compare: Er });
              default:
                return ir(pe, { Compare: re });
            }
          }
        }
      }
      case 66: {
        const L = Co(),
          O = cl(s),
          D = et(L);
        return Fe(H("Cannot convert %s to %s"))(O)(D);
      }
      case 67: {
        const L = cl(s),
          O = JSON.stringify(u);
        return Fe(H("Cannot convert %s to %s"))(L)(O);
      }
    }
    break;
  }
}
function k3(e, t) {
  return me(e, t);
}
const Is = d3;
function _t(e, t) {
  let n;
  e: for (;;) {
    const r = e,
      o = t;
    switch (o.tag) {
      case 2: {
        const l = r;
        return l == null ? "null" : Is(l);
      }
      case 0:
        return "null";
      case 9:
      case 8:
        return Number.isNaN(r) ? Is("NaN") : r.toString();
      case 1:
        return Is(r);
      case 13:
      case 14:
      case 3:
      case 4:
      case 11:
      case 38:
      case 20:
      case 6:
        return kc(r);
      case 5:
      case 12:
        return yn(hh(r));
      case 19:
        return yn(kC(r));
      case 10:
        return yn(Nc(r));
      case 7:
        return r ? "true" : "false";
      case 21:
        return yn(((n = r), n));
      case 22:
        return yn(dn(r));
      case 15:
        return yn($l(r, "O"));
      case 16:
        return yn($l(r, "O"));
      case 17:
        return kc(LC(r));
      case 18:
        return yn(hh(zC(r)));
      case 39:
        return (
          "{" +
          G(
            ", ",
            Ge(
              (l) => {
                const i = Uw(r, l.PropertyInfo),
                  s = _t(i, l.FieldType);
                return ke(H('"%s": %s'))(l.FieldName)(s);
              },
              o.fields[0]()[0],
              null
            )
          ) +
          "}"
        );
      case 35: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Me((i) => _t(i, l), r)
          ) +
          "]"
        );
      }
      case 36: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Me((i) => _t(i, l), r)
          ) +
          "]"
        );
      }
      case 29: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Me((i) => _t(i, l), r)
          ) +
          "]"
        );
      }
      case 30: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Ge((i) => _t(i, l), r, null)
          ) +
          "]"
        );
      }
      case 28: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Ct((i) => _t(i, l), r)
          ) +
          "]"
        );
      }
      case 31: {
        const l = o.fields[0]();
        return (
          "[" +
          G(
            ", ",
            Ge((i) => _t(i, l), zl(r), null)
          ) +
          "]"
        );
      }
      case 27: {
        const l = r;
        if (l != null) {
          (e = Re(l)), (t = o.fields[0]());
          continue e;
        } else return "null";
      }
      case 40: {
        const l = o.fields[0](),
          i = zw(r, l[1]),
          s = i[0],
          u = i[1],
          a = a2((c) => c.CaseName === rt(s), l[0]).CaseTypes;
        if (ul(o) || a.length === 0) return yn(rt(s));
        if (a.length === 1)
          return "{" + yn(rt(s)) + ": " + _t(u[0], a[0]) + "}";
        {
          const c = G(
            ", ",
            Ic((d, f) => _t(u[d], f), a, null)
          );
          return "{" + yn(rt(s)) + ": [" + c + "] }";
        }
      }
      case 33: {
        const l = o.fields[0](),
          i = l[0],
          s = G(
            ", ",
            Ge(
              (u) => {
                const a = _t(u[0], i),
                  c = _t(u[1], l[1]);
                return Ei(i) || ul(i)
                  ? Fi(a)
                    ? a + ": " + c
                    : Is(a) + ": " + c
                  : "[" + a + ", " + c + "]";
              },
              GS(r),
              null
            )
          );
        return Ei(i) || ul(i) ? "{" + s + "}" : "[" + s + "]";
      }
      case 34: {
        const l = o.fields[0](),
          i = l[0],
          s = G(
            ", ",
            Me((u) => {
              const a = _t(u[0], i),
                c = _t(u[1], l[1]);
              return Ei(i) || ul(i)
                ? Fi(a)
                  ? a + ": " + c
                  : yn(a) + ": " + c
                : "[" + a + ", " + c + "]";
            }, r)
          );
        return Ei(i) || ul(i) ? "{" + s + "}" : "[" + s + "]";
      }
      case 32: {
        const l = o.fields[0]();
        return l.length === 1
          ? "[" + _t(r, l[0]) + "]"
          : "[" +
              G(
                ", ",
                Ic((i, s) => _t(s, l[i]), r, null)
              ) +
              "]";
      }
      case 23:
        return Qh(r);
      case 24:
        return Qh(r);
      default:
        return "null";
    }
    break;
  }
}
class Ka extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["Ok", "Error"];
  }
}
const Jc = p(5, 0, !1),
  tg = "trufflewizardsave";
function T3(e) {
  return _t(e, We(Tm()));
}
function N3(e) {
  let t, n, r, o;
  try {
    o = new Ka(0, [
      ((t = Ym(e)),
      t != null
        ? k3(t, We(Tm()))
        : (() => {
            throw new Error(
              "Couldn't parse the input JSON string because it seems to be invalid"
            );
          })()),
    ]);
  } catch (l) {
    o = new Ka(1, [l.message]);
  }
  if (o.tag === 1) return o;
  {
    const l = o.fields[0];
    return zn(l.SaveVersion, Jc)
      ? o
      : new Ka(1, [
          ((n = ke(
            H("Expected save version is %i but serialized version was %i")
          )),
          (r = n(Jc)),
          r(l.SaveVersion)),
        ]);
  }
}
function M3(e) {
  return new km(e.Tick, e.Inventory, e.Unlocks, Jc);
}
function I3(e, t) {
  return new Yn(
    t.Tick,
    t.Inventory,
    t.Unlocks,
    "Loaded from local storage",
    e.View
  );
}
function ng(e) {
  const t = T3(M3(e));
  return (
    localStorage.setItem(tg, t),
    new Yn(e.Tick, e.Inventory, e.Unlocks, "Saved to local storage", e.View)
  );
}
function rg(e) {
  let t;
  const n = N3(localStorage.getItem(tg));
  return n.tag === 1
    ? new Yn(
        e.Tick,
        e.Inventory,
        e.Unlocks,
        ((t = ke(H("Error: %s"))), t(n.fields[0])),
        e.View
      )
    : I3(e, n.fields[0]);
}
function x3() {
  return qe();
}
function md(e) {
  return G("/", e);
}
function F3(e, t) {
  const n = new Error("Duplicate SubId");
  return e(["Duplicate SubId: " + md(t), n]);
}
function og(e, t, n) {
  try {
    ce(n);
  } catch (r) {
    e(["Error stopping subscription: " + md(t), r]);
  }
}
function P3(e, t, n, r) {
  try {
    return [n, r(t)];
  } catch (o) {
    e(["Error starting subscription: " + md(n), o]);
    return;
  }
}
function O3(e, t) {
  ku((n) => {
    og(e, n[0], n[1]);
  }, t);
}
function r1(e, t, n, r, o, l) {
  return (
    ku((i) => {
      F3(e, i);
    }, n),
    ku((i) => {
      og(e, i[0], i[1]);
    }, r),
    jp(
      o,
      Hp((i) => P3(e, t, i[0], i[1]), l)
    )
  );
}
function R3() {
  return [qe(), sm({ Compare: re }), qe()];
}
function A3(e, t, n, r, o) {
  return ue(e, r) ? [st(e, n), r, o] : [n, im(e, r), st([e, t], o)];
}
function D3(e) {
  return g2((t, n) => A3(t[0], t[1], n[0], n[1], n[2]), e, R3());
}
const $3 = qe();
function o1(e, t) {
  const n = um(
      Ct((i) => i[0], e),
      { Compare: re }
    ),
    r = D3(t),
    o = r[1],
    l = r[0];
  if (n.Equals(o)) return [l, qe(), e, qe()];
  {
    const i = w2((s) => ue(s[0], o), e);
    return [l, i[1], i[0], ti((s) => !ue(s[0], n), r[2])];
  }
}
function L3(e, t) {
  console.error(Zt(e), t);
}
function l1(e, t, n) {
  ku((r) => {
    try {
      r(t);
    } catch (o) {
      e(o);
    }
  }, n);
}
function z3() {
  return qe();
}
function B3(e, t, n, r) {
  const o = re(e, n) | 0;
  if (o === 0) throw new Error("The step of a range cannot be zero");
  const l = o > 0;
  return (i) => {
    const s = re(i, t) | 0;
    return (l && s <= 0) || (!l && s >= 0) ? [i, r(i, e)] : void 0;
  };
}
function U3(e, t, n, r, o) {
  const l = B3(t, n, r, o);
  return b(() => A2(l, e));
}
function V3(e, t, n) {
  return U3(e, t, n, 0, (r, o) => r + o);
}
class kl extends xn {
  constructor(t, n) {
    super(), (this.tag = t), (this.fields = n);
  }
  cases() {
    return ["Writable", "ReadWritable"];
  }
}
class G3 {
  constructor(t) {
    this.state = new kl(0, [
      td(new Array(Su(Er, t, 10)), 0, Su(Er, t, 10), null),
      0,
    ]);
  }
}
function j3(e) {
  return new G3(e);
}
function i1(e) {
  const t = e.state;
  if (t.tag === 1) {
    const n = t.fields[1] | 0,
      r = t.fields[2] | 0,
      o = t.fields[0],
      l = (r + 1) % o.length | 0;
    return (
      l === n
        ? (e.state = new kl(0, [o, n]))
        : (e.state = new kl(1, [o, n, l])),
      Zt(o[r])
    );
  } else return;
}
function H3(e, t) {
  const n = e.state;
  if (n.tag === 1) {
    const r = n.fields[1] | 0,
      o = n.fields[2] | 0,
      l = n.fields[0];
    l[r] = t;
    const i = (r + 1) % l.length | 0;
    i === o
      ? (e.state = new kl(1, [W3(e, o, l), l.length, 0]))
      : (e.state = new kl(1, [l, i, o]));
  } else {
    const r = n.fields[1] | 0,
      o = n.fields[0];
    o[r] = t;
    const l = (r + 1) % o.length | 0;
    e.state = new kl(1, [o, l, r]);
  }
}
function W3(e, t, n) {
  return Array.from(
    b(() =>
      dt(
        V2(t, n),
        b(() =>
          dt(
            G2(t, n),
            b(() => Hi((r) => ve(Wt()), V3(0, 1, n.length)))
          )
        )
      )
    )
  );
}
class gd extends Jt {
  constructor(t, n, r, o, l, i, s) {
    super(),
      (this.init = t),
      (this.update = n),
      (this.subscribe = r),
      (this.view = o),
      (this.setState = l),
      (this.onError = i),
      (this.termination = s);
  }
}
function Q3(e, t, n) {
  return new gd(
    e,
    t,
    (r) => x3(),
    n,
    zo(2, (r) => {
      const o = cr(1, n, [r]);
      return (l) => {
        o(l);
      };
    }),
    (r) => {
      L3(r[0], r[1]);
    },
    [(r) => !1, (r) => {}]
  );
}
function K3(e, t) {
  return new gd(
    t.init,
    t.update,
    e,
    t.view,
    t.setState,
    t.onError,
    t.termination
  );
}
function J3(e, t) {
  return new gd(
    t.init,
    t.update,
    t.subscribe,
    t.view,
    e,
    t.onError,
    t.termination
  );
}
function s1(e) {
  return hw(2, e.view);
}
function Z3(e, t, n) {
  let r;
  const o = n.init(t),
    l = o[0],
    i = n.subscribe(l),
    s = n.termination,
    u = j3(10);
  let a = !1,
    c = l,
    d = $3,
    f = !1;
  const w = cr(1, e, [
      (x) => {
        f || (H3(u, x), a || ((a = !0), _(), (a = !1)));
      },
    ]),
    _ = () => {
      let x,
        m = i1(u);
      for (; !f && m != null; ) {
        const h = Re(m);
        if (s[0](h)) O3(n.onError, d), s[1](c), (f = !0);
        else {
          const y = n.update(h, c),
            S = y[0],
            E = n.subscribe(S);
          n.setState(S, w),
            l1(
              (M) => {
                let F;
                n.onError([
                  ((F = ke(H("Error handling the message: %A"))), F(h)),
                  M,
                ]);
              },
              w,
              y[1]
            ),
            (c = S),
            (d = ((x = o1(d, E)), r1(n.onError, w, x[0], x[1], x[2], x[3]))),
            (m = i1(u));
        }
      }
    };
  (a = !0),
    n.setState(l, w),
    l1(
      (x) => {
        n.onError([ke(H("Error intitializing:")), x]);
      },
      w,
      o[1]
    ),
    (d = ((r = o1(d, i)), r1(n.onError, w, r[0], r[1], r[2], r[3]))),
    _(),
    (a = !1);
}
function q3(e, t) {
  Z3(
    zo(2, (n) => n),
    e,
    t
  );
}
function Y3(e) {
  q3(void 0, e);
}
function X3(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var V = {},
  b3 = {
    get exports() {
      return V;
    },
    set exports(e) {
      V = e;
    },
  },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ws = Symbol.for("react.element"),
  eE = Symbol.for("react.portal"),
  tE = Symbol.for("react.fragment"),
  nE = Symbol.for("react.strict_mode"),
  rE = Symbol.for("react.profiler"),
  oE = Symbol.for("react.provider"),
  lE = Symbol.for("react.context"),
  iE = Symbol.for("react.forward_ref"),
  sE = Symbol.for("react.suspense"),
  uE = Symbol.for("react.memo"),
  aE = Symbol.for("react.lazy"),
  u1 = Symbol.iterator;
function cE(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (u1 && e[u1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ig = Object.assign,
  sg = {};
function si(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sg),
    (this.updater = n || lg);
}
si.prototype.isReactComponent = {};
si.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
si.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ug() {}
ug.prototype = si.prototype;
function yd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sg),
    (this.updater = n || lg);
}
var vd = (yd.prototype = new ug());
vd.constructor = yd;
ig(vd, si.prototype);
vd.isPureReactComponent = !0;
var a1 = Array.isArray,
  ag = Object.prototype.hasOwnProperty,
  wd = { current: null },
  cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function fg(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      ag.call(t, r) && !cg.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ws,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: wd.current,
  };
}
function fE(e, t) {
  return {
    $$typeof: ws,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ws;
}
function dE(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var c1 = /\/+/g;
function Ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dE("" + e.key)
    : t.toString(36);
}
function nu(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ws:
          case eE:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ja(i, 0) : r),
      a1(o)
        ? ((n = ""),
          e != null && (n = e.replace(c1, "$&/") + "/"),
          nu(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Sd(o) &&
            (o = fE(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(c1, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), a1(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + Ja(l, s);
      i += nu(l, t, n, u, o);
    }
  else if (((u = cE(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + Ja(l, s++)), (i += nu(l, t, n, u, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function xs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    nu(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function hE(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var At = { current: null },
  ru = { transition: null },
  pE = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: ru,
    ReactCurrentOwner: wd,
  };
se.Children = {
  map: xs,
  forEach: function (e, t, n) {
    xs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
se.Component = si;
se.Fragment = tE;
se.Profiler = rE;
se.PureComponent = yd;
se.StrictMode = nE;
se.Suspense = sE;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE;
se.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ig({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = wd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      ag.call(t, u) &&
        !cg.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ws, type: e.type, key: o, ref: l, props: r, _owner: i };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: lE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oE, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = fg;
se.createFactory = function (e) {
  var t = fg.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: iE, render: e };
};
se.isValidElement = Sd;
se.lazy = function (e) {
  return { $$typeof: aE, _payload: { _status: -1, _result: e }, _init: hE };
};
se.memo = function (e, t) {
  return { $$typeof: uE, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function (e) {
  var t = ru.transition;
  ru.transition = {};
  try {
    e();
  } finally {
    ru.transition = t;
  }
};
se.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
se.useCallback = function (e, t) {
  return At.current.useCallback(e, t);
};
se.useContext = function (e) {
  return At.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return At.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return At.current.useEffect(e, t);
};
se.useId = function () {
  return At.current.useId();
};
se.useImperativeHandle = function (e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function (e, t) {
  return At.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return At.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return At.current.useMemo(e, t);
};
se.useReducer = function (e, t, n) {
  return At.current.useReducer(e, t, n);
};
se.useRef = function (e) {
  return At.current.useRef(e);
};
se.useState = function (e) {
  return At.current.useState(e);
};
se.useSyncExternalStore = function (e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function () {
  return At.current.useTransition();
};
se.version = "18.2.0";
(function (e) {
  e.exports = se;
})(b3);
const mE = X3(V);
var Ru = {},
  gE = {
    get exports() {
      return Ru;
    },
    set exports(e) {
      Ru = e;
    },
  },
  pn = {},
  Zc = {},
  yE = {
    get exports() {
      return Zc;
    },
    set exports(e) {
      Zc = e;
    },
  },
  dg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, Q) {
    var X = I.length;
    I.push(Q);
    e: for (; 0 < X; ) {
      var xe = (X - 1) >>> 1,
        $e = I[xe];
      if (0 < o($e, Q)) (I[xe] = Q), (I[X] = $e), (X = xe);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var Q = I[0],
      X = I.pop();
    if (X !== Q) {
      I[0] = X;
      e: for (var xe = 0, $e = I.length, gn = $e >>> 1; xe < gn; ) {
        var bn = 2 * (xe + 1) - 1,
          nl = I[bn],
          er = bn + 1,
          _o = I[er];
        if (0 > o(nl, X))
          er < $e && 0 > o(_o, nl)
            ? ((I[xe] = _o), (I[er] = X), (xe = er))
            : ((I[xe] = nl), (I[bn] = X), (xe = bn));
        else if (er < $e && 0 > o(_o, X)) (I[xe] = _o), (I[er] = X), (xe = er);
        else break e;
      }
    }
    return Q;
  }
  function o(I, Q) {
    var X = I.sortIndex - Q.sortIndex;
    return X !== 0 ? X : I.id - Q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    w = !1,
    _ = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var Q = n(a); Q !== null; ) {
      if (Q.callback === null) r(a);
      else if (Q.startTime <= I)
        r(a), (Q.sortIndex = Q.expirationTime), t(u, Q);
      else break;
      Q = n(a);
    }
  }
  function S(I) {
    if (((_ = !1), y(I), !w))
      if (n(u) !== null) (w = !0), bt(E);
      else {
        var Q = n(a);
        Q !== null && $t(S, Q.startTime - I);
      }
  }
  function E(I, Q) {
    (w = !1), _ && ((_ = !1), m(A), (A = -1)), (v = !0);
    var X = f;
    try {
      for (
        y(Q), d = n(u);
        d !== null && (!(d.expirationTime > Q) || (I && !tt()));

      ) {
        var xe = d.callback;
        if (typeof xe == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var $e = xe(d.expirationTime <= Q);
          (Q = e.unstable_now()),
            typeof $e == "function" ? (d.callback = $e) : d === n(u) && r(u),
            y(Q);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var gn = !0;
      else {
        var bn = n(a);
        bn !== null && $t(S, bn.startTime - Q), (gn = !1);
      }
      return gn;
    } finally {
      (d = null), (f = X), (v = !1);
    }
  }
  var M = !1,
    F = null,
    A = -1,
    fe = 5,
    q = -1;
  function tt() {
    return !(e.unstable_now() - q < fe);
  }
  function Yt() {
    if (F !== null) {
      var I = e.unstable_now();
      q = I;
      var Q = !0;
      try {
        Q = F(!0, I);
      } finally {
        Q ? Xt() : ((M = !1), (F = null));
      }
    } else M = !1;
  }
  var Xt;
  if (typeof h == "function")
    Xt = function () {
      h(Yt);
    };
  else if (typeof MessageChannel < "u") {
    var Pn = new MessageChannel(),
      Xn = Pn.port2;
    (Pn.port1.onmessage = Yt),
      (Xt = function () {
        Xn.postMessage(null);
      });
  } else
    Xt = function () {
      x(Yt, 0);
    };
  function bt(I) {
    (F = I), M || ((M = !0), Xt());
  }
  function $t(I, Q) {
    A = x(function () {
      I(e.unstable_now());
    }, Q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), bt(E));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (fe = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = f;
      }
      var X = f;
      f = Q;
      try {
        return I();
      } finally {
        f = X;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, Q) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var X = f;
      f = I;
      try {
        return Q();
      } finally {
        f = X;
      }
    }),
    (e.unstable_scheduleCallback = function (I, Q, X) {
      var xe = e.unstable_now();
      switch (
        (typeof X == "object" && X !== null
          ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? xe + X : xe))
          : (X = xe),
        I)
      ) {
        case 1:
          var $e = -1;
          break;
        case 2:
          $e = 250;
          break;
        case 5:
          $e = 1073741823;
          break;
        case 4:
          $e = 1e4;
          break;
        default:
          $e = 5e3;
      }
      return (
        ($e = X + $e),
        (I = {
          id: c++,
          callback: Q,
          priorityLevel: I,
          startTime: X,
          expirationTime: $e,
          sortIndex: -1,
        }),
        X > xe
          ? ((I.sortIndex = X),
            t(a, I),
            n(u) === null &&
              I === n(a) &&
              (_ ? (m(A), (A = -1)) : (_ = !0), $t(S, X - xe)))
          : ((I.sortIndex = $e), t(u, I), w || v || ((w = !0), bt(E))),
        I
      );
    }),
    (e.unstable_shouldYield = tt),
    (e.unstable_wrapCallback = function (I) {
      var Q = f;
      return function () {
        var X = f;
        f = Q;
        try {
          return I.apply(this, arguments);
        } finally {
          f = X;
        }
      };
    });
})(dg);
(function (e) {
  e.exports = dg;
})(yE);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hg = V,
  hn = Zc;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pg = new Set(),
  Qi = {};
function bo(e, t) {
  Gl(e, t), Gl(e + "Capture", t);
}
function Gl(e, t) {
  for (Qi[e] = t, e = 0; e < t.length; e++) pg.add(t[e]);
}
var Pr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qc = Object.prototype.hasOwnProperty,
  vE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  f1 = {},
  d1 = {};
function wE(e) {
  return qc.call(d1, e)
    ? !0
    : qc.call(f1, e)
    ? !1
    : vE.test(e)
    ? (d1[e] = !0)
    : ((f1[e] = !0), !1);
}
function SE(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _E(e, t, n, r) {
  if (t === null || typeof t > "u" || SE(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Dt(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Dt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  yt[t] = new Dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new Dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  yt[e] = new Dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new Dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  yt[e] = new Dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new Dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new Dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _d = /[\-:]([a-z])/g;
function Cd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_d, Cd);
    yt[t] = new Dt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_d, Cd);
    yt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_d, Cd);
  yt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new Dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var o = yt.hasOwnProperty(t) ? yt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_E(t, n, o, r) && (n = null),
    r || o === null
      ? wE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dr = hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fs = Symbol.for("react.element"),
  fl = Symbol.for("react.portal"),
  dl = Symbol.for("react.fragment"),
  kd = Symbol.for("react.strict_mode"),
  Yc = Symbol.for("react.profiler"),
  mg = Symbol.for("react.provider"),
  gg = Symbol.for("react.context"),
  Td = Symbol.for("react.forward_ref"),
  Xc = Symbol.for("react.suspense"),
  bc = Symbol.for("react.suspense_list"),
  Nd = Symbol.for("react.memo"),
  Lr = Symbol.for("react.lazy"),
  yg = Symbol.for("react.offscreen"),
  h1 = Symbol.iterator;
function hi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (h1 && e[h1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ve = Object.assign,
  Za;
function ki(e) {
  if (Za === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Za = (t && t[1]) || "";
    }
  return (
    `
` +
    Za +
    e
  );
}
var qa = !1;
function Ya(e, t) {
  if (!e || qa) return "";
  qa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (qa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ki(e) : "";
}
function CE(e) {
  switch (e.tag) {
    case 5:
      return ki(e.type);
    case 16:
      return ki("Lazy");
    case 13:
      return ki("Suspense");
    case 19:
      return ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ya(e.type, !1)), e;
    case 11:
      return (e = Ya(e.type.render, !1)), e;
    case 1:
      return (e = Ya(e.type, !0)), e;
    default:
      return "";
  }
}
function ef(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dl:
      return "Fragment";
    case fl:
      return "Portal";
    case Yc:
      return "Profiler";
    case kd:
      return "StrictMode";
    case Xc:
      return "Suspense";
    case bc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gg:
        return (e.displayName || "Context") + ".Consumer";
      case mg:
        return (e._context.displayName || "Context") + ".Provider";
      case Td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Nd:
        return (
          (t = e.displayName || null), t !== null ? t : ef(e.type) || "Memo"
        );
      case Lr:
        (t = e._payload), (e = e._init);
        try {
          return ef(e(t));
        } catch {}
    }
  return null;
}
function EE(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return ef(t);
    case 8:
      return t === kd ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ho(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kE(e) {
  var t = vg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ps(e) {
  e._valueTracker || (e._valueTracker = kE(e));
}
function wg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Au(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tf(e, t) {
  var n = t.checked;
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function p1(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ho(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sg(e, t) {
  (t = t.checked), t != null && Ed(e, "checked", t, !1);
}
function nf(e, t) {
  Sg(e, t);
  var n = ho(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rf(e, t.type, ho(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function m1(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rf(e, t, n) {
  (t !== "number" || Au(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ti = Array.isArray;
function Tl(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ho(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function of(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function g1(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Ti(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ho(n) };
}
function _g(e, t) {
  var n = ho(t.value),
    r = ho(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function y1(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Os,
  Eg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Os = Os || document.createElement("div"),
          Os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Os.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pi = {
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
    strokeWidth: !0,
  },
  TE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pi).forEach(function (e) {
  TE.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pi[t] = Pi[e]);
  });
});
function kg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pi.hasOwnProperty(e) && Pi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = kg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var NE = Ve(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function sf(e, t) {
  if (t) {
    if (NE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function uf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var af = null;
function Md(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var cf = null,
  Nl = null,
  Ml = null;
function v1(e) {
  if ((e = Cs(e))) {
    if (typeof cf != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = ma(t)), cf(e.stateNode, e.type, t));
  }
}
function Ng(e) {
  Nl ? (Ml ? Ml.push(e) : (Ml = [e])) : (Nl = e);
}
function Mg() {
  if (Nl) {
    var e = Nl,
      t = Ml;
    if (((Ml = Nl = null), v1(e), t)) for (e = 0; e < t.length; e++) v1(t[e]);
  }
}
function Ig(e, t) {
  return e(t);
}
function xg() {}
var Xa = !1;
function Fg(e, t, n) {
  if (Xa) return e(t, n);
  Xa = !0;
  try {
    return Ig(e, t, n);
  } finally {
    (Xa = !1), (Nl !== null || Ml !== null) && (xg(), Mg());
  }
}
function Ji(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ma(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var ff = !1;
if (Pr)
  try {
    var pi = {};
    Object.defineProperty(pi, "passive", {
      get: function () {
        ff = !0;
      },
    }),
      window.addEventListener("test", pi, pi),
      window.removeEventListener("test", pi, pi);
  } catch {
    ff = !1;
  }
function ME(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Oi = !1,
  Du = null,
  $u = !1,
  df = null,
  IE = {
    onError: function (e) {
      (Oi = !0), (Du = e);
    },
  };
function xE(e, t, n, r, o, l, i, s, u) {
  (Oi = !1), (Du = null), ME.apply(IE, arguments);
}
function FE(e, t, n, r, o, l, i, s, u) {
  if ((xE.apply(this, arguments), Oi)) {
    if (Oi) {
      var a = Du;
      (Oi = !1), (Du = null);
    } else throw Error(C(198));
    $u || (($u = !0), (df = a));
  }
}
function el(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function w1(e) {
  if (el(e) !== e) throw Error(C(188));
}
function PE(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = el(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return w1(o), e;
        if (l === r) return w1(o), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Og(e) {
  return (e = PE(e)), e !== null ? Rg(e) : null;
}
function Rg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ag = hn.unstable_scheduleCallback,
  S1 = hn.unstable_cancelCallback,
  OE = hn.unstable_shouldYield,
  RE = hn.unstable_requestPaint,
  Je = hn.unstable_now,
  AE = hn.unstable_getCurrentPriorityLevel,
  Id = hn.unstable_ImmediatePriority,
  Dg = hn.unstable_UserBlockingPriority,
  Lu = hn.unstable_NormalPriority,
  DE = hn.unstable_LowPriority,
  $g = hn.unstable_IdlePriority,
  fa = null,
  pr = null;
function $E(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function")
    try {
      pr.onCommitFiberRoot(fa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jn = Math.clz32 ? Math.clz32 : BE,
  LE = Math.log,
  zE = Math.LN2;
function BE(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((LE(e) / zE) | 0)) | 0;
}
var Rs = 64,
  As = 4194304;
function Ni(e) {
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
      return e;
  }
}
function zu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Ni(s)) : ((l &= i), l !== 0 && (r = Ni(l)));
  } else (i = n & ~o), i !== 0 ? (r = Ni(i)) : l !== 0 && (r = Ni(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - jn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function UE(e, t) {
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
      return -1;
  }
}
function VE(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - jn(l),
      s = 1 << i,
      u = o[i];
    u === -1
      ? (!(s & n) || s & r) && (o[i] = UE(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function hf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lg() {
  var e = Rs;
  return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), e;
}
function ba(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ss(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jn(t)),
    (e[t] = n);
}
function GE(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - jn(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function xd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - jn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function zg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bg,
  Fd,
  Ug,
  Vg,
  Gg,
  pf = !1,
  Ds = [],
  br = null,
  eo = null,
  to = null,
  Zi = new Map(),
  qi = new Map(),
  Vr = [],
  jE =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _1(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      br = null;
      break;
    case "dragenter":
    case "dragleave":
      eo = null;
      break;
    case "mouseover":
    case "mouseout":
      to = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qi.delete(t.pointerId);
  }
}
function mi(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Cs(t)), t !== null && Fd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function HE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (br = mi(br, e, t, n, r, o)), !0;
    case "dragenter":
      return (eo = mi(eo, e, t, n, r, o)), !0;
    case "mouseover":
      return (to = mi(to, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Zi.set(l, mi(Zi.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), qi.set(l, mi(qi.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function jg(e) {
  var t = Io(e.target);
  if (t !== null) {
    var n = el(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pg(n)), t !== null)) {
          (e.blockedOn = t),
            Gg(e.priority, function () {
              Ug(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ou(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (af = r), n.target.dispatchEvent(r), (af = null);
    } else return (t = Cs(n)), t !== null && Fd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function C1(e, t, n) {
  ou(e) && n.delete(t);
}
function WE() {
  (pf = !1),
    br !== null && ou(br) && (br = null),
    eo !== null && ou(eo) && (eo = null),
    to !== null && ou(to) && (to = null),
    Zi.forEach(C1),
    qi.forEach(C1);
}
function gi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pf ||
      ((pf = !0),
      hn.unstable_scheduleCallback(hn.unstable_NormalPriority, WE)));
}
function Yi(e) {
  function t(o) {
    return gi(o, e);
  }
  if (0 < Ds.length) {
    gi(Ds[0], e);
    for (var n = 1; n < Ds.length; n++) {
      var r = Ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    br !== null && gi(br, e),
      eo !== null && gi(eo, e),
      to !== null && gi(to, e),
      Zi.forEach(t),
      qi.forEach(t),
      n = 0;
    n < Vr.length;
    n++
  )
    (r = Vr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && ((n = Vr[0]), n.blockedOn === null); )
    jg(n), n.blockedOn === null && Vr.shift();
}
var Il = Dr.ReactCurrentBatchConfig,
  Bu = !0;
function QE(e, t, n, r) {
  var o = he,
    l = Il.transition;
  Il.transition = null;
  try {
    (he = 1), Pd(e, t, n, r);
  } finally {
    (he = o), (Il.transition = l);
  }
}
function KE(e, t, n, r) {
  var o = he,
    l = Il.transition;
  Il.transition = null;
  try {
    (he = 4), Pd(e, t, n, r);
  } finally {
    (he = o), (Il.transition = l);
  }
}
function Pd(e, t, n, r) {
  if (Bu) {
    var o = mf(e, t, n, r);
    if (o === null) ac(e, t, r, Uu, n), _1(e, r);
    else if (HE(o, e, t, n, r)) r.stopPropagation();
    else if ((_1(e, r), t & 4 && -1 < jE.indexOf(e))) {
      for (; o !== null; ) {
        var l = Cs(o);
        if (
          (l !== null && Bg(l),
          (l = mf(e, t, n, r)),
          l === null && ac(e, t, r, Uu, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ac(e, t, r, null, n);
  }
}
var Uu = null;
function mf(e, t, n, r) {
  if (((Uu = null), (e = Md(r)), (e = Io(e)), e !== null))
    if (((t = el(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Uu = e), null;
}
function Hg(e) {
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
      switch (AE()) {
        case Id:
          return 1;
        case Dg:
          return 4;
        case Lu:
        case DE:
          return 16;
        case $g:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null,
  Od = null,
  lu = null;
function Wg() {
  if (lu) return lu;
  var e,
    t = Od,
    n = t.length,
    r,
    o = "value" in Kr ? Kr.value : Kr.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (lu = o.slice(e, 1 < r ? 1 - r : void 0));
}
function iu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $s() {
  return !0;
}
function E1() {
  return !1;
}
function mn(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? $s
        : E1),
      (this.isPropagationStopped = E1),
      this
    );
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $s));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $s));
      },
      persist: function () {},
      isPersistent: $s,
    }),
    t
  );
}
var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rd = mn(ui),
  _s = Ve({}, ui, { view: 0, detail: 0 }),
  JE = mn(_s),
  ec,
  tc,
  yi,
  da = Ve({}, _s, {
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
    getModifierState: Ad,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yi &&
            (yi && e.type === "mousemove"
              ? ((ec = e.screenX - yi.screenX), (tc = e.screenY - yi.screenY))
              : (tc = ec = 0),
            (yi = e)),
          ec);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : tc;
    },
  }),
  k1 = mn(da),
  ZE = Ve({}, da, { dataTransfer: 0 }),
  qE = mn(ZE),
  YE = Ve({}, _s, { relatedTarget: 0 }),
  nc = mn(YE),
  XE = Ve({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bE = mn(XE),
  e4 = Ve({}, ui, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  t4 = mn(e4),
  n4 = Ve({}, ui, { data: 0 }),
  T1 = mn(n4),
  r4 = {
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
    MozPrintableKey: "Unidentified",
  },
  o4 = {
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
    224: "Meta",
  },
  l4 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function i4(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = l4[e]) ? !!t[e] : !1;
}
function Ad() {
  return i4;
}
var s4 = Ve({}, _s, {
    key: function (e) {
      if (e.key) {
        var t = r4[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = iu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? o4[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ad,
    charCode: function (e) {
      return e.type === "keypress" ? iu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? iu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  u4 = mn(s4),
  a4 = Ve({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  N1 = mn(a4),
  c4 = Ve({}, _s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ad,
  }),
  f4 = mn(c4),
  d4 = Ve({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h4 = mn(d4),
  p4 = Ve({}, da, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  m4 = mn(p4),
  g4 = [9, 13, 27, 32],
  Dd = Pr && "CompositionEvent" in window,
  Ri = null;
Pr && "documentMode" in document && (Ri = document.documentMode);
var y4 = Pr && "TextEvent" in window && !Ri,
  Qg = Pr && (!Dd || (Ri && 8 < Ri && 11 >= Ri)),
  M1 = String.fromCharCode(32),
  I1 = !1;
function Kg(e, t) {
  switch (e) {
    case "keyup":
      return g4.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hl = !1;
function v4(e, t) {
  switch (e) {
    case "compositionend":
      return Jg(t);
    case "keypress":
      return t.which !== 32 ? null : ((I1 = !0), M1);
    case "textInput":
      return (e = t.data), e === M1 && I1 ? null : e;
    default:
      return null;
  }
}
function w4(e, t) {
  if (hl)
    return e === "compositionend" || (!Dd && Kg(e, t))
      ? ((e = Wg()), (lu = Od = Kr = null), (hl = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var S4 = {
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
  week: !0,
};
function x1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!S4[e.type] : t === "textarea";
}
function Zg(e, t, n, r) {
  Ng(r),
    (t = Vu(t, "onChange")),
    0 < t.length &&
      ((n = new Rd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ai = null,
  Xi = null;
function _4(e) {
  iy(e, 0);
}
function ha(e) {
  var t = gl(e);
  if (wg(t)) return e;
}
function C4(e, t) {
  if (e === "change") return t;
}
var qg = !1;
if (Pr) {
  var rc;
  if (Pr) {
    var oc = "oninput" in document;
    if (!oc) {
      var F1 = document.createElement("div");
      F1.setAttribute("oninput", "return;"),
        (oc = typeof F1.oninput == "function");
    }
    rc = oc;
  } else rc = !1;
  qg = rc && (!document.documentMode || 9 < document.documentMode);
}
function P1() {
  Ai && (Ai.detachEvent("onpropertychange", Yg), (Xi = Ai = null));
}
function Yg(e) {
  if (e.propertyName === "value" && ha(Xi)) {
    var t = [];
    Zg(t, Xi, e, Md(e)), Fg(_4, t);
  }
}
function E4(e, t, n) {
  e === "focusin"
    ? (P1(), (Ai = t), (Xi = n), Ai.attachEvent("onpropertychange", Yg))
    : e === "focusout" && P1();
}
function k4(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ha(Xi);
}
function T4(e, t) {
  if (e === "click") return ha(t);
}
function N4(e, t) {
  if (e === "input" || e === "change") return ha(t);
}
function M4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Jn = typeof Object.is == "function" ? Object.is : M4;
function bi(e, t) {
  if (Jn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!qc.call(t, o) || !Jn(e[o], t[o])) return !1;
  }
  return !0;
}
function O1(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function R1(e, t) {
  var n = O1(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = O1(n);
  }
}
function Xg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bg() {
  for (var e = window, t = Au(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Au(e.document);
  }
  return t;
}
function $d(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function I4(e) {
  var t = bg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $d(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = R1(n, l));
        var i = R1(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var x4 = Pr && "documentMode" in document && 11 >= document.documentMode,
  pl = null,
  gf = null,
  Di = null,
  yf = !1;
function A1(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yf ||
    pl == null ||
    pl !== Au(r) ||
    ((r = pl),
    "selectionStart" in r && $d(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Di && bi(Di, r)) ||
      ((Di = r),
      (r = Vu(gf, "onSelect")),
      0 < r.length &&
        ((t = new Rd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pl))));
}
function Ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ml = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd"),
  },
  lc = {},
  ey = {};
Pr &&
  ((ey = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ml.animationend.animation,
    delete ml.animationiteration.animation,
    delete ml.animationstart.animation),
  "TransitionEvent" in window || delete ml.transitionend.transition);
function pa(e) {
  if (lc[e]) return lc[e];
  if (!ml[e]) return e;
  var t = ml[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ey) return (lc[e] = t[n]);
  return e;
}
var ty = pa("animationend"),
  ny = pa("animationiteration"),
  ry = pa("animationstart"),
  oy = pa("transitionend"),
  ly = new Map(),
  D1 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vo(e, t) {
  ly.set(e, t), bo(t, [e]);
}
for (var ic = 0; ic < D1.length; ic++) {
  var sc = D1[ic],
    F4 = sc.toLowerCase(),
    P4 = sc[0].toUpperCase() + sc.slice(1);
  vo(F4, "on" + P4);
}
vo(ty, "onAnimationEnd");
vo(ny, "onAnimationIteration");
vo(ry, "onAnimationStart");
vo("dblclick", "onDoubleClick");
vo("focusin", "onFocus");
vo("focusout", "onBlur");
vo(oy, "onTransitionEnd");
Gl("onMouseEnter", ["mouseout", "mouseover"]);
Gl("onMouseLeave", ["mouseout", "mouseover"]);
Gl("onPointerEnter", ["pointerout", "pointerover"]);
Gl("onPointerLeave", ["pointerout", "pointerover"]);
bo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
bo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
bo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  O4 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
function $1(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), FE(r, t, void 0, e), (e.currentTarget = null);
}
function iy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          $1(o, s, a), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          $1(o, s, a), (l = u);
        }
    }
  }
  if ($u) throw ((e = df), ($u = !1), (df = null), e);
}
function Ce(e, t) {
  var n = t[Cf];
  n === void 0 && (n = t[Cf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sy(t, e, 2, !1), n.add(r));
}
function uc(e, t, n) {
  var r = 0;
  t && (r |= 4), sy(n, e, r, t);
}
var zs = "_reactListening" + Math.random().toString(36).slice(2);
function es(e) {
  if (!e[zs]) {
    (e[zs] = !0),
      pg.forEach(function (n) {
        n !== "selectionchange" && (O4.has(n) || uc(n, !1, e), uc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zs] || ((t[zs] = !0), uc("selectionchange", !1, t));
  }
}
function sy(e, t, n, r) {
  switch (Hg(t)) {
    case 1:
      var o = QE;
      break;
    case 4:
      o = KE;
      break;
    default:
      o = Pd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ff ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ac(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Io(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Fg(function () {
    var a = l,
      c = Md(n),
      d = [];
    e: {
      var f = ly.get(e);
      if (f !== void 0) {
        var v = Rd,
          w = e;
        switch (e) {
          case "keypress":
            if (iu(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = u4;
            break;
          case "focusin":
            (w = "focus"), (v = nc);
            break;
          case "focusout":
            (w = "blur"), (v = nc);
            break;
          case "beforeblur":
          case "afterblur":
            v = nc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = k1;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = f4;
            break;
          case ty:
          case ny:
          case ry:
            v = bE;
            break;
          case oy:
            v = h4;
            break;
          case "scroll":
            v = JE;
            break;
          case "wheel":
            v = m4;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = t4;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = N1;
        }
        var _ = (t & 4) !== 0,
          x = !_ && e === "scroll",
          m = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var h = a, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = Ji(h, m)), S != null && _.push(ts(h, S, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < _.length &&
          ((f = new v(f, w, null, n, c)), d.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== af &&
            (w = n.relatedTarget || n.fromElement) &&
            (Io(w) || w[Or]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = a),
              (w = w ? Io(w) : null),
              w !== null &&
                ((x = el(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = a)),
          v !== w)
        ) {
          if (
            ((_ = k1),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = N1),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (x = v == null ? f : gl(v)),
            (y = w == null ? f : gl(w)),
            (f = new _(S, h + "leave", v, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (S = null),
            Io(c) === a &&
              ((_ = new _(m, h + "enter", w, n, c)),
              (_.target = y),
              (_.relatedTarget = x),
              (S = _)),
            (x = S),
            v && w)
          )
            t: {
              for (_ = v, m = w, h = 0, y = _; y; y = sl(y)) h++;
              for (y = 0, S = m; S; S = sl(S)) y++;
              for (; 0 < h - y; ) (_ = sl(_)), h--;
              for (; 0 < y - h; ) (m = sl(m)), y--;
              for (; h--; ) {
                if (_ === m || (m !== null && _ === m.alternate)) break t;
                (_ = sl(_)), (m = sl(m));
              }
              _ = null;
            }
          else _ = null;
          v !== null && L1(d, f, v, _, !1),
            w !== null && x !== null && L1(d, x, w, _, !0);
        }
      }
      e: {
        if (
          ((f = a ? gl(a) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var E = C4;
        else if (x1(f))
          if (qg) E = N4;
          else {
            E = k4;
            var M = E4;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = T4);
        if (E && (E = E(e, a))) {
          Zg(d, E, n, c);
          break e;
        }
        M && M(e, f, a),
          e === "focusout" &&
            (M = f._wrapperState) &&
            M.controlled &&
            f.type === "number" &&
            rf(f, "number", f.value);
      }
      switch (((M = a ? gl(a) : window), e)) {
        case "focusin":
          (x1(M) || M.contentEditable === "true") &&
            ((pl = M), (gf = a), (Di = null));
          break;
        case "focusout":
          Di = gf = pl = null;
          break;
        case "mousedown":
          yf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yf = !1), A1(d, n, c);
          break;
        case "selectionchange":
          if (x4) break;
        case "keydown":
        case "keyup":
          A1(d, n, c);
      }
      var F;
      if (Dd)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        hl
          ? Kg(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (Qg &&
          n.locale !== "ko" &&
          (hl || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && hl && (F = Wg())
            : ((Kr = c),
              (Od = "value" in Kr ? Kr.value : Kr.textContent),
              (hl = !0))),
        (M = Vu(a, A)),
        0 < M.length &&
          ((A = new T1(A, e, null, n, c)),
          d.push({ event: A, listeners: M }),
          F ? (A.data = F) : ((F = Jg(n)), F !== null && (A.data = F)))),
        (F = y4 ? v4(e, n) : w4(e, n)) &&
          ((a = Vu(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new T1("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = F)));
    }
    iy(d, t);
  });
}
function ts(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ji(e, n)),
      l != null && r.unshift(ts(e, l, o)),
      (l = Ji(e, t)),
      l != null && r.push(ts(e, l, o))),
      (e = e.return);
  }
  return r;
}
function sl(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function L1(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Ji(n, l)), u != null && i.unshift(ts(n, u, s)))
        : o || ((u = Ji(n, l)), u != null && i.push(ts(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var R4 = /\r\n?/g,
  A4 = /\u0000|\uFFFD/g;
function z1(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      R4,
      `
`
    )
    .replace(A4, "");
}
function Bs(e, t, n) {
  if (((t = z1(t)), z1(e) !== t && n)) throw Error(C(425));
}
function Gu() {}
var vf = null,
  wf = null;
function Sf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _f = typeof setTimeout == "function" ? setTimeout : void 0,
  D4 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  B1 = typeof Promise == "function" ? Promise : void 0,
  $4 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof B1 < "u"
      ? function (e) {
          return B1.resolve(null).then(e).catch(L4);
        }
      : _f;
function L4(e) {
  setTimeout(function () {
    throw e;
  });
}
function cc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Yi(t);
}
function no(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function U1(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ai = Math.random().toString(36).slice(2),
  ar = "__reactFiber$" + ai,
  ns = "__reactProps$" + ai,
  Or = "__reactContainer$" + ai,
  Cf = "__reactEvents$" + ai,
  z4 = "__reactListeners$" + ai,
  B4 = "__reactHandles$" + ai;
function Io(e) {
  var t = e[ar];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Or] || n[ar])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = U1(e); e !== null; ) {
          if ((n = e[ar])) return n;
          e = U1(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cs(e) {
  return (
    (e = e[ar] || e[Or]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gl(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function ma(e) {
  return e[ns] || null;
}
var Ef = [],
  yl = -1;
function wo(e) {
  return { current: e };
}
function Ie(e) {
  0 > yl || ((e.current = Ef[yl]), (Ef[yl] = null), yl--);
}
function we(e, t) {
  yl++, (Ef[yl] = e.current), (e.current = t);
}
var po = {},
  Mt = wo(po),
  Vt = wo(!1),
  Ho = po;
function jl(e, t) {
  var n = e.type.contextTypes;
  if (!n) return po;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Gt(e) {
  return (e = e.childContextTypes), e != null;
}
function ju() {
  Ie(Vt), Ie(Mt);
}
function V1(e, t, n) {
  if (Mt.current !== po) throw Error(C(168));
  we(Mt, t), we(Vt, n);
}
function uy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, EE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function Hu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || po),
    (Ho = Mt.current),
    we(Mt, e),
    we(Vt, Vt.current),
    !0
  );
}
function G1(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = uy(e, t, Ho)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ie(Vt),
      Ie(Mt),
      we(Mt, e))
    : Ie(Vt),
    we(Vt, n);
}
var Sr = null,
  ga = !1,
  fc = !1;
function ay(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function U4(e) {
  (ga = !0), ay(e);
}
function So() {
  if (!fc && Sr !== null) {
    fc = !0;
    var e = 0,
      t = he;
    try {
      var n = Sr;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Sr = null), (ga = !1);
    } catch (o) {
      throw (Sr !== null && (Sr = Sr.slice(e + 1)), Ag(Id, So), o);
    } finally {
      (he = t), (fc = !1);
    }
  }
  return null;
}
var vl = [],
  wl = 0,
  Wu = null,
  Qu = 0,
  vn = [],
  wn = 0,
  Wo = null,
  Tr = 1,
  Nr = "";
function No(e, t) {
  (vl[wl++] = Qu), (vl[wl++] = Wu), (Wu = e), (Qu = t);
}
function cy(e, t, n) {
  (vn[wn++] = Tr), (vn[wn++] = Nr), (vn[wn++] = Wo), (Wo = e);
  var r = Tr;
  e = Nr;
  var o = 32 - jn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - jn(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Tr = (1 << (32 - jn(t) + o)) | (n << o) | r),
      (Nr = l + e);
  } else (Tr = (1 << l) | (n << o) | r), (Nr = e);
}
function Ld(e) {
  e.return !== null && (No(e, 1), cy(e, 1, 0));
}
function zd(e) {
  for (; e === Wu; )
    (Wu = vl[--wl]), (vl[wl] = null), (Qu = vl[--wl]), (vl[wl] = null);
  for (; e === Wo; )
    (Wo = vn[--wn]),
      (vn[wn] = null),
      (Nr = vn[--wn]),
      (vn[wn] = null),
      (Tr = vn[--wn]),
      (vn[wn] = null);
}
var fn = null,
  un = null,
  Oe = !1,
  Ln = null;
function fy(e, t) {
  var n = kn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function j1(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (fn = e), (un = no(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (fn = e), (un = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wo !== null ? { id: Tr, overflow: Nr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (fn = e),
            (un = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function kf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tf(e) {
  if (Oe) {
    var t = un;
    if (t) {
      var n = t;
      if (!j1(e, t)) {
        if (kf(e)) throw Error(C(418));
        t = no(n.nextSibling);
        var r = fn;
        t && j1(e, t)
          ? fy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (fn = e));
      }
    } else {
      if (kf(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Oe = !1), (fn = e);
    }
  }
}
function H1(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  fn = e;
}
function Us(e) {
  if (e !== fn) return !1;
  if (!Oe) return H1(e), (Oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Sf(e.type, e.memoizedProps))),
    t && (t = un))
  ) {
    if (kf(e)) throw (dy(), Error(C(418)));
    for (; t; ) fy(e, t), (t = no(t.nextSibling));
  }
  if ((H1(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              un = no(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      un = null;
    }
  } else un = fn ? no(e.stateNode.nextSibling) : null;
  return !0;
}
function dy() {
  for (var e = un; e; ) e = no(e.nextSibling);
}
function Hl() {
  (un = fn = null), (Oe = !1);
}
function Bd(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
var V4 = Dr.ReactCurrentBatchConfig;
function Dn(e, t) {
  if (e && e.defaultProps) {
    (t = Ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ku = wo(null),
  Ju = null,
  Sl = null,
  Ud = null;
function Vd() {
  Ud = Sl = Ju = null;
}
function Gd(e) {
  var t = Ku.current;
  Ie(Ku), (e._currentValue = t);
}
function Nf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xl(e, t) {
  (Ju = e),
    (Ud = Sl = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ut = !0), (e.firstContext = null));
}
function Mn(e) {
  var t = e._currentValue;
  if (Ud !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sl === null)) {
      if (Ju === null) throw Error(C(308));
      (Sl = e), (Ju.dependencies = { lanes: 0, firstContext: e });
    } else Sl = Sl.next = e;
  return t;
}
var xo = null;
function jd(e) {
  xo === null ? (xo = [e]) : xo.push(e);
}
function hy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), jd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Rr(e, r)
  );
}
function Rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var zr = !1;
function Hd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function py(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ro(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Rr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), jd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Rr(e, n)
  );
}
function su(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n);
  }
}
function W1(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zu(e, t, n, r) {
  var o = e.updateQueue;
  zr = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (l = a) : (i.next = a), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var d = o.baseState;
    (i = 0), (c = a = u = null), (s = l);
    do {
      var f = s.lane,
        v = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            _ = s;
          switch (((f = t), (v = n), _.tag)) {
            case 1:
              if (((w = _.payload), typeof w == "function")) {
                d = w.call(v, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = _.payload),
                (f = typeof w == "function" ? w.call(v, d, f) : w),
                f == null)
              )
                break e;
              d = Ve({}, d, f);
              break e;
            case 2:
              zr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = v), (u = d)) : (c = c.next = v),
          (i |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Ko |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Q1(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var my = new hg.Component().refs;
function Mf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? el(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = lo(e),
      l = Mr(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = ro(e, l, o)),
      t !== null && (Hn(t, e, o, r), su(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rt(),
      o = lo(e),
      l = Mr(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = ro(e, l, o)),
      t !== null && (Hn(t, e, o, r), su(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Rt(),
      r = lo(e),
      o = Mr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ro(e, o, r)),
      t !== null && (Hn(t, e, r, n), su(t, e, r));
  },
};
function K1(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bi(n, r) || !bi(o, l)
      : !0
  );
}
function gy(e, t, n) {
  var r = !1,
    o = po,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Mn(l))
      : ((o = Gt(t) ? Ho : Mt.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? jl(e, o) : po)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function J1(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ya.enqueueReplaceState(t, t.state, null);
}
function If(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = my), Hd(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Mn(l))
    : ((l = Gt(t) ? Ho : Mt.current), (o.context = jl(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Mf(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ya.enqueueReplaceState(o, o.state, null),
      Zu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === my && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Z1(e) {
  var t = e._init;
  return t(e._payload);
}
function yy(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = io(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = vc(y, m.mode, S)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function u(m, h, y, S) {
    var E = y.type;
    return E === dl
      ? c(m, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Lr &&
            Z1(E) === h.type))
      ? ((S = o(h, y.props)), (S.ref = vi(m, h, y)), (S.return = m), S)
      : ((S = hu(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = vi(m, h, y)),
        (S.return = m),
        S);
  }
  function a(m, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = wc(y, m.mode, S)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, S, E) {
    return h === null || h.tag !== 7
      ? ((h = Ao(y, m.mode, S, E)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = vc("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fs:
          return (
            (y = hu(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = vi(m, null, h)),
            (y.return = m),
            y
          );
        case fl:
          return (h = wc(h, m.mode, y)), (h.return = m), h;
        case Lr:
          var S = h._init;
          return d(m, S(h._payload), y);
      }
      if (Ti(h) || hi(h))
        return (h = Ao(h, m.mode, y, null)), (h.return = m), h;
      Vs(m, h);
    }
    return null;
  }
  function f(m, h, y, S) {
    var E = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : s(m, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Fs:
          return y.key === E ? u(m, h, y, S) : null;
        case fl:
          return y.key === E ? a(m, h, y, S) : null;
        case Lr:
          return (E = y._init), f(m, h, E(y._payload), S);
      }
      if (Ti(y) || hi(y)) return E !== null ? null : c(m, h, y, S, null);
      Vs(m, y);
    }
    return null;
  }
  function v(m, h, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), s(h, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Fs:
          return (m = m.get(S.key === null ? y : S.key) || null), u(h, m, S, E);
        case fl:
          return (m = m.get(S.key === null ? y : S.key) || null), a(h, m, S, E);
        case Lr:
          var M = S._init;
          return v(m, h, y, M(S._payload), E);
      }
      if (Ti(S) || hi(S)) return (m = m.get(y) || null), c(h, m, S, E, null);
      Vs(h, S);
    }
    return null;
  }
  function w(m, h, y, S) {
    for (
      var E = null, M = null, F = h, A = (h = 0), fe = null;
      F !== null && A < y.length;
      A++
    ) {
      F.index > A ? ((fe = F), (F = null)) : (fe = F.sibling);
      var q = f(m, F, y[A], S);
      if (q === null) {
        F === null && (F = fe);
        break;
      }
      e && F && q.alternate === null && t(m, F),
        (h = l(q, h, A)),
        M === null ? (E = q) : (M.sibling = q),
        (M = q),
        (F = fe);
    }
    if (A === y.length) return n(m, F), Oe && No(m, A), E;
    if (F === null) {
      for (; A < y.length; A++)
        (F = d(m, y[A], S)),
          F !== null &&
            ((h = l(F, h, A)), M === null ? (E = F) : (M.sibling = F), (M = F));
      return Oe && No(m, A), E;
    }
    for (F = r(m, F); A < y.length; A++)
      (fe = v(F, m, A, y[A], S)),
        fe !== null &&
          (e && fe.alternate !== null && F.delete(fe.key === null ? A : fe.key),
          (h = l(fe, h, A)),
          M === null ? (E = fe) : (M.sibling = fe),
          (M = fe));
    return (
      e &&
        F.forEach(function (tt) {
          return t(m, tt);
        }),
      Oe && No(m, A),
      E
    );
  }
  function _(m, h, y, S) {
    var E = hi(y);
    if (typeof E != "function") throw Error(C(150));
    if (((y = E.call(y)), y == null)) throw Error(C(151));
    for (
      var M = (E = null), F = h, A = (h = 0), fe = null, q = y.next();
      F !== null && !q.done;
      A++, q = y.next()
    ) {
      F.index > A ? ((fe = F), (F = null)) : (fe = F.sibling);
      var tt = f(m, F, q.value, S);
      if (tt === null) {
        F === null && (F = fe);
        break;
      }
      e && F && tt.alternate === null && t(m, F),
        (h = l(tt, h, A)),
        M === null ? (E = tt) : (M.sibling = tt),
        (M = tt),
        (F = fe);
    }
    if (q.done) return n(m, F), Oe && No(m, A), E;
    if (F === null) {
      for (; !q.done; A++, q = y.next())
        (q = d(m, q.value, S)),
          q !== null &&
            ((h = l(q, h, A)), M === null ? (E = q) : (M.sibling = q), (M = q));
      return Oe && No(m, A), E;
    }
    for (F = r(m, F); !q.done; A++, q = y.next())
      (q = v(F, m, A, q.value, S)),
        q !== null &&
          (e && q.alternate !== null && F.delete(q.key === null ? A : q.key),
          (h = l(q, h, A)),
          M === null ? (E = q) : (M.sibling = q),
          (M = q));
    return (
      e &&
        F.forEach(function (Yt) {
          return t(m, Yt);
        }),
      Oe && No(m, A),
      E
    );
  }
  function x(m, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === dl &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Fs:
          e: {
            for (var E = y.key, M = h; M !== null; ) {
              if (M.key === E) {
                if (((E = y.type), E === dl)) {
                  if (M.tag === 7) {
                    n(m, M.sibling),
                      (h = o(M, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  M.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Lr &&
                    Z1(E) === M.type)
                ) {
                  n(m, M.sibling),
                    (h = o(M, y.props)),
                    (h.ref = vi(m, M, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, M);
                break;
              } else t(m, M);
              M = M.sibling;
            }
            y.type === dl
              ? ((h = Ao(y.props.children, m.mode, S, y.key)),
                (h.return = m),
                (m = h))
              : ((S = hu(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = vi(m, h, y)),
                (S.return = m),
                (m = S));
          }
          return i(m);
        case fl:
          e: {
            for (M = y.key; h !== null; ) {
              if (h.key === M)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = wc(y, m.mode, S)), (h.return = m), (m = h);
          }
          return i(m);
        case Lr:
          return (M = y._init), x(m, h, M(y._payload), S);
      }
      if (Ti(y)) return w(m, h, y, S);
      if (hi(y)) return _(m, h, y, S);
      Vs(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = vc(y, m.mode, S)), (h.return = m), (m = h)),
        i(m))
      : n(m, h);
  }
  return x;
}
var Wl = yy(!0),
  vy = yy(!1),
  Es = {},
  mr = wo(Es),
  rs = wo(Es),
  os = wo(Es);
function Fo(e) {
  if (e === Es) throw Error(C(174));
  return e;
}
function Wd(e, t) {
  switch ((we(os, t), we(rs, e), we(mr, Es), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lf(t, e));
  }
  Ie(mr), we(mr, t);
}
function Ql() {
  Ie(mr), Ie(rs), Ie(os);
}
function wy(e) {
  Fo(os.current);
  var t = Fo(mr.current),
    n = lf(t, e.type);
  t !== n && (we(rs, e), we(mr, n));
}
function Qd(e) {
  rs.current === e && (Ie(mr), Ie(rs));
}
var Be = wo(0);
function qu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var dc = [];
function Kd() {
  for (var e = 0; e < dc.length; e++)
    dc[e]._workInProgressVersionPrimary = null;
  dc.length = 0;
}
var uu = Dr.ReactCurrentDispatcher,
  hc = Dr.ReactCurrentBatchConfig,
  Qo = 0,
  Ue = null,
  ot = null,
  ct = null,
  Yu = !1,
  $i = !1,
  ls = 0,
  G4 = 0;
function wt() {
  throw Error(C(321));
}
function Jd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Jn(e[n], t[n])) return !1;
  return !0;
}
function Zd(e, t, n, r, o, l) {
  if (
    ((Qo = l),
    (Ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uu.current = e === null || e.memoizedState === null ? Q4 : K4),
    (e = n(r, o)),
    $i)
  ) {
    l = 0;
    do {
      if ((($i = !1), (ls = 0), 25 <= l)) throw Error(C(301));
      (l += 1),
        (ct = ot = null),
        (t.updateQueue = null),
        (uu.current = J4),
        (e = n(r, o));
    } while ($i);
  }
  if (
    ((uu.current = Xu),
    (t = ot !== null && ot.next !== null),
    (Qo = 0),
    (ct = ot = Ue = null),
    (Yu = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function qd() {
  var e = ls !== 0;
  return (ls = 0), e;
}
function or() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ct === null ? (Ue.memoizedState = ct = e) : (ct = ct.next = e), ct;
}
function In() {
  if (ot === null) {
    var e = Ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ot.next;
  var t = ct === null ? Ue.memoizedState : ct.next;
  if (t !== null) (ct = t), (ot = e);
  else {
    if (e === null) throw Error(C(310));
    (ot = e),
      (e = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null,
      }),
      ct === null ? (Ue.memoizedState = ct = e) : (ct = ct.next = e);
  }
  return ct;
}
function is(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pc(e) {
  var t = In(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ot,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = l;
    do {
      var c = a.lane;
      if ((Qo & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = d), (i = r)) : (u = u.next = d),
          (Ue.lanes |= c),
          (Ko |= c);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      Jn(r, t.memoizedState) || (Ut = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ue.lanes |= l), (Ko |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mc(e) {
  var t = In(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Jn(l, t.memoizedState) || (Ut = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Sy() {}
function _y(e, t) {
  var n = Ue,
    r = In(),
    o = t(),
    l = !Jn(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Ut = !0)),
    (r = r.queue),
    Yd(ky.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ct !== null && ct.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ss(9, Ey.bind(null, n, r, o, t), void 0, null),
      ht === null)
    )
      throw Error(C(349));
    Qo & 30 || Cy(n, t, o);
  }
  return o;
}
function Cy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ey(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ty(t) && Ny(e);
}
function ky(e, t, n) {
  return n(function () {
    Ty(t) && Ny(e);
  });
}
function Ty(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jn(e, n);
  } catch {
    return !0;
  }
}
function Ny(e) {
  var t = Rr(e, 1);
  t !== null && Hn(t, e, 1, -1);
}
function q1(e) {
  var t = or();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: is,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = W4.bind(null, Ue, e)),
    [t.memoizedState, e]
  );
}
function ss(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function My() {
  return In().memoizedState;
}
function au(e, t, n, r) {
  var o = or();
  (Ue.flags |= e),
    (o.memoizedState = ss(1 | t, n, void 0, r === void 0 ? null : r));
}
function va(e, t, n, r) {
  var o = In();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ot !== null) {
    var i = ot.memoizedState;
    if (((l = i.destroy), r !== null && Jd(r, i.deps))) {
      o.memoizedState = ss(t, n, l, r);
      return;
    }
  }
  (Ue.flags |= e), (o.memoizedState = ss(1 | t, n, l, r));
}
function Y1(e, t) {
  return au(8390656, 8, e, t);
}
function Yd(e, t) {
  return va(2048, 8, e, t);
}
function Iy(e, t) {
  return va(4, 2, e, t);
}
function xy(e, t) {
  return va(4, 4, e, t);
}
function Fy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Py(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), va(4, 4, Fy.bind(null, t, e), n)
  );
}
function Xd() {}
function Oy(e, t) {
  var n = In();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ry(e, t) {
  var n = In();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ay(e, t, n) {
  return Qo & 21
    ? (Jn(n, t) || ((n = Lg()), (Ue.lanes |= n), (Ko |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ut = !0)), (e.memoizedState = n));
}
function j4(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hc.transition;
  hc.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (hc.transition = r);
  }
}
function Dy() {
  return In().memoizedState;
}
function H4(e, t, n) {
  var r = lo(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $y(e))
  )
    Ly(t, n);
  else if (((n = hy(e, t, n, r)), n !== null)) {
    var o = Rt();
    Hn(n, e, r, o), zy(n, t, r);
  }
}
function W4(e, t, n) {
  var r = lo(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($y(e)) Ly(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Jn(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), jd(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = hy(e, t, o, r)),
      n !== null && ((o = Rt()), Hn(n, e, r, o), zy(n, t, r));
  }
}
function $y(e) {
  var t = e.alternate;
  return e === Ue || (t !== null && t === Ue);
}
function Ly(e, t) {
  $i = Yu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n);
  }
}
var Xu = {
    readContext: Mn,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useInsertionEffect: wt,
    useLayoutEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useMutableSource: wt,
    useSyncExternalStore: wt,
    useId: wt,
    unstable_isNewReconciler: !1,
  },
  Q4 = {
    readContext: Mn,
    useCallback: function (e, t) {
      return (or().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Mn,
    useEffect: Y1,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        au(4194308, 4, Fy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return au(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return au(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = or();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = or();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = H4.bind(null, Ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = or();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: q1,
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      return (or().memoizedState = e);
    },
    useTransition: function () {
      var e = q1(!1),
        t = e[0];
      return (e = j4.bind(null, e[1])), (or().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ue,
        o = or();
      if (Oe) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ht === null)) throw Error(C(349));
        Qo & 30 || Cy(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Y1(ky.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ss(9, Ey.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = or(),
        t = ht.identifierPrefix;
      if (Oe) {
        var n = Nr,
          r = Tr;
        (n = (r & ~(1 << (32 - jn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ls++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G4++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  K4 = {
    readContext: Mn,
    useCallback: Oy,
    useContext: Mn,
    useEffect: Yd,
    useImperativeHandle: Py,
    useInsertionEffect: Iy,
    useLayoutEffect: xy,
    useMemo: Ry,
    useReducer: pc,
    useRef: My,
    useState: function () {
      return pc(is);
    },
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      var t = In();
      return Ay(t, ot.memoizedState, e);
    },
    useTransition: function () {
      var e = pc(is)[0],
        t = In().memoizedState;
      return [e, t];
    },
    useMutableSource: Sy,
    useSyncExternalStore: _y,
    useId: Dy,
    unstable_isNewReconciler: !1,
  },
  J4 = {
    readContext: Mn,
    useCallback: Oy,
    useContext: Mn,
    useEffect: Yd,
    useImperativeHandle: Py,
    useInsertionEffect: Iy,
    useLayoutEffect: xy,
    useMemo: Ry,
    useReducer: mc,
    useRef: My,
    useState: function () {
      return mc(is);
    },
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      var t = In();
      return ot === null ? (t.memoizedState = e) : Ay(t, ot.memoizedState, e);
    },
    useTransition: function () {
      var e = mc(is)[0],
        t = In().memoizedState;
      return [e, t];
    },
    useMutableSource: Sy,
    useSyncExternalStore: _y,
    useId: Dy,
    unstable_isNewReconciler: !1,
  };
function Kl(e, t) {
  try {
    var n = "",
      r = t;
    do (n += CE(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z4 = typeof WeakMap == "function" ? WeakMap : Map;
function By(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ea || ((ea = !0), (Bf = r)), xf(e, t);
    }),
    n
  );
}
function Uy(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xf(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        xf(e, t),
          typeof r != "function" &&
            (oo === null ? (oo = new Set([this])) : oo.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function X1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z4();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ak.bind(null, e, t, n)), t.then(e, e));
}
function b1(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ep(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mr(-1, 1)), (t.tag = 2), ro(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var q4 = Dr.ReactCurrentOwner,
  Ut = !1;
function Ft(e, t, n, r) {
  t.child = e === null ? vy(t, null, n, r) : Wl(t, e.child, n, r);
}
function tp(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    xl(t, o),
    (r = Zd(e, t, n, r, l, o)),
    (n = qd()),
    e !== null && !Ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ar(e, t, o))
      : (Oe && n && Ld(t), (t.flags |= 1), Ft(e, t, r, o), t.child)
  );
}
function np(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !i0(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Vy(e, t, l, r, o))
      : ((e = hu(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bi), n(i, r) && e.ref === t.ref)
    )
      return Ar(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = io(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vy(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (bi(l, r) && e.ref === t.ref)
      if (((Ut = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ut = !0);
      else return (t.lanes = e.lanes), Ar(e, t, o);
  }
  return Ff(e, t, n, r, o);
}
function Gy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(Cl, on),
        (on |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(Cl, on),
          (on |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        we(Cl, on),
        (on |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(Cl, on),
      (on |= r);
  return Ft(e, t, o, n), t.child;
}
function jy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ff(e, t, n, r, o) {
  var l = Gt(n) ? Ho : Mt.current;
  return (
    (l = jl(t, l)),
    xl(t, o),
    (n = Zd(e, t, n, r, l, o)),
    (r = qd()),
    e !== null && !Ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ar(e, t, o))
      : (Oe && r && Ld(t), (t.flags |= 1), Ft(e, t, n, o), t.child)
  );
}
function rp(e, t, n, r, o) {
  if (Gt(n)) {
    var l = !0;
    Hu(t);
  } else l = !1;
  if ((xl(t, o), t.stateNode === null))
    cu(e, t), gy(t, n, r), If(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Mn(a))
      : ((a = Gt(n) ? Ho : Mt.current), (a = jl(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && J1(t, i, r, a)),
      (zr = !1);
    var f = t.memoizedState;
    (i.state = f),
      Zu(t, r, i, o),
      (u = t.memoizedState),
      s !== r || f !== u || Vt.current || zr
        ? (typeof c == "function" && (Mf(t, n, c, r), (u = t.memoizedState)),
          (s = zr || K1(t, n, s, r, f, u, a))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      py(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Dn(t.type, s)),
      (i.props = a),
      (d = t.pendingProps),
      (f = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Mn(u))
        : ((u = Gt(n) ? Ho : Mt.current), (u = jl(t, u)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== d || f !== u) && J1(t, i, r, u)),
      (zr = !1),
      (f = t.memoizedState),
      (i.state = f),
      Zu(t, r, i, o);
    var w = t.memoizedState;
    s !== d || f !== w || Vt.current || zr
      ? (typeof v == "function" && (Mf(t, n, v, r), (w = t.memoizedState)),
        (a = zr || K1(t, n, a, r, f, w, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pf(e, t, n, r, l, o);
}
function Pf(e, t, n, r, o, l) {
  jy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && G1(t, n, !1), Ar(e, t, l);
  (r = t.stateNode), (q4.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Wl(t, e.child, null, l)), (t.child = Wl(t, null, s, l)))
      : Ft(e, t, s, l),
    (t.memoizedState = r.state),
    o && G1(t, n, !0),
    t.child
  );
}
function Hy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? V1(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && V1(e, t.context, !1),
    Wd(e, t.containerInfo);
}
function op(e, t, n, r, o) {
  return Hl(), Bd(o), (t.flags |= 256), Ft(e, t, n, r), t.child;
}
var Of = { dehydrated: null, treeContext: null, retryLane: 0 };
function Rf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wy(e, t, n) {
  var r = t.pendingProps,
    o = Be.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Be, o & 1),
    e === null)
  )
    return (
      Tf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = _a(i, r, 0, null)),
              (e = Ao(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Rf(n)),
              (t.memoizedState = Of),
              e)
            : bd(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Y4(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = io(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = io(s, l)) : ((l = Ao(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Rf(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Of),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = io(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bd(e, t) {
  return (
    (t = _a({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gs(e, t, n, r) {
  return (
    r !== null && Bd(r),
    Wl(t, e.child, null, n),
    (e = bd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Y4(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gc(Error(C(422)))), Gs(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = _a({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Ao(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Wl(t, e.child, null, i),
        (t.child.memoizedState = Rf(i)),
        (t.memoizedState = Of),
        l);
  if (!(t.mode & 1)) return Gs(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(C(419))), (r = gc(l, r, void 0)), Gs(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Ut || s)) {
    if (((r = ht), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Rr(e, o), Hn(r, e, o, -1));
    }
    return l0(), (r = gc(Error(C(421)))), Gs(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ck.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (un = no(o.nextSibling)),
      (fn = t),
      (Oe = !0),
      (Ln = null),
      e !== null &&
        ((vn[wn++] = Tr),
        (vn[wn++] = Nr),
        (vn[wn++] = Wo),
        (Tr = e.id),
        (Nr = e.overflow),
        (Wo = t)),
      (t = bd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nf(e.return, t, n);
}
function yc(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Qy(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ft(e, t, r.children, n), (r = Be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lp(e, n, t);
        else if (e.tag === 19) lp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && qu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yc(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && qu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yc(t, !0, n, null, l);
        break;
      case "together":
        yc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function cu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ar(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ko |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = io(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = io(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function X4(e, t, n) {
  switch (t.tag) {
    case 3:
      Hy(t), Hl();
      break;
    case 5:
      wy(t);
      break;
    case 1:
      Gt(t.type) && Hu(t);
      break;
    case 4:
      Wd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(Ku, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Be, Be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wy(e, t, n)
          : (we(Be, Be.current & 1),
            (e = Ar(e, t, n)),
            e !== null ? e.sibling : null);
      we(Be, Be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Be, Be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Gy(e, t, n);
  }
  return Ar(e, t, n);
}
var Ky, Af, Jy, Zy;
Ky = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Af = function () {};
Jy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fo(mr.current);
    var l = null;
    switch (n) {
      case "input":
        (o = tf(e, o)), (r = tf(e, r)), (l = []);
        break;
      case "select":
        (o = Ve({}, o, { value: void 0 })),
          (r = Ve({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = of(e, o)), (r = of(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gu);
    }
    sf(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Qi.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Qi.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && Ce("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Zy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wi(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function St(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function b4(e, t, n) {
  var r = t.pendingProps;
  switch ((zd(t), t.tag)) {
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
      return St(t), null;
    case 1:
      return Gt(t.type) && ju(), St(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ql(),
        Ie(Vt),
        Ie(Mt),
        Kd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Us(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ln !== null && (Gf(Ln), (Ln = null)))),
        Af(e, t),
        St(t),
        null
      );
    case 5:
      Qd(t);
      var o = Fo(os.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Jy(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return St(t), null;
        }
        if (((e = Fo(mr.current)), Us(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[ar] = t), (r[ns] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ce("cancel", r), Ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mi.length; o++) Ce(Mi[o], r);
              break;
            case "source":
              Ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ce("error", r), Ce("load", r);
              break;
            case "details":
              Ce("toggle", r);
              break;
            case "input":
              p1(r, l), Ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                Ce("invalid", r);
              break;
            case "textarea":
              g1(r, l), Ce("invalid", r);
          }
          sf(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Qi.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Ce("scroll", r);
            }
          switch (n) {
            case "input":
              Ps(r), m1(r, l, !0);
              break;
            case "textarea":
              Ps(r), y1(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Gu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ar] = t),
            (e[ns] = r),
            Ky(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = uf(n, r)), n)) {
              case "dialog":
                Ce("cancel", e), Ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mi.length; o++) Ce(Mi[o], e);
                o = r;
                break;
              case "source":
                Ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ce("error", e), Ce("load", e), (o = r);
                break;
              case "details":
                Ce("toggle", e), (o = r);
                break;
              case "input":
                p1(e, r), (o = tf(e, r)), Ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ve({}, r, { value: void 0 })),
                  Ce("invalid", e);
                break;
              case "textarea":
                g1(e, r), (o = of(e, r)), Ce("invalid", e);
                break;
              default:
                o = r;
            }
            sf(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? Tg(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Eg(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ki(e, u)
                    : typeof u == "number" && Ki(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Qi.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && Ce("scroll", e)
                      : u != null && Ed(e, l, u, i));
              }
            switch (n) {
              case "input":
                Ps(e), m1(e, r, !1);
                break;
              case "textarea":
                Ps(e), y1(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ho(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Tl(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Tl(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Gu);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return St(t), null;
    case 6:
      if (e && t.stateNode != null) Zy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Fo(os.current)), Fo(mr.current), Us(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ar] = t),
            (l = r.nodeValue !== n) && ((e = fn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ar] = t),
            (t.stateNode = r);
      }
      return St(t), null;
    case 13:
      if (
        (Ie(Be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Oe && un !== null && t.mode & 1 && !(t.flags & 128))
          dy(), Hl(), (t.flags |= 98560), (l = !1);
        else if (((l = Us(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(C(317));
            l[ar] = t;
          } else
            Hl(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          St(t), (l = !1);
        } else Ln !== null && (Gf(Ln), (Ln = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Be.current & 1 ? ut === 0 && (ut = 3) : l0())),
          t.updateQueue !== null && (t.flags |= 4),
          St(t),
          null);
    case 4:
      return (
        Ql(), Af(e, t), e === null && es(t.stateNode.containerInfo), St(t), null
      );
    case 10:
      return Gd(t.type._context), St(t), null;
    case 17:
      return Gt(t.type) && ju(), St(t), null;
    case 19:
      if ((Ie(Be), (l = t.memoizedState), l === null)) return St(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) wi(l, !1);
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = qu(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wi(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Be, (Be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Je() > Jl &&
            ((t.flags |= 128), (r = !0), wi(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qu(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wi(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !Oe)
            )
              return St(t), null;
          } else
            2 * Je() - l.renderingStartTime > Jl &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wi(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Je()),
          (t.sibling = null),
          (n = Be.current),
          we(Be, r ? (n & 1) | 2 : n & 1),
          t)
        : (St(t), null);
    case 22:
    case 23:
      return (
        o0(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? on & 1073741824 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : St(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ek(e, t) {
  switch ((zd(t), t.tag)) {
    case 1:
      return (
        Gt(t.type) && ju(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ql(),
        Ie(Vt),
        Ie(Mt),
        Kd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qd(t), null;
    case 13:
      if (
        (Ie(Be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        Hl();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ie(Be), null;
    case 4:
      return Ql(), null;
    case 10:
      return Gd(t.type._context), null;
    case 22:
    case 23:
      return o0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var js = !1,
  kt = !1,
  tk = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function _l(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        je(e, t, r);
      }
    else n.current = null;
}
function Df(e, t, n) {
  try {
    n();
  } catch (r) {
    je(e, t, r);
  }
}
var ip = !1;
function nk(e, t) {
  if (((vf = Bu), (e = bg()), $d(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = i + o),
                d !== l || (r !== 0 && d.nodeType !== 3) || (u = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++a === o && (s = i),
                f === l && ++c === r && (u = i),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wf = { focusedElem: e, selectionRange: n }, Bu = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var _ = w.memoizedProps,
                    x = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Dn(t.type, _),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          je(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = ip), (ip = !1), w;
}
function Li(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Df(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function wa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $f(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ar], delete t[ns], delete t[Cf], delete t[z4], delete t[B4])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lf(e, t, n), e = e.sibling; e !== null; ) Lf(e, t, n), (e = e.sibling);
}
function zf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zf(e, t, n), e = e.sibling; e !== null; ) zf(e, t, n), (e = e.sibling);
}
var pt = null,
  $n = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; ) Xy(e, t, n), (n = n.sibling);
}
function Xy(e, t, n) {
  if (pr && typeof pr.onCommitFiberUnmount == "function")
    try {
      pr.onCommitFiberUnmount(fa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      kt || _l(n, t);
    case 6:
      var r = pt,
        o = $n;
      (pt = null),
        $r(e, t, n),
        (pt = r),
        ($n = o),
        pt !== null &&
          ($n
            ? ((e = pt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pt.removeChild(n.stateNode));
      break;
    case 18:
      pt !== null &&
        ($n
          ? ((e = pt),
            (n = n.stateNode),
            e.nodeType === 8
              ? cc(e.parentNode, n)
              : e.nodeType === 1 && cc(e, n),
            Yi(e))
          : cc(pt, n.stateNode));
      break;
    case 4:
      (r = pt),
        (o = $n),
        (pt = n.stateNode.containerInfo),
        ($n = !0),
        $r(e, t, n),
        (pt = r),
        ($n = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !kt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Df(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (
        !kt &&
        (_l(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          je(n, t, s);
        }
      $r(e, t, n);
      break;
    case 21:
      $r(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((kt = (r = kt) || n.memoizedState !== null), $r(e, t, n), (kt = r))
        : $r(e, t, n);
      break;
    default:
      $r(e, t, n);
  }
}
function up(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tk()),
      t.forEach(function (r) {
        var o = fk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function An(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (pt = s.stateNode), ($n = !1);
              break e;
            case 3:
              (pt = s.stateNode.containerInfo), ($n = !0);
              break e;
            case 4:
              (pt = s.stateNode.containerInfo), ($n = !0);
              break e;
          }
          s = s.return;
        }
        if (pt === null) throw Error(C(160));
        Xy(l, i, o), (pt = null), ($n = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        je(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) by(t, e), (t = t.sibling);
}
function by(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((An(t, e), rr(e), r & 4)) {
        try {
          Li(3, e, e.return), wa(3, e);
        } catch (_) {
          je(e, e.return, _);
        }
        try {
          Li(5, e, e.return);
        } catch (_) {
          je(e, e.return, _);
        }
      }
      break;
    case 1:
      An(t, e), rr(e), r & 512 && n !== null && _l(n, n.return);
      break;
    case 5:
      if (
        (An(t, e),
        rr(e),
        r & 512 && n !== null && _l(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ki(o, "");
        } catch (_) {
          je(e, e.return, _);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Sg(o, l),
              uf(s, i);
            var a = uf(s, l);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                d = u[i + 1];
              c === "style"
                ? Tg(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Eg(o, d)
                : c === "children"
                ? Ki(o, d)
                : Ed(o, c, d, a);
            }
            switch (s) {
              case "input":
                nf(o, l);
                break;
              case "textarea":
                _g(o, l);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? Tl(o, !!l.multiple, v, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Tl(o, !!l.multiple, l.defaultValue, !0)
                      : Tl(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ns] = l;
          } catch (_) {
            je(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((An(t, e), rr(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (_) {
          je(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (An(t, e), rr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yi(t.containerInfo);
        } catch (_) {
          je(e, e.return, _);
        }
      break;
    case 4:
      An(t, e), rr(e);
      break;
    case 13:
      An(t, e),
        rr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (n0 = Je())),
        r & 4 && up(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((kt = (a = kt) || c), An(t, e), (kt = a)) : An(t, e),
        rr(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Li(4, f, f.return);
                  break;
                case 1:
                  _l(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (_) {
                      je(r, n, _);
                    }
                  }
                  break;
                case 5:
                  _l(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    cp(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : cp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = d.stateNode),
                      (u = d.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = kg("display", i)));
              } catch (_) {
                je(e, e.return, _);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (_) {
                je(e, e.return, _);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      An(t, e), rr(e), r & 4 && up(e);
      break;
    case 21:
      break;
    default:
      An(t, e), rr(e);
  }
}
function rr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ki(o, ""), (r.flags &= -33));
          var l = sp(e);
          zf(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = sp(e);
          Lf(e, s, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      je(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rk(e, t, n) {
  (R = e), ev(e);
}
function ev(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || js;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || kt;
        s = js;
        var a = kt;
        if (((js = i), (kt = u) && !a))
          for (R = o; R !== null; )
            (i = R),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? fp(o)
                : u !== null
                ? ((u.return = i), (R = u))
                : fp(o);
        for (; l !== null; ) (R = l), ev(l), (l = l.sibling);
        (R = o), (js = s), (kt = a);
      }
      ap(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (R = l)) : ap(e);
  }
}
function ap(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              kt || wa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !kt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Dn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Q1(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Q1(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Yi(d);
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
              throw Error(C(163));
          }
        kt || (t.flags & 512 && $f(t));
      } catch (f) {
        je(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function cp(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function fp(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wa(4, t);
          } catch (u) {
            je(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              je(t, o, u);
            }
          }
          var l = t.return;
          try {
            $f(t);
          } catch (u) {
            je(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $f(t);
          } catch (u) {
            je(t, i, u);
          }
      }
    } catch (u) {
      je(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var ok = Math.ceil,
  bu = Dr.ReactCurrentDispatcher,
  e0 = Dr.ReactCurrentOwner,
  Tn = Dr.ReactCurrentBatchConfig,
  ae = 0,
  ht = null,
  Xe = null,
  gt = 0,
  on = 0,
  Cl = wo(0),
  ut = 0,
  us = null,
  Ko = 0,
  Sa = 0,
  t0 = 0,
  zi = null,
  Bt = null,
  n0 = 0,
  Jl = 1 / 0,
  wr = null,
  ea = !1,
  Bf = null,
  oo = null,
  Hs = !1,
  Jr = null,
  ta = 0,
  Bi = 0,
  Uf = null,
  fu = -1,
  du = 0;
function Rt() {
  return ae & 6 ? Je() : fu !== -1 ? fu : (fu = Je());
}
function lo(e) {
  return e.mode & 1
    ? ae & 2 && gt !== 0
      ? gt & -gt
      : V4.transition !== null
      ? (du === 0 && (du = Lg()), du)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hg(e.type))),
        e)
    : 1;
}
function Hn(e, t, n, r) {
  if (50 < Bi) throw ((Bi = 0), (Uf = null), Error(C(185)));
  Ss(e, n, r),
    (!(ae & 2) || e !== ht) &&
      (e === ht && (!(ae & 2) && (Sa |= n), ut === 4 && Gr(e, gt)),
      jt(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((Jl = Je() + 500), ga && So()));
}
function jt(e, t) {
  var n = e.callbackNode;
  VE(e, t);
  var r = zu(e, e === ht ? gt : 0);
  if (r === 0)
    n !== null && S1(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && S1(n), t === 1))
      e.tag === 0 ? U4(dp.bind(null, e)) : ay(dp.bind(null, e)),
        $4(function () {
          !(ae & 6) && So();
        }),
        (n = null);
    else {
      switch (zg(r)) {
        case 1:
          n = Id;
          break;
        case 4:
          n = Dg;
          break;
        case 16:
          n = Lu;
          break;
        case 536870912:
          n = $g;
          break;
        default:
          n = Lu;
      }
      n = uv(n, tv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tv(e, t) {
  if (((fu = -1), (du = 0), ae & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Fl() && e.callbackNode !== n) return null;
  var r = zu(e, e === ht ? gt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = na(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var l = rv();
    (ht !== e || gt !== t) && ((wr = null), (Jl = Je() + 500), Ro(e, t));
    do
      try {
        sk();
        break;
      } catch (s) {
        nv(e, s);
      }
    while (1);
    Vd(),
      (bu.current = l),
      (ae = o),
      Xe !== null ? (t = 0) : ((ht = null), (gt = 0), (t = ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = hf(e)), o !== 0 && ((r = o), (t = Vf(e, o)))), t === 1)
    )
      throw ((n = us), Ro(e, 0), Gr(e, r), jt(e, Je()), n);
    if (t === 6) Gr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !lk(o) &&
          ((t = na(e, r)),
          t === 2 && ((l = hf(e)), l !== 0 && ((r = l), (t = Vf(e, l)))),
          t === 1))
      )
        throw ((n = us), Ro(e, 0), Gr(e, r), jt(e, Je()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Mo(e, Bt, wr);
          break;
        case 3:
          if (
            (Gr(e, r), (r & 130023424) === r && ((t = n0 + 500 - Je()), 10 < t))
          ) {
            if (zu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = _f(Mo.bind(null, e, Bt, wr), t);
            break;
          }
          Mo(e, Bt, wr);
          break;
        case 4:
          if ((Gr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - jn(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ok(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _f(Mo.bind(null, e, Bt, wr), r);
            break;
          }
          Mo(e, Bt, wr);
          break;
        case 5:
          Mo(e, Bt, wr);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return jt(e, Je()), e.callbackNode === n ? tv.bind(null, e) : null;
}
function Vf(e, t) {
  var n = zi;
  return (
    e.current.memoizedState.isDehydrated && (Ro(e, t).flags |= 256),
    (e = na(e, t)),
    e !== 2 && ((t = Bt), (Bt = n), t !== null && Gf(t)),
    e
  );
}
function Gf(e) {
  Bt === null ? (Bt = e) : Bt.push.apply(Bt, e);
}
function lk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Jn(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gr(e, t) {
  for (
    t &= ~t0,
      t &= ~Sa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - jn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dp(e) {
  if (ae & 6) throw Error(C(327));
  Fl();
  var t = zu(e, 0);
  if (!(t & 1)) return jt(e, Je()), null;
  var n = na(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hf(e);
    r !== 0 && ((t = r), (n = Vf(e, r)));
  }
  if (n === 1) throw ((n = us), Ro(e, 0), Gr(e, t), jt(e, Je()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mo(e, Bt, wr),
    jt(e, Je()),
    null
  );
}
function r0(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = n), ae === 0 && ((Jl = Je() + 500), ga && So());
  }
}
function Jo(e) {
  Jr !== null && Jr.tag === 0 && !(ae & 6) && Fl();
  var t = ae;
  ae |= 1;
  var n = Tn.transition,
    r = he;
  try {
    if (((Tn.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Tn.transition = n), (ae = t), !(ae & 6) && So();
  }
}
function o0() {
  (on = Cl.current), Ie(Cl);
}
function Ro(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), D4(n)), Xe !== null))
    for (n = Xe.return; n !== null; ) {
      var r = n;
      switch ((zd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ju();
          break;
        case 3:
          Ql(), Ie(Vt), Ie(Mt), Kd();
          break;
        case 5:
          Qd(r);
          break;
        case 4:
          Ql();
          break;
        case 13:
          Ie(Be);
          break;
        case 19:
          Ie(Be);
          break;
        case 10:
          Gd(r.type._context);
          break;
        case 22:
        case 23:
          o0();
      }
      n = n.return;
    }
  if (
    ((ht = e),
    (Xe = e = io(e.current, null)),
    (gt = on = t),
    (ut = 0),
    (us = null),
    (t0 = Sa = Ko = 0),
    (Bt = zi = null),
    xo !== null)
  ) {
    for (t = 0; t < xo.length; t++)
      if (((n = xo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    xo = null;
  }
  return e;
}
function nv(e, t) {
  do {
    var n = Xe;
    try {
      if ((Vd(), (uu.current = Xu), Yu)) {
        for (var r = Ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Yu = !1;
      }
      if (
        ((Qo = 0),
        (ct = ot = Ue = null),
        ($i = !1),
        (ls = 0),
        (e0.current = null),
        n === null || n.return === null)
      ) {
        (ut = 1), (us = t), (Xe = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = gt),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = b1(i);
          if (v !== null) {
            (v.flags &= -257),
              ep(v, i, s, l, t),
              v.mode & 1 && X1(l, a, t),
              (t = v),
              (u = a);
            var w = t.updateQueue;
            if (w === null) {
              var _ = new Set();
              _.add(u), (t.updateQueue = _);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              X1(l, a, t), l0();
              break e;
            }
            u = Error(C(426));
          }
        } else if (Oe && s.mode & 1) {
          var x = b1(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ep(x, i, s, l, t),
              Bd(Kl(u, s));
            break e;
          }
        }
        (l = u = Kl(u, s)),
          ut !== 4 && (ut = 2),
          zi === null ? (zi = [l]) : zi.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = By(l, u, t);
              W1(l, m);
              break e;
            case 1:
              s = u;
              var h = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (oo === null || !oo.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Uy(l, s, t);
                W1(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      lv(n);
    } catch (E) {
      (t = E), Xe === n && n !== null && (Xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rv() {
  var e = bu.current;
  return (bu.current = Xu), e === null ? Xu : e;
}
function l0() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    ht === null || (!(Ko & 268435455) && !(Sa & 268435455)) || Gr(ht, gt);
}
function na(e, t) {
  var n = ae;
  ae |= 2;
  var r = rv();
  (ht !== e || gt !== t) && ((wr = null), Ro(e, t));
  do
    try {
      ik();
      break;
    } catch (o) {
      nv(e, o);
    }
  while (1);
  if ((Vd(), (ae = n), (bu.current = r), Xe !== null)) throw Error(C(261));
  return (ht = null), (gt = 0), ut;
}
function ik() {
  for (; Xe !== null; ) ov(Xe);
}
function sk() {
  for (; Xe !== null && !OE(); ) ov(Xe);
}
function ov(e) {
  var t = sv(e.alternate, e, on);
  (e.memoizedProps = e.pendingProps),
    t === null ? lv(e) : (Xe = t),
    (e0.current = null);
}
function lv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ek(n, t)), n !== null)) {
        (n.flags &= 32767), (Xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ut = 6), (Xe = null);
        return;
      }
    } else if (((n = b4(n, t, on)), n !== null)) {
      Xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Xe = t;
      return;
    }
    Xe = t = e;
  } while (t !== null);
  ut === 0 && (ut = 5);
}
function Mo(e, t, n) {
  var r = he,
    o = Tn.transition;
  try {
    (Tn.transition = null), (he = 1), uk(e, t, n, r);
  } finally {
    (Tn.transition = o), (he = r);
  }
  return null;
}
function uk(e, t, n, r) {
  do Fl();
  while (Jr !== null);
  if (ae & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (GE(e, l),
    e === ht && ((Xe = ht = null), (gt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hs ||
      ((Hs = !0),
      uv(Lu, function () {
        return Fl(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Tn.transition), (Tn.transition = null);
    var i = he;
    he = 1;
    var s = ae;
    (ae |= 4),
      (e0.current = null),
      nk(e, n),
      by(n, e),
      I4(wf),
      (Bu = !!vf),
      (wf = vf = null),
      (e.current = n),
      rk(n),
      RE(),
      (ae = s),
      (he = i),
      (Tn.transition = l);
  } else e.current = n;
  if (
    (Hs && ((Hs = !1), (Jr = e), (ta = o)),
    (l = e.pendingLanes),
    l === 0 && (oo = null),
    $E(n.stateNode),
    jt(e, Je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ea) throw ((ea = !1), (e = Bf), (Bf = null), e);
  return (
    ta & 1 && e.tag !== 0 && Fl(),
    (l = e.pendingLanes),
    l & 1 ? (e === Uf ? Bi++ : ((Bi = 0), (Uf = e))) : (Bi = 0),
    So(),
    null
  );
}
function Fl() {
  if (Jr !== null) {
    var e = zg(ta),
      t = Tn.transition,
      n = he;
    try {
      if (((Tn.transition = null), (he = 16 > e ? 16 : e), Jr === null))
        var r = !1;
      else {
        if (((e = Jr), (Jr = null), (ta = 0), ae & 6)) throw Error(C(331));
        var o = ae;
        for (ae |= 4, R = e.current; R !== null; ) {
          var l = R,
            i = l.child;
          if (R.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (R = a; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Li(8, c, l);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        v = c.return;
                      if ((qy(c), c === a)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (R = f);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var _ = w.child;
                if (_ !== null) {
                  w.child = null;
                  do {
                    var x = _.sibling;
                    (_.sibling = null), (_ = x);
                  } while (_ !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (R = i);
          else
            e: for (; R !== null; ) {
              if (((l = R), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Li(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (R = m);
                break e;
              }
              R = l.return;
            }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          i = R;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (R = y);
          else
            e: for (i = h; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(9, s);
                  }
                } catch (E) {
                  je(s, s.return, E);
                }
              if (s === i) {
                R = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (R = S);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((ae = o), So(), pr && typeof pr.onPostCommitFiberRoot == "function")
        )
          try {
            pr.onPostCommitFiberRoot(fa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Tn.transition = t);
    }
  }
  return !1;
}
function hp(e, t, n) {
  (t = Kl(n, t)),
    (t = By(e, t, 1)),
    (e = ro(e, t, 1)),
    (t = Rt()),
    e !== null && (Ss(e, 1, t), jt(e, t));
}
function je(e, t, n) {
  if (e.tag === 3) hp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (oo === null || !oo.has(r)))
        ) {
          (e = Kl(n, e)),
            (e = Uy(t, e, 1)),
            (t = ro(t, e, 1)),
            (e = Rt()),
            t !== null && (Ss(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ak(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (gt & n) === n &&
      (ut === 4 || (ut === 3 && (gt & 130023424) === gt && 500 > Je() - n0)
        ? Ro(e, 0)
        : (t0 |= n)),
    jt(e, t);
}
function iv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = As), (As <<= 1), !(As & 130023424) && (As = 4194304))
      : (t = 1));
  var n = Rt();
  (e = Rr(e, t)), e !== null && (Ss(e, t, n), jt(e, n));
}
function ck(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), iv(e, n);
}
function fk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), iv(e, n);
}
var sv;
sv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Vt.current) Ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ut = !1), X4(e, t, n);
      Ut = !!(e.flags & 131072);
    }
  else (Ut = !1), Oe && t.flags & 1048576 && cy(t, Qu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      cu(e, t), (e = t.pendingProps);
      var o = jl(t, Mt.current);
      xl(t, n), (o = Zd(null, t, r, e, o, n));
      var l = qd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Gt(r) ? ((l = !0), Hu(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Hd(t),
            (o.updater = ya),
            (t.stateNode = o),
            (o._reactInternals = t),
            If(t, r, e, n),
            (t = Pf(null, t, r, !0, l, n)))
          : ((t.tag = 0), Oe && l && Ld(t), Ft(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (cu(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = hk(r)),
          (e = Dn(r, e)),
          o)
        ) {
          case 0:
            t = Ff(null, t, r, e, n);
            break e;
          case 1:
            t = rp(null, t, r, e, n);
            break e;
          case 11:
            t = tp(null, t, r, e, n);
            break e;
          case 14:
            t = np(null, t, r, Dn(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Dn(r, o)),
        Ff(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Dn(r, o)),
        rp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Hy(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          py(e, t),
          Zu(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Kl(Error(C(423)), t)), (t = op(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Kl(Error(C(424)), t)), (t = op(e, t, r, n, o));
            break e;
          } else
            for (
              un = no(t.stateNode.containerInfo.firstChild),
                fn = t,
                Oe = !0,
                Ln = null,
                n = vy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hl(), r === o)) {
            t = Ar(e, t, n);
            break e;
          }
          Ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wy(t),
        e === null && Tf(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Sf(r, o) ? (i = null) : l !== null && Sf(r, l) && (t.flags |= 32),
        jy(e, t),
        Ft(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Tf(t), null;
    case 13:
      return Wy(e, t, n);
    case 4:
      return (
        Wd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wl(t, null, r, n)) : Ft(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Dn(r, o)),
        tp(e, t, r, o, n)
      );
    case 7:
      return Ft(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ft(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ft(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          we(Ku, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Jn(l.value, i)) {
            if (l.children === o.children && !Vt.current) {
              t = Ar(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = Mr(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Nf(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Nf(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ft(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xl(t, n),
        (o = Mn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ft(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Dn(r, t.pendingProps)),
        (o = Dn(r.type, o)),
        np(e, t, r, o, n)
      );
    case 15:
      return Vy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Dn(r, o)),
        cu(e, t),
        (t.tag = 1),
        Gt(r) ? ((e = !0), Hu(t)) : (e = !1),
        xl(t, n),
        gy(t, r, o),
        If(t, r, o, n),
        Pf(null, t, r, !0, e, n)
      );
    case 19:
      return Qy(e, t, n);
    case 22:
      return Gy(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function uv(e, t) {
  return Ag(e, t);
}
function dk(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kn(e, t, n, r) {
  return new dk(e, t, n, r);
}
function i0(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hk(e) {
  if (typeof e == "function") return i0(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Td)) return 11;
    if (e === Nd) return 14;
  }
  return 2;
}
function io(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hu(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) i0(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case dl:
        return Ao(n.children, o, l, t);
      case kd:
        (i = 8), (o |= 8);
        break;
      case Yc:
        return (
          (e = kn(12, n, t, o | 2)), (e.elementType = Yc), (e.lanes = l), e
        );
      case Xc:
        return (e = kn(13, n, t, o)), (e.elementType = Xc), (e.lanes = l), e;
      case bc:
        return (e = kn(19, n, t, o)), (e.elementType = bc), (e.lanes = l), e;
      case yg:
        return _a(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mg:
              i = 10;
              break e;
            case gg:
              i = 9;
              break e;
            case Td:
              i = 11;
              break e;
            case Nd:
              i = 14;
              break e;
            case Lr:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kn(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ao(e, t, n, r) {
  return (e = kn(7, e, r, t)), (e.lanes = n), e;
}
function _a(e, t, n, r) {
  return (
    (e = kn(22, e, r, t)),
    (e.elementType = yg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vc(e, t, n) {
  return (e = kn(6, e, null, t)), (e.lanes = n), e;
}
function wc(e, t, n) {
  return (
    (t = kn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pk(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ba(0)),
    (this.expirationTimes = ba(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ba(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function s0(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new pk(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = kn(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hd(l),
    e
  );
}
function mk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fl,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function av(e) {
  if (!e) return po;
  e = e._reactInternals;
  e: {
    if (el(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Gt(n)) return uy(e, n, t);
  }
  return t;
}
function cv(e, t, n, r, o, l, i, s, u) {
  return (
    (e = s0(n, r, !0, e, o, l, i, s, u)),
    (e.context = av(null)),
    (n = e.current),
    (r = Rt()),
    (o = lo(n)),
    (l = Mr(r, o)),
    (l.callback = t ?? null),
    ro(n, l, o),
    (e.current.lanes = o),
    Ss(e, o, r),
    jt(e, r),
    e
  );
}
function Ca(e, t, n, r) {
  var o = t.current,
    l = Rt(),
    i = lo(o);
  return (
    (n = av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mr(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ro(o, t, i)),
    e !== null && (Hn(e, o, i, l), su(e, o, i)),
    i
  );
}
function ra(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function u0(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function gk() {
  return null;
}
var fv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function a0(e) {
  this._internalRoot = e;
}
Ea.prototype.render = a0.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ca(e, t, null, null);
};
Ea.prototype.unmount = a0.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jo(function () {
      Ca(null, e, null, null);
    }),
      (t[Or] = null);
  }
};
function Ea(e) {
  this._internalRoot = e;
}
Ea.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++);
    Vr.splice(n, 0, e), n === 0 && jg(e);
  }
};
function c0(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ka(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mp() {}
function yk(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = ra(i);
        l.call(a);
      };
    }
    var i = cv(t, r, e, 0, null, !1, !1, "", mp);
    return (
      (e._reactRootContainer = i),
      (e[Or] = i.current),
      es(e.nodeType === 8 ? e.parentNode : e),
      Jo(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = ra(u);
      s.call(a);
    };
  }
  var u = s0(e, 0, !1, null, null, !1, !1, "", mp);
  return (
    (e._reactRootContainer = u),
    (e[Or] = u.current),
    es(e.nodeType === 8 ? e.parentNode : e),
    Jo(function () {
      Ca(t, u, n, r);
    }),
    u
  );
}
function Ta(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = ra(i);
        s.call(u);
      };
    }
    Ca(t, i, e, o);
  } else i = yk(n, t, e, o, r);
  return ra(i);
}
Bg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ni(t.pendingLanes);
        n !== 0 &&
          (xd(t, n | 1), jt(t, Je()), !(ae & 6) && ((Jl = Je() + 500), So()));
      }
      break;
    case 13:
      Jo(function () {
        var r = Rr(e, 1);
        if (r !== null) {
          var o = Rt();
          Hn(r, e, 1, o);
        }
      }),
        u0(e, 1);
  }
};
Fd = function (e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Rt();
      Hn(t, e, 134217728, n);
    }
    u0(e, 134217728);
  }
};
Ug = function (e) {
  if (e.tag === 13) {
    var t = lo(e),
      n = Rr(e, t);
    if (n !== null) {
      var r = Rt();
      Hn(n, e, t, r);
    }
    u0(e, t);
  }
};
Vg = function () {
  return he;
};
Gg = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
cf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ma(r);
            if (!o) throw Error(C(90));
            wg(r), nf(r, o);
          }
        }
      }
      break;
    case "textarea":
      _g(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tl(e, !!n.multiple, t, !1);
  }
};
Ig = r0;
xg = Jo;
var vk = { usingClientEntryPoint: !1, Events: [Cs, gl, ma, Ng, Mg, r0] },
  Si = {
    findFiberByHostInstance: Io,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wk = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Og(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Si.findFiberByHostInstance || gk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ws.isDisabled && Ws.supportsFiber)
    try {
      (fa = Ws.inject(wk)), (pr = Ws);
    } catch {}
}
pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
pn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!c0(t)) throw Error(C(200));
  return mk(e, t, null, n);
};
pn.createRoot = function (e, t) {
  if (!c0(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = fv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = s0(e, 1, !1, null, null, n, !1, r, o)),
    (e[Or] = t.current),
    es(e.nodeType === 8 ? e.parentNode : e),
    new a0(t)
  );
};
pn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Og(t)), (e = e === null ? null : e.stateNode), e;
};
pn.flushSync = function (e) {
  return Jo(e);
};
pn.hydrate = function (e, t, n) {
  if (!ka(t)) throw Error(C(200));
  return Ta(null, e, t, !0, n);
};
pn.hydrateRoot = function (e, t, n) {
  if (!c0(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = fv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cv(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Or] = t.current),
    es(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ea(t);
};
pn.render = function (e, t, n) {
  if (!ka(t)) throw Error(C(200));
  return Ta(null, e, t, !1, n);
};
pn.unmountComponentAtNode = function (e) {
  if (!ka(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Jo(function () {
        Ta(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Or] = null);
        });
      }),
      !0)
    : !1;
};
pn.unstable_batchedUpdates = r0;
pn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ka(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ta(e, t, n, !1, r);
};
pn.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = pn);
})(gE);
var dv,
  gp = Ru;
(dv = gp.createRoot), gp.hydrateRoot;
class Sk extends Jt {
  constructor(t, n, r) {
    super(), (this.model = t), (this.render = n), (this.equal = r);
  }
}
class _k extends V.Component {
  constructor(t) {
    super(t);
  }
  shouldComponentUpdate(t, n) {
    const r = this;
    return !r.props.equal(r.props.model, t.model);
  }
  render() {
    return this.props.render();
  }
}
function Ck(e, t, n, r) {
  const o = new Sk(n, () => t(n, r), e);
  return V.createElement(_k, o);
}
const Ek = (() => {
  try {
    return vr(V.version.slice(void 0, 1 + 1), 511, !1, 32) >= 18;
  } catch {
    return !1;
  }
})();
function kk(e, t, n) {
  let r;
  if (Ek) {
    const o = dv(document.getElementById(t));
    r = (l) => (i) => {
      o.render(e((s) => (u) => s === u, s1(n), l, i));
    };
  } else
    r = (o) => (l) => {
      Ru.render(
        e((i) => (s) => i === s, s1(n), o, l),
        document.getElementById(t)
      );
    };
  return J3(zo(2, r), n);
}
function Tk(e, t) {
  return kk((n, r, o, l) => Ck(zo(2, n), zo(2, r), o, l), e, t);
}
function hv(e) {
  switch (e.tag) {
    case 0:
      return !0;
    case 6:
      return !0;
    case 11:
      return !0;
    case 15:
      return !0;
    case 21:
      return !0;
    case 30:
      return !0;
    default:
      return !1;
  }
}
function Nk(e) {
  switch (e.tag) {
    case 1:
      return p(20, 0, !1);
    case 3:
      return p(40, 0, !1);
    case 4:
      return p(5, 0, !1);
    case 2:
      return p(25, 0, !1);
    case 5:
      return p(80, 0, !1);
    case 6:
      return p(20, 0, !1);
    case 7:
      return p(8, 0, !1);
    case 8:
      return p(4, 0, !1);
    case 9:
      return p(3, 0, !1);
    case 10:
      return p(1e3, 0, !1);
    default:
      return p(45, 0, !1);
  }
}
function f0(e, t) {
  const n = Js(ti((r) => ue(r, t), e)) | 0;
  return Math.pow(p(2, 0, !1), n);
}
function Mk(e) {
  return f0(N([new T(9, []), new T(17, [])]), e.Adventures);
}
function Ik(e) {
  return f0(ie(new T(13, [])), e.Adventures);
}
function xk(e) {
  return f0(ie(new T(18, [])), e.Adventures);
}
function d0(e, t, n, r) {
  return ed(Tt(n, e(r)), t);
}
const Pe = (e) => (t) => d0((n) => n.Resources, p(0, 0, !1), e, t),
  oa = (e) => (t) => d0((n) => n.StorageFacilities, p(1, 0, !1), e, t);
function Po(e, t) {
  return Ze(Ze(oa(e)(t), Nk(e)), Ik(t));
}
const Nt = (e) => (t) => d0((n) => n.Generators, p(0, 0, !1), e, t);
function h0(e) {
  return hs(
    e.tag === 1
      ? N([
          [new g(6, []), p(1, 0, !1)],
          [new g(5, []), p(15, 0, !1)],
        ])
      : e.tag === 3
      ? N([
          [new g(3, []), p(30, 0, !1)],
          [new g(5, []), p(25, 0, !1)],
          [new g(6, []), p(2, 0, !1)],
        ])
      : e.tag === 4
      ? N([
          [new g(5, []), p(5, 0, !1)],
          [new g(3, []), p(1, 0, !1)],
          [new g(1, []), p(1, 0, !1)],
        ])
      : e.tag === 2
      ? N([
          [new g(3, []), p(20, 0, !1)],
          [new g(5, []), p(10, 0, !1)],
          [new g(6, []), p(1, 0, !1)],
        ])
      : e.tag === 5
      ? N([
          [new g(5, []), p(60, 0, !1)],
          [new g(3, []), p(30, 0, !1)],
        ])
      : e.tag === 6
      ? N([
          [new g(3, []), p(50, 0, !1)],
          [new g(5, []), p(50, 0, !1)],
          [new g(7, []), p(2, 0, !1)],
        ])
      : e.tag === 7
      ? N([
          [new g(3, []), p(20, 0, !1)],
          [new g(6, []), p(10, 0, !1)],
          [new g(7, []), p(4, 0, !1)],
        ])
      : e.tag === 8
      ? N([
          [new g(5, []), p(30, 0, !1)],
          [new g(6, []), p(50, 0, !1)],
          [new g(7, []), p(10, 0, !1)],
        ])
      : e.tag === 9
      ? N([
          [new g(3, []), p(200, 0, !1)],
          [new g(6, []), p(45, 0, !1)],
        ])
      : e.tag === 10
      ? ie([new g(10, []), p(1e3, 0, !1)])
      : N([
          [new g(1, []), p(10, 0, !1)],
          [new g(5, []), p(20, 0, !1)],
          [new g(3, []), p(10, 0, !1)],
        ]),
    { Compare: re }
  );
}
function p0(e) {
  return hs(
    e.tag === 4
      ? N([
          [new g(0, []), p(1, 0, !1)],
          [new g(1, []), p(5, 0, !1)],
          [new g(2, []), p(2, 0, !1)],
          [new g(3, []), p(1, 0, !1)],
        ])
      : e.tag === 6
      ? ie([new g(4, []), p(3, 0, !1)])
      : e.tag === 7
      ? N([
          [new g(6, []), p(2, 0, !1)],
          [new g(2, []), p(5, 0, !1)],
          [new g(5, []), p(10, 0, !1)],
        ])
      : e.tag === 8
      ? N([
          [new g(6, []), p(3, 0, !1)],
          [new g(5, []), p(30, 0, !1)],
          [new g(2, []), p(8, 0, !1)],
        ])
      : e.tag === 9
      ? N([
          [new g(5, []), p(50, 0, !1)],
          [new g(4, []), p(2, 0, !1)],
          [new g(7, []), p(2, 0, !1)],
          [new g(8, []), p(1, 0, !1)],
        ])
      : qe(),
    { Compare: re }
  );
}
function m0(e) {
  return hs(
    e.tag === 1
      ? N([
          [new g(0, []), p(2, 0, !1)],
          [new g(1, []), p(10, 0, !1)],
        ])
      : e.tag === 3
      ? N([
          [new g(3, []), p(8, 0, !1)],
          [new g(7, []), p(1, 0, !1)],
          [new g(6, []), p(1, 0, !1)],
        ])
      : e.tag === 4
      ? N([
          [new g(1, []), p(12, 0, !1)],
          [new g(5, []), p(10, 0, !1)],
          [new g(7, []), p(1, 0, !1)],
        ])
      : e.tag === 2
      ? N([
          [new g(2, []), p(5, 0, !1)],
          [new g(0, []), p(1, 0, !1)],
          [new g(1, []), p(1, 0, !1)],
        ])
      : e.tag === 5
      ? N([
          [new g(2, []), p(15, 0, !1)],
          [new g(3, []), p(15, 0, !1)],
          [new g(7, []), p(1, 0, !1)],
        ])
      : e.tag === 6
      ? N([
          [new g(5, []), p(35, 0, !1)],
          [new g(3, []), p(10, 0, !1)],
          [new g(7, []), p(2, 0, !1)],
          [new g(8, []), p(1, 0, !1)],
        ])
      : e.tag === 7
      ? N([
          [new g(2, []), p(87, 0, !1)],
          [new g(5, []), p(70, 0, !1)],
          [new g(9, []), p(1, 0, !1)],
        ])
      : e.tag === 8
      ? N([
          [new g(5, []), p(120, 0, !1)],
          [new g(6, []), p(35, 0, !1)],
          [new g(9, []), p(3, 0, !1)],
        ])
      : e.tag === 9
      ? N([
          [new g(7, []), p(36, 0, !1)],
          [new g(8, []), p(4, 0, !1)],
          [new g(3, []), p(220, 0, !1)],
        ])
      : e.tag === 10
      ? ie([new g(10, []), p(1e3, 0, !1)])
      : N([
          [new g(0, []), p(20, 0, !1)],
          [new g(2, []), p(5, 0, !1)],
        ]),
    { Compare: re }
  );
}
function g0(e) {
  return hs(
    e.tag === 1
      ? ie([new g(0, []), p(15, 0, !1)])
      : e.tag === 2
      ? ie([new g(1, []), p(12, 0, !1)])
      : e.tag === 3
      ? ie([new g(4, []), p(3, 0, !1)])
      : e.tag === 4
      ? N([
          [new g(3, []), p(20, 0, !1)],
          [new g(5, []), p(10, 0, !1)],
        ])
      : e.tag === 5
      ? ie([new g(4, []), p(7, 0, !1)])
      : e.tag === 7
      ? N([
          [new g(0, []), p(77, 0, !1)],
          [new g(2, []), p(27, 0, !1)],
          [new g(6, []), p(1, 0, !1)],
        ])
      : e.tag === 8
      ? N([
          [new g(3, []), p(100, 0, !1)],
          [new g(5, []), p(85, 0, !1)],
          [new g(1, []), p(30, 0, !1)],
          [new g(2, []), p(30, 0, !1)],
        ])
      : e.tag === 9
      ? N([
          [new g(7, []), p(4, 0, !1)],
          [new g(6, []), p(16, 0, !1)],
        ])
      : e.tag === 10
      ? N([
          [new g(0, []), p(100, 0, !1)],
          [new g(2, []), p(90, 0, !1)],
          [new g(4, []), p(50, 0, !1)],
        ])
      : e.tag === 12
      ? N([
          [new g(3, []), p(200, 0, !1)],
          [new g(5, []), p(180, 0, !1)],
          [new g(8, []), p(4, 0, !1)],
          [new g(7, []), p(4, 0, !1)],
        ])
      : e.tag === 13
      ? N([
          [new g(8, []), p(4, 0, !1)],
          [new g(7, []), p(4, 0, !1)],
          [new g(2, []), p(110, 0, !1)],
          [new g(1, []), p(70, 0, !1)],
        ])
      : e.tag === 14
      ? N([
          [new g(1, []), p(125, 0, !1)],
          [new g(4, []), p(82, 0, !1)],
          [new g(9, []), p(5, 0, !1)],
        ])
      : e.tag === 15
      ? ie([new g(9, []), p(2, 0, !1)])
      : e.tag === 16
      ? N([
          [new g(3, []), p(120, 0, !1)],
          [new g(2, []), p(240, 0, !1)],
          [new g(9, []), p(12, 0, !1)],
        ])
      : e.tag === 17
      ? N([
          [new g(7, []), p(24, 0, !1)],
          [new g(6, []), p(60, 0, !1)],
          [new g(9, []), p(14, 0, !1)],
        ])
      : e.tag === 18
      ? N([
          [new g(1, []), p(120, 0, !1)],
          [new g(5, []), p(200, 0, !1)],
          [new g(9, []), p(16, 0, !1)],
        ])
      : e.tag === 19
      ? N([
          [new g(3, []), p(500, 0, !1)],
          [new g(2, []), p(500, 0, !1)],
          [new g(6, []), p(50, 0, !1)],
        ])
      : e.tag === 20
      ? ie([new g(4, []), p(290, 0, !1)])
      : e.tag === 21
      ? ie([new g(4, []), p(200, 0, !1)])
      : e.tag === 22
      ? N([
          [new g(9, []), p(100, 0, !1)],
          [new g(2, []), p(500, 0, !1)],
        ])
      : e.tag === 23
      ? N([
          [new g(1, []), p(205, 0, !1)],
          [new g(9, []), p(15, 0, !1)],
        ])
      : e.tag === 24
      ? N([
          [new g(9, []), p(20, 0, !1)],
          [new g(4, []), p(100, 0, !1)],
        ])
      : e.tag === 25
      ? N([
          [new g(5, []), p(600, 0, !1)],
          [new g(3, []), p(300, 0, !1)],
        ])
      : e.tag === 29
      ? N([
          [new g(4, []), p(400, 0, !1)],
          [new g(3, []), p(500, 0, !1)],
          [new g(9, []), p(20, 0, !1)],
          [new g(7, []), p(60, 0, !1)],
        ])
      : qe(),
    { Compare: re }
  );
}
function la(e, t, n) {
  return _2((r) => e(r, n), t, { GetZero: () => Ep(0), Add: be });
}
function yp(e, t) {
  return ue(e, t) ? p(1, 0, !1) : p(0, 0, !1);
}
function jf(e) {
  return ur(
    Me((t) => t[0], _m(e)),
    { Compare: re }
  );
}
function Fk(e) {
  const t = e.Inventory,
    n = jf(e.Unlocks.Adventures);
  return (r) =>
    r.tag === 0
      ? W(Pe(new g(6, []))(t), p(1, 0, !1)) >= 0
      : r.tag === 1
      ? W(Pe(new g(6, []))(t), p(1, 0, !1)) >= 0
      : r.tag === 3
      ? ue(new T(8, []), n)
      : r.tag === 5
      ? ue(new T(8, []), n)
      : r.tag === 4
      ? ue(new T(5, []), n) && W(Pe(new g(4, []))(t), Po(new g(4, []), t)) >= 0
      : r.tag === 2
      ? W(Pe(new g(2, []))(t), Po(new g(2, []), t)) >= 0
      : r.tag === 6
      ? ue(new T(12, []), n)
      : r.tag === 7
      ? W(Pe(new g(7, []))(t), Po(new g(7, []), t)) >= 0 &&
        W(Nt(new g(7, []))(t), p(1, 0, !1)) >= 0
      : r.tag === 8
      ? W(Pe(new g(8, []))(t), Po(new g(8, []), t)) >= 0 &&
        W(Nt(new g(8, []))(t), p(1, 0, !1)) >= 0
      : r.tag === 9 && ue(new T(14, []), n);
}
function Pk(e) {
  const t = e.Inventory;
  return (n) =>
    n.tag === 0
      ? ue(new T(4, []), t.Adventures)
      : n.tag === 1
      ? W(Nt(new g(0, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 2
      ? W(Nt(new g(1, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 3
      ? W(Pe(new g(7, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 4
      ? W(Pe(new g(7, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 5
      ? W(la(zo(2, Nt), N([new g(3, []), new g(4, [])]), t), p(2, 0, !1)) >= 0
      : n.tag === 6
      ? W(Pe(new g(8, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 7
      ? W(Pe(new g(9, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 8
      ? W(Pe(new g(9, []))(t), p(1, 0, !1)) >= 0
      : n.tag === 9 && ue(new T(16, []), t.Adventures);
}
function Ok(e) {
  const t = e.Inventory;
  return (n) =>
    n.tag === 1
      ? ue(new T(1, []), t.Adventures)
      : n.tag === 2
      ? ue(new T(2, []), t.Adventures)
      : n.tag === 3
      ? ue(new T(2, []), t.Adventures)
      : n.tag === 4
      ? W(la(zo(2, Pe), N([new g(2, []), new g(3, [])]), t), le(10, !1, 2)) >= 0
      : n.tag === 5
      ? ue(new T(3, []), t.Adventures)
      : n.tag === 6
      ? ue(new T(5, []), t.Adventures)
      : n.tag === 7
      ? ue(new T(7, []), t.Adventures)
      : n.tag === 8
      ? ue(new T(8, []), t.Adventures)
      : n.tag === 9
      ? ue(new T(12, []), t.Adventures)
      : n.tag === 10
      ? !1
      : ue(new T(0, []), t.Adventures);
}
function Rk(e) {
  const t = e.Unlocks,
    n = e.Inventory,
    r = jf(t.Adventures),
    o = jf(t.Generators);
  return (l) =>
    l.tag === 1
      ? W(Pe(new g(0, []))(n), le(5, !1, 2)) >= 0
      : l.tag === 2
      ? W(Pe(new g(1, []))(n), le(5, !1, 2)) >= 0
      : l.tag === 3
      ? W(Pe(new g(4, []))(n), le(2, !1, 2)) >= 0
      : l.tag === 4
      ? W(Pe(new g(5, []))(n), le(5, !1, 2)) >= 0
      : l.tag === 5
      ? W(Nt(new g(2, []))(n), le(1, !1, 2)) >= 0
      : l.tag === 6
      ? W(Pe(new g(6, []))(n), le(2, !1, 2)) >= 0
      : l.tag === 7
      ? ue(new T(6, []), n.Adventures)
      : l.tag === 8
      ? ue(new g(5, []), o)
      : l.tag === 9
      ? ue(new g(5, []), o)
      : l.tag === 10
      ? W(Nt(new g(6, []))(n), p(1, 0, !1)) >= 0
      : l.tag === 11
      ? ue(new T(10, []), n.Adventures)
      : l.tag === 12
      ? ue(new T(11, []), n.Adventures)
      : l.tag === 13
      ? ue(new T(11, []), n.Adventures)
      : l.tag === 14
      ? W(Nt(new g(7, []))(n), p(2, 0, !1)) >= 0
        ? !0
        : W(Nt(new g(8, []))(n), p(1, 0, !1)) >= 0
      : l.tag === 15
      ? ue(new T(14, []), n.Adventures) &&
        W(Pe(new g(9, []))(n), p(2, 0, !1)) >= 0
      : l.tag === 16
      ? ue(new T(15, []), n.Adventures)
      : l.tag === 18
      ? ue(new T(15, []), n.Adventures)
      : l.tag === 17
      ? il(ur([new T(9, []), new T(15, [])], { Compare: re }), n.Adventures)
      : l.tag === 19
      ? W(
          la(
            yp,
            N([new T(16, []), new T(18, []), new T(17, [])]),
            n.Adventures
          ),
          p(2, 0, !1)
        ) >= 0
      : l.tag === 20
      ? W(
          la(
            yp,
            N([new T(16, []), new T(18, []), new T(17, [])]),
            n.Adventures
          ),
          p(2, 0, !1)
        ) >= 0
      : l.tag === 21
      ? W(Pe(new g(4, []))(n), p(200, 0, !1)) > 0
      : l.tag === 22
      ? il(
          ur([new T(19, []), new T(20, []), new T(21, [])], { Compare: re }),
          n.Adventures
        )
      : l.tag === 23
      ? ue(new T(22, []), r) && W(Pe(new g(9, []))(n), p(50, 0, !1)) >= 0
      : l.tag === 24
      ? ue(new T(22, []), n.Adventures)
      : l.tag === 25
      ? ue(new T(24, []), n.Adventures)
      : l.tag === 26
      ? il(ur([new T(25, []), new T(23, [])], { Compare: re }), n.Adventures)
      : l.tag === 27
      ? il(ur([new T(25, []), new T(23, [])], { Compare: re }), n.Adventures)
      : l.tag === 28
      ? il(ur([new T(25, []), new T(23, [])], { Compare: re }), n.Adventures)
      : l.tag === 29
      ? il(ur([new T(26, []), new T(27, [])], { Compare: re }), n.Adventures)
      : l.tag === 30
      ? ue(new T(29, []), n.Adventures)
      : !0;
}
function Na(e, t, n) {
  const r = Tt(t, n);
  return r == null ? !1 : re(e, Re(r)) >= 0;
}
function Ak(e, t, n) {
  return Na(t, n, e.Resources);
}
function Dk(e, t, n) {
  return Na(t, n, e.Generators);
}
function $k(e, t, n) {
  return Na(t, n, e.StorageFacilities);
}
function pv(e, t) {
  return Na(
    e.Tick,
    t,
    US((n, r) => !ue(n, e.Inventory.Adventures), e.Unlocks.Adventures)
  );
}
function Lk(e) {
  return xc((t) => pv(e, t), ti(hv, am(ud)));
}
function mv(e, t, n) {
  return Lo(n, Su(W, p(0, 0, !1), Lo(be(e, n), t)));
}
function zk(e, t, n, r) {
  const o = ed(Tt(t, e), p(0, 0, !1)),
    l = Ze(n, r);
  return Ht(Lo(l, Su(W, p(0, 0, !1), Lo(l, o))), n);
}
function tl(e, t, n) {
  return sd((r, o, l) => dw(W, r, zk(e, o, l, r)), n, t);
}
function Bk(e, t, n, r) {
  return ds(n, Lo(ed(Tt(n, t), p(0, 0, !1)), Ze(e, r)), t);
}
function Ma(e, t, n) {
  return sd((r, o, l) => Bk(e, r, o, l), t, n);
}
function gv(e, t, n) {
  const r = Pe(t)(n),
    o = Po(t, n),
    l = p0(t),
    i = tl(n.Resources, l, mv(r, o, e));
  return new oi(
    ds(t, be(r, i), Ma(i, n.Resources, l)),
    n.StorageFacilities,
    n.Generators,
    n.Adventures
  );
}
function Uk(e, t) {
  return gv(Ze(Ze(p(1, 0, !1), Xv), Mk(t)), e, t);
}
function Vk(e, t, n) {
  const r = Nt(t)(n),
    o = m0(t),
    l = tl(n.Resources, o, e);
  return new oi(
    Ma(l, n.Resources, o),
    n.StorageFacilities,
    ds(t, be(r, l), n.Generators),
    n.Adventures
  );
}
function Gk(e, t, n) {
  const r = oa(t)(n),
    o = h0(t),
    l = tl(n.Resources, o, e);
  return new oi(
    Ma(l, n.Resources, o),
    ds(t, be(r, l), n.StorageFacilities),
    n.Generators,
    n.Adventures
  );
}
const jk = (e) => (t) => Gk(p(1, 0, !1), e, t);
function Hk(e, t) {
  const n = im(e, t.Adventures);
  return new oi(
    Ma(p(1, 0, !1), t.Resources, g0(e)),
    t.StorageFacilities,
    t.Generators,
    n
  );
}
function Wk(e, t, n) {
  return W(Pe(t)(n), e) >= 0;
}
function Qk(e, t) {
  return VS((n, r) => [r, Wk(r, n, e)], t);
}
function Kk(e, t) {
  const n = Pe(e)(t),
    r = Po(e, t),
    o = p0(e);
  return W(tl(t.Resources, o, mv(n, r, p(1, 0, !1))), p(0, 0, !1)) > 0;
}
function Jk(e, t) {
  const n = m0(e);
  return W(tl(t.Resources, n, p(1, 0, !1)), p(0, 0, !1)) > 0;
}
function Hf(e, t) {
  const n = h0(e);
  return W(tl(t.Resources, n, p(1, 0, !1)), p(0, 0, !1)) > 0;
}
function Zk(e, t) {
  const n = g0(e);
  return W(tl(t.Resources, n, p(1, 0, !1)), p(0, 0, !1)) > 0;
}
function Ia(e, t, n, r) {
  if (r) {
    const o = Tt(t, n);
    return o != null ? W(Lo(e, o), p(3, 0, !1)) < 0 : !1;
  } else return !1;
}
function qk(e, t) {
  return Ia(t.Tick, e, t.Unlocks.Resources, !0);
}
function Yk(e, t) {
  return Ia(
    t.Tick,
    e,
    t.Unlocks.Generators,
    (e.tag === 0 || e.tag === 1 || e.tag === 3 || e.tag === 2 || e.tag === 4) &&
      zn(Nt(e)(t.Inventory), le(0, !1, 2))
  );
}
function Xk(e, t) {
  return Ia(
    t.Tick,
    e,
    t.Unlocks.StorageFacilities,
    e.tag === 0
      ? W(oa(e)(t.Inventory), le(1, !1, 2)) <= 0 && Hf(e, t.Inventory)
      : e.tag === 2 &&
          W(oa(e)(t.Inventory), le(1, !1, 2)) <= 0 &&
          Hf(e, t.Inventory)
  );
}
function bk(e, t) {
  return Ia(t.Tick, e, t.Unlocks.Adventures, !0);
}
const e6 = (e) => (t) => Vk(p(1, 0, !1), e, t);
function t6(e) {
  const t = e.Generators;
  return Fn(
    (n, r) => gv(Sm(r, t), r, n),
    e,
    ti((n) => qs(n, t), WS)
  );
}
function vp(e, t, n, r) {
  return sd(
    (o, l, i) => ds(l, i, o),
    n,
    hs(
      hS(
        (o) => [o, t],
        dS(
          r,
          pS(
            e,
            ur(
              Me((o) => o[0], _m(n)),
              { Compare: re }
            )
          )
        ),
        { Compare: Kf }
      ),
      { Compare: re }
    )
  );
}
function n6(e) {
  const t = e.Unlocks,
    n = (l, i) => vp(HS, e.Tick, l, i),
    r = n(t.StorageFacilities, Fk(e)),
    o = n(t.Generators, Pk(e));
  return new ad(
    n(t.Resources, Ok(e)),
    r,
    o,
    vp(ud, e.Tick, t.Adventures, Rk(e))
  );
}
function r6(e) {
  const t = zn(Cc(e.Tick, p(8, 0, !1)), p(0, 0, !1)) ? ng(e) : e,
    n = zn(Cc(t.Tick, Ht(p(4, 0, !1), xk(t.Inventory))), p(0, 0, !1))
      ? t6(t.Inventory)
      : t.Inventory;
  return new Yn(be(t.Tick, p(1, 0, !1)), n, t.Unlocks, t.SaveLog, t.View);
}
function o6(e) {
  return new Yn(
    e.Tick,
    e.Inventory,
    e.Unlocks,
    e.SaveLog,
    new ps(1, [new cd(1, [])])
  );
}
function l6(e) {
  return new Yn(
    e.Tick,
    e.Inventory,
    e.Unlocks,
    e.SaveLog,
    new ps(1, [new cd(0, [])])
  );
}
function i6(e) {
  return Nm;
}
function s6(e) {
  return new Yn(
    e.Tick,
    e.Inventory,
    e.Unlocks,
    e.SaveLog,
    new ps(1, [new cd(0, [])])
  );
}
function u6(e) {
  return new Yn(e.Tick, e.Inventory, e.Unlocks, e.SaveLog, new ps(0, []));
}
const a6 = (() => {
  const e = (t, n) =>
    new Yn(n.Tick, t(n.Inventory), n.Unlocks, n.SaveLog, n.View);
  return (t) =>
    t.tag === 1
      ? cr(1, e, [e6(t.fields[0])])
      : t.tag === 2
      ? cr(1, e, [jk(t.fields[0])])
      : t.tag === 3
      ? cr(1, e, [(n) => Hk(t.fields[0], n)])
      : t.tag === 4
      ? r6
      : t.tag === 5
      ? ng
      : t.tag === 6
      ? rg
      : t.tag === 7
      ? i6
      : t.tag === 8
      ? t.fields[0].tag === 3
        ? l6
        : t.fields[0].tag === 0
        ? s6
        : t.fields[0].tag === 1
        ? u6
        : o6
      : cr(1, e, [(n) => Uk(t.fields[0], n)]);
})();
function c6(e, t) {
  let n;
  return [
    ((n = a6(e)(t)), new Yn(n.Tick, n.Inventory, n6(n), n.SaveLog, n.View)),
    z3(),
  ];
}
const yv = "Truffle Wizard",
  f6 = "1.0",
  d6 = "Made with ❤︎ by Tim Knauf.";
function h6(e) {
  switch (e.tag) {
    case 1:
      return "贪婪地吞下松露";
    case 2:
      return "你包扎了伤口";
    case 3:
      return "享受更精致的膳食";
    case 4:
      return "时尚田园之家";
    case 5:
      return "调查附近乡镇";
    case 6:
      return "问候神秘的陌生人";
    case 7:
      return "以物易物换取被禁止的魔法书";
    case 8:
      return "建立家园";
    case 9:
      return "建造收割服（2x 点击）";
    case 10:
      return "参加城镇集市";
    case 11:
      return "听到来自边境的令人不安的消息";
    case 12:
      return "建造魔像作坊";
    case 13:
      return "修补欧几里得 （2x存储）";
    case 14:
      return "照顾新来的难民";
    case 15:
      return "出席紧急市民会议";
    case 16:
      return "魔像保姆（解锁魔像托儿所）";
    case 18:
      return "魔像节奏组（2x生产速度）";
    case 17:
      return "傀儡支援组（4x点击）";
    case 19:
      return "准备洋葱弹射器";
    case 20:
      return "储备食物";
    case 21:
      return "城镇被入侵了！突袭库存!";
    case 22:
      return "城镇遭到攻击！防守！";
    case 23:
      return "救护伤员";
    case 24:
      return "派遣和平谈判代表'";
    case 25:
      return "和平!帮助重建城镇";
    case 26:
      return "开始享受生活";
    case 27:
      return "和镇上的人交朋友";
    case 28:
      return "坠入爱河（可选！）";
    case 29:
      return "开松露主题餐厅";
    case 30:
      return "谢谢你的参与！你可以继续，重新开始，或者在那里结束！";
    default:
      return "睁开你的眼睛";
  }
}
function p6(e) {
  switch (e.tag) {
    case 1:
      return "Herbs";
    case 3:
      return "Wood";
    case 4:
      return "Sautéed Truffles";
    case 2:
      return "Onions";
    case 5:
      return "Clay";
    case 6:
      return "Oddments";
    case 7:
      return "Hands";
    case 8:
      return "Brazen Heads";
    case 9:
      return "Golems";
    case 10:
      return "Unobtainium (TODO)";
    default:
      return "Truffles";
  }
}
function m6(e) {
  switch (e.tag) {
    case 1:
      return "Herb";
    case 3:
      return "Wood";
    case 4:
      return "Sautéed Truffle";
    case 2:
      return "Onion";
    case 5:
      return "Clay";
    case 6:
      return "Oddment";
    case 7:
      return "Hand";
    case 8:
      return "Brazen Head";
    case 9:
      return "Golem";
    case 10:
      return "Unobtainium (TODO)";
    default:
      return "Truffle";
  }
}
function vv(e) {
  return zn(e, p(1, 0, !1)) ? m6 : p6;
}
function g6(e) {
  switch (e.tag) {
    case 1:
      return "Pick Herbs";
    case 3:
      return "Gather Oak Wood";
    case 4:
      return "Sautée Truffle";
    case 2:
      return "Dig for Onions";
    case 5:
      return "Dig for Clay";
    case 6:
      return "Trade for Oddments";
    case 7:
      return "Summon Charmed and/or Cursed Hand";
    case 8:
      return "Cast Brazen Head";
    case 9:
      return "Animate Golem";
    case 10:
      return "Obtain Unobtainium?! (TODO)";
    default:
      return "Rootle for Truffles";
  }
}
function y6(e) {
  switch (e.tag) {
    case 1:
      return "Train Plucking Crow";
    case 3:
      return "Assemble Ever-Swinging Axe";
    case 4:
      return "Construct Self-Stirring Pan";
    case 2:
      return "Train Gopher";
    case 5:
      return "Meld Untiring Delver";
    case 6:
      return "Assemble Oddment Autotrader";
    case 7:
      return "Fashion Hand Spawning Pool";
    case 8:
      return "Construct Head Bakery";
    case 9:
      return "Construct Golem Nursery";
    case 10:
      return "Form Unobtainum Portal (TODO)";
    default:
      return "Tame Truffle Hog";
  }
}
function v6(e) {
  switch (e.tag) {
    case 1:
      return "Crows";
    case 3:
      return "Axes";
    case 4:
      return "Pans";
    case 2:
      return "Gophers";
    case 5:
      return "Delvers";
    case 6:
      return "Autotraders";
    case 7:
      return "Pools";
    case 8:
      return "Bakeries";
    case 9:
      return "Nurseries";
    case 10:
      return "Portals (TODO)";
    default:
      return "Hogs";
  }
}
function w6(e) {
  switch (e.tag) {
    case 1:
      return "Crow";
    case 3:
      return "Axe";
    case 4:
      return "Pan";
    case 2:
      return "Gopher";
    case 5:
      return "Delver";
    case 6:
      return "Autotrader";
    case 7:
      return "Pool";
    case 8:
      return "Bakery";
    case 9:
      return "Nursery";
    case 10:
      return "Portal (TODO)";
    default:
      return "Hog";
  }
}
function S6(e) {
  return zn(e, p(1, 0, !1)) ? w6 : v6;
}
function _6(e) {
  switch (e.tag) {
    case 1:
      return "Build Herb Jar";
    case 3:
      return "Build Wood Rack";
    case 4:
      return "Build Cool Box";
    case 2:
      return "Build Onion Cellar";
    case 5:
      return "Build Clay Pit";
    case 6:
      return "Build Oddment Shelf";
    case 7:
      return "Build Hand Fetter";
    case 8:
      return "Build Head Shelf";
    case 9:
      return "Build Golem Platform";
    case 10:
      return "Build Pocket Dimension (TODO)";
    default:
      return "Build Truffle Pantry";
  }
}
function C6(e) {
  switch (e.tag) {
    case 4:
      return "chilled";
    case 2:
      return "cellared";
    case 3:
      return "stacked";
    case 6:
      return "shelved";
    case 7:
      return "fettered";
    case 8:
      return "housed";
    case 9:
      return "vigilent";
    default:
      return "stored";
  }
}
const Ne = mE;
function E6(e, t) {
  let n;
  return ie(
    V.createElement(
      "section",
      En(
        N([
          ["className", "section"],
          ((n = [V.createElement("div", { className: "title", children: yv })]),
          ["children", Ne.Children.toArray(Array.from(n))]),
        ])
      )
    )
  );
}
function k6(e, t) {
  let n, r, o;
  const l = t[0],
    i = t[1] ? "✅" : "❌",
    s = vv(l)(e);
  return V.createElement("div", {
    children: [((n = ke(H("%s %i %s"))), (r = n(i)), (o = r(l)), o(s))],
  });
}
function xa(e, t, n) {
  const r = Ct((o) => k6(o[0], o[1]), Ur(Qk(n, e(t))));
  return U(r)
    ? qe()
    : ie(
        V.createElement("div", {
          className: G(" ", ["has-text-left", "has-text-weight-light"]),
          children: Ne.Children.toArray(Array.from(r)),
        })
      );
}
function T6(e, t, n) {
  const r = V.createElement("div", { children: [g6(e)] }),
    o = xa(p0, e, t.Inventory),
    l = ie(
      V.createElement("button", {
        className: G(
          " ",
          Nn(
            b(() =>
              dt(
                ve("button"),
                b(() =>
                  dt(
                    ve("is-block"),
                    b(() => (qk(e, t) ? ve("pop-element") : Lt()))
                  )
                )
              )
            )
          )
        ),
        disabled: !Kk(e, t.Inventory),
        onClick: (i) => {
          n(new Vn(0, [e]));
        },
        children: Ne.Children.toArray(Array.from(st(r, o))),
      })
    );
  return V.createElement("td", {
    children: Ne.Children.toArray(Array.from(l)),
  });
}
function N6(e, t, n) {
  if (Dk(t.Unlocks, t.Tick, e)) {
    const r = Nt(e)(t.Inventory),
      o = V.createElement("div", { children: [y6(e)] }),
      l = xa(m0, e, t.Inventory),
      i = Nn(
        b(() =>
          dt(
            ve("button"),
            b(() =>
              dt(
                ve("is-block"),
                b(() => (Yk(e, t) ? ve("pop-element") : Lt()))
              )
            )
          )
        )
      ),
      s = Nn(
        b(() => {
          let u, a, c;
          return dt(
            W(r, le(0, !1, 2)) > 0
              ? ve(
                  V.createElement("div", {
                    children: [
                      ((u = S6(r)(e)), (a = ke(H("%i %s"))), (c = a(r)), c(u)),
                    ],
                  })
                )
              : Lt(),
            b(() =>
              ve(
                V.createElement("button", {
                  className: G(" ", i),
                  disabled: !Jk(e, t.Inventory),
                  onClick: (d) => {
                    n(new Vn(1, [e]));
                  },
                  children: Ne.Children.toArray(Array.from(st(o, l))),
                })
              )
            )
          );
        })
      );
    return V.createElement("td", {
      children: Ne.Children.toArray(Array.from(s)),
    });
  } else return V.createElement("td", {});
}
function M6(e, t, n) {
  let r, o, l, i, s;
  const u = Pe(e)(t.Inventory),
    a = vv(u)(e),
    c = Po(e, t.Inventory);
  if ($k(t.Unlocks, t.Tick, e)) {
    const d = V.createElement("div", { children: [_6(e)] }),
      f = xa(h0, e, t.Inventory),
      v = Nn(
        b(() =>
          dt(
            ve("button"),
            b(() =>
              dt(
                ve("is-block"),
                b(() => (Xk(e, t) ? ve("pop-element") : Lt()))
              )
            )
          )
        )
      ),
      w = Hf(e, t.Inventory),
      _ = N([
        V.createElement("div", {
          children: [
            ((r = C6(e)),
            (o = ke(H("%i / %i %s %s"))),
            (l = o(u)),
            (i = l(c)),
            (s = i(a)),
            s(r)),
          ],
        }),
        V.createElement("button", {
          className: G(" ", v),
          disabled: !w,
          onClick: (x) => {
            n(new Vn(2, [e]));
          },
          children: Ne.Children.toArray(Array.from(st(d, f))),
        }),
      ]);
    return V.createElement("td", {
      children: Ne.Children.toArray(Array.from(_)),
    });
  } else {
    const d = Nn(
      b(() => {
        let f, v, w, _, x;
        return W(u, c) < 0
          ? ve(
              V.createElement("div", {
                children: [((f = ke(H("%i %s "))), (v = f(u)), v(a))],
              })
            )
          : ve(
              V.createElement("div", {
                children: [
                  ((w = ke(H("%i / %i %s"))), (_ = w(u)), (x = _(c)), x(a)),
                ],
              })
            );
      })
    );
    return V.createElement("td", {
      children: Ne.Children.toArray(Array.from(d)),
    });
  }
}
function I6(e, t, n) {
  let r;
  return ie(
    V.createElement(
      "tr",
      En(
        ie(
          ((r = Ct(
            (o) => o(n)(e)(t),
            N([
              (o) => (l) => (i) => T6(o, l, i),
              (o) => (l) => (i) => M6(o, l, i),
              (o) => (l) => (i) => N6(o, l, i),
            ])
          )),
          ["children", Ne.Children.toArray(Array.from(r))])
        )
      )
    )
  );
}
function x6(e, t) {
  let n;
  const r = ei(
    (o) => I6(e, t, o),
    ti((o) => Ak(e.Unlocks, e.Tick, o), Cm)
  );
  return ie(
    V.createElement(
      "table",
      En(
        N([
          [
            "className",
            G(" ", ["table", "is-fullwidth", "is-striped", "is-bordered"]),
          ],
          ["style", { tableLayout: "fixed" }],
          ((n = [
            V.createElement("tbody", {
              children: Ne.Children.toArray(Array.from(r)),
            }),
          ]),
          ["children", Ne.Children.toArray(Array.from(n))]),
        ])
      )
    )
  );
}
function F6(e, t) {
  let n;
  return ie(
    V.createElement(
      "div",
      En(
        N([
          ["className", G(" ", ["table-container"])],
          ((n = ei(
            (r) => r(e)(t),
            N([(r) => (o) => E6(), (r) => (o) => x6(r, o)])
          )),
          ["children", Ne.Children.toArray(Array.from(n))]),
        ])
      )
    )
  );
}
function wv(e, t, n) {
  const r = e.Inventory,
    o = V.createElement("div", { children: [h6(n)] }),
    l = xa(g0, n, r);
  return ie(
    V.createElement("button", {
      className: G(
        " ",
        Nn(
          b(() =>
            dt(
              ve("button"),
              b(() =>
                dt(
                  ve("is-block"),
                  b(() =>
                    dt(
                      bk(n, e) ? ve("pop-element") : Lt(),
                      b(() => (hv(n) ? ve("is-large") : Lt()))
                    )
                  )
                )
              )
            )
          )
        )
      ),
      disabled: !Zk(n, r),
      onClick: (i) => {
        t(new Vn(3, [n]));
      },
      children: Ne.Children.toArray(Array.from(st(o, l))),
    })
  );
}
function P6(e, t) {
  const n = ei(
    (r) => wv(e, t, r),
    ti((r) => pv(e, r), am(ud))
  );
  return U(n)
    ? qe()
    : ie(
        V.createElement("div", {
          className: G(" ", ["adventures"]),
          children: Ne.Children.toArray(Array.from(n)),
        })
      );
}
function O6(e, t, n) {
  let r;
  return ie(
    V.createElement(
      "div",
      En(
        N([
          ["className", G(" ", ["special"])],
          ((r = wv(t, n, e)), ["children", Ne.Children.toArray(Array.from(r))]),
        ])
      )
    )
  );
}
function Sv(e, t) {
  let n;
  return ie(
    V.createElement(
      "div",
      En(
        ie(
          ((n = [
            V.createElement("button", {
              className: G(" ", ["button", "menuButton"]),
              children: "⚙️",
              onClick: (r) => {
                t(new Vn(8, [new Ys(0, [])]));
              },
            }),
          ]),
          ["children", Ne.Children.toArray(Array.from(n))])
        )
      )
    )
  );
}
function _v(e, t) {
  let n, r, o, l, i, s, u;
  const a = ie(
      V.createElement("button", {
        className: G(" ", ["button", "is-warning"]),
        children: "Reset Progress (start new game)",
        onClick: (_) => {
          t(new Vn(8, [new Ys(2, [])]));
        },
      })
    ),
    c = N([
      V.createElement("button", {
        className: G(" ", ["button", "is-danger", "pop-element"]),
        children: "Really Reset All Progress?",
        onClick: (_) => {
          t(new Vn(7, []));
        },
      }),
      V.createElement("button", {
        className: G(" ", ["button"]),
        children: "Cancel",
        onClick: (_) => {
          t(new Vn(8, [new Ys(3, [])]));
        },
      }),
    ]),
    d = e.View.tag === 1 ? "is-active" : void 0;
  let f;
  const v = e.View;
  f = v.tag === 1 ? (v.fields[0].tag === 1 ? c : a) : qe();
  const w = ei(
    (_) =>
      U(_)
        ? qe()
        : ie(
            V.createElement("div", {
              className: G(" ", ["buttons"]),
              children: Ne.Children.toArray(Array.from(_)),
            })
          ),
    N([qe(), f])
  );
  return ie(
    V.createElement(
      "div",
      En(
        N([
          ["className", G(" ", jp(ie("modal"), N(r2(d))))],
          ((n = [
            V.createElement("div", { className: G(" ", ["modal-background"]) }),
            V.createElement(
              "div",
              En(
                N([
                  ["className", G(" ", ["modal-card"])],
                  ((r = [
                    V.createElement(
                      "header",
                      En(
                        N([
                          ["className", G(" ", ["modal-card-head"])],
                          ((o = [
                            V.createElement("p", {
                              className: G(" ", ["modal-card-title"]),
                              children: "Options",
                            }),
                            V.createElement("button", {
                              className: G(" ", ["delete", "is-large"]),
                              "aria-label": "close",
                              onClick: (_) => {
                                t(new Vn(8, [new Ys(1, [])]));
                              },
                            }),
                          ]),
                          ["children", Ne.Children.toArray(Array.from(o))]),
                        ])
                      )
                    ),
                    V.createElement("section", {
                      className: G(" ", ["modal-card-body"]),
                      children: Ne.Children.toArray(Array.from(w)),
                    }),
                    V.createElement(
                      "footer",
                      En(
                        N([
                          ["className", G(" ", ["modal-card-foot"])],
                          ((l = [
                            V.createElement("p", {
                              children: [
                                ((i = ke(H("%s %s. %s"))),
                                (s = i(yv)),
                                (u = s(f6)),
                                u(d6)),
                              ],
                            }),
                          ]),
                          ["children", Ne.Children.toArray(Array.from(l))]),
                        ])
                      )
                    ),
                  ]),
                  ["children", Ne.Children.toArray(Array.from(r))]),
                ])
              )
            ),
          ]),
          ["children", Ne.Children.toArray(Array.from(n))]),
        ])
      )
    )
  );
}
function R6(e, t) {
  let n;
  return V.createElement(
    "div",
    En(
      N([
        ["className", G(" ", ["container", "is-clipped"])],
        ((n = ei(
          (r) => r(e)(t),
          N([
            (r) => (o) => Sv(r, o),
            (r) => (o) => F6(r, o),
            (r) => (o) => P6(r, o),
            (r) => (o) => _v(r, o),
          ])
        )),
        ["children", Ne.Children.toArray(Array.from(n))]),
      ])
    )
  );
}
function A6(e, t, n) {
  let r;
  return V.createElement(
    "div",
    En(
      N([
        ["className", G(" ", ["container"])],
        ((r = ei(
          (o) => o(t)(n),
          N([
            (o) => (l) => Sv(o, l),
            (o) => (l) => O6(e, o, l),
            (o) => (l) => _v(o, l),
          ])
        )),
        ["children", Ne.Children.toArray(Array.from(r))]),
      ])
    )
  );
}
function D6(e, t) {
  const n = Lk(e);
  return n == null ? R6(e, t) : A6(n, e, t);
}
function $6() {
  let e;
  return [
    rg(Nm),
    ((e = new Vn(4, [$p()])),
    ie((t) => {
      t(e);
    })),
  ];
}
function L6(e) {
  return (t) => {
    const n =
      setInterval(() => {
        t(e($p()));
      }, 250) | 0;
    return {
      Dispose() {
        clearInterval(n);
      },
    };
  };
}
function z6(e) {
  return ie([ie("timer"), L6((t) => new Vn(4, [t]))]);
}
Y3(Tk("feliz-app", K3(z6, Q3($6, c6, D6))));
