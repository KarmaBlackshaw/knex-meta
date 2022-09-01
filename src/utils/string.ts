export function isQuoteWrapped (foo: string): boolean {
  return (/^"(.+)"$/gi).test(foo)
}

export function trimQuotes (str: string): string {
  return str.replace(/^"|"$/gi, '')
}
