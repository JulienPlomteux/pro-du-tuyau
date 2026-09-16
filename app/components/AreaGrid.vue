<template>
  <section id="aires" class="tex-dark py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <h2 class="display mb-3 text-center text-4xl text-bone sm:text-5xl" data-reveal>
        {{ t('areas.title') }}
      </h2>
      <p class="nav-type mb-10 text-center text-[15px] tracking-[0.14em] text-bone/60" data-reveal>
        {{ t('areas.subtitle') }}
      </p>

      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" data-reveal>
        <a
          v-for="city in cities"
          :key="city"
          :href="`https://www.google.com/maps/search/${encodeURIComponent(city + ' QC')}`"
          target="_blank"
          rel="noopener"
          class="nav-type flex items-center justify-center gap-2 rounded-md border border-coal-line bg-coal-nav/60 px-4 py-4 text-[17px] tracking-[0.1em] text-bone/85 transition-all hover:border-blaze hover:text-blaze"
        >
          <MapPinIcon class="h-4 w-4 text-blaze/70" />
          {{ city }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { areaCities, type Locale } from '~/data/content'

const { t, locale } = useI18n()
const cities = computed(() => areaCities[locale.value as Locale])
</script>
