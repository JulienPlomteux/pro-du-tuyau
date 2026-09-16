<template>
  <div class="tex-panel border-y border-coal-line">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:gap-6 lg:px-8">
      <p class="nav-type flex items-center gap-2 text-[15px] tracking-[0.1em] text-bone/80">
        <CheckBadge class="h-4 w-4 text-blaze" />
        {{ t('trustBar.since') }}
      </p>
      <span class="hidden h-5 w-px bg-coal-line sm:block" aria-hidden="true" />
      <span class="nav-type rounded-pill bg-blaze px-5 py-1.5 text-[14px] tracking-[0.14em] text-white">
        {{ t('trustBar.pill') }}
      </span>
      <span class="hidden h-5 w-px bg-coal-line sm:block" aria-hidden="true" />
      <p class="nav-type flex items-center gap-2 text-[15px] tracking-[0.1em] text-bone/80">
        <MapPinIcon class="h-4 w-4 text-blaze" />
        {{ t('trustBar.areas') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
