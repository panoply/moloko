import type { IAttrs, Hash } from 'types/model';
import lz from 'lz-string';

/**
 * Encode
 *
 * Compress the editors current session
 */
export function encode (attrs: IAttrs) {

  attrs.hash = 'M=' + lz.compressToEncodedURIComponent(JSON.stringify(<Hash>{
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
    rules: {
      esthetic: attrs.rules.esthetic,
      state: attrs.rules.state,
      width: attrs.rules.width
    }
  }));

  window.location.hash = attrs.hash;

  return attrs.hash;

}

/**
 * Decode
 *
 * Decompress the encoded JSON string URI
 */
export function decode (hash: string): Hash {

  return JSON.parse(lz.decompressFromEncodedURIComponent(hash));

}
