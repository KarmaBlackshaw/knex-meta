export const deprecate = (
  {
    oldMethod,
    newMethod
  }: {
      oldMethod: string,
      newMethod: string
  }
) => {
  console.warn(`Deprecation warning: [${oldMethod}] is deprecated and will be removed soon. Please use the new [${newMethod}] feature instead`)
}
