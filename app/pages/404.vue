<template>
  <div class="flex min-h-[60vh] items-center justify-center bg-bone px-4 py-20">
    <div class="max-w-xl text-center">
      <p class="nav-type text-[80px] leading-none tracking-[0.1em] text-blaze/20">
        {{ t('notFound.kicker') }}
      </p>
      <h1 class="display mt-4 text-4xl text-ink sm:text-5xl">
        {{ t('notFound.title') }}
      </h1>
      <p class="mt-5 text-base leading-relaxed text-ink-soft">
        {{ t('notFound.text') }}
      </p>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <NuxtLink
          :to="localePath('/')"
          class="nav-type rounded-pill bg-blaze px-8 py-3.5 text-lg tracking-[0.08em] text-white transition-colors hover:bg-blaze-dark"
        >
          {{ t('notFound.ctaHome') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/prendre-rendez-vous')"
          class="nav-type rounded-pill border-2 border-ink/20 px-8 py-3 text-lg tracking-[0.08em] text-ink transition-colors hover:border-ink"
        >
          {{ t('notFound.ctaSchedule') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {t} = useI18n()
const localePath = useLocalePath()

useHead({ title: () => `404 | Pro du Tuyau` })
</script>
