// src/samples/scss.ts
var scss_default = `

@each $color, $value in $button-colors {
  .xxx-#{$color} {
    @include button-outline-variant($value);
  }
}

.selector {

  pre.papyrus {
    position: relative !important;

    %replicate {
      line-height: $papyrus-line-height;
      white-space: pre;
    }

    .editor > .sample {

      &.class {
        font-size: 15px;
        @extend %replicate;
      }

    }
  }
}

`;

export { scss_default as default };
