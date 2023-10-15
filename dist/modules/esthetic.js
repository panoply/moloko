// src/lexical/chars.ts
var c = "", Yt = "   ", Wt = "    ", Be = '"', st = ",", je = "'", ee = " ";
var z = `
`, Oi = `\r
`;

// src/rules/language.ts
function ut(e) {
  switch (e) {
    case "text":
      return "Plain Text";
    case "html":
      return "HTML";
    case "liquid":
      return "Liquid";
    case "xml":
      return "XML";
    case "json":
      return "JSON";
    case "jsx":
      return "JSX";
    case "tsx":
      return "TSX";
    case "typescript":
      return "TypeScript";
    case "javascript":
      return "JavaScript";
    case "less":
      return "LESS";
    case "scss":
      return "SCSS";
    case "sass":
      return "SASS";
    case "css":
      return "CSS";
  }
}
function Ie(e) {
  switch (e) {
    case "text":
      return "ignore";
    case "auto":
      return "auto";
    case "markup":
    case "html":
    case "liquid":
    case "xml":
      return "markup";
    case "json":
    case "jsx":
    case "tsx":
    case "typescript":
    case "javascript":
      return "script";
    case "less":
    case "scss":
    case "sass":
    case "css":
      return "style";
  }
}
function St(e) {
  switch (e) {
    case "auto":
      return 5;
    case "html":
    case "liquid":
    case "xml":
      return 1;
    case "json":
    case "jsx":
    case "tsx":
    case "typescript":
    case "javascript":
      return 2;
    case "less":
    case "scss":
    case "sass":
    case "css":
      return 3;
  }
  return 4;
}

// src/lexical/regex.ts
var Lt = /\S/, ft = /\n/, rt = /^\s+$/;
var Xe = /\s+/g, ct = /^\s+/, We = /\s+$/;
var Je = /^[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/, Ye = /[\t\v\f \u00a0\u2000-\u200b\u2028-\u2029\u3000]+$/, Ri = /[\t\v\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, qi = /[\t\v\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]/, Ct = /^\n+/, Kt = /\n+/g;
var Ai = /\n(?!\s*\*)/;
var Ni = /({%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore-(start|next|end)\b/, ei = /^\s*(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore(?![a-z-][^-])/, Tt = /(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore-start\b/, Mt = /^\/\/\s*esthetic-ignore-start\b/, Bi = /^\/\*{1,2}(?:\s*|\n\s*\*\s*)esthetic-ignore-start\b/;
var $i = /(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!--)\s*esthetic-ignore-next\b/, ji = /^\s*[*-]\s/, Dt = /^\s*\d+\.\s/, ti = /^\s*(?:[*-]|\d+\.)\s/, ii = /(?!=)\/?>$/, Ot = /^<!--+/, vt = /--+>$/, ni = /[a-zA-Z0-9_$#]+/, Rt = /({%-?)(\s*)/, qt = /(\s*)(-?%})/, Ei = /{%-?|-?%}/g;
var At = /#\s+|#/, Pi = /^{%-?\n|{%-?\s*#\n/, Wi = /\n\s*-?%}$/;
var Ti = /comment\s*-?%}[\r\n]/;
var si = /(\/|\\|\||\*|\[|\]|\{|\})/g;

// src/utils/native.ts
var pt = Object.assign, Fe = Object.create;
var Mi = Object.defineProperty, Di = Object.defineProperties;

// src/utils/helpers.ts
function _e(e, ...s) {
  let n = Ne(e);
  return function u(A, a, C) {
    let o = typeof C;
    if (C && o === "object")
      if (Ne(C))
        for (let k of C)
          a = u(A, a, k);
      else
        for (let k in C) {
          let f = C[k];
          gn(f) ? a[k] = f(a[k], _e) : f === void 0 ? A ? a.splice(k, 1) : delete a[k] : f === null || tt(f) === !1 || Ne(f) ? a[k] = f : typeof a[k] == "object" ? a[k] = f === a[k] ? f : _e(a[k], f) : a[k] = u(!1, {}, f);
        }
    else
      o === "function" && (a = C(a, _e));
    return a;
  }(n, n ? e.slice() : pt({}, e), s);
}
function ri(e, s) {
  let n = {
    lexer: s,
    language: ut(e),
    chars: 0,
    time: ""
  }, u = Date.now();
  return (A) => {
    let a = +(Date.now() - u).toFixed(0);
    return n.time = a > 1e3 ? `${a}s` : `${a}ms`, n.chars = A, n;
  };
}
function It(...e) {
  return e.join(z);
}
function bt(e, s = NaN) {
  if (e.indexOf(z) < 0)
    return isNaN(s) ? 0 : s;
  let n;
  if (Ne(e)) {
    let u = 0;
    do {
      if (u = e.indexOf(z, u), u === -1)
        break;
      n = n + 1, u = u + 1;
    } while (u < e.length);
  } else
    n = e.split(z).length;
  return isNaN(s) ? n === 1 ? 0 : n : n === 1 ? s : (n = n - 1 + s, n > s ? n : s);
}
function oi(e, s = ee) {
  if (e <= 0)
    return s;
  let n = c, u = 1;
  do
    n += s;
  while (u++ < e);
  return n;
}
function Me(e) {
  return e ? qi.test(e) : !1;
}
function i(e, s) {
  return e ? e.charCodeAt(0) === s : !1;
}
function Ii(e) {
  return e[e.length - 1];
}
function Qe(e, s) {
  return i(e[e.length - 1], s);
}
function _i(e, ...s) {
  let n = e.length - 1, u = s.length;
  for (; u--; )
    if (i(e[n--], s[u]) === !1)
      return !1;
  return !0;
}
function dt(e, s, n = 2) {
  return i(e[e.length - n], s);
}
function T(e, s) {
  return i(e, s) === !1;
}
function li(e, s) {
  return Qe(e, s) === !1;
}
function lt(e) {
  return /\S/.test(e);
}
function ce(e) {
  return /\s/.test(e);
}
function He(e) {
  return /\d/.test(e);
}
function ai(e) {
  return `\\${e}`;
}
function Qi(e) {
  return i(e, 123) ? "{%-?\\s*" : "\\s*-?%}";
}
var { toString: at } = Object.prototype;
function Hi(e) {
  return (s) => s in e;
}
function Ne(e) {
  return at.call(e).slice(8, -1) === "Array";
}
function tt(e) {
  return at.call(e).slice(8, -1) === "Object";
}
function Nt(e) {
  return at.call(e).slice(8, -1) === "String";
}
function Bt(e) {
  return at.call(e).slice(8, -1) === "RegExp";
}
function gn(e) {
  return at.call(e).slice(8, -1) === "Function";
}
function mt(e) {
  return at.call(e).slice(8, -1) === "Boolean";
}
function kt(e) {
  return at.call(e).slice(8, -1) === "Number";
}
function Ke(e) {
  return at.call(e).slice(8, -1) === "Undefined";
}

// src/parse/sorting.ts
function $t(e) {
  let s = r.count, n = r.stack.index, u = 0, A = 0, a = 0, C = 0, o = 0, k = 0, f = 0, t = !0, { count: h } = r, V = r.stack.token, le = r.stack.index, m = r.lineOffset, p = e.lexer[h] === "style", w = p && V === "global", _ = p ? [";", "separator"] : [",", "separator"], I = [], d = {
    begin: [],
    ender: [],
    lexer: [],
    lines: [],
    stack: [],
    token: [],
    types: []
  };
  function l(g, M) {
    let L = g[0], N = M[0];
    if (e.types[L] === "comment") {
      do
        L = L + 1;
      while (L < h && e.types[L] === "comment");
      if (e.token[L] === void 0)
        return 1;
    }
    if (e.types[N] === "comment") {
      do
        N = N + 1;
      while (N < h && e.types[N] === "comment");
      if (e.token[N] === void 0)
        return 1;
    }
    if (p === !0) {
      if (e.token[L].indexOf("@import") === 0 || e.token[N].indexOf("@import") === 0)
        return L < N ? -1 : 1;
      if (e.types[L] !== e.types[N]) {
        if (e.types[L] === "function")
          return 1;
        if (e.types[L] === "variable")
          return -1;
        if (e.types[L] === "selector")
          return 1;
        if (e.types[L] === "property" && e.types[N] !== "variable" || e.types[L] === "mixin" && e.types[N] !== "property" && e.types[N] !== "variable")
          return -1;
      }
    }
    return e.token[L].toLowerCase() > e.token[N].toLowerCase() ? 1 : -1;
  }
  C = s;
  do {
    if (e.begin[s] === n || w && s < C && i(e.token[s], 125) && e.begin[e.begin[s]] === -1) {
      if (e.types[s].indexOf("liquid") > -1)
        return;
      if (e.token[s] === _[0] || p === !0 && i(e.token[s], 125) && T(e.token[s + 1], 59) ? (t = !0, o = s + 1) : p === !0 && i(e.token[s - 1], 125) && (t = !0, o = s), o === 0 && e.types[0] === "comment")
        do
          o = o + 1;
        while (e.types[o] === "comment");
      else
        e.types[o] === "comment" && e.lines[o] < 2 && (o = o + 1);
      t === !0 && (e.token[s] === _[0] || p === !0 && i(e.token[s - 1], 125)) && o <= C && ((p === !0 && "};".indexOf(e.token[C]) < 0 || p === !1 && T(e.token[C], 44)) && (C = C + 1), I.push([o, C]), p === !0 && i(e.token[o], 125) ? C = o : C = o - 1);
    }
    s = s - 1;
  } while (s > n);
  if (I.length > 0 && I[I.length - 1][0] > s + 1) {
    if (u = I[I.length - 1][0] - 1, e.types[u] === "comment" && e.lines[u] > 1) {
      do
        u = u - 1;
      while (u > 0 && e.types[u] === "comment");
      I[I.length - 1][0] = u + 1;
    }
    if (e.types[s + 1] === "comment" && s === -1)
      do
        s = s + 1;
      while (e.types[s + 1] === "comment");
    I.push([s + 1, u]);
  }
  if (I.length > 1 && (p === !0 || r.language === "json" || i(e.token[s - 1], 61) || i(e.token[s - 1], 58) || i(e.token[s - 1], 40) || i(e.token[s - 1], 91) || i(e.token[s - 1], 44) || e.types[s - 1] === "word" || s === 0)) {
    I.sort(l), f = I.length, t = !1, n = 0;
    do {
      if (k = I[n][1], p === !0 && (a = k, e.types[a] === "comment" && (a = a - 1), i(e.token[a], 125) ? (k = k + 1, _[0] = "}", _[1] = "end") : (_[0] = ";", _[1] = "separator")), u = I[n][0], p === !0 && e.types[k - 1] !== "end" && e.types[k] === "comment" && e.types[k + 1] !== "comment" && n < f - 1 && (k = k + 1), u < k)
        do
          p === !1 && n === f - 1 && u === k - 2 && i(e.token[u], 44) && e.lexer[u] === "script" && e.types[u + 1] === "comment" || r.push(d, {
            begin: e.begin[u],
            ender: e.begin[u],
            lexer: e.lexer[u],
            lines: e.lines[u],
            stack: e.stack[u],
            token: e.token[u],
            types: e.types[u]
          }, c), A = A + 1, e.token[u] === _[0] && (p === !0 || e.begin[u] === e.begin[I[n][0]]) ? t = !0 : e.token[u] !== _[0] && e.types[u] !== "comment" && (t = !1), u = u + 1;
        while (u < k);
      if (t === !1 && d.token[d.token.length - 1] !== "x;" && (p === !0 || n < f - 1)) {
        if (u = d.types.length - 1, d.types[u] === "comment")
          do
            u = u - 1;
          while (u > 0 && d.types[u] === "comment");
        u = u + 1, r.splice({
          data: d,
          howmany: 0,
          index: u,
          record: {
            begin: le,
            stack: w ? "global" : V,
            ender: r.count,
            lexer: d.lexer[u - 1],
            lines: 0,
            token: _[0],
            types: _[1]
          }
        }), A = A + 1;
      }
      n = n + 1;
    } while (n < f);
    r.splice({ data: e, howmany: A, index: s + 1 }), r.lineOffset = m, r.concat(e, d);
  }
}
function ui(e, s, n) {
  return Ne(e) === !1 ? e : s === "normal" ? Vi.call({ array: e, recursive: n }, e) : s === "descend" ? Gi.call({ recursive: n }, e) : zi.call({ recursive: n }, e);
}
function _t(e, s) {
  let n = e, u = -1, { data: A } = r, a = [], C = r.stack.length < 2 ? [-1] : [r.stack[r.stack.length - 2][1]];
  do
    n > 0 && A.types[n].indexOf("attribute") > -1 && A.types[n].indexOf("end") < 0 && A.types[n - 1].indexOf("start") < 0 && A.types[n - 1].indexOf("attribute") < 0 && A.lexer[n] === "markup" && C.push(n - 1), n > 0 && A.types[n - 1].indexOf("attribute") > -1 && A.types[n].indexOf("attribute") < 0 && A.lexer[C[C.length - 1]] === "markup" && A.types[C[C.length - 1]].indexOf("start") < 0 && C.pop(), A.begin[n] !== C[C.length - 1] && (A.begin[n] = C.length > 0 ? C[C.length - 1] : -1), A.types[n].indexOf("else") > -1 && (C.length > 0 ? C[C.length - 1] = n : C.push(n)), A.types[n].indexOf("end") > -1 && C.pop(), A.types[n].indexOf("start") > -1 && C.push(n), n = n + 1;
  while (n < s);
  n = s;
  do
    n = n - 1, A.types[n].indexOf("end") > -1 && (a.push(n), u = u + 1), A.ender[n] = u > -1 ? a[u] : -1, A.types[n].indexOf("start") > -1 && (a.pop(), u = u - 1);
  while (n > e);
}
function zi(e) {
  let s = 0, n = e.length, u = e, A = u.map((o) => o[1]), a = () => {
    let o = 0, k = u.length;
    if (o < k)
      do
        Ne(u[o]) === !0 && (u[o] = zi.apply(this, u[o])), o = o + 1;
      while (o < k);
  }, C = (o = c) => {
    let k = s, f = 0, t = 0, h = 0, V = [], le = u[s];
    if (k < n)
      do
        u[k] < le ? (le = u[k], V = [k]) : u[k] === le && V.push(k), k = k + 1;
      while (k < n);
    if (t = V.length, k = s, f = t + s, k < f)
      do
        le[1] = A[k], u[V[h]] = u[k], u[k] = le, h = h + 1, k = k + 1;
      while (k < f);
    return s = s + t, s < n ? C() : (this.recursive === !0 && a(), e = u), o;
  };
  return C(), e;
}
function Gi(e) {
  let s = 0, n = e.length, u = e, A = () => {
    let C = u.length, o = 0;
    if (o < C)
      do
        Ne(u[o]) && (u[o] = Gi.apply(this, u[o])), o = o + 1;
      while (o < C);
  }, a = (C = "") => {
    let o = s, k = 0, f = 0, t = 0, h = u[s], V = [], le = c, m = typeof h;
    if (o < n)
      do
        le = typeof u[o], u[o] > h || le > m ? (h = u[o], V = [o]) : u[o] === h && V.push(o), o = o + 1;
      while (o < n);
    if (f = V.length, o = s, k = f + s, o < k)
      do
        u[V[t]] = u[o], u[o] = h, t = t + 1, o = o + 1;
      while (o < k);
    return s = s + f, s < n ? a() : (this.recursive === !0 && A(), e = u), C;
  };
  return a(), e;
}
function Vi(e) {
  let s = e, n = [e[0]], u = () => {
    let a = 0, C = s.length;
    if (a < C)
      do
        Ne(s[a]) && (s[a] = Vi.apply(this, s[a])), a = a + 1;
      while (a < C);
  }, A = (a) => {
    let C = 0, o = [], k = s.length;
    if (C < k)
      do
        s[C] !== a && o.push(s[C]), C = C + 1;
      while (C < k);
    s = o, o.length > 0 ? (n.push(o[0]), A(o[0])) : (this.recursive === !0 && u(), e = s);
  };
  return A(this.array[0]), e;
}

// src/parse/grammar.ts
var fi = class {
  constructor() {
    this.grammar = {
      embedded: {
        schema: [
          {
            language: "json"
          }
        ],
        style: [
          {
            language: "css"
          }
        ],
        stylesheet: [
          {
            language: "css"
          },
          {
            language: "scss",
            argument: /['"]scss['"]/
          }
        ],
        javascript: [
          {
            language: "javascript"
          }
        ]
      },
      tags: [
        "form",
        "paginate",
        "capture",
        "case",
        "comment",
        "for",
        "if",
        "raw",
        "tablerow",
        "unless",
        "schema",
        "style",
        "script",
        "stylesheet",
        "javascript"
      ],
      control: [
        "if",
        "unless",
        "case"
      ],
      else: [
        "else",
        "elsif",
        "when"
      ],
      singletons: [
        "include",
        "layout",
        "section",
        "assign",
        "liquid",
        "break",
        "continue",
        "cycle",
        "decrement",
        "echo",
        "increment",
        "render"
      ]
    };
    this.else = new Set(this.grammar.else);
    this.control = new Set(this.grammar.control);
    this.tags = new Set(this.grammar.tags);
    this.singleton = new Set(this.grammar.singletons);
    this.embed = {};
    this.queries(this.grammar.embedded);
  }
  extend(s) {
    for (let n in s)
      if (Ne(s[n]))
        for (let u of s[n])
          n === "tags" && this.tags.has(u) === !1 ? (this.grammar.tags.push(u), this.tags.add(u)) : n === "else" && this.else.has(u) === !1 ? (this.grammar.else.push(u), this.else.add(u)) : n === "control" && this.control.has(u) ? (this.grammar.control.push(u), this.control.add(u)) : n === "singletons" && this.singleton.has(u) === !1 && (this.grammar.singletons.push(u), this.singleton.add(u));
      else
        n === "embedded" && tt(s[n]) && this.queries(s[n]);
  }
  /**
   * Embedded Queries
   *
   * Generates embed query utility for determining
   * different Liquid embedded type tag blocks
   */
  queries(s) {
    for (let n in s)
      for (let { language: u, argument: A = null } of s[n])
        if (n in this.embed || (this.embed[n] = {
          tag: n,
          language: u,
          args: /* @__PURE__ */ new Map([[/* @__PURE__ */ new Set(), { tag: n, language: u }]])
        }), A) {
          for (let [a] of this.embed[n].args)
            if (a !== null)
              if (Ne(A))
                for (let C of A)
                  a.has(C) || a.add(C);
              else {
                let C = new RegExp(A);
                if (a.size > 0)
                  for (let o of a)
                    Bt(o) !== !1 && o.source !== C.source && a.add(C);
                else
                  a.add(C);
              }
        }
  }
}, ci = class {
  constructor() {
    this.grammar = {
      tags: [
        // 'a',
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animate",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "color-profile",
        "cursor",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "font",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignObject",
        "g",
        "glyph",
        "glyphRef",
        "hkern",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "metadata",
        "missing-glyph",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        // 'script',
        "set",
        "stop",
        //  'style',
        "switch",
        "symbol",
        "text",
        "textPath",
        "title",
        "tref",
        "tspan",
        "use",
        "view",
        "vkern"
      ]
    };
    this.tags = new Set(this.grammar.tags);
  }
  extend(s) {
    for (let n in s)
      if (Ne(s[n]))
        for (let u of s[n])
          n === "tags" && this.tags.has(u) === !1 && (this.grammar.tags.push(u), this.tags.add(u));
  }
}, pi = class {
  constructor() {
    this.grammar = {
      embedded: {
        script: [
          {
            language: "javascript"
          },
          {
            language: "json",
            attribute: {
              type: [
                "application/json",
                "application/ld+json"
              ]
            }
          },
          {
            language: "jsx",
            attribute: {
              type: [
                "text/jsx",
                "application/jsx"
              ]
            }
          }
        ],
        style: [
          {
            language: "css"
          }
        ]
      },
      voids: [
        "area",
        "base",
        "br",
        "col",
        "command",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ],
      tags: [
        "a",
        "abbr",
        "acronym",
        "address",
        "applet",
        "article",
        "aside",
        "audio",
        "b",
        "basefont",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h6",
        "head",
        "header",
        "html",
        "i",
        "iframe",
        "ins",
        "isindex",
        "kbd",
        "label",
        "legend",
        "fieldset",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "meter",
        "nav",
        "noframes",
        "frame",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "object",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "picture",
        "video",
        "audio",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "details",
        "sup",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "audio",
        "video",
        "tt",
        "u",
        "ul",
        "var",
        "video"
      ]
    };
    this.tags = new Set(this.grammar.tags);
    this.voids = new Set(this.grammar.voids);
    this.embed = {};
    this.queries(this.grammar.embedded);
  }
  extend(s) {
    for (let n in s)
      if (Ne(s[n]))
        for (let u of s[n])
          n === "tags" && this.tags.has(u) === !1 ? (this.grammar.tags.push(u), this.tags.add(u)) : n === "voids" && this.voids.has(u) === !1 && (this.grammar.voids.push(u), this.voids.add(u));
      else
        n === "embedded" && tt(s[n]) && this.queries(s[n]);
  }
  /**
  * Embedded Queries
  *
  * Generates embed query utility for determining
  * different HTML embedded type tag blocks
  */
  queries(s) {
    for (let n in s) {
      n in this.embed || (this.embed[n] = { tag: n, attr: /* @__PURE__ */ new Map() });
      for (let { language: u, attribute: A } of s[n])
        if ("language" in this.embed[n] || (this.embed[n].language = u), this.embed[n].attr.has(u) || this.embed[n].attr.set(u, { tag: n, language: u, attr: /* @__PURE__ */ new Map() }), A) {
          let a = this.embed[n].attr.get(u);
          for (let C in A) {
            a.attr.has(C) || a.attr.set(C, {
              tag: n,
              language: u,
              attr: C,
              value: /* @__PURE__ */ new Set()
            });
            let o = this.embed[n].attr.get(u).attr.get(C);
            if (Ne(A[C]))
              for (let k of A[C])
                o.value.has(k) || o.value.add(k);
            else {
              let k = new RegExp(A[C]);
              if (o.value.size > 0)
                for (let f of o.value)
                  Bt(f) !== !1 && f.source !== k.source && o.value.add(k);
              else
                o.value.add(k);
            }
          }
        }
    }
  }
}, di = class {
  constructor() {
    this.grammar = {
      units: [
        "%",
        "cap",
        "ch",
        "cm",
        "deg",
        "dpcm",
        "dpi",
        "dppx",
        "em",
        "ex",
        "fr",
        "grad",
        "Hz",
        "ic",
        "in",
        "kHz",
        "lh",
        "mm",
        "ms",
        "mS",
        "pc",
        "pt",
        "px",
        "Q",
        "rad",
        "rem",
        "rlh",
        "s",
        "turn",
        "vb",
        "vh",
        "vi",
        "vmax",
        "vmin",
        "vw"
      ],
      atrules: [
        "@charset",
        "@color-profile",
        "@counter-style",
        "@font-face",
        "@font-feature-values",
        "@font-palette-values",
        "@import",
        "@keyframes",
        "@layer",
        "@media",
        "@namespace",
        "@page",
        "@supports"
      ],
      webkit: {
        classes: [
          "webkit-any",
          "webkit-any-link*",
          "webkit-autofill"
        ],
        elements: [
          "webkit-file-upload-button",
          "webkit-inner-spin-button",
          "webkit-input-placeholder",
          "webkit-meter-bar",
          "webkit-meter-even-less-good-value",
          "webkit-meter-inner-element",
          "webkit-meter-optimum-value",
          "webkit-meter-suboptimum-value",
          "webkit-outer-spin-button",
          "webkit-progress-bar",
          "webkit-progress-inner-element",
          "webkit-progress-value",
          "webkit-search-cancel-button",
          "webkit-search-results-button",
          "webkit-slider-runnable-track",
          "webkit-slider-thumb"
        ]
      },
      pseudo: {
        classes: [
          "active",
          "any-link",
          "checked",
          "default",
          "defined",
          "disabled",
          "empty",
          "enabled",
          "first",
          "first-child",
          "first-of-type",
          "fullscreen",
          "focus",
          "focus-visible",
          "focus-within",
          "host",
          "hover",
          "indeterminate",
          "in-range",
          "invalid",
          "is",
          "lang",
          "last-child",
          "last-of-type",
          "left",
          "link",
          "modal",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-of-type",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "optional",
          "out-of-range",
          "picture-in-picture",
          "placeholder-shown",
          "paused",
          "playing",
          "read-only",
          "read-write",
          "required",
          "right",
          "root",
          "scope",
          "target",
          "valid",
          "visited",
          "where"
        ],
        elements: [
          "after",
          "backdrop",
          "before",
          "cue",
          "cue-region",
          "first-letter",
          "first-line",
          "file-selector-button",
          "marker",
          "part",
          "placeholder",
          "selection",
          "slotted"
        ],
        functions: [
          "after",
          "before",
          "first-letter",
          "first-line",
          "host",
          "host-context",
          "part",
          "slotted",
          "lang",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-of-type",
          "nth-of-type",
          "where"
        ]
      }
    };
    this.units = new Set(this.grammar.units);
    this.atRules = new Set(this.grammar.atrules);
    this.pseudoClasses = new Set(this.grammar.pseudo.classes);
    this.pseudoElements = new Set(this.grammar.pseudo.elements);
    this.pseudoFunctions = new Set(this.grammar.pseudo.functions);
    this.webkitElements = new Set(this.grammar.webkit.elements);
    this.webkitClasses = new Set(this.grammar.webkit.classes);
  }
  atrules(s) {
    return this.atRules.has(s.slice(0, s.indexOf("(")).trim());
  }
  extend(s) {
    for (let n in s) {
      if (Ne(s[n]))
        for (let u of s[n])
          n === "units" && !this.units.has(u) ? (this.grammar[n].push(u), this.units.add(u)) : n === "atrules" && !this.atRules.has(u) && (this.grammar[n].push(u), this.atRules.add(u));
      if (typeof s[n] == "object") {
        for (let u in s[n])
          if (Ne(s[n][u]))
            for (let A of s[n][u])
              n === "webkit" ? u === "elements" ? (this.grammar[n][u].push(A), this.webkitElements.add(A)) : u === "classes" && (this.grammar[n][u].push(A), this.webkitClasses.add(A)) : n === "pseudo" && (u === "elements" ? (this.grammar[n][u].push(A), this.pseudoElements.add(A)) : u === "classes" ? (this.grammar[n][u].push(A), this.pseudoClasses.add(A)) : u === "functions" && (this.grammar[n][u].push(A), this.pseudoFunctions.add(A)));
      }
    }
  }
}, mi = class {
  constructor() {
    this.grammar = {
      keywords: [
        "ActiveXObject",
        "ArrayBuffer",
        "AudioContext",
        "Canvas",
        "CustomAnimation",
        "DOMParser",
        "DataView",
        "Date",
        "Error",
        "EvalError",
        "FadeAnimation",
        "FileReader",
        "Flash",
        "Float32Array",
        "Float64Array",
        "FormField",
        "Frame",
        "Generator",
        "HotKey",
        "Image",
        "Iterator",
        "Intl",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "InternalError",
        "Loader",
        "Map",
        "MenuItem",
        "MoveAnimation",
        "Notification",
        "ParallelArray",
        "Point",
        "Promise",
        "Proxy",
        "RangeError",
        "Rectangle",
        "ReferenceError",
        "Reflect",
        "RegExp",
        "ResizeAnimation",
        "RotateAnimation",
        "Set",
        "SQLite",
        "ScrollBar",
        "Set",
        "Shadow",
        "StopIteration",
        "Symbol",
        "SyntaxError",
        "Text",
        "TextArea",
        "Timer",
        "TypeError",
        "URL",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "URIError",
        "WeakMap",
        "WeakSet",
        "Web",
        "Window",
        "XMLHttpRequest"
      ]
    };
    this.keywords = new Set(this.grammar.keywords);
  }
  extend(s) {
    for (let n in s)
      if (Ne(s[n]))
        for (let u of s[n])
          n === "keywords" && !this.keywords.has(u) && (this.grammar[n].push(u), this.keywords.add(u));
  }
}, hi = class {
  constructor() {
    /**
     * CSS Grammars
     */
    this.css = new di();
    /**
     * Liquid Grammars
     */
    this.liquid = new fi();
    /**
     * JavaScript Grammars
     */
    this.js = new mi();
    /**
     * HTML Grammars
     */
    this.html = new pi();
    /**
     * SVG Grammars
     */
    this.svg = new ci();
  }
  /**
     * Extend Grammars
     */
  extend(s) {
    let {
      liquid: n,
      html: u,
      css: A,
      js: a,
      svg: C
    } = this;
    if (tt(s))
      for (let o in s)
        o === "liquid" ? n.extend(s.liquid) : o === "html" ? u.extend(s.html) : o === "css" ? A.extend(s.css) : o === "js" ? a.extend(s.js) : o === "svg" && C.extend(s.svg);
    return {
      get html() {
        return u.grammar;
      },
      get liquid() {
        return n.grammar;
      },
      get js() {
        return a.grammar;
      },
      get css() {
        return A.grammar;
      },
      get svg() {
        return C.grammar;
      }
    };
  }
}, we = new hi();

// src/lexical/lexing.ts
function Ue(e, s = NaN, n) {
  if (Nt(e) === !1)
    return c;
  if (T(e, 60) && T(e, 123))
    return n || e;
  if (i(e, 60)) {
    let a = e.search(/[\s>]/), C = e.slice(i(e[1], 47) ? 2 : 1, a);
    return i(C, 63) && Qe(C, 63) ? "xml" : isNaN(s) ? C : C.slice(s);
  }
  let A = (i(e[2], 45) ? e.slice(3).trimStart() : e.slice(2).trimStart()).split(/\s|-?[%}]}/).shift();
  return isNaN(s) ? A : A.slice(s);
}
function gi(e) {
  return (s, n, u) => {
    let A = e, a = e;
    return i(u[n - 1], 92) && (A = s[0]), i(s[s.length - 2], 92) && (a = s[s.length - 1]), A + s.slice(1, -1) + a;
  };
}

// src/config.ts
var Re = {
  // @ts-ignore
  version: "0.6.4-beta.1",
  env: typeof process != "undefined" && process.versions != null ? "node" : "browser",
  lastUpdate: (/* @__PURE__ */ new Date()).toDateString(),
  cwd: null,
  reportStats: !0,
  editorConfig: !1,
  throwErrors: !0,
  globalThis: !0,
  persistRules: !0,
  logLevel: 2,
  logColors: !0,
  resolveConfig: "package.json"
};

// src/parse/errors.ts
function De(e, s, n) {
  n || (n = Ue(s));
  let u = Xi(e, n, r.lineNumber);
  u.language = ut(r.language), r.error = It(
    u.message,
    z,
    kn(),
    z,
    u.details.replace(/\n/g, ee),
    z,
    `Language: ${ut(r.language)} `,
    `Location: ${r.lineNumber}:${r.lineColumn}`,
    `\xC6sthetic: Parse Failed (Code: ${u.code})`
  );
}
function jt(e, s, n) {
  n || (n = Ue(s.token));
  let u = Xi(e, n, s.line);
  u.language = ut(r.language), r.error = It(
    u.message,
    z,
    bn(s),
    z,
    u.details,
    z,
    qe(`Language: ${ut(r.language)}`),
    qe(`Location: ${s.line}`),
    qe(`\xC6sthetic: Parse Failed (Code: ${e})`)
  );
}
function Ee(e) {
  return It(
    `Rule Error: ${e.message}`,
    z,
    `Definition: ${e.option}`,
    `Provided: ${e.provided} `,
    `Expected: ${e.expected.join(", ")} `
  );
}
var Ui = (e) => Re.logColors ? `\x1B[93m${"^".repeat(e)}\x1B[39m` : `${"^".repeat(e)}`;
function bn(e) {
  let s = e.line - r.get(e.index).lines, n = 0, u = "", A = r.source.split(z).slice(s, e.line), a = `${e.line + 1}`.length, C = [], { indentSize: o, indentChar: k } = r.rules;
  do {
    let f = `${s + 1}`, t = a - f.length > 0 ? Re.logColors ? ` \x1B[90m${f} |` : ` ${f} |` : Re.logColors ? `\x1B[90m${f} |` : `${f} |`;
    if (u = A[n], n === 0) {
      if (Ke(A[n])) {
        Re.logColors ? C.push(`${t} \x1B[31m${e.token}\x1B[39m`) : C.push(`${t} ${e.token}`);
        break;
      }
      u = A[n].trimStart(), Re.logColors ? C.push(`${t} \x1B[31m${u}\x1B[39m`) : C.push(`${t} ${u}`);
    } else {
      let h = u.match(/^\s*/);
      h !== null && h[0].length > o && (u = k.repeat(o) + u.trimStart()), Re.logColors ? C.push(`${t} \x1B[31m${u}\x1B[39m`) : C.push(`${t} ${u}`);
    }
    n = n + 1, s = s + 1;
  } while (n < A.length);
  return C.join(z);
}
function kn(e = r.lineNumber) {
  let s = [], n = r.source.split(z), u = e, A = `${u + 1}`.length, a = u - 1, C = "";
  n.length > 2 && (a = u - 3), n.length === 2 && (a = u - 2);
  do {
    let o = `${a + 1}`, k = A - o.length > 0 ? Re.logColors ? ` \x1B[90m${o} |` : ` ${o} |` : Re.logColors ? `\x1B[90m${o} |` : `${o} |`, f = n[a].trim();
    if (a > u)
      break;
    if (!f) {
      Re.logColors ? s.push(`${k} \x1B[90m${f || "\u2424"}`) : s.push(`${k} ${f || "\u2424"}`), a = a + 1;
      continue;
    }
    a === u - 1 ? f.length === 0 ? s.push(`${" ".repeat(A + 2)} ${Ui(C.length)}`) : (Re.logColors ? s.push(`${k} \x1B[31m${f}\x1B[39m`) : s.push(`${k} ${f}`), s.push(`${" ".repeat(A + 2)} ${Ui(f.length)}`)) : Re.logColors ? s.push(`${k} \x1B[90m${f || "\u2424"}`) : s.push(`${k} ${f || "\u2424"}`), a = a + 1, C = f;
  } while (a < u);
  return s.join(z);
}
function qe(...e) {
  return Re.logColors ? `${e.join(z)}`.replace(/"(.*?)"/g, "\x1B[31m$1\x1B[39m") : e.join(z);
}
function Xi(e, s, n = r.lineNumber) {
  return {
    105: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing HTML "${s}" end tag`),
      details: qe(
        `The "<${s}>" tag type has an incomplete HTML syntactic structure resulting in a parse error.`,
        `To resolve the issue check that you have a closing "</${s}>" tag. For more information`,
        "see: https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags"
      )
    },
    114: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing Liquid "end${s}" tag`),
      details: qe(
        `The Liquid "${s}" is a tag block type which requires an end tag be provided.`,
        "For more information, see: https://shopify.dev/api/liquid/tags"
      )
    },
    104: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing HTML start "${s}" tag`),
      details: qe(
        "There is an incorrect placement or an incomplete structure resulting in a parse error.",
        `To resolve the issue, you may need to provide a start \`<${s}>\` tag type or correct the placement. `
      )
    },
    112: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing Liquid start "${s}" tag`),
      details: qe(
        "The Liquid tag has incorrect placement or an incomplete structure resulting in a parse error.",
        "To resolve the issue, you may need to provide a start tag type or correct the placement. "
      )
    },
    113: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing Close Delimiter "%}" or "}}" on liquid tag`),
      details: qe(
        "The Liquid tag is missing its closing delimiter resulting in malformed syntax."
      )
    },
    106: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing HTML ">" delimiter on end tag`),
      details: qe(
        "The HTML tag is missing its closing delimiter resulting in malformed syntax.",
        'You can have Esthetic autofix syntax errors like this by setting the markup rule "correct" to true.'
      )
    },
    107: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Missing HTML "-->" comment delimiter`),
      details: qe(
        "An invalid HTML comment expression which has resulting in malformed syntax.",
        "HTML Comment require ending delimiters to be passed."
      )
    },
    108: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Invalid HTML "<!--" comment delimeter`),
      details: qe(
        "An invalid HTML opening comment delimiter expressed resulting in malformed syntax."
      )
    },
    109: {
      code: e,
      message: qe(`Illegal Syntax (line ${n}): Invalid HTML Comment Attribute`),
      details: qe(
        "HTML comments are not allowed inside tags, start or end, at all.",
        "To resolve the issue, remove the comment or place it above the tag.",
        "For more information see: https://html.spec.whatwg.org/multipage/syntax.html#start-tags"
      )
    },
    103: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Invalid quotation character`),
      details: qe(
        `Bad quotation character (\u201C, &#x201c) provided. Only single ' or double "`,
        "quotations characters are valid in HTML (markup) languages. For more information see:",
        "https://html.spec.whatwg.org/multipage/parsing.html#attribute-value-(double-quoted)-state"
      )
    },
    110: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Invalid CDATA Termination Sequence`),
      details: qe(
        "The CDATA bracket state sequence provided is invalid resulting in a parse error.",
        "For more information see: https://html.spec.whatwg.org/multipage/parsing.html#cdata-section-bracket-state"
      )
    },
    116: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Invalid character sequence in "${s}" token`),
      details: qe(
        "An invalid sequence of characters defined"
      )
    },
    101: {
      code: e,
      message: qe(`Syntax Error (line ${n}): Unterminated String`),
      details: qe(
        "There is an unterminated string sequence resulting in a parse error."
      )
    }
  }[e];
}

// src/comments/block.ts
function yt(e, s) {
  let n;
  ((se) => (se[se.Force = 0] = "Force", se[se.Inline = 1] = "Inline", se[se.Preserve = 2] = "Preserve"))(n || (n = {}));
  let { start: u, lexer: A, end: a, ender: C } = s, { rules: o, data: k } = r, f = [], t = N(), h = s.begin.replace(si, ai), V = t !== 4 ? h : `${s.begin}\\s*#`, le = new RegExp(`^(${V}\\s*esthetic-ignore-start)`), m = new RegExp(`^(${V}\\s*esthetic-ignore-next)`), p = new RegExp(r.crlf, "g"), w = new RegExp(`(${h})`), _ = t > 2 ? new RegExp(s.ender.replace(Ei, Qi)) : new RegExp(s.ender.replace(si, ai)), I = u, d = 0, l = 0, g = c, M = s.ender.length - 1, L = s.ender.charAt(M);
  function N() {
    return i(s.begin[0], 123) && i(s.begin[1], 37) ? e.slice(u + s.begin.length, e.indexOf("}", u)).join(c).trimStart().charCodeAt(0) === 35 ? 4 : 3 : s.begin === "/*" ? 2 : 1;
  }
  function S() {
    if (t !== 1)
      return !1;
    if (o.markup.commentDelimiters === "consistent")
      return i(g.slice(4).replace(Je, c), 10) ? [0, 0] : [1, 1];
    if (o.markup.commentDelimiters === "force")
      return [0, 0];
    if (o.markup.commentDelimiters === "inline" || o.markup.commentDelimiters === "inline-align")
      return [1, 1];
    if (o.markup.commentDelimiters === "preserve") {
      let O = [];
      return i(g.slice(4).replace(Je, c), 10) ? O.push(0) : O.push(1), g.slice(g.lastIndexOf(z) + 1).trimStart() === s.ender ? O.push(0) : O.push(1), O;
    }
  }
  function j() {
    if (t === 1 && o.markup.preserveComment === !1)
      if (o.markup.commentDelimiters === "consistent") {
        let O = e.slice(u + 4).join(c);
        O.slice(0, O.search(Lt)).indexOf(z) > -1 ? o.markup.commentIndent ? (g = g.replace(/^<!--\s*/, `<!--${z}  `), g = g.replace(/\s*-->$/, `${z}-->`)) : (g = g.replace(/^<!--\s*/, `<!--${z}`), g = g.replace(/\s*-->$/, `${z}-->`)) : (g = g.replace(/^<!--\s*/, "<!-- "), g = g.replace(/\s*-->$/, " -->"));
      } else if (o.markup.commentDelimiters === "force")
        o.markup.commentIndent ? (g = g.replace(/^<!--\s*/, `<!--${z}  `), g = g.replace(/\s*-->$/, `${z}-->`)) : (g = g.replace(/^<!--\s*/, `<!--${z}`), g = g.replace(/\s*-->$/, `${z}-->`));
      else if (o.markup.commentDelimiters === "inline" || o.markup.commentDelimiters === "inline-align")
        g = g.replace(/^<!--\s*/, "<!-- "), g = g.replace(/\s*-->$/, " -->");
      else {
        let O = e.slice(u + 4).join(c);
        O.slice(0, O.search(Lt)).indexOf(z) > -1 ? o.markup.commentIndent ? g = g.replace(/^<!--\s*/, `<!--${z}  `) : g = g.replace(/^<!--\s*/, `<!--${z}`) : g = g.replace(/^<!--\s*/, "<!-- ");
        let ke = O.indexOf(C);
        O.slice(O.lastIndexOf(z, ke) + 1, ke + 3).trimStart() === s.ender ? o.markup.commentIndent ? g = g.replace(/\s*-->$/, `${z}-->`) : g = g.replace(/\s*-->$/, `${z}-->`) : g = g.replace(/\s*-->$/, " -->");
      }
    return [g, I];
  }
  function D(O) {
    if (d = 0, o.wrap > 0)
      for (O.splice(0, 1, s.begin, O[0].replace(w, c).trim()), l = 1, d = 1; O[l] === c; )
        O.splice(l, 1);
    else {
      l = -1;
      do
        l = l + 1;
      while (O[l] === c || i(O[l], 35) && O[l].length === 1);
      O.splice(0, l);
    }
    for (let ke = O.length; d < ke; d++)
      T(O[d], 35) && O[d] !== c && (O[d] = `# ${O[d].trimEnd()}`);
    if (o.wrap > 0)
      O.push(`#${O.pop().trim().slice(1)}`, s.ender);
    else {
      O.splice(0, 0, s.begin), l = O.length;
      do
        l = l - 1;
      while (O[l] === c || i(O[l], 35) && O[l].length === 1);
      O.splice(l + 1, O.length - l), O.push(`#${O.pop().trim().slice(1)}`, s.ender);
    }
    return g = O.join(r.crlf), o.liquid.commentIndent === !1 && (g = g.replace(/^#/gm, " #")), [g, I];
  }
  function B() {
    let O = c;
    return g = f.join(c).replace(Ye, c), r.count > -1 && k.lines[r.count] > 0 && (d = e.lastIndexOf(z, r.iterator) + 1, d > 0 && (O = e.slice(d, r.iterator).join(c), O.trim() === c || (O = O.slice(0, O.search(Lt))), g = O + g)), [g, I];
  }
  function P() {
    let O = z;
    I = I + 1;
    do {
      if (f.push(e[I]), i(e[I], 10) && (r.lineOffset = r.lines(I, r.lineOffset)), e[I - 3] === "-" && e[I - 2] === "e" && e[I - 1] === "n" && e[I] === "d" && f.slice(f.length - 19).join(c) === "esthetic-ignore-end") {
        t === 3 && (l = e.indexOf("{", I), i(e[l + 1], 37) && (O = e.slice(l, e.indexOf("}", l) + 1).join(c), _.test(O) && (s.ender = O))), I = I + 1, O = c;
        break;
      }
      I = I + 1;
    } while (I < a);
    d = I, M = s.begin.length - 1, L = s.begin.charAt(M);
    do {
      if (t === 2 && i(e[d - 1], 47) && i(e[d], 42) || e[d] === L && e.slice(d - M, d + 1).join(c) === s.begin)
        break;
      d = d - 1;
    } while (d > u);
    if (t === 2 && i(e[d], 42) ? O = "*/" : O === c && t !== 2 && (O = s.ender), M = O.length - 1, L = O.charAt(M), T(O, 10) || T(e[I], 10))
      do {
        if (f.push(e[I]), i(O, 10) && i(e[I + 1], 10) || e[I] === L && e.slice(I - M, I + 1).join(c) === O)
          break;
        I = I + 1;
      } while (I < a);
    if (i(e[I], 10) && (I = I - 1), g = f.join(c).replace(We, c), ce(e[r.iterator - 1])) {
      let ke = e.lastIndexOf(z, r.iterator);
      ke > -1 && (g = e.slice(ke + 1, r.iterator).join(c) + g);
    }
    return [g, I];
  }
  function pe() {
    if (I === a)
      return !0;
    if (t === 3 && o.liquid.preserveComment || t === 4 && o.liquid.preserveComment || t === 1 && o.markup.preserveComment) {
      if (d = e.lastIndexOf(z, r.iterator) + 1, d > 0) {
        let O = e.slice(d, r.iterator).join(c);
        O.trim() === c || (O = O.slice(0, O.search(Lt))), g = O + g;
      }
      return !0;
    }
    if (t === 2 && A === "style" && o.style.preserveComment || t === 2 && A === "script" && o.script.preserveComment || t !== 3 && t !== 4 && g.length <= o.wrap && g.indexOf(z) < 0 || o.wrap < 1 && t === 3 && Ti.test(g) === !1)
      return !0;
    if (t === 4) {
      if (o.wrap > 0 && g.length >= o.wrap)
        return !1;
      if (ft.test(g)) {
        if (Pi.test(g))
          return !1;
        if (Wi.test(g) && g.slice(g.indexOf("#") + 1, g.lastIndexOf(z)).indexOf(z) < 0)
          return o.wrap > 0 ? g = g.replace(Kt, c).replace(Rt, "$1 # ").replace(At, "# ").replace(qt, " $2") : g = g.replace(Kt, c).replace(Rt, "$1 ").replace(At, "# ").replace(qt, " $2"), !0;
      } else
        return o.wrap > 0 ? g = g.replace(Rt, "$1 # ").replace(At, "# ").replace(qt, " $2") : g = g.replace(Rt, "$1 ").replace(At, "# ").replace(qt, " $2"), !0;
      return !1;
    }
    return o.wrap > 0 && g.length <= o.wrap && g.slice(5, -4).indexOf(z) < 0 || o.wrap < 1 && t !== 3 && g.slice(5, -4).indexOf(z) < 0 || t === 2 && g.indexOf(z) > 0 && g.replace(z, c).indexOf(z) > 0 && Ai.test(g) === !1;
  }
  function ge() {
    let O = [], ke = 0;
    if (d = u, d > 0 && T(e[d - 1], 10) && ce(e[d - 1]))
      do
        d = d - 1;
      while (d > 0 && T(e[d - 1], 10) && ce(e[d - 1]));
    let K = new RegExp(`
${e.slice(d, u).join(c)}`, "g");
    return g = g.replace(p, z).replace(K, z), O = g.split(z), ke = O.length, O[0] = O[0].replace(w, c), O[ke - 1] = O[ke - 1].replace(_, c), t === 4 && o.wrap < 1 ? (O = O.map((se) => se.replace(/^#\s*/m, c).trimStart()), D(O)) : (ke < 2 && (O = O[0].split(ee)), t === 3 ? O[0] === c ? O[0] = s.begin : O.splice(0, 0, s.begin) : O[0] === c ? O[0] = s.begin : O.splice(0, 0, s.begin), ke = O.length, t === 1 ? ue(O, ke - 1) : Ce(O, ke));
  }
  function ue(O, ke) {
    let K = [O.shift()], se = c, J = 0;
    o.markup.commentDelimiters === "inline-align" ? se = "     " : o.markup.commentIndent && (se = "  ");
    let $e = !1, $ = 0;
    do {
      if (rt.test(O[J]) === !0 || O[J] === c)
        $ = $ + 1, $ <= o.preserveLine && K.push(z);
      else if ($e)
        K.push(O[J].replace(Ye, c), z);
      else {
        let G = J === 0 ? O[J].trimStart().replace(Ye, c) : O[J].trim();
        if (/<\/?[a-zA-Z]|{{|{%/.test(G))
          $e = !0, K.push(O[J].replace(Ye, c));
        else if (o.wrap > 0 && G.length > o.wrap) {
          let oe = G.replace(Ri, " ").split(ee).concat(z);
          for (let ne = 0, Y = 0, F = 0, H = oe.length; ne < H; ne++)
            F += oe[ne].length + 1, (F > o.wrap || ne + 1 === H) && (K.push(se + oe.slice(Y, ne).join(ee) + z), Y = ne, F = 0);
        } else
          K.push(`${se}${G}${z}`);
      }
      J = J + 1;
    } while (J < ke);
    return g = K.join(c) + ee + s.ender, j();
  }
  function Ce(O, ke) {
    let K = [], se = 0, J = 0, $e, $, G = !1, oe = !1, ne = !1, Y = !1;
    d = 0;
    do {
      if ($ = d < ke - 1 ? O[d + 1].replace(Je, c) : c, rt.test(O[d]) === !0 || O[d] === c) {
        if (rt.test(O[d + 1]) === !0 || O[d + 1] === c)
          do
            d = d + 1;
          while (d < ke && (rt.test(O[d + 1]) === !0 || O[d + 1] === c));
        d < ke - 1 && K.push(c);
      } else if ($e = O[d].replace(Je, c), o.wrap > 0 && $e.length > o.wrap && $e.indexOf(ee) > o.wrap)
        O[d] = $e, l = O[d].indexOf(ee), K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), d = d - 1;
      else {
        if (t === 2 && O[d].indexOf("/*") !== 0 ? O[d] = Yt + O[d].replace(Je, c).replace(Ye, c).replace(Xe, ee) : O[d] = O[d].replace(Je, c).replace(Ye, c), J = d < 1 ? o.wrap - (s.begin.length + 1) : o.wrap, se = O[d].replace(ct, c).indexOf(ee), l = O[d].length, l > J && se > 0 && se < J) {
          l = J;
          do
            if (l = l - 1, ce(O[d].charAt(l)) && l <= o.wrap)
              break;
          while (l > 0);
          Dt.test(O[d]) === !0 && Dt.test(O[d + 1]) === !1 && O.splice(d + 1, 0, "1. "), l < 4 ? (K.push(O[d]), Y = !0) : d === ke - 1 && (K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), Y = !0, d = d - 1), rt.test(O[d + 1]) === !0 || O[d + 1] === c ? (K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), G = !0, d = d - 1) : ji.test(O[d + 1]) ? (K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), oe = !0, d = d - 1) : Dt.test(O[d + 1]) ? (K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), ne = !0, d = d - 1) : O[d + 1].slice(0, 4) === Wt || l + $.length > o.wrap && $.indexOf(ee) < 0 ? (K.push(O[d].slice(0, l)), O[d] = O[d].slice(l + 1), Y = !0, d = d - 1) : O[d].replace(Je, c).indexOf(ee) < o.wrap && (O[d].length > o.wrap ? O[d + 1] = `${O[d].slice(l + 1)}${r.crlf}${O[d + 1]}` : O[d + 1] = `${O[d].slice(l + 1)} ${O[d + 1]}`), G === !1 && oe === !1 && ne === !1 && Y === !1 && (O[d] = O[d].slice(0, l));
        } else
          O[d + 1] !== void 0 && t < 3 && (O[d].length + $.indexOf(ee) > o.wrap && $.indexOf(ee) > 0 || O[d].length + $.length > o.wrap && $.indexOf(ee) < 0) ? (K.push(O[d]), o.wrap > 0 && (d = d + 1), o.wrap < 1 && t === 3 && (d = d + 1), G = !0) : O[d + 1] !== void 0 && rt.test(O[d + 1]) === !1 && O[d + 1] !== c && O[d + 1].slice(0, 4) !== Wt && ti.test(O[d + 1]) === !1 && (t === 3 ? K.push(O[d]) : O[d + 1] = `${O[d]} ${O[d + 1]}`, G = !0);
        Y === !1 && oe === !1 && ne === !1 && (G === !0 ? G = !1 : /^\s*(\*|-|(\d+\.))\s*$/.test(O[d]) === !1 && (d < ke - 1 && O[d + 1] !== c && rt.test(O[d]) === !1 && O[d + 1].slice(0, 4) !== Wt && ti.test(O[d + 1]) === !1 ? (O[d] = `${O[d]} ${O[d + 1]}`, O.splice(d + 1, 1), ke = ke - 1, d = d - 1) : t === 2 && O[d].indexOf("/*") !== 0 ? K.push(Yt + O[d].replace(Je, c).replace(Ye, c).replace(Xe, ee)) : K.push(O[d].replace(Je, c).replace(Ye, c).replace(Xe, ee)))), Y = !1, oe = !1, ne = !1;
      }
      d = d + 1;
    } while (d < ke);
    let F = S();
    if (K && K.length > 0)
      if (F)
        F[0] === 1 ? o.markup.commentIndent ? o.markup.commentDelimiters === "inline-align" ? g = `${K[0]} ${K.slice(1).join(r.crlf + "     ")}` : g = `${K[0]} ${K.slice(1).join(r.crlf + "  ")}` : g = `${K[0]} ${K.slice(1).join(r.crlf)}` : o.markup.commentIndent ? g = `${K[0] + z}  ${K.slice(1).join(r.crlf + "  ")}` : g = `${K[0] + z}  ${K.slice(1).join(r.crlf)}`, F[1] === 1 ? g += ` ${s.ender}` : g += z + s.ender;
      else {
        if (t !== 4 && t !== 3 && K[K.length - 1].length > o.wrap - (s.ender.length + 1))
          K.push(s.ender);
        else if (t === 3)
          K.push(s.ender);
        else {
          if (t === 4)
            return D(K);
          K[K.length - 1] = `${K[K.length - 1]} ${s.ender}`;
        }
        g = K.join(z);
      }
    else
      F ? (F[0] === 1 ? o.markup.commentIndent ? o.markup.commentDelimiters === "inline-align" ? g = `${O[0]} ${O.slice(1).join(r.crlf + "     ")}` : g = `${O[0]} ${O.slice(1).join(r.crlf + "  ")}` : g = `${O[0]} ${O.slice(1).join(r.crlf)}` : o.markup.commentIndent ? g = `${O[0] + z}  ${O.slice(1).join(r.crlf + "  ")}` : g = O.join(z), F[1] === 1 ? g += ` ${s.ender}` : g += z + s.ender) : (ke = O.length - 1, O[ke] = O[ke] + s.ender, g = O.join(z));
    return [g, I];
  }
  do {
    if (i(e[I], 10) && (r.lineOffset = r.lines(I, r.lineOffset)), i(e[I], 35) && t === 4 && o.liquid.preserveComment === !1 && o.wrap > 0 && f.slice(f.lastIndexOf(z)).join(c).trim() === c ? f.push(ee) : f.push(e[I]), e[I] === L && e.slice(I - M, I + 1).join(c) === s.ender) {
      t === 4 && i(e[I - 2], 45) && (s.ender = "-%}", _ = new RegExp(s.ender)), g = f.join(c);
      break;
    }
    I = I + 1;
  } while (I < a);
  return le.test(g) ? P() : m.test(g) ? B() : pe() ? j() : ge();
}

// src/comments/line.ts
function Qt(e) {
  let { wrap: s } = r.rules, { preserveComment: n } = r.rules[r.lexer], u = e.start, A = 0, a = c, C = [];
  function o() {
    let f = c;
    do
      if (A = A + 1, i(e.chars[A + 1], 10))
        return;
    while (A < e.end && ce(e.chars[A]));
    if (e.chars[A] + e.chars[A + 1] === "//") {
      C = [];
      do
        C.push(e.chars[A]), A = A + 1;
      while (A < e.end && T(e.chars[A], 10));
      f = C.join(c), /^\/\/ (?:[*-]|\d+\.)/.test(f) === !1 && /^\/\/\s*$/.test(f) === !1 && (a = `${a} ${f.replace(/(^\/\/\s*)/, c).replace(We, c)}`, u = A - 1, o());
    }
  }
  function k() {
    let f = [], t = {
      ender: -1,
      types: "comment",
      lexer: e.lexer,
      lines: r.lineOffset
    };
    r.count > -1 ? (t.begin = r.stack.index, t.stack = r.stack.token, t.token = r.data.token[r.count]) : (t.begin = -1, t.stack = "global", t.token = c);
    let h = 0, V = 0;
    if (a = a.replace(/\s+/g, ee).replace(We, c), V = a.length, !(s > V)) {
      do {
        if (h = s, T(a[h], 32)) {
          do
            h = h - 1;
          while (h > 0 && T(a[h], 32));
          if (h < 3) {
            h = s;
            do
              h = h + 1;
            while (h < V - 1 && T(a[h], 32));
          }
        }
        f.push(a.slice(0, h)), a = `// ${a.slice(h).replace(ct, c)}`, V = a.length;
      } while (s < V);
      h = 0, V = f.length;
      do
        t.token = f[h], r.push(r.data, t, c), t.lines = 2, r.lineOffset = 2, h = h + 1;
      while (h < V);
    }
  }
  do
    C.push(e.chars[u]), u = u + 1;
  while (u < e.end && T(e.chars[u], 10));
  if (u === e.end ? e.chars.push(z) : u = u - 1, a = C.join(c).replace(We, c), Mt.test(a) === !0) {
    let f = z;
    u = u + 1;
    do
      C.push(e.chars[u]), u = u + 1;
    while (u < e.end && (T(e.chars[u - 1], 100) || i(e.chars[u - 1], 100) && C.slice(C.length - 19).join(c) !== "esthetic-ignore-end"));
    A = u;
    do
      ;
    while (A > e.start && i(e.chars[A - 1], 47) && (i(e.chars[A], 42) || i(e.chars[A], 47)));
    if (i(e.chars[A], 42) && (f = "*/"), f !== z || T(e.chars[u], 10))
      do {
        if (C.push(e.chars[u]), f === z && i(e.chars[u + 1], 10))
          break;
        u = u + 1;
      } while (u < e.end && (f === z || f === "*/" && (i(e.chars[u - 1], 42) || i(e.chars[u], 47))));
    return e.chars[u] === z && (u = u - 1), a = C.join(c).replace(We, c), [a, u];
  }
  return a === "//" || n === !0 ? [a, u] : (a = a.replace(/(\/\/\s*)/, "// "), s < 1 || u === e.end - 1 && r.data.begin[r.count] < 1 ? [a, u] : (A = u + 1, o(), k(), [a, u]));
}

// src/rules/definitions.ts
var bi = {
  global: {
    preset: {
      description: "Use preset style guide as the base defaults",
      default: "default",
      type: "choice",
      values: [
        {
          rule: "default",
          description: "This is the default and the most unobtrusive."
        },
        {
          rule: "recommended",
          description: "This style guide is typically suited for most cases"
        },
        {
          rule: "strict",
          description: "This is a strict ruleset curated by the projects author."
        },
        {
          rule: "warrington",
          description: "This style guide preset is best suited for Shopify theme developers"
        },
        {
          rule: "prettier",
          description: "This preset replicates the Prettier style"
        }
      ]
    },
    correct: {
      default: !1,
      description: "Automatically correct some sloppiness in code.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    crlf: {
      description: "If line termination should be Windows (CRLF) format. Unix (LF) format is the default.",
      type: "boolean",
      default: !1,
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    endNewline: {
      description: "Insert an empty line at the end of output.",
      type: "boolean",
      default: !1,
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    indentSize: {
      description: "The number of character values to comprise a single indentation.",
      type: "number",
      default: 2,
      preset: {
        default: 2,
        prettier: 2,
        recommended: 2,
        strict: 2,
        warrington: 2
      }
    },
    indentChar: {
      description: "The string characters to comprise a single indentation. Any string combination is accepted.",
      type: "string",
      default: " ",
      preset: {
        default: " ",
        prettier: " ",
        recommended: " ",
        strict: " ",
        warrington: " "
      }
    },
    indentLevel: {
      default: 0,
      type: "number",
      description: "How much indentation padding should be applied to beautification? This is typically used internally",
      preset: {
        default: 0,
        prettier: 0,
        recommended: 0,
        strict: 0,
        warrington: 0
      }
    },
    language: {
      description: "The language name",
      type: "choice",
      default: "auto",
      values: [
        {
          rule: "auto",
          description: "Detect Language"
        },
        {
          rule: "text",
          description: "Plain Text"
        },
        {
          rule: "html",
          description: "HTML"
        },
        {
          rule: "liquid",
          description: "HTML + Liquid"
        },
        {
          rule: "javascript",
          description: "JavaScript"
        },
        {
          rule: "jsx",
          description: "JSX"
        },
        {
          rule: "typescript",
          description: "TypeScript"
        },
        {
          rule: "tsx",
          description: "TSX"
        },
        {
          rule: "json",
          description: "JSON"
        },
        {
          rule: "css",
          description: "CSS"
        },
        {
          rule: "scss",
          description: "SCSS"
        },
        {
          rule: "less",
          description: "LESS"
        },
        {
          rule: "xml",
          description: "XML"
        }
      ]
    },
    preserveLine: {
      default: 2,
      description: "The maximum number of consecutive empty lines to retain.",
      type: "number",
      preset: {
        default: 2,
        prettier: 2,
        recommended: 3,
        strict: 1,
        warrington: 3
      }
    },
    wrap: {
      default: 0,
      description: "Character width limit before applying word wrap. A 0 value disables this option. A negative value concatenates script strings.",
      type: "number",
      preset: {
        default: 0,
        prettier: 80,
        recommended: 120,
        strict: 0,
        warrington: 100
      }
    },
    wrapFraction: {
      default: 0,
      description: "Wrap fraction is used on internal structures as a secondary point of control. By default, it will use a 75% metric according to `wrap` defined values.",
      type: "number",
      preset: {
        default: 0,
        prettier: 80,
        recommended: 80,
        strict: 80,
        warrington: 0
      }
    }
  },
  liquid: {
    commentNewline: {
      default: !1,
      description: "If a blank new line should be forced above comments.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    commentIndent: {
      default: !1,
      description: "This will determine whether comments should always start at position 0 of each line or if comments should be indented according to the code.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    delimiterTrims: {
      default: "preserve",
      description: "How delimiter whitespace trim dashes should handled on Liquid tokens. You should avoid setting this to force in order to avoid stripping whitespace between text content.",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "All trim dash occurances of trims intact"
        },
        {
          rule: "never",
          description: "Removes all trim dash occurances for tags and output tokens"
        },
        {
          rule: "always",
          description: "Applies trime dashes to all tags and output tokens"
        },
        {
          rule: "tags",
          description: "Applies trim dashes to tags tokens only"
        },
        {
          rule: "outputs",
          description: "Applies trim dashes to output object tokens only"
        },
        {
          rule: "multiline",
          description: "Applies trim dashes to multline token expressions only"
        }
      ],
      preset: {
        default: "preserve",
        prettier: "preserve",
        recommended: "preserve",
        strict: "multiline",
        warrington: "preserve"
      }
    },
    ignoreTagList: {
      default: [],
      description: "A list of liquid tag to ignore",
      type: "array",
      preset: {
        default: [],
        prettier: ["javascript", "capture"],
        recommended: ["javascript"],
        strict: [],
        warrington: []
      }
    },
    indentAttribute: {
      default: !1,
      description: "Whether or not markup tags with Liquid contained attributes should apply indentation",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !1,
        warrington: !0
      }
    },
    paddedTagList: {
      default: [],
      description: "A list of liquid tag to enforce newlines before and after",
      type: "array",
      preset: {
        default: [],
        prettier: [],
        recommended: [],
        strict: [],
        warrington: []
      }
    },
    preserveComment: {
      default: !1,
      description: "Prevent comment reformatting due to option wrap.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    normalizeSpacing: {
      default: !0,
      description: "Whether or not to normalize the distributed spacing contained in Liquid tokens.",
      type: "boolean",
      preset: {
        default: !0,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    lineBreakSeparator: {
      default: "default",
      description: "Controls the placement of Liquid tag separator type characters in newline structures.",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "Leave line break character intace"
        },
        {
          rule: "before",
          description: "Place line break character at the start of expressions"
        },
        {
          rule: "after",
          description: "Place line break character at the end of expressions"
        }
      ],
      preset: {
        default: "preserve",
        prettier: "after",
        recommended: "before",
        strict: "before",
        warrington: "after"
      }
    },
    dedentTagList: {
      default: [],
      description: "List of tags which will have their inner contents excluded from indentation",
      type: "array",
      preset: {
        default: [],
        prettier: ["schema"],
        recommended: [],
        strict: [],
        warrington: []
      }
    },
    forceArgument: {
      default: 0,
      description: "Forces arguments onto newlines. When this value is `0` then arguments will be forced according to wrap fraction limit.",
      type: "number",
      preset: {
        default: 0,
        prettier: 0,
        recommended: 3,
        strict: 3,
        warrington: 0
      }
    },
    forceFilter: {
      default: 0,
      description: "Forces filter pipes onto newlines. When this value is `0` then filters will be forced according to wrap fraction limit.",
      type: "number",
      preset: {
        default: 0,
        prettier: 0,
        recommended: 5,
        strict: 4,
        warrington: 0
      }
    },
    delimiterPlacement: {
      default: "preserve",
      description: "Controls the placement of Liquid delimiters",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "Preserve delimiters"
        },
        {
          rule: "default",
          description: "Use defaults"
        },
        {
          rule: "consistent",
          description: "Place line break character at the start of expressions"
        },
        {
          rule: "inline",
          description: "Place line break character at the end of expressions"
        },
        {
          rule: "force-inline",
          description: "Place line break character at the end of expressions"
        },
        {
          rule: "force-multiline",
          description: "Place line break character at the end of expressions"
        }
      ],
      preset: {
        default: "preserve",
        prettier: "default",
        recommended: "consistent",
        strict: "force-multiline",
        warrington: "consistent"
      }
    },
    quoteConvert: {
      description: "If the quotes should be converted to single quotes or double quotes.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "single",
          description: "Converts double quotes to single quotes"
        },
        {
          rule: "double",
          description: "Converts single quotes to double quotes"
        }
      ],
      preset: {
        default: "none",
        prettier: "double",
        recommended: "single",
        strict: "single",
        warrington: "single"
      }
    }
  },
  markup: {
    attributeSort: {
      default: !1,
      description: "Alphanumerically sort markup attributes. Attribute sorting is ignored on tags that contain attributes template attributes.",
      type: {
        array: "A list of attributes to begin sorting order with",
        boolean: "Whether or not to apply alphanumeric sorting"
      },
      preset: {
        default: !1,
        prettier: !1,
        recommended: !0,
        strict: [
          "id",
          "class",
          "type",
          "name",
          "value"
        ],
        warrington: !1
      }
    },
    attributeCasing: {
      default: "preserve",
      description: "Controls the casing of attribute values and keys.",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "All tag attribute keys/values are preserved and left intact."
        },
        {
          rule: "lowercase",
          description: "All tag attribute keys/values are converted to lowercase"
        },
        {
          rule: "lowercase-name",
          description: "Only attribute keys are converted to lowercase"
        },
        {
          rule: "lowercase-value",
          description: "Only attribute values are converted to lowercase"
        }
      ],
      preset: {
        default: "preserve",
        prettier: "preserve",
        recommended: "lowercase-name",
        strict: "lowercase-name",
        warrington: "preserve"
      }
    },
    commentDelimiters: {
      default: "preserve",
      description: "Controls the formatting style of HTML and XML comment delimiters.",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "All comment delimiters are left intact"
        },
        {
          rule: "consistent",
          description: "Force or inline based on the starting comment delimiter placement"
        },
        {
          rule: "force",
          description: "Comment delimiters will be forced onto newlines"
        },
        {
          rule: "inline",
          description: "Comment delimiter will be inlined"
        },
        {
          rule: "inline-align",
          description: "Comment delimiters will be inlined and any newline occurances will apply aligned indentation."
        }
      ],
      preset: {
        default: "preserve",
        prettier: "consistent",
        recommended: "preserve",
        strict: "force",
        warrington: "consistent"
      }
    },
    commentNewline: {
      default: !1,
      description: "If a blank new line should be forced above comments.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !0,
        strict: !0,
        warrington: !1
      }
    },
    commentIndent: {
      default: !1,
      description: "This will determine whether comments should always start at position 0 of each line or if comments should be indented according to the code.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    delimiterTerminus: {
      description: "Whether or not ending HTML tag delimiters should be forced onto a newline. This will emulate the style of Prettier's singleAttributePerLine formatting option, wherein the last > delimiter character breaks itself onto a new line",
      default: "inline",
      type: "choice",
      values: [
        {
          rule: "inline",
          description: "Inline the ending delimiter"
        },
        {
          rule: "force",
          description: "Force the ending delimiter onto its own line"
        },
        {
          rule: "adapt",
          description: "Adapt the delimiter in accordance with structure"
        }
      ],
      preset: {
        default: "inline",
        prettier: "force",
        recommended: "adapt",
        strict: "adapt",
        warrington: "adapt"
      }
    },
    forceAttribute: {
      default: !1,
      description: "If all markup attributes should be indented each onto their own line. This option accepts either a boolean or number value, depending on your preferences you can either force attributes based a count limit, disable forcing or always enable enforcing.",
      type: {
        number: "Optionally define an attribute force threshold. When the number of attributes exceeds this limit then they will be forced, otherwise they will be left intact.",
        boolean: "Whether or not to enforce the rule. A value of true will always force attributes, whereas a value of false will never force attributes."
      },
      preset: {
        default: !1,
        prettier: 1,
        recommended: 2,
        strict: 2,
        warrington: 2
      }
    },
    forceIndent: {
      default: !1,
      description: "Will force indentation upon all content and tags without regard for the creation of new text nodes.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    ignoreJS: {
      default: !0,
      description: "Whether to ignore embedded regions of tags identified to contain JavaScript",
      type: "boolean",
      preset: {
        default: !0,
        prettier: !0,
        recommended: !0,
        strict: !1,
        warrington: !1
      }
    },
    ignoreCSS: {
      default: !1,
      description: "Whether to ignore embedded regions of tags identified to contain CSS",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    ignoreJSON: {
      default: !1,
      description: "Whether HTML <script> tags annotated with a JSON identifiable attribute should be ignored from beautification.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    preserveAttribute: {
      default: !1,
      description: "If markup tags should have their insides preserved. This option is only available to markup and does not support child tokens that require a different lexer.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    preserveComment: {
      default: !1,
      description: "Prevent comment reformatting due to option wrap.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    preserveText: {
      default: !1,
      description: "If text in the provided markup code should be preserved exactly as provided. This option eliminates beautification and wrapping of text content.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    lineBreakValue: {
      default: "preserve",
      description: "Determines how \xC6sthetic should handle line break occurance sequences within attribute values",
      type: "choice",
      values: [
        {
          rule: "preserve",
          description: "Preserve the supplied value structure sequences"
        },
        {
          rule: "align",
          description: "Align all line breaks to the starting point of attribute name"
        },
        {
          rule: "indent",
          description: "Indent all line breaks from the starting point of attribute name"
        },
        {
          rule: "force-preserve",
          description: "Force encapsulated values onto newlines but preserve inner contents"
        },
        {
          rule: "force-align",
          description: "Force encapsulated values onto newlines and apply aligned formatting"
        },
        {
          rule: "force-indent",
          description: "Force encapsulated values onto newlines and apply indentation formatting"
        }
      ],
      preset: {
        default: "preserve",
        prettier: "indent",
        recommended: "force-indent",
        strict: "force-indent",
        warrington: "force-indent"
      }
    },
    selfCloseSpace: {
      default: !1,
      description: 'Markup self-closing tags end will end with " />" instead of "/>".',
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !1,
        strict: !1,
        warrington: !1
      }
    },
    selfCloseSVG: {
      default: !0,
      description: "Whether or not SVG type tags should be converted to self closing void types.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !1,
        recommended: !0,
        strict: !0,
        warrington: !0
      }
    },
    stripAttributeLines: {
      default: !1,
      description: "Whether or not newlines contained within tag attributes should be removed or preserved.",
      type: "boolean",
      preset: {
        default: !1,
        prettier: !0,
        recommended: !0,
        strict: !0,
        warrington: !1
      }
    },
    quoteConvert: {
      description: "If the quotes should be converted to single quotes or double quotes.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "single",
          description: "Converts double quotes to single quotes"
        },
        {
          rule: "double",
          description: "Converts single quotes to double quotes"
        }
      ],
      preset: {
        default: "none",
        prettier: "double",
        recommended: "double",
        strict: "double",
        warrington: "double"
      }
    }
  },
  style: {
    classPadding: {
      description: "Inserts new line characters between every CSS code block.",
      default: !1,
      type: "boolean"
    },
    commentNewline: {
      default: !1,
      description: "If a blank new line should be forced above comments.",
      type: "boolean"
    },
    commentIndent: {
      default: !1,
      description: "This will determine whether comments should always start at position 0 of each line or if comments should be indented according to the code.",
      type: "boolean"
    },
    sortSelectors: {
      default: !1,
      type: "boolean",
      description: "If comma separated CSS selectors should present on a single line of code."
    },
    sortProperties: {
      description: "This option will alphabetically sort CSS properties contained within classes.",
      default: !1,
      type: "boolean"
    },
    noLeadZero: {
      description: "This will eliminate leading zeros from numbers expressed within values.",
      default: !1,
      type: "boolean"
    },
    preserveComment: {
      default: !1,
      description: "Prevent comment reformatting due to option wrap.",
      type: "boolean"
    },
    atRuleSpace: {
      default: !0,
      description: "Insert a single whitespace character betwen @ rules.",
      type: "boolean"
    },
    quoteConvert: {
      description: "If the quotes should be converted to single quotes or double quotes.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "single",
          description: "Converts double quotes to single quotes"
        },
        {
          rule: "double",
          description: "Converts single quotes to double quotes"
        }
      ]
    }
  },
  json: {
    arrayFormat: {
      description: "Determines if all array indexes should be indented, never indented, or left to the default",
      type: "choice",
      default: "default",
      values: [
        {
          rule: "default",
          description: "Default formatting"
        },
        {
          rule: "indent",
          description: "Always indent each index of an array"
        },
        {
          rule: "inline",
          description: "Ensure all array indexes appear on a single line"
        }
      ]
    },
    braceAllman: {
      default: !1,
      description: 'Determines if opening curly braces will exist on the same line as their condition or be forced onto a new line, otherwise known as "Allman Style" indentation.',
      type: "boolean"
    },
    bracePadding: {
      default: !1,
      description: "This will create a newline before and after objects values",
      type: "boolean"
    },
    objectIndent: {
      description: "This option will alphabetically sort object properties in JSON objects",
      type: "choice",
      default: "default",
      values: [
        {
          rule: "default",
          description: "Default formatting"
        },
        {
          rule: "indent",
          description: "Always indent each index of an array"
        },
        {
          rule: "inline",
          description: "Ensure all array indexes appear on a single line"
        }
      ]
    },
    objectSort: {
      default: !1,
      description: "This option will alphabetically sort object properties in JSON objects",
      type: "boolean"
    }
  },
  script: {
    arrayFormat: {
      description: "Determines if all array indexes should be indented, never indented, or left to the default",
      type: "choice",
      default: "default",
      values: [
        {
          rule: "default",
          description: "Default formatting"
        },
        {
          rule: "indent",
          description: "Always indent each index of an array"
        },
        {
          rule: "inline",
          description: "Ensure all array indexes appear on a single line"
        }
      ]
    },
    braceAllman: {
      default: !1,
      description: 'Determines if opening curly braces will exist on the same line as their condition or be forced onto a new line, otherwise known as "Allman Style" indentation.',
      type: "boolean"
    },
    bracePadding: {
      default: !1,
      description: "This will create a newline before and after objects values",
      type: "boolean"
    },
    braceNewline: {
      default: !1,
      description: "If true an empty line will be inserted after opening curly braces and before closing curly braces.",
      type: "boolean"
    },
    braceStyle: {
      default: "none",
      description: "Emulates JSBeautify's brace_style option using existing Prettify options",
      type: "choice",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "collapse",
          description: "Sets formatObject to indent and neverflatten to true."
        },
        {
          rule: "collapse-preserve-inline",
          description: "Sets formatObject to inline and bracePadding to true"
        },
        {
          rule: "expand",
          description: "Sets objectIndent to indent and braceNewline + neverflatten to true."
        }
      ]
    },
    caseSpace: {
      default: !1,
      type: "boolean",
      description: "If the colon separating a case's expression (of a switch/case block) from its statement should be followed by a space instead of indentation thereby keeping the case on a single line of code."
    },
    commentNewline: {
      default: !1,
      description: "If a blank new line should be forced above comments.",
      type: "boolean"
    },
    commentIndent: {
      default: !1,
      description: "This will determine whether comments should always start at position 0 of each line or if comments should be indented according to the code.",
      type: "boolean"
    },
    elseNewline: {
      default: !1,
      type: "boolean",
      description: 'If keyword "else" is forced onto a new line.'
    },
    endComma: {
      description: "If there should be a trailing comma in arrays and objects.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignore this option"
        },
        {
          rule: "always",
          description: "Always ensure there is a tailing comma"
        },
        {
          rule: "never",
          description: "Remove trailing commas"
        }
      ]
    },
    objectSort: {
      default: !1,
      description: "This option will alphabetically sort object properties in JSON objects",
      type: "boolean"
    },
    objectIndent: {
      description: "This option will alphabetically sort object properties in JSON objects",
      type: "choice",
      default: "default",
      values: [
        {
          rule: "default",
          description: "Default formatting"
        },
        {
          rule: "indent",
          description: "Always indent each index of an array"
        },
        {
          rule: "inline",
          description: "Ensure all array indexes appear on a single line"
        }
      ]
    },
    functionSpace: {
      default: !0,
      type: "boolean",
      description: "Inserts a space following the function keyword for anonymous functions."
    },
    functionNameSpace: {
      default: !0,
      type: "boolean",
      description: "If a space should follow a JavaScript function name."
    },
    methodChain: {
      default: -1,
      description: "When to break consecutively chained methods and properties onto separate lines. A negative value disables this option. A value of 0 ensures method chainsare never broken.",
      type: "number"
    },
    preserveComment: {
      default: !1,
      description: "Prevent comment reformatting due to option wrap.",
      type: "boolean"
    },
    ternaryLine: {
      description: "If ternary operators in JavaScript `?` and `:` should remain on the same line.",
      type: "boolean",
      default: !1
    },
    neverFlatten: {
      default: !0,
      description: "If destructured lists in script should never be flattend.",
      type: "boolean"
    },
    noCaseIndent: {
      description: "If the colon separating a case's expression (of a switch/case block) from its statement should be followed by a space instead of indentation, thereby keeping the case on a single line of code.",
      default: !1,
      type: "boolean"
    },
    noSemicolon: {
      description: "Removes semicolons that would be inserted by ASI. This option is in conflict with option `attemptCorrection` and takes precedence over conflicting features. Use of this option is a possible security/stability risk.",
      default: !1,
      type: "boolean"
    },
    quoteConvert: {
      description: "If the quotes should be converted to single quotes or double quotes.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "single",
          description: "Converts double quotes to single quotes"
        },
        {
          rule: "double",
          description: "Converts single quotes to double quotes"
        }
      ]
    },
    variableList: {
      description: "If consecutive JavaScript variables should be merged into a comma separated list or if variables in a list should be separated. each \u2014 Ensure each reference is a single declaration statement.",
      type: "choice",
      default: "none",
      values: [
        {
          rule: "none",
          description: "Ignores this option"
        },
        {
          rule: "each",
          description: "Ensure each reference is a single declaration statement"
        },
        {
          rule: "list",
          description: "Ensure consecutive declarations are a comma separated list"
        }
      ]
    },
    vertical: {
      description: "If lists of assignments and properties should be vertically aligned",
      type: "boolean",
      default: !1
    }
  }
};

// src/parse/external.ts
function Ht(e, s, n) {
  if (s === "html") {
    if (!(e in we.html.embed))
      return !1;
    let u = we.html.embed[e];
    if (u.attr.size > 0)
      for (let A of u.attr.values()) {
        if (!n)
          return A;
        if (A.attr.has(n[0]) && A.attr.get(n[0]).value.has(n[1]))
          return A.attr.get(n[0]);
      }
    return u.attr.has(n[0]) ? u.attr.get(n[0]).attr.has(n[1]) ? u.attr.get(n[0]).attr.get(n[1]) : u.attr.get(n[0]) : u;
  } else if (s === "liquid") {
    if (!(e in we.liquid.embed))
      return !1;
    let u = we.liquid.embed[e];
    if (u.args.size > 0 && n) {
      let A = n.slice(n.indexOf(e) + e.length).match(/\s*(.*)(?=\s)/)[0];
      for (let [a, C] of u.args) {
        if (a.has(A))
          return C;
        for (let o of a)
          if (Bt(o) && o.test(A))
            return C;
      }
    }
    return u;
  }
}

// src/lexical/liquid.ts
function Yi(e, s) {
  let n = i(e[2], 45) ? 3 : 2, u = e.slice(n), A;
  return s.delimiterTrims === "never" ? A = `{${e[1]}` : s.delimiterTrims === "always" || s.delimiterTrims === "outputs" && i(e[1], 123) || s.delimiterTrims === "tags" && i(e[1], 37) ? A = `{${e[1]}-` : A = e.slice(0, n), s.delimiterPlacement === "preserve" ? A += /^\s*\n/.test(u) ? z : ee : s.delimiterPlacement === "force" ? A += z : s.delimiterPlacement === "inline" || s.delimiterPlacement === "default" || s.delimiterPlacement === "force-multiline" ? A += ee : s.delimiterPlacement === "consistent" && (/^\s*\n/.test(u) ? A += z : A += ee), A + u.trim();
}
function Ft(e, s, n = ee) {
  let { delimiterTrims: u, delimiterPlacement: A } = r.rules.liquid, [a, C] = en(e), o, k = e.slice(a, C), f;
  return u === "never" ? (o = `{${e[1]}`, f = `${e[e.length - 2]}}`) : u === "always" || u === "outputs" && i(e[1], 123) || u === "tags" && i(e[1], 37) ? (o = `{${e[1]}-`, f = `-${e[e.length - 2]}}`) : (o = e.slice(0, a), f = e.slice(C)), s || (s = k.trimStart().split(/\s/)[0] || ""), s === "else" || s === "break" || s === "continue" || s === "increment" || s === "decrement" || s.startsWith("end") ? (o += n, f = n + f) : A === "preserve" ? (o += /^\s*\n/.test(k) ? z : n, f = (/\s*\n\s*$/.test(k) ? z : n) + f) : s === "#" && A === "force-multiline" ? /\n{2,}/g.test(k.trim()) ? (o += z, f = z + f) : (o += n, f = n + f) : A === "force" ? (o += z, f = z + f) : A === "inline" || A === "default" || A === "force-multiline" ? (o += n, f = n + f) : A === "consistent" && (/^\s*\n/.test(k) ? (o += z, f = z + f) : (o += n, f = n + f)), o + k.trim() + f;
}
function Ki(e, s, n, {
  wrapFraction: u,
  liquid: {
    forceFilter: A,
    forceArgument: a,
    lineBreakSeparator: C,
    delimiterTrims: o,
    delimiterPlacement: k
  }
}) {
  let [f, t] = en(e), h, V;
  if (o === "never" ? (h = `{${e[1]}`, V = `${e[e.length - 2]}}`) : o === "always" || o === "outputs" && i(e[1], 123) || o === "tags" && i(e[1], 37) ? (h = `{${e[1]}-`, V = `-${e[e.length - 2]}}`) : o === "preserve" ? (h = e.slice(0, f).join(c), V = e.slice(t).join(c)) : (h = `{${e[1]}`, V = `${e[e.length - 2]}}`), s === "else" || s === "break" || s === "continue" || s === "increment" || s === "decrement" || s.startsWith("end"))
    return h += ee, V = ee + V, h + e.slice(f, t).join(c).trim() + V;
  if (k === "preserve" ? (h += i(e[f], 10) ? z : ee, V = (i(e[t - 1], 10) ? z : ee) + V) : k === "force" ? (h += z, V = z + V) : k === "inline" || k === "default" ? (h += ee, V = ee + V) : k === "consistent" ? i(e[f], 10) ? (h += z, V = z + V) : (h += ee, V = ee + V) : (h += ee, V = ee + V), s === "liquid")
    return h + e.slice(f, t).join(c).trim() + V;
  if (u > 0 && e.length >= u && n.logic.length > 0 && (s === "if" || s === "elsif" || s === "unless" || s === "when")) {
    o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], V = V[0] + `-${e[e.length - 2]}}`), k === "force-multiline" && (h = h.trimEnd() + z, V = z + V.trimStart());
    let m = n.logic.length;
    for (let p = 0; p < m; p++) {
      let w = n.logic[p];
      e[w] = z + e[w], i(e[w - 1], 32) && (e[w - 1] = c);
    }
    return h + e.slice(f, t).join(c).trim() + V;
  }
  let le = n.pipes.length;
  if (le > 0) {
    if (A > 0 && le >= A || A === 0 && u > 0 && e.length > u) {
      o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], V = V[0] + `-${e[e.length - 2]}}`), k === "force-multiline" && (h = h.trimEnd() + z, V = z + V.trimStart());
      for (let m = 0; m < le; m++) {
        let p = n.pipes[m];
        if (Me(e[p - 1]) && (e[p - 1] = c), e[p] = z + e[p], m === 0) {
          let w = p - 1;
          if (Me(e[w - 1]))
            do
              e[w--] = c;
            while (Me(e[w]));
        }
        if (n.fargs[m] && (a > 0 && n.fargs[m].length >= a || a === 0 && u > 0 && e.slice(
          n.fargs[m][0],
          n.fargs[m][n.fargs[m].length - 1]
        ).length > u)) {
          let w = n.fargs[m].length;
          for (let _ = 0; _ < w; _++) {
            let I = n.fargs[m][_];
            C === "after" ? (Me(e[I + 1]) && Me(e[I + 2]) && (e[I + 1] = c), e[i(e[I - 1], 44) ? I - 1 : I] = _ === 0 ? z + "  " : st + z + " ") : C === "before" ? (Me(e[I + 1]) && Me(e[I + 2]) && (e[I + 1] = c), i(e[I - 1], 44) ? e[I - 1] = _ === 0 ? "  " + z : z + "  " + st : e[I] = _ === 0 ? z + "  " : z + "  " + st) : e[I] = z + "  " + e[I];
          }
        }
      }
    }
    return h + e.slice(f, t).join(c).trim() + V;
  }
  if (n.targs.length >= a) {
    o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], V = V[0] + `-${e[e.length - 2]}}`);
    for (let m = 0; m < n.targs.length; m++) {
      let p = n.targs[m];
      if (C === "after") {
        let w = p;
        for (; Me(e[w--]); )
          e[w] = c;
        Me(e[p + 1]) && (e[p + 1] = c), Me(e[p - 1]) && (e[p - 1] = c), e[p] = i(e[p], 44) ? st + z : z;
      } else
        C === "before" && (i(e[p - 1], 44) ? e[p - 1] = m === 0 ? z + st : z + st : e[p] = m === 0 ? z + st : z + st);
    }
  }
  return h + e.slice(f, t).join(c).trim() + V;
}
function en(e) {
  return [
    i(e[2], 45) ? 3 : 2,
    i(e[e.length - 3], 45) ? e.length - 3 : e.length - 2
  ];
}
function tn(e, s = !0) {
  return s ? new RegExp(`{%-?\\s*${e}\\s*-?%}`) : new RegExp(`{%-?\\s*${e}`);
}
function nn(e) {
  let s = e.indexOf("{");
  return i(e[s + 1], 123);
}
function zt(e) {
  let s = e.indexOf("{");
  if (i(e[s + 1], 37)) {
    let n;
    return n = e.slice(s + (i(e[s + 2], 45) ? 3 : 2)).trimStart(), n = n.slice(0, n.search(/[\s=|!<>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : we.liquid.else.has(n);
  }
  return !1;
}
function sn(e) {
  let s = e.indexOf("=");
  return s > -1 && (i(e[s + 1], 34) || i(e[s + 1], 39)) ? /{%-?\s*end[a-z]+/.test(e.slice(s, e.lastIndexOf(e[s + 1]))) : !1;
}
function ki(e) {
  return ht(e) ? /{%-?\s*end\w+/.test(e) : !1;
}
function ht(e, s = !1) {
  let n;
  if (s)
    return i(e[0], 123) && i(e[1], 37) && i(e[e.length - 2], 37) && i(e[e.length - 1], 125) ? (n = e.slice(i(e[2], 45) ? 3 : 2).trimStart(), i(n, 34) || i(n, 39) ? !1 : (n = n.slice(0, n.search(/[\s=|!<"'>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : we.liquid.tags.has(n))) : !1;
  let u = e.indexOf("{");
  if (u === -1)
    return !1;
  do {
    if (i(e[u + 1], 37))
      return n = e.slice(u + (i(e[u + 2], 45) ? 3 : 2)).trimStart(), n = n.slice(0, n.search(/[\s=|!<>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : we.liquid.tags.has(n);
    u = e.indexOf("{", u + 1);
  } while (u > -1);
  return !1;
}
function Et(e) {
  let s = e;
  Array.isArray(e) && (s = e.join(c));
  let n = s.indexOf("{");
  return i(s[n + 1], 37) ? i(s[n + 2], 45) ? s.slice(n + 3).trimStart().startsWith("end") : s.slice(n + 2).trimStart().startsWith("end") : !1;
}
function Gt(e, s) {
  if (s === 1)
    return i(e[0], 123) && (i(e[1], 37) || i(e[1], 123));
  if (s === 6)
    return i(e[0], 123) && i(e[1], 37);
  if (s === 7)
    return i(e[0], 123) && i(e[1], 123);
  if (s === 8)
    return i(e[e.length - 2], 37) && i(e[e.length - 1], 125);
  if (s === 9)
    return i(e[e.length - 2], 125) && i(e[e.length - 1], 125);
  if (s === 4)
    return /{[{%]/.test(e);
  if (s === 5)
    return /{[{%]/.test(e) && /[%}]}/.test(e);
  if (s === 2) {
    let n = e.length;
    return i(e[n - 1], 125) && (i(e[n - 2], 37) || i(e[n - 2], 125));
  } else if (s === 3) {
    let n = e.length;
    return i(e[0], 123) && (i(e[1], 37) || i(e[1], 123)) && i(e[n - 1], 125) && (i(e[n - 2], 37) || i(e[n - 2], 125));
  }
}

// src/lexers/markup.ts
function on(e) {
  let { data: s, rules: n } = r, u = e || r.source, A = r.language === "jsx" || r.language === "tsx", a = new Set(n.liquid.ignoreTagList), C = Ne(n.markup.attributeSort) ? n.markup.attributeSort.length : -1, o = Ne(u) ? u : u.split(c), k = o.length, f = Fe(null);
  f.start = -1, f.tname = [], f.index = [];
  let t = 0, h, V = !1; r.language; let m = 0;
  function p(N) {
    let S = Fe(null);
    return S.lexer = "markup", S.lines = r.lineOffset, S.stack = r.stack.token !== "global" ? r.stack.token : "global", S.begin = r.stack.index, S.token = c, S.types = c, S.ender = -1, N ? pt(S, N) : S;
  }
  function w(N, S = c, j) {
    if (S === c && j === void 0)
      r.push(s, N, c);
    else if (tt(S))
      pt(N, S), r.push(s, N, c);
    else if (Ne(S))
      for (let D of S)
        pt(N, D), r.push(s, N, c);
    else
      j ? (pt(N, j), r.push(s, N, S)) : console.log("isssue");
  }
  function _(N, S = null) {
    return r.language !== "html" && r.language !== "liquid" && A === !1 || /(?:{[=#/]|%[>\]])|\}%[>\]]/.test(N) || !Gt(N, 3) ? N : Ft(N, S);
  }
  function I(N) {
    let S = N;
    do
      S = S - 1;
    while (i(o[S], 92));
    return S = N - S, S % 2 === 1;
  }
  function d(N) {
    return n.correct === !1 || i(N[N.length - 2], 47) ? N : /\/\s+>$/.test(N) ? `${N.slice(0, N.lastIndexOf("/"))}${n.markup.selfCloseSpace ? "/>" : " />"}` : `${N.slice(0, -1)}${n.markup.selfCloseSpace ? "/>" : " />"}`;
  }
  function l(N, S = !0) {
    let j = N.indexOf("=");
    if (j > 0) {
      let D = N.indexOf(Be);
      if (j < D && D > 0)
        return S ? [N.slice(0, j), N.slice(j + 1)] : [N.slice(0, j), N.slice(j + 2, -1)];
      let B = N.indexOf(je);
      if (j < B && B > 0)
        return S ? [N.slice(0, j), N.slice(j + 1)] : [N.slice(0, j), N.slice(j + 2, -1)];
    }
    return [N, c];
  }
  function g(N) {
    let S = p(), j = c, D = c, B = c, P = c, pe = c, ge = !1, ue = !1, Ce = 0, O = !1, ke = !1, K = !1, se = !1, J = [];
    function $e() {
      return x();
    }
    function $() {
      let R = u.indexOf("capture", t);
      if (o[R - 3] === "e" && o[R - 2] === "n" && o[R - 1] === "d")
        R = o.indexOf("}", R) + 1, S.types = B = "liquid_capture", S.token = j + u.slice(t, R), r.lineNumber = bt(j, r.lineNumber), w(S), t = R;
      else {
        let Q = u.indexOf("endcapture", R + 7) + 9;
        if (Q > -1 && /[a-z]/.test(o[Q + 1]) === !1)
          return R = o.indexOf("}", Q) + 1, j = j + u.slice(t, R), r.lineNumber = bt(j, r.lineNumber), t = R, $();
        De(114, j, P);
      }
    }
    function G() {
      s.types[S.begin] === "start" && s.types[s.begin[S.begin]] === "liquid_start" && B === "liquid_end" ? (s.types[S.begin] = "singleton", delete r.pairs[r.stack.index]) : s.types[r.count] === "liquid_start" && B === "end" && (S.types = "singleton", delete r.pairs[r.stack.index], r.stack.pop());
    }
    function oe() {
      if (S.types.indexOf("liquid") < 0)
        return G(), $e();
      if (S.token === c && (S.token = j), i(j[0], 123) && i(j[1], 37))
        if (we.liquid.else.has(P))
          S.types = B = P === "when" ? "liquid_when" : "liquid_else";
        else if (we.liquid.tags.has(P)) {
          if (V === !0)
            S.types = B = "liquid_start";
          else if (P === "capture")
            return t = t + 1, $();
          return S.types = B = P === "case" ? "liquid_case_start" : "liquid_start", x();
        } else if (P.startsWith("end")) {
          let R = P.slice(3);
          if (we.liquid.tags.has(R))
            S.types = B = R === "case" ? "liquid_case_end" : "liquid_end";
          else {
            S.stack = R, S.types = B = "liquid_end";
            let Q = 0;
            do {
              if (s.types[Q] === "liquid" && s.stack[Q] === R) {
                s.types[Q] = "liquid_start";
                for (let W = Q, U = s.stack.length; W < U; W++)
                  r.stack.push([s.token[W], W]);
                break;
              }
              Q = s.stack.indexOf(R, Q + 1);
            } while (Q > -1);
          }
          G();
        } else
          S.stack = P;
      return n.liquid.quoteConvert === "double" ? S.token = j = S.token.replace(/'[^"]*?'/g, gi(Be)) : n.liquid.quoteConvert === "single" && (S.token = j = S.token.replace(/"[^']*?"/g, gi(je))), $e();
    }
    function ne() {
      let R = j.indexOf("liquid") + 6, Q = c, W = c, U = 1;
      w(S, {
        token: Yi(j.slice(0, R), n.liquid),
        types: "liquid_start",
        stack: "liquid"
      });
      let Z = j.slice(R).split(z), ae = Z.pop().trim(), he = i(ae[ae.length - 3], 45) ? ae.length - 3 : ae.length - 2, de = ae.slice(0, he), fe = ae.slice(he);
      de.length !== 0 && Z.push(de), R = 0;
      do
        Q = Z[R].trim(), W = Q.split(/\s/)[0], W.startsWith("end") ? (S.token = Q, S.types = W === "endcase" ? "liquid_case_end" : "liquid_end", S.lines = U <= 1 ? 2 : U, w(S), U = 1) : W.startsWith("#") ? (S.token = Q, S.types = "liquid", S.lines = U <= 1 ? 2 : U, w(S), U = 1) : W.startsWith("comment") ? (S.token = Q, S.types = "liquid_start", S.lines = U, w(S), U = 1) : we.liquid.tags.has(W) ? (S.token = Q, S.types = W === "case" ? "liquid_case_start" : "liquid_start", S.lines = U, w(S), U = 1) : we.liquid.else.has(W) ? (S.token = Q, S.types = W === "when" ? "liquid_when" : "liquid_else", S.lines = U, w(S), U = 1) : we.liquid.singleton.has(W) ? (S.token = Q, S.types = "liquid", S.lines = U <= 1 ? 2 : U, w(S), U = 1) : Q.trim().length > 0 && (S.token = Q, S.types = "content", S.lines = U, w(S), U = 1), R = R + 1, U = U + 1;
      while (R < Z.length);
      n.liquid.delimiterPlacement === "default" || n.liquid.delimiterPlacement === "force-multiline" || n.liquid.delimiterPlacement === "preserve" && /\n-?%}$/.test(j) || n.liquid.delimiterPlacement === "consistent" && /^{%-?\n/.test(j) ? w(S, {
        token: fe,
        types: "liquid_end",
        lines: 2
      }) : w(S, {
        token: fe,
        types: "liquid_end",
        lines: 0
      });
    }
    function Y() {
      if (P === "svg" && (f.start = r.count + 1, S.stack = P), we.svg.tags.has(P) && f.start > -1) {
        if (S.types === "start")
          S.types = "singleton", S.stack = P, f.tname.push(P), f.index.push(r.count + 1);
        else if (S.types === "end") {
          let R = f.tname.indexOf(P), Q = f.tname.lastIndexOf(P), W;
          if (R > -1)
            for (Q === R ? (W = f.index[Q], s.types[f.index[Q]] = "start", f.tname.splice(Q, 1), f.index.splice(Q, 1)) : s.begin[r.count] === f.index[R] ? (W = s.begin[r.count], s.types[s.begin[r.count]] = "start", f.tname.splice(R, 1), f.index.splice(R, 1)) : (W = f.index[Q], s.types[f.index[Q]] = "start"); W < s.stack.length; W++)
              s.stack[W] = P, r.stack.push([P, W]);
          P === "svg" && (f.start = -1);
        }
      }
      return oe();
    }
    function F() {
      return se && ue === !1 && B !== "xml" && (we.html.voids.has(P) ? (S.types = B = "singleton", T(j[j.length - 2], 47) && (S.token = d(j))) : i(j[j.length - 2], 47) && i(j[j.length - 1], 62) ? S.types = B = "singleton" : S.types = B = "start"), Y();
    }
    function H(R, Q) {
      let W = t, U = -1, Z = 0, ae;
      do {
        if ((P === "script" || P === "style") && i(o[t], 47) && (i(o[t + 1], 47) ? t = o.indexOf(z, t + 1) + 1 : i(o[t + 1], 42) && (t = u.indexOf("*/", t + 1) + 2)), i(o[t], 34) || i(o[t], 39) || i(o[t], 96)) {
          for (U = t + 1, ae = o[t]; ae !== o[U] && U < k && (i(o[U], 92) && (U = U + 1), ae !== o[U]); )
            U = U + 1;
          if (U !== k)
            t = U + 1, U = -1;
          else
            return De(101, u.slice(t));
        }
        if (Q === 3) {
          if (i(o[t - 2], 123) && i(o[t - 1], 37)) {
            for (i(o[t], 45) && (t = t + 1), U = t; ce(o[U]) && (U = U + 1, !lt(o[U])); )
              ;
            if (ae = u.slice(U, U + R.length), ae.startsWith(P)) {
              t = U + P.length, Z = Z + 1, U = -1;
              continue;
            } else if (ae === R)
              if (Z === 0) {
                if (U = o.indexOf("}", U + R.length) + 1, U === -1)
                  return De(113, ae, P);
                break;
              } else
                Z = Z - 1, t = U + R.length;
          }
        } else if (u.slice(t, t + R.length) === R) {
          j = u.slice(W, t).replace(Je, c).replace(Ye, c);
          break;
        }
        t = t + 1;
      } while (t < k);
      if (Q === 3) {
        let he = o.lastIndexOf(z, r.iterator) + 1;
        S.types = B = "ignore", S.token = j = u.slice(he, U), w(S), t = U - 1, J = [];
      } else
        return r.lineNumber = bt(j, r.lineNumber), j.trim() !== c && (S.token = j, S.lines = r.lineOffset, S.types = "ignore", w(S)), S.types = B = "end", S.token = j = R, t = t + R.length - 1, x();
    }
    function b(R, Q) {
      let W = o.lastIndexOf(Ii(s.token[r.count]), r.iterator) + 1;
      if (Q === 3 || Q === 6) {
        let U = -1, Z = 0, ae;
        do {
          if ((P === "script" || P === "style") && i(o[t], 47) && (i(o[t + 1], 47) ? t = o.indexOf(z, t + 1) + 1 : i(o[t + 1], 42) && (t = u.indexOf("*/", t + 1) + 2)), i(o[t], 34) || i(o[t], 39) || i(o[t], 96)) {
            if (U = o.indexOf(o[t], t + 1), U > -1) {
              r.lineNumber = bt(o.slice(t, U), r.lineNumber), t = U + 1, U = -1;
              continue;
            }
            return De(101, u.slice(t));
          }
          if (Q === 3) {
            if (i(o[t - 2], 123) && i(o[t - 1], 37)) {
              if (i(o[t], 45) && (t = t + 1), ae = u.slice(t).trimStart(), ae.startsWith(P)) {
                t = t + P.length, Z = Z + 1, U = -1;
                continue;
              } else if (ae.startsWith(R))
                if (Z === 0) {
                  if (U = o.indexOf("}", t + R.length) + 1, U === -1)
                    return De(113, ae, P);
                  t = U;
                  break;
                } else
                  Z = Z - 1, t = t + R.length;
            }
          } else if (i(o[t - 1], 60) && u.slice(t, t + P.length) === P)
            Z = Z + 1;
          else if (i(o[t], 60) && i(o[t + 1], 47) && u.slice(t, t + R.length) === R)
            if (Z === 0) {
              t = t + R.length - 1;
              break;
            } else
              Z = Z - 1;
          t = t + 1;
        } while (t < k);
        if (Z > 0)
          return Q === 3 ? De(114, j, P) : De(105, j, P);
        S.types = "ignore", S.token = j = u.slice(W, t + 1), r.lineNumber = bt(j, r.lineNumber);
      } else
        S.types = "ignore", S.token = j = u.slice(W, t + 1);
      J = [], ue = !1, w(S);
    }
    function X() {
      return B === "script_preserve" || B === "json_preserve" || B === "style_preserve" ? (S.types = "start", S.stack = B === "style_preserve" ? "style" : "script", x(), t = t + 1, J = [], H(`</${P}>`, 2)) : s.types[r.count] === "ignore_next" ? B === "liquid_start" ? b(`end${P}`, 3) : B === "liquid" ? we.liquid.tags.has(P) ? (B = "liquid_start", b(`end${P}`, 3)) : b(N, N === "}}" ? 1 : 4) : we.html.voids.has(P) ? b(N, 7) : i(N, 62) ? b(`</${P}>`, 6) : (ue = !1, K = !1, F()) : a.has(P) ? H(`end${P}`, 3) : F();
    }
    function y() {
      if (ue || i(j, 60) && i(j[1], 47))
        return X();
      let R = J.length - 1;
      if (i(j, 60))
        if (R > -1)
          do {
            let Q = Ht(P, "html", l(J[R][0], !1));
            if (Q !== !1)
              if (Q.language === "json" && n.markup.ignoreJSON) {
                B = "json_preserve", ue = !0;
                break;
              } else if (Q.language === "javascript" && n.markup.ignoreJS) {
                B = "script_preserve", ue = !0;
                break;
              } else if (Q.language === "css" && n.markup.ignoreCSS) {
                B = "style_preserve", ue = !0;
                break;
              } else {
                h = Q.language, B = "start", V = !0, ue = !1;
                break;
              }
            R = R - 1;
          } while (R > -1);
        else {
          let Q = Ht(P, "html");
          Q !== !1 && (Q.language === "json" && n.markup.ignoreJSON ? (B = "json_preserve", ue = !0) : Q.language === "javascript" && n.markup.ignoreJS ? (B = "script_preserve", ue = !0) : Q.language === "css" && n.markup.ignoreCSS ? (B = "style_preserve", ue = !0) : (h = Q.language, B = "start", V = !0, ue = !1));
        }
      else if (ht(j, !0)) {
        let Q = Ht(P, "liquid", j);
        Q !== !1 && (a.has(P) ? (ue = !0, K = !1) : (B = "liquid_start", h = Q.language, V = !0));
      }
      return X();
    }
    function x(R = !1) {
      if (R !== null && w(S), i(o[t], 62) && i(o[t + 1], 47))
        return;
      let Q = r.count, W = P.replace(/\/$/, c), U = n.markup.quoteConvert, Z = 0, ae = 0, he = 0, de = c, fe = c, re = J.length;
      function be() {
        r.attributes.has(Q) && Z + 1 === re && li(S.token, 62) && (S.token = S.token + ">");
        let Pe = S.types.indexOf("liquid_attribute") > -1;
        if (ue === !0 || U === "none" || S.types.indexOf("attribute") < 0 || Pe === !1 && U === "single" && S.token.indexOf(Be) < 0 || Pe === !1 && U === "double" && S.token.indexOf(je) < 0)
          w(S);
        else {
          let Ae = 0, Se = !1, ie = S.token.split(c), Te = S.token.indexOf("="), Le = ie.length - 1;
          if (T(ie[Te + 1], 34) && T(ie[ie.length - 1], 34) && U === "single" && Pe === !1)
            w(S);
          else if (T(ie[Te + 1], 39) && T(ie[ie.length - 1], 39) && U === "double" && Pe === !1)
            w(S);
          else {
            if (Ae = Te + 2, Pe === !1 && (U === "double" ? (S.token.slice(Te + 2, Le).indexOf(Be) > -1 && (Se = !0), ie[Te + 1] = Be, ie[ie.length - 1] = Be) : U === "single" && (S.token.slice(Te + 2, Le).indexOf(je) > -1 && (Se = !0), ie[Te + 1] = je, ie[ie.length - 1] = je)), Se === !0 || Pe === !0) {
              Pe = !1;
              do
                i(ie[Ae - 1], 123) && (i(ie[Ae], 37) || i(ie[Ae], 123)) ? Pe = !0 : i(ie[Ae], 125) && (i(ie[Ae - 1], 37) || i(ie[Ae - 1], 125)) && (Pe = !1), Pe === !0 ? i(ie[Ae], 34) && U === "double" ? ie[Ae] = je : i(ie[Ae], 39) && U === "single" && (ie[Ae] = Be) : i(ie[Ae], 39) && U === "double" ? ie[Ae] = Be : i(ie[Ae], 34) && U === "single" && (ie[Ae] = je), Ae = Ae + 1;
              while (Ae < Le);
            }
            S.token = ie.join(c), w(S);
          }
        }
      }
      function xe() {
        if (!(!A && !O && !ke))
          return;
        if (C === 0) {
          J = ui(J, c, !1);
          return;
        }
        let Pe = [];
        he = 0, ae = 0, re = J.length;
        do {
          ae = 0;
          do {
            if (J.length > 0 && (de = J[ae][0].split("=")[0], n.markup.attributeSort[he] === de)) {
              Pe.push(J[ae]), J.splice(ae, 1), re = re - 1;
              break;
            }
            ae = ae + 1;
          } while (ae < re);
          he = he + 1;
        } while (he < C);
        J = ui(J, c, !1), J = Pe.concat(J), re = J.length;
      }
      function ve() {
        w(S, "jsx_attribute", {
          token: `${de}={`,
          types: "jsx_attribute_start"
        }), r.external("jsx", fe.slice(1, fe.length - 1)), S.begin = r.count, /\s\}$/.test(fe) ? (fe = fe.slice(0, fe.length - 1), fe = We.exec(fe)[0], S.lines = fe.indexOf(`
`) < 0 ? 1 : fe.split(`
`).length) : S.lines = 0, S.begin = r.stack.index, S.stack = r.stack.token, S.token = "}", S.types = "jsx_attribute_end", be();
      }
      function ye() {
        if (ki(J[Z][0]))
          S.types = "liquid_attribute_chain", S.token = J[Z][0];
        else if (Et(J[Z][0]))
          S.token = J[Z][0], S.types = "liquid_attribute_end", S.ender = S.begin;
        else {
          if (ht(J[Z][0], !0))
            return S.types = "liquid_attribute_start", S.begin = r.count, S.token = J[Z][0], be(), !0;
          zt(J[Z][0]) ? (S.types = "liquid_attribute_else", S.token = J[Z][0]) : (S.types = "attribute", S.token = J[Z][0]);
        }
        return be(), !1;
      }
      if (J.length < 1)
        return R !== !0 ? void 0 : me();
      if (i(J[J.length - 1][0], 47) && (J.pop(), j = j.replace(/>$/, "/>")), ae = J.length, he = 1, he < ae)
        do
          de = J[he - 1][0], i(de[de.length - 1], 61) && J[he][0].indexOf("=") < 0 && (J[he - 1][0] = de + J[he][0], J.splice(he, 1), ae = ae - 1, he = he - 1), he = he + 1;
        while (he < ae);
      if ((C > 0 || n.markup.attributeSort === !0) && xe(), S.begin = Q, S.stack = W, S.types = "attribute", Z < re)
        do {
          if (J[Z] === void 0)
            break;
          if (S.lines = J[Z][1], J[Z][0] = J[Z][0].replace(We, c), A === !0 && /^\/[/*]/.test(J[Z][0])) {
            S.types = "comment_attribute", S.token = J[Z][0], be(), Z = Z + 1;
            continue;
          }
          if (J[Z][1] <= 1 && ki(J[Z][0]) && !sn(J[Z][0])) {
            S.types = "liquid_attribute_chain", S.token = J[Z][0], be(), Z = Z + 1;
            continue;
          }
          if (ae = J[Z][0].indexOf("="), he = J[Z][0].indexOf(Be), ae < 0)
            Et(J[Z][0]) ? (S.token = J[Z][0], S.types = "liquid_attribute_end", S.ender = S.begin) : ht(J[Z][0], !0) ? (S.types = "liquid_attribute_start", S.begin = r.count, S.token = J[Z][0]) : zt(J[Z][0]) ? (S.types = "liquid_attribute_else", S.token = J[Z][0]) : nn(J[Z][0]) ? (S.types = "liquid_attribute", S.token = J[Z][0]) : i(J[Z][0], 35) || i(J[Z][0], 91) || i(J[Z][0], 123) || i(J[Z][0], 40) || A === !0 ? S.token = J[Z][0] : (S.types = "liquid_attribute", S.token = n.markup.attributeCasing === "preserve" ? J[Z][0] : J[Z][0].toLowerCase()), be();
          else if (Gt(J[Z][0], 6))
            ye();
          else {
            de = J[Z][0].slice(0, ae), n.markup.lineBreakValue === "force-preserve" || n.markup.lineBreakValue === "force-indent" || n.markup.lineBreakValue === "force-align" ? fe = J[Z][0][ae + 1] + z + J[Z][0].slice(ae + 2, -1).trim() + z + J[Z][0][J[Z][0].length - 1] : fe = J[Z][0].slice(ae + 1), n.markup.attributeCasing === "lowercase-name" ? (de = de.toLowerCase(), J[Z][0] = de + "=" + fe) : n.markup.attributeCasing === "lowercase-value" ? (fe = fe.toLowerCase(), J[Z][0] = de + "=" + fe) : (n.markup.attributeCasing === "lowercase" && (de = de.toLowerCase(), fe = fe.toLowerCase()), J[Z][0] = de + "=" + fe), n.correct === !0 && T(fe, 60) && T(fe, 123) && T(fe, 61) && T(fe, 34) && T(fe, 39) && (fe = Be + fe + Be), A === !0 && /^\s*{/.test(fe) ? (ve(), S.types = "attribute", S.begin = Q, S.stack = W) : Gt(de, 6) ? ye() : (S.types = "attribute", S.token = J[Z][0], be());
          }
          Z = Z + 1;
        } while (Z < re);
      if (!R)
        return me();
    }
    function q(R) {
      r.iterator = t;
      let Q = yt(o, {
        end: k,
        lexer: "markup",
        begin: pe,
        start: t,
        ender: N
      });
      if (Q[0] === c)
        return De(
          107,
          o.slice(r.iterator, r.iterator + 5).join(c),
          "comment"
        );
      if (j = Q[0], t = Q[1], $i.test(j))
        w(S, {
          token: j,
          types: "ignore_next"
        });
      else if (Ni.test(j))
        w(S, {
          token: j,
          types: "ignore"
        });
      else {
        if (j.startsWith(pe) && R === !1) {
          let W = j.indexOf("%}", 2) + 2, U = j.lastIndexOf("{%");
          j = _(j.slice(0, W), P) + j.slice(W, U) + _(j.slice(U), P);
        }
        return S.token = j, S.types = "comment", y();
      }
    }
    function v(R) {
      let Q = t, W = t + R;
      do {
        if (i(o[W], 62))
          return t = W, u.slice(Q, W + 1);
        W = W + 1;
      } while (W < k);
    }
    function E() {
      if (N === "---")
        pe = "---", B = "ignore", K = !0;
      else if (i(o[t], 60))
        if (i(o[t + 1], 123) && (i(o[t + 2], 123) || i(o[t + 2], 37))) {
          S.token = v(3), S.types = "liquid_bad_start", w(S);
          return;
        } else if (i(o[t + 1], 47))
          if (i(o[t + 2], 123) && (i(o[t + 3], 123) || i(o[t + 3], 37))) {
            S.token = v(3), S.types = "liquid_bad_end", w(S);
            return;
          } else
            B = "end", N = ">";
        else if (i(o[t + 1], 33))
          if ((i(o[t + 2], 100) || i(o[t + 2], 68)) && (i(o[t + 3], 111) || i(o[t + 3], 79)) && (i(o[t + 4], 99) || i(o[t + 4], 67)) && (i(o[t + 5], 116) || i(o[t + 5], 84)) && (i(o[t + 6], 121) || i(o[t + 6], 89)) && (i(o[t + 7], 112) || i(o[t + 7], 80)) && (i(o[t + 8], 101) || i(o[t + 8], 69)))
            N = ">", B = "doctype", K = !0;
          else if (i(o[t + 2], 45))
            if (i(o[t + 3], 45))
              N = "-->", pe = "<!--", B = "comment";
            else
              return De(
                108,
                o.slice(t, t + 3).join(c),
                "comment"
              );
          else
            i(o[t + 2], 91) && o[t + 3].charCodeAt(0) === 67 && // C
            o[t + 4].charCodeAt(0) === 68 && // D
            o[t + 5].charCodeAt(0) === 65 && // A
            o[t + 6].charCodeAt(0) === 84 && // T
            o[t + 7].charCodeAt(0) === 65 && // A
            i(o[t + 8], 91) && (N = "]]>", B = "cdata", K = !0);
        else
          i(o[t + 1], 63) ? (N = "?>", o[t + 2].charCodeAt(0) === 120 && // x
          o[t + 3].charCodeAt(0) === 109 && // m
          o[t + 4].charCodeAt(0) === 109 ? (B = "xml", se = !0) : (K = !0, B = "liquid")) : i(o[t + 1], 112) && //   p
          i(o[t + 2], 114) && //   r
          i(o[t + 3], 101) && // e
          (i(o[t + 4], 62) || ce(o[t + 4])) ? (N = "</pre>", B = "ignore", K = !0) : (se = !0, N = ">");
      else if (i(o[t], 123)) {
        if (A) {
          V = !0, ge = !0, r.stack.push(["script", r.count]), w(S, { token: "{", types: "script_start" });
          return;
        }
        if (i(o[t + 1], 123))
          K = !0, N = "}}", B = "liquid";
        else if (i(o[t + 1], 37)) {
          K = !0, N = "%}", B = "liquid", D = "}";
          let R = u.indexOf(N, t + 3);
          if (R === -1)
            return De(113, u.slice(t));
          if (i(o[t + 2], 45) ? (pe = "{%-", P = ni.exec(u.slice(t + 3, R).trimStart())[0]) : (pe = "{%", P = ni.exec(u.slice(t + 2, R).trimStart())[0]), P === "comment") {
            B = "comment";
            let Q = u.indexOf("endcomment", R + 2);
            return Q === -1 ? De(114, u.slice(t, R + 2), "comment") : (pe = u.slice(t, R + 2), N = u.slice(u.lastIndexOf("{", Q), u.indexOf("}", Q + 10) + 1), q());
          } else if (a.size > 0 && a.has(P) && (r.iterator = t, ue = !0), i(P, 35))
            return B = "comment", q(!0);
        } else
          K = !0, N = o[t + 1] + "}", B = "liquid";
      }
      return K !== !0 && n.markup.preserveAttribute === !0 && (K = !0), r.count > -1 && s.types[r.count] === "ignore_next" && (ue = !0, r.iterator = t), D || (D = N.charAt(N.length - 1)), ge ? y() : B === "comment" ? q() : t < k ? te() : y();
    }
    function me() {
      if (n.wrap > 0 && A === !0) {
        let R = 0, Q = r.count, W = 0;
        if (s.types[Q].indexOf("attribute") > -1) {
          do
            R = R + s.token[Q].length + 1, Q = Q - 1;
          while (s.lexer[Q] !== "markup" || s.types[Q].indexOf("attribute") > -1);
          s.lines[Q] === 1 && (R = R + s.token[Q].length + 1);
        } else
          s.lines[Q] === 1 && (R = s.token[Q].length + 1);
        if (W = Q - 1, R > 0 && s.types[W] !== "script_end")
          if (s.types[W].indexOf("attribute") > -1) {
            do
              R = R + s.token[W].length + 1, W = W - 1;
            while (s.lexer[W] !== "markup" || s.types[W].indexOf("attribute") > -1);
            s.lines[W] === 1 && (R = R + s.token[W].length + 1);
          } else
            s.lines[W] === 1 && (R = s.token[W].length + 1);
      }
      r.lineOffset = 0;
    }
    function te() {
      let R = [], Q = Fe(null);
      Q.pipes = [], Q.fargs = [], Q.targs = [], Q.logic = [];
      let W = 0, U = 0, Z = c, ae = 0, he = 0, de = 0, fe = 0, re = c, be = c, xe = 0, ve = !1, ye = !1, Ze = !1, Pe = !1, Ae = !1, Se = NaN, ie = [];
      function Te() {
        if (Qe(R, 44)) {
          if (P === "when" && Q.logic.push(R.length - 1), n.correct === !0 && /^,\s*-?[%}]}/.test(u.slice(t)))
            return R.pop(), t = t + 1, !0;
          Se === 44 ? Q.fargs[Q.fargs.length - 1].push(R.length - 1) : Se === 58 ? (Q.fargs[Q.fargs.length - 1][0] += 1, Q.fargs[Q.fargs.length - 1].push(R.length - 1), Se = 44) : Q.targs.push(R.length - 1);
        } else
          Qe(R, 124) ? (Q.pipes.push(R.length - 1), Se = 124) : Qe(R, 58) && Se === 124 && (Q.fargs.push([R.length - 1]), Se = 58);
        if (i(o[t], 10) && P !== "liquid" && ye === !1 && R.length > 3 && !(i(o[t + 1], 45) && i(o[t + 2], 37) && i(o[t + 3], 125) || i(o[t + 1], 37) && i(o[t + 2], 125)) ? R.pop() : n.liquid.normalizeSpacing === !0 && (Me(o[t]) === !1 && (dt(R, 39) || dt(R, 34)) ? T(o[t], 44) && T(o[t], 93) ? (R.splice(R.length - 1, 1, ee, o[t]), Me(o[t + 1]) === !1 && T(o[t + 1], 61) && T(o[t + 1], 125) && R.push(ee)) : lt(o[t + 1]) && T(o[t + 1], 91) && T(o[t + 1], 46) && R.push(ee) : P !== "liquid" && ce(o[t + 1]) && ce(o[t]) && i(o[t - 1], 93) || i(o[t], 32) && i(o[t + 1], 32) ? R.pop() : R.length > 3 && i(o[t + 1], 10) && T(o[t + 2], 32) ? R.push(ee) : i(o[t], 32) && i(o[t + 1], 32) ? R.pop() : dt(R, 93) && Me(R[R.length - 1]) && T(o[t], 32) && T(o[t], 44) && T(o[t], 46) ? R.splice(R.length - 1, 1, ee, o[t]) : Me(R[R.length - 2]) && Me(o[t]) && Me(o[t + 1]) ? R.pop() : i(o[t], 44) && lt(o[t + 1]) ? R.push(ee) : i(o[t], 58) && lt(o[t + 1]) ? R.push(ee) : i(o[t], 32) && dt(R, 46) || _i(R, 91, 32) ? R.pop() : T(o[t], 32) && i(o[t + 1], 124) ? R.push(ee) : i(o[t], 124) && T(o[t + 1], 32) ? R.push(ee) : i(o[t], 32) && (i(o[t + 1], 46) || i(o[t + 1], 93) || i(o[t + 1], 91) || i(o[t + 1], 58) || i(o[t + 1], 44)) ? R.pop() : P === "assign" && (T(o[t], 32) && i(o[t + 1], 61) || i(o[t], 61) && T(o[t + 1], 32)) ? R.push(ee) : (P === "if" || P === "unless" || P === "elsif" || P === "liquid") && ((T(o[t], 32) || i(o[t], 10)) && (i(o[t + 1], 33) || i(o[t + 1], 60) || i(o[t + 1], 62) || i(o[t + 1], 61) && i(o[t + 2], 61)) ? R.push(ee) : i(o[t], 61) && (T(o[t + 1], 32) || i(o[t + 1], 10)) && (i(o[t - 1], 61) || i(o[t - 1], 60) || i(o[t - 1], 62) || i(o[t - 1], 33)) ? R.push(ee) : T(o[t + 1], 32) && T(o[t + 1], 61) && (i(o[t], 60) || i(o[t], 62)) && R.push(ee))), ce(o[t - 1])) {
          if (Z = u.slice(t), P === "if" || P === "elsif" || P === "unless") {
            if (ce(o[t + 2]) && Z.startsWith("or"))
              return Q.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 2)), t = t + 2, !0;
            if (ce(o[t + 3]) && Z.startsWith("and"))
              return Q.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 3)), t = t + 3, !0;
            if (ce(o[t + 8]) && Z.startsWith("contains"))
              return Q.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 8)), t = t + 8, !0;
          } else if (P === "when" && ce(o[t + 2]) && Z.startsWith("or"))
            return Q.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 2)), t = t + 2, !0;
        }
        if (i(R[R.length - 1], 44) && i(R[R.length - 2], 44))
          return De(
            116,
            R.join(c),
            Ue(R.join(c))
          );
        ye = !1;
      }
      function Le(wt) {
        let et, Oe = c;
        if (wt === !0 ? (Oe = ie.join(c), et = l(Oe), re = c, et[0] === "data-esthetic-ignore" && (ue = !0)) : (Oe = ie.join(c), (A === !1 || A && li(Oe, 125)) && (Oe = Oe.replace(Xe, ee)), et = l(Oe), et[0] === "data-esthetic-ignore" && (ue = !0), A && i(ie[0], 123) && i(ie[ie.length - 1], 125) && (xe = 0)), i(Oe[0], 123) && i(Oe[1], 37) && (ke = !0), Oe = Oe.replace(/^\u0020/, c).replace(/\u0020$/, c), ie = Oe.replace(/\r\n/g, z).split(z), ie.length < 1 && (ie[0] = ie[0].replace(We, c)), Oe = _(ie.join(r.crlf), P), n.markup.stripAttributeLines === !0 && fe >= 1 && (fe = 1), J.length > 0) {
          let Ve = J.length - 1;
          m === 0 && (i(Oe, 61) || i(Oe, 45)) && (J[Ve][0] = J[Ve][0] + Oe, J[Ve][1] = fe, Oe = c);
        }
        if (wt === !1 && (ht(Oe) && (m = m + 1), Et(Oe) && (m = m - 1)), Oe !== c && Oe !== ee && J.push([Oe, fe]), J.length > 0) {
          let [Ve] = J[J.length - 1];
          if (Ve.indexOf("=\u201C") > 0)
            return De(103, Ve);
          if (Ve.indexOf("=\u201D") > 0)
            return De(103, Ve);
        }
        ie = [], fe = i(o[t], 10) ? 1 : 0;
      }
      if (!r.error) {
        do {
          if (i(o[t], 10) && (fe = r.lines(t, fe)), pe === "---" && N === "---" && B === "ignore") {
            if (R.push(o[t]), t > 3 && i(o[t], 45) && i(o[t - 1], 45) && i(o[t - 2], 45))
              break;
            t = t + 1;
            continue;
          }
          if (K === !0 || ce(o[t]) === !1 && T(re, 125) || i(re, 125)) {
            if (R.push(o[t]), ve === !1 && i(o[t - 1], 123) && (i(o[t], 123) || i(o[t], 37)))
              ve = !0;
            else if (ve === !0 && i(o[t], 125)) {
              if (i(o[t - 1], 125) || i(o[t - 1], 37))
                ve = !1;
              else if ((i(o[t - 2], 125) || i(o[t - 2], 37)) && ce(o[t - 1]))
                return De(113, R.join(c));
            } else if (ve === !0 && i(o[t], 10) && (n.liquid.delimiterPlacement === "preserve" || n.liquid.delimiterPlacement === "consistent")) {
              if (i(o[t - 1], 45) && i(o[t - 3], 123) && (i(o[t - 2], 123) || i(o[t - 2], 37)) || i(o[t - 2], 123) && (i(o[t - 1], 123) || i(o[t - 1], 37)))
                ye = !0;
              else if (/^\s*-?[%}]}/.test(u.slice(t)) === !0) {
                for (; ce(o[t]) === !0; )
                  t = t + 1, i(o[t], 10) && (fe = r.lines(t, fe));
                R.push(o[t]), ye = !0;
              }
            }
            if (B === "end" && R.length > 2 && i(R[0], 60) && i(R[1], 47) && (i(R[R.length - 1], 47) || i(R[R.length - 1], 60))) {
              if (n.correct)
                R.pop(), R.push(">");
              else
                return De(106, R.join(c));
              break;
            }
            if (i(R[0], 60) && i(R[1], 62) && i(N, 62))
              return w(S, "(empty)", {
                token: "<>",
                types: "start"
              });
            if (i(R[0], 60) && i(R[1], 47) && i(R[2], 62) && i(N, 62))
              return S.token = "</>", S.token = "end", w(S);
          }
          if (B === "cdata" && i(o[t], 62) && i(o[t - 1], 93) && T(o[t - 2], 93))
            return De(103, R.join(c));
          if (B === "comment") {
            if (re = c, o[t] === D && R.length > N.length + 1) {
              if (U = R.length, W = N.length - 1, W > -1)
                do {
                  if (U = U - 1, T(R[U], N.charCodeAt(W)))
                    break;
                  W = W - 1;
                } while (W > -1);
              if (W < 0)
                break;
            }
          } else if (re === c) {
            if (i(R[0], 60) && i(R[1], 33) && B !== "cdata") {
              if (B === "doctype" && i(o[t], 62))
                break;
              if (i(o[t], 91)) {
                if (i(o[t + 1], 60)) {
                  B = "start";
                  break;
                }
                if (ce(o[t + 1]))
                  do
                    t = t + 1, i(o[t], 10) && (fe = r.lines(t, fe));
                  while (t < k - 1 && ce(o[t + 1]));
                if (i(o[t + 1], 60)) {
                  B = "start";
                  break;
                }
              }
            }
            if (A && (i(o[t], 123) ? xe = xe + 1 : i(o[t], 125) && (xe = xe - 1)), i(o[t], 60) && se === !0 && K === !1 && R.length > 1 && />{2,3}/.test(N) === !1) {
              r.error = `Invalid structure detected ${o.slice(t, t + 8).join(c)}`;
              break;
            }
            if (ce(o[t]) === !1 && Ze === !0 && o[t] !== D) {
              if (Ce = 0, Ze = !1, re = be, R.pop(), t < k)
                do {
                  if (i(o[t], 10) && Ae === !1 && (fe = r.lines(t, fe)), n.markup.preserveAttribute === !0 ? R.push(o[t]) : ie.push(o[t]), (T(re, 34) || T(re, 39)) && (i(o[t - 1], 123) && (i(o[t], 37) || i(o[t], 123)) ? ve = !0 : i(o[t], 125) && (i(o[t - 1], 125) || i(o[t - 1], 37)) && (ve = !1)), A === !1 && Ae === !1 && ve === !0 && n.markup.preserveAttribute === !1)
                    for (; t < k; ) {
                      if (t = t + 1, i(o[t], 10) && (fe = r.lines(t, fe)), i(ie[0], 61) && (i(ie[1], 123) || i(ie[1], 37)) && (i(ie[ie.length - 2], 125) || i(ie[ie.length - 2], 37)) && i(ie[ie.length - 1], 125)) {
                        ve = !1, re = c, Le(!1);
                        break;
                      }
                      if (i(ie[0], 61) && T(ie[1], 123)) {
                        ve = !1, re = c, Le(!1);
                        break;
                      }
                      if (ie.push(o[t]), i(ie[0], 61) && i(o[t + 1], 62)) {
                        ve = !1, J[J.length - 1][0] += ie.join(c), ie = [], re = c;
                        break;
                      }
                      if (T(ie[0], 61) && i(o[t], 125) && (i(o[t - 1], 125) || i(o[t - 1], 37))) {
                        ve = !1, re = c, Le(!1);
                        break;
                      }
                    }
                  if (A === !1 && (i(o[t], 60) || i(o[t], 62)) && (re === c || i(re, 62))) {
                    if (re === c && i(o[t], 60))
                      re = ">", ae = 1;
                    else if (i(re, 62)) {
                      if (i(o[t], 60))
                        ae = ae + 1;
                      else if (i(o[t], 62) && (ae = ae - 1, ae === 0)) {
                        re = c, Ce = 0, Le(!1);
                        break;
                      }
                    }
                  } else if (re === c) {
                    if (o[t + 1] === D) {
                      (Qe(ie, 47) || Qe(ie, 63) && B === "xml") && (ie.pop(), K === !1 || R.pop(), t = t - 1), ie.length > 0 && Le(!1);
                      break;
                    }
                    if (A === !1 && i(o[t], 123) && i(o[t - 1], 61) ? re = "}" : i(o[t], 34) || i(o[t], 39) ? (re = o[t], Ae === !1 && ve === !1 && (Ae = !0), i(o[t - 1], 61) && (i(o[t + 1], 60) || i(o[t + 1], 123) && i(o[t + 2], 37) || ce(o[t + 1]) && T(o[t - 1], 61)) && (Ce = t)) : i(o[t], 40) ? (re = ")", de = 1) : A ? (i(o[t - 1], 61) || ce(o[t - 1])) && i(o[t], 123) ? (re = "}", he = 1) : i(o[t], 47) && (i(o[t + 1], 42) ? re = "*/" : i(o[t + 1], 47) && (re = z)) : i(R[0], 123) && i(o[t], 123) && (i(o[t + 1], 123) || i(o[t + 1], 37)) && (re = i(o[t + 1], 123) ? "}}" : o[t + 1] + "}"), ce(o[t]) && re === c) {
                      if (i(ie[ie.length - 2], 61) && (W = t + 1, W < k))
                        do {
                          if (ce(o[W]) === !1) {
                            (i(o[W], 34) || i(o[W], 39)) && (t = W - 1, Pe = !0, ie.pop());
                            break;
                          }
                          W = W + 1;
                        } while (W < k);
                      if (Pe === !0)
                        Pe = !1;
                      else if (xe === 0 || xe === 1 && i(ie[0], 123)) {
                        ie.pop(), ie.length > 0 && Le(!1), Ze = !0;
                        break;
                      }
                    }
                  } else if (i(o[t], 40) && i(re, 41))
                    de = de + 1;
                  else if (i(o[t], 41) && i(re, 41)) {
                    if (de = de - 1, de === 0 && (re = c, i(o[t + 1], N.charCodeAt(0)))) {
                      Le(!1);
                      break;
                    }
                  } else if (A === !0 && (i(re, 125) || i(re, 10) && i(o[t], 10) || i(re, 42) && i(o[t - 1], 42) && i(o[t], 47))) {
                    if (i(o[t], 96)) {
                      t = t + 1;
                      do {
                        if (ie.push(o[t]), i(o[t], 96))
                          break;
                        t = t + 1;
                      } while (t < o.length);
                    }
                    if (i(re, 125)) {
                      if (i(o[t], 125) && o[t] !== re)
                        he = he + 1;
                      else if (o[t] === re && (he = he - 1, he === 0)) {
                        xe = 0, re = c, j = ie.join(c), n.markup.preserveAttribute === !1 && (A ? /^\s*$/.test(j) || J.push([j, fe]) : (j = j.replace(Xe, ee), j !== ee && J.push([j, fe]))), ie = [], fe = 1;
                        break;
                      }
                    } else {
                      be = c, O = !0, j = ie.join(c), j !== ee && J.push([j, fe]), ie = [], fe = i(re, 10) ? 2 : 1, re = c;
                      break;
                    }
                  } else if (i(o[Ce - 1], 61) && i(o[t], 123) && i(o[t + 1], 37) && (i(re, 34) || i(re, 39)))
                    re = re + "{%", Ce = 0;
                  else if (i(o[t - 1], 37) && i(o[t], 125) && (re === '"{%' || re === "'{%"))
                    re = re[0], Ce = 0;
                  else if (i(o[t], 60) && i(N, 62) && i(o[Ce - 1], 61) && (i(re, 34) || i(re, 39)))
                    re = re + "<", Ce = 0;
                  else if (i(o[t], 62) && (re === '"<' || re === "'<"))
                    re = re.charAt(0), Ce = 0;
                  else if (Ce === 0 && T(re, 62) && (re.length < 2 || T(re, 34) && T(re, 39))) {
                    if (U = 0, W = re.length - 1, W > -1)
                      do {
                        if (T(o[t - U], re.charCodeAt(W)))
                          break;
                        U = U + 1, W = W - 1;
                      } while (W > -1);
                    if (W < 0 && ve === !1 && Ae === !0 && (Ae = !1, Le(!0), o[t + 1] === D))
                      break;
                    W === 0 && i(o[t], 62);
                  } else
                    Ce > 0 && ce(o[t]) === !1 && (Ce = 0);
                  t = t + 1;
                } while (t < k);
            } else if (i(N, 10) === !1 && (i(o[t], 34) || i(o[t], 39)))
              re = o[t];
            else if (t > 0 && ve === !0 && T(re, 34) && T(re, 39)) {
              if (Te() === !0)
                continue;
            } else if (B !== "comment" && T(N, 10) && i(o[t], 60) && i(o[t + 1], 33) && i(o[t + 2], 45) && i(o[t + 3], 45) && s.types[r.count] !== "conditional")
              re = "-->";
            else if (i(o[t], 123) && T(R[0], 123) && T(N, 10) && (i(o[t + 1], 123) || i(o[t + 1], 37))) {
              if (i(o[t + 1], 123))
                re = "}}";
              else if (re = o[t + 1] + "}", ie.length < 1 && (J.length < 1 || ce(o[t - 1]))) {
                R.pop();
                do
                  i(o[t], 10) && (fe = fe + 1), ie.push(o[t]), t = t + 1;
                while (t < k && o[t - 1] + o[t] !== re);
                ie.push("}"), J.push([ie.join(c), fe]), ie = [], fe = 1, re = c;
              }
              re === N && (re = c);
            } else if (se && T(N, 10) && T(o[t - 1], 60) && ce(o[t]))
              Ze = !0;
            else if (se && A && i(o[t], 47) && (i(o[t + 1], 42) || i(o[t + 1], 47)))
              Ze = !0, R[R.length - 1] = ee, be = i(o[t + 1], 42) ? "*/" : z, ie.push(o[t]);
            else if (ve === !1 && (o[t] === D || i(N, 10) && i(o[t + 1], 60)) && (R.length > N.length + 1 || i(R[0], 93)) && (A === !1 || xe === 0)) {
              if (i(N, 10)) {
                if (ce(R[R.length - 1]))
                  do
                    R.pop(), t = t - 1;
                  while (ce(R[R.length - 1]));
                break;
              }
              if (U = R.length, W = N.length - 1, W > -1)
                do {
                  if (U = U - 1, R[U] !== N.charAt(W))
                    break;
                  W = W - 1;
                } while (W > -1);
              if (W < 0) {
                i(R[U], 62) && i(o[t], 62) && i(o[t - 1], 125) && ce(o[t + 1]) && J.length > 0 && J[J.length - 1][1] === 0 && (J[J.length - 1][1] = i(o[t + 1], 32) ? 1 : 2);
                break;
              }
            }
          } else if (i(o[t], re.charCodeAt(re.length - 1)) && T(o[t - 1], 92) && (A === !0 && i(N, 125) && I(t) === !1 || A === !1 || T(N, 125))) {
            if (U = 0, W = re.length - 1, W > -1)
              do {
                if (T(o[t - U], re.charCodeAt(W)))
                  break;
                U = U + 1, W = W - 1;
              } while (W > -1);
            W < 0 && (re = c);
          }
          t = t + 1;
        } while (t < k);
        if (Ce = 0, P || (P = Ue(R.join(c))), ue === !1)
          if (B === "liquid") {
            if (j = Ki(R, P, Q, n), n.liquid.normalizeSpacing, P === "liquid")
              return ne();
          } else
            j = R.join(c);
        else
          j = R.join(c);
        return S.token = j, S.types = B, K === !1 && A === !1 && (j = j.replace(Xe, ee)), y();
      }
    }
    return E();
  }
  function M() {
    let N = [], S = t, j = A === !0 && i(s.token[r.count], 123), D = "([{!=,;.?:&<>", B = c, P = r.lineOffset, pe = 2, ge = c, ue = p({
      begin: r.stack.index,
      stack: Ue(r.stack.token) || "global",
      types: "content"
    });
    j === !0 ? ge = "script" : r.stack.index > -1 ? (ge = Ue(s.token[r.stack.index]), s.types[r.stack.index].startsWith("liquid_") && (pe = 3)) : (ge = Ue(s.token[s.begin[r.count]]), s.types[s.begin[r.count]].startsWith("liquid_") && (pe = 3)), V === !0 && (pe === 3 ? u.slice(t, u.lastIndexOf("{", u.indexOf(`end${ge}`, t))).trim() === c && (V = !1, ue.types = "liquid_end") : pe === 2 && (ge === "script" || ge === "style") && (u.slice(t, u.indexOf("</script>", t)).trim() === c || u.slice(t, u.indexOf("</style>", t)).trim() === c) && (V = !1, ue.types = "end"));
    function Ce() {
      return s.types[r.count] === "liquid_start" && s.token[r.count].indexOf("<!") === 0 && s.token[r.count].indexOf("<![") < 0 && s.token[r.count].charCodeAt(s.token[r.count].length - 1) === 91;
    }
    function O() {
      let K = t - 1, se = 0;
      if (T(o[t - 1], 92))
        return !1;
      if (K > -1)
        do {
          if (T(o[K], 92))
            break;
          se = se + 1, K = K - 1;
        } while (K > -1);
      return se % 2 === 1;
    }
    if (t < k) {
      let K = c, se = c, J = c, $e = 0;
      do {
        if (i(o[t], 10) && (P = r.lines(t, P)), V === !0) {
          if (pe === 3) {
            let $ = `end${ge}`, G = u.indexOf($, t);
            if (G > -1) {
              let oe = o.lastIndexOf("{", G), ne = o.indexOf("}", G + $.length) + 1;
              if (K = u.slice(oe, ne), tn($).test(K)) {
                P = 1, J = u.slice(t, oe), r.external(h, J), P !== r.lineOffset && (P = r.lineOffset), ue.token = _(K), ue.types = "liquid_end", ue.lines = P, w(ue), t = ne - 1, V = !1;
                break;
              }
            }
          }
          if (se === c) {
            if (i(o[t], 47))
              i(o[t + 1], 42) ? se = "*" : i(o[t + 1], 47) ? se = "/" : !A && ge === "script" && T(o[t - 1], 60) && D.indexOf(o[t - 1]) > -1 && (se = "r");
            else if (O() === !1 && (i(o[t], 34) || i(o[t], 39) || i(o[t], 96)))
              se = o[t];
            else if (i(o[t], 123) && j === !0)
              $e = $e + 1;
            else if (i(o[t], 125) && j === !0) {
              if ($e === 0) {
                J = N.join(c).replace(ct, c).replace(We, c), r.external(h, J), r.stack.update(r.stack.index + 1), s.types[r.count] === "end" && s.lexer[s.begin[r.count] - 1] === "script" && (w(ue, {
                  lexer: "script",
                  types: "separator",
                  token: n.correct === !0 ? ";" : "x;"
                }), ue.lexer = "markup"), w(ue, {
                  token: "}",
                  types: "script_end"
                }), r.stack.pop();
                break;
              }
              $e = $e - 1;
            }
            if (ge === "script" && i(o[t], 60) && i(o[t + 1], 47)) {
              if (K = u.slice(t, t + 9).toLowerCase(), K === "</script>") {
                if (N.length < 1)
                  break;
                J = N.join(c).trimEnd(), Ot.test(J) && vt.test(J) ? (w(ue, { token: "<!--", types: "comment" }), J = J.replace(Ot, c).replace(vt, c), r.external("javascript", J), w(ue, { token: "-->" })) : (r.external(h, J), ue.token = K, ue.types = "end", t = t - 1);
                break;
              }
            } else if (ge === "style" && i(o[t], 60) && i(o[t + 1], 47) && (K = u.slice(t, t + 8).toLowerCase(), K === "</style>")) {
              if (N.length < 1)
                break;
              J = N.join(c).trimEnd(), Ot.test(J) && vt.test(J) ? (w(ue, { token: "<!--", types: "comment" }), J = J.replace(Ot, c).replace(vt, c), r.external("css", J), w(ue, { token: "-->" })) : (r.external(h, J), ue.token = K, ue.types = "end", t = t - 1);
              break;
            }
          } else
            se === o[t] && O() === !1 && (i(se, 34) || i(se, 39) || i(se, 96) || i(se, 42) && i(o[t + 1], 47)) ? se = c : i(se, 96) && i(o[t], 36) && i(o[t + 1], 123) && O() === !1 ? se = "}" : i(se, 125) && i(o[t], 125) && O() === !1 ? se = "`" : i(se, 47) && (i(o[t], 10) || i(o[t], 13)) ? se = c : se === "r" && i(o[t], 47) && O() === !1 ? se = c : i(se, 47) && i(o[t], 62) && i(o[t - 1], 45) && i(o[t - 2], 45) && (K = u.slice(t + 1, t + 11).toLowerCase(), K = K.slice(0, K.length - 2), ge === "script" && K === "</" && (se = c), K = K.slice(0, K.length - 1), ge === "style" && K === "</style" && (se = c));
        }
        if (Ce() === !0 && i(o[t], 93)) {
          t = t - 1, P = 0, B = N.join(c).replace(We, c), w(ue, { token: B });
          break;
        }
        if (V === !1 && N.length > 0 && (i(o[t], 60) && T(o[t + 1], 61) && He(o[t + 1]) === !1 && lt(o[t + 1]) || i(o[t], 123) && i(o[t + 1], 37) || i(o[t], 123) && (A === !0 || i(o[t + 1], 123) || i(o[t + 1], 37)))) {
          if (t = t - 1, P = 0, B = r.stack.token === "comment" ? N.join(c) : N.join(c).replace(We, c), ue.token = B, n.wrap > 0 && n.markup.preserveText === !1) {
            let ne = function() {
              if (i(B[$], 32)) {
                oe.push(B.slice(0, $)), B = B.slice($ + 1), G = B.length, $ = n.wrap;
                return;
              }
              do
                $ = $ - 1;
              while ($ > 0 && T(B[$], 32));
              if ($ > 0)
                oe.push(B.slice(0, $)), B = B.slice($ + 1), G = B.length, $ = n.wrap;
              else {
                $ = n.wrap;
                do
                  $ = $ + 1;
                while ($ < G && T(B[$], 32));
                oe.push(B.slice(0, $)), B = B.slice($ + 1), G = B.length, $ = n.wrap;
              }
            };
            let $ = n.wrap, G = B.length, oe = [];
            if (s.token[s.begin[r.count]] === "<a>" && s.token[s.begin[s.begin[r.count]]] === "<li>" && s.lines[s.begin[r.count]] === 0 && r.lineOffset === 0 && B.length < n.wrap) {
              w(ue);
              break;
            }
            if (G < n.wrap) {
              w(ue);
              break;
            }
            if (r.lineOffset < 1 && r.count > -1) {
              let Y = r.count;
              do {
                if ($ = $ - s.token[Y].length, s.types[Y].indexOf("attribute") > -1 && ($ = $ - 1), s.lines[Y] > 0 && s.types[Y].indexOf("attribute") < 0)
                  break;
                Y = Y - 1;
              } while (Y > 0 && $ > 0);
              $ < 1 && ($ = B.indexOf(ee));
            }
            B = N.join(c).replace(ct, c).replace(We, c).replace(Xe, ee);
            do
              ne();
            while ($ < G);
            B !== c && T(B, 32) && oe.push(B), B = oe.join(r.crlf), B = c + B + c;
          } else {
            let $ = B.indexOf(z);
            $ > -1 && (w(ue, { token: B.slice(0, $) }), B = B.slice($), Ct.test(B) ? ue.lines = 1 : (ue.lines = 2, B = B.replace(Je, c)));
          }
          P = 0, ue.token = B, w(ue);
          break;
        }
        N.push(o[t]), t = t + 1;
      } while (t < k);
    }
    if (t > S && t < k)
      if (ce(o[t])) {
        let K = t;
        r.lineOffset = r.lineOffset + 1;
        do
          i(o[K], 10) && (r.lineNumber = r.lineNumber + 1, r.lineOffset = r.lineOffset + 1), K = K - 1;
        while (K > S && ce(o[K]));
      } else
        r.lineOffset = 0;
    else
      (t !== S || t === S && V === !1) && (pe === 3 && ue.types === "liquid_end" ? B = _(N.join(c).replace(We, c)) : B = N.join(c).replace(We, c), P = 0, ue.token !== B && (pe === 3 && ue.types === "liquid_end" && (B = _(B)), ue.token = B, w(ue), r.lineOffset = 0));
    V = !1;
  }
  function L() {
    r.lineOffset = 1;
    do {
      if (i(o[t], 10) && (r.lineIndex = t, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ce(o[t + 1]) === !1)
        break;
      t = t + 1;
    } while (t < k);
  }
  (r.language === "html" || r.language === "liquid") && ("html");
  do {
    if (r.error)
      return s;
    if (ce(o[t]) ? L() : V ? M() : i(o[t], 60) ? g(c) : i(o[t], 123) && (i(o[t + 1], 123) || i(o[t + 1], 37)) ? g(c) : A && i(o[t], 123) ? g(c) : i(o[t], 45) && i(o[t + 1], 45) && i(o[t + 2], 45) ? g("---") : M(), t = t + 1, t === k && r.stack.index in r.pairs) {
      let N = r.pairs[r.stack.index];
      N.type === 2 && jt(105, N);
    }
  } while (t < k);
  return s;
}

// src/lexers/script.ts
function ln() {
  let { data: e, references: s, rules: n, source: u } = r, A = r.language === "json" ? n.json : n.script, a = Ne(u) ? u : u.split(c), C = a.length, o = [], k = [], f = [], t = [0, c], h = [!1], V = { count: [], index: [], word: [] }, le = -1, m = 0, p = c, w = c, _ = [], I = 0, d = -1, l = -1, g = [], M, L, N, S = [
    "autoescape",
    "block",
    "capture",
    "case",
    "comment",
    "embed",
    "filter",
    "for",
    "form",
    "if",
    "macro",
    "paginate",
    "raw",
    "sandbox",
    "spaceless",
    "tablerow",
    "unless",
    "verbatim"
  ];
  function j() {
    V.count.pop(), V.index.pop(), V.word.pop(), le = le - 1;
  }
  function D(y = c) {
    let x = {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: w
    };
    r.push(e, x, y);
  }
  function B(y, x) {
    let q = x === !0 ? m : m + 1, v = c;
    if ((typeof y != "number" || y < 1) && (y = 1), i(a[m], 47) && (i(a[m + 1], 47) ? v = z : i(a[m + 1], 42) && (v = "/")), q < C)
      do {
        if (ce(a[q]) === !1) {
          if (i(a[q], 47) && (v === c ? i(a[q + 1], 47) ? v = z : i(a[q + 1], 42) && (v = "/") : i(v, 47) && i(a[q - 1], 42) && (v = c)), v === c && a[q - 1] + a[q] !== "*/")
            return a.slice(q, q + y).join(c);
        } else
          i(v, 10) && i(a[q], 10) && (v = c);
        q = q + 1;
      } while (q < C);
    return c;
  }
  function P(y) {
    let x = y;
    do
      y = y - 1;
    while (i(a[y], 92) && y > 0);
    return (x - y) % 2 === 1;
  }
  function pe(y) {
    let x = B(1, !1), q = r.stack.length === 0 ? c : r.stack.token, v = {
      begin: e.begin[r.count],
      ender: e.begin[r.count],
      lexer: e.lexer[r.count],
      lines: e.lines[r.count],
      stack: e.stack[r.count],
      token: e.token[r.count],
      types: e.types[r.count]
    };
    if (Tt.test(p) || w === "start" || w === "type_start" || r.language === "json" || i(x, 123) || i(v.token, 59) || i(v.token, 44) || v.stack === "class" || v.stack === "map" || v.stack === "attribute" || e.types[v.begin - 1] === "generic" || q === "initializer" || i(v.token, 125) && e.stack[v.begin - 1] === "global" && e.types[v.begin - 1] !== "operator" && v.stack === e.stack[r.count - 1] || v.stack === "array" && T(v.token, 93) || i(e.token[e.begin[r.count]], 123) && v.stack === "data_type" || v.types !== void 0 && v.types.indexOf("liquid") > -1 && v.types.indexOf("template_string") < 0 || i(x, 59) && y === !1 || e.lexer[r.count - 1] !== "script" && (m < C && C === u.length - 1 || C < u.length - 1))
      return;
    let E = 0;
    if (i(v.token, 125) && (v.stack === "function" || v.stack === "if" || v.stack === "else" || v.stack === "for" || v.stack === "do" || v.stack === "while" || v.stack === "switch" || v.stack === "class" || v.stack === "try" || v.stack === "catch" || v.stack === "finally" || v.stack === "block")) {
      if (v.stack === "function" && (e.stack[v.begin - 1] === "data_type" || e.types[v.begin - 1] === "type")) {
        E = v.begin;
        do
          E = E - 1;
        while (E > 0 && T(e.token[E], 41) && e.stack[E] !== "arguments");
        E = e.begin[E];
      } else
        E = e.begin[v.begin - 1];
      if (i(e.token[E], 40)) {
        if (E = E - 1, e.token[E - 1] === "function" && (E = E - 1), e.stack[E - 1] === "object" || e.stack[E - 1] === "switch" || T(e.token[E - 1], 61) && T(e.token[E - 1], 58) && e.token[E - 1] !== "return")
          return;
      } else
        return;
    }
    if (!(v.types === "comment" || q === "method" || q === "paren" || q === "expression" || q === "array" || q === "object" || q === "switch" && v.stack !== "method" && i(e.token[e.begin[r.count]], 40) && e.token[e.begin[r.count] - 1] !== "return" && e.types[e.begin[r.count] - 1] !== "operator") && !(e.stack[r.count] === "expression" && (e.token[e.begin[r.count] - 1] !== "while" || e.token[e.begin[r.count] - 1] === "while" && e.stack[e.begin[r.count] - 2] !== "do")) && !(x !== c && "=<>+*?|^:&%~,.()]".indexOf(x) > -1 && y === !1)) {
      if (v.types === "comment") {
        E = r.count;
        do
          E = E - 1;
        while (E > 0 && e.types[E] === "comment");
        if (E < 1)
          return;
        v.token = e.token[E], v.types = e.types[E], v.stack = e.stack[E];
      }
      v.token === void 0 || v.types === "start" || v.types === "separator" || v.types === "operator" && v.token !== "++" && v.token !== "--" || v.token === "x}" || v.token === "var" || v.token === "let" || v.token === "const" || v.token === "else" || v.token.indexOf("#!/") === 0 || v.token === "instanceof" || v.stack === "method" && (e.token[v.begin - 1] === "function" || e.token[v.begin - 2] === "function") || (A.variableList === "list" && (V.index[le] = r.count), p = n.correct === !0 ? ";" : "x;", w = "separator", E = r.lineOffset, r.lineOffset = 0, D(), r.lineOffset = E, oe());
    }
  }
  function ge() {
    let y = r.count;
    if (e.types[y] === "comment")
      do
        y = y - 1;
      while (y > 0 && e.types[y] === "comment");
    e.token[y] === "from" && (y = y - 2), e.token[y] === "x;" && r.splice({ data: e, howmany: 1, index: y });
  }
  function ue() {
    let y = r.count;
    do
      y = y - 1;
    while (y > -1 && e.token[y] === "x}");
    if (e.stack[y] === "else")
      return D();
    y = y + 1, r.splice({
      data: e,
      howmany: 0,
      index: y,
      record: {
        begin: e.begin[y],
        ender: -1,
        lexer: "script",
        lines: r.lineOffset,
        stack: e.stack[y],
        token: p,
        types: w
      }
    }), D();
  }
  function Ce() {
    pe(!1), d > -1 && b(), N = yt(a, {
      end: C,
      lexer: "script",
      begin: "/*",
      start: m,
      ender: "*/"
    }), m = N[1], e.token[r.count] === "var" || e.token[r.count] === "let" || e.token[r.count] === "const" ? (M = r.pop(e), D(), r.push(e, M, c), e.lines[r.count - 2] === 0 && (e.lines[r.count - 2] = e.lines[r.count]), e.lines[r.count] = 0) : N[0] !== c && (p = N[0], w = Tt.test(p) ? "ignore" : "comment", p.indexOf("# sourceMappingURL=") === 2 && (t[0] = r.count + 1, t[1] = p), r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: w
    }, c)), /\/\*\s*global\s+/.test(e.token[r.count]) && e.types.indexOf("word") < 0 && (s[0] = e.token[r.count].replace(/\/\*\s*global\s+/, c).replace("*/", c).replace(/,\s+/g, ",").split(","));
  }
  function O() {
    pe(!1), oe(), d > -1 && b(), N = Qt({
      chars: a,
      end: C,
      lexer: "script",
      begin: "//",
      start: m,
      ender: z
    }), m = N[1], N[0] !== c && (p = N[0], w = Tt.test(p) ? "ignore" : "comment", p.indexOf("# sourceMappingURL=") === 2 && (t[0] = r.count + 1, t[1] = p), r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: w
    }, c));
  }
  function ke() {
    let y = 0, x = 0, q = m + 1, v = !1, E = C, me = ["/"];
    if (q < E)
      do {
        if (me.push(a[q]), (T(a[q - 1], 92) || i(a[q - 2], 92)) && (i(a[q], 91) && (v = !0), i(a[q], 93) && (v = !1)), i(a[q], 47) && v === !1)
          if (i(a[q - 1], 92)) {
            if (x = 0, y = q - 1, y > 0)
              do {
                if (i(a[y], 92))
                  x = x + 1;
                else
                  break;
                y = y - 1;
              } while (y > 0);
            if (x % 2 === 0)
              break;
          } else
            break;
        q = q + 1;
      } while (q < E);
    return a[q + 1] === "g" || a[q + 1] === "i" || a[q + 1] === "m" || a[q + 1] === "y" || a[q + 1] === "u" ? (me.push(a[q + 1]), a[q + 2] !== a[q + 1] && (a[q + 2] === "g" || a[q + 2] === "i" || a[q + 2] === "m" || a[q + 2] === "y" || a[q + 2] === "u") ? (me.push(a[q + 2]), a[q + 3] !== a[q + 1] && a[q + 3] !== a[q + 2] && (a[q + 3] === "g" || a[q + 3] === "i" || a[q + 3] === "m" || a[q + 3] === "y" || a[q + 3] === "u") ? (me.push(a[q + 3]), a[q + 4] !== a[q + 1] && a[q + 4] !== a[q + 2] && a[q + 4] !== a[q + 3] && (a[q + 4] === "g" || a[q + 4] === "i" || a[q + 4] === "m" || a[q + 4] === "y" || a[q + 4] === "u") ? (me.push(a[q + 4]), a[q + 5] !== a[q + 1] && a[q + 5] !== a[q + 2] && a[q + 5] !== a[q + 3] && a[q + 5] !== a[q + 4] && (a[q + 5] === "g" || a[q + 5] === "i" || a[q + 5] === "m" || a[q + 5] === "y" || a[q + 5] === "u") ? (me.push(a[q + 4]), m = q + 5) : m = q + 4) : m = q + 3) : m = q + 2) : m = q + 1) : m = q, me.join(c);
  }
  function K() {
    let y = [a[m]], x = 0, q = i(y[0], 46), v = /zz/;
    if (m < C - 2 && a[m] === "0" && (a[m + 1] === "x" ? v = /[0-9a-fA-F]/ : a[m + 1] === "o" ? v = /[0-9]/ : a[m + 1] === "b" && (v = /0|1/), v.test(a[m + 2]))) {
      y.push(a[m + 1]), x = m + 1;
      do
        x = x + 1, y.push(a[x]);
      while (v.test(a[x + 1]));
      return m = x, y.join(c);
    }
    if (x = m + 1, x < C)
      do {
        if (He(a[x]) || i(a[x], 46) && q === !1)
          y.push(a[x]), i(a[x], 46) && (q = !0);
        else
          break;
        x = x + 1;
      } while (x < C);
    if (x < C - 1 && (He(a[x - 1]) || He(a[x - 2]) && (i(a[x - 1], 45) || i(a[x - 1], 43))) && (a[x] === "e" || a[x] === "E") && (y.push(a[x]), (i(a[x + 1], 45) || i(a[x + 1], 43)) && (y.push(a[x + 1]), x = x + 1), q = !1, x = x + 1, x < C))
      do {
        if (He(a[x]) || i(a[x], 46) && q === !1)
          y.push(a[x]), i(a[x], 46) && (q = !0);
        else
          break;
        x = x + 1;
      } while (x < C);
    return m = x - 1, y.join(c);
  }
  function se() {
    let y = 0, x = 0, q = C, v = c, E = [
      "=",
      "<",
      ">",
      "+",
      "*",
      "?",
      "|",
      "^",
      ":",
      "&",
      "%",
      "~"
    ], me = E.length;
    if (d > -1 && b(), i(a[m], 47) && r.count > -1 && (w !== "word" && w !== "reference" || p === "typeof" || p === "return" || p === "else") && w !== "number" && w !== "string" && w !== "end")
      return p === "return" || p === "typeof" || p === "else" || w !== "word" ? (p = ke(), w = "regex") : (p = "/", w = "operator"), D(), "regex";
    if (i(a[m], 63) && ("+-*/.?".indexOf(a[m + 1]) > -1 || i(a[m + 1], 58) && E.join(c).indexOf(a[m + 2]) < 0) && (i(a[m + 1], 46) && He(a[m + 2]) === !1 ? v = "?." : i(a[m + 1], 63) && (v = "??"), v === c))
      return "?";
    if (i(a[m], 58) && "+-*/".indexOf(a[m + 1]) > -1)
      return ":";
    if (m < C - 1) {
      if (T(a[m], 60) && i(a[m + 1], 60))
        return a[m];
      if (i(a[m], 33) && i(a[m + 1], 47))
        return "!";
      if (i(a[m], 45) && (h[h.length - 1] = !1, i(a[m + 1], 45) ? v = "--" : i(a[m + 1], 61) ? v = "-=" : i(a[m + 1], 62) && (v = "->"), v === c))
        return "-";
      if (i(a[m], 43) && (h[h.length - 1] = !1, i(a[m + 1], 43) ? v = "++" : i(a[m + 1], 61) && (v = "+="), v === c))
        return "+";
      if (i(a[m], 61) && T(a[m + 1], 61) && T(a[m + 1], 33) && T(a[m + 1], 62))
        return h[h.length - 1] = !1, "=";
    }
    if (i(a[m], 59))
      if (r.language === "typescript") {
        if (e.stack[r.count] === "arguments")
          e.token[r.count] === "?" && (r.pop(e), v = "?:", m = m - 1), h[h.length - 1] = !0;
        else if (i(p, 41) && (e.token[e.begin[r.count] - 1] === "function" || e.token[e.begin[r.count] - 2] === "function"))
          h[h.length - 1] = !0;
        else if (w === "reference") {
          y = r.count;
          let te = !1;
          do {
            if (e.begin[y] === e.begin[r.count]) {
              if (y < r.count && e.token[y] === ":" && e.types[y + 1] !== "type" && (te = !0), e.token[y] === "?" && te === !1 || e.token[y] === ";" || e.token[y] === "x;")
                break;
              if (e.token[y] === "var" || e.token[y] === "let" || e.token[y] === "const" || e.types[y] === "type") {
                h[h.length - 1] = !0;
                break;
              }
            } else {
              if (e.types[y] === "type_end") {
                h[h.length - 1] = !0;
                break;
              }
              y = e.begin[y];
            }
            y = y - 1;
          } while (y > e.begin[r.count]);
        }
      } else
        e.token[r.count - 1] === "[" && (e.types[r.count] === "word" || e.types[r.count] === "reference") && (r.stack.update("attribute"), e.stack[r.count] = "attribute");
    if (v === c)
      if (i(a[m + 1], 43) && i(a[m + 2], 43) || i(a[m + 1], 45) && i(a[m + 2], 45))
        v = a[m];
      else {
        let te = [a[m]];
        if (y = m + 1, y < q)
          do {
            if (i(a[y], 43) && i(a[y + 1], 43) || i(a[y], 45) && i(a[y + 1], 45))
              break;
            if (x = 0, x < me)
              do {
                if (a[y] === E[x]) {
                  te.push(E[x]);
                  break;
                }
                x = x + 1;
              } while (x < me);
            if (x === me)
              break;
            y = y + 1;
          } while (y < q);
        v = te.join(c);
      }
    if (m = m + (v.length - 1), v === "=>" && i(p, 41)) {
      y = r.count, q = e.begin[y];
      do
        e.begin[y] === q && (e.stack[y] = "method"), y = y - 1;
      while (y > q - 1);
    }
    return v;
  }
  function J() {
    let y = [a[m]];
    if (m = m + 1, m < C)
      do {
        if (y.push(a[m]), i(a[m], 96) && (T(a[m - 1], 92) || !P(m - 1)) || i(a[m - 1], 36) && i(a[m], 123) && (T(a[m - 2], 92) || !P(m - 2)))
          break;
        m = m + 1;
      } while (m < C);
    return y.join(c);
  }
  function $e() {
    let y = 0, x = !1, q = !1, v = 0, E = 0, me = 0, te = c, R = c, Q = c, W = [], U = h[h.length - 1], Z = "0123456789=<>+-*?|^:&.,;%(){}[]~";
    function ae() {
      i(p, 40) && r.stack.update("paren", r.count), r.external("html", W.join(c));
    }
    if (d > -1 && b(), R = r.count > 0 ? e.token[r.count - 1] : c, Q = r.count > 0 ? e.types[r.count - 1] : c, te = B(1, !1), r.language !== "jsx" && r.language !== "tsx" && He(te) === !1 && (p === "function" || R === "=>" || R === "void" || R === "." || p === "return" || w === "operator" || e.stack[r.count] === "arguments" || w === "type" && R === "type" || w === "reference" && (Q === "operator" || R === "function" || R === "class" || R === "new") || w === "type" && Q === "operator")) {
      let he = [], de = 0, fe = 0;
      y = m;
      do {
        if (he.push(a[y]), i(a[y], 60))
          de = de + 1;
        else if (i(a[y], 62) && (de = de - 1, de < 1))
          break;
        y = y + 1;
      } while (y < C);
      if (fe = m, m = y, te = B(1, !1), i(a[y], 62) && (U === !0 || R === "=>" || R === "." || Q !== "operator" || Q === "operator" && (i(te, 40) || i(te, 61)))) {
        w = "generic", p = he.join(c).replace(/^<\s+/, "<").replace(/\s+>$/, ">").replace(/,\s*/g, ", "), D();
        return;
      }
      m = fe;
    }
    if (y = r.count, e.types[y] === "comment")
      do
        y = y - 1;
      while (y > 0 && e.types[y] === "comment");
    if (U === !1 && B(1, !1) !== ">" && (T(a[m], 60) && Z.indexOf(a[m + 1]) > -1 || e.token[y] === "++" || e.token[y] === "--" || ce(a[m + 1]) === !0 || He(a[m + 1]) === !0 && (w === "operator" || w === "string" || w === "number" || w === "reference" || w === "word" && p !== "return")))
      return w = "operator", p = se(), D();
    if (r.language !== "typescript" && (e.token[y] === "return" || e.types[y] === "operator" || e.types[y] === "start" || e.types[y] === "separator" || e.types[y] === "jsx_attribute_start" || i(e.token[y], 125) && r.stack.token === "global")) {
      w = "markup", r.language = "jsx";
      do {
        if (W.push(a[m]), i(a[m], 123))
          E = E + 1, x = !0;
        else if (i(a[m], 125))
          E = E - 1, E === 0 && (x = !1);
        else if (i(a[m], 60) && x === !1) {
          if (i(a[m + 1], 60))
            do
              W.push(a[m]), m = m + 1;
            while (m < C && i(a[m + 1], 60));
          v = v + 1, i(B(1, !1), 47) && (q = !0);
        } else if (i(a[m], 62) && x === !1) {
          if (i(a[m + 1], 62))
            do
              W.push(a[m]), m = m + 1;
            while (i(a[m + 1], 62));
          if (v = v - 1, q === !0 ? me = me - 1 : T(a[m - 1], 47) && (me = me + 1), v === 0 && E === 0 && me < 1) {
            if (te = B(2, !1), T(te, 60))
              return ae();
            if (i(te, 60) && Z.indexOf(te.charAt(1)) < 0 && ce(te.charAt(1)) === !1) {
              y = m + 1;
              do {
                if (y = y + 1, i(a[y], 62) || ce(a[y - 1]) && Z.indexOf(a[y]) < 0)
                  break;
                if (Z.indexOf(a[y]) > -1)
                  return ae();
              } while (y < C);
            } else
              return ae();
          }
          q = !1;
        }
        m = m + 1;
      } while (m < C);
      return ae();
    }
    w = "operator", p = se(), D();
  }
  function $() {
    let y = !0, x = "+", q = c, v = c, E = c, me = c, te = 0, R = 0, Q = 0, W = [];
    function U() {
      R = e.begin[R] - 1, e.types[R] === "end" ? U() : i(e.token[R - 1], 46) && Z();
    }
    function Z() {
      R = R - 2, e.types[R] === "end" ? U() : i(e.token[R - 1], 46) && Z();
    }
    function ae() {
      let de = 0;
      if (de < W.length)
        do
          r.push(e, W[de], c), de = de + 1;
        while (de < W.length);
    }
    function he(de) {
      return {
        begin: e.begin[de],
        ender: e.ender[de],
        lexer: e.lexer[de],
        lines: e.lines[de],
        stack: e.stack[de],
        token: e.token[de],
        types: e.types[de]
      };
    }
    if (q = e.token[r.count], v = e.token[r.count - 1], E = e.token[r.count - 2], q !== "++" && q !== "--" && v !== "++" && v !== "--" && (R = r.count, e.types[R] === "end" ? U() : i(e.token[R - 1], 46) && Z()), e.token[R - 1] === "++" || e.token[R - 1] === "--") {
      if ("startendoperator".indexOf(e.types[R - 2]) > -1)
        return;
      if (Q = R, Q < r.count + 1) {
        do
          W.push(he(Q)), Q = Q + 1;
        while (Q < r.count + 1);
        r.splice({ data: e, howmany: r.count - R, index: R });
      }
    } else {
      if (n.correct === !1 || q !== "++" && q !== "--" && v !== "++" && v !== "--")
        return;
      if (me = B(1, !1), (q === "++" || q === "--") && (i(a[m], 59) || i(me, 59) || i(a[m], 125) || i(me, 125) || i(a[m], 41) || i(me, 41))) {
        if (x = e.stack[r.count], x === "array" || x === "method" || x === "object" || x === "paren" || x === "notation" || e.token[e.begin[r.count] - 1] === "while" && x !== "while")
          return;
        Q = r.count;
        do {
          if (Q = Q - 1, e.token[Q] === "return")
            return;
          if (e.types[Q] === "end")
            do
              Q = e.begin[Q] - 1;
            while (e.types[Q] === "end" && Q > 0);
        } while (Q > 0 && (i(e.token[Q], 46) || e.types[Q] === "word" || e.types[Q] === "reference" || e.types[Q] === "end"));
        if (i(e.token[Q], 44) && T(a[m], 59) && T(me, 59) && T(a[m], 125) && T(me, 125) && T(a[m], 41) && T(me, 41))
          return;
        if (e.types[Q] === "operator")
          if (e.stack[Q] === "switch" && i(e.token[Q], 58))
            do {
              if (Q = Q - 1, e.types[Q] === "start") {
                if (te = te - 1, te < 0)
                  break;
              } else
                e.types[Q] === "end" && (te = te + 1);
              if (i(e.token[Q], 63) && te === 0)
                return;
            } while (Q > 0);
          else
            return;
        y = !1, x = q === "--" ? "-" : "+";
      } else if (i(E, 91) || i(E, 59) || i(E, 123) || i(E, 125) || i(E, 40) || i(E, 41) || i(E, 44) || E === "return" || E === "x;")
        if (q === "++" || q === "--") {
          if (i(E, 91) || i(E, 40) || i(E, 44) || E === "return")
            return;
          q === "--" && (x = "-"), y = !1;
        } else
          (v === "--" || q === "--") && (x = "-");
      else
        return;
      if (y === !1 && (M = r.pop(e)), R = r.count, e.types[R] === "end" ? U() : i(e.token[R - 1], 46) && Z(), Q = R, Q < r.count + 1)
        do
          W.push(he(Q)), Q = Q + 1;
        while (Q < r.count + 1);
    }
    y === !0 ? (r.splice({
      data: e,
      howmany: 1,
      index: R - 1
    }), p = "=", w = "operator", D(), ae(), p = x, w = "operator", D(), p = "1", w = "number", D()) : (p = "=", w = "operator", D(), ae(), p = x, w = "operator", D(), p = "1", w = "number", D()), p = e.token[r.count], w = e.types[r.count], i(me, 125) && T(a[m], 59) && pe(!1);
  }
  function G(y, x, q) {
    let v = 0, E = !1, me = !1, te = [y], R, Q = x.split(c), W = Q.length, U = m, Z = m + y.length, ae = A.quoteConvert;
    function he() {
      let fe = 0;
      if (te = [], w = q, v = m, q === "string" && ce(a[v + 1])) {
        fe = 1;
        do
          v = v + 1, i(a[v], 10) && (fe = fe + 1);
        while (v < C && ce(a[v + 1]) === !0);
        r.lineOffset = fe;
      }
    }
    function de() {
      let fe = c;
      function re(be) {
        if (r.language !== "javascript" && r.language !== "typescript" && r.language !== "jsx" && r.language !== "tsx") {
          let xe = (ye) => ye.replace(/\s*$/, " "), ve = (ye) => ye.replace(/^\s*/, " ");
          return /\{(#|\/|(%>)|(%\]))/.test(be) || /\}%(>|\])/.test(be) || (be = be.replace(/\{((\{+)|%-?)\s*/g, xe), be = be.replace(/\s*((\}\}+)|(-?%\}))/g, ve)), be;
        }
        return be;
      }
      if (i(y, 34) && ae === "single" ? (te[0] = je, te[te.length - 1] = je) : i(y, 39) && ae === "double" ? (te[0] = Be, te[te.length - 1] = Be) : E === !0 && (fe = te[te.length - 1], te.pop(), te.pop(), te.push(fe)), m = v, x === z && (m = m - 1, te.pop()), p = te.join(c), (i(y, 34) || i(y, 39) || y === "{{" || y === "{%") && (p = re(p)), y === "{%" || y === "{{") {
        R = H(p), w = R[0], D(R[1]);
        return;
      }
      if (q === "string") {
        if (w = "string", r.language === "json")
          p = p.replace(/\\u[\dA-F]{4}/gi, (be) => String.fromCharCode(parseInt(be.replace(/\\u/g, ""), 16)));
        else if (y.indexOf("#!") === 0)
          p = p.slice(0, p.length - 1), r.lineOffset = 2;
        else if ((r.stack.token !== "object" || r.stack.token === "object" && T(B(1, !1), 58) && T(e.token[r.count], 44) && T(e.token[r.count], 123)) && (p.length > n.wrap && n.wrap > 0 || n.wrap !== 0 && i(e.token[r.count], 43) && (i(e.token[r.count - 1], 46) || i(e.token[r.count - 1], 39)))) {
          let be = p, xe = c, ve = ae === "double" ? Be : ae === "single" ? je : be.charAt(0), ye = n.wrap, Ze = /u[0-9a-fA-F]{4}/, Pe = /x[0-9a-fA-F]{2}/;
          if (be = be.slice(1, be.length - 1), i(e.token[r.count], 43) && (i(e.token[r.count - 1], 46) || i(e.token[r.count - 1], 39)) && (r.pop(e), ve = e.token[r.count].charAt(0), be = e.token[r.count].slice(1, e.token[r.count].length - 1) + be, r.pop(e)), be.length > ye && ye > 0)
            do
              xe = be.slice(0, ye), i(xe[ye - 5], 92) && Ze.test(be.slice(ye - 4, ye + 1)) ? xe = xe.slice(0, ye - 5) : i(xe[ye - 4], 92) && Ze.test(be.slice(ye - 3, ye + 2)) ? xe = xe.slice(0, ye - 4) : i(xe[ye - 3], 92) && (Ze.test(be.slice(ye - 2, ye + 3)) || Pe.test(be.slice(ye - 2, ye + 1))) ? xe = xe.slice(0, ye - 3) : i(xe[ye - 2], 92) && (Ze.test(be.slice(ye - 1, ye + 4)) || Pe.test(be.slice(ye - 1, ye + 2))) ? xe = xe.slice(0, ye - 2) : i(xe[ye - 1], 92) && (xe = xe.slice(0, ye - 1)), xe = ve + xe + ve, be = be.slice(xe.length - 2), p = xe, w = "string", D(c), r.lineOffset = 0, p = "+", w = "operator", D(c);
            while (be.length > ye);
          p = be === c ? ve + ve : ve + be + ve, w = "string";
        }
      } else
        /\{\s*\?>$/.test(p) ? w = "liquid_start" : w = q;
      p.length > 0 && D(c);
    }
    if (d > -1 && b(), i(a[m - 1], 92) && P(m - 1) === !0 && (i(a[m], 34) || i(a[m], 39)))
      if (r.pop(e), i(e.token[0], 123))
        i(a[m], 34) ? (y = Be, x = '\\"', te = [Be]) : (y = je, x = "\\'", te = [je]), E = !0;
      else {
        if (i(a[m], 34)) {
          te = ['\\"'], de();
          return;
        }
        te = ["\\'"], de();
        return;
      }
    if (v = Z, v < C)
      do {
        if (T(e.token[0], 123) && T(e.token[0], 91) && ae !== "none" && (i(a[v], 34) || i(a[v], 39)) ? (i(a[v - 1], 92) ? P(v - 1) === !0 && (ae === "double" && i(a[v], 39) || ae === "single" && i(a[v], 34)) && te.pop() : ae === "double" && i(a[v], 34) && i(a[m], 39) ? a[v] = Be : ae === "single" && i(a[v], 39) && i(a[m], 34) && (a[v] = je), te.push(a[v])) : v > U ? (me = !0, i(a[v], 123) && i(a[v + 1], 37) && a[v + 2] !== y ? (de(), G("{%", "%}", "liquid"), he()) : i(a[v], 123) && i(a[v + 1], 123) && a[v + 2] !== y ? (de(), G("{{", "}}", "liquid"), he()) : (me = !1, te.push(a[v]))) : te.push(a[v]), r.language !== "json" && r.language !== "javascript" && (i(y, 34) || i(y, 39)) && (me === !0 || v > U) && T(a[v - 1], 92) && T(a[v], 34) && T(a[v], 39) && (i(a[v], 10) || v === C - 1)) {
          r.error = "Unterminated string in script on line number " + r.lineNumber;
          break;
        }
        if (a[v] === Q[W - 1] && (T(a[v - 1], 92) || P(v - 1) === !1) && (W === 1 || te[v - Z] === Q[0] && te.slice(v - Z - W + 2).join(c) === x))
          break;
        v = v + 1;
      } while (v < C);
    de();
  }
  function oe() {
    let y = c, x = B(5, !1), q = r.count, v = r.lineOffset;
    if (!(r.language === "json" || k.length < 1 || k[k.length - 1].charAt(0) !== "x" || /^x?(;|\}|\))$/.test(p) === !1) && !(e.stack[r.count] === "do" && x === "while" && i(e.token[r.count], 125))) {
      if (i(p, 59) && e.token[q - 1] === "x{") {
        if (y = e.token[e.begin[q - 2] - 1], e.token[q - 2] === "do" || i(e.token[q - 2], 41) && "ifforwhilecatch".indexOf(y) > -1) {
          M = r.pop(e), p = n.correct === !0 ? "}" : "x}", w = "end", L = r.stack.entry, D(), k.pop(), r.lineOffset = v;
          return;
        }
        M = r.pop(e), p = n.correct === !0 ? "}" : "x}", w = "end", L = r.stack.entry, D(), k.pop(), p = ";", w = "end", r.push(e, M, c), r.lineOffset = v;
        return;
      }
      if (p = n.correct === !0 ? "}" : "x}", w = "end", e.token[r.count] !== "x}") {
        if (x === "else" && e.stack[r.count] === "if" && (i(e.token[r.count], 59) || e.token[r.count] === "x;")) {
          L = r.stack.entry, D(), k.pop(), r.lineOffset = v;
          return;
        }
        do
          if (L = r.stack.entry, D(), k.pop(), e.stack[r.count] === "do")
            break;
        while (k[k.length - 1] === "x{");
        r.lineOffset = v;
      }
    }
  }
  function ne() {
    let y = r.count;
    if (e.stack[y] === "object" && A.objectSort === !0)
      p = ",", w = "separator", ge(), D();
    else {
      do
        y = y - 1;
      while (y > 0 && e.types[y - 1] === "comment");
      r.splice({
        data: e,
        howmany: 0,
        index: y,
        record: {
          begin: e.begin[y],
          ender: -1,
          lexer: "script",
          lines: r.lineOffset,
          stack: e.stack[y],
          token: ",",
          types: "separator"
        }
      }), D();
    }
  }
  function Y(y) {
    let x = !1, q = !1, v = B(1, !1), E = i(e.token[r.count], 40) ? r.count : e.begin[r.count];
    function me() {
      let te = 0, R = e.token[E - 1] === "Array", Q = R ? "[" : "{", W = R ? "]" : "}", U = R ? "array" : "object";
      if (R === !0 && e.types[r.count] === "number" && (te = Number(e.token[r.count]), M = r.pop(e)), M = r.pop(e), M = r.pop(e), M = r.pop(e), r.stack.pop(), p = Q, w = "start", D(U), te > 0) {
        p = ",", w = "separator";
        do
          D(), te = te - 1;
        while (te > 0);
      }
      p = W, w = "end", D();
    }
    if (d > -1 && b(), f.length > 0 && (f[f.length - 1] === 0 ? f.pop() : f[f.length - 1] = f[f.length - 1] - 1), (i(y, 41) || y === "x)" || i(y, 93)) && (n.correct === !0 && $(), ge()), (i(y, 41) || y === "x)") && pe(!1), le > -1 && (i(y, 125) && (A.variableList === "list" && V.count[le] === 0 || e.token[r.count] === "x;" && A.variableList === "each") && j(), V.count[le] = V.count[le] - 1, V.count[le] < 0 && j()), i(p, 44) && e.stack[r.count] !== "initializer" && (i(y, 93) && i(e.token[r.count - 1], 91) || i(y, 125)) && (M = r.pop(e)), i(y, 41) || y === "x)" ? (p = y, o.length > 0 && (_ = o[o.length - 1], _.length > 1 && T(v, 123) && (_[0] === "if" || _[0] === "for" || _[0] === "with" || _[0] === "while" && e.stack[_[1] - 2] !== void 0 && e.stack[_[1] - 2] !== "do") && (x = !0))) : i(y, 93) ? p = "]" : i(y, 125) && (T(p, 44) && n.correct === !0 && $(), r.stack.length > 0 && r.stack.token !== "object" && pe(!0), A.objectSort === !0 && r.stack.token === "object" && $t(e), w === "comment" && (p = e.token[r.count], w = e.types[r.count]), p = "}"), r.stack.token === "data_type" ? w = "type_end" : w = "end", o.pop(), L = r.stack.entry, i(y, 41) && n.correct === !0 && E - r.count < 2 && (i(e.token[r.count], 40) || e.types[r.count] === "number") && (e.token[E - 1] === "Array" || e.token[E - 1] === "Object") && e.token[E - 2] === "new" && (me(), q = !0), k[k.length - 1] === "x{" && i(y, 125) ? (oe(), k.pop(), e.stack[r.count] !== "try" && T(v, 58) && T(v, 59) && e.token[e.begin[m] - 1] !== "?" && oe(), p = "}") : k.pop(), A.endComma !== void 0 && A.endComma !== "none" && r.stack.token === "array" || r.stack.token === "object" || r.stack.token === "data_type")
      if (A.endComma === "always" && T(e.token[r.count], 44)) {
        let te = r.stack.index, R = r.count;
        do {
          if (e.begin[R] === te) {
            if (i(e.token[R], 44))
              break;
          } else
            R = e.begin[R];
          R = R - 1;
        } while (R > te);
        if (R > te) {
          let Q = w, W = p;
          p = ",", w = "separator", D(), p = W, w = Q;
        }
      } else
        A.endComma === "never" && i(e.token[r.count], 44) && r.pop(e);
    q === !1 && (D(), i(p, 125) && e.stack[r.count] !== "object" && e.stack[r.count] !== "class" && e.stack[r.count] !== "data_type" && (s.pop(), oe())), x === !0 && (p = n.correct === !0 ? "{" : "x{", w = "start", D(_[0]), k.push("x{"), _[1] = r.count), h.pop(), r.stack.token !== "data_type" && (h[h.length - 1] = !1);
  }
  function F(y) {
    let x = r.count, q = c, v = c, E = c, me = !1;
    if (k.push(y), i(y, 123) && (e.types[r.count] === "type" || e.types[r.count] === "type_end" || e.types[r.count] === "generic")) {
      let te = 0;
      e.types[r.count] === "type_end" && (x = e.begin[r.count]), te = x;
      do
        if (x = x - 1, e.begin[x] !== te && e.begin[x] !== -1 || i(e.token[x], 58))
          break;
      while (x > e.begin[x]);
      i(e.token[x], 58) && e.stack[x - 1] === "arguments" ? (h.push(!1), me = !0) : h.push(h[h.length - 1]), x = r.count;
    } else
      i(y, 91) && e.types[r.count] === "type_end" ? h.push(!0) : h.push(h[h.length - 1]);
    if (d > -1 && (b(), x = r.count), le > -1 && (V.count[le] = V.count[le] + 1), e.token[x - 1] === "function" ? o.push(["function", x + 1]) : o.push([p, x + 1]), p = y, h[h.length - 1] === !0 ? w = "type_start" : w = "start", i(y, 40) || y === "x(" ? ge() : i(y, 91) && (l > -1 ? (e.begin[l - 1] === e.begin[e.begin[x] - 1] || e.token[e.begin[x]] === "x(") && (l = -1, n.correct === !0 ? Y(")") : Y("x)"), ge(), p = "{", w = "start") : i(p, 41) && ge(), w === "comment" && i(e.token[x - 1], 41) && (p = e.token[x], e.token[x] = "{", w = e.types[x], e.types[x] = "start")), q = (() => {
      let te = r.count;
      if (e.types[te] === "comment")
        do
          te = te - 1;
        while (te > 0 && e.types[te] === "comment");
      return e.token[te];
    })(), v = e.stack[x] === void 0 ? c : (() => {
      let te = r.count;
      if (e.types[te] === "comment")
        do
          te = te - 1;
        while (te > 0 && e.types[te] === "comment");
      return e.token[e.begin[te] - 1];
    })(), i(p, 123) && (e.types[x] === "word" || i(e.token[x], 93))) {
      let te = x;
      if (i(e.token[te], 93))
        do
          te = e.begin[te] - 1;
        while (i(e.token[te], 93));
      do {
        if (e.types[te] === "start" || e.types[te] === "end" || e.types[te] === "operator")
          break;
        te = te - 1;
      } while (te > 0);
      i(e.token[te], 58) && e.stack[te - 1] === "arguments" && (E = "function", s.push(g), g = []);
    }
    if (w === "type_start")
      E = "data_type";
    else if (E === c && (i(p, 123) || p === "x{")) {
      if (q === "else" || q === "do" || q === "try" || q === "finally" || q === "switch")
        E = q;
      else if (f[f.length - 1] === 0 && q !== "return")
        f.pop(), E = "class";
      else if (e.token[x - 1] === "class")
        E = "class";
      else if (i(e.token[x], 93) && i(e.token[x - 1], 91))
        E = "array";
      else if ((e.types[x] === "word" || e.types[x] === "reference") && (e.types[x - 1] === "word" || e.types[x - 1] === "reference" || e.token[x - 1] === "?" && (e.types[x - 2] === "word" || e.types[x - 2] === "reference")) && e.token[x] !== "in" && e.token[x - 1] !== "export" && e.token[x - 1] !== "import")
        E = "map";
      else if (e.stack[x] === "method" && e.types[x] === "end" && (e.types[e.begin[x] - 1] === "word" || e.types[e.begin[x] - 1] === "reference") && e.token[e.begin[x] - 2] === "new")
        E = "initializer";
      else if (i(p, 123) && (i(q, 41) || q === "x)") && (e.types[e.begin[x] - 1] === "word" || e.types[e.begin[x] - 1] === "reference" || e.token[e.begin[x] - 1] === "]"))
        v === "if" ? E = "if" : v === "for" ? E = "for" : v === "while" ? E = "while" : v === "class" ? E = "class" : v === "switch" || e.token[e.begin[x] - 1] === "switch" ? E = "switch" : v === "catch" ? E = "catch" : E = "function";
      else if (i(p, 123) && (i(q, 59) || q === "x;"))
        E = "block";
      else if (i(p, 123) && i(e.token[x], 58) && e.stack[x] === "switch")
        E = "block";
      else if (e.token[x - 1] === "import" || e.token[x - 2] === "import" || e.token[x - 1] === "export" || e.token[x - 2] === "export")
        E = "object";
      else if (i(q, 41) && (_[0] === "function" || _[0] === "if" || _[0] === "for" || _[0] === "class" || _[0] === "while" || _[0] === "switch" || _[0] === "catch"))
        E = _[0];
      else if (e.stack[x] === "notation")
        E = "function";
      else if ((e.types[x] === "number" || e.types[x] === "string" || e.types[x] === "word" || e.types[x] === "reference") && (e.types[x - 1] === "word" || e.types[x - 1] === "reference") && e.token[e.begin[x] - 1] !== "for")
        E = "function";
      else if (r.stack.length > 0 && T(e.token[x], 58) && r.stack.token === "object" && (i(e.token[e.begin[x] - 2], 123) || i(e.token[e.begin[x] - 2], 44)))
        E = "function";
      else if (e.types[_[1] - 1] === "markup" && e.token[_[1] - 3] === "function")
        E = "function";
      else if (q === "=>")
        E = "function";
      else if (me === !0 || e.types[r.count] === "type_end" && e.stack[e.begin[r.count] - 2] === "arguments")
        E = "function";
      else if (i(q, 41) && e.stack[x] === "method" && (e.types[e.begin[x] - 1] === "word" || e.types[e.begin[x] - 1] === "property" || e.types[e.begin[x] - 1] === "reference"))
        E = "function";
      else if (i(p, 123) && e.types[x] === "word" && e.token[x] !== "return" && e.token[x] !== "in" && e.token[x] !== "import" && e.token[x] !== "const" && e.token[x] !== "let" && e.token[x] !== c)
        E = "block";
      else if (i(p, 123) && "if|else|for|while|function|class|switch|catch|finally".indexOf(e.stack[x]) > -1 && (e.token[x] === "x}" || i(e.token[x], 125)))
        E = "block";
      else if (e.stack[x] === "arguments")
        E = "function";
      else if (e.types[x] === "generic")
        do {
          if (x = x - 1, e.token[x] === "function" || e.stack[x] === "arguments") {
            E = "function";
            break;
          }
          if (e.token[x] === "interface") {
            E = "map";
            break;
          }
          if (i(e.token[x], 59)) {
            E = "object";
            break;
          }
        } while (x > e.begin[r.count]);
      else
        E = "object";
      E !== "object" && E !== "class" && (E === "function" ? (s.push(g), g = []) : s.push([]));
    } else
      i(p, 91) ? E = "array" : (i(p, 40) || p === "x(") && (q === "function" || e.token[x - 1] === "function" || e.token[x - 1] === "function*" || e.token[x - 2] === "function" ? E = "arguments" : i(e.token[x - 1], 46) || i(e.token[e.begin[x] - 2], 46) || e.types[x] === "generic" || i(e.token[x], 125) && e.stack[x] === "function" ? E = "method" : q === "if" || q === "for" || q === "class" || q === "while" || q === "catch" || q === "finally" || q === "switch" || q === "with" ? E = "expression" : e.types[x] === "word" || e.types[x] === "property" || e.types[x] === "reference" ? E = "method" : E = "paren");
    D(E), f.length > 0 && (f[f.length - 1] = f[f.length - 1] + 1);
  }
  function H(y) {
    let x = 2, q = 0, v = c, E = y.slice(0, 2), me = y.length;
    if (i(y[2], 45) && (x = x + 1), ce(y.charAt(x)) === !0)
      do
        x = x + 1;
      while (ce(y.charAt(x)) === !0 && x < me);
    q = x;
    do
      q = q + 1;
    while (ce(y.charAt(q)) === !1 && y.charAt(q) !== "(" && q < me);
    if (q === me && (q = y.length - 2), v = y.slice(x, q), v === "else" || E === "{%" && (v === "elseif" || v === "when" || v === "elif" || v === "elsif"))
      return ["liquid_else", `liquid_${v}`];
    if (E === "{{")
      return v === "end" ? ["liquid_end", c] : (
        //  (name === 'block' && (/\{%\s*\w/).test(source) === false) ||
        v === "define" || v === "form" || v === "if" || v === "unless" || v === "range" || v === "with" ? ["liquid_start", `liquid_${v}`] : ["liquid", c]
      );
    if (q = S.length - 1, q > -1)
      do {
        if (v === S[q] && v !== "block")
          return ["liquid_start", `liquid_${v}`];
        if (v === "end" + S[q])
          return [
            "liquid_end",
            c
          ];
        q = q - 1;
      } while (q > -1);
    return ["liquid", c];
  }
  function b() {
    let y = d, x = 1, q = c, v = c, E = p, me = w, te = [];
    function R() {
      k.push("x{"), r.splice({
        data: e,
        howmany: 1,
        index: r.count - 3
      });
    }
    function Q(W, U, Z) {
      let ae = e.begin[W], he = 0;
      do {
        if (e.token[W] === U && e.types[W] === "word") {
          if (Z === !0)
            e.types[W] = "reference";
          else if (e.begin[W] > ae && e.token[e.begin[W]] === "{" && e.stack[W] !== "object" && e.stack[W] !== "class" && e.stack[W] !== "data_type")
            if (e.stack[W] === "function")
              e.types[W] = "reference";
            else {
              he = e.begin[W];
              do {
                if (e.stack[he] === "function") {
                  e.types[W] = "reference";
                  break;
                }
                he = e.begin[he];
              } while (he > ae);
            }
        }
        W = W - 1;
      } while (W > ae);
    }
    do
      te.push(a[y]), i(a[y], 92), y = y + 1;
    while (y < m);
    if (p.charAt(0) === "\u201C" ? r.error = `Quote looking character (\u201C, \\u201c) used instead of actual quotes on line number ${r.lineNumber}` : p.charAt(0) === "\u201D" && (r.error = `Quote looking character (\u201D, \\u201d) used instead of actual quotes on line number ${r.lineNumber}`), q = te.join(c), d = -1, r.count > 0 && q === "function" && i(e.token[r.count], 40) && (i(e.token[r.count - 1], 123) || e.token[r.count - 1] === "x{") && (e.types[r.count] = "start"), r.count > 1 && q === "function" && i(p, 40) && (i(e.token[r.count - 1], 125) || e.token[r.count - 1] === "x}"))
      if (i(e.token[r.count - 1], 125)) {
        if (y = r.count - 2, y > -1)
          do {
            if (e.types[y] === "end" ? x = x + 1 : (e.types[y] === "start" || e.types[y] === "end") && (x = x - 1), x === 0)
              break;
            y = y - 1;
          } while (y > -1);
        if (i(e.token[y], 123) && i(e.token[y - 1], 41)) {
          if (x = 1, y = y - 2, y > -1)
            do {
              if (e.types[y] === "end" ? x = x + 1 : (e.types[y] === "start" || e.types[y] === "end") && (x = x - 1), x === 0)
                break;
              y = y - 1;
            } while (y > -1);
          e.token[y - 1] !== "function" && e.token[y - 2] !== "function" && (e.types[r.count] = "start");
        }
      } else
        e.types[r.count] = "start";
    if (n.correct === !0 && (q === "Object" || q === "Array") && i(a[m + 1], 40) && i(a[m + 2], 41) && i(e.token[r.count - 1], 61) && e.token[r.count] === "new")
      q === "Object" ? (e.token[r.count] = "{", p = "}", e.stack[r.count] = "object", r.stack.update("object")) : (e.token[r.count] = "[", p = "]", e.stack[r.count] = "array", r.stack.update("array")), e.types[r.count] = "start", w = "end", a[m + 1] = c, a[m + 2] = c, m = m + 2;
    else {
      if (x = r.count, y = x, A.variableList !== "none" && (q === "var" || q === "let" || q === "const")) {
        if (e.types[x] === "comment")
          do
            x = x - 1;
          while (x > 0 && e.types[x] === "comment");
        if (A.variableList === "list" && le > -1 && V.index[le] === x && q === V.word[le]) {
          p = ",", w = "separator", e.token[x] = p, e.types[x] = w, V.count[le] = 0, V.index[le] = x, V.word[le] = q;
          return;
        }
        le = le + 1, V.count.push(0), V.index.push(x), V.word.push(q), x = y;
      } else
        le > -1 && q !== V.word[le] && r.count === V.index[le] && i(e.token[V.index[le]], 59) && p !== V.word[le] && A.variableList === "list" && j();
      if (q === "from" && e.token[r.count] === "x;" && i(e.token[r.count - 1], 125) && ge(), q === "while" && e.token[r.count] === "x;" && i(e.token[r.count - 1], 125)) {
        let W = 0, U = r.count - 2;
        if (U > -1)
          do {
            if (e.types[U] === "end" ? W = W + 1 : e.types[U] === "start" && (W = W - 1), W < 0) {
              i(e.token[U], 123) && e.token[U - 1] === "do" && ge();
              return;
            }
            U = U - 1;
          } while (U > -1);
      }
      if (me === "comment") {
        let W = r.count;
        do
          W = W - 1;
        while (W > 0 && e.types[W] === "comment");
        me = e.types[W], E = e.token[W];
      }
      if (v = B(2, !1), q === "void")
        E === ":" && e.stack[r.count - 1] === "arguments" ? w = "type" : w = "word";
      else if ((r.stack.token === "object" || r.stack.token === "class" || r.stack.token === "data_type") && (i(e.token[r.count], 123) || i(e.token[e.begin[r.count]], 123) && i(e.token[r.count], 44) || e.types[r.count] === "liquid_end" && (i(e.token[e.begin[r.count] - 1], 123) || i(e.token[e.begin[r.count] - 1], 44))))
        q === "return" || q === "break" ? w = "word" : w = "property";
      else if (h[h.length - 1] === !0 || (r.language === "typescript" || r.language === "flow") && E === "type")
        w = "type";
      else if (s.length > 0 && (E === "function" || E === "class" || E === "const" || E === "let" || E === "var" || E === "new" || E === "void"))
        w = "reference", s[s.length - 1].push(q), r.language === "javascript" || r.language === "jsx" || r.language === "typescript" || r.language === "tsx" ? E === "var" || E === "function" && e.types[r.count - 1] !== "operator" && e.types[r.count - 1] !== "start" && e.types[r.count - 1] !== "end" ? Q(r.count, q, !0) : Q(r.count, q, !1) : Q(r.count, q, !1);
      else if (r.stack.token === "arguments" && w !== "operator")
        w = "reference", g.push(q);
      else if (i(E, 44) && e.stack[r.count] !== "method" && (e.stack[r.count] !== "expression" || e.token[e.begin[r.count] - 1] === "for")) {
        let W = r.count, U = r.stack.index;
        do {
          if (e.begin[W] === U) {
            if (e.token[W] === ";" || e.token[W] === "var" || e.token[W] === "let" || e.token[W] === "const" || e.token[W] === "type")
              break;
          } else
            e.types[W] === "end" && (W = e.begin[W]);
          W = W - 1;
        } while (W > U);
        s.length > 0 && e.token[W] === "var" ? (w = "reference", s[s.length - 1].push(q), r.language === "javascript" || r.language === "jsx" || r.language === "typescript" || r.language === "tsx" ? Q(W, q, !0) : Q(W, q, !1)) : s.length > 0 && (e.token[W] === "let" || e.token[W] === "const" || e.token[W] === "type" && (r.language === "typescript" || r.language === "tsx")) ? (w = "reference", s[s.length - 1].push(q), Q(W, q, !1)) : w = "word";
      } else if (r.stack.token !== "object" || r.stack.token === "object" && p !== "," && p !== "{") {
        let W = s.length, U = 0;
        if (W > 0) {
          do
            if (W = W - 1, U = s[W].length, U > 0) {
              do
                if (U = U - 1, q === s[W][U])
                  break;
              while (U > 0);
              if (q === s[W][U])
                break;
            }
          while (W > 0);
          s[W][U] === q && E !== "." ? w = "reference" : w = "word";
        } else
          w = "word";
      } else
        w = "word";
      p = q, q === "from" && e.token[r.count] === "}" && ge();
    }
    if (D(), q === "class" && f.push(0), q === "do" && (v = B(1, !0), v !== "{" && (p = n.correct === !0 ? "{" : "x{", w = "start", k.push("x{"), D("do"))), q === "else") {
      v = B(2, !0);
      let W = r.count - 1;
      if (e.types[W] === "comment")
        do
          W = W - 1;
        while (W > 0 && e.types[W] === "comment");
      e.token[W] === "x}" && (e.token[r.count] === "else" ? e.stack[r.count - 1] !== "if" && e.types[r.count - 1] !== "comment" && e.stack[r.count - 1] !== "else" ? (k.pop(), r.splice({
        data: e,
        howmany: 0,
        index: r.count - 1,
        record: {
          begin: e.begin[e.begin[e.begin[r.count - 1] - 1] - 1],
          ender: -1,
          lexer: "script",
          lines: 0,
          stack: "if",
          token: n.correct === !0 ? "}" : "x}",
          types: "end"
        }
      }), r.stack.length > 1 && (r.stack.splice(r.stack.length - 2, 1), r.stack.update(r.count))) : (e.token[r.count - 2] === "x}" && L[0] !== "if" && e.stack[r.count] === "else" || e.token[r.count - 2] === "}" && e.stack[r.count - 2] === "if" && L[0] === "if" && e.token[L[1] - 1] !== "if" && e.token[e.begin[r.count - 1]] === "x{") && R() : e.token[r.count] === "x}" && e.stack[r.count] === "if" && R()), v !== "if" && T(v, 123) && (p = n.correct === !0 ? "{" : "x{", w = "start", k.push("x{"), D("else"));
    }
    (q === "for" || q === "if" || q === "switch" || q === "catch") && e.token[r.count - 1] !== "." && (v = B(1, !0), v !== "(" && (l = r.count, n.correct === !0 ? F("(") : F("x(")));
  }
  function X() {
    r.lineOffset = 1;
    do {
      if (i(a[m], 10) && (r.lineIndex = m, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ce(a[m + 1]) === !1)
        break;
      m = m + 1;
    } while (m < C);
  }
  do
    ce(a[m]) ? (d > -1 && b(), X(), r.lineOffset > 1 && I < r.count && T(a[m + 1], 59) && T(a[m + 1], 125) && (pe(!1), I = r.count)) : i(a[m], 123) && i(a[m + 1], 37) ? G("{%", "%}", "liquid") : i(a[m], 123) && i(a[m + 1], 123) ? G("{{", "}}", "liquid") : i(a[m], 60) && i(a[m + 1], 33) && i(a[m + 2], 45) && i(a[m + 3], 45) ? G("<!--", "-->", "comment") : i(a[m], 60) ? $e() : i(a[m], 47) && (m === C - 1 || i(a[m + 1], 42)) ? Ce() : (r.count < 0 || e.lines[r.count] > 0) && i(a[m], 35) && i(a[m + 1], 33) && (i(a[m + 2], 47) || i(a[m + 3], 91)) ? G("#!" + a[m + 2], z, "string") : i(a[m], 47) && (m === C - 1 || i(a[m + 1], 47)) ? O() : i(a[m], 96) || i(a[m], 125) && r.stack.token === "template_string" ? (d > -1 && b(), p = J(), i(p, 125) && p.slice(p.length - 2) === "${" ? (w = "template_string_else", D("template_string")) : p.slice(p.length - 2) === "${" ? (w = "template_string_start", D("template_string")) : i(p[0], 125) ? (w = "template_string_end", D()) : (w = "string", D())) : i(a[m], 34) || i(a[m], 39) ? G(a[m], a[m], "string") : i(a[m], 45) && m < C - 1 && T(a[m + 1], 61) && T(a[m + 1], 45) && (w === "number" || w === "word" || w === "reference") && p !== "return" && (w === "word" || w === "reference" || w === "number" || i(p, 41) || i(p, 93)) ? (d > -1 && b(), p = "-", w = "operator", D()) : d === -1 && (a[m] !== "0" || a[m] === "0" && a[m + 1] !== "b") && (He(a[m]) || m !== C - 2 && i(a[m], 45) && i(a[m + 1], 46) && He(a[m + 2]) || m !== C - 1 && (i(a[m], 45) || i(a[m], 46)) && He(a[m + 1])) ? (d > -1 && b(), w === "end" && i(a[m], 45) ? (p = "-", w = "operator") : (p = K(), w = "number"), D()) : i(a[m], 58) && i(a[m + 1], 58) ? (d > -1 && b(), n.correct === !0 && $(), ge(), m = m + 1, p = "::", w = "separator", D()) : i(a[m], 44) ? (d > -1 && b(), n.correct === !0 && $(), h[h.length - 1] === !0 && e.stack[r.count].indexOf("type") < 0 && (h[h.length - 1] = !1), w === "comment" ? ne() : le > -1 && V.count[le] === 0 && A.variableList === "each" ? (ge(), p = ";", w = "separator", D(), p = V.word[le], w = "word", D(), V.index[le] = r.count) : (p = ",", w = "separator", ge(), D())) : i(a[m], 46) ? (d > -1 && b(), h[h.length - 1] = !1, i(a[m + 1], 46) && i(a[m + 2], 46) ? (p = "...", w = "operator", m = m + 2) : (ge(), p = ".", w = "separator"), ce(a[m - 1]) && (r.lineOffset = 1), D()) : i(a[m], 59) ? (d > -1 && b(), h[h.length - 1] === !0 && e.stack[r.count].indexOf("type") < 0 && (h[h.length - 1] = !1), f[f.length - 1] === 0 && f.pop(), le > -1 && V.count[le] === 0 && (A.variableList === "each" ? j() : V.index[le] = r.count + 1), n.correct === !0 && $(), p = ";", w = "separator", e.token[r.count] === "x}" ? ue() : D(), oe()) : i(a[m], 40) || i(a[m], 91) || i(a[m], 123) ? F(a[m]) : i(a[m], 41) || i(a[m], 93) || i(a[m], 125) ? Y(a[m]) : d < 0 && e.stack[r.count] === "object" && i(a[m], 42) && T(a[m + 1], 61) && He(a[m + 1]) === !1 && ce(a[m + 1]) === !1 ? d = m : i(a[m], 61) || i(a[m], 38) || i(a[m], 60) || i(a[m], 62) || i(a[m], 43) || i(a[m], 45) || i(a[m], 42) || i(a[m], 47) || i(a[m], 33) || i(a[m], 63) || i(a[m], 124) || i(a[m], 94) || i(a[m], 58) || i(a[m], 37) || i(a[m], 94) ? (p = se(), p === "regex" ? p = e.token[r.count] : i(p, 42) && e.token[r.count] === "function" ? e.token[r.count] = "function*" : (w = "operator", T(p, 33) && p !== "++" && p !== "--" && ge(), D())) : d < 0 && a[m] !== c && (d = m), le > -1 && r.count === V.index[le] + 1 && i(e.token[V.index[le]], 59) && p !== V.word[le] && w !== "comment" && A.variableList === "list" && j(), m = m + 1;
  while (m < C);
  return d > -1 && b(), (T(e.token[r.count], 125) && i(e.token[0], 123) || T(e.token[0], 123)) && (T(e.token[r.count], 93) && i(e.token[0], 91) || T(e.token[0], 91)) && pe(!1), t[0] === r.count && (p = z + t[1], w = "string", D()), e.token[r.count] === "x;" && (i(e.token[r.count - 1], 125) || i(e.token[r.count - 1], 93)) && e.begin[r.count - 1] === 0 && r.pop(e), A.objectSort && e.begin.length > 0 && _t(0, r.count + 1), e;
}

// src/lexers/style.ts
function an() {
  let { data: e, rules: s, source: n } = r, u = n.split(c), A = n.length, a = [], C = [], o = 0, k = c, f = c;
  function t(l) {
    r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "style",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: f,
      types: k
    }, l);
  }
  function h(l) {
    let g = l;
    do
      l = l - 1;
    while (i(u[l], 92) && l > 0);
    return (g - l) % 2 === 1;
  }
  function V(l) {
    let g = l.replace(/\s*!important/, " !important").split(c), M = /-?transition$/.test(e.token[r.count - 2]), L = [], N = /(\s|\(|,)-?0+\.?\d+([a-z]|\)|,|\s)/g, S = /(\s|\(|,)-?\.?\d+([a-z]|\)|,|\s)/g, j = 0, D = 0, B = c, P = g.length, pe = [], ge = (se) => se;
    function ue(se) {
      return se = se.replace(/\s*/g, c), /\/\d/.test(se) && l.indexOf("url(") === 0 ? se : ` ${se.charAt(0)} ${se.charAt(1)}`;
    }
    function Ce(se) {
      return s.style.noLeadZero === !0 ? se.replace(/^-?\D0+(\.|\d)/, (J) => J.replace(/0+/, c)) : /0*\./.test(se) ? se.replace(/0*\./, "0.") : /0+/.test(/\d+/.exec(se)[0]) ? /^\D*0+\D*$/.test(se) ? se.replace(/0+/, "0") : se.replace(/\d+/.exec(se)[0], /\d+/.exec(se)[0].replace(/^0+/, c)) : se;
    }
    function O(se) {
      return se.replace(",", ", ");
    }
    function ke(se) {
      return `${se} `;
    }
    function K() {
      let se = j - 1, J = se;
      if (se < 1)
        return !0;
      do
        J = J - 1;
      while (J > 0 && i(g[J], 92));
      return (se - J) % 2 === 1;
    }
    if (j < P)
      do
        pe.push(g[j]), (T(g[j - 1], 92) || K() === !1) && (B === c ? i(g[j], 34) ? (B = Be, D = D + 1) : i(g[j], 39) ? (B = je, D = D + 1) : i(g[j], 40) ? (B = ")", D = D + 1) : i(g[j], 91) && (B = "]", D = D + 1) : i(g[j], 40) && i(B, 41) || i(g[j], 91) && i(B, 93) ? D = D + 1 : g[j] === B && (D = D - 1, D === 0 && (B = c))), B === c && i(g[j], 32) && (pe.pop(), L.push(ge(pe.join(c))), pe = []), j = j + 1;
      while (j < P);
    if (L.push(ge(pe.join(c))), P = L.length, j = 0, j < P)
      do
        s.style.noLeadZero === !0 && /^-?0+\.\d+[a-z]/.test(L[j]) === !0 ? L[j] = L[j].replace(/0+\./, ".") : s.style.noLeadZero === !1 && /^-?\.\d+[a-z]/.test(L[j]) ? L[j] = L[j].replace(".", "0.") : N.test(L[j]) || S.test(L[j]) ? L[j] = L[j].replace(N, Ce).replace(S, Ce) : /^(0+([a-z]{2,3}|%))$/.test(L[j]) && M === !1 ? L[j] = "0" : /^(0+)/.test(L[j]) ? (L[j] = L[j].replace(/0+/, "0"), /\d/.test(L[j].charAt(1)) && (L[j] = L[j].substr(1))) : /^url\((?!('|"))/.test(L[j]) && L[j].charCodeAt(L[j].length - 1) === 41 && (B = L[j].charAt(L[j].indexOf("url(") + 4), B !== "@" && T(B, 40) && T(B, 60) && (s.style.quoteConvert === "double" ? L[j] = L[j].replace(/url\(/, 'url("').replace(/\)$/, '")') : L[j] = L[j].replace(/url\(/, "url('").replace(/\)$/, "')"))), /^(\+|-)?\d+(\.\d+)?(e-?\d+)?\D+$/.test(L[j]) && (we.css.units.has(L[j].replace(/(\+|-)?\d+(\.\d+)?(e-?\d+)?/, c)) || (L[j] = L[j].replace(/(\+|-)?\d+(\.\d+)?(e-?\d+)?/, ke))), /^\w+\(/.test(L[j]) && L[j].charAt(L[j].length - 1) === ")" && (L[j].indexOf("url(") !== 0 || L[j].indexOf("url(") === 0 && L[j].indexOf(ee) > 0) && (L[j] = L[j].replace(/,\S/g, O)), j = j + 1;
      while (j < P);
    return B = L.join(ee), B.charAt(0) + B.slice(1).replace(/\s*(\/|\+|\*)\s*(\d|\$)/, ue);
  }
  function le() {
    let l = [], g = [], M = s.style.quoteConvert, L = o, N = 0, S = c, j = null, D = !1;
    function B() {
      if (g.push(u[L]), ce(u[L + 1]))
        do
          L = L + 1;
        while (L < A && ce(u[L + 1]));
    }
    if (L < A)
      do {
        if (i(u[L], 34) || i(u[L], 39) ? (j === null && (j = !1), l[l.length - 1] === u[L] && (T(u[L - 1], 92) || h(L - 1) === !1) ? (l.pop(), M === "double" ? u[L] = Be : M === "single" && (u[L] = je)) : T(l[l.length - 1], 34) && T(l[l.length - 1], 39) && (T(u[L - 1], 92) || h(L - 1) === !1) ? (l.push(u[L]), M === "double" ? u[L] = Be : M === "single" && (u[L] = je)) : i(u[L - 1], 92) && M !== "none" ? h(L - 1) === !0 && (M === "double" && i(u[L], 39) || M === "single" && i(u[L], 34)) && g.pop() : M === "double" && i(u[L], 34) ? u[L] = '\\"' : M === "single" && i(u[L], 39) && (u[L] = "\\'"), g.push(u[L])) : T(u[L - 1], 92) || h(L - 1) === !1 ? i(u[L], 40) ? (j === null && (j = !0), l.push(")"), B()) : i(u[L], 91) ? (j = !1, l.push("]"), B()) : (i(u[L], 35) || i(u[L], 64)) && i(u[L + 1], 123) ? (j = !1, g.push(u[L]), L = L + 1, l.push("}"), B()) : u[L] === l[l.length - 1] ? (g.push(u[L]), l.pop()) : g.push(u[L]) : g.push(u[L]), r.stack.token === "map" && l.length === 0 && (i(u[L + 1], 44) || i(u[L + 1], 41)))
          if (i(u[L + 1], 41) && i(e.token[r.count], 40))
            r.pop(e), r.stack.pop(), g.splice(0, 0, "(");
          else
            break;
        if (i(u[L + 1], 58)) {
          if (N = L, ce(u[N]))
            do
              N = N - 1;
            while (ce(u[N]));
          e.types[r.count] !== "start" && (S = u.slice(N - 6, N + 1).join(c), (S.indexOf("filter") === S.length - 6 || S.indexOf("progid") === S.length - 6) && (S = "filter"));
        }
        if (l.length === 0) {
          if (i(u[L + 1], 59) && h(L + 1) === !0 || i(u[L + 1], 58) && T(u[L], 58) && T(u[L + 2], 58) && S !== "filter" && S !== "progid" || i(u[L + 1], 123) || i(u[L + 1], 125) || i(u[L + 1], 47) && (i(u[L + 2], 42) || i(u[L + 2], 47))) {
            if (N = g.length - 1, ce(g[N]))
              do
                N = N - 1, L = L - 1, g.pop();
              while (ce(g[N]));
            break;
          }
          if (i(u[L + 1], 44))
            break;
        }
        L = L + 1;
      } while (L < A);
    o = L, r.stack.token === "map" && i(g[0], 40) && (a[a.length - 1] = a[a.length - 1] - 1), f = g.join(c).replace(/\s+/g, ee).replace(/^\s/, c).replace(/\s$/, c), j === !0 && (r.count > -1 && we.css.atrules(f) && s.style.atRuleSpace === !0 ? e.token[r.count] = e.token[r.count].replace(/\s*\(/g, " (").replace(/\s*\)\s*/g, ") ").replace(/,\(/g, ", (") : f = f.replace(/\s+\(/g, "(").replace(/\s+\)/g, ")").replace(/,\(/g, ", (")), k === "colon" && e.types[r.count - 1] === "start" ? we.css.pseudoClasses.has(f) && (e.token[r.count] = f = ":" + f, k = "pseudo", D = !0) : r.count > -1 && e.token[r.count].indexOf("extend(") === 0 ? k = "pseudo" : j === !0 && He(f.charAt(0)) === !1 && /^rgba?\(/.test(f) === !1 && f.indexOf("url(") !== 0 && (f.indexOf(ee) < 0 || f.indexOf(ee) > f.indexOf("(")) && f.charAt(f.length - 1) === ")" ? (i(e.token[r.count], 58) ? k = "value" : (f = f.replace(/,\u0020?/g, ", "), k = "function"), f = V(f)) : r.count > -1 && je.indexOf(e.token[r.count].charAt(0)) > -1 && e.types[r.count] === "variable" ? k = "item" : i(g[0], 64) || g[0] === "$" ? (e.types[r.count] === "colon" && s.language === "css" && (e.types[r.count - 1] === "property" || e.types[r.count - 1] === "variable") ? k = "value" : r.count > -1 && (k = "item", S = e.token[r.count], L = S.indexOf("("), i(S[S.length - 1], 41) && L > 0 && (S = S.slice(L + 1, S.length - 1), e.token[r.count] = e.token[r.count].slice(0, L + 1) + V(S) + ")")), f = V(f)) : k = "item", D === !1 ? t(c) : D = !1;
  }
  function m(l) {
    let g = r.count, M = 0, L = c, N = [];
    function S() {
      if (!(r.count < 0)) {
        if (g > 0 && (e.types[g] === "comment" || e.types[g] === "ignore"))
          do
            g = g - 1, N.push(e.token[g]);
          while (g > 0 && e.lexer[g] === "style" && (e.types[g] === "comment" || e.types[g] === "ignore"));
        if (M = g - 1, M > 0 && (e.types[M] === "comment" || e.types[M] === "ignore"))
          do
            M = M - 1;
          while (M > 0 && e.lexer[g] === "style" && (e.types[M] === "comment" || e.types[M] === "ignore"));
        M < 0 && (M = 0), g < 0 && (g = 0), L = e.token[g][0];
      }
    }
    function j(B) {
      return B.replace(/\s*&/, " &").replace(/\s*&\s*{/, " & {").replace(/\s*>\s*/g, " > ").replace(/\s*\+\s*/g, " + ");
    }
    function D(B) {
      let P = B, pe = e.begin[P];
      if (e.token[B] = e.token[B].replace(/\s*&/, " &").replace(/\s*&\s*{/, " & {").replace(/\s*>\s*/g, " > ").replace(/\s*\+\s*/g, " + ").replace(/:\s+/g, ": ").replace(/^\s+/, c).replace(/\s+$/, c).replace(/\s+::\s+/, "::"), i(e.token[P], 64) && (e.token[B] = e.token[B].replace(/(\(\s*[a-z-]+\s*)(:)(\S)/g, "$1$2 $3")), T(e.token[P], 44) && e.types[P] !== "comment" && (e.types[P] = "selector"), i(e.token[P - 1], 44) || i(e.token[P - 1], 58) || e.types[P - 1] === "comment" || e.types[P - 1] === "pseudo")
        if (e.types[P - 1] === "colon" && (e.types[P] === "selector" || e.types[P] === "at_rule") && (e.types[P - 2] === "template" || e.types[P - 2] === "liquid_start" || e.types[P - 2] === "liquid_else" || e.types[P - 2] === "liquid_end"))
          e.token[P - 1] = ":" + e.token[P] + ee, e.types[P - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: P
          });
        else if (e.types[P - 1] === "pseudo")
          e.token[P - 1] = `${e.token[P - 1]}${e.token[P]}`, e.types[P - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: P
          });
        else if (e.types[P - 2] === "comment")
          e.token[P - 1] = j(`${e.token[P - 1]}${e.token[P]}`), e.types[P - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: P
          });
        else
          do
            if (P = P - 1, e.begin[P] === pe) {
              if (i(e.token[P], 59))
                break;
              T(e.token[P], 44) && e.types[P] !== "comment" && (e.types[P] = "selector"), e.token[P] === ":" && T(e.token[P - 1], 59) && (e.token[P - 1] = j(`${e.token[P - 1]}:${e.token[P + 1]}`), r.splice({
                data: e,
                howmany: 2,
                index: P
              }));
            } else
              break;
          while (P > 0);
      if (P = r.count, s.style.sortSelectors === !0 && i(e.token[P - 1], 44)) {
        let ge = [e.token[P]];
        do {
          if (P = P - 1, e.types[P] === "comment" || e.types[P] === "ignore")
            do
              P = P - 1;
            while (P > 0 && (e.types[P] === "comment" || e.types[P] === "ignore"));
          i(e.token[P], 44) && (P = P - 1), ge.push(e.token[P]);
        } while (P > 0 && (i(e.token[P - 1], 44) || e.types[P - 1] === "selector" || e.types[P - 1] === "comment" || e.types[P - 1] === "ignore"));
        ge.sort(), P = r.count, e.token[P] = ge.pop();
        do {
          if (P = P - 1, e.types[P] === "comment" || e.types[P] === "ignore")
            do
              P = P - 1;
            while (P > 0 && (e.types[P] === "comment" || e.types[P] === "ignore"));
          i(e.token[P], 44) && (P = P - 1), e.token[P] = ge.pop();
        } while (P > 0 && (i(e.token[P - 1], 44) || e.types[P - 1] === "selector" || e.types[P - 1] === "comment" || e.types[P - 1] === "ignore"));
      }
      g = r.count, S();
    }
    if (S(), l === "start" && (e.types[g] === "value" || e.types[g] === "variable") && (e.types[g] = "item"), e.lexer[r.count - 1] !== "style" || M < 0)
      l === "colon" ? i(L, 36) || i(L, 64) ? e.types[g] = "variable" : e.stack[g] !== "global" && (e.types[g] !== "comment" || e.types[g] !== "ignore") && (e.types[g] = "property") : e.lexer[g] === "style" && (e.types[g] = "selector", D(g));
    else if (l === "start" && e.types[g] === "function" && e.lexer[g] === "style")
      e.types[g] = "selector", D(g);
    else if (e.types[g] === "item" && e.lexer[g] === "style")
      if (l === "start")
        D(g), e.types[g] = "selector", e.token[g] === ":" && (e.types[M] = "selector"), e.token[g].indexOf("=\u201C") > 0 ? r.error = `Invalid Quote (\u201C, \\201c) used on line number ${r.lineNumber}` : e.token[g].indexOf("=\u201D") > 0 && (r.error = `Invalid Quote (\u201D, \\201d) used on line number ${r.lineNumber}`);
      else if (l === "end")
        i(L, 36) || i(L, 64) ? e.types[g] = "variable" : e.types[g] = "value", e.token[g] = V(e.token[g]);
      else if (l === "separator")
        if (e.types[M] === "colon" || i(e.token[M], 44) || i(e.token[M], 123)) {
          if (T(u[o], 59) && (e.types[M] === "selector" || e.types[M] === "at_rule" || i(e.token[M], 123)))
            e.types[g] = "selector", D(g);
          else if (i(e.token[g], 36) || i(e.token[g], 64))
            e.types[g] = "variable";
          else if (i(e.token[M], 58) && e.token[g] === "root") {
            e.types[M] = "selector", e.token[M] = e.token[M] + e.token[g], r.pop(e);
            return;
          } else
            e.types[g] = "value";
          e.token[g] = V(e.token[g]), e.token[g].charAt(0) === "\u201C" ? r.error = `Invalid Quote (\u201C, \\201c) used on line number ${r.lineNumber}` : e.token[g].charAt(0) === "\u201D" && (r.error = `Invalid (\u201D, \\201d) used on line number ${r.lineNumber}`);
        } else
          i(L, 36) || i(L, 64) ? e.types[g] = "variable" : e.types[M] === "value" || e.types[M] === "variable" ? (e.token[M] = e.token[M] + e.token[g], r.pop(e)) : e.types[g] = "value";
      else
        l === "colon" ? i(L, 36) || i(L, 64) ? e.types[g] = "variable" : e.types[g] = "property" : i(e.token[M], 64) && (e.types[M - 2] !== "variable" && e.types[M - 2] !== "property" || e.types[M - 1] === "separator") ? (e.types[M] = "variable", k = "variable", e.token[M] = V(e.token[M])) : l === "comment" && (i(L, 46) || i(L, 35)) && (e.types[g] = "selector");
  }
  function p() {
    let l = r.count;
    do
      l = l - 1;
    while (l > 0 && e.types[l] === "comment");
    e.token[l] !== ";" && r.splice({
      data: e,
      howmany: 0,
      index: l + 1,
      record: {
        begin: r.stack.index,
        ender: -1,
        lexer: "style",
        lines: r.lineOffset,
        stack: r.stack.token,
        token: ";",
        types: "separator"
      }
    });
  }
  function w(l, g) {
    let M = [], L = c, N = c, S = 0, j = l.length;
    function D(B) {
      let P = r.count > 0 ? e.types[r.count - 1] : e.types[r.count];
      k === "item" && (P === "colon" ? e.types[r.count] = "value" : m(P)), i(u[o + 1], 32), k = B, f = Ft(f, N), k.indexOf("start") > -1 || k.indexOf("else") > -1 ? t(f) : t(c);
    }
    if (C[C.length - 1] = !0, o < A)
      do {
        if (M.push(u[o]), L === c) {
          if (i(u[o], 34))
            L = Be;
          else if (i(u[o], 39))
            L = je;
          else if (i(u[o], 47))
            i(u[o + 1], 47) ? L = "/" : i(u[o + 1], 42) && (L = "*");
          else if (i(g, u[o + 1].charCodeAt(0))) {
            do
              S = S + 1, o = o + 1, M.push(u[o]);
            while (o < A && S < g.length && u[o + 1] === g.charAt(S));
            if (S === g.length) {
              if (L = M.join(c), ce(L.charAt(j)))
                do
                  j = j + 1;
                while (ce(L.charAt(j)));
              S = j;
              do
                S = S + 1;
              while (S < g.length && !ce(L.charAt(S)));
              if (S === L.length && (S = S - g.length), l === "{%" && (N = Ue(L)), k === "item" && e.types[r.count - 1] === "colon" && (e.types[r.count - 2] === "property" || e.types[r.count - 2] === "variable")) {
                k = "value", e.types[r.count] = "value", Number.isNaN(Number(e.token[r.count])) === !0 && e.token[r.count].charAt(e.token[r.count].length - 1) !== ")" ? e.token[r.count] = e.token[r.count] + L : e.token[r.count] = e.token[r.count] + ee + L;
                return;
              }
              if (f = L, l === "{%") {
                let B = Array.from(we.liquid.tags), P = B.length - 1, pe = N.slice(0, N.indexOf(ee) + 1);
                if (pe.indexOf("(") > 0 && (N = pe.slice(0, pe.indexOf("("))), we.liquid.else.has(N)) {
                  D("liquid_else");
                  return;
                }
                if (P = B.length - 1, P > -1)
                  do {
                    if (N === B[P]) {
                      D("liquid_start");
                      return;
                    }
                    if (N === "end" + B[P]) {
                      D("liquid_end");
                      return;
                    }
                    P = P - 1;
                  } while (P > -1);
              } else if (l === "{{") {
                let B = L.slice(2), P = B.length, pe = 0;
                do
                  pe = pe + 1;
                while (pe < P && ce(B.charAt(pe)) === !1 && B.charCodeAt(j) !== 40);
                if (B = B.slice(0, pe), i(B[B.length - 2], 125) && (B = B.slice(0, B.length - 2)), B === "end") {
                  D("liquid_end");
                  return;
                }
              }
              D("liquid");
              return;
            }
            S = 0;
          }
        } else
          L === u[o] && (i(L, 34) || i(L, 39) ? L = c : i(L, 47) && (i(u[o], 13) || i(u[o], 10)) ? L = c : i(L, 42) && i(u[o + 1], 47) && (L = c));
        o = o + 1;
      } while (o < A);
  }
  function _(l) {
    let g;
    l ? (g = Qt({
      chars: u,
      start: o,
      end: A,
      lexer: "style",
      begin: "//",
      ender: z
    }), f = g[0], k = Mt.test(f) ? "ignore" : "comment") : (g = yt(u, {
      start: o,
      end: A,
      lexer: "style",
      begin: "/*",
      ender: "*/"
    }), f = g[0], k = Bi.test(f) ? "ignore" : "comment"), t(c), o = g[1];
  }
  function I() {
    let l = r.lineOffset, g = {
      data: {
        margin: [
          c,
          c,
          c,
          c,
          !1
        ],
        padding: [
          c,
          c,
          c,
          c,
          !1
        ]
      },
      last: {
        margin: 0,
        padding: 0
      },
      removes: []
    }, M = r.stack.index;
    function L(D) {
      if (e.token[S - 2] === D) {
        let B = e.token[S].replace(/\s*!important\s*/g, c).split(ee), P = B.length;
        e.token[S].indexOf("!important") > -1 && (g.data[D[4]] = !0), P > 3 ? (g.data[D][0] === c && (g.data[D][0] = B[0]), g.data[D][1] === c && (g.data[D][1] = B[1]), g.data[D][2] === c && (g.data[D][2] = B[2]), g.data[D][3] === c && (g.data[D][3] = B[3])) : P > 2 ? (g.data[D][0] === c && (g.data[D][0] = B[0]), g.data[D][1] === c && (g.data[D][1] = B[1]), g.data[D][2] === c && (g.data[D][2] = B[2]), g.data[D][3] === c && (g.data[D][3] = B[1])) : P > 1 ? (g.data[D][0] === c && (g.data[D][0] = B[0]), g.data[D][1] === c && (g.data[D][1] = B[1]), g.data[D][2] === c && (g.data[D][2] = B[0]), g.data[D][3] === c && (g.data[D][3] = B[1])) : (g.data[D][0] === c && (g.data[D][0] = B[0]), g.data[D][1] === c && (g.data[D][1] = B[0]), g.data[D][2] === c && (g.data[D][2] = B[0]), g.data[D][3] === c && (g.data[D][3] = B[0]));
      } else if (e.token[S - 2] === `${D}-bottom`)
        g.data[D][2] === c && (g.data[D][2] = e.token[S]);
      else if (e.token[S - 2] === `${D}-left`)
        g.data[D][3] === c && (g.data[D][3] = e.token[S]);
      else if (e.token[S - 2] === `${D}-right`)
        g.data[D][1] === c && (g.data[D][1] = e.token[S]);
      else if (e.token[S - 2] === `${D}-top`)
        g.data[D][0] === c && (g.data[D][0] = e.token[S]);
      else
        return;
      g.removes.push([S, D]), g.last[D] = S;
    }
    function N() {
      let D = 0, B = c, P = /^(0+([a-z]+|%))/, pe = g.removes.length, ge = g.data.margin[0] !== c && g.data.margin[1] !== c && g.data.margin[2] !== c && g.data.margin[3] !== c, ue = g.data.padding[0] !== c && g.data.padding[1] !== c && g.data.padding[2] !== c && g.data.padding[3] !== c;
      function Ce(O) {
        if (P.test(g.data[O][0]) === !0 && (g.data[O][0] = "0"), P.test(g.data[O][1]) === !0 && (g.data[O][1] = "0"), P.test(g.data[O][2]) === !0 && (g.data[O][2] = "0"), P.test(g.data[O][3]) === !0 && (g.data[O][3] = "0"), g.data[O][0] === g.data[O][1] && g.data[O][0] === g.data[O][2] && g.data[O][0] === g.data[O][3] ? B = g.data[O][0] : g.data[O][0] === g.data[O][2] && g.data[O][1] === g.data[O][3] && g.data[O][0] !== g.data[O][1] ? B = `${g.data[O][0]} ${g.data[O][1]}` : g.data[O][1] === g.data[O][3] && g.data[O][0] !== g.data[O][2] ? B = `${g.data[O][0]} ${g.data[O][1]} ${g.data[O][2]}` : B = `${g.data[O][0]} ${g.data[O][1]} ${g.data[O][2]} ${g.data[O][3]}`, g.data[O[4]] === !0 && (B = `${B.replace(" !important", c)} !important`), g.last[O] > r.count) {
          D = M < 1 ? 1 : M + 1;
          do {
            if (e.begin[D] === M && e.types[D] === "value" && e.token[D - 2].indexOf(O) === 0) {
              g.last[O] = D;
              break;
            }
            D = D + 1;
          } while (D < r.count);
        }
        e.token[g.last[O]] = B, e.token[g.last[O] - 2] = O;
      }
      if (pe > 1 && (ge === !0 || ue === !0))
        do
          g.removes[D][0] !== g.last.margin && g.removes[D][0] !== g.last.padding && (ge === !0 && g.removes[D][1] === "margin" || ue === !0 && g.removes[D][1] === "padding") && r.splice({
            data: e,
            howmany: e.types[g.removes[D][0] + 1] === "separator" ? 4 : 3,
            index: g.removes[D][0] - 2
          }), D = D + 1;
        while (D < pe - 1);
      ge === !0 && Ce("margin"), ue === !0 && Ce("padding"), j === !0 && (M < 0 ? r.error = "Brace mismatch. There appears to be more closing braces than starting braces." : _t(M, r.count + 1));
    }
    let S = r.count, j = !1;
    do
      S = S - 1, e.begin[S] === M ? e.types[S] === "value" && e.types[S - 2] === "property" && (e.token[S - 2].indexOf("margin") === 0 ? L("margin") : e.token[S - 2].indexOf("padding") === 0 && L("padding")) : (j = !0, S = e.begin[S]);
    while (S > M);
    N(), r.lineOffset = l;
  }
  function d() {
    r.lineOffset = 1;
    do {
      if (i(u[o], 10) && (r.lineIndex = o, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ce(u[o + 1]) === !1)
        break;
      o = o + 1;
    } while (o < A);
  }
  do
    ce(u[o]) ? d() : i(u[o], 47) && i(u[o + 1], 42) ? _(!1) : i(u[o], 47) && i(u[o + 1], 47) ? _(!0) : i(u[o], 123) && i(u[o + 1], 37) ? w("{%", "%}") : i(u[o], 123) && i(u[o + 1], 123) ? w("{{", "}}") : i(u[o], 123) || i(u[o], 40) && i(e.token[r.count], 58) && e.types[r.count - 1] === "variable" ? (m("start"), k = "start", f = u[o], i(u[o], 40) ? (t("map"), a.push(0)) : e.types[r.count] === "at_rule" || e.types[r.count] === "selector" || e.types[r.count] === "variable" ? i(e.token[r.count], 64) ? (e.types[r.count] = "at_rule", t(e.token[r.count])) : t(e.token[r.count]) : e.types[r.count] === "colon" ? t(e.token[r.count - 1]) : t("block"), C.push(!1)) : i(u[o], 125) || u[o] === ")" && r.stack.token === "map" && a[a.length - 1] === 0 ? i(u[o], 125) && i(e.token[r.count - 1], 123) && e.types[r.count] === "item" && e.token[r.count - 2] !== void 0 && e.token[r.count - 2].charCodeAt(e.token[r.count - 2].length - 1) === 64 ? (e.token[r.count - 2] = e.token[r.count - 2] + "{" + e.token[r.count] + "}", r.pop(e), r.pop(e), r.stack.pop()) : (i(u[o], 41) && a.pop(), m("end"), i(u[o], 125) && T(e.token[r.count], 59) && (e.types[r.count] === "value" || e.types[r.count] === "function" || e.types[r.count] === "variable" && (i(e.token[r.count - 1], 58) || i(e.token[r.count - 1], 59)) ? (s.correct === !0 ? f = ";" : f = "x;", k = "separator", t(c)) : e.types[r.count] === "comment" && p()), C.pop(), f = u[o], k = "end", i(u[o], 125) && I(), s.style.sortProperties === !0 && i(u[o], 125) && $t(e), t(c)) : i(u[o], 59) || i(u[o], 44) ? (e.types[r.count - 1] === "selector" || e.types[r.count - 1] === "at_rule" || e.types[r.count] !== "function" && i(e.token[r.count - 1], 125) ? m("start") : m("separator"), e.types[r.count] !== "separator" && h(o) === !0 && (f = u[o], k = "separator", t(c))) : r.count > -1 && i(u[o], 58) && e.types[r.count] !== "end" ? (m("colon"), f = ":", k = "colon", t(c)) : (r.stack.token === "map" && i(u[o], 40) && (a[a.length - 1] = a[a.length - 1] + 1), le()), o = o + 1;
  while (o < A);
  return s.style.sortProperties === !0 && $t(e), e;
}

// src/lexers/index.ts
function yi(e) {
  if (e === 1)
    return on();
  if (e === 3)
    return an();
  if (e === 2)
    return ln();
}

// src/format/markup.ts
function un() {
  let { rules: e } = r, { lineBreakValue: s } = e.markup, n = r.start, u, A = -1, a = 0, C = 0, o = 0, k = isNaN(e.indentLevel) ? 0 : e.indentLevel, f = r.data, t = r.ender < 1 || r.ender > f.token.length ? f.token.length : r.ender + 1, h = Fe(null), V = e.language === "jsx" || e.language === "tsx", le = new Set(e.liquid.dedentTagList), m = /* @__PURE__ */ new Map(), p = r.start > 0 ? Array(r.start).fill(0, 0, r.start) : [], w = ke(), _ = S(), I = [];
  function d($, G) {
    return f.types[$] === G;
  }
  function l($, G) {
    return f.stack[$] === G;
  }
  function g($, G) {
    return f.token[$] === G;
  }
  function M($, G) {
    return $ > -1 && (f.types[$] || c).indexOf(G);
  }
  function L($, G = !0, oe = !0) {
    let ne = [], Y = e.preserveLine + 1, F = Math.min(f.lines[n + 1] - 1, Y), H = 0;
    if ($ < 0 && ($ = 0), G)
      do
        ne.push(r.crlf), H = H + 1;
      while (H < F);
    if ($ > 0 && oe) {
      H = 0;
      do
        ne.push(_), H = H + 1;
      while (H < $);
    }
    return ne.join(c);
  }
  function N() {
    let $, G = f.lines[n + 1]; T(f.token[n][1], 37) && e.markup.commentIndent === !0 && (e.markup.commentDelimiters === "inline" || e.markup.commentDelimiters === "consistent" && /<!--\n/.test(f.token[n]) === !1);
    $ = f.token[n].split(r.crlf);
    let ne = d(n, "attribute"), Y = $.length - 1, F = w[n - 1] > -1 ? ne ? w[n - 1] + 1 : w[n - 1] : (() => {
      let b = n - 1, X = b > -1 && M(b, "start") > -1;
      if (d(n, "comment") && T(f.token[n][1], 37))
        return w[n] - 1;
      if (w[n] > -1 && d(n, "attribute"))
        return w[n] + 1;
      do {
        if (b = b - 1, w[b] > -1)
          return d(n, "content") && X === !1 ? w[b] : w[b] + 1;
        M(b, "start") > -1 && (X = !0);
      } while (b > 0);
      return b === -2 ? 0 : 1;
    })(), H = 0;
    f.lines[n + 1] = 0;
    do
      d(n, "comment") ? (H === 0 && (i(f.token[n][1], 37) && e.liquid.commentNewline === !0 || i(f.token[n][1], 37) === !1 && e.markup.commentNewline === !0) && (e.preserveLine === 0 || I.length > 0 && I[I.length - 1].lastIndexOf(z) + 1 < 2) && I.push(L(F)), $[H] !== c ? (H > 0 && (i(f.token[n][1], 37) && e.liquid.commentIndent === !0 || i(f.token[n][1], 37) === !1 && e.markup.commentIndent === !0) && I.push(_), $[H + 1].trimStart() !== c ? I.push($[H], L(F)) : I.push($[H], z)) : $[H + 1].trimStart() === c ? I.push(z) : I.push(L(F))) : ne ? s === "align" || s === "force-align" ? I.push($[H].trim(), L(w[n])) : s === "indent" || s === "force-indent" ? H + 1 === Y ? I.push($[H].trimEnd(), L(w[n])) : H === 0 ? I.push($[H].replace(/(["'])\s+/, "$1" + L(F)).trim(), L(F)) : I.push($[H], L(F)) : (I.push($[H]), s === "force-preserve" && (H + 1 === Y || H === 0) ? I.push(L(w[n])) : I.push(r.crlf)) : I.push($[H], L(F)), H = H + 1;
    while (H < Y);
    if (ne && T($[Y], 60) && m.get(n - 1) >= 2 && Qe($[Y], 62) && e.markup.delimiterTerminus !== "inline") {
      m.delete(n - 1);
      let b = L(w[n - 1] - 1);
      I[I.length - 1] === b && I.push(e.indentChar.repeat(e.indentSize)), d(n - 1, "singleton") && dt($[Y], 47) ? I.push($[Y].slice(0, -2), b, "/>") : I.push($[Y].slice(0, -1), b, ">");
    } else
      I.push($[Y]);
    f.lines[n + 1] = G, d(n, "comment") && (d(n + 1, "liquid_end") || d(n - 1, "liquid_end")) ? I.push(L(w[n])) : w[n] === -10 ? I.push(ee) : I.push(L(w[n]));
  }
  function S() {
    let $ = [e.indentChar], G = e.indentSize - 1, oe = 0;
    if (oe < G)
      do
        $.push(e.indentChar), oe = oe + 1;
      while (oe < G);
    return $.join(c);
  }
  function j() {
    C > 0 && (a = C - 1);
    let $ = n + 1, G = 0;
    if (d($, void 0))
      return $ - 1;
    if (d($, "comment") || n < t - 1 && M($, "attribute") > -1)
      do {
        if (d($, "jsx_attribute_start")) {
          G = $;
          do {
            if (d($, "jsx_attribute_end") && f.begin[$] === G)
              break;
            $ = $ + 1;
          } while ($ < t);
        } else if (d($, "comment") === !1 && M($, "attribute") < 0)
          return $;
        $ = $ + 1;
      } while ($ < t);
    return $;
  }
  function D() {
    let $ = f.token[n], G = ii.exec($);
    if (G === null)
      return;
    let oe = n + 1, ne = !1, Y = e.markup.selfCloseSpace === !0 && G[0] === "/>" ? ee : c;
    f.token[n] = $.replace(ii, c);
    do {
      if (d(oe, "jsx_attribute_end") && f.begin[f.begin[oe]] === n)
        ne = !1;
      else if (f.begin[oe] === n) {
        if (d(oe, "jsx_attribute_start"))
          ne = !0;
        else if (M(oe, "attribute") < 0 && ne === !1)
          break;
      } else if (ne === !1 && (f.begin[oe] < n || M(oe, "attribute") < 0))
        break;
      oe = oe + 1;
    } while (oe < t);
    d(oe - 1, "comment_attribute") && (Y = L(w[oe - 2] - 1)), f.token[oe - 1] = `${f.token[oe - 1]}${Y}${G[0]}`, d(oe, "comment");
  }
  function B() {
    if (d(n, "end") === !1 && Qe(f.token[n], 62) && T(f.token[n], 60) && m.get(f.begin[n]) >= 2) {
      m.delete(f.begin[n]);
      let $ = L(w[n - 1] - 1).replace(/\n+/, z), G = `${f.token[n].slice(0, -1)}${$}>`;
      d(f.begin[n], "singleton") && i(f.token[n][f.token[n].length - 2], 47) ? f.token[n] = `${f.token[n].slice(0, -2)}${$}/>` : f.token[n] = G;
    }
  }
  function P() {
    let $ = f.begin[n], G = n;
    do
      if (G = G - 1, g(G, "</li>") && g(G - 1, "</a>") && f.begin[f.begin[G]] === $ && f.begin[G - 1] === f.begin[G] + 1)
        G = f.begin[G];
      else
        return;
    while (G > $ + 1);
    G = n;
    do
      G = G - 1, d(G + 1, "attribute") ? p[G] = -10 : g(G, "</li>") === !1 && (p[G] = -20);
    while (G > $ + 1);
  }
  function pe() {
    let $ = n, G = !1;
    if (f.lines[n + 1] === 0 && e.markup.forceIndent === !1) {
      do {
        if (f.lines[$] > 0) {
          G = !0;
          break;
        }
        $ = $ - 1;
      } while ($ > A);
      $ = n;
    } else
      G = !0;
    if (G === !0) {
      d(f.begin[$] - 1, "liquid") && (p[f.begin[$] - 1] = k);
      do
        p.push(k), $ = $ - 1;
      while ($ > A);
      p[n] = k, (d($, "attribute") || d($, "liquid_attribute") || d($, "jsx_attribute_start") || d($, "start")) && d(n + 1, "comment") === !1 && d(n + 1, "start") === !1 && f.types[n + 1].startsWith("liquid") === !1 || d(n + 1, "liquid_end") ? p[$] = k + 1 : d(n + 1, "liquid_else") ? p[$] = k - 1 : d(C, "liquid") && (p[a] = k - 1, p[n - 1] = k);
    } else {
      do
        p.push(-20), $ = $ - 1;
      while ($ > A);
      p[$] = -20;
    }
    A = -1;
  }
  function ge() {
    if (e.markup.forceIndent === !0 || e.markup.forceAttribute === !0) {
      p.push(k);
      return;
    }
    let $ = k;
    if (C < t && (M(C, "end") > -1 || M(C, "start") > -1) && f.lines[C] > 0 ? (p.push(k), $ = $ + 1, n > 0 && d(n, "singleton") && M(n - 1, "attribute") > -1 && d(f.begin[n - 1], "singleton") && (f.begin[n] < 0 || d(f.begin[n - 1], "singleton") && f.begin[f.ender[n] - 1] !== n ? p[n - 1] = k : p[n - 1] = k + 1)) : n > 0 && d(n, "singleton") && M(n - 1, "attribute") > -1 ? (p[n - 1] = k, o = f.token[n].length, p.push(-10)) : f.lines[C] === 0 ? p.push(-20) : (e.wrap === 0 || n < t - 2 && f.token[n] !== void 0 && f.token[n + 1] !== void 0 && f.token[n + 2] !== void 0 && f.token[n].length + f.token[n + 1].length + f.token[n + 2].length + 1 > e.wrap && M(n + 2, "attribute") > -1 || f.token[n] !== void 0 && f.token[n + 1] !== void 0 && f.token[n].length + f.token[n + 1].length > e.wrap) && (d(n + 1, "singleton") || d(n + 1, "liquid")) ? p.push(k) : (o = o + 1, p.push(-10)), n > 0 && M(n - 1, "attribute") > -1 && f.lines[n] < 1 && (p[n - 1] = -20), o > e.wrap) {
      let G = n, oe = Math.max(f.begin[n], 0);
      if (d(n, "content") && e.markup.preserveText === !1) {
        let ne = 0, Y = f.token[n].replace(Xe, ee).split(ee);
        do
          if (G = G - 1, p[G] < 0)
            ne = ne + f.token[G].length, p[G] === -10 && (ne = ne + 1);
          else
            break;
        while (G > 0);
        G = 0, oe = Y.length;
        do
          Y[G].length + ne > e.wrap ? (Y[G] = r.crlf + Y[G], ne = Y[G].length) : (Y[G] = ` ${Y[G]}`, ne = ne + Y[G].length), G = G + 1;
        while (G < oe);
        i(Y[0], 32) ? f.token[n] = Y.join(c).slice(1) : (p[n - 1] = $, f.token[n] = Y.join(c).replace(r.crlf, c)), f.token[n].indexOf(r.crlf) > 0 && (o = f.token[n].length - f.token[n].lastIndexOf(r.crlf));
      } else {
        do {
          if (G = G - 1, p[G] > -1) {
            o = f.token[n].length, f.lines[n + 1] > 0 && (o = o + 1);
            return;
          }
          if (M(G, "start") > -1) {
            o = 0;
            return;
          }
          if (f.lines[G + 1] > 0 && (d(G, "attribute") === !1 || d(G, "attribute") && d(G + 1, "attribute")) && (d(G, "singleton") === !1 || d(G, "attribute") && d(G + 1, "attribute"))) {
            o = f.token[n].length, f.lines[n + 1] > 0 && (o = o + 1);
            break;
          }
        } while (G > oe);
        p[G] = $;
      }
    }
  }
  function ue() {
    let $ = n;
    f.types[$ - 1] === "script_start" && i(f.token[$ - 1], 123) && (p[$ - 1] = -20);
    do {
      if (f.lexer[n + 1] === "markup" && f.begin[n + 1] < $ && d(n + 1, "start") === !1 && d(n + 1, "singleton") === !1)
        break;
      p.push(0), n = n + 1;
    } while (n < t);
    h[$] = n, f.types[n + 1] === "script_end" && f.token[n + 1] === "}" ? p.push(-20) : (f.types[n + 1], p.push(k - 1)), C = j(), f.lexer[C] === "markup" && f.stack[n].indexOf("attribute") < 0 && (f.types[C] === "end" || f.types[C] === "liquid_end") && (k = k - 1);
  }
  function Ce($) {
    let G = f.token[$].replace(/\s+/g, ee).split(ee), oe = G.length, ne = 1, Y = G[0].length;
    do
      Y + G[ne].length > e.wrap ? (Y = G[ne].length, G[ne] = r.crlf + G[ne]) : (G[ne] = ` ${G[ne]}`, Y = Y + G[ne].length), ne = ne + 1;
    while (ne < oe);
    f.token[$] = G.join(c);
  }
  function O() {
    let $ = n - 1, G = n, oe = !1, ne = !1, Y = M($ + 1, "end"), F = f.token[$].length + 1, H = 0, b = (() => {
      if (M(n, "start") > 0) {
        let y = n;
        do {
          if (d(y, "end") && f.begin[y] === n && y < t - 1 && M(y + 1, "attribute") > -1) {
            oe = !0;
            break;
          }
          y = y + 1;
        } while (y < t);
      } else
        n < t - 1 && M(n + 1, "attribute") > -1 && (oe = !0);
      return d(C, "end") || d(C, "liquid_end") || d(C, "liquid_when") && e.markup.forceIndent === !0 ? d($, "singleton") ? k + 2 : k + 1 : d($, "singleton") ? k + 1 : k;
    })();
    if (oe === !1 && d(n, "comment_attribute")) {
      p.push(k), p[$] = f.types[$] === "singleton" ? k + 1 : k;
      return;
    }
    function X(y) {
      e.markup.forceAttribute === !1 ? p.push(-10) : e.markup.forceAttribute === !0 || y >= e.markup.forceAttribute ? e.liquid.indentAttribute === !0 ? (d(n - 1, "liquid_attribute_start") && (p[n - 1] = b + H), p.push(b + H)) : p.push(b) : p.push(-10);
    }
    b < 1 && (b = 1), Y = 0;
    do
      Y = Y + 1;
    while (M(n + Y, "attribute") > -1 && (d(n + Y, "end") === !1 || d(n + Y, "liquid_when") === !1 || d(n + Y, "singleton") === !1 || d(n + Y, "start") === !1 || d(n + Y, "comment") === !1));
    (s === "force-preserve" || s === "force-align" || s === "force-indent") && (mt(e.markup.forceAttribute) && e.markup.forceAttribute === !1 || kt(e.markup.forceAttribute) && Y <= e.markup.forceAttribute) && (Y = 1 / 0);
    do {
      if (o = o + f.token[n].length + 1, f.types[n].indexOf("attribute") > 0)
        d(n, "comment_attribute") ? p.push(b) : M(n, "start") > 0 && M(n, "liquid") < 0 ? (ne = !0, n < t - 2 && f.types[n + 2].indexOf("attribute") > 0 ? (p.push(-20), n = n + 1, h[n] = n) : ($ === n - 1 && oe === !1 ? V ? p.push(-20) : p.push(b) : V ? p.push(-20) : p.push(b + 1), f.lexer[n + 1] !== "markup" && (n = n + 1, ue()))) : e.liquid.indentAttribute === !0 ? d(n, "liquid_attribute_start") ? (H > 0 ? p.push(b + H) : p.push(b), H = H + 1) : d(n, "liquid_attribute_else") ? p[n - 1] = b + H - 1 : d(n, "liquid_attribute_end") ? (H = H - 1, p[n - 1] = b + H) : X(Y) : M(n, "end") > 0 && d(n, "liquid_attribute_end") === !1 ? (p[n - 1] !== -20 && (p[n - 1] = p[f.begin[n]] - 1), f.lexer[n + 1] !== "markup" ? p.push(-20) : p.push(b)) : M(n, "liquid_attribute") > -1 ? (F = F + f.token[n].length + 1, e.markup.preserveAttribute === !0 ? p.push(-10) : e.markup.forceAttribute === !0 || e.markup.forceAttribute >= 1 || ne === !0 || n < t - 1 && M(n + 1, "attribute") > -1 ? X(Y) : p.push(-10)) : p.push(b);
      else if (d(n, "attribute"))
        F = F + f.token[n].length + 1, e.markup.preserveAttribute === !0 ? p.push(-10) : e.markup.forceAttribute === !0 || e.markup.forceAttribute >= 1 || ne === !0 || n < t - 1 && M(n + 1, "attribute") > -1 ? X(Y) : p.push(-10);
      else if (f.begin[n] < $ + 1)
        break;
      n = n + 1;
    } while (n < t);
    if (n = n - 1, M(n, "liquid") < 0 && M(n, "end") > -1 && M(n, "attribute") > 0 && d($, "singleton") === !1 && p[n - 1] > 0 && oe === !0 && (p[n - 1] = p[n - 1] - 1), p[n] !== -20 && (V === !0 && M($, "start") > -1 && d(n + 1, "script_start") ? p[n] = b : g(n, "/") && p[n - 1] !== 10 ? p[n - 1] = -10 : p[n] = p[$]), e.markup.forceAttribute === !0)
      o = 0, p[$] = b, Y >= 2 && e.markup.delimiterTerminus === "force" && m.set($, Y);
    else if (e.markup.forceAttribute >= 1)
      if (Y >= e.markup.forceAttribute) {
        p[$] = b;
        let y = n - 1;
        do
          (d(y, "liquid") && p[y] === -10 || d(y, "attribute") && p[y] === -10) && (p[y] = b), y = y - 1;
        while (y > $);
        (e.markup.delimiterTerminus === "force" && Y >= 2 || e.markup.delimiterTerminus === "adapt" && Y === 1 / 0) && m.set($, Y);
      } else
        p[$] = -10;
    else
      p[$] = -10;
    if (e.markup.preserveAttribute === !0 || g($, "<%xml%>") || g($, "<?xml?>")) {
      o = 0;
      return;
    }
    if (G = n, G > $ + 1) {
      if (e.markup.selfCloseSpace === !1 && (F = F - 1), F > e.wrap && e.wrap > 0 && e.markup.forceAttribute === !1) {
        p[$] = b, o = f.token[n].length, G = G - 1;
        do
          f.token[G].length > e.wrap && ce(f.token[G]) && Ce(G), (M(G, "liquid") > -1 && p[G] === -10 || d(G, "attribute") && p[G] === -10) && (p[G] = b), G = G - 1;
        while (G > $);
      }
    } else
      e.wrap > 0 && d(n, "attribute") && f.token[n].length > e.wrap && ce(f.token[n]) && Ce(n);
  }
  function ke() {
    do
      f.lexer[n] === "markup" ? (d(n, "doctype") && (p[n - 1] = k), M(n, "attribute") > -1 ? O() : d(n, "comment") ? (A < 0 && (A = n), pe()) : d(n, "comment") === !1 && (C = j(), (d(C, "end") || d(C, "liquid_case_end") || d(C, "liquid_end") && d(n, "liquid_else") === !1) && (k > -1 && (k = k - 1), (g(n, "</ol>") || g(n, "</ul>") || g(n, "</dl>")) && P()), d(n, "script_end") && d(C, "end") ? f.lines[C] < 1 ? p.push(-20) : f.lines[C] > 1 ? p.push(k) : p.push(-10) : (e.markup.forceIndent === !1 || e.markup.forceIndent === !0 && d(C, "script_start")) && (d(n, "content") || d(n, "singleton") || d(n, "liquid")) ? (o = o + f.token[n].length, f.lines[C] > 0 && d(C, "script_start") ? p.push(-10) : e.wrap > 0 && d(n, "singleton") === !1 && (M(n, "liquid") < 0 || C < t && M(n, "liquid") > -1 && M(C, "liquid") < 0) ? ge() : C < t && (M(C, "end") > -1 || M(C, "start") > -1) && (f.lines[C] > 0 || M(n, "liquid_") > -1) ? (d(C, "liquid_case_end") && le.has("case") === !1 && (k = k - 1), p.push(k)) : f.lines[C] === 0 ? p.push(-20) : f.lines[C] === 1 ? p.push(-10) : (d(C, "liquid_when") && (d(n, "liquid") || d(n, "content")) && (k = k - 1), p.push(k))) : d(n, "start") || d(n, "liquid_start") || d(n, "liquid_bad_start") ? (k = k + 1, V === !0 && i(f.token[n + 1], 123) ? f.lines[C] === 0 ? p.push(-20) : f.lines[C] > 1 ? p.push(k) : p.push(-10) : d(n, "start") && d(C, "end") ? f.stack[n] === "liquid" || M(C - 1, "comment") > -1 ? p.push(k) : p.push(-20) : d(n, "start") && d(C, "script_start") ? p.push(-10) : f.lines[C] === 0 && (d(C, "content") || d(C, "singleton") || d(n, "start") && d(C, "liquid") && e.markup.forceIndent === !1) ? p.push(-20) : p.push(k)) : e.markup.forceIndent === !1 && f.lines[C] === 0 && (d(C, "content") || d(C, "singleton")) || d(n + 2, "script_end") ? p.push(-20) : d(n, "liquid_else") && d(C, "liquid_end") ? (k = k - 1, p[n - 1] = k, p.push(k)) : d(n, "liquid_else") && d(C, "liquid_else") ? (p[n - 1] = k - 1, p.push(k - 1)) : d(n, "liquid_else") && (d(C, "content") || d(C, "liquid")) ? (p[n - 1] = k - 1, p.push(k)) : e.markup.forceIndent === !0 && (d(n, "content") && (d(C, "liquid") || d(C, "content")) || d(n, "liquid") && (d(C, "content") || d(C, "liquid"))) ? f.lines[C] < 1 ? p.push(-20) : f.lines[C] > 1 ? p.push(k) : p.push(-10) : d(n, "liquid_bad_start") ? (k = k + 1, p.push(k)) : d(C, "liquid_bad_end") ? (k = k - 1, p.push(k)) : d(C, "liquid_else") && p[n - 1] === k ? p.push(k - 1) : d(n, "liquid_else") && p[n - 1] === k && e.markup.forceIndent === !1 ? (p[n - 1] = k - 1, p.push(k)) : d(a, "liquid_start") && d(C, "liquid_end") && f.lines[C] === 0 ? p[n - 1] = -20 : d(n, "liquid_case_start") ? (le.has("case") === !1 && (k = k + 1), p.push(k)) : d(n, "liquid_when") && d(C, "liquid_when") === !1 ? (d(a, "attribute") && e.markup.forceIndent === !1 ? p[n - 1] = k - 1 : k = k + 1, p.push(k)) : d(C, "liquid_when") && d(n, "liquid_when") === !1 ? (k = k - 1, p.push(k)) : (d(C, "liquid_case_end") && le.has("case") === !1 && (k = k - 1), p.push(k))), d(n, "content") === !1 && d(n, "singleton") === !1 && d(n, "liquid") === !1 && d(n, "liquid_when") === !1 && d(n, "attribute") === !1 && (o = 0)) : (o = 0, ue()), n = n + 1;
    while (n < t);
    return p;
  }
  function K() {
    let $ = f.token[n].split(z), G = e.indentChar.repeat(e.indentSize), oe = $.length, ne = 0, Y = z;
    Y += L(w[n - 1], !1) + G;
    do {
      if (ne === 0)
        if (ne + 1 === oe - 1 && ($[ne + 1].length === 2 || $[ne + 1].length === 3)) {
          Y.length > 1 && (Y = Y.slice(0, -2)), I.push($[ne], Y, $[ne + 1]);
          break;
        } else
          I.push($[ne], Y);
      else
        ne === oe - 1 ? I.push($[ne]) : (ne + 1 === oe - 1 && ($[ne + 1].length === 2 || $[ne + 1].length === 3) && (Y = Y.slice(0, -2)), I.push($[ne], Y));
      ne = ne + 1;
    } while (ne < oe);
  }
  function se() {
    let $ = f.token[n].split(r.crlf), G = $.length, oe = L(w[n - 1], !1), ne = 0, Y = 0;
    do
      $[ne] !== c ? (isNaN(Y) || (I.push(Y === 0 ? z : z.repeat(Y)), Y = NaN), $[ne].startsWith(oe) || ($[ne] = oe + $[ne])) : isNaN(Y) || (Y = Y + 1), ne = ne + 1;
    while (ne < G);
    Y = -1;
    do {
      if (ne = ne - 1, $[ne] !== c)
        break;
      Y = Y + 1;
    } while (ne > -1);
    if (Y === -1)
      I.push($.join(r.crlf).replace(Ct, c)), I.push(L(w[n]));
    else {
      let F = $.join(r.crlf).replace(Ct, c).replace(We, c);
      Y === 0 ? I.push(F, L(w[n])) : I.push(F, z.repeat(Y), L(w[n]));
    }
  }
  function J() {
    if (ft.test(f.token[n])) {
      let $ = f.token[n].split(z), G = $.length, oe = 0;
      do
        $[oe] === c ? oe + 1 !== G && $[oe + 1] !== c ? I.push(z, L(w[n], !1, !0)) : I.push(z) : oe + 1 === G ? I.push($[oe], z, L(w[n], !1, !0)) : I.push($[oe], z, L(w[n], !1, !0)), oe = oe + 1;
      while (oe < G);
    } else
      I.push(f.token[n], L(w[n]));
  }
  function $e() {
    n = r.start, u = e.indentLevel, I.length === 0 && u > 0 && I.push(L(w[n], !1, !0));
    do {
      if (f.lexer[n] === "markup")
        n < t - 1 && (d(n, "start") || d(n, "singleton") || d(n, "xml")) && M(n, "attribute") < 0 && Ke(f.types[n + 1]) === !1 && M(n + 1, "attribute") > -1 && D(), d(n, "comment") && i(f.token[n].trimStart()[1], 37) && e.liquid.preserveComment === !0 ? (I.push(f.token[n]), (d(n + 1, "comment") && i(f.token[n + 1].trimStart()[1], 37) && e.liquid.preserveComment === !0) === !1 ? I.push(L(w[n])) : I.push(L(w[n], !0, !1))) : d(n, "comment") && i(f.token[n].trimStart()[1], 33) && e.markup.preserveComment === !0 ? I.push(f.token[n]) : Ke(f.token[n]) === !1 && f.token[n].indexOf(r.crlf) > 0 && (d(n, "content") && e.markup.preserveText === !1 || d(n, "comment") && T(f.token[n].trimStart()[1], 33) || d(n, "attribute")) ? N() : d(n, "comment") ? J() : d(n, "liquid_capture") ? I.push(f.token[n], L(w[n])) : d(n, "ignore") ? l(n, "script") || l(n, "style") ? se() : (I.push(f.token[n]), d(n + 1, "ignore") === !1 ? d(n + 1, "ignore_next") ? I.push(L(w[n], !0, !1)) : I.push(L(w[n])) : I.push(L(w[n], !0, !1))) : e.markup.forceIndent === !1 && d(n, "liquid") && d(n + 1, "end") && f.lines[n] === 0 ? I.push(f.token[n]) : (u = w[n], e.markup.delimiterTerminus === "force" && B(), ft.test(f.token[n]) && M(n, "liquid") > -1 && d(n, "liquid_end") === !1 ? K() : I.push(f.token[n]), w[n] === -10 && n < t - 1 ? I.push(ee) : w[n] > -1 && (d(n, "ignore") === !1 && d(n + 1, "ignore_next") === !0 || d(n, "ignore") === !1 && d(n, "ignore_next") === !1 && d(n + 1, "ignore") === !0 && l(n + 1, "script") === !1 && l(n + 1, "style") === !1 ? I.push(L(w[n], !0, !1)) : d(n, "ignore") && d(n + 1, "ignore") === !1 && d(n + 1, "ignore_next") === !1 ? I.push(L(w[n])) : d(n + 1, "comment") && e.markup.preserveComment === !0 && i(f.token[n + 1].trimStart()[1], 33) || d(n + 1, "comment") && e.liquid.preserveComment === !0 && i(f.token[n + 1].trimStart()[1], 37) ? I.push(L(w[n], !0, !1)) : d(n + 1, "ignore") === !1 && d(n + 1, "ignore_next") === !1 && I.push(L(w[n]))));
      else {
        r.start = n, r.ender = h[n], u > 0 && e.liquid.dedentTagList.includes(f.stack[n]) && (I.splice(I.length - 1, 1, L(w[n] - 1)), u = u - 1);
        let $ = r.external(u);
        (e.language === "jsx" || e.language === "tsx") && (f.types[n - 1] === "template_string_end" || f.types[n - 1] === "jsx_attribute_start" || f.types[n - 1] === "script_start") ? I.push($) : (I.push($), (e.markup.forceIndent || w[r.iterator] > -1 && n in h) && (h[n] > n && (n = r.iterator), I.push(L(w[n])))), n !== r.iterator && (n = r.iterator);
      }
      n = n + 1;
    } while (n < t);
    return r.iterator = t - 1, e.endNewline === !0 ? I.join(c).replace(/\s*$/, r.crlf) : I.join(c).trimEnd();
  }
  return $e();
}

// src/format/script.ts
function fn() {
  let { data: e, rules: s } = r, n = r.language === "json" ? s.json : s.script, A = 0, a = {}, C = "script", o = r.ender < 1 || r.ender > e.token.length ? e.token.length : r.ender + 1, k = (() => {
    let t = r.start, h = s.indentLevel, V = !1, le = !1, m = c, p = c, w = e.types[0], _ = e.token[0], I = [-1], d = [], l = r.start > 0 ? Array(r.start).fill(0, 0, r.start) : [], g = [], M = [[]], L = [], N = [], S = [], j = [!1], D = [], B = [];
    function P() {
      pe(!1, !1);
      let F = n.commentIndent === !0 ? h : 0;
      if (V === !1 && /\/\u002a\s*global\s/.test(e.token[t])) {
        let H = e.token[t].replace(/\/\u002a\s*global\s+/, c).replace(/\s*\u002a\/$/, c).split(","), b = H.length;
        do
          b = b - 1, H[b] = H[b].replace(/\s+/g, c), H[b] !== c && r.stack.push([H[b], -1]);
        while (b > 0);
      }
      if (e.types[t - 1] === "comment" || e.types[t + 1] === "comment")
        l[t - 1] = F;
      else if (e.lines[t] < 2) {
        let H = t + 1;
        if (e.types[H] === "comment")
          do
            H = H + 1;
          while (H < o && e.types[H] === "comment");
        if (t < o - 1 && e.stack[H] !== "block" && (i(e.token[H], 123) || e.token[H] === "x{")) {
          let b = r.stack.length;
          if (e.begin.splice(t, 0, e.begin[H]), e.ender.splice(t, 0, e.ender[H]), e.lexer.splice(t, 0, e.lexer[H]), e.lines.splice(t, 0, e.lines[H]), e.stack.splice(t, 0, e.stack[H]), e.token.splice(t, 0, e.token[H]), e.types.splice(t, 0, e.types[H]), b > 0)
            do
              if (b = b - 1, r.stack[b][1] === H)
                r.stack[b][1] = t;
              else if (r.stack[b][1] < t)
                break;
            while (b > 0);
          H = H + 1, e.begin.splice(H, 1), e.ender.splice(H, 1), e.lexer.splice(H, 1), e.lines.splice(H, 1), e.stack.splice(H, 1), e.token.splice(H, 1), e.types.splice(H, 1), b = t + 1;
          do
            e.begin[b] = t, e.stack[b] = e.stack[H], b = b + 1;
          while (b < H);
          b = b + 1;
          do {
            if (e.begin[b] === e.begin[H] && (e.begin[b] = t, e.types[b] === "end"))
              break;
            b = b + 1;
          } while (b < o - 1);
          e.begin[H] = t, t = t - 1;
        } else
          l[t - 1] = -10, e.stack[t] === "paren" || e.stack[t] === "method" ? l.push(h + 2) : l.push(h), n.commentIndent === !0 && l[t] > -1 && e.lines[t] < 3 && (e.lines[t] = 3);
        e.types[t + 1] !== "comment" && (V = !0);
        return;
      } else
        i(e.token[t - 1], 44) ? l[t - 1] = F : i(_, 61) && e.types[t - 1] !== "comment" && /^\/\*{2}\s*@[A-Za-z_]+/.test(p) === !0 ? l[t - 1] = -10 : i(_, 123) && e.types[t - 1] !== "comment" && e.lines[0] < 2 ? e.stack[t] === "function" ? l[t - 1] = F : l[t - 1] = /\n/.test(p) ? F : -10 : l[t - 1] = F;
      e.types[t + 1] !== "comment" && (V = !0), i(e.token[e.begin[t]], 40) ? l.push(h + 1) : l.push(h), l[t] > -1 && e.lines[t] < 3 && (e.types[t - 1] === "comment" && p.startsWith("//") ? e.lines[t] = 2 : e.lines[t] = 3), n.commentNewline === !0 && p.startsWith("//") === !1 && e.lines[t] >= 3 && (e.lines[t] = 2);
    }
    function pe(F, H) {
      let b = t - 1, X = F === !0 ? 0 : 1, y = M[M.length - 1] === void 0 ? [] : M[M.length - 1], x = H === !1 && e.stack[t] === "array" && F === !0 && T(p, 91);
      if (!(N[N.length - 1] === !1 || e.stack[t] === "array" && n.arrayFormat === "inline" || e.stack[t] === "object" && n.objectIndent === "inline")) {
        N[N.length - 1] = !1;
        do {
          if (e.types[b] === "end" ? X = X + 1 : e.types[b] === "start" && (X = X - 1), e.stack[b] === "global")
            break;
          if (X === 0) {
            if (e.stack[t] === "class" || e.stack[t] === "map" || x === !1 && (F === !1 && e.token[b] !== "(" && e.token[b] !== "x(" || F === !0 && i(e.token[b], 44)))
              e.types[b + 1] === "liquid_start" ? e.lines[b] < 1 ? l[b] = -20 : l[b] = h - 1 : y.length > 0 && y[y.length - 1] > -1 ? l[b] = h - 1 : l[b] = h;
            else if (e.stack[t] === "array" && e.types[t] === "operator" && (i(e.token[b], 44) && (l[b] = h), b === e.begin[t]))
              break;
            if (F === !1)
              break;
          }
          if (X < 0) {
            e.types[b + 1] === "liquid_start" || e.types[b + 1] === "template_string_start" ? e.lines[b] < 1 ? l[b] = -20 : l[b] = h - 1 : y.length > 0 && y[y.length - 1] > -1 ? l[b] = h - 1 : l[b] = h;
            break;
          }
          b = b - 1;
        } while (b > -1);
      }
    }
    function ge() {
      let F = Ke(M[M.length - 1]) ? [] : M[M.length - 1];
      function H() {
        let b = t, X = !1, y = e.begin[b];
        do {
          if (b = b - 1, e.lexer[b] === "markup") {
            X = !0;
            break;
          }
          e.begin[b] !== y && (b = e.begin[b]);
        } while (b > y);
        if (X === !0) {
          b = t;
          do
            b = b - 1, e.begin[b] !== y ? b = e.begin[b] : i(e.token[b], 44) && (l[b] = h + 1);
          while (b > y);
          l[y] = h + 1, l[t - 1] = h;
        } else
          l[t - 1] = -20;
      }
      if (i(p, 41) && i(e.token[t + 1], 46) && T(e.token[F[0]], 58) && F[F.length - 1] > -1) {
        let b = e.begin[t], X = !1, y = !1;
        do
          b = b - 1;
        while (b > 0 && l[b] < -9);
        X = l[b] === h, b = t + 1;
        do {
          if (b = b + 1, i(e.token[b], 123)) {
            y = !0;
            break;
          }
          if (e.begin[b] === e.begin[t + 1] && (e.types[b] === "separator" || e.types[b] === "end"))
            break;
        } while (b < o);
        X === !1 && y === !0 && M.length > 1 && (M[M.length - 2].push(e.begin[t]), h = h + 1);
      }
      if (w !== "separator" && O(), i(e.token[t + 1], 58) && (e.stack[t] === "object" || e.stack[t] === "array") && pe(!0, !1), i(e.token[e.begin[t] - 1], 44) && (i(e.token[t + 1], 125) || i(e.token[t + 1], 93)) && (e.stack[t] === "object" || e.stack[t] === "array") && pe(!0, !1), e.stack[t] !== "attribute" && (T(p, 41) && p !== "x)" && (e.lexer[t - 1] !== "markup" || e.lexer[t - 1] === "markup" && e.token[t - 2] !== "return") && (h = h - 1), i(p, 125) && e.stack[t] === "switch" && n.noCaseIndent === !1 && (h = h - 1)), i(p, 125) || p === "x}") {
        if (e.types[t - 1] !== "comment" && _ !== "{" && _ !== "x{" && w !== "end" && w !== "string" && w !== "number" && w !== "separator" && _ !== "++" && _ !== "--" && (t < 2 || e.token[t - 2] !== ";" || e.token[t - 2] !== "x;" || _ === "break" || _ === "return")) {
          let b = t - 1, X = !1, y = e.begin[t], x = d.length;
          do {
            if (e.begin[b] === y) {
              if ((i(e.token[b], 61) || i(e.token[b], 59) || e.token[b] === "x;") && (X = !0), i(e.token[b], 46) && l[b - 1] > -1) {
                N[N.length - 1] = !1, l[y] = h + 1, l[t - 1] = h;
                break;
              }
              if (b > 0 && e.token[b] === "return" && (e.token[b - 1] === ")" || e.token[b - 1] === "x)" || e.token[b - 1] === "{" || e.token[b - 1] === "x{" || e.token[b - 1] === "}" || e.token[b - 1] === "x}" || e.token[b - 1] === ";" || e.token[b - 1] === "x;")) {
                h = h - 1, l[t - 1] = h;
                break;
              }
              if (i(e.token[b], 58) && g.length === 0 || i(e.token[b], 44) && X === !1)
                break;
              if (b === 0 || e.token[b - 1] === "{" || e.token[b - 1] === "x{" || e.token[b] === "for" || e.token[b] === "if" || e.token[b] === "do" || e.token[b] === "function" || e.token[b] === "while" || e.token[b] === "var" || e.token[b] === "let" || e.token[b] === "const" || e.token[b] === "with") {
                d[x - 1] === !1 && x > 1 && (t === o - 1 || e.token[t + 1] !== ")" && e.token[t + 1] !== "x)") && e.stack[t] !== "object" && (h = h - 1);
                break;
              }
            } else
              b = e.begin[b];
            b = b - 1;
          } while (b > y);
        }
        I.pop();
      }
      if (n.bracePadding === !1 && p !== "}" && p !== "]" && w !== "markup" && w !== "liquid" && (l[t - 1] = -20), n.bracePadding === !0 && w !== "start" && _ !== ";" && (l[e.begin[t]] < -9 || N[N.length - 1] === !0))
        l[e.begin[t]] = -10, l[t - 1] = -10, l.push(-20);
      else if (e.stack[t] === "attribute")
        l[t - 1] = -20, l.push(h);
      else if (e.stack[t] === "array" && (F.length > 0 || L[L.length - 1] === !0))
        ue(), N[N.length - 1] = !1, l[e.begin[t]] = h + 1, l[t - 1] = h, l.push(-20);
      else if (F.length > 0 && (e.stack[t] === "object" || e.begin[t] === 0 && i(p, 125)))
        ue(), N[N.length - 1] = !1, l[e.begin[t]] = h + 1, l[t - 1] = h, l.push(-20);
      else if (p === ")" || p === "x)") {
        let b = p === ")" && T(_, 40) && B.length > 0 ? B.pop() + 1 : 0, X = e.token[e.begin[t] - 1] === "if" ? (() => {
          let y = t;
          do
            if (y = y - 1, e.token[y] === ")" && l[y - 1] > -1)
              return b;
          while (y > e.begin[t]);
          return b + 5;
        })() : b;
        if (b > 0 && (r.language !== "jsx" || r.language === "jsx" && e.token[e.begin[t] - 1] !== "render")) {
          let y = s.wrap, x = e.begin[t], q = B.length, v = t - 2;
          if (X > y) {
            l[e.begin[t]] = h + 1, l[t - 1] = h;
            do
              e.begin[v] === x ? e.token[v] === "&&" || e.token[v] === "||" ? l[v] = h + 1 : l[v] > -1 && e.types[v] !== "comment" && e.token[v + 1] !== "." && (l[v] = l[v] + 1) : l[v] > -1 && e.token[v + 1] !== "." && (l[v] = l[v] + 1), v = v - 1;
            while (v > x);
          } else
            q > 0 && (B[q - 1] = B[q - 1] + b);
        } else if (p === ")" && t > e.begin[t] + 2 && e.lexer[e.begin[t] + 1] === C && e.token[e.begin[t] + 1] !== "function") {
          let y = e.begin[t] < 0 ? 0 : e.begin[t], x = s.wrap, q = F.length, v = 0, E = 0, me = 0, te = 0, R = 0, Q = !1, W = !1, U = h + 1, Z = !1, ae = !1, he = !1;
          if (l[y] < -9) {
            E = y;
            do
              E = E + 1;
            while (E < t && l[E] < -9);
            te = E;
            do
              v = v + e.token[E].length, l[E] === -10 && (v = v + 1), e.token[E] === "(" && me > 0 && me < x - 1 && te === t && (me = -1), e.token[E] === ")" ? R = R - 1 : e.token[E] === "(" && (R = R + 1), E === y && R > 0 && (me = v), E = E - 1;
            while (E > y && l[E] < -9);
            if (e.token[E + 1] === "." && (U = l[E] + 1), v > x - 1 && x > 0 && T(_, 40) && me !== -1 && N[N.length - 2] === !1 && (e.token[y - 1] === "if" && d[d.length - 1] === !0 || e.token[y - 1] !== "if") && (l[y] = U, e.token[y - 1] === "for")) {
              E = y;
              do
                E = E + 1, i(e.token[E], 59) && e.begin[E] === y && (l[E] = U);
              while (E < t);
            }
          }
          E = t, v = 0;
          do
            E = E - 1, e.stack[E] === "function" ? E = e.begin[E] : e.begin[E] === y ? (i(e.token[E], 63) ? he = !0 : i(e.token[E], 44) && Q === !1 ? (Q = !0, v >= x && x > 0 && (Z = !0)) : e.types[E] === "markup" && ae === !1 && (ae = !0), l[E] > -9 && T(e.token[E], 44) && e.types[E] !== "markup" ? v = 0 : (l[E] === -10 && (v = v + 1), v = v + e.token[E].length, v >= x && x > 0 && (Q === !0 || ae === !0) && (Z = !0))) : l[E] > -9 ? v = 0 : (v = v + e.token[E].length, v >= x && x > 0 && (Q === !0 || ae === !0) && (Z = !0));
          while (E > y && Z === !1);
          if (Q === !1 && i(e.token[e.begin[t] + 1], 96))
            l[e.begin[t]] = -20, l[t - 1] = -20;
          else if ((Q === !0 || ae === !0) && v >= x && x > 0 || l[y] > -9) {
            if (he === !0) {
              if (U = l[y], i(e.token[y - 1], 91)) {
                E = t;
                do
                  if (E = E + 1, e.types[E] === "end" || i(e.token[E], 44) || i(e.token[E], 59))
                    break;
                while (E < o);
                i(e.token[E], 93) && (U = U - 1, W = !0);
              }
            } else
              q > 0 && F[q - 1] > E && (U = U - q);
            N[N.length - 1] = !1, E = t;
            do
              if (E = E - 1, e.begin[E] === y)
                if (e.token[E].indexOf("=") > -1 && e.types[E] === "operator" && e.token[E].indexOf("!") < 0 && e.token[E].indexOf("==") < 0 && e.token[E] !== "<=" && e.token[E].indexOf(">") < 0) {
                  v = E;
                  do
                    if (v = v - 1, e.begin[v] === y && (e.token[v] === ";" || e.token[v] === "," || v === y))
                      break;
                  while (v > y);
                } else
                  i(e.token[E], 44) ? l[E] = U : l[E] > -9 && W === !1 && (e.token[y - 1] !== "for" || e.token[E + 1] === "?" || e.token[E + 1] === ":") && (e.token[e.begin[t]] !== "(" || e.token[E] !== "+") && (l[E] = l[E] + 1);
              else
                l[E] > -9 && W === !1 && (l[E] = l[E] + 1);
            while (E > y);
            l[y] = U, l[t - 1] = U - 1;
          } else
            l[t - 1] = -20;
          e.token[e.begin[t] - 1] === "+" && l[e.begin[t]] > -9 && (l[e.begin[t] - 1] = -10);
        } else
          r.language === "jsx" || r.language === "tsx" ? H() : l[t - 1] = -20;
        l.push(-20);
      } else if (N[N.length - 1] === !0)
        i(p, 93) && e.begin[t] - 1 > 0 && e.token[e.begin[e.begin[t] - 1]] === "[" && (N[N.length - 2] = !1), e.begin[t] < l.length && (l[e.begin[t]] = -20), r.language === "jsx" || r.language === "tsx" ? H() : i(p, 93) && l[e.begin[t]] > -1 ? l[t - 1] = l[e.begin[t]] - 1 : l[t - 1] = -20, l.push(-20);
      else if (e.types[t - 1] === "comment" && e.token[t - 1].substring(0, 2) === "//")
        e.token[t - 2] === "x}" && (l[t - 3] = h + 1), l[t - 1] = h, l.push(-20);
      else if (w.indexOf("liquid") < 0 && // PATCH SO LIQUID TOKENS DONT END WITH: }}} (3 LCB)
      e.types[t - 1] !== "comment" && (i(_, 123) && i(p, 125) || i(_, 91) && i(p, 93)))
        l[t - 1] = -20, l.push(-20);
      else if (i(p, 93)) {
        if (d[d.length - 1] === !0 && N[N.length - 1] === !1 && n.arrayFormat !== "inline" || i(_, 93) && l[t - 2] === h + 1 ? (l[t - 1] = h, l[e.begin[t]] = h + 1) : l[t - 1] === -10 && (l[t - 1] = -20), e.token[e.begin[t] + 1] === "function")
          l[t - 1] = h;
        else if (d[d.length - 1] === !1) {
          (i(_, 125) || _ === "x}") && (l[t - 1] = h);
          let b = t - 1, X = 1;
          do {
            if (i(e.token[b], 93) && (X = X + 1), i(e.token[b], 91) && (X = X - 1, X === 0)) {
              if (b > 0 && (i(e.token[b + 1], 123) || i(e.token[b + 1], 91) || e.token[b + 1] === "x{")) {
                l[b] = h + 1;
                break;
              }
              if (T(e.token[b + 1], 91) || le === !1) {
                l[b] = -20;
                break;
              }
              break;
            }
            X === 1 && e.token[b] === "+" && l[b] > 1 && (l[b] = l[b] - 1), b = b - 1;
          } while (b > -1);
        } else
          (r.language === "jsx" || r.language === "tsx") && H();
        if (n.arrayFormat === "inline") {
          let b = t, X = e.begin[t];
          do
            if (b = b - 1, e.types[b] === "end")
              break;
          while (b > X);
          b > X ? (l[e.begin[t]] = h + 1, l[t - 1] = h) : (l[e.begin[t]] = -20, l[t - 1] = -20);
        } else
          l[e.begin[t]] > -1 && (l[t - 1] = l[e.begin[t]] - 1);
        l.push(-20);
      } else
        i(p, 125) || p === "x}" || d[d.length - 1] === !0 ? (i(p, 125) && _ === "x}" && e.token[t + 1] === "else" ? (l[t - 2] = h + 2, l.push(-20)) : l.push(h), l[t - 1] = h) : l.push(-20);
      e.types[t - 1] === "comment" && (l[t - 1] = h), ue(), le = d[d.length - 1], d.pop(), M.pop(), L.pop(), S.pop(), D.pop(), N.pop(), j.pop();
    }
    function ue() {
      let F = 0, H = M[M.length - 1];
      if (H !== void 0) {
        if (F = H.length - 1, F < 1 && H[F] < 0 && (i(p, 59) || p === "x;" || i(p, 41) || p === "x)" || i(p, 125) || p === "x}")) {
          H.pop();
          return;
        }
        if (!(F < 0 || H[F] < 0)) {
          if (i(p, 58)) {
            if (T(e.token[H[F]], 63))
              do
                H.pop(), F = F - 1, h = h - 1;
              while (F > -1 && H[F] > -1 && T(e.token[H[F]], 63));
            H[F] = t, l[t - 1] = h;
          } else
            do
              H.pop(), F = F - 1, h = h - 1;
            while (F > -1 && H[F] > -1);
          (e.stack[t] === "array" || i(p, 44)) && H.length < 1 && H.push(-1);
        }
      }
    }
    function Ce() {
      let F = t;
      do {
        if (e.lexer[t + 1] === C && e.begin[t + 1] < F || e.token[F - 1] === "return" && e.types[t] === "end" && e.begin[t] === F)
          break;
        l.push(0), t = t + 1;
      } while (t < o);
      a[F] = t, l.push(h - 1);
    }
    function O() {
      let F = t - 1, H = e.begin[t];
      if (!(h < 1))
        do {
          if (H !== e.begin[F])
            F = e.begin[F];
          else if (e.types[F] === "separator" || e.types[F] === "operator") {
            e.token[F] === "." && l[F - 1] > 0 && (e.token[H - 1] === "if" ? h = h - 2 : h = h - 1);
            break;
          }
          F = F - 1;
        } while (F > 0 && F > H);
    }
    function ke() {
      (e.token[t + 1] !== "," && p.indexOf("/>") !== p.length - 2 || e.token[t + 1] === "," && e.token[e.begin[t] - 3] !== "React") && pe(!1, !1), _ === "return" || _ === "?" || _ === ":" ? (l[t - 1] = -10, l.push(-20)) : w === "start" || e.token[t - 2] === "return" && e.stack[t - 1] === "method" ? l.push(h) : l.push(-20);
    }
    function K() {
      let F = Ke(M[M.length - 1]) ? [] : M[M.length - 1];
      function H() {
        let b = e.token[t + 1], X = 0, y = 0, x = t, q = p === "+" ? h + 2 : h, v = 0;
        if (s.wrap < 1) {
          l.push(-10);
          return;
        }
        do {
          if (x = x - 1, i(e.token[e.begin[t]], 40) && (x === e.begin[t] && (v = X), i(e.token[x], 44) && e.begin[x] === e.begin[t] && d[d.length - 1] === !0) || X > s.wrap - 1 || l[x] > -9 || e.types[x] === "operator" && e.token[x] !== "=" && e.token[x] !== "+" && e.begin[x] === e.begin[t] || (X = X + e.token[x].length, x === e.begin[t] && e.token[x] === "[" && X < s.wrap - 1) || e.token[x] === "." && l[x] > -9)
            break;
          l[x] === -10 && (X = X + 1);
        } while (x > 0);
        if (v > 0 && (v = v + b.length), X = X + b.length, y = x, X > s.wrap - 1 && l[x] < -9)
          do
            y = y - 1;
          while (y > 0 && l[y] < -9);
        if (e.token[y + 1] === "." && e.begin[t] <= e.begin[y] ? q = q + 1 : e.types[y] === "operator" && (q = l[y]), y = b.length, X + y < s.wrap) {
          l.push(-10);
          return;
        }
        if (i(e.token[e.begin[t]], 40) && (e.token[F[0]] === ":" || e.token[F[0]] === "?") ? q = h + 3 : e.stack[t] === "method" ? (l[e.begin[t]] = h, d[d.length - 1] === !0 ? q = h + 3 : q = h + 1) : (e.stack[t] === "object" || e.stack[t] === "array") && pe(!0, !1), (e.token[x] === "var" || e.token[x] === "let" || e.token[x] === "const") && (X = X - s.indentSize * s.indentChar.length * 2), v > 0 ? x = s.wrap - v : x = s.wrap - X, x > 0 && x < 5) {
          l.push(q), (e.token[t].charAt(0) === '"' || e.token[t].charAt(0) === "'") && (t = t + 1, l.push(-10));
          return;
        }
        if (e.token[e.begin[t]] !== "(" || v > s.wrap - 1 || v === 0) {
          if (v > 0 && (X = v), X - b.length < s.wrap - 1 && (b.charAt(0) === '"' || b.charAt(0) === "'")) {
            if (t = t + 1, X = X + 3, X - b.length > s.wrap - 4) {
              l.push(q);
              return;
            }
            l.push(-10);
            return;
          }
          l.push(q);
          return;
        }
        l.push(-10);
      }
      if (O(), F.length > 0 && F[F.length - 1] > -1 && e.stack[t] === "array" && (L[L.length - 1] = !0), p !== ":" && (e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && N.length > 0 && pe(!0, !1), p !== "?" && e.token[F[F.length - 1]] === ".")) {
        let b = 0, X = t, y = e.begin[X];
        do {
          if (e.begin[X] === y) {
            if (e.token[X + 1] === "{" || e.token[X + 1] === "[" || e.token[X] === "function")
              break;
            if (i(e.token[X], 44) || i(e.token[X], 59) || e.types[X] === "end" || i(e.token[X], 58)) {
              F.pop(), h = h - 1;
              break;
            }
            if (e.token[X] === "?" || i(e.token[X], 58)) {
              e.token[F[F.length - 1]] === "." && b < 2 && (F[F.length - 1] = y + 1);
              break;
            }
            e.token[X] === "." && (b = b + 1);
          }
          X = X + 1;
        } while (X < o);
      }
      if (p === "!" || p === "...") {
        (i(_, 125) || _ === "x}") && (l[t - 1] = h), l.push(-20);
        return;
      }
      if (_ === ";" || _ === "x;") {
        e.token[e.begin[t] - 1] !== "for" && (l[t - 1] = h), l.push(-20);
        return;
      }
      if (p === "*") {
        _ === "function" || _ === "yield" ? l[t - 1] = -20 : l[t - 1] = -10, l.push(-10);
        return;
      }
      if (p === "?") {
        if (e.lines[t] === 0 && e.types[t - 2] === "word" && e.token[t - 2] !== "return" && e.token[t - 2] !== "in" && e.token[t - 2] !== "instanceof" && e.token[t - 2] !== "typeof" && (w === "reference" || w === "word") && (e.types[t + 1] === "word" || e.types[t + 1] === "reference" || (i(e.token[t + 1], 40) || e.token[t + 1] === "x(") && e.token[t - 2] === "new")) {
          if (l[t - 1] = -20, e.types[t + 1] === "word" || e.types[t + 1] === "reference") {
            l.push(-10);
            return;
          }
          l.push(-20);
          return;
        }
        if (e.token[t + 1] === ":") {
          l[t - 1] = -20, l.push(-20);
          return;
        }
        if (g.push(t), n.ternaryLine === !0)
          l[t - 1] = -10;
        else {
          let b = t - 1;
          do
            b = b - 1;
          while (b > -1 && l[b] < -9);
          if (F.push(t), h = h + 1, l[b] === h && e.token[b + 1] !== ":" && (h = h + 1, F.push(t)), l[t - 1] = h, i(e.token[e.begin[t]], 40) && (F.length < 2 || F[0] === F[1])) {
            N[N.length - 1] = !1, t - 2 === e.begin[t] ? l[e.begin[t]] = h - 1 : l[e.begin[t]] = h, b = t - 2;
            do {
              if (e.types[b] === "end" && l[b - 1] > -1)
                break;
              l[b] > -1 && (l[b] = l[b] + 1), b = b - 1;
            } while (b > e.begin[t]);
          }
        }
        l.push(-10);
        return;
      }
      if (p === ":") {
        if (e.stack[t] === "map" || e.types[t + 1] === "type" || e.types[t + 1] === "type_start") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (g.length > 0 && e.begin[g[g.length - 1]] === e.begin[t]) {
          let b = t, X = e.begin[t];
          do
            if (b = b - 1, e.begin[b] === X) {
              if (i(e.token[b], 44) || i(e.token[b], 59)) {
                l[t - 1] = -20;
                break;
              }
              if (e.token[b] === "?") {
                g.pop(), ue(), n.ternaryLine === !0 && (l[t - 1] = -10), l.push(-10);
                return;
              }
            } else
              e.types[b] === "end" && (b = e.begin[b]);
          while (b > X);
        }
        if (e.token[t - 2] === "where" && e.stack[t - 2] === e.stack[t]) {
          l[t - 1] = -10, l.push(-10);
          return;
        }
        if (w === "reference" && e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if ((i(_, 41) || _ === "x)") && e.token[e.begin[t - 1] - 2] === "function") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (e.stack[t] === "attribute") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && (w === "reference" || i(_, 41) || i(_, 93) || _ === "?") && (e.stack[t] === "map" || e.stack[t] === "class" || e.types[t + 1] === "reference") && (g.length === 0 || g[g.length - 1] < e.begin[t]) && ("mapclassexpressionmethodglobalparen".indexOf(e.stack[t]) > -1 || e.types[t - 2] === "word" && e.stack[t] !== "switch")) {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (e.stack[t] === "switch" && (g.length < 1 || g[g.length - 1] < e.begin[t])) {
          l[t - 1] = -20, n.caseSpace === !0 ? l.push(-10) : l.push(h);
          return;
        }
        e.stack[t] === "object" ? l[t - 1] = -20 : g.length > 0 ? l[t - 1] = h : l[t - 1] = -10, l.push(-10);
        return;
      }
      if (p === "++" || p === "--") {
        w === "number" || w === "reference" ? (l[t - 1] = -20, l.push(-10)) : t < o - 1 && (e.types[t + 1] === "number" || e.types[t + 1] === "reference") ? l.push(-20) : l.push(-10);
        return;
      }
      if (p === "+") {
        if (w === "start" ? l[t - 1] = -20 : l[t - 1] = -10, s.wrap < 1 || e.token[e.begin[t]] === "x(") {
          l.push(-10);
          return;
        }
        let b = e.token[t + 1];
        if (b === void 0) {
          l.push(-10);
          return;
        }
        if (e.types[t - 1] === "operator" || e.types[t - 1] === "start") {
          if (e.types[t + 1] === "reference" || b === "(" || b === "[") {
            l.push(-20);
            return;
          }
          if (Number(b.slice(1, -1)) > -1 && (/\d/.test(b.charAt(1)) === !0 || b.charAt(1) === "." || b.charAt(1) === "-" || b.charAt(1) === "+")) {
            l.push(-20);
            return;
          }
        }
        return H();
      }
      if (e.types[t - 1] !== "comment" && (i(_, 40) ? l[t - 1] = -20 : p === "*" && e.stack[t] === "object" && e.types[t + 1] === "reference" && (i(_, 123) || i(_, 44)) ? l[t - 1] = h : (p !== "?" || g.length === 0) && (l[t - 1] = -10)), p.indexOf("=") > -1 && p !== "==" && p !== "===" && p !== "!=" && p !== "!==" && p !== ">=" && p !== "<=" && p !== "=>" && e.stack[t] !== "method" && e.stack[t] !== "object") {
        let b = t + 1, X = 0, y = !1, x = c;
        if ((i(e.token[e.begin[t]], 40) || e.token[e.begin[t]] === "x(") && e.token[t + 1] !== "function")
          return;
        do {
          if (e.types[b] === "start") {
            if (y === !0 && e.token[b] !== "[") {
              j[j.length - 1] === !0 && (j[j.length - 1] = !1);
              break;
            }
            X = X + 1;
          }
          if (e.types[b] === "end" && (X = X - 1), X < 0) {
            j[j.length - 1] === !0 && (j[j.length - 1] = !1);
            break;
          }
          if (X === 0) {
            if (x = e.token[b], y === !0) {
              if (e.types[b] === "operator" || i(e.token[b], 59) || e.token[b] === "x;" || e.token[b] === "?" || e.token[b] === "var" || e.token[b] === "let" || e.token[b] === "const") {
                x !== void 0 && (x === "?" || x.indexOf("=") > -1 && x !== "==" && x !== "===" && x !== "!=" && x !== "!==" && x !== ">=" && x !== "<=") && j[j.length - 1] === !1 && (j[j.length - 1] = !0), (x === ";" || x === "x;" || x === "var" || x === "let" || x === "const") && j[j.length - 1] === !0 && (j[j.length - 1] = !1);
                break;
              }
              j[j.length - 1] === !0 && (x === "return" || x === "break" || x === "continue" || x === "throw") && (j[j.length - 1] = !1);
            }
            (x === ";" || x === "x;" || x === ",") && (y = !0);
          }
          b = b + 1;
        } while (b < o);
        l.push(-10);
        return;
      }
      if (p === "-" && _ === "return" || i(_, 61)) {
        l.push(-20);
        return;
      }
      if (w === "operator" && e.types[t + 1] === "reference" && _ !== "--" && _ !== "++" && p !== "&&" && p !== "||") {
        l.push(-20);
        return;
      }
      return H();
    }
    function se() {
      let F = () => {
        let H = e.begin[t];
        if (H < 0)
          r.stack.push([e.token[t], -1]);
        else {
          if (e.stack[H + 1] !== "function")
            do
              H = e.begin[H];
            while (H > -1 && e.stack[H + 1] !== "function");
          r.stack.push([e.token[t], H]);
        }
      };
      if (e.types[t - 1] === "comment" ? l[t - 1] = h : w === "end" && _ !== ")" && e.token[e.begin[t - 1] - 1] !== ")" ? l[t - 1] = -10 : w !== "separator" && w !== "start" && w !== "end" && w.indexOf("template_string") < 0 && (w === "word" || w === "operator" || w === "property" || w === "type" || w === "reference" ? l[t - 1] = -10 : l[t - 1] = -20), _ === "var" && e.lexer[t - 1] === C)
        F();
      else if (_ === "function")
        r.stack.push([e.token[t], t]);
      else if (_ === "let" || _ === "const")
        r.stack.push([e.token[t], t]);
      else if (e.stack[t] === "arguments")
        r.stack.push([e.token[t], t]);
      else if (i(_, 44)) {
        let H = t;
        do
          H = H - 1;
        while (H > e.begin[t] && e.token[H] !== "var" && e.token[H] !== "let" && e.token[H] !== "const");
        e.token[H] === "var" ? F() : (e.token[H] === "let" || e.token[H] === "const") && r.stack.push([e.token[t], t]);
      }
      l.push(-10);
    }
    function J() {
      let F = Ke(M[M.length - 1]) ? [] : M[M.length - 1], H = () => {
        if (n.methodChain > 0) {
          let b = t, X = e.begin[t], y = [t], x = e.token[X - 1] === "if";
          do
            if (b = b - 1, e.types[b] === "end" && (b = e.begin[b]), e.begin[b] === X) {
              if (e.types[b] === "string" && e.token[b].indexOf("${") === e.token[b].length - 2)
                break;
              if (e.token[b] === ".") {
                if (l[b - 1] > 0) {
                  l[t - 1] = x === !0 ? h + 1 : h;
                  return;
                }
                y.push(b);
              } else if (e.token[b] === ";" || e.token[b] === "," || e.types[b] === "operator" || (e.types[b] === "word" || e.types[b] === "reference") && (e.types[b - 1] === "word" || e.types[b - 1] === "reference"))
                break;
            }
          while (b > X);
          if (y.length < n.methodChain) {
            l[t - 1] = -20;
            return;
          }
          b = 0, X = y.length;
          do
            l[y[b] - 1] = x === !0 ? h + 1 : h, b = b + 1;
          while (b < X);
          b = y[y.length - 1] - 1;
          do
            l[b] > -1 && (l[b] = l[b] + 1), b = b + 1;
          while (b < t);
          h = x === !0 ? h + 2 : h + 1;
        }
        l[t - 1] = h;
      };
      if (p === "::") {
        l[t - 1] = -20, l.push(-20);
        return;
      }
      if (p === ".") {
        e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && F.length > 0 && (e.stack[t] === "object" || e.stack[t] === "array" ? pe(!0, !1) : pe(!1, !1)), n.methodChain === 0 ? l[t - 1] = -20 : n.methodChain < 0 ? e.lines[t] > 0 ? H() : l[t - 1] = -20 : H(), l.push(-20);
        return;
      }
      if (p === ",") {
        if (O(), d[d.length - 1] === !1 && (e.stack[t] === "object" || e.stack[t] === "array" || e.stack[t] === "paren" || e.stack[t] === "expression" || e.stack[t] === "method") && (d[d.length - 1] = !0, i(e.token[e.begin[t]], 40))) {
          let b = t;
          do
            b = b - 1, e.begin[b] === e.begin[t] && e.token[b] === "+" && l[b] > -9 && (l[b] = l[b] + 2);
          while (b > e.begin[t]);
        }
        if (e.stack[t] === "array" && n.arrayFormat === "indent") {
          l[t - 1] = -20, l.push(h);
          return;
        }
        if (e.stack[t] === "array" && n.arrayFormat === "inline") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (e.stack[t] === "object" && n.objectIndent === "indent") {
          l[t - 1] = -20, l.push(h);
          return;
        }
        if (e.stack[t] === "object" && n.objectIndent === "inline") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (F.length > 0) {
          F[F.length - 1] > -1 && ue(), l[t - 1] = -20, l.push(h);
          return;
        }
        if (e.token[t - 2] === ":" && e.token[t - 4] === "where") {
          l[t - 1] = -20, l.push(-10);
          return;
        }
        if (l[t - 1] = -20, e.types[t + 1] !== "end" && (S[S.length - 1] = S[S.length - 1] + 1), (i(e.token[e.begin[t]], 40) || e.token[e.begin[t]] === "x(") && r.language !== "jsx" && e.stack[t] !== "global" && (e.types[t - 1] !== "string" && e.types[t - 1] !== "number" || e.token[t - 2] !== "+" || e.types[t - 1] === "string" && e.types[t - 1] !== "number" && i(e.token[t - 2], 43) && e.types[t - 3] !== "string" && e.types[t - 3] !== "number")) {
          l.push(-10);
          return;
        }
        if (w === "reference" && e.types[t - 2] === "word" && "var-let-const-from".indexOf(e.token[t - 2]) < 0 && (e.types[t - 3] === "end" || e.token[t - 3] === ";")) {
          D[D.length - 1] = !0, l.push(-10);
          return;
        }
        if (D[D.length - 1] === !0 || e.stack[t] === "notation") {
          l.push(-10);
          return;
        }
        if (S[S.length - 1] > 3 && (e.stack[t] === "array" || e.stack[t] === "object")) {
          if (N[N.length - 1] === !0 && pe(!0, !0), l[t - 1] = -20, L[L.length - 1] === !0) {
            l.push(h);
            return;
          }
          let b = e.begin[t], X = t;
          do
            e.types[X] === "end" ? X = e.begin[X] : i(e.token[X], 44) && e.types[X + 1] !== "comment" && (l[X] = h), X = X - 1;
          while (X > b);
          l[b] = h, L[L.length - 1] = !0;
          return;
        }
        if (e.stack[t] === "object" && N[N.length - 1] === !0 && e.types[e.begin[t] - 1] !== "word" && e.types[e.begin[t] - 1] !== "reference" && e.token[e.begin[t] - 1] !== "(" && e.token[e.begin[t] - 1] !== "x(") {
          let b = e.begin[t], X = t - 1;
          do {
            if (e.begin[X] === b) {
              if (i(e.token[X], 44))
                break;
              if (i(e.token[X], 58)) {
                pe(!0, !1);
                break;
              }
            }
            X = X - 1;
          } while (X > b);
        }
        if (N[N.length - 1] === !1 || i(e.token[t - 2], 43) && (w === "string" || w === "number") && l[t - 2] > 0 && (i(_, 34) || i(_, 39))) {
          if (e.stack[t] === "method") {
            if (i(e.token[t - 2], 43) && (i(_, 34) || i(_, 39)) && (e.token[t - 3].charAt(0) === '"' || e.token[t - 3].charAt(0) === "'")) {
              l.push(h + 2);
              return;
            }
            if (e.token[t - 2] !== "+") {
              l.push(-10);
              return;
            }
          }
          l.push(h);
          return;
        }
        if (N[N.length - 1] === !0 && e.stack[t] !== "object") {
          l.push(-10);
          return;
        }
        if (S[S.length - 1] < 4 && (e.stack[t] === "array" || e.stack[t] === "object")) {
          l.push(-10);
          return;
        }
        l.push(h);
        return;
      }
      if (i(p, 59) || p === "x;") {
        if (O(), e.token[t + 1] !== void 0 && e.types[t + 1].indexOf("attribute") > 0 && e.types[t + 1].indexOf("end") > 0) {
          l[t - 1] = -20, l.push(h - 1);
          return;
        }
        if (I[I.length - 1] > -1 && e.stack[I[I.length - 1]] !== "expression") {
          let b = t;
          do {
            if (b = b - 1, i(e.token[b], 59))
              break;
            if (i(e.token[b], 44)) {
              h = h - 1;
              break;
            }
            e.types[b] === "end" && (b = e.begin[b]);
          } while (b > 0 && b > e.begin[t]);
        }
        if (I[I.length - 1] = -1, ue(), e.token[e.begin[t] - 1] !== "for" && pe(!1, !1), D[D.length - 1] = !1, l[t - 1] = -20, e.begin[t] > 0 && e.token[e.begin[t] - 1] === "for" && e.stack[t] !== "for") {
          l.push(-10);
          return;
        }
        l.push(h);
        return;
      }
      l.push(-20);
    }
    function $e() {
      let F = e.stack[t + 1], H = t === 0 ? e.stack[t] : e.stack[t - 1];
      if ((i(_, 41) || T(_, 93) && (H === "object" || H === "array")) && (F !== "method" || F === "method" && T(e.token[t + 1], 41) && T(e.token[t + 2], 41)) && (i(_, 41) && (F !== "function" || i(e.token[e.begin[e.begin[t - 1] - 1]], 40) || e.token[e.begin[e.begin[t - 1] - 1]] === "x(") ? pe(!1, !1) : e.types[t + 1] !== "end" && e.types[t + 2] !== "end" && pe(!0, !1)), d.push(!1), M.push([]), j.push(!1), L.push(!1), D.push(!1), S.push(0), n.neverFlatten === !0 || F === "attribute" || w === "generic" || n.arrayFormat === "indent" && F === "array" || F === "class" && T(_, 40) && _ !== "x(" || i(p, 91) && e.token[t + 1] === "function" ? N.push(!1) : F === "expression" || F === "method" || (F === "object" || F === "class") && (i(_, 40) || _ === "x(" || w === "word" || w === "reference") || F === "array" || i(p, 40) || p === "x(" || i(p, 123) && F === "object" && w !== "operator" && w !== "start" && w !== "string" && w !== "number" && H !== "object" && H !== "array" && t > 0 ? N.push(!0) : N.push(!1), T(p, 40) && p !== "x(" && e.stack[t + 1] !== "attribute" && (h = h + 1), i(p, 123) || p === "x{") {
        if (I.push(-1), e.types[t - 1] !== "comment" && (w === "markup" ? l[t - 1] = h : n.braceAllman === !0 && w !== "operator" && _ !== "return" ? l[t - 1] = h - 1 : e.stack[t + 1] !== "block" && (F === "function" || i(_, 41) || _ === "x)" || i(_, 44) || i(_, 125) || w === "markup") ? l[t - 1] = -10 : (i(_, 123) || _ === "x{" || i(_, 91) || i(_, 125) || _ === "x}") && (l[t - 1] = h - 1)), F === "object") {
          if (n.objectIndent === "indent") {
            N[N.length - 1] = !1, l.push(h);
            return;
          }
          if (n.objectIndent === "inline") {
            N[N.length - 1] = !0, l.push(-20);
            return;
          }
        }
        if (F === "switch") {
          if (n.noCaseIndent === !0) {
            l.push(h - 1);
            return;
          }
          h = h + 1, l.push(h);
          return;
        }
        if (N[N.length - 1] === !0 && w !== "word" && w !== "reference") {
          l.push(-20);
          return;
        }
        l.push(h);
        return;
      }
      if (i(p, 40) || p === "x(") {
        if (s.wrap > 0 && i(p, 40) && e.token[t + 1] !== ")" && B.push(1), i(_, 45) && (i(e.token[t - 2], 40) || e.token[t - 2] === "x(") && (l[t - 2] = -20), w === "end" && H !== "if" && H !== "for" && H !== "catch" && H !== "else" && H !== "do" && H !== "try" && H !== "finally" && H !== "catch" && (e.types[t - 1] === "comment" ? l[t - 1] = h : l[t - 1] = -20), _ === "async" ? l[t - 1] = -10 : (F === "method" || e.token[t - 2] === "function" && w === "reference") && (_ === "import" || _ === "in" || n.functionNameSpace === !0 ? l[t - 1] = -10 : i(_, 125) && e.stack[t - 1] === "function" || w === "word" || w === "reference" || w === "property" ? l[t - 1] = -20 : H !== "method" && F !== "method" && (l[t - 1] = h)), i(_, 43) && (i(e.token[t - 2], 34) || i(e.token[t - 2], 39))) {
          l.push(h);
          return;
        }
        if (i(_, 125) || _ === "x}") {
          l.push(-20);
          return;
        }
        (i(_, 45) && (t < 2 || T(e.token[t - 2], 41) && T(e.token[t - 2], 93) && e.token[t - 2] !== "x)" && e.types[t - 2] !== "reference" && e.types[t - 2] !== "string" && e.types[t - 2] !== "number") || n.functionSpace === !1 && _ === "function") && (l[t - 1] = -20), l.push(-20);
        return;
      }
      if (i(p, 91)) {
        if (i(_, 91) && (d[d.length - 2] = !0), _ === "return" || _ === "var" || _ === "let" || _ === "const" ? l[t - 1] = -10 : e.types[t - 1] !== "comment" && e.stack[t - 1] !== "attribute" && (w === "end" || w === "word" || w === "reference") ? l[t - 1] = -20 : (i(_, 91) || i(_, 123) || _ === "x{") && (l[t - 1] = h - 1), e.stack[t] === "attribute") {
          l.push(-20);
          return;
        }
        if (n.arrayFormat === "indent") {
          N[N.length - 1] = !1, l.push(h);
          return;
        }
        if (n.arrayFormat === "inline") {
          N[N.length - 1] = !0, l.push(-20);
          return;
        }
        if (F === "method" || N[N.length - 1] === !0) {
          l.push(-20);
          return;
        }
        let b = t + 1;
        do {
          if (i(e.token[b], 93)) {
            l.push(-20);
            return;
          }
          if (i(e.token[b], 44)) {
            l.push(h);
            return;
          }
          b = b + 1;
        } while (b < o);
        l.push(-20);
      }
    }
    function $() {
      p.length === 1 ? (l.push(-20), e.lines[t] === 0 && (l[t - 1] = -20)) : p.indexOf("#!/") === 0 ? l.push(h) : w === "liquid" ? l[t - 1] = -10 : l.push(-10), (i(_, 44) || w === "start") && (e.stack[t] === "object" || e.stack[t] === "array") && N[N.length - 1] === !1 && t > 0 && (l[t - 1] = h);
    }
    function G() {
      m === "liquid_start" ? w === "string" ? (e.lines[t - 1] <= 1 && (l[t - 1] = -20), e.lines[t] > 1 ? (h = h + 1, l.push(h)) : l.push(-10)) : e.lines[t] > 1 ? (h = h + 1, l.push(h)) : e.lines[t] === 1 ? l.push(-10) : (l[t - 1] = -20, l.push(-20)) : m === "liquid_else" ? w === "string" ? (e.lines[t - 1] <= 1 && (l[t - 1] = -20), e.lines[t] > 0 ? (h = h - 1, l.push(h)) : l.push(-20)) : e.lines[t] > 1 ? (l[t - 1] = h - 1, l.push(h)) : e.lines[t] === 1 ? l.push(-10) : l.push(-20) : m === "liquid_end" ? w === "string" ? (e.lines[t - 1] <= 1 && (l[t - 1] = -20), e.lines[t] > 1 ? (l[t - 1] = h - 1, l.push(h)) : l.push(-10)) : w === "liquid" && e.lines[t] < 2 ? l.push(-10) : e.lines[t] > 1 ? (l[t - 1] = h, l.push(h)) : e.lines[t] === 0 ? (l[t - 1] = -20, h = h - 1, l.push(-20)) : (h = h - 1, l.push(h)) : m === "liquid" && (i(_, 58) && l[t - 2] === -10 && (l[t - 2] = -20), w === "string" && l[t - 2] === -10 ? (l[t - 1] = -20, l.push(-10)) : e.lines[t] > 1 ? l.push(h) : e.lines[t] === 1 ? l.push(-10) : l.push(-20));
    }
    function oe() {
      m === "template_string_start" ? (h = h + 1, l.push(h)) : m === "template_string_else" ? (O(), l[t - 1] = h - 1, l.push(h)) : (O(), h = h - 1, l[t - 1] = h, l.push(-10)), t > 2 && (e.types[t - 2] === "template_string_else" || e.types[t - 2] === "template_string_start") && (n.bracePadding === !0 ? (l[t - 2] = -10, l[t - 1] = -10) : (l[t - 2] = -20, l[t - 1] = -20));
    }
    function ne() {
      i(e.token[t - 1], 44) || i(e.token[t - 1], 58) && e.stack[t - 1] !== "data_type" ? l[t - 1] = -10 : l[t - 1] = -20, (e.types[t] === "type" || e.types[t] === "type_end") && l.push(-10), e.types[t] === "type_start" && l.push(-20);
    }
    function Y() {
      if ((i(_, 41) || _ === "x)") && e.stack[t] === "class" && (e.token[e.begin[t - 1] - 1] === "static" || e.token[e.begin[t - 1] - 1] === "final" || e.token[e.begin[t - 1] - 1] === "void") && (l[t - 1] = -10, l[e.begin[t - 1] - 1] = -10), i(_, 93) && (l[t - 1] = -10), p === "else" && i(_, 125) && (e.token[t - 2] === "x}" && (l[t - 3] = l[t - 3] - 1), (n.braceAllman === !0 || n.elseNewline === !0) && (l[t - 1] = h)), p === "new" && we.js.keywords.has(e.token[t + 1]) && (A = A + 1), p === "from" && w === "end" && t > 0 && (e.token[e.begin[t - 1] - 1] === "import" || i(e.token[e.begin[t - 1] - 1], 44)) && (l[t - 1] = -10), p === "function") {
        if (n.functionSpace === !1 && t < o - 1 && (i(e.token[t + 1], 40) || e.token[t + 1] === "x(")) {
          l.push(-20);
          return;
        }
        l.push(-10);
        return;
      }
      if (i(_, 45) && t > 1)
        e.types[t - 2] === "operator" || i(e.token[t - 2], 44) ? l[t - 1] = -20 : e.types[t - 2] === "start" && (l[t - 2] = -20, l[t - 1] = -20);
      else if (p === "while" && (i(_, 125) || _ === "x}")) {
        let F = t - 1, H = 0;
        do {
          if ((i(e.token[F], 125) || e.token[F] === "x}") && (H = H + 1), (i(e.token[F], 123) || e.token[F] === "x{") && (H = H - 1), H === 0) {
            if (e.token[F - 1] === "do") {
              l[t - 1] = -10;
              break;
            }
            l[t - 1] = h;
            break;
          }
          F = F - 1;
        } while (F > -1);
      } else if (p === "in" || (i(_, 125) || _ === "x}") && (p === "catch" || p === "else" && n.elseNewline === !1 && n.braceAllman === !1))
        l[t - 1] = -10;
      else if (p === "var" || p === "let" || p === "const") {
        if (I[I.length - 1] = t, w === "end" && (l[t - 1] = h), e.token[e.begin[t] - 1] !== "for") {
          let F = t + 1, H = 0;
          do {
            if (e.types[F] === "end" && (H = H - 1), e.types[F] === "start" && (H = H + 1), H < 0 || H === 0 && (i(e.token[F], 59) || i(e.token[F], 44)))
              break;
            F = F + 1;
          } while (F < o);
          i(e.token[F], 44) && (h = h + 1);
        }
        l.push(-10);
        return;
      }
      if (w !== "word" && e.stack[t] === "switch" && (p === "default" || p === "case")) {
        l[t - 1] = h - 1, l.push(-10);
        return;
      }
      if (p === "catch" && _ === ".") {
        l[t - 1] = -20, l.push(-20);
        return;
      }
      if (p === "catch" || p === "finally") {
        l[t - 1] = -10, l.push(-10);
        return;
      }
      if (n.bracePadding === !1 && t < o - 1 && i(e.token[t + 1], 125)) {
        l.push(-20);
        return;
      }
      if (e.stack[t] === "object" && (i(_, 123) || i(_, 44)) && (i(e.token[t + 1], 40) || e.token[t + 1] === "x(")) {
        l.push(-20);
        return;
      }
      e.types[t - 1] === "comment" && i(e.token[e.begin[t]], 40) && (l[t - 1] = h + 1), s.script.inlineReturn === !0 && p === "return" && w === "start" && e.stack[t] === "if" && _ === "x{" ? (l[t - 1] = -20, l.push(-20)) : l.push(-10);
    }
    do
      e.lexer[t] === C ? (m = e.types[t], p = e.token[t], m === "comment" ? P() : m === "regex" ? l.push(-20) : m === "string" ? $() : m.indexOf("template_string") === 0 ? oe() : m === "separator" ? J() : m === "start" ? $e() : m === "end" ? ge() : m === "type" || m === "type_start" || m === "type_end" ? ne() : m === "operator" ? K() : m === "word" ? Y() : m === "reference" ? se() : m === "markup" ? ke() : m.indexOf("liquid") > -1 ? G() : m === "generic" ? (T(_, 35) && _ !== "return" && w !== "operator" && _ !== "public" && _ !== "private" && _ !== "static" && _ !== "final" && _ !== "implements" && _ !== "class" && _ !== "void" && (l[t - 1] = -20), i(e.token[t + 1], 40) || e.token[t + 1] === "x(" ? l.push(-20) : l.push(-10)) : l.push(-10), m !== "comment" && (w = m, _ = p), B.length > 0 && T(e.token[t], 41) && (e.types[t] === "comment" && B[B.length - 1] > -1 ? B[B.length - 1] = s.wrap + 1 : l[t] > -1 || i(e.token[t], 96) && e.token[t].indexOf(z) > 0 ? B[B.length - 1] = -1 : B[B.length - 1] > -1 && (B[B.length - 1] = B[B.length - 1] + e.token[t].length, l[t] === -10 && (B[B.length - 1] = B[B.length - 1] + 1)))) : Ce(), t = t + 1;
    while (t < o);
    return l;
  })();
  return (() => {
    let t = [], h = s.indentChar.repeat(s.indentSize), V = s.preserveLine + 1, le = [
      "x;",
      "x}",
      "x{",
      "x(",
      "x)"
    ], m = r.start, p = s.indentLevel;
    function w(I) {
      let d = (() => m === o - 1 ? 1 : e.lines[m + 1] - 1 > V ? V : e.lines[m + 1] > 1 ? e.lines[m + 1] - 1 : 1)();
      return r.crlf.repeat(d) + h.repeat(I);
    }
    if (n.vertical === !0) {
      let I = function(d) {
        let l = 0, g = 0, M = d - 1, L = 0, N = 0, S = e.begin[m], j = [];
        do {
          if ((e.begin[M] === S || i(e.token[M], 93) || i(e.token[M], 41)) && (i(e.token[M + 1], 61) || i(e.token[M + 1], 59) && e.stack[M] === "object")) {
            L = M, g = 0;
            do {
              if (e.begin[L] === S) {
                if (i(e.token[L], 58) || i(e.token[L], 59) || e.token[L] === "x;" || k[L] > -1 && e.types[L] !== "comment") {
                  i(e.token[L + 1], 46) && (g = g + s.indentSize * s.indentChar.length);
                  break;
                }
              } else if (k[L] > -1)
                break;
              e.types[L] !== "comment" && (k[L - 1] === -10 && (g = g + 1), g = e.token[L].length + g), L = L - 1;
            } while (L > S);
            if (N = L, i(e.token[N], 44) && i(e.token[M + 1], 61))
              do {
                if (e.types[N] === "end" && (N = e.begin[N]), e.begin[N] === S) {
                  if (i(e.token[N], 59) || e.token[N] === "x;")
                    break;
                  if (e.token[N] === "var" || e.token[N] === "const" || e.token[N] === "let") {
                    g = g + s.indentSize * s.indentChar.length;
                    break;
                  }
                }
                N = N - 1;
              } while (N > S);
            g > l && (l = g), j.push([M, g]), M = L;
          } else
            e.types[M] === "end" && (M = e.begin[M]);
          M = M - 1;
        } while (M > S);
        if (M = j.length, M > 0)
          do
            if (M = M - 1, L = j[M][1], L < l)
              do
                e.token[j[M][0]] = e.token[j[M][0]] + ee, L = L + 1;
              while (L < l);
          while (M > 0);
      };
      m = o;
      do
        m = m - 1, e.lexer[m] === "script" && i(e.token[m], 125) && T(e.token[m - 1], 123) && k[e.begin[m]] > 0 ? I(m) : m = e.begin[m];
      while (m > 0);
    }
    m = r.start;
    do {
      if (e.lexer[m] === C) {
        if (e.types[m] === "comment" && n.commentIndent === !0 && ft.test(e.token[m])) {
          let I = e.begin[m] > -1 ? i(e.token[m][2], 42) ? oi(k[m], h) + s.indentChar : oi(k[m], h) : s.indentChar, d = e.token[m].split(z), l = 1;
          do
            d[l] = I + d[l].trimStart(), l = l + 1;
          while (l < d.length);
          e.token.splice(m, 1, d.join(z));
        }
        le.indexOf(e.token[m]) < 0 && (T(e.token[m], 59) || n.noSemicolon === !1 ? t.push(e.token[m]) : k[m] < 0 && e.types[m + 1] !== "comment" && t.push(";")), m < o - 1 && e.lexer[m + 1] !== C && e.begin[m] === e.begin[m + 1] && e.types[m + 1].indexOf("end") < 0 && T(e.token[m], 44) ? t.push(ee) : k[m] > -1 ? ((k[m] > -1 && i(e.token[m], 123) || k[m] > -1 && i(e.token[m + 1], 125)) && e.lines[m] < 3 && n.braceNewline === !0 && e.lines[m + 1] < 3 && t.push(w(0)), r.mode === 2 ? r.ender !== m && t.push(w(k[m])) : m !== o - 1 && t.push(w(k[m])), p = k[m]) : k[m] === -10 && (t.push(ee), e.lexer[m + 1] !== C && (p = p + 1));
      } else if (a[m] === m)
        t.push(e.token[m]);
      else {
        r.ender = a[m], r.start = m;
        let I = r.external(p);
        t.push(I), m = r.iterator, k[m] === -10 ? t.push(ee) : k[m] > -1 && t.push(w(k[m]));
      }
      m = m + 1;
    } while (m < o);
    return r.iterator = o - 1, t.join(c);
  })();
}

// src/format/style.ts
function cn() {
  let e = [], { data: s, rules: n, crlf: u } = r, A = Fe(null), a = r.ender > 0 ? r.ender + 1 : s.token.length, C = n.preserveLine + 1, o = n.indentChar.repeat(n.indentSize), k = n.indentLevel, f = r.start, t = [c, c];
  function h(le, m) {
    return s.types[le] === m;
  }
  function V(le) {
    let m = [], p = (() => f === a - 1 ? 1 : s.lines[f + 1] - 1 > C ? C : s.lines[f + 1] > 1 ? s.lines[f + 1] - 1 : 1)(), w = 0;
    le < 0 && (le = 0);
    do
      m.push(u), w = w + 1;
    while (w < p);
    if (le > 0) {
      w = 0;
      do
        m.push(o), w = w + 1;
      while (w < le);
    }
    e.push(m.join(c));
  }
  do {
    switch ((h(f + 1, "end") || h(f + 1, "liquid_end") || h(f + 1, "liquid_else")) && k > 0 && (k = k - 1), h(f, "liquid") ? (h(f - 1, "separator") && V(k), e.push(s.token[f]), h(f + 1, "separator") === !1 && T(s.token[f + 1], 59) && we.css.units.has(s.token[f + 1]) === !1 && (h(f + 1, "start") ? e.push(ee) : h(f + 1, "colon") === !1 && V(k))) : h(f - 1, "selector") && h(f, "liquid") && h(f + 1, "selector") ? (e.push(s.token[f]), Qe(s.token[f - 1], 45) && (i(s.token[f + 1], 46) || i(s.token[f + 1], 35) || i(s.token[f + 1], 38)) && e.push(ee)) : h(f, "liquid_else") ? (e.push(s.token[f]), h(f + 1, "property") && (k = k + 1), s.lines[f + 1] === 1 ? e.push(ee) : s.lines[f + 1] > 1 && V(k)) : h(f, "liquid_start") ? (e.push(s.token[f]), s.lines[f + 1] === 1 ? e.push(ee) : (s.lines[f + 1] > 1 || (h(f + 1, "liquid") || h(f + 1, "selector")) && h(f + 2, "start")) && (k = k + 1, V(k))) : h(f, "liquid_end") ? (e.push(s.token[f]), h(f + 1, "start") ? e.push(ee) : s.lines[f + 1] !== 0 && V(k)) : h(f, "start") ? (e.push(s.token[f]), (h(f + 1, "property") || h(f + 1, "selector") || h(f + 1, "comment") || h(f + 1, "liquid") || h(f + 1, "liquid_start")) && (k = k + 1), h(f + 1, "end") === !1 && V(k)) : i(s.token[f], 59) ? (e.push(s.token[f]), h(f + 1, "property") && ((h(f - 2, "liquid") || h(f - 2, "liquid_end")) && h(f - 1, "value") || h(f - 1, "liquid_end")) && (k = k + 1, k > A.property && (k = A.property)), V(k)) : h(f, "end") || h(f, "comment") ? (e.push(s.token[f]), h(f + 1, "value") ? s.lines[f + 1] === 1 ? e.push(ee) : s.lines[f + 1] > 1 && V(k) : h(f - 1, "liquid_end") && h(f, "separator") && h(f + 1, "property") ? (k = k + 1, V(k)) : h(f + 1, "separator") === !1 ? h(f + 1, "comment") === !1 || h(f + 1, "comment") && s.lines[f + 1] > 1 ? V(k) : e.push(ee) : h(f, "comment") && h(f + 1, "comment") === !1 && s.lines[f] > 1 && V(k)) : i(s.token[f], 58) ? (e.push(s.token[f]), h(f + 1, "selector") === !1 && T(s.token[f + 1], 44) && e.push(ee)) : h(f, "selector") || h(f, "at_rule") ? (n.style.classPadding === !0 && h(f - 1, "end") && s.lines[f] < 3 && V(k), s.token[f].indexOf("and(") > 0 ? (s.token[f] = s.token[f].replace(/and\(/, "and ("), e.push(s.token[f])) : s.token[f].indexOf("when(") > 0 ? (t = s.token[f].split("when("), e.push(t[0].replace(/\s+$/, c)), V(k + 1), e.push(`when (${t[1]}`)) : e.push(s.token[f]), h(f + 1, "start") ? (e.push(ee), h(f, "at_rule") && h(f + 2, "colon") && (k = k + 1)) : s.types[f + 1].indexOf("liquid") > -1 && s.lines[f + 1] === 0 && (e.push(s.token[f + 1]), f = f + 1, h(f + 1, "start") && e.push(ee), h(f + 1, "selector") && i(s.token[f + 1], 46) && e.push(ee))) : i(s.token[f], 44) ? (h(f + 1, "value") && V(k), e.push(s.token[f]), h(f + 1, "selector") || h(f + 1, "property") ? V(k) : e.push(ee), h(f - 1, "selector") && h(f + 1, "liquid_end") && V(k)) : s.stack[f] === "map" && i(s.token[f + 1], 41) && f - s.begin[f] > 5 ? (e.push(s.token[f]), V(k)) : s.token[f] === "x;" ? V(k) : (h(f, "variable") || h(f, "function")) && n.style.classPadding === !0 && h(f - 1, "end") && s.lines[f] < 3 ? (e.push(u), e.push(s.token[f])) : T(s.token[f], 59) && (e.push(s.token[f]), (h(f + 1, "liquid_end") || h(f + 1, "liquid_else")) && (s.lines[f + 1] === 1 ? e.push(ee) : s.lines[f + 1] > 1 && V(k))), s.types[f + 1]) {
      case "property":
        A.property = k;
        break;
      case "end":
        A.property = k - 1;
        break;
      case "selector":
        s.types[f] === "selector" && (A.property = k);
        break;
    }
    f = f + 1;
  } while (f < a);
  return r.iterator = a - 1, (e[0] === r.crlf || i(e[0], 32)) && (e[0] = c), r.mode === 2 ? e.join(c).trimEnd() : n.endNewline === !0 ? e.join(c).replace(/\s*$/, r.crlf) : e.join(c).trimEnd();
}

// src/format/index.ts
function wi(e) {
  if (e === 1)
    return un();
  if (e === 3)
    return cn();
  if (e === 2)
    return fn();
}

// src/rules/presets/default.ts
var Ge = {
  crlf: !1,
  correct: !1,
  preset: "default",
  language: "auto",
  endNewline: !1,
  indentChar: " ",
  indentLevel: 0,
  indentSize: 2,
  preserveLine: 2,
  wrap: 0,
  wrapFraction: 0,
  liquid: {
    commentNewline: !1,
    commentIndent: !0,
    delimiterTrims: "preserve",
    delimiterPlacement: "preserve",
    forceFilter: 0,
    forceArgument: 0,
    ignoreTagList: [],
    indentAttribute: !1,
    lineBreakSeparator: "before",
    normalizeSpacing: !0,
    paddedTagList: [],
    preserveComment: !1,
    dedentTagList: [],
    quoteConvert: "none"
  },
  markup: {
    attributeCasing: "preserve",
    attributeSort: !1,
    commentDelimiters: "preserve",
    commentNewline: !1,
    commentIndent: !0,
    delimiterTerminus: "inline",
    forceAttribute: 3,
    forceAttributeValue: !0,
    forceIndent: !1,
    ignoreCSS: !1,
    ignoreJS: !0,
    ignoreJSON: !1,
    lineBreakValue: "preserve",
    preserveComment: !1,
    preserveText: !1,
    preserveAttribute: !1,
    selfCloseSpace: !0,
    selfCloseSVG: !0,
    stripAttributeLines: !1,
    quoteConvert: "none"
  },
  json: {
    arrayFormat: "default",
    braceAllman: !1,
    bracePadding: !1,
    objectIndent: "default",
    objectSort: !1,
    braceStyle: "none",
    caseSpace: !1,
    commentIndent: !1,
    commentNewline: !1,
    correct: !1,
    elseNewline: !1,
    functionNameSpace: !1,
    functionSpace: !1,
    methodChain: 4,
    neverFlatten: !1,
    noCaseIndent: !1,
    preserveComment: !1,
    styleGuide: "none",
    ternaryLine: !1,
    variableList: "none",
    quoteConvert: "double",
    endComma: "never",
    noSemicolon: !0,
    vertical: !1
  },
  style: {
    commentIndent: !1,
    commentNewline: !1,
    atRuleSpace: !0,
    classPadding: !1,
    noLeadZero: !1,
    preserveComment: !1,
    sortSelectors: !1,
    sortProperties: !1,
    quoteConvert: "none"
  },
  script: {
    arrayFormat: "default",
    braceNewline: !1,
    bracePadding: !1,
    braceStyle: "none",
    braceAllman: !1,
    caseSpace: !1,
    commentIndent: !1,
    commentNewline: !1,
    elseNewline: !1,
    endComma: "never",
    functionNameSpace: !1,
    functionSpace: !1,
    inlineReturn: !0,
    methodChain: 4,
    neverFlatten: !1,
    noCaseIndent: !1,
    noSemicolon: !1,
    objectSort: !1,
    objectIndent: "default",
    preserveComment: !1,
    quoteConvert: "none",
    styleGuide: "none",
    ternaryLine: !1,
    variableList: "none",
    vertical: !1
  }
};

// src/parse/parser.ts
var Si = class extends Array {
  get entry() {
    return this[this.length - 1];
  }
  get token() {
    return this[this.length - 1][0];
  }
  get index() {
    return this[this.length - 1][1];
  }
  update(s, n) {
    let u = this.length - 1;
    return u > 0 ? (n === void 0 ? typeof s == "string" ? this[u][0] = s : this[u][1] = s : (this[u][0] = s, this[u][1] = n), this[u]) : (this.push([s, n]), this[u + 1]);
  }
  pop() {
    let s = this.length - 1, n = this[s];
    return s > 0 && this.splice(s, 1), n;
  }
}, it = class it {
  constructor() {
    /**
     * Hooks
     *
     * Event Listeners which will trigger during traversal and the
     * formatting cycle. This is a future feature to allow consumers
     * to augment and adjust tokens.
     */
    this.hooks = { parse: null, format: null };
    /**
     * Hard coded line numbers
     */
    this.numbers = [];
    /**
     * Reference to a starting index within the data structure. This is
     * used for external regions, but can also provide incremental support.
     */
    this.start = 0;
    /**
     * Reference to a ender index within the data structure. This is
     * used for external regions, but can also provide incremental support.
     */
    this.ender = 0;
    /**
     * A reference to `a` which holds index reference. This is not always identical
     * to the current index when lexing, instead it acts as a universal store
     * when specific position reference indexes need to be referred.
     */
    this.iterator = 0;
    /**
     * Reference of attributes of newline values with containing Liquid block tokens.
     * It maintains a store which is generated in the markup lexer and used within
     * the beautification cycle
     */
    this.attributes = /* @__PURE__ */ new Map();
    /**
     * External language regions, typically embedded tokens which use a different
     * lexer. This map maintains stores during the lexing process for switching.
     */
    this.regions = /* @__PURE__ */ new Map();
    /**
     * Holds a store reference to markup start/end pairs. This is used for potential
     * parse errors and keeps track of paired sequences for syntactic reporting.
     */
    this.pairs = Fe(null);
    /**
     * Parse Error reference. Defaults to `null` and will be assigned an object reference exception
     */
    this.error = null;
    /**
     * Hardcoded string reference to CRLF rule
     */
    this.crlf = z;
    /**
     * Stores the declared variable names for the script lexer. This must be stored outside
     * the script lexer since some languages recursive use of the script lexer
     */
    this.references = [[]];
    /**
     * Stores the final index location of the data arrays
     */
    this.count = -1;
    /**
     * The current line column character starting from left side of the
     * beginning of a newline. For example
     *
     * ```
     *
     * 1 | xxx
     * 2 | hello world
     *               ^   // Column 11
     *
     * ```
     *
     * In the example above, the column reference equals `[11]` and points
     * to the letter `d` in cases where we need this context, it exists
     * at this point.
     */
    this.lineColumn = 0;
    /**
     * The current line number. Line numbers start at index `1` instead of `0`,
     * which is something to keep in mind if referencing. This is used in errors
     * and counts the number of lines as we have spanned during traversal. For example:
     *
     * ```
     *
     * 1 | hello  // Line 1
     * 2 | world  // Line 2
     *
     *
     * ```
     */
    this.lineNumber = 1;
    /**
     * The current line depth. This keep a reference to the indentation
     * depth currently traversed and used to capture the left most indent level.
     *
     * ```
     *
     * 1 | <div>        // 2
     * 2 | <ul>         // 4
     * 3 | <li>         // 6
     * 4 | {{ HERE }}   // 8
     * 5 | </li>        // 6
     * 6 | </ul>        // 4
     * 7 | </div>       // 2
     *
     * ```
     *
     * In the example above, it is assumed that `indentChar` is set to a value
     * of `2` (default). For every `start` token, the depth increases.
     */
    this.lineDepth = 2;
    /**
     * The record `lines` value count before the next token, for example:
     *
     * ```
     *
     * 1 | foo  // line offset is: 0
     * 2 | bar  // line offset is: 2
     * 3
     * 4 | baz  // line offset is: 3
     * 5
     * 6
     * 7 | qux  // line offset is: 4
     * 8 | xxx  // line offset is: 2
     *
     *
     * ```
     *
     * Where `foo` is `0` as it exists on line `1` but `bar` is `2` because
     * it counts line `1` as a single line and given it exists on line `2`
     * another line offset increment is applies. The word `baz` is similar to
     * `bar` but has a count of `3` given a newline exists above it and this
     * pattern follows as we progress to `qux` which has 2 newlines, equating
     * to a value line offset of `4` whereas `xxx` only has `2` so on and so forth.
     */
    this.lineOffset = 0;
    /**
     * The character index of the last known newline, for example:
     *
     * ```
     *
     * 1 | abcdefgh
     * 2 | ijklmnop
     *     ^
     *
     * ```
     *
     * Where character `i` is index `[8]` and index `[8]` is the
     * beginning of line `2`.
     *
     */
    this.lineIndex = 0;
    /**
     * The formatting and parse rules
     */
    this.rules = Ge;
    /**
     * The parse table data structure
     */
    this.data = {
      begin: [],
      ender: [],
      lexer: [],
      lines: [],
      stack: [],
      token: [],
      types: []
    };
  }
  /**
   * The document source `input` reference
   */
  get source() {
    return this.mode === 2 ? it.region : Re.env === "node" && Buffer.isBuffer(it.input) ? it.input.toString() : it.input;
  }
  /**
   * Set the source `input` reference
   */
  set source(s) {
    it.input = Re.env !== "node" || Buffer.isBuffer(s) ? s : Buffer.from(s);
  }
  get current() {
    return {
      begin: this.data.begin[this.count],
      ender: this.data.ender[this.count],
      lexer: this.data.lexer[this.count],
      lines: this.data.lines[this.count],
      stack: this.data.stack[this.count],
      token: this.data.token[this.count],
      types: this.data.types[this.count]
    };
  }
  /**
   * Reset
   *
   * Resets the current stores for clean parse structures
   */
  reset() {
    this.error = null, this.count = -1, this.start = 0, this.ender = 0, this.lineColumn = 0, this.lineNumber = 1, this.lineDepth = 2, this.lineIndex = 0, this.lineOffset = 0, this.numbers = [], this.data.begin = [], this.data.ender = [], this.data.lexer = [], this.data.lines = [], this.data.stack = [], this.data.token = [], this.data.types = [], this.references = [[]], this.stack = new Si(["global", -1]), this.mode = 1, this.pairs = Fe(null), this.attributes.size > 0 && this.attributes.clear(), this.regions.size > 0 && this.regions.clear();
  }
  /**
   * Get Record
   *
   * Returns a record at the give index
   */
  get(s) {
    return {
      begin: this.data.begin[s],
      ender: this.data.ender[s],
      lexer: this.data.lexer[s],
      lines: this.data.lines[s],
      stack: this.data.stack[s],
      token: this.data.token[s],
      types: this.data.types[s]
    };
  }
  /**
   * Document Parse
   *
   * Executes a full parse - top to bottom.
   */
  document(s, n = 3) {
    return ei.test(this.source) ? this.source : (this.reset(), yi(s), n === 1 ? this.data : (this.mode = 3, wi(s)));
  }
  /**
   * Switch
   *
   * Used to switch between lexers and formatters when
   * dealing with embedded regions.
   */
  external(s, n) {
    if (this.mode === 1) {
      this.mode = 2;
      let u = St(s);
      it.region = n, this.language = s, this.lexer = Ie(this.language), this.regions.set(this.count + 1, { lexer: u, id: this.language }), yi(u), this.mode = 1, this.lexer = Ie(this.rules.language), this.language = this.rules.language;
    } else {
      if (this.regions.size === 0)
        return this.source;
      let { id: u, lexer: A } = this.regions.get(this.start);
      this.mode = 2, this.language = u, this.rules.indentLevel = s;
      let a = wi(A);
      return this.mode = 3, this.rules.indentLevel = 0, this.language = this.rules.language, this.lexer = Ie(this.language), a;
    }
  }
  /**
   * Push Final
   *
   * The final conclusion for the data strucuture uniform.
   */
  final(s) {
    let n = this.count, u = s.begin[n];
    if (!(s.lexer[n] === "style" && (this.rules.style.sortProperties || this.rules.style.sortSelectors) || s.lexer[n] === "script" && (this.rules.script.objectSort || this.rules.json.objectSort))) {
      do
        s.begin[n] === u || s.begin[s.begin[n]] === u && s.types[n].indexOf("attribute") > -1 && s.types[n].indexOf("attribute_end") < 0 ? s.ender[n] = this.count : n = s.begin[n], n = n - 1;
      while (n > u);
      n > -1 && (s.ender[n] = this.count);
    }
  }
  /**
   * Syntactical Tracking
   *
   * This is a store The `parse.data.begin` index. This will typically
   * reference the `parse.count` value, incremented by `1`
   */
  syntactic(s, n) {
    if (s.types === "liquid_start" || s.types === "start")
      this.pairs[this.count] = {
        index: this.count,
        line: this.lineNumber,
        token: s.token,
        skip: !1,
        type: s.types === "start" ? 2 : 3,
        stack: n
      };
    else if (this.stack.index in this.pairs && (s.types === "end" || s.types === "liquid_end")) {
      let u = this.pairs[this.stack.index];
      u.skip && delete this.pairs[this.stack.index], u.type === 3 ? s.token.indexOf(`end${u.stack}`) > -1 ? delete this.pairs[this.stack.index] : s.stack === "liquid" && (s.token === "%}" || s.token === "-%}") ? delete this.pairs[this.stack.index] : jt(114, u) : u.type === 2 && (`</${u.stack}>` === s.token ? delete this.pairs[this.stack.index] : jt(105, u));
    }
  }
  /**
   * Replace Record
   *
   * Replaces a single record at the provided index. If no index is
   * passed it will use the last known record reference.
   */
  replace(s, n = this.count) {
    for (let u in s)
      this.data[u][n] = s[u];
  }
  /**
   * Push Structure
   *
   * An extension of `Array.prototype.push` to work across the parse table data structure
   */
  push(s, n, u = c) {
    if (s.begin.push(n.begin), s.ender.push(n.ender), s.lexer.push(n.lexer), s.stack.push(n.stack), s.token.push(n.token), s.types.push(n.types), s.lines.push(n.lines), this.numbers.push(this.lineNumber), s === this.data) {
      if (this.count = this.count + 1, n.lexer !== "style" && u.replace(/[{}<>%]/g, c) === c && (u = n.types === "else" ? "else" : Ue(n.token)), n.lexer === "markup" && n.stack !== "liquid" && this.syntactic(n, u), this.lineOffset = 0, n.types === "start" || n.types.indexOf("_start") > 0)
        this.stack.push([u, this.count]), this.lineDepth = this.lineDepth + this.rules.indentSize;
      else if (n.types === "end" || n.types.indexOf("_end") > 0) {
        let A = 0, a = this.stack.length;
        a > 2 && (s.types[this.stack[a - 1][1]] === "else" || s.types[this.stack[a - 1][1]].indexOf("_else") > 0) && (s.types[this.stack[a - 2][1]] === "start" || s.types[this.stack[a - 2][1]].indexOf("_start") > 0) && (s.types[this.stack[a - 2][1] + 1] === "else" || s.types[this.stack[a - 2][1] + 1].indexOf("_else") > 0) && (this.stack.pop(), s.begin[this.count] = this.stack.index, s.stack[this.count] = this.stack.token, s.ender[this.count - 1] = this.count, A = s.ender[s.begin[this.count] + 1]), this.final(s), A > 0 && (s.ender[s.begin[this.count] + 1] = A), this.stack.pop(), this.lineDepth = this.lineDepth - this.rules.indentSize;
      } else
        (n.types === "else" || n.types.indexOf("_else") > 0) && (u === c && (u = "else"), this.count > 0 && (s.types[this.count - 1] === "start" || s.types[this.count - 1].indexOf("_start") > 0) ? this.stack.push([u, this.count]) : (this.final(s), this.stack.update(u === c ? "else" : u, this.count)));
      this.hooks.parse !== null && this.hooks.parse[0].call({
        line: this.lineNumber,
        stack: this.stack.entry,
        language: this.language
      }, n, this.count);
    }
  }
  /**
   * Pop Structure
   *
   * An extension of `Array.prototype.pop` to work across the data
   * structure
   */
  pop(s) {
    return s === this.data && (this.count = this.count - 1), this.numbers.pop(), {
      begin: s.begin.pop(),
      ender: s.ender.pop(),
      lexer: s.lexer.pop(),
      lines: s.lines.pop(),
      stack: s.stack.pop(),
      token: s.token.pop(),
      types: s.types.pop()
    };
  }
  /**
   * Concat Structure
   *
   * An extension of `Array.prototype.concat` to work across
   * the data structure. This is an expensive operation.
   */
  concat(s, n) {
    s.begin = s.begin.concat(n.begin), s.ender = s.ender.concat(n.ender), s.lexer = s.lexer.concat(n.lexer), s.stack = s.stack.concat(n.stack), s.token = s.token.concat(n.token), s.types = s.types.concat(n.types), s.lines = s.lines.concat(n.lines), s === this.data && (this.count = s.token.length - 1);
  }
  /**
   * Splice Structure
   *
   * An extension of `Array.prototype.splice` to work across the data structure
   */
  splice(s) {
    let n = this.data.begin[this.count], u = this.data.token[this.count];
    s.record !== void 0 && s.record.token !== c ? (s.data.begin.splice(s.index, s.howmany, s.record.begin), s.data.ender.splice(s.index, s.howmany, s.record.ender), s.data.token.splice(s.index, s.howmany, s.record.token), s.data.lexer.splice(s.index, s.howmany, s.record.lexer), s.data.stack.splice(s.index, s.howmany, s.record.stack), s.data.types.splice(s.index, s.howmany, s.record.types), s.data.lines.splice(s.index, s.howmany, s.record.lines), s.data === this.data && (this.count = this.count - s.howmany + 1, (n !== this.data.begin[this.count] || u !== this.data.token[this.count]) && (this.lineOffset = 0))) : (s.data.begin.splice(s.index, s.howmany), s.data.ender.splice(s.index, s.howmany), s.data.token.splice(s.index, s.howmany), s.data.lexer.splice(s.index, s.howmany), s.data.stack.splice(s.index, s.howmany), s.data.types.splice(s.index, s.howmany), s.data.lines.splice(s.index, s.howmany), s.data === this.data && (this.count = this.count - s.howmany, this.lineOffset = 0));
  }
  /**
   * Is Checksum
   *
   * Checks a record value on the last know entry in the
   * parse table data strcuture
   */
  is(s, n) {
    return this.count > 0 ? this.data[s][this.count] === n : !1;
  }
  /**
   * Line Increment
   *
   * A small helper for incrementing newlines. Expects an `index` which
   * matches the current iteration point and an optional `lines` parameter
   * which will be incremented by `1` and the returning value.
   */
  lines(s, n) {
    return this.lineNumber = this.lineNumber + 1, this.lineIndex = s, n + 1;
  }
  spacer(s) {
    this.lineOffset = 1;
    do {
      if (i(s.array[s.index], 10) && (this.lineIndex = s.index, this.lineOffset = this.lineOffset + 1, this.lineNumber = this.lineNumber + 1), lt(s.array[s.index + 1]))
        break;
      s.index = s.index + 1;
    } while (s.index < s.end);
    return s.index;
  }
};
/**
 * Static reference of the provided input
 */
it.input = c, /**
 * Static reference to the current external region input
 */
it.region = c;
var Li = it, r = new Li();

// src/parse/detection.ts
function pn(e) {
  let s = [], n = 0, u = /(((var)|(let)|(const)|(function)|(import))\s+(\w|\$)+[a-zA-Z0-9]*)/.test(e) && /@import/.test(e) === !1, A = /((((final)|(public)|(private))\s+static)|(static\s+void))/.test(e);
  function a() {
    return /\n\s*#+\s+/.test(e) || /^#+\s+/.test(e) ? {
      language: "markdown",
      lexer: "markup"
    } : /\$[a-zA-Z]/.test(e) || /\{\s*(\w|\.|\$|#)+\s*\{/.test(e) || /^[.#]?[\w][\w-]+\s+\{(?:\s+[a-z][a-z-]+:\s*\S+;)+\s+[&>+]?\s+[.#:]?[\w][\w-]\s+\{/.test(e) && /:\s*@[a-zA-Z];/.test(e) === !1 ? {
      language: "scss",
      lexer: "style"
    } : /@[a-zA-Z]:/.test(e) || /\.[a-zA-Z]\(\);/.test(e) ? {
      language: "less",
      lexer: "style"
    } : {
      language: "css",
      lexer: "style"
    };
  }
  function C() {
    let k = 1, f = c, t = !1, h = !1, V = /((public)|(private))\s+(static\s+)?(((v|V)oid)|(class)|(final))/.test(e);
    function le() {
      return e.indexOf("(") > -1 || e.indexOf("=") > -1 || e.indexOf(";") > -1 && e.indexOf("{") > -1 ? A === !0 || /\w<\w+(,\s+\w+)*>/.test(e) || /(?:var|let|const)\s+\w+\s*:/.test(e) || /=\s*<\w+/.test(e) ? {
        language: "typescript",
        lexer: "script"
      } : {
        language: "javascript",
        lexer: "script"
      } : {
        language: "unknown",
        lexer: "text"
      };
    }
    function m() {
      return /:\s*(?:number|string|boolean|any|unknown)(?:\[\])?/.test(e) || /(?:public|private)\s+/.test(e) || /(?:export|declare)\s+type\s+\w+\s*=/.test(e) || /(?:namespace|interface|enum|implements|declare)\s+\w+/.test(e) || /(?:typeof|keyof|as)\s+\w+/.test(e) || /\w+\s+as\s+\w+/.test(e) || /\[\w+(?:(?::\s*\w+)|(?:\s+in\s+\w+))\]:/.test(e) || /\):\s*\w+(?:\[\])?\s*(?:=>|\{)\s+/.test(e) || /(var|const|let)\s+\w+:\s*(string|number|boolean|string|any)(\[\])?/.test(e) ? {
        language: "typescript",
        lexer: "script"
      } : /\s(class|var|const|let)\s+\w/.test(e) === !1 && /<[a-zA-Z](?:-[a-zA-Z])?/.test(e) && /<\/[a-zA-Z-](?:-[a-zA-Z])?/.test(e) && (/\s?\{%/.test(e) || /{{/.test(e)) ? {
        language: "liquid",
        lexer: "markup"
      } : /^(\s*[$@])/.test(e) === !1 && /([}\]];?\s*)$/.test(e) && (/^\s*import\s+\*\s+as\s+\w+\s+from\s+['"]/.test(e) || /module\.export\s+=\s+/.test(e) || /export\s+default\s+\{/.test(e) || /[?:]\s*[{[]/.test(e) || /^(?:\s*return;?(?:\s+[{[])?)/.test(e)) ? {
        language: "javascript",
        lexer: "script"
      } : /{%/.test(e) && /{{/.test(e) && /<\w/.test(e) ? {
        language: "liquid",
        lexer: "markup"
      } : /{\s*(?:\w|\.|@|#)+\s*\{/.test(e) ? {
        language: "less",
        lexer: "style"
      } : /\$(\w|-)/.test(e) ? {
        language: "scss",
        lexer: "style"
      } : /[;{:]\s*@\w/.test(e) === !0 ? {
        language: "less",
        lexer: "style"
      } : {
        language: "css",
        lexer: "style"
      };
    }
    if (k < n)
      do
        t === !1 ? i(s[k], 42) && i(s[k - 1], 47) ? (s[k - 1] = c, t = !0) : h === !1 && k < n - 6 && s[k].charCodeAt(0) === 102 && //     f
        s[k + 1].charCodeAt(0) === 105 && // i
        s[k + 2].charCodeAt(0) === 108 && // l
        s[k + 3].charCodeAt(0) === 116 && // t
        s[k + 4].charCodeAt(0) === 101 && // e
        s[k + 5].charCodeAt(0) === 114 && // r
        i(s[k + 6], 58) && (h = !0) : t === !0 && i(s[k], 42) && k !== n - 1 && i(s[k + 1], 47) ? (t = !1, s[k] = c, s[k + 1] = c) : h === !0 && i(s[k], 59) && (h = !1, s[k] = c), (t === !0 || h === !0) && (s[k] = c), k = k + 1;
      while (k < n);
    return f = s.join(c), /\s\/\//.test(e) === !1 && /\/\/\s/.test(e) === !1 && /^(\s*(\{|\[)(?!%))/.test(e) === !0 && /((\]|\})\s*)$/.test(e) && e.indexOf(",") !== -1 ? {
      language: "json",
      lexer: "script"
    } : /((\}?(\(\))?\)*;?\s*)|([a-z0-9]("|')?\)*);?(\s*\})*)$/i.test(e) === !0 && (u === !0 || V === !0 || /console\.log\(/.test(e) === !0 || /export\s+default\s+class\s+/.test(e) === !0 || /export\s+(const|var|let|class)s+/.test(e) === !0 || /document\.get/.test(e) === !0 || /((=|(\$\())\s*function)|(\s*function\s+(\w*\s+)?\()/.test(e) === !0 || e.indexOf("{") === -1 || /^(\s*if\s+\()/.test(e) === !0) ? le() : e.indexOf("{") > -1 && (/^(\s*[\u007b\u0024\u002e#@a-z0-9])/i.test(e) || /^(\s*\/(\*|\/))/.test(e) || /^(\s*\*\s*\{)/.test(e)) && /^(\s*if\s*\()/.test(e) === !1 && /=\s*(\{|\[|\()/.test(f) === !1 && (/(\+|-|=|\?)=/.test(f) === !1 || /\/\/\s*=+/.test(f) || /=+('|")?\)/.test(e) && /;\s*base64/.test(e)) && /function(\s+\w+)*\s*\(/.test(f) === !1 ? m() : e.indexOf("{%") > -1 ? {
      language: "liquid",
      lexer: "markup"
    } : {
      language: "unknown",
      lexer: "text"
    };
  }
  function o() {
    function k() {
      return /{%-?\s*(schema|for|if|unless|render|include)/.test(e) || /{%-?\s*end\w+/.test(e) || /{{-?\s*content_for/.test(e) || /{{-?\s*[a-zA-Z0-9_'".[\]]+\s*-?}}/.test(e) || /{%/.test(e) && /%}/.test(e) && /{{/.test(e) && /}}/.test(e) ? {
        language: "liquid",
        lexer: "markup"
      } : {
        language: "html",
        lexer: "markup"
      };
    }
    return /^(\s*<!doctype\s+html>)/i.test(e) || /^(\s*<html)/i.test(e) || /<form\s/i.test(e) && /<label\s/i.test(e) && /<input\s/i.test(e) || /<img(\s+\w+=['"]?\S+['"]?)*\s+src\s*=/.test(e) || /<a(\s+\w+=['"]?\S+['"]?)*\s+href\s*=/.test(e) || /<ul\s/i.test(e) && /<li\s/i.test(e) && /<\/li>/i.test(e) && /<\/ul>/i.test(e) || /<head\s*>/.test(e) && /<\/head>/.test(e) || /^(\s*<!DOCTYPE\s+((html)|(HTML))\s+PUBLIC\s+)/.test(e) && /XHTML\s+1\.1/.test(e) === !1 && /XHTML\s+1\.0\s+(S|s)((trict)|(TRICT))/.test(e) === !1 ? k() : /\s?{[{%]-?/.test(e) ? {
      language: "liquid",
      lexer: "markup"
    } : {
      language: "xml",
      lexer: "markup"
    };
  }
  return e === null || e.replace(/\s+/g, c) === c ? {
    language: "unknown",
    lexer: "text"
  } : (/\n\s*#{1,6}\s+/.test(e) || /\n\s*(?:\*|-|(?:\d+\.))\s/.test(e)) && (/\[( |x|X)\]/.test(e) || /\s[*_~]{1,2}\w+[*_~]{1,2}/.test(e) || /\n\s*```[a-zA-Z]*?\s+/.test(e) || /-+\|(-+\|)+/.test(e)) ? {
    language: "markdown",
    lexer: "text"
  } : /^(\s*<!DOCTYPE\s+html>)/i.test(e) ? o() : /^\s*@(?:charset|import|include|keyframes|media|namespace|page)\b/.test(e) || /**
   * Final Statics Test
   */
  A === !1 && /=(>|=|-|\+|\*)/.test(e) === !1 && /^(?:\s*((if)|(for)|(function))\s*\()/.test(e) === !1 && /(?:\s|;|\})((if)|(for)|(function\s*\w*))\s*\(/.test(e) === !1 && u === !1 && /return\s*\w*\s*(;|\})/.test(e) === !1 && (e === void 0 || /^(?:\s*#(?!(!\/)))/.test(e) || /\n\s*(\.|@)\w+(\(|(\s*:))/.test(e) && />\s*<\w/.test(e) === !1 || /^\s*:root\s*\{/.test(e) || /-{2}\w+\s*\{/.test(e) || /^\s*(?:body|button|hr|section|h[1-6]|p|strong|\*)\s+\{\s+/.test(e)) ? a() : (s = e.replace(/\[[a-zA-Z][\w-]*=['"]?[a-zA-Z][\w-]*['"]?\]/g, c).split(c), n = s.length, /^(\s*({{|{%|<))/.test(e) ? o() : A === !0 || /^(?:[\s\w-]*<)/.test(e) === !1 && /(?:>[\s\w-]*)$/.test(e) === !1 ? C() : (/^(?:\s*<\?xml)/.test(e) || /(?:>[\w\s:]*)?<(?:\/|!|#)?[\w\s:\-[]+/.test(e) || /^\s*</.test(e) && /<\/\w+(\w|\d)+>\s*$/.test(e)) && (/^(?:[\s\w]*<)/.test(e) || /(?:>[\s\w]*)$/.test(e)) || /^(?:\s*<s((cript)|(tyle)))/i.test(e) && /(?:<\/s((cript)|(tyle))>\s*)$/i.test(e) ? /^(?:[\s\w]*<)/.test(e) === !1 || /(?:>[\s\w]*)$/.test(e) === !1 ? C() : o() : {
    language: "unknown",
    lexer: "text"
  });
}

// src/rules/validate.ts
function Vt(e, s, n) {
  if (e === "global")
    switch (s) {
      case "indentChar":
        return wn(e, s, n);
      case "preset":
      case "language":
        return nt(e, s, n);
      case "crlf":
      case "correct":
      case "endNewline":
        return xt(e, s, n);
      case "indentLevel":
      case "indentSize":
      case "preserveLine":
      case "wrap":
      case "wrapFraction":
        return Ci(e, s, n);
      default:
        return !1;
    }
  else if (e === "liquid")
    switch (s) {
      case "commentNewline":
      case "commentIndent":
      case "indentAttribute":
      case "normalizeSpacing":
      case "preserveComment":
        return xt(e, s, n);
      case "forceArgument":
      case "forceFilter":
        return Ci(e, s, n);
      case "ignoreTagList":
      case "dedentTagList":
      case "paddedTagList":
        return dn(e, s, n);
      case "lineBreakSeparator":
      case "delimiterPlacement":
      case "delimiterTrims":
      case "quoteConvert":
        return nt(e, s, n);
    }
  else if (e === "markup")
    switch (s) {
      case "forceAttribute":
        if (kt(n))
          return Ci(e, s, n);
        if (mt(n))
          return xt(e, s, n);
        throw Ee({
          message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "boolean",
            "number"
          ]
        });
      case "attributeSort":
        if (mt(n))
          return xt(e, s, n);
        if (Ne(n))
          return dn(e, s, n);
        throw Ee({
          message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "boolean",
            "string[]"
          ]
        });
      case "commentNewline":
      case "commentIndent":
      case "forceIndent":
      case "forceAttributeValue":
      case "ignoreCSS":
      case "ignoreJS":
      case "ignoreJSON":
      case "preserveComment":
      case "preserveText":
      case "preserveAttribute":
      case "selfCloseSpace":
      case "selfCloseSVG":
      case "stripAttributeLines":
        return xt(e, s, n);
      case "attributeCasing":
      case "commentDelimiters":
      case "delimiterTerminus":
      case "lineBreakValue":
      case "quoteConvert":
        return nt(e, s, n);
    }
  else if (e === "style")
    switch (s) {
      case "correct":
      case "atRuleSpace":
      case "classPadding":
      case "noLeadZero":
      case "sortSelectors":
      case "sortProperties":
        return mt(n);
      case "quoteConvert":
        return nt(e, s, n);
    }
  else if (e === "json")
    switch (s) {
      case "arrayFormat":
      case "objectIndent":
        return nt(e, s, n);
      case "allowComments":
      case "braceAllman":
      case "bracePadding":
      case "objectSort":
        return xt(e, s, n);
    }
}
function dn(e, s, n) {
  if (Ne(n)) {
    if (n.length === 0)
      return !0;
    for (let u = 0, A = n.length; u < A; u++)
      if (Nt(n[u]) === !1)
        throw Ee({
          message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
          option: `${e} \u2192 ${s} (index: ${u})`,
          provided: n,
          expected: [
            "string"
          ]
        });
    return !0;
  }
  throw Ee({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "string[]"
    ]
  });
}
function wn(e, s, n) {
  if (typeof n == "string")
    return !0;
  throw Ee({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "string"
    ]
  });
}
function Ci(e, s, n) {
  if (kt(n) && isNaN(n) === !1)
    return !0;
  throw Ee({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "number"
    ]
  });
}
function xt(e, s, n) {
  if (kt(n))
    return n !== 0;
  if (mt(n))
    return !0;
  throw Ee({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "boolean"
    ]
  });
}
function nt(e, s, n) {
  if (Nt(n) === !1)
    throw Ee({
      message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
      option: `${e} \u2192 ${s}`,
      provided: n,
      expected: [
        "string"
      ]
    });
  if (s === "language") {
    switch (n) {
      case "text":
      case "markup":
      case "html":
      case "liquid":
      case "xml":
      case "javascript":
      case "typescript":
      case "jsx":
      case "tsx":
      case "json":
      case "less":
      case "scss":
      case "sass":
      case "css":
        return !0;
    }
    throw Ee({
      message: `Unsupported "${s}" identifier provided`,
      option: e === `${s} (global)` ? s : `${e} \u2192 ${s}`,
      provided: n,
      expected: [
        "text",
        "auto",
        "markup",
        "html",
        "liquid",
        "xml",
        "javascript",
        "typescript",
        "jsx",
        "tsx",
        "json",
        "less",
        "scss",
        "sass",
        "css"
      ]
    });
  } else if (s === "preset") {
    switch (n) {
      case "default":
      case "strict":
      case "recommended":
      case "warrington":
      case "prettier":
        return !0;
    }
    throw Ee({
      message: `Unsupported "${s}" provided`,
      option: e === `${s} (global)` ? s : `${e} \u2192 ${s}`,
      provided: n,
      expected: [
        "default",
        "strict",
        "recommended",
        "warrington",
        "prettier"
      ]
    });
  } else if (s === "attributeCasing")
    switch (n) {
      case "preserve":
      case "lowercase":
      case "lowercase-name":
      case "lowercase-value":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "preserve",
            "lowercase",
            "lowercase-name",
            "lowercase-value"
          ]
        });
    }
  else if (s === "commentDelimiters")
    switch (n) {
      case "preserve":
      case "consistent":
      case "inline":
      case "inline-align":
      case "force":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "preserve",
            "consistent",
            "force",
            "inline",
            "inline-align"
          ]
        });
    }
  else if (s === "delimiterTrims")
    switch (n) {
      case "preserve":
      case "never":
      case "always":
      case "tags":
      case "outputs":
      case "multiline":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "preserve",
            "never",
            "always",
            "tags",
            "outputs",
            "multiline",
            "linebreak"
          ]
        });
    }
  else if (s === "delimiterPlacement")
    switch (n) {
      case "default":
      case "inline":
      case "preserve":
      case "consistent":
      case "force":
      case "force-multiline":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "default",
            "inline",
            "preserve",
            "consistent",
            "force",
            "force-multiline"
          ]
        });
    }
  else if (s === "lineBreakSeparator")
    switch (n) {
      case "preserve":
      case "before":
      case "after":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "preserve",
            "before",
            "after"
          ]
        });
    }
  else if (s === "delimiterTerminus")
    switch (n) {
      case "force":
      case "inline":
      case "adapt":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "force",
            "inline",
            "adapt"
          ]
        });
    }
  else if (s === "lineBreakValue")
    switch (n) {
      case "preserve":
      case "align":
      case "indent":
      case "force-preserve":
      case "force-align":
      case "force-indent":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "preserve",
            "align",
            "indent",
            "force-preserve",
            "force-align",
            "force-indent"
          ]
        });
    }
  else if (s === "quoteConvert")
    switch (n) {
      case "none":
      case "double":
      case "single":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "none",
            "double",
            "single"
          ]
        });
    }
  else if (s === "objectIndent" || s === "arrayFormat")
    switch (n) {
      case "default":
      case "indent":
      case "inline":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "default",
            "indent",
            "inline"
          ]
        });
    }
  else if (s === "endComma")
    switch (n) {
      case "none":
      case "always":
      case "never":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "none",
            "always",
            "never"
          ]
        });
    }
  else if (s === "variableList")
    switch (n) {
      case "none":
      case "each":
      case "list":
        return !0;
      default:
        throw Ee({
          message: `Invalid "${s}" option provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "none",
            "each",
            "list"
          ]
        });
    }
}

// src/rules/presets/recommended.ts
var Jt = _e(Ge, {
  preset: "recommended",
  language: "auto",
  preserveLine: 2,
  wrap: 120,
  wrapFraction: 90,
  liquid: {
    ignoreTagList: ["javascript"],
    indentAttribute: !0,
    commentNewline: !0,
    delimiterTrims: "preserve",
    lineBreakSeparator: "after",
    quoteConvert: "double",
    delimiterPlacement: "consistent"
  },
  markup: {
    attributeCasing: "lowercase-name",
    commentDelimiters: "preserve",
    commentNewline: !0,
    delimiterTerminus: "adapt",
    forceAttribute: 2,
    forceIndent: !0,
    ignoreCSS: !1,
    ignoreJSON: !1,
    lineBreakValue: "indent",
    selfCloseSpace: !0,
    selfCloseSVG: !0,
    quoteConvert: "double"
  },
  json: {
    arrayFormat: "indent",
    objectIndent: "indent"
  },
  style: {
    commentNewline: !0,
    commentIndent: !0,
    quoteConvert: "double",
    noLeadZero: !0,
    sortProperties: !0
  }
});

// src/rules/presets/strict.ts
var Ut = _e(Ge, {
  preset: "strict",
  language: "auto",
  preserveLine: 1,
  wrap: 0,
  wrapFraction: 80,
  liquid: {
    ignoreTagList: [],
    commentNewline: !0,
    delimiterTrims: "never",
    lineBreakSeparator: "before",
    quoteConvert: "double",
    forceArgument: 3,
    forceFilter: 4,
    delimiterPlacement: "consistent"
  },
  markup: {
    attributeSort: [
      "id",
      "class",
      "type",
      "name",
      "value",
      "href",
      "src"
    ],
    attributeCasing: "lowercase-name",
    commentDelimiters: "force",
    commentNewline: !0,
    delimiterTerminus: "adapt",
    forceAttribute: 1,
    forceIndent: !0,
    ignoreCSS: !1,
    ignoreJSON: !1,
    ignoreJS: !1,
    lineBreakValue: "force-indent",
    selfCloseSpace: !0,
    selfCloseSVG: !0,
    stripAttributeLines: !0,
    quoteConvert: "double"
  },
  json: {
    arrayFormat: "indent",
    objectIndent: "indent",
    objectSort: !0
  },
  style: {
    commentNewline: !0,
    commentIndent: !0,
    quoteConvert: "double",
    noLeadZero: !0,
    sortProperties: !0,
    sortSelectors: !0
  }
});

// src/rules/presets/warrington.ts
var Zt = _e(Ge, {
  preset: "warrington",
  language: "auto",
  preserveLine: 2,
  wrap: 0,
  liquid: {
    ignoreTagList: ["javascript"],
    indentAttribute: !0,
    lineBreakSeparator: "after",
    quoteConvert: "double"
  },
  markup: {
    commentNewline: !0,
    commentDelimiters: "consistent",
    delimiterTerminus: "adapt",
    forceAttribute: 1,
    forceIndent: !0,
    ignoreCSS: !0,
    ignoreJSON: !1,
    lineBreakValue: "indent",
    selfCloseSpace: !0,
    selfCloseSVG: !0,
    stripAttributeLines: !0,
    quoteConvert: "double"
  },
  json: {
    arrayFormat: "indent",
    objectIndent: "indent"
  },
  style: {
    commentIndent: !1,
    quoteConvert: "double"
  }
});

// src/rules/presets/prettier.ts
var Xt = _e(Ge, {
  preset: "prettier",
  language: "auto",
  preserveLine: 1,
  wrap: 80,
  wrapFraction: 60,
  liquid: {
    ignoreTagList: ["javascript"],
    indentAttribute: !0,
    lineBreakSeparator: "after",
    dedentTagList: ["schema"],
    quoteConvert: "double"
  },
  markup: {
    commentDelimiters: "consistent",
    commentIndent: !0,
    delimiterTerminus: "force",
    forceAttribute: 1,
    forceIndent: !0,
    ignoreJS: !0,
    ignoreCSS: !0,
    ignoreJSON: !1,
    lineBreakValue: "force-indent",
    selfCloseSpace: !0,
    selfCloseSVG: !0,
    stripAttributeLines: !0,
    quoteConvert: "double"
  },
  json: {
    arrayFormat: "indent",
    objectIndent: "indent"
  },
  style: {
    commentIndent: !1,
    quoteConvert: "double"
  }
});

// src/rules/define.ts
var Sn = [
  "correct",
  "crlf",
  "endNewline",
  "indentChar",
  "indentLevel",
  "indentSize",
  "preserveLine",
  "wrap",
  "wrapFraction"
], Ln = [
  "liquid",
  "markup",
  "style",
  "json",
  "script"
];
function Cn(e) {
  if (e.preset === r.rules.preset)
    return e;
  if (nt("global", "preset", e.preset))
    switch (e.preset) {
      case "default":
        return _e(Ge, e);
      case "strict":
        return _e(Ut, e);
      case "recommended":
        return _e(Jt, e);
      case "warrington":
        return _e(Zt, e);
      case "prettier":
        return _e(Xt, e);
    }
  return e;
}
function mn(e, s) {
  let n = Hi(e), u = n("preset") ? Cn(e) : e, A;
  s.rules.length > 0 && (A = {}), n("language") && Vt("global", "language", u.language) && r.language !== u.language && (r.language = r.rules.language = u.language);
  for (let a of Sn)
    n(a) !== !1 && r.rules[a] !== u[a] && Vt("global", a, u[a]) && (A && (A[a] = { from: r.rules[a], to: u[a] }), a === "crlf" && (r.crlf = u[a] ? Oi : z), a === "wrap" && u[a] > 0 && (n("wrapFraction") === !1 || n("wrapFraction") && u.wrapFraction <= 0) && (u.wrapFraction = u[a] - u[a] / 4), r.rules[a] = u[a]);
  for (let a of Ln)
    if (n(a) !== !1 && r.rules[a] !== u[a]) {
      A && (A[a] = Fe(null));
      for (let C in u[a])
        Vt(a, C, u[a][C]) && (A && (A[a][C] = Fe(null), A[a][C].old = r.rules[a][C], A[a][C].new = u[a][C]), r.rules[a][C] = u[a][C]);
    }
  if (s.rules.length > 0)
    for (let a of s.rules)
      a(A, r.rules);
}

// src/cli/utils.ts
function Pt(e, ...s) {
  let n = Array.isArray(e);
  return function u(A, a, C) {
    let o = typeof C;
    if (C && o === "object")
      if (Array.isArray(C))
        for (let k of C)
          a = u(A, a, k);
      else
        for (let k in C) {
          let f = C[k];
          typeof f == "function" ? a[k] = f(a[k], Pt) : f === void 0 ? A ? a.splice(k, 1) : delete a[k] : f === null || typeof f != "object" || Array.isArray(f) ? a[k] = f : typeof a[k] == "object" ? a[k] = f === a[k] ? f : Pt(a[k], f) : a[k] = u(!1, {}, f);
        }
    else
      o === "function" && (a = C(a, Pt));
    return a;
  }(n, n ? e.slice() : Object.assign({}, e), s);
}

// src/esthetic.ts
var hn = new class {
  constructor() {
    this.language = "auto";
    this.lexer = "auto";
    this.stats = null;
    this.events = {
      format: [],
      error: [],
      rules: [],
      parse: []
    };
    Re.env === "node" && (Re.cwd = process.cwd()), Re.env === "browser" && ("esthetic" in window || Mi(window, "esthetic", {
      configurable: !0,
      get() {
        return hn;
      }
    })), Di(this.preset, {
      default: { get() {
        return Ge;
      } },
      warrington: { get() {
        return Zt;
      } },
      prettier: { get() {
        return Xt;
      } },
      strict: { get() {
        return Ut;
      } },
      recommended: { get() {
        return Jt;
      } }
    });
  }
  preset(s, n) {
    return Pt(this.preset[s], n);
  }
  get table() {
    return r.data;
  }
  get definitions() {
    return bi;
  }
  get detect() {
    return pn;
  }
  get error() {
    return r.error;
  }
  get lines() {
    return r.numbers;
  }
  grammar(s) {
    return s ? (we.extend(s), this) : we.extend();
  }
  settings(s) {
    if (!s)
      return Re;
    for (let n in s)
      n in Re && (Re[n] = s[n]);
    return Re.env === "browser" && Re.globalThis === !1 && "esthetic" in window && delete window.esthetic, this;
  }
  on(s, n) {
    return this.events[s].push(n), this;
  }
  hook(s, n) {
    r.hooks[s] = [n];
  }
  format(s, n) {
    if (r.source = s, tt(n) && "language" in n && this.language !== n.language && nt("global", "language", n.language) && (this.language = r.language = r.rules.language = n.language, this.lexer = r.lexer = Ie(r.language)), this.rules(n), this.lexer === "auto") {
      let o = this.detect(r.source);
      this.language = r.language = r.rules.language = o.language, this.lexer = r.lexer = Ie(o.language);
    }
    let u = St(this.language), A = Re.reportStats ? ri(this.language, this.lexer) : null, a = r.document(u);
    if (r.error !== null)
      if (this.events.error.length > 0) {
        for (let o of this.events.error)
          o(r.error);
        return s;
      } else {
        if (Re.throwErrors)
          throw new Error(r.error);
        return s;
      }
    let C = A === null ? null : this.stats = A(a.length);
    if (this.events.format.length > 0) {
      for (let o of this.events.format)
        if (o.call({ get data() {
          return r.data;
        } }, {
          get output() {
            return s;
          },
          get stats() {
            return C;
          },
          get rules() {
            return r.rules;
          }
        }) === !1)
          return s;
    }
    return a;
  }
  parse(s, n) {
    if (r.source = s, tt(n) && "language" in n && this.language !== n.language && nt("global", "language", n.language) && (this.language = r.language = r.rules.language = n.language, this.lexer = r.lexer = Ie(r.language)), this.rules(n), this.lexer === "auto") {
      let o = this.detect(r.source);
      this.language = r.language = r.rules.language = o.language, this.lexer = r.lexer = Ie(o.language);
    }
    let u = St(this.language), A = Re.reportStats ? ri(this.language, this.lexer) : null, a = r.document(u, 1);
    if (r.error !== null)
      if (this.events.error.length > 0) {
        for (let o of this.events.error)
          o(r.error);
        return [];
      } else {
        if (Re.throwErrors)
          throw r.error;
        return [];
      }
    let C = A === null ? null : this.stats = A(r.count);
    if (this.events.parse.length > 0) {
      for (let o of this.events.parse)
        if (o({
          get data() {
            return r.data;
          },
          get stats() {
            return C;
          },
          get rules() {
            return r.rules;
          }
        }) === !1)
          return s;
    }
    return a;
  }
  rules(s) {
    return Ke(s) ? r.rules : (mn(s, this.events), this.language = r.language, this.lexer = r.lexer = Ie(r.language), r.rules);
  }
  liquid(s, n) {
    return this.language = r.language = r.rules.language = "liquid", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  html(s, n) {
    return this.language = r.language = r.rules.language = "html", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  xml(s, n) {
    return this.language = r.language = r.rules.language = "xml", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  css(s, n) {
    return this.language = r.language = r.rules.language = "css", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  json(s, n) {
    return this.language = r.language = r.rules.language = "json", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  js(s, n) {
    return this.language = r.language = r.rules.language = "javascript", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
  ts(s, n) {
    return this.language = r.language = r.rules.language = "typescript", this.lexer = r.lexer = Ie(r.language), this.format(s, n);
  }
}();

export { hn as default };
