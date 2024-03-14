// 2024-03-14 12:00
var Yi = Object.defineProperty;
var Ki = (i, e, o) =>
  e in i
    ? Yi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (i[e] = o);
var U = (i, e, o) => (Ki(i, typeof e != "symbol" ? e + "" : e, o), o);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) n(c);
  new MutationObserver((c) => {
    for (const a of c)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const a = {};
    return (
      c.integrity && (a.integrity = c.integrity),
      c.referrerPolicy && (a.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function n(c) {
    if (c.ep) return;
    c.ep = !0;
    const a = o(c);
    fetch(c.href, a);
  }
})();
function Z() {}
const Oi = (i) => i;
function Bi(i) {
  return i();
}
function fi() {
  return Object.create(null);
}
function Re(i) {
  i.forEach(Bi);
}
function ni(i) {
  return typeof i == "function";
}
function tt(i, e) {
  return i != i
    ? e == e
    : i !== e || (i && typeof i == "object") || typeof i == "function";
}
let qt;
function Wi(i, e) {
  return i === e
    ? !0
    : (qt || (qt = document.createElement("a")), (qt.href = e), i === qt.href);
}
function eo(i) {
  return Object.keys(i).length === 0;
}
function Ri(i, ...e) {
  if (i == null) {
    for (const n of e) n(void 0);
    return Z;
  }
  const o = i.subscribe(...e);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function _i(i) {
  let e;
  return Ri(i, (o) => (e = o))(), e;
}
function G(i, e, o) {
  i.$$.on_destroy.push(Ri(e, o));
}
function $(i, e, o) {
  return i.set(o), e;
}
const Vi = typeof window < "u";
let to = Vi ? () => window.performance.now() : () => Date.now(),
  ai = Vi ? (i) => requestAnimationFrame(i) : Z;
const Ct = new Set();
function Gi(i) {
  Ct.forEach((e) => {
    e.c(i) || (Ct.delete(e), e.f());
  }),
    Ct.size !== 0 && ai(Gi);
}
function io(i) {
  let e;
  return (
    Ct.size === 0 && ai(Gi),
    {
      promise: new Promise((o) => {
        Ct.add((e = { c: i, f: o }));
      }),
      abort() {
        Ct.delete(e);
      },
    }
  );
}
function l(i, e) {
  i.appendChild(e);
}
function qi(i) {
  if (!i) return document;
  const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return e && e.host ? e : i.ownerDocument;
}
function oo(i) {
  const e = r("style");
  return (e.textContent = "/* empty */"), lo(qi(i), e), e.sheet;
}
function lo(i, e) {
  return l(i.head || i, e), e.sheet;
}
function W(i, e, o) {
  i.insertBefore(e, o || null);
}
function Q(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function ji(i, e) {
  for (let o = 0; o < i.length; o += 1) i[o] && i[o].d(e);
}
function r(i) {
  return document.createElement(i);
}
function te(i) {
  return document.createTextNode(i);
}
function _() {
  return te(" ");
}
function ri() {
  return te("");
}
function x(i, e, o, n) {
  return i.addEventListener(e, o, n), () => i.removeEventListener(e, o, n);
}
function Zi(i) {
  return function (e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function t(i, e, o) {
  o == null
    ? i.removeAttribute(e)
    : i.getAttribute(e) !== o && i.setAttribute(e, o);
}
function It(i, e, o) {
  const n = new Set();
  for (let c = 0; c < i.length; c += 1) i[c].checked && n.add(i[c].__value);
  return o || n.delete(e), Array.from(n);
}
function Bt(i) {
  let e;
  return {
    p(...o) {
      (e = o), e.forEach((n) => i.push(n));
    },
    r() {
      e.forEach((o) => i.splice(i.indexOf(o), 1));
    },
  };
}
function no(i) {
  return Array.from(i.childNodes);
}
function Ke(i, e) {
  (e = "" + e), i.data !== e && (i.data = e);
}
function I(i, e) {
  i.value = e ?? "";
}
function j(i, e, o, n) {
  o == null
    ? i.style.removeProperty(e)
    : i.style.setProperty(e, o, n ? "important" : "");
}
function Zt(i, e, o) {
  for (let n = 0; n < i.options.length; n += 1) {
    const c = i.options[n];
    if (c.__value === e) {
      c.selected = !0;
      return;
    }
  }
  (!o || e !== void 0) && (i.selectedIndex = -1);
}
function Xi(i) {
  const e = i.querySelector(":checked");
  return e && e.__value;
}
function nt(i, e, o) {
  i.classList.toggle(e, !!o);
}
function ao(i, e, { bubbles: o = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: o, cancelable: n });
}
const Xt = new Map();
let Ut = 0;
function ro(i) {
  let e = 5381,
    o = i.length;
  for (; o--; ) e = ((e << 5) - e) ^ i.charCodeAt(o);
  return e >>> 0;
}
function co(i, e) {
  const o = { stylesheet: oo(e), rules: {} };
  return Xt.set(i, o), o;
}
function mi(i, e, o, n, c, a, s, p = 0) {
  const d = 16.666 / n;
  let f = `{
`;
  for (let w = 0; w <= 1; w += d) {
    const z = e + (o - e) * a(w);
    f +=
      w * 100 +
      `%{${s(z, 1 - z)}}
`;
  }
  const u =
      f +
      `100% {${s(o, 1 - o)}}
}`,
    m = `__svelte_${ro(u)}_${p}`,
    b = qi(i),
    { stylesheet: h, rules: g } = Xt.get(b) || co(b, i);
  g[m] ||
    ((g[m] = !0), h.insertRule(`@keyframes ${m} ${u}`, h.cssRules.length));
  const v = i.style.animation || "";
  return (
    (i.style.animation = `${v ? `${v}, ` : ""}${m} ${n}ms linear ${c}ms 1 both`),
    (Ut += 1),
    m
  );
}
function so(i, e) {
  const o = (i.style.animation || "").split(", "),
    n = o.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1,
    ),
    c = o.length - n.length;
  c && ((i.style.animation = n.join(", ")), (Ut -= c), Ut || po());
}
function po() {
  ai(() => {
    Ut ||
      (Xt.forEach((i) => {
        const { ownerNode: e } = i.stylesheet;
        e && Q(e);
      }),
      Xt.clear());
  });
}
let Ft;
function $t(i) {
  Ft = i;
}
function uo() {
  if (!Ft) throw new Error("Function called outside component initialization");
  return Ft;
}
function fo(i) {
  uo().$$.after_update.push(i);
}
const Tt = [],
  bi = [];
let Mt = [];
const vi = [],
  _o = Promise.resolve();
let li = !1;
function mo() {
  li || ((li = !0), _o.then(Ui));
}
function dt(i) {
  Mt.push(i);
}
const ii = new Set();
let St = 0;
function Ui() {
  if (St !== 0) return;
  const i = Ft;
  do {
    try {
      for (; St < Tt.length; ) {
        const e = Tt[St];
        St++, $t(e), bo(e.$$);
      }
    } catch (e) {
      throw ((Tt.length = 0), (St = 0), e);
    }
    for ($t(null), Tt.length = 0, St = 0; bi.length; ) bi.pop()();
    for (let e = 0; e < Mt.length; e += 1) {
      const o = Mt[e];
      ii.has(o) || (ii.add(o), o());
    }
    Mt.length = 0;
  } while (Tt.length);
  for (; vi.length; ) vi.pop()();
  (li = !1), ii.clear(), $t(i);
}
function bo(i) {
  if (i.fragment !== null) {
    i.update(), Re(i.before_update);
    const e = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, e),
      i.after_update.forEach(dt);
  }
}
function vo(i) {
  const e = [],
    o = [];
  Mt.forEach((n) => (i.indexOf(n) === -1 ? e.push(n) : o.push(n))),
    o.forEach((n) => n()),
    (Mt = e);
}
let Nt;
function ho() {
  return (
    Nt ||
      ((Nt = Promise.resolve()),
      Nt.then(() => {
        Nt = null;
      })),
    Nt
  );
}
function oi(i, e, o) {
  i.dispatchEvent(ao(`${e ? "intro" : "outro"}${o}`));
}
const jt = new Set();
let ht;
function Et() {
  ht = { r: 0, c: [], p: ht };
}
function yt() {
  ht.r || Re(ht.c), (ht = ht.p);
}
function oe(i, e) {
  i && i.i && (jt.delete(i), i.i(e));
}
function Se(i, e, o, n) {
  if (i && i.o) {
    if (jt.has(i)) return;
    jt.add(i),
      ht.c.push(() => {
        jt.delete(i), n && (o && i.d(1), n());
      }),
      i.o(e);
  } else n && n();
}
const go = { duration: 0 };
function _t(i, e, o, n) {
  let a = e(i, o, { direction: "both" }),
    s = n ? 0 : 1,
    p = null,
    d = null,
    f = null,
    u;
  function m() {
    f && so(i, f);
  }
  function b(g, v) {
    const w = g.b - s;
    return (
      (v *= Math.abs(w)),
      {
        a: s,
        b: g.b,
        d: w,
        duration: v,
        start: g.start,
        end: g.start + v,
        group: g.group,
      }
    );
  }
  function h(g) {
    const {
        delay: v = 0,
        duration: w = 300,
        easing: z = Oi,
        tick: M = Z,
        css: E,
      } = a || go,
      S = { start: to() + v, b: g };
    g || ((S.group = ht), (ht.r += 1)),
      "inert" in i &&
        (g ? u !== void 0 && (i.inert = u) : ((u = i.inert), (i.inert = !0))),
      p || d
        ? (d = S)
        : (E && (m(), (f = mi(i, s, g, w, v, z, E))),
          g && M(0, 1),
          (p = b(S, w)),
          dt(() => oi(i, g, "start")),
          io((L) => {
            if (
              (d &&
                L > d.start &&
                ((p = b(d, w)),
                (d = null),
                oi(i, p.b, "start"),
                E && (m(), (f = mi(i, s, p.b, p.duration, 0, z, a.css)))),
              p)
            ) {
              if (L >= p.end)
                M((s = p.b), 1 - s),
                  oi(i, p.b, "end"),
                  d || (p.b ? m() : --p.group.r || Re(p.group.c)),
                  (p = null);
              else if (L >= p.start) {
                const H = L - p.start;
                (s = p.a + p.d * z(H / p.duration)), M(s, 1 - s);
              }
            }
            return !!(p || d);
          }));
  }
  return {
    run(g) {
      ni(a)
        ? ho().then(() => {
            (a = a({ direction: g ? "in" : "out" })), h(g);
          })
        : h(g);
    },
    end() {
      m(), (p = d = null);
    },
  };
}
function We(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Rt(i, e) {
  i.d(1), e.delete(i.key);
}
function Vt(i, e, o, n, c, a, s, p, d, f, u, m) {
  let b = i.length,
    h = a.length,
    g = b;
  const v = {};
  for (; g--; ) v[i[g].key] = g;
  const w = [],
    z = new Map(),
    M = new Map(),
    E = [];
  for (g = h; g--; ) {
    const T = m(c, a, g),
      A = o(T);
    let k = s.get(A);
    k ? n && E.push(() => k.p(T, e)) : ((k = f(A, T)), k.c()),
      z.set(A, (w[g] = k)),
      A in v && M.set(A, Math.abs(g - v[A]));
  }
  const S = new Set(),
    L = new Set();
  function H(T) {
    oe(T, 1), T.m(p, u), s.set(T.key, T), (u = T.first), h--;
  }
  for (; b && h; ) {
    const T = w[h - 1],
      A = i[b - 1],
      k = T.key,
      C = A.key;
    T === A
      ? ((u = T.first), b--, h--)
      : z.has(C)
        ? !s.has(k) || S.has(k)
          ? H(T)
          : L.has(C)
            ? b--
            : M.get(k) > M.get(C)
              ? (L.add(k), H(T))
              : (S.add(C), b--)
        : (d(A, s), b--);
  }
  for (; b--; ) {
    const T = i[b];
    z.has(T.key) || d(T, s);
  }
  for (; h; ) H(w[h - 1]);
  return Re(E), w;
}
function pt(i) {
  i && i.c();
}
function at(i, e, o) {
  const { fragment: n, after_update: c } = i.$$;
  n && n.m(e, o),
    dt(() => {
      const a = i.$$.on_mount.map(Bi).filter(ni);
      i.$$.on_destroy ? i.$$.on_destroy.push(...a) : Re(a),
        (i.$$.on_mount = []);
    }),
    c.forEach(dt);
}
function rt(i, e) {
  const o = i.$$;
  o.fragment !== null &&
    (vo(o.after_update),
    Re(o.on_destroy),
    o.fragment && o.fragment.d(e),
    (o.on_destroy = o.fragment = null),
    (o.ctx = []));
}
function wo(i, e) {
  i.$$.dirty[0] === -1 && (Tt.push(i), mo(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ct(i, e, o, n, c, a, s = null, p = [-1]) {
  const d = Ft;
  $t(i);
  const f = (i.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: Z,
    not_equal: c,
    bound: fi(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: fi(),
    dirty: p,
    skip_bound: !1,
    root: e.target || d.$$.root,
  });
  s && s(f.root);
  let u = !1;
  if (
    ((f.ctx = o
      ? o(i, e.props || {}, (m, b, ...h) => {
          const g = h.length ? h[0] : b;
          return (
            f.ctx &&
              c(f.ctx[m], (f.ctx[m] = g)) &&
              (!f.skip_bound && f.bound[m] && f.bound[m](g), u && wo(i, m)),
            b
          );
        })
      : []),
    f.update(),
    (u = !0),
    Re(f.before_update),
    (f.fragment = n ? n(f.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = no(e.target);
      f.fragment && f.fragment.l(m), m.forEach(Q);
    } else f.fragment && f.fragment.c();
    e.intro && oe(i.$$.fragment), at(i, e.target, e.anchor), Ui();
  }
  $t(d);
}
class st {
  constructor() {
    U(this, "$$");
    U(this, "$$set");
  }
  $destroy() {
    rt(this, 1), (this.$destroy = Z);
  }
  $on(e, o) {
    if (!ni(o)) return Z;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(o),
      () => {
        const c = n.indexOf(o);
        c !== -1 && n.splice(c, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !eo(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const ko = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ko);
const Lt = [];
function ut(i, e = Z) {
  let o;
  const n = new Set();
  function c(p) {
    if (tt(i, p) && ((i = p), o)) {
      const d = !Lt.length;
      for (const f of n) f[1](), Lt.push(f, i);
      if (d) {
        for (let f = 0; f < Lt.length; f += 2) Lt[f][0](Lt[f + 1]);
        Lt.length = 0;
      }
    }
  }
  function a(p) {
    c(p(i));
  }
  function s(p, d = Z) {
    const f = [p, d];
    return (
      n.add(f),
      n.size === 1 && (o = e(c, a) || Z),
      p(i),
      () => {
        n.delete(f), n.size === 0 && o && (o(), (o = null));
      }
    );
  }
  return { set: c, update: a, subscribe: s };
}
class Qi {
  constructor() {
    U(this, "nome", "");
    U(this, "cognome", "");
    U(this, "data_nascita", "");
    U(this, "luogo_nascita", "");
    U(this, "cod_fiscale", "");
    U(this, "residenza", "");
    U(this, "allergie", "");
    U(this, "taglia_kit", "");
    U(this, "note", "");
    U(this, "classifica_fit", "");
    U(this, "doc", "");
    U(this, "filename", "");
    U(this, "file_type", "");
    U(this, "settimane", []);
    U(this, "extra_bus", []);
    U(this, "extra_inglese", []);
    U(this, "extra_compitiPRE", []);
    U(this, "extra_compitiPOST", []);
    U(this, "prezzo_default", 0);
    U(this, "prezzo_calcolato", 0);
  }
}
class zo {
  constructor() {
    U(this, "nome_genitore", "");
    U(this, "cognome_genitore", "");
    U(this, "data_nascita_genitore", "");
    U(this, "cod_fiscale_genitore", "");
    U(this, "num_telefono", "");
    U(this, "email", "");
    U(this, "altro_contatto", "");
    U(this, "prezzo_totale", 0);
    U(this, "prezzo_default", 0);
    U(this, "socio", !1);
    U(this, "figli", []);
    U(this, "folder", "");
  }
}
const Le = ut("tipo"),
  Ue = ut("tipo"),
  Qt = ut(!1),
  Ht = ut(""),
  Ot = ut(""),
  xt = ut(""),
  Ae = ut(new Qi()),
  Xe = ut(new zo()),
  Pt = ut(""),
  Jt = ut(!1),
  Yt = ut(!1);
function Ao(i) {
  let e, o, n, c, a, s, p, d, f, u, m, b, h, g, v, w;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("button")),
        (n.innerHTML =
          '<div class="camp_button-prev-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="currentColor"></path></svg></div>'),
        (c = _()),
        (a = r("div")),
        (a.textContent = "Scegli l'età"),
        (s = _()),
        (p = r("div")),
        (d = r("div")),
        (d.innerHTML =
          '<div class="camp_eta-card-text-wrapper"><div>Baby (3-5 anni)</div></div>'),
        (f = _()),
        (u = r("div")),
        (u.innerHTML =
          '<div class="camp_eta-card-text-wrapper"><div>Mini (6-7 anni)</div></div>'),
        (m = _()),
        (b = r("div")),
        (b.innerHTML =
          '<div class="camp_eta-card-text-wrapper"><div>Little (8-10 anni)</div></div>'),
        (h = _()),
        (g = r("div")),
        (g.innerHTML =
          '<div class="camp_eta-card-text-wrapper"><div>Junior (11-16 anni)</div></div>'),
        t(n, "class", "camp_button-prev"),
        t(n, "type", "button"),
        t(a, "id", "w-node-d8d2caa3-14f9-9bdb-7149-b50237b1cb8f-db296bf2"),
        t(a, "class", "camp_section-title"),
        t(o, "class", "camp_section-title-wrapper"),
        t(d, "id", "w-node-d8d2caa3-14f9-9bdb-7149-b50237b1cb92-db296bf2"),
        t(d, "class", "camp_eta-card baby"),
        t(u, "id", "w-node-be2b451a-8fa7-d762-50c1-e93b773bd976-db296bf2"),
        t(u, "class", "camp_eta-card mini"),
        t(b, "id", "w-node-_3eee74a5-a31f-0b6c-ae4b-7db6f5a2c8ed-db296bf2"),
        t(b, "class", "camp_eta-card little"),
        t(g, "id", "w-node-_0ff87211-e56b-9a1d-2767-a685515e7040-db296bf2"),
        t(g, "class", "camp_eta-card junior"),
        t(p, "class", "camp_eta-grid"),
        t(e, "class", "camp_wrapper");
    },
    m(z, M) {
      W(z, e, M),
        l(e, o),
        l(o, n),
        l(o, c),
        l(o, a),
        l(e, s),
        l(e, p),
        l(p, d),
        l(p, f),
        l(p, u),
        l(p, m),
        l(p, b),
        l(p, h),
        l(p, g),
        v ||
          ((w = [
            x(n, "click", i[2]),
            x(d, "click", i[3]),
            x(u, "click", i[4]),
            x(b, "click", i[5]),
            x(g, "click", i[6]),
          ]),
          (v = !0));
    },
    p: Z,
    i: Z,
    o: Z,
    d(z) {
      z && Q(e), (v = !1), Re(w);
    },
  };
}
function So(i, e, o) {
  let n, c, a, s;
  G(i, Le, (h) => o(0, (n = h))),
    G(i, Ue, (h) => o(7, (c = h))),
    G(i, Ot, (h) => o(8, (a = h))),
    G(i, Ae, (h) => o(9, (s = h))),
    s.settimane.length > 0 &&
      a != "" &&
      ($(Ue, (c = "tipo"), c), $(Le, (n = "settimane"), n));
  function p(h) {
    $(Ot, (a = h), a),
      $(Ue, (c = "multisport"), c),
      $(Le, (n = "settimane"), n);
  }
  return [
    n,
    p,
    () => {
      $(Le, (n = "tipo"), n);
    },
    () => p("baby"),
    () => p("mini"),
    () => p("little"),
    () => p("junior"),
  ];
}
class Lo extends st {
  constructor(e) {
    super(), ct(this, e, So, Ao, tt, {});
  }
}
function To(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Kt(i, { delay: e = 0, duration: o = 400, easing: n = Oi } = {}) {
  const c = +getComputedStyle(i).opacity;
  return { delay: e, duration: o, easing: n, css: (a) => `opacity: ${a * c}` };
}
function Dt(
  i,
  { delay: e = 0, duration: o = 400, easing: n = To, axis: c = "y" } = {},
) {
  const a = getComputedStyle(i),
    s = +a.opacity,
    p = c === "y" ? "height" : "width",
    d = parseFloat(a[p]),
    f = c === "y" ? ["top", "bottom"] : ["left", "right"],
    u = f.map((z) => `${z[0].toUpperCase()}${z.slice(1)}`),
    m = parseFloat(a[`padding${u[0]}`]),
    b = parseFloat(a[`padding${u[1]}`]),
    h = parseFloat(a[`margin${u[0]}`]),
    g = parseFloat(a[`margin${u[1]}`]),
    v = parseFloat(a[`border${u[0]}Width`]),
    w = parseFloat(a[`border${u[1]}Width`]);
  return {
    delay: e,
    duration: o,
    easing: n,
    css: (z) =>
      `overflow: hidden;opacity: ${Math.min(z * 20, 1) * s};${p}: ${z * d}px;padding-${f[0]}: ${z * m}px;padding-${f[1]}: ${z * b}px;margin-${f[0]}: ${z * h}px;margin-${f[1]}: ${z * g}px;border-${f[0]}-width: ${z * v}px;border-${f[1]}-width: ${z * w}px;`,
  };
}
const Co = 0.9,
  Mo = 0.85,
  Eo = 0.8,
  yo = 0.85,
  hi = [
    {
      id: 1,
      nome: "B - dal 17/06 al 21/06",
      descrizione: "Descrizione settimana inglese",
      prezzo: 30,
      week_code: "B",
    },
    {
      id: 2,
      nome: "C - dal 24/06 al 28/06",
      descrizione: "Descrizione settimana inglese",
      prezzo: 30,
      week_code: "C",
    },
    {
      id: 3,
      nome: "D - dal 01/07 al 05/07",
      descrizione: "Descrizione settimana inglese",
      prezzo: 30,
      week_code: "D",
    },
  ],
  xo = [
    {
      id: 1,
      nome: "Domodossola",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 80,
      week_code: "A",
    },
    {
      id: 2,
      nome: "Lega Lombarda",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 80,
      week_code: "A",
    },
    {
      id: 3,
      nome: "Porta Garibaldi",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 80,
      week_code: "A",
    },
    {
      id: 4,
      nome: "Repubblica",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 80,
      week_code: "A",
    },
    {
      id: 5,
      nome: "Domodossola",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 80,
      week_code: "B",
    },
    {
      id: 6,
      nome: "Lega Lombarda",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 80,
      week_code: "B",
    },
    {
      id: 7,
      nome: "Porta Garibaldi",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 80,
      week_code: "B",
    },
    {
      id: 8,
      nome: "Repubblica",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 80,
      week_code: "B",
    },
    {
      id: 9,
      nome: "Domodossola",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 80,
      week_code: "C",
    },
    {
      id: 10,
      nome: "Lega Lombarda",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 80,
      week_code: "C",
    },
    {
      id: 11,
      nome: "Porta Garibaldi",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 80,
      week_code: "C",
    },
    {
      id: 12,
      nome: "Repubblica",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 80,
      week_code: "C",
    },
  ],
  Do = [
    {
      id: 1,
      nome: "Compiti PRE",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 30,
      week_code: "A",
    },
    {
      id: 2,
      nome: "Compiti PRE",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 30,
      week_code: "B",
    },
    {
      id: 3,
      nome: "Compiti PRE",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 30,
      week_code: "C",
    },
    {
      id: 4,
      nome: "Compiti PRE",
      descrizione: "D - dal 01/07 al 05/07",
      prezzo: 30,
      week_code: "D",
    },
    {
      id: 5,
      nome: "Compiti PRE",
      descrizione: "E - dal 08/07 al 12/07",
      prezzo: 30,
      week_code: "E",
    },
    {
      id: 6,
      nome: "Compiti PRE",
      descrizione: "F - dal 15/07 al 19/07",
      prezzo: 30,
      week_code: "F",
    },
    {
      id: 7,
      nome: "Compiti PRE",
      descrizione: "G - dal 22/07 al 26/07",
      prezzo: 30,
      week_code: "G",
    },
    {
      id: 8,
      nome: "Compiti PRE",
      descrizione: "H - dal 29/07 al 02/08",
      prezzo: 30,
      week_code: "H",
    },
    {
      id: 9,
      nome: "Compiti PRE",
      descrizione: "I - dal 05/08 al 09/08",
      prezzo: 30,
      week_code: "I",
    },
    {
      id: 10,
      nome: "Compiti PRE",
      descrizione: "L - dal 19/08 al 23/08",
      prezzo: 30,
      week_code: "L",
    },
    {
      id: 11,
      nome: "Compiti PRE",
      descrizione: "M - dal 26/08 al 30/08",
      prezzo: 30,
      week_code: "M",
    },
    {
      id: 12,
      nome: "Compiti PRE",
      descrizione: "N - dal 02/09 al 06/09",
      prezzo: 30,
      week_code: "N",
    },
  ],
  No = [
    {
      id: 1,
      nome: "Compiti POST",
      descrizione: "A - dal 10/06 al 14/06",
      prezzo: 30,
      week_code: "A",
    },
    {
      id: 2,
      nome: "Compiti POST",
      descrizione: "B - dal 17/06 al 21/06",
      prezzo: 30,
      week_code: "B",
    },
    {
      id: 3,
      nome: "Compiti POST",
      descrizione: "C - dal 24/06 al 28/06",
      prezzo: 30,
      week_code: "C",
    },
    {
      id: 4,
      nome: "Compiti POST",
      descrizione: "D - dal 01/07 al 05/07",
      prezzo: 30,
      week_code: "D",
    },
    {
      id: 5,
      nome: "Compiti POST",
      descrizione: "E - dal 08/07 al 12/07",
      prezzo: 30,
      week_code: "E",
    },
    {
      id: 6,
      nome: "Compiti POST",
      descrizione: "F - dal 15/07 al 19/07",
      prezzo: 30,
      week_code: "F",
    },
    {
      id: 7,
      nome: "Compiti POST",
      descrizione: "G - dal 22/07 al 26/07",
      prezzo: 30,
      week_code: "G",
    },
    {
      id: 8,
      nome: "Compiti POST",
      descrizione: "H - dal 29/07 al 02/08",
      prezzo: 30,
      week_code: "H",
    },
    {
      id: 9,
      nome: "Compiti POST",
      descrizione: "I - dal 05/08 al 09/08",
      prezzo: 30,
      week_code: "I",
    },
    {
      id: 10,
      nome: "Compiti POST",
      descrizione: "L - dal 19/08 al 23/08",
      prezzo: 30,
      week_code: "L",
    },
    {
      id: 11,
      nome: "Compiti POST",
      descrizione: "M - dal 26/08 al 30/08",
      prezzo: 30,
      week_code: "M",
    },
    {
      id: 12,
      nome: "Compiti POST",
      descrizione: "N - dal 02/09 al 06/09",
      prezzo: 30,
      week_code: "N",
    },
  ],
  gi = [
    {
      id: 1,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 2,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 3,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "E",
      nome: "Settimana E - dal 08/07 al 12/07",
      descrizione: "SETTIMANA E (DAL 08.07 AL 12.07)",
      prezzo: 260,
    },
    {
      id: 4,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "F",
      nome: "Settimana F - dal 15/07 al 19/07",
      descrizione: "SETTIMANA F (DAL 15.07 AL 19.07)",
      prezzo: 260,
    },
    {
      id: 5,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "G",
      nome: "Settimana G - dal 22/07 al 26/07",
      descrizione: "SETTIMANA G (DAL 22.07 AL 26.07)",
      prezzo: 260,
    },
    {
      id: 6,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "H",
      nome: "Settimana H - dal 29/07 al 02/08",
      descrizione: "SETTIMANA H (DAL 29.07 AL 02.08)",
      prezzo: 260,
    },
    {
      id: 7,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "I",
      nome: "Settimana I - dal 05/08 al 09/08",
      descrizione: "SETTIMANA I (DAL 05.08 AL 09.08)",
      prezzo: 260,
    },
    {
      id: 8,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "L",
      nome: "Settimana L - dal 19/08 al 23/08",
      descrizione: "SETTIMANA L (DAL 19.08 AL 23.08)",
      prezzo: 260,
    },
    {
      id: 9,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "M",
      nome: "Settimana M - dal 26/08 al 30/08",
      descrizione: "SETTIMANA M (DAL 26.08 AL 30.08)",
      prezzo: 260,
    },
    {
      id: 10,
      tipo: "multisport",
      eta: "baby",
      sport: "",
      week_code: "N",
      nome: "Settimana N - dal 02/09 al 06/09",
      descrizione: "SETTIMANA N (DAL 02.09 AL 06.09)",
      prezzo: 260,
    },
    {
      id: 11,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 12,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 13,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 14,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 15,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "E",
      nome: "Settimana E - dal 08/07 al 12/07",
      descrizione: "SETTIMANA E (DAL 08.07 AL 12.07)",
      prezzo: 260,
    },
    {
      id: 16,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "F",
      nome: "Settimana F - dal 15/07 al 19/07",
      descrizione: "SETTIMANA F (DAL 15.07 AL 19.07)",
      prezzo: 260,
    },
    {
      id: 17,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "G",
      nome: "Settimana G - dal 22/07 al 26/07",
      descrizione: "SETTIMANA G (DAL 22.07 AL 26.07)",
      prezzo: 260,
    },
    {
      id: 18,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "H",
      nome: "Settimana H - dal 29/07 al 02/08",
      descrizione: "SETTIMANA H (DAL 29.07 AL 02.08)",
      prezzo: 260,
    },
    {
      id: 19,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "I",
      nome: "Settimana I - dal 05/08 al 09/08",
      descrizione: "SETTIMANA I (DAL 05.08 AL 09.08)",
      prezzo: 260,
    },
    {
      id: 20,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "L",
      nome: "Settimana L - dal 19/08 al 23/08",
      descrizione: "SETTIMANA L (DAL 19.08 AL 23.08)",
      prezzo: 260,
    },
    {
      id: 21,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "M",
      nome: "Settimana M - dal 26/08 al 30/08",
      descrizione: "SETTIMANA M (DAL 26.08 AL 30.08)",
      prezzo: 260,
    },
    {
      id: 22,
      tipo: "multisport",
      eta: "mini",
      sport: "",
      week_code: "N",
      nome: "Settimana N - dal 02/09 al 06/09",
      descrizione: "SETTIMANA N (DAL 02.09 AL 06.09)",
      prezzo: 260,
    },
    {
      id: 23,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 24,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 25,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 26,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 27,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "E",
      nome: "Settimana E - dal 08/07 al 12/07",
      descrizione: "SETTIMANA E (DAL 08.07 AL 12.07)",
      prezzo: 260,
    },
    {
      id: 28,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "F",
      nome: "Settimana F - dal 15/07 al 19/07",
      descrizione: "SETTIMANA F (DAL 15.07 AL 19.07)",
      prezzo: 260,
    },
    {
      id: 29,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "G",
      nome: "Settimana G - dal 22/07 al 26/07",
      descrizione: "SETTIMANA G (DAL 22.07 AL 26.07)",
      prezzo: 260,
    },
    {
      id: 30,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "H",
      nome: "Settimana H - dal 29/07 al 02/08",
      descrizione: "SETTIMANA H (DAL 29.07 AL 02.08)",
      prezzo: 260,
    },
    {
      id: 31,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "I",
      nome: "Settimana I - dal 05/08 al 09/08",
      descrizione: "SETTIMANA I (DAL 05.08 AL 09.08)",
      prezzo: 260,
    },
    {
      id: 32,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "L",
      nome: "Settimana L - dal 19/08 al 23/08",
      descrizione: "SETTIMANA L (DAL 19.08 AL 23.08)",
      prezzo: 260,
    },
    {
      id: 33,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "M",
      nome: "Settimana M - dal 26/08 al 30/08",
      descrizione: "SETTIMANA M (DAL 26.08 AL 30.08)",
      prezzo: 260,
    },
    {
      id: 34,
      tipo: "multisport",
      eta: "little",
      sport: "",
      week_code: "N",
      nome: "Settimana N - dal 02/09 al 06/09",
      descrizione: "SETTIMANA N (DAL 02.09 AL 06.09)",
      prezzo: 260,
    },
    {
      id: 35,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 36,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 37,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 38,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 39,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "E",
      nome: "Settimana E - dal 08/07 al 12/07",
      descrizione: "SETTIMANA E (DAL 08.07 AL 12.07)",
      prezzo: 260,
    },
    {
      id: 40,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "F",
      nome: "Settimana F - dal 15/07 al 19/07",
      descrizione: "SETTIMANA F (DAL 15.07 AL 19.07)",
      prezzo: 260,
    },
    {
      id: 41,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "G",
      nome: "Settimana G - dal 22/07 al 26/07",
      descrizione: "SETTIMANA G (DAL 22.07 AL 26.07)",
      prezzo: 260,
    },
    {
      id: 42,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "H",
      nome: "Settimana H - dal 29/07 al 02/08",
      descrizione: "SETTIMANA H (DAL 29.07 AL 02.08)",
      prezzo: 260,
    },
    {
      id: 43,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "I",
      nome: "Settimana I - dal 05/08 al 09/08",
      descrizione: "SETTIMANA I (DAL 05.08 AL 09.08)",
      prezzo: 260,
    },
    {
      id: 44,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "L",
      nome: "Settimana L - dal 19/08 al 23/08",
      descrizione: "SETTIMANA L (DAL 19.08 AL 23.08)",
      prezzo: 260,
    },
    {
      id: 45,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "M",
      nome: "Settimana M - dal 26/08 al 30/08",
      descrizione: "SETTIMANA M (DAL 26.08 AL 30.08)",
      prezzo: 260,
    },
    {
      id: 46,
      tipo: "multisport",
      eta: "junior",
      sport: "",
      week_code: "N",
      nome: "Settimana N - dal 02/09 al 06/09",
      descrizione: "SETTIMANA N (DAL 02.09 AL 06.09)",
      prezzo: 260,
    },
    {
      id: 47,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 48,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 49,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 50,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 51,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "E",
      nome: "Settimana E - dal 08/07 al 12/07",
      descrizione: "SETTIMANA E (DAL 08.07 AL 12.07)",
      prezzo: 260,
    },
    {
      id: 52,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "F",
      nome: "Settimana F - dal 15/07 al 19/07",
      descrizione: "SETTIMANA F (DAL 15.07 AL 19.07)",
      prezzo: 260,
    },
    {
      id: 53,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "G",
      nome: "Settimana G - dal 22/07 al 26/07",
      descrizione: "SETTIMANA G (DAL 22.07 AL 26.07)",
      prezzo: 260,
    },
    {
      id: 54,
      tipo: "specialistico",
      eta: "",
      sport: "tennis",
      week_code: "N",
      nome: "Settimana N - dal 02/09 al 06/09",
      descrizione: "SETTIMANA N (DAL 02.09 AL 06.09)",
      prezzo: 260,
    },
    {
      id: 55,
      tipo: "specialistico",
      eta: "",
      sport: "padel",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06)",
      prezzo: 260,
    },
    {
      id: 56,
      tipo: "specialistico",
      eta: "",
      sport: "nuoto",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 57,
      tipo: "specialistico",
      eta: "",
      sport: "nuoto",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 58,
      tipo: "specialistico",
      eta: "",
      sport: "nuoto",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07)",
      prezzo: 260,
    },
    {
      id: 59,
      tipo: "specialistico",
      eta: "",
      sport: "nuoto",
      week_code: "M",
      nome: "Settimana M - dal 26/08 al 30/08",
      descrizione: "SETTIMANA M (DAL 26.08 AL 30.08)",
      prezzo: 260,
    },
    {
      id: 60,
      tipo: "specialistico",
      eta: "",
      sport: "pattinaggio",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06)",
      prezzo: 260,
    },
    {
      id: 61,
      tipo: "specialistico",
      eta: "",
      sport: "hockey",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)",
      prezzo: 260,
    },
    {
      id: 62,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06 (Full)",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06) - Full",
      prezzo: 300,
    },
    {
      id: 63,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06 (Full)",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06) - Full",
      prezzo: 300,
    },
    {
      id: 64,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06 (Full)",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06) - Full",
      prezzo: 300,
    },
    {
      id: 65,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07 (Full)",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07) - Full",
      prezzo: 300,
    },
    {
      id: 66,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "A",
      nome: "Settimana A - dal 10/06 al 14/06 (Half)",
      descrizione: "SETTIMANA A (DAL 10.06 AL 14.06)- Half",
      prezzo: 300,
    },
    {
      id: 67,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "B",
      nome: "Settimana B - dal 17/06 al 21/06 (Half)",
      descrizione: "SETTIMANA B (DAL 17.06 AL 21.06) - Half",
      prezzo: 250,
    },
    {
      id: 68,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "C",
      nome: "Settimana C - dal 24/06 al 28/06 (Half)",
      descrizione: "SETTIMANA C (DAL 24.06 AL 28.06) - Half",
      prezzo: 250,
    },
    {
      id: 69,
      tipo: "specialistico",
      eta: "",
      sport: "intensivo tennis",
      week_code: "D",
      nome: "Settimana D - dal 01/07 al 05/07 (Half)",
      descrizione: "SETTIMANA D (DAL 01.07 AL 05.07) - Half",
      prezzo: 250,
    },
  ];
function Ji(i = []) {
  console.log("settimane scelte: " + JSON.stringify(i));
  let e = 0,
    o = [];
  const n = _i(Ae);
  console.log("settimane figlio store: " + JSON.stringify(n)),
    o.push(...n.settimane, ...i),
    console.log("settimane figlio sommate: " + JSON.stringify(o));
  const c = _i(Xe),
    a = c.figli.reduce((s, p) => s + p.settimane.length, 0);
  return (
    console.log(c),
    console.log("count settimane richiesta store: " + a),
    o.sort((s, p) => {
      let d = s.week_code.toLowerCase(),
        f = p.week_code.toLowerCase();
      return d < f ? -1 : d > f ? 1 : 0;
    }),
    o.forEach((s, p) => {
      p + a === 0
        ? s.sport === "intensivo tennis"
          ? (e += s.prezzo)
          : (e += s.prezzo * Co)
        : p + a === 1
          ? s.sport === "intensivo tennis"
            ? (e += s.prezzo)
            : (e += s.prezzo * Mo)
          : s.sport === "intensivo tennis"
            ? (e += s.prezzo)
            : (e += s.prezzo * Eo);
    }),
    parseInt(e.toFixed())
  );
}
function wi(i, e, o) {
  const n = i.slice();
  return (n[21] = e[o]), n;
}
function ki(i, e) {
  let o,
    n,
    c,
    a,
    s,
    p,
    d = !1,
    f,
    u,
    m,
    b,
    h,
    g,
    v = e[21].nome + "",
    w,
    z,
    M,
    E,
    S;
  function L(...k) {
    return e[10](e[21], ...k);
  }
  function H(...k) {
    return e[11](e[21], ...k);
  }
  function T(...k) {
    return e[14](e[21], ...k);
  }
  function A(...k) {
    return e[15](e[21], ...k);
  }
  return (
    (M = Bt(e[13][0])),
    {
      key: i,
      first: null,
      c() {
        (o = r("div")),
          (n = r("label")),
          (c = r("div")),
          (a = _()),
          (s = r("input")),
          (h = _()),
          (g = r("span")),
          (w = te(v)),
          (z = _()),
          t(
            c,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom simulatore_checkbox-check",
          ),
          (s.__value = p = e[21]),
          I(s, s.__value),
          (s.disabled = f =
            e[0].filter(L).length > 0 || e[1].settimane.filter(H).length > 0),
          t(s, "type", "checkbox"),
          t(s, "id", (u = "checkbox" + e[21].id)),
          t(s, "name", (m = "checkbox" + e[21].id)),
          t(s, "data-name", (b = "Checkbox " + e[21].id)),
          j(s, "opacity", "0"),
          j(s, "position", "absolute"),
          j(s, "z-index", "-1"),
          t(g, "class", "simulatore_checkbox-label w-form-label"),
          t(n, "class", "w-checkbox simulatore_checkbox-field"),
          nt(
            n,
            "is-disabled",
            e[0].filter(T).length > 0 || e[1].settimane.filter(A).length > 0,
          ),
          t(o, "class", "simulatore_checkbox-group"),
          M.p(s),
          (this.first = o);
      },
      m(k, C) {
        W(k, o, C),
          l(o, n),
          l(n, c),
          l(n, a),
          l(n, s),
          (s.checked = ~(e[0] || []).indexOf(s.__value)),
          l(n, h),
          l(n, g),
          l(g, w),
          l(o, z),
          E || ((S = x(s, "change", e[12])), (E = !0));
      },
      p(k, C) {
        (e = k),
          C & 4 &&
            p !== (p = e[21]) &&
            ((s.__value = p), I(s, s.__value), (d = !0)),
          C & 7 &&
            f !==
              (f =
                e[0].filter(L).length > 0 ||
                e[1].settimane.filter(H).length > 0) &&
            (s.disabled = f),
          C & 4 && u !== (u = "checkbox" + e[21].id) && t(s, "id", u),
          C & 4 && m !== (m = "checkbox" + e[21].id) && t(s, "name", m),
          C & 4 && b !== (b = "Checkbox " + e[21].id) && t(s, "data-name", b),
          (d || C & 5) && (s.checked = ~(e[0] || []).indexOf(s.__value)),
          C & 4 && v !== (v = e[21].nome + "") && Ke(w, v),
          C & 7 &&
            nt(
              n,
              "is-disabled",
              e[0].filter(T).length > 0 || e[1].settimane.filter(A).length > 0,
            );
      },
      d(k) {
        k && Q(o), M.r(), (E = !1), S();
      },
    }
  );
}
function Io(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M = [],
    E = new Map(),
    S,
    L,
    H,
    T,
    A,
    k,
    C,
    D,
    V,
    B,
    F,
    de,
    O,
    pe,
    Pe,
    me,
    Oe,
    ke,
    y,
    Y,
    $e,
    Te = i[0].length + "",
    re,
    Ve,
    le,
    He,
    be,
    q,
    Me,
    ue,
    Ze,
    X,
    xe,
    J,
    Ce,
    De,
    ze,
    fe,
    ne,
    Qe,
    Ne,
    Ge = We(i[2]);
  const Ie = (P) => P[21].id;
  for (let P = 0; P < Ge.length; P += 1) {
    let K = wi(i, Ge, P),
      ee = Ie(K);
    E.set(ee, (M[P] = ki(ee, K)));
  }
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("button")),
        (n.innerHTML =
          '<div class="camp_button-prev-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="currentColor"></path></svg></div>'),
        (c = _()),
        (a = r("div")),
        (a.textContent = "Scegli le settimane"),
        (s = _()),
        (p = r("div")),
        (d = r("div")),
        (f = r("div")),
        (u = te("Seleziona le settimane disponibili per ")),
        (m = r("span")),
        (m.textContent = `${i[7]}`),
        (b = te(":")),
        (h = _()),
        (g = r("div")),
        (v = r("form")),
        (w = r("div")),
        (z = r("div"));
      for (let P = 0; P < M.length; P += 1) M[P].c();
      (S = _()),
        (L = r("div")),
        (L.innerHTML =
          "<div>Thank you! Your submission has been received!</div>"),
        (H = _()),
        (T = r("div")),
        (T.innerHTML =
          "<div>Oops! Something went wrong while submitting the form.</div>"),
        (A = _()),
        (k = r("div")),
        (C = r("div")),
        (D = r("h2")),
        (D.textContent = "Totale:"),
        (V = _()),
        (B = r("div")),
        (F = r("h2")),
        (de = te(i[3])),
        (O = te(" €")),
        (pe = _()),
        (Pe = r("div")),
        (me = te(i[4])),
        (Oe = te(" €")),
        (ke = _()),
        (y = r("div")),
        (Y = te("Hai selezionato ")),
        ($e = r("span")),
        (re = te(Te)),
        (Ve = te(" settimane per ")),
        (le = r("span")),
        (le.textContent = `${i[7]}`),
        (He = _()),
        (be = r("div")),
        (q = r("div")),
        (q.textContent =
          "Vuoi selezionare altre settimane di camp, in diverse tipologie?"),
        (Me = _()),
        (ue = r("button")),
        (Ze = te("Sì, voglio fare una settimana diversa")),
        (xe = _()),
        (J = r("button")),
        (Ce = r("div")),
        (Ce.textContent = "No, procedo con la preiscrizione"),
        (De = _()),
        (ze = r("img")),
        t(n, "class", "camp_button-prev"),
        t(n, "type", "button"),
        t(a, "id", "w-node-a21375e2-58d0-dc31-3fbd-2cb48a7e8647-db296bf2"),
        t(a, "class", "camp_section-title"),
        t(o, "class", "camp_section-title-wrapper"),
        t(m, "class", "camp_tipo-scelto-text"),
        t(f, "class", "camp_text-large"),
        t(z, "class", "simulatore_play-checkbox-wrapper"),
        t(w, "class", "camp_checkbox-container"),
        t(v, "id", "email-form"),
        t(v, "name", "email-form"),
        t(v, "data-name", "Email Form"),
        t(v, "method", "get"),
        t(v, "data-wf-page-id", "65def0045e3bbeeadb296bf2"),
        t(v, "data-wf-element-id", "3703a77d-e045-099a-3eaf-c4ccc014e9f5"),
        t(v, "aria-label", "Email Form"),
        t(L, "class", "w-form-done"),
        t(L, "tabindex", "-1"),
        t(L, "role", "region"),
        t(L, "aria-label", "Email Form success"),
        t(T, "class", "w-form-fail"),
        t(T, "tabindex", "-1"),
        t(T, "role", "region"),
        t(T, "aria-label", "Email Form failure"),
        t(g, "class", "form-full-width w-form"),
        t(d, "id", "w-node-_429e2629-7ab4-e6c0-d22f-8328cdbd748a-db296bf2"),
        t(d, "class", "camp_week-left"),
        t(D, "class", "simulatore_title-abbonamento"),
        t(F, "class", "simulatore_title-abbonamento is-play"),
        t(Pe, "class", "simulatore_title-abbonamento discount"),
        t(C, "class", "simulatore_abbonamento-title-wrapper"),
        t($e, "class", "text-span"),
        t(le, "class", "camp_tipo-scelto-text"),
        (ue.disabled = X = i[0].length === 0),
        t(ue, "class", "simulatore_button w-button"),
        nt(ue, "is-disabled", i[0].length === 0),
        Wi(
          ze.src,
          (fe =
            "https://assets-global.website-files.com/6196bae1920e8a4177775511/6196bae1920e8a845677553e_icon-select-arrow.svg"),
        ) || t(ze, "src", fe),
        t(ze, "loading", "lazy"),
        t(ze, "alt", ""),
        t(ze, "class", "camp_icon-link-icon"),
        (J.disabled = ne = i[0].length === 0),
        t(J, "class", "camp_icon-link w-inline-block"),
        nt(J, "is-disabled", i[0].length === 0),
        t(be, "class", "camp_week-right-content"),
        t(k, "id", "w-node-c7a1a6e0-060a-c2a3-b937-e8141bcc5cf7-db296bf2"),
        t(k, "class", "camp_weel-right"),
        t(p, "class", "camp_week-grid"),
        t(e, "class", "camp_wrapper");
    },
    m(P, K) {
      W(P, e, K),
        l(e, o),
        l(o, n),
        l(o, c),
        l(o, a),
        l(e, s),
        l(e, p),
        l(p, d),
        l(d, f),
        l(f, u),
        l(f, m),
        l(f, b),
        l(d, h),
        l(d, g),
        l(g, v),
        l(v, w),
        l(w, z);
      for (let ee = 0; ee < M.length; ee += 1) M[ee] && M[ee].m(z, null);
      l(g, S),
        l(g, L),
        l(g, H),
        l(g, T),
        l(p, A),
        l(p, k),
        l(k, C),
        l(C, D),
        l(C, V),
        l(C, B),
        l(B, F),
        l(F, de),
        l(F, O),
        l(B, pe),
        l(B, Pe),
        l(Pe, me),
        l(Pe, Oe),
        l(k, ke),
        l(k, y),
        l(y, Y),
        l(y, $e),
        l($e, re),
        l(y, Ve),
        l(y, le),
        l(k, He),
        l(k, be),
        l(be, q),
        l(be, Me),
        l(be, ue),
        l(ue, Ze),
        l(be, xe),
        l(be, J),
        l(J, Ce),
        l(J, De),
        l(J, ze),
        Qe ||
          ((Ne = [
            x(n, "click", i[9]),
            x(ue, "click", i[16]),
            x(J, "click", i[17]),
          ]),
          (Qe = !0));
    },
    p(P, [K]) {
      K & 7 &&
        ((Ge = We(P[2])), (M = Vt(M, K, Ie, 1, P, Ge, E, z, Rt, ki, null, wi))),
        K & 8 && Ke(de, P[3]),
        K & 16 && Ke(me, P[4]),
        K & 1 && Te !== (Te = P[0].length + "") && Ke(re, Te),
        K & 1 && X !== (X = P[0].length === 0) && (ue.disabled = X),
        K & 1 && nt(ue, "is-disabled", P[0].length === 0),
        K & 1 && ne !== (ne = P[0].length === 0) && (J.disabled = ne),
        K & 1 && nt(J, "is-disabled", P[0].length === 0);
    },
    i: Z,
    o: Z,
    d(P) {
      P && Q(e);
      for (let K = 0; K < M.length; K += 1) M[K].d();
      (Qe = !1), Re(Ne);
    },
  };
}
function Ho(i, e, o) {
  let n, c, a, s, p, d, f, u;
  G(i, Ae, (A) => o(1, (a = A))),
    G(i, Ue, (A) => o(5, (s = A))),
    G(i, Le, (A) => o(6, (p = A))),
    G(i, Ot, (A) => o(18, (d = A))),
    G(i, xt, (A) => o(19, (f = A))),
    G(i, Ht, (A) => o(20, (u = A)));
  let m = [],
    b = [];
  u === "specialistico"
    ? (b = gi
        .filter((A) => A.sport === f)
        .sort((A, k) => {
          let C = A.week_code.toLowerCase(),
            D = k.week_code.toLowerCase();
          return C < D ? -1 : C > D ? 1 : 0;
        }))
    : (b = gi
        .filter((A) => A.eta == d)
        .sort((A, k) => {
          let C = A.week_code.toLowerCase(),
            D = k.week_code.toLowerCase();
          return C < D ? -1 : C > D ? 1 : 0;
        }));
  let h = u + " " + (f || d);
  function g(A) {
    a.settimane.push(...m), $(Le, (p = A), p), $(Ue, (s = A), s);
  }
  const v = [[]],
    w = () => {
      $(Le, (p = s), p);
    },
    z = (A, k) => k.week_code === A.week_code && k.id != A.id,
    M = (A, k) => k.week_code === A.week_code;
  function E() {
    (m = It(v[0], this.__value, this.checked)), o(0, m);
  }
  const S = (A, k) => k.week_code === A.week_code && k.id != A.id,
    L = (A, k) => k.week_code === A.week_code,
    H = () => g("tipo"),
    T = () => g("extra");
  return (
    (i.$$.update = () => {
      i.$$.dirty & 3 &&
        o(
          4,
          (n =
            a.settimane.reduce((A, { prezzo: k }) => A + k, 0) +
            m.reduce((A, { prezzo: k }) => A + k, 0)),
        ),
        i.$$.dirty & 1 && o(3, (c = Ji(m)));
    }),
    [m, a, b, c, n, s, p, h, g, w, z, M, E, v, S, L, H, T]
  );
}
class Po extends st {
  constructor(e) {
    super(), ct(this, e, Ho, Io, tt, {});
  }
}
function $o(i) {
  let e, o, n, c, a, s, p, d, f, u, m, b, h, g, v, w, z, M, E, S;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("button")),
        (n.innerHTML =
          '<div class="camp_button-prev-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="currentColor"></path></svg></div>'),
        (c = _()),
        (a = r("div")),
        (a.textContent = "Scegli lo sport"),
        (s = _()),
        (p = r("div")),
        (d = r("div")),
        (d.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Tennis</div> <div class="camp_sport-card-text-detail">6 - 14 anni</div></div>'),
        (f = _()),
        (u = r("div")),
        (u.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Padel</div> <div class="camp_sport-card-text-detail">6 - 14 anni</div></div>'),
        (m = _()),
        (b = r("div")),
        (b.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Nuoto</div> <div class="camp_sport-card-text-detail">6 - 14 anni</div></div>'),
        (h = _()),
        (g = r("div")),
        (g.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Pattinaggio artistico</div> <div class="camp_sport-card-text-detail">6 - 12 anni</div></div>'),
        (v = _()),
        (w = r("div")),
        (w.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Pattinaggio Inline &amp; Hockey</div> <div class="camp_sport-card-text-detail">6 - 12 anni</div></div>'),
        (z = _()),
        (M = r("div")),
        (M.innerHTML =
          '<div class="camp_sport-card-text-wrapper"><div>Tennis Intensivo</div></div>'),
        t(n, "class", "camp_button-prev"),
        t(n, "type", "button"),
        t(a, "id", "w-node-_1172b909-eecb-25a5-6649-080cd962ceb7-db296bf2"),
        t(a, "class", "camp_section-title"),
        t(o, "id", "w-node-_18326f5c-718e-e5f6-0019-e7cb99adc51b-db296bf2"),
        t(o, "class", "camp_section-title-wrapper"),
        t(d, "id", "w-node-_1172b909-eecb-25a5-6649-080cd962ceba-db296bf2"),
        t(d, "class", "camp_sport-card tennis"),
        t(u, "id", "w-node-_9b08d3c3-8dcd-f4ea-e468-282ba9ba5783-db296bf2"),
        t(u, "class", "camp_sport-card padel"),
        t(b, "id", "w-node-_7327c04e-e61e-2738-e682-d9e9463316f5-db296bf2"),
        t(b, "class", "camp_sport-card nuoto"),
        t(g, "id", "w-node-b089d079-3c29-773b-0196-654974947972-db296bf2"),
        t(g, "class", "camp_sport-card pattinaggio"),
        t(w, "id", "w-node-_024cb16d-e143-fba7-926e-5ed9ed3a10de-db296bf2"),
        t(w, "class", "camp_sport-card hockey"),
        t(M, "id", "w-node-dd8db0fa-593b-43f8-6f4c-6d0eac2fe9b9-db296bf2"),
        t(M, "class", "camp_sport-card intensivo"),
        t(p, "class", "camp_sport-grid"),
        t(e, "class", "camp_wrapper");
    },
    m(L, H) {
      W(L, e, H),
        l(e, o),
        l(o, n),
        l(o, c),
        l(o, a),
        l(e, s),
        l(e, p),
        l(p, d),
        l(p, f),
        l(p, u),
        l(p, m),
        l(p, b),
        l(p, h),
        l(p, g),
        l(p, v),
        l(p, w),
        l(p, z),
        l(p, M),
        E ||
          ((S = [
            x(n, "click", i[2]),
            x(d, "click", i[3]),
            x(u, "click", i[4]),
            x(b, "click", i[5]),
            x(g, "click", i[6]),
            x(w, "click", i[7]),
            x(M, "click", i[8]),
          ]),
          (E = !0));
    },
    p: Z,
    i: Z,
    o: Z,
    d(L) {
      L && Q(e), (E = !1), Re(S);
    },
  };
}
function Fo(i, e, o) {
  let n, c, a;
  G(i, Le, (g) => o(0, (n = g))),
    G(i, Ue, (g) => o(9, (c = g))),
    G(i, xt, (g) => o(10, (a = g))),
    $(xt, (a = ""), a);
  function s(g) {
    $(xt, (a = g), a),
      $(Ue, (c = "specialistico"), c),
      $(Le, (n = "settimane"), n);
  }
  return [
    n,
    s,
    () => {
      $(Le, (n = "tipo"), n);
    },
    () => s("tennis"),
    () => s("padel"),
    () => s("nuoto"),
    () => s("pattinaggio"),
    () => s("hockey"),
    () => s("intensivo tennis"),
  ];
}
class Oo extends st {
  constructor(e) {
    super(), ct(this, e, Fo, $o, tt, {});
  }
}
function Bo(i) {
  let e, o, n, c, a, s, p, d, f;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "Scegli il Camp che fa per te"),
        (n = _()),
        (c = r("div")),
        (a = r("div")),
        (a.innerHTML =
          '<div class="camp_tipo-card-text-wrapper"><div>Multisport</div></div>'),
        (s = _()),
        (p = r("div")),
        (p.innerHTML =
          '<div class="camp_tipo-card-text-wrapper"><div>Specialistico</div></div>'),
        t(o, "id", "w-node-_95dbe4b9-a9e3-2110-a14d-033c74fd563c-db296bf2"),
        t(o, "class", "camp_section-title"),
        t(a, "id", "w-node-_6a36047e-e482-533d-b744-7e82fc7a443e-db296bf2"),
        t(a, "class", "camp_tipo-card multisport"),
        t(p, "id", "w-node-d6e4ec7a-f26a-656a-b39c-f1c4e18aa1ab-db296bf2"),
        t(p, "class", "camp_tipo-card specialistico"),
        t(c, "class", "camp_tipo-grid"),
        t(e, "class", "camp_wrapper");
    },
    m(u, m) {
      W(u, e, m),
        l(e, o),
        l(e, n),
        l(e, c),
        l(c, a),
        l(c, s),
        l(c, p),
        d || ((f = [x(a, "click", i[1]), x(p, "click", i[2])]), (d = !0));
    },
    p: Z,
    i: Z,
    o: Z,
    d(u) {
      u && Q(e), (d = !1), Re(f);
    },
  };
}
function Ro(i, e, o) {
  let n, c, a, s, p, d, f;
  G(i, Le, (h) => o(3, (n = h))),
    G(i, Ht, (h) => o(4, (c = h))),
    G(i, Ue, (h) => o(5, (a = h))),
    G(i, Ae, (h) => o(6, (s = h))),
    G(i, Qt, (h) => o(7, (p = h))),
    G(i, xt, (h) => o(8, (d = h))),
    G(i, Ot, (h) => o(9, (f = h))),
    p
      ? ($(Ae, (s = new Qi()), s),
        $(Ot, (f = ""), f),
        $(xt, (d = ""), d),
        $(Ht, (c = ""), c),
        $(Qt, (p = !1), p))
      : s.settimane.filter((h) => h.tipo === "multisport").length > 0 &&
        a != "specialistico" &&
        ($(Ht, (c = "specialistico"), c),
        $(Le, (n = "specialistico"), n),
        $(Ue, (a = "specialistico"), a));
  function u(h) {
    $(Ht, (c = h), c), $(Le, (n = h), n);
  }
  return [u, () => u("multisport"), () => u("specialistico")];
}
class Vo extends st {
  constructor(e) {
    super(), ct(this, e, Ro, Bo, tt, {});
  }
}
function zi(i) {
  let e, o, n, c, a, s, p, d, f, u, m, b, h, g;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("div")),
        (c = _()),
        (a = r("div")),
        (s = r("div")),
        (s.innerHTML =
          '<img src="https://assets-global.website-files.com/6196bae1920e8a4177775511/655399a0ccf5d1bd49ccdf37_cancel.svg" loading="lazy" alt=""/>'),
        (p = _()),
        (d = r("div")),
        (d.textContent = "Percorso seguito dal nostro pullman."),
        (f = _()),
        (u = r("div")),
        t(n, "class", "simulatore_popup-background"),
        t(s, "class", "simulatore_popup-close-icon"),
        t(d, "class", "simulatore_popup-text"),
        t(u, "class", "camp_popup-image"),
        t(a, "class", "camp_popup-content-wrapper"),
        t(o, "class", "simulatore_popup-container"),
        t(e, "class", "svelte-popup"),
        j(e, "position", "absolute"),
        j(e, "top", "0%"),
        j(e, "bottom", "0%"),
        j(e, "left", "0%"),
        j(e, "right", "0%");
    },
    m(v, w) {
      W(v, e, w),
        l(e, o),
        l(o, n),
        l(o, c),
        l(o, a),
        l(a, s),
        l(a, p),
        l(a, d),
        l(a, f),
        l(a, u),
        (b = !0),
        h ||
          ((g = [
            x(n, "keyup", i[1]),
            x(n, "click", i[2]),
            x(s, "click", Zi(i[2])),
          ]),
          (h = !0));
    },
    p: Z,
    i(v) {
      b ||
        (v &&
          dt(() => {
            b && (m || (m = _t(e, Kt, {}, !0)), m.run(1));
          }),
        (b = !0));
    },
    o(v) {
      v && (m || (m = _t(e, Kt, {}, !1)), m.run(0)), (b = !1);
    },
    d(v) {
      v && Q(e), v && m && m.end(), (h = !1), Re(g);
    },
  };
}
function Go(i) {
  let e,
    o = i[0] && zi(i);
  return {
    c() {
      o && o.c(), (e = ri());
    },
    m(n, c) {
      o && o.m(n, c), W(n, e, c);
    },
    p(n, [c]) {
      n[0]
        ? o
          ? (o.p(n, c), c & 1 && oe(o, 1))
          : ((o = zi(n)), o.c(), oe(o, 1), o.m(e.parentNode, e))
        : o &&
          (Et(),
          Se(o, 1, 1, () => {
            o = null;
          }),
          yt());
    },
    i(n) {
      oe(o);
    },
    o(n) {
      Se(o);
    },
    d(n) {
      n && Q(e), o && o.d(n);
    },
  };
}
function qo(i, e, o) {
  let n;
  G(i, Jt, (s) => o(0, (n = s)));
  function c(s) {
    s.key === "Escape" && a();
  }
  function a() {
    $(Jt, (n = !1), n);
  }
  return [n, c, a];
}
class jo extends st {
  constructor(e) {
    super(), ct(this, e, qo, Go, tt, {});
  }
}
function Ai(i, e, o) {
  const n = i.slice();
  return (n[35] = e[o]), n;
}
function Si(i, e, o) {
  const n = i.slice();
  return (n[35] = e[o]), n;
}
function Li(i, e, o) {
  const n = i.slice();
  return (n[40] = e[o]), n;
}
function Ti(i, e, o) {
  const n = i.slice();
  return (n[43] = e[o]), n;
}
function Ci(i) {
  let e,
    o,
    n,
    c = [],
    a = new Map(),
    s,
    p,
    d = We(i[12]);
  const f = (u) => u[43].id;
  for (let u = 0; u < d.length; u += 1) {
    let m = Ti(i, d, u),
      b = f(m);
    a.set(b, (c[u] = Mi(b, m)));
  }
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "Seleziona le settimane:"),
        (n = _());
      for (let u = 0; u < c.length; u += 1) c[u].c();
      t(o, "id", "w-node-ecccff3a-ead6-1bfd-b30c-fe8e04248fbd-db296bf2"),
        t(e, "class", "camp_extra-check-week-wrapper");
    },
    m(u, m) {
      W(u, e, m), l(e, o), l(e, n);
      for (let b = 0; b < c.length; b += 1) c[b] && c[b].m(e, null);
      p = !0;
    },
    p(u, m) {
      m[0] & 4112 &&
        ((d = We(u[12])), (c = Vt(c, m, f, 1, u, d, a, e, Rt, Mi, null, Ti)));
    },
    i(u) {
      p ||
        (u &&
          dt(() => {
            p && (s || (s = _t(e, Dt, {}, !0)), s.run(1));
          }),
        (p = !0));
    },
    o(u) {
      u && (s || (s = _t(e, Dt, {}, !1)), s.run(0)), (p = !1);
    },
    d(u) {
      u && Q(e);
      for (let m = 0; m < c.length; m += 1) c[m].d();
      u && s && s.end();
    },
  };
}
function Mi(i, e) {
  let o,
    n,
    c,
    a,
    s,
    p = !1,
    d,
    f,
    u,
    m,
    b,
    h = e[43].descrizione + "",
    g,
    v,
    w,
    z,
    M;
  return (
    (w = Bt(e[23][3])),
    {
      key: i,
      first: null,
      c() {
        (o = r("label")),
          (n = r("div")),
          (c = _()),
          (a = r("input")),
          (m = _()),
          (b = r("span")),
          (g = te(h)),
          (v = _()),
          t(
            n,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom camp_extra-week-check",
          ),
          (a.__value = s = e[43]),
          I(a, a.__value),
          t(a, "type", "checkbox"),
          t(a, "name", (d = "Checkbox" + e[43].id)),
          t(a, "id", (f = "Checkbox" + e[43].id)),
          t(a, "data-name", (u = "Checkbox" + e[43].id)),
          j(a, "opacity", "0"),
          j(a, "position", "absolute"),
          j(a, "z-index", "-1"),
          t(b, "class", "w-form-label"),
          t(o, "class", "w-checkbox camp_extra-week-check-field"),
          w.p(a),
          (this.first = o);
      },
      m(E, S) {
        W(E, o, S),
          l(o, n),
          l(o, c),
          l(o, a),
          (a.checked = ~(e[4] || []).indexOf(a.__value)),
          l(o, m),
          l(o, b),
          l(b, g),
          l(o, v),
          z || ((M = x(a, "change", e[22])), (z = !0));
      },
      p(E, S) {
        (e = E),
          S[0] & 4096 &&
            s !== (s = e[43]) &&
            ((a.__value = s), I(a, a.__value), (p = !0)),
          S[0] & 4096 && d !== (d = "Checkbox" + e[43].id) && t(a, "name", d),
          S[0] & 4096 && f !== (f = "Checkbox" + e[43].id) && t(a, "id", f),
          S[0] & 4096 &&
            u !== (u = "Checkbox" + e[43].id) &&
            t(a, "data-name", u),
          (p || S[0] & 4112) && (a.checked = ~(e[4] || []).indexOf(a.__value)),
          S[0] & 4096 && h !== (h = e[43].descrizione + "") && Ke(g, h);
      },
      d(E) {
        E && Q(o), w.r(), (z = !1), M();
      },
    }
  );
}
function Ei(i, e) {
  let o, n, c, a, s, p, d, f, u, m, b, h;
  function g(...w) {
    return e[24](e[40], ...w);
  }
  function v(...w) {
    return e[26](e[40], ...w);
  }
  return (
    (m = Bt(e[23][2])),
    {
      key: i,
      first: null,
      c() {
        (o = r("div")),
          (n = r("label")),
          (c = r("div")),
          (a = _()),
          (s = r("input")),
          (d = _()),
          (f = r("span")),
          (f.textContent = `${e[40].nome}`),
          (u = _()),
          t(
            c,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom simulatore_checkbox-check",
          ),
          (s.__value = e[40]),
          I(s, s.__value),
          (s.disabled = p = !(e[5].settimane.filter(g).length > 0)),
          t(s, "type", "checkbox"),
          t(s, "id", "checkbox" + e[40].id),
          t(s, "name", "checkbox" + e[40].id),
          t(s, "data-name", "Checkbox" + e[40].id),
          j(s, "opacity", "0"),
          j(s, "position", "absolute"),
          j(s, "z-index", "-1"),
          t(f, "class", "simulatore_checkbox-label w-form-label"),
          t(n, "class", "w-checkbox camp_checkbox-field"),
          nt(n, "is-disabled", !(e[5].settimane.filter(v).length > 0)),
          t(o, "class", "camp_checkbox-group"),
          m.p(s),
          (this.first = o);
      },
      m(w, z) {
        W(w, o, z),
          l(o, n),
          l(n, c),
          l(n, a),
          l(n, s),
          (s.checked = ~(e[3] || []).indexOf(s.__value)),
          l(n, d),
          l(n, f),
          l(o, u),
          b || ((h = x(s, "change", e[25])), (b = !0));
      },
      p(w, z) {
        (e = w),
          z[0] & 32 &&
            p !== (p = !(e[5].settimane.filter(g).length > 0)) &&
            (s.disabled = p),
          z[0] & 8 && (s.checked = ~(e[3] || []).indexOf(s.__value)),
          z[0] & 32 &&
            nt(n, "is-disabled", !(e[5].settimane.filter(v).length > 0));
      },
      d(w) {
        w && Q(o), m.r(), (b = !1), h();
      },
    }
  );
}
function yi(i) {
  let e,
    o,
    n,
    c = [],
    a = new Map(),
    s,
    p,
    d = We(i[11]);
  const f = (u) => u[35].id;
  for (let u = 0; u < d.length; u += 1) {
    let m = Si(i, d, u),
      b = f(m);
    a.set(b, (c[u] = xi(b, m)));
  }
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "Seleziona le settimane:"),
        (n = _());
      for (let u = 0; u < c.length; u += 1) c[u].c();
      t(o, "id", "w-node-ecccff3a-ead6-1bfd-b30c-fe8e04248fbd-db296bf2"),
        t(e, "class", "camp_extra-check-week-wrapper");
    },
    m(u, m) {
      W(u, e, m), l(e, o), l(e, n);
      for (let b = 0; b < c.length; b += 1) c[b] && c[b].m(e, null);
      p = !0;
    },
    p(u, m) {
      m[0] & 2052 &&
        ((d = We(u[11])), (c = Vt(c, m, f, 1, u, d, a, e, Rt, xi, null, Si)));
    },
    i(u) {
      p ||
        (u &&
          dt(() => {
            p && (s || (s = _t(e, Dt, {}, !0)), s.run(1));
          }),
        (p = !0));
    },
    o(u) {
      u && (s || (s = _t(e, Dt, {}, !1)), s.run(0)), (p = !1);
    },
    d(u) {
      u && Q(e);
      for (let m = 0; m < c.length; m += 1) c[m].d();
      u && s && s.end();
    },
  };
}
function xi(i, e) {
  let o,
    n,
    c,
    a,
    s,
    p = !1,
    d,
    f,
    u,
    m,
    b,
    h = e[35].descrizione + "",
    g,
    v,
    w,
    z,
    M;
  return (
    (w = Bt(e[23][1])),
    {
      key: i,
      first: null,
      c() {
        (o = r("label")),
          (n = r("div")),
          (c = _()),
          (a = r("input")),
          (m = _()),
          (b = r("span")),
          (g = te(h)),
          (v = _()),
          t(
            n,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom camp_extra-week-check",
          ),
          (a.__value = s = e[35]),
          I(a, a.__value),
          t(a, "type", "checkbox"),
          t(a, "name", (d = "Checkbox" + e[35].id)),
          t(a, "id", (f = "Checkbox" + e[35].id)),
          t(a, "data-name", (u = "Checkbox" + e[35].id)),
          j(a, "opacity", "0"),
          j(a, "position", "absolute"),
          j(a, "z-index", "-1"),
          t(b, "class", "w-form-label"),
          t(o, "class", "w-checkbox camp_extra-week-check-field"),
          w.p(a),
          (this.first = o);
      },
      m(E, S) {
        W(E, o, S),
          l(o, n),
          l(o, c),
          l(o, a),
          (a.checked = ~(e[2] || []).indexOf(a.__value)),
          l(o, m),
          l(o, b),
          l(b, g),
          l(o, v),
          z || ((M = x(a, "change", e[28])), (z = !0));
      },
      p(E, S) {
        (e = E),
          S[0] & 2048 &&
            s !== (s = e[35]) &&
            ((a.__value = s), I(a, a.__value), (p = !0)),
          S[0] & 2048 && d !== (d = "Checkbox" + e[35].id) && t(a, "name", d),
          S[0] & 2048 && f !== (f = "Checkbox" + e[35].id) && t(a, "id", f),
          S[0] & 2048 &&
            u !== (u = "Checkbox" + e[35].id) &&
            t(a, "data-name", u),
          (p || S[0] & 2052) && (a.checked = ~(e[2] || []).indexOf(a.__value)),
          S[0] & 2048 && h !== (h = e[35].descrizione + "") && Ke(g, h);
      },
      d(E) {
        E && Q(o), w.r(), (z = !1), M();
      },
    }
  );
}
function Di(i) {
  let e,
    o,
    n,
    c = [],
    a = new Map(),
    s,
    p,
    d = We(i[10]);
  const f = (u) => u[35].id;
  for (let u = 0; u < d.length; u += 1) {
    let m = Ai(i, d, u),
      b = f(m);
    a.set(b, (c[u] = Ni(b, m)));
  }
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "Seleziona le settimane:"),
        (n = _());
      for (let u = 0; u < c.length; u += 1) c[u].c();
      t(o, "id", "w-node-ecccff3a-ead6-1bfd-b30c-fe8e04248fbd-db296bf2"),
        t(e, "class", "camp_extra-check-week-wrapper");
    },
    m(u, m) {
      W(u, e, m), l(e, o), l(e, n);
      for (let b = 0; b < c.length; b += 1) c[b] && c[b].m(e, null);
      p = !0;
    },
    p(u, m) {
      m[0] & 1026 &&
        ((d = We(u[10])), (c = Vt(c, m, f, 1, u, d, a, e, Rt, Ni, null, Ai)));
    },
    i(u) {
      p ||
        (u &&
          dt(() => {
            p && (s || (s = _t(e, Dt, {}, !0)), s.run(1));
          }),
        (p = !0));
    },
    o(u) {
      u && (s || (s = _t(e, Dt, {}, !1)), s.run(0)), (p = !1);
    },
    d(u) {
      u && Q(e);
      for (let m = 0; m < c.length; m += 1) c[m].d();
      u && s && s.end();
    },
  };
}
function Ni(i, e) {
  let o,
    n,
    c,
    a,
    s,
    p = !1,
    d,
    f,
    u,
    m,
    b,
    h = e[35].descrizione + "",
    g,
    v,
    w,
    z,
    M;
  return (
    (w = Bt(e[23][0])),
    {
      key: i,
      first: null,
      c() {
        (o = r("label")),
          (n = r("div")),
          (c = _()),
          (a = r("input")),
          (m = _()),
          (b = r("span")),
          (g = te(h)),
          (v = _()),
          t(
            n,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom camp_extra-week-check",
          ),
          (a.__value = s = e[35]),
          I(a, a.__value),
          t(a, "type", "checkbox"),
          t(a, "name", (d = "Checkbox" + e[35].id)),
          t(a, "id", (f = "Checkbox" + e[35].id)),
          t(a, "data-name", (u = "Checkbox" + e[35].id)),
          j(a, "opacity", "0"),
          j(a, "position", "absolute"),
          j(a, "z-index", "-1"),
          t(b, "class", "w-form-label"),
          t(o, "class", "w-checkbox camp_extra-week-check-field"),
          w.p(a),
          (this.first = o);
      },
      m(E, S) {
        W(E, o, S),
          l(o, n),
          l(o, c),
          l(o, a),
          (a.checked = ~(e[1] || []).indexOf(a.__value)),
          l(o, m),
          l(o, b),
          l(b, g),
          l(o, v),
          z || ((M = x(a, "change", e[30])), (z = !0));
      },
      p(E, S) {
        (e = E),
          S[0] & 1024 &&
            s !== (s = e[35]) &&
            ((a.__value = s), I(a, a.__value), (p = !0)),
          S[0] & 1024 && d !== (d = "Checkbox" + e[35].id) && t(a, "name", d),
          S[0] & 1024 && f !== (f = "Checkbox" + e[35].id) && t(a, "id", f),
          S[0] & 1024 &&
            u !== (u = "Checkbox" + e[35].id) &&
            t(a, "data-name", u),
          (p || S[0] & 1026) && (a.checked = ~(e[1] || []).indexOf(a.__value)),
          S[0] & 1024 && h !== (h = e[35].descrizione + "") && Ke(g, h);
      },
      d(E) {
        E && Q(o), w.r(), (z = !1), M();
      },
    }
  );
}
function Zo(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M,
    E,
    S,
    L,
    H,
    T,
    A,
    k,
    C,
    D,
    V,
    B,
    F,
    de,
    O,
    pe,
    Pe,
    me,
    Oe,
    ke,
    y = [],
    Y = new Map(),
    $e,
    Te,
    re,
    Ve,
    le,
    He,
    be,
    q,
    Me,
    ue,
    Ze,
    X,
    xe,
    J,
    Ce,
    De,
    ze,
    fe,
    ne,
    Qe,
    Ne,
    Ge,
    Ie,
    P,
    K,
    ee,
    it,
    he,
    ot,
    ve,
    gt,
    Ee,
    qe,
    mt,
    ae,
    lt,
    Je,
    Ye,
    ye,
    _e,
    ge,
    bt,
    Fe,
    we = i[0] != "" && Ci(i),
    Be = We(hi);
  const vt = (N) => N[40].id;
  for (let N = 0; N < Be.length; N += 1) {
    let se = Li(i, Be, N),
      et = vt(se);
    Y.set(et, (y[N] = Ei(et, se)));
  }
  let ce = i[6] && yi(i),
    R = i[7] && Di(i);
  return (
    (_e = new jo({})),
    {
      c() {
        (e = r("div")),
          (o = r("div")),
          (n = r("button")),
          (n.innerHTML =
            '<div class="camp_title-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" fill="currentColor"></path></svg></div>'),
          (c = _()),
          (a = r("div")),
          (a.textContent = "Servizi Extra"),
          (s = _()),
          (p = r("div")),
          (d = r("h2")),
          (f = te(i[8])),
          (u = te(" €")),
          (m = _()),
          (b = r("div")),
          (h = te(i[9])),
          (g = te(" €")),
          (v = _()),
          (w = r("div")),
          (z = r("div")),
          (M = r("div")),
          (E = r("form")),
          (S = r("div")),
          (L = r("div")),
          (L.innerHTML = `Non sai come raggiungere il club?
                            <br/>Vieni con il <span class="text-color-play text-bold">Quanta Bus</span>`),
          (H = _()),
          (T = r("a")),
          (T.textContent = "Scopri il percorso del Quanta Bus"),
          (A = _()),
          (k = r("div")),
          (C = r("div")),
          (D = r("select")),
          (V = r("option")),
          (V.textContent = "Seleziona fermata"),
          (B = r("option")),
          (B.textContent = "Domodossola"),
          (F = r("option")),
          (F.textContent = "Lega Lombarda"),
          (de = r("option")),
          (de.textContent = "Porta Garibaldi"),
          (O = r("option")),
          (O.textContent = "Repubblica"),
          (pe = _()),
          we && we.c(),
          (Pe = _()),
          (me = r("div")),
          (Oe = r("div")),
          (Oe.innerHTML =
            '<div>Vorresti frequentare  il camp in lingua inglese?</div> <div class="camp_extra-disclaimer">Il servizio dipende dal numero di adesioni</div>'),
          (ke = _());
        for (let N = 0; N < y.length; N += 1) y[N].c();
        ($e = _()),
          (Te = r("div")),
          (Te.innerHTML =
            "<div>Thank you! Your submission has been received!</div>"),
          (re = _()),
          (Ve = r("div")),
          (Ve.innerHTML =
            "<div>Oops! Something went wrong while submitting the form.</div>"),
          (le = _()),
          (He = r("div")),
          (be = r("div")),
          (q = r("form")),
          (Me = r("div")),
          (ue = r("div")),
          (ue.textContent =
            "Che ne dici di fare con noi i compiti estivi prima o dopo la giornata sportiva?"),
          (Ze = _()),
          (X = r("div")),
          (xe = r("div")),
          (J = r("div")),
          (Ce = r("label")),
          (De = r("div")),
          (ze = _()),
          (fe = r("input")),
          (ne = _()),
          (Qe = r("span")),
          (Qe.textContent = "Spazio compiti dalle 8.30 alle 9.30 (PRE)"),
          (Ne = _()),
          ce && ce.c(),
          (Ge = _()),
          (Ie = r("div")),
          (P = r("div")),
          (K = r("label")),
          (ee = r("div")),
          (it = _()),
          (he = r("input")),
          (ot = _()),
          (ve = r("span")),
          (ve.textContent = "Spazio compiti dalle 17.00 alle 18.00 (POST)"),
          (gt = _()),
          R && R.c(),
          (Ee = _()),
          (qe = r("div")),
          (qe.innerHTML =
            "<div>Thank you! Your submission has been received!</div>"),
          (mt = _()),
          (ae = r("div")),
          (ae.innerHTML =
            "<div>Oops! Something went wrong while submitting the form.</div>"),
          (lt = _()),
          (Je = r("div")),
          (Ye = r("button")),
          (Ye.innerHTML = "<div>Procedi con l&#39;inserimento dati</div>"),
          (ye = _()),
          pt(_e.$$.fragment),
          t(n, "class", "camp_button-prev"),
          t(n, "type", "button"),
          t(a, "id", "w-node-_652528bf-0e11-05b4-97c4-96a03e83dfdd-db296bf2"),
          t(a, "class", "camp_section-title"),
          t(d, "class", "simulatore_title-abbonamento is-play"),
          t(b, "class", "simulatore_title-abbonamento discount"),
          t(o, "class", "camp_section-title-wrapper"),
          t(T, "href", "#"),
          t(T, "target", "_blank"),
          t(T, "class", "camp_link-bus"),
          (V.__value = ""),
          I(V, V.__value),
          (B.__value = "Domodossola"),
          I(B, B.__value),
          (F.__value = "Lega Lombarda"),
          I(F, F.__value),
          (de.__value = "Porta Garibaldi"),
          I(de, de.__value),
          (O.__value = "Repubblica"),
          I(O, O.__value),
          t(D, "id", "fermata_select"),
          t(D, "name", "fermata_select"),
          t(D, "data-name", "fermata_select"),
          t(D, "class", "camp_extra-formselect w-select"),
          i[0] === void 0 && dt(() => i[20].call(D)),
          t(C, "class", "camp_checkbox-group"),
          t(k, "class", "camp_checkbox-wrapper"),
          t(S, "class", "camp_generic-wrapper"),
          t(me, "class", "camp_generic-wrapper"),
          t(E, "id", "email-form"),
          t(E, "name", "email-form"),
          t(E, "data-name", "Email Form"),
          t(E, "method", "get"),
          t(E, "data-wf-page-id", "65def0045e3bbeeadb296bf2"),
          t(E, "data-wf-element-id", "ecccff3a-ead6-1bfd-b30c-fe8e04248f85"),
          t(E, "aria-label", "Email Form"),
          t(Te, "class", "w-form-done"),
          t(Te, "tabindex", "-1"),
          t(Te, "role", "region"),
          t(Te, "aria-label", "Email Form success"),
          t(Ve, "class", "w-form-fail"),
          t(Ve, "tabindex", "-1"),
          t(Ve, "role", "region"),
          t(Ve, "aria-label", "Email Form failure"),
          t(M, "class", "form-full-width w-form"),
          t(z, "class", "camp_extra-left"),
          t(
            De,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom simulatore_checkbox-check",
          ),
          t(fe, "type", "checkbox"),
          t(fe, "id", "checkboxPRE"),
          t(fe, "name", "checkboxPRE"),
          t(fe, "data-name", "CheckboxPRE"),
          j(fe, "opacity", "0"),
          j(fe, "position", "absolute"),
          j(fe, "z-index", "-1"),
          t(Qe, "class", "simulatore_checkbox-label w-form-label"),
          t(Ce, "class", "w-checkbox camp_checkbox-field"),
          t(J, "class", "camp_checkbox-group"),
          t(xe, "class", "camp_checkbox-wrapper"),
          t(
            ee,
            "class",
            "w-checkbox-input w-checkbox-input--inputType-custom simulatore_checkbox-check",
          ),
          t(he, "type", "checkbox"),
          t(he, "id", "checkboxPOST"),
          t(he, "name", "checkboxPOST"),
          t(he, "data-name", "checkboxPOST"),
          j(he, "opacity", "0"),
          j(he, "position", "absolute"),
          j(he, "z-index", "-1"),
          t(ve, "class", "simulatore_checkbox-label w-form-label"),
          t(K, "class", "w-checkbox camp_checkbox-field"),
          t(P, "class", "camp_checkbox-group"),
          t(Ie, "class", "camp_checkbox-wrapper"),
          t(X, "class", "camp_checkbox-container"),
          t(Me, "class", "camp_generic-wrapper"),
          t(q, "id", "email-form"),
          t(q, "name", "email-form"),
          t(q, "data-name", "Email Form"),
          t(q, "method", "get"),
          t(q, "data-wf-page-id", "65def0045e3bbeeadb296bf2"),
          t(q, "data-wf-element-id", "76230609-3dc2-8dc0-481b-ce169ad024e6"),
          t(q, "aria-label", "Email Form"),
          t(qe, "class", "w-form-done"),
          t(qe, "tabindex", "-1"),
          t(qe, "role", "region"),
          t(qe, "aria-label", "Email Form success"),
          t(ae, "class", "w-form-fail"),
          t(ae, "tabindex", "-1"),
          t(ae, "role", "region"),
          t(ae, "aria-label", "Email Form failure"),
          t(be, "class", "form-full-width w-form"),
          t(Ye, "class", "simulatore_button"),
          t(Ye, "type", "button"),
          t(Je, "class", "simulatore_bottom-button-wrapper right"),
          t(He, "id", "w-node-_652528bf-0e11-05b4-97c4-96a03e83e067-db296bf2"),
          t(He, "class", "camp_extra-right"),
          t(w, "class", "camp_extra-grid"),
          t(e, "class", "camp_wrapper");
      },
      m(N, se) {
        W(N, e, se),
          l(e, o),
          l(o, n),
          l(o, c),
          l(o, a),
          l(o, s),
          l(o, p),
          l(p, d),
          l(d, f),
          l(d, u),
          l(p, m),
          l(p, b),
          l(b, h),
          l(b, g),
          l(e, v),
          l(e, w),
          l(w, z),
          l(z, M),
          l(M, E),
          l(E, S),
          l(S, L),
          l(S, H),
          l(S, T),
          l(S, A),
          l(S, k),
          l(k, C),
          l(C, D),
          l(D, V),
          l(D, B),
          l(D, F),
          l(D, de),
          l(D, O),
          Zt(D, i[0], !0),
          l(k, pe),
          we && we.m(k, null),
          l(E, Pe),
          l(E, me),
          l(me, Oe),
          l(me, ke);
        for (let et = 0; et < y.length; et += 1) y[et] && y[et].m(me, null);
        l(M, $e),
          l(M, Te),
          l(M, re),
          l(M, Ve),
          l(w, le),
          l(w, He),
          l(He, be),
          l(be, q),
          l(q, Me),
          l(Me, ue),
          l(Me, Ze),
          l(Me, X),
          l(X, xe),
          l(xe, J),
          l(J, Ce),
          l(Ce, De),
          l(Ce, ze),
          l(Ce, fe),
          (fe.checked = i[6]),
          l(Ce, ne),
          l(Ce, Qe),
          l(xe, Ne),
          ce && ce.m(xe, null),
          l(X, Ge),
          l(X, Ie),
          l(Ie, P),
          l(P, K),
          l(K, ee),
          l(K, it),
          l(K, he),
          (he.checked = i[7]),
          l(K, ot),
          l(K, ve),
          l(Ie, gt),
          R && R.m(Ie, null),
          l(be, Ee),
          l(be, qe),
          l(be, mt),
          l(be, ae),
          l(He, lt),
          l(He, Je),
          l(Je, Ye),
          W(N, ye, se),
          at(_e, N, se),
          (ge = !0),
          bt ||
            ((Fe = [
              x(T, "click", i[19]),
              x(D, "change", i[20]),
              x(D, "change", i[21]),
              x(fe, "change", i[27]),
              x(fe, "click", i[15]),
              x(he, "change", i[29]),
              x(he, "click", i[16]),
              x(Ye, "click", i[17]),
            ]),
            (bt = !0));
      },
      p(N, se) {
        (!ge || se[0] & 256) && Ke(f, N[8]),
          (!ge || se[0] & 512) && Ke(h, N[9]),
          se[0] & 1 && Zt(D, N[0]),
          N[0] != ""
            ? we
              ? (we.p(N, se), se[0] & 1 && oe(we, 1))
              : ((we = Ci(N)), we.c(), oe(we, 1), we.m(k, null))
            : we &&
              (Et(),
              Se(we, 1, 1, () => {
                we = null;
              }),
              yt()),
          se[0] & 40 &&
            ((Be = We(hi)),
            (y = Vt(y, se, vt, 1, N, Be, Y, me, Rt, Ei, null, Li))),
          se[0] & 64 && (fe.checked = N[6]),
          N[6]
            ? ce
              ? (ce.p(N, se), se[0] & 64 && oe(ce, 1))
              : ((ce = yi(N)), ce.c(), oe(ce, 1), ce.m(xe, null))
            : ce &&
              (Et(),
              Se(ce, 1, 1, () => {
                ce = null;
              }),
              yt()),
          se[0] & 128 && (he.checked = N[7]),
          N[7]
            ? R
              ? (R.p(N, se), se[0] & 128 && oe(R, 1))
              : ((R = Di(N)), R.c(), oe(R, 1), R.m(Ie, null))
            : R &&
              (Et(),
              Se(R, 1, 1, () => {
                R = null;
              }),
              yt());
      },
      i(N) {
        ge || (oe(we), oe(ce), oe(R), oe(_e.$$.fragment, N), (ge = !0));
      },
      o(N) {
        Se(we), Se(ce), Se(R), Se(_e.$$.fragment, N), (ge = !1);
      },
      d(N) {
        N && (Q(e), Q(ye)), we && we.d();
        for (let se = 0; se < y.length; se += 1) y[se].d();
        ce && ce.d(), R && R.d(), rt(_e, N), (bt = !1), Re(Fe);
      },
    }
  );
}
function Xo(i, e, o) {
  let n, c, a, s, p, d, f, u, m, b, h, g, v, w;
  G(i, Ue, (y) => o(31, (h = y))),
    G(i, Le, (y) => o(32, (g = y))),
    G(i, Ae, (y) => o(5, (v = y))),
    G(i, Jt, (y) => o(33, (w = y)));
  let z = v.settimane.map((y) => y.week_code),
    M = "";
  function E() {
    o(4, (n = []));
  }
  function S() {
    $(Jt, (w = !0), w);
  }
  let L = !1;
  function H() {
    o(2, (s = []));
  }
  let T = !1;
  function A() {
    o(1, (d = []));
  }
  function k() {
    v.extra_bus.push(...n),
      v.extra_inglese.push(...a),
      v.extra_compitiPRE.push(...s),
      v.extra_compitiPOST.push(...d),
      $(Ae, (v.prezzo_default = m), v),
      $(Ae, (v.prezzo_calcolato = b), v),
      $(Le, (g = "info_figlio"), g),
      $(Ue, (h = "info_figlio"), h);
  }
  const C = [[], [], [], []],
    D = () => S();
  function V() {
    (M = Xi(this)), o(0, M);
  }
  const B = () => E();
  function F() {
    (n = It(C[3], this.__value, this.checked)), o(4, n);
  }
  const de = (y, Y) =>
    Y.week_code === y.week_code && (Y.eta === "mini" || Y.eta === "little");
  function O() {
    (a = It(C[2], this.__value, this.checked)), o(3, a);
  }
  const pe = (y, Y) =>
    Y.week_code === y.week_code && (Y.eta === "mini" || Y.eta === "little");
  function Pe() {
    (L = this.checked), o(6, L);
  }
  function me() {
    (s = It(C[1], this.__value, this.checked)), o(2, s);
  }
  function Oe() {
    (T = this.checked), o(7, T);
  }
  function ke() {
    (d = It(C[0], this.__value, this.checked)), o(1, d);
  }
  return (
    (i.$$.update = () => {
      i.$$.dirty[0] & 1 &&
        o(12, (c = xo.filter((y) => y.nome === M && z.includes(y.week_code)))),
        i.$$.dirty[0] & 30 &&
          o(
            18,
            (u =
              n.reduce((y, { prezzo: Y }) => y + Y, 0) +
              d.reduce((y, { prezzo: Y }) => y + Y, 0) +
              s.reduce((y, { prezzo: Y }) => y + Y, 0) +
              a.reduce((y, { prezzo: Y }) => y + Y, 0)),
          ),
        i.$$.dirty[0] & 262176 &&
          o(9, (m = v.settimane.reduce((y, { prezzo: Y }) => y + Y, 0) + u)),
        i.$$.dirty[0] & 262144 && o(8, (b = Ji() + u));
    }),
    o(4, (n = [])),
    o(3, (a = [])),
    o(2, (s = [])),
    o(11, (p = Do.filter((y) => z.includes(y.week_code)))),
    o(1, (d = [])),
    o(10, (f = No.filter((y) => z.includes(y.week_code)))),
    [
      M,
      d,
      s,
      a,
      n,
      v,
      L,
      T,
      b,
      m,
      f,
      p,
      c,
      E,
      S,
      H,
      A,
      k,
      u,
      D,
      V,
      B,
      F,
      C,
      de,
      O,
      pe,
      Pe,
      me,
      Oe,
      ke,
    ]
  );
}
class Uo extends st {
  constructor(e) {
    super(), ct(this, e, Xo, Zo, tt, {}, null, [-1, -1]);
  }
}
function Qo() {
  const i = new Date(),
    e = i.getFullYear().toString(),
    o = (i.getMonth() + 1).toString().padStart(2, "0"),
    n = i.getDate().toString().padStart(2, "0"),
    c = i.getHours().toString().padStart(2, "0"),
    a = i.getMinutes().toString().padStart(2, "0");
  return e + o + n + c + a;
}
function Jo(i) {
  return new Promise((e, o) => {
    const n = new FileReader();
    n.readAsDataURL(i),
      (n.onload = () => {
        const c = n.result;
        e(c);
      }),
      (n.onerror = (c) => o(c));
  });
}
function Yo(i, e, o) {
  const n = atob(i.split(",")[1]),
    c = new Uint8Array(n.length);
  for (let a = 0; a < n.length; a++) c[a] = n.charCodeAt(a);
  return new File([c], e, { type: o });
}
function Ii(i) {
  let e, o, n, c, a, s, p, d, f, u, m, b, h, g;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("div")),
        (c = _()),
        (a = r("div")),
        (s = r("div")),
        (s.innerHTML =
          '<img src="https://assets-global.website-files.com/6196bae1920e8a4177775511/655399a0ccf5d1bd49ccdf37_cancel.svg" loading="lazy" alt=""/>'),
        (p = _()),
        (d = r("div")),
        (d.textContent = "Le taglie dei nostri Kit Joma"),
        (f = _()),
        (u = r("div")),
        t(n, "class", "simulatore_popup-background"),
        t(s, "class", "simulatore_popup-close-icon"),
        t(d, "class", "simulatore_popup-text"),
        t(u, "class", "camp_popup-image is-taglie"),
        t(a, "class", "camp_popup-content-wrapper is-taglie"),
        t(o, "class", "simulatore_popup-container"),
        t(e, "class", "svelte-popup"),
        j(e, "position", "absolute"),
        j(e, "top", "0%"),
        j(e, "bottom", "0%"),
        j(e, "left", "0%"),
        j(e, "right", "0%");
    },
    m(v, w) {
      W(v, e, w),
        l(e, o),
        l(o, n),
        l(o, c),
        l(o, a),
        l(a, s),
        l(a, p),
        l(a, d),
        l(a, f),
        l(a, u),
        (b = !0),
        h ||
          ((g = [
            x(n, "keyup", i[1]),
            x(n, "click", i[2]),
            x(s, "click", Zi(i[2])),
          ]),
          (h = !0));
    },
    p: Z,
    i(v) {
      b ||
        (v &&
          dt(() => {
            b && (m || (m = _t(e, Kt, {}, !0)), m.run(1));
          }),
        (b = !0));
    },
    o(v) {
      v && (m || (m = _t(e, Kt, {}, !1)), m.run(0)), (b = !1);
    },
    d(v) {
      v && Q(e), v && m && m.end(), (h = !1), Re(g);
    },
  };
}
function Ko(i) {
  let e,
    o = i[0] && Ii(i);
  return {
    c() {
      o && o.c(), (e = ri());
    },
    m(n, c) {
      o && o.m(n, c), W(n, e, c);
    },
    p(n, [c]) {
      n[0]
        ? o
          ? (o.p(n, c), c & 1 && oe(o, 1))
          : ((o = Ii(n)), o.c(), oe(o, 1), o.m(e.parentNode, e))
        : o &&
          (Et(),
          Se(o, 1, 1, () => {
            o = null;
          }),
          yt());
    },
    i(n) {
      oe(o);
    },
    o(n) {
      Se(o);
    },
    d(n) {
      n && Q(e), o && o.d(n);
    },
  };
}
function Wo(i, e, o) {
  let n;
  G(i, Yt, (s) => o(0, (n = s)));
  function c(s) {
    s.key === "Escape" && a();
  }
  function a() {
    $(Yt, (n = !1), n);
  }
  return [n, c, a];
}
class el extends st {
  constructor(e) {
    super(), ct(this, e, Wo, Ko, tt, {});
  }
}
function tl(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M,
    E,
    S,
    L,
    H,
    T,
    A,
    k,
    C,
    D,
    V,
    B,
    F,
    de,
    O,
    pe,
    Pe,
    me,
    Oe,
    ke,
    y,
    Y,
    $e,
    Te,
    re,
    Ve,
    le,
    He,
    be,
    q,
    Me,
    ue,
    Ze,
    X,
    xe,
    J,
    Ce,
    De,
    ze,
    fe,
    ne,
    Qe,
    Ne,
    Ge,
    Ie,
    P,
    K,
    ee,
    it,
    he,
    ot,
    ve,
    gt,
    Ee,
    qe,
    mt,
    ae,
    lt,
    Je,
    Ye,
    ye,
    _e,
    ge,
    bt,
    Fe,
    we,
    Be,
    vt,
    ce,
    R,
    N,
    se,
    et,
    si,
    Gt,
    ft,
    Wt,
    di,
    wt,
    pi,
    kt,
    ei,
    zt,
    At,
    ti,
    ui;
  return (
    (zt = new el({})),
    {
      c() {
        (e = r("div")),
          (o = r("div")),
          (o.innerHTML =
            '<button class="camp_button-prev" type="button"><div class="camp_title-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z" fill="currentColor"></path></svg></div></button> <div id="w-node-cd581b1f-5bb0-2eb9-80d3-3ed502ab0022-db296bf2" class="camp_section-title">Informazioni iscritto</div>'),
          (n = _()),
          (c = r("div")),
          (a = r("form")),
          (s = r("div")),
          (p = r("div")),
          (d = r("label")),
          (d.textContent = "Cognome *"),
          (f = _()),
          (u = r("input")),
          (m = _()),
          (b = r("div")),
          (h = r("label")),
          (h.textContent = "Nome *"),
          (g = _()),
          (v = r("input")),
          (w = _()),
          (z = r("div")),
          (M = r("label")),
          (M.textContent = "Data di nascita *"),
          (E = _()),
          (S = r("input")),
          (L = _()),
          (H = r("div")),
          (T = r("div")),
          (A = r("div")),
          (k = r("label")),
          (k.textContent = "Codice Fiscale *"),
          (C = _()),
          (D = r("input")),
          (V = _()),
          (B = r("div")),
          (F = r("label")),
          (F.textContent = "Luogo di nascita *"),
          (de = _()),
          (O = r("input")),
          (pe = _()),
          (Pe = r("div")),
          (me = r("div")),
          (Oe = r("label")),
          (Oe.textContent = "Indirizzo completo di residenza *"),
          (ke = _()),
          (y = r("input")),
          (Y = _()),
          ($e = r("div")),
          (Te = r("div")),
          (re = r("label")),
          (re.textContent =
            "Allergie/Intolleranze (solo se con regolare certificato medico) *"),
          (Ve = _()),
          (le = r("input")),
          (He = _()),
          (be = r("div")),
          (q = r("div")),
          (Me = r("div")),
          (ue = r("label")),
          (ue.textContent = "Taglia Kit *"),
          (Ze = _()),
          (X = r("select")),
          (xe = r("option")),
          (xe.textContent = "Seleziona Taglia Kit"),
          (J = r("option")),
          (J.textContent = "5XS - 6XS"),
          (Ce = r("option")),
          (Ce.textContent = "3XS - 4XS"),
          (De = r("option")),
          (De.textContent = "2XS"),
          (ze = r("option")),
          (ze.textContent = "XS"),
          (fe = r("option")),
          (fe.textContent = "S"),
          (ne = r("option")),
          (ne.textContent = "M"),
          (Qe = _()),
          (Ne = r("a")),
          (Ne.textContent = "Scopri le taglie"),
          (Ge = _()),
          (Ie = r("div")),
          (P = r("label")),
          (P.textContent = "Classifica FIT"),
          (K = _()),
          (ee = r("input")),
          (it = _()),
          (he = r("div")),
          (ot = r("div")),
          (ve = r("label")),
          (ve.textContent = "Note aggiuntive"),
          (gt = _()),
          (Ee = r("textarea")),
          (qe = _()),
          (mt = r("div")),
          (ae = r("div")),
          (lt = r("div")),
          (Je = r("label")),
          (Je.textContent = "Certificato medico valido"),
          (Ye = _()),
          (ye = r("div")),
          (_e = r("div")),
          (ge = r("input")),
          (bt = _()),
          (Fe = r("label")),
          (Fe.innerHTML =
            '<div class="w-icon-file-upload-icon" aria-hidden="true"></div> <div class="w-inline-block">Carica certificato</div>'),
          (we = _()),
          (Be = r("div")),
          (Be.textContent = "Dimensione massima 3MB"),
          (vt = _()),
          (ce = r("div")),
          (ce.innerHTML =
            '<div class="w-file-upload-uploading-btn"><svg class="w-icon-file-upload-uploading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" aria-hidden="true"><path fill="currentColor" opacity=".2" d="M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"></path><path fill="currentColor" opacity=".75" d="M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z"><animateTransform attributeName="transform" attributeType="XML" dur="0.6s" from="0 15 15" repeatCount="indefinite" to="360 15 15" type="rotate"></animateTransform></path></svg> <div class="w-inline-block">Uploading...</div></div>'),
          (R = _()),
          (N = r("div")),
          (N.innerHTML =
            '<div class="w-file-upload-file"><div class="w-file-upload-file-name">fileuploaded.jpg</div> <div aria-label="Remove file" role="button" tabindex="0" class="w-file-remove-link"><div class="w-icon-file-upload-remove" aria-hidden="true"></div></div></div>'),
          (se = _()),
          (et = r("div")),
          (et.innerHTML =
            '<div class="w-file-upload-error-msg" data-w-size-error="Upload failed. Max size for files is 10 MB." data-w-type-error="Upload failed. Invalid file type." data-w-generic-error="Upload failed. Something went wrong. Please retry.">Upload failed. Max size for files is 10 MB.</div>'),
          (si = _()),
          (Gt = r("div")),
          (ft = r("button")),
          (Wt = r("div")),
          (Wt.textContent = "Procedi con la preiscrizione"),
          (di = _()),
          (wt = r("div")),
          (wt.innerHTML =
            "<div>Thank you! Your submission has been received!</div>"),
          (pi = _()),
          (kt = r("div")),
          (kt.innerHTML =
            "<div>Oops! Something went wrong while submitting the form.</div>"),
          (ei = _()),
          pt(zt.$$.fragment),
          t(o, "class", "camp_section-title-wrapper"),
          t(d, "for", "cognome_iscritto-2"),
          t(d, "class", "form_field-label"),
          (u.required = !0),
          t(u, "class", "form_input w-input"),
          t(u, "maxlength", "256"),
          t(u, "name", "cognome_iscritto"),
          t(u, "data-name", "cognome_iscritto"),
          t(u, "placeholder", ""),
          t(u, "type", "text"),
          t(u, "id", "cognome_iscritto-2"),
          t(p, "class", "camp_info-iscritto-field-wrapper"),
          t(h, "for", "nome_iscritto-2"),
          t(h, "class", "form_field-label"),
          (v.required = !0),
          t(v, "class", "form_input w-input"),
          t(v, "maxlength", "256"),
          t(v, "name", "nome_iscritto"),
          t(v, "data-name", "nome_iscritto"),
          t(v, "placeholder", ""),
          t(v, "type", "text"),
          t(v, "id", "nome_iscritto-2"),
          t(b, "class", "camp_info-iscritto-field-wrapper"),
          t(M, "for", "data_iscritto-2"),
          t(M, "class", "form_field-label"),
          (S.required = !0),
          t(S, "class", "form_input"),
          t(S, "type", "date"),
          t(S, "name", "data-iscritto"),
          t(S, "id", "data-iscritto"),
          t(z, "class", "camp_info-iscritto-field-wrapper"),
          t(s, "class", "camp_info-iscritto-field-group"),
          t(k, "for", "codfis_iscritto-2"),
          t(k, "class", "form_field-label"),
          (D.required = !0),
          t(D, "class", "form_input w-input"),
          t(D, "maxlength", "256"),
          t(D, "name", "codfis_iscritto"),
          t(D, "data-name", "codfis_iscritto"),
          t(D, "placeholder", ""),
          t(D, "type", "text"),
          t(D, "id", "codfis_iscritto-2"),
          t(A, "class", "camp_info-iscritto-field-wrapper"),
          t(F, "for", "luogo_iscritto-2"),
          t(F, "class", "form_field-label"),
          (O.required = !0),
          t(O, "class", "form_input w-input"),
          t(O, "maxlength", "256"),
          t(O, "name", "luogo_iscritto"),
          t(O, "data-name", "luogo_iscritto"),
          t(O, "placeholder", ""),
          t(O, "type", "text"),
          t(O, "id", "luogo_iscritto-2"),
          t(B, "class", "camp_info-iscritto-field-wrapper"),
          t(T, "class", "camp_info-iscritto-field-group"),
          t(H, "class", "max-width-medium"),
          t(Oe, "for", "indirizzo_iscritto-2"),
          t(Oe, "class", "form_field-label"),
          (y.required = !0),
          t(y, "class", "form_input w-input"),
          t(y, "name", "indirizzo_iscritto"),
          t(y, "data-name", "indirizzo_iscritto"),
          t(y, "placeholder", ""),
          t(y, "type", "text"),
          t(y, "id", "indirizzo_iscritto-2"),
          t(me, "class", "camp_info-iscritto-field-wrapper"),
          t(Pe, "class", "max-width-large"),
          t(re, "for", "allergie-2"),
          t(re, "class", "form_field-label"),
          (le.required = !0),
          t(le, "class", "form_input w-input"),
          t(le, "maxlength", "256"),
          t(le, "name", "allergie"),
          t(le, "data-name", "allergie"),
          t(le, "placeholder", ""),
          t(le, "type", "text"),
          t(le, "id", "allergie-2"),
          t(Te, "class", "camp_info-iscritto-field-wrapper"),
          t($e, "class", "max-width-large"),
          t(ue, "for", "kit-2"),
          t(ue, "class", "form_field-label"),
          (xe.__value = ""),
          I(xe, xe.__value),
          (J.__value = "5XS - 6XS"),
          I(J, J.__value),
          (Ce.__value = "3XS - 4XS"),
          I(Ce, Ce.__value),
          (De.__value = "2XS"),
          I(De, De.__value),
          (ze.__value = "XS"),
          I(ze, ze.__value),
          (fe.__value = "S"),
          I(fe, fe.__value),
          (ne.__value = "M"),
          I(ne, ne.__value),
          t(X, "id", "kit-2"),
          t(X, "name", "kit"),
          t(X, "data-name", "kit"),
          t(X, "class", "camp_info-formselect w-select"),
          i[1].taglia_kit === void 0 && dt(() => i[14].call(X)),
          t(Ne, "href", "#"),
          t(Ne, "target", "_blank"),
          t(Ne, "class", "camp_link-taglie"),
          t(Me, "class", "camp_info-iscritto-field-wrapper"),
          t(P, "for", "fit-2"),
          t(P, "class", "form_field-label"),
          t(ee, "class", "form_input w-input"),
          t(ee, "maxlength", "256"),
          t(ee, "name", "fit"),
          t(ee, "data-name", "fit"),
          t(ee, "placeholder", ""),
          t(ee, "type", "text"),
          t(ee, "id", "fit-2"),
          t(Ie, "class", "camp_info-iscritto-field-wrapper"),
          t(q, "class", "camp_info-iscritto-field-group"),
          t(be, "class", "max-width-medium"),
          t(ve, "for", "note-2"),
          t(ve, "class", "form_field-label"),
          t(Ee, "id", "note-2"),
          t(Ee, "name", "note"),
          t(Ee, "maxlength", "5000"),
          t(Ee, "data-name", "note"),
          t(Ee, "placeholder", ""),
          t(Ee, "class", "form_input w-input"),
          t(ot, "class", "camp_info-iscritto-field-wrapper"),
          t(he, "class", "max-width-large"),
          t(Je, "for", "Form-7-First-Name-2"),
          t(Je, "class", "form_field-label"),
          t(ge, "class", "w-file-upload-input"),
          t(ge, "accept", ""),
          t(ge, "name", "file"),
          t(ge, "data-name", "File"),
          t(ge, "aria-hidden", "true"),
          t(ge, "type", "file"),
          t(ge, "id", "file"),
          t(ge, "tabindex", "-1"),
          j(ge, "height", "42px"),
          j(ge, "width", "1px"),
          t(Fe, "for", "file"),
          t(Fe, "role", "button"),
          t(Fe, "tabindex", "0"),
          t(Fe, "class", "w-file-upload-label"),
          t(Be, "class", "w-file-upload-info"),
          t(_e, "class", "w-file-upload-default"),
          t(ce, "tabindex", "-1"),
          t(ce, "class", "w-file-upload-uploading w-hidden"),
          t(N, "tabindex", "-1"),
          t(N, "class", "w-file-upload-success w-hidden"),
          t(et, "tabindex", "-1"),
          t(et, "class", "w-file-upload-error w-hidden"),
          t(ye, "id", "w-node-e72ecc3b-5380-98f6-44e1-50e06e01ad00-db296bf2"),
          t(ye, "class", "w-file-upload"),
          t(lt, "class", "camp_info-iscritto-field-wrapper"),
          (ft.disabled = i[0]),
          t(ft, "class", "simulatore_button"),
          t(ft, "type", "button"),
          nt(ft, "is-disabled", i[0]),
          t(Gt, "class", "camp_info-iscritto-field-wrapper"),
          t(ae, "class", "camp_info-iscritto-field-group"),
          t(a, "id", "wf-form-form-iscritto"),
          t(a, "name", "wf-form-form-iscritto"),
          t(a, "data-name", "form-iscritto"),
          t(a, "method", "get"),
          t(a, "class", "camp_info-iscritto-form"),
          t(a, "data-wf-page-id", "65def0045e3bbeeadb296bf2"),
          t(a, "data-wf-element-id", "400bd955-92c5-024b-de9f-b1d8d8f5362b"),
          t(a, "aria-label", "form-iscritto"),
          t(wt, "class", "success-message-2 w-form-done"),
          t(wt, "tabindex", "-1"),
          t(wt, "role", "region"),
          t(wt, "aria-label", "form-iscritto success"),
          t(kt, "class", "error-message w-form-fail"),
          t(kt, "tabindex", "-1"),
          t(kt, "role", "region"),
          t(kt, "aria-label", "form-iscritto failure"),
          t(c, "class", "camp_info-iscritto-form-wrapper w-form"),
          t(e, "class", "camp_wrapper");
      },
      m(ie, je) {
        W(ie, e, je),
          l(e, o),
          l(e, n),
          l(e, c),
          l(c, a),
          l(a, s),
          l(s, p),
          l(p, d),
          l(p, f),
          l(p, u),
          I(u, i[1].cognome),
          l(s, m),
          l(s, b),
          l(b, h),
          l(b, g),
          l(b, v),
          I(v, i[1].nome),
          l(s, w),
          l(s, z),
          l(z, M),
          l(z, E),
          l(z, S),
          I(S, i[1].data_nascita),
          l(a, L),
          l(a, H),
          l(H, T),
          l(T, A),
          l(A, k),
          l(A, C),
          l(A, D),
          I(D, i[1].cod_fiscale),
          l(T, V),
          l(T, B),
          l(B, F),
          l(B, de),
          l(B, O),
          I(O, i[1].luogo_nascita),
          l(a, pe),
          l(a, Pe),
          l(Pe, me),
          l(me, Oe),
          l(me, ke),
          l(me, y),
          I(y, i[1].residenza),
          l(a, Y),
          l(a, $e),
          l($e, Te),
          l(Te, re),
          l(Te, Ve),
          l(Te, le),
          I(le, i[1].allergie),
          l(a, He),
          l(a, be),
          l(be, q),
          l(q, Me),
          l(Me, ue),
          l(Me, Ze),
          l(Me, X),
          l(X, xe),
          l(X, J),
          l(X, Ce),
          l(X, De),
          l(X, ze),
          l(X, fe),
          l(X, ne),
          Zt(X, i[1].taglia_kit, !0),
          l(Me, Qe),
          l(Me, Ne),
          l(q, Ge),
          l(q, Ie),
          l(Ie, P),
          l(Ie, K),
          l(Ie, ee),
          I(ee, i[1].classifica_fit),
          l(a, it),
          l(a, he),
          l(he, ot),
          l(ot, ve),
          l(ot, gt),
          l(ot, Ee),
          I(Ee, i[1].note),
          l(a, qe),
          l(a, mt),
          l(mt, ae),
          l(ae, lt),
          l(lt, Je),
          l(lt, Ye),
          l(lt, ye),
          l(ye, _e),
          l(_e, ge),
          l(_e, bt),
          l(_e, Fe),
          l(_e, we),
          l(_e, Be),
          l(ye, vt),
          l(ye, ce),
          l(ye, R),
          l(ye, N),
          l(ye, se),
          l(ye, et),
          l(ae, si),
          l(ae, Gt),
          l(Gt, ft),
          l(ft, Wt),
          l(c, di),
          l(c, wt),
          l(c, pi),
          l(c, kt),
          W(ie, ei, je),
          at(zt, ie, je),
          (At = !0),
          ti ||
            ((ui = [
              x(u, "input", i[7]),
              x(v, "input", i[8]),
              x(S, "input", i[9]),
              x(D, "input", i[10]),
              x(O, "input", i[11]),
              x(y, "input", i[12]),
              x(le, "input", i[13]),
              x(X, "change", i[14]),
              x(Ne, "click", i[15]),
              x(ee, "input", i[16]),
              x(Ee, "input", i[17]),
              x(ge, "change", i[4]),
              x(ft, "click", i[18]),
              x(a, "change", i[6]),
            ]),
            (ti = !0));
      },
      p(ie, [je]) {
        je & 2 && u.value !== ie[1].cognome && I(u, ie[1].cognome),
          je & 2 && v.value !== ie[1].nome && I(v, ie[1].nome),
          je & 2 && I(S, ie[1].data_nascita),
          je & 2 && D.value !== ie[1].cod_fiscale && I(D, ie[1].cod_fiscale),
          je & 2 &&
            O.value !== ie[1].luogo_nascita &&
            I(O, ie[1].luogo_nascita),
          je & 2 && y.value !== ie[1].residenza && I(y, ie[1].residenza),
          je & 2 && le.value !== ie[1].allergie && I(le, ie[1].allergie),
          je & 2 && Zt(X, ie[1].taglia_kit),
          je & 2 &&
            ee.value !== ie[1].classifica_fit &&
            I(ee, ie[1].classifica_fit),
          je & 2 && I(Ee, ie[1].note),
          (!At || je & 1) && (ft.disabled = ie[0]),
          (!At || je & 1) && nt(ft, "is-disabled", ie[0]);
      },
      i(ie) {
        At || (oe(zt.$$.fragment, ie), (At = !0));
      },
      o(ie) {
        Se(zt.$$.fragment, ie), (At = !1);
      },
      d(ie) {
        ie && (Q(e), Q(ei)), rt(zt, ie), (ti = !1), Re(ui);
      },
    }
  );
}
function il(i, e, o) {
  let n, c, a, s;
  G(i, Ae, (T) => o(1, (n = T))),
    G(i, Yt, (T) => o(19, (c = T))),
    G(i, Le, (T) => o(2, (a = T))),
    G(i, Ue, (T) => o(3, (s = T)));
  async function p(T) {
    const A = T.target;
    if (A.files && A.files.length > 0) {
      const k = A.files[0];
      $(Ae, (n.file_type = k.type), n),
        $(Ae, (n.filename = k.name), n),
        $(Ae, (n.doc = await Jo(k)), n);
    }
    u();
  }
  function d() {
    $(Yt, (c = !0), c);
  }
  let f = !0;
  function u() {
    let A =
      n.settimane.filter((k) => k.sport === "intensivo tennis").length > 0
        ? n.classifica_fit === ""
        : !1;
    o(
      0,
      (f =
        n.cognome === "" ||
        n.nome === "" ||
        n.data_nascita === "" ||
        n.cod_fiscale === "" ||
        n.luogo_nascita === "" ||
        n.residenza === "" ||
        n.allergie === "" ||
        n.taglia_kit === "" ||
        A),
    ),
      console.log("required: " + f);
  }
  function m() {
    (n.cognome = this.value), Ae.set(n);
  }
  function b() {
    (n.nome = this.value), Ae.set(n);
  }
  function h() {
    (n.data_nascita = this.value), Ae.set(n);
  }
  function g() {
    (n.cod_fiscale = this.value), Ae.set(n);
  }
  function v() {
    (n.luogo_nascita = this.value), Ae.set(n);
  }
  function w() {
    (n.residenza = this.value), Ae.set(n);
  }
  function z() {
    (n.allergie = this.value), Ae.set(n);
  }
  function M() {
    (n.taglia_kit = Xi(this)), Ae.set(n);
  }
  const E = () => d();
  function S() {
    (n.classifica_fit = this.value), Ae.set(n);
  }
  function L() {
    (n.note = this.value), Ae.set(n);
  }
  return [
    f,
    n,
    a,
    s,
    p,
    d,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M,
    E,
    S,
    L,
    () => {
      $(Le, (a = "altro"), a), $(Ue, (s = "info_figlio"), s);
    },
  ];
}
class ol extends st {
  constructor(e) {
    super(), ct(this, e, il, tl, tt, {});
  }
}
function Hi(i, e, o) {
  const n = i.slice();
  return (n[12] = e[o]), n;
}
function Pi(i, e, o) {
  const n = i.slice();
  return (n[15] = e[o]), n;
}
function $i(i) {
  let e;
  return {
    c() {
      (e = r("div")),
        (e.textContent = `${i[15].nome} - ${i[15].tipo === "multisport" ? "Multisport" : i[15].sport}`);
    },
    m(o, n) {
      W(o, e, n);
    },
    p: Z,
    d(o) {
      o && Q(e);
    },
  };
}
function ll(i) {
  let e, o, n, c, a, s;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "●"),
        (n = _()),
        (c = r("div")),
        (c.textContent = "Quanta Bus"),
        (a = _()),
        (s = r("div")),
        (s.textContent = `${i[12].extra_bus.reduce(sl, 0)} €`),
        t(o, "id", "w-node-_1ceafbd5-51d6-393c-92da-e1367c6f95f1-db296bf2"),
        t(c, "id", "w-node-_7cfcdf43-bc27-dd7d-0c79-148fbba813d4-db296bf2"),
        t(s, "id", "w-node-_3088939a-8e90-fb51-7a5b-d3c7999ec042-db296bf2"),
        t(e, "class", "camp_altro-iscritto-extra-grid");
    },
    m(p, d) {
      W(p, e, d), l(e, o), l(e, n), l(e, c), l(e, a), l(e, s);
    },
    p: Z,
    d(p) {
      p && Q(e);
    },
  };
}
function nl(i) {
  let e, o, n, c, a, s;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "●"),
        (n = _()),
        (c = r("div")),
        (c.textContent = "Summer Camp in Inglese"),
        (a = _()),
        (s = r("div")),
        (s.textContent = `${i[12].extra_inglese.reduce(dl, 0)} €`),
        t(o, "id", "w-node-_1ceafbd5-51d6-393c-92da-e1367c6f95f1-db296bf2"),
        t(c, "id", "w-node-_7cfcdf43-bc27-dd7d-0c79-148fbba813d4-db296bf2"),
        t(s, "id", "w-node-_3088939a-8e90-fb51-7a5b-d3c7999ec042-db296bf2"),
        t(e, "class", "camp_altro-iscritto-extra-grid");
    },
    m(p, d) {
      W(p, e, d), l(e, o), l(e, n), l(e, c), l(e, a), l(e, s);
    },
    p: Z,
    d(p) {
      p && Q(e);
    },
  };
}
function al(i) {
  let e, o, n, c, a, s;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "●"),
        (n = _()),
        (c = r("div")),
        (c.textContent = "Spazio compiti dalle 8.30 alle 9.30 (PRE)"),
        (a = _()),
        (s = r("div")),
        (s.textContent = `${i[12].extra_compitiPRE.reduce(pl, 0)} €`),
        t(o, "id", "w-node-_1ceafbd5-51d6-393c-92da-e1367c6f95f1-db296bf2"),
        t(c, "id", "w-node-_7cfcdf43-bc27-dd7d-0c79-148fbba813d4-db296bf2"),
        t(s, "id", "w-node-_3088939a-8e90-fb51-7a5b-d3c7999ec042-db296bf2"),
        t(e, "class", "camp_altro-iscritto-extra-grid");
    },
    m(p, d) {
      W(p, e, d), l(e, o), l(e, n), l(e, c), l(e, a), l(e, s);
    },
    p: Z,
    d(p) {
      p && Q(e);
    },
  };
}
function rl(i) {
  let e, o, n, c, a, s;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.textContent = "●"),
        (n = _()),
        (c = r("div")),
        (c.textContent = "Spazio compiti dalle 8.30 alle 9.30 (POST)"),
        (a = _()),
        (s = r("div")),
        (s.textContent = `${i[12].extra_compitiPOST.reduce(ul, 0)} €`),
        t(o, "id", "w-node-_1ceafbd5-51d6-393c-92da-e1367c6f95f1-db296bf2"),
        t(c, "id", "w-node-_7cfcdf43-bc27-dd7d-0c79-148fbba813d4-db296bf2"),
        t(s, "id", "w-node-_3088939a-8e90-fb51-7a5b-d3c7999ec042-db296bf2"),
        t(e, "class", "camp_altro-iscritto-extra-grid");
    },
    m(p, d) {
      W(p, e, d), l(e, o), l(e, n), l(e, c), l(e, a), l(e, s);
    },
    p: Z,
    d(p) {
      p && Q(e);
    },
  };
}
function Fi(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M,
    E,
    S = We(i[12].settimane),
    L = [];
  for (let C = 0; C < S.length; C += 1) L[C] = $i(Pi(i, S, C));
  let H = i[12].extra_bus && i[12].extra_bus.length > 0 && ll(i),
    T = i[12].extra_inglese && i[12].extra_inglese.length > 0 && nl(i),
    A = i[12].extra_compitiPRE && i[12].extra_compitiPRE.length > 0 && al(i),
    k = i[12].extra_compitiPOST && i[12].extra_compitiPOST.length > 0 && rl(i);
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("div")),
        (c = r("strong")),
        (c.textContent = `${i[12].cognome} ${i[12].nome}`),
        (a = _());
      for (let C = 0; C < L.length; C += 1) L[C].c();
      (s = _()),
        (p = r("div")),
        (p.textContent = "Extra:"),
        (d = _()),
        H && H.c(),
        (f = _()),
        T && T.c(),
        (u = _()),
        A && A.c(),
        (m = _()),
        k && k.c(),
        (b = _()),
        (h = r("div")),
        (g = r("div")),
        (g.textContent = `${i[12].prezzo_calcolato} €`),
        (v = _()),
        (w = r("div")),
        (w.textContent = `${i[12].prezzo_default} €`),
        (z = _()),
        (M = r("div")),
        (M.innerHTML =
          '<img src="https://assets-global.website-files.com/6196bae1920e8a4177775511/654e0b030bcdf330816e6a98_delete.svg" loading="lazy" alt=""/>'),
        (E = _()),
        t(o, "id", "w-node-a2b672ab-ffab-0d03-3420-7923dc5c8e8d-db296bf2"),
        t(w, "class", "simulatore_riepilogotot-discount"),
        t(M, "class", "simulatore_delete-icon"),
        t(e, "class", "camp_riepilogotot-grid");
    },
    m(C, D) {
      W(C, e, D), l(e, o), l(o, n), l(n, c), l(o, a);
      for (let V = 0; V < L.length; V += 1) L[V] && L[V].m(o, null);
      l(o, s),
        l(o, p),
        l(o, d),
        H && H.m(o, null),
        l(o, f),
        T && T.m(o, null),
        l(o, u),
        A && A.m(o, null),
        l(o, m),
        k && k.m(o, null),
        l(e, b),
        l(e, h),
        l(h, g),
        l(h, v),
        l(h, w),
        l(e, z),
        l(e, M),
        l(e, E);
    },
    p(C, D) {
      if (D & 16) {
        S = We(C[12].settimane);
        let V;
        for (V = 0; V < S.length; V += 1) {
          const B = Pi(C, S, V);
          L[V] ? L[V].p(B, D) : ((L[V] = $i(B)), L[V].c(), L[V].m(o, s));
        }
        for (; V < L.length; V += 1) L[V].d(1);
        L.length = S.length;
      }
      C[12].extra_bus && C[12].extra_bus.length > 0 && H.p(C, D),
        C[12].extra_inglese && C[12].extra_inglese.length > 0 && T.p(C, D),
        C[12].extra_compitiPRE &&
          C[12].extra_compitiPRE.length > 0 &&
          A.p(C, D),
        C[12].extra_compitiPOST &&
          C[12].extra_compitiPOST.length > 0 &&
          k.p(C, D);
    },
    d(C) {
      C && Q(e), ji(L, C), H && H.d(), T && T.d(), A && A.d(), k && k.d();
    },
  };
}
function cl(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h,
    g,
    v,
    w,
    z,
    M,
    E,
    S,
    L,
    H,
    T,
    A,
    k,
    C,
    D,
    V = We(i[4]),
    B = [];
  for (let F = 0; F < V.length; F += 1) B[F] = Fi(Hi(i, V, F));
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = r("div")),
        (c = r("button")),
        (c.innerHTML =
          '<div class="camp_button-prev-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="currentColor"></path></svg></div>'),
        (a = _()),
        (s = r("div")),
        (s.textContent = "Riepilogo"),
        (p = _()),
        (d = r("div")),
        (f = r("h2")),
        (u = te(i[0])),
        (m = te(" €")),
        (b = _()),
        (h = r("div")),
        (g = te(i[1])),
        (v = te(" €")),
        (w = _()),
        (z = r("div"));
      for (let F = 0; F < B.length; F += 1) B[F].c();
      (M = _()),
        (E = r("div")),
        (S = r("h2")),
        (S.textContent =
          "Vuoi registrare un'altra persona al Quanta Summer Camp?"),
        (L = _()),
        (H = r("div")),
        (T = r("a")),
        (T.innerHTML =
          '<div class="camp_choice-title">Sì, voglio iscrivere un altro figlio</div>'),
        (A = _()),
        (k = r("a")),
        (k.innerHTML =
          '<div class="camp_choice-title">No, procedo con la preiscrizione</div>'),
        t(c, "class", "camp_button-prev"),
        t(c, "type", "button"),
        t(s, "id", "w-node-_3a2f71d9-0b06-0145-58d7-bfc769942216-db296bf2"),
        t(s, "class", "camp_section-title"),
        t(f, "class", "simulatore_title-abbonamento is-play"),
        t(h, "class", "simulatore_riepilogotot-discount"),
        t(n, "class", "camp_section-title-wrapper"),
        t(z, "class", "camp_altro-riepilogo-wrapper"),
        t(o, "id", "w-node-_12248c5a-5529-0c5d-e60f-9a9830b3a963-db296bf2"),
        t(o, "class", "camp_altro-left"),
        t(S, "class", "camp_title-secondary"),
        t(T, "href", "#"),
        t(T, "class", "camp_choice-block w-inline-block"),
        t(k, "href", "#"),
        t(k, "class", "camp_choice-block w-inline-block"),
        t(H, "class", "camp_choice-wrapper"),
        t(E, "id", "w-node-b418be05-103b-46fb-2e2e-b5b448e45d3c-db296bf2"),
        t(E, "class", "camp_content-wrapper-center bg-altro-iscritto"),
        t(e, "class", "simulatore_grid");
    },
    m(F, de) {
      W(F, e, de),
        l(e, o),
        l(o, n),
        l(n, c),
        l(n, a),
        l(n, s),
        l(n, p),
        l(n, d),
        l(d, f),
        l(f, u),
        l(f, m),
        l(d, b),
        l(d, h),
        l(h, g),
        l(h, v),
        l(o, w),
        l(o, z);
      for (let O = 0; O < B.length; O += 1) B[O] && B[O].m(z, null);
      l(e, M),
        l(e, E),
        l(E, S),
        l(E, L),
        l(E, H),
        l(H, T),
        l(H, A),
        l(H, k),
        C ||
          ((D = [
            x(c, "click", i[6]),
            x(T, "click", i[7]),
            x(k, "click", i[8]),
          ]),
          (C = !0));
    },
    p(F, [de]) {
      if ((de & 1 && Ke(u, F[0]), de & 2 && Ke(g, F[1]), de & 16)) {
        V = We(F[4]);
        let O;
        for (O = 0; O < V.length; O += 1) {
          const pe = Hi(F, V, O);
          B[O] ? B[O].p(pe, de) : ((B[O] = Fi(pe)), B[O].c(), B[O].m(z, null));
        }
        for (; O < B.length; O += 1) B[O].d(1);
        B.length = V.length;
      }
    },
    i: Z,
    o: Z,
    d(F) {
      F && Q(e), ji(B, F), (C = !1), Re(D);
    },
  };
}
const sl = (i, { prezzo: e }) => i + e,
  dl = (i, { prezzo: e }) => i + e,
  pl = (i, { prezzo: e }) => i + e,
  ul = (i, { prezzo: e }) => i + e;
function fl(i, e, o) {
  let n, c, a, s, p, d, f;
  G(i, Ue, (v) => o(2, (a = v))),
    G(i, Le, (v) => o(3, (s = v))),
    G(i, Qt, (v) => o(9, (p = v))),
    G(i, Ae, (v) => o(10, (d = v))),
    G(i, Xe, (v) => o(11, (f = v)));
  let u = [...f.figli, d];
  function m(v) {
    f.figli.push(d),
      v === "tipo" && $(Qt, (p = !0), p),
      $(Le, (s = v), s),
      $(Ue, (a = v), a);
  }
  const b = () => {
      $(Le, (s = a), s);
    },
    h = () => m("tipo"),
    g = () => m("info_genitore");
  return (
    o(1, (n = u.reduce((v, { prezzo_default: w }) => v + w, 0))),
    o(0, (c = u.reduce((v, { prezzo_calcolato: w }) => v + w, 0))),
    [c, n, a, s, u, m, b, h, g]
  );
}
class _l extends st {
  constructor(e) {
    super(), ct(this, e, fl, cl, tt, {});
  }
}
function ml(i) {
  let e,
    o,
    n,
    c,
    a,
    s,
    p,
    d,
    f,
    u,
    m,
    b,
    h = i[3].toFixed() + "",
    g,
    v,
    w,
    z,
    M,
    E,
    S,
    L,
    H,
    T,
    A,
    k,
    C,
    D,
    V,
    B,
    F,
    de,
    O,
    pe,
    Pe,
    me,
    Oe,
    ke,
    y,
    Y,
    $e,
    Te,
    re,
    Ve,
    le,
    He,
    be,
    q,
    Me,
    ue,
    Ze,
    X,
    xe,
    J,
    Ce,
    De,
    ze,
    fe,
    ne,
    Qe,
    Ne,
    Ge,
    Ie,
    P,
    K,
    ee,
    it,
    he,
    ot,
    ve,
    gt,
    Ee,
    qe,
    mt,
    ae,
    lt,
    Je,
    Ye,
    ye,
    _e,
    ge,
    bt,
    Fe,
    we,
    Be,
    vt,
    ce;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (o.innerHTML =
          '<button class="camp_button-prev" type="button"><div class="camp_title-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z" fill="currentColor"></path></svg></div></button> <div id="w-node-_12500e7d-5f80-045c-c4f0-d80e5202751a-db296bf2" class="camp_section-title">Informazioni genitore</div>'),
        (n = _()),
        (c = r("div")),
        (a = r("form")),
        (s = r("div")),
        (p = r("div")),
        (p.textContent = "Sei socio GOLD del Quanta Club?"),
        (d = _()),
        (f = r("div")),
        (f.innerHTML =
          "Per te riservato un ulteriore <strong>sconto del 15%</strong>."),
        (u = _()),
        (m = r("div")),
        (b = r("div")),
        (g = te(h)),
        (v = te(" €")),
        (w = _()),
        (z = r("div")),
        (M = r("span")),
        (E = te(i[0])),
        (S = te(" €")),
        (L = te(" - Prezzo PROMO fino 21/4")),
        (H = _()),
        (T = r("div")),
        (A = r("span")),
        (k = te(i[4])),
        (C = te(" €")),
        (D = te(" - Prezzo Intero")),
        (V = _()),
        (B = r("div")),
        (F = r("label")),
        (de = r("div")),
        (O = _()),
        (pe = r("input")),
        (Pe = _()),
        (me = r("span")),
        (me.textContent = "Sì, sono socio Quanta Club"),
        (Oe = _()),
        (ke = r("div")),
        (y = r("div")),
        (Y = r("div")),
        ($e = r("label")),
        ($e.textContent = "Cognome genitore *"),
        (Te = _()),
        (re = r("input")),
        (Ve = _()),
        (le = r("div")),
        (He = r("label")),
        (He.textContent = "Nome genitore *"),
        (be = _()),
        (q = r("input")),
        (Me = _()),
        (ue = r("div")),
        (Ze = r("div")),
        (X = r("label")),
        (X.textContent = "Data di nascita *"),
        (xe = _()),
        (J = r("input")),
        (Ce = _()),
        (De = r("div")),
        (ze = r("label")),
        (ze.textContent = "Codice Fiscale *"),
        (fe = _()),
        (ne = r("input")),
        (Qe = _()),
        (Ne = r("div")),
        (Ge = r("label")),
        (Ge.textContent = "Indirizzo email *"),
        (Ie = _()),
        (P = r("input")),
        (K = _()),
        (ee = r("div")),
        (it = r("div")),
        (he = r("label")),
        (he.textContent = "Numero cellulare *"),
        (ot = _()),
        (ve = r("input")),
        (gt = _()),
        (Ee = r("div")),
        (qe = r("label")),
        (qe.textContent = "Altro contatto"),
        (mt = _()),
        (ae = r("input")),
        (lt = _()),
        (Je = r("div")),
        (Ye = r("div")),
        (ye = r("div")),
        (_e = r("button")),
        (ge = r("div")),
        (ge.textContent = "Concludi la preiscrizione"),
        (bt = _()),
        (Fe = r("div")),
        (Fe.innerHTML =
          "<div>Thank you! Your submission has been received!</div>"),
        (we = _()),
        (Be = r("div")),
        (Be.innerHTML =
          "<div>Oops! Something went wrong while submitting the form.</div>"),
        t(o, "class", "camp_section-title-wrapper"),
        t(p, "class", "camp_section-title-gold"),
        t(b, "class", "camp_section-title-gold"),
        t(M, "class", "simulatore_riepilogotot-discount"),
        t(z, "class", "text-size-small"),
        t(A, "class", "simulatore_riepilogotot-discount"),
        t(T, "class", "text-size-small"),
        t(m, "class", "camp_info-gen-socio-price"),
        t(
          de,
          "class",
          "w-checkbox-input w-checkbox-input--inputType-custom simulatore_checkbox-check",
        ),
        t(pe, "type", "checkbox"),
        t(pe, "name", "checkbox-y"),
        t(pe, "id", "checkbox-y"),
        t(pe, "data-name", "Checkbox si"),
        j(pe, "opacity", "0"),
        j(pe, "position", "absolute"),
        j(pe, "z-index", "-1"),
        t(me, "class", "simulatore_checkbox-label w-form-label"),
        t(F, "class", "w-checkbox camp_checkbox-socio-field"),
        t(B, "class", "camp_info-gen-socio-check-wrapper"),
        t(s, "class", "camp_info-gen-socio-wrapper"),
        t($e, "for", "cognome_gen-2"),
        t($e, "class", "form_field-label"),
        (re.required = !0),
        t(re, "class", "form_input w-input"),
        t(re, "maxlength", "256"),
        t(re, "name", "cognome_gen"),
        t(re, "data-name", "cognome_gen"),
        t(re, "placeholder", ""),
        t(re, "type", "text"),
        t(re, "id", "cognome_gen-2"),
        t(Y, "class", "camp_info-iscritto-field-wrapper"),
        t(He, "for", "nome_gen-2"),
        t(He, "class", "form_field-label"),
        (q.required = !0),
        t(q, "class", "form_input w-input"),
        t(q, "maxlength", "256"),
        t(q, "name", "nome_gen"),
        t(q, "data-name", "nome_gen"),
        t(q, "placeholder", ""),
        t(q, "type", "text"),
        t(q, "id", "nome_gen-2"),
        t(le, "class", "camp_info-iscritto-field-wrapper"),
        t(y, "class", "camp_info-iscritto-field-group"),
        t(X, "for", "data_gen-2"),
        t(X, "class", "form_field-label"),
        (J.required = !0),
        t(J, "class", "form_input"),
        t(J, "type", "date"),
        t(J, "name", "data-data_gen"),
        t(J, "id", "data-gen"),
        t(Ze, "class", "camp_info-iscritto-field-wrapper"),
        t(ze, "for", "codfis_gen-2"),
        t(ze, "class", "form_field-label"),
        (ne.required = !0),
        t(ne, "class", "form_input w-input"),
        t(ne, "maxlength", "256"),
        t(ne, "name", "codfis_gen"),
        t(ne, "data-name", "codfis_gen"),
        t(ne, "placeholder", ""),
        t(ne, "type", "text"),
        t(ne, "id", "codfis_gen-2"),
        t(De, "class", "camp_info-iscritto-field-wrapper"),
        t(ue, "class", "camp_info-iscritto-field-group"),
        t(Ge, "for", "email_gen-2"),
        t(Ge, "class", "form_field-label"),
        (P.required = !0),
        t(P, "class", "form_input w-input"),
        t(P, "maxlength", "256"),
        t(P, "name", "email_gen"),
        t(P, "data-name", "email_gen"),
        t(P, "placeholder", ""),
        t(P, "type", "text"),
        t(P, "id", "email_gen-2"),
        t(Ne, "class", "camp_info-iscritto-field-wrapper"),
        t(he, "for", "cell_gen"),
        t(he, "class", "form_field-label"),
        (ve.required = !0),
        t(ve, "class", "form_input w-input"),
        t(ve, "maxlength", "256"),
        t(ve, "name", "cell_gen"),
        t(ve, "data-name", "cell_gen"),
        t(ve, "placeholder", ""),
        t(ve, "type", "text"),
        t(ve, "id", "cell_gen"),
        t(it, "class", "camp_info-iscritto-field-wrapper"),
        t(qe, "for", "altro_gen-2"),
        t(qe, "class", "form_field-label"),
        (ae.required = !0),
        t(ae, "class", "form_input w-input"),
        t(ae, "maxlength", "256"),
        t(ae, "name", "altro_gen"),
        t(ae, "data-name", "altro_gen"),
        t(ae, "placeholder", ""),
        t(ae, "type", "text"),
        t(ae, "id", "altro_gen-2"),
        t(Ee, "class", "camp_info-iscritto-field-wrapper"),
        t(ee, "class", "camp_info-iscritto-field-group"),
        (_e.disabled = i[2]),
        t(_e, "class", "simulatore_button"),
        t(_e, "type", "button"),
        nt(_e, "is-disabled", i[2]),
        t(ye, "id", "w-node-_12500e7d-5f80-045c-c4f0-d80e52027568-db296bf2"),
        t(ye, "class", "camp_info-iscritto-field-wrapper"),
        t(Ye, "class", "camp_info-iscritto-field-group"),
        t(ke, "class", "camp_info-gen-form"),
        t(a, "id", "wf-form-info_genitore"),
        t(a, "name", "wf-form-info_genitore"),
        t(a, "data-name", "info_genitore"),
        t(a, "method", "get"),
        t(a, "class", "camp_info-gen-form-wrapper"),
        t(a, "data-wf-page-id", "65def0045e3bbeeadb296bf2"),
        t(a, "data-wf-element-id", "12500e7d-5f80-045c-c4f0-d80e5202751d"),
        t(a, "aria-label", "info_genitore"),
        t(Fe, "class", "success-message-2 w-form-done"),
        t(Fe, "tabindex", "-1"),
        t(Fe, "role", "region"),
        t(Fe, "aria-label", "info_genitore success"),
        t(Be, "class", "error-message w-form-fail"),
        t(Be, "tabindex", "-1"),
        t(Be, "role", "region"),
        t(Be, "aria-label", "info_genitore failure"),
        t(c, "class", "w-form"),
        t(e, "class", "camp_wrapper");
    },
    m(R, N) {
      W(R, e, N),
        l(e, o),
        l(e, n),
        l(e, c),
        l(c, a),
        l(a, s),
        l(s, p),
        l(s, d),
        l(s, f),
        l(s, u),
        l(s, m),
        l(m, b),
        l(b, g),
        l(b, v),
        l(m, w),
        l(m, z),
        l(z, M),
        l(M, E),
        l(M, S),
        l(z, L),
        l(m, H),
        l(m, T),
        l(T, A),
        l(A, k),
        l(A, C),
        l(T, D),
        l(s, V),
        l(s, B),
        l(B, F),
        l(F, de),
        l(F, O),
        l(F, pe),
        (pe.checked = i[1].socio),
        l(F, Pe),
        l(F, me),
        l(a, Oe),
        l(a, ke),
        l(ke, y),
        l(y, Y),
        l(Y, $e),
        l(Y, Te),
        l(Y, re),
        I(re, i[1].cognome_genitore),
        l(y, Ve),
        l(y, le),
        l(le, He),
        l(le, be),
        l(le, q),
        I(q, i[1].nome_genitore),
        l(ke, Me),
        l(ke, ue),
        l(ue, Ze),
        l(Ze, X),
        l(Ze, xe),
        l(Ze, J),
        I(J, i[1].data_nascita_genitore),
        l(ue, Ce),
        l(ue, De),
        l(De, ze),
        l(De, fe),
        l(De, ne),
        I(ne, i[1].cod_fiscale_genitore),
        l(ke, Qe),
        l(ke, Ne),
        l(Ne, Ge),
        l(Ne, Ie),
        l(Ne, P),
        I(P, i[1].email),
        l(ke, K),
        l(ke, ee),
        l(ee, it),
        l(it, he),
        l(it, ot),
        l(it, ve),
        I(ve, i[1].num_telefono),
        l(ee, gt),
        l(ee, Ee),
        l(Ee, qe),
        l(Ee, mt),
        l(Ee, ae),
        I(ae, i[1].altro_contatto),
        l(ke, lt),
        l(ke, Je),
        l(Je, Ye),
        l(Ye, ye),
        l(ye, _e),
        l(_e, ge),
        l(c, bt),
        l(c, Fe),
        l(c, we),
        l(c, Be),
        vt ||
          ((ce = [
            x(pe, "change", i[7]),
            x(re, "input", i[8]),
            x(q, "input", i[9]),
            x(J, "input", i[10]),
            x(ne, "input", i[11]),
            x(P, "input", i[12]),
            x(ve, "input", i[13]),
            x(ae, "input", i[14]),
            x(_e, "click", i[6]),
            x(a, "change", i[5]),
          ]),
          (vt = !0));
    },
    p(R, [N]) {
      N & 8 && h !== (h = R[3].toFixed() + "") && Ke(g, h),
        N & 1 && Ke(E, R[0]),
        N & 16 && Ke(k, R[4]),
        N & 2 && (pe.checked = R[1].socio),
        N & 2 &&
          re.value !== R[1].cognome_genitore &&
          I(re, R[1].cognome_genitore),
        N & 2 && q.value !== R[1].nome_genitore && I(q, R[1].nome_genitore),
        N & 2 && I(J, R[1].data_nascita_genitore),
        N & 2 &&
          ne.value !== R[1].cod_fiscale_genitore &&
          I(ne, R[1].cod_fiscale_genitore),
        N & 2 && P.value !== R[1].email && I(P, R[1].email),
        N & 2 && ve.value !== R[1].num_telefono && I(ve, R[1].num_telefono),
        N & 2 && ae.value !== R[1].altro_contatto && I(ae, R[1].altro_contatto),
        N & 4 && (_e.disabled = R[2]),
        N & 4 && nt(_e, "is-disabled", R[2]);
    },
    i: Z,
    o: Z,
    d(R) {
      R && Q(e), (vt = !1), Re(ce);
    },
  };
}
let bl = "https://hooks.zapier.com/hooks/catch/11439878/3cc0x2s/",
  vl = "https://hooks.zapier.com/hooks/catch/11439878/3cn8kx9/";
function hl(i, e, o) {
  let n, c, a, s, p, d;
  G(i, Le, (L) => o(15, (s = L))),
    G(i, Pt, (L) => o(16, (p = L))),
    G(i, Xe, (L) => o(1, (d = L)));
  let f = !0;
  function u() {
    o(
      2,
      (f =
        d.cognome_genitore === "" ||
        d.nome_genitore === "" ||
        d.data_nascita_genitore === "" ||
        d.cod_fiscale_genitore === "" ||
        d.email === "" ||
        d.email.indexOf("@") < 0 ||
        d.num_telefono === ""),
    ),
      console.log("required: " + f);
  }
  async function m() {
    $(Xe, (d.prezzo_default = n), d),
      $(Xe, (d.prezzo_totale = d.socio ? a : c), d),
      d.figli.filter((L) => L.doc != "").length > 0
        ? ($(Xe, (d.folder = Qo() + "_" + d.cognome_genitore.trim()), d),
          console.log(d),
          d.figli.forEach((L) => {
            b(d.folder, L.doc, L.filename, L.file_type), (L.doc = "");
          }))
        : (console.log("Nessun documento inviato"),
          $(Xe, (d.folder = "xxxxxxx"), d));
    try {
      const L = await fetch(bl, { method: "POST", body: JSON.stringify(d) });
      L.ok
        ? (console.log("invio dati zapier: ok"),
          console.log(L.json()),
          $(Pt, (p = "ok"), p))
        : (console.log("invio dati zapier: ok"),
          console.log(L.statusText),
          $(Pt, (p = "ko"), p));
    } catch (L) {
      console.log("invio dati zapier: errore durante la chiamata"),
        console.log(L),
        $(Pt, (p = "errore"), p);
    }
    $(Le, (s = "response"), s);
  }
  async function b(L, H, T, A) {
    const k = Yo(H, T, A),
      C = new FormData();
    C.append("folder", L), C.append("doc", k);
    try {
      const D = await fetch(vl, { method: "POST", body: C });
      D.ok
        ? console.log("Dati inviati con successo!")
        : console.error("Errore durante l'invio dei dati:", D.statusText);
    } catch (D) {
      console.error("Errore durante la richiesta:", D);
    }
  }
  function h() {
    (d.socio = this.checked), Xe.set(d);
  }
  function g() {
    (d.cognome_genitore = this.value), Xe.set(d);
  }
  function v() {
    (d.nome_genitore = this.value), Xe.set(d);
  }
  function w() {
    (d.data_nascita_genitore = this.value), Xe.set(d);
  }
  function z() {
    (d.cod_fiscale_genitore = this.value), Xe.set(d);
  }
  function M() {
    (d.email = this.value), Xe.set(d);
  }
  function E() {
    (d.num_telefono = this.value), Xe.set(d);
  }
  function S() {
    (d.altro_contatto = this.value), Xe.set(d);
  }
  return (
    (i.$$.update = () => {
      i.$$.dirty & 2 &&
        o(4, (n = d.figli.reduce((L, { prezzo_default: H }) => L + H, 0))),
        i.$$.dirty & 2 &&
          o(0, (c = d.figli.reduce((L, { prezzo_calcolato: H }) => L + H, 0))),
        i.$$.dirty & 1 && o(3, (a = c * yo));
    }),
    [c, d, f, a, n, u, m, h, g, v, w, z, M, E, S]
  );
}
class gl extends st {
  constructor(e) {
    super(), ct(this, e, hl, ml, tt, {});
  }
}
function wl(i) {
  let e, o, n, c, a, s, p, d, f, u, m;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = _()),
        (c = r("div")),
        (a = r("h2")),
        (a.textContent = "Ops!"),
        (s = _()),
        (p = r("p")),
        (p.innerHTML = `Abbiamo avuto un problema nella registrazione delle tue preferenze.<br/>
                Riprova più tardi.`),
        (d = _()),
        (f = r("button")),
        (f.textContent = "Compila una nuova preiscrizione"),
        t(o, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a2-9faf294f"),
        t(o, "class", "camp_image-wrapper background-fine"),
        t(a, "class", "simulatore_fine-title"),
        t(p, "class", "simulatore_fine-text"),
        t(f, "class", "simulatore_button w-button"),
        t(c, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a3-9faf294f"),
        t(c, "class", "simulatore_content-wrapper-center background-white"),
        t(e, "class", "simulatore_grid");
    },
    m(b, h) {
      W(b, e, h),
        l(e, o),
        l(e, n),
        l(e, c),
        l(c, a),
        l(c, s),
        l(c, p),
        l(c, d),
        l(c, f),
        u || ((m = x(f, "click", ci)), (u = !0));
    },
    p: Z,
    d(b) {
      b && Q(e), (u = !1), m();
    },
  };
}
function kl(i) {
  let e, o, n, c, a, s, p, d, f, u, m;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = _()),
        (c = r("div")),
        (a = r("h2")),
        (a.textContent = "Ops!"),
        (s = _()),
        (p = r("p")),
        (p.innerHTML = `Abbiamo avuto un problema nella registrazione delle tue preferenze.<br/>
                Riprova più tardi.`),
        (d = _()),
        (f = r("button")),
        (f.textContent = "Compila una nuova preiscrizione"),
        t(o, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a2-9faf294f"),
        t(o, "class", "camp_image-wrapper background-fine"),
        t(a, "class", "simulatore_fine-title"),
        t(p, "class", "simulatore_fine-text"),
        t(f, "class", "simulatore_button w-button"),
        t(c, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a3-9faf294f"),
        t(c, "class", "simulatore_content-wrapper-center background-white"),
        t(e, "class", "simulatore_grid");
    },
    m(b, h) {
      W(b, e, h),
        l(e, o),
        l(e, n),
        l(e, c),
        l(c, a),
        l(c, s),
        l(c, p),
        l(c, d),
        l(c, f),
        u || ((m = x(f, "click", ci)), (u = !0));
    },
    p: Z,
    d(b) {
      b && Q(e), (u = !1), m();
    },
  };
}
function zl(i) {
  let e, o, n, c, a, s, p, d, f, u, m;
  return {
    c() {
      (e = r("div")),
        (o = r("div")),
        (n = _()),
        (c = r("div")),
        (a = r("h2")),
        (a.textContent = "Registrazione Completata!"),
        (s = _()),
        (p = r("p")),
        (p.innerHTML = `Grazie per aver scelto il Quanta Summer Camp!
                <br/>Abbiamo inviato alla tua casella di posta il riepilogo, verrai a breve contattato dalla reception per finalizzare l&#39;iscrizione.`),
        (d = _()),
        (f = r("button")),
        (f.textContent = "Compila una nuova preiscrizione"),
        t(o, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a2-9faf294f"),
        t(o, "class", "camp_image-wrapper background-fine"),
        t(a, "class", "simulatore_fine-title"),
        t(p, "class", "simulatore_fine-text"),
        t(f, "class", "simulatore_button w-button"),
        t(c, "id", "w-node-_772246ca-06d9-4aa5-899a-0d65a19bf8a3-9faf294f"),
        t(c, "class", "simulatore_content-wrapper-center background-white"),
        t(e, "class", "simulatore_grid");
    },
    m(b, h) {
      W(b, e, h),
        l(e, o),
        l(e, n),
        l(e, c),
        l(c, a),
        l(c, s),
        l(c, p),
        l(c, d),
        l(c, f),
        u || ((m = x(f, "click", ci)), (u = !0));
    },
    p: Z,
    d(b) {
      b && Q(e), (u = !1), m();
    },
  };
}
function Al(i) {
  let e;
  function o(a, s) {
    if (a[0] === "ok") return zl;
    if (a[0] === "ko") return kl;
    if (a[0] === "errore") return wl;
  }
  let n = o(i),
    c = n && n(i);
  return {
    c() {
      c && c.c(), (e = ri());
    },
    m(a, s) {
      c && c.m(a, s), W(a, e, s);
    },
    p(a, [s]) {
      n === (n = o(a)) && c
        ? c.p(a, s)
        : (c && c.d(1), (c = n && n(a)), c && (c.c(), c.m(e.parentNode, e)));
    },
    i: Z,
    o: Z,
    d(a) {
      a && Q(e), c && c.d(a);
    },
  };
}
function ci() {
  location.reload();
}
function Sl(i, e, o) {
  let n;
  return G(i, Pt, (c) => o(0, (n = c))), [n];
}
class Ll extends st {
  constructor(e) {
    super(), ct(this, e, Sl, Al, tt, {});
  }
}
function Tl(i) {
  let e, o;
  return (
    (e = new Ll({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Cl(i) {
  let e, o;
  return (
    (e = new gl({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Ml(i) {
  let e, o;
  return (
    (e = new _l({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function El(i) {
  let e, o;
  return (
    (e = new ol({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function yl(i) {
  let e, o;
  return (
    (e = new Uo({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function xl(i) {
  let e, o;
  return (
    (e = new Po({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Dl(i) {
  let e, o;
  return (
    (e = new Oo({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Nl(i) {
  let e, o;
  return (
    (e = new Lo({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Il(i) {
  let e, o;
  return (
    (e = new Vo({})),
    {
      c() {
        pt(e.$$.fragment);
      },
      m(n, c) {
        at(e, n, c), (o = !0);
      },
      i(n) {
        o || (oe(e.$$.fragment, n), (o = !0));
      },
      o(n) {
        Se(e.$$.fragment, n), (o = !1);
      },
      d(n) {
        rt(e, n);
      },
    }
  );
}
function Hl(i) {
  let e, o, n, c;
  const a = [Il, Nl, Dl, xl, yl, El, Ml, Cl, Tl],
    s = [];
  function p(d, f) {
    return d[0] === "tipo"
      ? 0
      : d[0] === "multisport"
        ? 1
        : d[0] === "specialistico"
          ? 2
          : d[0] === "settimane"
            ? 3
            : d[0] === "extra"
              ? 4
              : d[0] === "info_figlio"
                ? 5
                : d[0] === "altro"
                  ? 6
                  : d[0] === "info_genitore"
                    ? 7
                    : d[0] === "response"
                      ? 8
                      : -1;
  }
  return (
    ~(o = p(i)) && (n = s[o] = a[o](i)),
    {
      c() {
        (e = r("div")),
          n && n.c(),
          t(e, "id", "scrollWrapper"),
          t(e, "class", "camp_scroll-wrapper");
      },
      m(d, f) {
        W(d, e, f), ~o && s[o].m(e, null), (c = !0);
      },
      p(d, [f]) {
        let u = o;
        (o = p(d)),
          o !== u &&
            (n &&
              (Et(),
              Se(s[u], 1, 1, () => {
                s[u] = null;
              }),
              yt()),
            ~o
              ? ((n = s[o]),
                n || ((n = s[o] = a[o](d)), n.c()),
                oe(n, 1),
                n.m(e, null))
              : (n = null));
      },
      i(d) {
        c || (oe(n), (c = !0));
      },
      o(d) {
        Se(n), (c = !1);
      },
      d(d) {
        d && Q(e), ~o && s[o].d();
      },
    }
  );
}
function Pl() {
  const i = document.getElementById("scrollWrapper");
  i && i.scrollIntoView({ behavior: "smooth", block: "start" });
}
function $l(i, e, o) {
  let n;
  return (
    G(i, Le, (c) => o(0, (n = c))),
    fo(() => {
      Pl();
    }),
    [n]
  );
}
class Fl extends st {
  constructor(e) {
    super(), ct(this, e, $l, Hl, tt, {});
  }
}
new Fl({ target: document.getElementById("app") });
