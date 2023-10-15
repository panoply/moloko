/* eslint-disable */
export const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "properties": {
    "wrap": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Character width limit before applying word wrap. A `0` value disables this option.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/wrap/)\n"
    },
    "wrapFraction": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Wrap fraction is used on internal structures as a secondary point of control. By default, it will use a 75% metric according to `wrap` defined values.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/wrapFraction/)\n"
    },
    "correct": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "Automatically correct some sloppiness in Liquid code. The rule allows Æsthetic to reason with intended structures. The option acts as a very mild form of linting, wherein invalid or language specification preferred code will attempt to be corrected in the least obtrusive manner possible with respect to the language specification standards.\n\nEnabling this rule is not going to produce miracles and for the most part will have little effect overall but can help in some situations.\n\n> **NOTE**\n>\n> This rule is still experimental and will be both improved and refined in future versions.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/correct/)"
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
      "markdownDescription": "The name of the language provided. This option can be omitted when using Æsthetic within text editors as languages are automatically assigned based on file.\n\nÆsthetic supports parse, format and language detection capabilities for the following languages:\n\n- [Liquid](https://shopify.github.io/liquid/)\n- [HTML](https://en.wikipedia.org/wiki/HTML)\n- [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)\n- [CSS](https://en.wikipedia.org/wiki/CSS)\n- [SCSS](https://sass-lang.com)\n- [JSON](https://en.wikipedia.org/wiki/JSON)\n- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)\n- [TypeScript](https://www.typescriptlang.org/)\n- [JSX](https://facebook.github.io/jsx/)\n- [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html)\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/language/)\n\n"
    },
    "indentSize": {
      "type": "number",
      "default": 2,
      "markdownDescription": "The number of `indentChar` values to comprise a single indentation. By default this is set to `2` meaning a single indentation will be 2 whitespace characters.\n\n**How to use Tabs?**\n\nIf you're heathen who prefers Tabs. You will need to set the `indentChar` to `\\t` and infer the size limit here.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/indentSize/)\n"
    },
    "indentChar": {
      "type": "string",
      "default": " ",
      "markdownDescription": "The string characters to comprise a single indentation. Any string combination is accepted. Generally speaking, you should leave this alone unless you know what you are doing.\n\nThe `indentSize` rule will use this character. For example, if you were to set `indentSize` to `4` then this character will be repeated 4 times, ie: `    ` - by default the `indentSize` is set to `2`.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/indentChar/)\n"
    },
    "indentLevel": {
      "type": "number",
      "default": 0,
      "markdownDescription": "Controls how much indentation padding should be applied to beautification. This option is internally used for code that requires switching between libraries.\n\nAvoid using this rule, it is highly unlikely you'll require it within your project.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/indentLevel/)\n"
    },
    "preserveLine": {
      "type": "number",
      "default": 3,
      "markdownDescription": "The maximum number of consecutive empty lines to retain (ie: preserve). By default, `3` newlines are preserved.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/preserveLine/)\n\n"
    },
    "endNewline": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "Whether or not files should end with an empty newline. When this rule is `undefined` or omitted then Æsthetic will look for an `.editorconfig` file and use definitions inferred within.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/endNewline/)\n"
    },
    "crlf": {
      "type": "boolean",
      "default": false,
      "markdownDescription": "If line termination should be Windows (CRLF) format. By default, Unix (LF) format is used. Setting this value to `true` will use CRLF.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/crlf)\n"
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
      "markdownDescription": "A preset ruleset style guide to use. This will assign rules according to a set of defaults to produce a certain beautification result. If this rule is `undefined` it will default to using `default` which is least obtrusive formatting style.\n\n**Options**\n\n**`default`** (required)\n\n> This is the **default** and the most unobtrusive. Formatting will use a preservationist based technique with this preset mode.\n\n**`recommended`**\n\n> This style guide is typically suited for most cases, it will apply a base set of rules aligned with the Æsthetic approach.\n\n**`warrington`**\n\n> This style guide preset is best suited for developers and specifically teams working with Shopify themes. The preset was curated by the talented [David Warrington](https://ellodave.dev/).\n\n**`strict`**\n\n> This is a strict ruleset curated by the projects author [Panoply (sissel)](https://github.com/panoply).\n\n**`shopify`** 🤡\n\n> Replicates the Prettier style of formatting. If you've used the Shopify Liquid Prettier Plugin and enjoy that beautification style using this preset will produce the same results.\n\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/preset/)\n"
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
          "markdownDescription": "### Delimiter Trims\n\nHow delimiter whitespace trim dashes (`{%-`, `-%}`, `{{-` and `-}}`) should handled in Liquid tags and output object tokens. You should _maybe_ avoid setting this to `force` in order to avoid stripping whitespace in cases where text content contains Liquid.\n\n> **NOTE**\n>\n> This rule will not touch Liquid tokens encapsulated within strings, ie: `\"{{ foo }}\"` or `'{{ foo }}'` are left intact.\n\n\n**Options**\n\nThis is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified.\n\n- preserve\n- tags\n- outputs\n- never\n- always\n- multiline\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/delimiterTrims/)\n\n"
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
          "markdownDescription": "Controls the placement of opening and closing Liquid tag delimiters (`{%`, `{{`, `}}` and `%}`). This rule provides 3 different formatting options and will ensure that delimiters are beautified in concordance. When the rule is `undefined` it will default to using `none`.\n\n**Options**\n\nThis is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified. The **recommended** option to use is `consistent` or `force-multiline`.\n\n- preserve\n- default\n- inline\n- consistent\n- force\n- force-multiline\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/delimiterPlacement/)\n\n"
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Applies single indentation to containing content of Liquid comments. Liquid line type comments are currently not supported by this rule. Only block type Liquid tokens will be handled.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/commentIndent/)\n\n"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/commentNewline/)\n"
        },
        "forceArgument": {
          "type": "number",
          "default": 0,
          "markdownDescription": "Forces Liquid tag and filter argument expressions onto newlines according to the number of arguments present on the token. By default, this rule uses a value of `0` which will result in arguments being forced when the tag or output token containing them spans ¾ (or 75%) of defined global [`wrap`](https://æsthetic.dev/rules/global/wrap) limit.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/forceArgument/)\n\n\n"
        },
        "forceFilter": {
          "type": "number",
          "default": 0,
          "markdownDescription": "Forces Liquid filter `|` expressions onto newlines when the number of filters contained on a tag exceeds the limit defined. By default, this rule uses a value of `0` which will result in Liquid filters being forced when the tag or output token containing them spans ¾ (or 75%) of defined global [`wrap`](https://æsthetic.dev/rules/global/wrap) limit.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/forceFilter/)\n"
        },
        "dedentTagList": {
          "type": "array",
          "default": [],
          "markdownDescription": "A list of Liquid tags that should exclude standard indentation. Only tags which contain a start and end types are valid.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/dedentTagList/)\n",
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
          "markdownDescription": "A list of Liquid tags that should excluded from formatting. Only tags which contain a start and end types are valid.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/ignoreTagList/)\n",
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
          "markdownDescription": "Whether or not to apply indentation of HTML attributes within Liquid identified tag blocks contained in HTML Tags. This rule emulates the `liquid-prettier-plugin` structures with more refined controlling. This requires the `markup` rule `forceAttributes` be set to either `true` or have limit value (e.g: `2`) defined.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/indentAttribute/)\n"
        },
        "lineBreakSeparator": {
          "default": "after",
          "type": "string",
          "markdownDescription": "Controls the placement of Liquid separator type characters in new line structures. In situations where you write a multiline tag expression this rule can augment the order of leading operator characters such as the parameter comma `,` separator.\n\nThis rule will not break tag content on to new lines for you, it instead together with the inferred structure you've expressed. This means that you will need to manually new line the arguments.\n\n### Options\n\nThis is a Liquid specific formatting rule which will default to `after` when no option has been specified.\n\n- before\n- after\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/lineBreakSeparator/)\n",
          "enum": [
            "before",
            "after"
          ]
        },
        "normalizeSpacing": {
          "default": true,
          "type": "boolean",
          "markdownDescription": "Whether or not to normalize and correct the inner spacing of Liquid tokens. This rule will equally distribute whitespace characters contained within Liquid tags and output tokens. The rule will also inject spacing in accordance with common Liquid code structures.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/normalizeSpacing)\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of Liquid block comments.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/preserveComment/)\n"
        },
        "preserveInternal": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Prevent the internals structures of Liquid tokens from being formatted. When enabled, Æsthetic will preserve the internal formations of output and tags.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/preserveInternal/)\n"
        },
        "quoteConvert": {
          "default": "none",
          "type": "string",
          "markdownDescription": "How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/liquid/quoteConvert/)\n",
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
          "markdownDescription": "How markup attribute names and value casing should be processed. This defaults to `preserve` which will leave casing intact and _typically_ the best option to use.\n\n**Options**\n\nThis rule defaults to using `preserve` which will leave attribute names and values intact.\n\n- preserve\n- lowercase\n- lowercase-name\n- lowercase-value\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/attributeCasing/)\n",
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
          "markdownDescription": "Provides sorting of HTML and XML Attributes. When enabled (`true`) it will sort attributes in an alpha-numeric order. Sorting is ignored on tags which contain Liquid output and tag type tokens as attributes. The rule also accepts a list of attribute names and when provided will be sorted according to order passed.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/attributeSort/)\n"
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Applies single indentation to containing content of HTML comments.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/commentIndent/)\n\n"
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
          "markdownDescription": "Controls the placement of HTML and XML (i.e: markup) type comment delimiters. This is a markup specific formatting rule that defaults to using preserve and applied to languages using `<!--` and `-->` delimiter tokens.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/commentDelimiters/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/commentNewline/)\n\n"
        },
        "delimiterTerminus": {
          "enum": [
            "inline",
            "force",
            "adapt"
          ],
          "default": "inline",
          "markdownDescription": "Whether or not ending HTML tag delimiters should be forced onto a newline. This will emulate the style of Prettier's `singleAttributePerLine` formatting option, wherein the last `>` delimiter character breaks itself onto a new line. Though this output style was popularized by Prettier, the resulting structures produced are far from elegant (aesthetically).\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/delimiterTerminus/)\n\n"
        },
        "forceIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Will force indentation upon all content and tags without regard for the text nodes. To some degree this rule emulates a result similar to that you'd expect in Prettier. Inline preservation is respected in cases where a Liquid output object token is encapsulated between text nodes. In such scenarios the text content will only force indent the start and end portions.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/forceIndent/)\n"
        },
        "forceAttribute": {
          "type": [
            "boolean",
            "number"
          ],
          "default": false,
          "markdownDescription": "How or if markup attributes should be indented each onto their own line. You can optionally provide an integer value of `1` or more. When an integer value is passed, attributes will be forced only if the number of attributes contained on the tag exceeds the supplied value limit. When you define a `wrap` level then attributes will be automatically forced when limit is exceeded unless you've set this rule to `true` or provided an integer threshold.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/forceAttribute/)\n"
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
          "markdownDescription": "Attribute value handling applied when values span multiple lines.\n\n**Options**\n\n- preserve\n- align\n- indent\n- force-preserve\n- force-align\n- force-indent\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/lineBreakValue/)\n"
        },
        "ignoreJS": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "Whether or not to format regions of code that are identified to be JavaScript. Tags such as `<script>` and `{% javascript %}` can contain JavaScript and by default beautification is applied using the `script` rules. When ignored (ie: `true`) Æsthetic will not apply formatting to these regions.\n\nWhen enabled (ie: `true`) the entire `<script>` region is excluded including indentation levels. If the `<script>` tag is being used to link an external file (eg: `<script src=\"/path/fle.js\"></script>`) and no code is detected between the opening and closing tags then formatting will be applied in accordance with defined rules pertaining to markup.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/ignoreJS)\n"
        },
        "ignoreJSON": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "Whether or not to format regions of code that are identified to be JSON. Such tags are typically identified using attribute annotations like `<script type=\"application/json\">`. By default, beautification is applied using the `json` rules. When ignored (ie: `true`) Æsthetic will not apply formatting to these regions.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/ignoreJSON/)\n"
        },
        "ignoreCSS": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "Whether or not to format regions of code that are identified to be CSS. Tags such as `<style>` and `{% style %}` can contain CSS and by default beautification is applied using the `style` rules. When ignored (ie: `true`) Æsthetic will not apply formatting to these regions.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/ignoreCSS/)\n"
        },
        "preserveText": {
          "type": "boolean",
          "default": true,
          "markdownDescription": "If text in the provided markup code should be preserved exactly as provided. This option eliminates beautification and wrapping of text content.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/preserveText/)\n"
        },
        "selfCloseSpace": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether markup self-closing (void) tags should apply a single space to ending portion of the delimiter which  results in the tag output to produce `' />'` instead of `'/>'`.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/selfCloseSpace/)\n"
        },
        "selfCloseSVG": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not SVG type tags should be converted to self closing void  types. When enabled, tags which contain a closing tag will instead become void type.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/selfCloseSVG/)\n"
        },
        "stripAttributeLines": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not newlines contained within tag attributes or preserved. This rule will be used along side the `forceAttribute` rule and when enabled (`true`) will strip newlines contained in HTML attributes. When disabled (`false`) then newlines will be preserved according to the **global** `preserveLine` limit defined.\n\nThis rule wil only take effect when `forceAttribute` is enabled (ie: `true`) or the `forceAttribute` limit has been exceeded as per the provided value. In addition to `forceAttribute`, the global `preserveLine` rule value is used to determine the amount of lines allowed.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/stripAttributeLines/)\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of HTML comments.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/preserveComment/)\n"
        },
        "preserveAttribute": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not markup tags should have their insides preserved, ie: attributes. This option is only available to markup and does not support child tokens that require a different lexer. When enabled, this rule will run precedence and override all attribute related rules.\n\nIf you're working with a JavaScript framework that implements a data-attribute development based architecture (like Alpine or Angular) which requires a build-step then this rule _might_ help prevent Æsthetic augmenting code or failing when it encounters otherwise invalid structures not supported or recognized by official markup based language specifications.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/preserveAttribute/)"
        },
        "quoteConvert": {
          "default": "none",
          "type": "string",
          "markdownDescription": "How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/markup/quoteConvert/)\n",
          "enum": [
            "none",
            "double",
            "single"
          ]
        },
        "delimiterTrims": {
          "deprecationMessage": "DEPRECATED\n\nYou can no longer define Liquid beautification rules within \"markup\". Move this rule to the new \"liquid\" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  \"liquid\": {\n    \"delimiterTrims\": \"preserve\",\n    \"lineBreakSeparator\": \"default\",\n    \"normalizeSpacing\": true,\n    \"valueForce\": \"intent\"\n  },\n  \"markup: {}\n}\n"
        },
        "lineBreakSeparator": {
          "deprecationMessage": "DEPRECATED\n\nYou can no longer define Liquid beautification rules within \"markup\". Move this rule to the new \"liquid\" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  \"liquid\": {\n    \"delimiterTrims\": \"preserve\",\n    \"lineBreakSeparator\": \"default\",\n    \"normalizeSpacing\": true,\n    \"valueForce\": \"intent\"\n  },\n  \"markup: {}\n}\n"
        },
        "normalizeSpacing": {
          "deprecationMessage": "DEPRECATED\n\nYou can no longer define Liquid beautification rules within \"markup\". Move this rule to the new \"liquid\" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  \"liquid\": {\n    \"delimiterTrims\": \"preserve\",\n    \"lineBreakSeparator\": \"default\",\n    \"normalizeSpacing\": true,\n    \"valueForce\": \"intent\"\n  },\n  \"markup: {}\n}\n"
        },
        "valueForce": {
          "deprecationMessage": "DEPRECATED\n\nYou can no longer define Liquid beautification rules within \"markup\". Move this rule to the new \"liquid\" specific property.\n\n\nNEW SETTINGS AS OF v4^\n\n{\n  \"liquid\": {\n    \"delimiterTrims\": \"preserve\",\n    \"lineBreakSeparator\": \"default\",\n    \"normalizeSpacing\": true,\n    \"valueForce\": \"intent\"\n  },\n  \"markup: {}\n}\n"
        }
      }
    },
    "script": {
      "type": "object",
      "markdownDescription": "**!! USE WITH CAUTION !!**\n\n_Æsthetic script language formatting is not yet stable, use with caution_\n\n---\n\nBeautification rules for the following _script_ languages:\n\n- **JavaScript**\n- **TypeScript**\n\n Options provided here will also be applied to following markup embedded language blocks.",
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
          "markdownDescription": "Whether or not to indent the containing content of comment blocks.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/style/preserveComment/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/style/commentNewline/)\n"
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
          "markdownDescription": "**_ARRAY FORMAT_**\n\n_Determines if all array indexes should be indented, never indented, or left to the default. The `default` option will leave array indexes intact and not apply any formatting._\n\n---\n#### `inline`&nbsp;&nbsp;&nbsp;👎\nEnsure all array indexes appear on a single line\n```json\n\n{\n  \"object\": [1,2,3,4]\n}\n\n```\n---\n#### `indent`&nbsp;&nbsp;&nbsp;👍\nAlways indent each index of an array\n\n```json\n\n{\n  \"object\": [\n    1,\n    2,\n    3,\n    4\n  ]\n}\n\n```",
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
          "markdownDescription": "**_OBJECT SORT_**\n\n_This option will alphabetically sort object properties (keys). This can be an expensive operation when dealing with large objects with over 2k properties._\n\n---\n#### Disabled&nbsp;&nbsp;&nbsp;👍\nWhen disabled, ie: `false` properties will not be sorted.\n```js\n\n{\n  e: \"5\",\n  b: \"2\",\n  d: \"4\",\n  a: \"1\",\n  f: \"6\",\n  c: \"3\"\n}\n\n\n```\n\n---\n\n#### Enabled&nbsp;&nbsp;&nbsp;👎\nWhen set to `true` all properties are alphanumerically sorted\n```js\n\n{\n  a: \"1\",\n  b: \"2\",\n  c: \"3\",\n  d: \"4\",\n  e: \"5\",\n  f: \"6\"\n}\n\n\n```"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of comments and do not apply indentation.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/style/preserveComment/)"
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
          "markdownDescription": "Insert a single whitespace character between `@`prefixed rule types.\n\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/global/wrapFraction/)"
        },
        "commentNewline": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "This will determine whether comments should always start at position `0` of each line or if comments should be indented according to the code."
        },
        "commentIndent": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Whether or not to indent the containing content of comment blocks.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/style/preserveComment/)"
        },
        "correct": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "**Default** `false` 💁🏽‍♀️ &nbsp;&nbsp; Recommended setting is: `false`\n\nAutomatically correct some sloppiness in style languages and allows Æsthetic to reason with intended structures. The option acts as a very mild form of linting, wherein invalid or language specification preferred code will attempt to be corrected in the least obtrusive manner possible with respect to language standards. Enabling this rule is not going to produce miracles and for the most part will have little effect overall but can help in some situations.\n\n\n> This rule is still experimental and will be both improved and refined in future versions.\n\n#\n\n---\n\n#### Applied Corrections\n\nBelow is a list of current applied corrections supported when the rule is enabled, (ie: `true`). The comments in the example below will inform upon corrections that the rule will apply to code where necessary.\n\n```css\n\n/* Semicolon will be added when missing */\n.class {\n  font-weight: 200\n}\n\n\n```\n\n"
        },
        "sortSelectors": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### Sort Selectors\n\n\nThis option will alphabetically sort class selectors. This can be an expensive operation when dealing with large CSS files with over 2k selectors present. Below is an example of this rule when it is enabled (ie: `true`).\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following CSS class selectors which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._\n\n```css\n\n.c-class,\n.b-class,\n.a-class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, class selectors **after** formatting are alphabetically (A-Z) sorted._\n\n```css\n\n.a-class,\n.b-class,\n.c-class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n"
        },
        "sortProperties": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Sort Properties\n\nThis option will alphabetically sort class properties. This can be an expensive operation when dealing with large CSS files with over 5k properties. Below is an example of this rule when it is enabled (ie: `true`) which is the **recommended** setting.\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following CSS class when containing properties which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._\n\n```css\n\n.class {\n  width: 100px;\n  color: blue;\n  font-size: 20px;\n  background: pink\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, all class properties **after** formatting have now been alphabetically (A-Z) sorted._\n\n```css\n\n.class {\n  color: blue;\n  background: pink;\n  font-size: 20px;\n  width: 100px;\n}\n\n\n```\n"
        },
        "classPadding": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Class Padding\n\nThis rules will insert a new line between class selectors. If you've set `preserveLine` to `0` then the rule will run precedence (override) and ensure new line separation is applied (top down) for each class selector expressed.\n\n#### Note\n\nThis rule is typically a matter of preference and widely adopted structural pattern when it comes to CSS class selectors. If you're infusing CSS together with Liquid then it is **highly recommended** that you enable this rule.\n\n#\n\n---\n\n#### 👍 &nbsp;&nbsp; Enabled\n\n_This is an example when this rule is enabled (ie: `true`). Notice how **before** formatting each class selector immediately proceeds the last closing brace `}` character, whereas **after** formatting the selector class names have a new line inserted. When this rule is disabled, Æsthetic will not assert a break as per the **disabled** example below._\n\n```css\n\n/* Before Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n/* After Formatting */\n\n.class {\n  color: #111;\n}\n\n.class-2 {\n  background: pink;\n}\n\n.class-3 {\n  font-size: 12px;\n}\n\n\n```\n\n---\n\n\n#### 👎 👎 &nbsp;&nbsp; Disabled\n\n_Below is an example when this option is disabled (ie: `false`) which is the default setting. Though the recommendation is to enable this rule, Æsthetic does not assume intent and instead assumes new line breaks in accordance with the `preserveLine` value you've set. In the below example there no difference **before** and **after** formatting, the code structure is respected and no new lines are added._\n\n```css\n\n/* Before Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n/* After Formatting */\n\n.class {\n  color: #111;\n}\n.class-2 {\n  background: pink;\n}\n.class-3 {\n  font-size: 12px;\n}\n\n\n```\n"
        },
        "noLeadZero": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### No Lead Zero\n\nWhether leading 0s in CSS values immediately preceding a decimal should be removed or prevented. The below example show how the rule works when enabled (ie: `true`). Keep in mind that this rule is disabled (ie: `false`) by **default**.\n\n#\n\n---\n\n#### Before Formatting\n\n_Take the following `font-size` and `transition` values which are inferring a `0` point decimal numbers. Notice how the values are targeting a size less than 1 and using a leading 0 decimal point to assert this. In the **after** formatting example below, the 0s will be stripped._\n\n```css\n\n.class {\n  font-size: 0.995rem;\n  transition: all 0.5s ease-out;\n}\n\n\n```\n\n#### After Formatting\n\n_Using the above **before** formatting example, both numeric values of `font-size` and `transition` have removed the leading `0` number from the decimal point, resulting in the following:_\n\n```css\n\n.class {\n  font-size: .995rem;\n  transition: all .5s ease-out;\n}\n\n\n```\n"
        },
        "preserveComment": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "Preserve the inner contents of comments and do not apply indentation.\n\n[Æsthetic Documentation](https://æsthetic.dev/rules/style/preserveComment/)"
        },
        "quoteConvert": {
          "default": "none",
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `none`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `double`\n\n#### Quote Convert\n\nHow quotation characters within style languages should be handled. Allows for conversion to single quotes or double quotes for code which requires strings expressions.\n\n#\n\n---\n\n#### 👎 &nbsp;&nbsp; `none`\n\n_Below is an example of how this rule works if set to `none` which is the **default** setting. No conversion of quotations is applied when using `none` as per the **before** and **after** examples_\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url(\"example\"); /* double quotations */\n}\n\n.class-2 {\n  background-image: url('example'); /* single quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url(\"example\"); /* No changes applied */\n}\n\n.class-2 {\n  background-image: url('example'); /* No changes applied* /\n}\n\n\n```\n\n---\n\n#### 👍 👍 &nbsp;&nbsp; `double`\n\n_Below is an example of how this rule works if set to `double` which will go about converting and ensuring all style language quotations and using doubles._\n\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url('example'); /* single quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url(\"example\"); /* double quotation conversion */\n}\n\n\n```\n\n---\n\n#### 👍 &nbsp;&nbsp; `single`\n\n\n_Below is an example of how this rule works if set to `single` which will go about converting and ensuring all style language quotations and using singles._\n\n\n```css\n\n/* Before Formatting*/\n.class-1 {\n  background-image: url(\"example\"); /* double quotations */\n}\n\n/* After Formatting*/\n\n.class-1 {\n  background-image: url('example'); /* single quotation conversion */\n}\n\n\n```\n\n",
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
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `default`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `indent`\n\n#### Array Format\n\nThe `arrayFormat` rule controls how arrays on objects are formatted. This rule will determine if all array indexes should be indented, never indented, or left to the default.\n\n#\n\n---\n\n\n#### 👎 &nbsp;&nbsp; `default`\n\n_Setting the rule to `default` will leave array indexes intact and format according to the provided input style._\n\n```json\n\n{\n  \"array\": [ 1, 2,\n    3,\n    4,\n    5 ]\n}\n\n\n```\n\n---\n\n#### 👍 👍 &nbsp;&nbsp; `indent`\n\n_Setting the rule to use `indent` is the recommended beautification option. This will ensure array indexes always appear on their own line._\n\n```json\n\n{\n  \"array\": [\n    1,\n    2,\n    3,\n    4,\n    5\n  ]\n}\n\n\n```\n\n---\n\n#### 👎 &nbsp;&nbsp; `inline`\n\n_Setting the rule to use `inline` will output all indexes on the same line._\n\n```json\n\n{\n  \"array\": [ 1, 2, 3, 4, 5 ]\n}\n\n\n```\n",
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "braceAllman": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `true`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Brace Allman\n\nThe `braceAllman` rule puts JSON braces onto new lines, producing an [Allman Style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) output.\n\n\n#\n\n---\n\n\n#### 👍 &nbsp;&nbsp; Enabled\n\n_Below is an example of the formatting style applied when this rule is enabled (ie: `true`) which is the **default** setting. Notice how all braces and placed onto new lines._\n\n```json\n\n[\n  {\n    \"prop\": \"value\"\n  },\n  {\n    \"prop\": \"value\"\n  },\n  {\n    \"prop\": \"value\"\n  }\n]\n\n\n```\n\n---\n\n\n#### 👎 &nbsp;&nbsp; Disabled\n\n_Below is an example of the formatting style applied this rule when it is disabled (ie: `false`). Notice how JSON object braces as inlined. It is typically best to keep this rule enabled when working with JSON for readability purposes._\n\n```json\n\n[\n  { \"prop\": \"value\" },\n  { \"prop\": \"value\" },\n  { \"prop\": \"value\" }\n]\n\n\n```\n\n"
        },
        "bracePadding": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `true`\n\n#### Brace Padding\n\nApplies padding between braces. This rule will have no effect when `braceAllman` is enabled (ie: `true`). When enabled, the rule will instead single whitespace characters at the start and end point of brace delimiters.\n\n#\n\n---\n\n\n#### 👎 &nbsp;&nbsp; Disabled\n\n```json\n\n[\n  {\"prop\": \"value\"},\n  {\"prop\": \"value\"},\n  {\"prop\": \"value\"}\n]\n\n\n```\n\n---\n\n#### 👍 &nbsp;&nbsp; Enabled\n\n```json\n\n[\n  { \"prop\": \"value\" },\n  { \"prop\": \"value\" },\n  { \"prop\": \"value\" }\n]\n\n\n```\n"
        },
        "objectIndent": {
          "type": "string",
          "default": "default",
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `default`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `indent`\n\n#### Object Indent\n\nThe `objectSort` rule will control how object keys should be handled. You can apply indented, never indented, or left to the default. Typically, you will want to leave this option to the default to prevent unreadable objects.\n\n#\n\n---\n\n\n#### 👍 &nbsp;&nbsp; `indent`\n\n```json\n\n{\n  \"foo\": {\n    \"bar\": {\n      \"bax\": true\n    }\n  }\n}\n\n\n```\n\n---\n\n#### 👎  &nbsp;&nbsp; `default`\n\n```json\n\n{\n  \"foo\": {\n    \"bar\": { \"bax\": true }\n  }\n}\n\n\n```\n\n---\n\n#### 👎  &nbsp;&nbsp; `inline`\n\n```json\n\n{\n  \"foo\": { \"bar\": { \"bax\": true } }\n}\n\n\n```\n",
          "enum": [
            "default",
            "indent",
            "inline"
          ]
        },
        "objectSort": {
          "type": "boolean",
          "default": false,
          "markdownDescription": "&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`\n\n&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `false`\n\n#### Object Sort\n\nThe `objectSort` rule will alphanumerically sort object properties. This rule is typically a matter of preference and it's maybe a good idea to skip sorting object property keys.\n\n#\n\n---\n\n\n#### Before Formatting\n\n*Take the following code example, where object properties (keys) and sorted in a non specific manner. The order of each property will change **after** formatting has been applied, sorting object properties in an alphanumerically (A-Z ~ 0-9) manner.*\n\n```json\n\n{\n  \"e\": \"5\",\n  \"b\": \"2\",\n  \"d\": \"4\",\n  \"a\": \"1\",\n  \"f\": \"6\",\n  \"c\": \"3\"\n}\n\n\n```\n\n#### After Formatting\n\n*Using the above code example, notice how all properties on the JSON object have been sorted alphanumerically (A-Z).*\n\n```json\n\n{\n  \"a\": \"1\",\n  \"b\": \"2\",\n  \"c\": \"3\",\n  \"d\": \"4\",\n  \"e\": \"5\",\n  \"f\": \"6\"\n}\n\n\n```\n"
        }
      }
    }
  }
}