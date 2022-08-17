export default {
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  splitting: true,
  clean: true,
  platform: 'node'
}
