// src/utils/string.ts
function isQuoteWrapped(foo) {
  return /^"(.+)"$/gi.test(foo);
}
function trimQuotes(str) {
  return str.replace(/^"|"$/gi, "");
}

export {
  isQuoteWrapped,
  trimQuotes
};
