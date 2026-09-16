<template>
  <aside class="w-full lg:w-[300px] lg:shrink-0">
    <div class="overflow-hidden rounded-2xl bg-coal text-bone shadow-xl lg:sticky lg:top-28">
      <div class="border-b border-coal-line p-6">
        <h3 class="nav-type text-[15px] tracking-[0.18em] text-blaze">
          {{ t('servicePage.sidebar.services') }}
        </h3>
        <ul class="mt-4 space-y-1">
          <li v-for="slug in slugs" :key="slug">
            <NuxtLink
              :to="localePath('/services/' + slug)"
              class="block rounded-md px-3 py-2 text-sm transition-colors"
              :class="slug === active
                ? 'bg-blaze font-semibold text-white'
                : 'text-bone/75 hover:bg-coal-nav hover:text-bone'"
            >
              {{ t(`services.items.${slug}.label`) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="border-b border-coal-line p-6">
        <h3 class="nav-type text-[15px] tracking-[0.18em] text-blaze">
          {{ t('servicePage.sidebar.resources') }}
        </h3>
        <ul class="mt-4 space-y-1 text-sm">
          <li>
            <NuxtLink :to="localePath('/a-propos')" class="block rounded-md px-3 py-2 text-bone/75 transition-colors hover:bg-coal-nav hover:text-bone">
              {{ t('servicePage.sidebar.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" class="block rounded-md px-3 py-2 text-bone/75 transition-colors hover:bg-coal-nav hover:text-bone">
              {{ t('servicePage.sidebar.contact') }}
            </NuxtLink>
          </li>
          <li>
            <a :href="localePath('/') + '#aires'" class="block rounded-md px-3 py-2 text-bone/75 transition-colors hover:bg-coal-nav hover:text-bone">
              {{ t('servicePage.sidebar.areas') }}
            </a>
          </li>
          <li>
            <a href="#faq" class="block rounded-md px-3 py-2 text-bone/75 transition-colors hover:bg-coal-nav hover:text-bone">
              {{ t('servicePage.sidebar.faq') }}
            </a>
          </li>
        </ul>
      </div>

      <div class="p-6">
        <a
          :href="site.phoneHref"
          class="nav-type flex items-center justify-center gap-2 rounded-pill border-2 border-bone/30 px-5 py-3 text-lg tracking-[0.08em] text-bone transition-colors hover:border-blaze hover:text-blaze"
        >
          <PhoneIcon class="h-5 w-5" />
          {{ site.phone }}
        </a>
        <NuxtLink
          :to="localePath('/prendre-rendez-vous')"
          class="nav-type mt-3 flex items-center justify-center rounded-pill bg-blaze px-5 py-3 text-base tracking-[0.08em] text-white transition-colors hover:bg-blaze-dark"
        >
          {{ t('servicePage.bookOnline') }}
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  active: string
}>()

const {t} = useI18n()
const localePath = useLocalePath()
const site = useSite()

const slugs = [
  'reparation', 'fuites', 'chauffe-eau', 'salles-de-bain',
  'drainage', 'urgences', 'installation',
]

const active = computed(() => props.active)
</script>
