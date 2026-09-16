import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-03-20',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: process.env.NUXT_DEVTOOLS === '1' },

  ssr: true,

  experimental: {
    payloadExtraction: false,
  },

  nitro: {
    prerender: {
      routes: [
        '/', '/en',
        '/services/reparation', '/en/services/reparation',
        '/services/fuites', '/en/services/fuites',
        '/services/chauffe-eau', '/en/services/chauffe-eau',
        '/services/salles-de-bain', '/en/services/salles-de-bain',
        '/services/drainage', '/en/services/drainage',
        '/services/urgences', '/en/services/urgences',
        '/services/installation', '/en/services/installation',
        '/a-propos', '/en/a-propos',
        '/prendre-rendez-vous', '/en/prendre-rendez-vous',
        '/contact', '/en/contact',
      ],
      crawlLinks: true,
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  components: [
    { path: '~/components', pathPrefix: true },
    { path: '~/components/icons', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-og-image',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // ── @nuxt/fonts ────────────────────────────────────────────────────────
  fonts: {
    families: [
      { name: 'Anton', weights: [400] },
      { name: 'Bebas Neue', weights: [400] },
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal'],
      },
    ],
  },

  // ── nuxt-og-image ──────────────────────────────────────────────────────
  ogImage: {
    zeroRuntime: true,
    buildCache: true,
    security: {
      renderTimeout: 60000,
    },
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  // ── i18n ───────────────────────────────────────────────────────────────
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', language: 'fr-CA', file: 'fr.json', name: 'Français' },
      { code: 'en', language: 'en-CA', file: 'en.json', name: 'English' },
    ],
    lazy: false,
    langDir: 'locales/',
    detectBrowserLanguage: false,
    baseUrl: 'https://www.produtuyeau.ca',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // ── @nuxt/image ────────────────────────────────────────────────────────
  // In Nuxt 4 (srcDir = 'app/'), @nuxt/image resolves 'dir' relative to srcDir.
  // Use '../public' so it resolves to the root-level public/ folder.
  image: {
    dir: '../public',
    quality: 85,
    formats: ['avif', 'webp'],
    screens: {
      xs: 480,
      sm: 640,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },

  // ── SEO ────────────────────────────────────────────────────────────────
  site: {
    url: 'https://www.produtuyeau.ca',
    name: 'Pro du Tuyau',
    description: 'Plomberie résidentielle et commerciale, chauffage et urgences 24/7 à Laval, Montréal et dans le grand Montréal. Entreprise familiale depuis 1994.',
    defaultLocale: 'fr',
    trailingSlash: true,
    indexable: true,
  },

  // ── Sitemap ────────────────────────────────────────────────────────────
  sitemap: {
    sitemapName: 'sitemap.xml',
    autoI18n: false,
    autoLastmod: true,
    includeAppSources: true,
    exclude: [
      '/en/en',
      '/en/en/**',
    ],
    urls: [
      '/', '/en/',
      '/services/reparation/', '/en/services/reparation/',
      '/services/fuites/', '/en/services/fuites/',
      '/services/chauffe-eau/', '/en/services/chauffe-eau/',
      '/services/salles-de-bain/', '/en/services/salles-de-bain/',
      '/services/drainage/', '/en/services/drainage/',
      '/services/urgences/', '/en/services/urgences/',
      '/services/installation/', '/en/services/installation/',
      '/a-propos/', '/en/a-propos/',
      '/prendre-rendez-vous/', '/en/prendre-rendez-vous/',
      '/contact/', '/en/contact/',
    ],
    xsl: false,
    credits: false,
  },

  robots: {
    groups: [{ userAgent: ['*'], allow: ['/'] }],
    sitemap: ['https://www.produtuyeau.ca/sitemap.xml'],
  },

  // Vite dependency pre-bundling to avoid runtime discovery reloads
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'axios',
        '@unhead/schema-org/vue',
        'clsx',
        'tailwind-merge',
      ],
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'SOURCEMAP_ERROR') return
          warn(warning)
        },
      },
    },
  },

  // ── Runtime config ─────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || 'G-DEMO000000',
    },
    dataDir: process.env.DATA_DIR || './server/data',
  },
})
