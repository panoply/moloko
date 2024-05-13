// src/lexical/chars.ts
var c = "", Kt = "   ", Wt = "    ", Be = '"', rt = ",", $e = "'", ie = " ";
var H = `
`, vi = `\r
`;

// src/rules/language.ts
function ft(e) {
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
function De(e) {
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
function Lt(e) {
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
var Ct = /\S/, ct = /\n/, ot = /^\s+$/;
var Xe = /\s+/g, pt = /^\s+/, Pe = /\s+$/;
var Je = /^[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/, Ye = /[\t\v\f \u00a0\u2000-\u200b\u2028-\u2029\u3000]+$/, qi = /[\t\v\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, Ai = /[\t\v\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]/, Ot = /^\n+/, ei = /\n+/g;
var Ni = /\n(?!\s*\*)/;
var Bi = /({%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore-(start|next|end)\b/, ti = /^\s*(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore(?![a-z-][^-])/, Mt = /(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!-{2})\s*esthetic-ignore-start\b/, It = /^\/\/\s*esthetic-ignore-start\b/, $i = /^\/\*{1,2}(?:\s*|\n\s*\*\s*)esthetic-ignore-start\b/;
var ji = /(\/[*/]|{%-?\s*(?:comment\s*-?%}|#)|<!--)\s*esthetic-ignore-next\b/, Ei = /^\s*[*-]\s/, Dt = /^\s*\d+\.\s/, ii = /^\s*(?:[*-]|\d+\.)\s/, ni = /(?!=)\/?>$/, vt = /^<!--+/, Rt = /--+>$/, si = /[a-zA-Z0-9_$#]+/, qt = /({%-?)(\s*)/, At = /(\s*)(-?%})/, Pi = /{%-?|-?%}/g;
var Nt = /#\s+|#/, Ti = /^{%-?\n|{%-?\s*#\n/, Wi = /\n\s*-?%}$/;
var Mi = /comment\s*-?%}[\r\n]/;
var ri = /(\/|\\|\||\*|\[|\]|\{|\})/g;

// src/utils/native.ts
var dt = Object.assign, Fe = Object.create;
var Ii = Object.defineProperty, Di = Object.defineProperties;

// src/utils/helpers.ts
function _e(e, ...s) {
  let n = Ne(e);
  return function u(N, l, O) {
    let o = typeof O;
    if (O && o === "object")
      if (Ne(O))
        for (let b of O)
          l = u(N, l, b);
      else
        for (let b in O) {
          let f = O[b];
          kn(f) ? l[b] = f(l[b], _e) : f === void 0 ? N ? l.splice(b, 1) : delete l[b] : f === null || tt(f) === !1 || Ne(f) ? l[b] = f : typeof l[b] == "object" ? l[b] = f === l[b] ? f : _e(l[b], f) : l[b] = u(!1, {}, f);
        }
    else
      o === "function" && (l = O(l, _e));
    return l;
  }(n, n ? e.slice() : dt({}, e), s);
}
function oi(e, s) {
  let n = {
    lexer: s,
    language: ft(e),
    chars: 0,
    time: ""
  }, u = Date.now();
  return (N) => {
    let l = +(Date.now() - u).toFixed(0);
    return n.time = l > 1e3 ? `${l}s` : `${l}ms`, n.chars = N, n;
  };
}
function _t(...e) {
  return e.join(H);
}
function kt(e, s = NaN) {
  if (e.indexOf(H) < 0)
    return isNaN(s) ? 0 : s;
  let n;
  if (Ne(e)) {
    let u = 0;
    do {
      if (u = e.indexOf(H, u), u === -1)
        break;
      n = n + 1, u = u + 1;
    } while (u < e.length);
  } else
    n = e.split(H).length;
  return isNaN(s) ? n === 1 ? 0 : n : n === 1 ? s : (n = n - 1 + s, n > s ? n : s);
}
function li(e, s = ie) {
  if (e <= 0)
    return s;
  let n = c, u = 1;
  do
    n += s;
  while (u++ < e);
  return n;
}
function Te(e) {
  return e ? Ai.test(e) : !1;
}
function i(e, s) {
  return e ? e.charCodeAt(0) === s : !1;
}
function _i(e) {
  return e[e.length - 1];
}
function Qi(e, ...s) {
  return e ? s.some((n) => e[0].charCodeAt(0) === n) : !1;
}
function Qe(e, s) {
  return i(e[e.length - 1], s);
}
function Hi(e, ...s) {
  let n = e.length - 1, u = s.length;
  for (; u--; )
    if (i(e[n--], s[u]) === !1)
      return !1;
  return !0;
}
function mt(e, s, n = 2) {
  return i(e[e.length - n], s);
}
function M(e, s) {
  return i(e, s) === !1;
}
function ai(e, s) {
  return Qe(e, s) === !1;
}
function at(e) {
  return /\S/.test(e);
}
function ue(e) {
  return /\s/.test(e);
}
function He(e) {
  return /\d/.test(e);
}
function ui(e) {
  return `\\${e}`;
}
function Fi(e) {
  return i(e, 123) ? "{%-?\\s*" : "\\s*-?%}";
}
var { toString: ut } = Object.prototype;
function zi(e) {
  return (s) => s in e;
}
function Ne(e) {
  return ut.call(e).slice(8, -1) === "Array";
}
function tt(e) {
  return ut.call(e).slice(8, -1) === "Object";
}
function Bt(e) {
  return ut.call(e).slice(8, -1) === "String";
}
function $t(e) {
  return ut.call(e).slice(8, -1) === "RegExp";
}
function kn(e) {
  return ut.call(e).slice(8, -1) === "Function";
}
function ht(e) {
  return ut.call(e).slice(8, -1) === "Boolean";
}
function yt(e) {
  return ut.call(e).slice(8, -1) === "Number";
}
function Ke(e) {
  return ut.call(e).slice(8, -1) === "Undefined";
}

// src/parse/sorting.ts
function jt(e) {
  let s = r.count, n = r.stack.index, u = 0, N = 0, l = 0, O = 0, o = 0, b = 0, f = 0, t = !0, { count: h } = r, F = r.stack.token, le = r.stack.index, m = r.lineOffset, p = e.lexer[h] === "style", S = p && F === "global", D = p ? [";", "separator"] : [",", "separator"], I = [], d = {
    begin: [],
    ender: [],
    lexer: [],
    lines: [],
    stack: [],
    token: [],
    types: []
  };
  function a(g, W) {
    let C = g[0], U = W[0];
    if (e.types[C] === "comment") {
      do
        C = C + 1;
      while (C < h && e.types[C] === "comment");
      if (e.token[C] === void 0)
        return 1;
    }
    if (e.types[U] === "comment") {
      do
        U = U + 1;
      while (U < h && e.types[U] === "comment");
      if (e.token[U] === void 0)
        return 1;
    }
    if (p === !0) {
      if (e.token[C].indexOf("@import") === 0 || e.token[U].indexOf("@import") === 0)
        return C < U ? -1 : 1;
      if (e.types[C] !== e.types[U]) {
        if (e.types[C] === "function")
          return 1;
        if (e.types[C] === "variable")
          return -1;
        if (e.types[C] === "selector")
          return 1;
        if (e.types[C] === "property" && e.types[U] !== "variable" || e.types[C] === "mixin" && e.types[U] !== "property" && e.types[U] !== "variable")
          return -1;
      }
    }
    return e.token[C].toLowerCase() > e.token[U].toLowerCase() ? 1 : -1;
  }
  O = s;
  do {
    if (e.begin[s] === n || S && s < O && i(e.token[s], 125) && e.begin[e.begin[s]] === -1) {
      if (e.types[s].indexOf("liquid") > -1)
        return;
      if (e.token[s] === D[0] || p === !0 && i(e.token[s], 125) && M(e.token[s + 1], 59) ? (t = !0, o = s + 1) : p === !0 && i(e.token[s - 1], 125) && (t = !0, o = s), o === 0 && e.types[0] === "comment")
        do
          o = o + 1;
        while (e.types[o] === "comment");
      else
        e.types[o] === "comment" && e.lines[o] < 2 && (o = o + 1);
      t === !0 && (e.token[s] === D[0] || p === !0 && i(e.token[s - 1], 125)) && o <= O && ((p === !0 && "};".indexOf(e.token[O]) < 0 || p === !1 && M(e.token[O], 44)) && (O = O + 1), I.push([o, O]), p === !0 && i(e.token[o], 125) ? O = o : O = o - 1);
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
    I.sort(a), f = I.length, t = !1, n = 0;
    do {
      if (b = I[n][1], p === !0 && (l = b, e.types[l] === "comment" && (l = l - 1), i(e.token[l], 125) ? (b = b + 1, D[0] = "}", D[1] = "end") : (D[0] = ";", D[1] = "separator")), u = I[n][0], p === !0 && e.types[b - 1] !== "end" && e.types[b] === "comment" && e.types[b + 1] !== "comment" && n < f - 1 && (b = b + 1), u < b)
        do
          p === !1 && n === f - 1 && u === b - 2 && i(e.token[u], 44) && e.lexer[u] === "script" && e.types[u + 1] === "comment" || r.push(d, {
            begin: e.begin[u],
            ender: e.begin[u],
            lexer: e.lexer[u],
            lines: e.lines[u],
            stack: e.stack[u],
            token: e.token[u],
            types: e.types[u]
          }, c), N = N + 1, e.token[u] === D[0] && (p === !0 || e.begin[u] === e.begin[I[n][0]]) ? t = !0 : e.token[u] !== D[0] && e.types[u] !== "comment" && (t = !1), u = u + 1;
        while (u < b);
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
            stack: S ? "global" : F,
            ender: r.count,
            lexer: d.lexer[u - 1],
            lines: 0,
            token: D[0],
            types: D[1]
          }
        }), N = N + 1;
      }
      n = n + 1;
    } while (n < f);
    r.splice({ data: e, howmany: N, index: s + 1 }), r.lineOffset = m, r.concat(e, d);
  }
}
function fi(e, s, n) {
  return Ne(e) === !1 ? e : s === "normal" ? Ui.call({ array: e, recursive: n }, e) : s === "descend" ? Ji.call({ recursive: n }, e) : Vi.call({ recursive: n }, e);
}
function Qt(e, s) {
  let n = e, u = -1, { data: N } = r, l = [], O = r.stack.length < 2 ? [-1] : [r.stack[r.stack.length - 2][1]];
  do
    n > 0 && N.types[n].indexOf("attribute") > -1 && N.types[n].indexOf("end") < 0 && N.types[n - 1].indexOf("start") < 0 && N.types[n - 1].indexOf("attribute") < 0 && N.lexer[n] === "markup" && O.push(n - 1), n > 0 && N.types[n - 1].indexOf("attribute") > -1 && N.types[n].indexOf("attribute") < 0 && N.lexer[O[O.length - 1]] === "markup" && N.types[O[O.length - 1]].indexOf("start") < 0 && O.pop(), N.begin[n] !== O[O.length - 1] && (N.begin[n] = O.length > 0 ? O[O.length - 1] : -1), N.types[n].indexOf("else") > -1 && (O.length > 0 ? O[O.length - 1] = n : O.push(n)), N.types[n].indexOf("end") > -1 && O.pop(), N.types[n].indexOf("start") > -1 && O.push(n), n = n + 1;
  while (n < s);
  n = s;
  do
    n = n - 1, N.types[n].indexOf("end") > -1 && (l.push(n), u = u + 1), N.ender[n] = u > -1 ? l[u] : -1, N.types[n].indexOf("start") > -1 && (l.pop(), u = u - 1);
  while (n > e);
}
function Vi(e) {
  let s = 0, n = e.length, u = e, N = u.map((o) => o[1]), l = () => {
    let o = 0, b = u.length;
    if (o < b)
      do
        Ne(u[o]) === !0 && (u[o] = Vi.apply(this, u[o])), o = o + 1;
      while (o < b);
  }, O = (o = c) => {
    let b = s, f = 0, t = 0, h = 0, F = [], le = u[s];
    if (b < n)
      do
        u[b] < le ? (le = u[b], F = [b]) : u[b] === le && F.push(b), b = b + 1;
      while (b < n);
    if (t = F.length, b = s, f = t + s, b < f)
      do
        le[1] = N[b], u[F[h]] = u[b], u[b] = le, h = h + 1, b = b + 1;
      while (b < f);
    return s = s + t, s < n ? O() : (this.recursive === !0 && l(), e = u), o;
  };
  return O(), e;
}
function Ji(e) {
  let s = 0, n = e.length, u = e, N = () => {
    let O = u.length, o = 0;
    if (o < O)
      do
        Ne(u[o]) && (u[o] = Ji.apply(this, u[o])), o = o + 1;
      while (o < O);
  }, l = (O = "") => {
    let o = s, b = 0, f = 0, t = 0, h = u[s], F = [], le = c, m = typeof h;
    if (o < n)
      do
        le = typeof u[o], u[o] > h || le > m ? (h = u[o], F = [o]) : u[o] === h && F.push(o), o = o + 1;
      while (o < n);
    if (f = F.length, o = s, b = f + s, o < b)
      do
        u[F[t]] = u[o], u[o] = h, t = t + 1, o = o + 1;
      while (o < b);
    return s = s + f, s < n ? l() : (this.recursive === !0 && N(), e = u), O;
  };
  return l(), e;
}
function Ui(e) {
  let s = e, n = [e[0]], u = () => {
    let l = 0, O = s.length;
    if (l < O)
      do
        Ne(s[l]) && (s[l] = Ui.apply(this, s[l])), l = l + 1;
      while (l < O);
  }, N = (l) => {
    let O = 0, o = [], b = s.length;
    if (O < b)
      do
        s[O] !== l && o.push(s[O]), O = O + 1;
      while (O < b);
    s = o, o.length > 0 ? (n.push(o[0]), N(o[0])) : (this.recursive === !0 && u(), e = s);
  };
  return N(this.array[0]), e;
}

// src/parse/grammar.ts
var ci = class {
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
      for (let { language: u, argument: N = null } of s[n])
        if (n in this.embed || (this.embed[n] = {
          tag: n,
          language: u,
          args: /* @__PURE__ */ new Map([[/* @__PURE__ */ new Set(), { tag: n, language: u }]])
        }), N) {
          for (let [l] of this.embed[n].args)
            if (l !== null)
              if (Ne(N))
                for (let O of N)
                  l.has(O) || l.add(O);
              else {
                let O = new RegExp(N);
                if (l.size > 0)
                  for (let o of l)
                    $t(o) !== !1 && o.source !== O.source && l.add(O);
                else
                  l.add(O);
              }
        }
  }
}, pi = class {
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
}, di = class {
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
      for (let { language: u, attribute: N } of s[n])
        if ("language" in this.embed[n] || (this.embed[n].language = u), this.embed[n].attr.has(u) || this.embed[n].attr.set(u, { tag: n, language: u, attr: /* @__PURE__ */ new Map() }), N) {
          let l = this.embed[n].attr.get(u);
          for (let O in N) {
            l.attr.has(O) || l.attr.set(O, {
              tag: n,
              language: u,
              attr: O,
              value: /* @__PURE__ */ new Set()
            });
            let o = this.embed[n].attr.get(u).attr.get(O);
            if (Ne(N[O]))
              for (let b of N[O])
                o.value.has(b) || o.value.add(b);
            else {
              let b = new RegExp(N[O]);
              if (o.value.size > 0)
                for (let f of o.value)
                  $t(f) !== !1 && f.source !== b.source && o.value.add(b);
              else
                o.value.add(b);
            }
          }
        }
    }
  }
}, mi = class {
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
            for (let N of s[n][u])
              n === "webkit" ? u === "elements" ? (this.grammar[n][u].push(N), this.webkitElements.add(N)) : u === "classes" && (this.grammar[n][u].push(N), this.webkitClasses.add(N)) : n === "pseudo" && (u === "elements" ? (this.grammar[n][u].push(N), this.pseudoElements.add(N)) : u === "classes" ? (this.grammar[n][u].push(N), this.pseudoClasses.add(N)) : u === "functions" && (this.grammar[n][u].push(N), this.pseudoFunctions.add(N)));
      }
    }
  }
}, hi = class {
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
}, gi = class {
  constructor() {
    /**
     * CSS Grammars
     */
    this.css = new mi();
    /**
     * Liquid Grammars
     */
    this.liquid = new ci();
    /**
     * JavaScript Grammars
     */
    this.js = new hi();
    /**
     * HTML Grammars
     */
    this.html = new di();
    /**
     * SVG Grammars
     */
    this.svg = new pi();
  }
  /**
     * Extend Grammars
     */
  extend(s) {
    let {
      liquid: n,
      html: u,
      css: N,
      js: l,
      svg: O
    } = this;
    if (tt(s))
      for (let o in s)
        o === "liquid" ? n.extend(s.liquid) : o === "html" ? u.extend(s.html) : o === "css" ? N.extend(s.css) : o === "js" ? l.extend(s.js) : o === "svg" && O.extend(s.svg);
    return {
      get html() {
        return u.grammar;
      },
      get liquid() {
        return n.grammar;
      },
      get js() {
        return l.grammar;
      },
      get css() {
        return N.grammar;
      },
      get svg() {
        return O.grammar;
      }
    };
  }
}, Le = new gi();

// src/lexical/lexing.ts
function Ue(e, s = NaN, n) {
  if (Bt(e) === !1)
    return c;
  if (M(e, 60) && M(e, 123))
    return n || e;
  if (i(e, 60)) {
    let l = e.search(/[\s>]/), O = e.slice(i(e[1], 47) ? 2 : 1, l);
    return i(O, 63) && Qe(O, 63) ? "xml" : isNaN(s) ? O : O.slice(s);
  }
  let N = (i(e[2], 45) ? e.slice(3).trimStart() : e.slice(2).trimStart()).split(/\s|-?[%}]}/).shift();
  return isNaN(s) ? N : N.slice(s);
}
function bi(e) {
  return (s, n, u) => {
    let N = e, l = e;
    return i(u[n - 1], 92) && (N = s[0]), i(s[s.length - 2], 92) && (l = s[s.length - 1]), N + s.slice(1, -1) + l;
  };
}

// src/config.ts
var Re = {
  // @ts-ignore
  version: "0.7.0-beta.1",
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
function Ie(e, s, n) {
  n || (n = Ue(s));
  let u = Ki(e, n, r.lineNumber);
  u.language = ft(r.language), r.error = _t(
    u.message,
    H,
    xn(),
    H,
    u.details.replace(/\n/g, ie),
    H,
    `Language: ${ft(r.language)} `,
    `Location: ${r.lineNumber}:${r.lineColumn}`,
    `\xC6sthetic: Parse Failed (Code: ${u.code})`
  );
}
function Et(e, s, n) {
  n || (n = Ue(s.token));
  let u = Ki(e, n, s.line);
  u.language = ft(r.language), r.error = _t(
    u.message,
    H,
    yn(s),
    H,
    u.details,
    H,
    qe(`Language: ${ft(r.language)}`),
    qe(`Location: ${s.line}`),
    qe(`\xC6sthetic: Parse Failed (Code: ${e})`)
  );
}
function je(e) {
  return _t(
    `Rule Error: ${e.message}`,
    H,
    `Definition: ${e.option}`,
    `Provided: ${e.provided} `,
    `Expected: ${e.expected.join(", ")} `
  );
}
var Xi = (e) => Re.logColors ? `\x1B[93m${"^".repeat(e)}\x1B[39m` : `${"^".repeat(e)}`;
function yn(e) {
  let s = e.line - r.get(e.index).lines, n = 0, u = "", N = r.source.split(H).slice(s, e.line), l = `${e.line + 1}`.length, O = [], { indentSize: o, indentChar: b } = r.rules;
  do {
    let f = `${s + 1}`, t = l - f.length > 0 ? Re.logColors ? ` \x1B[90m${f} |` : ` ${f} |` : Re.logColors ? `\x1B[90m${f} |` : `${f} |`;
    if (u = N[n], n === 0) {
      if (Ke(N[n])) {
        Re.logColors ? O.push(`${t} \x1B[31m${e.token}\x1B[39m`) : O.push(`${t} ${e.token}`);
        break;
      }
      u = N[n].trimStart(), Re.logColors ? O.push(`${t} \x1B[31m${u}\x1B[39m`) : O.push(`${t} ${u}`);
    } else {
      let h = u.match(/^\s*/);
      h !== null && h[0].length > o && (u = b.repeat(o) + u.trimStart()), Re.logColors ? O.push(`${t} \x1B[31m${u}\x1B[39m`) : O.push(`${t} ${u}`);
    }
    n = n + 1, s = s + 1;
  } while (n < N.length);
  return O.join(H);
}
function xn(e = r.lineNumber) {
  let s = [], n = r.source.split(H), u = e, N = `${u + 1}`.length, l = u - 1, O = "";
  n.length > 2 && (l = u - 3), n.length === 2 && (l = u - 2);
  do {
    let o = `${l + 1}`, b = N - o.length > 0 ? Re.logColors ? ` \x1B[90m${o} |` : ` ${o} |` : Re.logColors ? `\x1B[90m${o} |` : `${o} |`, f = n[l].trim();
    if (l > u)
      break;
    if (!f) {
      Re.logColors ? s.push(`${b} \x1B[90m${f || "\u2424"}`) : s.push(`${b} ${f || "\u2424"}`), l = l + 1;
      continue;
    }
    l === u - 1 ? f.length === 0 ? s.push(`${" ".repeat(N + 2)} ${Xi(O.length)}`) : (Re.logColors ? s.push(`${b} \x1B[31m${f}\x1B[39m`) : s.push(`${b} ${f}`), s.push(`${" ".repeat(N + 2)} ${Xi(f.length)}`)) : Re.logColors ? s.push(`${b} \x1B[90m${f || "\u2424"}`) : s.push(`${b} ${f || "\u2424"}`), l = l + 1, O = f;
  } while (l < u);
  return s.join(H);
}
function qe(...e) {
  return Re.logColors ? `${e.join(H)}`.replace(/"(.*?)"/g, "\x1B[31m$1\x1B[39m") : e.join(H);
}
function Ki(e, s, n = r.lineNumber) {
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
function xt(e, s) {
  let n;
  ((te) => (te[te.Force = 0] = "Force", te[te.Inline = 1] = "Inline", te[te.Preserve = 2] = "Preserve"))(n || (n = {}));
  let { start: u, lexer: N, end: l, ender: O } = s, { rules: o, data: b } = r, f = [], t = U(), h = s.begin.replace(ri, ui), F = t !== 4 ? h : `${s.begin}\\s*#`, le = new RegExp(`^(${F}\\s*esthetic-ignore-start)`), m = new RegExp(`^(${F}\\s*esthetic-ignore-next)`), p = new RegExp(r.crlf, "g"), S = new RegExp(`(${h})`), D = t > 2 ? new RegExp(s.ender.replace(Pi, Fi)) : new RegExp(s.ender.replace(ri, ui)), I = u, d = 0, a = 0, g = c, W = s.ender.length - 1, C = s.ender.charAt(W);
  function U() {
    return i(s.begin[0], 123) && i(s.begin[1], 37) ? e.slice(u + s.begin.length, e.indexOf("}", u)).join(c).trimStart().charCodeAt(0) === 35 ? 4 : 3 : s.begin === "/*" ? 2 : 1;
  }
  function j() {
    if (t !== 1)
      return !1;
    if (o.markup.commentDelimiters === "consistent")
      return i(g.slice(4).replace(Je, c), 10) ? [0, 0] : [1, 1];
    if (o.markup.commentDelimiters === "force")
      return [0, 0];
    if (o.markup.commentDelimiters === "inline" || o.markup.commentDelimiters === "inline-align")
      return [1, 1];
    if (o.markup.commentDelimiters === "preserve") {
      let L = [];
      return i(g.slice(4).replace(Je, c), 10) ? L.push(0) : L.push(1), g.slice(g.lastIndexOf(H) + 1).trimStart() === s.ender ? L.push(0) : L.push(1), L;
    }
  }
  function y() {
    if (t === 1 && o.markup.preserveComment === !1)
      if (o.markup.commentDelimiters === "consistent") {
        let L = e.slice(u + 4).join(c);
        L.slice(0, L.search(Ct)).indexOf(H) > -1 ? o.markup.commentIndent ? (g = g.replace(/^<!--\s*/, `<!--${H}  `), g = g.replace(/\s*-->$/, `${H}-->`)) : (g = g.replace(/^<!--\s*/, `<!--${H}`), g = g.replace(/\s*-->$/, `${H}-->`)) : (g = g.replace(/^<!--\s*/, "<!-- "), g = g.replace(/\s*-->$/, " -->"));
      } else if (o.markup.commentDelimiters === "force")
        o.markup.commentIndent ? (g = g.replace(/^<!--\s*/, `<!--${H}  `), g = g.replace(/\s*-->$/, `${H}-->`)) : (g = g.replace(/^<!--\s*/, `<!--${H}`), g = g.replace(/\s*-->$/, `${H}-->`));
      else if (o.markup.commentDelimiters === "inline" || o.markup.commentDelimiters === "inline-align")
        g = g.replace(/^<!--\s*/, "<!-- "), g = g.replace(/\s*-->$/, " -->");
      else {
        let L = e.slice(u + 4).join(c);
        L.slice(0, L.search(Ct)).indexOf(H) > -1 ? o.markup.commentIndent ? g = g.replace(/^<!--\s*/, `<!--${H}  `) : g = g.replace(/^<!--\s*/, `<!--${H}`) : g = g.replace(/^<!--\s*/, "<!-- ");
        let ye = L.indexOf(O);
        L.slice(L.lastIndexOf(H, ye) + 1, ye + 3).trimStart() === s.ender ? o.markup.commentIndent ? g = g.replace(/\s*-->$/, `${H}-->`) : g = g.replace(/\s*-->$/, `${H}-->`) : g = g.replace(/\s*-->$/, " -->");
      }
    return [g, I];
  }
  function q(L) {
    if (d = 0, o.wrap > 0)
      for (L.splice(0, 1, s.begin, L[0].replace(S, c).trim()), a = 1, d = 1; L[a] === c; )
        L.splice(a, 1);
    else {
      a = -1;
      do
        a = a + 1;
      while (L[a] === c || i(L[a], 35) && L[a].length === 1);
      L.splice(0, a);
    }
    for (let ye = L.length; d < ye; d++)
      M(L[d], 35) && L[d] !== c && (L[d] = `# ${L[d].trimEnd()}`);
    if (o.wrap > 0)
      L.push(`#${L.pop().trim().slice(1)}`, s.ender);
    else {
      L.splice(0, 0, s.begin), a = L.length;
      do
        a = a - 1;
      while (L[a] === c || i(L[a], 35) && L[a].length === 1);
      L.splice(a + 1, L.length - a), L.push(`#${L.pop().trim().slice(1)}`, s.ender);
    }
    return g = L.join(r.crlf), o.liquid.commentIndent === !1 && (g = g.replace(/^#/gm, " #")), [g, I];
  }
  function G() {
    let L = c;
    return g = f.join(c).replace(Ye, c), r.count > -1 && b.lines[r.count] > 0 && (d = e.lastIndexOf(H, r.iterator) + 1, d > 0 && (L = e.slice(d, r.iterator).join(c), L.trim() === c || (L = L.slice(0, L.search(Ct))), g = L + g)), [g, I];
  }
  function B() {
    let L = H;
    I = I + 1;
    do {
      if (f.push(e[I]), i(e[I], 10) && (r.lineOffset = r.lines(I, r.lineOffset)), e[I - 3] === "-" && e[I - 2] === "e" && e[I - 1] === "n" && e[I] === "d" && f.slice(f.length - 19).join(c) === "esthetic-ignore-end") {
        t === 3 && (a = e.indexOf("{", I), i(e[a + 1], 37) && (L = e.slice(a, e.indexOf("}", a) + 1).join(c), D.test(L) && (s.ender = L))), I = I + 1, L = c;
        break;
      }
      I = I + 1;
    } while (I < l);
    d = I, W = s.begin.length - 1, C = s.begin.charAt(W);
    do {
      if (t === 2 && i(e[d - 1], 47) && i(e[d], 42) || e[d] === C && e.slice(d - W, d + 1).join(c) === s.begin)
        break;
      d = d - 1;
    } while (d > u);
    if (t === 2 && i(e[d], 42) ? L = "*/" : L === c && t !== 2 && (L = s.ender), W = L.length - 1, C = L.charAt(W), M(L, 10) || M(e[I], 10))
      do {
        if (f.push(e[I]), i(L, 10) && i(e[I + 1], 10) || e[I] === C && e.slice(I - W, I + 1).join(c) === L)
          break;
        I = I + 1;
      } while (I < l);
    if (i(e[I], 10) && (I = I - 1), g = f.join(c).replace(Pe, c), ue(e[r.iterator - 1])) {
      let ye = e.lastIndexOf(H, r.iterator);
      ye > -1 && (g = e.slice(ye + 1, r.iterator).join(c) + g);
    }
    return [g, I];
  }
  function V() {
    if (I === l)
      return !0;
    if (t === 3 && o.liquid.preserveComment || t === 4 && o.liquid.preserveComment || t === 1 && o.markup.preserveComment) {
      if (d = e.lastIndexOf(H, r.iterator) + 1, d > 0) {
        let L = e.slice(d, r.iterator).join(c);
        L.trim() === c || (L = L.slice(0, L.search(Ct))), g = L + g;
      }
      return !0;
    }
    if (t === 2 && N === "style" && o.style.preserveComment || t === 2 && N === "script" && o.script.preserveComment || t !== 3 && t !== 4 && g.length <= o.wrap && g.indexOf(H) < 0 || o.wrap < 1 && t === 3 && Mi.test(g) === !1)
      return !0;
    if (t === 4) {
      if (o.wrap > 0 && g.length >= o.wrap)
        return !1;
      if (ct.test(g)) {
        if (Ti.test(g))
          return !1;
        if (Wi.test(g) && g.slice(g.indexOf("#") + 1, g.lastIndexOf(H)).indexOf(H) < 0)
          return o.wrap > 0 ? g = g.replace(ei, c).replace(qt, "$1 # ").replace(Nt, "# ").replace(At, " $2") : g = g.replace(ei, c).replace(qt, "$1 ").replace(Nt, "# ").replace(At, " $2"), !0;
      } else
        return o.wrap > 0 ? g = g.replace(qt, "$1 # ").replace(Nt, "# ").replace(At, " $2") : g = g.replace(qt, "$1 ").replace(Nt, "# ").replace(At, " $2"), !0;
      return !1;
    }
    return o.wrap > 0 && g.length <= o.wrap && g.slice(5, -4).indexOf(H) < 0 || o.wrap < 1 && t !== 3 && g.slice(5, -4).indexOf(H) < 0 || t === 2 && g.indexOf(H) > 0 && g.replace(H, c).indexOf(H) > 0 && Ni.test(g) === !1;
  }
  function ke() {
    let L = [], ye = 0;
    if (d = u, d > 0 && M(e[d - 1], 10) && ue(e[d - 1]))
      do
        d = d - 1;
      while (d > 0 && M(e[d - 1], 10) && ue(e[d - 1]));
    let me = new RegExp(`
${e.slice(d, u).join(c)}`, "g");
    return g = g.replace(p, H).replace(me, H), L = g.split(H), ye = L.length, L[0] = L[0].replace(S, c), L[ye - 1] = L[ye - 1].replace(D, c), t === 4 && o.wrap < 1 ? (L = L.map((te) => te.replace(/^#\s*/m, c).trimStart()), q(L)) : (ye < 2 && (L = L[0].split(ie)), t === 3 ? L[0] === c ? L[0] = s.begin : L.splice(0, 0, s.begin) : L[0] === c ? L[0] = s.begin : L.splice(0, 0, s.begin), ye = L.length, t === 1 ? we(L, ye - 1) : ae(L, ye));
  }
  function we(L, ye) {
    let me = [L.shift()], te = c, ce = 0;
    o.markup.commentDelimiters === "inline-align" ? te = "     " : o.markup.commentIndent && (te = "  ");
    let J = !1, P = 0;
    do {
      if (ot.test(L[ce]) === !0 || L[ce] === c)
        P = P + 1, P <= o.preserveLine && me.push(H);
      else if (J)
        me.push(L[ce].replace(Ye, c), H);
      else {
        let T = ce === 0 ? L[ce].trimStart().replace(Ye, c) : L[ce].trim();
        if (/<\/?[a-zA-Z]|{{|{%/.test(T))
          J = !0, me.push(L[ce].replace(Ye, c));
        else if (o.wrap > 0 && T.length > o.wrap) {
          let oe = T.replace(qi, " ").split(ie).concat(H);
          for (let se = 0, ee = 0, _ = 0, Q = oe.length; se < Q; se++)
            _ += oe[se].length + 1, (_ > o.wrap || se + 1 === Q) && (me.push(te + oe.slice(ee, se).join(ie) + H), ee = se, _ = 0);
        } else
          me.push(`${te}${T}${H}`);
      }
      ce = ce + 1;
    } while (ce < ye);
    return g = me.join(c) + ie + s.ender, y();
  }
  function ae(L, ye) {
    let me = [], te = 0, ce = 0, J, P, T = !1, oe = !1, se = !1, ee = !1;
    d = 0;
    do {
      if (P = d < ye - 1 ? L[d + 1].replace(Je, c) : c, ot.test(L[d]) === !0 || L[d] === c) {
        if (ot.test(L[d + 1]) === !0 || L[d + 1] === c)
          do
            d = d + 1;
          while (d < ye && (ot.test(L[d + 1]) === !0 || L[d + 1] === c));
        d < ye - 1 && me.push(c);
      } else if (J = L[d].replace(Je, c), o.wrap > 0 && J.length > o.wrap && J.indexOf(ie) > o.wrap)
        L[d] = J, a = L[d].indexOf(ie), me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), d = d - 1;
      else {
        if (t === 2 && L[d].indexOf("/*") !== 0 ? L[d] = Kt + L[d].replace(Je, c).replace(Ye, c).replace(Xe, ie) : L[d] = L[d].replace(Je, c).replace(Ye, c), ce = d < 1 ? o.wrap - (s.begin.length + 1) : o.wrap, te = L[d].replace(pt, c).indexOf(ie), a = L[d].length, a > ce && te > 0 && te < ce) {
          a = ce;
          do
            if (a = a - 1, ue(L[d].charAt(a)) && a <= o.wrap)
              break;
          while (a > 0);
          Dt.test(L[d]) === !0 && Dt.test(L[d + 1]) === !1 && L.splice(d + 1, 0, "1. "), a < 4 ? (me.push(L[d]), ee = !0) : d === ye - 1 && (me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), ee = !0, d = d - 1), ot.test(L[d + 1]) === !0 || L[d + 1] === c ? (me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), T = !0, d = d - 1) : Ei.test(L[d + 1]) ? (me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), oe = !0, d = d - 1) : Dt.test(L[d + 1]) ? (me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), se = !0, d = d - 1) : L[d + 1].slice(0, 4) === Wt || a + P.length > o.wrap && P.indexOf(ie) < 0 ? (me.push(L[d].slice(0, a)), L[d] = L[d].slice(a + 1), ee = !0, d = d - 1) : L[d].replace(Je, c).indexOf(ie) < o.wrap && (L[d].length > o.wrap ? L[d + 1] = `${L[d].slice(a + 1)}${r.crlf}${L[d + 1]}` : L[d + 1] = `${L[d].slice(a + 1)} ${L[d + 1]}`), T === !1 && oe === !1 && se === !1 && ee === !1 && (L[d] = L[d].slice(0, a));
        } else
          L[d + 1] !== void 0 && t < 3 && (L[d].length + P.indexOf(ie) > o.wrap && P.indexOf(ie) > 0 || L[d].length + P.length > o.wrap && P.indexOf(ie) < 0) ? (me.push(L[d]), o.wrap > 0 && (d = d + 1), o.wrap < 1 && t === 3 && (d = d + 1), T = !0) : L[d + 1] !== void 0 && ot.test(L[d + 1]) === !1 && L[d + 1] !== c && L[d + 1].slice(0, 4) !== Wt && ii.test(L[d + 1]) === !1 && (t === 3 ? me.push(L[d]) : L[d + 1] = `${L[d]} ${L[d + 1]}`, T = !0);
        ee === !1 && oe === !1 && se === !1 && (T === !0 ? T = !1 : /^\s*(\*|-|(\d+\.))\s*$/.test(L[d]) === !1 && (d < ye - 1 && L[d + 1] !== c && ot.test(L[d]) === !1 && L[d + 1].slice(0, 4) !== Wt && ii.test(L[d + 1]) === !1 ? (L[d] = `${L[d]} ${L[d + 1]}`, L.splice(d + 1, 1), ye = ye - 1, d = d - 1) : t === 2 && L[d].indexOf("/*") !== 0 ? me.push(Kt + L[d].replace(Je, c).replace(Ye, c).replace(Xe, ie)) : me.push(L[d].replace(Je, c).replace(Ye, c).replace(Xe, ie)))), ee = !1, oe = !1, se = !1;
      }
      d = d + 1;
    } while (d < ye);
    let _ = j();
    if (me && me.length > 0)
      if (_)
        _[0] === 1 ? o.markup.commentIndent ? o.markup.commentDelimiters === "inline-align" ? g = `${me[0]} ${me.slice(1).join(r.crlf + "     ")}` : g = `${me[0]} ${me.slice(1).join(r.crlf + "  ")}` : g = `${me[0]} ${me.slice(1).join(r.crlf)}` : o.markup.commentIndent ? g = `${me[0] + H}  ${me.slice(1).join(r.crlf + "  ")}` : g = `${me[0] + H}  ${me.slice(1).join(r.crlf)}`, _[1] === 1 ? g += ` ${s.ender}` : g += H + s.ender;
      else {
        if (t !== 4 && t !== 3 && me[me.length - 1].length > o.wrap - (s.ender.length + 1))
          me.push(s.ender);
        else if (t === 3)
          me.push(s.ender);
        else {
          if (t === 4)
            return q(me);
          me[me.length - 1] = `${me[me.length - 1]} ${s.ender}`;
        }
        g = me.join(H);
      }
    else
      _ ? (_[0] === 1 ? o.markup.commentIndent ? o.markup.commentDelimiters === "inline-align" ? g = `${L[0]} ${L.slice(1).join(r.crlf + "     ")}` : g = `${L[0]} ${L.slice(1).join(r.crlf + "  ")}` : g = `${L[0]} ${L.slice(1).join(r.crlf)}` : o.markup.commentIndent ? g = `${L[0] + H}  ${L.slice(1).join(r.crlf + "  ")}` : g = L.join(H), _[1] === 1 ? g += ` ${s.ender}` : g += H + s.ender) : (ye = L.length - 1, L[ye] = L[ye] + s.ender, g = L.join(H));
    return [g, I];
  }
  do {
    if (i(e[I], 10) && (r.lineOffset = r.lines(I, r.lineOffset)), i(e[I], 35) && t === 4 && o.liquid.preserveComment === !1 && o.wrap > 0 && f.slice(f.lastIndexOf(H)).join(c).trim() === c ? f.push(ie) : f.push(e[I]), e[I] === C && e.slice(I - W, I + 1).join(c) === s.ender) {
      t === 4 && i(e[I - 2], 45) && (s.ender = "-%}", D = new RegExp(s.ender)), g = f.join(c);
      break;
    }
    I = I + 1;
  } while (I < l);
  return le.test(g) ? B() : m.test(g) ? G() : V() ? y() : ke();
}

// src/comments/line.ts
function Ht(e) {
  let { wrap: s } = r.rules, { preserveComment: n } = r.rules[r.lexer], u = e.start, N = 0, l = c, O = [];
  function o() {
    let f = c;
    do
      if (N = N + 1, i(e.chars[N + 1], 10))
        return;
    while (N < e.end && ue(e.chars[N]));
    if (e.chars[N] + e.chars[N + 1] === "//") {
      O = [];
      do
        O.push(e.chars[N]), N = N + 1;
      while (N < e.end && M(e.chars[N], 10));
      f = O.join(c), /^\/\/ (?:[*-]|\d+\.)/.test(f) === !1 && /^\/\/\s*$/.test(f) === !1 && (l = `${l} ${f.replace(/(^\/\/\s*)/, c).replace(Pe, c)}`, u = N - 1, o());
    }
  }
  function b() {
    let f = [], t = {
      ender: -1,
      types: "comment",
      lexer: e.lexer,
      lines: r.lineOffset
    };
    r.count > -1 ? (t.begin = r.stack.index, t.stack = r.stack.token, t.token = r.data.token[r.count]) : (t.begin = -1, t.stack = "global", t.token = c);
    let h = 0, F = 0;
    if (l = l.replace(/\s+/g, ie).replace(Pe, c), F = l.length, !(s > F)) {
      do {
        if (h = s, M(l[h], 32)) {
          do
            h = h - 1;
          while (h > 0 && M(l[h], 32));
          if (h < 3) {
            h = s;
            do
              h = h + 1;
            while (h < F - 1 && M(l[h], 32));
          }
        }
        f.push(l.slice(0, h)), l = `// ${l.slice(h).replace(pt, c)}`, F = l.length;
      } while (s < F);
      h = 0, F = f.length;
      do
        t.token = f[h], r.push(r.data, t, c), t.lines = 2, r.lineOffset = 2, h = h + 1;
      while (h < F);
    }
  }
  do
    O.push(e.chars[u]), u = u + 1;
  while (u < e.end && M(e.chars[u], 10));
  if (u === e.end ? e.chars.push(H) : u = u - 1, l = O.join(c).replace(Pe, c), It.test(l) === !0) {
    let f = H;
    u = u + 1;
    do
      O.push(e.chars[u]), u = u + 1;
    while (u < e.end && (M(e.chars[u - 1], 100) || i(e.chars[u - 1], 100) && O.slice(O.length - 19).join(c) !== "esthetic-ignore-end"));
    N = u;
    do
      ;
    while (N > e.start && i(e.chars[N - 1], 47) && (i(e.chars[N], 42) || i(e.chars[N], 47)));
    if (i(e.chars[N], 42) && (f = "*/"), f !== H || M(e.chars[u], 10))
      do {
        if (O.push(e.chars[u]), f === H && i(e.chars[u + 1], 10))
          break;
        u = u + 1;
      } while (u < e.end && (f === H || f === "*/" && (i(e.chars[u - 1], 42) || i(e.chars[u], 47))));
    return e.chars[u] === H && (u = u - 1), l = O.join(c).replace(Pe, c), [l, u];
  }
  return l === "//" || n === !0 ? [l, u] : (l = l.replace(/(\/\/\s*)/, "// "), s < 1 || u === e.end - 1 && r.data.begin[r.count] < 1 ? [l, u] : (N = u + 1, o(), b(), [l, u]));
}

// src/rules/definitions.ts
var ki = {
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
function Ft(e, s, n) {
  if (s === "html") {
    if (!(e in Le.html.embed))
      return !1;
    let u = Le.html.embed[e];
    if (u.attr.size > 0)
      for (let N of u.attr.values()) {
        if (!n)
          return N;
        if (N.attr.has(n[0]) && N.attr.get(n[0]).value.has(n[1]))
          return N.attr.get(n[0]);
      }
    return u.attr.has(n[0]) ? u.attr.get(n[0]).attr.has(n[1]) ? u.attr.get(n[0]).attr.get(n[1]) : u.attr.get(n[0]) : u;
  } else if (s === "liquid") {
    if (!(e in Le.liquid.embed))
      return !1;
    let u = Le.liquid.embed[e];
    if (u.args.size > 0 && n) {
      let N = n.slice(n.indexOf(e) + e.length).match(/\s*(.*)(?=\s)/)[0];
      for (let [l, O] of u.args) {
        if (l.has(N))
          return O;
        for (let o of l)
          if ($t(o) && o.test(N))
            return O;
      }
    }
    return u;
  }
}

// src/lexical/liquid.ts
function en(e, s) {
  let n = i(e[2], 45) ? 3 : 2, u = e.slice(n), N;
  return s.delimiterTrims === "never" ? N = `{${e[1]}` : s.delimiterTrims === "always" || s.delimiterTrims === "outputs" && i(e[1], 123) || s.delimiterTrims === "tags" && i(e[1], 37) ? N = `{${e[1]}-` : N = e.slice(0, n), s.delimiterPlacement === "preserve" ? N += /^\s*\n/.test(u) ? H : ie : s.delimiterPlacement === "force" ? N += H : s.delimiterPlacement === "inline" || s.delimiterPlacement === "default" || s.delimiterPlacement === "force-multiline" ? N += ie : s.delimiterPlacement === "consistent" && (/^\s*\n/.test(u) ? N += H : N += ie), N + u.trim();
}
function zt(e, s, n = ie) {
  let { delimiterTrims: u, delimiterPlacement: N } = r.rules.liquid, [l, O] = nn(e), o, b = e.slice(l, O), f;
  return u === "never" ? (o = `{${e[1]}`, f = `${e[e.length - 2]}}`) : u === "always" || u === "outputs" && i(e[1], 123) || u === "tags" && i(e[1], 37) ? (o = `{${e[1]}-`, f = `-${e[e.length - 2]}}`) : (o = e.slice(0, l), f = e.slice(O)), s || (s = b.trimStart().split(/\s/)[0] || ""), s === "else" || s === "break" || s === "continue" || s === "increment" || s === "decrement" || s.startsWith("end") ? (o += n, f = n + f) : N === "preserve" ? (o += /^\s*\n/.test(b) ? H : n, f = (/\s*\n\s*$/.test(b) ? H : n) + f) : s === "#" && N === "force-multiline" ? /\n{2,}/g.test(b.trim()) ? (o += H, f = H + f) : (o += n, f = n + f) : N === "force" ? (o += H, f = H + f) : N === "inline" || N === "default" || N === "force-multiline" ? (o += n, f = n + f) : N === "consistent" && (/^\s*\n/.test(b) ? (o += H, f = H + f) : (o += n, f = n + f)), o + b.trim() + f;
}
function tn(e, s, n, {
  wrapFraction: u,
  liquid: {
    forceFilter: N,
    forceArgument: l,
    lineBreakSeparator: O,
    delimiterTrims: o,
    delimiterPlacement: b
  }
}) {
  let [f, t] = nn(e), h, F;
  if (o === "never" ? (h = `{${e[1]}`, F = `${e[e.length - 2]}}`) : o === "always" || o === "outputs" && i(e[1], 123) || o === "tags" && i(e[1], 37) ? (h = `{${e[1]}-`, F = `-${e[e.length - 2]}}`) : o === "preserve" ? (h = e.slice(0, f).join(c), F = e.slice(t).join(c)) : (h = `{${e[1]}`, F = `${e[e.length - 2]}}`), s === "else" || s === "break" || s === "continue" || s === "increment" || s === "decrement" || s.startsWith("end"))
    return h += ie, F = ie + F, h + e.slice(f, t).join(c).trim() + F;
  if (b === "preserve" ? (h += i(e[f], 10) ? H : ie, F = (i(e[t - 1], 10) ? H : ie) + F) : b === "force" ? (h += H, F = H + F) : b === "inline" || b === "default" ? (h += ie, F = ie + F) : b === "consistent" ? i(e[f], 10) ? (h += H, F = H + F) : (h += ie, F = ie + F) : (h += ie, F = ie + F), s === "liquid")
    return h + e.slice(f, t).join(c).trim() + F;
  if (u > 0 && e.length >= u && n.logic.length > 0 && (s === "if" || s === "elsif" || s === "unless" || s === "when")) {
    o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], F = F[0] + `-${e[e.length - 2]}}`), b === "force-multiline" && (h = h.trimEnd() + H, F = H + F.trimStart());
    let m = n.logic.length;
    for (let p = 0; p < m; p++) {
      let S = n.logic[p];
      e[S] = H + e[S], i(e[S - 1], 32) && (e[S - 1] = c);
    }
    return h + e.slice(f, t).join(c).trim() + F;
  }
  let le = n.pipes.length;
  if (le > 0) {
    if (N > 0 && le >= N || N === 0 && u > 0 && e.length > u) {
      o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], F = F[0] + `-${e[e.length - 2]}}`), b === "force-multiline" && (h = h.trimEnd() + H, F = H + F.trimStart());
      for (let m = 0; m < le; m++) {
        let p = n.pipes[m];
        if (Te(e[p - 1]) && (e[p - 1] = c), e[p] = H + e[p], m === 0) {
          let S = p - 1;
          if (Te(e[S - 1]))
            do
              e[S--] = c;
            while (Te(e[S]));
        }
        if (n.fargs[m] && (l > 0 && n.fargs[m].length >= l || l === 0 && u > 0 && e.slice(
          n.fargs[m][0],
          n.fargs[m][n.fargs[m].length - 1]
        ).length > u)) {
          let S = n.fargs[m].length;
          for (let D = 0; D < S; D++) {
            let I = n.fargs[m][D];
            O === "after" ? (Te(e[I + 1]) && Te(e[I + 2]) && (e[I + 1] = c), e[i(e[I - 1], 44) ? I - 1 : I] = D === 0 ? H + "  " : rt + H + " ") : O === "before" ? (Te(e[I + 1]) && Te(e[I + 2]) && (e[I + 1] = c), i(e[I - 1], 44) ? e[I - 1] = D === 0 ? "  " + H : H + "  " + rt : e[I] = D === 0 ? H + "  " : H + "  " + rt) : e[I] = H + "  " + e[I];
          }
        }
      }
    }
    return h + e.slice(f, t).join(c).trim() + F;
  }
  if (n.targs.length >= l) {
    o === "multiline" && (h = `{${e[1]}-` + h[h.length - 1], F = F[0] + `-${e[e.length - 2]}}`);
    for (let m = 0; m < n.targs.length; m++) {
      let p = n.targs[m];
      if (O === "after") {
        let S = p;
        for (; Te(e[S--]); )
          e[S] = c;
        Te(e[p + 1]) && (e[p + 1] = c), Te(e[p - 1]) && (e[p - 1] = c), e[p] = i(e[p], 44) ? rt + H : H;
      } else
        O === "before" && (i(e[p - 1], 44) ? e[p - 1] = m === 0 ? H + rt : H + rt : e[p] = m === 0 ? H + rt : H + rt);
    }
  }
  return h + e.slice(f, t).join(c).trim() + F;
}
function nn(e) {
  return [
    i(e[2], 45) ? 3 : 2,
    i(e[e.length - 3], 45) ? e.length - 3 : e.length - 2
  ];
}
function sn(e, s = !0) {
  return s ? new RegExp(`{%-?\\s*${e}\\s*-?%}`) : new RegExp(`{%-?\\s*${e}`);
}
function rn(e) {
  let s = e.indexOf("{");
  return i(e[s + 1], 123);
}
function Gt(e) {
  let s = e.indexOf("{");
  if (i(e[s + 1], 37)) {
    let n;
    return n = e.slice(s + (i(e[s + 2], 45) ? 3 : 2)).trimStart(), n = n.slice(0, n.search(/[\s=|!<>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : Le.liquid.else.has(n);
  }
  return !1;
}
function on(e) {
  let s = e.indexOf("=");
  return s > -1 && (i(e[s + 1], 34) || i(e[s + 1], 39)) ? /{%-?\s*end[a-z]+/.test(e.slice(s, e.lastIndexOf(e[s + 1]))) : !1;
}
function yi(e) {
  return gt(e) ? /{%-?\s*end\w+/.test(e) : !1;
}
function gt(e, s = !1) {
  let n;
  if (s)
    return i(e[0], 123) && i(e[1], 37) && i(e[e.length - 2], 37) && i(e[e.length - 1], 125) ? (n = e.slice(i(e[2], 45) ? 3 : 2).trimStart(), i(n, 34) || i(n, 39) ? !1 : (n = n.slice(0, n.search(/[\s=|!<"'>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : Le.liquid.tags.has(n))) : !1;
  let u = e.indexOf("{");
  if (u === -1)
    return !1;
  do {
    if (i(e[u + 1], 37))
      return n = e.slice(u + (i(e[u + 2], 45) ? 3 : 2)).trimStart(), n = n.slice(0, n.search(/[\s=|!<>,.[]|-?[%}]}/)), n.startsWith("end") ? !1 : Le.liquid.tags.has(n);
    u = e.indexOf("{", u + 1);
  } while (u > -1);
  return !1;
}
function Pt(e) {
  let s = e;
  Array.isArray(e) && (s = e.join(c));
  let n = s.indexOf("{");
  return i(s[n + 1], 37) ? i(s[n + 2], 45) ? s.slice(n + 3).trimStart().startsWith("end") : s.slice(n + 2).trimStart().startsWith("end") : !1;
}
function Vt(e, s) {
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
function an(e) {
  let { data: s, rules: n } = r, u = e || r.source, N = r.language === "jsx" || r.language === "tsx", l = new Set(n.liquid.ignoreTagList), O = Ne(n.markup.attributeSort) ? n.markup.attributeSort.length : -1, o = Ne(u) ? u : u.split(c), b = o.length, f = Fe(null);
  f.start = -1, f.tname = [], f.index = [];
  let t = 0, h, F = !1; r.language; let m = 0;
  function p(j) {
    let y = Fe(null);
    return y.lexer = "markup", y.lines = r.lineOffset, y.stack = r.stack.token !== "global" ? r.stack.token : "global", y.begin = r.stack.index, y.token = c, y.types = c, y.ender = -1, j ? dt(y, j) : y;
  }
  function S(j, y = c, q) {
    if (y === c && q === void 0)
      r.push(s, j, c);
    else if (tt(y))
      dt(j, y), r.push(s, j, c);
    else if (Ne(y))
      for (let G of y)
        dt(j, G), r.push(s, j, c);
    else
      q ? (dt(j, q), r.push(s, j, y)) : console.log("isssue");
  }
  function D(j, y = null) {
    return r.language !== "html" && r.language !== "liquid" && N === !1 || /(?:{[=#/]|%[>\]])|\}%[>\]]/.test(j) || !Vt(j, 3) ? j : zt(j, y);
  }
  function I(j) {
    let y = j;
    do
      y = y - 1;
    while (i(o[y], 92));
    return y = j - y, y % 2 === 1;
  }
  function d(j) {
    return n.correct === !1 || i(j[j.length - 2], 47) ? j : /\/\s+>$/.test(j) ? `${j.slice(0, j.lastIndexOf("/"))}${n.markup.selfCloseSpace ? "/>" : " />"}` : `${j.slice(0, -1)}${n.markup.selfCloseSpace ? "/>" : " />"}`;
  }
  function a(j) {
    let y = o.slice(o.lastIndexOf(H, j) + 1, j);
    return Te(y[0]) ? (y = y.join(c), y.trim() === c ? y : c) : c;
  }
  function g(j, y = !0) {
    let q = j.indexOf("=");
    if (q > 0) {
      let G = j.indexOf(Be);
      if (q < G && G > 0)
        return y ? [j.slice(0, q), j.slice(q + 1)] : [j.slice(0, q), j.slice(q + 2, -1)];
      let B = j.indexOf($e);
      if (q < B && B > 0)
        return y ? [j.slice(0, q), j.slice(q + 1)] : [j.slice(0, q), j.slice(q + 2, -1)];
    }
    return [j, c];
  }
  function W(j) {
    let y = p(), q = c, G = c, B = c, V = c, ke = c, we = !1, ae = !1, L = 0, ye = !1, me = !1, te = !1, ce = !1, J = [];
    function P() {
      return A();
    }
    function T() {
      let R = u.indexOf("capture", t);
      if (o[R - 3] === "e" && o[R - 2] === "n" && o[R - 1] === "d")
        R = o.indexOf("}", R) + 1, y.types = B = "liquid_capture", y.token = q + u.slice(t, R), r.lineNumber = kt(q, r.lineNumber), S(y), t = R;
      else {
        let E = u.indexOf("endcapture", R + 7) + 9;
        if (E > -1 && /[a-z]/.test(o[E + 1]) === !1)
          return R = o.indexOf("}", E) + 1, q = q + u.slice(t, R), r.lineNumber = kt(q, r.lineNumber), t = R, T();
        Ie(114, q, V);
      }
    }
    function oe() {
      s.types[y.begin] === "start" && s.types[s.begin[y.begin]] === "liquid_start" && B === "liquid_end" ? (s.types[y.begin] = "singleton", delete r.pairs[r.stack.index]) : s.types[r.count] === "liquid_start" && B === "end" && (y.types = "singleton", delete r.pairs[r.stack.index], r.stack.pop());
    }
    function se() {
      if (y.types.indexOf("liquid") < 0)
        return oe(), P();
      if (y.token === c && (y.token = q), i(q[0], 123) && i(q[1], 37))
        if (Le.liquid.else.has(V))
          y.types = B = V === "when" ? "liquid_when" : "liquid_else";
        else if (Le.liquid.tags.has(V)) {
          if (F === !0)
            y.types = B = "liquid_start";
          else if (V === "capture")
            return t = t + 1, T();
          return y.types = B = V === "case" ? "liquid_case_start" : "liquid_start", A();
        } else if (V.startsWith("end")) {
          let R = V.slice(3);
          if (Le.liquid.tags.has(R))
            y.types = B = R === "case" ? "liquid_case_end" : "liquid_end";
          else {
            y.stack = R, y.types = B = "liquid_end";
            let E = 0;
            do {
              if (s.types[E] === "liquid" && s.stack[E] === R) {
                s.types[E] = "liquid_start";
                for (let z = E, Y = s.stack.length; z < Y; z++)
                  r.stack.push([s.token[z], z]);
                break;
              }
              E = s.stack.indexOf(R, E + 1);
            } while (E > -1);
          }
          oe();
        } else
          y.stack = V;
      return n.liquid.quoteConvert === "double" ? y.token = q = y.token.replace(/'[^"]*?'/g, bi(Be)) : n.liquid.quoteConvert === "single" && (y.token = q = y.token.replace(/"[^']*?"/g, bi($e))), P();
    }
    function ee() {
      let R = q.indexOf("liquid") + 6, E = c, z = c, Y = 1;
      S(y, {
        token: en(q.slice(0, R), n.liquid),
        types: "liquid_start",
        stack: "liquid"
      });
      let Z = q.slice(R).split(H), fe = Z.pop().trim(), he = i(fe[fe.length - 3], 45) ? fe.length - 3 : fe.length - 2, xe = fe.slice(0, he), de = fe.slice(he);
      xe.length !== 0 && Z.push(xe), R = 0;
      do
        E = Z[R].trim(), z = E.split(/\s/)[0], z.startsWith("end") ? (y.token = E, y.types = z === "endcase" ? "liquid_case_end" : "liquid_end", y.lines = Y <= 1 ? 2 : Y, S(y), Y = 1) : z.startsWith("#") ? (y.token = E, y.types = "liquid", y.lines = Y <= 1 ? 2 : Y, S(y), Y = 1) : z.startsWith("comment") ? (y.token = E, y.types = "liquid_start", y.lines = Y, S(y), Y = 1) : Le.liquid.tags.has(z) ? (y.token = E, y.types = z === "case" ? "liquid_case_start" : "liquid_start", y.lines = Y, S(y), Y = 1) : Le.liquid.else.has(z) ? (y.token = E, y.types = z === "when" ? "liquid_when" : "liquid_else", y.lines = Y, S(y), Y = 1) : Le.liquid.singleton.has(z) ? (y.token = E, y.types = "liquid", y.lines = Y <= 1 ? 2 : Y, S(y), Y = 1) : E.trim().length > 0 && (y.token = E, y.types = "content", y.lines = Y, S(y), Y = 1), R = R + 1, Y = Y + 1;
      while (R < Z.length);
      n.liquid.delimiterPlacement === "default" || n.liquid.delimiterPlacement === "force-multiline" || n.liquid.delimiterPlacement === "preserve" && /\n-?%}$/.test(q) || n.liquid.delimiterPlacement === "consistent" && /^{%-?\n/.test(q) ? S(y, {
        token: de,
        types: "liquid_end",
        lines: 2
      }) : S(y, {
        token: de,
        types: "liquid_end",
        lines: 0
      });
    }
    function _() {
      if (V === "svg" && (f.start = r.count + 1, y.stack = V), Le.svg.tags.has(V) && f.start > -1) {
        if (y.types === "start")
          y.types = "singleton", y.stack = V, f.tname.push(V), f.index.push(r.count + 1);
        else if (y.types === "end") {
          let R = f.tname.indexOf(V), E = f.tname.lastIndexOf(V), z;
          if (R > -1)
            for (E === R ? (z = f.index[E], s.types[f.index[E]] = "start", f.tname.splice(E, 1), f.index.splice(E, 1)) : s.begin[r.count] === f.index[R] ? (z = s.begin[r.count], s.types[s.begin[r.count]] = "start", f.tname.splice(R, 1), f.index.splice(R, 1)) : (z = f.index[E], s.types[f.index[E]] = "start"); z < s.stack.length; z++)
              s.stack[z] = V, r.stack.push([V, z]);
          V === "svg" && (f.start = -1);
        }
      }
      return se();
    }
    function Q() {
      return ce && ae === !1 && B !== "xml" && (Le.html.voids.has(V) ? (y.types = B = "singleton", M(q[q.length - 2], 47) && (y.token = d(q))) : i(q[q.length - 2], 47) && i(q[q.length - 1], 62) ? y.types = B = "singleton" : y.types = B = "start"), _();
    }
    function k(R, E) {
      let z = t, Y = -1, Z = 0, fe;
      do {
        if ((V === "script" || V === "style") && i(o[t], 47) && (i(o[t + 1], 47) ? t = o.indexOf(H, t + 1) + 1 : i(o[t + 1], 42) && (t = u.indexOf("*/", t + 1) + 2)), i(o[t], 34) || i(o[t], 39) || i(o[t], 96)) {
          for (Y = t + 1, fe = o[t]; fe !== o[Y] && Y < b && (i(o[Y], 92) && (Y = Y + 1), fe !== o[Y]); )
            Y = Y + 1;
          if (Y !== b)
            t = Y + 1, Y = -1;
          else
            return Ie(101, u.slice(t));
        }
        if (E === 3) {
          if (i(o[t - 2], 123) && i(o[t - 1], 37)) {
            for (i(o[t], 45) && (t = t + 1), Y = t; ue(o[Y]) && (Y = Y + 1, !at(o[Y])); )
              ;
            if (fe = u.slice(Y, Y + R.length), fe.startsWith(V)) {
              t = Y + V.length, Z = Z + 1, Y = -1;
              continue;
            } else if (fe === R)
              if (Z === 0) {
                if (Y = o.indexOf("}", Y + R.length) + 1, Y === -1)
                  return Ie(113, fe, V);
                break;
              } else
                Z = Z - 1, t = Y + R.length;
          }
        } else if (u.slice(t, t + R.length) === R) {
          q = u.slice(z, t).replace(Je, c).replace(Ye, c);
          break;
        }
        t = t + 1;
      } while (t < b);
      if (E === 3) {
        let he = o.lastIndexOf(H, r.iterator) + 1;
        y.types = B = "ignore", y.token = q = u.slice(he, Y), S(y), t = Y - 1, J = [];
      } else
        return r.lineNumber = kt(q, r.lineNumber), q.trim() !== c && (y.token = q, y.lines = r.lineOffset, y.types = "ignore", S(y)), y.types = B = "end", y.token = q = R, t = t + R.length - 1, A();
    }
    function K(R, E) {
      let z = o.lastIndexOf(_i(s.token[r.count]), r.iterator) + 1;
      if (E === 3 || E === 6) {
        let Y = -1, Z = 0, fe;
        do {
          if ((V === "script" || V === "style") && i(o[t], 47) && (i(o[t + 1], 47) ? t = o.indexOf(H, t + 1) + 1 : i(o[t + 1], 42) && (t = u.indexOf("*/", t + 1) + 2)), i(o[t], 34) || i(o[t], 39) || i(o[t], 96)) {
            if (Y = o.indexOf(o[t], t + 1), Y > -1) {
              r.lineNumber = kt(o.slice(t, Y), r.lineNumber), t = Y + 1, Y = -1;
              continue;
            }
            return Ie(101, u.slice(t));
          }
          if (E === 3) {
            if (i(o[t - 2], 123) && i(o[t - 1], 37)) {
              if (i(o[t], 45) && (t = t + 1), fe = u.slice(t).trimStart(), fe.startsWith(V)) {
                t = t + V.length, Z = Z + 1, Y = -1;
                continue;
              } else if (fe.startsWith(R))
                if (Z === 0) {
                  if (Y = o.indexOf("}", t + R.length) + 1, Y === -1)
                    return Ie(113, fe, V);
                  t = Y;
                  break;
                } else
                  Z = Z - 1, t = t + R.length;
            }
          } else if (i(o[t - 1], 60) && u.slice(t, t + V.length) === V)
            Z = Z + 1;
          else if (i(o[t], 60) && i(o[t + 1], 47) && u.slice(t, t + R.length) === R)
            if (Z === 0) {
              t = t + R.length - 1;
              break;
            } else
              Z = Z - 1;
          t = t + 1;
        } while (t < b);
        if (Z > 0)
          return E === 3 ? Ie(114, q, V) : Ie(105, q, V);
        y.types = "ignore", y.token = q = u.slice(z, t + 1), r.lineNumber = kt(q, r.lineNumber);
      } else
        y.types = "ignore", y.token = q = u.slice(z, t + 1);
      J = [], ae = !1, S(y);
    }
    function x() {
      return B === "script_preserve" || B === "json_preserve" || B === "style_preserve" ? (y.types = "start", y.stack = B === "style_preserve" ? "style" : "script", A(), t = t + 1, J = [], k(`</${V}>`, 2)) : s.types[r.count] === "ignore_next" ? B === "liquid_start" ? K(`end${V}`, 3) : B === "liquid" ? Le.liquid.tags.has(V) ? (B = "liquid_start", K(`end${V}`, 3)) : K(j, j === "}}" ? 1 : 4) : Le.html.voids.has(V) ? K(j, 7) : i(j, 62) ? K(`</${V}>`, 6) : (ae = !1, te = !1, Q()) : l.has(V) ? k(`end${V}`, 3) : Q();
    }
    function w() {
      if (ae || i(q, 60) && i(q[1], 47))
        return x();
      let R = J.length - 1;
      if (i(q, 60))
        if (R > -1)
          do {
            let E = Ft(V, "html", g(J[R][0], !1));
            if (E !== !1)
              if (E.language === "json" && n.markup.ignoreJSON) {
                B = "json_preserve", ae = !0;
                break;
              } else if (E.language === "javascript" && n.markup.ignoreJS) {
                B = "script_preserve", ae = !0;
                break;
              } else if (E.language === "css" && n.markup.ignoreCSS) {
                B = "style_preserve", ae = !0;
                break;
              } else {
                h = E.language, B = "start", F = !0, ae = !1;
                break;
              }
            R = R - 1;
          } while (R > -1);
        else {
          let E = Ft(V, "html");
          E !== !1 && (E.language === "json" && n.markup.ignoreJSON ? (B = "json_preserve", ae = !0) : E.language === "javascript" && n.markup.ignoreJS ? (B = "script_preserve", ae = !0) : E.language === "css" && n.markup.ignoreCSS ? (B = "style_preserve", ae = !0) : (h = E.language, B = "start", F = !0, ae = !1));
        }
      else if (gt(q, !0)) {
        let E = Ft(V, "liquid", q);
        E !== !1 && (l.has(V) ? (ae = !0, te = !1) : (B = "liquid_start", h = E.language, F = !0));
      }
      return x();
    }
    function A(R = !1) {
      if (R !== null && S(y), i(o[t], 62) && i(o[t + 1], 47))
        return;
      let E = r.count, z = V.replace(/\/$/, c), Y = n.markup.quoteConvert, Z = 0, fe = 0, he = 0, xe = c, de = c, X = J.length;
      function Se() {
        r.attributes.has(E) && Z + 1 === X && ai(y.token, 62) && (y.token = y.token + ">");
        let We = y.types.indexOf("liquid_attribute") > -1;
        if (ae === !0 || Y === "none" || y.types.indexOf("attribute") < 0 || We === !1 && Y === "single" && y.token.indexOf(Be) < 0 || We === !1 && Y === "double" && y.token.indexOf($e) < 0)
          S(y);
        else {
          let Ae = 0, Ce = !1, re = y.token.split(c), Me = y.token.indexOf("="), Oe = re.length - 1;
          if (M(re[Me + 1], 34) && M(re[re.length - 1], 34) && Y === "single" && We === !1)
            S(y);
          else if (M(re[Me + 1], 39) && M(re[re.length - 1], 39) && Y === "double" && We === !1)
            S(y);
          else {
            if (Ae = Me + 2, We === !1 && (Y === "double" ? (y.token.slice(Me + 2, Oe).indexOf(Be) > -1 && (Ce = !0), re[Me + 1] = Be, re[re.length - 1] = Be) : Y === "single" && (y.token.slice(Me + 2, Oe).indexOf($e) > -1 && (Ce = !0), re[Me + 1] = $e, re[re.length - 1] = $e)), Ce === !0 || We === !0) {
              We = !1;
              do
                i(re[Ae - 1], 123) && (i(re[Ae], 37) || i(re[Ae], 123)) ? We = !0 : i(re[Ae], 125) && (i(re[Ae - 1], 37) || i(re[Ae - 1], 125)) && (We = !1), We === !0 ? i(re[Ae], 34) && Y === "double" ? re[Ae] = $e : i(re[Ae], 39) && Y === "single" && (re[Ae] = Be) : i(re[Ae], 39) && Y === "double" ? re[Ae] = Be : i(re[Ae], 34) && Y === "single" && (re[Ae] = $e), Ae = Ae + 1;
              while (Ae < Oe);
            }
            y.token = re.join(c), S(y);
          }
        }
      }
      function Ee() {
        if (!(!N && !ye && !me))
          return;
        if (O === 0) {
          J = fi(J, c, !1);
          return;
        }
        let We = [];
        he = 0, fe = 0, X = J.length;
        do {
          fe = 0;
          do {
            if (J.length > 0 && (xe = J[fe][0].split("=")[0], n.markup.attributeSort[he] === xe)) {
              We.push(J[fe]), J.splice(fe, 1), X = X - 1;
              break;
            }
            fe = fe + 1;
          } while (fe < X);
          he = he + 1;
        } while (he < O);
        J = fi(J, c, !1), J = We.concat(J), X = J.length;
      }
      function be() {
        S(y, "jsx_attribute", {
          token: `${xe}={`,
          types: "jsx_attribute_start"
        }), r.external("jsx", de.slice(1, de.length - 1)), y.begin = r.count, /\s\}$/.test(de) ? (de = de.slice(0, de.length - 1), de = Pe.exec(de)[0], y.lines = de.indexOf(`
`) < 0 ? 1 : de.split(`
`).length) : y.lines = 0, y.begin = r.stack.index, y.stack = r.stack.token, y.token = "}", y.types = "jsx_attribute_end", Se();
      }
      function Ze() {
        if (yi(J[Z][0]))
          y.types = "liquid_attribute_chain", y.token = J[Z][0];
        else if (Pt(J[Z][0]))
          y.token = J[Z][0], y.types = "liquid_attribute_end", y.ender = y.begin;
        else {
          if (gt(J[Z][0], !0))
            return y.types = "liquid_attribute_start", y.begin = r.count, y.token = J[Z][0], Se(), !0;
          Gt(J[Z][0]) ? (y.types = "liquid_attribute_else", y.token = J[Z][0]) : (y.types = "attribute", y.token = J[Z][0]);
        }
        return Se(), !1;
      }
      if (J.length < 1)
        return R !== !0 ? void 0 : ne();
      if (i(J[J.length - 1][0], 47) && (J.pop(), q = q.replace(/>$/, "/>")), fe = J.length, he = 1, he < fe)
        do
          xe = J[he - 1][0], i(xe[xe.length - 1], 61) && J[he][0].indexOf("=") < 0 && (J[he - 1][0] = xe + J[he][0], J.splice(he, 1), fe = fe - 1, he = he - 1), he = he + 1;
        while (he < fe);
      if ((O > 0 || n.markup.attributeSort === !0) && Ee(), y.begin = E, y.stack = z, y.types = "attribute", Z < X)
        do {
          if (J[Z] === void 0)
            break;
          if (y.lines = J[Z][1], J[Z][0] = J[Z][0].replace(Pe, c), N === !0 && /^\/[/*]/.test(J[Z][0])) {
            y.types = "comment_attribute", y.token = J[Z][0], Se(), Z = Z + 1;
            continue;
          }
          if (J[Z][1] <= 1 && yi(J[Z][0]) && !on(J[Z][0])) {
            y.types = "liquid_attribute_chain", y.token = J[Z][0], Se(), Z = Z + 1;
            continue;
          }
          if (fe = J[Z][0].indexOf("="), he = J[Z][0].indexOf(Be), fe < 0)
            Pt(J[Z][0]) ? (y.token = J[Z][0], y.types = "liquid_attribute_end", y.ender = y.begin) : gt(J[Z][0], !0) ? (y.types = "liquid_attribute_start", y.begin = r.count, y.token = J[Z][0]) : Gt(J[Z][0]) ? (y.types = "liquid_attribute_else", y.token = J[Z][0]) : rn(J[Z][0]) ? (y.types = "liquid_attribute", y.token = J[Z][0]) : i(J[Z][0], 35) || i(J[Z][0], 91) || i(J[Z][0], 123) || i(J[Z][0], 40) || N === !0 ? y.token = J[Z][0] : (y.types = "liquid_attribute", y.token = n.markup.attributeCasing === "preserve" ? J[Z][0] : J[Z][0].toLowerCase()), Se();
          else if (Vt(J[Z][0], 6))
            Ze();
          else {
            xe = J[Z][0].slice(0, fe), n.markup.lineBreakValue === "force-preserve" || n.markup.lineBreakValue === "force-indent" || n.markup.lineBreakValue === "force-align" ? de = J[Z][0][fe + 1] + H + J[Z][0].slice(fe + 2, -1).trim() + H + J[Z][0][J[Z][0].length - 1] : de = J[Z][0].slice(fe + 1), n.markup.attributeCasing === "lowercase-name" ? (xe = xe.toLowerCase(), J[Z][0] = xe + "=" + de) : n.markup.attributeCasing === "lowercase-value" ? (de = de.toLowerCase(), J[Z][0] = xe + "=" + de) : (n.markup.attributeCasing === "lowercase" && (xe = xe.toLowerCase(), de = de.toLowerCase()), J[Z][0] = xe + "=" + de), n.correct === !0 && M(de, 60) && M(de, 123) && M(de, 61) && M(de, 34) && M(de, 39) && (de = Be + de + Be), N === !0 && /^\s*{/.test(de) ? (be(), y.types = "attribute", y.begin = E, y.stack = z) : Vt(xe, 6) ? Ze() : (y.types = "attribute", y.token = J[Z][0], Se());
          }
          Z = Z + 1;
        } while (Z < X);
      if (!R)
        return ne();
    }
    function v(R) {
      r.iterator = t;
      let E = xt(o, {
        end: b,
        lexer: "markup",
        begin: ke,
        start: t,
        ender: j
      });
      if (E[0] === c)
        return Ie(
          107,
          o.slice(r.iterator, r.iterator + 5).join(c),
          "comment"
        );
      if (q = E[0], t = E[1], ji.test(q))
        S(y, {
          token: q,
          types: "ignore_next"
        });
      else if (Bi.test(q))
        S(y, {
          token: q,
          types: "ignore"
        });
      else {
        if (q.startsWith(ke) && R === !1) {
          let z = q.indexOf("%}", 2) + 2, Y = q.lastIndexOf("{%");
          q = D(q.slice(0, z), V) + q.slice(z, Y) + D(q.slice(Y), V);
        }
        return y.token = q, y.types = "comment", w();
      }
    }
    function $(R) {
      let E = t, z = t + R;
      do {
        if (i(o[z], 62))
          return t = z, u.slice(E, z + 1);
        z = z + 1;
      } while (z < b);
    }
    function ge() {
      if (j === "---")
        ke = "---", B = "ignore", te = !0;
      else if (i(o[t], 60))
        if (i(o[t + 1], 123) && (i(o[t + 2], 123) || i(o[t + 2], 37))) {
          y.token = $(3), y.types = "liquid_bad_start", S(y);
          return;
        } else if (i(o[t + 1], 47))
          if (i(o[t + 2], 123) && (i(o[t + 3], 123) || i(o[t + 3], 37))) {
            y.token = $(3), y.types = "liquid_bad_end", S(y);
            return;
          } else
            B = "end", j = ">";
        else if (i(o[t + 1], 33))
          if ((i(o[t + 2], 100) || i(o[t + 2], 68)) && (i(o[t + 3], 111) || i(o[t + 3], 79)) && (i(o[t + 4], 99) || i(o[t + 4], 67)) && (i(o[t + 5], 116) || i(o[t + 5], 84)) && (i(o[t + 6], 121) || i(o[t + 6], 89)) && (i(o[t + 7], 112) || i(o[t + 7], 80)) && (i(o[t + 8], 101) || i(o[t + 8], 69)))
            j = ">", B = "doctype", te = !0;
          else if (i(o[t + 2], 45))
            if (i(o[t + 3], 45))
              j = "-->", ke = "<!--", B = "comment";
            else
              return Ie(
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
            i(o[t + 8], 91) && (j = "]]>", B = "cdata", te = !0);
        else
          i(o[t + 1], 63) ? (j = "?>", o[t + 2].charCodeAt(0) === 120 && // x
          o[t + 3].charCodeAt(0) === 109 && // m
          o[t + 4].charCodeAt(0) === 109 ? (B = "xml", ce = !0) : (te = !0, B = "liquid")) : i(o[t + 1], 112) && //   p
          i(o[t + 2], 114) && //   r
          i(o[t + 3], 101) && // e
          (i(o[t + 4], 62) || ue(o[t + 4])) ? (j = "</pre>", B = "ignore", te = !0) : (ce = !0, j = ">");
      else if (i(o[t], 123)) {
        if (N) {
          F = !0, we = !0, r.stack.push(["script", r.count]), S(y, { token: "{", types: "script_start" });
          return;
        }
        if (i(o[t + 1], 123))
          te = !0, j = "}}", B = "liquid";
        else if (i(o[t + 1], 37)) {
          te = !0, j = "%}", B = "liquid", G = "}";
          let R = u.indexOf(j, t + 3);
          if (R === -1)
            return Ie(113, u.slice(t));
          if (i(o[t + 2], 45) ? (ke = "{%-", V = si.exec(u.slice(t + 3, R).trimStart())[0]) : (ke = "{%", V = si.exec(u.slice(t + 2, R).trimStart())[0]), V === "comment") {
            B = "comment";
            let E = u.indexOf("endcomment", R + 2);
            return E === -1 ? Ie(114, u.slice(t, R + 2), "comment") : (ke = u.slice(t, R + 2), j = u.slice(u.lastIndexOf("{", E), u.indexOf("}", E + 10) + 1), v());
          } else if (l.size > 0 && l.has(V) && (r.iterator = t, ae = !0), i(V, 35))
            return B = "comment", v(!0);
        } else
          te = !0, j = o[t + 1] + "}", B = "liquid";
      }
      return te !== !0 && n.markup.preserveAttribute === !0 && (te = !0), r.count > -1 && s.types[r.count] === "ignore_next" && (ae = !0, r.iterator = t), G || (G = j.charAt(j.length - 1)), we ? w() : B === "comment" ? v() : t < b ? pe() : w();
    }
    function ne() {
      if (n.wrap > 0 && N === !0) {
        let R = 0, E = r.count, z = 0;
        if (s.types[E].indexOf("attribute") > -1) {
          do
            R = R + s.token[E].length + 1, E = E - 1;
          while (s.lexer[E] !== "markup" || s.types[E].indexOf("attribute") > -1);
          s.lines[E] === 1 && (R = R + s.token[E].length + 1);
        } else
          s.lines[E] === 1 && (R = s.token[E].length + 1);
        if (z = E - 1, R > 0 && s.types[z] !== "script_end")
          if (s.types[z].indexOf("attribute") > -1) {
            do
              R = R + s.token[z].length + 1, z = z - 1;
            while (s.lexer[z] !== "markup" || s.types[z].indexOf("attribute") > -1);
            s.lines[z] === 1 && (R = R + s.token[z].length + 1);
          } else
            s.lines[z] === 1 && (R = s.token[z].length + 1);
      }
      r.lineOffset = 0;
    }
    function pe() {
      let R = [], E = Fe(null);
      E.pipes = [], E.fargs = [], E.targs = [], E.logic = [];
      let z = 0, Y = 0, Z = c, fe = 0, he = 0, xe = 0, de = 0, X = c, Se = c, Ee = 0, be = !1, Ze = !1, st = !1, We = !1, Ae = !1, Ce = NaN, re = [];
      function Me() {
        if (Qe(R, 44)) {
          if (V === "when" && E.logic.push(R.length - 1), n.correct === !0 && /^,\s*-?[%}]}/.test(u.slice(t)))
            return R.pop(), t = t + 1, !0;
          Ce === 44 ? E.fargs[E.fargs.length - 1].push(R.length - 1) : Ce === 58 ? (E.fargs[E.fargs.length - 1][0] += 1, E.fargs[E.fargs.length - 1].push(R.length - 1), Ce = 44) : E.targs.push(R.length - 1);
        } else
          Qe(R, 124) ? (E.pipes.push(R.length - 1), Ce = 124) : Qe(R, 58) && Ce === 124 && (E.fargs.push([R.length - 1]), Ce = 58);
        if (i(o[t], 10) && V !== "liquid" && Ze === !1 && R.length > 3 && !(i(o[t + 1], 45) && i(o[t + 2], 37) && i(o[t + 3], 125) || i(o[t + 1], 37) && i(o[t + 2], 125)) ? R.pop() : n.liquid.normalizeSpacing === !0 && (Te(o[t]) === !1 && (mt(R, 39) || mt(R, 34)) ? M(o[t], 44) && M(o[t], 93) ? (R.splice(R.length - 1, 1, ie, o[t]), Te(o[t + 1]) === !1 && M(o[t + 1], 61) && M(o[t + 1], 125) && R.push(ie)) : at(o[t + 1]) && M(o[t + 1], 91) && M(o[t + 1], 46) && R.push(ie) : V !== "liquid" && ue(o[t + 1]) && ue(o[t]) && i(o[t - 1], 93) || i(o[t], 32) && i(o[t + 1], 32) ? R.pop() : R.length > 3 && i(o[t + 1], 10) && M(o[t + 2], 32) ? R.push(ie) : i(o[t], 32) && i(o[t + 1], 32) ? R.pop() : mt(R, 93) && Te(R[R.length - 1]) && M(o[t], 32) && M(o[t], 44) && M(o[t], 46) ? R.splice(R.length - 1, 1, ie, o[t]) : Te(R[R.length - 2]) && Te(o[t]) && Te(o[t + 1]) ? R.pop() : i(o[t], 44) && at(o[t + 1]) ? R.push(ie) : i(o[t], 58) && at(o[t + 1]) ? R.push(ie) : i(o[t], 32) && mt(R, 46) || Hi(R, 91, 32) ? R.pop() : M(o[t], 32) && i(o[t + 1], 124) ? R.push(ie) : i(o[t], 124) && M(o[t + 1], 32) ? R.push(ie) : i(o[t], 32) && (i(o[t + 1], 46) || i(o[t + 1], 93) || i(o[t + 1], 91) || i(o[t + 1], 58) || i(o[t + 1], 44)) ? R.pop() : V === "assign" && (M(o[t], 32) && i(o[t + 1], 61) || i(o[t], 61) && M(o[t + 1], 32)) ? R.push(ie) : (V === "if" || V === "unless" || V === "elsif" || V === "liquid") && ((M(o[t], 32) || i(o[t], 10)) && (i(o[t + 1], 33) || i(o[t + 1], 60) || i(o[t + 1], 62) || i(o[t + 1], 61) && i(o[t + 2], 61)) ? R.push(ie) : i(o[t], 61) && (M(o[t + 1], 32) || i(o[t + 1], 10)) && (i(o[t - 1], 61) || i(o[t - 1], 60) || i(o[t - 1], 62) || i(o[t - 1], 33)) ? R.push(ie) : M(o[t + 1], 32) && M(o[t + 1], 61) && (i(o[t], 60) || i(o[t], 62)) && R.push(ie))), ue(o[t - 1])) {
          if (Z = u.slice(t), V === "if" || V === "elsif" || V === "unless") {
            if (ue(o[t + 2]) && Z.startsWith("or"))
              return E.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 2)), t = t + 2, !0;
            if (ue(o[t + 3]) && Z.startsWith("and"))
              return E.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 3)), t = t + 3, !0;
            if (ue(o[t + 8]) && Z.startsWith("contains"))
              return E.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 8)), t = t + 8, !0;
          } else if (V === "when" && ue(o[t + 2]) && Z.startsWith("or"))
            return E.logic.push(R.length - 1), R.pop(), R.push(Z.slice(0, 2)), t = t + 2, !0;
        }
        if (i(R[R.length - 1], 44) && i(R[R.length - 2], 44))
          return Ie(
            116,
            R.join(c),
            Ue(R.join(c))
          );
        Ze = !1;
      }
      function Oe(St) {
        let et, ve = c;
        if (St === !0 ? (ve = re.join(c), et = g(ve), X = c, et[0] === "data-esthetic-ignore" && (ae = !0)) : (ve = re.join(c), (N === !1 || N && ai(ve, 125)) && (ve = ve.replace(Xe, ie)), et = g(ve), et[0] === "data-esthetic-ignore" && (ae = !0), N && i(re[0], 123) && i(re[re.length - 1], 125) && (Ee = 0)), i(ve[0], 123) && i(ve[1], 37) && (me = !0), ve = ve.replace(/^\u0020/, c).replace(/\u0020$/, c), re = ve.replace(/\r\n/g, H).split(H), re.length < 1 && (re[0] = re[0].replace(Pe, c)), ve = D(re.join(r.crlf), V), n.markup.stripAttributeLines === !0 && de >= 1 && (de = 1), J.length > 0) {
          let Ve = J.length - 1;
          m === 0 && (i(ve, 61) || i(ve, 45)) && (J[Ve][0] = J[Ve][0] + ve, J[Ve][1] = de, ve = c);
        }
        if (St === !1 && (gt(ve) && (m = m + 1), Pt(ve) && (m = m - 1)), ve !== c && ve !== ie && J.push([ve, de]), J.length > 0) {
          let [Ve] = J[J.length - 1];
          if (Ve.indexOf("=\u201C") > 0)
            return Ie(103, Ve);
          if (Ve.indexOf("=\u201D") > 0)
            return Ie(103, Ve);
        }
        re = [], de = i(o[t], 10) ? 1 : 0;
      }
      if (!r.error) {
        do {
          if (i(o[t], 10) && (de = r.lines(t, de)), ke === "---" && j === "---" && B === "ignore") {
            if (R.push(o[t]), t > 3 && i(o[t], 45) && i(o[t - 1], 45) && i(o[t - 2], 45))
              break;
            t = t + 1;
            continue;
          }
          if (te === !0 || ue(o[t]) === !1 && M(X, 125) || i(X, 125)) {
            if (R.push(o[t]), be === !1 && i(o[t - 1], 123) && (i(o[t], 123) || i(o[t], 37)))
              be = !0;
            else if (be === !0 && i(o[t], 125)) {
              if (i(o[t - 1], 125) || i(o[t - 1], 37))
                be = !1;
              else if ((i(o[t - 2], 125) || i(o[t - 2], 37)) && ue(o[t - 1]))
                return Ie(113, R.join(c));
            } else if (be === !0 && i(o[t], 10) && (n.liquid.delimiterPlacement === "preserve" || n.liquid.delimiterPlacement === "consistent")) {
              if (i(o[t - 1], 45) && i(o[t - 3], 123) && (i(o[t - 2], 123) || i(o[t - 2], 37)) || i(o[t - 2], 123) && (i(o[t - 1], 123) || i(o[t - 1], 37)))
                Ze = !0;
              else if (/^\s*-?[%}]}/.test(u.slice(t)) === !0) {
                for (; ue(o[t]) === !0; )
                  t = t + 1, i(o[t], 10) && (de = r.lines(t, de));
                R.push(o[t]), Ze = !0;
              }
            }
            if (B === "end" && R.length > 2 && i(R[0], 60) && i(R[1], 47) && (i(R[R.length - 1], 47) || i(R[R.length - 1], 60))) {
              if (n.correct)
                R.pop(), R.push(">");
              else
                return Ie(106, R.join(c));
              break;
            }
            if (i(R[0], 60) && i(R[1], 62) && i(j, 62))
              return S(y, "(empty)", {
                token: "<>",
                types: "start"
              });
            if (i(R[0], 60) && i(R[1], 47) && i(R[2], 62) && i(j, 62))
              return y.token = "</>", y.token = "end", S(y);
          }
          if (B === "cdata" && i(o[t], 62) && i(o[t - 1], 93) && M(o[t - 2], 93))
            return Ie(103, R.join(c));
          if (B === "comment") {
            if (X = c, o[t] === G && R.length > j.length + 1) {
              if (Y = R.length, z = j.length - 1, z > -1)
                do {
                  if (Y = Y - 1, M(R[Y], j.charCodeAt(z)))
                    break;
                  z = z - 1;
                } while (z > -1);
              if (z < 0)
                break;
            }
          } else if (X === c) {
            if (i(R[0], 60) && i(R[1], 33) && B !== "cdata") {
              if (B === "doctype" && i(o[t], 62))
                break;
              if (i(o[t], 91)) {
                if (i(o[t + 1], 60)) {
                  B = "start";
                  break;
                }
                if (ue(o[t + 1]))
                  do
                    t = t + 1, i(o[t], 10) && (de = r.lines(t, de));
                  while (t < b - 1 && ue(o[t + 1]));
                if (i(o[t + 1], 60)) {
                  B = "start";
                  break;
                }
              }
            }
            if (N && (i(o[t], 123) ? Ee = Ee + 1 : i(o[t], 125) && (Ee = Ee - 1)), i(o[t], 60) && ce === !0 && te === !1 && R.length > 1 && />{2,3}/.test(j) === !1) {
              r.error = `Invalid structure detected ${o.slice(t, t + 8).join(c)}`;
              break;
            }
            if (ue(o[t]) === !1 && st === !0 && o[t] !== G) {
              if (L = 0, st = !1, X = Se, R.pop(), t < b)
                do {
                  if (i(o[t], 10) && Ae === !1 && (de = r.lines(t, de)), n.markup.preserveAttribute === !0 ? R.push(o[t]) : re.push(o[t]), (M(X, 34) || M(X, 39)) && (i(o[t - 1], 123) && (i(o[t], 37) || i(o[t], 123)) ? be = !0 : i(o[t], 125) && (i(o[t - 1], 125) || i(o[t - 1], 37)) && (be = !1)), N === !1 && Ae === !1 && be === !0 && n.markup.preserveAttribute === !1)
                    for (; t < b; ) {
                      if (t = t + 1, i(o[t], 10) && (de = r.lines(t, de)), i(re[0], 61) && (i(re[1], 123) || i(re[1], 37)) && (i(re[re.length - 2], 125) || i(re[re.length - 2], 37)) && i(re[re.length - 1], 125)) {
                        be = !1, X = c, Oe(!1);
                        break;
                      }
                      if (i(re[0], 61) && M(re[1], 123)) {
                        be = !1, X = c, Oe(!1);
                        break;
                      }
                      if (re.push(o[t]), i(re[0], 61) && i(o[t + 1], 62)) {
                        be = !1, J[J.length - 1][0] += re.join(c), re = [], X = c;
                        break;
                      }
                      if (M(re[0], 61) && i(o[t], 125) && (i(o[t - 1], 125) || i(o[t - 1], 37))) {
                        be = !1, X = c, Oe(!1);
                        break;
                      }
                    }
                  if (N === !1 && (i(o[t], 60) || i(o[t], 62)) && (X === c || i(X, 62))) {
                    if (X === c && i(o[t], 60))
                      X = ">", fe = 1;
                    else if (i(X, 62)) {
                      if (i(o[t], 60))
                        fe = fe + 1;
                      else if (i(o[t], 62) && (fe = fe - 1, fe === 0)) {
                        X = c, L = 0, Oe(!1);
                        break;
                      }
                    }
                  } else if (X === c) {
                    if (o[t + 1] === G) {
                      (Qe(re, 47) || Qe(re, 63) && B === "xml") && (re.pop(), te === !1 || R.pop(), t = t - 1), re.length > 0 && Oe(!1);
                      break;
                    }
                    if (N === !1 && i(o[t], 123) && i(o[t - 1], 61) ? X = "}" : i(o[t], 34) || i(o[t], 39) ? (X = o[t], Ae === !1 && be === !1 && (Ae = !0), i(o[t - 1], 61) && (i(o[t + 1], 60) || i(o[t + 1], 123) && i(o[t + 2], 37) || ue(o[t + 1]) && M(o[t - 1], 61)) && (L = t)) : i(o[t], 40) ? (X = ")", xe = 1) : N ? (i(o[t - 1], 61) || ue(o[t - 1])) && i(o[t], 123) ? (X = "}", he = 1) : i(o[t], 47) && (i(o[t + 1], 42) ? X = "*/" : i(o[t + 1], 47) && (X = H)) : i(R[0], 123) && i(o[t], 123) && (i(o[t + 1], 123) || i(o[t + 1], 37)) && (X = i(o[t + 1], 123) ? "}}" : o[t + 1] + "}"), ue(o[t]) && X === c) {
                      if (i(re[re.length - 2], 61) && (z = t + 1, z < b))
                        do {
                          if (ue(o[z]) === !1) {
                            (i(o[z], 34) || i(o[z], 39)) && (t = z - 1, We = !0, re.pop());
                            break;
                          }
                          z = z + 1;
                        } while (z < b);
                      if (We === !0)
                        We = !1;
                      else if (Ee === 0 || Ee === 1 && i(re[0], 123)) {
                        re.pop(), re.length > 0 && Oe(!1), st = !0;
                        break;
                      }
                    }
                  } else if (i(o[t], 40) && i(X, 41))
                    xe = xe + 1;
                  else if (i(o[t], 41) && i(X, 41)) {
                    if (xe = xe - 1, xe === 0 && (X = c, i(o[t + 1], j.charCodeAt(0)))) {
                      Oe(!1);
                      break;
                    }
                  } else if (N === !0 && (i(X, 125) || i(X, 10) && i(o[t], 10) || i(X, 42) && i(o[t - 1], 42) && i(o[t], 47))) {
                    if (i(o[t], 96)) {
                      t = t + 1;
                      do {
                        if (re.push(o[t]), i(o[t], 96))
                          break;
                        t = t + 1;
                      } while (t < o.length);
                    }
                    if (i(X, 125)) {
                      if (i(o[t], 125) && o[t] !== X)
                        he = he + 1;
                      else if (o[t] === X && (he = he - 1, he === 0)) {
                        Ee = 0, X = c, q = re.join(c), n.markup.preserveAttribute === !1 && (N ? /^\s*$/.test(q) || J.push([q, de]) : (q = q.replace(Xe, ie), q !== ie && J.push([q, de]))), re = [], de = 1;
                        break;
                      }
                    } else {
                      Se = c, ye = !0, q = re.join(c), q !== ie && J.push([q, de]), re = [], de = i(X, 10) ? 2 : 1, X = c;
                      break;
                    }
                  } else if (i(o[L - 1], 61) && i(o[t], 123) && i(o[t + 1], 37) && (i(X, 34) || i(X, 39)))
                    X = X + "{%", L = 0;
                  else if (i(o[t - 1], 37) && i(o[t], 125) && (X === '"{%' || X === "'{%"))
                    X = X[0], L = 0;
                  else if (i(o[t], 60) && i(j, 62) && i(o[L - 1], 61) && (i(X, 34) || i(X, 39)))
                    X = X + "<", L = 0;
                  else if (i(o[t], 62) && (X === '"<' || X === "'<"))
                    X = X.charAt(0), L = 0;
                  else if (L === 0 && M(X, 62) && (X.length < 2 || M(X, 34) && M(X, 39))) {
                    if (Y = 0, z = X.length - 1, z > -1)
                      do {
                        if (M(o[t - Y], X.charCodeAt(z)))
                          break;
                        Y = Y + 1, z = z - 1;
                      } while (z > -1);
                    if (z < 0 && be === !1 && Ae === !0 && (Ae = !1, Oe(!0), o[t + 1] === G))
                      break;
                    z === 0 && i(o[t], 62);
                  } else
                    L > 0 && ue(o[t]) === !1 && (L = 0);
                  t = t + 1;
                } while (t < b);
            } else if (i(j, 10) === !1 && (i(o[t], 34) || i(o[t], 39)))
              X = o[t];
            else if (t > 0 && be === !0 && M(X, 34) && M(X, 39)) {
              if (Me() === !0)
                continue;
            } else if (B !== "comment" && M(j, 10) && i(o[t], 60) && i(o[t + 1], 33) && i(o[t + 2], 45) && i(o[t + 3], 45) && s.types[r.count] !== "conditional")
              X = "-->";
            else if (i(o[t], 123) && M(R[0], 123) && M(j, 10) && (i(o[t + 1], 123) || i(o[t + 1], 37))) {
              if (i(o[t + 1], 123))
                X = "}}";
              else if (X = o[t + 1] + "}", re.length < 1 && (J.length < 1 || ue(o[t - 1]))) {
                R.pop();
                do
                  i(o[t], 10) && (de = de + 1), re.push(o[t]), t = t + 1;
                while (t < b && o[t - 1] + o[t] !== X);
                re.push("}"), J.push([re.join(c), de]), re = [], de = 1, X = c;
              }
              X === j && (X = c);
            } else if (ce && M(j, 10) && M(o[t - 1], 60) && ue(o[t]))
              st = !0;
            else if (ce && N && i(o[t], 47) && (i(o[t + 1], 42) || i(o[t + 1], 47)))
              st = !0, R[R.length - 1] = ie, Se = i(o[t + 1], 42) ? "*/" : H, re.push(o[t]);
            else if (be === !1 && (o[t] === G || i(j, 10) && i(o[t + 1], 60)) && (R.length > j.length + 1 || i(R[0], 93)) && (N === !1 || Ee === 0)) {
              if (i(j, 10)) {
                if (ue(R[R.length - 1]))
                  do
                    R.pop(), t = t - 1;
                  while (ue(R[R.length - 1]));
                break;
              }
              if (Y = R.length, z = j.length - 1, z > -1)
                do {
                  if (Y = Y - 1, R[Y] !== j.charAt(z))
                    break;
                  z = z - 1;
                } while (z > -1);
              if (z < 0) {
                i(R[Y], 62) && i(o[t], 62) && i(o[t - 1], 125) && ue(o[t + 1]) && J.length > 0 && J[J.length - 1][1] === 0 && (J[J.length - 1][1] = i(o[t + 1], 32) ? 1 : 2);
                break;
              }
            }
          } else if (i(o[t], X.charCodeAt(X.length - 1)) && M(o[t - 1], 92) && (N === !0 && i(j, 125) && I(t) === !1 || N === !1 || M(j, 125))) {
            if (Y = 0, z = X.length - 1, z > -1)
              do {
                if (M(o[t - Y], X.charCodeAt(z)))
                  break;
                Y = Y + 1, z = z - 1;
              } while (z > -1);
            z < 0 && (X = c);
          }
          t = t + 1;
        } while (t < b);
        if (L = 0, V || (V = Ue(R.join(c))), ae === !1)
          if (B === "liquid") {
            if (q = tn(R, V, E, n), n.liquid.normalizeSpacing, V === "liquid")
              return ee();
          } else
            q = R.join(c);
        else
          q = R.join(c);
        return y.token = q, y.types = B, te === !1 && N === !1 && (q = q.replace(Xe, ie)), w();
      }
    }
    return ge();
  }
  function C() {
    let j = [], y = t, q = N === !0 && i(s.token[r.count], 123), G = "([{!=,;.?:&<>", B = c, V = r.lineOffset, ke = 2, we = c, ae = p({
      begin: r.stack.index,
      stack: Ue(r.stack.token) || "global",
      types: "content"
    });
    q === !0 ? we = "script" : r.stack.index > -1 ? (we = Ue(s.token[r.stack.index]), s.types[r.stack.index].startsWith("liquid_") && (ke = 3)) : (we = Ue(s.token[s.begin[r.count]]), s.begin[r.count] > -1 && s.types[s.begin[r.count]].startsWith("liquid_") && (ke = 3)), F === !0 && (ke === 3 ? u.slice(t, u.lastIndexOf("{", u.indexOf(`end${we}`, t))).trim() === c && (F = !1, ae.types = "liquid_end") : ke === 2 && (we === "script" || we === "style") && (u.slice(t, u.indexOf("</script>", t)).trim() === c || u.slice(t, u.indexOf("</style>", t)).trim() === c) && (F = !1, ae.types = "end"));
    function L() {
      return s.types[r.count] === "liquid_start" && s.token[r.count].indexOf("<!") === 0 && s.token[r.count].indexOf("<![") < 0 && s.token[r.count].charCodeAt(s.token[r.count].length - 1) === 91;
    }
    function ye() {
      let te = t - 1, ce = 0;
      if (M(o[t - 1], 92))
        return !1;
      if (te > -1)
        do {
          if (M(o[te], 92))
            break;
          ce = ce + 1, te = te - 1;
        } while (te > -1);
      return ce % 2 === 1;
    }
    if (t < b) {
      let te = c, ce = c, J = c, P = 0;
      do {
        if (i(o[t], 10) && (V = r.lines(t, V)), F === !0) {
          if (ke === 3) {
            let T = `end${we}`, oe = u.indexOf(T, t);
            if (oe > -1) {
              let se = o.lastIndexOf("{", oe), ee = o.indexOf("}", oe + T.length) + 1;
              if (te = u.slice(se, ee), sn(T).test(te)) {
                V = 1, J = u.slice(t, se), r.external(h, J), V !== r.lineOffset && (V = r.lineOffset), ae.token = D(te), ae.types = "liquid_end", ae.lines = V, S(ae), t = ee - 1, F = !1;
                break;
              }
            }
          }
          if (ce === c) {
            if (i(o[t], 47))
              i(o[t + 1], 42) ? ce = "*" : i(o[t + 1], 47) ? ce = "/" : !N && we === "script" && M(o[t - 1], 60) && G.indexOf(o[t - 1]) > -1 && (ce = "r");
            else if (ye() === !1 && (i(o[t], 34) || i(o[t], 39) || i(o[t], 96)))
              ce = o[t];
            else if (i(o[t], 123) && q === !0)
              P = P + 1;
            else if (i(o[t], 125) && q === !0) {
              if (P === 0) {
                J = j.join(c).replace(pt, c).replace(Pe, c), r.external(h, J), r.stack.update(r.stack.index + 1), s.types[r.count] === "end" && s.lexer[s.begin[r.count] - 1] === "script" && (S(ae, {
                  lexer: "script",
                  types: "separator",
                  token: n.correct === !0 ? ";" : "x;"
                }), ae.lexer = "markup"), S(ae, {
                  token: "}",
                  types: "script_end"
                }), r.stack.pop();
                break;
              }
              P = P - 1;
            }
            if (we === "script" && i(o[t], 60) && i(o[t + 1], 47)) {
              if (te = u.slice(t, t + 9).toLowerCase(), te === "</script>") {
                if (j.length < 1)
                  break;
                J = j.join(c).trimEnd(), vt.test(J) && Rt.test(J) ? (S(ae, { token: "<!--", types: "comment" }), J = J.replace(vt, c).replace(Rt, c), r.external("javascript", J), S(ae, { token: "-->" })) : (r.external(h, J), ae.token = te, ae.types = "end", t = t - 1);
                break;
              }
            } else if (we === "style" && i(o[t], 60) && i(o[t + 1], 47) && (te = u.slice(t, t + 8).toLowerCase(), te === "</style>")) {
              if (j.length < 1)
                break;
              J = j.join(c).trimEnd(), vt.test(J) && Rt.test(J) ? (S(ae, { token: "<!--", types: "comment" }), J = J.replace(vt, c).replace(Rt, c), r.external("css", J), S(ae, { token: "-->" })) : (r.external(h, J), ae.token = te, ae.types = "end", t = t - 1);
              break;
            }
          } else
            ce === o[t] && ye() === !1 && (i(ce, 34) || i(ce, 39) || i(ce, 96) || i(ce, 42) && i(o[t + 1], 47)) ? ce = c : i(ce, 96) && i(o[t], 36) && i(o[t + 1], 123) && ye() === !1 ? ce = "}" : i(ce, 125) && i(o[t], 125) && ye() === !1 ? ce = "`" : i(ce, 47) && (i(o[t], 10) || i(o[t], 13)) ? ce = c : ce === "r" && i(o[t], 47) && ye() === !1 ? ce = c : i(ce, 47) && i(o[t], 62) && i(o[t - 1], 45) && i(o[t - 2], 45) && (te = u.slice(t + 1, t + 11).toLowerCase(), te = te.slice(0, te.length - 2), we === "script" && te === "</" && (ce = c), te = te.slice(0, te.length - 1), we === "style" && te === "</style" && (ce = c));
        }
        if (L() === !0 && i(o[t], 93)) {
          t = t - 1, V = 0, B = j.join(c).replace(Pe, c), S(ae, { token: B });
          break;
        }
        if (F === !1 && j.length > 0 && (i(o[t], 60) && M(o[t + 1], 61) && He(o[t + 1]) === !1 && at(o[t + 1]) || i(o[t], 123) && i(o[t + 1], 37) || i(o[t], 123) && (N === !0 || i(o[t + 1], 123) || i(o[t + 1], 37)))) {
          if (t = t - 1, V = 0, B = r.stack.token === "comment" ? j.join(c) : j.join(c).replace(Pe, c), ae.token = B, n.wrap > 0 && n.markup.preserveText === !1) {
            let ee = function() {
              if (i(B[T], 32)) {
                se.push(B.slice(0, T)), B = B.slice(T + 1), oe = B.length, T = n.wrap;
                return;
              }
              do
                T = T - 1;
              while (T > 0 && M(B[T], 32));
              if (T > 0)
                se.push(B.slice(0, T)), B = B.slice(T + 1), oe = B.length, T = n.wrap;
              else {
                T = n.wrap;
                do
                  T = T + 1;
                while (T < oe && M(B[T], 32));
                se.push(B.slice(0, T)), B = B.slice(T + 1), oe = B.length, T = n.wrap;
              }
            };
            let T = n.wrap, oe = B.length, se = [];
            if (s.token[s.begin[r.count]] === "<a>" && s.token[s.begin[s.begin[r.count]]] === "<li>" && s.lines[s.begin[r.count]] === 0 && r.lineOffset === 0 && B.length < n.wrap) {
              S(ae);
              break;
            }
            if (oe < n.wrap) {
              S(ae);
              break;
            }
            if (r.lineOffset < 1 && r.count > -1) {
              let _ = r.count;
              do {
                if (T = T - s.token[_].length, s.types[_].indexOf("attribute") > -1 && (T = T - 1), s.lines[_] > 0 && s.types[_].indexOf("attribute") < 0)
                  break;
                _ = _ - 1;
              } while (_ > 0 && T > 0);
              T < 1 && (T = B.indexOf(ie));
            }
            B = j.join(c).replace(pt, c).replace(Pe, c).replace(Xe, ie);
            do
              ee();
            while (T < oe);
            B !== c && M(B, 32) && se.push(B), B = se.join(r.crlf), B = c + B + c;
          } else {
            n.markup.preserveText === !0 && (B = a(y) + B);
            let T = B.indexOf(H);
            T > -1 && (S(ae, { token: B.slice(0, T) }), B = B.slice(T), Ot.test(B) ? ae.lines = 0 : (ae.lines = 2, B = B.replace(Je, c)));
          }
          V = 0, ae.token = B, S(ae);
          break;
        }
        j.push(o[t]), t = t + 1;
      } while (t < b);
      ae.types === "content" && n.markup.preserveText === !0 && j.unshift(a(y));
    }
    if (t > y && t < b)
      if (ue(o[t])) {
        let te = t;
        r.lineOffset = r.lineOffset + 1;
        do
          i(o[te], 10) && (r.lineNumber = r.lineNumber + 1, r.lineOffset = r.lineOffset + 1), te = te - 1;
        while (te > y && ue(o[te]));
      } else
        r.lineOffset = 0;
    else
      (t !== y || t === y && F === !1) && (ke === 3 && ae.types === "liquid_end" ? B = D(j.join(c).replace(Pe, c)) : B = j.join(c).replace(Pe, c), V = 0, ae.token !== B && (ke === 3 && ae.types === "liquid_end" && (B = D(B)), ae.token = B, S(ae), r.lineOffset = 0));
    F = !1;
  }
  function U() {
    r.lineOffset = 1;
    do {
      if (i(o[t], 10) && (r.lineIndex = t, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ue(o[t + 1]) === !1)
        break;
      t = t + 1;
    } while (t < b);
  }
  (r.language === "html" || r.language === "liquid") && ("html");
  do {
    if (r.error)
      return s;
    if (ue(o[t]) ? U() : F ? C() : i(o[t], 60) ? W(c) : i(o[t], 123) && (i(o[t + 1], 123) || i(o[t + 1], 37)) ? W(c) : N && i(o[t], 123) ? W(c) : i(o[t], 45) && i(o[t + 1], 45) && i(o[t + 2], 45) ? W("---") : C(), t = t + 1, t === b && r.stack.index in r.pairs) {
      let j = r.pairs[r.stack.index];
      j.type === 2 && Et(105, j);
    }
  } while (t < b);
  return s;
}

// src/lexers/script.ts
function un() {
  let { data: e, references: s, rules: n, source: u } = r, N = r.language === "json" ? n.json : n.script, l = Ne(u) ? u : u.split(c), O = l.length, o = [], b = [], f = [], t = [0, c], h = [!1], F = { count: [], index: [], word: [] }, le = -1, m = 0, p = c, S = c, D = [], I = 0, d = -1, a = -1, g = [], W, C, U, j = [
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
  function y() {
    F.count.pop(), F.index.pop(), F.word.pop(), le = le - 1;
  }
  function q(x = c) {
    let w = {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: S
    };
    r.push(e, w, x);
  }
  function G(x, w) {
    let A = w === !0 ? m : m + 1, v = c;
    if ((typeof x != "number" || x < 1) && (x = 1), i(l[m], 47) && (i(l[m + 1], 47) ? v = H : i(l[m + 1], 42) && (v = "/")), A < O)
      do {
        if (ue(l[A]) === !1) {
          if (i(l[A], 47) && (v === c ? i(l[A + 1], 47) ? v = H : i(l[A + 1], 42) && (v = "/") : i(v, 47) && i(l[A - 1], 42) && (v = c)), v === c && l[A - 1] + l[A] !== "*/")
            return l.slice(A, A + x).join(c);
        } else
          i(v, 10) && i(l[A], 10) && (v = c);
        A = A + 1;
      } while (A < O);
    return c;
  }
  function B(x) {
    let w = x;
    do
      x = x - 1;
    while (i(l[x], 92) && x > 0);
    return (w - x) % 2 === 1;
  }
  function V(x) {
    let w = G(1, !1), A = r.stack.length === 0 ? c : r.stack.token, v = {
      begin: e.begin[r.count],
      ender: e.begin[r.count],
      lexer: e.lexer[r.count],
      lines: e.lines[r.count],
      stack: e.stack[r.count],
      token: e.token[r.count],
      types: e.types[r.count]
    };
    if (Mt.test(p) || S === "start" || S === "type_start" || r.language === "json" || i(w, 123) || i(v.token, 59) || i(v.token, 44) || v.stack === "class" || v.stack === "map" || v.stack === "attribute" || e.types[v.begin - 1] === "generic" || A === "initializer" || i(v.token, 125) && e.stack[v.begin - 1] === "global" && e.types[v.begin - 1] !== "operator" && v.stack === e.stack[r.count - 1] || v.stack === "array" && M(v.token, 93) || i(e.token[e.begin[r.count]], 123) && v.stack === "data_type" || v.types !== void 0 && v.types.indexOf("liquid") > -1 && v.types.indexOf("template_string") < 0 || i(w, 59) && x === !1 || e.lexer[r.count - 1] !== "script" && (m < O && O === u.length - 1 || O < u.length - 1))
      return;
    let $ = 0;
    if (i(v.token, 125) && (v.stack === "function" || v.stack === "if" || v.stack === "else" || v.stack === "for" || v.stack === "do" || v.stack === "while" || v.stack === "switch" || v.stack === "class" || v.stack === "try" || v.stack === "catch" || v.stack === "finally" || v.stack === "block")) {
      if (v.stack === "function" && (e.stack[v.begin - 1] === "data_type" || e.types[v.begin - 1] === "type")) {
        $ = v.begin;
        do
          $ = $ - 1;
        while ($ > 0 && M(e.token[$], 41) && e.stack[$] !== "arguments");
        $ = e.begin[$];
      } else
        $ = e.begin[v.begin - 1];
      if (i(e.token[$], 40)) {
        if ($ = $ - 1, e.token[$ - 1] === "function" && ($ = $ - 1), e.stack[$ - 1] === "object" || e.stack[$ - 1] === "switch" || M(e.token[$ - 1], 61) && M(e.token[$ - 1], 58) && e.token[$ - 1] !== "return")
          return;
      } else
        return;
    }
    if (!(v.types === "comment" || A === "method" || A === "paren" || A === "expression" || A === "array" || A === "object" || A === "switch" && v.stack !== "method" && i(e.token[e.begin[r.count]], 40) && e.token[e.begin[r.count] - 1] !== "return" && e.types[e.begin[r.count] - 1] !== "operator") && !(e.stack[r.count] === "expression" && (e.token[e.begin[r.count] - 1] !== "while" || e.token[e.begin[r.count] - 1] === "while" && e.stack[e.begin[r.count] - 2] !== "do")) && !(w !== c && "=<>+*?|^:&%~,.()]".indexOf(w) > -1 && x === !1)) {
      if (v.types === "comment") {
        $ = r.count;
        do
          $ = $ - 1;
        while ($ > 0 && e.types[$] === "comment");
        if ($ < 1)
          return;
        v.token = e.token[$], v.types = e.types[$], v.stack = e.stack[$];
      }
      v.token === void 0 || v.types === "start" || v.types === "separator" || v.types === "operator" && v.token !== "++" && v.token !== "--" || v.token === "x}" || v.token === "var" || v.token === "let" || v.token === "const" || v.token === "else" || v.token.indexOf("#!/") === 0 || v.token === "instanceof" || v.stack === "method" && (e.token[v.begin - 1] === "function" || e.token[v.begin - 2] === "function") || (N.variableList === "list" && (F.index[le] = r.count), p = n.correct === !0 ? ";" : "x;", S = "separator", $ = r.lineOffset, r.lineOffset = 0, q(), r.lineOffset = $, oe());
    }
  }
  function ke() {
    let x = r.count;
    if (e.types[x] === "comment")
      do
        x = x - 1;
      while (x > 0 && e.types[x] === "comment");
    e.token[x] === "from" && (x = x - 2), e.token[x] === "x;" && r.splice({ data: e, howmany: 1, index: x });
  }
  function we() {
    let x = r.count;
    do
      x = x - 1;
    while (x > -1 && e.token[x] === "x}");
    if (e.stack[x] === "else")
      return q();
    x = x + 1, r.splice({
      data: e,
      howmany: 0,
      index: x,
      record: {
        begin: e.begin[x],
        ender: -1,
        lexer: "script",
        lines: r.lineOffset,
        stack: e.stack[x],
        token: p,
        types: S
      }
    }), q();
  }
  function ae() {
    V(!1), d > -1 && k(), U = xt(l, {
      end: O,
      lexer: "script",
      begin: "/*",
      start: m,
      ender: "*/"
    }), m = U[1], e.token[r.count] === "var" || e.token[r.count] === "let" || e.token[r.count] === "const" ? (W = r.pop(e), q(), r.push(e, W, c), e.lines[r.count - 2] === 0 && (e.lines[r.count - 2] = e.lines[r.count]), e.lines[r.count] = 0) : U[0] !== c && (p = U[0], S = Mt.test(p) ? "ignore" : "comment", p.indexOf("# sourceMappingURL=") === 2 && (t[0] = r.count + 1, t[1] = p), r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: S
    }, c)), /\/\*\s*global\s+/.test(e.token[r.count]) && e.types.indexOf("word") < 0 && (s[0] = e.token[r.count].replace(/\/\*\s*global\s+/, c).replace("*/", c).replace(/,\s+/g, ",").split(","));
  }
  function L() {
    V(!1), oe(), d > -1 && k(), U = Ht({
      chars: l,
      end: O,
      lexer: "script",
      begin: "//",
      start: m,
      ender: H
    }), m = U[1], U[0] !== c && (p = U[0], S = Mt.test(p) ? "ignore" : "comment", p.indexOf("# sourceMappingURL=") === 2 && (t[0] = r.count + 1, t[1] = p), r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "script",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: p,
      types: S
    }, c));
  }
  function ye() {
    let x = 0, w = 0, A = m + 1, v = !1, $ = O, ge = ["/"];
    if (A < $)
      do {
        if (ge.push(l[A]), (M(l[A - 1], 92) || i(l[A - 2], 92)) && (i(l[A], 91) && (v = !0), i(l[A], 93) && (v = !1)), i(l[A], 47) && v === !1)
          if (i(l[A - 1], 92)) {
            if (w = 0, x = A - 1, x > 0)
              do {
                if (i(l[x], 92))
                  w = w + 1;
                else
                  break;
                x = x - 1;
              } while (x > 0);
            if (w % 2 === 0)
              break;
          } else
            break;
        A = A + 1;
      } while (A < $);
    return l[A + 1] === "g" || l[A + 1] === "i" || l[A + 1] === "m" || l[A + 1] === "y" || l[A + 1] === "u" ? (ge.push(l[A + 1]), l[A + 2] !== l[A + 1] && (l[A + 2] === "g" || l[A + 2] === "i" || l[A + 2] === "m" || l[A + 2] === "y" || l[A + 2] === "u") ? (ge.push(l[A + 2]), l[A + 3] !== l[A + 1] && l[A + 3] !== l[A + 2] && (l[A + 3] === "g" || l[A + 3] === "i" || l[A + 3] === "m" || l[A + 3] === "y" || l[A + 3] === "u") ? (ge.push(l[A + 3]), l[A + 4] !== l[A + 1] && l[A + 4] !== l[A + 2] && l[A + 4] !== l[A + 3] && (l[A + 4] === "g" || l[A + 4] === "i" || l[A + 4] === "m" || l[A + 4] === "y" || l[A + 4] === "u") ? (ge.push(l[A + 4]), l[A + 5] !== l[A + 1] && l[A + 5] !== l[A + 2] && l[A + 5] !== l[A + 3] && l[A + 5] !== l[A + 4] && (l[A + 5] === "g" || l[A + 5] === "i" || l[A + 5] === "m" || l[A + 5] === "y" || l[A + 5] === "u") ? (ge.push(l[A + 4]), m = A + 5) : m = A + 4) : m = A + 3) : m = A + 2) : m = A + 1) : m = A, ge.join(c);
  }
  function me() {
    let x = [l[m]], w = 0, A = i(x[0], 46), v = /zz/;
    if (m < O - 2 && l[m] === "0" && (l[m + 1] === "x" ? v = /[0-9a-fA-F]/ : l[m + 1] === "o" ? v = /[0-9]/ : l[m + 1] === "b" && (v = /0|1/), v.test(l[m + 2]))) {
      x.push(l[m + 1]), w = m + 1;
      do
        w = w + 1, x.push(l[w]);
      while (v.test(l[w + 1]));
      return m = w, x.join(c);
    }
    if (w = m + 1, w < O)
      do {
        if (He(l[w]) || i(l[w], 46) && A === !1)
          x.push(l[w]), i(l[w], 46) && (A = !0);
        else
          break;
        w = w + 1;
      } while (w < O);
    if (w < O - 1 && (He(l[w - 1]) || He(l[w - 2]) && (i(l[w - 1], 45) || i(l[w - 1], 43))) && (l[w] === "e" || l[w] === "E") && (x.push(l[w]), (i(l[w + 1], 45) || i(l[w + 1], 43)) && (x.push(l[w + 1]), w = w + 1), A = !1, w = w + 1, w < O))
      do {
        if (He(l[w]) || i(l[w], 46) && A === !1)
          x.push(l[w]), i(l[w], 46) && (A = !0);
        else
          break;
        w = w + 1;
      } while (w < O);
    return m = w - 1, x.join(c);
  }
  function te() {
    let x = 0, w = 0, A = O, v = c, $ = [
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
    ], ge = $.length;
    if (d > -1 && k(), i(l[m], 47) && r.count > -1 && (S !== "word" && S !== "reference" || p === "typeof" || p === "return" || p === "else") && S !== "number" && S !== "string" && S !== "end")
      return p === "return" || p === "typeof" || p === "else" || S !== "word" ? (p = ye(), S = "regex") : (p = "/", S = "operator"), q(), "regex";
    if (i(l[m], 63) && ("+-*/.?".indexOf(l[m + 1]) > -1 || i(l[m + 1], 58) && $.join(c).indexOf(l[m + 2]) < 0) && (i(l[m + 1], 46) && He(l[m + 2]) === !1 ? v = "?." : i(l[m + 1], 63) && (v = "??"), v === c))
      return "?";
    if (i(l[m], 58) && "+-*/".indexOf(l[m + 1]) > -1)
      return ":";
    if (m < O - 1) {
      if (M(l[m], 60) && i(l[m + 1], 60))
        return l[m];
      if (i(l[m], 33) && i(l[m + 1], 47))
        return "!";
      if (i(l[m], 45) && (h[h.length - 1] = !1, i(l[m + 1], 45) ? v = "--" : i(l[m + 1], 61) ? v = "-=" : i(l[m + 1], 62) && (v = "->"), v === c))
        return "-";
      if (i(l[m], 43) && (h[h.length - 1] = !1, i(l[m + 1], 43) ? v = "++" : i(l[m + 1], 61) && (v = "+="), v === c))
        return "+";
      if (i(l[m], 61) && M(l[m + 1], 61) && M(l[m + 1], 33) && M(l[m + 1], 62))
        return h[h.length - 1] = !1, "=";
    }
    if (i(l[m], 59))
      if (r.language === "typescript") {
        if (e.stack[r.count] === "arguments")
          e.token[r.count] === "?" && (r.pop(e), v = "?:", m = m - 1), h[h.length - 1] = !0;
        else if (i(p, 41) && (e.token[e.begin[r.count] - 1] === "function" || e.token[e.begin[r.count] - 2] === "function"))
          h[h.length - 1] = !0;
        else if (S === "reference") {
          x = r.count;
          let ne = !1;
          do {
            if (e.begin[x] === e.begin[r.count]) {
              if (x < r.count && e.token[x] === ":" && e.types[x + 1] !== "type" && (ne = !0), e.token[x] === "?" && ne === !1 || e.token[x] === ";" || e.token[x] === "x;")
                break;
              if (e.token[x] === "var" || e.token[x] === "let" || e.token[x] === "const" || e.types[x] === "type") {
                h[h.length - 1] = !0;
                break;
              }
            } else {
              if (e.types[x] === "type_end") {
                h[h.length - 1] = !0;
                break;
              }
              x = e.begin[x];
            }
            x = x - 1;
          } while (x > e.begin[r.count]);
        }
      } else
        e.token[r.count - 1] === "[" && (e.types[r.count] === "word" || e.types[r.count] === "reference") && (r.stack.update("attribute"), e.stack[r.count] = "attribute");
    if (v === c)
      if (i(l[m + 1], 43) && i(l[m + 2], 43) || i(l[m + 1], 45) && i(l[m + 2], 45))
        v = l[m];
      else {
        let ne = [l[m]];
        if (x = m + 1, x < A)
          do {
            if (i(l[x], 43) && i(l[x + 1], 43) || i(l[x], 45) && i(l[x + 1], 45))
              break;
            if (w = 0, w < ge)
              do {
                if (l[x] === $[w]) {
                  ne.push($[w]);
                  break;
                }
                w = w + 1;
              } while (w < ge);
            if (w === ge)
              break;
            x = x + 1;
          } while (x < A);
        v = ne.join(c);
      }
    if (m = m + (v.length - 1), v === "=>" && i(p, 41)) {
      x = r.count, A = e.begin[x];
      do
        e.begin[x] === A && (e.stack[x] = "method"), x = x - 1;
      while (x > A - 1);
    }
    return v;
  }
  function ce() {
    let x = [l[m]];
    if (m = m + 1, m < O)
      do {
        if (x.push(l[m]), i(l[m], 96) && (M(l[m - 1], 92) || !B(m - 1)) || i(l[m - 1], 36) && i(l[m], 123) && (M(l[m - 2], 92) || !B(m - 2)))
          break;
        m = m + 1;
      } while (m < O);
    return x.join(c);
  }
  function J() {
    let x = 0, w = !1, A = !1, v = 0, $ = 0, ge = 0, ne = c, pe = c, R = c, E = [], z = h[h.length - 1], Y = "0123456789=<>+-*?|^:&.,;%(){}[]~";
    function Z() {
      i(p, 40) && r.stack.update("paren", r.count), r.external("html", E.join(c));
    }
    if (d > -1 && k(), pe = r.count > 0 ? e.token[r.count - 1] : c, R = r.count > 0 ? e.types[r.count - 1] : c, ne = G(1, !1), r.language !== "jsx" && r.language !== "tsx" && He(ne) === !1 && (p === "function" || pe === "=>" || pe === "void" || pe === "." || p === "return" || S === "operator" || e.stack[r.count] === "arguments" || S === "type" && pe === "type" || S === "reference" && (R === "operator" || pe === "function" || pe === "class" || pe === "new") || S === "type" && R === "operator")) {
      let fe = [], he = 0, xe = 0;
      x = m;
      do {
        if (fe.push(l[x]), i(l[x], 60))
          he = he + 1;
        else if (i(l[x], 62) && (he = he - 1, he < 1))
          break;
        x = x + 1;
      } while (x < O);
      if (xe = m, m = x, ne = G(1, !1), i(l[x], 62) && (z === !0 || pe === "=>" || pe === "." || R !== "operator" || R === "operator" && (i(ne, 40) || i(ne, 61)))) {
        S = "generic", p = fe.join(c).replace(/^<\s+/, "<").replace(/\s+>$/, ">").replace(/,\s*/g, ", "), q();
        return;
      }
      m = xe;
    }
    if (x = r.count, e.types[x] === "comment")
      do
        x = x - 1;
      while (x > 0 && e.types[x] === "comment");
    if (z === !1 && G(1, !1) !== ">" && (M(l[m], 60) && Y.indexOf(l[m + 1]) > -1 || e.token[x] === "++" || e.token[x] === "--" || ue(l[m + 1]) === !0 || He(l[m + 1]) === !0 && (S === "operator" || S === "string" || S === "number" || S === "reference" || S === "word" && p !== "return")))
      return S = "operator", p = te(), q();
    if (r.language !== "typescript" && (e.token[x] === "return" || e.types[x] === "operator" || e.types[x] === "start" || e.types[x] === "separator" || e.types[x] === "jsx_attribute_start" || i(e.token[x], 125) && r.stack.token === "global")) {
      S = "markup", r.language = "jsx";
      do {
        if (E.push(l[m]), i(l[m], 123))
          $ = $ + 1, w = !0;
        else if (i(l[m], 125))
          $ = $ - 1, $ === 0 && (w = !1);
        else if (i(l[m], 60) && w === !1) {
          if (i(l[m + 1], 60))
            do
              E.push(l[m]), m = m + 1;
            while (m < O && i(l[m + 1], 60));
          v = v + 1, i(G(1, !1), 47) && (A = !0);
        } else if (i(l[m], 62) && w === !1) {
          if (i(l[m + 1], 62))
            do
              E.push(l[m]), m = m + 1;
            while (i(l[m + 1], 62));
          if (v = v - 1, A === !0 ? ge = ge - 1 : M(l[m - 1], 47) && (ge = ge + 1), v === 0 && $ === 0 && ge < 1) {
            if (ne = G(2, !1), M(ne, 60))
              return Z();
            if (i(ne, 60) && Y.indexOf(ne.charAt(1)) < 0 && ue(ne.charAt(1)) === !1) {
              x = m + 1;
              do {
                if (x = x + 1, i(l[x], 62) || ue(l[x - 1]) && Y.indexOf(l[x]) < 0)
                  break;
                if (Y.indexOf(l[x]) > -1)
                  return Z();
              } while (x < O);
            } else
              return Z();
          }
          A = !1;
        }
        m = m + 1;
      } while (m < O);
      return Z();
    }
    S = "operator", p = te(), q();
  }
  function P() {
    let x = !0, w = "+", A = c, v = c, $ = c, ge = c, ne = 0, pe = 0, R = 0, E = [];
    function z() {
      pe = e.begin[pe] - 1, e.types[pe] === "end" ? z() : i(e.token[pe - 1], 46) && Y();
    }
    function Y() {
      pe = pe - 2, e.types[pe] === "end" ? z() : i(e.token[pe - 1], 46) && Y();
    }
    function Z() {
      let he = 0;
      if (he < E.length)
        do
          r.push(e, E[he], c), he = he + 1;
        while (he < E.length);
    }
    function fe(he) {
      return {
        begin: e.begin[he],
        ender: e.ender[he],
        lexer: e.lexer[he],
        lines: e.lines[he],
        stack: e.stack[he],
        token: e.token[he],
        types: e.types[he]
      };
    }
    if (A = e.token[r.count], v = e.token[r.count - 1], $ = e.token[r.count - 2], A !== "++" && A !== "--" && v !== "++" && v !== "--" && (pe = r.count, e.types[pe] === "end" ? z() : i(e.token[pe - 1], 46) && Y()), e.token[pe - 1] === "++" || e.token[pe - 1] === "--") {
      if ("startendoperator".indexOf(e.types[pe - 2]) > -1)
        return;
      if (R = pe, R < r.count + 1) {
        do
          E.push(fe(R)), R = R + 1;
        while (R < r.count + 1);
        r.splice({ data: e, howmany: r.count - pe, index: pe });
      }
    } else {
      if (n.correct === !1 || A !== "++" && A !== "--" && v !== "++" && v !== "--")
        return;
      if (ge = G(1, !1), (A === "++" || A === "--") && (i(l[m], 59) || i(ge, 59) || i(l[m], 125) || i(ge, 125) || i(l[m], 41) || i(ge, 41))) {
        if (w = e.stack[r.count], w === "array" || w === "method" || w === "object" || w === "paren" || w === "notation" || e.token[e.begin[r.count] - 1] === "while" && w !== "while")
          return;
        R = r.count;
        do {
          if (R = R - 1, e.token[R] === "return")
            return;
          if (e.types[R] === "end")
            do
              R = e.begin[R] - 1;
            while (e.types[R] === "end" && R > 0);
        } while (R > 0 && (i(e.token[R], 46) || e.types[R] === "word" || e.types[R] === "reference" || e.types[R] === "end"));
        if (i(e.token[R], 44) && M(l[m], 59) && M(ge, 59) && M(l[m], 125) && M(ge, 125) && M(l[m], 41) && M(ge, 41))
          return;
        if (e.types[R] === "operator")
          if (e.stack[R] === "switch" && i(e.token[R], 58))
            do {
              if (R = R - 1, e.types[R] === "start") {
                if (ne = ne - 1, ne < 0)
                  break;
              } else
                e.types[R] === "end" && (ne = ne + 1);
              if (i(e.token[R], 63) && ne === 0)
                return;
            } while (R > 0);
          else
            return;
        x = !1, w = A === "--" ? "-" : "+";
      } else if (i($, 91) || i($, 59) || i($, 123) || i($, 125) || i($, 40) || i($, 41) || i($, 44) || $ === "return" || $ === "x;")
        if (A === "++" || A === "--") {
          if (i($, 91) || i($, 40) || i($, 44) || $ === "return")
            return;
          A === "--" && (w = "-"), x = !1;
        } else
          (v === "--" || A === "--") && (w = "-");
      else
        return;
      if (x === !1 && (W = r.pop(e)), pe = r.count, e.types[pe] === "end" ? z() : i(e.token[pe - 1], 46) && Y(), R = pe, R < r.count + 1)
        do
          E.push(fe(R)), R = R + 1;
        while (R < r.count + 1);
    }
    x === !0 ? (r.splice({
      data: e,
      howmany: 1,
      index: pe - 1
    }), p = "=", S = "operator", q(), Z(), p = w, S = "operator", q(), p = "1", S = "number", q()) : (p = "=", S = "operator", q(), Z(), p = w, S = "operator", q(), p = "1", S = "number", q()), p = e.token[r.count], S = e.types[r.count], i(ge, 125) && M(l[m], 59) && V(!1);
  }
  function T(x, w, A) {
    let v = 0, $ = !1, ge = !1, ne = [x], pe, R = w.split(c), E = R.length, z = m, Y = m + x.length, Z = N.quoteConvert;
    function fe() {
      let xe = 0;
      if (ne = [], S = A, v = m, A === "string" && ue(l[v + 1])) {
        xe = 1;
        do
          v = v + 1, i(l[v], 10) && (xe = xe + 1);
        while (v < O && ue(l[v + 1]) === !0);
        r.lineOffset = xe;
      }
    }
    function he() {
      let xe = c;
      function de(X) {
        if (r.language !== "javascript" && r.language !== "typescript" && r.language !== "jsx" && r.language !== "tsx") {
          let Se = (be) => be.replace(/\s*$/, " "), Ee = (be) => be.replace(/^\s*/, " ");
          return /\{(#|\/|(%>)|(%\]))/.test(X) || /\}%(>|\])/.test(X) || (X = X.replace(/\{((\{+)|%-?)\s*/g, Se), X = X.replace(/\s*((\}\}+)|(-?%\}))/g, Ee)), X;
        }
        return X;
      }
      if (i(x, 34) && Z === "single" ? (ne[0] = $e, ne[ne.length - 1] = $e) : i(x, 39) && Z === "double" ? (ne[0] = Be, ne[ne.length - 1] = Be) : $ === !0 && (xe = ne[ne.length - 1], ne.pop(), ne.pop(), ne.push(xe)), m = v, w === H && (m = m - 1, ne.pop()), p = ne.join(c), (i(x, 34) || i(x, 39) || x === "{{" || x === "{%") && (p = de(p)), x === "{%" || x === "{{") {
        pe = Q(p), S = pe[0], q(pe[1]);
        return;
      }
      if (A === "string") {
        if (S = "string", r.language === "json")
          p = p.replace(/\\u[\dA-F]{4}/gi, (X) => String.fromCharCode(parseInt(X.replace(/\\u/g, ""), 16)));
        else if (x.indexOf("#!") === 0)
          p = p.slice(0, p.length - 1), r.lineOffset = 2;
        else if ((r.stack.token !== "object" || r.stack.token === "object" && M(G(1, !1), 58) && M(e.token[r.count], 44) && M(e.token[r.count], 123)) && (p.length > n.wrap && n.wrap > 0 || n.wrap !== 0 && i(e.token[r.count], 43) && (i(e.token[r.count - 1], 46) || i(e.token[r.count - 1], 39)))) {
          let X = p, Se = c, Ee = Z === "double" ? Be : Z === "single" ? $e : X.charAt(0), be = n.wrap, Ze = /u[0-9a-fA-F]{4}/, st = /x[0-9a-fA-F]{2}/;
          if (X = X.slice(1, X.length - 1), i(e.token[r.count], 43) && (i(e.token[r.count - 1], 46) || i(e.token[r.count - 1], 39)) && (r.pop(e), Ee = e.token[r.count].charAt(0), X = e.token[r.count].slice(1, e.token[r.count].length - 1) + X, r.pop(e)), X.length > be && be > 0)
            do
              Se = X.slice(0, be), i(Se[be - 5], 92) && Ze.test(X.slice(be - 4, be + 1)) ? Se = Se.slice(0, be - 5) : i(Se[be - 4], 92) && Ze.test(X.slice(be - 3, be + 2)) ? Se = Se.slice(0, be - 4) : i(Se[be - 3], 92) && (Ze.test(X.slice(be - 2, be + 3)) || st.test(X.slice(be - 2, be + 1))) ? Se = Se.slice(0, be - 3) : i(Se[be - 2], 92) && (Ze.test(X.slice(be - 1, be + 4)) || st.test(X.slice(be - 1, be + 2))) ? Se = Se.slice(0, be - 2) : i(Se[be - 1], 92) && (Se = Se.slice(0, be - 1)), Se = Ee + Se + Ee, X = X.slice(Se.length - 2), p = Se, S = "string", q(c), r.lineOffset = 0, p = "+", S = "operator", q(c);
            while (X.length > be);
          p = X === c ? Ee + Ee : Ee + X + Ee, S = "string";
        }
      } else
        /\{\s*\?>$/.test(p) ? S = "liquid_start" : S = A;
      p.length > 0 && q(c);
    }
    if (d > -1 && k(), i(l[m - 1], 92) && B(m - 1) === !0 && (i(l[m], 34) || i(l[m], 39)))
      if (r.pop(e), i(e.token[0], 123))
        i(l[m], 34) ? (x = Be, w = '\\"', ne = [Be]) : (x = $e, w = "\\'", ne = [$e]), $ = !0;
      else {
        if (i(l[m], 34)) {
          ne = ['\\"'], he();
          return;
        }
        ne = ["\\'"], he();
        return;
      }
    if (v = Y, v < O)
      do {
        if (M(e.token[0], 123) && M(e.token[0], 91) && Z !== "none" && (i(l[v], 34) || i(l[v], 39)) ? (i(l[v - 1], 92) ? B(v - 1) === !0 && (Z === "double" && i(l[v], 39) || Z === "single" && i(l[v], 34)) && ne.pop() : Z === "double" && i(l[v], 34) && i(l[m], 39) ? l[v] = Be : Z === "single" && i(l[v], 39) && i(l[m], 34) && (l[v] = $e), ne.push(l[v])) : v > z ? (ge = !0, i(l[v], 123) && i(l[v + 1], 37) && l[v + 2] !== x ? (he(), T("{%", "%}", "liquid"), fe()) : i(l[v], 123) && i(l[v + 1], 123) && l[v + 2] !== x ? (he(), T("{{", "}}", "liquid"), fe()) : (ge = !1, ne.push(l[v]))) : ne.push(l[v]), r.language !== "json" && r.language !== "javascript" && (i(x, 34) || i(x, 39)) && (ge === !0 || v > z) && M(l[v - 1], 92) && M(l[v], 34) && M(l[v], 39) && (i(l[v], 10) || v === O - 1)) {
          r.error = "Unterminated string in script on line number " + r.lineNumber;
          break;
        }
        if (l[v] === R[E - 1] && (M(l[v - 1], 92) || B(v - 1) === !1) && (E === 1 || ne[v - Y] === R[0] && ne.slice(v - Y - E + 2).join(c) === w))
          break;
        v = v + 1;
      } while (v < O);
    he();
  }
  function oe() {
    let x = c, w = G(5, !1), A = r.count, v = r.lineOffset;
    if (!(r.language === "json" || b.length < 1 || b[b.length - 1].charAt(0) !== "x" || /^x?(;|\}|\))$/.test(p) === !1) && !(e.stack[r.count] === "do" && w === "while" && i(e.token[r.count], 125))) {
      if (i(p, 59) && e.token[A - 1] === "x{") {
        if (x = e.token[e.begin[A - 2] - 1], e.token[A - 2] === "do" || i(e.token[A - 2], 41) && "ifforwhilecatch".indexOf(x) > -1) {
          W = r.pop(e), p = n.correct === !0 ? "}" : "x}", S = "end", C = r.stack.entry, q(), b.pop(), r.lineOffset = v;
          return;
        }
        W = r.pop(e), p = n.correct === !0 ? "}" : "x}", S = "end", C = r.stack.entry, q(), b.pop(), p = ";", S = "end", r.push(e, W, c), r.lineOffset = v;
        return;
      }
      if (p = n.correct === !0 ? "}" : "x}", S = "end", e.token[r.count] !== "x}") {
        if (w === "else" && e.stack[r.count] === "if" && (i(e.token[r.count], 59) || e.token[r.count] === "x;")) {
          C = r.stack.entry, q(), b.pop(), r.lineOffset = v;
          return;
        }
        do
          if (C = r.stack.entry, q(), b.pop(), e.stack[r.count] === "do")
            break;
        while (b[b.length - 1] === "x{");
        r.lineOffset = v;
      }
    }
  }
  function se() {
    let x = r.count;
    if (e.stack[x] === "object" && N.objectSort === !0)
      p = ",", S = "separator", ke(), q();
    else {
      do
        x = x - 1;
      while (x > 0 && e.types[x - 1] === "comment");
      r.splice({
        data: e,
        howmany: 0,
        index: x,
        record: {
          begin: e.begin[x],
          ender: -1,
          lexer: "script",
          lines: r.lineOffset,
          stack: e.stack[x],
          token: ",",
          types: "separator"
        }
      }), q();
    }
  }
  function ee(x) {
    let w = !1, A = !1, v = G(1, !1), $ = i(e.token[r.count], 40) ? r.count : e.begin[r.count];
    function ge() {
      let ne = 0, pe = e.token[$ - 1] === "Array", R = pe ? "[" : "{", E = pe ? "]" : "}", z = pe ? "array" : "object";
      if (pe === !0 && e.types[r.count] === "number" && (ne = Number(e.token[r.count]), W = r.pop(e)), W = r.pop(e), W = r.pop(e), W = r.pop(e), r.stack.pop(), p = R, S = "start", q(z), ne > 0) {
        p = ",", S = "separator";
        do
          q(), ne = ne - 1;
        while (ne > 0);
      }
      p = E, S = "end", q();
    }
    if (d > -1 && k(), f.length > 0 && (f[f.length - 1] === 0 ? f.pop() : f[f.length - 1] = f[f.length - 1] - 1), (i(x, 41) || x === "x)" || i(x, 93)) && (n.correct === !0 && P(), ke()), (i(x, 41) || x === "x)") && V(!1), le > -1 && (i(x, 125) && (N.variableList === "list" && F.count[le] === 0 || e.token[r.count] === "x;" && N.variableList === "each") && y(), F.count[le] = F.count[le] - 1, F.count[le] < 0 && y()), i(p, 44) && e.stack[r.count] !== "initializer" && (i(x, 93) && i(e.token[r.count - 1], 91) || i(x, 125)) && (W = r.pop(e)), i(x, 41) || x === "x)" ? (p = x, o.length > 0 && (D = o[o.length - 1], D.length > 1 && M(v, 123) && (D[0] === "if" || D[0] === "for" || D[0] === "with" || D[0] === "while" && e.stack[D[1] - 2] !== void 0 && e.stack[D[1] - 2] !== "do") && (w = !0))) : i(x, 93) ? p = "]" : i(x, 125) && (M(p, 44) && n.correct === !0 && P(), r.stack.length > 0 && r.stack.token !== "object" && V(!0), N.objectSort === !0 && r.stack.token === "object" && jt(e), S === "comment" && (p = e.token[r.count], S = e.types[r.count]), p = "}"), r.stack.token === "data_type" ? S = "type_end" : S = "end", o.pop(), C = r.stack.entry, i(x, 41) && n.correct === !0 && $ - r.count < 2 && (i(e.token[r.count], 40) || e.types[r.count] === "number") && (e.token[$ - 1] === "Array" || e.token[$ - 1] === "Object") && e.token[$ - 2] === "new" && (ge(), A = !0), b[b.length - 1] === "x{" && i(x, 125) ? (oe(), b.pop(), e.stack[r.count] !== "try" && M(v, 58) && M(v, 59) && e.token[e.begin[m] - 1] !== "?" && oe(), p = "}") : b.pop(), N.endComma !== void 0 && N.endComma !== "none" && r.stack.token === "array" || r.stack.token === "object" || r.stack.token === "data_type")
      if (N.endComma === "always" && M(e.token[r.count], 44)) {
        let ne = r.stack.index, pe = r.count;
        do {
          if (e.begin[pe] === ne) {
            if (i(e.token[pe], 44))
              break;
          } else
            pe = e.begin[pe];
          pe = pe - 1;
        } while (pe > ne);
        if (pe > ne) {
          let R = S, E = p;
          p = ",", S = "separator", q(), p = E, S = R;
        }
      } else
        N.endComma === "never" && i(e.token[r.count], 44) && r.pop(e);
    A === !1 && (q(), i(p, 125) && e.stack[r.count] !== "object" && e.stack[r.count] !== "class" && e.stack[r.count] !== "data_type" && (s.pop(), oe())), w === !0 && (p = n.correct === !0 ? "{" : "x{", S = "start", q(D[0]), b.push("x{"), D[1] = r.count), h.pop(), r.stack.token !== "data_type" && (h[h.length - 1] = !1);
  }
  function _(x) {
    let w = r.count, A = c, v = c, $ = c, ge = !1;
    if (b.push(x), i(x, 123) && (e.types[r.count] === "type" || e.types[r.count] === "type_end" || e.types[r.count] === "generic")) {
      let ne = 0;
      e.types[r.count] === "type_end" && (w = e.begin[r.count]), ne = w;
      do
        if (w = w - 1, e.begin[w] !== ne && e.begin[w] !== -1 || i(e.token[w], 58))
          break;
      while (w > e.begin[w]);
      i(e.token[w], 58) && e.stack[w - 1] === "arguments" ? (h.push(!1), ge = !0) : h.push(h[h.length - 1]), w = r.count;
    } else
      i(x, 91) && e.types[r.count] === "type_end" ? h.push(!0) : h.push(h[h.length - 1]);
    if (d > -1 && (k(), w = r.count), le > -1 && (F.count[le] = F.count[le] + 1), e.token[w - 1] === "function" ? o.push(["function", w + 1]) : o.push([p, w + 1]), p = x, h[h.length - 1] === !0 ? S = "type_start" : S = "start", i(x, 40) || x === "x(" ? ke() : i(x, 91) && (a > -1 ? (e.begin[a - 1] === e.begin[e.begin[w] - 1] || e.token[e.begin[w]] === "x(") && (a = -1, n.correct === !0 ? ee(")") : ee("x)"), ke(), p = "{", S = "start") : i(p, 41) && ke(), S === "comment" && i(e.token[w - 1], 41) && (p = e.token[w], e.token[w] = "{", S = e.types[w], e.types[w] = "start")), A = (() => {
      let ne = r.count;
      if (e.types[ne] === "comment")
        do
          ne = ne - 1;
        while (ne > 0 && e.types[ne] === "comment");
      return e.token[ne];
    })(), v = e.stack[w] === void 0 ? c : (() => {
      let ne = r.count;
      if (e.types[ne] === "comment")
        do
          ne = ne - 1;
        while (ne > 0 && e.types[ne] === "comment");
      return e.token[e.begin[ne] - 1];
    })(), i(p, 123) && (e.types[w] === "word" || i(e.token[w], 93))) {
      let ne = w;
      if (i(e.token[ne], 93))
        do
          ne = e.begin[ne] - 1;
        while (i(e.token[ne], 93));
      do {
        if (e.types[ne] === "start" || e.types[ne] === "end" || e.types[ne] === "operator")
          break;
        ne = ne - 1;
      } while (ne > 0);
      i(e.token[ne], 58) && e.stack[ne - 1] === "arguments" && ($ = "function", s.push(g), g = []);
    }
    if (S === "type_start")
      $ = "data_type";
    else if ($ === c && (i(p, 123) || p === "x{")) {
      if (A === "else" || A === "do" || A === "try" || A === "finally" || A === "switch")
        $ = A;
      else if (f[f.length - 1] === 0 && A !== "return")
        f.pop(), $ = "class";
      else if (e.token[w - 1] === "class")
        $ = "class";
      else if (i(e.token[w], 93) && i(e.token[w - 1], 91))
        $ = "array";
      else if ((e.types[w] === "word" || e.types[w] === "reference") && (e.types[w - 1] === "word" || e.types[w - 1] === "reference" || e.token[w - 1] === "?" && (e.types[w - 2] === "word" || e.types[w - 2] === "reference")) && e.token[w] !== "in" && e.token[w - 1] !== "export" && e.token[w - 1] !== "import")
        $ = "map";
      else if (e.stack[w] === "method" && e.types[w] === "end" && (e.types[e.begin[w] - 1] === "word" || e.types[e.begin[w] - 1] === "reference") && e.token[e.begin[w] - 2] === "new")
        $ = "initializer";
      else if (i(p, 123) && (i(A, 41) || A === "x)") && (e.types[e.begin[w] - 1] === "word" || e.types[e.begin[w] - 1] === "reference" || e.token[e.begin[w] - 1] === "]"))
        v === "if" ? $ = "if" : v === "for" ? $ = "for" : v === "while" ? $ = "while" : v === "class" ? $ = "class" : v === "switch" || e.token[e.begin[w] - 1] === "switch" ? $ = "switch" : v === "catch" ? $ = "catch" : $ = "function";
      else if (i(p, 123) && (i(A, 59) || A === "x;"))
        $ = "block";
      else if (i(p, 123) && i(e.token[w], 58) && e.stack[w] === "switch")
        $ = "block";
      else if (e.token[w - 1] === "import" || e.token[w - 2] === "import" || e.token[w - 1] === "export" || e.token[w - 2] === "export")
        $ = "object";
      else if (i(A, 41) && (D[0] === "function" || D[0] === "if" || D[0] === "for" || D[0] === "class" || D[0] === "while" || D[0] === "switch" || D[0] === "catch"))
        $ = D[0];
      else if (e.stack[w] === "notation")
        $ = "function";
      else if ((e.types[w] === "number" || e.types[w] === "string" || e.types[w] === "word" || e.types[w] === "reference") && (e.types[w - 1] === "word" || e.types[w - 1] === "reference") && e.token[e.begin[w] - 1] !== "for")
        $ = "function";
      else if (r.stack.length > 0 && M(e.token[w], 58) && r.stack.token === "object" && (i(e.token[e.begin[w] - 2], 123) || i(e.token[e.begin[w] - 2], 44)))
        $ = "function";
      else if (e.types[D[1] - 1] === "markup" && e.token[D[1] - 3] === "function")
        $ = "function";
      else if (A === "=>")
        $ = "function";
      else if (ge === !0 || e.types[r.count] === "type_end" && e.stack[e.begin[r.count] - 2] === "arguments")
        $ = "function";
      else if (i(A, 41) && e.stack[w] === "method" && (e.types[e.begin[w] - 1] === "word" || e.types[e.begin[w] - 1] === "property" || e.types[e.begin[w] - 1] === "reference"))
        $ = "function";
      else if (i(p, 123) && e.types[w] === "word" && e.token[w] !== "return" && e.token[w] !== "in" && e.token[w] !== "import" && e.token[w] !== "const" && e.token[w] !== "let" && e.token[w] !== c)
        $ = "block";
      else if (i(p, 123) && "if|else|for|while|function|class|switch|catch|finally".indexOf(e.stack[w]) > -1 && (e.token[w] === "x}" || i(e.token[w], 125)))
        $ = "block";
      else if (e.stack[w] === "arguments")
        $ = "function";
      else if (e.types[w] === "generic")
        do {
          if (w = w - 1, e.token[w] === "function" || e.stack[w] === "arguments") {
            $ = "function";
            break;
          }
          if (e.token[w] === "interface") {
            $ = "map";
            break;
          }
          if (i(e.token[w], 59)) {
            $ = "object";
            break;
          }
        } while (w > e.begin[r.count]);
      else
        $ = "object";
      $ !== "object" && $ !== "class" && ($ === "function" ? (s.push(g), g = []) : s.push([]));
    } else
      i(p, 91) ? $ = "array" : (i(p, 40) || p === "x(") && (A === "function" || e.token[w - 1] === "function" || e.token[w - 1] === "function*" || e.token[w - 2] === "function" ? $ = "arguments" : i(e.token[w - 1], 46) || i(e.token[e.begin[w] - 2], 46) || e.types[w] === "generic" || i(e.token[w], 125) && e.stack[w] === "function" ? $ = "method" : A === "if" || A === "for" || A === "class" || A === "while" || A === "catch" || A === "finally" || A === "switch" || A === "with" ? $ = "expression" : e.types[w] === "word" || e.types[w] === "property" || e.types[w] === "reference" ? $ = "method" : $ = "paren");
    q($), f.length > 0 && (f[f.length - 1] = f[f.length - 1] + 1);
  }
  function Q(x) {
    let w = 2, A = 0, v = c, $ = x.slice(0, 2), ge = x.length;
    if (i(x[2], 45) && (w = w + 1), ue(x.charAt(w)) === !0)
      do
        w = w + 1;
      while (ue(x.charAt(w)) === !0 && w < ge);
    A = w;
    do
      A = A + 1;
    while (ue(x.charAt(A)) === !1 && x.charAt(A) !== "(" && A < ge);
    if (A === ge && (A = x.length - 2), v = x.slice(w, A), v === "else" || $ === "{%" && (v === "elseif" || v === "when" || v === "elif" || v === "elsif"))
      return ["liquid_else", `liquid_${v}`];
    if ($ === "{{")
      return v === "end" ? ["liquid_end", c] : (
        //  (name === 'block' && (/\{%\s*\w/).test(source) === false) ||
        v === "define" || v === "form" || v === "if" || v === "unless" || v === "range" || v === "with" ? ["liquid_start", `liquid_${v}`] : ["liquid", c]
      );
    if (A = j.length - 1, A > -1)
      do {
        if (v === j[A] && v !== "block")
          return ["liquid_start", `liquid_${v}`];
        if (v === "end" + j[A])
          return [
            "liquid_end",
            c
          ];
        A = A - 1;
      } while (A > -1);
    return ["liquid", c];
  }
  function k() {
    let x = d, w = 1, A = c, v = c, $ = p, ge = S, ne = [];
    function pe() {
      b.push("x{"), r.splice({
        data: e,
        howmany: 1,
        index: r.count - 3
      });
    }
    function R(E, z, Y) {
      let Z = e.begin[E], fe = 0;
      do {
        if (e.token[E] === z && e.types[E] === "word") {
          if (Y === !0)
            e.types[E] = "reference";
          else if (e.begin[E] > Z && e.token[e.begin[E]] === "{" && e.stack[E] !== "object" && e.stack[E] !== "class" && e.stack[E] !== "data_type")
            if (e.stack[E] === "function")
              e.types[E] = "reference";
            else {
              fe = e.begin[E];
              do {
                if (e.stack[fe] === "function") {
                  e.types[E] = "reference";
                  break;
                }
                fe = e.begin[fe];
              } while (fe > Z);
            }
        }
        E = E - 1;
      } while (E > Z);
    }
    do
      ne.push(l[x]), i(l[x], 92), x = x + 1;
    while (x < m);
    if (p.charAt(0) === "\u201C" ? r.error = `Quote looking character (\u201C, \\u201c) used instead of actual quotes on line number ${r.lineNumber}` : p.charAt(0) === "\u201D" && (r.error = `Quote looking character (\u201D, \\u201d) used instead of actual quotes on line number ${r.lineNumber}`), A = ne.join(c), d = -1, r.count > 0 && A === "function" && i(e.token[r.count], 40) && (i(e.token[r.count - 1], 123) || e.token[r.count - 1] === "x{") && (e.types[r.count] = "start"), r.count > 1 && A === "function" && i(p, 40) && (i(e.token[r.count - 1], 125) || e.token[r.count - 1] === "x}"))
      if (i(e.token[r.count - 1], 125)) {
        if (x = r.count - 2, x > -1)
          do {
            if (e.types[x] === "end" ? w = w + 1 : (e.types[x] === "start" || e.types[x] === "end") && (w = w - 1), w === 0)
              break;
            x = x - 1;
          } while (x > -1);
        if (i(e.token[x], 123) && i(e.token[x - 1], 41)) {
          if (w = 1, x = x - 2, x > -1)
            do {
              if (e.types[x] === "end" ? w = w + 1 : (e.types[x] === "start" || e.types[x] === "end") && (w = w - 1), w === 0)
                break;
              x = x - 1;
            } while (x > -1);
          e.token[x - 1] !== "function" && e.token[x - 2] !== "function" && (e.types[r.count] = "start");
        }
      } else
        e.types[r.count] = "start";
    if (n.correct === !0 && (A === "Object" || A === "Array") && i(l[m + 1], 40) && i(l[m + 2], 41) && i(e.token[r.count - 1], 61) && e.token[r.count] === "new")
      A === "Object" ? (e.token[r.count] = "{", p = "}", e.stack[r.count] = "object", r.stack.update("object")) : (e.token[r.count] = "[", p = "]", e.stack[r.count] = "array", r.stack.update("array")), e.types[r.count] = "start", S = "end", l[m + 1] = c, l[m + 2] = c, m = m + 2;
    else {
      if (w = r.count, x = w, N.variableList !== "none" && (A === "var" || A === "let" || A === "const")) {
        if (e.types[w] === "comment")
          do
            w = w - 1;
          while (w > 0 && e.types[w] === "comment");
        if (N.variableList === "list" && le > -1 && F.index[le] === w && A === F.word[le]) {
          p = ",", S = "separator", e.token[w] = p, e.types[w] = S, F.count[le] = 0, F.index[le] = w, F.word[le] = A;
          return;
        }
        le = le + 1, F.count.push(0), F.index.push(w), F.word.push(A), w = x;
      } else
        le > -1 && A !== F.word[le] && r.count === F.index[le] && i(e.token[F.index[le]], 59) && p !== F.word[le] && N.variableList === "list" && y();
      if (A === "from" && e.token[r.count] === "x;" && i(e.token[r.count - 1], 125) && ke(), A === "while" && e.token[r.count] === "x;" && i(e.token[r.count - 1], 125)) {
        let E = 0, z = r.count - 2;
        if (z > -1)
          do {
            if (e.types[z] === "end" ? E = E + 1 : e.types[z] === "start" && (E = E - 1), E < 0) {
              i(e.token[z], 123) && e.token[z - 1] === "do" && ke();
              return;
            }
            z = z - 1;
          } while (z > -1);
      }
      if (ge === "comment") {
        let E = r.count;
        do
          E = E - 1;
        while (E > 0 && e.types[E] === "comment");
        ge = e.types[E], $ = e.token[E];
      }
      if (v = G(2, !1), A === "void")
        $ === ":" && e.stack[r.count - 1] === "arguments" ? S = "type" : S = "word";
      else if ((r.stack.token === "object" || r.stack.token === "class" || r.stack.token === "data_type") && (i(e.token[r.count], 123) || i(e.token[e.begin[r.count]], 123) && i(e.token[r.count], 44) || e.types[r.count] === "liquid_end" && (i(e.token[e.begin[r.count] - 1], 123) || i(e.token[e.begin[r.count] - 1], 44))))
        A === "return" || A === "break" ? S = "word" : S = "property";
      else if (h[h.length - 1] === !0 || (r.language === "typescript" || r.language === "flow") && $ === "type")
        S = "type";
      else if (s.length > 0 && ($ === "function" || $ === "class" || $ === "const" || $ === "let" || $ === "var" || $ === "new" || $ === "void"))
        S = "reference", s[s.length - 1].push(A), r.language === "javascript" || r.language === "jsx" || r.language === "typescript" || r.language === "tsx" ? $ === "var" || $ === "function" && e.types[r.count - 1] !== "operator" && e.types[r.count - 1] !== "start" && e.types[r.count - 1] !== "end" ? R(r.count, A, !0) : R(r.count, A, !1) : R(r.count, A, !1);
      else if (r.stack.token === "arguments" && S !== "operator")
        S = "reference", g.push(A);
      else if (i($, 44) && e.stack[r.count] !== "method" && (e.stack[r.count] !== "expression" || e.token[e.begin[r.count] - 1] === "for")) {
        let E = r.count, z = r.stack.index;
        do {
          if (e.begin[E] === z) {
            if (e.token[E] === ";" || e.token[E] === "var" || e.token[E] === "let" || e.token[E] === "const" || e.token[E] === "type")
              break;
          } else
            e.types[E] === "end" && (E = e.begin[E]);
          E = E - 1;
        } while (E > z);
        s.length > 0 && e.token[E] === "var" ? (S = "reference", s[s.length - 1].push(A), r.language === "javascript" || r.language === "jsx" || r.language === "typescript" || r.language === "tsx" ? R(E, A, !0) : R(E, A, !1)) : s.length > 0 && (e.token[E] === "let" || e.token[E] === "const" || e.token[E] === "type" && (r.language === "typescript" || r.language === "tsx")) ? (S = "reference", s[s.length - 1].push(A), R(E, A, !1)) : S = "word";
      } else if (r.stack.token !== "object" || r.stack.token === "object" && p !== "," && p !== "{") {
        let E = s.length, z = 0;
        if (E > 0) {
          do
            if (E = E - 1, z = s[E].length, z > 0) {
              do
                if (z = z - 1, A === s[E][z])
                  break;
              while (z > 0);
              if (A === s[E][z])
                break;
            }
          while (E > 0);
          s[E][z] === A && $ !== "." ? S = "reference" : S = "word";
        } else
          S = "word";
      } else
        S = "word";
      p = A, A === "from" && e.token[r.count] === "}" && ke();
    }
    if (q(), A === "class" && f.push(0), A === "do" && (v = G(1, !0), v !== "{" && (p = n.correct === !0 ? "{" : "x{", S = "start", b.push("x{"), q("do"))), A === "else") {
      v = G(2, !0);
      let E = r.count - 1;
      if (e.types[E] === "comment")
        do
          E = E - 1;
        while (E > 0 && e.types[E] === "comment");
      e.token[E] === "x}" && (e.token[r.count] === "else" ? e.stack[r.count - 1] !== "if" && e.types[r.count - 1] !== "comment" && e.stack[r.count - 1] !== "else" ? (b.pop(), r.splice({
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
      }), r.stack.length > 1 && (r.stack.splice(r.stack.length - 2, 1), r.stack.update(r.count))) : (e.token[r.count - 2] === "x}" && C[0] !== "if" && e.stack[r.count] === "else" || e.token[r.count - 2] === "}" && e.stack[r.count - 2] === "if" && C[0] === "if" && e.token[C[1] - 1] !== "if" && e.token[e.begin[r.count - 1]] === "x{") && pe() : e.token[r.count] === "x}" && e.stack[r.count] === "if" && pe()), v !== "if" && M(v, 123) && (p = n.correct === !0 ? "{" : "x{", S = "start", b.push("x{"), q("else"));
    }
    (A === "for" || A === "if" || A === "switch" || A === "catch") && e.token[r.count - 1] !== "." && (v = G(1, !0), v !== "(" && (a = r.count, n.correct === !0 ? _("(") : _("x(")));
  }
  function K() {
    r.lineOffset = 1;
    do {
      if (i(l[m], 10) && (r.lineIndex = m, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ue(l[m + 1]) === !1)
        break;
      m = m + 1;
    } while (m < O);
  }
  do
    ue(l[m]) ? (d > -1 && k(), K(), r.lineOffset > 1 && I < r.count && M(l[m + 1], 59) && M(l[m + 1], 125) && (V(!1), I = r.count)) : i(l[m], 123) && i(l[m + 1], 37) ? T("{%", "%}", "liquid") : i(l[m], 123) && i(l[m + 1], 123) ? T("{{", "}}", "liquid") : i(l[m], 60) && i(l[m + 1], 33) && i(l[m + 2], 45) && i(l[m + 3], 45) ? T("<!--", "-->", "comment") : i(l[m], 60) ? J() : i(l[m], 47) && (m === O - 1 || i(l[m + 1], 42)) ? ae() : (r.count < 0 || e.lines[r.count] > 0) && i(l[m], 35) && i(l[m + 1], 33) && (i(l[m + 2], 47) || i(l[m + 3], 91)) ? T("#!" + l[m + 2], H, "string") : i(l[m], 47) && (m === O - 1 || i(l[m + 1], 47)) ? L() : i(l[m], 96) || i(l[m], 125) && r.stack.token === "template_string" ? (d > -1 && k(), p = ce(), i(p, 125) && p.slice(p.length - 2) === "${" ? (S = "template_string_else", q("template_string")) : p.slice(p.length - 2) === "${" ? (S = "template_string_start", q("template_string")) : i(p[0], 125) ? (S = "template_string_end", q()) : (S = "string", q())) : i(l[m], 34) || i(l[m], 39) ? T(l[m], l[m], "string") : i(l[m], 45) && m < O - 1 && M(l[m + 1], 61) && M(l[m + 1], 45) && (S === "number" || S === "word" || S === "reference") && p !== "return" && (S === "word" || S === "reference" || S === "number" || i(p, 41) || i(p, 93)) ? (d > -1 && k(), p = "-", S = "operator", q()) : d === -1 && (l[m] !== "0" || l[m] === "0" && l[m + 1] !== "b") && (He(l[m]) || m !== O - 2 && i(l[m], 45) && i(l[m + 1], 46) && He(l[m + 2]) || m !== O - 1 && (i(l[m], 45) || i(l[m], 46)) && He(l[m + 1])) ? (d > -1 && k(), S === "end" && i(l[m], 45) ? (p = "-", S = "operator") : (p = me(), S = "number"), q()) : i(l[m], 58) && i(l[m + 1], 58) ? (d > -1 && k(), n.correct === !0 && P(), ke(), m = m + 1, p = "::", S = "separator", q()) : i(l[m], 44) ? (d > -1 && k(), n.correct === !0 && P(), h[h.length - 1] === !0 && e.stack[r.count].indexOf("type") < 0 && (h[h.length - 1] = !1), S === "comment" ? se() : le > -1 && F.count[le] === 0 && N.variableList === "each" ? (ke(), p = ";", S = "separator", q(), p = F.word[le], S = "word", q(), F.index[le] = r.count) : (p = ",", S = "separator", ke(), q())) : i(l[m], 46) ? (d > -1 && k(), h[h.length - 1] = !1, i(l[m + 1], 46) && i(l[m + 2], 46) ? (p = "...", S = "operator", m = m + 2) : (ke(), p = ".", S = "separator"), ue(l[m - 1]) && (r.lineOffset = 1), q()) : i(l[m], 59) ? (d > -1 && k(), h[h.length - 1] === !0 && e.stack[r.count].indexOf("type") < 0 && (h[h.length - 1] = !1), f[f.length - 1] === 0 && f.pop(), le > -1 && F.count[le] === 0 && (N.variableList === "each" ? y() : F.index[le] = r.count + 1), n.correct === !0 && P(), p = ";", S = "separator", e.token[r.count] === "x}" ? we() : q(), oe()) : i(l[m], 40) || i(l[m], 91) || i(l[m], 123) ? _(l[m]) : i(l[m], 41) || i(l[m], 93) || i(l[m], 125) ? ee(l[m]) : d < 0 && e.stack[r.count] === "object" && i(l[m], 42) && M(l[m + 1], 61) && He(l[m + 1]) === !1 && ue(l[m + 1]) === !1 ? d = m : i(l[m], 61) || i(l[m], 38) || i(l[m], 60) || i(l[m], 62) || i(l[m], 43) || i(l[m], 45) || i(l[m], 42) || i(l[m], 47) || i(l[m], 33) || i(l[m], 63) || i(l[m], 124) || i(l[m], 94) || i(l[m], 58) || i(l[m], 37) || i(l[m], 94) ? (p = te(), p === "regex" ? p = e.token[r.count] : i(p, 42) && e.token[r.count] === "function" ? e.token[r.count] = "function*" : (S = "operator", M(p, 33) && p !== "++" && p !== "--" && ke(), q())) : d < 0 && l[m] !== c && (d = m), le > -1 && r.count === F.index[le] + 1 && i(e.token[F.index[le]], 59) && p !== F.word[le] && S !== "comment" && N.variableList === "list" && y(), m = m + 1;
  while (m < O);
  return d > -1 && k(), (M(e.token[r.count], 125) && i(e.token[0], 123) || M(e.token[0], 123)) && (M(e.token[r.count], 93) && i(e.token[0], 91) || M(e.token[0], 91)) && V(!1), t[0] === r.count && (p = H + t[1], S = "string", q()), e.token[r.count] === "x;" && (i(e.token[r.count - 1], 125) || i(e.token[r.count - 1], 93)) && e.begin[r.count - 1] === 0 && r.pop(e), N.objectSort && e.begin.length > 0 && Qt(0, r.count + 1), e;
}

// src/lexers/style.ts
function fn() {
  let { data: e, rules: s, source: n } = r, u = n.split(c), N = n.length, l = [], O = [], o = 0, b = c, f = c;
  function t(a) {
    r.push(e, {
      begin: r.stack.index,
      ender: -1,
      lexer: "style",
      lines: r.lineOffset,
      stack: r.stack.token,
      token: f,
      types: b
    }, a);
  }
  function h(a) {
    let g = a;
    do
      a = a - 1;
    while (i(u[a], 92) && a > 0);
    return (g - a) % 2 === 1;
  }
  function F(a) {
    let g = a.replace(/\s*!important/, " !important").split(c), W = /-?transition$/.test(e.token[r.count - 2]), C = [], U = /(\s|\(|,)-?0+\.?\d+([a-z]|\)|,|\s)/g, j = /(\s|\(|,)-?\.?\d+([a-z]|\)|,|\s)/g, y = 0, q = 0, G = c, B = g.length, V = [], ke = (te) => te;
    function we(te) {
      return te = te.replace(/\s*/g, c), /\/\d/.test(te) && a.indexOf("url(") === 0 ? te : ` ${te.charAt(0)} ${te.charAt(1)}`;
    }
    function ae(te) {
      return s.style.noLeadZero === !0 ? te.replace(/^-?\D0+(\.|\d)/, (ce) => ce.replace(/0+/, c)) : /0*\./.test(te) ? te.replace(/0*\./, "0.") : /0+/.test(/\d+/.exec(te)[0]) ? /^\D*0+\D*$/.test(te) ? te.replace(/0+/, "0") : te.replace(/\d+/.exec(te)[0], /\d+/.exec(te)[0].replace(/^0+/, c)) : te;
    }
    function L(te) {
      return te.replace(",", ", ");
    }
    function ye(te) {
      return `${te} `;
    }
    function me() {
      let te = y - 1, ce = te;
      if (te < 1)
        return !0;
      do
        ce = ce - 1;
      while (ce > 0 && i(g[ce], 92));
      return (te - ce) % 2 === 1;
    }
    if (y < B)
      do
        V.push(g[y]), (M(g[y - 1], 92) || me() === !1) && (G === c ? i(g[y], 34) ? (G = Be, q = q + 1) : i(g[y], 39) ? (G = $e, q = q + 1) : i(g[y], 40) ? (G = ")", q = q + 1) : i(g[y], 91) && (G = "]", q = q + 1) : i(g[y], 40) && i(G, 41) || i(g[y], 91) && i(G, 93) ? q = q + 1 : g[y] === G && (q = q - 1, q === 0 && (G = c))), G === c && i(g[y], 32) && (V.pop(), C.push(ke(V.join(c))), V = []), y = y + 1;
      while (y < B);
    if (C.push(ke(V.join(c))), B = C.length, y = 0, y < B)
      do
        s.style.noLeadZero === !0 && /^-?0+\.\d+[a-z]/.test(C[y]) === !0 ? C[y] = C[y].replace(/0+\./, ".") : s.style.noLeadZero === !1 && /^-?\.\d+[a-z]/.test(C[y]) ? C[y] = C[y].replace(".", "0.") : U.test(C[y]) || j.test(C[y]) ? C[y] = C[y].replace(U, ae).replace(j, ae) : /^(0+([a-z]{2,3}|%))$/.test(C[y]) && W === !1 ? C[y] = "0" : /^(0+)/.test(C[y]) ? (C[y] = C[y].replace(/0+/, "0"), /\d/.test(C[y].charAt(1)) && (C[y] = C[y].substr(1))) : /^url\((?!('|"))/.test(C[y]) && C[y].charCodeAt(C[y].length - 1) === 41 && (G = C[y].charAt(C[y].indexOf("url(") + 4), G !== "@" && M(G, 40) && M(G, 60) && (s.style.quoteConvert === "double" ? C[y] = C[y].replace(/url\(/, 'url("').replace(/\)$/, '")') : C[y] = C[y].replace(/url\(/, "url('").replace(/\)$/, "')"))), /^(\+|-)?\d+(\.\d+)?(e-?\d+)?\D+$/.test(C[y]) && (Le.css.units.has(C[y].replace(/(\+|-)?\d+(\.\d+)?(e-?\d+)?/, c)) || (C[y] = C[y].replace(/(\+|-)?\d+(\.\d+)?(e-?\d+)?/, ye))), /^\w+\(/.test(C[y]) && C[y].charAt(C[y].length - 1) === ")" && (C[y].indexOf("url(") !== 0 || C[y].indexOf("url(") === 0 && C[y].indexOf(ie) > 0) && (C[y] = C[y].replace(/,\S/g, L)), y = y + 1;
      while (y < B);
    return G = C.join(ie), G.charAt(0) + G.slice(1).replace(/\s*(\/|\+|\*)\s*(\d|\$)/, we);
  }
  function le() {
    let a = [], g = [], W = s.style.quoteConvert, C = o, U = 0, j = c, y = null, q = !1;
    function G() {
      if (g.push(u[C]), ue(u[C + 1]))
        do
          C = C + 1;
        while (C < N && ue(u[C + 1]));
    }
    if (C < N)
      do {
        if (i(u[C], 34) || i(u[C], 39) ? (y === null && (y = !1), a[a.length - 1] === u[C] && (M(u[C - 1], 92) || h(C - 1) === !1) ? (a.pop(), W === "double" ? u[C] = Be : W === "single" && (u[C] = $e)) : M(a[a.length - 1], 34) && M(a[a.length - 1], 39) && (M(u[C - 1], 92) || h(C - 1) === !1) ? (a.push(u[C]), W === "double" ? u[C] = Be : W === "single" && (u[C] = $e)) : i(u[C - 1], 92) && W !== "none" ? h(C - 1) === !0 && (W === "double" && i(u[C], 39) || W === "single" && i(u[C], 34)) && g.pop() : W === "double" && i(u[C], 34) ? u[C] = '\\"' : W === "single" && i(u[C], 39) && (u[C] = "\\'"), g.push(u[C])) : M(u[C - 1], 92) || h(C - 1) === !1 ? i(u[C], 40) ? (y === null && (y = !0), a.push(")"), G()) : i(u[C], 91) ? (y = !1, a.push("]"), G()) : (i(u[C], 35) || i(u[C], 64)) && i(u[C + 1], 123) ? (y = !1, g.push(u[C]), C = C + 1, a.push("}"), G()) : u[C] === a[a.length - 1] ? (g.push(u[C]), a.pop()) : g.push(u[C]) : g.push(u[C]), r.stack.token === "map" && a.length === 0 && (i(u[C + 1], 44) || i(u[C + 1], 41)))
          if (i(u[C + 1], 41) && i(e.token[r.count], 40))
            r.pop(e), r.stack.pop(), g.splice(0, 0, "(");
          else
            break;
        if (i(u[C + 1], 58)) {
          if (U = C, ue(u[U]))
            do
              U = U - 1;
            while (ue(u[U]));
          e.types[r.count] !== "start" && (j = u.slice(U - 6, U + 1).join(c), (j.indexOf("filter") === j.length - 6 || j.indexOf("progid") === j.length - 6) && (j = "filter"));
        }
        if (a.length === 0) {
          if (i(u[C + 1], 59) && h(C + 1) === !0 || i(u[C + 1], 58) && M(u[C], 58) && M(u[C + 2], 58) && j !== "filter" && j !== "progid" || i(u[C + 1], 123) || i(u[C + 1], 125) || i(u[C + 1], 47) && (i(u[C + 2], 42) || i(u[C + 2], 47))) {
            if (U = g.length - 1, ue(g[U]))
              do
                U = U - 1, C = C - 1, g.pop();
              while (ue(g[U]));
            break;
          }
          if (i(u[C + 1], 44))
            break;
        }
        C = C + 1;
      } while (C < N);
    o = C, r.stack.token === "map" && i(g[0], 40) && (l[l.length - 1] = l[l.length - 1] - 1), f = g.join(c).replace(/\s+/g, ie).replace(/^\s/, c).replace(/\s$/, c), y === !0 && (r.count > -1 && Le.css.atrules(f) && s.style.atRuleSpace === !0 ? e.token[r.count] = e.token[r.count].replace(/\s*\(/g, " (").replace(/\s*\)\s*/g, ") ").replace(/,\(/g, ", (") : f = f.replace(/\s+\(/g, "(").replace(/\s+\)/g, ")").replace(/,\(/g, ", (")), b === "colon" && e.types[r.count - 1] === "start" ? Le.css.pseudoClasses.has(f) && (e.token[r.count] = f = ":" + f, b = "pseudo", q = !0) : r.count > -1 && e.token[r.count].indexOf("extend(") === 0 ? b = "pseudo" : y === !0 && He(f.charAt(0)) === !1 && /^rgba?\(/.test(f) === !1 && f.indexOf("url(") !== 0 && (f.indexOf(ie) < 0 || f.indexOf(ie) > f.indexOf("(")) && f.charAt(f.length - 1) === ")" ? (i(e.token[r.count], 58) ? b = "value" : (f = f.replace(/,\u0020?/g, ", "), b = "function"), f = F(f)) : r.count > -1 && $e.indexOf(e.token[r.count].charAt(0)) > -1 && e.types[r.count] === "variable" ? b = "item" : i(g[0], 64) || g[0] === "$" ? (e.types[r.count] === "colon" && s.language === "css" && (e.types[r.count - 1] === "property" || e.types[r.count - 1] === "variable") ? b = "value" : r.count > -1 && (b = "item", j = e.token[r.count], C = j.indexOf("("), i(j[j.length - 1], 41) && C > 0 && (j = j.slice(C + 1, j.length - 1), e.token[r.count] = e.token[r.count].slice(0, C + 1) + F(j) + ")")), f = F(f)) : b = "item", q === !1 ? t(c) : q = !1;
  }
  function m(a) {
    let g = r.count, W = 0, C = c, U = [];
    function j() {
      if (!(r.count < 0)) {
        if (g > 0 && (e.types[g] === "comment" || e.types[g] === "ignore"))
          do
            g = g - 1, U.push(e.token[g]);
          while (g > 0 && e.lexer[g] === "style" && (e.types[g] === "comment" || e.types[g] === "ignore"));
        if (W = g - 1, W > 0 && (e.types[W] === "comment" || e.types[W] === "ignore"))
          do
            W = W - 1;
          while (W > 0 && e.lexer[g] === "style" && (e.types[W] === "comment" || e.types[W] === "ignore"));
        W < 0 && (W = 0), g < 0 && (g = 0), C = e.token[g][0];
      }
    }
    function y(G) {
      return G.replace(/\s*&/, " &").replace(/\s*&\s*{/, " & {").replace(/\s*>\s*/g, " > ").replace(/\s*\+\s*/g, " + ");
    }
    function q(G) {
      let B = G, V = e.begin[B];
      if (e.token[G] = e.token[G].replace(/\s*&/, " &").replace(/\s*&\s*{/, " & {").replace(/\s*>\s*/g, " > ").replace(/\s*\+\s*/g, " + ").replace(/:\s+/g, ": ").replace(/^\s+/, c).replace(/\s+$/, c).replace(/\s+::\s+/, "::"), i(e.token[B], 64) && (e.token[G] = e.token[G].replace(/(\(\s*[a-z-]+\s*)(:)(\S)/g, "$1$2 $3")), M(e.token[B], 44) && e.types[B] !== "comment" && (e.types[B] = "selector"), i(e.token[B - 1], 44) || i(e.token[B - 1], 58) || e.types[B - 1] === "comment" || e.types[B - 1] === "pseudo")
        if (e.types[B - 1] === "colon" && (e.types[B] === "selector" || e.types[B] === "at_rule") && (e.types[B - 2] === "template" || e.types[B - 2] === "liquid_start" || e.types[B - 2] === "liquid_else" || e.types[B - 2] === "liquid_end"))
          e.token[B - 1] = ":" + e.token[B] + ie, e.types[B - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: B
          });
        else if (e.types[B - 1] === "pseudo")
          e.token[B - 1] = `${e.token[B - 1]}${e.token[B]}`, e.types[B - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: B
          });
        else if (e.types[B - 2] === "comment")
          e.token[B - 1] = y(`${e.token[B - 1]}${e.token[B]}`), e.types[B - 1] = "selector", r.splice({
            data: e,
            howmany: 1,
            index: B
          });
        else
          do
            if (B = B - 1, e.begin[B] === V) {
              if (i(e.token[B], 59))
                break;
              M(e.token[B], 44) && e.types[B] !== "comment" && (e.types[B] = "selector"), e.token[B] === ":" && M(e.token[B - 1], 59) && (e.token[B - 1] = y(`${e.token[B - 1]}:${e.token[B + 1]}`), r.splice({
                data: e,
                howmany: 2,
                index: B
              }));
            } else
              break;
          while (B > 0);
      if (B = r.count, s.style.sortSelectors === !0 && i(e.token[B - 1], 44)) {
        let ke = [e.token[B]];
        do {
          if (B = B - 1, e.types[B] === "comment" || e.types[B] === "ignore")
            do
              B = B - 1;
            while (B > 0 && (e.types[B] === "comment" || e.types[B] === "ignore"));
          i(e.token[B], 44) && (B = B - 1), ke.push(e.token[B]);
        } while (B > 0 && (i(e.token[B - 1], 44) || e.types[B - 1] === "selector" || e.types[B - 1] === "comment" || e.types[B - 1] === "ignore"));
        ke.sort(), B = r.count, e.token[B] = ke.pop();
        do {
          if (B = B - 1, e.types[B] === "comment" || e.types[B] === "ignore")
            do
              B = B - 1;
            while (B > 0 && (e.types[B] === "comment" || e.types[B] === "ignore"));
          i(e.token[B], 44) && (B = B - 1), e.token[B] = ke.pop();
        } while (B > 0 && (i(e.token[B - 1], 44) || e.types[B - 1] === "selector" || e.types[B - 1] === "comment" || e.types[B - 1] === "ignore"));
      }
      g = r.count, j();
    }
    if (j(), a === "start" && (e.types[g] === "value" || e.types[g] === "variable") && (e.types[g] = "item"), e.lexer[r.count - 1] !== "style" || W < 0)
      a === "colon" ? i(C, 36) || i(C, 64) ? e.types[g] = "variable" : e.stack[g] !== "global" && (e.types[g] !== "comment" || e.types[g] !== "ignore") && (e.types[g] = "property") : e.lexer[g] === "style" && (e.types[g] = "selector", q(g));
    else if (a === "start" && e.types[g] === "function" && e.lexer[g] === "style")
      e.types[g] = "selector", q(g);
    else if (e.types[g] === "item" && e.lexer[g] === "style")
      if (a === "start")
        q(g), e.types[g] = "selector", e.token[g] === ":" && (e.types[W] = "selector"), e.token[g].indexOf("=\u201C") > 0 ? r.error = `Invalid Quote (\u201C, \\201c) used on line number ${r.lineNumber}` : e.token[g].indexOf("=\u201D") > 0 && (r.error = `Invalid Quote (\u201D, \\201d) used on line number ${r.lineNumber}`);
      else if (a === "end")
        i(C, 36) || i(C, 64) ? e.types[g] = "variable" : e.types[g] = "value", e.token[g] = F(e.token[g]);
      else if (a === "separator")
        if (e.types[W] === "colon" || i(e.token[W], 44) || i(e.token[W], 123)) {
          if (M(u[o], 59) && (e.types[W] === "selector" || e.types[W] === "at_rule" || i(e.token[W], 123)))
            e.types[g] = "selector", q(g);
          else if (i(e.token[g], 36) || i(e.token[g], 64))
            e.types[g] = "variable";
          else if (i(e.token[W], 58) && e.token[g] === "root") {
            e.types[W] = "selector", e.token[W] = e.token[W] + e.token[g], r.pop(e);
            return;
          } else
            e.types[g] = "value";
          e.token[g] = F(e.token[g]), e.token[g].charAt(0) === "\u201C" ? r.error = `Invalid Quote (\u201C, \\201c) used on line number ${r.lineNumber}` : e.token[g].charAt(0) === "\u201D" && (r.error = `Invalid (\u201D, \\201d) used on line number ${r.lineNumber}`);
        } else
          i(C, 36) || i(C, 64) ? e.types[g] = "variable" : e.types[W] === "value" || e.types[W] === "variable" ? (e.token[W] = e.token[W] + e.token[g], r.pop(e)) : e.types[g] = "value";
      else
        a === "colon" ? i(C, 36) || i(C, 64) ? e.types[g] = "variable" : e.types[g] = "property" : i(e.token[W], 64) && (e.types[W - 2] !== "variable" && e.types[W - 2] !== "property" || e.types[W - 1] === "separator") ? (e.types[W] = "variable", b = "variable", e.token[W] = F(e.token[W])) : a === "comment" && (i(C, 46) || i(C, 35)) && (e.types[g] = "selector");
  }
  function p() {
    let a = r.count;
    do
      a = a - 1;
    while (a > 0 && e.types[a] === "comment");
    e.token[a] !== ";" && r.splice({
      data: e,
      howmany: 0,
      index: a + 1,
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
  function S(a, g) {
    let W = [], C = c, U = c, j = 0, y = a.length;
    function q(G) {
      let B = r.count > 0 ? e.types[r.count - 1] : e.types[r.count];
      b === "item" && (B === "colon" ? e.types[r.count] = "value" : m(B)), i(u[o + 1], 32), b = G, f = zt(f, U), b.indexOf("start") > -1 || b.indexOf("else") > -1 ? t(f) : t(c);
    }
    if (O[O.length - 1] = !0, o < N)
      do {
        if (W.push(u[o]), C === c) {
          if (i(u[o], 34))
            C = Be;
          else if (i(u[o], 39))
            C = $e;
          else if (i(u[o], 47))
            i(u[o + 1], 47) ? C = "/" : i(u[o + 1], 42) && (C = "*");
          else if (i(g, u[o + 1].charCodeAt(0))) {
            do
              j = j + 1, o = o + 1, W.push(u[o]);
            while (o < N && j < g.length && u[o + 1] === g.charAt(j));
            if (j === g.length) {
              if (C = W.join(c), ue(C.charAt(y)))
                do
                  y = y + 1;
                while (ue(C.charAt(y)));
              j = y;
              do
                j = j + 1;
              while (j < g.length && !ue(C.charAt(j)));
              if (j === C.length && (j = j - g.length), a === "{%" && (U = Ue(C)), b === "item" && e.types[r.count - 1] === "colon" && (e.types[r.count - 2] === "property" || e.types[r.count - 2] === "variable")) {
                b = "value", e.types[r.count] = "value", Number.isNaN(Number(e.token[r.count])) === !0 && e.token[r.count].charAt(e.token[r.count].length - 1) !== ")" ? e.token[r.count] = e.token[r.count] + C : e.token[r.count] = e.token[r.count] + ie + C;
                return;
              }
              if (f = C, a === "{%") {
                let G = Array.from(Le.liquid.tags), B = G.length - 1, V = U.slice(0, U.indexOf(ie) + 1);
                if (V.indexOf("(") > 0 && (U = V.slice(0, V.indexOf("("))), Le.liquid.else.has(U)) {
                  q("liquid_else");
                  return;
                }
                if (B = G.length - 1, B > -1)
                  do {
                    if (U === G[B]) {
                      q("liquid_start");
                      return;
                    }
                    if (U === "end" + G[B]) {
                      q("liquid_end");
                      return;
                    }
                    B = B - 1;
                  } while (B > -1);
              } else if (a === "{{") {
                let G = C.slice(2), B = G.length, V = 0;
                do
                  V = V + 1;
                while (V < B && ue(G.charAt(V)) === !1 && G.charCodeAt(y) !== 40);
                if (G = G.slice(0, V), i(G[G.length - 2], 125) && (G = G.slice(0, G.length - 2)), G === "end") {
                  q("liquid_end");
                  return;
                }
              }
              q("liquid");
              return;
            }
            j = 0;
          }
        } else
          C === u[o] && (i(C, 34) || i(C, 39) ? C = c : i(C, 47) && (i(u[o], 13) || i(u[o], 10)) ? C = c : i(C, 42) && i(u[o + 1], 47) && (C = c));
        o = o + 1;
      } while (o < N);
  }
  function D(a) {
    let g;
    a ? (g = Ht({
      chars: u,
      start: o,
      end: N,
      lexer: "style",
      begin: "//",
      ender: H
    }), f = g[0], b = It.test(f) ? "ignore" : "comment") : (g = xt(u, {
      start: o,
      end: N,
      lexer: "style",
      begin: "/*",
      ender: "*/"
    }), f = g[0], b = $i.test(f) ? "ignore" : "comment"), t(c), o = g[1];
  }
  function I() {
    let a = r.lineOffset, g = {
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
    }, W = r.stack.index;
    function C(q) {
      if (e.token[j - 2] === q) {
        let G = e.token[j].replace(/\s*!important\s*/g, c).split(ie), B = G.length;
        e.token[j].indexOf("!important") > -1 && (g.data[q[4]] = !0), B > 3 ? (g.data[q][0] === c && (g.data[q][0] = G[0]), g.data[q][1] === c && (g.data[q][1] = G[1]), g.data[q][2] === c && (g.data[q][2] = G[2]), g.data[q][3] === c && (g.data[q][3] = G[3])) : B > 2 ? (g.data[q][0] === c && (g.data[q][0] = G[0]), g.data[q][1] === c && (g.data[q][1] = G[1]), g.data[q][2] === c && (g.data[q][2] = G[2]), g.data[q][3] === c && (g.data[q][3] = G[1])) : B > 1 ? (g.data[q][0] === c && (g.data[q][0] = G[0]), g.data[q][1] === c && (g.data[q][1] = G[1]), g.data[q][2] === c && (g.data[q][2] = G[0]), g.data[q][3] === c && (g.data[q][3] = G[1])) : (g.data[q][0] === c && (g.data[q][0] = G[0]), g.data[q][1] === c && (g.data[q][1] = G[0]), g.data[q][2] === c && (g.data[q][2] = G[0]), g.data[q][3] === c && (g.data[q][3] = G[0]));
      } else if (e.token[j - 2] === `${q}-bottom`)
        g.data[q][2] === c && (g.data[q][2] = e.token[j]);
      else if (e.token[j - 2] === `${q}-left`)
        g.data[q][3] === c && (g.data[q][3] = e.token[j]);
      else if (e.token[j - 2] === `${q}-right`)
        g.data[q][1] === c && (g.data[q][1] = e.token[j]);
      else if (e.token[j - 2] === `${q}-top`)
        g.data[q][0] === c && (g.data[q][0] = e.token[j]);
      else
        return;
      g.removes.push([j, q]), g.last[q] = j;
    }
    function U() {
      let q = 0, G = c, B = /^(0+([a-z]+|%))/, V = g.removes.length, ke = g.data.margin[0] !== c && g.data.margin[1] !== c && g.data.margin[2] !== c && g.data.margin[3] !== c, we = g.data.padding[0] !== c && g.data.padding[1] !== c && g.data.padding[2] !== c && g.data.padding[3] !== c;
      function ae(L) {
        if (B.test(g.data[L][0]) === !0 && (g.data[L][0] = "0"), B.test(g.data[L][1]) === !0 && (g.data[L][1] = "0"), B.test(g.data[L][2]) === !0 && (g.data[L][2] = "0"), B.test(g.data[L][3]) === !0 && (g.data[L][3] = "0"), g.data[L][0] === g.data[L][1] && g.data[L][0] === g.data[L][2] && g.data[L][0] === g.data[L][3] ? G = g.data[L][0] : g.data[L][0] === g.data[L][2] && g.data[L][1] === g.data[L][3] && g.data[L][0] !== g.data[L][1] ? G = `${g.data[L][0]} ${g.data[L][1]}` : g.data[L][1] === g.data[L][3] && g.data[L][0] !== g.data[L][2] ? G = `${g.data[L][0]} ${g.data[L][1]} ${g.data[L][2]}` : G = `${g.data[L][0]} ${g.data[L][1]} ${g.data[L][2]} ${g.data[L][3]}`, g.data[L[4]] === !0 && (G = `${G.replace(" !important", c)} !important`), g.last[L] > r.count) {
          q = W < 1 ? 1 : W + 1;
          do {
            if (e.begin[q] === W && e.types[q] === "value" && e.token[q - 2].indexOf(L) === 0) {
              g.last[L] = q;
              break;
            }
            q = q + 1;
          } while (q < r.count);
        }
        e.token[g.last[L]] = G, e.token[g.last[L] - 2] = L;
      }
      if (V > 1 && (ke === !0 || we === !0))
        do
          g.removes[q][0] !== g.last.margin && g.removes[q][0] !== g.last.padding && (ke === !0 && g.removes[q][1] === "margin" || we === !0 && g.removes[q][1] === "padding") && r.splice({
            data: e,
            howmany: e.types[g.removes[q][0] + 1] === "separator" ? 4 : 3,
            index: g.removes[q][0] - 2
          }), q = q + 1;
        while (q < V - 1);
      ke === !0 && ae("margin"), we === !0 && ae("padding"), y === !0 && (W < 0 ? r.error = "Brace mismatch. There appears to be more closing braces than starting braces." : Qt(W, r.count + 1));
    }
    let j = r.count, y = !1;
    do
      j = j - 1, e.begin[j] === W ? e.types[j] === "value" && e.types[j - 2] === "property" && (e.token[j - 2].indexOf("margin") === 0 ? C("margin") : e.token[j - 2].indexOf("padding") === 0 && C("padding")) : (y = !0, j = e.begin[j]);
    while (j > W);
    U(), r.lineOffset = a;
  }
  function d() {
    r.lineOffset = 1;
    do {
      if (i(u[o], 10) && (r.lineIndex = o, r.lineOffset = r.lineOffset + 1, r.lineNumber = r.lineNumber + 1), ue(u[o + 1]) === !1)
        break;
      o = o + 1;
    } while (o < N);
  }
  do
    ue(u[o]) ? d() : i(u[o], 47) && i(u[o + 1], 42) ? D(!1) : i(u[o], 47) && i(u[o + 1], 47) ? D(!0) : i(u[o], 123) && i(u[o + 1], 37) ? S("{%", "%}") : i(u[o], 123) && i(u[o + 1], 123) ? S("{{", "}}") : i(u[o], 123) || i(u[o], 40) && i(e.token[r.count], 58) && e.types[r.count - 1] === "variable" ? (m("start"), b = "start", f = u[o], i(u[o], 40) ? (t("map"), l.push(0)) : e.types[r.count] === "at_rule" || e.types[r.count] === "selector" || e.types[r.count] === "variable" ? i(e.token[r.count], 64) ? (e.types[r.count] = "at_rule", t(e.token[r.count])) : t(e.token[r.count]) : e.types[r.count] === "colon" ? t(e.token[r.count - 1]) : t("block"), O.push(!1)) : i(u[o], 125) || u[o] === ")" && r.stack.token === "map" && l[l.length - 1] === 0 ? i(u[o], 125) && i(e.token[r.count - 1], 123) && e.types[r.count] === "item" && e.token[r.count - 2] !== void 0 && e.token[r.count - 2].charCodeAt(e.token[r.count - 2].length - 1) === 64 ? (e.token[r.count - 2] = e.token[r.count - 2] + "{" + e.token[r.count] + "}", r.pop(e), r.pop(e), r.stack.pop()) : (i(u[o], 41) && l.pop(), m("end"), i(u[o], 125) && M(e.token[r.count], 59) && (e.types[r.count] === "value" || e.types[r.count] === "function" || e.types[r.count] === "variable" && (i(e.token[r.count - 1], 58) || i(e.token[r.count - 1], 59)) ? (s.correct === !0 ? f = ";" : f = "x;", b = "separator", t(c)) : e.types[r.count] === "comment" && p()), O.pop(), f = u[o], b = "end", i(u[o], 125) && I(), s.style.sortProperties === !0 && i(u[o], 125) && jt(e), t(c)) : i(u[o], 59) || i(u[o], 44) ? (e.types[r.count - 1] === "selector" || e.types[r.count - 1] === "at_rule" || e.types[r.count] !== "function" && i(e.token[r.count - 1], 125) ? m("start") : m("separator"), e.types[r.count] !== "separator" && h(o) === !0 && (f = u[o], b = "separator", t(c))) : r.count > -1 && i(u[o], 58) && e.types[r.count] !== "end" ? (m("colon"), f = ":", b = "colon", t(c)) : (r.stack.token === "map" && i(u[o], 40) && (l[l.length - 1] = l[l.length - 1] + 1), le()), o = o + 1;
  while (o < N);
  return s.style.sortProperties === !0 && jt(e), e;
}

// src/lexers/index.ts
function xi(e) {
  if (e === 1)
    return an();
  if (e === 3)
    return fn();
  if (e === 2)
    return un();
}

// src/format/markup.ts
function cn() {
  let { rules: e } = r, { lineBreakValue: s } = e.markup, n = r.start, u, N = -1, l = 0, O = 0, o = 0, b = isNaN(e.indentLevel) ? 0 : e.indentLevel, f = r.data, t = r.ender < 1 || r.ender > f.token.length ? f.token.length : r.ender + 1, h = Fe(null), F = e.language === "jsx" || e.language === "tsx", le = new Set(e.liquid.dedentTagList), m = /* @__PURE__ */ new Map(), p = r.start > 0 ? Array(r.start).fill(0, 0, r.start) : [], S = ye(), D = j(), I = [];
  function d(P, T) {
    return f.types[P] === T;
  }
  function a(P, T) {
    return f.stack[P] === T;
  }
  function g(P, T) {
    return f.token[P] === T;
  }
  function W(P, T) {
    return P > -1 && (f.types[P] || c).indexOf(T);
  }
  function C(P, T = !0, oe = !0) {
    let se = [], ee = e.preserveLine + 1, _ = Math.min(f.lines[n + 1] - 1, ee), Q = 0;
    if (P < 0 && (P = 0), T)
      do
        se.push(r.crlf), Q = Q + 1;
      while (Q < _);
    if (P > 0 && oe) {
      Q = 0;
      do
        se.push(D), Q = Q + 1;
      while (Q < P);
    }
    return se.join(c);
  }
  function U() {
    let P, T = f.lines[n + 1]; M(f.token[n][1], 37) && e.markup.commentIndent === !0 && (e.markup.commentDelimiters === "inline" || e.markup.commentDelimiters === "consistent" && /<!--\n/.test(f.token[n]) === !1);
    P = f.token[n].split(r.crlf);
    let se = d(n, "attribute"), ee = P.length - 1, _ = S[n - 1] > -1 ? se ? S[n - 1] + 1 : S[n - 1] : (() => {
      let k = n - 1, K = k > -1 && W(k, "start") > -1;
      if (d(n, "comment") && M(f.token[n][1], 37))
        return S[n] - 1;
      if (S[n] > -1 && d(n, "attribute"))
        return S[n] + 1;
      do {
        if (k = k - 1, S[k] > -1)
          return d(n, "content") && K === !1 ? S[k] : S[k] + 1;
        W(k, "start") > -1 && (K = !0);
      } while (k > 0);
      return k === -2 ? 0 : 1;
    })(), Q = 0;
    f.lines[n + 1] = 0;
    do
      d(n, "comment") ? (Q === 0 && (i(f.token[n][1], 37) && e.liquid.commentNewline === !0 || i(f.token[n][1], 37) === !1 && e.markup.commentNewline === !0) && (e.preserveLine === 0 || I.length > 0 && I[I.length - 1].lastIndexOf(H) + 1 < 2) && I.push(C(_)), P[Q] !== c ? (Q > 0 && (i(f.token[n][1], 37) && e.liquid.commentIndent === !0 || i(f.token[n][1], 37) === !1 && e.markup.commentIndent === !0) && I.push(D), P[Q + 1].trimStart() !== c ? I.push(P[Q], C(_)) : I.push(P[Q], H)) : P[Q + 1].trimStart() === c ? I.push(H) : I.push(C(_))) : se ? s === "align" || s === "force-align" ? I.push(P[Q].trim(), C(S[n])) : s === "indent" || s === "force-indent" ? Q + 1 === ee ? I.push(P[Q].trimEnd(), C(S[n])) : Q === 0 ? I.push(P[Q].replace(/(["'])\s+/, "$1" + C(_)).trim(), C(_)) : I.push(P[Q], C(_)) : (I.push(P[Q]), s === "force-preserve" && (Q + 1 === ee || Q === 0) ? I.push(C(S[n])) : I.push(r.crlf)) : I.push(P[Q], C(_)), Q = Q + 1;
    while (Q < ee);
    if (se && M(P[ee], 60) && m.get(n - 1) >= 2 && Qe(P[ee], 62) && e.markup.delimiterTerminus !== "inline") {
      m.delete(n - 1);
      let k = C(S[n - 1] - 1);
      I[I.length - 1] === k && I.push(e.indentChar.repeat(e.indentSize)), d(n - 1, "singleton") && mt(P[ee], 47) ? I.push(P[ee].slice(0, -2), k, "/>") : I.push(P[ee].slice(0, -1), k, ">");
    } else
      I.push(P[ee]);
    f.lines[n + 1] = T, d(n, "comment") && (d(n + 1, "liquid_end") || d(n - 1, "liquid_end")) ? I.push(C(S[n])) : S[n] === -10 ? I.push(ie) : I.push(C(S[n]));
  }
  function j() {
    let P = [e.indentChar], T = e.indentSize - 1, oe = 0;
    if (oe < T)
      do
        P.push(e.indentChar), oe = oe + 1;
      while (oe < T);
    return P.join(c);
  }
  function y() {
    O > 0 && (l = O - 1);
    let P = n + 1, T = 0;
    if (d(P, void 0))
      return P - 1;
    if (d(P, "comment") || n < t - 1 && W(P, "attribute") > -1)
      do {
        if (d(P, "jsx_attribute_start")) {
          T = P;
          do {
            if (d(P, "jsx_attribute_end") && f.begin[P] === T)
              break;
            P = P + 1;
          } while (P < t);
        } else if (d(P, "comment") === !1 && W(P, "attribute") < 0)
          return P;
        P = P + 1;
      } while (P < t);
    return P;
  }
  function q() {
    let P = f.token[n], T = ni.exec(P);
    if (T === null)
      return;
    let oe = n + 1, se = !1, ee = e.markup.selfCloseSpace === !0 && T[0] === "/>" ? ie : c;
    f.token[n] = P.replace(ni, c);
    do {
      if (d(oe, "jsx_attribute_end") && f.begin[f.begin[oe]] === n)
        se = !1;
      else if (f.begin[oe] === n) {
        if (d(oe, "jsx_attribute_start"))
          se = !0;
        else if (W(oe, "attribute") < 0 && se === !1)
          break;
      } else if (se === !1 && (f.begin[oe] < n || W(oe, "attribute") < 0))
        break;
      oe = oe + 1;
    } while (oe < t);
    d(oe - 1, "comment_attribute") && (ee = C(S[oe - 2] - 1)), f.token[oe - 1] = `${f.token[oe - 1]}${ee}${T[0]}`, d(oe, "comment");
  }
  function G() {
    if (d(n, "end") === !1 && Qe(f.token[n], 62) && M(f.token[n], 60) && m.get(f.begin[n]) >= 2) {
      m.delete(f.begin[n]);
      let P = C(S[n - 1] - 1).replace(/\n+/, H), T = `${f.token[n].slice(0, -1)}${P}>`;
      d(f.begin[n], "singleton") && i(f.token[n][f.token[n].length - 2], 47) ? f.token[n] = `${f.token[n].slice(0, -2)}${P}/>` : f.token[n] = T;
    }
  }
  function B() {
    let P = f.begin[n], T = n;
    do
      if (T = T - 1, g(T, "</li>") && g(T - 1, "</a>") && f.begin[f.begin[T]] === P && f.begin[T - 1] === f.begin[T] + 1)
        T = f.begin[T];
      else
        return;
    while (T > P + 1);
    T = n;
    do
      T = T - 1, d(T + 1, "attribute") ? p[T] = -10 : g(T, "</li>") === !1 && (p[T] = -20);
    while (T > P + 1);
  }
  function V() {
    let P = n, T = !1;
    if (f.lines[n + 1] === 0 && e.markup.forceIndent === !1) {
      do {
        if (f.lines[P] > 0) {
          T = !0;
          break;
        }
        P = P - 1;
      } while (P > N);
      P = n;
    } else
      T = !0;
    if (T === !0) {
      d(f.begin[P] - 1, "liquid") && (p[f.begin[P] - 1] = b);
      do
        p.push(b), P = P - 1;
      while (P > N);
      p[n] = b, (d(P, "attribute") || d(P, "liquid_attribute") || d(P, "jsx_attribute_start") || d(P, "start")) && d(n + 1, "comment") === !1 && d(n + 1, "start") === !1 && f.types[n + 1].startsWith("liquid") === !1 || d(n + 1, "liquid_end") ? p[P] = b + 1 : d(n + 1, "liquid_else") ? p[P] = b - 1 : d(O, "liquid") && (p[l] = b - 1, p[n - 1] = b);
    } else {
      do
        p.push(-20), P = P - 1;
      while (P > N);
      p[P] = -20;
    }
    N = -1;
  }
  function ke() {
    if (e.markup.forceIndent === !0 || e.markup.forceAttribute === !0) {
      p.push(b);
      return;
    }
    let P = b;
    if (O < t && (W(O, "end") > -1 || W(O, "start") > -1) && f.lines[O] > 0 ? (p.push(b), P = P + 1, n > 0 && d(n, "singleton") && W(n - 1, "attribute") > -1 && d(f.begin[n - 1], "singleton") && (f.begin[n] < 0 || d(f.begin[n - 1], "singleton") && f.begin[f.ender[n] - 1] !== n ? p[n - 1] = b : p[n - 1] = b + 1)) : n > 0 && d(n, "singleton") && W(n - 1, "attribute") > -1 ? (p[n - 1] = b, o = f.token[n].length, p.push(-10)) : f.lines[O] === 0 ? p.push(-20) : (e.wrap === 0 || n < t - 2 && f.token[n] !== void 0 && f.token[n + 1] !== void 0 && f.token[n + 2] !== void 0 && f.token[n].length + f.token[n + 1].length + f.token[n + 2].length + 1 > e.wrap && W(n + 2, "attribute") > -1 || f.token[n] !== void 0 && f.token[n + 1] !== void 0 && f.token[n].length + f.token[n + 1].length > e.wrap) && (d(n + 1, "singleton") || d(n + 1, "liquid")) ? p.push(b) : (o = o + 1, p.push(-10)), n > 0 && W(n - 1, "attribute") > -1 && f.lines[n] < 1 && (p[n - 1] = -20), o > e.wrap) {
      let T = n, oe = Math.max(f.begin[n], 0);
      if (d(n, "content") && e.markup.preserveText === !1) {
        let se = 0, ee = f.token[n].replace(Xe, ie).split(ie);
        do
          if (T = T - 1, p[T] < 0)
            se = se + f.token[T].length, p[T] === -10 && (se = se + 1);
          else
            break;
        while (T > 0);
        T = 0, oe = ee.length;
        do
          ee[T].length + se > e.wrap ? (ee[T] = r.crlf + ee[T], se = ee[T].length) : (ee[T] = ` ${ee[T]}`, se = se + ee[T].length), T = T + 1;
        while (T < oe);
        i(ee[0], 32) ? f.token[n] = ee.join(c).slice(1) : (p[n - 1] = P, f.token[n] = ee.join(c).replace(r.crlf, c)), f.token[n].indexOf(r.crlf) > 0 && (o = f.token[n].length - f.token[n].lastIndexOf(r.crlf));
      } else {
        do {
          if (T = T - 1, p[T] > -1) {
            o = f.token[n].length, f.lines[n + 1] > 0 && (o = o + 1);
            return;
          }
          if (W(T, "start") > -1) {
            o = 0;
            return;
          }
          if (f.lines[T + 1] > 0 && (d(T, "attribute") === !1 || d(T, "attribute") && d(T + 1, "attribute")) && (d(T, "singleton") === !1 || d(T, "attribute") && d(T + 1, "attribute"))) {
            o = f.token[n].length, f.lines[n + 1] > 0 && (o = o + 1);
            break;
          }
        } while (T > oe);
        d(T, "content") ? p[T] = -20 : p[T] = P;
      }
    }
  }
  function we() {
    let P = n;
    f.types[P - 1] === "script_start" && i(f.token[P - 1], 123) && (p[P - 1] = -20);
    do {
      if (f.lexer[n + 1] === "markup" && f.begin[n + 1] < P && d(n + 1, "start") === !1 && d(n + 1, "singleton") === !1)
        break;
      p.push(0), n = n + 1;
    } while (n < t);
    h[P] = n, f.types[n + 1] === "script_end" && f.token[n + 1] === "}" ? p.push(-20) : (f.types[n + 1], p.push(b - 1)), O = y(), f.lexer[O] === "markup" && f.stack[n].indexOf("attribute") < 0 && (f.types[O] === "end" || f.types[O] === "liquid_end") && (b = b - 1);
  }
  function ae(P) {
    let T = f.token[P].replace(/\s+/g, ie).split(ie), oe = T.length, se = 1, ee = T[0].length;
    do
      ee + T[se].length > e.wrap ? (ee = T[se].length, T[se] = r.crlf + T[se]) : (T[se] = ` ${T[se]}`, ee = ee + T[se].length), se = se + 1;
    while (se < oe);
    f.token[P] = T.join(c);
  }
  function L() {
    let P = n - 1, T = n, oe = !1, se = !1, ee = W(P + 1, "end"), _ = f.token[P].length + 1, Q = 0, k = (() => {
      if (W(n, "start") > 0) {
        let x = n;
        do {
          if (d(x, "end") && f.begin[x] === n && x < t - 1 && W(x + 1, "attribute") > -1) {
            oe = !0;
            break;
          }
          x = x + 1;
        } while (x < t);
      } else
        n < t - 1 && W(n + 1, "attribute") > -1 && (oe = !0);
      return d(O, "end") || d(O, "liquid_end") || d(O, "liquid_when") && e.markup.forceIndent === !0 ? d(P, "singleton") ? b + 2 : b + 1 : d(P, "singleton") ? b + 1 : b;
    })();
    if (oe === !1 && d(n, "comment_attribute")) {
      p.push(b), p[P] = f.types[P] === "singleton" ? b + 1 : b;
      return;
    }
    function K(x) {
      e.markup.forceAttribute === !1 ? p.push(-10) : e.markup.forceAttribute === !0 || x >= e.markup.forceAttribute ? e.liquid.indentAttribute === !0 ? (d(n - 1, "liquid_attribute_start") && (p[n - 1] = k + Q), p.push(k + Q)) : p.push(k) : p.push(-10);
    }
    k < 1 && (k = 1), ee = 0;
    do
      ee = ee + 1;
    while (W(n + ee, "attribute") > -1 && (d(n + ee, "end") === !1 || d(n + ee, "liquid_when") === !1 || d(n + ee, "singleton") === !1 || d(n + ee, "start") === !1 || d(n + ee, "comment") === !1));
    (s === "force-preserve" || s === "force-align" || s === "force-indent") && (ht(e.markup.forceAttribute) && e.markup.forceAttribute === !1 || yt(e.markup.forceAttribute) && ee <= e.markup.forceAttribute) && (ee = 1 / 0);
    do {
      if (o = o + f.token[n].length + 1, f.types[n].indexOf("attribute") > 0)
        d(n, "comment_attribute") ? p.push(k) : W(n, "start") > 0 && W(n, "liquid") < 0 ? (se = !0, n < t - 2 && f.types[n + 2].indexOf("attribute") > 0 ? (p.push(-20), n = n + 1, h[n] = n) : (P === n - 1 && oe === !1 ? F ? p.push(-20) : p.push(k) : F ? p.push(-20) : p.push(k + 1), f.lexer[n + 1] !== "markup" && (n = n + 1, we()))) : e.liquid.indentAttribute === !0 ? d(n, "liquid_attribute_start") ? (Q > 0 ? p.push(k + Q) : p.push(k), Q = Q + 1) : d(n, "liquid_attribute_else") ? p[n - 1] = k + Q - 1 : d(n, "liquid_attribute_end") ? (Q = Q - 1, p[n - 1] = k + Q) : K(ee) : W(n, "end") > 0 && d(n, "liquid_attribute_end") === !1 ? (p[n - 1] !== -20 && (p[n - 1] = p[f.begin[n]] - 1), f.lexer[n + 1] !== "markup" ? p.push(-20) : p.push(k)) : W(n, "liquid_attribute") > -1 ? (_ = _ + f.token[n].length + 1, e.markup.preserveAttribute === !0 ? p.push(-10) : e.markup.forceAttribute === !0 || e.markup.forceAttribute >= 1 || se === !0 || n < t - 1 && W(n + 1, "attribute") > -1 ? K(ee) : p.push(-10)) : p.push(k);
      else if (d(n, "attribute"))
        _ = _ + f.token[n].length + 1, e.markup.preserveAttribute === !0 ? p.push(-10) : e.markup.forceAttribute === !0 || e.markup.forceAttribute >= 1 || se === !0 || n < t - 1 && W(n + 1, "attribute") > -1 ? K(ee) : p.push(-10);
      else if (f.begin[n] < P + 1)
        break;
      n = n + 1;
    } while (n < t);
    if (n = n - 1, W(n, "liquid") < 0 && W(n, "end") > -1 && W(n, "attribute") > 0 && d(P, "singleton") === !1 && p[n - 1] > 0 && oe === !0 && (p[n - 1] = p[n - 1] - 1), p[n] !== -20 && (F === !0 && W(P, "start") > -1 && d(n + 1, "script_start") ? p[n] = k : g(n, "/") && p[n - 1] !== 10 ? p[n - 1] = -10 : p[n] = p[P]), e.markup.forceAttribute === !0)
      o = 0, p[P] = k, ee >= 2 && e.markup.delimiterTerminus === "force" && m.set(P, ee);
    else if (e.markup.forceAttribute >= 1)
      if (ee >= e.markup.forceAttribute) {
        p[P] = k;
        let x = n - 1;
        do
          (d(x, "liquid") && p[x] === -10 || d(x, "attribute") && p[x] === -10) && (p[x] = k), x = x - 1;
        while (x > P);
        (e.markup.delimiterTerminus === "force" && ee >= 2 || e.markup.delimiterTerminus === "adapt" && ee === 1 / 0) && m.set(P, ee);
      } else
        p[P] = -10;
    else
      p[P] = -10;
    if (e.markup.preserveAttribute === !0 || g(P, "<%xml%>") || g(P, "<?xml?>")) {
      o = 0;
      return;
    }
    if (T = n, T > P + 1) {
      if (e.markup.selfCloseSpace === !1 && (_ = _ - 1), _ > e.wrap && e.wrap > 0 && e.markup.forceAttribute === !1) {
        p[P] = k, o = f.token[n].length, T = T - 1;
        do
          f.token[T].length > e.wrap && ue(f.token[T]) && ae(T), (W(T, "liquid") > -1 && p[T] === -10 || d(T, "attribute") && p[T] === -10) && (p[T] = k), T = T - 1;
        while (T > P);
      }
    } else
      e.wrap > 0 && d(n, "attribute") && f.token[n].length > e.wrap && ue(f.token[n]) && ae(n);
  }
  function ye() {
    do
      f.lexer[n] === "markup" ? (d(n, "doctype") && (p[n - 1] = b), W(n, "attribute") > -1 ? L() : d(n, "comment") ? (N < 0 && (N = n), V()) : d(n, "comment") === !1 && (O = y(), (d(O, "end") || d(O, "liquid_case_end") || d(O, "liquid_end") && d(n, "liquid_else") === !1) && (b > -1 && (b = b - 1), (g(n, "</ol>") || g(n, "</ul>") || g(n, "</dl>")) && B()), d(n, "script_end") && d(O, "end") ? f.lines[O] < 1 ? p.push(-20) : f.lines[O] > 1 ? p.push(b) : p.push(-10) : (e.markup.forceIndent === !1 || e.markup.forceIndent === !0 && d(O, "script_start")) && (d(n, "content") || d(n, "singleton") || d(n, "liquid")) ? (o = o + f.token[n].length, f.lines[O] > 0 && d(O, "script_start") ? p.push(-10) : e.wrap > 0 && d(n, "singleton") === !1 && (W(n, "liquid") < 0 || O < t && W(n, "liquid") > -1 && W(O, "liquid") < 0) ? ke() : O < t && (W(O, "end") > -1 || W(O, "start") > -1) && (f.lines[O] > 0 || W(n, "liquid_") > -1) ? (d(O, "liquid_case_end") && le.has("case") === !1 && (b = b - 1), p.push(b)) : f.lines[O] === 0 ? p.push(-20) : f.lines[O] === 1 ? p.push(-10) : (d(O, "liquid_when") && (d(n, "liquid") || d(n, "content")) && (b = b - 1), p.push(b))) : d(n, "start") || d(n, "liquid_start") || d(n, "liquid_bad_start") ? (b = b + 1, F === !0 && i(f.token[n + 1], 123) ? f.lines[O] === 0 ? p.push(-20) : f.lines[O] > 1 ? p.push(b) : p.push(-10) : d(n, "start") && d(O, "end") ? f.stack[n] === "liquid" || W(O - 1, "comment") > -1 ? p.push(b) : p.push(-20) : d(n, "start") && d(O, "script_start") ? p.push(-10) : f.lines[O] === 0 && (d(O, "content") || d(O, "singleton") || d(n, "start") && d(O, "liquid") && e.markup.forceIndent === !1) ? d(O, "content") ? ke() : p.push(-20) : p.push(b)) : e.markup.forceIndent === !1 && f.lines[O] === 0 && (d(O, "content") || d(O, "singleton")) || d(n + 2, "script_end") ? p.push(-20) : d(n, "liquid_else") && d(O, "liquid_end") ? (b = b - 1, p[n - 1] = b, p.push(b)) : d(n, "liquid_else") && d(O, "liquid_else") ? (p[n - 1] = b - 1, p.push(b - 1)) : d(n, "liquid_else") && (d(O, "content") || d(O, "liquid")) ? (p[n - 1] = b - 1, p.push(b)) : e.markup.forceIndent === !0 && (d(n, "content") && (d(O, "liquid") || d(O, "content")) || d(n, "liquid") && (d(O, "content") || d(O, "liquid"))) ? f.lines[O] < 1 ? p.push(-20) : f.lines[O] > 1 ? p.push(b) : p.push(-10) : d(n, "liquid_bad_start") ? (b = b + 1, p.push(b)) : d(O, "liquid_bad_end") ? (b = b - 1, p.push(b)) : d(O, "liquid_else") && p[n - 1] === b ? p.push(b - 1) : d(n, "liquid_else") && p[n - 1] === b && e.markup.forceIndent === !1 ? (p[n - 1] = b - 1, p.push(b)) : d(l, "liquid_start") && d(O, "liquid_end") && f.lines[O] === 0 ? p[n - 1] = -20 : d(n, "liquid_case_start") ? (le.has("case") === !1 && (b = b + 1), p.push(b)) : d(n, "liquid_when") && d(O, "liquid_when") === !1 ? (d(l, "attribute") && e.markup.forceIndent === !1 ? p[n - 1] = b - 1 : b = b + 1, p.push(b)) : d(O, "liquid_when") && d(n, "liquid_when") === !1 ? (b = b - 1, p.push(b)) : (d(O, "liquid_case_end") && le.has("case") === !1 && (b = b - 1), p.push(b))), d(n, "content") === !1 && d(n, "singleton") === !1 && d(n, "liquid") === !1 && d(n, "liquid_when") === !1 && d(n, "attribute") === !1 && (o = 0)) : (o = 0, we()), n = n + 1;
    while (n < t);
    return p;
  }
  function me() {
    let P = f.token[n].split(H), T = e.indentChar.repeat(e.indentSize), oe = P.length, se = 0, ee = H;
    ee += C(S[n - 1], !1) + T;
    do {
      if (se === 0)
        if (se + 1 === oe - 1 && (P[se + 1].length === 2 || P[se + 1].length === 3)) {
          ee.length > 1 && (ee = ee.slice(0, -2)), I.push(P[se], ee, P[se + 1]);
          break;
        } else
          I.push(P[se], ee);
      else
        se === oe - 1 ? I.push(P[se]) : (se + 1 === oe - 1 && (P[se + 1].length === 2 || P[se + 1].length === 3) && (ee = ee.slice(0, -2)), I.push(P[se], ee));
      se = se + 1;
    } while (se < oe);
  }
  function te() {
    let P = f.token[n].split(r.crlf), T = P.length, oe = C(S[n - 1], !1), se = 0, ee = 0;
    do
      P[se] !== c ? (isNaN(ee) || (I.push(ee === 0 ? H : H.repeat(ee)), ee = NaN), P[se].startsWith(oe) || (P[se] = oe + P[se])) : isNaN(ee) || (ee = ee + 1), se = se + 1;
    while (se < T);
    ee = -1;
    do {
      if (se = se - 1, P[se] !== c)
        break;
      ee = ee + 1;
    } while (se > -1);
    if (ee === -1)
      I.push(P.join(r.crlf).replace(Ot, c)), I.push(C(S[n]));
    else {
      let _ = P.join(r.crlf).replace(Ot, c).replace(Pe, c);
      ee === 0 ? I.push(_, C(S[n])) : I.push(_, H.repeat(ee), C(S[n]));
    }
  }
  function ce() {
    if (ct.test(f.token[n])) {
      let P = f.token[n].split(H), T = P.length, oe = 0;
      do
        P[oe] === c ? oe + 1 !== T && P[oe + 1] !== c ? I.push(H, C(S[n], !1, !0)) : I.push(H) : oe + 1 === T ? I.push(P[oe], H, C(S[n], !1, !0)) : I.push(P[oe], H, C(S[n], !1, !0)), oe = oe + 1;
      while (oe < T);
    } else
      I.push(f.token[n], C(S[n]));
  }
  function J() {
    n = r.start, u = e.indentLevel, I.length === 0 && u > 0 && I.push(C(S[n], !1, !0));
    do {
      if (f.lexer[n] === "markup")
        n < t - 1 && (d(n, "start") || d(n, "singleton") || d(n, "xml")) && W(n, "attribute") < 0 && Ke(f.types[n + 1]) === !1 && W(n + 1, "attribute") > -1 && q(), d(n, "comment") && i(f.token[n].trimStart()[1], 37) && e.liquid.preserveComment === !0 ? (I.push(f.token[n]), (d(n + 1, "comment") && i(f.token[n + 1].trimStart()[1], 37) && e.liquid.preserveComment === !0) === !1 ? I.push(C(S[n])) : I.push(C(S[n], !0, !1))) : d(n, "comment") && i(f.token[n].trimStart()[1], 33) && e.markup.preserveComment === !0 ? I.push(f.token[n]) : Ke(f.token[n]) === !1 && f.token[n].indexOf(r.crlf) > 0 && (d(n, "content") && e.markup.preserveText === !1 || d(n, "comment") && M(f.token[n].trimStart()[1], 33) || d(n, "attribute")) ? U() : d(n, "comment") ? ce() : d(n, "liquid_capture") ? I.push(f.token[n], C(S[n])) : d(n, "ignore") ? a(n, "script") || a(n, "style") ? te() : (I.push(f.token[n]), d(n + 1, "ignore") === !1 ? d(n + 1, "ignore_next") ? I.push(C(S[n], !0, !1)) : I.push(C(S[n])) : I.push(C(S[n], !0, !1))) : e.markup.forceIndent === !1 && d(n, "liquid") && d(n + 1, "end") && f.lines[n] === 0 ? I.push(f.token[n]) : (u = S[n], e.markup.delimiterTerminus === "force" && G(), ct.test(f.token[n]) && W(n, "liquid") > -1 && d(n, "liquid_end") === !1 ? me() : I.push(f.token[n]), S[n] === -10 && n < t - 1 ? I.push(ie) : S[n] > -1 && (d(n, "ignore") === !1 && d(n + 1, "ignore_next") === !0 || d(n, "ignore") === !1 && d(n, "ignore_next") === !1 && d(n + 1, "ignore") === !0 && a(n + 1, "script") === !1 && a(n + 1, "style") === !1 ? I.push(C(S[n], !0, !1)) : d(n, "ignore") && d(n + 1, "ignore") === !1 && d(n + 1, "ignore_next") === !1 ? I.push(C(S[n])) : d(n + 1, "comment") && e.markup.preserveComment === !0 && Qi(f.token[n + 1].trimStart()[1], 33, 37) ? I.push(C(S[n], !0, !1)) : d(n + 1, "ignore") === !1 && d(n + 1, "ignore_next") === !1 && (d(n + 1, "content") ? I.push(C(S[n], !0, !1)) : I.push(C(S[n])))));
      else {
        r.start = n, r.ender = h[n], u > 0 && e.liquid.dedentTagList.includes(f.stack[n]) && (I.splice(I.length - 1, 1, C(S[n] - 1)), u = u - 1);
        let P = r.external(u);
        (e.language === "jsx" || e.language === "tsx") && (f.types[n - 1] === "template_string_end" || f.types[n - 1] === "jsx_attribute_start" || f.types[n - 1] === "script_start") ? I.push(P) : (I.push(P), (e.markup.forceIndent || S[r.iterator] > -1 && n in h) && (h[n] > n && (n = r.iterator), I.push(C(S[n])))), n !== r.iterator && (n = r.iterator);
      }
      n = n + 1;
    } while (n < t);
    return r.iterator = t - 1, e.endNewline === !0 ? I.join(c).replace(/\s*$/, r.crlf) : I.join(c).trimEnd();
  }
  return J();
}

// src/format/script.ts
function pn() {
  let { data: e, rules: s } = r, n = r.language === "json" ? s.json : s.script, N = 0, l = {}, O = "script", o = r.ender < 1 || r.ender > e.token.length ? e.token.length : r.ender + 1, b = (() => {
    let t = r.start, h = s.indentLevel, F = !1, le = !1, m = c, p = c, S = e.types[0], D = e.token[0], I = [-1], d = [], a = r.start > 0 ? Array(r.start).fill(0, 0, r.start) : [], g = [], W = [[]], C = [], U = [], j = [], y = [!1], q = [], G = [];
    function B() {
      V(!1, !1);
      let _ = n.commentIndent === !0 ? h : 0;
      if (F === !1 && /\/\u002a\s*global\s/.test(e.token[t])) {
        let Q = e.token[t].replace(/\/\u002a\s*global\s+/, c).replace(/\s*\u002a\/$/, c).split(","), k = Q.length;
        do
          k = k - 1, Q[k] = Q[k].replace(/\s+/g, c), Q[k] !== c && r.stack.push([Q[k], -1]);
        while (k > 0);
      }
      if (e.types[t - 1] === "comment" || e.types[t + 1] === "comment")
        a[t - 1] = _;
      else if (e.lines[t] < 2) {
        let Q = t + 1;
        if (e.types[Q] === "comment")
          do
            Q = Q + 1;
          while (Q < o && e.types[Q] === "comment");
        if (t < o - 1 && e.stack[Q] !== "block" && (i(e.token[Q], 123) || e.token[Q] === "x{")) {
          let k = r.stack.length;
          if (e.begin.splice(t, 0, e.begin[Q]), e.ender.splice(t, 0, e.ender[Q]), e.lexer.splice(t, 0, e.lexer[Q]), e.lines.splice(t, 0, e.lines[Q]), e.stack.splice(t, 0, e.stack[Q]), e.token.splice(t, 0, e.token[Q]), e.types.splice(t, 0, e.types[Q]), k > 0)
            do
              if (k = k - 1, r.stack[k][1] === Q)
                r.stack[k][1] = t;
              else if (r.stack[k][1] < t)
                break;
            while (k > 0);
          Q = Q + 1, e.begin.splice(Q, 1), e.ender.splice(Q, 1), e.lexer.splice(Q, 1), e.lines.splice(Q, 1), e.stack.splice(Q, 1), e.token.splice(Q, 1), e.types.splice(Q, 1), k = t + 1;
          do
            e.begin[k] = t, e.stack[k] = e.stack[Q], k = k + 1;
          while (k < Q);
          k = k + 1;
          do {
            if (e.begin[k] === e.begin[Q] && (e.begin[k] = t, e.types[k] === "end"))
              break;
            k = k + 1;
          } while (k < o - 1);
          e.begin[Q] = t, t = t - 1;
        } else
          a[t - 1] = -10, e.stack[t] === "paren" || e.stack[t] === "method" ? a.push(h + 2) : a.push(h), n.commentIndent === !0 && a[t] > -1 && e.lines[t] < 3 && (e.lines[t] = 3);
        e.types[t + 1] !== "comment" && (F = !0);
        return;
      } else
        i(e.token[t - 1], 44) ? a[t - 1] = _ : i(D, 61) && e.types[t - 1] !== "comment" && /^\/\*{2}\s*@[A-Za-z_]+/.test(p) === !0 ? a[t - 1] = -10 : i(D, 123) && e.types[t - 1] !== "comment" && e.lines[0] < 2 ? e.stack[t] === "function" ? a[t - 1] = _ : a[t - 1] = /\n/.test(p) ? _ : -10 : a[t - 1] = _;
      e.types[t + 1] !== "comment" && (F = !0), i(e.token[e.begin[t]], 40) ? a.push(h + 1) : a.push(h), a[t] > -1 && e.lines[t] < 3 && (e.types[t - 1] === "comment" && p.startsWith("//") ? e.lines[t] = 2 : e.lines[t] = 3), n.commentNewline === !0 && p.startsWith("//") === !1 && e.lines[t] >= 3 && (e.lines[t] = 2);
    }
    function V(_, Q) {
      let k = t - 1, K = _ === !0 ? 0 : 1, x = W[W.length - 1] === void 0 ? [] : W[W.length - 1], w = Q === !1 && e.stack[t] === "array" && _ === !0 && M(p, 91);
      if (!(U[U.length - 1] === !1 || e.stack[t] === "array" && n.arrayFormat === "inline" || e.stack[t] === "object" && n.objectIndent === "inline")) {
        U[U.length - 1] = !1;
        do {
          if (e.types[k] === "end" ? K = K + 1 : e.types[k] === "start" && (K = K - 1), e.stack[k] === "global")
            break;
          if (K === 0) {
            if (e.stack[t] === "class" || e.stack[t] === "map" || w === !1 && (_ === !1 && e.token[k] !== "(" && e.token[k] !== "x(" || _ === !0 && i(e.token[k], 44)))
              e.types[k + 1] === "liquid_start" ? e.lines[k] < 1 ? a[k] = -20 : a[k] = h - 1 : x.length > 0 && x[x.length - 1] > -1 ? a[k] = h - 1 : a[k] = h;
            else if (e.stack[t] === "array" && e.types[t] === "operator" && (i(e.token[k], 44) && (a[k] = h), k === e.begin[t]))
              break;
            if (_ === !1)
              break;
          }
          if (K < 0) {
            e.types[k + 1] === "liquid_start" || e.types[k + 1] === "template_string_start" ? e.lines[k] < 1 ? a[k] = -20 : a[k] = h - 1 : x.length > 0 && x[x.length - 1] > -1 ? a[k] = h - 1 : a[k] = h;
            break;
          }
          k = k - 1;
        } while (k > -1);
      }
    }
    function ke() {
      let _ = Ke(W[W.length - 1]) ? [] : W[W.length - 1];
      function Q() {
        let k = t, K = !1, x = e.begin[k];
        do {
          if (k = k - 1, e.lexer[k] === "markup") {
            K = !0;
            break;
          }
          e.begin[k] !== x && (k = e.begin[k]);
        } while (k > x);
        if (K === !0) {
          k = t;
          do
            k = k - 1, e.begin[k] !== x ? k = e.begin[k] : i(e.token[k], 44) && (a[k] = h + 1);
          while (k > x);
          a[x] = h + 1, a[t - 1] = h;
        } else
          a[t - 1] = -20;
      }
      if (i(p, 41) && i(e.token[t + 1], 46) && M(e.token[_[0]], 58) && _[_.length - 1] > -1) {
        let k = e.begin[t], K = !1, x = !1;
        do
          k = k - 1;
        while (k > 0 && a[k] < -9);
        K = a[k] === h, k = t + 1;
        do {
          if (k = k + 1, i(e.token[k], 123)) {
            x = !0;
            break;
          }
          if (e.begin[k] === e.begin[t + 1] && (e.types[k] === "separator" || e.types[k] === "end"))
            break;
        } while (k < o);
        K === !1 && x === !0 && W.length > 1 && (W[W.length - 2].push(e.begin[t]), h = h + 1);
      }
      if (S !== "separator" && L(), i(e.token[t + 1], 58) && (e.stack[t] === "object" || e.stack[t] === "array") && V(!0, !1), i(e.token[e.begin[t] - 1], 44) && (i(e.token[t + 1], 125) || i(e.token[t + 1], 93)) && (e.stack[t] === "object" || e.stack[t] === "array") && V(!0, !1), e.stack[t] !== "attribute" && (M(p, 41) && p !== "x)" && (e.lexer[t - 1] !== "markup" || e.lexer[t - 1] === "markup" && e.token[t - 2] !== "return") && (h = h - 1), i(p, 125) && e.stack[t] === "switch" && n.noCaseIndent === !1 && (h = h - 1)), i(p, 125) || p === "x}") {
        if (e.types[t - 1] !== "comment" && D !== "{" && D !== "x{" && S !== "end" && S !== "string" && S !== "number" && S !== "separator" && D !== "++" && D !== "--" && (t < 2 || e.token[t - 2] !== ";" || e.token[t - 2] !== "x;" || D === "break" || D === "return")) {
          let k = t - 1, K = !1, x = e.begin[t], w = d.length;
          do {
            if (e.begin[k] === x) {
              if ((i(e.token[k], 61) || i(e.token[k], 59) || e.token[k] === "x;") && (K = !0), i(e.token[k], 46) && a[k - 1] > -1) {
                U[U.length - 1] = !1, a[x] = h + 1, a[t - 1] = h;
                break;
              }
              if (k > 0 && e.token[k] === "return" && (e.token[k - 1] === ")" || e.token[k - 1] === "x)" || e.token[k - 1] === "{" || e.token[k - 1] === "x{" || e.token[k - 1] === "}" || e.token[k - 1] === "x}" || e.token[k - 1] === ";" || e.token[k - 1] === "x;")) {
                h = h - 1, a[t - 1] = h;
                break;
              }
              if (i(e.token[k], 58) && g.length === 0 || i(e.token[k], 44) && K === !1)
                break;
              if (k === 0 || e.token[k - 1] === "{" || e.token[k - 1] === "x{" || e.token[k] === "for" || e.token[k] === "if" || e.token[k] === "do" || e.token[k] === "function" || e.token[k] === "while" || e.token[k] === "var" || e.token[k] === "let" || e.token[k] === "const" || e.token[k] === "with") {
                d[w - 1] === !1 && w > 1 && (t === o - 1 || e.token[t + 1] !== ")" && e.token[t + 1] !== "x)") && e.stack[t] !== "object" && (h = h - 1);
                break;
              }
            } else
              k = e.begin[k];
            k = k - 1;
          } while (k > x);
        }
        I.pop();
      }
      if (n.bracePadding === !1 && p !== "}" && p !== "]" && S !== "markup" && S !== "liquid" && (a[t - 1] = -20), n.bracePadding === !0 && S !== "start" && D !== ";" && (a[e.begin[t]] < -9 || U[U.length - 1] === !0))
        a[e.begin[t]] = -10, a[t - 1] = -10, a.push(-20);
      else if (e.stack[t] === "attribute")
        a[t - 1] = -20, a.push(h);
      else if (e.stack[t] === "array" && (_.length > 0 || C[C.length - 1] === !0))
        we(), U[U.length - 1] = !1, a[e.begin[t]] = h + 1, a[t - 1] = h, a.push(-20);
      else if (_.length > 0 && (e.stack[t] === "object" || e.begin[t] === 0 && i(p, 125)))
        we(), U[U.length - 1] = !1, a[e.begin[t]] = h + 1, a[t - 1] = h, a.push(-20);
      else if (p === ")" || p === "x)") {
        let k = p === ")" && M(D, 40) && G.length > 0 ? G.pop() + 1 : 0, K = e.token[e.begin[t] - 1] === "if" ? (() => {
          let x = t;
          do
            if (x = x - 1, e.token[x] === ")" && a[x - 1] > -1)
              return k;
          while (x > e.begin[t]);
          return k + 5;
        })() : k;
        if (k > 0 && (r.language !== "jsx" || r.language === "jsx" && e.token[e.begin[t] - 1] !== "render")) {
          let x = s.wrap, w = e.begin[t], A = G.length, v = t - 2;
          if (K > x) {
            a[e.begin[t]] = h + 1, a[t - 1] = h;
            do
              e.begin[v] === w ? e.token[v] === "&&" || e.token[v] === "||" ? a[v] = h + 1 : a[v] > -1 && e.types[v] !== "comment" && e.token[v + 1] !== "." && (a[v] = a[v] + 1) : a[v] > -1 && e.token[v + 1] !== "." && (a[v] = a[v] + 1), v = v - 1;
            while (v > w);
          } else
            A > 0 && (G[A - 1] = G[A - 1] + k);
        } else if (p === ")" && t > e.begin[t] + 2 && e.lexer[e.begin[t] + 1] === O && e.token[e.begin[t] + 1] !== "function") {
          let x = e.begin[t] < 0 ? 0 : e.begin[t], w = s.wrap, A = _.length, v = 0, $ = 0, ge = 0, ne = 0, pe = 0, R = !1, E = !1, z = h + 1, Y = !1, Z = !1, fe = !1;
          if (a[x] < -9) {
            $ = x;
            do
              $ = $ + 1;
            while ($ < t && a[$] < -9);
            ne = $;
            do
              v = v + e.token[$].length, a[$] === -10 && (v = v + 1), e.token[$] === "(" && ge > 0 && ge < w - 1 && ne === t && (ge = -1), e.token[$] === ")" ? pe = pe - 1 : e.token[$] === "(" && (pe = pe + 1), $ === x && pe > 0 && (ge = v), $ = $ - 1;
            while ($ > x && a[$] < -9);
            if (e.token[$ + 1] === "." && (z = a[$] + 1), v > w - 1 && w > 0 && M(D, 40) && ge !== -1 && U[U.length - 2] === !1 && (e.token[x - 1] === "if" && d[d.length - 1] === !0 || e.token[x - 1] !== "if") && (a[x] = z, e.token[x - 1] === "for")) {
              $ = x;
              do
                $ = $ + 1, i(e.token[$], 59) && e.begin[$] === x && (a[$] = z);
              while ($ < t);
            }
          }
          $ = t, v = 0;
          do
            $ = $ - 1, e.stack[$] === "function" ? $ = e.begin[$] : e.begin[$] === x ? (i(e.token[$], 63) ? fe = !0 : i(e.token[$], 44) && R === !1 ? (R = !0, v >= w && w > 0 && (Y = !0)) : e.types[$] === "markup" && Z === !1 && (Z = !0), a[$] > -9 && M(e.token[$], 44) && e.types[$] !== "markup" ? v = 0 : (a[$] === -10 && (v = v + 1), v = v + e.token[$].length, v >= w && w > 0 && (R === !0 || Z === !0) && (Y = !0))) : a[$] > -9 ? v = 0 : (v = v + e.token[$].length, v >= w && w > 0 && (R === !0 || Z === !0) && (Y = !0));
          while ($ > x && Y === !1);
          if (R === !1 && i(e.token[e.begin[t] + 1], 96))
            a[e.begin[t]] = -20, a[t - 1] = -20;
          else if ((R === !0 || Z === !0) && v >= w && w > 0 || a[x] > -9) {
            if (fe === !0) {
              if (z = a[x], i(e.token[x - 1], 91)) {
                $ = t;
                do
                  if ($ = $ + 1, e.types[$] === "end" || i(e.token[$], 44) || i(e.token[$], 59))
                    break;
                while ($ < o);
                i(e.token[$], 93) && (z = z - 1, E = !0);
              }
            } else
              A > 0 && _[A - 1] > $ && (z = z - A);
            U[U.length - 1] = !1, $ = t;
            do
              if ($ = $ - 1, e.begin[$] === x)
                if (e.token[$].indexOf("=") > -1 && e.types[$] === "operator" && e.token[$].indexOf("!") < 0 && e.token[$].indexOf("==") < 0 && e.token[$] !== "<=" && e.token[$].indexOf(">") < 0) {
                  v = $;
                  do
                    if (v = v - 1, e.begin[v] === x && (e.token[v] === ";" || e.token[v] === "," || v === x))
                      break;
                  while (v > x);
                } else
                  i(e.token[$], 44) ? a[$] = z : a[$] > -9 && E === !1 && (e.token[x - 1] !== "for" || e.token[$ + 1] === "?" || e.token[$ + 1] === ":") && (e.token[e.begin[t]] !== "(" || e.token[$] !== "+") && (a[$] = a[$] + 1);
              else
                a[$] > -9 && E === !1 && (a[$] = a[$] + 1);
            while ($ > x);
            a[x] = z, a[t - 1] = z - 1;
          } else
            a[t - 1] = -20;
          e.token[e.begin[t] - 1] === "+" && a[e.begin[t]] > -9 && (a[e.begin[t] - 1] = -10);
        } else
          r.language === "jsx" || r.language === "tsx" ? Q() : a[t - 1] = -20;
        a.push(-20);
      } else if (U[U.length - 1] === !0)
        i(p, 93) && e.begin[t] - 1 > 0 && e.token[e.begin[e.begin[t] - 1]] === "[" && (U[U.length - 2] = !1), e.begin[t] < a.length && (a[e.begin[t]] = -20), r.language === "jsx" || r.language === "tsx" ? Q() : i(p, 93) && a[e.begin[t]] > -1 ? a[t - 1] = a[e.begin[t]] - 1 : a[t - 1] = -20, a.push(-20);
      else if (e.types[t - 1] === "comment" && e.token[t - 1].substring(0, 2) === "//")
        e.token[t - 2] === "x}" && (a[t - 3] = h + 1), a[t - 1] = h, a.push(-20);
      else if (S.indexOf("liquid") < 0 && // PATCH SO LIQUID TOKENS DONT END WITH: }}} (3 LCB)
      e.types[t - 1] !== "comment" && (i(D, 123) && i(p, 125) || i(D, 91) && i(p, 93)))
        a[t - 1] = -20, a.push(-20);
      else if (i(p, 93)) {
        if (d[d.length - 1] === !0 && U[U.length - 1] === !1 && n.arrayFormat !== "inline" || i(D, 93) && a[t - 2] === h + 1 ? (a[t - 1] = h, a[e.begin[t]] = h + 1) : a[t - 1] === -10 && (a[t - 1] = -20), e.token[e.begin[t] + 1] === "function")
          a[t - 1] = h;
        else if (d[d.length - 1] === !1) {
          (i(D, 125) || D === "x}") && (a[t - 1] = h);
          let k = t - 1, K = 1;
          do {
            if (i(e.token[k], 93) && (K = K + 1), i(e.token[k], 91) && (K = K - 1, K === 0)) {
              if (k > 0 && (i(e.token[k + 1], 123) || i(e.token[k + 1], 91) || e.token[k + 1] === "x{")) {
                a[k] = h + 1;
                break;
              }
              if (M(e.token[k + 1], 91) || le === !1) {
                a[k] = -20;
                break;
              }
              break;
            }
            K === 1 && e.token[k] === "+" && a[k] > 1 && (a[k] = a[k] - 1), k = k - 1;
          } while (k > -1);
        } else
          (r.language === "jsx" || r.language === "tsx") && Q();
        if (n.arrayFormat === "inline") {
          let k = t, K = e.begin[t];
          do
            if (k = k - 1, e.types[k] === "end")
              break;
          while (k > K);
          k > K ? (a[e.begin[t]] = h + 1, a[t - 1] = h) : (a[e.begin[t]] = -20, a[t - 1] = -20);
        } else
          a[e.begin[t]] > -1 && (a[t - 1] = a[e.begin[t]] - 1);
        a.push(-20);
      } else
        i(p, 125) || p === "x}" || d[d.length - 1] === !0 ? (i(p, 125) && D === "x}" && e.token[t + 1] === "else" ? (a[t - 2] = h + 2, a.push(-20)) : a.push(h), a[t - 1] = h) : a.push(-20);
      e.types[t - 1] === "comment" && (a[t - 1] = h), we(), le = d[d.length - 1], d.pop(), W.pop(), C.pop(), j.pop(), q.pop(), U.pop(), y.pop();
    }
    function we() {
      let _ = 0, Q = W[W.length - 1];
      if (Q !== void 0) {
        if (_ = Q.length - 1, _ < 1 && Q[_] < 0 && (i(p, 59) || p === "x;" || i(p, 41) || p === "x)" || i(p, 125) || p === "x}")) {
          Q.pop();
          return;
        }
        if (!(_ < 0 || Q[_] < 0)) {
          if (i(p, 58)) {
            if (M(e.token[Q[_]], 63))
              do
                Q.pop(), _ = _ - 1, h = h - 1;
              while (_ > -1 && Q[_] > -1 && M(e.token[Q[_]], 63));
            Q[_] = t, a[t - 1] = h;
          } else
            do
              Q.pop(), _ = _ - 1, h = h - 1;
            while (_ > -1 && Q[_] > -1);
          (e.stack[t] === "array" || i(p, 44)) && Q.length < 1 && Q.push(-1);
        }
      }
    }
    function ae() {
      let _ = t;
      do {
        if (e.lexer[t + 1] === O && e.begin[t + 1] < _ || e.token[_ - 1] === "return" && e.types[t] === "end" && e.begin[t] === _)
          break;
        a.push(0), t = t + 1;
      } while (t < o);
      l[_] = t, a.push(h - 1);
    }
    function L() {
      let _ = t - 1, Q = e.begin[t];
      if (!(h < 1))
        do {
          if (Q !== e.begin[_])
            _ = e.begin[_];
          else if (e.types[_] === "separator" || e.types[_] === "operator") {
            e.token[_] === "." && a[_ - 1] > 0 && (e.token[Q - 1] === "if" ? h = h - 2 : h = h - 1);
            break;
          }
          _ = _ - 1;
        } while (_ > 0 && _ > Q);
    }
    function ye() {
      (e.token[t + 1] !== "," && p.indexOf("/>") !== p.length - 2 || e.token[t + 1] === "," && e.token[e.begin[t] - 3] !== "React") && V(!1, !1), D === "return" || D === "?" || D === ":" ? (a[t - 1] = -10, a.push(-20)) : S === "start" || e.token[t - 2] === "return" && e.stack[t - 1] === "method" ? a.push(h) : a.push(-20);
    }
    function me() {
      let _ = Ke(W[W.length - 1]) ? [] : W[W.length - 1];
      function Q() {
        let k = e.token[t + 1], K = 0, x = 0, w = t, A = p === "+" ? h + 2 : h, v = 0;
        if (s.wrap < 1) {
          a.push(-10);
          return;
        }
        do {
          if (w = w - 1, i(e.token[e.begin[t]], 40) && (w === e.begin[t] && (v = K), i(e.token[w], 44) && e.begin[w] === e.begin[t] && d[d.length - 1] === !0) || K > s.wrap - 1 || a[w] > -9 || e.types[w] === "operator" && e.token[w] !== "=" && e.token[w] !== "+" && e.begin[w] === e.begin[t] || (K = K + e.token[w].length, w === e.begin[t] && e.token[w] === "[" && K < s.wrap - 1) || e.token[w] === "." && a[w] > -9)
            break;
          a[w] === -10 && (K = K + 1);
        } while (w > 0);
        if (v > 0 && (v = v + k.length), K = K + k.length, x = w, K > s.wrap - 1 && a[w] < -9)
          do
            x = x - 1;
          while (x > 0 && a[x] < -9);
        if (e.token[x + 1] === "." && e.begin[t] <= e.begin[x] ? A = A + 1 : e.types[x] === "operator" && (A = a[x]), x = k.length, K + x < s.wrap) {
          a.push(-10);
          return;
        }
        if (i(e.token[e.begin[t]], 40) && (e.token[_[0]] === ":" || e.token[_[0]] === "?") ? A = h + 3 : e.stack[t] === "method" ? (a[e.begin[t]] = h, d[d.length - 1] === !0 ? A = h + 3 : A = h + 1) : (e.stack[t] === "object" || e.stack[t] === "array") && V(!0, !1), (e.token[w] === "var" || e.token[w] === "let" || e.token[w] === "const") && (K = K - s.indentSize * s.indentChar.length * 2), v > 0 ? w = s.wrap - v : w = s.wrap - K, w > 0 && w < 5) {
          a.push(A), (e.token[t].charAt(0) === '"' || e.token[t].charAt(0) === "'") && (t = t + 1, a.push(-10));
          return;
        }
        if (e.token[e.begin[t]] !== "(" || v > s.wrap - 1 || v === 0) {
          if (v > 0 && (K = v), K - k.length < s.wrap - 1 && (k.charAt(0) === '"' || k.charAt(0) === "'")) {
            if (t = t + 1, K = K + 3, K - k.length > s.wrap - 4) {
              a.push(A);
              return;
            }
            a.push(-10);
            return;
          }
          a.push(A);
          return;
        }
        a.push(-10);
      }
      if (L(), _.length > 0 && _[_.length - 1] > -1 && e.stack[t] === "array" && (C[C.length - 1] = !0), p !== ":" && (e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && U.length > 0 && V(!0, !1), p !== "?" && e.token[_[_.length - 1]] === ".")) {
        let k = 0, K = t, x = e.begin[K];
        do {
          if (e.begin[K] === x) {
            if (e.token[K + 1] === "{" || e.token[K + 1] === "[" || e.token[K] === "function")
              break;
            if (i(e.token[K], 44) || i(e.token[K], 59) || e.types[K] === "end" || i(e.token[K], 58)) {
              _.pop(), h = h - 1;
              break;
            }
            if (e.token[K] === "?" || i(e.token[K], 58)) {
              e.token[_[_.length - 1]] === "." && k < 2 && (_[_.length - 1] = x + 1);
              break;
            }
            e.token[K] === "." && (k = k + 1);
          }
          K = K + 1;
        } while (K < o);
      }
      if (p === "!" || p === "...") {
        (i(D, 125) || D === "x}") && (a[t - 1] = h), a.push(-20);
        return;
      }
      if (D === ";" || D === "x;") {
        e.token[e.begin[t] - 1] !== "for" && (a[t - 1] = h), a.push(-20);
        return;
      }
      if (p === "*") {
        D === "function" || D === "yield" ? a[t - 1] = -20 : a[t - 1] = -10, a.push(-10);
        return;
      }
      if (p === "?") {
        if (e.lines[t] === 0 && e.types[t - 2] === "word" && e.token[t - 2] !== "return" && e.token[t - 2] !== "in" && e.token[t - 2] !== "instanceof" && e.token[t - 2] !== "typeof" && (S === "reference" || S === "word") && (e.types[t + 1] === "word" || e.types[t + 1] === "reference" || (i(e.token[t + 1], 40) || e.token[t + 1] === "x(") && e.token[t - 2] === "new")) {
          if (a[t - 1] = -20, e.types[t + 1] === "word" || e.types[t + 1] === "reference") {
            a.push(-10);
            return;
          }
          a.push(-20);
          return;
        }
        if (e.token[t + 1] === ":") {
          a[t - 1] = -20, a.push(-20);
          return;
        }
        if (g.push(t), n.ternaryLine === !0)
          a[t - 1] = -10;
        else {
          let k = t - 1;
          do
            k = k - 1;
          while (k > -1 && a[k] < -9);
          if (_.push(t), h = h + 1, a[k] === h && e.token[k + 1] !== ":" && (h = h + 1, _.push(t)), a[t - 1] = h, i(e.token[e.begin[t]], 40) && (_.length < 2 || _[0] === _[1])) {
            U[U.length - 1] = !1, t - 2 === e.begin[t] ? a[e.begin[t]] = h - 1 : a[e.begin[t]] = h, k = t - 2;
            do {
              if (e.types[k] === "end" && a[k - 1] > -1)
                break;
              a[k] > -1 && (a[k] = a[k] + 1), k = k - 1;
            } while (k > e.begin[t]);
          }
        }
        a.push(-10);
        return;
      }
      if (p === ":") {
        if (e.stack[t] === "map" || e.types[t + 1] === "type" || e.types[t + 1] === "type_start") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (g.length > 0 && e.begin[g[g.length - 1]] === e.begin[t]) {
          let k = t, K = e.begin[t];
          do
            if (k = k - 1, e.begin[k] === K) {
              if (i(e.token[k], 44) || i(e.token[k], 59)) {
                a[t - 1] = -20;
                break;
              }
              if (e.token[k] === "?") {
                g.pop(), we(), n.ternaryLine === !0 && (a[t - 1] = -10), a.push(-10);
                return;
              }
            } else
              e.types[k] === "end" && (k = e.begin[k]);
          while (k > K);
        }
        if (e.token[t - 2] === "where" && e.stack[t - 2] === e.stack[t]) {
          a[t - 1] = -10, a.push(-10);
          return;
        }
        if (S === "reference" && e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if ((i(D, 41) || D === "x)") && e.token[e.begin[t - 1] - 2] === "function") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (e.stack[t] === "attribute") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && (S === "reference" || i(D, 41) || i(D, 93) || D === "?") && (e.stack[t] === "map" || e.stack[t] === "class" || e.types[t + 1] === "reference") && (g.length === 0 || g[g.length - 1] < e.begin[t]) && ("mapclassexpressionmethodglobalparen".indexOf(e.stack[t]) > -1 || e.types[t - 2] === "word" && e.stack[t] !== "switch")) {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (e.stack[t] === "switch" && (g.length < 1 || g[g.length - 1] < e.begin[t])) {
          a[t - 1] = -20, n.caseSpace === !0 ? a.push(-10) : a.push(h);
          return;
        }
        e.stack[t] === "object" ? a[t - 1] = -20 : g.length > 0 ? a[t - 1] = h : a[t - 1] = -10, a.push(-10);
        return;
      }
      if (p === "++" || p === "--") {
        S === "number" || S === "reference" ? (a[t - 1] = -20, a.push(-10)) : t < o - 1 && (e.types[t + 1] === "number" || e.types[t + 1] === "reference") ? a.push(-20) : a.push(-10);
        return;
      }
      if (p === "+") {
        if (S === "start" ? a[t - 1] = -20 : a[t - 1] = -10, s.wrap < 1 || e.token[e.begin[t]] === "x(") {
          a.push(-10);
          return;
        }
        let k = e.token[t + 1];
        if (k === void 0) {
          a.push(-10);
          return;
        }
        if (e.types[t - 1] === "operator" || e.types[t - 1] === "start") {
          if (e.types[t + 1] === "reference" || k === "(" || k === "[") {
            a.push(-20);
            return;
          }
          if (Number(k.slice(1, -1)) > -1 && (/\d/.test(k.charAt(1)) === !0 || k.charAt(1) === "." || k.charAt(1) === "-" || k.charAt(1) === "+")) {
            a.push(-20);
            return;
          }
        }
        return Q();
      }
      if (e.types[t - 1] !== "comment" && (i(D, 40) ? a[t - 1] = -20 : p === "*" && e.stack[t] === "object" && e.types[t + 1] === "reference" && (i(D, 123) || i(D, 44)) ? a[t - 1] = h : (p !== "?" || g.length === 0) && (a[t - 1] = -10)), p.indexOf("=") > -1 && p !== "==" && p !== "===" && p !== "!=" && p !== "!==" && p !== ">=" && p !== "<=" && p !== "=>" && e.stack[t] !== "method" && e.stack[t] !== "object") {
        let k = t + 1, K = 0, x = !1, w = c;
        if ((i(e.token[e.begin[t]], 40) || e.token[e.begin[t]] === "x(") && e.token[t + 1] !== "function")
          return;
        do {
          if (e.types[k] === "start") {
            if (x === !0 && e.token[k] !== "[") {
              y[y.length - 1] === !0 && (y[y.length - 1] = !1);
              break;
            }
            K = K + 1;
          }
          if (e.types[k] === "end" && (K = K - 1), K < 0) {
            y[y.length - 1] === !0 && (y[y.length - 1] = !1);
            break;
          }
          if (K === 0) {
            if (w = e.token[k], x === !0) {
              if (e.types[k] === "operator" || i(e.token[k], 59) || e.token[k] === "x;" || e.token[k] === "?" || e.token[k] === "var" || e.token[k] === "let" || e.token[k] === "const") {
                w !== void 0 && (w === "?" || w.indexOf("=") > -1 && w !== "==" && w !== "===" && w !== "!=" && w !== "!==" && w !== ">=" && w !== "<=") && y[y.length - 1] === !1 && (y[y.length - 1] = !0), (w === ";" || w === "x;" || w === "var" || w === "let" || w === "const") && y[y.length - 1] === !0 && (y[y.length - 1] = !1);
                break;
              }
              y[y.length - 1] === !0 && (w === "return" || w === "break" || w === "continue" || w === "throw") && (y[y.length - 1] = !1);
            }
            (w === ";" || w === "x;" || w === ",") && (x = !0);
          }
          k = k + 1;
        } while (k < o);
        a.push(-10);
        return;
      }
      if (p === "-" && D === "return" || i(D, 61)) {
        a.push(-20);
        return;
      }
      if (S === "operator" && e.types[t + 1] === "reference" && D !== "--" && D !== "++" && p !== "&&" && p !== "||") {
        a.push(-20);
        return;
      }
      return Q();
    }
    function te() {
      let _ = () => {
        let Q = e.begin[t];
        if (Q < 0)
          r.stack.push([e.token[t], -1]);
        else {
          if (e.stack[Q + 1] !== "function")
            do
              Q = e.begin[Q];
            while (Q > -1 && e.stack[Q + 1] !== "function");
          r.stack.push([e.token[t], Q]);
        }
      };
      if (e.types[t - 1] === "comment" ? a[t - 1] = h : S === "end" && D !== ")" && e.token[e.begin[t - 1] - 1] !== ")" ? a[t - 1] = -10 : S !== "separator" && S !== "start" && S !== "end" && S.indexOf("template_string") < 0 && (S === "word" || S === "operator" || S === "property" || S === "type" || S === "reference" ? a[t - 1] = -10 : a[t - 1] = -20), D === "var" && e.lexer[t - 1] === O)
        _();
      else if (D === "function")
        r.stack.push([e.token[t], t]);
      else if (D === "let" || D === "const")
        r.stack.push([e.token[t], t]);
      else if (e.stack[t] === "arguments")
        r.stack.push([e.token[t], t]);
      else if (i(D, 44)) {
        let Q = t;
        do
          Q = Q - 1;
        while (Q > e.begin[t] && e.token[Q] !== "var" && e.token[Q] !== "let" && e.token[Q] !== "const");
        e.token[Q] === "var" ? _() : (e.token[Q] === "let" || e.token[Q] === "const") && r.stack.push([e.token[t], t]);
      }
      a.push(-10);
    }
    function ce() {
      let _ = Ke(W[W.length - 1]) ? [] : W[W.length - 1], Q = () => {
        if (n.methodChain > 0) {
          let k = t, K = e.begin[t], x = [t], w = e.token[K - 1] === "if";
          do
            if (k = k - 1, e.types[k] === "end" && (k = e.begin[k]), e.begin[k] === K) {
              if (e.types[k] === "string" && e.token[k].indexOf("${") === e.token[k].length - 2)
                break;
              if (e.token[k] === ".") {
                if (a[k - 1] > 0) {
                  a[t - 1] = w === !0 ? h + 1 : h;
                  return;
                }
                x.push(k);
              } else if (e.token[k] === ";" || e.token[k] === "," || e.types[k] === "operator" || (e.types[k] === "word" || e.types[k] === "reference") && (e.types[k - 1] === "word" || e.types[k - 1] === "reference"))
                break;
            }
          while (k > K);
          if (x.length < n.methodChain) {
            a[t - 1] = -20;
            return;
          }
          k = 0, K = x.length;
          do
            a[x[k] - 1] = w === !0 ? h + 1 : h, k = k + 1;
          while (k < K);
          k = x[x.length - 1] - 1;
          do
            a[k] > -1 && (a[k] = a[k] + 1), k = k + 1;
          while (k < t);
          h = w === !0 ? h + 2 : h + 1;
        }
        a[t - 1] = h;
      };
      if (p === "::") {
        a[t - 1] = -20, a.push(-20);
        return;
      }
      if (p === ".") {
        e.token[e.begin[t]] !== "(" && e.token[e.begin[t]] !== "x(" && _.length > 0 && (e.stack[t] === "object" || e.stack[t] === "array" ? V(!0, !1) : V(!1, !1)), n.methodChain === 0 ? a[t - 1] = -20 : n.methodChain < 0 ? e.lines[t] > 0 ? Q() : a[t - 1] = -20 : Q(), a.push(-20);
        return;
      }
      if (p === ",") {
        if (L(), d[d.length - 1] === !1 && (e.stack[t] === "object" || e.stack[t] === "array" || e.stack[t] === "paren" || e.stack[t] === "expression" || e.stack[t] === "method") && (d[d.length - 1] = !0, i(e.token[e.begin[t]], 40))) {
          let k = t;
          do
            k = k - 1, e.begin[k] === e.begin[t] && e.token[k] === "+" && a[k] > -9 && (a[k] = a[k] + 2);
          while (k > e.begin[t]);
        }
        if (e.stack[t] === "array" && n.arrayFormat === "indent") {
          a[t - 1] = -20, a.push(h);
          return;
        }
        if (e.stack[t] === "array" && n.arrayFormat === "inline") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (e.stack[t] === "object" && n.objectIndent === "indent") {
          a[t - 1] = -20, a.push(h);
          return;
        }
        if (e.stack[t] === "object" && n.objectIndent === "inline") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (_.length > 0) {
          _[_.length - 1] > -1 && we(), a[t - 1] = -20, a.push(h);
          return;
        }
        if (e.token[t - 2] === ":" && e.token[t - 4] === "where") {
          a[t - 1] = -20, a.push(-10);
          return;
        }
        if (a[t - 1] = -20, e.types[t + 1] !== "end" && (j[j.length - 1] = j[j.length - 1] + 1), (i(e.token[e.begin[t]], 40) || e.token[e.begin[t]] === "x(") && r.language !== "jsx" && e.stack[t] !== "global" && (e.types[t - 1] !== "string" && e.types[t - 1] !== "number" || e.token[t - 2] !== "+" || e.types[t - 1] === "string" && e.types[t - 1] !== "number" && i(e.token[t - 2], 43) && e.types[t - 3] !== "string" && e.types[t - 3] !== "number")) {
          a.push(-10);
          return;
        }
        if (S === "reference" && e.types[t - 2] === "word" && "var-let-const-from".indexOf(e.token[t - 2]) < 0 && (e.types[t - 3] === "end" || e.token[t - 3] === ";")) {
          q[q.length - 1] = !0, a.push(-10);
          return;
        }
        if (q[q.length - 1] === !0 || e.stack[t] === "notation") {
          a.push(-10);
          return;
        }
        if (j[j.length - 1] > 3 && (e.stack[t] === "array" || e.stack[t] === "object")) {
          if (U[U.length - 1] === !0 && V(!0, !0), a[t - 1] = -20, C[C.length - 1] === !0) {
            a.push(h);
            return;
          }
          let k = e.begin[t], K = t;
          do
            e.types[K] === "end" ? K = e.begin[K] : i(e.token[K], 44) && e.types[K + 1] !== "comment" && (a[K] = h), K = K - 1;
          while (K > k);
          a[k] = h, C[C.length - 1] = !0;
          return;
        }
        if (e.stack[t] === "object" && U[U.length - 1] === !0 && e.types[e.begin[t] - 1] !== "word" && e.types[e.begin[t] - 1] !== "reference" && e.token[e.begin[t] - 1] !== "(" && e.token[e.begin[t] - 1] !== "x(") {
          let k = e.begin[t], K = t - 1;
          do {
            if (e.begin[K] === k) {
              if (i(e.token[K], 44))
                break;
              if (i(e.token[K], 58)) {
                V(!0, !1);
                break;
              }
            }
            K = K - 1;
          } while (K > k);
        }
        if (U[U.length - 1] === !1 || i(e.token[t - 2], 43) && (S === "string" || S === "number") && a[t - 2] > 0 && (i(D, 34) || i(D, 39))) {
          if (e.stack[t] === "method") {
            if (i(e.token[t - 2], 43) && (i(D, 34) || i(D, 39)) && (e.token[t - 3].charAt(0) === '"' || e.token[t - 3].charAt(0) === "'")) {
              a.push(h + 2);
              return;
            }
            if (e.token[t - 2] !== "+") {
              a.push(-10);
              return;
            }
          }
          a.push(h);
          return;
        }
        if (U[U.length - 1] === !0 && e.stack[t] !== "object") {
          a.push(-10);
          return;
        }
        if (j[j.length - 1] < 4 && (e.stack[t] === "array" || e.stack[t] === "object")) {
          a.push(-10);
          return;
        }
        a.push(h);
        return;
      }
      if (i(p, 59) || p === "x;") {
        if (L(), e.token[t + 1] !== void 0 && e.types[t + 1].indexOf("attribute") > 0 && e.types[t + 1].indexOf("end") > 0) {
          a[t - 1] = -20, a.push(h - 1);
          return;
        }
        if (I[I.length - 1] > -1 && e.stack[I[I.length - 1]] !== "expression") {
          let k = t;
          do {
            if (k = k - 1, i(e.token[k], 59))
              break;
            if (i(e.token[k], 44)) {
              h = h - 1;
              break;
            }
            e.types[k] === "end" && (k = e.begin[k]);
          } while (k > 0 && k > e.begin[t]);
        }
        if (I[I.length - 1] = -1, we(), e.token[e.begin[t] - 1] !== "for" && V(!1, !1), q[q.length - 1] = !1, a[t - 1] = -20, e.begin[t] > 0 && e.token[e.begin[t] - 1] === "for" && e.stack[t] !== "for") {
          a.push(-10);
          return;
        }
        a.push(h);
        return;
      }
      a.push(-20);
    }
    function J() {
      let _ = e.stack[t + 1], Q = t === 0 ? e.stack[t] : e.stack[t - 1];
      if ((i(D, 41) || M(D, 93) && (Q === "object" || Q === "array")) && (_ !== "method" || _ === "method" && M(e.token[t + 1], 41) && M(e.token[t + 2], 41)) && (i(D, 41) && (_ !== "function" || i(e.token[e.begin[e.begin[t - 1] - 1]], 40) || e.token[e.begin[e.begin[t - 1] - 1]] === "x(") ? V(!1, !1) : e.types[t + 1] !== "end" && e.types[t + 2] !== "end" && V(!0, !1)), d.push(!1), W.push([]), y.push(!1), C.push(!1), q.push(!1), j.push(0), n.neverFlatten === !0 || _ === "attribute" || S === "generic" || n.arrayFormat === "indent" && _ === "array" || _ === "class" && M(D, 40) && D !== "x(" || i(p, 91) && e.token[t + 1] === "function" ? U.push(!1) : _ === "expression" || _ === "method" || (_ === "object" || _ === "class") && (i(D, 40) || D === "x(" || S === "word" || S === "reference") || _ === "array" || i(p, 40) || p === "x(" || i(p, 123) && _ === "object" && S !== "operator" && S !== "start" && S !== "string" && S !== "number" && Q !== "object" && Q !== "array" && t > 0 ? U.push(!0) : U.push(!1), M(p, 40) && p !== "x(" && e.stack[t + 1] !== "attribute" && (h = h + 1), i(p, 123) || p === "x{") {
        if (I.push(-1), e.types[t - 1] !== "comment" && (S === "markup" ? a[t - 1] = h : n.braceAllman === !0 && S !== "operator" && D !== "return" ? a[t - 1] = h - 1 : e.stack[t + 1] !== "block" && (_ === "function" || i(D, 41) || D === "x)" || i(D, 44) || i(D, 125) || S === "markup") ? a[t - 1] = -10 : (i(D, 123) || D === "x{" || i(D, 91) || i(D, 125) || D === "x}") && (a[t - 1] = h - 1)), _ === "object") {
          if (n.objectIndent === "indent") {
            U[U.length - 1] = !1, a.push(h);
            return;
          }
          if (n.objectIndent === "inline") {
            U[U.length - 1] = !0, a.push(-20);
            return;
          }
        }
        if (_ === "switch") {
          if (n.noCaseIndent === !0) {
            a.push(h - 1);
            return;
          }
          h = h + 1, a.push(h);
          return;
        }
        if (U[U.length - 1] === !0 && S !== "word" && S !== "reference") {
          a.push(-20);
          return;
        }
        a.push(h);
        return;
      }
      if (i(p, 40) || p === "x(") {
        if (s.wrap > 0 && i(p, 40) && e.token[t + 1] !== ")" && G.push(1), i(D, 45) && (i(e.token[t - 2], 40) || e.token[t - 2] === "x(") && (a[t - 2] = -20), S === "end" && Q !== "if" && Q !== "for" && Q !== "catch" && Q !== "else" && Q !== "do" && Q !== "try" && Q !== "finally" && Q !== "catch" && (e.types[t - 1] === "comment" ? a[t - 1] = h : a[t - 1] = -20), D === "async" ? a[t - 1] = -10 : (_ === "method" || e.token[t - 2] === "function" && S === "reference") && (D === "import" || D === "in" || n.functionNameSpace === !0 ? a[t - 1] = -10 : i(D, 125) && e.stack[t - 1] === "function" || S === "word" || S === "reference" || S === "property" ? a[t - 1] = -20 : Q !== "method" && _ !== "method" && (a[t - 1] = h)), i(D, 43) && (i(e.token[t - 2], 34) || i(e.token[t - 2], 39))) {
          a.push(h);
          return;
        }
        if (i(D, 125) || D === "x}") {
          a.push(-20);
          return;
        }
        (i(D, 45) && (t < 2 || M(e.token[t - 2], 41) && M(e.token[t - 2], 93) && e.token[t - 2] !== "x)" && e.types[t - 2] !== "reference" && e.types[t - 2] !== "string" && e.types[t - 2] !== "number") || n.functionSpace === !1 && D === "function") && (a[t - 1] = -20), a.push(-20);
        return;
      }
      if (i(p, 91)) {
        if (i(D, 91) && (d[d.length - 2] = !0), D === "return" || D === "var" || D === "let" || D === "const" ? a[t - 1] = -10 : e.types[t - 1] !== "comment" && e.stack[t - 1] !== "attribute" && (S === "end" || S === "word" || S === "reference") ? a[t - 1] = -20 : (i(D, 91) || i(D, 123) || D === "x{") && (a[t - 1] = h - 1), e.stack[t] === "attribute") {
          a.push(-20);
          return;
        }
        if (n.arrayFormat === "indent") {
          U[U.length - 1] = !1, a.push(h);
          return;
        }
        if (n.arrayFormat === "inline") {
          U[U.length - 1] = !0, a.push(-20);
          return;
        }
        if (_ === "method" || U[U.length - 1] === !0) {
          a.push(-20);
          return;
        }
        let k = t + 1;
        do {
          if (i(e.token[k], 93)) {
            a.push(-20);
            return;
          }
          if (i(e.token[k], 44)) {
            a.push(h);
            return;
          }
          k = k + 1;
        } while (k < o);
        a.push(-20);
      }
    }
    function P() {
      p.length === 1 ? (a.push(-20), e.lines[t] === 0 && (a[t - 1] = -20)) : p.indexOf("#!/") === 0 ? a.push(h) : S === "liquid" ? a[t - 1] = -10 : a.push(-10), (i(D, 44) || S === "start") && (e.stack[t] === "object" || e.stack[t] === "array") && U[U.length - 1] === !1 && t > 0 && (a[t - 1] = h);
    }
    function T() {
      m === "liquid_start" ? S === "string" ? (e.lines[t - 1] <= 1 && (a[t - 1] = -20), e.lines[t] > 1 ? (h = h + 1, a.push(h)) : a.push(-10)) : e.lines[t] > 1 ? (h = h + 1, a.push(h)) : e.lines[t] === 1 ? a.push(-10) : (a[t - 1] = -20, a.push(-20)) : m === "liquid_else" ? S === "string" ? (e.lines[t - 1] <= 1 && (a[t - 1] = -20), e.lines[t] > 0 ? (h = h - 1, a.push(h)) : a.push(-20)) : e.lines[t] > 1 ? (a[t - 1] = h - 1, a.push(h)) : e.lines[t] === 1 ? a.push(-10) : a.push(-20) : m === "liquid_end" ? S === "string" ? (e.lines[t - 1] <= 1 && (a[t - 1] = -20), e.lines[t] > 1 ? (a[t - 1] = h - 1, a.push(h)) : a.push(-10)) : S === "liquid" && e.lines[t] < 2 ? a.push(-10) : e.lines[t] > 1 ? (a[t - 1] = h, a.push(h)) : e.lines[t] === 0 ? (a[t - 1] = -20, h = h - 1, a.push(-20)) : (h = h - 1, a.push(h)) : m === "liquid" && (i(D, 58) && a[t - 2] === -10 && (a[t - 2] = -20), S === "string" && a[t - 2] === -10 ? (a[t - 1] = -20, a.push(-10)) : e.lines[t] > 1 ? a.push(h) : e.lines[t] === 1 ? a.push(-10) : a.push(-20));
    }
    function oe() {
      m === "template_string_start" ? (h = h + 1, a.push(h)) : m === "template_string_else" ? (L(), a[t - 1] = h - 1, a.push(h)) : (L(), h = h - 1, a[t - 1] = h, a.push(-10)), t > 2 && (e.types[t - 2] === "template_string_else" || e.types[t - 2] === "template_string_start") && (n.bracePadding === !0 ? (a[t - 2] = -10, a[t - 1] = -10) : (a[t - 2] = -20, a[t - 1] = -20));
    }
    function se() {
      i(e.token[t - 1], 44) || i(e.token[t - 1], 58) && e.stack[t - 1] !== "data_type" ? a[t - 1] = -10 : a[t - 1] = -20, (e.types[t] === "type" || e.types[t] === "type_end") && a.push(-10), e.types[t] === "type_start" && a.push(-20);
    }
    function ee() {
      if ((i(D, 41) || D === "x)") && e.stack[t] === "class" && (e.token[e.begin[t - 1] - 1] === "static" || e.token[e.begin[t - 1] - 1] === "final" || e.token[e.begin[t - 1] - 1] === "void") && (a[t - 1] = -10, a[e.begin[t - 1] - 1] = -10), i(D, 93) && (a[t - 1] = -10), p === "else" && i(D, 125) && (e.token[t - 2] === "x}" && (a[t - 3] = a[t - 3] - 1), (n.braceAllman === !0 || n.elseNewline === !0) && (a[t - 1] = h)), p === "new" && Le.js.keywords.has(e.token[t + 1]) && (N = N + 1), p === "from" && S === "end" && t > 0 && (e.token[e.begin[t - 1] - 1] === "import" || i(e.token[e.begin[t - 1] - 1], 44)) && (a[t - 1] = -10), p === "function") {
        if (n.functionSpace === !1 && t < o - 1 && (i(e.token[t + 1], 40) || e.token[t + 1] === "x(")) {
          a.push(-20);
          return;
        }
        a.push(-10);
        return;
      }
      if (i(D, 45) && t > 1)
        e.types[t - 2] === "operator" || i(e.token[t - 2], 44) ? a[t - 1] = -20 : e.types[t - 2] === "start" && (a[t - 2] = -20, a[t - 1] = -20);
      else if (p === "while" && (i(D, 125) || D === "x}")) {
        let _ = t - 1, Q = 0;
        do {
          if ((i(e.token[_], 125) || e.token[_] === "x}") && (Q = Q + 1), (i(e.token[_], 123) || e.token[_] === "x{") && (Q = Q - 1), Q === 0) {
            if (e.token[_ - 1] === "do") {
              a[t - 1] = -10;
              break;
            }
            a[t - 1] = h;
            break;
          }
          _ = _ - 1;
        } while (_ > -1);
      } else if (p === "in" || (i(D, 125) || D === "x}") && (p === "catch" || p === "else" && n.elseNewline === !1 && n.braceAllman === !1))
        a[t - 1] = -10;
      else if (p === "var" || p === "let" || p === "const") {
        if (I[I.length - 1] = t, S === "end" && (a[t - 1] = h), e.token[e.begin[t] - 1] !== "for") {
          let _ = t + 1, Q = 0;
          do {
            if (e.types[_] === "end" && (Q = Q - 1), e.types[_] === "start" && (Q = Q + 1), Q < 0 || Q === 0 && (i(e.token[_], 59) || i(e.token[_], 44)))
              break;
            _ = _ + 1;
          } while (_ < o);
          i(e.token[_], 44) && (h = h + 1);
        }
        a.push(-10);
        return;
      }
      if (S !== "word" && e.stack[t] === "switch" && (p === "default" || p === "case")) {
        a[t - 1] = h - 1, a.push(-10);
        return;
      }
      if (p === "catch" && D === ".") {
        a[t - 1] = -20, a.push(-20);
        return;
      }
      if (p === "catch" || p === "finally") {
        a[t - 1] = -10, a.push(-10);
        return;
      }
      if (n.bracePadding === !1 && t < o - 1 && i(e.token[t + 1], 125)) {
        a.push(-20);
        return;
      }
      if (e.stack[t] === "object" && (i(D, 123) || i(D, 44)) && (i(e.token[t + 1], 40) || e.token[t + 1] === "x(")) {
        a.push(-20);
        return;
      }
      e.types[t - 1] === "comment" && i(e.token[e.begin[t]], 40) && (a[t - 1] = h + 1), s.script.inlineReturn === !0 && p === "return" && S === "start" && e.stack[t] === "if" && D === "x{" ? (a[t - 1] = -20, a.push(-20)) : a.push(-10);
    }
    do
      e.lexer[t] === O ? (m = e.types[t], p = e.token[t], m === "comment" ? B() : m === "regex" ? a.push(-20) : m === "string" ? P() : m.indexOf("template_string") === 0 ? oe() : m === "separator" ? ce() : m === "start" ? J() : m === "end" ? ke() : m === "type" || m === "type_start" || m === "type_end" ? se() : m === "operator" ? me() : m === "word" ? ee() : m === "reference" ? te() : m === "markup" ? ye() : m.indexOf("liquid") > -1 ? T() : m === "generic" ? (M(D, 35) && D !== "return" && S !== "operator" && D !== "public" && D !== "private" && D !== "static" && D !== "final" && D !== "implements" && D !== "class" && D !== "void" && (a[t - 1] = -20), i(e.token[t + 1], 40) || e.token[t + 1] === "x(" ? a.push(-20) : a.push(-10)) : a.push(-10), m !== "comment" && (S = m, D = p), G.length > 0 && M(e.token[t], 41) && (e.types[t] === "comment" && G[G.length - 1] > -1 ? G[G.length - 1] = s.wrap + 1 : a[t] > -1 || i(e.token[t], 96) && e.token[t].indexOf(H) > 0 ? G[G.length - 1] = -1 : G[G.length - 1] > -1 && (G[G.length - 1] = G[G.length - 1] + e.token[t].length, a[t] === -10 && (G[G.length - 1] = G[G.length - 1] + 1)))) : ae(), t = t + 1;
    while (t < o);
    return a;
  })();
  return (() => {
    let t = [], h = s.indentChar.repeat(s.indentSize), F = s.preserveLine + 1, le = [
      "x;",
      "x}",
      "x{",
      "x(",
      "x)"
    ], m = r.start, p = s.indentLevel;
    function S(I) {
      let d = m === o - 1 ? 1 : e.lines[m + 1] - 1 > F ? F : e.lines[m + 1] > 1 ? e.lines[m + 1] - 1 : 1;
      return r.crlf.repeat(d) + h.repeat(I);
    }
    if (n.vertical === !0) {
      let I = function(d) {
        let a = 0, g = 0, W = d - 1, C = 0, U = 0, j = e.begin[m], y = [];
        do {
          if ((e.begin[W] === j || i(e.token[W], 93) || i(e.token[W], 41)) && (i(e.token[W + 1], 61) || i(e.token[W + 1], 59) && e.stack[W] === "object")) {
            C = W, g = 0;
            do {
              if (e.begin[C] === j) {
                if (i(e.token[C], 58) || i(e.token[C], 59) || e.token[C] === "x;" || b[C] > -1 && e.types[C] !== "comment") {
                  i(e.token[C + 1], 46) && (g = g + s.indentSize * s.indentChar.length);
                  break;
                }
              } else if (b[C] > -1)
                break;
              e.types[C] !== "comment" && (b[C - 1] === -10 && (g = g + 1), g = e.token[C].length + g), C = C - 1;
            } while (C > j);
            if (U = C, i(e.token[U], 44) && i(e.token[W + 1], 61))
              do {
                if (e.types[U] === "end" && (U = e.begin[U]), e.begin[U] === j) {
                  if (i(e.token[U], 59) || e.token[U] === "x;")
                    break;
                  if (e.token[U] === "var" || e.token[U] === "const" || e.token[U] === "let") {
                    g = g + s.indentSize * s.indentChar.length;
                    break;
                  }
                }
                U = U - 1;
              } while (U > j);
            g > a && (a = g), y.push([W, g]), W = C;
          } else
            e.types[W] === "end" && (W = e.begin[W]);
          W = W - 1;
        } while (W > j);
        if (W = y.length, W > 0)
          do
            if (W = W - 1, C = y[W][1], C < a)
              do
                e.token[y[W][0]] = e.token[y[W][0]] + ie, C = C + 1;
              while (C < a);
          while (W > 0);
      };
      m = o;
      do
        m = m - 1, e.lexer[m] === "script" && i(e.token[m], 125) && M(e.token[m - 1], 123) && b[e.begin[m]] > 0 ? I(m) : m = e.begin[m];
      while (m > 0);
    }
    m = r.start;
    do {
      if (e.lexer[m] === O) {
        if (e.types[m] === "comment" && n.commentIndent === !0 && ct.test(e.token[m])) {
          let I = e.begin[m] > -1 ? i(e.token[m][2], 42) ? li(b[m], h) + s.indentChar : li(b[m], h) : s.indentChar, d = e.token[m].split(H), a = 1;
          do
            d[a] = I + d[a].trimStart(), a = a + 1;
          while (a < d.length);
          e.token.splice(m, 1, d.join(H));
        }
        le.indexOf(e.token[m]) < 0 && (M(e.token[m], 59) || n.noSemicolon === !1 ? t.push(e.token[m]) : b[m] < 0 && e.types[m + 1] !== "comment" && t.push(";")), m < o - 1 && e.lexer[m + 1] !== O && e.begin[m] === e.begin[m + 1] && e.types[m + 1].indexOf("end") < 0 && M(e.token[m], 44) ? t.push(ie) : b[m] > -1 ? ((b[m] > -1 && i(e.token[m], 123) || b[m] > -1 && i(e.token[m + 1], 125)) && e.lines[m] < 3 && n.braceNewline === !0 && e.lines[m + 1] < 3 && t.push(S(0)), r.mode === 2 ? r.ender !== m && t.push(S(b[m])) : m !== o - 1 && t.push(S(b[m])), p = b[m]) : b[m] === -10 && (t.push(ie), e.lexer[m + 1] !== O && (p = p + 1));
      } else if (l[m] === m)
        t.push(e.token[m]);
      else {
        r.ender = l[m], r.start = m;
        let I = r.external(p);
        t.push(I), m = r.iterator, b[m] === -10 ? t.push(ie) : b[m] > -1 && t.push(S(b[m]));
      }
      m = m + 1;
    } while (m < o);
    return r.iterator = o - 1, t.join(c);
  })();
}

// src/format/style.ts
function dn() {
  let e = [], { data: s, rules: n, crlf: u } = r, N = Fe(null), l = r.ender > 0 ? r.ender + 1 : s.token.length, O = n.preserveLine + 1, o = n.indentChar.repeat(n.indentSize), b = n.indentLevel, f = r.start, t = [c, c];
  function h(le, m) {
    return s.types[le] === m;
  }
  function F(le) {
    let m = [], p = f === l - 1 ? 1 : s.lines[f + 1] - 1 > O ? O : s.lines[f + 1] > 1 ? s.lines[f + 1] - 1 : 1, S = 0;
    le < 0 && (le = 0);
    do
      m.push(u), S = S + 1;
    while (S < p);
    if (le > 0) {
      S = 0;
      do
        m.push(o), S = S + 1;
      while (S < le);
    }
    e.push(m.join(c));
  }
  do {
    switch ((h(f + 1, "end") || h(f + 1, "liquid_end") || h(f + 1, "liquid_else")) && b > 0 && (b = b - 1), h(f, "liquid") ? (h(f - 1, "separator") && F(b), e.push(s.token[f]), h(f + 1, "separator") === !1 && M(s.token[f + 1], 59) && Le.css.units.has(s.token[f + 1]) === !1 && (h(f + 1, "start") ? e.push(ie) : h(f + 1, "colon") === !1 && F(b))) : h(f - 1, "selector") && h(f, "liquid") && h(f + 1, "selector") ? (e.push(s.token[f]), Qe(s.token[f - 1], 45) && (i(s.token[f + 1], 46) || i(s.token[f + 1], 35) || i(s.token[f + 1], 38)) && e.push(ie)) : h(f, "liquid_else") ? (e.push(s.token[f]), h(f + 1, "property") && (b = b + 1), s.lines[f + 1] === 1 ? e.push(ie) : s.lines[f + 1] > 1 && F(b)) : h(f, "liquid_start") ? (e.push(s.token[f]), s.lines[f + 1] === 1 ? e.push(ie) : (s.lines[f + 1] > 1 || (h(f + 1, "liquid") || h(f + 1, "selector")) && h(f + 2, "start")) && (b = b + 1, F(b))) : h(f, "liquid_end") ? (e.push(s.token[f]), h(f + 1, "start") ? e.push(ie) : s.lines[f + 1] !== 0 && F(b)) : h(f, "start") ? (e.push(s.token[f]), (h(f + 1, "property") || h(f + 1, "selector") || h(f + 1, "comment") || h(f + 1, "liquid") || h(f + 1, "liquid_start")) && (b = b + 1), h(f + 1, "end") === !1 && F(b)) : i(s.token[f], 59) ? (e.push(s.token[f]), h(f + 1, "property") && ((h(f - 2, "liquid") || h(f - 2, "liquid_end")) && h(f - 1, "value") || h(f - 1, "liquid_end")) && (b = b + 1, b > N.property && (b = N.property)), F(b)) : h(f, "end") || h(f, "comment") ? (e.push(s.token[f]), h(f + 1, "value") ? s.lines[f + 1] === 1 ? e.push(ie) : s.lines[f + 1] > 1 && F(b) : h(f - 1, "liquid_end") && h(f, "separator") && h(f + 1, "property") ? (b = b + 1, F(b)) : h(f + 1, "separator") === !1 ? h(f + 1, "comment") === !1 || h(f + 1, "comment") && s.lines[f + 1] > 1 ? F(b) : e.push(ie) : h(f, "comment") && h(f + 1, "comment") === !1 && s.lines[f] > 1 && F(b)) : i(s.token[f], 58) ? (e.push(s.token[f]), h(f + 1, "selector") === !1 && M(s.token[f + 1], 44) && e.push(ie)) : h(f, "selector") || h(f, "at_rule") ? (n.style.classPadding === !0 && h(f - 1, "end") && s.lines[f] < 3 && F(b), s.token[f].indexOf("and(") > 0 ? (s.token[f] = s.token[f].replace(/and\(/, "and ("), e.push(s.token[f])) : s.token[f].indexOf("when(") > 0 ? (t = s.token[f].split("when("), e.push(t[0].replace(/\s+$/, c)), F(b + 1), e.push(`when (${t[1]}`)) : e.push(s.token[f]), h(f + 1, "start") ? (e.push(ie), h(f, "at_rule") && h(f + 2, "colon") && (b = b + 1)) : s.types[f + 1].indexOf("liquid") > -1 && s.lines[f + 1] === 0 && (e.push(s.token[f + 1]), f = f + 1, h(f + 1, "start") && e.push(ie), h(f + 1, "selector") && i(s.token[f + 1], 46) && e.push(ie))) : i(s.token[f], 44) ? (h(f + 1, "value") && F(b), e.push(s.token[f]), h(f + 1, "selector") || h(f + 1, "property") ? F(b) : e.push(ie), h(f - 1, "selector") && h(f + 1, "liquid_end") && F(b)) : s.stack[f] === "map" && i(s.token[f + 1], 41) && f - s.begin[f] > 5 ? (e.push(s.token[f]), F(b)) : s.token[f] === "x;" ? F(b) : (h(f, "variable") || h(f, "function")) && n.style.classPadding === !0 && h(f - 1, "end") && s.lines[f] < 3 ? (e.push(u), e.push(s.token[f])) : M(s.token[f], 59) && (e.push(s.token[f]), (h(f + 1, "liquid_end") || h(f + 1, "liquid_else")) && (s.lines[f + 1] === 1 ? e.push(ie) : s.lines[f + 1] > 1 && F(b))), s.types[f + 1]) {
      case "property":
        N.property = b;
        break;
      case "end":
        N.property = b - 1;
        break;
      case "selector":
        s.types[f] === "selector" && (N.property = b);
        break;
    }
    f = f + 1;
  } while (f < l);
  return r.iterator = l - 1, (e[0] === r.crlf || i(e[0], 32)) && (e[0] = c), r.mode === 2 ? e.join(c).trimEnd() : n.endNewline === !0 ? e.join(c).replace(/\s*$/, r.crlf) : e.join(c).trimEnd();
}

// src/format/index.ts
function Si(e) {
  if (e === 1)
    return cn();
  if (e === 3)
    return dn();
  if (e === 2)
    return pn();
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
var Li = class extends Array {
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
    this.crlf = H;
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
    this.error = null, this.count = -1, this.start = 0, this.ender = 0, this.lineColumn = 0, this.lineNumber = 1, this.lineDepth = 2, this.lineIndex = 0, this.lineOffset = 0, this.numbers = [], this.data.begin = [], this.data.ender = [], this.data.lexer = [], this.data.lines = [], this.data.stack = [], this.data.token = [], this.data.types = [], this.references = [[]], this.stack = new Li(["global", -1]), this.mode = 1, this.pairs = Fe(null), this.attributes.size > 0 && this.attributes.clear(), this.regions.size > 0 && this.regions.clear();
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
    return ti.test(this.source) ? this.source : (this.reset(), xi(s), n === 1 ? this.data : (this.mode = 3, Si(s)));
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
      let u = Lt(s);
      it.region = n, this.language = s, this.lexer = De(this.language), this.regions.set(this.count + 1, { lexer: u, id: this.language }), xi(u), this.mode = 1, this.lexer = De(this.rules.language), this.language = this.rules.language;
    } else {
      if (this.regions.size === 0)
        return this.source;
      let { id: u, lexer: N } = this.regions.get(this.start);
      this.mode = 2, this.language = u, this.rules.indentLevel = s;
      let l = Si(N);
      return this.mode = 3, this.rules.indentLevel = 0, this.language = this.rules.language, this.lexer = De(this.language), l;
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
      u.skip && delete this.pairs[this.stack.index], u.type === 3 ? s.token.indexOf(`end${u.stack}`) > -1 ? delete this.pairs[this.stack.index] : s.stack === "liquid" && (s.token === "%}" || s.token === "-%}") ? delete this.pairs[this.stack.index] : Et(114, u) : u.type === 2 && (`</${u.stack}>` === s.token ? delete this.pairs[this.stack.index] : Et(105, u));
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
        let N = 0, l = this.stack.length;
        l > 2 && (s.types[this.stack[l - 1][1]] === "else" || s.types[this.stack[l - 1][1]].indexOf("_else") > 0) && (s.types[this.stack[l - 2][1]] === "start" || s.types[this.stack[l - 2][1]].indexOf("_start") > 0) && (s.types[this.stack[l - 2][1] + 1] === "else" || s.types[this.stack[l - 2][1] + 1].indexOf("_else") > 0) && (this.stack.pop(), s.begin[this.count] = this.stack.index, s.stack[this.count] = this.stack.token, s.ender[this.count - 1] = this.count, N = s.ender[s.begin[this.count] + 1]), this.final(s), N > 0 && (s.ender[s.begin[this.count] + 1] = N), this.stack.pop(), this.lineDepth = this.lineDepth - this.rules.indentSize;
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
      if (i(s.array[s.index], 10) && (this.lineIndex = s.index, this.lineOffset = this.lineOffset + 1, this.lineNumber = this.lineNumber + 1), at(s.array[s.index + 1]))
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
var Ci = it, r = new Ci();

// src/parse/detection.ts
function mn(e) {
  let s = [], n = 0, u = /(((var)|(let)|(const)|(function)|(import))\s+(\w|\$)+[a-zA-Z0-9]*)/.test(e) && /@import/.test(e) === !1, N = /((((final)|(public)|(private))\s+static)|(static\s+void))/.test(e);
  function l() {
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
  function O() {
    let b = 1, f = c, t = !1, h = !1, F = /((public)|(private))\s+(static\s+)?(((v|V)oid)|(class)|(final))/.test(e);
    function le() {
      return e.indexOf("(") > -1 || e.indexOf("=") > -1 || e.indexOf(";") > -1 && e.indexOf("{") > -1 ? N === !0 || /\w<\w+(,\s+\w+)*>/.test(e) || /(?:var|let|const)\s+\w+\s*:/.test(e) || /=\s*<\w+/.test(e) ? {
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
    if (b < n)
      do
        t === !1 ? i(s[b], 42) && i(s[b - 1], 47) ? (s[b - 1] = c, t = !0) : h === !1 && b < n - 6 && s[b].charCodeAt(0) === 102 && //     f
        s[b + 1].charCodeAt(0) === 105 && // i
        s[b + 2].charCodeAt(0) === 108 && // l
        s[b + 3].charCodeAt(0) === 116 && // t
        s[b + 4].charCodeAt(0) === 101 && // e
        s[b + 5].charCodeAt(0) === 114 && // r
        i(s[b + 6], 58) && (h = !0) : t === !0 && i(s[b], 42) && b !== n - 1 && i(s[b + 1], 47) ? (t = !1, s[b] = c, s[b + 1] = c) : h === !0 && i(s[b], 59) && (h = !1, s[b] = c), (t === !0 || h === !0) && (s[b] = c), b = b + 1;
      while (b < n);
    return f = s.join(c), /\s\/\//.test(e) === !1 && /\/\/\s/.test(e) === !1 && /^(\s*(\{|\[)(?!%))/.test(e) === !0 && /((\]|\})\s*)$/.test(e) && e.indexOf(",") !== -1 ? {
      language: "json",
      lexer: "script"
    } : /((\}?(\(\))?\)*;?\s*)|([a-z0-9]("|')?\)*);?(\s*\})*)$/i.test(e) === !0 && (u === !0 || F === !0 || /console\.log\(/.test(e) === !0 || /export\s+default\s+class\s+/.test(e) === !0 || /export\s+(const|var|let|class)s+/.test(e) === !0 || /document\.get/.test(e) === !0 || /((=|(\$\())\s*function)|(\s*function\s+(\w*\s+)?\()/.test(e) === !0 || e.indexOf("{") === -1 || /^(\s*if\s+\()/.test(e) === !0) ? le() : e.indexOf("{") > -1 && (/^(\s*[\u007b\u0024\u002e#@a-z0-9])/i.test(e) || /^(\s*\/(\*|\/))/.test(e) || /^(\s*\*\s*\{)/.test(e)) && /^(\s*if\s*\()/.test(e) === !1 && /=\s*(\{|\[|\()/.test(f) === !1 && (/(\+|-|=|\?)=/.test(f) === !1 || /\/\/\s*=+/.test(f) || /=+('|")?\)/.test(e) && /;\s*base64/.test(e)) && /function(\s+\w+)*\s*\(/.test(f) === !1 ? m() : e.indexOf("{%") > -1 ? {
      language: "liquid",
      lexer: "markup"
    } : {
      language: "unknown",
      lexer: "text"
    };
  }
  function o() {
    function b() {
      return /{%-?\s*(schema|for|if|unless|render|include)/.test(e) || /{%-?\s*end\w+/.test(e) || /{{-?\s*content_for/.test(e) || /{{-?\s*[a-zA-Z0-9_'".[\]]+\s*-?}}/.test(e) || /{%/.test(e) && /%}/.test(e) && /{{/.test(e) && /}}/.test(e) ? {
        language: "liquid",
        lexer: "markup"
      } : {
        language: "html",
        lexer: "markup"
      };
    }
    return /^(\s*<!doctype\s+html>)/i.test(e) || /^(\s*<html)/i.test(e) || /<form\s/i.test(e) && /<label\s/i.test(e) && /<input\s/i.test(e) || /<img(\s+\w+=['"]?\S+['"]?)*\s+src\s*=/.test(e) || /<a(\s+\w+=['"]?\S+['"]?)*\s+href\s*=/.test(e) || /<ul\s/i.test(e) && /<li\s/i.test(e) && /<\/li>/i.test(e) && /<\/ul>/i.test(e) || /<head\s*>/.test(e) && /<\/head>/.test(e) || /^(\s*<!DOCTYPE\s+((html)|(HTML))\s+PUBLIC\s+)/.test(e) && /XHTML\s+1\.1/.test(e) === !1 && /XHTML\s+1\.0\s+(S|s)((trict)|(TRICT))/.test(e) === !1 ? b() : /\s?{[{%]-?/.test(e) ? {
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
  N === !1 && /=(>|=|-|\+|\*)/.test(e) === !1 && /^(?:\s*((if)|(for)|(function))\s*\()/.test(e) === !1 && /(?:\s|;|\})((if)|(for)|(function\s*\w*))\s*\(/.test(e) === !1 && u === !1 && /return\s*\w*\s*(;|\})/.test(e) === !1 && (e === void 0 || /^(?:\s*#(?!(!\/)))/.test(e) || /\n\s*(\.|@)\w+(\(|(\s*:))/.test(e) && />\s*<\w/.test(e) === !1 || /^\s*:root\s*\{/.test(e) || /-{2}\w+\s*\{/.test(e) || /^\s*(?:body|button|hr|section|h[1-6]|p|strong|\*)\s+\{\s+/.test(e)) ? l() : (s = e.replace(/\[[a-zA-Z][\w-]*=['"]?[a-zA-Z][\w-]*['"]?\]/g, c).split(c), n = s.length, /^(\s*({{|{%|<))/.test(e) ? o() : N === !0 || /^(?:[\s\w-]*<)/.test(e) === !1 && /(?:>[\s\w-]*)$/.test(e) === !1 ? O() : (/^(?:\s*<\?xml)/.test(e) || /(?:>[\w\s:]*)?<(?:\/|!|#)?[\w\s:\-[]+/.test(e) || /^\s*</.test(e) && /<\/\w+(\w|\d)+>\s*$/.test(e)) && (/^(?:[\s\w]*<)/.test(e) || /(?:>[\s\w]*)$/.test(e)) || /^(?:\s*<s((cript)|(tyle)))/i.test(e) && /(?:<\/s((cript)|(tyle))>\s*)$/i.test(e) ? /^(?:[\s\w]*<)/.test(e) === !1 || /(?:>[\s\w]*)$/.test(e) === !1 ? O() : o() : {
    language: "unknown",
    lexer: "text"
  });
}

// src/rules/validate.ts
function Jt(e, s, n) {
  if (e === "global")
    switch (s) {
      case "indentChar":
        return Ln(e, s, n);
      case "preset":
      case "language":
        return nt(e, s, n);
      case "crlf":
      case "correct":
      case "endNewline":
        return wt(e, s, n);
      case "indentLevel":
      case "indentSize":
      case "preserveLine":
      case "wrap":
      case "wrapFraction":
        return Oi(e, s, n);
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
        return wt(e, s, n);
      case "forceArgument":
      case "forceFilter":
        return Oi(e, s, n);
      case "ignoreTagList":
      case "dedentTagList":
      case "paddedTagList":
        return hn(e, s, n);
      case "lineBreakSeparator":
      case "delimiterPlacement":
      case "delimiterTrims":
      case "quoteConvert":
        return nt(e, s, n);
    }
  else if (e === "markup")
    switch (s) {
      case "forceAttribute":
        if (yt(n))
          return Oi(e, s, n);
        if (ht(n))
          return wt(e, s, n);
        throw je({
          message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
          option: `${e} \u2192 ${s}`,
          provided: n,
          expected: [
            "boolean",
            "number"
          ]
        });
      case "attributeSort":
        if (ht(n))
          return wt(e, s, n);
        if (Ne(n))
          return hn(e, s, n);
        throw je({
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
        return wt(e, s, n);
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
        return ht(n);
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
        return wt(e, s, n);
    }
}
function hn(e, s, n) {
  if (Ne(n)) {
    if (n.length === 0)
      return !0;
    for (let u = 0, N = n.length; u < N; u++)
      if (Bt(n[u]) === !1)
        throw je({
          message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
          option: `${e} \u2192 ${s} (index: ${u})`,
          provided: n,
          expected: [
            "string"
          ]
        });
    return !0;
  }
  throw je({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "string[]"
    ]
  });
}
function Ln(e, s, n) {
  if (typeof n == "string")
    return !0;
  throw je({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "string"
    ]
  });
}
function Oi(e, s, n) {
  if (yt(n) && isNaN(n) === !1)
    return !0;
  throw je({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "number"
    ]
  });
}
function wt(e, s, n) {
  if (yt(n))
    return n !== 0;
  if (ht(n))
    return !0;
  throw je({
    message: `Invalid ${e} rule (${s}) type "${typeof n}" provided`,
    option: e === "global" ? s : `${e} \u2192 ${s}`,
    provided: n,
    expected: [
      "boolean"
    ]
  });
}
function nt(e, s, n) {
  if (Bt(n) === !1)
    throw je({
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
    throw je({
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
    throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
        throw je({
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
var Ut = _e(Ge, {
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
var Zt = _e(Ge, {
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
var Xt = _e(Ge, {
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
var Yt = _e(Ge, {
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
var Cn = [
  "correct",
  "crlf",
  "endNewline",
  "indentChar",
  "indentLevel",
  "indentSize",
  "preserveLine",
  "wrap",
  "wrapFraction"
], On = [
  "liquid",
  "markup",
  "style",
  "json",
  "script"
];
function vn(e) {
  if (e.preset === r.rules.preset)
    return e;
  if (nt("global", "preset", e.preset))
    switch (e.preset) {
      case "default":
        return _e(Ge, e);
      case "strict":
        return _e(Zt, e);
      case "recommended":
        return _e(Ut, e);
      case "warrington":
        return _e(Xt, e);
      case "prettier":
        return _e(Yt, e);
    }
  return e;
}
function gn(e, s) {
  let n = zi(e), u = n("preset") ? vn(e) : e, N;
  s.rules.length > 0 && (N = {}), n("language") && Jt("global", "language", u.language) && r.language !== u.language && (r.language = r.rules.language = u.language);
  for (let l of Cn)
    n(l) !== !1 && r.rules[l] !== u[l] && Jt("global", l, u[l]) && (N && (N[l] = { from: r.rules[l], to: u[l] }), l === "crlf" && (r.crlf = u[l] ? vi : H), l === "wrap" && u[l] > 0 && (n("wrapFraction") === !1 || n("wrapFraction") && u.wrapFraction <= 0) && (u.wrapFraction = u[l] - u[l] / 4), r.rules[l] = u[l]);
  for (let l of On)
    if (n(l) !== !1 && r.rules[l] !== u[l]) {
      N && (N[l] = Fe(null));
      for (let O in u[l])
        Jt(l, O, u[l][O]) && (N && (N[l][O] = Fe(null), N[l][O].old = r.rules[l][O], N[l][O].new = u[l][O]), r.rules[l][O] = u[l][O]);
    }
  if (s.rules.length > 0)
    for (let l of s.rules)
      l(N, r.rules);
}

// src/cli/utils.ts
function Tt(e, ...s) {
  let n = Array.isArray(e);
  return function u(N, l, O) {
    let o = typeof O;
    if (O && o === "object")
      if (Array.isArray(O))
        for (let b of O)
          l = u(N, l, b);
      else
        for (let b in O) {
          let f = O[b];
          typeof f == "function" ? l[b] = f(l[b], Tt) : f === void 0 ? N ? l.splice(b, 1) : delete l[b] : f === null || typeof f != "object" || Array.isArray(f) ? l[b] = f : typeof l[b] == "object" ? l[b] = f === l[b] ? f : Tt(l[b], f) : l[b] = u(!1, {}, f);
        }
    else
      o === "function" && (l = O(l, Tt));
    return l;
  }(n, n ? e.slice() : Object.assign({}, e), s);
}

// src/esthetic.ts
var bn = new class {
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
    Re.env === "node" && (Re.cwd = process.cwd()), Re.env === "browser" && ("esthetic" in window || Ii(window, "esthetic", {
      configurable: !0,
      get() {
        return bn;
      }
    })), Di(this.preset, {
      default: { get() {
        return Ge;
      } },
      warrington: { get() {
        return Xt;
      } },
      prettier: { get() {
        return Yt;
      } },
      strict: { get() {
        return Zt;
      } },
      recommended: { get() {
        return Ut;
      } }
    });
  }
  preset(s, n) {
    return Tt(this.preset[s], n);
  }
  get table() {
    return r.data;
  }
  get definitions() {
    return ki;
  }
  get detect() {
    return mn;
  }
  get error() {
    return r.error;
  }
  get lines() {
    return r.numbers;
  }
  grammar(s) {
    return s ? (Le.extend(s), this) : Le.extend();
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
    if (r.source = s, tt(n) && "language" in n && this.language !== n.language && nt("global", "language", n.language) && (this.language = r.language = r.rules.language = n.language, this.lexer = r.lexer = De(r.language)), this.rules(n), this.lexer === "auto") {
      let o = this.detect(r.source);
      this.language = r.language = r.rules.language = o.language, this.lexer = r.lexer = De(o.language);
    }
    let u = Lt(this.language), N = Re.reportStats ? oi(this.language, this.lexer) : null, l = r.document(u);
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
    let O = N === null ? null : this.stats = N(l.length);
    if (this.events.format.length > 0) {
      for (let o of this.events.format)
        if (o.call({ get data() {
          return r.data;
        } }, {
          get output() {
            return s;
          },
          get stats() {
            return O;
          },
          get rules() {
            return r.rules;
          }
        }) === !1)
          return s;
    }
    return l;
  }
  parse(s, n) {
    if (r.source = s, tt(n) && "language" in n && this.language !== n.language && nt("global", "language", n.language) && (this.language = r.language = r.rules.language = n.language, this.lexer = r.lexer = De(r.language)), this.rules(n), this.lexer === "auto") {
      let o = this.detect(r.source);
      this.language = r.language = r.rules.language = o.language, this.lexer = r.lexer = De(o.language);
    }
    let u = Lt(this.language), N = Re.reportStats ? oi(this.language, this.lexer) : null, l = r.document(u, 1);
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
    let O = N === null ? null : this.stats = N(r.count);
    if (this.events.parse.length > 0) {
      for (let o of this.events.parse)
        if (o({
          get data() {
            return r.data;
          },
          get stats() {
            return O;
          },
          get rules() {
            return r.rules;
          }
        }) === !1)
          return s;
    }
    return l;
  }
  rules(s) {
    return Ke(s) ? r.rules : (gn(s, this.events), this.language = r.language, this.lexer = r.lexer = De(r.language), r.rules);
  }
  liquid(s, n) {
    return this.language = r.language = r.rules.language = "liquid", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  html(s, n) {
    return this.language = r.language = r.rules.language = "html", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  xml(s, n) {
    return this.language = r.language = r.rules.language = "xml", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  css(s, n) {
    return this.language = r.language = r.rules.language = "css", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  json(s, n) {
    return this.language = r.language = r.rules.language = "json", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  js(s, n) {
    return this.language = r.language = r.rules.language = "javascript", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
  ts(s, n) {
    return this.language = r.language = r.rules.language = "typescript", this.lexer = r.lexer = De(r.language), this.format(s, n);
  }
}();

export { bn as default };
