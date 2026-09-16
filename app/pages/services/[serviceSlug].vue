<template>
  <div>
    <!-- Photo hero -->
    <section class="relative">
      <div class="relative h-[300px] w-full overflow-hidden bg-coal sm:h-[380px] lg:h-[440px]">
        <NuxtImg
          :src="heroImage"
          :alt="content.heroTitle"
          width="1920"
          height="640"
          priority
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-coal/80 via-coal/30 to-coal/40" />
      </div>

      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <!-- Back link -->
        <div class="absolute left-4 top-20 z-10 lg:left-8">
          <NuxtLink
            :to="localePath('/')"
            class="nav-type inline-flex items-center gap-2 rounded-pill bg-white/95 px-5 py-2 text-[14px] tracking-[0.1em] text-ink shadow-lg transition-colors hover:bg-bone"
          >
            ← {{ t('servicePage.back') }}
          </NuxtLink>
        </div>

        <h1 class="display-outline relative z-10 -mt-16 mb-8 max-w-4xl text-4xl sm:text-5xl lg:-mt-24 lg:text-6xl">
          {{ content.heroTitle }}
        </h1>
      </div>
    </section>

    <!-- Content + sidebar -->
    <section class="bg-bone py-10 lg:py-14">
      <div class="mx-auto flex max-w-7xl flex-col-reverse gap-10 px-4 lg:flex-row lg:px-8">
        <!-- Long-form -->
        <article class="min-w-0 flex-1 space-y-10">
          <p class="text-lg leading-relaxed text-ink-soft" data-reveal>
            {{ content.intro }}
          </p>

          <div data-reveal>
            <h2 class="display mb-4 text-3xl text-ink">{{ content.section1.h }}</h2>
            <p class="leading-relaxed text-ink-soft">{{ content.section1.p }}</p>
          </div>

          <div data-reveal>
            <h2 class="display mb-4 text-3xl text-ink">{{ content.section2.h }}</h2>
            <p class="leading-relaxed text-ink-soft">{{ content.section2.p }}</p>
          </div>

          <!-- Customer story -->
          <div class="overflow-hidden rounded-2xl bg-coal text-bone shadow-xl" data-reveal>
            <div class="grid sm:grid-cols-[1fr_1.4fr]">
              <div class="min-h-[220px] bg-coal-nav">
                <NuxtImg
                  :src="storyImage"
                  :alt="content.story.title"
                  width="700"
                  height="500"
                  class="h-full w-full object-cover opacity-90"
                />
              </div>
              <div class="p-7 sm:p-9">
                <p class="nav-type text-[14px] tracking-[0.18em] text-blaze">
                  {{ content.story.title }}
                </p>
                <p class="mt-4 text-sm italic leading-relaxed text-bone/85">
                  {{ content.story.text }}
                </p>
                <blockquote class="mt-6 border-l-2 border-blaze pl-4">
                  <p class="nav-type text-lg leading-snug tracking-[0.04em] text-bone">
                    {{ content.story.quote }}
                  </p>
                  <footer class="mt-2 text-xs text-bone/60">
                    {{ content.story.attribution }}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div id="faq" data-reveal>
            <h2 class="display mb-6 text-3xl text-ink">
              {{ t('servicePage.faqTitle') }}
            </h2>
            <div class="space-y-3">
              <details
                v-for="(item, i) in content.faq"
                :key="i"
                class="group rounded-xl border border-ink/10 bg-white shadow-sm open:shadow-md"
              >
                <summary class="nav-type flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-lg tracking-[0.04em] text-ink [&::-webkit-details-marker]:hidden">
                  {{ item.q }}
                  <svg class="h-4 w-4 shrink-0 text-blaze transition-transform group-open:rotate-45" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v12M2 8h12"/></svg>
                </summary>
                <p class="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{{ item.a }}</p>
              </details>
            </div>
          </div>

          <!-- CTA band -->
          <div class="tex-red rounded-2xl p-8 text-center shadow-xl sm:p-10" data-reveal>
            <h2 class="display text-3xl text-white sm:text-4xl">
              {{ t('servicePage.cta.title') }}
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              {{ t('servicePage.cta.text') }}
            </p>
            <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <NuxtLink
                :to="localePath('/prendre-rendez-vous')"
                class="nav-type rounded-pill bg-bone px-8 py-3.5 text-lg tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
              >
                {{ t('servicePage.cta.btn') }}
              </NuxtLink>
              <a
                :href="site.phoneHref"
                class="nav-type flex items-center gap-2 rounded-pill border-2 border-white/60 px-8 py-3 text-lg tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon class="h-5 w-5" />
                {{ site.phone }}
              </a>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <ServiceSidebar :active="slug" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { serviceFaqs, type Locale } from '~/data/content'

const route = useRoute()
const {t, locale} = useI18n()
const localePath = useLocalePath()
const site = useSite()

const VALID = [
  'reparation', 'fuites', 'chauffe-eau', 'salles-de-bain',
  'drainage', 'urgences', 'installation',
]

const slug = computed(() => String(route.params.serviceSlug || ''))

if (!VALID.includes(slug.value)) {
  throw createError({ statusCode: 404, fatal: true })
}

const content = computed(() => {
  const base = `servicePage.services.${slug.value}`
  return {
    heroTitle: t(`${base}.heroTitle`),
    intro: t(`${base}.intro`),
    section1: { h: t(`${base}.section1.h`), p: t(`${base}.section1.p`) },
    section2: { h: t(`${base}.section2.h`), p: t(`${base}.section2.p`) },
    story: {
      title: t(`${base}.story.title`),
      text: t(`${base}.story.text`),
      quote: t(`${base}.story.quote`),
      attribution: t(`${base}.story.attribution`),
    },
    faq: serviceFaqs[slug.value]?.[locale.value as Locale] ?? [],
  }
})

const heroImages: Record<string, string> = {
  reparation: '/img/reparation-1.jpg',
  fuites: '/img/fuites-1.jpg',
  'chauffe-eau': '/img/chauffe-eau-1.jpg',
  'salles-de-bain': '/img/salles-bain-1.jpg',
  drainage: '/img/drainage-1.jpg',
  urgences: '/img/reparation-2.jpg',
  installation: '/img/installation-1.jpg',
}
const storyImages: Record<string, string> = {
  reparation: '/img/reparation-2.jpg',
  fuites: '/img/drainage-2.jpg',
  'chauffe-eau': '/img/chauffe-eau-1.jpg',
  'salles-de-bain': '/img/equipe-1.jpg',
  drainage: '/img/drainage-2.jpg',
  urgences: '/img/reparation-1.jpg',
  installation: '/img/installation-1.jpg',
}

const heroImage = computed(() => heroImages[slug.value] ?? '/img/reparation-1.jpg')
const storyImage = computed(() => storyImages[slug.value] ?? '/img/reparation-1.jpg')

useHead({
  title: () => `${content.value.heroTitle} | Pro du Tuyau`,
  meta: [
    {
      name: 'description',
      content: () =>
        content.value.intro.slice(0, 155) + '…',
    },
  ],
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr-CA' : 'en-CA'),
  },
})

useSchemaOrg({
  type: 'Service',
  name: () => t(`services.items.${slug.value}.label`),
  serviceType: () => t(`services.items.${slug.value}.label`),
  description: () => t(`services.items.${slug.value}.desc`),
  provider: {
    '@type': 'LocalBusiness',
    name: 'Pro du Tuyau',
    telephone: '+1-438-399-3014',
  },
  areaServed: 'Greater Montreal, QC',
})
</script>
