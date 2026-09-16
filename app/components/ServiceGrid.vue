<template>
  <section id="services" class="bg-bone py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <h2 class="display mb-12 text-center text-4xl text-ink sm:text-5xl lg:mb-16" data-reveal>
        {{ t('services.title') }}
      </h2>

      <div class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <NuxtLink
          v-for="slug in slugs"
          :key="slug"
          :to="localePath('/services/' + slug)"
          class="group flex flex-col items-center text-center"
          data-reveal
        >
          <span class="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink/15 bg-white text-ink shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blaze group-hover:text-blaze group-hover:shadow-lg">
            <ServiceIcon :name="slug" class="h-9 w-9" />
          </span>
          <span class="nav-type text-xl tracking-[0.06em] text-ink transition-colors group-hover:text-blaze">
            {{ t(`services.items.${slug}.label`) }}
          </span>
          <span class="mt-1.5 text-xs leading-relaxed text-ink-muted">
            {{ t(`services.items.${slug}.desc`) }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {t} = useI18n()
const localePath = useLocalePath()

const slugs = [
  'reparation', 'fuites', 'chauffe-eau', 'salles-de-bain',
  'drainage', 'urgences', 'installation',
]
</script>
