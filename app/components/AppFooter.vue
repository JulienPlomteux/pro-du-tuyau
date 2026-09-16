<template>
  <footer class="tex-dark text-bone">
    <div class="h-1 bg-blaze" />
    <div class="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Hours / contact -->
        <div>
          <div class="mb-5 flex items-center gap-3">
            <NuxtImg
              src="/img/logo.png"
              alt="Pro du Tuyau"
              width="40"
              height="40"
              class="h-10 w-10 rounded object-contain"
            />
            <span class="display text-xl text-bone">PRO DU<span class="text-blaze"> TUYAU</span></span>
          </div>
          <p class="nav-type text-[15px] tracking-[0.1em] text-bone/60">
            {{ t('footer.hours') }}
          </p>
          <p class="nav-type text-[17px] tracking-[0.06em] text-bone">{{ t('footer.open') }}</p>
          <a
            :href="site.phoneHref"
            class="mt-4 inline-flex items-center gap-2 rounded-pill border border-bone/25 px-5 py-2.5 nav-type text-[15px] tracking-[0.08em] text-bone transition-colors hover:border-blaze hover:text-blaze"
          >
            <PhoneIcon class="h-4 w-4" />
            {{ site.phone }}
          </a>
          <p class="mt-4 text-xs text-bone/50">{{ t('footer.rbq') }}</p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="nav-type mb-5 text-[17px] tracking-[0.14em] text-blaze">
            {{ t('footer.servicesTitle') }}
          </h3>
          <ul class="space-y-2.5">
            <li v-for="slug in slugs" :key="slug">
              <NuxtLink
                :to="localePath('/services/' + slug)"
                class="text-sm text-bone/75 transition-colors hover:text-bone"
              >
                {{ t(`services.items.${slug}.label`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Areas -->
        <div>
          <h3 class="nav-type mb-5 text-[17px] tracking-[0.14em] text-blaze">
            {{ t('footer.areasTitle') }}
          </h3>
          <ul class="grid grid-cols-2 gap-x-4 gap-y-2.5">
            <li v-for="city in cities" :key="city">
              <a href="/#aires" class="text-sm text-bone/75 transition-colors hover:text-bone">
                {{ city }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="nav-type mb-5 text-[17px] tracking-[0.14em] text-blaze">
            {{ t('footer.companyTitle') }}
          </h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink :to="localePath('/a-propos')" class="text-sm text-bone/75 transition-colors hover:text-bone">
                {{ t('footer.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contact')" class="text-sm text-bone/75 transition-colors hover:text-bone">
                {{ t('footer.contact') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/prendre-rendez-vous')" class="text-sm text-bone/75 transition-colors hover:text-bone">
                {{ t('footer.schedule') }}
              </NuxtLink>
            </li>
            <li>
              <a href="/#aires" class="text-sm text-bone/75 transition-colors hover:text-bone">
                {{ t('footer.areas') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-coal-line pt-6 sm:flex-row">
        <p class="text-xs text-bone/50">{{ t('footer.copyright') }}</p>
        <p class="text-xs text-bone/40">{{ t('footer.demoNote') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { areaCities, type Locale } from '~/data/content'

const {t, locale} = useI18n()
const localePath = useLocalePath()
const site = useSite()

const slugs = [
  'reparation', 'fuites', 'chauffe-eau', 'salles-de-bain',
  'drainage', 'urgences', 'installation',
]
const cities = computed(() => areaCities[locale.value as Locale])
</script>
