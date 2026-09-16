<template>
  <div>
    <!-- Photo hero -->
    <section class="relative bg-coal">
      <div class="relative h-[280px] w-full overflow-hidden sm:h-[360px]">
        <NuxtImg
          src="/img/equipe-1.jpg"
          :alt="t('about.heroTitle')"
          width="1920"
          height="640"
          priority
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-coal/85 via-coal/40 to-coal/40" />
      </div>
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 class="display-outline relative z-10 -mt-14 mb-6 text-4xl sm:text-5xl lg:-mt-20 lg:text-6xl">
          {{ t('about.heroTitle') }}
        </h1>
      </div>
    </section>

    <section class="bg-bone py-12 lg:py-16">
      <div class="mx-auto max-w-4xl px-4 lg:px-8">
        <p class="nav-type mb-6 text-center text-[15px] tracking-[0.18em] text-blaze" data-reveal>
          {{ t('about.storyKicker') }}
        </p>
        <p class="text-lg leading-relaxed text-ink-soft" data-reveal>
          {{ t('about.story1') }}
        </p>
        <p class="mt-5 text-lg leading-relaxed text-ink-soft" data-reveal>
          {{ t('about.story2') }}
        </p>

        <!-- Icon blocks -->
        <div class="mt-12 grid gap-8 sm:grid-cols-2" data-reveal>
          <div class="flex flex-col items-center rounded-2xl border border-ink/10 bg-white p-8 text-center shadow-sm">
            <span class="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <CheckBadge class="h-10 w-10" />
            </span>
            <h2 class="nav-type text-2xl tracking-[0.05em] text-ink">
              {{ t('about.block1.title') }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              {{ t('about.block1.text') }}
            </p>
          </div>
          <div class="flex flex-col items-center rounded-2xl border border-ink/10 bg-white p-8 text-center shadow-sm">
            <span class="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-10 w-10" aria-hidden="true">
                <path d="M12 21s-7.5-4.9-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 4.5 2.5C12 6 13.5 5 15.5 5 19 5 21 8.5 21.5 12c-2 4.1-9.5 9-9.5 9z"/>
              </svg>
            </span>
            <h2 class="nav-type text-2xl tracking-[0.05em] text-ink">
              {{ t('about.block2.title') }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              {{ t('about.block2.text') }}
            </p>
          </div>
        </div>

        <!-- Badge strip -->
        <div class="mt-12 flex flex-wrap items-center justify-center gap-3" data-reveal>
          <span
            v-for="badge in pageBadges"
            :key="badge"
            class="nav-type rounded-pill border-2 border-ink/15 px-5 py-2 text-[14px] tracking-[0.12em] text-ink/70"
          >
            {{ badge }}
          </span>
        </div>

        <!-- CTA -->
        <div class="tex-dark mt-14 rounded-2xl p-10 text-center" data-reveal>
          <h2 class="display text-3xl text-bone sm:text-4xl">
            {{ t('about.ctaTitle') }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-bone/70 sm:text-base">
            {{ t('about.ctaText') }}
          </p>
          <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NuxtLink
              :to="localePath('/prendre-rendez-vous')"
              class="nav-type rounded-pill bg-blaze px-8 py-3.5 text-lg tracking-[0.08em] text-white transition-colors hover:bg-blaze-dark"
            >
              {{ t('about.ctaBtn') }}
            </NuxtLink>
            <a
              :href="site.phoneHref"
              class="nav-type flex items-center gap-2 rounded-pill border-2 border-bone/30 px-8 py-3 text-lg tracking-[0.08em] text-bone transition-colors hover:border-bone"
            >
              <PhoneIcon class="h-5 w-5" />
              {{ site.phone }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { badges, type Locale } from '~/data/content'

const {t, locale} = useI18n()
const localePath = useLocalePath()
const site = useSite()
const pageBadges = computed(() => badges[locale.value as Locale])

useHead({
  title: () => `${t('about.heroTitle')} | Pro du Tuyau`,
  meta: [
    {
      name: 'description',
      content: () => t('about.story1').slice(0, 155) + '…',
    },
  ],
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr-CA' : 'en-CA'),
  },
})
</script>
