<template>
  <section id="financement" class="tex-red py-16 lg:py-20">
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
      <div data-reveal>
        <span class="nav-type inline-block rounded-pill border-2 border-white/60 px-5 py-1.5 text-[13px] tracking-[0.18em] text-white">
          {{ t('financing.pill') }}
        </span>
        <h2 class="display mt-5 text-5xl text-white sm:text-6xl">
          {{ t('financing.title') }}
        </h2>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {{ t('financing.text') }}
        </p>
      </div>

      <div class="flex justify-center lg:justify-end" data-reveal>
        <NuxtLink
          :to="localePath('/contact')"
          class="nav-type inline-block rounded-pill bg-bone px-10 py-5 text-xl tracking-[0.1em] text-ink shadow-2xl transition-transform hover:-translate-y-1"
        >
          {{ t('financing.cta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {t} = useI18n()
const localePath = useLocalePath()
</script>
