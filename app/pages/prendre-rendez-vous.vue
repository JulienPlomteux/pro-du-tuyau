<template>
  <div>
    <!-- Texture hero with white pill -->
    <section class="tex-dark relative overflow-hidden py-14 lg:py-20">
      <div class="relative mx-auto max-w-7xl px-4 lg:px-8">
        <span class="nav-type inline-block rounded-pill bg-white px-8 py-3 text-xl tracking-[0.1em] text-ink shadow-xl sm:text-2xl">
          {{ t('schedule.heroTitle') }}
        </span>
      </div>
    </section>

    <!-- Red panel with the widget -->
    <section class="bg-bone pb-16 lg:pb-24">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="tex-red -mt-2 rounded-3xl p-6 shadow-2xl sm:p-10 lg:p-14">
          <ScheduleWidget />
        </div>
      </div>
    </section>

    <!-- City cards -->
    <CityCards />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

useHead({
  title: () => `${t('schedule.heroTitle')} | Pro du Tuyau`,
  meta: [
    {
      name: 'description',
      content: () => t('schedule.intro'),
    },
  ],
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr-CA' : 'en-CA'),
  },
})
</script>
