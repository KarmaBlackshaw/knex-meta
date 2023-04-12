"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utils/string.ts
function isQuoteWrapped(foo) {
  return /^"(.+)"$/gi.test(foo);
}
function trimQuotes(str) {
  return str.replace(/^"|"$/gi, "");
}




exports.isQuoteWrapped = isQuoteWrapped; exports.trimQuotes = trimQuotes;
