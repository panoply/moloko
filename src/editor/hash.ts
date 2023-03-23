import type { IAttrs, Hash } from 'types';
import { attrs } from 'attrs';
import lz from 'lz-string';

/**
 * Encode
 *
 * Compress the editors current session
 */
export function encode ({
  detectLanguage,
  languagesOpen,
  model,
  previewMode,
  previewOpen,
  rules,
  rulesOpen
}: IAttrs) {

  attrs.hash = 'M=' + lz.compressToEncodedURIComponent(JSON.stringify(<Hash>{
    language: model.input.getLanguageId(),
    model: model.input.getValue(),
    languagesOpen,
    detectLanguage,
    previewMode,
    previewOpen,
    rules,
    rulesOpen
  }));

  window.location.hash = attrs.hash;

}

/**
 * Decode
 *
 * Decompress the encoded JSON string URI
 */
export function decode (hash: string): Hash {

  return JSON.parse(lz.decompressFromEncodedURIComponent(hash));

}
