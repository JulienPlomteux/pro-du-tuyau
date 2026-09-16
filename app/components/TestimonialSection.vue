<template>
  <section class="relative overflow-hidden bg-bone py-16 lg:py-24">
    <!-- Watermark -->
    <p
      class="display-ghost pointer-events-none absolute -top-2 left-1/2 w-full max-w-5xl -translate-x-1/2 select-none px-4 text-center text-[64px] leading-[0.9] sm:text-[96px] lg:text-[130px]"
      aria-hidden="true"
    >
      {{ t('testimonials.watermark') }}
    </p>

    <!-- Ghost badges (wide screens only, tucked in the corners) -->
    <div class="pointer-events-none absolute inset-0 hidden 2xl:block" aria-hidden="true">
      <span class="nav-type absolute left-4 top-[10%] rotate-[-8deg] text-[40px] tracking-[0.08em] text-ink/6">
        {{ t('testimonials.badge1') }}
      </span>
      <span class="nav-type absolute right-4 top-[6%] rotate-[6deg] text-[38px] tracking-[0.08em] text-ink/6">
        {{ t('testimonials.badge2') }}
      </span>
      <span class="nav-type absolute bottom-[6%] left-4 rotate-[4deg] text-[40px] tracking-[0.08em] text-ink/6">
        {{ t('testimonials.badge3') }}
      </span>
      <span class="nav-type absolute bottom-[4%] right-4 rotate-[-5deg] text-[42px] tracking-[0.08em] text-ink/6">
        {{ t('testimonials.badge4') }}
      </span>
    </div>

    <div class="relative mx-auto max-w-5xl px-4 lg:px-8">
      <!-- Reputation card -->
      <div class="mb-12 overflow-hidden rounded-2xl bg-coal p-8 text-center shadow-2xl sm:p-10" data-reveal>
        <h3 class="display text-2xl leading-tight text-bone sm:text-3xl">
          {{ t('testimonials.reputation.title') }}
        </h3>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-bone/70 sm:text-base">
          {{ t('testimonials.reputation.text') }}
        </p>
        <NuxtLink
          :to="localePath('/prendre-rendez-vous')"
          class="nav-type mt-6 inline-block rounded-pill bg-blaze px-8 py-3 text-base tracking-[0.1em] text-white transition-colors hover:bg-blaze-dark"
        >
          {{ t('testimonials.reputation.cta') }}
        </NuxtLink>
      </div>

      <!-- Reviews -->
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, i) in items"
          :key="i"
          class="rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          data-reveal
        >
          <StarRow />
          <p class="mt-3 text-sm leading-relaxed text-ink-soft">
            «&nbsp;{{ item.quote }}&nbsp;»
          </p>
          <footer class="mt-4 flex items-center justify-between">
            <span class="text-sm font-semibold text-ink">{{ item.name }}</span>
            <span class="text-xs text-ink-muted">{{ item.days }}</span>
          </footer>
        </article>

        <!-- CTA card -->
        <div class="flex flex-col items-center justify-center rounded-xl bg-blaze p-6 text-center shadow-md" data-reveal>
          <p class="display text-3xl leading-tight text-white">24/7</p>
          <p class="mt-2 text-sm leading-relaxed text-white/85">
            {{ t('testimonials.ctaCardText') }}
          </p>
          <a
            :href="site.phoneHref"
            class="nav-type mt-4 inline-flex items-center gap-2 rounded-pill bg-white px-6 py-2.5 text-base tracking-[0.08em] text-blaze transition-transform hover:-translate-y-0.5"
          >
            <PhoneIcon class="h-4 w-4" />
            {{ site.phone }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { reviews, type Locale } from '~/data/content'

const {t, locale} = useI18n()
const localePath = useLocalePath()
const site = useSite()
const items = computed(() => reviews[locale.value as Locale])
</script>
