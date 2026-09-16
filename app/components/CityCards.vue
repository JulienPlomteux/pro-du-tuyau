<template>
  <section class="bg-bone py-16 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <h2 class="display mb-10 text-center text-4xl text-ink" data-reveal>
        {{ t('cityCards.title') }}
      </h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
        <article
          v-for="card in cards"
          :key="card.name"
          class="flex flex-col rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="nav-type text-2xl tracking-[0.06em] text-ink">
              {{ card.name }}
            </h3>
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <MapPinIcon class="h-5 w-5" />
            </span>
          </div>
          <p class="mt-2 text-sm text-ink-muted">{{ card.address }}</p>
          <a
            :href="site.phoneHref"
            class="nav-type mt-5 inline-flex items-center gap-2 self-start rounded-pill border-2 border-ink/15 px-5 py-2 text-[15px] tracking-[0.08em] text-ink transition-colors hover:border-blaze hover:text-blaze"
          >
            <PhoneIcon class="h-4 w-4" />
            {{ site.phone }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { cityCards, type Locale } from '~/data/content'

const { t, locale } = useI18n()
const site = useSite()
const cards = computed(() => cityCards[locale.value as Locale])
</script>
