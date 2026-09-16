import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  ignores: [
    '**/.nuxt/**',
    '**/.output/**',
    '**/node_modules/**',
    'reference/**',
    'compare/**',
  ],
})
