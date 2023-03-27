/**
 * Sample (Development)
 *
 * Sample input string used in development
 */
export const SAMPLE = `
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
    ÆSTHETIC
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
