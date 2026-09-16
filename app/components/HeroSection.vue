<template>
  <section class="relative overflow-hidden bg-coal">
    <!-- Diagonal red wedge -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(115deg, #c9272b 0%, #a81e22 55%, #171516 55.2%, #171516 100%)"
      aria-hidden="true"
    />
    <div class="tex-dark absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden="true" />
    <div class="absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-blaze/20 blur-3xl" aria-hidden="true" />

    <div class="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-4 lg:pb-24 lg:pt-20 xl:px-8">
      <!-- Copy -->
      <div class="text-center lg:text-left">
        <p class="nav-type mb-4 text-[15px] tracking-[0.22em] text-bone/70 sm:text-base">
          {{ t('hero.kicker') }}
        </p>
        <h1 class="display text-[44px] leading-[0.96] text-bone sm:text-6xl xl:text-[84px]">
          {{ t('hero.headlineLine1') }}<br class="hidden sm:block">
          <span class="text-white">{{ t('hero.headlineLine2') }}</span>
        </h1>
        <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg lg:mx-0">
          {{ t('hero.tagline') }}
        </p>
        <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <NuxtLink
            :to="localePath('/prendre-rendez-vous')"
            class="nav-type w-full rounded-pill bg-bone px-8 py-4 text-center text-lg tracking-[0.1em] text-ink shadow-xl transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            {{ t('hero.ctaSchedule') }}
          </NuxtLink>
          <a
            :href="site.phoneHref"
            class="nav-type flex w-full items-center justify-center gap-2.5 rounded-pill border-2 border-bone/40 px-8 py-[14px] text-lg tracking-[0.1em] text-bone transition-colors hover:border-bone hover:bg-bone/10 sm:w-auto"
          >
            <PhoneIcon class="h-5 w-5" />
            {{ t('hero.ctaPhone') }}
          </a>
        </div>
      </div>

      <!-- Van -->
      <div class="relative mx-auto w-full max-w-xl lg:max-w-none">
        <span
          class="display-ghost-light pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[120px] lg:text-[170px]"
          aria-hidden="true"
        >
          24/7
        </span>
        <NuxtImg
          src="/img/hero-van.png"
          :alt="t('hero.kicker')"
          width="1400"
          height="700"
          priority
          class="relative z-10 w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {t} = useI18n()
const localePath = useLocalePath()
const site = useSite()
</script>
