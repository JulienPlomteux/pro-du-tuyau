<template>
  <header class="sticky top-0 z-50">
    <!-- Utility bar -->
    <div class="bg-coal-deep text-bone/70 text-xs hidden sm:block">
      <div class="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-8">
        <p class="nav-type text-[13px] tracking-[0.08em]">
          {{ t('nav.utility') }}
        </p>
        <div class="flex items-center gap-4">
          <a
            :href="site.phoneHref"
            class="nav-type flex items-center gap-1.5 text-[13px] tracking-[0.08em] text-bone/80 transition-colors hover:text-blaze"
          >
            <PhoneIcon class="h-3.5 w-3.5" />
            {{ site.phone }}
          </a>
          <button
            type="button"
            class="nav-type text-[13px] tracking-[0.12em] text-bone/60 underline-offset-4 transition-colors hover:text-bone"
            @click="toggleLanguage"
          >
            <span class="text-bone">{{ locale === 'fr' ? 'EN' : 'FR' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="bg-coal-nav/95 backdrop-blur-sm">
      <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:px-8">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
          <NuxtImg
            src="/img/logo.png"
            alt="Pro du Tuyau"
            width="44"
            height="44"
            class="h-11 w-11 rounded object-contain"
          />
          <span class="display text-[22px] leading-none text-bone sm:text-[26px]">
            PRO DU<span class="text-blaze"> TUYAU</span>
          </span>
        </NuxtLink>

        <!-- Desktop links -->
        <div class="hidden items-center gap-6 xl:flex">
          <div class="group relative">
            <button type="button" class="nav-type flex items-center gap-1.5 text-[17px] tracking-[0.06em] text-bone/90 transition-colors hover:text-blaze">
              {{ t('nav.plumbing') }}
              <svg class="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg>
            </button>
            <div class="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul class="w-64 overflow-hidden rounded-lg border border-coal-line bg-coal-nav shadow-2xl">
                <li v-for="slug in plumbingSlugs" :key="slug">
                  <NuxtLink
                    :to="localePath('/services/' + slug)"
                    class="nav-type block px-5 py-3 text-[16px] tracking-[0.05em] text-bone/85 transition-colors hover:bg-coal hover:text-blaze"
                  >
                    {{ t(`services.items.${slug}.label`) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="group relative">
            <button type="button" class="nav-type flex items-center gap-1.5 text-[17px] tracking-[0.06em] text-bone/90 transition-colors hover:text-blaze">
              {{ t('nav.heating') }}
              <svg class="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg>
            </button>
            <div class="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul class="w-64 overflow-hidden rounded-lg border border-coal-line bg-coal-nav shadow-2xl">
                <li v-for="slug in heatingSlugs" :key="slug">
                  <NuxtLink
                    :to="localePath('/services/' + slug)"
                    class="nav-type block px-5 py-3 text-[16px] tracking-[0.05em] text-bone/85 transition-colors hover:bg-coal hover:text-blaze"
                  >
                    {{ t(`services.items.${slug}.label`) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink
            :to="localePath('/contact')"
            class="nav-type text-[17px] tracking-[0.06em] text-bone/90 transition-colors hover:text-blaze"
          >
            {{ t('nav.commercial') }}
          </NuxtLink>
          <a
            :href="homeAnchors.areas"
            class="nav-type text-[17px] tracking-[0.06em] text-bone/90 transition-colors hover:text-blaze"
          >
            {{ t('nav.areas') }}
          </a>
          <a
            :href="homeAnchors.financing"
            class="nav-type text-[17px] tracking-[0.06em] text-bone/90 transition-colors hover:text-blaze"
          >
            {{ t('nav.financing') }}
          </a>
        </div>

        <!-- CTA + burger -->
        <div class="flex items-center gap-3">
          <NuxtLink
            :to="localePath('/prendre-rendez-vous')"
            class="hidden rounded-pill bg-blaze px-6 py-3 nav-type text-[16px] tracking-[0.08em] text-white shadow-lg shadow-blaze/30 transition-all hover:bg-blaze-dark hover:shadow-blaze/50 sm:inline-block"
          >
            {{ t('nav.book') }}
          </NuxtLink>
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-md text-bone xl:hidden"
            :aria-label="t('nav.menu')"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="border-t border-coal-line bg-coal-nav shadow-2xl xl:hidden">
        <div class="max-h-[calc(100vh-110px)] space-y-1 overflow-y-auto px-4 py-4">
          <NuxtLink
            v-for="slug in allSlugs"
            :key="slug"
            :to="localePath('/services/' + slug)"
            class="nav-type block rounded-md px-3 py-2.5 text-lg tracking-[0.05em] text-bone/85 hover:bg-coal hover:text-blaze"
            @click="mobileOpen = false"
          >
            {{ t(`services.items.${slug}.label`) }}
          </NuxtLink>
          <div class="my-2 h-px bg-coal-line" />
          <NuxtLink
            :to="localePath('/a-propos')"
            class="nav-type block rounded-md px-3 py-2.5 text-lg tracking-[0.05em] text-bone/85 hover:bg-coal hover:text-blaze"
            @click="mobileOpen = false"
          >
            {{ t('nav.about') }}
          </NuxtLink>
          <a
            :href="`tel:${site.phoneHref}`"
            class="nav-type flex items-center gap-3 rounded-md px-3 py-2.5 text-lg tracking-[0.05em] text-bone/85 hover:bg-coal hover:text-blaze"
          >
            <PhoneIcon class="h-5 w-5 text-blaze" />
            {{ site.phone }}
          </a>
          <div class="my-2 h-px bg-coal-line" />
          <NuxtLink
            v-for="link in mobileLinks"
            :key="link.label"
            :to="link.to"
            class="nav-type block rounded-md px-3 py-2.5 text-lg tracking-[0.05em] text-bone/85 hover:bg-coal hover:text-blaze"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="my-2 h-px bg-coal-line" />
          <NuxtLink
            :to="localePath('/prendre-rendez-vous')"
            class="nav-type block rounded-pill bg-blaze px-6 py-3 text-center text-lg tracking-[0.08em] text-white hover:bg-blaze-dark"
            @click="mobileOpen = false"
          >
            {{ t('nav.book') }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const site = useSite()

const mobileOpen = ref(false)

const plumbingSlugs = ['reparation', 'fuites', 'drainage', 'urgences', 'salles-de-bain']
const heatingSlugs = ['chauffe-eau', 'installation']
const allSlugs = [...plumbingSlugs, ...heatingSlugs]

const homeAnchors = computed(() => {
  const base = locale.value === 'fr' ? '/' : '/en'
  return {
    areas: `${base}#aires`,
    financing: `${base}#financement`,
  }
})

const mobileLinks = computed(() => [
  { label: t('nav.commercial'), to: localePath('/contact') },
  { label: t('nav.areas'), to: `${locale.value === 'fr' ? '/' : '/en'}#aires` },
  { label: t('nav.financing'), to: `${locale.value === 'fr' ? '/' : '/en'}#financement` },
  { label: t('nav.contact'), to: localePath('/contact') },
])

function toggleLanguage() {
  const to = locale.value === 'fr' ? 'en' : 'fr'
  const path = window.location.pathname
  const next = to === 'fr'
    ? path.replace(/^\/en(\/|$)/, '/') || '/'
    : path === '/' || path.startsWith('/?')
      ? `/en${path === '/' ? '' : path}`
      : `/en${path}`
  navigateTo(next)
}
</script>
