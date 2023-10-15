var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/lz-string@1.5.0/node_modules/lz-string/libs/lz-string.js
var require_lz_string = __commonJS({
  "../../node_modules/.pnpm/lz-string@1.5.0/node_modules/lz-string/libs/lz-string.js"(exports, module) {
    var LZString = function() {
      var f = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};
      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};
          for (var i = 0; i < alphabet.length; i++) {
            baseReverseDic[alphabet][alphabet.charAt(i)] = i;
          }
        }
        return baseReverseDic[alphabet][character];
      }
      var LZString2 = {
        compressToBase64: function(input) {
          if (input == null)
            return "";
          var res = LZString2._compress(input, 6, function(a) {
            return keyStrBase64.charAt(a);
          });
          switch (res.length % 4) {
            default:
            case 0:
              return res;
            case 1:
              return res + "===";
            case 2:
              return res + "==";
            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function(input) {
          if (input == null)
            return "";
          return LZString2._compress(input, 15, function(a) {
            return f(a + 32);
          }) + " ";
        },
        decompressFromUTF16: function(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString2._decompress(compressed.length, 16384, function(index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(uncompressed) {
          var compressed = LZString2.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2);
          for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
            var current_value = compressed.charCodeAt(i);
            buf[i * 2] = current_value >>> 8;
            buf[i * 2 + 1] = current_value % 256;
          }
          return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(compressed) {
          if (compressed === null || compressed === void 0) {
            return LZString2.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2);
            for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
              buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
            }
            var result = [];
            buf.forEach(function(c) {
              result.push(f(c));
            });
            return LZString2.decompress(result.join(""));
          }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(input) {
          if (input == null)
            return "";
          return LZString2._compress(input, 6, function(a) {
            return keyStrUriSafe.charAt(a);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          input = input.replace(/ /g, "+");
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function(uncompressed) {
          return LZString2._compress(uncompressed, 16, function(a) {
            return f(a);
          });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null)
            return "";
          var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          }
          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 8; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 16; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          }
          value = 2;
          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
          while (true) {
            context_data_val = context_data_val << 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else
              context_data_position++;
          }
          return context_data.join("");
        },
        decompress: function(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString2._decompress(compressed.length, 32768, function(index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function(length, resetValue, getNextValue) {
          var dictionary = [], enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
          for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
          }
          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 2:
              return "";
          }
          dictionary[3] = c;
          w = c;
          result.push(c);
          while (true) {
            if (data.index > length) {
              return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (c = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 2:
                return result.join("");
            }
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
            if (dictionary[c]) {
              entry = dictionary[c];
            } else {
              if (c === dictSize) {
                entry = w + w.charAt(0);
              } else {
                return null;
              }
            }
            result.push(entry);
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString2;
    }();
    if (typeof define === "function" && define.amd) {
      define(function() {
        return LZString;
      });
    } else if (typeof module !== "undefined" && module != null) {
      module.exports = LZString;
    } else if (typeof angular !== "undefined" && angular != null) {
      angular.module("LZString", []).factory("LZString", function() {
        return LZString;
      });
    }
  }
});

// src/moloko.ts
var moloko_exports = {};
__export(moloko_exports, {
  hash: () => hash,
  loader: () => loader,
  mount: () => mount,
  render: () => render
});

// src/editor/hash.ts
var import_lz_string = __toESM(require_lz_string(), 1);
function encode(attrs) {
  attrs.hash = "M=" + import_lz_string.default.compressToEncodedURIComponent(JSON.stringify({
    language: attrs.language,
    input: {
      value: attrs.input.model.getValue(),
      width: attrs.input.width
    },
    preview: {
      mode: attrs.preview.mode,
      state: attrs.preview.state,
      width: attrs.preview.width
    },
    esthetic: {
      rules: attrs.esthetic.rules,
      state: attrs.esthetic.state,
      width: attrs.esthetic.width
    }
  }));
  window.location.hash = attrs.hash;
}
function decode(hash2) {
  return JSON.parse(import_lz_string.default.decompressFromEncodedURIComponent(hash2));
}

// ../../node_modules/.pnpm/mergerino@0.4.0/node_modules/mergerino/dist/mergerino.min.js
var e = Object.assign || ((e2, t2) => (t2 && Object.keys(t2).forEach((o2) => e2[o2] = t2[o2]), e2));
var t = (e2, r, s) => {
  const c = typeof s;
  if (s && "object" === c)
    if (Array.isArray(s))
      for (const o2 of s)
        r = t(e2, r, o2);
    else
      for (const c2 of Object.keys(s)) {
        const f = s[c2];
        "function" == typeof f ? r[c2] = f(r[c2], o) : void 0 === f ? e2 && !isNaN(c2) ? r.splice(c2, 1) : delete r[c2] : null === f || "object" != typeof f || Array.isArray(f) ? r[c2] = f : "object" == typeof r[c2] ? r[c2] = f === r[c2] ? f : o(r[c2], f) : r[c2] = t(false, {}, f);
      }
  else
    "function" === c && (r = s(r, o));
  return r;
};
var o = (o2, ...r) => {
  const s = Array.isArray(o2);
  return t(s, s ? o2.slice() : e({}, o2), r);
};
var mergerino_min_default = o;

// ../../node_modules/.pnpm/url-join@5.0.0/node_modules/url-join/lib/url-join.js
function normalize(strArray) {
  var resultArray = [];
  if (strArray.length === 0) {
    return "";
  }
  if (typeof strArray[0] !== "string") {
    throw new TypeError("Url must be a string. Received " + strArray[0]);
  }
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    var first = strArray.shift();
    strArray[0] = first + strArray[0];
  }
  if (strArray[0].match(/^file:\/\/\//)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1:///");
  } else {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1://");
  }
  for (var i = 0; i < strArray.length; i++) {
    var component = strArray[i];
    if (typeof component !== "string") {
      throw new TypeError("Url must be a string. Received " + component);
    }
    if (component === "") {
      continue;
    }
    if (i > 0) {
      component = component.replace(/^[\/]+/, "");
    }
    if (i < strArray.length - 1) {
      component = component.replace(/[\/]+$/, "");
    } else {
      component = component.replace(/[\/]+$/, "/");
    }
    resultArray.push(component);
  }
  var str = resultArray.join("/");
  str = str.replace(/\/(\?|&|#[^!])/g, "$1");
  var parts = str.split("?");
  str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&");
  return str;
}
function urlJoin() {
  var input;
  if (typeof arguments[0] === "object") {
    input = arguments[0];
  } else {
    input = [].slice.call(arguments);
  }
  return normalize(input);
}

// src/model.ts
function model(options) {
  const rules2 = {
    crlf: false,
    correct: false,
    preset: "default",
    language: "liquid",
    endNewline: false,
    indentChar: " ",
    indentLevel: 0,
    indentSize: 2,
    preserveLine: 2,
    wrap: 0,
    wrapFraction: 0,
    liquid: {
      commentNewline: false,
      commentIndent: true,
      delimiterTrims: "preserve",
      delimiterPlacement: "preserve",
      forceFilter: 0,
      forceArgument: 0,
      ignoreTagList: [],
      indentAttribute: false,
      lineBreakSeparator: "before",
      normalizeSpacing: true,
      preserveComment: false,
      preserveInternal: false,
      dedentTagList: [],
      quoteConvert: "none"
    },
    markup: {
      attributeCasing: "preserve",
      attributeSort: false,
      commentNewline: false,
      commentIndent: true,
      delimiterTerminus: "inline",
      forceAttribute: 3,
      forceIndent: false,
      ignoreCSS: false,
      ignoreJS: true,
      ignoreJSON: false,
      lineBreakValue: "preserve",
      preserveComment: false,
      preserveText: false,
      preserveAttribute: false,
      selfCloseSpace: true,
      selfCloseSVG: true,
      stripAttributeLines: false,
      quoteConvert: "none"
    },
    json: {
      arrayFormat: "default",
      braceAllman: false,
      bracePadding: false,
      objectIndent: "default",
      objectSort: false
    },
    style: {
      commentIndent: false,
      commentNewline: false,
      atRuleSpace: true,
      classPadding: false,
      noLeadZero: false,
      preserveComment: false,
      sortSelectors: false,
      sortProperties: false,
      quoteConvert: "none"
    },
    script: {
      arrayFormat: "default",
      braceNewline: false,
      bracePadding: false,
      braceStyle: "none",
      braceAllman: false,
      caseSpace: false,
      commentIndent: false,
      commentNewline: false,
      elseNewline: false,
      endComma: "never",
      functionNameSpace: false,
      functionSpace: false,
      inlineReturn: true,
      methodChain: 4,
      neverFlatten: false,
      noCaseIndent: false,
      noSemicolon: false,
      objectSort: false,
      objectIndent: "default",
      preserveComment: false,
      quoteConvert: "none",
      styleGuide: "none",
      ternaryLine: false,
      variableList: false,
      vertical: false
    }
  };
  const defaults = {
    resolve: {
      origin: window.location.origin,
      path: "",
      mithril: true,
      esthetic: true
    },
    tabs: false,
    monaco: {
      automaticLayout: false,
      useShadowDOM: false,
      multiCursorPaste: "full",
      experimentalWhitespaceRendering: "off",
      copyWithSyntaxHighlighting: false,
      accessibilitySupport: "off",
      scrollbar: {
        verticalScrollbarSize: 2
      },
      smoothScrolling: true,
      minimap: {
        enabled: false
      },
      padding: {
        top: 25,
        bottom: 200
      },
      renderWhitespace: "boundary",
      formatOnPaste: false,
      scrollBeyondLastLine: false,
      fontFamily: "consolas, monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontWeight: "100",
      disableMonospaceOptimizations: true,
      fontVariations: true,
      fontSize: 13.7,
      letterSpacing: 0.3,
      lineHeight: 1.7,
      cursorBlinking: "blink",
      cursorStyle: "line-thin",
      cursorWidth: 1,
      bracketPairColorization: {
        enabled: false,
        independentColorPoolPerBracketType: false
      }
    },
    preview: {
      enable: true
    },
    offset: 0,
    detect: true,
    diff: false,
    hash: true,
    input: "",
    language: "liquid",
    sidebar: {
      enable: true,
      width: 75,
      actions: {
        rules: {
          active: false,
          icon: "rules",
          tooltip: "Formatting Rules"
        },
        table: {
          active: false,
          icon: "table",
          tooltip: "Parse Table"
        },
        preview: {
          active: false,
          icon: "pane",
          tooltip: "Toggle Preview"
        },
        link: {
          active: false,
          icon: "link",
          tooltip: "Copy Link"
        },
        github: {
          active: false,
          icon: "github",
          tooltip: "Submit Issue to Github"
        }
      }
    },
    footer: {
      enable: false,
      height: 35,
      actions: {
        detect: {
          active: true,
          icon: "detect",
          tooltip: "Automatic Language Detection"
        },
        language: {
          active: true,
          icon: "gears",
          tooltip: "Choose Language"
        },
        formatToggle: {
          active: true,
          icon: "check",
          tooltip: "Toggle Formatting"
        }
      }
    },
    colors: {
      background: "#0f1215",
      backdrop: "#13171a",
      accents: "#e45589",
      borders: "#666666"
    }
  };
  const config = Object.assign(defaults, mergerino_min_default(defaults, options));
  return {
    hash: config.hash ? "" : null,
    path: urlJoin(config.resolve.origin, config.resolve.path),
    get config() {
      return config;
    },
    language: {
      state: 1 /* Hidden */,
      current: config.language || "auto",
      detect: config.detect
    },
    input: {
      width: -1,
      editor: null,
      model: null
    },
    preview: {
      width: -1,
      editor: null,
      mode: 1 /* Formatted */,
      state: 3 /* Opened */,
      model: null
    },
    esthetic: {
      width: -1,
      editor: null,
      model: null,
      state: 1 /* Hidden */,
      rules: rules2
    }
  };
}

// src/modules.ts
var esthetic;
var m;
function load(attrs) {
  return __async(this, null, function* () {
    if (attrs.config.resolve.esthetic === true) {
      try {
        const esm = yield import(urlJoin(attrs.path, "modules/esthetic.js"));
        esthetic = esm.default;
      } catch (e2) {
        throw new Error("Failed to import \xC6sthetic", e2);
      }
    } else if (typeof attrs.config.resolve.esthetic === "string") {
      try {
        const esm = yield import(attrs.config.resolve.esthetic);
        esthetic = esm.default;
      } catch (e2) {
        throw new Error("Failed to import \xC6sthetic", e2);
      }
    }
    if (attrs.config.resolve.mithril === true) {
      try {
        yield import(urlJoin(attrs.path, "modules/mithril.js"));
        m = window.m;
      } catch (e2) {
        throw new Error("Failed to import Mithril", e2);
      }
    } else if (typeof attrs.config.resolve.mithril === "string") {
      try {
        yield import(attrs.config.resolve.mithril);
        m = window.m;
      } catch (e2) {
        throw new Error("Failed to import Mithril", e2);
      }
    }
  });
}

// src/utils/icons.ts
var file = (name, width = "24", height = width) => m(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24"
  },
  m.trust(
    {
      jsx: '<circle cx="16" cy="15.974" r="2.5" style="fill:#00d8ff"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#00d8ff"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#00d8ff"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#00d8ff"/>',
      tsx: '<circle cx="16" cy="15.974" r="2.5" style="fill:#007acc"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#007acc"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#007acc"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#007acc"/>',
      text: '<path d="M22.038,2H6.375a1.755,1.755,0,0,0-1.75,1.75v24.5A1.755,1.755,0,0,0,6.375,30h19.25a1.755,1.755,0,0,0,1.75-1.75V6.856Zm.525,2.844,1.663,1.531H22.563ZM6.375,28.25V3.75H20.813V8.125h4.813V28.25Z" style="fill:#c2c2c2"/><rect x="8.125" y="15.097" width="13.076" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="24.439" width="9.762" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="19.763" width="15.75" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="10.23" width="15.75" height="1.75" style="fill:#829ec2"></path>',
      scss: '<path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style="fill:#cd6799"></path>',
      css: '<polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/></polygon><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"></polygon><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"></polygon><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"></polygon><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"></polygon><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"></polygon><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"></polygon>',
      html: '<polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/>',
      liquid: '<path d="M29.988,22.372l-.748.048a5.209,5.209,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.01A7.262,7.262,0,0,0,9.263,20.7a7.229,7.229,0,0,0-3.94,1.06,4.751,4.751,0,0,1-2.47.7l-.838,0c0,.889-.009,1.739-.015,2.515l.861,0a7.237,7.237,0,0,0,3.75-1.052,4.763,4.763,0,0,1,2.659-.7,4.835,4.835,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989L30,24.888C29.995,24.1,29.991,23.249,29.988,22.372Z" style="fill:#004999"></path><path d="M29.983,15.581l-.743.047a5.226,5.226,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.278,5.278,0,0,1-5.3.01A7.312,7.312,0,0,0,9.263,13.91a7.3,7.3,0,0,0-3.941,1.06,4.742,4.742,0,0,1-2.469.7l-.828,0c0,.849,0,1.693,0,2.515l.84,0a7.237,7.237,0,0,0,3.75-1.052,4.7,4.7,0,0,1,2.659-.7,4.8,4.8,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989l.568-.037C29.983,17.269,29.983,16.424,29.983,15.581Z" style="fill:#004999"></path><path d="M29.24,9.137a5.254,5.254,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.009A7.16,7.16,0,0,0,9.263,7.42a7.159,7.159,0,0,0-3.94,1.059,4.738,4.738,0,0,1-2.469.7l-.834,0c0,.82,0,1.664,0,2.517l.836,0a7.237,7.237,0,0,0,3.75-1.052,4.738,4.738,0,0,1,2.659-.706,4.814,4.814,0,0,1,2.634.719,7.791,7.791,0,0,0,7.8,0,5.293,5.293,0,0,1,5.319,0,7.732,7.732,0,0,0,4.4.988l.568-.037c0-.859,0-1.7.007-2.516Z" style="fill:#004999"></path>',
      markdown: '<rect x="2.5" y="7.955" width="27" height="16.091" style="fill:none;stroke:#755838"/><polygon points="5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636" style="fill:#755838"/><polygon points="22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636" style="fill:#755838"/>',
      javascript: '<path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style="fill:#f5de19"></path>',
      json: '<path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style="fill:#f5de19"/><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style="fill:#f5de19"/>',
      typescript: '<path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc"></path>',
      yaml: '<path d="M2,12.218c.755,0,1.51-.008,2.264,0l.053.038Q5.7,13.638,7.078,15.014c.891-.906,1.8-1.794,2.7-2.7.053-.052.11-.113.192-.1.608,0,1.215,0,1.823,0a1.4,1.4,0,0,1,.353.019c-.7.67-1.377,1.369-2.069,2.05L5.545,18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007,1.223-1.209,2.431-2.433,3.658-3.637C4.627,14.841,3.318,13.525,2,12.218Z" style="fill:#fbc02d"></path><path d="M12.7,12.218c.613,0,1.226,0,1.839,0q0,3.783,0,7.566c-.611,0-1.222.012-1.832-.008,0-1.664,0-3.329,0-4.994-1.6,1.607-3.209,3.2-4.811,4.8-.089.08-.166.217-.305.194-.824-.006-1.649,0-2.474,0Q8.916,16,12.7,12.218Z" style="fill:#fbc02d"></path><path d="M14.958,12.22c.47-.009.939,0,1.409,0,.836.853,1.69,1.689,2.536,2.532q1.268-1.267,2.539-2.532.7,0,1.4,0-.008,3.784,0,7.567c-.471,0-.943.006-1.414,0q.008-2.387,0-4.773c-.844.843-1.676,1.7-2.526,2.536-.856-.835-1.687-1.695-2.532-2.541,0,1.594-.006,3.188.006,4.781-.472,0-.943.005-1.415,0Q14.958,16,14.958,12.22Z" style="fill:#fbc02d"></path><path d="M23.259,12.217c.472,0,.944-.007,1.416,0q-.007,3.083,0,6.166c1.26,0,2.521,0,3.782,0,.063.006.144-.012.191.045.448.454.907.9,1.353,1.354q-3.371.007-6.741,0Q23.267,16,23.259,12.217Z" style="fill:#fbc02d"></path>',
      xml: '<path d="M20.42,21.157l2.211,2.211L30,16,22.631,8.631,20.42,10.843,25.58,16Z" style="fill:#f1662a"/><path d="M11.58,10.843,9.369,8.631,2,16l7.369,7.369,2.211-2.211L6.42,16Z" style="fill:#f1662a"/><path d="M17.411,7.677l1.6.437-4.42,16.209-1.6-.437,4.42-16.209Z" style="fill:#f1662a"/>'
    }[name]
  )
);
var icon = (name, size = "24") => m(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  m.trust(
    {
      document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
      rules: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
      link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
      pane: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
      table: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="0" y1="7" x2="9.5" y2="7"></line><line x1="0" y1="11" x2="9.5" y2="11"></line><line x1="0" y1="15" x2="9.5" y2="15"></line><line x1="0" y1="19" x2="9.5" y2="19"></line><line x1="12" y1="7" x2="21" y2="7"></line><line x1="12" y1="11" x2="21" y2="11"></line><line x1="12" y1="15" x2="21" y2="15"></line><line x1="12" y1="19" x2="21" y2="19"></line><line x1="12" y1="23" x2="21" y2="23"></line><line x1="0" y1="23" x2="9.5" y2="23"></line>',
      plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
      check: '<polyline points="20 6 9 17 4 12"></polyline>',
      code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
      cross: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
      gears: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
      github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
      refresh: '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
      detect: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
      detectoff: '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>'
    }[name]
  )
);

// src/utils/helpers.ts
function loadExternalCSS(path) {
  const head = document.documentElement.firstElementChild;
  const loaded = Array.from(head.querySelectorAll("link")).map(({ id }) => id);
  for (const file2 of ["monaco/monaco.css", "moloko.css"]) {
    const id = file2.slice(0, -4);
    if (!loaded.includes(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = urlJoin(path, file2);
      head.appendChild(link);
    }
  }
}
function isOpen(state) {
  return state !== 1 /* Hidden */;
}
function formatCode(attrs) {
  const value = attrs.input.model.getValue();
  const text = esthetic.format(value);
  attrs.preview.model.setValue(text);
}
function pixels(percent, offset = 75) {
  return (window.innerWidth - offset) * (percent / 100);
}

// src/components/sidebar.ts
function ghissue(options = {}) {
  const url = new URL("https://github.com/panoply/esthetic/issues/new");
  const types = [
    "body",
    "title",
    "labels",
    "template",
    "milestone",
    "assignee",
    "projects"
  ];
  for (const type of types) {
    let value = options[type];
    if (value === void 0)
      continue;
    if (type === "labels" || type === "projects") {
      if (!Array.isArray(value))
        throw new TypeError(`The \`${type}\` option should be an array`);
      value = value.join(",");
    }
    url.searchParams.set(type, value);
  }
  return url.toString();
}
var Sidebar = ({ attrs }) => {
  const actions = Object.entries(attrs.config.sidebar.actions);
  const onEsthetic = () => {
    if (attrs.language.state === 3 /* Opened */) {
      attrs.language.state = 2 /* Toggle */;
      setTimeout(() => {
        attrs.language.state = 1 /* Hidden */;
        if (isOpen(attrs.preview.state)) {
          attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        } else {
          attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
        }
        onEsthetic();
      }, 300);
    } else {
      if (attrs.esthetic.state === 3 /* Opened */) {
        attrs.esthetic.state = 2 /* Toggle */;
        setTimeout(() => {
          attrs.esthetic.state = 1 /* Hidden */;
          if (isOpen(attrs.preview.state)) {
            attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
          } else {
            attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
          }
          last = "";
          m.redraw();
        }, 300);
      } else if (attrs.esthetic.state === 1 /* Hidden */) {
        attrs.esthetic.state = 3 /* Opened */;
        attrs.input.editor.layout({ width: pixels(100, 675), height: window.innerHeight });
        last = "rules";
        m.redraw();
      }
    }
  };
  const onLanguage = () => {
    if (attrs.esthetic.state === 3 /* Opened */) {
      attrs.esthetic.state = 2 /* Toggle */;
      setTimeout(() => {
        attrs.esthetic.state = 1 /* Hidden */;
        if (isOpen(attrs.preview.state)) {
          attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        } else {
          attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
        }
        last = "";
        onLanguage();
      }, 300);
    } else {
      if (attrs.language.state === 3 /* Opened */) {
        attrs.language.state = 2 /* Toggle */;
        setTimeout(() => {
          attrs.language.state = 1 /* Hidden */;
          if (isOpen(attrs.preview.state)) {
            attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
          } else {
            attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
          }
          m.redraw();
        }, 300);
      } else if (attrs.language.state === 1 /* Hidden */) {
        attrs.language.state = 3 /* Opened */;
        attrs.input.editor.layout({ width: pixels(100, 275), height: window.innerHeight });
        m.redraw();
      }
    }
  };
  let last;
  return {
    view: ({
      attrs: attrs2
    }) => [
      m(
        'button.btn-language[type="button"][data-tooltip="right"]',
        {
          dataTooltip: "right",
          ariaLabel: "Change Language",
          onclick: onLanguage
        },
        file(attrs2.language.current)
      ),
      actions.map(
        ([
          key,
          action
        ]) => m(
          'button.btn-action[type="button"][data-tooltip="right"]',
          {
            dataTooltip: "right",
            ariaLabel: action.tooltip,
            class: last === key ? "active" : "",
            onclick: () => {
              console.log(key);
              if (key === "file") {
                onEsthetic();
              } else if (key === "rules") {
                onEsthetic();
              } else if (key === "preview" || key === "table") {
                if (attrs2.language.state === 3 /* Opened */) {
                  onLanguage();
                } else if (attrs2.esthetic.state === 3 /* Opened */) {
                  onEsthetic();
                }
                if (key === "table") {
                  if (attrs2.preview.state === 1 /* Hidden */) {
                    attrs2.preview.state = 3 /* Opened */;
                    attrs2.preview.editor.getContainerDomNode().style.display = "";
                    attrs2.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
                    formatCode(attrs2);
                  }
                  if (attrs2.preview.mode !== 3 /* ParseTable */) {
                    attrs2.preview.mode = 3 /* ParseTable */;
                    last = key;
                  } else {
                    attrs2.preview.mode = 1 /* Formatted */;
                  }
                } else {
                  if (attrs2.preview.state === 3 /* Opened */) {
                    attrs2.preview.state = 1 /* Hidden */;
                    attrs2.preview.editor.getContainerDomNode().style.display = "none";
                    attrs2.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
                  } else if (attrs2.preview.state === 1 /* Hidden */) {
                    attrs2.preview.state = 3 /* Opened */;
                    attrs2.preview.editor.getContainerDomNode().style.display = "";
                    attrs2.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
                    formatCode(attrs2);
                  }
                }
              } else if (key === "github") {
                window.open(ghissue({
                  title: "",
                  labels: [`${attrs2.config.language}`],
                  body: [
                    "<!-- DESCRIBE THE ISSUE -->",
                    "",
                    "",
                    "<!--",
                    "  DO NOT EDIT BELOW THIS LINE AS IT CONTAINS PLAYGROUND LINK",
                    "-->",
                    "",
                    `[\xC6STHETIC PLAYGROUND LINK](${window.location.href})`
                  ].join("\n")
                }), "_blank");
              }
            }
          },
          key === "preview" ? isOpen(attrs2.preview.state) ? icon(action.icon) : icon("document") : icon(action.icon)
        )
      )
    ]
  };
};

// src/monaco/theme.ts
var shared = [
  {
    foreground: "888888",
    token: "comment"
  },
  {
    foreground: "FAFAFA",
    token: "delimiter"
  },
  {
    foreground: "FFF9A6",
    token: "string"
  },
  {
    foreground: "F48FB1",
    token: "constant.numeric"
  },
  {
    foreground: "ae81ff",
    token: "constant.language"
  },
  {
    foreground: "ae81ff",
    token: "constant.character"
  },
  {
    foreground: "ae81ff",
    token: "constant.other"
  },
  {
    foreground: "f92672",
    token: "keyword"
  },
  {
    foreground: "f92672",
    token: "storage"
  },
  {
    foreground: "66d9ef",
    fontStyle: "italic",
    token: "storage.type"
  }
];
var liquid = [
  {
    // {% in {% tag %}
    foreground: "FAFAFA",
    token: "delimiter.liquid"
  },
  {
    // - in {%- or {{-
    foreground: "E91E63",
    token: "delimiter.whitespace.liquid"
  },
  {
    // tag in {% tag %}
    foreground: "E91E63",
    token: "tag.liquid"
  },
  {
    // true false nil
    foreground: "FF80F4",
    token: "boolean.liquid"
  },
  {
    foreground: "FFAB40",
    token: "keyword.parameter.liquid"
  },
  {
    // == in {% if x == %}
    foreground: "E91E63",
    token: "operator.liquid"
  },
  {
    foreground: "5CD7E0D5",
    token: "keyword.filter.liquid"
  },
  {
    // object in {{ object.prop }}
    foreground: "FAFAFA",
    token: "tag.output.liquid"
  },
  {
    // object in {{ object.prop }}
    foreground: "81D4FA",
    token: "keyword.object.liquid"
  }
];
var html = [
  {
    // div in <div class="xxx">
    foreground: "FF93BC",
    token: "tag.html"
  },
  {
    // < in <div>
    foreground: "BECAFF",
    token: "delimiter.html"
  },
  {
    // = in <div class="xxx">
    foreground: "FF93BC",
    token: "delimiter.equals.html"
  },
  {
    // class in <div class="xxx">
    foreground: "91EBC2",
    token: "attribute.name.html"
  },
  {
    // "xxx" in <div class="xxx">
    foreground: "FFF9A6",
    token: "attribute.value.html"
  }
];
var css = [];
var json = [];
var javascript = [];
var rules = [
  ...shared,
  ...liquid,
  ...html,
  ...css,
  ...json,
  ...javascript
];
var PotionTheme = {
  base: "vs-dark",
  inherit: true,
  colors: {
    "editor.background": "#0f1215",
    "editor.foreground": "#fafafa",
    "editor.selectionBackground": "#253B76",
    "editor.lineHighlightBackground": "#FFFFFF0F",
    "editorCursor.foreground": "#FFFFFFA6",
    "editorWhitespace.foreground": "#424242",
    "editorHoverWidget.background": "#161616"
  },
  rules
};

// src/monaco/liquid.ts
var EMPTY_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
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
];
var configuration = {
  colorizedBracketPairs: [],
  wordPattern: /(-?\d*\.\d\w*)|([^`~!@$^&*()=+[{\]}\\|;:'",.<>/\s]+)/g,
  brackets: [
    ["<!--", "-->"],
    ["<", ">"],
    ["{{", "}}"],
    ["{{-", "-}}"],
    ["{%", "%}"],
    ["{%-", "-%}"],
    ["{", "}"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "%", close: "%" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "<", close: ">" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  onEnterRules: [
    {
      beforeText: new RegExp(
        `<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
        "i"
      ),
      afterText: /^<\/(\w[\w\d]*)\s*>$/i,
      action: {
        indentAction: 2
      }
    },
    {
      beforeText: new RegExp(
        `<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
        "i"
      ),
      action: { indentAction: 1 }
    }
  ]
};
var liquid2 = {
  ignoreCase: true,
  brackets: [
    {
      open: "{%",
      close: "%}",
      token: "delimiter.liquid"
    },
    {
      open: "{{",
      close: "}}",
      token: "delimiter.liquid"
    }
  ],
  keywords: [
    // (opening) tags
    // LIQUID SINGLETONS
    "render",
    "layout",
    "include",
    "else",
    "elsif",
    "cycle",
    "liquid",
    // LIQUID BLOCK TAGS
    "if",
    "render",
    "assign",
    "capture",
    "case",
    "comment",
    "increment",
    "decrement",
    "for",
    "section",
    "block",
    "raw",
    "tablerow",
    "unless",
    // LIQUID EMBEDDED
    "schema",
    "stylesheet",
    "style",
    "javascript",
    // LIQUID END TAG
    "endif",
    "endcapture",
    "endcase",
    "endblock",
    "endcomment",
    "endfor",
    "endraw",
    "endtablerow",
    "endunless",
    // LIQUID END EMBEDDED
    "endschema",
    "endstylesheet",
    "endstyle",
    "endjavascript"
  ],
  tokenizer: {
    root: [
      // WHITESPACE
      [/\s+/, ""],
      [
        /^-{3}/,
        { token: "delimiter.liquid", next: "@Frontmatter", nextEmbedded: "yaml" }
      ],
      // LIQUID COMMENTS
      [/{%-?\s*(?=\s*#)/, "comment.line.liquid", "@LiquidLineComment"],
      [/{%-?\s*comment\s*-?%}/, "comment.liquid", "@LiquidBlockComment"],
      // LIQUID TAGS
      [
        /({%)(-?\s*)(style)(\s*-?)(%})/,
        [
          "delimiter.liquid",
          "",
          "tag.liquid",
          "",
          { token: "delimiter.liquid", next: "@LiquidStyle", nextEmbedded: "css" }
        ]
      ],
      [
        /({%)(-?\s*)(stylesheet)(\s*-?)(%})/,
        [
          "delimiter.liquid",
          "",
          "tag.liquid",
          "",
          { token: "delimiter.liquid", next: "@LiquidStylesheet", nextEmbedded: "css" }
        ]
      ],
      [
        /({%)(-?\s*)(schema)(\s*-?)(%})/,
        [
          "delimiter.liquid",
          "",
          "tag.liquid",
          "",
          {
            token: "delimiter.liquid",
            next: "@LiquidSchema",
            nextEmbedded: "json"
          }
        ]
      ],
      [
        /({%)(-?\s*)(javascript)(\s*-?)(%})/,
        [
          "delimiter.liquid",
          "",
          "tag.liquid",
          "",
          {
            token: "delimiter.liquid",
            next: "@LiquidJavaScript",
            nextEmbedded: "javascript"
          }
        ]
      ],
      [/{%/, { token: "@rematch", next: "@LiquidTag" }],
      [/{{/, { token: "@rematch", next: "@LiquidOutput" }],
      // HTML COMMENT
      [/<!--/, "comment.html", "@HTMLComment"],
      // HTML TAGS
      [/<!DOCTYPE/, "metatag.html", "@HTMLDocType"],
      [/(<)((?:[\w-]+:)?[\w-]+)(\s*)(\/>)/, ["delimiter.html", "tag.html", "", "delimiter.html"]],
      // HTML EMBEDDED
      [/(<)(script)/, ["delimiter.html", { token: "tag.html", next: "@HTMLTagScript" }]],
      [/(<)(style)/, ["delimiter.html", { token: "tag.html", next: "@HTMLTagStyle" }]],
      // HTML STANDARD TAGS
      [/(<)((?:[\w-]+:)?[\w-]+)/, ["delimiter.html", { token: "tag.html", next: "@HTMLTag" }]],
      [/(<\/)((?:[\w-]+:)?[\w-]+)/, ["delimiter.html", { token: "tag.html", next: "@HTMLTag" }]],
      [/</, "delimiter.html"],
      [/[^<]+/, ""]
    ],
    /**
     * Liquid Comment Blocks
     */
    LiquidBlockComment: [
      [/{%-?\s*endcomment\s*-?%}/, "comment.end.liquid", "@pop"],
      [/./, "comment.content.liquid"]
    ],
    /**
     * Liquid Comment Line
     */
    LiquidLineComment: [
      [/%}/, "comment.content.liquid", "@pop"],
      [/./, "comment.content.liquid"]
    ],
    Frontmatter: [
      // WHITESPACE
      [/\s+/, ""],
      [
        /^-{3}$/,
        {
          token: "delimiter.liquid",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      ]
    ],
    LiquidJavaScript: [
      // WHITESPACE
      [/\s+/, ""],
      [/%}/, "delimiter.liquid", "@pop"],
      [
        /{%-?\s*endjavascript\s*-?%}/,
        {
          token: "@rematch",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      ]
    ],
    LiquidSchema: [
      // WHITESPACE
      [/\s+/, ""],
      [/%}/, "delimiter.liquid", "@pop"],
      [
        /{%-?\s*endschema\s*-?%}/,
        {
          token: "@rematch",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      ]
    ],
    LiquidStyle: [
      // WHITESPACE
      [/\s+/, ""],
      [/%}/, "delimiter.liquid", "@pop"],
      [
        /{%-?\s*endstyle\s*-?%}/,
        {
          token: "@rematch",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      ]
    ],
    LiquidStylesheet: [
      // WHITESPACE
      [/\s+/, ""],
      [/%}/, "delimiter.liquid", "@pop"],
      [
        /{%-?\s*endstylesheet\s*-?%}/,
        {
          token: "@rematch",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      ]
    ],
    LiquidTag: [
      [/%}/, "delimiter.liquid", "@pop"],
      { include: "expression" }
    ],
    /**
    * Variable Tag Handling
    */
    LiquidOutput: [
      [/}}/, "delimiter.liquid", "@pop"],
      { include: "expression" }
    ],
    LiquidSingleQuoteString: [
      // closing double quoted string
      [/'/, "string.liquid", "@pop"],
      // string part
      [/[^'\\]*(?:(?:\\.|#(?!\{))[^'\\]*)*/, "string.liquid"]
    ],
    LiquidDoubleQuoteString: [
      // closing double quoted string
      [/"/, "string.liquid", "@pop"],
      // string part
      [/[^"\\]*(?:(?:\\.|#(?!\{))[^"\\]*)*/, "string.liquid"]
    ],
    /**
     * Expression Handling
     */
    expression: [
      // WHITESPACE
      // WHITESPACE
      [/\s+/, ""],
      // OBJECT NAME
      [/([a-zA-Z_][a-zA-Z0-9_-]+)(\s*)(?=[[.])/, ["keyword.object.liquid", ""]],
      // FILTER PARARAMETERS
      [/(\|)(\s*)(\w+)(:)/, ["operator.liquid", "", "keyword.filter.liquid", "operator.liquid"]],
      // ARGUMENT PARAMETERS
      [/(\w+)(:)/, ["keyword.parameter.liquid", "operator.liquid"]],
      // OPERATOR SYMBOLS
      [/(\b(?:and|or|in|with|contains)\b)(\s+)/, ["operator.liquid", ""]],
      // OPERATOR LOGIC
      [/(\b(?:true|false|nil)\b)/, "boolean.liquid"],
      // OPERATOR MATH
      [/\+|-|\/{1,2}|\*{1,2}/, "operator.liquid"],
      // OPERATER COMPARISON
      [/==|!=|<|>|>=|<=|=/, "operator.liquid"],
      // OPERATOR PUNCTUATION
      [/\||:|\.{1,2}/, "operator.liquid"],
      // NUMBERS
      [/\d+(\.\d+)?/, "number.liquid"],
      // PUNCTATION
      [/\(|\)|\[|\]/, "delimiter.liquid"],
      // KEYWORD IDENTIFIERS
      [/[^\W\d][\w]*/, {
        cases: {
          "@keywords": "tag.liquid",
          "@default": ""
        }
      }],
      // STRINGS
      [/"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/, "string.liquid"],
      [/'/, "string.liquid", "@LiquidSingleQuoteString"],
      [/"/, "string.liquid", "@LiquidDoubleQuoteString"]
    ],
    LiquidAttributeString: [
      [/\s*{{-?/, "delimiter.liquid", "@LiquidOutput"],
      [/\s*{%-?/, "delimiter.output.liquid", "@LiquidTag"],
      [/"/, "attribute.value.html", "@pop"],
      [/./, "attribute.value.html"]
    ],
    /**
     * HTML
     */
    HTMLDocType: [
      [/[^>]+/, "metatag.content.html"],
      [/>/, "metatag.html", "@pop"]
    ],
    // HTML Comments
    HTMLComment: [
      [/-->/, "comment.html", "@pop"],
      [/[^-]+/, "comment.content.html"],
      [/./, "comment.content.html"]
    ],
    HTMLTag: [
      [/\/?>/, "delimiter.html", "@pop"],
      [/"/, "attribute.value.html", "@LiquidAttributeString"],
      [/'([^']*)'/, "attribute.value.html"],
      [/[\w-]+/, "attribute.name.html"],
      [/=/, "delimiter.equals.html"],
      [/[ \t\r\n]+/, ""]
      // whitespace
    ],
    // After <script
    HTMLTagScript: [
      [/type/, "attribute.name.html", "@HTMLTagScriptType"],
      [/"([^"]*)"/, "attribute.value.html"],
      [/'([^']*)'/, "attribute.value.html"],
      [/[\w-]+/, "attribute.name.html"],
      [/=/, "delimiter.html"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagScriptEmbedded",
          nextEmbedded: "text/javascript"
        }
      ],
      // WHITESPACE
      [/\s+/, ""],
      // whitespace
      [
        /(<\/)(script\s*)(>)/,
        ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
      ]
    ],
    // After <script ... type
    HTMLTagScriptType: [
      [/=/, "delimiter.html", "@HTMLTagScriptTypeEquals"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagScriptEmbedded",
          nextEmbedded: "text/javascript"
        }
      ],
      // cover invalid e.g. <script type>
      // WHITESPACE
      [/\s+/, ""],
      // whitespace
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    // After <script ... type =
    HTMLTagScriptTypeEquals: [
      [
        /"([^"]*)"/,
        {
          token: "attribute.value.html",
          switchTo: "@HTMLTagScriptCustomType.$1"
        }
      ],
      [
        /'([^']*)'/,
        {
          token: "attribute.value.html",
          switchTo: "@HTMLTagScriptCustomType.$1"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagScriptEmbedded",
          nextEmbedded: "text/javascript"
        }
      ],
      // cover invalid e.g. <script type=>
      // WHITESPACE
      [/\s+/, ""],
      // whitespace
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    // After <script ... type = $S2
    HTMLTagScriptCustomType: [
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagScriptEmbedded.$S2",
          nextEmbedded: "$S2"
        }
      ],
      [/"([^"]*)"/, "attribute.value.html"],
      [/'([^']*)'/, "attribute.value.html"],
      [/[\w-]+/, "attribute.name.html"],
      [/=/, "delimiter.html"],
      // WHITESPACE
      [/\s+/, ""],
      // whitespace
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    // Embedded <script
    HTMLTagScriptEmbedded: [
      [/<\/script/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }],
      [/[^<]+/, ""]
    ],
    // After <style
    HTMLTagStyle: [
      [/type/, "attribute.name.html", "@HTMLTagStyleType"],
      [/"([^"]*)"/, "attribute.value.html"],
      [/'([^']*)'/, "attribute.value.html"],
      [/[\w-]+/, "attribute.name.html"],
      [/=/, "delimiter.html"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagStyleEmbedded",
          nextEmbedded: "text/css"
        }
      ],
      // WHITESPACE
      [/\s+/, ""],
      // whitespace
      [
        /(<\/)(style\s*)(>)/,
        ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
      ]
    ],
    // After <style ... type
    HTMLTagStyleType: [
      [/=/, "delimiter.html", "@HTMLTagStyleTypeEquals"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagStyleEmbedded",
          nextEmbedded: "text/css"
        }
      ],
      // cover invalid e.g. <style type>
      [/[ \t\r\n]+/, ""],
      // whitespace
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    // After <style ... type =
    HTMLTagStyleTypeEquals: [
      [
        /"([^"]*)"/,
        {
          token: "attribute.value.html",
          switchTo: "@HTMLTagStyleCustomType.$1"
        }
      ],
      [
        /'([^']*)'/,
        {
          token: "attribute.value.html",
          switchTo: "@HTMLTagStyleCustomType.$1"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagStyleEmbedded",
          nextEmbedded: "text/css"
        }
      ],
      // cover invalid e.g. <style type=>
      [/[ \t\r\n]+/, ""],
      // whitespace
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    // After <style ... type = $S2
    HTMLTagStyleCustomType: [
      [
        />/,
        {
          token: "delimiter.html",
          next: "@HTMLTagStyleEmbedded.$S2",
          nextEmbedded: "$S2"
        }
      ],
      [/"([^"]*)"/, "attribute.value.html"],
      [/'([^']*)'/, "attribute.value.html"],
      [/[\w-]+/, "attribute.name.html"],
      [/=/, "delimiter.html"],
      [/[ \t\r\n]+/, ""],
      // whitespace
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    HTMLTagStyleEmbedded: [
      [/<\/style/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }],
      [/[^<]+/, ""]
    ]
  }
};

// src/monaco/schema.ts
var schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "properties": {
    "wrap": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Character width limit before applying word wrap. A `0` value disables this option.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrap/)\n"
    },
    "wrapFraction": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Wrap fraction is used on internal structures as a secondary point of control. By default, it will use a 75% metric according to `wrap` defined values.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrapFraction/)\n"
    },
    "correct": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "Automatically correct some sloppiness in Liquid code. The rule allows \xC6sthetic to reason with intended structures. The option acts as a very mild form of linting, wherein invalid or language specification preferred code will attempt to be corrected in the least obtrusive manner possible with respect to the language specification standards.\n\nEnabling this rule is not going to produce miracles and for the most part will have little effect overall but can help in some situations.\n\n> **NOTE**\n>\n> This rule is still experimental and will be both improved and refined in future versions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/correct/)"
    },
    "language": {
      "enum": [
        "auto",
        "text",
        "html",
        "liquid",
        "javascript",
        "jsx",
        "typescript",
        "tsx",
        "json",
        "css",
        "scss",
        "less",
        "xml"
      ],
      "default": "auto",
      "markdownDescription": "The name of the language provided. This option can be omitted when using \xC6sthetic within text editors as languages are automatically assigned based on file.\n\n\xC6sthetic supports parse, format and language detection capabilities for the following languages:\n\n- [Liquid](https://shopify.github.io/liquid/)\n- [HTML](https://en.wikipedia.org/wiki/HTML)\n- [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)\n- [CSS](https://en.wikipedia.org/wiki/CSS)\n- [SCSS](https://sass-lang.com)\n- [JSON](https://en.wikipedia.org/wiki/JSON)\n- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)\n- [TypeScript](https://www.typescriptlang.org/)\n- [JSX](https://facebook.github.io/jsx/)\n- [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html)\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/language/)\n\n"
    },
    "indentSize": {
      "type": "number",
      "default": 2,
      "markdownDescription": "The number of `indentChar` values to comprise a single indentation. By default this is set to `2` meaning a single indentation will be 2 whitespace characters.\n\n**How to use Tabs?**\n\nIf you're heathen who prefers Tabs. You will need to set the `indentChar` to `\\t` and infer the size limit here.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentSize/)\n"
    },
    "indentChar": {
      "type": "string",
      "default": " ",
      "markdownDescription": "The string characters to comprise a single indentation. Any string combination is accepted. Generally speaking, you should leave this alone unless you know what you are doing.\n\nThe `indentSize` rule will use this character. For example, if you were to set `indentSize` to `4` then this character will be repeated 4 times, ie: `    ` - by default the `indentSize` is set to `2`.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentChar/)\n"
    },
    "indentLevel": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Controls how much indentation padding should be applied to beautification. This option is internally used for code that requires switching between libraries.\n\nAvoid using this rule, it is highly unlikely you'll require it within your project.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentLevel/)\n"
    },
    "preserveLine": {
      "type": "number",
      "default": 3,
      "markdownDescription": "The maximum number of consecutive empty lines to retain (ie: preserve). By default, `3` newlines are preserved.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/preserveLine/)\n\n"
    },
    "endNewline": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "Whether or not files should end with an empty newline. When this rule is `undefined` or omitted then \xC6sthetic will look for an `.editorconfig` file and use definitions inferred within.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/endNewline/)\n"
    },
    "crlf": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "If line termination should be Windows (CRLF) format. By default, Unix (LF) format is used. Setting this value to `true` will use CRLF.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/crlf)\n"
    },
    "preset": {
      "enum": [
        "default",
        "recommended",
        "warrington",
        "strict",
        "shopify"
      ],
      "default": "default",
      "markdownDescription": "A preset ruleset style guide to use. This will assign rules according to a set of defaults to produce a certain beautification result. If this rule is `undefined` it will default to using `default` which is least obtrusive formatting style.\n\n**Options**\n\n**`default`** (required)\n\n> This is the **default** and the most unobtrusive. Formatting will use a preservationist based technique with this preset mode.\n\n**`recommended`**\n\n> This style guide is typically suited for most cases, it will apply a base set of rules aligned with the \xC6sthetic approach.\n\n**`warrington`**\n\n> This style guide preset is best suited for developers and specifically teams working with Shopify themes. The preset was curated by the talented [David Warrington](https://ellodave.dev/).\n\n**`strict`**\n\n> This is a strict ruleset curated by the projects author [Panoply (sissel)](https://github.com/panoply).\n\n**`shopify`** \u{1F921}\n\n> Replicates the Prettier style of formatting. If you've used the Shopify Liquid Prettier Plugin and enjoy that beautification style using this preset will produce the same results.\n\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/preset/)\n"
    },
    "liquid": {
      "type": "object",
      "additionalProperties": false,
      "markdownDescription": "Beautification rules applied to **Liquid**",
      "properties": {
        "delimiterTrims": {
          "type": "string",
          "enum": [
            "preserve",
            "tags",
            "outputs",
            "never",
            "always",
            "multiline"
          ],
          "default": "preserve",
          "markdownDescription": "### Delimiter Trims\n\nHow delimiter whitespace trim dashes (`{%-`, `-%}`, `{{-` and `-}}`) should handled in Liquid tags and output object tokens. You should _maybe_ avoid setting this to `force` in order to avoid stripping whitespace in cases where text content contains Liquid.\n\n> **NOTE**\n>\n> This rule will not touch Liquid tokens encapsulated within strings, ie: `\"{{ foo }}\"` or `'{{ foo }}'` are left intact.\n\n\n**Options**\n\nThis is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified.\n\n- preserve\n- tags\n- outputs\n- never\n- always\n- multiline\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/delimiterTrims/)\n\n"
        },
        "delimiterPlacement": {
          "type": "string",
          "enum": [
            "preserve",
            "inline",
            "consistent",
            "force",
            "force-multiline"
          ],
          "default": "preserve",
          "markdownDescription": "Controls the placement of opening and closing Liquid tag delimiters (`{%`, `{{`, `}}` and `%}`). This rule provides 3 different formatting options and will ensure that delimiters are beautified in concordance. When the rule is `undefined` it will default to using `none`.\n\n**Options**\n\nThis is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified. The **recommended** option to use is `consistent` or `force-multiline`.\n\n- preserve\n- default\n- inline\n- consistent\n- force\n- force-multiline\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/delimiterPlacement/)\n\n"
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Applies single indentation to containing content of Liquid comments. Liquid line type comments are currently not supported by this rule. Only block type Liquid tokens will be handled.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/commentIndent/)\n\n"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/commentNewline/)\n"
        },
        "forceArgument": {
          "type": "number",
          "default": 0,
          "markdownDescription": "Forces Liquid tag and filter argument expressions onto newlines according to the number of arguments present on the token. By default, this rule uses a value of `0` which will result in arguments being forced when the tag or output token containing them spans \xBE (or 75%) of defined global [`wrap`](https://\xE6sthetic.dev/rules/global/wrap) limit.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/forceArgument/)\n\n\n"
        },
        "forceFilter": {
          "type": "number",
          "default": 0,
          "markdownDescription": "Forces Liquid filter `|` expressions onto newlines when the number of filters contained on a tag exceeds the limit defined. By default, this rule uses a value of `0` which will result in Liquid filters being forced when the tag or output token containing them spans \xBE (or 75%) of defined global [`wrap`](https://\xE6sthetic.dev/rules/global/wrap) limit.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/forceFilter/)\n"
        },
        "dedentTagList": {
          "type": "array",
          "default": [],
          "markdownDescription": "A list of Liquid tags that should exclude standard indentation. Only tags which contain a start and end types are valid.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/dedentTagList/)\n",
          "items": {
            "type": "string",
            "additionalItems": true,
            "uniqueItems": true,
            "not": {
              "enum": [
                "comment"
              ]
            },
            "enum": [
              "form",
              "paginate",
              "capture",
              "case",
              "for",
              "if",
              "raw",
              "tablerow",
              "liquid",
              "unless",
              "schema",
              "style",
              "script",
              "stylesheet",
              "javascript"
            ]
          }
        },
        "ignoreTagList": {
          "type": "array",
          "default": [],
          "markdownDescription": "A list of Liquid tags that should excluded from formatting. Only tags which contain a start and end types are valid.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/ignoreTagList/)\n",
          "items": {
            "type": "string",
            "additionalItems": true,
            "uniqueItems": true,
            "not": {
              "enum": [
                "comment"
              ]
            },
            "enum": [
              "form",
              "paginate",
              "capture",
              "case",
              "for",
              "if",
              "raw",
              "tablerow",
              "liquid",
              "unless",
              "schema",
              "style",
              "script",
              "stylesheet",
              "javascript"
            ]
          }
        },
        "indentAttribute": {
          "default": false,
          "type": "boolean",
          "markdownDescription": "Whether or not to apply indentation of HTML attributes within Liquid identified tag blocks contained in HTML Tags. This rule emulates the `liquid-prettier-plugin` structures with more refined controlling. This requires the `markup` rule `forceAttributes` be set to either `true` or have limit value (e.g: `2`) defined.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/indentAttribute/)\n"
        },
        "lineBreakSeparator": {
          "default": "after",
          "type": "string",
          "markdownDescription": "Controls the placement of Liquid separator type characters in new line structures. In situations where you write a multiline tag expression this rule can augment the order of leading operator characters such as the parameter comma `,` separator.\n\nThis rule will not break tag content on to new lines for you, it instead together with the inferred structure you've expressed. This means that you will need to manually new line the arguments.\n\n### Options\n\nThis is a Liquid specific formatting rule which will default to `after` when no option has been specified.\n\n- before\n- after\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/lineBreakSeparator/)\n",
          "enum": [
            "before",
            "after"
          ]
        },
        "normalizeSpacing": {
          "default": true,
          "type": "boolean",
          "markdownDescription": "Whether or not to normalize and correct the inner spacing of Liquid tokens. This rule will equally distribute whitespace characters contained within Liquid tags and output tokens. The rule will also inject spacing in accordance with common Liquid code structures.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/normalizeSpacing)\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of Liquid block comments.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/preserveComment/)\n"
        },
        "preserveInternal": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Prevent the internals structures of Liquid tokens from being formatted. When enabled, \xC6sthetic will preserve the internal formations of output and tags.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/preserveInternal/)\n"
        },
        "quoteConvert": {
          "default": "none",
          "type": "string",
          "markdownDescription": "How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/quoteConvert/)\n",
          "enum": [
            "none",
            "double",
            "single"
          ]
        }
      }
    },
    "markup": {
      "type": "object",
      "additionalProperties": false,
      "markdownDescription": "Beautification rules applied to the following markup languages:\n\n- **HTML**\n- **Liquid**\n- **XML**\n- **XHTML**",
      "properties": {
        "attributeCasing": {
          "type": "string",
          "default": "preserve",
          "markdownDescription": "How markup attribute names and value casing should be processed. This defaults to `preserve` which will leave casing intact and _typically_ the best option to use.\n\n**Options**\n\nThis rule defaults to using `preserve` which will leave attribute names and values intact.\n\n- preserve\n- lowercase\n- lowercase-name\n- lowercase-value\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/attributeCasing/)\n",
          "enum": [
            "preserve",
            "lowercase",
            "lowercase-name",
            "lowercase-value"
          ]
        },
        "attributeSort": {
          "type": [
            "boolean",
            "array"
          ],
          "default": false,
          "oneOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "boolean"
            }
          ],
          "markdownDescription": "Provides sorting of HTML and XML Attributes. When enabled (`true`) it will sort attributes in an alpha-numeric order. Sorting is ignored on tags which contain Liquid output and tag type tokens as attributes. The rule also accepts a list of attribute names and when provided will be sorted according to order passed.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/attributeSort/)\n"
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Applies single indentation to containing content of HTML comments.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/commentIndent/)\n\n"
        },
        "commentDelimiters": {
          "enum": [
            "preserve",
            "inline",
            "inline-align",
            "force",
            "consistent"
          ],
          "default": "preserve",
          "markdownDescription": "Controls the placement of HTML and XML (i.e: markup) type comment delimiters. This is a markup specific formatting rule that defaults to using preserve and applied to languages using `<!--` and `-->` delimiter tokens.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/commentDelimiters/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/commentNewline/)\n\n"
        },
        "delimiterTerminus": {
          "enum": [
            "inline",
            "force",
            "adapt"
          ],
          "default": "inline",
          "markdownDescription": "Whether or not ending HTML tag delimiters should be forced onto a newline. This will emulate the style of Prettier's `singleAttributePerLine` formatting option, wherein the last `>` delimiter character breaks itself onto a new line. Though this output style was popularized by Prettier, the resulting structures produced are far from elegant (aesthetically).\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/delimiterTerminus/)\n\n"
        },
        "forceIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Will force indentation upon all content and tags without regard for the text nodes. To some degree this rule emulates a result similar to that you'd expect in Prettier. Inline preservation is respected in cases where a Liquid output object token is encapsulated between text nodes. In such scenarios the text content will only force indent the start and end portions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/forceIndent/)\n"
        },
        "forceAttribute": {
          "type": [
            "boolean",
            "number"
          ],
          "default": false,
          "markdownDescription": "How or if markup attributes should be indented each onto their own line. You can optionally provide an integer value of `1` or more. When an integer value is passed, attributes will be forced only if the number of attributes contained on the tag exceeds the supplied value limit. When you define a `wrap` level then attributes will be automatically forced when limit is exceeded unless you've set this rule to `true` or provided an integer threshold.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/forceAttribute/)\n"
        },
        "lineBreakValue": {
          "enum": [
            "preserve",
            "align",
            "indent",
            "force-preserve",
            "force-align",
            "force-indent"
          ],
          "default": "preserve",
          "markdownDescription": "Attribute value handling applied when values span multiple lines.\n\n**Options**\n\n- preserve\n- align\n- indent\n- force-preserve\n- force-align\n- force-indent\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/lineBreakValue/)\n"
        },
        "ignoreJS": {
          "type": "boolean",
          "default": true,
          "markdownDescription": 'Whether or not to format regions of code that are identified to be JavaScript. Tags such as `<script>` and `{% javascript %}` can contain JavaScript and by default beautification is applied using the `script` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\nWhen enabled (ie: `true`) the entire `<script>` region is excluded including indentation levels. If the `<script>` tag is being used to link an external file (eg: `<script src="/path/fle.js"><\/script>`) and no code is detected between the opening and closing tags then formatting will be applied in accordance with defined rules pertaining to markup.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreJS)\n'
        },
        "ignoreJSON": {
          "type": "boolean",
          "default": true,
          "markdownDescription": 'Whether or not to format regions of code that are identified to be JSON. Such tags are typically identified using attribute annotations like `<script type="application/json">`. By default, beautification is applied using the `json` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreJSON/)\n'
        },
        "ignoreCSS": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "Whether or not to format regions of code that are identified to be CSS. Tags such as `<style>` and `{% style %}` can contain CSS and by default beautification is applied using the `style` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreCSS/)\n"
        },
        "preserveText": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "If text in the provided markup code should be preserved exactly as provided. This option eliminates beautification and wrapping of text content.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveText/)\n"
        },
        "selfCloseSpace": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether markup self-closing (void) tags should apply a single space to ending portion of the delimiter which  results in the tag output to produce `' />'` instead of `'/>'`.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/selfCloseSpace/)\n"
        },
        "selfCloseSVG": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not SVG type tags should be converted to self closing void  types. When enabled, tags which contain a closing tag will instead become void type.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/selfCloseSVG/)\n"
        },
        "stripAttributeLines": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not newlines contained within tag attributes or preserved. This rule will be used along side the `forceAttribute` rule and when enabled (`true`) will strip newlines contained in HTML attributes. When disabled (`false`) then newlines will be preserved according to the **global** `preserveLine` limit defined.\n\nThis rule wil only take effect when `forceAttribute` is enabled (ie: `true`) or the `forceAttribute` limit has been exceeded as per the provided value. In addition to `forceAttribute`, the global `preserveLine` rule value is used to determine the amount of lines allowed.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/stripAttributeLines/)\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of HTML comments.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveComment/)\n"
        },
        "preserveAttribute": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not markup tags should have their insides preserved, ie: attributes. This option is only available to markup and does not support child tokens that require a different lexer. When enabled, this rule will run precedence and override all attribute related rules.\n\nIf you're working with a JavaScript framework that implements a data-attribute development based architecture (like Alpine or Angular) which requires a build-step then this rule _might_ help prevent \xC6sthetic augmenting code or failing when it encounters otherwise invalid structures not supported or recognized by official markup based language specifications.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveAttribute/)"
        },
        "quoteConvert": {
          "default": "none",
          "type": "string",
          "markdownDescription": "How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/quoteConvert/)\n",
          "enum": [
            "none",
            "double",
            "single"
          ]
        },
        "delimiterTrims": {
          "deprecationMessage": 'DEPRECATED\n\nYou can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  "liquid": {\n    "delimiterTrims": "preserve",\n    "lineBreakSeparator": "default",\n    "normalizeSpacing": true,\n    "valueForce": "intent"\n  },\n  "markup: {}\n}\n'
        },
        "lineBreakSeparator": {
          "deprecationMessage": 'DEPRECATED\n\nYou can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  "liquid": {\n    "delimiterTrims": "preserve",\n    "lineBreakSeparator": "default",\n    "normalizeSpacing": true,\n    "valueForce": "intent"\n  },\n  "markup: {}\n}\n'
        },
        "normalizeSpacing": {
          "deprecationMessage": 'DEPRECATED\n\nYou can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  "liquid": {\n    "delimiterTrims": "preserve",\n    "lineBreakSeparator": "default",\n    "normalizeSpacing": true,\n    "valueForce": "intent"\n  },\n  "markup: {}\n}\n'
        },
        "valueForce": {
          "deprecationMessage": 'DEPRECATED\n\nYou can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  "liquid": {\n    "delimiterTrims": "preserve",\n    "lineBreakSeparator": "default",\n    "normalizeSpacing": true,\n    "valueForce": "intent"\n  },\n  "markup: {}\n}\n'
        }
      }
    },
    "script": {
      "type": "object",
      "markdownDescription": "**!! USE WITH CAUTION !!**\n\n_\xC6sthetic script language formatting is not yet stable, use with caution_\n\n---\n\nBeautification rules for the following _script_ languages:\n\n- **JavaScript**\n- **TypeScript**\n\n Options provided here will also be applied to following markup embedded language blocks.",
      "properties": {
        "braceAllman": {
          "type": "boolean",
          "default": false,
          "title": "Style of Indent",
          "markdownDescription": "Determines if opening curly braces will exist on the same line as their condition or be forced onto a new line. (Allman style indentation)"
        },
        "braceNewline": {
          "type": "boolean",
          "default": false,
          "title": "Brace Lines",
          "markdownDescription": "If true an empty line will be inserted after opening curly braces and before closing curly braces"
        },
        "bracePadding": {
          "type": "boolean",
          "default": false,
          "title": "Brace Padding",
          "markdownDescription": "Inserts a space after the start of a container and before the end of the container if the contents of that container are not indented; such as: conditions, function arguments, and escaped sequences of template strings"
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not to indent the containing content of comment blocks.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/commentNewline/)\n"
        },
        "caseSpace": {
          "type": "boolean",
          "default": false,
          "title": "Space Following Case",
          "markdownDescription": "If the colon separating a case's expression (of a switch/case block) from its statement should be followed by a space instead of indentation, thereby keeping the case on a single line of code"
        },
        "elseNewline": {
          "type": "boolean",
          "default": false,
          "title": "Else On New Line",
          "markdownDescription": "If else_line is true then the keyword 'else' is forced onto a new line."
        },
        "endComma": {
          "type": "string",
          "default": "none",
          "title": "Trailing Comma",
          "markdownDescription": "If there should be a trailing comma in arrays and objects",
          "enum": [
            "none",
            "never",
            "always"
          ]
        },
        "arrayFormat": {
          "type": "string",
          "default": "default",
          "markdownDescription": '**_ARRAY FORMAT_**\n\n_Determines if all array indexes should be indented, never indented, or left to the default. The `default` option will leave array indexes intact and not apply any formatting._\n\n---\n#### `inline`&nbsp;&nbsp;&nbsp;\u{1F44E}\nEnsure all array indexes appear on a single line\n```json\n\n{\n  "object": [1,2,3,4]\n}\n\n```\n---\n#### `indent`&nbsp;&nbsp;&nbsp;\u{1F44D}\nAlways indent each index of an array\n\n```json\n\n{\n  "object": [\n    1,\n    2,\n    3,\n    4\n  ]\n}\n\n```',
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "objectIndent": {
          "type": "string",
          "default": "default",
          "title": "Formatting Arrays",
          "markdownDescription": "Determines if all object keys should be indented, never indented, or left to the default",
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "functionNameSpace": {
          "type": "boolean",
          "default": false,
          "title": "Space After Function Name",
          "markdownDescription": "If a space should follow a JavaScript function name"
        },
        "methodChain": {
          "type": "number",
          "default": 3,
          "markdownDescription": "**_METHOD CHAINING_**\n\n_When to break consecutively chained methods and properties onto separate lines. A negative value (eg: `-1`) disables this option. A value of `0` ensures method chains are never broken_\n\n---\n#### `0`\nPassing a value of `0` will never break chained methods.\n```js\n\nwindow.property.method(() => {}).foo(() => {})\n\n\n```\n\n---\n\n#### `3` (default)\nWhen there are more than `3` methods and/or properties they will be split onto separate lines.\n```js\n\nwindow\n  .property\n  .method(() => {})\n  .foo(() => {})\n\n\n```"
        },
        "neverFlatten": {
          "type": "boolean",
          "default": false,
          "title": "Never Flatten Destructured Lists",
          "markdownDescription": "If destructured lists in script should never be flattend"
        },
        "noCaseIndent": {
          "type": "boolean",
          "default": false,
          "title": "Case Indentation",
          "markdownDescription": "If a case statement should receive the same indentation as the containing switch block."
        },
        "noSemicolon": {
          "type": "boolean",
          "default": false,
          "title": "No Semicolons",
          "markdownDescription": "Removes semicolons that would be inserted by ASI. This option is in conflict with option 'correct' and takes precedence over conflicting features. Use of this option is a possible security/stability risk"
        },
        "objectSort": {
          "type": "boolean",
          "default": false,
          "markdownDescription": '**_OBJECT SORT_**\n\n_This option will alphabetically sort object properties (keys). This can be an expensive operation when dealing with large objects with over 2k properties._\n\n---\n#### Disabled&nbsp;&nbsp;&nbsp;\u{1F44D}\nWhen disabled, ie: `false` properties will not be sorted.\n```js\n\n{\n  e: "5",\n  b: "2",\n  d: "4",\n  a: "1",\n  f: "6",\n  c: "3"\n}\n\n\n```\n\n---\n\n#### Enabled&nbsp;&nbsp;&nbsp;\u{1F44E}\nWhen set to `true` all properties are alphanumerically sorted\n```js\n\n{\n  a: "1",\n  b: "2",\n  c: "3",\n  d: "4",\n  e: "5",\n  f: "6"\n}\n\n\n```'
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of comments and do not apply indentation.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)"
        },
        "quoteConvert": {
          "default": "none",
          "title": "Convert Quotes",
          "markdownDescription": "If the quotes of script strings or document attributes should be converted to single quotes or double quotes",
          "type": "string",
          "enum": [
            "double",
            "single",
            "none"
          ]
        },
        "functionSpace": {
          "type": "boolean",
          "default": false,
          "title": "Function Space",
          "markdownDescription": "Inserts a space following the function keyword for anonymous functions"
        },
        "ternaryLine": {
          "type": "boolean",
          "default": false,
          "title": "Keep Ternary Statements On One Line",
          "markdownDescription": "If ternary operators in JavaScript ? and : should remain on the same line"
        },
        "variableList": {
          "type": "boolean",
          "default": false,
          "title": "Variable Declaration Lists",
          "markdownDescription": "If consecutive JavaScript variables should be merged into a comma separated list or if variables in a list should be separated"
        },
        "vertical": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "**_VERTICAL LIST_**\n\n_If consecutive JavaScript variables should be merged into a comma separated list or if variables in a list should be separated_\n\n---\n#### Before Formatting\nBelow is an example of how this rule works if it's enabled, ie: `true`\n```js\n\nconst object = {\n  someProperty: 'x',\n  anotherProperty: 'x',\n  fooProperty: 'x'\n};\n\n\n```\n\n---\n\n#### After Formatting\nAfter formatting all declaration lists will be aligned in a vertical manner.\n```js\n\nconst object = {\n  someProperty    : 'x',\n  anotherProperty : 'x',\n  fooProperty     : 'x'\n};\n\n\n```"
        }
      }
    },
    "style": {
      "type": "object",
      "additionalProperties": false,
      "markdownDescription": "Beautification rules for the following _style_ languages:\n\n- **CSS**\n- **SCSS**\n- **SASS**\n- **LESS**\n\n. Options provided here will also be applied to the following markup embedded language blocks.",
      "properties": {
        "atRuleSpace": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Insert a single whitespace character between `@`prefixed rule types.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrapFraction/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "This will determine whether comments should always start at position `0` of each line or if comments should be indented according to the code."
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not to indent the containing content of comment blocks.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)"
        },
        "correct": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "**Default** `false` \u{1F481}\u{1F3FD}\u200D\u2640\uFE0F &nbsp;&nbsp; Recommended setting is: `false`\n\nAutomatically correct some sloppiness in style languages and allows \xC6sthetic to reason with intended structures. The option acts as a very mild form of linting, wherein invalid or language specification preferred code will attempt to be corrected in the least obtrusive manner possible with respect to language standards. Enabling this rule is not going to produce miracles and for the most part will have little effect overall but can help in some situations.\n\n\n> This rule is still experimental and will be both improved and refined in future versions.\n\n#\n\n---\n\n#### Applied Corrections\n\nBelow is a list of current applied corrections supported when the rule is enabled, (ie: `true`). The comments in the example below will inform upon corrections that the rule will apply to code where necessary.\n\n```css\n\n/* Semicolon will be added when missing */\n.class {\n  font-weight: 200\n}\n\n\n```\n\n"
        },
        "sortSelectors": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### Sort Selectors\n\n\nThis option will alphabetically sort class selectors. This can be an expensive operation when dealing with large CSS files with over 2k selectors present. Below is an example of this rule when it is enabled (ie: `true`).\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following CSS class selectors which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._\n\n```css\n\n.c-class,\n.b-class,\n.a-class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, class selectors **after** formatting are alphabetically (A-Z) sorted._\n\n```css\n\n.a-class,\n.b-class,\n.c-class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n"
        },
        "sortProperties": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Sort Properties\n\nThis option will alphabetically sort class properties. This can be an expensive operation when dealing with large CSS files with over 5k properties. Below is an example of this rule when it is enabled (ie: `true`) which is the **recommended** setting.\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following CSS class when containing properties which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._\n\n```css\n\n.class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, all class properties **after** formatting have now been alphabetically (A-Z) sorted._\n\n```css\n\n.class {\n  color: blue;\n  background: pink;\n  font-size: 20px;\n  width: 100px;\n}\n\n\n```\n"
        },
        "classPadding": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Class Padding\n\nThis rules will insert a new line between class selectors. If you've set `preserveLine` to `0` then the rule will run precedence (override) and ensure new line separation is applied (top down) for each class selector expressed.\n\n#### Note\n\nThis rule is typically a matter of preference and widely adopted structural pattern when it comes to CSS class selectors. If you're infusing CSS together with Liquid then it is **highly recommended** that you enable this rule.\n\n#\n\n---\n\n#### \u{1F44D} &nbsp;&nbsp; Enabled\n\n_This is an example when this rule is enabled (ie: `true`). Notice how **before** formatting each class selector immediately proceeds the last closing brace `}` character, whereas **after** formatting the selector class names have a new line inserted. When this rule is disabled, \xC6sthetic will not assert a break as per the **disabled** example below._\n\n```css\n\n/* Before Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n/* After Formatting */\n\n.class {\n  color: #111;\n}\n\n.class-2 {\n  background: pink;\n}\n\n.class-3 {\n  font-size: 12px;\n}\n\n\n```\n\n---\n\n\n#### \u{1F44E} \u{1F44E} &nbsp;&nbsp; Disabled\n\n_Below is an example when this option is disabled (ie: `false`) which is the default setting. Though the recommendation is to enable this rule, \xC6sthetic does not assume intent and instead assumes new line breaks in accordance with the `preserveLine` value you've set. In the below example there no difference **before** and **after** formatting, the code structure is respected and no new lines are added._\n\n```css\n\n/* Before Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n/* After Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n\n```\n"
        },
        "noLeadZero": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### No Lead Zero\n\nWhether leading 0s in CSS values immediately preceding a decimal should be removed or prevented. The below example show how the rule works when enabled (ie: `true`). Keep in mind that this rule is disabled (ie: `false`) by **default**.\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following `font-size` and `transition` values which are inferring a `0` point decimal numbers. Notice how the values are targeting a size less than 1 and using a leading 0 decimal point to assert this. In the **after** formatting example below, the 0s will be stripped._\n\n```css\n\n.class {\n  font-size: 0.995rem;\n  transition: all 0.5s ease-out;\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, both numeric values of `font-size` and `transition` have removed the leading `0` number from the decimal point, resulting in the following:_\n\n```css\n\n.class {\n  font-size: .995rem;\n  transition: all .5s ease-out;\n}\n\n\n```\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of comments and do not apply indentation.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)"
        },
        "quoteConvert": {
          "default": "none",
          "markdownDescription": "&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `none`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `double`\n\n#### Quote Convert\n\nHow quotation characters within style languages should be handled. Allows for conversion to single quotes or double quotes for code which requires strings expressions.\n\n#\n\n---\n\n#### \u{1F44E} &nbsp;&nbsp; `none`\n\n_Below is an example of how this rule works if set to `none` which is the **default** setting. No conversion of quotations is applied when using `none` as per the **before** and **after** examples_\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url(\"example\"); /* double quotations */\n}\n\n.class-2 {\n  background-image: url('example'); /* single quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url(\"example\"); /* No changes applied */\n}\n\n.class-2 {\n  background-image: url('example'); /* No changes applied* /\n}\n\n\n```\n\n---\n\n#### \u{1F44D} \u{1F44D} &nbsp;&nbsp; `double`\n\n_Below is an example of how this rule works if set to `double` which will go about converting and ensuring all style language quotations and using doubles._\n\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url('example'); /* single quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url(\"example\"); /* double quotation conversion */\n}\n\n\n```\n\n---\n\n#### \u{1F44D} &nbsp;&nbsp; `single`\n\n\n_Below is an example of how this rule works if set to `single` which will go about converting and ensuring all style language quotations and using singles._\n\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url(\"example\"); /* double quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url('example'); /* single quotation conversion */\n}\n\n\n```\n\n",
          "type": "string",
          "enum": [
            "none",
            "double",
            "single"
          ]
        }
      }
    },
    "json": {
      "type": "object",
      "additionalProperties": false,
      "markdownDescription": "Beautification rules for the **JSON** language. Options provided here will also be applied to markup embedded language blocks.",
      "properties": {
        "arrayFormat": {
          "type": "string",
          "default": "default",
          "markdownDescription": '&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `default`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `indent`\n\n#### Array Format\n\nThe `arrayFormat` rule controls how arrays on objects are formatted. This rule will determine if all array indexes should be indented, never indented, or left to the default.\n\n#\n\n---\n\n\n#### \u{1F44E} &nbsp;&nbsp; `default`\n\n_Setting the rule to `default` will leave array indexes intact and format according to the provided input style._\n\n```json\n\n{\n  "array": [ 1, 2,\n    3,\n    4,\n    5 ]\n}\n\n\n```\n\n---\n\n#### \u{1F44D} \u{1F44D} &nbsp;&nbsp; `indent`\n\n_Setting the rule to use `indent` is the recommended beautification option. This will ensure array indexes always appear on their own line._\n\n```json\n\n{\n  "array": [\n    1,\n    2,\n    3,\n    4,\n    5\n  ]\n}\n\n\n```\n\n---\n\n#### \u{1F44E} &nbsp;&nbsp; `inline`\n\n_Setting the rule to use `inline` will output all indexes on the same line._\n\n```json\n\n{\n  "array": [ 1, 2, 3, 4, 5 ]\n}\n\n\n```\n',
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "braceAllman": {
          "type": "boolean",
          "default": false,
          "markdownDescription": '&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `true`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Brace Allman\n\nThe `braceAllman` rule puts JSON braces onto new lines, producing an [Allman Style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) output.\n\n\n#\n\n---\n\n\n#### \u{1F44D} &nbsp;&nbsp; Enabled\n\n_Below is an example of the formatting style applied when this rule is enabled (ie: `true`) which is the **default** setting. Notice how all braces and placed onto new lines._\n\n```json\n\n[\n  {\n    "prop": "value"\n  },\n  {\n    "prop": "value"\n  },\n  {\n    "prop": "value"\n  }\n]\n\n\n```\n\n---\n\n\n#### \u{1F44E} &nbsp;&nbsp; Disabled\n\n_Below is an example of the formatting style applied this rule when it is disabled (ie: `false`). Notice how JSON object braces as inlined. It is typically best to keep this rule enabled when working with JSON for readability purposes._\n\n```json\n\n[\n  { "prop": "value" },\n  { "prop": "value" },\n  { "prop": "value" }\n]\n\n\n```\n\n'
        },
        "bracePadding": {
          "type": "boolean",
          "default": false,
          "markdownDescription": '&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Brace Padding\n\nApplies padding between braces. This rule will have no effect when `braceAllman` is enabled (ie: `true`). When enabled, the rule will instead single whitespace characters at the start and end point of brace delimiters.\n\n#\n\n---\n\n\n#### \u{1F44E} &nbsp;&nbsp; Disabled\n\n```json\n\n[\n  {"prop": "value"},\n  {"prop": "value"},\n  {"prop": "value"}\n]\n\n\n```\n\n---\n\n#### \u{1F44D} &nbsp;&nbsp; Enabled\n\n```json\n\n[\n  { "prop": "value" },\n  { "prop": "value" },\n  { "prop": "value" }\n]\n\n\n```\n'
        },
        "objectIndent": {
          "type": "string",
          "default": "default",
          "markdownDescription": '&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `default`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `indent`\n\n#### Object Indent\n\nThe `objectSort` rule will control how object keys should be handled. You can apply indented, never indented, or left to the default. Typically, you will want to leave this option to the default to prevent unreadable objects.\n\n#\n\n---\n\n\n#### \u{1F44D} &nbsp;&nbsp; `indent`\n\n```json\n\n{\n  "foo": {\n    "bar": {\n      "bax": true\n    }\n  }\n}\n\n\n```\n\n---\n\n#### \u{1F44E}  &nbsp;&nbsp; `default`\n\n```json\n\n{\n  "foo": {\n    "bar": { "bax": true }\n  }\n}\n\n\n```\n\n---\n\n#### \u{1F44E}  &nbsp;&nbsp; `inline`\n\n```json\n\n{\n  "foo": { "bar": { "bax": true } }\n}\n\n\n```\n',
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "objectSort": {
          "type": "boolean",
          "default": false,
          "markdownDescription": '&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### Object Sort\n\nThe `objectSort` rule will alphanumerically sort object properties. This rule is typically a matter of preference and it\'s maybe a good idea to skip sorting object property keys.\n\n#\n\n---\n\n\n#### Before Formatting\n\n*Take the following code example, where object properties (keys) and sorted in a non specific manner. The order of each property will change **after** formatting has been applied, sorting object properties in an alphanumerically (A-Z ~ 0-9) manner.*\n\n```json\n\n{\n  "e": "5",\n  "b": "2",\n  "d": "4",\n  "a": "1",\n  "f": "6",\n  "c": "3"\n}\n\n\n```\n\n#### After Formatting\n\n*Using the above code example, notice how all properties on the JSON object have been sorted alphanumerically (A-Z).*\n\n```json\n\n{\n  "a": "1",\n  "b": "2",\n  "c": "3",\n  "d": "4",\n  "e": "5",\n  "f": "6"\n}\n\n\n```\n'
        }
      }
    }
  }
};

// src/monaco/sample.ts
var SAMPLE = `
{% liquid

  assign sample = false

  if page.url == '/'
    assign is_open = 'false'
    assign hidden = 'false'
    assign active = ''
  else
    assign is_open = 'true'
    assign hidden = 'true'
    assign active = 'drawer-active'
  endif

  assign in_rules = false

  if page.url contains '/rules'
    unless page.url contains '/usage'
      assign in_rules = true
    endunless
  endif
%}

{% # comment %}

{% comment %}

  Hello

{% endcomment%}

{{
  object.prop['value'][0].prop
  | filter: 100
  | filter: 'string'
  | filter: true
  | filter: t: 'foo'
}}


<header class="container-fluid navbar bb">
<div id="navbar" class="row ai-center bg-white w-100 pr-0">
  <a
    href="/"
    class="col-auto italic fc-white fs-lg pl-4 pr-0"
    style="font-weight: 800;">
    \xC6STHETIC
  </a>
  <small class="col-auto pl-0">
    <strong class="col-auto fs-sm mr-5">
      0.1.0
    </strong>
  </small>

  {% #  %}

  {% render 'snippet'
    , param: 'string'
    , boolean: false
    , number: 100 %}

  {% style %}
    .class {
      font-size: 100px; /* comment */
    }
  {% endstyle %}

  {% schema %}
    {
      "foo": "bar"
    }
  {% endschema %}

  {% for link in link.title %}
    <a
      href="{{ link.url }}"
      title="{{ link.title }}"
      class="col-auto fw-bolder {% unless forloop.index == active %}off{% endunless %}">
      {{ link.title | filter: 'foo' }}
    </a>
  {% endfor %}

  <a href="https://github.com/panoply/esthetic" class="col-auto ml-auto pr-0">
    {{ object.prop['value'][0].prop | filter: 100 | filter: 'string' | filter: true | filter: t: 'foo' }}
  </a>
</div>
</header>
`;

// src/monaco.ts
var monaco;
function getMonacoModule(path) {
  return __async(this, null, function* () {
    loadExternalCSS(path);
    monaco = yield import(urlJoin(path, "monaco/monaco.js"));
    monaco.editor.defineTheme("potion", PotionTheme);
    monaco.editor.setTheme("potion");
    monaco.languages.setMonarchTokensProvider("liquid", liquid2);
    monaco.languages.setLanguageConfiguration("liquid", configuration);
    monaco.languages.html.registerHTMLLanguageService("liquid");
    monaco.languages.register({
      id: "liquid",
      extensions: [".liquid"],
      aliases: ["Liquid", "liquid"],
      mimetypes: ["text/liquid"]
    });
    self.MonacoEnvironment = {
      getWorkerUrl: (_, label) => {
        switch (label) {
          case "json":
            return urlJoin(path, "monaco/workers", "json.js");
          case "css":
          case "scss":
          case "less":
            return urlJoin(path, "monaco/workers", "css.js");
          case "html":
          case "xml":
          case "liquid":
            return urlJoin(path, "monaco/workers", "html.js");
          case "javascript":
          case "typescript":
          case "jsx":
          case "tsx":
            return urlJoin(path, "monaco/workers", "typescript.js");
          default:
            return urlJoin(path, "monaco/workers", "editor.js");
        }
      }
    };
  });
}
function getInputModel(language, input = SAMPLE) {
  return monaco.editor.createModel(input, language);
}
function getRulesModel(language, rules2) {
  let input;
  if (rules2) {
    input = JSON.stringify(rules2, null, 2);
  } else {
    input = JSON.stringify({
      "crlf": false,
      "correct": false,
      "preset": "default",
      "language": language,
      "endNewline": false,
      "indentChar": " ",
      "indentLevel": 0,
      "indentSize": 2,
      "preserveLine": 2,
      "wrap": 0,
      "wrapFraction": 0,
      "liquid": {
        "commentNewline": false,
        "commentIndent": true,
        "delimiterTrims": "preserve",
        "delimiterPlacement": "preserve",
        "forceFilter": 0,
        "forceArgument": 0,
        "ignoreTagList": [],
        "indentAttribute": false,
        "lineBreakSeparator": "before",
        "normalizeSpacing": true,
        "preserveComment": false,
        "preserveInternal": false,
        "dedentTagList": [],
        "quoteConvert": "none"
      },
      "markup": {
        "attributeCasing": "preserve",
        "attributeSort": false,
        "commentNewline": false,
        "commentIndent": true,
        "delimiterTerminus": "inline",
        "forceAttribute": 3,
        "forceIndent": false,
        "ignoreCSS": false,
        "ignoreJS": true,
        "ignoreJSON": false,
        "lineBreakValue": "preserve",
        "preserveComment": false,
        "preserveText": false,
        "preserveAttribute": false,
        "selfCloseSpace": true,
        "selfCloseSVG": true,
        "stripAttributeLines": false,
        "quoteConvert": "none"
      },
      "json": {
        "arrayFormat": "default",
        "braceAllman": false,
        "bracePadding": false,
        "objectIndent": "default",
        "objectSort": false
      },
      "style": {
        "commentIndent": false,
        "commentNewline": false,
        "atRuleSpace": true,
        "classPadding": false,
        "noLeadZero": false,
        "preserveComment": false,
        "sortSelectors": false,
        "sortProperties": false,
        "quoteConvert": "none",
        "correct": false
      },
      "script": {
        "arrayFormat": "default",
        "braceNewline": false,
        "bracePadding": false,
        "braceStyle": "none",
        "braceAllman": false,
        "caseSpace": false,
        "commentIndent": false,
        "commentNewline": false,
        "elseNewline": false,
        "endComma": "never",
        "functionNameSpace": false,
        "functionSpace": false,
        "inlineReturn": true,
        "methodChain": 4,
        "neverFlatten": false,
        "noCaseIndent": false,
        "noSemicolon": false,
        "objectSort": false,
        "objectIndent": "default",
        "preserveComment": false,
        "quoteConvert": "none",
        "styleGuide": "none",
        "ternaryLine": false,
        "variableList": true,
        "vertical": false
      }
    }, null, 2);
  }
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    enableSchemaRequest: true,
    schemas: [
      {
        uri: "http://myserver/foo-schema.json",
        fileMatch: ["*"],
        // associate with our model
        schema
      }
    ]
  });
  return monaco.editor.createModel(input, "json");
}

// src/editor/input.ts
var Input = ({
  attrs
}) => {
  const options = Object.assign({}, attrs.config.monaco);
  options.model = attrs.input.model;
  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: attrs.input.model.getLanguageId()
    },
    {
      provideDocumentRangeFormattingEdits: (model2) => {
        const text = esthetic.format(model2.getValue());
        return [
          {
            text,
            range: model2.getFullModelRange()
          }
        ];
      }
    }
  );
  attrs.input.model.onDidChangeContent(() => {
    if (attrs.preview.state === 3 /* Opened */) {
      formatCode(attrs);
      if (attrs.hash !== null)
        encode(attrs);
    } else if (attrs.hash !== null) {
      encode(attrs);
    }
  });
  return {
    oncreate: ({
      dom
    }) => {
      attrs.input.editor = monaco.editor.create(dom, options);
      attrs.input.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        attrs.input.editor.trigger(
          "editor",
          "editor.action.formatDocument",
          null
        );
      });
    },
    view: () => m("div", { style: { height: "100%" } })
  };
};

// src/editor/preview.ts
var Preview = {
  oncreate: ({
    dom,
    attrs
  }) => {
    const options = Object.assign({}, attrs.config.monaco);
    options.model = attrs.preview.model;
    options.lineNumbers = "off";
    options.readOnly = true;
    options.renderLineHighlight = "none";
    options.cursorStyle = "line-thin";
    attrs.preview.editor = monaco.editor.create(dom, options);
    attrs.input.editor.onDidScrollChange(({
      scrollLeft,
      scrollTop
    }) => {
      attrs.preview.editor.setScrollPosition({
        scrollLeft,
        scrollTop
      }, 0);
    });
  },
  onremove: ({
    attrs,
    dom
  }) => {
    attrs.preview.width = dom.clientWidth;
    attrs.preview.editor.dispose();
  },
  view: () => m("div", {
    style: {
      height: "100%"
    }
  })
};

// src/editor/esthetic.ts
function EstheticStatic(dom, attrs) {
  const options = Object.assign({}, attrs.config.monaco);
  options.model = attrs.esthetic.model;
  options.automaticLayout = false;
  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: "json"
    },
    {
      provideDocumentRangeFormattingEdits: (model2) => {
        const text = esthetic.json(model2.getValue());
        return [
          {
            text,
            range: model2.getFullModelRange()
          }
        ];
      }
    }
  );
  return {
    mount: () => {
      attrs.esthetic.editor = monaco.editor.create(dom, options);
      attrs.esthetic.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        esthetic.rules(JSON.parse(attrs.esthetic.model.getValue()));
        attrs.esthetic.editor.trigger(
          "editor",
          "editor.action.formatDocument",
          null
        );
        attrs.input.editor.trigger(
          "editor",
          "editor.action.formatDocument",
          null
        );
      });
    },
    unmount: () => {
      attrs.esthetic.editor.dispose();
    }
  };
}
var Esthetic = ({
  attrs
}) => {
  const options = Object.assign({}, attrs.config.monaco);
  options.model = attrs.esthetic.model;
  options.automaticLayout = false;
  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: attrs.esthetic.model.getLanguageId()
    },
    {
      provideDocumentRangeFormattingEdits: (model2) => {
        const text = esthetic.json(model2.getValue());
        return [
          {
            text,
            range: model2.getFullModelRange()
          }
        ];
      }
    }
  );
  const addCommand = () => {
    attrs.esthetic.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      attrs.esthetic.rules = JSON.parse(attrs.esthetic.model.getValue());
      esthetic.rules(attrs.esthetic.rules);
      encode(attrs);
      attrs.esthetic.editor.trigger(
        "editor",
        "editor.action.formatDocument",
        null
      );
      attrs.input.editor.trigger(
        "editor",
        "editor.action.formatDocument",
        null
      );
    });
  };
  return {
    oncreate: ({
      dom
    }) => {
      attrs.esthetic.editor = monaco.editor.create(dom, options);
      attrs.esthetic.editor.onDidFocusEditorText(() => addCommand());
    },
    view: () => m("div", { style: { height: "100%" } })
  };
};

// src/components/language.ts
var Language = {
  view: ({
    attrs
  }) => attrs.language.state !== 1 /* Hidden */ ? [
    m(".language-label", "Select Language"),
    [
      ["text", "Plain Text", "#809abd"],
      ["liquid", "Liquid", "#004999"],
      ["html", "HTML", "#f16729"],
      ["xml", "XML", "#f16729"],
      ["css", "CSS", "#1472b6"],
      ["scss", "SCSS", "#cd6699"],
      ["json", "JSON", "#f5de1a"],
      ["javascript", "JavaScript", "#f5de1a"],
      ["typescript", "TypeScript", "#007acc"],
      ["jsx", "JSX", "#00d8fe"],
      ["tsx", "TSX", "#007acc"],
      ["yaml", "YAML", "#fbc02d"]
    ].map(
      ([
        language,
        langname,
        hex
      ]) => m(
        'button.btn-language[type="button"]',
        {
          class: attrs.language.current === language ? "current" : "",
          style: `--moloko-accent: ${hex}`,
          onclick: () => {
            const value = attrs.input.model.getValue();
            attrs.input.model.dispose();
            attrs.input.model = monaco.editor.createModel(value, language);
            attrs.input.editor.setModel(attrs.input.model);
          }
        },
        [
          m("span", langname),
          file(language)
        ]
      )
    )
  ] : null
};

// src/editor/table.ts
var isEven = (n) => n % 2 === 0 ? "odd" : "even";
var active = /* @__PURE__ */ new Set();
var ParseTable = {
  view: ({ attrs }) => {
    console.log(esthetic);
    return m(
      "table.parse-table",
      {
        style: {
          width: `${attrs.preview.width}px`
        }
      },
      m(
        "thead",
        m("tr", [
          m("th.index", "Index"),
          m("th.number", "Begin"),
          m("th.number", "Ender"),
          m("th.number", "Lines"),
          m("th.lexer", "Lexer"),
          m("th.stack", "Stack"),
          m("th.type", "Type"),
          m("th.token", "Token")
        ])
      ),
      m(
        "tbody",
        esthetic.table.begin.map((_, i) => [
          m("tr", {
            id: `${i}`,
            class: `${esthetic.table.lexer[i]} ${isEven(i)} ${active.has(i) ? "active" : ""}`,
            onclick: () => {
              active.clear();
              const start = esthetic.table.begin[i];
              const ender = esthetic.table.ender[i];
              for (let index = start; index <= ender; index++)
                active.add(index);
              const begin = start === -1 ? i > 0 ? esthetic.lines[i] : 1 : esthetic.lines[start];
              const ends = ender === i ? esthetic.lines[ender] : i === -1 ? i > 0 ? esthetic.lines[i + 1] : 2 : esthetic.lines[ender];
              attrs.input.editor.revealLineNearTop(begin, 0);
              attrs.input.editor.setSelection({
                startLineNumber: begin,
                startColumn: 0,
                endLineNumber: ends,
                endColumn: 0
              });
            }
          }, [
            m("td.index", `${i}`),
            m("td.number", `${esthetic.table.begin[i]}`),
            m("td.number", `${esthetic.table.ender[i]}`),
            m("td.index", `${esthetic.table.lines[i]}`),
            m("td.lexer", `${esthetic.table.lexer[i]}`),
            m("td.stack", `${esthetic.table.stack[i]}`),
            m("td.type", `${esthetic.table.types[i]}`),
            m("td.token", m("pre", m("code", esthetic.table.token[i])))
          ])
        ])
      )
    );
  }
};

// src/moloko.ts
function setMolokoOptions(attrs) {
  esthetic.settings({ logColors: false });
  if (attrs.config.hash) {
    const { hash: hash2 } = window.location;
    if (hash2.charCodeAt(1) === 77 && hash2.charCodeAt(2) === 61)
      attrs.hash = hash2.slice(3);
  } else {
    attrs.hash = null;
  }
  if (attrs.hash) {
    const store = decode(attrs.hash);
    attrs.language = store.language;
    attrs.input.model = getInputModel(attrs.language.current, store.input.value);
    attrs.preview.model = getInputModel(attrs.language.current, store.input.value);
    attrs.input.width = store.input.width;
    attrs.preview.state = store.preview.state;
    attrs.preview.mode = store.preview.mode;
    attrs.preview.width = store.preview.width;
    attrs.esthetic.state = store.esthetic.state;
    attrs.esthetic.width = store.esthetic.width;
    attrs.esthetic.model = getRulesModel(attrs.language.current, store.esthetic.rules);
    esthetic.rules(store.esthetic.rules);
  } else {
    esthetic.rules({ language: attrs.language.current });
    if (attrs.config.preview.enable)
      attrs.preview.model = getInputModel(attrs.language.current);
    attrs.input.model = getInputModel(attrs.language.current);
    attrs.esthetic.model = getRulesModel(attrs.language.current, attrs.esthetic.rules);
  }
}
function loader() {
  return __async(this, arguments, function* (options = {}) {
    const attrs = model(options);
    yield load(attrs);
    try {
      yield getMonacoModule(attrs.path);
    } catch (e2) {
      throw new Error("Failed to load Monaco", e2);
    }
    setMolokoOptions(attrs);
    return {
      get attrs() {
        return attrs;
      },
      get esthetic() {
        return EstheticStatic;
      }
    };
  });
}
function render(_0) {
  return __async(this, arguments, function* (element, options = {}) {
    const { attrs } = yield loader(options);
    return {
      get attrs() {
        return attrs;
      },
      Esthetic,
      Preview
    };
  });
}
function hash() {
  return window.location.hash;
}
function mount(_0) {
  return __async(this, arguments, function* (element, options = {}) {
    const { attrs } = yield loader(options);
    const toggles = (prop) => {
      return attrs[prop].state === 3 /* Opened */ ? ".open" : attrs[prop].state === 2 /* Toggle */ ? ".close" : "";
    };
    m.mount(element, {
      view: () => m(
        "section.moloko-editor",
        { style: { top: `${attrs.config.offset}px` } },
        [
          attrs.config.sidebar.enable ? m(
            "aside.moloko-sidebar",
            m(Sidebar, attrs)
          ) : null,
          m(
            "aside.moloko-language" + toggles("language"),
            m(Language, attrs)
          ),
          m(
            "section.moloko-esthetic" + toggles("esthetic"),
            m(Esthetic, attrs)
          ),
          m(
            "section.moloko-input",
            m(Input, attrs)
          ),
          attrs.config.preview.enable && attrs.preview.state === 3 /* Opened */ ? m(
            "section.moloko-preview",
            attrs.preview.mode === 1 /* Formatted */ ? m(Preview, attrs) : m(ParseTable, attrs)
          ) : null
        ]
      )
    });
    return attrs;
  });
}

export { moloko_exports as default };
