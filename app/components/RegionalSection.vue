<template>
  <section class="tex-dark py-16 lg:py-24">
    <div class="mx-auto max-w-4xl px-4 text-center lg:px-8">
      <!-- Badges -->
      <div class="mb-10 flex flex-wrap items-center justify-center gap-3" data-reveal>
        <span
          v-for="badge in badges"
          :key="badge"
          class="nav-type rounded-pill border-2 border-blaze/70 px-5 py-2 text-[14px] tracking-[0.12em] text-bone/90"
        >
          {{ badge }}
        </span>
      </div>

      <h2 class="display text-4xl leading-tight text-bone sm:text-5xl" data-reveal>
        {{ t('regional.title') }}
      </h2>
      <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-bone/70 sm:text-lg" data-reveal>
        {{ t('regional.text') }}
      </p>

      <a
        :href="site.phoneHref"
        class="nav-type mt-9 inline-flex items-center gap-3 rounded-pill bg-blaze px-10 py-5 text-2xl tracking-[0.08em] text-white shadow-2xl shadow-blaze/30 transition-all hover:-translate-y-0.5 hover:bg-blaze-dark"
        data-reveal
      >
        <PhoneIcon class="h-6 w-6" />
        {{ t('regional.cta') }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { badges as siteBadges, type Locale } from '~/data/content'

const { t, locale } = useI18n()
const site = useSite()
const badges = computed(() => siteBadges[locale.value as Locale])
</script>
