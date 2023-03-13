export default {
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  format: ['cjs'],
  dts: true,
  splitting: true,
  clean: true,
  platform: 'node'
}
