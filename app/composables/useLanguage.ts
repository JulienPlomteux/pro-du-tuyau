import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Backward-compatible wrapper around @nuxtjs/i18n's useI18n().
 * All existing components calling useLanguage() continue to work unchanged.
 *
 * Usage: const { t, currentLanguage, setLanguage } = useLanguage()
 * Access: t.value.hero.titleLine1 → resolved string
 *         t.value.services.processSteps → resolved array
 *
 * Handles three compiled message formats:
 *   - Function (client bundle): typeof raw === 'function' → rt(raw)
 *   - AST (server/SSR bundle): raw.t === 0 (NodeTypes.Resource) → rt(raw)
 *   - Plain string (jit mode): typeof raw === 'string' → raw
 */

/**
 * Returns true if `v` is a compiled message that should be rendered via rt().
 * Handles three formats emitted by vue-i18n across environments:
 *   - function   → client/prod bundle compiled message
 *   - { t: N }   → minified SSR AST (prod)
 *   - { type: N } → non-minified SSR AST (dev / JIT)
 */
function isCompiledMessage(v: unknown): boolean {
  if (typeof v === 'function') return true
  if (typeof v !== 'object' || v === null) return false
  const rec = v as Record<string, unknown>
  return typeof rec.t === 'number' || typeof rec.type === 'number'
}

function makeResolver(rt: (msg: unknown) => string) {
  function resolve(raw: unknown): unknown {
    if (raw == null) return undefined
    if (isCompiledMessage(raw)) return rt(raw)
    if (Array.isArray(raw)) return raw.map(resolve)
    if (typeof raw === 'object') {
      const out: Record<string, unknown> = {}
      for (const k of Object.keys(raw as object)) {
        out[k] = resolve((raw as Record<string, unknown>)[k])
      }
      return out
    }
    return raw
  }
  return resolve
}

function buildProxy(
  tm: (key: string) => unknown,
  resolve: (raw: unknown) => unknown,
  prefix = '',
): Record<string, unknown> {
  return new Proxy({} as Record<string, unknown>, {
    get(_target, prop: string | symbol) {
      if (typeof prop === 'symbol') return undefined
      // Return undefined for Vue-internal reactivity flags so Vue does not
      // mistake this proxy for a reactive/ref object and auto-unwrap it.
      if ((prop as string).startsWith('__v_')) return undefined
      // Prevent Promise-detection from treating the proxy as a thenable.
      if (prop === 'then') return undefined

      const fullKey = prefix ? `${prefix}.${prop}` : prop
      const raw = tm(fullKey)

      if (raw !== undefined && raw !== null && raw !== '') {
        const resolved = resolve(raw)
        if (resolved !== undefined) return resolved
      }

      return buildProxy(tm, resolve, fullKey)
    },
  })
}

export function useLanguage() {
  const { tm, rt, locale, setLocale } = useI18n()

  const currentLanguage = computed(() => locale.value as 'fr' | 'en')

  const t = computed(() => {
    const resolve = makeResolver(rt as (msg: unknown) => string)
    return buildProxy(tm as (key: string) => unknown, resolve)
  })

  const setLanguage = (lang: 'fr' | 'en') => {
    setLocale(lang)
    if (import.meta.client) {
      localStorage.setItem('produtuyeau-language', lang)
    }
  }

  return { t, currentLanguage, setLanguage }
}
